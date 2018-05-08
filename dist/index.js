var Component = (function () {
'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".common_iconfont__2FtTe {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nform,\nbutton,\ninput {\n  margin: 0;\n  padding: 0;\n}\n";
__$$styleInject(css);

function __async(g) {
  return new Promise(function (s, j) {
    function c(a, x) {
      try {
        var r = g[x ? "throw" : "next"](a);
      } catch (e) {
        j(e);return;
      }r.done ? s(r.value) : Promise.resolve(r.value).then(c, d);
    }function d(e) {
      c(e, 1);
    }c();
  });
}

var css$1 = ".index_component-mask__2seGY {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 50;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y {\n  -webkit-animation: index_scale-top__2KWTt 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: index_scale-top__2KWTt 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 95vw;\n  position: absolute;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (min-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y {\n    max-width: 520px;\n  }\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n@media (min-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh {\n    padding: 0 0 0 24px;\n    height: 55px;\n  }\n}\n@media (max-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh {\n    padding: 0 0 0 0.6rem;\n    height: 1.3rem;\n  }\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_title__12_Xu {\n  color: #212121;\n  font-size: 36px;\n  font-weight: bold;\n}\n[data-dpr=\"1\"] .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_title__12_Xu {\n  font-size: 18px;\n}\n[data-dpr=\"3\"] .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_title__12_Xu {\n  font-size: 54px;\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_btn-close__3E-M4 {\n  border: 0;\n  width: 1.5rem;\n  height: 100%;\n  color: #757575;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n@media (min-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_btn-close__3E-M4 {\n    width: 0.7rem;\n  }\n}\n@media (max-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_btn-close__3E-M4 {\n    width: 1.5rem;\n  }\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_btn-close__3E-M4:hover {\n  color: #212121;\n  font-weight: bold;\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-header__1pOwh .index_btn-close__3E-M4:active {\n  font-weight: bold;\n  color: #212121;\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-body__25-2f {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: 300;\n  font-size: 36px;\n}\n[data-dpr=\"1\"] .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-body__25-2f {\n  font-size: 18px;\n}\n[data-dpr=\"3\"] .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-body__25-2f {\n  font-size: 54px;\n}\n@media (min-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-body__25-2f {\n    padding: 24px;\n  }\n}\n@media (max-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-body__25-2f {\n    padding: 0.4rem 0.6rem;\n  }\n}\n.index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-footer__15YVN {\n  height: 1.4rem;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n@media (min-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-footer__15YVN {\n    padding: 0 24px;\n  }\n}\n@media (max-width: 1300px) {\n  .index_component-mask__2seGY .index_component-model__2Vf6y .index_component-model-footer__15YVN {\n    padding: 0 0.3rem;\n  }\n}\n";
var styles = { "component-mask": "index_component-mask__2seGY", "component-model": "index_component-model__2Vf6y", "scale-top": "index_scale-top__2KWTt", "component-model-header": "index_component-model-header__1pOwh", "title": "index_title__12_Xu", "btn-close": "index_btn-close__3E-M4", "component-model-body": "index_component-model-body__25-2f", "component-model-footer": "index_component-model-footer__15YVN" };
__$$styleInject(css$1);

var css$2 = ".index_component-btn__RoVle {\n  outline: none;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  font-weight: 400;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n@media screen and (min-width: 768px) {\n  .index_component-btn__RoVle {\n    font-size: 14px;\n    height: 34px;\n    border-radius: 4px;\n    padding: 0 15px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .index_component-btn__RoVle {\n    height: 1rem;\n    font-size: 32px;\n    border-radius: 0.1rem;\n    padding: 0 0.5rem;\n  }\n  [data-dpr=\"1\"] .index_component-btn__RoVle {\n    font-size: 16px;\n  }\n  [data-dpr=\"3\"] .index_component-btn__RoVle {\n    font-size: 48px;\n  }\n}\n.index_component-btn__RoVle:hover {\n  color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.index_component-btn__RoVle:active {\n  color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.index_component-btn__RoVle.index_btn-primary__1LS5Y {\n  color: #fff;\n  border: 1px solid #039be5;\n  background-color: #039be5;\n}\n.index_component-btn__RoVle.index_btn-primary__1LS5Y:hover {\n  background-color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.index_component-btn__RoVle.index_btn-primary__1LS5Y:active {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.index_component-btn__RoVle.index_btn-danger__3IKAG {\n  color: #fff;\n  border: 1px solid #ff4d4f;\n  background-color: #ff4d4f;\n}\n.index_component-btn__RoVle.index_btn-danger__3IKAG:hover {\n  background-color: #ff737e;\n  border: 1px solid #ff737e;\n}\n.index_component-btn__RoVle.index_btn-danger__3IKAG:active {\n  background-color: #ff1c2f;\n  border: 1px solid #ff1c2f;\n}\n.index_component-btn__RoVle.index_daocheng-confirm__ESOEO {\n  color: #a20909;\n  border: 1px solid #a20909;\n  background-color: #fff;\n}\n.index_component-btn__RoVle.index_daocheng-confirm__ESOEO:hover {\n  color: #fff;\n  background-color: #a20909;\n  border: 1px solid #a20909;\n}\n.index_component-btn__RoVle.index_daocheng-cancel__I5SJr {\n  color: #999999;\n  border: 1px solid #999999;\n  background-color: #fff;\n}\n.index_component-btn__RoVle.index_daocheng-cancel__I5SJr:hover {\n  color: #fff;\n  background-color: #999999;\n  border: 1px solid #999999;\n}\n";
var styles$1 = { "component-btn": "index_component-btn__RoVle", "btn-primary": "index_btn-primary__1LS5Y", "btn-danger": "index_btn-danger__3IKAG", "daocheng-confirm": "index_daocheng-confirm__ESOEO", "daocheng-cancel": "index_daocheng-cancel__I5SJr" };
__$$styleInject(css$2);

const Button = args => {
  const {
    text, type, id
  } = args;
  const btn = document.createElement('button');
  btn.className = `${styles$1['component-btn']} ${styles$1[type]}`;
  btn.innerText = text;
  btn.id = id;
  return btn;
};

// const sortBy = require('lodash.sortby');

const domFunc = e => {
  const {
    dom,
    style
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
const isDomInPathFunc = args => {
  const {
    path,
    selector
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === document.querySelector(selector)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isIdInPathFunc = args => {
  const {
    path,
    id
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i].id === id) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isClassInPathFunc = args => {
  const {
    path,
    className
  } = args;
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList.contains(className)) {
      return path[i];
    } else if (path[i] === document.body) {
      return false;
    }
  }
};

const isDomFunc = args => {
  const {
    path,
    dom
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
const domToggleAnimation = args => {
  const {
    dom,
    animationName,
    animationDuration,
    animationFillMode
  } = args;
  if (dom.style.animationName === animationName[1]) {
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
const showDomFunc = args => {
  const {
    allDom,
    showDom
  } = args;
  allDom.forEach(dom => {
    dom.style.display = 'none';
  });
  showDom.forEach(dom => {
    dom.style.display = 'flex';
  });
};
// 添加事件
const addEvent = e => {
  const {
    dom,
    event,
    func
  } = e;
  dom.addEventListener(event, func, false);
  return dom;
};

// 字符串转Boolean
const transformStringToBool = e => {
  if (e === 'true') {
    return true;
  }
  return false;
};

// 将阿拉伯数字转英文 first . second . third
const numToEng = e => {
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
  return newData.map(func).sort().map(arr => {
    const filterArr = data.filter(Data => arr === Data.id)[0];
    return filterArr;
  });
};

const getIndexLevelFunc = data => {
  const lenDiff = sortBy(data, o => o.id).map(e => e.id.length);
  return unique(lenDiff)[1] - unique(lenDiff)[0];
};

const coverDataToTree = data => {
  if (!data[0].id) {
    return data;
  }
  const newData = sortBy(data, o => o.id);
  const lenDiff = newData.map(e => e.id.length);
  if (unique(lenDiff).length > 1) {
    const titleArray = [];
    let lenDiffIndex = getIndexLevelFunc(data);
    if (Object.prototype.hasOwnProperty.call(data[0], 'code')) {
      newData.forEach(arr => {
        // treetable
        if (titleArray.length === 0) {
          // 初次循环默认push 到root节点
          titleArray.push(arr);
        } else if (titleArray[titleArray.length - 1].code.length === arr.code.length) {
          titleArray.push(arr);
        } else if (titleArray[titleArray.length - 1].code.length === arr.code.length - lenDiffIndex) {
          if (!Object.prototype.hasOwnProperty.call(titleArray[titleArray.length - 1], 'children')) {
            titleArray[titleArray.length - 1].children = [];
          }
          titleArray[titleArray.length - 1].children.push(arr);
        } else if (titleArray[titleArray.length - 1].code.length === (arr.code.length - lenDiffIndex) * 2) {
          if (!Object.prototype.hasOwnProperty.call(titleArray[titleArray.length - 1].children[titleArray[titleArray.length - 1].children.length - 1], 'children')) {
            titleArray[titleArray.length - 1].children[titleArray[titleArray.length - 1].children.length - 1].children = [];
          }
          // 最后一个元素的children，
          titleArray[titleArray.length - 1].children[titleArray[titleArray.length - 1].children.length - 1].children.push(arr);
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

const composedPath = el => {
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

const createElementFromHTML = htmlString => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

const fetchData = args => {
  const { url, data, header } = args;
  return new Promise((resolve, reject) => {
    fetch(url + data, header).then(res => res.json()).then(json => resolve(json)).catch(err => reject(err));
  });
};
const isMobile = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = false;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
};

const Dom = {
  domFunc,
  fetchData,
  sleep,
  isMobile,
  isDomInPathFunc,
  isIdInPathFunc,
  isClassInPathFunc,
  createElementFromHTML,
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
  tottleShowSelect
};

const Modal = args => __async(function* () {
  const {
    domFunc,
    sleep
  } = Dom;
  let {
    title,
    content,
    next
  } = args;
  typeof args === 'string' && (content = args, title = '标题');
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
    text: 'X'
  }).outerHTML}
            </div>
            <div class="${styles['component-model-body']}">
                ${content}
            </div>
            <div class="${styles['component-model-footer']}">
                ${Button({
    className: 'return',
    text: '返回'
  }).outerHTML}
                &nbsp;
                &nbsp;
                ${Button({
    className: 'confirm',
    text: '确认',
    type: 'btn-primary'
  }).outerHTML}
            </div>
        </div>
    `;
  domFunc({
    dom: document.querySelector('html'),
    style: {
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden'
    }
  });
  document.body.appendChild(mask);
  yield sleep(500);
  mask.addEventListener('click', e => {
    e.stopPropagation();
    // e.preventDefault()
    // return false
    if (e.path[0].classList.contains(styles['component-mask'])) {
      mask.remove();
      domFunc({
        dom: document.querySelector('html'),
        style: {
          paddingRight: '0px',
          overflow: 'auto'
        }
      });
    }
  }, false);
  let btns = mask.querySelectorAll(`.${styles['component-model']} button`);
  btns = Array.prototype.slice.call(btns);
  btns.forEach(dom => {
    dom.addEventListener('click', () => {
      mask.remove();
      domFunc({
        dom: document.querySelector('html'),
        style: {
          paddingRight: '0px',
          overflow: 'auto'
        }
      });
      if (dom.classList.contains('confirm')) {
        next();
      }
    });
  });
}());

var css$3 = ".index_component-container__1-wgM {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 50;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: none;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx {\n  top: 10px;\n  width: auto;\n  font-size: 30px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  margin: 0 0.3rem 0.3rem 0.3rem;\n  padding: 0.2rem 0.3rem;\n  position: relative;\n  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.25);\n  border-radius: 0.1rem;\n  background-color: #fff;\n}\n[data-dpr=\"1\"] .index_component-container__1-wgM .index_component-container-message__ZC2Mx {\n  font-size: 15px;\n}\n[data-dpr=\"3\"] .index_component-container__1-wgM .index_component-container-message__ZC2Mx {\n  font-size: 45px;\n}\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx.index_info__3Nx_Z,\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx.index_success__1yUk_,\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx.index_warning__2qwic {\n  -webkit-animation: index_slide-in__2XdB- 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: index_slide-in__2XdB- 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx.index_error__1czda {\n  -webkit-animation: index_shake__XCTt0 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: index_shake__XCTt0 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.index_component-container__1-wgM .index_component-container-message__ZC2Mx .index_icon__33Jxc {\n  min-width: 0.5rem;\n  font-size: 48px;\n}\n[data-dpr=\"1\"] .index_component-container__1-wgM .index_component-container-message__ZC2Mx .index_icon__33Jxc {\n  font-size: 24px;\n}\n[data-dpr=\"3\"] .index_component-container__1-wgM .index_component-container-message__ZC2Mx .index_icon__33Jxc {\n  font-size: 72px;\n}\n";
var styles$2 = { "component-container": "index_component-container__1-wgM", "component-container-message": "index_component-container-message__ZC2Mx", "info": "index_info__3Nx_Z", "success": "index_success__1yUk_", "warning": "index_warning__2qwic", "slide-in": "index_slide-in__2XdB-", "error": "index_error__1czda", "shake": "index_shake__XCTt0", "icon": "index_icon__33Jxc" };
__$$styleInject(css$3);

var css$4 = "svg {\n  font-size: 28px;\n  min-width: 28px;\n}\nsvg.index_icon__5csWz {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\nsvg.index_icon__5csWz.index_icon-success__3zunK {\n  color: #52c41a;\n}\nsvg.index_icon__5csWz.index_icon-error__2iBpb {\n  color: #f5222d;\n}\nsvg.index_icon__5csWz.index_icon-warning__a6Ux3 {\n  color: #faad14;\n}\nsvg.index_icon__5csWz.index_icon-info__2LrQK {\n  color: #039be5;\n}\nsvg.index_icon__5csWz.index_icon-trash__2dNDT {\n  color: #980e0c;\n}\n";
var styles$3 = { "icon": "index_icon__5csWz", "icon-success": "index_icon-success__3zunK", "icon-error": "index_icon-error__2iBpb", "icon-warning": "index_icon-warning__a6Ux3", "icon-info": "index_icon-info__2LrQK", "icon-trash": "index_icon-trash__2dNDT" };
__$$styleInject(css$4);

const Icon = args => {
	const {
		className,
		type
	} = args;
	if (type == 'info') {
		const icon = `
			<svg class="${styles$3.icon}" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#2196F3" p-id="1690"></path>
				<path d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" fill="#FFFFFF" p-id="1691"></path>
				<path d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FFFFFF" p-id="1692"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'success') {
		const icon = `
			<svg 
				class="${styles$3.icon} ${styles$3['icon-success']}" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z" p-id="1672" fill="#53c41b"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'error' || type == 'delete') {
		const icon = `
			<svg 
				class="${styles$3.icon} ${styles$3['icon-error']}" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z" p-id="4168"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'warning' || type == 'confirm') {
		const icon = `
			<svg 
				class="${styles$3.icon} ${styles$3['icon-warning']}" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 85.333333c-235.52 0-426.666667 190.933333-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM554.666667 554.666667l-85.333333 0 0-256 85.333333 0 0 256z" p-id="4282"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'spin') {
		const icon = `
			<svg 
				class="${styles$3.icon} ${styles$3['icon-info']}" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM512 256c141.39392 0 256 114.60608 256 256s-114.60608 256-256 256-256-114.60608-256-256 114.60608-256 256-256zM817.47968 817.47968c-81.59232 81.59232-190.07488 126.52544-305.47968 126.52544s-223.86688-44.93312-305.47968-126.52544-126.52544-190.07488-126.52544-305.47968c0-115.38432 44.93312-223.86688 126.52544-305.47968l67.8912 67.8912c0 0 0 0 0 0-131.01056 131.01056-131.01056 344.1664 0 475.17696 63.46752 63.46752 147.84512 98.4064 237.58848 98.4064s174.12096-34.95936 237.58848-98.4064c131.01056-131.01056 131.01056-344.1664 0-475.17696l67.8912-67.8912c81.59232 81.59232 126.52544 190.07488 126.52544 305.47968s-44.93312 223.86688-126.52544 305.47968z" p-id="1646"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'location') {
		const icon = `
			<svg 
				class="${styles$3.icon} icon-location" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M999.619048 877.714286C999.619048 958.512762 781.312 1024 512 1024 242.688 1024 24.380952 958.512762 24.380952 877.714286 24.380952 809.496381 180.224 752.39619 390.777905 736.207238 292.62019 613.668571 170.666667 439.393524 170.666667 329.142857 170.666667 144.822857 320.853333 0 512 0 703.146667 0 853.333333 144.822857 853.333333 329.142857 853.333333 439.393524 731.37981 613.668571 633.222095 736.207238 843.776 752.39619 999.619048 809.496381 999.619048 877.714286ZM512 188.708571C430.08 188.708571 366.34819 250.148571 366.34819 329.142857 366.34819 408.137143 430.08 469.577143 512 469.577143 593.92 469.577143 657.65181 408.137143 657.65181 329.142857 657.65181 250.148571 593.92 188.708571 512 188.708571ZM632.880762 736.597333C567.100952 818.712381 512 877.714286 512 877.714286 512 877.714286 456.899048 818.712381 391.119238 736.597333 235.178667 749.372952 121.904762 785.700571 121.904762 828.952381 121.904762 882.834286 296.569905 926.47619 512 926.47619 727.430095 926.47619 902.095238 882.834286 902.095238 828.952381 902.095238 785.700571 788.821333 749.372952 632.880762 736.597333Z" p-id="1678"></path>
			</svg>
		`;
		return icon;
	} else if (type == '>') {
		const icon = `
			<svg 
				class="${styles$3.icon} icon-more" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="1663"></path>
			</svg>
		`;
		return icon;
	} else if (type == '>>') {
		const icon = `
			<svg 
				class="${styles$3.icon} icon-more" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M542.464 476.032 180.992 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256l335.104 378.368L112 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.8 0 25.728-5.376 34.688-15.872l361.472-419.84C557.696 518.528 557.568 493.056 542.464 476.032zM911.616 476.032 550.144 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256L816.64 506.496 481.152 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.928 0 25.728-5.376 34.688-15.872l361.472-419.84C926.848 518.528 926.72 493.056 911.616 476.032z" p-id="1797"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'trash') {
		const icon = `
			<svg class="${styles$3.icon} ${styles$3['icon-trash']}" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M414.66 90.125h194.712q26.612 0 45.757 19.147t19.147 45.757v64.904h178.487q6.49 0 11.357 4.868t4.868 11.358v48.678h-713.943v-48.678q0-6.49 4.868-11.358t11.358-4.868h178.487v-64.904q0-26.611 19.147-45.757t45.757-19.147zM414.66 155.029v64.904h194.712v-64.904h-194.712zM804.084 349.739v519.231q0 26.611-19.147 45.757t-45.757 19.147h-454.326q-26.612 0-45.757-19.147t-19.147-45.757v-519.231h584.135zM284.853 414.644v454.326h64.904v-454.326h-64.904zM414.66 414.644v454.326h64.904v-454.326h-64.904zM544.468 414.644v454.326h64.904v-454.326h-64.904zM674.276 414.644v454.326h64.904v-454.326h-64.904z" p-id="1112"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'navlist') {
		const icon = `
			<svg class="${styles$3.icon} icon-navlist" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M284.416 118.016l711.168 0C1011.2768 118.016 1024 105.2928 1024 89.6c0-15.6928-12.7232-28.416-28.416-28.416L284.416 61.184C268.7232 61.184 256 73.9072 256 89.6 256 105.2928 268.7232 118.016 284.416 118.016z" p-id="1408"></path>
				<path d="M125.184 61.184 28.416 61.184C12.7232 61.184 0 73.9072 0 89.6c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 118.016 153.6 105.2928 153.6 89.6 153.6 73.9072 140.8768 61.184 125.184 61.184z" p-id="1409"></path>
				<path d="M995.584 342.784 284.416 342.784c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6928 12.7232 28.416 28.416 28.416l711.168 0c15.6928 0 28.416-12.7232 28.416-28.416C1024 355.5072 1011.2768 342.784 995.584 342.784z" p-id="1410"></path>
				<path d="M125.184 342.784 28.416 342.784C12.7232 342.784 0 355.5072 0 371.2c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 399.616 153.6 386.8928 153.6 371.2 153.6 355.5072 140.8768 342.784 125.184 342.784z" p-id="1411"></path>
				<path d="M585.984 905.984 284.416 905.984c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 918.7072 601.6768 905.984 585.984 905.984z" p-id="1412"></path>
				<path d="M125.184 905.984 28.416 905.984C12.7232 905.984 0 918.7072 0 934.3744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 918.7072 140.8768 905.984 125.184 905.984z" p-id="1413"></path>
				<path d="M585.984 624.384 284.416 624.384c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 637.1072 601.6768 624.384 585.984 624.384z" p-id="1414"></path>
				<path d="M125.184 624.384 28.416 624.384C12.7232 624.384 0 637.1072 0 652.7744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 637.1072 140.8768 624.384 125.184 624.384z" p-id="1415"></path>
				<path d="M995.584 729.6256l-122.368 0 0-122.368c0-15.6928-12.7232-28.416-28.3904-28.416-15.6928 0-28.416 12.7232-28.416 28.416l0 122.368L694.016 729.6256c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6672 12.7232 28.3904 28.416 28.3904l122.3424 0L816.3584 908.8c0 15.6928 12.7232 28.416 28.416 28.416 15.6672 0 28.3904-12.7232 28.3904-28.416l0-122.3424 122.368 0c15.6928 0 28.416-12.7232 28.416-28.3904C1024 742.3488 1011.2768 729.6256 995.584 729.6256z" p-id="1416"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'wujiaoxing') {
		const icon = `
			<svg class="${styles$3.icon} icon-wujiaoxing" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M287.396584 1008.243249C220.760875 1044.901654 177.259858 1013.451582 190.1446 938.519486L225.376319 733.62741C229.653441 708.753597 218.681963 674.124419 200.514071 655.923566L30.954375 486.055972C-22.724177 432.280007-4.733453 380.837518 70.864079 371.190865L293.059958 342.837564C318.281479 339.619137 347.68609 318.272539 358.54979 295.549963L454.994798 93.825562C487.86137 25.081807 540.967183 25.193009 573.49223 93.825562L669.089607 295.549963C679.940896 318.447794 709.307564 339.873213 734.252191 343.345182L955.703234 374.168383C1031.169459 384.672365 1048.603546 436.98517 994.864989 490.790493L828.179794 657.682704C810.346266 675.538427 799.221506 710.767967 803.242417 735.81192L836.016513 939.943459C848.084627 1015.109213 804.217353 1045.92761 737.77616 1008.63228L554.56509 905.790672C532.440519 893.371558 496.781292 893.054186 473.931545 905.624535L287.396584 1008.243249Z" p-id="1537"></path>
			</svg>
		`;
		return icon;
	} else if (type == 'unfold') {
		const icon = `
			<svg class="${styles$3.icon} icon-unfold" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z" p-id="1685"></path>
			</svg>
		`;
		return icon;
	}
};

const Message = args => __async(function* () {
  const { domFunc, sleep } = Dom;
  let {
    type,
    content,
    next,
    time
  } = args;
  typeof args === 'string' && (content = args);
  type = type == undefined ? 'info' : type;
  time = time == undefined ? 3000 : time;
  content = content == undefined ? '{content: 请输入content参数}' : content;
  next = next == undefined ? () => {} : next;
  if (document.querySelector(`.${styles$2['component-container']}`)) {
    var container = document.querySelector(`.${styles$2['component-container']}`);
  } else {
    var container = document.createElement('div');
    container.className = styles$2['component-container'];
    document.body.appendChild(container);
  }
  const message = document.createElement('div');
  message.className = `${styles$2['component-container-message']} ${styles$2[type]}`;
  message.innerHTML = `
        ${Icon({ type })}
        &nbsp;
        ${content}
    `;

  container.appendChild(message);
  yield sleep(time);
  message.remove();
  next();
}());

// local
// import ModalInfo from './component/modalInfo';
// import Spin from './component/spin';
// import Icon from './container/icon';
// // import scrollBind from './utils/scrollBind';
// import treeTablePC from './component/treeTable/pc';
// import treeTableMobile from './component/treeTable/mobile';
// import tablePC from './component/table/pc';
// import treePC from './component/tree/pc';
// import treeMobile from './component/tree/mobile';
// import Button from './container/button';
// import Dom from './utils/dom';

// const { isMobile } = Dom;


const Component = {
  // Message,
  // Spin,
  // Modal,
  // ModalInfo,
  // Button,
  // Icon,
  // scrollBind,
  // pc: {
  message: Message,
  // spin: Spin,
  modal: Modal
  // table: isMobile() ? treeMobile : tablePC,
  // tree: isMobile() ? treeMobile : treePC,
  // treeTable: isMobile() ? treeTableMobile : treeTablePC,
  // modalInfo: ModalInfo,
  // },
  // mobile: {
  //   spin: Spin,
  //   modal: Modal,
  //   message: Message,
  //   modalInfo: ModalInfo,
  // },
};

window.Component = Component;

return Component;

}());
