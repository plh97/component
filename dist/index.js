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

var css = ".iconfont {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nblockquote,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nfieldset,\nlegend,\nbutton,\ninput,\ntextarea,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\npre[class*=\"language-\"] {\n  padding: 0.7em;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nsmall {\n  font-size: 12px;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  color: #c97373;\n}\na:hover {\n  text-decoration: underline;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\nlegend {\n  color: #000;\n}\nfieldset,\nimg {\n  border: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@-webkit-keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@-webkit-keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@-webkit-keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes slide-in {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 10px;\n  }\n}\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 10px;\n  }\n}\n@-webkit-keyframes slide-out {\n  from {\n    opacity: 1;\n    top: 20px;\n  }\n  to {\n    opacity: 0;\n    top: 0px;\n  }\n}\n@keyframes slide-out {\n  from {\n    opacity: 1;\n    top: 20px;\n  }\n  to {\n    opacity: 0;\n    top: 0px;\n  }\n}\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n    transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n    transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@-webkit-keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@-webkit-keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@-webkit-keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@-webkit-keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes slideout {\n  from {\n    max-height: 100%;\n  }\n  to {\n    max-height: 0%;\n  }\n}\n@keyframes slideout {\n  from {\n    max-height: 100%;\n  }\n  to {\n    max-height: 0%;\n  }\n}\n@-webkit-keyframes slidein {\n  from {\n    max-height: 0%;\n  }\n  to {\n    max-height: 100%;\n  }\n}\n@keyframes slidein {\n  from {\n    max-height: 0%;\n  }\n  to {\n    max-height: 100%;\n  }\n}\n@-webkit-keyframes rotate90 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n}\n@keyframes rotate90 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n}\n@-webkit-keyframes rotate-90 {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes rotate-90 {\n  from {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n";
__$$styleInject(css);

var css$2 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 50;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-mask .component-model {\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 80vw;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-model {\n    left: 10vw;\n  }\n}\n.component-mask .component-model .component-model-header {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-header {\n    padding: 0 0 0 24px;\n    height: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-header {\n    padding: 0 0 0 18px;\n    height: 40px;\n  }\n}\n.component-mask .component-model .component-model-header .title {\n  color: #212121;\n}\n.component-mask .component-model .component-model-header .btn-close {\n  border: 0;\n  width: 56px;\n  height: 100%;\n  color: #757575;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-header .btn-close {\n    width: 56px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-header .btn-close {\n    width: 46px;\n  }\n}\n.component-mask .component-model .component-model-header .btn-close:hover {\n  color: #212121;\n  font-weight: bold;\n}\n.component-mask .component-model .component-model-header .btn-close:active {\n  font-weight: bold;\n  color: #212121;\n}\n.component-mask .component-model .component-model-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 24px;\n  font-size: 14px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-body {\n    padding: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-body {\n    padding: 18px;\n  }\n}\n.component-mask .component-model .component-model-footer {\n  height: 55px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-footer {\n    padding: 0 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-footer {\n    padding: 0 12px;\n  }\n}\n";
__$$styleInject(css$2);

var css$4 = ".component-btn {\n  outline: none;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  height: 32px;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0px 15px;\n  border-radius: 4px;\n  white-space: nowrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-btn:hover {\n  color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn:active {\n  color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.component-btn.btn-primary {\n  color: #fff;\n  border: 1px solid #039be5;\n  background-color: #039be5;\n}\n.component-btn.btn-primary:hover {\n  background-color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn.btn-primary:active {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.component-btn.btn-danger {\n  color: #fff;\n  border: 1px solid #ff4d4f;\n  background-color: #ff4d4f;\n}\n.component-btn.btn-danger:hover {\n  background-color: #ff737e;\n  border: 1px solid #ff737e;\n}\n.component-btn.btn-danger:active {\n  background-color: #ff1c2f;\n  border: 1px solid #ff1c2f;\n}\n";
__$$styleInject(css$4);

const Button = args => {
	const {
		className,
		text
	} = args;
	let btn = document.createElement('button');
	btn.className = `component-btn ${className ? className : ""}`;
	btn.innerText = text;
	return btn;
};

let domFunc = e => {
    const {
        dom,
        style
    } = e;
    for (let i in style) {
        dom.style[i] = style[i];
    }
};

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// 添加Array属性
const addArrProp = e => Array.prototype.slice.call(e);

const isDomInPathFunc = args => {
    const {
        path,
        selector
    } = args;
    for (let i = 0; i < path.length; i++) {
        if (path[i] == document.querySelector(selector)) {
            return path[i];
        } else if (path[i] == document.body) {
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
    if (dom.style.animationName == animationName[1]) {
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
//feature function
const showDomFunc = args => {
    const {
        allDom,
        showDom
    } = args;
    allDom.map(dom => {
        dom.style.display = "none";
    });
    showDom.map(dom => {
        dom.style.display = "flex";
    });
};
// 添加事件
const addEvent$1 = e => {
    const {
        dom,
        event,
        func
    } = e;
    dom.addEventListener(event, func, false);
    return dom;
};

const Dom = {
    domFunc,
    sleep,
    isDomInPathFunc,
    domToggleAnimation,
    addArrProp,
    showDomFunc,
    addEvent: addEvent$1
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

const Modal = (() => {
    var _ref = asyncToGenerator(function* (args) {
        const {
            domFunc,
            sleep
        } = Dom;
        let {
            title,
            content,
            callback
        } = args;
        typeof args == 'string' && (content = args, title = '标题');
        if (title == undefined) {
            title = "{title: 请输入title参数}";
        }
        if (content == undefined) {
            content = "{content: 请输入content参数}";
        }
        if (callback == undefined) {
            callback = function () {};
        }
        let mask = document.createElement('div');
        mask.className = 'component-mask';
        mask.innerHTML = `
        <div class="component-model">
            <div class="component-model-header">
                <span class="title">${title}</span>
                ${Button({
            className: "confirm btn-close",
            text: "X"
        }).outerHTML}
            </div>
            <div class="component-model-body">
                    ${content}
            </div>
            <div class="component-model-footer">
                ${Button({
            className: "return",
            text: "返回"
        }).outerHTML}
                &nbsp;
                &nbsp;
                ${Button({
            className: "confirm btn-primary",
            text: "确认"
        }).outerHTML}
            </div>
        </div>
    `;
        domFunc({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        });
        document.body.appendChild(mask);
        yield sleep(300);
        mask.addEventListener('click', function (e) {
            e.stopPropagation();
            // e.preventDefault()
            // return false
            if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
            }
        }, false);
        let btns = mask.querySelectorAll('.component-model button');
        btns = Array.prototype.slice.call(btns);
        btns.forEach(function (dom) {
            dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
                if (dom.classList.contains('confirm')) {
                    callback();
                }
            });
        });
    });

    return function Modal(_x) {
        return _ref.apply(this, arguments);
    };
})();

var css$6 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 50;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-mask .component-table {\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  height: 100vh;\n  width: 100%;\n}\n.component-mask .component-table .component-table-header {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #980e0c;\n  color: #fff;\n  height: 45px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 40px;\n}\n.component-mask .component-table .component-table-body {\n  height: calc(100% - 45px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.component-mask .component-table .component-table-body .component-table-body-side {\n  width: 200px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  overflow-x: hidden;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fafafa;\n}\n.component-mask .component-table .component-table-body .component-table-body-side svg {\n  font-size: inherit;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .iconfont {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 16px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 60%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .text-container {\n  height: 60%;\n  -webkit-box-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .all {\n  height: 30px;\n  padding: 0 10px;\n  font-weight: bold;\n  overflow-y: hidden;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .list-container {\n  overflow-y: hidden;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .list-container .list {\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  height: 30px;\n  padding: 0 10px;\n  font-weight: bold;\n  overflow-y: hidden;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .list-container .list .text-container {\n  font-weight: 500;\n  font-size: 15px;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .list-container .list .icon-wujiaoxing {\n  font-size: 12px;\n  font-weight: 500;\n  font-size: 14px;\n}\n.component-mask .component-table .component-table-body .component-table-body-side .list-container .list.active {\n  background-color: #0277bd;\n  color: #fff;\n}\n.component-mask .component-table .component-table-body .component-table-body-container {\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .breadcrumb {\n  background-color: #fafafa;\n  height: 45px;\n  font-size: 14px;\n  padding: 0px 32px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  border: 1px solid #ccc;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .container-breadcrumb {\n  width: 200px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .container-breadcrumb svg {\n  font-size: 1rem;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .search-container {\n  background-color: #fafafa;\n  height: 45px;\n  padding: 0 23px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 5px;\n  margin: 10px 10px 0 10px;\n  border: 1px solid #ccc;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .search-container .search {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  max-width: 400px;\n  text-align: center;\n  border: 1px solid #707070;\n  border-radius: 5px;\n  cursor: pointer;\n  height: 27px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .search-container .search input {\n  width: calc(100% - 45px);\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .search-container .search span {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 13px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 10px;\n  border: 2px solid #ccc;\n  border-radius: 5px;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th .select,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th .select,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb .select,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb .select {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 110px;\n          flex: 0 0 110px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th .num,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th .num,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb .num,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb .num {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 100px;\n          flex: 0 1 100px;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th .name,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th .name,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb .name,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb .name {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th.tb,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th.tb,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb.tb,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb.tb {\n  height: 30px;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th.tb.tb:nth-child(even),\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th.tb.tb:nth-child(even),\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb.tb.tb:nth-child(even),\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb.tb.tb:nth-child(even) {\n  background-color: #f9f9f9;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .th.th,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .th.th,\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb.th,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb.th {\n  height: 40px;\n  padding: 0 30px 0 10px;\n  background-color: #eee;\n  position: relative;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .table .sec-table .tb-container,\n.component-mask .component-table .component-table-body .component-table-body-container .table .thr-table .tb-container {\n  height: calc(100% - 50px);\n  overflow-y: scroll;\n}\n.component-mask .component-table .component-table-body .component-table-body-container .group-btn {\n  margin: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 70px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.component-mask .component-table .component-table-body .empty {\n  position: absolute;\n  color: #980e0c;\n  font-weight: bold;\n  right: 15px;\n  cursor: pointer;\n}\n.component-mask .component-table .component-table-body .empty .icon {\n  font-size: 18px !important;\n}\n";
__$$styleInject(css$6);

var css$8 = "svg {\n  font-size: 28px;\n  min-width: 28px;\n}\nsvg.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\nsvg.icon.icon-success {\n  color: #52c41a;\n}\nsvg.icon.icon-error {\n  color: #f5222d;\n}\nsvg.icon.icon-warning {\n  color: #faad14;\n}\nsvg.icon.icon-info {\n  color: #039be5;\n}\nsvg.icon.icon-trash {\n  color: #980e0c;\n}\n";
__$$styleInject(css$8);

const Icon = args => {
	const {
		className,
		type
	} = args;
	if (type == "info") {
		let icon = `
			<svg
				class="icon" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#2196F3" p-id="1690"></path>
				<path d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" fill="#FFFFFF" p-id="1691"></path>
				<path d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FFFFFF" p-id="1692"></path>
			</svg>
		`;
		return icon;
	} else if (type == "success") {
		let icon = `
			<svg 
				class="icon icon-success" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z" p-id="1672" fill="#53c41b"></path>
			</svg>
		`;
		return icon;
	} else if (type == "error" || type == "delete") {
		let icon = `
			<svg 
				class="icon icon-error" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z" p-id="4168"></path>
			</svg>
		`;
		return icon;
	} else if (type == "warning" || type == "confirm") {
		let icon = `
			<svg 
				class="icon icon-warning" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 85.333333c-235.52 0-426.666667 190.933333-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM554.666667 554.666667l-85.333333 0 0-256 85.333333 0 0 256z" p-id="4282"></path>
			</svg>
		`;
		return icon;
	} else if (type == "spin") {
		let icon = `
			<svg 
				class="icon icon-info" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM512 256c141.39392 0 256 114.60608 256 256s-114.60608 256-256 256-256-114.60608-256-256 114.60608-256 256-256zM817.47968 817.47968c-81.59232 81.59232-190.07488 126.52544-305.47968 126.52544s-223.86688-44.93312-305.47968-126.52544-126.52544-190.07488-126.52544-305.47968c0-115.38432 44.93312-223.86688 126.52544-305.47968l67.8912 67.8912c0 0 0 0 0 0-131.01056 131.01056-131.01056 344.1664 0 475.17696 63.46752 63.46752 147.84512 98.4064 237.58848 98.4064s174.12096-34.95936 237.58848-98.4064c131.01056-131.01056 131.01056-344.1664 0-475.17696l67.8912-67.8912c81.59232 81.59232 126.52544 190.07488 126.52544 305.47968s-44.93312 223.86688-126.52544 305.47968z" p-id="1646"></path>
			</svg>
		`;
		return icon;
	} else if (type == "location") {
		let icon = `
			<svg 
				class="icon icon-location" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M999.619048 877.714286C999.619048 958.512762 781.312 1024 512 1024 242.688 1024 24.380952 958.512762 24.380952 877.714286 24.380952 809.496381 180.224 752.39619 390.777905 736.207238 292.62019 613.668571 170.666667 439.393524 170.666667 329.142857 170.666667 144.822857 320.853333 0 512 0 703.146667 0 853.333333 144.822857 853.333333 329.142857 853.333333 439.393524 731.37981 613.668571 633.222095 736.207238 843.776 752.39619 999.619048 809.496381 999.619048 877.714286ZM512 188.708571C430.08 188.708571 366.34819 250.148571 366.34819 329.142857 366.34819 408.137143 430.08 469.577143 512 469.577143 593.92 469.577143 657.65181 408.137143 657.65181 329.142857 657.65181 250.148571 593.92 188.708571 512 188.708571ZM632.880762 736.597333C567.100952 818.712381 512 877.714286 512 877.714286 512 877.714286 456.899048 818.712381 391.119238 736.597333 235.178667 749.372952 121.904762 785.700571 121.904762 828.952381 121.904762 882.834286 296.569905 926.47619 512 926.47619 727.430095 926.47619 902.095238 882.834286 902.095238 828.952381 902.095238 785.700571 788.821333 749.372952 632.880762 736.597333Z" p-id="1678"></path>
			</svg>
		`;
		return icon;
	} else if (type == ">") {
		let icon = `
			<svg 
				class="icon icon-more" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="1663"></path>
			</svg>
		`;
		return icon;
	} else if (type == ">>") {
		let icon = `
			<svg 
				class="icon icon-more" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M542.464 476.032 180.992 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256l335.104 378.368L112 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.8 0 25.728-5.376 34.688-15.872l361.472-419.84C557.696 518.528 557.568 493.056 542.464 476.032zM911.616 476.032 550.144 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256L816.64 506.496 481.152 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.928 0 25.728-5.376 34.688-15.872l361.472-419.84C926.848 518.528 926.72 493.056 911.616 476.032z" p-id="1797"></path>
			</svg>
		`;
		return icon;
	} else if (type == "trash") {
		let icon = `
			<svg class="icon icon-more" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M414.66 90.125h194.712q26.612 0 45.757 19.147t19.147 45.757v64.904h178.487q6.49 0 11.357 4.868t4.868 11.358v48.678h-713.943v-48.678q0-6.49 4.868-11.358t11.358-4.868h178.487v-64.904q0-26.611 19.147-45.757t45.757-19.147zM414.66 155.029v64.904h194.712v-64.904h-194.712zM804.084 349.739v519.231q0 26.611-19.147 45.757t-45.757 19.147h-454.326q-26.612 0-45.757-19.147t-19.147-45.757v-519.231h584.135zM284.853 414.644v454.326h64.904v-454.326h-64.904zM414.66 414.644v454.326h64.904v-454.326h-64.904zM544.468 414.644v454.326h64.904v-454.326h-64.904zM674.276 414.644v454.326h64.904v-454.326h-64.904z" p-id="1112"></path>
			</svg>
		`;
		return icon;
	} else if (type == "navlist") {
		let icon = `
			<svg class="icon icon-navlist" viewBox="0 0 1024 1024" width="200" height="200">
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
	} else if (type == "wujiaoxing") {
		let icon = `
			<svg class="icon icon-wujiaoxing" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M287.396584 1008.243249C220.760875 1044.901654 177.259858 1013.451582 190.1446 938.519486L225.376319 733.62741C229.653441 708.753597 218.681963 674.124419 200.514071 655.923566L30.954375 486.055972C-22.724177 432.280007-4.733453 380.837518 70.864079 371.190865L293.059958 342.837564C318.281479 339.619137 347.68609 318.272539 358.54979 295.549963L454.994798 93.825562C487.86137 25.081807 540.967183 25.193009 573.49223 93.825562L669.089607 295.549963C679.940896 318.447794 709.307564 339.873213 734.252191 343.345182L955.703234 374.168383C1031.169459 384.672365 1048.603546 436.98517 994.864989 490.790493L828.179794 657.682704C810.346266 675.538427 799.221506 710.767967 803.242417 735.81192L836.016513 939.943459C848.084627 1015.109213 804.217353 1045.92761 737.77616 1008.63228L554.56509 905.790672C532.440519 893.371558 496.781292 893.054186 473.931545 905.624535L287.396584 1008.243249Z" p-id="1537"></path>
			</svg>
		`;
		return icon;
	} else if (type == "unfold") {
		let icon = `
			<svg class="icon icon-unfold" viewBox="0 0 1024 1024" width="200" height="200">
				<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z" p-id="1685"></path>
			</svg>
		`;
		return icon;
	}
};

const {
    domFunc: domFunc$1,
    sleep: sleep$1,
    isDomInPathFunc: isDomInPathFunc$1,
    domToggleAnimation: domToggleAnimation$1,
    addArrProp: addArrProp$1,
    showDomFunc: showDomFunc$1
} = Dom;

const Table = (() => {
    var _ref = asyncToGenerator(function* (args) {
        let {
            data,
            callback
        } = args;
        if (callback == undefined) {
            callback = function () {};
        }
        let mask = document.createElement('div');
        mask.className = 'component-mask';
        mask.innerHTML = `
        <div class="component-table">
            <header class="component-table-header">
                请选择
            </header>
            <div class="component-table-body">
                <div class="component-table-body-side" id="side">
                    <div class="all" id="all">
                        ${Icon({ type: 'navlist' })}
                        <span class="text-container">全部</span>
                        ${Icon({ type: 'unfold' })}
                    </div>
                    <div class="list-container"></div>
                    <div class="flex-container"></div>
                </div>
                <div class="component-table-body-container">
                    <span class="breadcrumb">
                        <span class="container-breadcrumb">
                            ${Icon({ type: 'location' })}
                            全部 
                            ${Icon({ type: '>>' })}
                            红酒 
                            ${Icon({ type: '>>' })}
                            法斯特
                        </span>
                    </span>
                    <span class="search-container">
                        <span>商品搜索：</span>
                        <span class="search">
                            <input type="text">
                            <span>搜索</span>
                        </span>
                    </span>
                    <div class="table">
                        <div class="sec-table" id="sec-table">
                            <div class="th">
                                <span class="select">
                                    <input id="select-all" type="checkbox"/> 
                                    <label for="select-all">全选</label>
                                    <input id="select-reverse" type="checkbox"/> 
                                    <label for="select-reverse">反选</label>
                                </span>
                                <span class="num">编号</span>
                                <span class="name">名称</span>
                            </div>
                            <div class="tb-container"></div>
                        </div>
                        <div class="thr-table" id="thr-table">
                            <div class="th">
                                <span class="select">
                                    <input id="thr-select-all" type="checkbox"/> 
                                    <label for="thr-select-all">全选</label>
                                    <input id="thr-select-reverse" type="checkbox"/> 
                                    <label for="thr-select-reverse">反选</label>
                                </span>
                                <span class="num">编号</span>
                                <span class="name">名称</span>
                                <span class="empty">
                                    ${Icon({ type: 'trash' })}
                                    清空
                                </span>
                            </div>
                            <div class="tb-container">
                                <div class="tb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="group-btn">
                        ${Button({
            className: "return",
            text: "返回"
        }).outerHTML}
                        &nbsp;
                        &nbsp;
                        ${Button({
            className: "confirm btn-primary",
            text: "确认"
        }).outerHTML}
                    </div>
                </div>
            </div>
        </div>
    `;

        domFunc$1({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        });
        document.body.appendChild(mask);
        yield sleep$1(300);
        yield putDataToFirTable(data.title);
        yield putDataToSecTable(data.content);
        let btns = mask.querySelectorAll('.component-table button');
        btns = Array.prototype.slice.call(btns);
        yield btnAddevent({ btns, mask, callback });
        // 添加观察者
        yield secTableObserver();
        yield thrTableObserver();
        // all event proxy
        yield eventProxy({
            event: 'click'
        });
        yield eventProxy({
            event: 'change'
        });
    });

    return function Table(_x) {
        return _ref.apply(this, arguments);
    };
})();

const putDataToFirTable = (() => {
    var _ref2 = asyncToGenerator(function* (data) {
        let arr = data.map(function (row, i) {
            let div = document.createElement('div');
            let html = `
            ${Icon({ type: "wujiaoxing" })}
            <span class="text-container">` + row.name + `</span>
        `;
            div.className = "list";
            div.innerHTML = html;
            div.id = "sec" + i;
            div.dataset.type = i + 1;
            div.style.cursor = "pointer";
            let container = document.querySelector('.component-table .component-table-body-side .list-container');
            container.appendChild(div);
        });
    });

    return function putDataToFirTable(_x2) {
        return _ref2.apply(this, arguments);
    };
})();

const putDataToSecTable = (() => {
    var _ref3 = asyncToGenerator(function* (data) {
        // 将数据传入data之前先清空 container
        let secTableInputs = document.querySelector('.component-table-body-container .sec-table .tb-container');
        secTableInputs = Array.prototype.slice.call(secTableInputs);
        secTableInputs.map(function (input) {
            return input.parentElement.remove();
        });

        return data.map(function (row, i) {
            let sec_table = document.querySelector('.component-table-body-container .sec-table .tb-container');
            let div = document.createElement('div');
            div.className = "tb";
            let html = `
            <input class="select" type="checkbox"/>
            <span class="num">` + row.dept_code + `</span>
            <span class="name">` + row.name + `</span>
        `;
            div.innerHTML = html;
            div.id = "sec" + i;
            div.dataset.type = row.type;
            div.style.color = "#000";
            div.style.cursor = "pointer";
            sec_table.appendChild(div);
        });
    });

    return function putDataToSecTable(_x3) {
        return _ref3.apply(this, arguments);
    };
})();

const btnAddevent = args => {
    const {
        btns,
        mask,
        callback
    } = args;
    btns.forEach(dom => {
        dom.addEventListener('click', () => {
            mask.remove();
            if (dom.classList.contains('confirm')) {
                callback();
            }
        });
    });
};

const eventProxy = args => {
    const { event } = args;
    if (event == "click") {
        let handleAllEvent = e => {
            // toggle show all with first table 
            let isShowAllInPath = isDomInPathFunc$1({
                path: e.path,
                selector: "#all"
            });
            if (isShowAllInPath) {
                // add some animation
                let more = isShowAllInPath.querySelector('.icon-unfold');
                domToggleAnimation$1({
                    dom: more,
                    animationDuration: "0.3s",
                    animationFillMode: "forwards",
                    animationName: ["rotate-90", "rotate90"]
                });
                let listContainer = isShowAllInPath.parentElement.querySelector('.list-container');
                domToggleAnimation$1({
                    dom: listContainer,
                    animationDuration: "0.3s",
                    animationFillMode: "forwards",
                    animationName: ["slidein", "slideout"]
                });
            }
            // filter second table
            let firstTableLists = document.querySelectorAll('.list-container .list');
            firstTableLists = Array.prototype.slice.call(firstTableLists);
            firstTableLists.map((list, i) => {
                let isDomInPath = isDomInPathFunc$1({
                    path: e.path,
                    selector: ".list-container .list:nth-child(" + (i + 1) + ")"
                });
                if (isDomInPath) {
                    let allList = isDomInPath.parentElement.querySelectorAll('.list');
                    allList = Array.prototype.slice.call(allList);
                    allList.map(dom => {
                        dom.dataset.active = false;
                        dom.classList.remove('active');
                    });
                    isDomInPath.dataset.active = true;
                    isDomInPath.classList.add('active');
                }
            });
            // empty
            let isEmptyDom = isDomInPathFunc$1({
                path: e.path,
                selector: ".thr-table .empty"
            });
            if (isEmptyDom) {
                let inputs = isEmptyDom.parentElement.parentElement.querySelectorAll('.tb-container input.select');
                inputs.forEach(input => {
                    if (input.parentElement.style.display != 'none') {
                        input.parentElement.remove();
                        inputs = document.querySelectorAll('.sec-table input');
                        inputs.forEach(input => input.checked = false);
                    }
                });
            }
        };
        document.body.addEventListener(event, handleAllEvent, false);
    }
    if (event == 'change') {
        let handleAllEvent = e => {
            // selectAll
            let isSelectAllDom = isDomInPathFunc$1({
                path: e.path,
                selector: ".select #select-all"
            });
            if (isSelectAllDom) {
                let inputs = isSelectAllDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
                inputs.forEach(input => {
                    if (input.parentElement.style.display != 'none') {
                        input.checked = e.target.checked;
                        input.dataset.checked = e.target.checked;
                    }
                });
            }
            // selectReverse
            let isSelectReverseDom = isDomInPathFunc$1({
                path: e.path,
                selector: ".select #select-reverse"
            });
            if (isSelectReverseDom) {
                let inputs = isSelectReverseDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
                inputs.forEach(input => {
                    if (input.parentElement.style.display != 'none') {
                        input.checked = !input.checked;
                        input.dataset.checked = input.checked;
                    }
                });
            }
        };
        document.body.addEventListener(event, handleAllEvent, false);
    }
};

const secTableObserver = args => {
    let fir_table_container = document.querySelector('.component-table-body-side .list-container');
    let sec_table_container = document.querySelector('.component-table-body-container .sec-table .tb-container');
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    let observer = new MutationObserver(mutations => {
        let target = mutations.filter(mutation => mutation.target.dataset.active == 'true');
        if (!target.length) return;
        let index = target[0].target.dataset.type;
        let allDom = sec_table_container.querySelectorAll('input');
        allDom = addArrProp$1(allDom).map(dom => dom.parentElement);
        let showDom = sec_table_container.querySelectorAll('input');
        showDom = addArrProp$1(showDom).map(dom => dom.parentElement).filter(dom => dom.dataset.type == index);
        showDomFunc$1({
            allDom,
            showDom
        });
    });
    // 配置观察选项:
    let config = {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true
    };
    observer.observe(fir_table_container, config);
};

const thrTableObserver = args => {
    ////不适合单独监听啊，，直接复制选中的元素好了，垃圾算法
    let sec_table_container = document.querySelector('.component-table-body-container .sec-table .tb-container');
    let thr_table_container = document.querySelector('.component-table-body-container .thr-table .tb-container');
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    let observer = new MutationObserver(mutations => {
        let inputGroupAll = thr_table_container.querySelectorAll('input');
        inputGroupAll = Array.prototype.slice.call(inputGroupAll);
        inputGroupAll.map((input, i) => {
            input.parentElement.remove();
        });
        let inputGroup = sec_table_container.querySelectorAll('input:checked');
        inputGroup = Array.prototype.slice.call(inputGroup);
        inputGroup.map((input, i) => {
            let div = input.parentElement;
            let newChild = div.cloneNode(true);
            let oldChild = thr_table_container.querySelector('div:nth-child(' + (i + 1) + ')');
            newChild.style.display = "flex";
            addEvent({
                dom: newChild,
                envet: "click",
                func: e => e.path.filter(e => e.className == 'tb')[0].remove()
            });
            thr_table_container.insertBefore(newChild, oldChild);
            newChild.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
        });
    });
    let config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    };
    observer.observe(sec_table_container, config);
};

var css$10 = ".component-container {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 50;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: none;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.component-container .component-container-message {\n  top: 10px;\n  width: auto;\n  font-size: 16px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  margin: 0 10px 10px 10px;\n  padding: 10px 16px;\n  position: relative;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  background-color: #fff;\n}\n.component-container .component-container-message.info,\n.component-container .component-container-message.success,\n.component-container .component-container-message.warning {\n  -webkit-animation: slide-in 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: slide-in 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-container .component-container-message.error {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.component-container .component-container-message .icon {\n  min-width: 28px;\n}\n";
__$$styleInject(css$10);

const Message = (() => {
    var _ref = asyncToGenerator(function* (args) {
        const {
            domFunc,
            sleep
        } = Dom;
        let {
            type,
            content,
            callback,
            time
        } = args;
        typeof args == 'string' && (content = args);
        type = type == undefined ? "info" : type;
        time = time == undefined ? 3000 : time;
        content = content == undefined ? "{content: 请输入content参数}" : content;
        callback = callback == undefined ? function () {} : callback;

        if (document.querySelector('.component-container')) {
            var container = document.querySelector('.component-container');
        } else {
            var container = document.createElement('div');
            container.className = 'component-container';
            document.body.appendChild(container);
        }
        let message = document.createElement('div');
        message.className = `component-container-message ${type}`;
        message.innerHTML = `
        ${Icon({ type })}
        &nbsp;
        ${content}
    `;
        container.appendChild(message);
        yield sleep(time);
        message.remove();
    });

    return function Message(_x) {
        return _ref.apply(this, arguments);
    };
})();

var css$12 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 50;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-mask .component-modalInfo {\n  top: 16vh;\n  width: 80vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 416px;\n  z-index: 50;\n  min-height: 120px;\n  position: absolute;\n  border-radius: 4px;\n  background-color: #fff;\n  box-sizing: border-box;\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-clip: padding-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    left: 10vw;\n  }\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 32px 32px 24px 18px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 15px;\n  }\n}\n.component-mask .component-modalInfo .component-model-header {\n  margin-bottom: 8px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n}\n.component-mask .component-modalInfo .component-model-header .icon {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 15%;\n          flex: 2 2 15%;\n}\n.component-mask .component-modalInfo .component-model-header .title {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: bold;\n  font-size: 16px;\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 85%;\n          flex: 2 2 85%;\n  color: #212121;\n}\n.component-mask .component-modalInfo .component-model-body {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  word-break: break-word;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 38px;\n  }\n}\n.component-mask .component-modalInfo .component-modalInfo-footer {\n  margin-top: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.component-mask .component-modalInfo .component-modalInfo-footer .component-btn {\n  margin-left: 5px;\n}\n";
__$$styleInject(css$12);

const ModalInfo = (() => {
    var _ref = asyncToGenerator(function* (args) {
        const {
            domFunc,
            sleep
        } = Dom;
        let {
            type,
            content,
            title,
            callback
        } = args;
        typeof args == 'string' && (content = args, type = 'info');
        if (type == undefined) {
            type = "info";
        }
        if (title == undefined) {
            title = "提示";
        }
        if (content == undefined) {
            content = "{content: 请输入content参数}";
        }
        if (callback == undefined) {
            callback = function () {};
        }
        if (!type.match(/(info|success|error|warning|confirm|delete)/)) {
            type = "info";
        }
        let mask = document.createElement('div');
        mask.className = 'component-mask';
        mask.innerHTML = `
        <div class="component-modalInfo">
            <div class="component-model-header">
                ${Icon({
            type
        })}
                <span class="title">${title}</span>
            </div>
            <div class="component-model-body">
                ${content}
            </div>
            <div class="component-modalInfo-footer">
                ${type == "confirm" || type == "delete" ? Button({
            className: "cancal",
            text: "取消"
        }).outerHTML : ""}
                ${Button({
            className: `confirm ${type == "delete" ? "btn-danger" : "btn-primary"}`,
            text: "确认"
        }).outerHTML}
            </div>
        </div>
    `;
        domFunc({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        });
        document.body.appendChild(mask);
        yield sleep(300);
        mask.addEventListener('click', function (e) {
            e.stopPropagation();
            // e.preventDefault()
            // return false
            if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
            }
        }, false);
        let btns = mask.querySelectorAll('.component-modalInfo button');
        btns = Array.prototype.slice.call(btns);
        btns.forEach(function (dom) {
            dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
                if (dom.classList.contains('confirm')) {
                    callback();
                }
            });
        });
    });

    return function ModalInfo(_x) {
        return _ref.apply(this, arguments);
    };
})();

var css$14 = "@media (min-width: 768px) {\n  .component-container-spin {\n    width: 100%;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.6);\n    top: 0;\n    left: 0;\n    z-index: 50;\n    cursor: wait;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .component-container-spin.component-container-global {\n    height: 100vh;\n    position: fixed;\n    z-index: 50;\n    pointer-events: none;\n    top: 0;\n  }\n  .component-container-spin.component-container-global .spin-container {\n    position: absolute;\n    top: 25%;\n  }\n  .component-container-spin .spin-container {\n    height: 60px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .component-container-spin .spin-container .icon {\n    -webkit-animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n            animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n  }\n  .component-container-spin .spin-container span {\n    color: #0277bd;\n    text-shadow: 0 1px 2px #fff;\n  }\n}\n@media (max-width: 768px) {\n  .component-container-spin {\n    width: 100%;\n    height: 100%;\n    z-index: 50;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 0;\n  }\n  .component-container-spin.component-container-global {\n    height: 100vh;\n    z-index: 50;\n    -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n  .component-container-spin .spin-container {\n    bottom: 10vh;\n    -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n            animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 40vw;\n    max-width: 130px;\n    height: 40vw;\n    max-height: 130px;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n  }\n  .component-container-spin .spin-container .icon {\n    font-size: 40px;\n    color: #fff;\n    -webkit-animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n            animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n  }\n  .component-container-spin .spin-container span {\n    font-size: 20px;\n    color: #fff;\n    padding-top: 5px;\n    text-shadow: 0 1px 2px #fff;\n  }\n}\n";
__$$styleInject(css$14);

const Spin = args => {
    const {
        domFunc
    } = Dom;
    if (args == undefined) {
        var dom = document.body;
    } else {
        var { dom } = args;
        dom = dom == undefined ? document.body : dom;
    }
    if (!!dom.querySelector('.component-container-spin')) {
        dom.querySelector('.component-container-spin').remove();
        domFunc({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `0px`,
                overflow: "auto"
            }
        });
    } else {
        dom.style.position = "relative";
        let container = document.createElement('div');
        container.className = `component-container-spin ${dom == document.body ? "component-container-global" : ""}`;
        container.innerHTML = `
            <div class="spin-container">
                ${Icon({ type: 'spin' })}
                <span>Loading...</span>
            </div>
        `;
        container.addEventListener('click', e => {
            e.stopPropagation();
            // e.preventDefault()
            // return false
        });
        domFunc({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        });
        dom.appendChild(container);
    }
};

var css$14 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 50;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-mask .component-modalInfo {\n  top: 16vh;\n  width: 80vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 416px;\n  z-index: 50;\n  min-height: 120px;\n  position: absolute;\n  border-radius: 4px;\n  background-color: #fff;\n  box-sizing: border-box;\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-clip: padding-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    left: 10vw;\n  }\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 32px 32px 24px 18px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 15px;\n  }\n}\n.component-mask .component-modalInfo .component-model-header {\n  margin-bottom: 8px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n}\n.component-mask .component-modalInfo .component-model-header .icon {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 15%;\n          flex: 2 2 15%;\n}\n.component-mask .component-modalInfo .component-model-header .title {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: bold;\n  font-size: 16px;\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 85%;\n          flex: 2 2 85%;\n  color: #212121;\n}\n.component-mask .component-modalInfo .component-model-body {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  word-break: break-word;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 38px;\n  }\n}\n.component-mask .component-modalInfo .component-modalInfo-footer {\n  margin-top: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.component-mask .component-modalInfo .component-modalInfo-footer .component-btn {\n  margin-left: 5px;\n}\n";
__$$styleInject(css$14);

const ModalInfo$2 = (() => {
    var _ref = asyncToGenerator(function* (args) {
        const {
            domFunc,
            sleep
        } = Dom;
        let {
            data,
            callback,
            type
        } = args;
        if (data == undefined) {
            console.error(`必须要有数据啊`);
            console.error(`{
            data:[1,2,3,4,5,6]
        }`);
        }
        if (type == undefined) {
            console.error(`{
            type: table/treeTable
        }`);
        }
        if (callback == undefined) {
            callback = function () {};
        }
        let mask = document.createElement('div');
        mask.className = 'component-mask';
        mask.innerHTML = `
        <div class="component-modalInfo">
            <div class="component-model-header">
                ${Icon({
            type
        })}
                <span class="title">${title}</span>
            </div>
            <div class="component-model-body">
                ${content}
            </div>
            <div class="component-modalInfo-footer">
                ${type == "confirm" || type == "delete" ? Button({
            className: "cancal",
            text: "取消"
        }).outerHTML : ""}
                ${Button({
            className: `confirm ${type == "delete" ? "btn-danger" : "btn-primary"}`,
            text: "确认"
        }).outerHTML}
            </div>
        </div>
    `;
        domFunc({
            dom: document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        });
        document.body.appendChild(mask);
        yield sleep(300);
        mask.addEventListener('click', function (e) {
            e.stopPropagation();
            // e.preventDefault()
            // return false
            if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
            }
        }, false);
        let btns = mask.querySelectorAll('.component-modalInfo button');
        btns = Array.prototype.slice.call(btns);
        btns.forEach(function (dom) {
            dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                    dom: document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                });
                if (dom.classList.contains('confirm')) {
                    callback();
                }
            });
        });
    });

    return function ModalInfo(_x) {
        return _ref.apply(this, arguments);
    };
})();

const Component = {
    pc: {
        message: Message,
        spin: Spin,
        modal: Modal,
        table: ModalInfo$2,
        modalInfo: ModalInfo,
        table: Table,
        container: {
            button: Button,
            icon: Icon
        }
    },
    mobile: {
        message: Message,
        spin: Spin,
        modal: Modal,
        modalInfo: ModalInfo,
        container: {
            button: Button,
            icon: Icon
        }
    }
};

module.exports = Component;
