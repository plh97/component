import styles from './index.less';
import Dom from '../../../utils/dom';
import Icon from '../../../container/icon/pc';
import Button from '../../../container/button/pc';

const {
  domFunc,
  isDomFunc,
  addArrProp,
  isIdInPathFunc,
  composedPath,
  fetchData,
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
  const {
    event, selectModel, domAddEvent,
  } = args;
  if (event === 'click') {
    const handleAllEvent = (e) => {
      const secTableContainer = document.querySelector('#sec-table-tb-container');
      const thrTableContainer = document.querySelector('#thr-table-tb-container');
      const path = e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
      // empty ，暴力清除所有
      const isEmptyDom = isIdInPathFunc({
        id: 'empty',
        path,
      });
      if (isEmptyDom) {
        secTableContainer.querySelectorAll(':checked').forEach(dom => dom.checked = false);
        thrTableContainer.innerHTML = ``;
      }
      // 为第三个表格每一个列表添加点击事件, 就是点击第二个表格，由第二个表格触发第三个表格事件
      document.querySelectorAll(`#thr-table-tb-container .${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path, dom,
        });
        if (isTableList) {
          if (selectModel === 'radio') {
            document.querySelector('#empty').click();
          } else if (selectModel === 'checkbox') {
            const jsonData = dom.id;
            secTableContainer.querySelector(`label[data-json='${jsonData}']`).click();
          }
        }
      });
      const bodyContainer = document.querySelector(`.${styles['body-container']}`);
      // 是否弹出表格
      const isTableContainer = isIdInPathFunc({
        path,
        id: 'thr-table',
      });
      const isShow = isIdInPathFunc({
        path,
        id: 'show',
      });
      if (isTableContainer) {
        bodyContainer.classList.remove(styles.hide)
      } else if (isShow) {
        bodyContainer.classList.toggle(styles.hide)
      }else {
        bodyContainer.classList.add(styles.hide)
      }

      // 为第二个表格每一个列表添加点击事件，tb-container
      const isTableList = isDomFunc({
        path: e.path,
        dom: document.querySelector('#sec-table-tb-container'),
      });
      if (isTableList) {
        isTableList.dataset.select = Math.random();
      }
      // sync the num with 
      setTimeout(() => {
        document.querySelector(`.${styles.num} font`).innerHTML=document.querySelectorAll('#sec-table-tb-container > label > input:checked').length;
      }, 5);
    };
    domAddEvent.addEventListener(event, handleAllEvent);
  }
};

const putDataToSecTable = async ({data , selectModel}) => {
  // 将数据传入data之前先清空 container
  let secTableInputs = document.querySelector('#sec-table-tb-container');
  secTableInputs = Array.prototype.slice.call(secTableInputs);
  secTableInputs.map(input => input.parentElement.remove());
  data.forEach((row, i) => {
    const secTable = document.querySelector('#sec-table-tb-container');
    const div = document.createElement('label');
    div.className = styles.tb;
    div.dataset.index = i;
    div.dataset.json = JSON.stringify(row);
    div.htmlFor = `select-second-${i}`;
    const html = `
        <input class="${styles.select}" type="${selectModel}" name="select" id="select-second-${i}"/>
        <span class="${styles.name}">${row.name}</span>
    `;
    div.innerHTML = html;
    div.id = `sec${i}`;
    div.dataset.type = row.type || row.goods_code || row.corp_code || row.id;
    div.style.color = '#000';
    div.style.cursor = 'pointer';
    secTable.appendChild(div);
  });
};


const thrTableObserver = () => {
  const secTableContainer = document.querySelector('#sec-table-tb-container');
  const thrTableContainer = document.querySelector('#thr-table-tb-container');
  const MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  const observer = new MutationObserver(() => {
    document.querySelector('#thr-table-tb-container').innerHTML = '';
    addArrProp(secTableContainer.querySelectorAll(` input:checked`)).forEach((dom) => {
      const jsonData = JSON.parse(dom.parentElement.dataset.json);
      const div = document.createElement('label');
      div.className = styles.tb;
      div.id = JSON.stringify(jsonData);
      const html = `
        <span class="${styles.name}">${jsonData.name}</span>
        <span class="${styles.empty}">㊀</span>
      `;
      div.innerHTML = html;
      // div.style.color = '#000';
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
  observer.observe(secTableContainer, config);
};


const table = async (args) => {
  const {
    data,
    next,
    beforeSelect,
    pars,
  } = args;
  const selectModel = args.select_model;
  // 表格 初始化的时候就显示
  // 树做侧边弹出
  console.log('table mobile 拿到的数据', data);
  window.top.dataa = data;
  const ifselect = args.ifselect || true;
  const mask = document.createElement('div');
  mask.className = styles.mask;
  mask.innerHTML = `
    <div class="${styles.table}">
      <header class="${styles.header}">
        ${Icon({ type: '<', id: 'return' })}
        <span>请选择</span>
        <span class="${styles.right}"></span>
      </header>
      <div class="${styles.body}">
        <div class="${styles['body-container']} ${styles.hide}">
          <div class="${styles.table}">

            <div class="${styles['thr-table']}" id="thr-table">
              <div class="${styles.th}">
                <span class="${styles.name}">已选择</span>
                <span class="${styles['empty-btn']}" id="empty">
                  ${Icon({ type: 'trash' })}
                  清空
                </span>
              </div>
              <div class="${styles['tb-container']}" id="thr-table-tb-container"></div>
            </div>

          </div>
        </div>
      </div>
      
      <div class="${styles['sec-table']}" id="sec-table">
        <div class="${styles.th}">
          <span class="${styles.select}">
            ${selectModel==='checkbox'?`
              <input id="select-all" type="checkbox"/> 
              <label for="select-all">全选</label>
            `:``}
          </span>
          <span class="${styles.name}">名称</span>
          <span class="${styles.btn}" id="show-tree">筛选</span>
        </div>
        <form class="${styles['tb-container']}" id="sec-table-tb-container"></form>
      </div>

      <footer class="${styles.footer}">
        ${Icon({ type: 'daocheng', id: 'daocheng' })}
        <span class="${styles.num}">
          已选择
          <font>${0}</font>
          人
        </span>
        <span class="${styles.iconfont}" id="show">
          查看
          ${Icon({ type: '>' })}
        </span>
        <span class="${styles.confirm}" id="confirm">确认</span>
      </footer>
    </div>`;
  document.body.appendChild(mask);
  // await sleep(300);
  await btnAddevent({
    btns: [
      document.querySelector('#return'),
      document.querySelector('#confirm')
    ], mask, data: data.content, next,
  });
  await putDataToSecTable({
    data: data.content,
    selectModel
  });
  // 添加观察者
  await thrTableObserver({ selectModel });
  // all event proxy
  await eventProxy({
    event: 'click',
    selectModel,
    domAddEvent: mask,
  });
  // await eventProxy({
  //   event: 'change',
  // });
  // 隐藏滚动条
  domFunc({
    dom: document.querySelector('html'),
    style: {
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden',
    },
  });
};

export default table;
