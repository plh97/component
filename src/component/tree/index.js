import styles from './index.less';
import Button from '../../container/button';
import Icon from '../../container/icon';
import Dom from '../../utils/dom';

const {
  sleep,
  domFunc,
  isDomFunc,
  addArrProp,
  isDomInPathFunc,
  domToggleAnimation,
  coverDataToTree,
} = Dom;

const selectBeforeFunc = (args) => {
  const {
    beforeSelect,
  } = args;
  const contents = document.querySelectorAll(`.${styles['component-tree-container']} .${styles['text-container']}`);
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
  } = args;
  btns.forEach((dom) => {
    if (dom.id === 'confirm') {
      dom.addEventListener('click', () => {
        let doms = document.querySelectorAll(`.${styles.active}`);
        doms = Array.prototype.slice.call(doms);
        doms = doms.map(activeDom => JSON.parse(activeDom.dataset.json));
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
    const div = document.createElement('ol');
    const html = `
      <li data-index="${i}" data-json=${JSON.stringify(row)} class="${styles['component-tree-container-list-div']}" data-type="${row.id}">
          <span class="${styles['text-container']}">${row.name}</span>
          ${row.hasOwnProperty('children') ? Icon({ type: 'unfold' }) : ''}
      </li>
    `;
    div.className = styles['component-tree-container-list'];
    div.innerHTML += html;
    div.id = `sec${i}`;
    if (row.hasOwnProperty('children')) {
      putDataToFirTable({
        data: row.children,
        container: div,
      });
    }
    container.appendChild(div);
  });
};


const eventProxy = (args) => {
  const {
    event,
    select_model,
  } = args;
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
        const listContainer = isShowAllInPath.parentElement.querySelector(`.${styles['component-tree-container']}`);
        domToggleAnimation({
          dom: listContainer,
          animationDuration: '0.3s',
          animationFillMode: 'forwards',
          animationName: [styles.slidein, styles.slideout],
        });
      }
      // toggle show the tree list in first table
      let openList = document.querySelectorAll(`.${styles['component-tree-container']} .icon-unfold`);
      openList = Array.prototype.slice.call(openList);
      openList.forEach((dom) => {
        const isShowListInPath = isDomFunc({
          path: e.path,
          dom: dom.parentElement,
        });
        if (isShowListInPath) {
          // add some animation
          domToggleAnimation({
            dom,
            animationDuration: '0.3s',
            animationFillMode: 'forwards',
            animationName: [styles['rotate-90'], styles.rotate90],
          });
          const listContainer = isShowListInPath.parentElement;
          domToggleAnimation({
            dom: listContainer,
            animationDuration: '0.3s',
            animationFillMode: 'forwards',
            animationName: [styles.slidein, styles.slideout],
          });
        }
      });
      // 对于可以选择的dom元素 添加点击active的样式
      let selectInput = document.querySelectorAll(`.${styles['component-tree-container-list-div']}`);
      selectInput = addArrProp(selectInput).filter(dom => !dom.querySelector('svg.icon-unfold'));
      selectInput.forEach((dom) => {
        const isSelectDomInPath = isDomFunc({
          path: e.path, dom,
        });
        if (isSelectDomInPath) {
          // if select one
          if (select_model === 'radio') {
            addArrProp(document.querySelectorAll(`.${styles.active}`)).forEach((activeDom) => {
              activeDom.classList.remove(`${styles.active}`);
            });
            isSelectDomInPath.classList.toggle(`${styles.active}`);
          } else if (select_model === 'checkbox') {
            // if select more
            isSelectDomInPath.classList.toggle(`${styles.active}`);
          }
        }
      });
      // click mask remove tree
      if (e.path[0].classList.contains(`.${styles['component-mask']}`)) {
        document.querySelector(`.${styles['component-mask']}`).remove();
        domFunc({
          dom: document.querySelector('html'),
          style: {
            paddingRight: '0px',
            overflow: 'auto',
          },
        });
      }
    };
    document.querySelector(`.${styles['component-mask']}`).addEventListener(event, handleAllEvent, false);
  }
};


const Tree = async (args) => {
  const {
    data,
    next,
    select_model,
    beforeSelect,
  } = args;
  console.log('拿到的数据：', data);
  const ifselect = args.ifselect || true;
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
    <div class="${styles['component-tree']}">
      <div class="${styles['component-tree-all']}" id="all">
        ${Icon({ type: 'navlist' })}
        <span class="${styles['text-container']}">全部</span>
        ${Icon({ type: 'unfold' })}
      </div>
      <div class="${styles['component-tree-container']}"></div>
      <div class="${styles['btn-group']}">
        ${Button({ id: 'return', text: '返回', type: 'daocheng-cancel' }).outerHTML}
        &nbsp;
        &nbsp;
        ${Button({ id: 'confirm', text: '确认', type: 'daocheng-confirm' }).outerHTML}
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
  await putDataToFirTable({
    data: coverDataToTree(data),
    container: document.querySelector(`.${styles['component-tree-container']}`),
  });
  ifselect && selectBeforeFunc({
    beforeSelect,
  });
  // all event proxy
  await eventProxy({
    event: 'click',
    select_model,
  });
  let btns = mask.querySelectorAll(`.${styles['component-tree']} button`);
  btns = addArrProp(btns);
  await btnAddevent({
    btns,
    mask,
    next,
    data,
  });
};

export default Tree;
