import styles from './index.less';
import Dom from '../../../utils/dom';
import Icon from '../../../container/icon/pc';

const {
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
  isIdInPathFunc,
  domToggleAnimation,
  coverDataToTree,
  composedPath,
  tottleShowSelect,
  isMobile,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
    domAddEvent,
  } = args;
  const contents = domAddEvent.querySelectorAll(`.${styles['tree-container']} .${styles['text-container']}`);
  addArrProp(contents).forEach((content) => {
    beforeSelect.forEach((select) => {
      if (content.innerText === select) {
        content.parentElement.click();
      }
    });
  });
};

const putDataToFirTable = async (args) => {
  const {
    data,
    container,
    selectModel,
  } = args;
  data.forEach((row) => {
    const ol = document.createElement('ol');
    const isChildren = Object.prototype.hasOwnProperty.call(row, 'children');
    let typeId = () => {
      return 
    }
    const html = `
      <li data-json='${JSON.stringify(row)}' id='tree-list-li' data-type="${row.code || row.id}">
        <span id="checkbox" class="${styles[selectModel]}"></span>
        <span class="${styles['text-container']}">${row.name}</span>
        ${isChildren ? Icon({ type: 'unfold' }) : ''}
      </li>
    `;
    ol.id = 'tree-list-ol';
    ol.innerHTML += html;
    if (isChildren) {
      putDataToFirTable({
        data: row.children,
        container: ol,
        selectModel,
      });
    }
    container.appendChild(ol);
  });
};

const eventProxy = (args) => {
  const { event, selectModel, domAddEvent } = args;
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
          addArrProp(domAddEvent.querySelectorAll(`#tree-container > ol > li.${styles.allSelect} #checkbox`)).forEach(dom => dom.click());
          addArrProp(domAddEvent.querySelectorAll(`#tree-container > ol > li.${styles.halfSelect} #checkbox`)).forEach((dom) => { dom.click(); dom.click(); });
        } else {
          // add all
          isSelectAll.classList.add(styles.allSelect);
          addArrProp(domAddEvent.querySelectorAll(`#tree-container > ol > li:not(.${styles.allSelect}) #checkbox`)).forEach(dom => dom.click());
        }
      }
      // 点击li的第一个，是否是展开下面选项还是全选反选
      let openList = domAddEvent.querySelectorAll(`.${styles['tree-container']} .icon-unfold`);
      console.log('123213');
      openList = Array.prototype.slice.call(openList);
      openList.forEach((dom) => {
        const isListInPath = isDomFunc({
          path,
          dom: dom.parentElement,
        });
        if (isListInPath) {
          // add some animation
          const isIdInPath = isIdInPathFunc({
            path,
            id: 'checkbox',
          });
          if (isIdInPath) {
            const container = e.target.parentElement.parentElement;
            const isAllSelect = container.querySelector('li').className;
            if (selectModel === 'radio') return;
            if (isAllSelect === styles.allSelect) {
              // remove all
              addArrProp(container.children).forEach((ddom) => {
                if (ddom.id === 'tree-list-ol') {
                  ddom.children[0].className = '';
                } else if (ddom.id === 'tree-list-li') {
                  ddom.className = '';
                }
              });
            } else {
              // all
              addArrProp(container.children).forEach((ddom) => {
                if (ddom.id === 'tree-list-ol') {
                  ddom.children[0].className = styles.active;
                } else if (ddom.id === 'tree-list-li') {
                  ddom.className = styles.allSelect;
                }
              });
            }
          } else {
            // toggle show
            domToggleAnimation({
              dom,
              animationDuration: '0.3s',
              animationFillMode: 'forwards',
              animationName: [styles.rotate90, styles['rotate-90'] ],
            });
            const listContainer = isListInPath.parentElement;
            listContainer.classList.toggle(styles.slideout);
            // domToggleAnimation({
            //   dom: listContainer,
            //   animationDuration: '0.3s',
            //   animationFillMode: 'forwards',
            //   animationName: [styles.slidein, styles.slideout],
            // });
          }
        }
      });
      // 对于可以选择的dom元素 添加点击active的样式
      const isIdInPath = isIdInPathFunc({
        path,
        id: 'tree-list-li',
      });
      if (isIdInPath && !isIdInPath.querySelector('.icon-unfold')) {
        if (selectModel === 'radio') {
          addArrProp(domAddEvent.querySelectorAll(`.${styles.active}`)).forEach((activeDom) => {
            activeDom.classList.remove(`${styles.active}`);
          });
          isIdInPath.classList.toggle(`${styles.active}`);
          tottleShowSelect({ dom: isIdInPath, styles });
        } else if (selectModel === 'checkbox') {
          // if select more
          isIdInPath.classList.toggle(`${styles.active}`);
          // // 检测是否全选，半选，没选
          tottleShowSelect({ dom: isIdInPath, styles });
        }
      }
      // empty ，暴力清除所有
      const isEmptyDom = isIdInPathFunc({
        path: e.path,
        id: 'empty',
      });
      if (isEmptyDom) {
        addArrProp(domAddEvent.querySelectorAll(`#tree-container .${styles.active}`))
          .forEach((dom) => {
            dom.classList.remove(styles.active);
          });
        addArrProp(domAddEvent.querySelectorAll(`#tree-container .${styles.allSelect}`))
          .forEach((dom) => {
            dom.classList.remove(styles.allSelect);
          });
        addArrProp(domAddEvent.querySelectorAll(`#tree-container .${styles.halfSelect}`))
          .forEach((dom) => {
            dom.classList.remove(styles.halfSelect);
          });
      }
      // 为第三个表格每一个列表添加点击事件, 就是点击第二个表格，由第二个表格触发第三个表格事件
      domAddEvent.querySelectorAll(`#thr-table-tb-container .${styles.tb}`).forEach((dom) => {
        const isTableList = isDomFunc({
          path: e.path, dom,
        });
        if (isTableList) {
          if (selectModel === 'radio') {
            domAddEvent.querySelector('#empty').click();
          } else if (selectModel === 'checkbox') {
            const jsonData = dom.id;
            domAddEvent.querySelector(`#tree-container li[data-json='${jsonData}']`).click();
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
    };
    domAddEvent.addEventListener(event, handleAllEvent, false);
  }
};


const tree = (args) => {
  const {
    data,
    beforeSelect,
    selectModel,
  } = args;
  const ifselect = args.ifselect || true;
  const container = document.createElement('div');
  container.className = styles.tree;
  container.innerHTML = `
    <div class="${styles.all}" id="all">
      ${selectModel === 'checkbox' ? `<span id="select-all-checkbox" class="${styles.checkbox}"></span>` : ""}
      <span class="${styles['text-container']}">${isMobile()?"珠海道成科技":"全部"}</span>
      <span class="empty" id="empty" style="display:none">清空</span>
    </div>
    <div class="${styles['tree-container']}" id='tree-container'></div>
  `;
  putDataToFirTable({
    data: coverDataToTree(data),
    container: container.children[1],
    selectModel,
  });
  // all event proxy
  eventProxy({
    event: 'click',
    selectModel,
    domAddEvent: container,
  });
  eventProxy({
    event: 'change',
    selectModel,
    domAddEvent: container,
  });
  setTimeout(() => {
    if (ifselect) {
      selectBeforeFunc({
        beforeSelect,
        domAddEvent: container,
      });
    }
  }, 500);
  // 不仅需要don，同时需要styles
  return {
    container,
    styles,
  };
};

export default tree;
