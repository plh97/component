import styles from './index.less';
import Button from '../../container/button';
import Icon from '../../container/icon';
import Dom from '../../utils/dom';

const {
  sleep,
  domFunc,
  addEvent,
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
  } = args;
  const contents = document.querySelectorAll('#sec-table-tb-container >div');
  addArrProp(contents).forEach((content) => {
    beforeSelect.forEach((select) => {
      const name = content.querySelector(`.${styles.name}`);
      if (name.innerText == select) {
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
  } = args;
  btns.forEach((dom) => {
    if (dom.classList.contains('confirm')) {
      dom.addEventListener('click', () => {
        next();
        mask.remove();
        domFunc({
          dom: document.querySelector('html'),
          style: {
            paddingRight: '0',
            overflow: 'auto',
          },
        });
      });
    } else if (dom.classList.contains('return')) {
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

  return data.map((row, i) => {
    const sec_table = document.querySelector('#sec-table-tb-container');
    const div = document.createElement('div');
    div.className = styles.tb;
    const html = `
            <input class="${styles.select}" type="checkbox"/>
            ${row.dept_code ? `<span class="${styles.num}">${row.dept_code}</span>` : ''}
            <span class="${styles.name}">${row.name}</span>
        `;
    div.innerHTML = html;
    div.id = `sec${i}`;
    div.dataset.type = row.type;
    div.style.color = '#000';
    div.style.cursor = 'pointer';
    sec_table.appendChild(div);
  });
};

const eventProxy = (args) => {
  const { event, select_model } = args;
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
            inputs.forEach(input => input.checked = false);
          }
        });
      }
      // 为第二个第三个表格每一个列表添加点击事件，tb-container
      document.querySelectorAll(`.${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path: e.path, dom,
        });
        if (isTableList) {
          if (e.path[0].type === 'checkbox') return;
          if (select_model === 'checkbox') {
            if (isTableList.querySelector('input').checked == true) {
              isTableList.querySelector('input').checked = false;
              isTableList.querySelector('input').dataset.type = false;
            } else {
              isTableList.querySelector('input').checked = true;
              isTableList.querySelector('input').dataset.type = true;
            }
          } else if (select_model === 'radio') {
            // 先清空所有
            document.querySelectorAll(`.${styles.tb}`).forEach(dom => dom.querySelector('input').checked = false);
            isTableList.querySelector('input').checked = true;
            isTableList.querySelector('input').dataset.type = true;
          }
        }
      });
    };
    document.querySelector(`.${styles['component-mask']}`).addEventListener(event, handleAllEvent, false);
  }
  if (event === 'change') {
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
    };
    document.querySelector(`.${styles['component-mask']}`).addEventListener(event, handleAllEvent, false);
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
    inputGroupAll.map((input) => {
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
        func: e => e.path.filter(e => e.className === styles.tb)[0].remove(),
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
  let {
    data,
    next,
    select_model,
    ifselect,
    beforeSelect,
  } = args;
  if (ifselect === undefined) {
    ifselect = true;
  }
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
                        <span>商品搜索：</span>
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
                            <div class="${styles['tb-container']}" id="sec-table-tb-container"></div>
                        </div>
                        <div class="${styles['thr-table']}" id="thr-table">
                            <div class="${styles.th}">
                                <span class="${styles.select}"></span>
                                ${data[0].code ? '<span class="num">编号</span>' : ''}
                                <span class="${styles.name}">名称</span>
                                <span class="${styles.empty}">
                                    ${Icon({ type: 'trash' })}
                                    清空
                                </span>
                            </div>
                            <div class="${styles['tb-container']}" id="thr-table-tb-container"></div>
                        </div>
                    </div>
                    <div class="${styles['group-btn']}">
                        ${Button({ className: 'return', text: '返回' }).outerHTML}
                        &nbsp;
                        &nbsp;
                        ${Button({ className: 'confirm btn-danger', text: '确认' }).outerHTML}
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
  await btnAddevent({ btns, mask, next });
  // 添加观察者
  await thrTableObserver();
  // all event proxy
  await eventProxy({
    event: 'click',
    select_model,
  });
  await eventProxy({
    event: 'change',
  });
  ifselect && selectBeforeFunc({
    beforeSelect,
  });
};


export default Table;
