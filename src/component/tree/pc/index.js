import styles from './index.less';
import Dom from '../../../utils/dom';
import Icon from '../../../container/icon/pc';
import Button from '../../../container/button/pc';
import Tree from '../../../container/tree/pc';

const {
  sleep,
  domFunc,
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
  isIdInPathFunc,
  composedPath,
} = Dom;

const btnAddevent = (args) => {
  const {
    btns,
    mask,
    next,
  } = args;
  btns.forEach((dom) => {
    if (dom.id === 'confirm') {
      dom.addEventListener('click', () => {
        let doms = document.querySelectorAll('#thr-table-tb-container label');
        doms = Array.prototype.slice.call(doms);
        doms = doms.map(activeDom => JSON.parse(activeDom.id));
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


const eventProxy = (args) => {
  const { event, selectModel } = args;
  const domAddEvent = args.domAddEvent || document.querySelector(`.${styles.mask}`);
  if (event === 'click') {
    const handleAllEvent = (e) => {
      const path = e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
      // is add all
      const isSelectAll = isIdInPathFunc({
        path,
        id: 'select-all-checkbox',
      });
      if (isSelectAll) {
        if (isSelectAll.classList.contains(styles.allSelect)) {
          // remove all
          isSelectAll.classList.remove(styles.allSelect);
          addArrProp(document.querySelectorAll(`#tree-container > ol > li.${styles.allSelect} #checkbox`)).forEach(dom => dom.click());
          addArrProp(document.querySelectorAll(`#tree-container > ol > li.${styles.halfSelect} #checkbox`)).forEach((dom) => { dom.click(); dom.click(); });
        } else {
          // add all
          isSelectAll.classList.add(styles.allSelect);
          addArrProp(document.querySelectorAll(`#tree-container > ol > li:not(.${styles.allSelect}) #checkbox`)).forEach(dom => dom.click());
        }
      }
      // empty ，暴力清除所有
      const isEmptyDom = isIdInPathFunc({
        path: e.path,
        id: 'empty',
      });
      if (isEmptyDom) {
        addArrProp(document.querySelectorAll(`#tree-container .${styles.active}`))
          .forEach((dom) => {
            dom.classList.remove(styles.active);
          });

        addArrProp(document.querySelectorAll(`#tree-container .${styles.allSelect}`))
          .forEach((dom) => {
            dom.classList.remove(styles.allSelect);
          });

        addArrProp(document.querySelectorAll(`#tree-container .${styles.halfSelect}`))
          .forEach((dom) => {
            dom.classList.remove(styles.halfSelect);
          });
      }
      // 为第三个表格每一个列表添加点击事件, 就是点击第二个表格，由第二个表格触发第三个表格事件
      document.querySelectorAll(`#thr-table-tb-container .${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path: e.path, dom,
        });
        if (isTableList) {
          if (selectModel === 'radio') {
            document.querySelector('#empty').click();
          } else if (selectModel === 'checkbox') {
            const jsonData = dom.id;
            document.querySelector(`#tree-container li[data-json='${jsonData}']`).click();
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
        dom: document.querySelector('#thr-table-tb-container'),
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
  const thrTableContainer = document.querySelector('#thr-table-tb-container');
  const MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  const observer = new MutationObserver(() => {
    document.querySelector('#thr-table-tb-container').innerHTML = '';
    addArrProp(document.querySelectorAll(`#tree-container .${styles.active}`)).forEach((dom) => {
      const jsonData = JSON.parse(dom.dataset.json);
      const div = document.createElement('label');
      div.className = styles.tb;
      div.id = JSON.stringify(jsonData);
      div.htmlFor = jsonData;
      const html = `
        <span class="${styles.index}">&nbsp;</span>
        ${jsonData.dept_code ? `<span class="${styles.num}">${jsonData.dept_code}</span>` : ''}
        <span class="${styles.name}">${jsonData.name}</span>
        <span class="${styles.empty}">✖</span>
      `;
      div.innerHTML = html;
      // div.style.color = '#000';
      div.style.cursor = 'pointer';
      thrTableContainer.appendChild(div);
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
  // const ifselect = args.ifselect || true;
  const mask = document.createElement('div');
  mask.className = styles.mask;
  mask.innerHTML = `
    <div class="${styles.tree}">
      <header class="${styles.header}">
        请选择
      </header>
      <div class="${styles.body}">
        <div class="${styles['body-side']}" id="side"></div>
        <div class="${styles['body-container']}">
          <div class="${styles.table}">
            <div class="${styles['thr-table']}" id="thr-table">
              <div class="${styles.th}">
                <span class="${styles.index}">序号</span>
                ${data[0].corp_code ? `<span class="${styles.num}">编号</span>` : ''}
                <span class="${styles.name}">名称</span>
                <span class="${styles['empty-btn']}" id="empty">
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
  mask.querySelector('#side').appendChild(Tree({ data, beforeSelect, selectModel }));
  document.body.appendChild(mask);
  await sleep(300);
  let btns = mask.querySelectorAll(`.${styles.tree} button`);
  btns = Array.prototype.slice.call(btns);
  await btnAddevent({
    btns, mask, data: data.content, next,
  });
  // 添加观察者
  await thrTableObserver({ selectModel });
  // all event proxy
  await eventProxy({
    event: 'click',
    selectModel,
  });
  await eventProxy({
    event: 'change',
  });
};

export default tree;
