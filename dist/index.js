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

var index = 42;

var $ = function $(n) {
	return document.querySelector(n);
};

var css = ".border.platform {\n  background-color: #eb854d;\n}\n.border.education {\n  background-color: #5DDAA6;\n}\n.border.lock {\n  background-color: #5BB2EF;\n}\n@font-face {\n  font-family: \"Reem Kufi\";\n  src: url(\"../../assets/font/a.woff\");\n}\n.iconfont {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nblockquote,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nfieldset,\nlegend,\nbutton,\ninput,\ntextarea,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\npre[class*=\"language-\"] {\n  padding: 0.7em;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nsmall {\n  font-size: 12px;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  color: #c97373;\n}\na:hover {\n  text-decoration: underline;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\nlegend {\n  color: #000;\n}\nfieldset,\nimg {\n  border: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 设置滚动条的样式 */\n@-webkit-keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@-webkit-keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@-webkit-keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n.join-us-icon {\n  width: 126px;\n  height: 30px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border: 1px solid #ca1523;\n}\n.join-us-icon .icon-get-more {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 30px;\n  background-color: #ca1523;\n  color: #fff;\n}\n.join-us-icon .content {\n  font-size: 1.2rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.join-us-icon:hover .icon-get-more {\n  background-color: #fff;\n  color: #ca1523;\n}\n.join-us-icon:hover .content {\n  background-color: #ca1523;\n  color: #fff;\n}\n.icon-circle {\n  width: 19px;\n  height: 19px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.icon-circle.yellow {\n  background: linear-gradient(to top right, #cca235, #feeb3f);\n}\n.icon-circle.blue {\n  background: linear-gradient(to top right, #63b4cc, #8af6f9);\n}\n.icon-circle.red {\n  background: linear-gradient(to top right, #e74642, #fda283);\n}\nsvg.icon {\n  /* 通过设置 font-size 来改变图标大小 */\n  width: 1em;\n  height: 1em;\n  /* 图标和文字相邻时，垂直对齐 */\n  vertical-align: -0.15em;\n  /* 通过设置 color 来改变 SVG 的颜色/fill */\n  fill: currentColor;\n  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示\n\t\t   normalize.css 中也包含这行 */\n  overflow: hidden;\n}\n.education-background {\n  background-color: #5DDAA6;\n}\n.lock-background {\n  background-color: #5BB2EF;\n}\n.platform-background {\n  background-color: #eb854d;\n}\n.back-to-top {\n  right: 5%;\n  bottom: 5%;\n  cursor: pointer;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0);\n}\n.back-to-top i {\n  font-size: 5rem;\n  color: #bdbdbd;\n}\n@-webkit-keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@-webkit-keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@-webkit-keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@-webkit-keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@-webkit-keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n.component-mask {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-mask .component-model {\n  -webkit-transform-origin: -6px 182px 0px;\n          transform-origin: -6px 182px 0px;\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: scale-top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 100%;\n  min-height: 220px;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-model .component-model-header {\n  padding: 0 0 0 24px;\n  height: 55px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n.component-mask .component-model .component-model-header .title {\n  color: #212121;\n}\n.component-mask .component-model .component-model-header .btn-close {\n  border: 0;\n  width: 56px;\n  height: 100%;\n  color: #757575;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n.component-mask .component-model .component-model-header .btn-close:hover {\n  color: #212121;\n  font-weight: bold;\n}\n.component-mask .component-model .component-model-header .btn-close:active {\n  font-weight: bold;\n  color: #212121;\n}\n.component-mask .component-model .component-model-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 24px;\n  font-size: 14px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.component-mask .component-model .component-model-footer {\n  height: 55px;\n  padding: 0 24px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n";
__$$styleInject(css);

var css$2 = ".border.platform {\n  background-color: #eb854d;\n}\n.border.education {\n  background-color: #5DDAA6;\n}\n.border.lock {\n  background-color: #5BB2EF;\n}\n@font-face {\n  font-family: \"Reem Kufi\";\n  src: url(\"../../assets/font/a.woff\");\n}\n.iconfont {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nblockquote,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nfieldset,\nlegend,\nbutton,\ninput,\ntextarea,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\npre[class*=\"language-\"] {\n  padding: 0.7em;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nsmall {\n  font-size: 12px;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  color: #c97373;\n}\na:hover {\n  text-decoration: underline;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\nlegend {\n  color: #000;\n}\nfieldset,\nimg {\n  border: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 设置滚动条的样式 */\n@-webkit-keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@-webkit-keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@-webkit-keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n.join-us-icon {\n  width: 126px;\n  height: 30px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border: 1px solid #ca1523;\n}\n.join-us-icon .icon-get-more {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 30px;\n  background-color: #ca1523;\n  color: #fff;\n}\n.join-us-icon .content {\n  font-size: 1.2rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.join-us-icon:hover .icon-get-more {\n  background-color: #fff;\n  color: #ca1523;\n}\n.join-us-icon:hover .content {\n  background-color: #ca1523;\n  color: #fff;\n}\n.icon-circle {\n  width: 19px;\n  height: 19px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.icon-circle.yellow {\n  background: linear-gradient(to top right, #cca235, #feeb3f);\n}\n.icon-circle.blue {\n  background: linear-gradient(to top right, #63b4cc, #8af6f9);\n}\n.icon-circle.red {\n  background: linear-gradient(to top right, #e74642, #fda283);\n}\nsvg.icon {\n  /* 通过设置 font-size 来改变图标大小 */\n  width: 1em;\n  height: 1em;\n  /* 图标和文字相邻时，垂直对齐 */\n  vertical-align: -0.15em;\n  /* 通过设置 color 来改变 SVG 的颜色/fill */\n  fill: currentColor;\n  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示\n\t\t   normalize.css 中也包含这行 */\n  overflow: hidden;\n}\n.education-background {\n  background-color: #5DDAA6;\n}\n.lock-background {\n  background-color: #5BB2EF;\n}\n.platform-background {\n  background-color: #eb854d;\n}\n.back-to-top {\n  right: 5%;\n  bottom: 5%;\n  cursor: pointer;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0);\n}\n.back-to-top i {\n  font-size: 5rem;\n  color: #bdbdbd;\n}\n@-webkit-keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@-webkit-keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@-webkit-keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@-webkit-keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@-webkit-keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n.component-btn {\n  outline: none;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  height: 32px;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0px 15px;\n  border-radius: 4px;\n  white-space: nowrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-btn:hover {\n  color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn:active {\n  color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.component-btn.btn-primary {\n  color: #fff;\n  border: 1px solid #039be5;\n  background-color: #039be5;\n}\n.component-btn.btn-primary:hover {\n  background-color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn.btn-primary:active {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n";
__$$styleInject(css$2);

var Button = function Button(args) {
	var className = args.className,
	    text = args.text;

	var btn = document.createElement('button');
	btn.className = "component-btn " + (className ? className : "");
	btn.innerText = text;
	return btn;
};

var Modal = function Modal(args) {
    var title = args.title,
        content = args.content,
        callback = args.callback;

    if (title == undefined) {
        title = "{title: 请输入title参数}";
    }
    if (content == undefined) {
        content = "{content: 请输入content参数}";
    }
    if (callback == undefined) {
        callback = function callback() {};
    }
    var mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = '\n        <div class="component-model">\n            <div class="component-model-header">\n                <span class="title">' + title + '</span>\n                ' + Button({
        className: "confirm btn-close",
        text: "X"
    }).outerHTML + '\n            </div>\n            <div class="component-model-body">\n                    ' + content + '\n            </div>\n            <div class="component-model-footer">\n                ' + Button({
        className: "return",
        text: "返回"
    }).outerHTML + '\n                &nbsp;\n                &nbsp;\n                ' + Button({
        className: "confirm btn-primary",
        text: "确认"
    }).outerHTML + '\n            </div>\n        </div>\n    ';
    mask.addEventListener('click', function (e) {
        e.stopPropagation();
        // e.preventDefault()
        // return false
        if (e.path[0].classList.contains('component-mask')) {
            mask.remove();
            $('body').style.overflow = "auto";
        }
    }, false);
    var btns = mask.querySelectorAll('.component-model button');
    btns.forEach(function (dom) {
        dom.addEventListener('click', function () {
            mask.remove();
            $('body').style.overflow = "auto";
            if (dom.classList.contains('confirm')) {
                callback();
            }
        });
    });
    $('body').style.overflow = "hidden";
    $('body').append(mask);
};

// let removeAnimation = e =>{
//     const {
//         dom,
//         styles
//     } = e
//     for(let style in styles){
//         console.log(
//             style,": ",styles[style]
//         );
//         dom.style[style] = styles[style]
//     }
// }

var css$4 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-mask .component-modalInfo {\n  -webkit-transform-origin: -6px 182px 0px;\n          transform-origin: -6px 182px 0px;\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: scale-top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 100%;\n  min-height: 186px;\n  position: absolute;\n  max-width: 416px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-modalInfo .component-modalInfo-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 24px 5px;\n  font-size: 14px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-modalInfo .component-modalInfo-body .icon {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 5%;\n          flex: 2 2 5%;\n}\n.component-mask .component-modalInfo .component-modalInfo-body .component-modalInfo-body-container {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 80%;\n          flex: 2 2 80%;\n}\n.component-mask .component-modalInfo .component-modalInfo-footer {\n  height: 55px;\n  padding: 0 24px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n";
__$$styleInject(css$4);

var css$6 = "svg.icon {\n  font-size: 32px;\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n";
__$$styleInject(css$6);

var Icon = function Icon(args) {
	var className = args.className,
	    type = args.type;

	if (type == "info") {
		var icon = "\n\t\t\t<svg\n\t\t\t\tclass=\"icon " + className + "\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z\" fill=\"#2196F3\" p-id=\"1690\"></path>\n\t\t\t\t<path d=\"M469.333333 469.333333h85.333334v234.666667h-85.333334z\" fill=\"#FFFFFF\" p-id=\"1691\"></path>\n\t\t\t\t<path d=\"M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z\" fill=\"#FFFFFF\" p-id=\"1692\"></path>\n\t\t\t</svg>\n\t\t";
		return icon;
	}
};

var ModalInfo = function ModalInfo(args) {
    var type = args.type,
        content = args.content,
        callback = args.callback;

    if (!type.match(/(info|success|error|warning)/)) {
        type = "info";
    }
    if (content == undefined) {
        content = "{content: 请输入content参数}";
    }
    if (callback == undefined) {
        callback = function callback() {};
    }
    var mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = '\n        <div class="component-modalInfo">\n            <div class="component-modalInfo-body">\n                ' + Icon({
        type: type
    }) + '\n                <span class="component-modalInfo-body-container">\n                    ' + content + '\n                </span>\n            </div>\n            <div class="component-modalInfo-footer">\n                ' + Button({
        className: "confirm btn-primary",
        text: "确认"
    }).outerHTML + '\n            </div>\n        </div>\n    ';
    mask.addEventListener('click', function (e) {
        e.stopPropagation();
        // e.preventDefault()
        // return false
        if (e.path[0].classList.contains('component-mask')) {
            mask.remove();
            $('body').style.overflow = "auto";
        }
    }, false);
    var btns = mask.querySelectorAll('.component-model button');
    btns.forEach(function (dom) {
        dom.addEventListener('click', function () {
            mask.remove();
            $('body').style.overflow = "auto";
            if (dom.classList.contains('confirm')) {
                callback();
            }
        });
    });
    $('body').style.overflow = "hidden";
    $('body').append(mask);
};

var Component = {
    modal: Modal,
    modalInfo: ModalInfo,
    button: Button
};

console.log("the answer is " + index + " " + Component);
