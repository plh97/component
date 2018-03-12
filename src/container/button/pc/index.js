import styles from './index.less';

const Button = (args) => {
  const {
    text, type, id,
  } = args;
  const btn = document.createElement('button');
  btn.className = `${styles['component-btn']} ${styles[type]}`;
  btn.innerText = text;
  btn.id = id;
  return btn;
};

export default Button;
