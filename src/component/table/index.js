import styles from './index.less';
import Button from '../../container/button/pc';
import Icon from '../../container/icon/pc';
import Dom from '../../utils/dom';

const {
  sleep,
  domFunc,
  addEvent,
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
  isNumeric,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
  } = args;
  const contents = document.querySelectorAll('#sec-table-tb-container >div');
  addArrProp(contents).forEach((content) => {
    beforeSelect.forEach((select) => {
      const name = content.querySelector(`.${styles.name}`);
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
    data,
    next,
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

const putDataToSecTable = async (data) => {
  // 将数据传入data之前先清空 container
  let secTableInputs = document.querySelector('#sec-table-tb-container');
  secTableInputs = Array.prototype.slice.call(secTableInputs);
  secTableInputs.map(input => input.parentElement.remove());

  data.forEach((row, i) => {
    const secTable = document.querySelector('#sec-table-tb-container');
    const div = document.createElement('label');
    div.className = styles.tb;
    const html = `
      <input class="${styles.select}" type="${select_model}" name="select" id="select-second-${i}"/>
      ${row.dept_code ? `<span class="${styles.num}">${row.dept_code}</span>` : ''}
      <span class="${styles.name}">${row.name}</span>
    `;
    div.innerHTML = html;
    div.htmlFor = `select-second-${i}`;
    div.id = `sec${i}`;
    div.dataset.index = i;
    div.dataset.type = row.type;
    div.style.color = '#000';
    div.style.cursor = 'pointer';
    secTable.appendChild(div);
  });
};

const eventProxy = (args) => {
  const { event } = args;
  const domAddEvent = args.domAddEvent || document.querySelector(`.${styles['component-mask']}`);
  if (event === 'click') {
    const handleAllEvent = (e) => {
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
          const tableListIndex = isTableList.dataset.index;
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
      const searchValue = e.target.value.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
      const allList = document.querySelector('#sec-table-tb-container').children;
      const filterList = addArrProp(allList).filter((list) => {
        if (isNumeric(e.target.value)) {
          var keyValue = list.querySelector(`.${styles.num}`).innerText;
          var regex = new RegExp(`^${searchValue}`);
        } else {
          var keyValue = list.querySelector(`.${styles.name}`).innerText;
          var regex = new RegExp(`${searchValue}`);
        }
        return keyValue.match(regex);
      });
      addArrProp(allList).forEach(dom => dom.style.display = 'none');
      addArrProp(filterList).forEach(dom => dom.style.display = 'flex');
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  }
};

const thrTableObserver = () => {
  // //不适合单独监听啊，，直接复制选中的元素好了，垃圾算法
  const secTableContainer = document.querySelector('#sec-table-tb-container');
  const thrTableContainer = document.querySelector('#thr-table-tb-container');
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  const observer = new MutationObserver(() => {
    let inputGroupAll = thrTableContainer.querySelectorAll('input');
    inputGroupAll = Array.prototype.slice.call(inputGroupAll);
    inputGroupAll.forEach((input) => {
      input.parentElement.remove();
    });
    let inputGroup = secTableContainer.querySelectorAll('input:checked');
    inputGroup = Array.prototype.slice.call(inputGroup);
    inputGroup.map((input, i) => {
      const div = input.parentElement;
      const newChild = div.cloneNode(true);
      const oldChild = thrTableContainer.querySelector(`div:nth-child(${i + 1})`);
      newChild.style.display = 'flex';
      addEvent({
        dom: newChild,
        envet: 'click',
        func: e => e.path.filter(_e => _e.className === styles.tb)[0].remove(),
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


const Table = async (args) => {
  const {
    data,
    next,
    beforeSelect,
  } = args;
  window.select_model = args.select_model;
  const ifselect = args.ifselect || true;
  console.log('拿到的数据：', data);
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
        <div class="${styles['component-table']}">
            <header class="${styles['component-table-header']}">
                请选择
            </header>
            <div class="${styles['component-table-body']}">
                <div class="${styles['component-table-body-container']}">
                    <span class="${styles['search-container']}">
                        <span>列表搜索：</span>
                        <span class="${styles.search}">
                            <input type="${styles.text}">
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
                                ${data[0].code ? `<span class="${styles.num}">编号</span>` : ''}
                                <span class="${styles.name}">名称</span>
                            </div>
                            <form class="${styles['tb-container']}" id="sec-table-tb-container"></form>
                        </div>
                        <div class="${styles['thr-table']}" id="thr-table">
                            <div class="${styles.th}">
                                <span class="${styles.select}"></span>
                                ${data[0].code ? `<span class="${styles.num}">编号</span>` : ''}
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
        </div>
    `;

  domFunc({
    dom: document.querySelector('html'),
    style: {
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden',
    },
  });
  document.body.appendChild(mask);
  await sleep(300);
  await putDataToSecTable(data);
  let btns = mask.querySelectorAll(`.${styles['component-table']} button`);
  btns = Array.prototype.slice.call(btns);
  await btnAddevent({
    btns, mask, data, next,
  });
  // 添加观察者
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


export default Table;
