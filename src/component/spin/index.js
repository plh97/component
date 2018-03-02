import styles from './index.less';
import Icon from '../../container/icon';
import Dom from '../../utils/dom.js';

const Spin = (args) => {
  const {
    domFunc,
  } = Dom;
  if (args == undefined) {
    var dom = document.body;
  } else {
    var { dom } = args;
    dom = (dom == undefined ? document.body : dom);
  }
  console.log(styles);
  if (dom.querySelector(`.${styles['component-container-spin']}`)) {
    dom.querySelector(`.${styles['component-container-spin']}`).remove();
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: '0px',
        overflow: 'auto',
      },
    });
  } else {
    dom.style.position = 'relative';
    const container = document.createElement('div');
    container.className = `${styles['component-container-spin']} ${dom == document.body ? styles['component-container-global'] : ''}`;
    container.innerHTML = `
            <div class="${styles['spin-container']}">
                ${Icon({ type: 'spin' })}
                ${(screen.width > 1300 && dom.clientHeight < 50) ? '' : '<span>Loading...</span>'}
            </div>
        `;
    container.addEventListener('click', (e) => {
      e.stopPropagation();
      // e.preventDefault()
      // return false
    });
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
        overflow: 'hidden',
      },
    });
    dom.appendChild(container);
  }
};


export default Spin;
