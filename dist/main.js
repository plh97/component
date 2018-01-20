// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
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
})({11:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],3:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":11}],21:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./..\\font\\a.woff":["0f137fab2004ccfb14784c89fdcd9236.woff",22],"_css_loader":3}],19:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var index = 42;

exports.default = index;
},{}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("../../utils/jquery.js");

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

require("./index.less");

var _button = require("../../container/button");

var _button2 = babelHelpers.interopRequireDefault(_button);

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
  mask.innerHTML = "\n        <div class=\"component-model\">\n            <div class=\"component-model-header\">\n                <span class=\"title\">" + title + "</span>\n                " + (0, _button2.default)({
    className: "confirm btn-close",
    text: "X"
  }).outerHTML + "\n            </div>\n            <div class=\"component-model-body\">\n                    " + content + "\n            </div>\n            <div class=\"component-model-footer\">\n                " + (0, _button2.default)({
    className: "return",
    text: "返回"
  }).outerHTML + "\n                &nbsp;\n                &nbsp;\n                " + (0, _button2.default)({
    className: "confirm btn-primary",
    text: "确认"
  }).outerHTML + "\n            </div>\n        </div>\n    ";
  mask.addEventListener('click', function (e) {
    e.stopPropagation();
    // e.preventDefault()
    // return false
    if (e.path[0].classList.contains('component-mask')) {
      mask.remove();
      (0, _jquery2.default)('body').style.overflow = "auto";
    }
  }, false);
  var btns = mask.querySelectorAll('.component-model button');
  btns.forEach(function (dom) {
    dom.addEventListener('click', function () {
      mask.remove();
      (0, _jquery2.default)('body').style.overflow = "auto";
      if (dom.classList.contains('confirm')) {
        callback();
      }
    });
  });
  (0, _jquery2.default)('body').style.overflow = "hidden";
  (0, _jquery2.default)('body').append(mask);
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

exports.default = Modal;
},{}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("../../utils/jquery.js");

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

require("./index.less");

var _icon = require("../../container/icon");

var _icon2 = babelHelpers.interopRequireDefault(_icon);

var Modal = function Modal(args) {
  var type = args.type,
      content = args.content,
      callback = args.callback,
      time = args.time;

  type = type == undefined ? "info" : type;
  time = time == undefined ? 1000 : time;
  content = content == undefined ? "{content: 请输入content参数}" : content;
  callback = callback == undefined ? function () {} : callback;

  if (document.querySelector('.component-container')) {
    var container = document.querySelector('.component-container');
  } else {
    var container = document.createElement('div');
    container.className = 'component-container';
    document.body.appendChild(container);
  }
  var message = document.createElement('div');
  message.className = "component-container-message " + type;
  message.innerHTML = "\n        " + (0, _icon2.default)({ type: type }) + "\n        &nbsp;\n        " + content + "\n    ";
  setTimeout(function () {
    message.remove();
  }, time);
  container.append(message);
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

exports.default = Modal;
},{}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("../../utils/jquery.js");

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

require("./index.less");

var _button = require("../../container/button");

var _button2 = babelHelpers.interopRequireDefault(_button);

var _icon = require("../../container/icon");

var _icon2 = babelHelpers.interopRequireDefault(_icon);

var ModalInfo = function ModalInfo(args) {
  var type = args.type,
      content = args.content,
      title = args.title,
      callback = args.callback;

  if (!type.match(/(info|success|error|warning|confirm|delete)/)) {
    type = "info";
  }
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
  mask.innerHTML = "\n        <div class=\"component-modalInfo\">\n            <div class=\"component-model-header\">\n                " + (0, _icon2.default)({
    type: type
  }) + "\n                <span class=\"title\">" + title + "</span>\n            </div>\n            <div class=\"component-model-body\">\n                " + content + "\n            </div>\n            <div class=\"component-modalInfo-footer\">\n                " + (type == "confirm" || type == "delete" ? (0, _button2.default)({
    className: "confirm",
    text: "取消"
  }).outerHTML : "") + "\n                " + (0, _button2.default)({
    className: "confirm " + (type == "delete" ? "btn-danger" : "btn-primary"),
    text: "确认"
  }).outerHTML + "\n            </div>\n        </div>\n    ";
  mask.addEventListener('click', function (e) {
    e.stopPropagation();
    // e.preventDefault()
    // return false
    if (e.path[0].classList.contains('component-mask')) {
      mask.remove();
      (0, _jquery2.default)('body').style.overflow = "auto";
    }
  }, false);
  var btns = mask.querySelectorAll('.component-modalInfo button');
  btns.forEach(function (dom) {
    dom.addEventListener('click', function () {
      mask.remove();
      (0, _jquery2.default)('body').style.overflow = "auto";
      if (dom.classList.contains('confirm')) {
        callback();
      }
    });
  });
  (0, _jquery2.default)('body').style.overflow = "hidden";
  (0, _jquery2.default)('body').append(mask);
};

exports.default = ModalInfo;
},{}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./index.less");

var Button = function Button(args) {
  var className = args.className,
      text = args.text;

  var btn = document.createElement('button');
  btn.className = "component-btn " + (className ? className : "");
  btn.innerText = text;
  return btn;
};

exports.default = Button;
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./index.less");

var Icon = function Icon(args) {
  var className = args.className,
      type = args.type;

  if (type == "info") {
    var icon = "\n\t\t\t<svg\n\t\t\t\tclass=\"icon\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z\" fill=\"#2196F3\" p-id=\"1690\"></path>\n\t\t\t\t<path d=\"M469.333333 469.333333h85.333334v234.666667h-85.333334z\" fill=\"#FFFFFF\" p-id=\"1691\"></path>\n\t\t\t\t<path d=\"M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z\" fill=\"#FFFFFF\" p-id=\"1692\"></path>\n\t\t\t</svg>\n\t\t";
    return icon;
  } else if (type == "success") {
    var _icon = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-success\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M666.272 472.288l-175.616 192a31.904 31.904 0 0 1-23.616 10.4h-0.192a32 32 0 0 1-23.68-10.688l-85.728-96a32 32 0 1 1 47.744-42.624l62.144 69.6 151.712-165.888a32 32 0 1 1 47.232 43.2m-154.24-344.32C300.224 128 128 300.32 128 512c0 211.776 172.224 384 384 384 211.68 0 384-172.224 384-384 0-211.68-172.32-384-384-384\" p-id=\"3601\"></path>\n\t\t\t</svg>\n\t\t";
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
  }
};

exports.default = Icon;
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("../../utils/jquery.js");

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

require("./index.less");

var _icon = require("../../container/icon");

var _icon2 = babelHelpers.interopRequireDefault(_icon);

var Spin = function Spin(args) {
  if (args == undefined) {
    var dom = document.body;
  } else {
    var dom = args.dom;

    dom = dom == undefined ? document.body : dom;
  }
  if (!!dom.querySelector('.component-container-spin')) {
    dom.querySelector('.component-container-spin').remove();
  } else {
    var container = document.createElement('div');
    container.className = "component-container-spin " + (dom == document.body ? "component-container-global" : "");
    container.innerHTML = "\n            " + (0, _icon2.default)({ type: 'spin' }) + "\n            <span>Loading...</span>\n        ";
    dom.append(container);
  }
};

exports.default = Spin;
},{}],1:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("../assets/common/common.less");

var _theAnswer = require("the-answer");

var _theAnswer2 = babelHelpers.interopRequireDefault(_theAnswer);

var _modal = require("./component/modal");

var _modal2 = babelHelpers.interopRequireDefault(_modal);

var _message = require("./component/message");

var _message2 = babelHelpers.interopRequireDefault(_message);

var _modalInfo = require("./component/modalInfo");

var _modalInfo2 = babelHelpers.interopRequireDefault(_modalInfo);

var _button = require("./container/button");

var _button2 = babelHelpers.interopRequireDefault(_button);

var _icon = require("./container/icon");

var _icon2 = babelHelpers.interopRequireDefault(_icon);

var _spin = require("./component/spin");

var _spin2 = babelHelpers.interopRequireDefault(_spin);

var Component = {
  message: _message2.default,
  spin: _spin2.default,
  container: {
    button: _button2.default,
    icon: _icon2.default
  },
  modal: {
    modal: _modal2.default,
    info: _modalInfo2.default
  }
};

console.log("the answer is " + _theAnswer2.default + " " + Component);

exports.default = _icon2.default;
},{"../assets/common/common.less":21,"the-answer":19,"./component/modal":6,"./component/message":4,"./component/modalInfo":5,"./container/button":8,"./container/icon":10,"./component/spin":7}],0:[function(require,module,exports) {
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

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':63949/');
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
      ws.onclose = function () {
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
},{}]},{},[0,1])