// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
'use strict';

var Button = function Button(args) {
  var className = args.className,
      text = args.text;

  var btn = document.createElement('button');
  btn.className = "component-btn " + (className ? className : "");
  btn.innerText = text;
  return btn;
};

var domFunc = function domFunc(e) {
  var dom = e.dom,
      style = e.style;

  for (var i in style) {
    dom.style[i] = style[i];
  }
};

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

// 添加Array属性
var addArrProp = function addArrProp(e) {
  return Array.prototype.slice.call(e);
};
// 只能判断精确到个体dom元素，无法判断一个系列的dom是否处于点击范围
var isDomInPathFunc = function isDomInPathFunc(args) {
  var path = args.path,
      selector = args.selector;

  for (var i = 0; i < path.length; i++) {
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
var isDomFunc = function isDomFunc(args) {
  var path = args.path,
      dom = args.dom;

  for (var i = 0; i < path.length; i++) {
    if (path[i] == dom) {
      return dom;
    } else if (path[i] == document.body) {
      return false;
    }
  }
};
// toggle show dom animation
var domToggleAnimation = function domToggleAnimation(args) {
  var dom = args.dom,
      animationName = args.animationName,
      animationDuration = args.animationDuration,
      animationFillMode = args.animationFillMode;

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
var showDomFunc = function showDomFunc(args) {
  var allDom = args.allDom,
      showDom = args.showDom;

  allDom.map(function (dom) {
    dom.style.display = "none";
  });
  showDom.map(function (dom) {
    dom.style.display = "flex";
  });
};
// 添加事件
var addEvent = function addEvent(e) {
  var dom = e.dom,
      event = e.event,
      func = e.func;

  dom.addEventListener(event, func, false);
  return dom;
};

// 字符串转Boolean
var transformStringToBool = function transformStringToBool(e) {
  if (e == 'true') {
    return true;
  } else {
    return false;
  }
};

var Dom = {
  domFunc: domFunc,
  sleep: sleep,
  isDomInPathFunc: isDomInPathFunc,
  domToggleAnimation: domToggleAnimation,
  transformStringToBool: transformStringToBool,
  addArrProp: addArrProp,
  showDomFunc: showDomFunc,
  addEvent: addEvent,
  isDomFunc: isDomFunc
};

var asyncToGenerator = function asyncToGenerator(fn) {
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

var _this = undefined;

var Modal = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var domFunc, sleep, title, content, callback, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            title = args.title, content = args.content, callback = args.callback;

            typeof args == 'string' && (content = args, title = '标题');
            if (title == undefined) {
              title = "{title: 请输入title参数}";
            }
            if (content == undefined) {
              content = "{content: 请输入content参数}";
            }
            if (callback == undefined) {
              callback = function callback() {};
            }
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-model\">\n            <div class=\"component-model-header\">\n                <span class=\"title\">" + title + "</span>\n                " + Button({
              className: "confirm btn-close",
              text: "X"
            }).outerHTML + "\n            </div>\n            <div class=\"component-model-body\">\n                    " + content + "\n            </div>\n            <div class=\"component-model-footer\">\n                " + Button({
              className: "return",
              text: "返回"
            }).outerHTML + "\n                &nbsp;\n                &nbsp;\n                " + Button({
              className: "confirm btn-primary",
              text: "确认"
            }).outerHTML + "\n            </div>\n        </div>\n    ";
            domFunc({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 13;
            return sleep(500);

          case 13:
            mask.addEventListener('click', function (e) {
              e.stopPropagation();
              // e.preventDefault()
              // return false
              if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
              }
            }, false);
            btns = mask.querySelectorAll('.component-model button');

            btns = Array.prototype.slice.call(btns);
            btns.forEach(function (dom) {
              dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
                if (dom.classList.contains('confirm')) {
                  callback();
                }
              });
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function Modal(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Icon = function Icon(args) {
  var className = args.className,
      type = args.type;

  if (type == "info") {
    var icon = "\n\t\t\t<svg\n\t\t\t\tclass=\"icon\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z\" fill=\"#2196F3\" p-id=\"1690\"></path>\n\t\t\t\t<path d=\"M469.333333 469.333333h85.333334v234.666667h-85.333334z\" fill=\"#FFFFFF\" p-id=\"1691\"></path>\n\t\t\t\t<path d=\"M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z\" fill=\"#FFFFFF\" p-id=\"1692\"></path>\n\t\t\t</svg>\n\t\t";
    return icon;
  } else if (type == "success") {
    var _icon = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-success\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z\" p-id=\"1672\" fill=\"#53c41b\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon;
  } else if (type == "error" || type == "delete") {
    var _icon2 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-error\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z\" p-id=\"4168\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon2;
  } else if (type == "warning" || type == "confirm") {
    var _icon3 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-warning\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 85.333333c-235.52 0-426.666667 190.933333-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM554.666667 554.666667l-85.333333 0 0-256 85.333333 0 0 256z\" p-id=\"4282\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon3;
  } else if (type == "spin") {
    var _icon4 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-info\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM512 256c141.39392 0 256 114.60608 256 256s-114.60608 256-256 256-256-114.60608-256-256 114.60608-256 256-256zM817.47968 817.47968c-81.59232 81.59232-190.07488 126.52544-305.47968 126.52544s-223.86688-44.93312-305.47968-126.52544-126.52544-190.07488-126.52544-305.47968c0-115.38432 44.93312-223.86688 126.52544-305.47968l67.8912 67.8912c0 0 0 0 0 0-131.01056 131.01056-131.01056 344.1664 0 475.17696 63.46752 63.46752 147.84512 98.4064 237.58848 98.4064s174.12096-34.95936 237.58848-98.4064c131.01056-131.01056 131.01056-344.1664 0-475.17696l67.8912-67.8912c81.59232 81.59232 126.52544 190.07488 126.52544 305.47968s-44.93312 223.86688-126.52544 305.47968z\" p-id=\"1646\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon4;
  } else if (type == "location") {
    var _icon5 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-location\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M999.619048 877.714286C999.619048 958.512762 781.312 1024 512 1024 242.688 1024 24.380952 958.512762 24.380952 877.714286 24.380952 809.496381 180.224 752.39619 390.777905 736.207238 292.62019 613.668571 170.666667 439.393524 170.666667 329.142857 170.666667 144.822857 320.853333 0 512 0 703.146667 0 853.333333 144.822857 853.333333 329.142857 853.333333 439.393524 731.37981 613.668571 633.222095 736.207238 843.776 752.39619 999.619048 809.496381 999.619048 877.714286ZM512 188.708571C430.08 188.708571 366.34819 250.148571 366.34819 329.142857 366.34819 408.137143 430.08 469.577143 512 469.577143 593.92 469.577143 657.65181 408.137143 657.65181 329.142857 657.65181 250.148571 593.92 188.708571 512 188.708571ZM632.880762 736.597333C567.100952 818.712381 512 877.714286 512 877.714286 512 877.714286 456.899048 818.712381 391.119238 736.597333 235.178667 749.372952 121.904762 785.700571 121.904762 828.952381 121.904762 882.834286 296.569905 926.47619 512 926.47619 727.430095 926.47619 902.095238 882.834286 902.095238 828.952381 902.095238 785.700571 788.821333 749.372952 632.880762 736.597333Z\" p-id=\"1678\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon5;
  } else if (type == ">") {
    var _icon6 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-more\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z\" p-id=\"1663\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon6;
  } else if (type == ">>") {
    var _icon7 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-more\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M542.464 476.032 180.992 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256l335.104 378.368L112 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.8 0 25.728-5.376 34.688-15.872l361.472-419.84C557.696 518.528 557.568 493.056 542.464 476.032zM911.616 476.032 550.144 67.968c-16.64-18.944-45.696-20.608-64.512-4.096-18.944 16.64-20.736 45.44-4.096 64.256L816.64 506.496 481.152 896.256c-16.512 19.072-14.208 47.872 4.992 64.256 8.576 7.424 19.2 11.008 29.696 11.008 12.928 0 25.728-5.376 34.688-15.872l361.472-419.84C926.848 518.528 926.72 493.056 911.616 476.032z\" p-id=\"1797\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon7;
  } else if (type == "trash") {
    var _icon8 = "\n\t\t\t<svg class=\"icon icon-more\" viewBox=\"0 0 1024 1024\" width=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M414.66 90.125h194.712q26.612 0 45.757 19.147t19.147 45.757v64.904h178.487q6.49 0 11.357 4.868t4.868 11.358v48.678h-713.943v-48.678q0-6.49 4.868-11.358t11.358-4.868h178.487v-64.904q0-26.611 19.147-45.757t45.757-19.147zM414.66 155.029v64.904h194.712v-64.904h-194.712zM804.084 349.739v519.231q0 26.611-19.147 45.757t-45.757 19.147h-454.326q-26.612 0-45.757-19.147t-19.147-45.757v-519.231h584.135zM284.853 414.644v454.326h64.904v-454.326h-64.904zM414.66 414.644v454.326h64.904v-454.326h-64.904zM544.468 414.644v454.326h64.904v-454.326h-64.904zM674.276 414.644v454.326h64.904v-454.326h-64.904z\" p-id=\"1112\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon8;
  } else if (type == "navlist") {
    var _icon9 = "\n\t\t\t<svg class=\"icon icon-navlist\" viewBox=\"0 0 1024 1024\" width=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M284.416 118.016l711.168 0C1011.2768 118.016 1024 105.2928 1024 89.6c0-15.6928-12.7232-28.416-28.416-28.416L284.416 61.184C268.7232 61.184 256 73.9072 256 89.6 256 105.2928 268.7232 118.016 284.416 118.016z\" p-id=\"1408\"></path>\n\t\t\t\t<path d=\"M125.184 61.184 28.416 61.184C12.7232 61.184 0 73.9072 0 89.6c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 118.016 153.6 105.2928 153.6 89.6 153.6 73.9072 140.8768 61.184 125.184 61.184z\" p-id=\"1409\"></path>\n\t\t\t\t<path d=\"M995.584 342.784 284.416 342.784c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6928 12.7232 28.416 28.416 28.416l711.168 0c15.6928 0 28.416-12.7232 28.416-28.416C1024 355.5072 1011.2768 342.784 995.584 342.784z\" p-id=\"1410\"></path>\n\t\t\t\t<path d=\"M125.184 342.784 28.416 342.784C12.7232 342.784 0 355.5072 0 371.2c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 399.616 153.6 386.8928 153.6 371.2 153.6 355.5072 140.8768 342.784 125.184 342.784z\" p-id=\"1411\"></path>\n\t\t\t\t<path d=\"M585.984 905.984 284.416 905.984c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 918.7072 601.6768 905.984 585.984 905.984z\" p-id=\"1412\"></path>\n\t\t\t\t<path d=\"M125.184 905.984 28.416 905.984C12.7232 905.984 0 918.7072 0 934.3744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 918.7072 140.8768 905.984 125.184 905.984z\" p-id=\"1413\"></path>\n\t\t\t\t<path d=\"M585.984 624.384 284.416 624.384c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 637.1072 601.6768 624.384 585.984 624.384z\" p-id=\"1414\"></path>\n\t\t\t\t<path d=\"M125.184 624.384 28.416 624.384C12.7232 624.384 0 637.1072 0 652.7744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 637.1072 140.8768 624.384 125.184 624.384z\" p-id=\"1415\"></path>\n\t\t\t\t<path d=\"M995.584 729.6256l-122.368 0 0-122.368c0-15.6928-12.7232-28.416-28.3904-28.416-15.6928 0-28.416 12.7232-28.416 28.416l0 122.368L694.016 729.6256c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6672 12.7232 28.3904 28.416 28.3904l122.3424 0L816.3584 908.8c0 15.6928 12.7232 28.416 28.416 28.416 15.6672 0 28.3904-12.7232 28.3904-28.416l0-122.3424 122.368 0c15.6928 0 28.416-12.7232 28.416-28.3904C1024 742.3488 1011.2768 729.6256 995.584 729.6256z\" p-id=\"1416\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon9;
  } else if (type == "wujiaoxing") {
    var _icon10 = "\n\t\t\t<svg class=\"icon icon-wujiaoxing\" viewBox=\"0 0 1024 1024\" width=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M287.396584 1008.243249C220.760875 1044.901654 177.259858 1013.451582 190.1446 938.519486L225.376319 733.62741C229.653441 708.753597 218.681963 674.124419 200.514071 655.923566L30.954375 486.055972C-22.724177 432.280007-4.733453 380.837518 70.864079 371.190865L293.059958 342.837564C318.281479 339.619137 347.68609 318.272539 358.54979 295.549963L454.994798 93.825562C487.86137 25.081807 540.967183 25.193009 573.49223 93.825562L669.089607 295.549963C679.940896 318.447794 709.307564 339.873213 734.252191 343.345182L955.703234 374.168383C1031.169459 384.672365 1048.603546 436.98517 994.864989 490.790493L828.179794 657.682704C810.346266 675.538427 799.221506 710.767967 803.242417 735.81192L836.016513 939.943459C848.084627 1015.109213 804.217353 1045.92761 737.77616 1008.63228L554.56509 905.790672C532.440519 893.371558 496.781292 893.054186 473.931545 905.624535L287.396584 1008.243249Z\" p-id=\"1537\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon10;
  } else if (type == "unfold") {
    var _icon11 = "\n\t\t\t<svg class=\"icon icon-unfold\" viewBox=\"0 0 1024 1024\" width=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z\" p-id=\"1685\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon11;
  }
};

var _this$1 = undefined;

var Message = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var domFunc, sleep, type, content, callback, time, container, message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sleep = Dom.sleep;
            type = args.type, content = args.content, callback = args.callback, time = args.time;

            typeof args == 'string' && (content = args);
            type = type == undefined ? "info" : type;
            time = time == undefined ? 3000 : time;
            content = content == undefined ? "{content: 请输入content参数}" : content;
            callback = callback == undefined ? function () {} : callback;

            if (document.querySelector('.component-container')) {
              container = document.querySelector('.component-container');
            } else {
              container = document.createElement('div');

              container.className = 'component-container';
              document.body.appendChild(container);
            }
            message = document.createElement('div');

            message.className = "component-container-message " + type;
            message.innerHTML = "\n        " + Icon({ type: type }) + "\n        &nbsp;\n        " + content + "\n    ";
            container.appendChild(message);
            _context.next = 14;
            return sleep(time);

          case 14:
            message.remove();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this$1);
  }));

  return function Message(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _this$2 = undefined;

var ModalInfo = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var domFunc, sleep, type, content, title, callback, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            type = args.type, content = args.content, title = args.title, callback = args.callback;

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
              callback = function callback() {};
            }
            if (!type.match(/(info|success|error|warning|confirm|delete)/)) {
              type = "info";
            }
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-modalInfo\">\n            <div class=\"component-model-header\">\n                " + Icon({
              type: type
            }) + "\n                <span class=\"title\">" + title + "</span>\n            </div>\n            <div class=\"component-model-body\">\n                " + content + "\n            </div>\n            <div class=\"component-modalInfo-footer\">\n                " + (type == "confirm" || type == "delete" ? Button({
              className: "cancal",
              text: "取消"
            }).outerHTML : "") + "\n                " + Button({
              className: "confirm " + (type == "delete" ? "btn-danger" : "btn-primary"),
              text: "确认"
            }).outerHTML + "\n            </div>\n        </div>\n    ";
            domFunc({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 15;
            return sleep(500);

          case 15:
            mask.addEventListener('click', function (e) {
              e.stopPropagation();
              // e.preventDefault()
              // return false
              if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
              }
            }, false);
            btns = mask.querySelectorAll('.component-modalInfo button');

            btns = Array.prototype.slice.call(btns);
            btns.forEach(function (dom) {
              dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
                if (dom.classList.contains('confirm')) {
                  callback();
                }
              });
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this$2);
  }));

  return function ModalInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Spin = function Spin(args) {
  var domFunc = Dom.domFunc;

  if (args == undefined) {
    var dom = document.body;
  } else {
    var dom = args.dom;

    dom = dom == undefined ? document.body : dom;
  }
  if (!!dom.querySelector('.component-container-spin')) {
    dom.querySelector('.component-container-spin').remove();
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: "0px",
        overflow: "auto"
      }
    });
  } else {
    dom.style.position = "relative";
    var container = document.createElement('div');
    container.className = "component-container-spin " + (dom == document.body ? "component-container-global" : "");
    container.innerHTML = "\n            <div class=\"spin-container\">\n                " + Icon({ type: 'spin' }) + "\n                " + (screen.width > 768 && dom.clientHeight < 50 ? "" : "<span>Loading...</span>") + "\n            </div>\n        ";
    container.addEventListener('click', function (e) {
      e.stopPropagation();
      // e.preventDefault()
      // return false
    });
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: window.innerWidth - document.body.clientWidth + "px",
        overflow: "hidden"
      }
    });
    dom.appendChild(container);
  }
};

var _this$3 = undefined;

var sleep$1 = Dom.sleep;
var domFunc$1 = Dom.domFunc;
var addEvent$1 = Dom.addEvent;
var isDomFunc$1 = Dom.isDomFunc;
var addArrProp$1 = Dom.addArrProp;
var isDomInPathFunc$1 = Dom.isDomInPathFunc;

var Table = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var data, callback, select_model, ifselect, beforeSelect, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = args.data, callback = args.callback, select_model = args.select_model, ifselect = args.ifselect, beforeSelect = args.beforeSelect;

            ifselect == undefined ? ifselect = true : "";
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-table\">\n            <header class=\"component-table-header\">\n                \u8BF7\u9009\u62E9\n            </header>\n            <div class=\"component-table-body\">\n                <div class=\"component-table-body-container\">\n                    " + "\n                    <span class=\"search-container\">\n                        <span>\u5546\u54C1\u641C\u7D22\uFF1A</span>\n                        <span class=\"search\">\n                            <input type=\"text\">\n                            <span>\u641C\u7D22</span>\n                        </span>\n                    </span>\n                    <div class=\"table\">\n                        <div class=\"sec-table\" id=\"sec-table\">\n                            <div class=\"th\">\n                                <span class=\"select\">\n                                    <input id=\"select-all\" type=\"checkbox\"/> \n                                    <label for=\"select-all\">\u5168\u9009</label>\n                                    <input id=\"select-reverse\" type=\"checkbox\"/> \n                                    <label for=\"select-reverse\">\u53CD\u9009</label>\n                                </span>\n                                " + (data[0].code ? "<span class=\"num\">\u7F16\u53F7</span>" : "") + "\n                                <span class=\"name\">\u540D\u79F0</span>\n                            </div>\n                            <div class=\"tb-container\"></div>\n                        </div>\n                        <div class=\"thr-table\" id=\"thr-table\">\n                            <div class=\"th\">\n                                <span class=\"select\">\n                                    <input id=\"thr-select-all\" type=\"checkbox\"/> \n                                    <label for=\"thr-select-all\">\u5168\u9009</label>\n                                    <input id=\"thr-select-reverse\" type=\"checkbox\"/> \n                                    <label for=\"thr-select-reverse\">\u53CD\u9009</label>\n                                </span>\n                                " + (data[0].code ? "<span class=\"num\">\u7F16\u53F7</span>" : "") + "\n                                <span class=\"name\">\u540D\u79F0</span>\n                                <span class=\"empty\">\n                                    " + Icon({ type: 'trash' }) + "\n                                    \u6E05\u7A7A\n                                </span>\n                            </div>\n                            <div class=\"tb-container\"></div>\n                        </div>\n                    </div>\n                    <div class=\"group-btn\">\n                        " + Button({
              className: "return",
              text: "返回"
            }).outerHTML + "\n                        &nbsp;\n                        &nbsp;\n                        " + Button({
              className: "confirm btn-primary",
              text: "确认"
            }).outerHTML + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";

            domFunc$1({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 9;
            return sleep$1(300);

          case 9:
            _context.next = 11;
            return putDataToSecTable(data);

          case 11:
            btns = mask.querySelectorAll('.component-table button');

            btns = Array.prototype.slice.call(btns);
            _context.next = 15;
            return btnAddevent({ btns: btns, mask: mask, callback: callback });

          case 15:
            _context.next = 17;
            return thrTableObserver();

          case 17:
            _context.next = 19;
            return eventProxy({
              event: 'click',
              select_model: select_model
            });

          case 19:
            _context.next = 21;
            return eventProxy({
              event: 'change'
            });

          case 21:
            ifselect && selectBeforeFunc({
              beforeSelect: beforeSelect
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this$3);
  }));

  return function Table(_x) {
    return _ref.apply(this, arguments);
  };
}();

var selectBeforeFunc = function selectBeforeFunc(args) {
  var beforeSelect = args.beforeSelect;

  var contents = document.querySelectorAll('.component-table .sec-table .tb-container >div');
  addArrProp$1(contents).forEach(function (content) {
    beforeSelect.forEach(function (select) {
      var name = content.querySelector(".name");
      if (name.innerText == select) {
        content.click();
      }
    });
  });
};

var btnAddevent = function btnAddevent(args) {
  var btns = args.btns,
      mask = args.mask,
      callback = args.callback;

  btns.forEach(function (dom) {
    if (dom.classList.contains('confirm')) {
      dom.addEventListener('click', function () {
        callback();
        mask.remove();
        domFunc$1({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    } else if (dom.classList.contains('return')) {
      dom.addEventListener('click', function () {
        mask.remove();
        domFunc$1({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    }
  });
};

var putDataToSecTable = function () {
  var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var secTableInputs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 将数据传入data之前先清空 container
            secTableInputs = document.querySelector('.component-table-body-container .sec-table .tb-container');

            secTableInputs = Array.prototype.slice.call(secTableInputs);
            secTableInputs.map(function (input) {
              return input.parentElement.remove();
            });

            return _context2.abrupt("return", data.map(function (row, i) {
              var sec_table = document.querySelector('.component-table-body-container .sec-table .tb-container');
              var div = document.createElement('div');
              div.className = "tb";
              var html = "\n            <input class=\"select\" type=\"checkbox\"/>\n            " + (row.dept_code ? "<span class=\"num\">" + row.dept_code + "</span>" : "") + "\n            <span class=\"name\">" + row.name + "</span>\n        ";
              div.innerHTML = html;
              div.id = "sec" + i;
              div.dataset.type = row.type;
              div.style.color = "#000";
              div.style.cursor = "pointer";
              sec_table.appendChild(div);
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this$3);
  }));

  return function putDataToSecTable(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var eventProxy = function eventProxy(args) {
  var event = args.event,
      select_model = args.select_model;

  if (event == "click") {
    var handleAllEvent = function handleAllEvent(e) {
      // empty
      var isEmptyDom = isDomInPathFunc$1({
        path: e.path,
        selector: ".thr-table .empty"
      });
      if (isEmptyDom) {
        var inputs = isEmptyDom.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.parentElement.remove();
            inputs = document.querySelectorAll('.sec-table input');
            inputs.forEach(function (input) {
              return input.checked = false;
            });
          }
        });
      }
      // 为第二个第三个表格每一个列表添加点击事件，tb-container
      document.querySelectorAll(".tb-container .tb").forEach(function (dom) {
        var isTableList = isDomFunc$1({
          path: e.path, dom: dom
        });
        if (isTableList) {
          if (e.path[0].type == 'checkbox') return;
          if (select_model == "checkbox") {
            if (isTableList.querySelector('input').checked == true) {
              isTableList.querySelector('input').checked = false;
              isTableList.querySelector('input').dataset.type = false;
            } else {
              isTableList.querySelector('input').checked = true;
              isTableList.querySelector('input').dataset.type = true;
            }
          } else if (select_model == "radio") {
            // 先清空所有
            document.querySelectorAll(".tb-container .tb").forEach(function (dom) {
              return dom.querySelector('input').checked = false;
            });
            isTableList.querySelector('input').checked = true;
            isTableList.querySelector('input').dataset.type = true;
          }
        }
      });
    };
    document.querySelector('.component-mask').addEventListener(event, handleAllEvent, false);
  }
  if (event == 'change') {
    var _handleAllEvent = function _handleAllEvent(e) {
      // selectAll
      var isSelectAllDom = isDomInPathFunc$1({
        path: e.path,
        selector: ".select #select-all"
      });
      if (isSelectAllDom) {
        var inputs = isSelectAllDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.checked = e.target.checked;
            input.dataset.checked = e.target.checked;
          }
        });
      }
      // selectReverse
      var isSelectReverseDom = isDomInPathFunc$1({
        path: e.path,
        selector: ".select #select-reverse"
      });
      if (isSelectReverseDom) {
        var _inputs = isSelectReverseDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        _inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.checked = !input.checked;
            input.dataset.checked = input.checked;
          }
        });
      }
    };
    document.querySelector('.component-mask').addEventListener(event, _handleAllEvent, false);
  }
};

var thrTableObserver = function thrTableObserver(args) {
  ////不适合单独监听啊，，直接复制选中的元素好了，垃圾算法
  var sec_table_container = document.querySelector('.component-table-body-container .sec-table .tb-container');
  var thr_table_container = document.querySelector('.component-table-body-container .thr-table .tb-container');
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function (mutations) {
    var inputGroupAll = thr_table_container.querySelectorAll('input');
    inputGroupAll = Array.prototype.slice.call(inputGroupAll);
    inputGroupAll.map(function (input, i) {
      input.parentElement.remove();
    });
    var inputGroup = sec_table_container.querySelectorAll('input:checked');
    inputGroup = Array.prototype.slice.call(inputGroup);
    inputGroup.map(function (input, i) {
      var div = input.parentElement;
      var newChild = div.cloneNode(true);
      var oldChild = thr_table_container.querySelector('div:nth-child(' + (i + 1) + ')');
      newChild.style.display = "flex";
      addEvent$1({
        dom: newChild,
        envet: "click",
        func: function func(e) {
          return e.path.filter(function (e) {
            return e.className == 'tb';
          })[0].remove();
        }
      });
      thr_table_container.insertBefore(newChild, oldChild);
      newChild.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
    });
  });
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };
  observer.observe(sec_table_container, config);
};

var _this$4 = undefined;

var sleep$2 = Dom.sleep;
var domFunc$2 = Dom.domFunc;
var addEvent$2 = Dom.addEvent;
var isDomFunc$2 = Dom.isDomFunc;
var addArrProp$2 = Dom.addArrProp;
var showDomFunc$2 = Dom.showDomFunc;
var isDomInPathFunc$2 = Dom.isDomInPathFunc;
var domToggleAnimation$2 = Dom.domToggleAnimation;

var treeTable = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var data, callback, select_model, ifselect, beforeSelect, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = args.data, callback = args.callback, select_model = args.select_model, ifselect = args.ifselect, beforeSelect = args.beforeSelect;

            ifselect == undefined ? ifselect = true : "";
            console.log(args);
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-treeTable\">\n            <header class=\"component-treeTable-header\">\n                \u8BF7\u9009\u62E9\n            </header>\n            <div class=\"component-treeTable-body\">\n                <div class=\"component-treeTable-body-side\" id=\"side\">\n                    <div class=\"all\" id=\"all\">\n                        " + Icon({ type: 'navlist' }) + "\n                        <span class=\"text-container\">\u5168\u90E8</span>\n                        " + Icon({ type: 'unfold' }) + "\n                    </div>\n                    <div class=\"tree-container\"></div>\n                    <div class=\"flex-container\"></div>\n                </div>\n                <div class=\"component-treeTable-body-container\">\n                    " + "\n                    <span class=\"search-container\">\n                        <span>\u5546\u54C1\u641C\u7D22\uFF1A</span>\n                        <span class=\"search\">\n                            <input type=\"text\">\n                            <span>\u641C\u7D22</span>\n                        </span>\n                    </span>\n                    <div class=\"table\">\n                        <div class=\"sec-table\" id=\"sec-table\">\n                            <div class=\"th\">\n                                <span class=\"select\">\n                                    <input id=\"select-all\" type=\"checkbox\"/> \n                                    <label for=\"select-all\">\u5168\u9009</label>\n                                    <input id=\"select-reverse\" type=\"checkbox\"/> \n                                    <label for=\"select-reverse\">\u53CD\u9009</label>\n                                </span>\n                                " + (data.content[0].code ? "<span class=\"num\">\u7F16\u53F7</span>" : "") + "\n                                <span class=\"name\">\u540D\u79F0</span>\n                            </div>\n                            <div class=\"tb-container\"></div>\n                        </div>\n                        <div class=\"thr-table\" id=\"thr-table\">\n                            <div class=\"th\">\n                                <span class=\"select\">\n                                    <input id=\"thr-select-all\" type=\"checkbox\"/> \n                                    <label for=\"thr-select-all\">\u5168\u9009</label>\n                                    <input id=\"thr-select-reverse\" type=\"checkbox\"/> \n                                    <label for=\"thr-select-reverse\">\u53CD\u9009</label>\n                                </span>\n                                " + (data.content[0].code ? "<span class=\"num\">\u7F16\u53F7</span>" : "") + "\n                                <span class=\"name\">\u540D\u79F0</span>\n                                <span class=\"empty\">\n                                    " + Icon({ type: 'trash' }) + "\n                                    \u6E05\u7A7A\n                                </span>\n                            </div>\n                            <div class=\"tb-container\"></div>\n                        </div>\n                    </div>\n                    <div class=\"group-btn\">\n                        " + Button({
              className: "return",
              text: "返回"
            }).outerHTML + "\n                        &nbsp;\n                        &nbsp;\n                        " + Button({
              className: "confirm btn-primary",
              text: "确认"
            }).outerHTML + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";

            domFunc$2({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 10;
            return sleep$2(300);

          case 10:
            _context.next = 12;
            return putDataToFirTable({
              data: data.title,
              container: document.querySelector('.component-treeTable .component-treeTable-body-side .tree-container')
            });

          case 12:
            _context.next = 14;
            return putDataToSecTable$1(data.content);

          case 14:
            btns = mask.querySelectorAll('.component-treeTable button');

            btns = Array.prototype.slice.call(btns);
            _context.next = 18;
            return btnAddevent$1({ btns: btns, mask: mask, callback: callback });

          case 18:
            _context.next = 20;
            return secTableObserver();

          case 20:
            _context.next = 22;
            return thrTableObserver$1();

          case 22:
            _context.next = 24;
            return eventProxy$1({
              event: 'click',
              select_model: select_model
            });

          case 24:
            _context.next = 26;
            return eventProxy$1({
              event: 'change'
            });

          case 26:
            ifselect && selectBeforeFunc$1({
              beforeSelect: beforeSelect
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this$4);
  }));

  return function treeTable(_x) {
    return _ref.apply(this, arguments);
  };
}();

var selectBeforeFunc$1 = function selectBeforeFunc(args) {
  var beforeSelect = args.beforeSelect;

  var contents = document.querySelectorAll('.component-treeTable .sec-table .tb-container >div');
  addArrProp$2(contents).forEach(function (content) {
    beforeSelect.forEach(function (select) {
      var name = content.querySelector(".name");
      if (name.innerText == select) {
        content.click();
      }
    });
  });
};

var btnAddevent$1 = function btnAddevent(args) {
  var btns = args.btns,
      mask = args.mask,
      callback = args.callback;

  btns.forEach(function (dom) {
    if (dom.classList.contains('confirm')) {
      dom.addEventListener('click', function () {
        callback();
        mask.remove();
        domFunc$2({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    } else if (dom.classList.contains('return')) {
      dom.addEventListener('click', function () {
        mask.remove();
        domFunc$2({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    }
  });
};

var putDataToFirTable = function () {
  var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
    var data, container, arr;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = args.data, container = args.container;
            arr = data.map(function (row, i) {
              var div = document.createElement('div');
              var html = "\n            <div class=\"tree-container-list-div\" data-type=\"" + row.id + "\">\n                " + Icon({ type: "wujiaoxing" }) + "\n                <span class=\"text-container\">" + row.name + "</span>\n                " + (row.hasOwnProperty('children') ? Icon({ type: "unfold" }) : "") + "\n            <div>\n        ";
              div.className = "tree-container-list";
              div.innerHTML += html;
              div.id = "sec" + i;
              if (row.hasOwnProperty('children')) {
                putDataToFirTable({
                  data: row.children,
                  container: div
                });
              }
              container.appendChild(div);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this$4);
  }));

  return function putDataToFirTable(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var putDataToSecTable$1 = function () {
  var _ref3 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var secTableInputs;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // 将数据传入data之前先清空 container
            secTableInputs = document.querySelector('.component-treeTable-body-container .sec-table .tb-container');

            secTableInputs = Array.prototype.slice.call(secTableInputs);
            secTableInputs.map(function (input) {
              return input.parentElement.remove();
            });

            return _context3.abrupt("return", data.map(function (row, i) {
              var sec_table = document.querySelector('.component-treeTable-body-container .sec-table .tb-container');
              var div = document.createElement('div');
              div.className = "tb";
              var html = "\n            <input class=\"select\" type=\"checkbox\"/>\n            " + (row.dept_code ? "<span class=\"num\">" + row.dept_code + "</span>" : "") + "\n            <span class=\"name\">" + row.name + "</span>\n        ";
              div.innerHTML = html;
              div.id = "sec" + i;
              div.dataset.type = row.type;
              div.style.color = "#000";
              div.style.cursor = "pointer";
              sec_table.appendChild(div);
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this$4);
  }));

  return function putDataToSecTable(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var eventProxy$1 = function eventProxy(args) {
  var event = args.event,
      select_model = args.select_model;

  if (event == "click") {
    var handleAllEvent = function handleAllEvent(e) {
      // toggle show all with first table 
      var isShowAllInPath = isDomInPathFunc$2({
        path: e.path,
        selector: "#all"
      });
      if (isShowAllInPath) {
        // add some animation
        var more = isShowAllInPath.querySelector('.icon-unfold');
        domToggleAnimation$2({
          dom: more,
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          animationName: ["rotate-90", "rotate90"]
        });
        var listContainer = isShowAllInPath.parentElement.querySelector('.tree-container');
        domToggleAnimation$2({
          dom: listContainer,
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          animationName: ["slidein", "slideout"]
        });
      }
      // toggle show the tree list in first table
      var openList = document.querySelectorAll('.tree-container .icon-unfold');
      openList = Array.prototype.slice.call(openList);
      openList.forEach(function (dom) {
        var isShowAllInPath = isDomFunc$2({
          path: e.path,
          dom: dom.parentElement
        });
        if (isShowAllInPath) {
          // add some animation
          domToggleAnimation$2({
            dom: dom,
            animationDuration: "0.3s",
            animationFillMode: "forwards",
            animationName: ["rotate-90", "rotate90"]
          });
          var _listContainer = isShowAllInPath.parentElement;
          domToggleAnimation$2({
            dom: _listContainer,
            animationDuration: "0.3s",
            animationFillMode: "forwards",
            animationName: ["slidein1", "slideout1"]
          });
        }
      });
      // filter second table
      var firstTableLists = document.querySelectorAll('.component-treeTable-body-side .tree-container .tree-container-list-div');
      firstTableLists = Array.prototype.slice.call(firstTableLists);
      firstTableLists.map(function (list, i) {
        var isDomInPath = isDomFunc$2({
          path: e.path,
          dom: list
        });
        if (isDomInPath) {
          var allList = document.querySelectorAll('.component-treeTable-body-side .tree-container .active');
          allList = Array.prototype.slice.call(allList);
          allList.map(function (dom) {
            dom.dataset.active = false;
            dom.classList.remove('active');
          });
          isDomInPath.dataset.active = true;
          isDomInPath.classList.add('active');
        }
      });
      // empty
      var isEmptyDom = isDomInPathFunc$2({
        path: e.path,
        selector: ".thr-table .empty"
      });
      if (isEmptyDom) {
        var inputs = isEmptyDom.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.parentElement.remove();
            inputs = document.querySelectorAll('.sec-table input');
            inputs.forEach(function (input) {
              return input.checked = false;
            });
          }
        });
      }
      // 为第二个第三个表格每一个列表添加点击事件，tb-container
      document.querySelectorAll(".tb-container .tb").forEach(function (dom) {
        var isTableList = isDomFunc$2({
          path: e.path, dom: dom
        });
        if (isTableList) {
          if (e.path[0].type == 'checkbox') return;
          if (select_model == "checkbox") {
            if (isTableList.querySelector('input').checked == true) {
              isTableList.querySelector('input').checked = false;
              isTableList.querySelector('input').dataset.type = false;
            } else {
              isTableList.querySelector('input').checked = true;
              isTableList.querySelector('input').dataset.type = true;
            }
          } else if (select_model == "radio") {
            // 先清空所有
            document.querySelectorAll(".tb-container .tb").forEach(function (dom) {
              return dom.querySelector('input').checked = false;
            });
            isTableList.querySelector('input').checked = true;
            isTableList.querySelector('input').dataset.type = true;
          }
        }
      });
    };
    document.querySelector('.component-mask').addEventListener(event, handleAllEvent, false);
  }
  if (event == 'change') {
    var _handleAllEvent = function _handleAllEvent(e) {
      // selectAll
      var isSelectAllDom = isDomInPathFunc$2({
        path: e.path,
        selector: ".select #select-all"
      });
      if (isSelectAllDom) {
        var inputs = isSelectAllDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.checked = e.target.checked;
            input.dataset.checked = e.target.checked;
          }
        });
      }
      // selectReverse
      var isSelectReverseDom = isDomInPathFunc$2({
        path: e.path,
        selector: ".select #select-reverse"
      });
      if (isSelectReverseDom) {
        var _inputs = isSelectReverseDom.parentElement.parentElement.parentElement.querySelectorAll('.tb-container input.select');
        _inputs.forEach(function (input) {
          if (input.parentElement.style.display != 'none') {
            input.checked = !input.checked;
            input.dataset.checked = input.checked;
          }
        });
      }
    };
    document.querySelector('.component-mask').addEventListener(event, _handleAllEvent, false);
  }
};

var secTableObserver = function secTableObserver(args) {
  var fir_table_container = document.querySelector('.component-treeTable-body-side .tree-container');
  var sec_table_container = document.querySelector('.component-treeTable-body-container .sec-table .tb-container');
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function (mutations) {
    var target = mutations.filter(function (mutation) {
      return mutation.target.dataset.active == 'true';
    });
    if (!target.length) return;
    var index = target[0].target.dataset.type;
    var allDom = sec_table_container.querySelectorAll('input');

    allDom = addArrProp$2(allDom).map(function (dom) {
      return dom.parentElement;
    });
    var showDom = sec_table_container.querySelectorAll('input');
    showDom = addArrProp$2(showDom).map(function (dom) {
      return dom.parentElement;
    }).filter(function (dom) {
      return dom.dataset.type == index;
    });
    showDomFunc$2({
      allDom: allDom,
      showDom: showDom
    });
  });
  // 配置观察选项:
  var config = {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true
  };
  observer.observe(fir_table_container, config);
};

var thrTableObserver$1 = function thrTableObserver(args) {
  ////不适合单独监听啊，，直接复制选中的元素好了，垃圾算法
  var sec_table_container = document.querySelector('.component-treeTable-body-container .sec-table .tb-container');
  var thr_table_container = document.querySelector('.component-treeTable-body-container .thr-table .tb-container');
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function (mutations) {
    var inputGroupAll = thr_table_container.querySelectorAll('input');
    inputGroupAll = Array.prototype.slice.call(inputGroupAll);
    inputGroupAll.map(function (input, i) {
      input.parentElement.remove();
    });
    var inputGroup = sec_table_container.querySelectorAll('input:checked');
    inputGroup = Array.prototype.slice.call(inputGroup);
    inputGroup.map(function (input, i) {
      var div = input.parentElement;
      var newChild = div.cloneNode(true);
      var oldChild = thr_table_container.querySelector('div:nth-child(' + (i + 1) + ')');
      newChild.style.display = "flex";
      addEvent$2({
        dom: newChild,
        envet: "click",
        func: function func(e) {
          return e.path.filter(function (e) {
            return e.className == 'tb';
          })[0].remove();
        }
      });
      thr_table_container.insertBefore(newChild, oldChild);
      newChild.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
    });
  });
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };
  observer.observe(sec_table_container, config);
};

var _this$5 = undefined;

var sleep$3 = Dom.sleep;
var domFunc$3 = Dom.domFunc;
var isDomFunc$3 = Dom.isDomFunc;
var addArrProp$3 = Dom.addArrProp;
var isDomInPathFunc$3 = Dom.isDomInPathFunc;
var domToggleAnimation$3 = Dom.domToggleAnimation;

var Tree = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var data, select_model, callback, ifselect, beforeSelect, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = args.data, select_model = args.select_model, callback = args.callback, ifselect = args.ifselect, beforeSelect = args.beforeSelect;

            ifselect == undefined ? ifselect = true : "";
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-tree\">\n            <div class=\"component-tree-all\" id=\"all\">\n                " + Icon({ type: 'navlist' }) + "\n                <span class=\"text-container\">\u5168\u90E8</span>\n                " + Icon({ type: 'unfold' }) + "\n            </div>\n            <div class=\"component-tree-container\"></div>\n            <div class=\"btn-group\">\n                " + Button({
              className: "return",
              text: "返回"
            }).outerHTML + "\n                &nbsp;\n                &nbsp;\n                " + Button({
              className: "confirm btn-primary",
              text: "确认"
            }).outerHTML + "\n            </div>\n        </div>\n    ";

            domFunc$3({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 9;
            return sleep$3(300);

          case 9:
            _context.next = 11;
            return putDataToFirTable$1({
              data: data,
              container: document.querySelector('.component-tree .component-tree-container')
            });

          case 11:
            ifselect && selectBeforeFunc$2({
              beforeSelect: beforeSelect
            });
            // all event proxy
            _context.next = 14;
            return eventProxy$2({
              event: 'click',
              select_model: select_model
            });

          case 14:
            btns = mask.querySelectorAll('.component-tree button');

            btns = Array.prototype.slice.call(btns);
            _context.next = 18;
            return btnAddevent$2({
              btns: btns,
              mask: mask,
              callback: callback
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this$5);
  }));

  return function Tree(_x) {
    return _ref.apply(this, arguments);
  };
}();

var selectBeforeFunc$2 = function selectBeforeFunc(args) {
  var beforeSelect = args.beforeSelect;

  var contents = document.querySelectorAll('.component-tree-container .text-container');
  addArrProp$3(contents).forEach(function (content) {
    beforeSelect.forEach(function (select) {
      if (content.innerText == select) {
        content.parentElement.classList.add('active');
      }
    });
  });
};

var btnAddevent$2 = function btnAddevent(args) {
  var btns = args.btns,
      mask = args.mask,
      callback = args.callback;

  btns.forEach(function (dom) {
    if (dom.classList.contains('confirm')) {
      dom.addEventListener('click', function () {
        callback();
        mask.remove();
        domFunc$3({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    } else if (dom.classList.contains('return')) {
      dom.addEventListener('click', function () {
        mask.remove();
        domFunc$3({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0",
            overflow: "auto"
          }
        });
      });
    }
  });
};

var putDataToFirTable$1 = function () {
  var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
    var data, container, arr;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = args.data, container = args.container;
            arr = data.map(function (row, i) {
              var div = document.createElement('div');
              var html = "\n\n            <div class=\"component-tree-container-list-div\" data-type=\"" + row.id + "\">\n                " + Icon({ type: "wujiaoxing" }) + "\n                <span class=\"text-container\">" + row.name + "</span>\n                " + (row.hasOwnProperty('children') ? Icon({ type: "unfold" }) : "") + "\n            <div>\n        ";
              div.className = "component-tree-container-list";
              div.innerHTML += html;
              div.id = "sec" + i;
              if (row.hasOwnProperty('children')) {
                putDataToFirTable$1({
                  data: row.children,
                  container: div
                });
              }
              container.appendChild(div);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this$5);
  }));

  return function putDataToFirTable(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var eventProxy$2 = function eventProxy(args) {
  var event = args.event,
      select_model = args.select_model;

  if (event == "click") {
    var handleAllEvent = function handleAllEvent(e) {
      // toggle show all with first table 
      var isShowAllInPath = isDomInPathFunc$3({
        path: e.path,
        selector: "#all"
      });
      if (isShowAllInPath) {
        // add some animation
        var more = isShowAllInPath.querySelector('.icon-unfold');
        domToggleAnimation$3({
          dom: more,
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          animationName: ["rotate-90", "rotate90"]
        });
        var listContainer = isShowAllInPath.parentElement.querySelector('.component-tree-container');
        domToggleAnimation$3({
          dom: listContainer,
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          animationName: ["slidein", "slideout"]
        });
      }
      // toggle show the tree list in first table
      var openList = document.querySelectorAll('.component-tree-container .icon-unfold');
      openList = Array.prototype.slice.call(openList);
      openList.forEach(function (dom) {
        var isShowAllInPath = isDomFunc$3({
          path: e.path,
          dom: dom.parentElement
        });
        if (isShowAllInPath) {
          // add some animation
          domToggleAnimation$3({
            dom: dom,
            animationDuration: "0.3s",
            animationFillMode: "forwards",
            animationName: ["rotate-90", "rotate90"]
          });
          var _listContainer = isShowAllInPath.parentElement;
          domToggleAnimation$3({
            dom: _listContainer,
            animationDuration: "0.3s",
            animationFillMode: "forwards",
            animationName: ["slidein1", "slideout1"]
          });
        }
      });
      // 对于可以选择的dom元素 添加点击active的样式
      var selectInput = document.querySelectorAll('.component-tree-container-list-div');
      selectInput = addArrProp$3(selectInput).filter(function (dom) {
        return !dom.querySelector('svg.icon-unfold');
      });
      selectInput.forEach(function (dom) {
        var isSelectDomInPath = isDomFunc$3({
          path: e.path, dom: dom
        });
        if (isSelectDomInPath) {
          // if select one
          if (select_model == "radio") {
            addArrProp$3(document.querySelectorAll('.component-tree-container .active')).forEach(function (dom) {
              dom.classList.remove('active');
            });
            isSelectDomInPath.classList.add('active');
          } else if (select_model == "checkbox") {
            console.log(select_model);
            // if select more
            isSelectDomInPath.classList.toggle('active');
          }
        }
      });
      // click mask remove tree
      if (e.path[0].classList.contains('component-mask')) {
        document.querySelector('.component-mask').remove();
        domFunc$3({
          dom: document.querySelector('html'),
          style: {
            paddingRight: "0px",
            overflow: "auto"
          }
        });
      }
    };
    document.querySelector('.component-mask').addEventListener(event, handleAllEvent, false);
  }
};

var scrollBind = function scrollBind(e) {
  var row = e.row,
      column = e.column,
      scroll = e.scroll;

  eventProxy$3({
    event: 'scroll',
    column: column, row: row, scroll: scroll
  });

  addArrayProp(row.children).forEach(function (dom) {
    eventProxy$3({
      event: 'click',
      dom: dom, row: row
    });
  });
};
var eventProxy$3 = function eventProxy(e) {
  var event = e.event,
      column = e.column,
      row = e.row,
      scroll = e.scroll,
      dom = e.dom;

  var navCurrentClassName = navCurrentClassNameFunc(row);
  var scrollEventFunc = function scrollEventFunc(e) {
    var currentScreenPlace = document.documentElement.scrollTop < document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    var scrollList = column.children;
    scrollList = addArrayProp(scrollList);
    var activeNav = row.querySelector('.' + navCurrentClassName);
    scrollList.forEach(function (section, i) {
      if (section.getBoundingClientRect().top < 0 && section.getBoundingClientRect().bottom > 0) {
        if (currentScreenPlace + screen.height == document.body.scrollHeight) {
          navIntoViewFunc({
            currentNav: row.children[row.children.length - 1],
            activeNav: activeNav,
            navCurrentClassName: navCurrentClassName
          });
        } else {
          navIntoViewFunc({
            currentNav: row.children[i],
            activeNav: activeNav,
            navCurrentClassName: navCurrentClassName
          });
        }
      }
    });
  };
  var clickEventFunc = function clickEventFunc(e) {

    navIntoViewFunc({
      currentNav: e.target,
      activeNav: row.querySelector('.' + navCurrentClassName),
      navCurrentClassName: navCurrentClassName
    });
  };
  if (event == "scroll") {
    scroll.addEventListener(event, scrollEventFunc, false);
    scrollEventFunc();
  } else if (event == "click") {
    dom.addEventListener(event, clickEventFunc, false);
  }
};
var navCurrentClassNameFunc = function navCurrentClassNameFunc(dom) {
  if (dom.querySelector('.active')) {
    return 'active';
  } else if (dom.querySelector('.on')) {
    return 'on';
  } else if (dom.querySelector('.current')) {
    return 'current';
  } else if (dom.querySelector('.cur')) {
    return 'cur';
  }
};

var navIntoViewFunc = function navIntoViewFunc(e) {
  var currentNav = e.currentNav,
      activeNav = e.activeNav,
      navCurrentClassName = e.navCurrentClassName;

  if (currentNav == activeNav) return;
  activeNav.classList.remove(navCurrentClassName);
  currentNav.classList.add(navCurrentClassName);
  currentNav.scrollIntoView({
    block: "center",
    inline: "center"
  });
};
var addArrayProp = function addArrayProp(e) {
  return Array.prototype.slice.call(e);
};
window.scrollBind = scrollBind;

var Component = {
  pc: {
    message: Message,
    spin: Spin,
    modal: Modal,
    table: Table,
    tree: Tree,
    treeTable: treeTable,
    modalInfo: ModalInfo,
    container: {
      button: Button,
      icon: Icon
    }
  },
  tool: {
    scrollBind: scrollBind
    // mobile:{
    //     message: Message,
    //     spin: Spin,
    //     modal: Modal,
    //     modalInfo: ModalInfo,
    //     container: {
    //         button: Button,
    //         icon: Icon,
    //     }
    // }
  } };

window.Component = Component;

module.exports = Component;
},{}],3:[function(require,module,exports) {
"use strict";

var _dist = require("../dist");

var _dist2 = babelHelpers.interopRequireDefault(_dist);

window.onload = function (e) {
  document.querySelector('.date').addEventListener('click', clickProxyFunc, false);
};

var clickProxyFunc = function clickProxyFunc(e) {
  console.log(e.target, _dist2.default);
  e.target.get;
};
},{"../dist":5}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:63968/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = () => {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])