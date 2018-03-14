// const sortBy = require('lodash.sortby');

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
const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

// 添加Array属性
const addArrProp = e => Array.prototype.slice.call(e);
// 只能判断精确到个体dom元素，无法判断一个系列的dom是否处于点击范围
const isDomInPathFunc = (args) => {
  const {
    path,
    selector,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === document.querySelector(selector)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isIdInPathFunc = (args) => {
  const {
    path,
    id,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i].id === id) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isClassInPathFunc = (args) => {
  const {
    path,
    className,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList.contains(className)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isDomFunc = (args) => {
  const {
    path,
    dom,
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === dom) {
      return dom;
    } else if (path[i] === document.body) {
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
    dom.style.animationName === animationName[1]
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
  allDom.forEach((dom) => {
    dom.style.display = 'none';
  });
  showDom.forEach((dom) => {
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
  if (e === 'true') {
    return true;
  }
  return false;
};

// 将阿拉伯数字转英文 first . second . third
const numToEng = (e) => {
  let result;
  switch (e) {
    case 1:
      result = 'first';
      break;
    case 2:
      result = 'second';
      break;
    case 3:
      result = 'third';
      break;
    default:
      result = 'null';
      break;
  }
  return result;
};

const unique = arr => Array.from(new Set(arr));

const sortBy = (data, func) => {
  const newData = data;
  return newData
    .map(func)
    .sort()
    .map((arr) => {
      const filterArr = data.filter(Data => arr === Data.id)[0];
      return filterArr;
    });
};

const getIndexLevelFunc = (data) => {
  const lenDiff = sortBy(data, o => o.id).map(e => e.id.length);
  return unique(lenDiff)[1] - unique(lenDiff)[0];
};

const coverDataToTree = (data) => {
  const titleArray = [];
  const newData = sortBy(data, o => o.id);
  const lenDiff = newData.map(e => e.id.length);
  if (unique(lenDiff).length > 1) {
    let lenDiffIndex = getIndexLevelFunc(data);
    if (Object.prototype.hasOwnProperty.call(data[0], 'code')) {
      newData.forEach((arr) => {
        // treetable
        if (titleArray.length === 0) {
          // 初次循环默认push 到root节点
          titleArray.push(arr);
        } else if (titleArray[titleArray.length - 1].code.length === arr.code.length) {
          titleArray.push(arr);
        } else if (
          titleArray[titleArray.length - 1].code.length === arr.code.length - lenDiffIndex
        ) {
          if (
            !Object.prototype.hasOwnProperty.call(titleArray[titleArray.length - 1], 'children')
          ) {
            titleArray[titleArray.length - 1].children = [];
          }
          titleArray[titleArray.length - 1].children.push(arr);
        } else if (
          titleArray[titleArray.length - 1].code.length === (arr.code.length - lenDiffIndex) * 2
        ) {
          if (
            !Object.prototype.hasOwnProperty.call(titleArray[titleArray.length - 1].children[
              titleArray[titleArray.length - 1].children.length - 1
            ], 'children')
          ) {
            titleArray[titleArray.length - 1].children[
              titleArray[titleArray.length - 1].children.length - 1
            ].children = [];
          }
          // 最后一个元素的children，
          titleArray[titleArray.length - 1].children[
            titleArray[titleArray.length - 1].children.length - 1
          ].children.push(arr);
        }
      });
      return titleArray;
    }
    newData.forEach((arr, i) => {
      if (titleArray.length === 0) {
        titleArray.push(arr);
      } else if (titleArray[titleArray.length - 1].id.length === arr.id.length) {
        titleArray.push(arr);
      } else if (titleArray[titleArray.length - 1].id.length === arr.id.length - lenDiffIndex) {
        if (!Object.prototype.hasOwnProperty.call(titleArray[titleArray.length - 1], 'children')) {
          titleArray[titleArray.length - 1].children = [];
        }
        titleArray[titleArray.length - 1].children.push(arr);
      } else {
        lenDiffIndex = getIndexLevelFunc(data.slice(i));
        if (lenDiffIndex > 6) return;
        titleArray.push(arr);
      }
    });
    return titleArray;
  }
  return data;
};


const composedPath = (el) => {
  const path = [];
  while (el) {
    path.push(el);
    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
};

const tottleShowSelect = ({ dom, styles }) => {
  const selectNum = dom.parentElement.parentElement.querySelectorAll(`.${styles.active}`).length;
  const allNum = dom.parentElement.parentElement.children.length - 1;
  const parentShowSelectDom = dom.parentElement.parentElement.children[0];
  if (selectNum === 0) {
    // ('没选');
    parentShowSelectDom.className = '';
  } else if (allNum > selectNum) {
    // console.log('一个以上');
    parentShowSelectDom.className = styles.halfSelect;
  } else {
    // console.log('全选');
    parentShowSelectDom.className = styles.allSelect;
  }
};

const Dom = {
  domFunc,
  sleep,
  isDomInPathFunc,
  isIdInPathFunc,
  isClassInPathFunc,
  domToggleAnimation,
  transformStringToBool,
  addArrProp,
  showDomFunc,
  addEvent,
  isDomFunc,
  coverDataToTree,
  isNumeric,
  numToEng,
  composedPath,
  tottleShowSelect,
};

export default Dom;
