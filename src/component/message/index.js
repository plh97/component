import styles from './index.less';
import Icon from '../../container/icon';
import Dom from '../../utils/dom.js';

const Message = async (args) => {
  const { domFunc, sleep } = Dom;
  let {
    type,
    content,
    next,
    time,
  } = args;
  typeof (args) === 'string' && (content = args);
  type = (type == undefined ? 'info' : type);
  time = (time == undefined ? 3000 : time);
  content = (content == undefined ? '{content: 请输入content参数}' : content);
  next = (next == undefined ? () => {} : next);
  if (document.querySelector(`.${styles['component-container']}`)) {
    var container = document.querySelector(`.${styles['component-container']}`);
  } else {
    var container = document.createElement('div');
    container.className = styles['component-container'];
    document.body.appendChild(container);
  }
  const message = document.createElement('div');
  message.className = `${styles['component-container-message']} ${styles[type]}`;
  message.innerHTML = `
        ${Icon({ type })}
        &nbsp;
        ${content}
    `;

  container.appendChild(message);
  await sleep(time);
  message.remove();
  next();
};

export default Message;
