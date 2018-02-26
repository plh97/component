import styles from './index.less';
import Button from '../../container/button';
import Icon from '../../container/icon';
import Dom from '../../utils/dom.js';

const ModalInfo = async (args) => {
  const {
    domFunc, sleep,
  } = Dom;
  let {
    type, content, title, next,
  } = args;
  typeof (args) === 'string' && (
    content = args,
    type = 'info'
  );
  if (type == undefined) {
    type = 'info';
  }
  if (title == undefined) {
    title = '提示';
  }
  if (content == undefined) {
    content = 'content不能为空';
  }
  if (next == undefined) {
    next = () => {};
  }
  if (!type.match(/(info|success|error|warning|confirm|delete)/)) {
    type = 'info';
  }
  const mask = document.createElement('div');
  mask.className = styles['component-mask'];
  mask.innerHTML = `
        <div class="${styles['component-modalInfo']}">
            ${Icon({
    type,
  })}
            <div class="${styles['component-modelInfo-container']}">
                <span class="${styles['component-modelInfo-container-title']}">${title}</span>
                <span class="${styles['component-modelInfo-container-content']}">${content}</span>
                <span class="${styles['component-modelInfo-container-footer']}">
                    ${(type == 'confirm' || type == 'delete') ? Button({
    className: 'cancal',
    text: '取消',
  }).outerHTML : ''}
                    ${Button({
    className: `${styles['component-btn']} confirm}`,
    text: '确认',
    type: type == 'delete' ? 'btn-danger' : 'btn-primary',
  }).outerHTML}
                </span>
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
  let btns = mask.querySelectorAll(`.${styles['component-modalInfo']} button`);
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

export default ModalInfo;
