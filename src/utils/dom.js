const domFunc = (e) => {
  const {
    dom,
    style,
  } = e;
  for (const i in style) {
    dom.style[i] = style[i];
  }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 添加Array属性
const addArrProp = e => Array.prototype.slice.call(e);
// 只能判断精确到个体dom元素，无法判断一个系列的dom是否处于点击范围
const isDomInPathFunc = (args) => {
  const {
    path,
    selector,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i] == document.querySelector(selector)) {
      return path[i];
    } else if (path[i] == document.body) {
      return false;
    }
  }
};
// aims -->  wanan to check whether click the list of dom element?
// i put params of the class name with the list
// how to relize it? just put dom to check whether click ,,,not put the selectorName to check?>>>>
const isDomFunc = (args) => {
  const {
    path,
    dom,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i] == dom) {
      return dom;
    } else if (path[i] == document.body) {
      return false;
    }
  }
};
// toggle show dom animation
const domToggleAnimation = (args) => {
  const {
    dom,
    animationName,
    animationDuration,
    animationFillMode,
  } = args;
  if (
    dom.style.animationName == animationName[1]
  ) {
    dom.style.animationDuration = animationDuration;
    dom.style.animationFillMode = animationFillMode;
    dom.style.animationName = animationName[0];
  } else {
    dom.style.animationDuration = animationDuration;
    dom.style.animationFillMode = animationFillMode;
    dom.style.animationName = animationName[1];
  }
};
// ===============Tool==============
// feature function
const showDomFunc = (args) => {
  const {
    allDom,
    showDom,
  } = args;
  allDom.map((dom) => {
    dom.style.display = 'none';
  });
  showDom.map((dom) => {
    dom.style.display = 'flex';
  });
};
// 添加事件
const addEvent = (e) => {
  const {
    dom,
    event,
    func,
  } = e;
  dom.addEventListener(event, func, false);
  return dom;
};

// 字符串转Boolean
const transformStringToBool = (e) => {
  if (e == 'true') {
    return true;
  }
  return false;
};

// 将阿拉伯数字转英文 first . second . third
const numToEng = (e) => {
  if (e == 1) {
    return 'first';
  } else if (e == 2) {
    return 'second';
  } else if (e == 3) {
    return 'third';
  }
};

const Dom = {
  domFunc,
  sleep,
  isDomInPathFunc,
  domToggleAnimation,
  transformStringToBool,
  addArrProp,
  showDomFunc,
  addEvent,
  isDomFunc,
};

export default Dom;
