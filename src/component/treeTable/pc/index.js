import styles from './index.less';
import Dom from '../../../utils/dom';
import Icon from '../../../container/icon/pc';
import Button from '../../../container/button/pc';
import Tree from '../../../container/tree/pc';

const {
  domFunc,
  isDomFunc,
  addArrProp,
  showDomFunc,
  isDomInPathFunc,
  isNumeric,
  fetchData,
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
  } = args;
  btns.forEach((dom) => {
    if (dom.id === 'confirm') {
      dom.addEventListener('click', () => {
        let doms = document.querySelectorAll('#thr-table-tb-container label');
        doms = Array.prototype.slice.call(doms);
        doms = doms.map(activeDom => JSON.parse(activeDom.id));
        console.log('输出的数据：', doms);
        doms.length > 0 && next(doms);
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
    div.dataset.index = i;
    div.htmlFor = `select-second-${i}`;
    // 有编码就显示编码
    // 有规格就显示规格
    // 有单位就显示单位
    const html = `
      <input class="${styles.select}" type="${select_model}" name="select" id="select-second-${i}"/>
      ${row.goods_code ? `<span class="${styles.num}">${row.goods_code}</span>` : ''}
      <span class="${styles.name}">${row.name}</span>
      ${row.standard_name ? `<span class="${styles.num}">${row.standard_name}</span>` : ''}
      ${row.unit_name ? `<span class="${styles.num}">${row.unit_name}</span>` : ''}
      ${row.use_number ? `<span class="${styles.num}">${row.use_number}</span>` : ''}
    `;
    div.innerHTML = html;
    div.id = `sec${i}`;
    div.dataset.json = JSON.stringify(row);
    div.dataset.type = row.type || row.goods_code || row.corp_code || row.id;
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
      // filter second table
      let firstTableLists = document.querySelectorAll('.tree-container-list-div');
      firstTableLists = Array.prototype.slice.call(firstTableLists);
      firstTableLists.forEach((list) => {
        const isDomInPath = isDomFunc({
          path: e.path,
          dom: list,
        });
        if (isDomInPath) {
          const allList = document.querySelectorAll(`.${styles['tree-container']} .${styles.active}`);
          addArrProp(allList).forEach((dom) => {
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
        selector: `.${styles['empty-btn']}`,
      });
      if (isEmptyDom) {
        const inputs = document.querySelectorAll('#sec-table-tb-container input:checked');
        inputs.forEach((input) => {
          input.click();
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
        let keyValue;
        let regex;
        if (isNumeric(e.target.value)) {
          keyValue = list.querySelector(`.${styles.num}`).innerText;
          regex = new RegExp(`^${searchValue}`);
        } else {
          keyValue = list.querySelector(`.${styles.name}`).innerText;
          regex = new RegExp(`${searchValue}`);
        }
        return keyValue.match(regex);
      });
      addArrProp(allList).forEach((dom) => { dom.style.display = 'none'; });
      addArrProp(filterList).forEach((dom) => { dom.style.display = 'flex'; });
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  }
};


const secTableObserver = ({ treeStyles, pars }) => {
  const firTableContainer = document.querySelector('#tree-container');
  const secTableContainer = document.querySelector('#sec-table-tb-container');
  const MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  const observer = new MutationObserver(async(mutations) => {
    const activeDom = firTableContainer.querySelector(`.${treeStyles.active}`);
    const jsonData = JSON.parse(activeDom.dataset.json);
    const getData = await fetchData({
      url: pars.parame.detailUrl,
      data: `&${pars.parame.parame}=${jsonData.id}`,
    });
    // console.log('pars', getData);
    const index = activeDom.dataset.type;
    let allDom = secTableContainer.querySelectorAll('input');
    allDom = addArrProp(allDom).map(dom => dom.parentElement);
    let showDom = secTableContainer.querySelectorAll('label');
    // const regex = new RegExp(`^${index}`);
    // showDom = addArrProp(showDom).filter(dom => {
    //   // getData.forEach(arr=>{
    //   //   dom.dataset.json === arr
    //   // })
    //   // dom.dataset.json === 
    // });
    showDom = getData.map(arr=>{
      return allDom.filter(dom=>{
        // console.log(JSON.parse(dom.dataset.json),arr);
        return JSON.parse(dom.dataset.json).id === arr.id;
      })[0]
    })
    // console.log(showDom);
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
    thrTableContainer.innerHTML = '';
    addArrProp(secTableContainer.querySelectorAll('input:checked')).forEach((dom) => {
      const jsonData = JSON.parse(dom.parentElement.dataset.json);
      const div = document.createElement('label');
      div.className = styles.tb;
      div.id = JSON.stringify(jsonData);
      div.dataset.index = dom.parentElement.dataset.index;
      div.htmlFor = jsonData;
      const html = `
        <span class="${styles.index}">&nbsp;</span>
        <span class="${styles.name}">${jsonData.name}</span>
        <span class="${styles.empty}">☒</span>
      `;
      div.innerHTML = html;
      // div.style.color = '#000';
      div.style.cursor = 'pointer';
      thrTableContainer.appendChild(div);
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
    pars,
  } = args;
  window.select_model = args.select_model;
  window.selectModel = args.select_model;
  console.log('拿到的数据：', data);
  window.top.dataa = data;
  const ifselect = args.ifselect || true;
  // ifselect == undefined ? (ifselect = true) : '';
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
    <div class="${styles['component-treeTable']}">
      <header class="${styles['component-treeTable-header']}">请选择</header>
      <div class="${styles['component-treeTable-body']}">
        <div class="${styles['component-treeTable-body-side']}" id="side"></div>
        <div class="${styles['component-treeTable-body-container']}">
          <div class="${styles.table}">
            <div class="${styles['sec-table']}" id="sec-table">
              <span class="${styles.thh}">
                <span class="${styles.search}">
                  <input id="search" type="text">
                  <span>搜索</span>
                </span>
              </span>
              <div class="${styles.th}">
                <span class="${styles.select}">
                  ${select_model === 'checkbox' ? `
                    <input id="select-all" type="checkbox"/> 
                    <label for="select-all">全选</label>
                  ` : ''}
                </span>
                ${data.content[0] ? (data.content[0].goods_code ? `<span class="${styles.num}">编号</span>` : '') : ''}
                <span class="${styles.name}">名称</span>
                ${data.content[0] ? (data.content[0].standard_name ? `<span class="${styles.num}">规格</span>` : '') : ''}
                ${data.content[0] ? (data.content[0].unit_name ? `<span class="${styles.num}">单位</span>` : '') : ''}
                ${data.content[0] ? (data.content[0].use_number ? `<span class="${styles.num}">可用数量</span>` : '') : ''}
              </div>
              <form class="${styles['tb-container']}" id="sec-table-tb-container"></form>
              <span class="${styles.tbb}">
              </span>
            </div>
            <div class="${styles['thr-table']}" id="thr-table">
              <h3 class="${styles.thh} ${styles.title}">当前已选中</h3>
              <div class="${styles.th}">
                <span class="${styles.index}">序号</span>
                <span class="${styles.name}">名称</span>
                <span class="${styles['empty-btn']}" id="empty">
                  ${Icon({ type: 'trash' })}
                  清空
                </span>
              </div>
              <div class="${styles['tb-container']}" id="thr-table-tb-container"></div>
              <span class="${styles.tbb}">
                ${Button({ id: 'return', text: '返回', type: 'daocheng-cancel' }).outerHTML}
                &nbsp;
                &nbsp;
                ${Button({ id: 'confirm', text: '确认', type: 'daocheng-confirm' }).outerHTML}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  const treeComponent = Tree({ data: data.title, beforeSelect, selectModel: 'radio' });
  const treeDom = treeComponent.container;
  const treeStyles = treeComponent.styles;
  mask.querySelector('#side').appendChild(treeDom);
  domFunc({
    dom: document.querySelector('html'),
    style: {
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden',
    },
  });
  document.body.appendChild(mask);
  // await sleep(300);
  await putDataToSecTable(data.content);
  let btns = mask.querySelectorAll(`.${styles['component-treeTable']} button`);
  btns = Array.prototype.slice.call(btns);
  await btnAddevent({
    btns, mask, data: data.content, next,
  });
  // 添加观察者
  await secTableObserver({ treeStyles, pars });
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
