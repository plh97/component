// import styles from './index.less';
// import $p from '@pengliheng/jquery';

// local
import styles from './index.less';
import Dom from '../../../utils/dom';
import Button from '../../../container/button/pc';

const {
  createElementFromHTML,
} = Dom;

const refreshPageList = ({
  buttons, currentDom, total, pages, container,
}) => {
  let index;
  if(currentDom === undefined){
    index = 0;
  } else {
    index = Number(currentDom.id.replace(/sec/, ''));
  }
  console.log('index:',index);
  const indexInfo = container.querySelector(`.${styles.index}`);
  buttons.forEach((dom, i) => {
    if (index - 2 < i && i < index + 2) {
      dom.style.display = 'inline-flex';
    } else if (i < 1 || i > buttons.length - 2) {
      dom.style.display = 'inline-flex';
    } else {
      dom.style.display = 'none';
    }
  });

  if(currentDom === undefined){
    indexInfo.innerHTML = '0';
  } else {
    indexInfo.innerHTML = `${(index * 20) + 1} - ${(index + 1) * 20 > total ? total : (index + 1) * 20}`;
  }

  if (pages < 4) return;
  if (index <= 2) {
    container.querySelector('#hide-prev').style.display = 'none';
    container.querySelector('#hide-next').style.display = 'inline-flex';
  } else if (index > 2 && index < buttons.length - 3) {
    container.querySelector('#hide-prev').style.display = 'inline-flex';
    container.querySelector('#hide-next').style.display = 'inline-flex';
  } else if (index >= buttons.length - 3) {
    container.querySelector('#hide-prev').style.display = 'inline-flex';
    container.querySelector('#hide-next').style.display = 'none';
  }
};

const Pagination = (args) => {
  const {
    id, data, defaultValue, limit,
  } = args;
  const pages = Math.ceil(data.length / limit);
  const Arr = [];
  for (let i = 0; i < pages; i += 1) {
    Arr.push(i);
  }
  const pagination = `
    <span id="${id}" class="${styles.pagination}">
      <span class="${styles.info}">
        第<span class="${styles.index}">
          1 - ${data.length < limit ? data.length : limit} 
        </span>条,共 <span id="total-count">${data.length}</span> 条
      </span>
      ${Button({ id: 'prev', text: '上一页', type: 'daocheng-cancel' }).outerHTML}
      <span class="${styles['page-list']}">
        ${Arr.map((arr, i) => Button({ id: `sec${i}`, text: i + 1, type: 'daocheng-confirm' }).outerHTML).join('')}
      </span>
      ${Button({ id: 'next', text: '下一页', type: 'daocheng-cancel' }).outerHTML}
    </span>
  `;
  const container = createElementFromHTML(pagination);
  const buttons = container.querySelectorAll(`.${styles['page-list']} button`);
  if (buttons[defaultValue]) {
    buttons[defaultValue].classList.add(styles.active);
  }
  // 插入 ...
  const prevHide = createElementFromHTML('<span id="hide-prev" style="display:none">...</span>');
  const nextHide = createElementFromHTML(`<span id="hide-next" ${pages < 5 ? "style='display:none'" : ''}>...</span>`);
  container.querySelector(`.${styles['page-list']}`).insertBefore(prevHide, buttons[2]);
  container.querySelector(`.${styles['page-list']}`).insertBefore(nextHide, buttons[Arr.length - 2]);

  refreshPageList({
    buttons,
    pages, container,
    total: data.length,
    currentDom: buttons[0],
  });

  buttons.forEach((btn) => {
    btn.onclick = (e) => {
      container.querySelector(`.${styles['page-list']}`).dataset.version = Math.random();
      if (container.querySelector(`.${styles.active}`) === e.target) return;
      container.querySelector(`.${styles.active}`).classList.remove(styles.active);
      e.target.classList.toggle(styles.active);
      refreshPageList({
        pages, 
        buttons, 
        container,
        total: data.length, 
        currentDom: e.target, 
      });
      e.target.dataset.time = Math.random();
    };
  });

  // 点击上一个元素
  container.querySelector('#prev').onclick = () => {
    const prevDom = container.querySelector(`.${styles.active}`).previousElementSibling;
    container.querySelector(`.${styles['page-list']}`).dataset.version = Math.random();
    if ($(prevDom).is('button')) {
      container.querySelector(`.${styles.active}`).previousElementSibling.click();
    } else if ($(prevDom.previousElementSibling).is('button')) {
      container.querySelector(`.${styles.active}`).previousElementSibling.previousElementSibling.click();
    } else {
      container.querySelector(`.${styles.active}`).previousElementSibling.previousElementSibling.previousElementSibling.click();
    }
  };

  // 点击下一个元素
  container.querySelector('#next').onclick = () => {
    const nextDom = container.querySelector(`.${styles.active}`).nextElementSibling;
    container.querySelector(`.${styles['page-list']}`).dataset.version = Math.random();
    if ($(nextDom).is('button')) {
      container.querySelector(`.${styles.active}`).nextElementSibling.click();
    } else if ($(nextDom.nextElementSibling).is('button')) {
      container.querySelector(`.${styles.active}`).nextElementSibling.nextElementSibling.click();
    } else {
      container.querySelector(`.${styles.active}`).nextElementSibling.nextElementSibling.nextElementSibling.click();
    }
  };
  return { container, styles };
};

export default Pagination;
