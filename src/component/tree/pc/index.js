import styles from './index.less';
import Dom from '../../../utils/dom';
import Icon from '../../../container/icon';
import Button from '../../../container/button/pc';

const {
  sleep,
  domFunc,
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
  isIdInPathFunc,
  domToggleAnimation,
  coverDataToTree,
  composedPath,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
  } = args;
  const contents = document.querySelectorAll(`.${styles['tree-container']} .${styles['text-container']}`);
  addArrProp(contents).forEach((content) => {
    beforeSelect.forEach((select) => {
      if (content.innerText === select) {
        content.parentElement.classList.add(styles.active);
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
  data.forEach((row) => {
    const ol = document.createElement('ol');
    const isChildren = Object.prototype.hasOwnProperty.call(row, 'children');
    const html = `
      <li id='tree-list-li' data-type="${row.code || row.id}">
        <span class="${styles['text-container']}">${row.name}</span>
        ${isChildren ? Icon({ type: 'unfold' }) : ''}
      </li>
    `;
    ol.id = 'tree-list-ol';
    // ol.dataset.innerIndex = row.id.length / 2;
    ol.innerHTML += html;
    if (isChildren) {
      putDataToFirTable({
        data: row.children,
        container: ol,
      });
    }
    container.appendChild(ol);
  });
};


const eventProxy = (args) => {
  const { event, selectModel } = args;
  const domAddEvent = args.domAddEvent || document.querySelector(`.${styles.mask}`);
  if (event === 'click') {
    const handleAllEvent = (e) => {
      const path = e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
      // toggle show all with first table
      const isShowAllInPath = isDomInPathFunc({
        path,
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
          path,
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
      // 对于可以选择的dom元素 添加点击active的样式
      const isIdInPath = isIdInPathFunc({
        path,
        id: 'tree-list-li',
      });
      if (isIdInPath && !isIdInPath.querySelector('.icon-unfold')) {
        console.log(isIdInPath);
        if (selectModel === 'radio') {
          addArrProp(document.querySelectorAll(`.${styles.active}`)).forEach((activeDom) => {
            activeDom.classList.remove(`${styles.active}`);
          });
          isIdInPath.classList.toggle(`${styles.active}`);
        } else if (selectModel === 'checkbox') {
          // if select more
          isIdInPath.classList.toggle(`${styles.active}`);
        }
      }

      // let selectInput = document.querySelectorAll('#tree-list-li');
      // selectInput = addArrProp(selectInput).filter(dom => !dom.querySelector('svg.icon-unfold'));
      // selectInput.forEach((dom) => {
      //   const isSelectDomInPath = isDomFunc({
      //     path: e.path, dom,
      //   });
      //   if (isSelectDomInPath) {
      //     // if select one
      //     if (selectModel === 'radio') {
      //       addArrProp(document.querySelectorAll(`.${styles.active}`)).forEach((activeDom) => {
      //         activeDom.classList.remove(`${styles.active}`);
      //       });
      //       isSelectDomInPath.classList.toggle(`${styles.active}`);
      //     } else if (selectModel === 'checkbox') {
      //       // if select more
      //       isSelectDomInPath.classList.toggle(`${styles.active}`);
      //     }
      //   }
      // });
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
            inputs.forEach((inputDom) => { inputDom.checked = false; });
          }
        });
      }
      // 为第三个表格每一个列表添加点击事件, 就是点击第二个表格，由第二个表格触发第三个表格事件
      document.querySelectorAll(`#thr-table-tb-container .${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path: e.path, dom,
        });
        if (isTableList) {
          const tableListIndex = isTableList.dataset.index;
          if (selectModel === 'radio') {
            document.querySelector('#empty').click();
          } else if (selectModel === 'checkbox') {
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
  }
};


const thrTableObserver = () => {
  const treeContainer = document.querySelector('#tree-container');
  const secTableContainer = document.querySelector('#thr-table-tb-container');
  const MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  const observer = new MutationObserver((mutations) => {
    const target = mutations.filter(mutation => mutation.target.dataset.active === 'true');
    if (!target.length) return;
    const index = target[0].target.dataset.type;
    let allDom = secTableContainer.querySelectorAll('input');
    allDom = addArrProp(allDom).map(dom => dom.parentElement);
    let showDom = secTableContainer.querySelectorAll('label');
    const regex = new RegExp(`^${index}`);
    showDom = addArrProp(showDom).filter(dom => dom.dataset.type.match(regex));
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
  observer.observe(treeContainer, config);
};


const tree = async (args) => {
  const {
    data,
    next,
    beforeSelect,
  } = args;
  const selectModel = args.select_model;
  console.log('拿到的数据：', data);
  window.top.dataa = data;
  const ifselect = args.ifselect || true;
  const mask = document.createElement('div');
  mask.className = styles.mask;
  mask.innerHTML = `
    <div class="${styles.tree}">
      <header class="${styles.header}">
        请选择
      </header>
      <div class="${styles.body}">
        <div class="${styles['body-side']}" id="side">
          <div class="${styles.all}" id="all">
            ${Icon({ type: 'navlist' })}
            <span class="${styles['text-container']}">全部</span>
            ${Icon({ type: 'unfold' })}
          </div>
          <div class="${styles['tree-container']}" id='tree-container'></div>
        </div>
        <div class="${styles['body-container']}">
          <div class="${styles.table}">
            <div class="${styles['thr-table']}" id="thr-table">
              <div class="${styles.th}">
                <span class="${styles.select}">
                </span>
                ${data[0].corp_code ? `<span class="${styles.num}">编号</span>` : ''}
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
    data: coverDataToTree(data),
    container: document.querySelector(`.${styles['tree-container']}`),
  });
  let btns = mask.querySelectorAll(`.${styles.tree} button`);
  btns = Array.prototype.slice.call(btns);
  await btnAddevent({
    btns, mask, data: data.content, next,
  });
  // 添加观察者
  await thrTableObserver();
  // all event proxy
  await eventProxy({
    event: 'click',
    selectModel,
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

export default tree;
