import styles from './index.less';
import Button from '../../container/button';
import Dom from '../../utils/dom.js';

const Modal = async (args) => {
  const {
    domFunc,
    sleep,
  } = Dom;
  let {
    title,
    content,
    next,
  } = args;
  typeof (args) === 'string' && (
    content = args,
    title = '标题'
  );
  if (title == undefined) {
    title = '{title: 请输入title参数}';
  }
  if (content == undefined) {
    content = '{content: 请输入content参数}';
  }
  if (next == undefined) {
    next = () => {};
  }
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
        <div class="${styles['component-model']}">
            <div class="${styles['component-model-header']}">
                <span class="${styles.title}">${title}</span>
                ${Button({
    className: `confirm ${styles['btn-close']}`,
    text: 'X',
  }).outerHTML}
            </div>
            <div class="${styles['component-model-body']}">
                ${content}
            </div>
            <div class="${styles['component-model-footer']}">
                ${Button({
    className: 'return',
    text: '返回',
  }).outerHTML}
                &nbsp;
                &nbsp;
                ${Button({
    className: 'confirm',
    text: '确认',
    type: 'btn-primary',
  }).outerHTML}
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
  await sleep(500);
  mask.addEventListener('click', (e) => {
    e.stopPropagation();
    // e.preventDefault()
    // return false
    if (
      e.path[0].classList.contains(styles['component-mask'])
    ) {
      mask.remove();
      domFunc({
        dom: document.querySelector('html'),
        style: {
          paddingRight: '0px',
          overflow: 'auto',
        },
      });
    }
  }, false);
  let btns = mask.querySelectorAll(`.${styles['component-model']} button`);
  btns = Array.prototype.slice.call(btns);
  btns.forEach((dom) => {
    dom.addEventListener('click', () => {
      mask.remove();
      domFunc({
        dom: document.querySelector('html'),
        style: {
          paddingRight: '0px',
          overflow: 'auto',
        },
      });
      if (dom.classList.contains('confirm')) {
        next();
      }
    });
  });
};

export default Modal;
