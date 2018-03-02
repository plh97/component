import styles from './index.less';
import Dom from '../../utils/dom';
import Icon from '../../container/icon';
import Button from '../../container/button';

const {
  sleep,
  domFunc,
  addEvent,
  isDomFunc,
  addArrProp,
  showDomFunc,
  isDomInPathFunc,
  domToggleAnimation,
  coverDataToTree,
  isNumeric,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
  } = args;
  const contents = document.querySelectorAll('#sec-table-tb-container >div');
  addArrProp(contents).forEach((content) => {
    beforeSelect.forEach((select) => {
      const name = content.querySelector('span:last-child');
      if (name.innerText === select) {
        content.click();
      }
    });
  });
};

const btnAddevent = (args) => {
  const {
    btns,
    mask,
    next,
    data,
  } = args;
  btns.forEach((dom) => {
    if (dom.id === 'confirm') {
      dom.addEventListener('click', () => {
        let doms = document.querySelectorAll('#thr-table-tb-container input');
        doms = Array.prototype.slice.call(doms);
        doms = doms.map(activeDom => data[activeDom.parentElement.dataset.index]);
        console.log('输出的数据：', doms);
        next(doms);
        mask.remove();
        domFunc({
          dom: document.querySelector('html'),
          style: {
            paddingRight: '0',
            overflow: 'auto',
          },
        });
      });
    } else if (dom.id === 'return') {
      dom.addEventListener('click', () => {
        mask.remove();
        domFunc({
          dom: document.querySelector('html'),
          style: {
            paddingRight: '0',
            overflow: 'auto',
          },
        });
      });
    }
  });
};


const putDataToFirTable = async (args) => {
  const {
    data,
    container,
  } = args;
  data.forEach((row, i) => {
    const ol = document.createElement('ol');
    const isChildren = Object.prototype.hasOwnProperty.call(row, 'children');
    const html = `
      <li class='tree-container-list-div' data-type="${row.id}">
        <span class="${styles['text-container']}">${row.name}</span>
        ${isChildren ? Icon({ type: 'unfold' }) : ''}
      </li>
    `;
    ol.className = 'tree-container-list';
    // ol.dataset.innerIndex = row.id.length / 2;
    ol.innerHTML += html;
    ol.id = `sec${i}`;
    if (isChildren) {
      putDataToFirTable({
        data: row.children,
        container: ol,
      });
    }
    container.appendChild(ol);
  });
};

const putDataToSecTable = async (data) => {
  // 将数据传入data之前先清空 container
  let secTableInputs = document.querySelector('#sec-table-tb-container');
  secTableInputs = Array.prototype.slice.call(secTableInputs);
  secTableInputs.map(input => input.parentElement.remove());
  data.forEach((row, i) => {
    const secTable = document.querySelector('#sec-table-tb-container');
    const div = document.createElement('label');
    div.className = styles.tb;
    div.dataset.index = i;
    div.htmlFor = `select-second-${i}`;
    const html = `
        <input class="${styles.select}" type="${select_model}" name="select" id="select-second-${i}"/>
        ${row.dept_code ? `<span class="${styles.num}">${row.dept_code}</span>` : ''}
        <span class="${styles.name}">${row.name}</span>
    `;
    div.innerHTML = html;
    div.id = `sec${i}`;
    div.dataset.type = row.type;
    div.style.color = '#000';
    div.style.cursor = 'pointer';
    secTable.appendChild(div);
  });
};

const eventProxy = (args) => {
  const { event } = args;
  const domAddEvent = args.domAddEvent || document.querySelector(`.${styles['component-mask']}`)
  if (event === 'click') {
    const handleAllEvent = (e) => {
      // toggle show all with first table
      const isShowAllInPath = isDomInPathFunc({
        path: e.path,
        selector: '#all',
      });
      if (isShowAllInPath) {
        // add some animation
        const more = isShowAllInPath.querySelector('.icon-unfold');
        domToggleAnimation({
          dom: more,
          animationDuration: '0.3s',
          animationFillMode: 'forwards',
          animationName: [styles['rotate-90'], styles.rotate90],
        });
        const listContainer = isShowAllInPath.parentElement.querySelector(`.${styles['tree-container']}`);
        domToggleAnimation({
          dom: listContainer,
          animationDuration: '0.3s',
          animationFillMode: 'forwards',
          animationName: [styles.slidein, styles.slideout],
        });
      }
      // toggle show the tree list in first table
      let openList = document.querySelectorAll(`.${styles['tree-container']} .icon-unfold`);
      openList = Array.prototype.slice.call(openList);
      openList.forEach((dom) => {
        const isListInPath = isDomFunc({
          path: e.path,
          dom: dom.parentElement,
        });
        if (isListInPath) {
          // add some animation
          domToggleAnimation({
            dom,
            animationDuration: '0.3s',
            animationFillMode: 'forwards',
            animationName: [styles['rotate-90'], styles.rotate90],
          });
          const listContainer = isListInPath.parentElement;
          domToggleAnimation({
            dom: listContainer,
            animationDuration: '0.3s',
            animationFillMode: 'forwards',
            animationName: [styles.slidein, styles.slideout],
          });
        }
      });
      // filter second table
      let firstTableLists = document.querySelectorAll('.tree-container-list-div');
      firstTableLists = Array.prototype.slice.call(firstTableLists);
      firstTableLists.forEach((list) => {
        const isDomInPath = isDomFunc({
          path: e.path,
          dom: list,
        });
        if (isDomInPath) {
          let allList = document.querySelectorAll(`.${styles['tree-container']} .${styles.active}`);
          allList = Array.prototype.slice.call(allList);
          allList.forEach((dom) => {
            dom.dataset.active = false;
            dom.classList.remove(styles.active);
          });
          isDomInPath.dataset.active = true;
          isDomInPath.classList.add(styles.active);
        }
      });
      // empty
      const isEmptyDom = isDomInPathFunc({
        path: e.path,
        selector: `.${styles.empty}`,
      });
      if (isEmptyDom) {
        let inputs = isEmptyDom.parentElement.parentElement.querySelectorAll(`.${styles['tb-container']} .${styles.select}`);
        inputs.forEach((input) => {
          if (input.parentElement.style.display !== 'none') {
            input.parentElement.remove();
            inputs = document.querySelectorAll(`.${styles['sec-table']} input`);
            inputs.forEach(inputDom => inputDom.checked = false);
          }
        });
      }
      // 为第三个表格每一个列表添加点击事件, 就是点击第二个表格，由第二个表格触发第三个表格事件
      document.querySelectorAll(`#thr-table-tb-container .${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path: e.path, dom,
        });
        if (isTableList) {
          let tableListIndex = isTableList.dataset.index;
          if (select_model === 'radio') {
            document.querySelector('#empty').click();
          } else if (select_model === 'checkbox') {
            document.querySelector(`#sec-table-tb-container label:nth-child(${Number(tableListIndex) + 1})`).click();
          }
        }
      });
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  } else if (event === 'change') {
    // change 事件
    const handleAllEvent = (e) => {
      // selectAll
      const isSelectAllDom = isDomInPathFunc({
        path: e.path,
        selector: '#select-all',
      });
      if (isSelectAllDom) {
        const inputs = isSelectAllDom.parentElement.parentElement.parentElement.querySelectorAll(`.${styles['tb-container']} .${styles.select}`);
        inputs.forEach((input) => {
          if (input.parentElement.style.display !== 'none') {
            input.checked = e.target.checked;
            input.dataset.checked = e.target.checked;
          }
        });
      }
      // selectReverse
      const isSelectReverseDom = isDomInPathFunc({
        path: e.path,
        selector: '#select-reverse',
      });
      if (isSelectReverseDom) {
        const inputs = isSelectReverseDom.parentElement.parentElement.parentElement.querySelectorAll(`.${styles['tb-container']} .${styles.select}`);
        inputs.forEach((input) => {
          if (input.parentElement.style.display !== 'none') {
            input.checked = !input.checked;
            input.dataset.checked = input.checked;
          }
        });
      }
      // 为第二个表格每一个列表添加点击事件，tb-container
      const isTableList = isDomFunc({
        path: e.path,
        dom: document.querySelector('#sec-table-tb-container'),
      });
      if (isTableList) {
        isTableList.dataset.select = Math.random();
      }
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  } else if (event === 'keyup') {
    const handleAllEvent = (e) => {
      const activeDom = document.querySelector(`.${styles.active}`);
      activeDom && activeDom.classList.remove(styles.active);
      const searchValue = e.target.value.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
      const allList = document.querySelector('#sec-table-tb-container').children;
      const filterList = addArrProp(allList).filter(list => {
        if (isNumeric(e.target.value)) {
          var keyValue = list.querySelector(`.${styles.num}`).innerText;
          var regex = new RegExp(`^${searchValue}`);
        } else {
          var keyValue = list.querySelector(`.${styles.name}`).innerText;
          var regex = new RegExp(`${searchValue}`);
        }
        return keyValue.match(regex)
      })
      addArrProp(allList).forEach(dom => dom.style.display = 'none')
      addArrProp(filterList).forEach(dom => dom.style.display = 'flex')
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  }
};


const secTableObserver = () => {
  const firTableContainer = document.querySelector(`.${styles['tree-container']}`);
  const secTableContainer = document.querySelector('#sec-table-tb-container');
  const MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  const observer = new MutationObserver((mutations) => {
    const target = mutations.filter(mutation => mutation.target.dataset.active === 'true');
    if (!target.length) return;
    const index = target[0].target.dataset.type;
    let allDom = secTableContainer.querySelectorAll('input');
    allDom = addArrProp(allDom).map(dom => dom.parentElement);
    let showDom = secTableContainer.querySelectorAll('input');
    showDom = addArrProp(showDom)
      .map(dom => dom.parentElement)
      .filter(dom => dom.dataset.type === index);
    showDomFunc({
      allDom,
      showDom,
    });
  });
  // 配置观察选项:
  const config = {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true,
  };
  observer.observe(firTableContainer, config);
};

const thrTableObserver = () => {
  // 监听第二个表格， 当第二个表格属性变化的时候，第三个表格 => 第二个表格input.checked 同步
  const secTableContainer = document.querySelector('#sec-table-tb-container');
  const thrTableContainer = document.querySelector('#thr-table-tb-container');
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  const observer = new MutationObserver(() => {
    // 将第三个表格全部列表移除
    let inputGroupAll = thrTableContainer.querySelectorAll('input');
    inputGroupAll = Array.prototype.slice.call(inputGroupAll);
    inputGroupAll.forEach((input) => {
      input.parentElement.remove();
    });
    let inputGroup = secTableContainer.querySelectorAll('input:checked');
    inputGroup = Array.prototype.slice.call(inputGroup);
    inputGroup.forEach((input, i) => {
      const div = input.parentElement;
      const newChild = div.cloneNode(true);
      const oldChild = thrTableContainer.querySelector(`div:nth-child(${i + 1})`);
      newChild.style.display = 'flex';
      addEvent({
        dom: newChild,
        envet: 'click',
        func: e => e.path.filter(ee => ee.className === styles.tb)[0].remove(),
      });
      thrTableContainer.insertBefore(newChild, oldChild);
      newChild.scrollIntoView({ behavior: 'instant', block: 'end', inline: 'nearest' });
    });
  });
  const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  observer.observe(secTableContainer, config);
};


const treeTable = async (args) => {
  const {
    data,
    next,
    beforeSelect,
  } = args;
  window.select_model = args.select_model;
  console.log('拿到的数据：', data);
  const ifselect = args.ifselect || true;
  // ifselect == undefined ? (ifselect = true) : '';
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
    <div class="${styles['component-treeTable']}">
      <header class="${styles['component-treeTable-header']}">
        请选择
      </header>
      <div class="${styles['component-treeTable-body']}">
        <div class="${styles['component-treeTable-body-side']}" id="side">
          <div class="${styles.all}" id="all">
            ${Icon({ type: 'navlist' })}
            <span class="${styles['text-container']}">全部</span>
            ${Icon({ type: 'unfold' })}
          </div>
          <div class="${styles['tree-container']}"></div>
          <div class="${styles['flex-container']}"></div>
        </div>
        <div class="${styles['component-treeTable-body-container']}">
          <span class="${styles['search-container']}">
            <span>列表搜索：</span>
            <span class="${styles.search}">
              <input id="search" type="text">
              <span>搜索</span>
            </span>
          </span>
          <div class="${styles.table}">
            <div class="${styles['sec-table']}" id="sec-table">
                <div class="${styles.th}">
                  <span class="${styles.select}">
                    ${select_model === 'checkbox' ? `
                      <input id="select-all" type="checkbox"/> 
                      <label for="select-all">全选</label>
                      <input id="select-reverse" type="checkbox"/> 
                      <label for="select-reverse">反选</label>
                    ` : ''}
                  </span>
                  ${data.content[0] ? (data.content[0].code ? `<span class="${styles.num}">编号</span>` : '') : ""}
                  <span class="${styles.name}">名称</span>
                </div>
                <form class="${styles['tb-container']}" id="sec-table-tb-container"></form>
              </div>
              <div class="${styles['thr-table']}" id="thr-table">
                <div class="${styles.th}">
                  <span class="${styles.select}">
                  </span>
                  ${data.content[0] ? (data.content[0].code ? `<span class="${styles.num}">编号</span>` : '') : ""}
                  <span class="${styles.name}">名称</span>
                  <span class="${styles.empty}" id="empty">
                    ${Icon({ type: 'trash' })}
                    清空
                  </span>
                </div>
                <div class="${styles['tb-container']}" id="thr-table-tb-container"></div>
              </div>
          </div>
          <div class="${styles['group-btn']}">
            ${Button({ id: 'return', text: '返回', type: 'daocheng-cancel' }).outerHTML}
            &nbsp;
            &nbsp;
            ${Button({ id: 'confirm', text: '确认', type: 'daocheng-confirm' }).outerHTML}
          </div>
        </div>
      </div>
    </div>`;
  domFunc({
    dom: document.querySelector('html'),
    style: {
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden',
    },
  });
  document.body.appendChild(mask);
  await sleep(300);
  await putDataToFirTable({
    data: coverDataToTree(data.title),
    container: document.querySelector(`.${styles['tree-container']}`),
  });
  await putDataToSecTable(data.content);
  let btns = mask.querySelectorAll(`.${styles['component-treeTable']} button`);
  btns = Array.prototype.slice.call(btns);
  await btnAddevent({
    btns, mask, data: data.content, next,
  });
  // 添加观察者
  await secTableObserver();
  await thrTableObserver();
  // all event proxy
  await eventProxy({
    event: 'click',
  });
  await eventProxy({
    event: 'change',
  });
  await eventProxy({
    event: 'keyup',
    domAddEvent: document.querySelector('#search'),
  });
  if (ifselect) {
    selectBeforeFunc({
      beforeSelect,
    });
  }
};

export default treeTable;
