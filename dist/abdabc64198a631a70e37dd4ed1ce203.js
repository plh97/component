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
})({6:[function(require,module,exports) {
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

},{}],5:[function(require,module,exports) {
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

},{"./bundle-url":6}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      module.exports = {
  "dataTimePicker": "_dataTimePicker_17hs5_1",
  "list": "_list_17hs5_14",
  "num": "_num_17hs5_25"
};
},{"_css_loader":5}],2:[function(require,module,exports) {
"use strict";

var _index = require("./index.less");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var minute = [];
var second = [];

for (var i = 1; i <= 60; i++) {
  minute.push(i);
  second.push(i);
}

window.onload = function (e) {
  var input = document.querySelector('input#data');
  input.addEventListener('click', clickEventFunc, false);
};

var clickEventFunc = function clickEventFunc(e) {
  var dataTimePicker = initHTML({
    hour: hour, minute: minute, second: second
  });
  document.body.appendChild(dataTimePicker);
  var sliders = dataTimePicker.children;
  sliders = Array.prototype.slice.call(sliders);
  sliders.forEach(function (dom) {
    slideEventProxy({
      event: "touchstart",
      dom: dom
    });
  });
};

var slideEventProxy = function slideEventProxy(args) {
  var event = args.event,
      dom = args.dom;

  var eventProxy = function eventProxy(touchstart) {
    var div = dom.querySelector('span:nth-child(1)');
    var beforeValue = Number(dom.querySelector('span:nth-child(1)').style.marginTop.match(/\d+/));
    var lastmousey = touchstart.changedTouches[0].screenY;
    var touchmoveFunc = function touchmoveFunc(touchmove) {
      var currentMarginTop = -Number(dom.querySelector('span:nth-child(1)').style.marginTop.replace(/(px|rem|%|vw|vh)/, ''));
      var move_coord = touchstart.changedTouches[0].screenY - touchmove.changedTouches[0].screenY;
      var _move_coord = lastmousey - touchmove.changedTouches[0].screenY;
      var totalListHeight = div.getBoundingClientRect().height * (dom.children.length - 1);
      if (_move_coord != 0) {
        div.style.marginTop = -beforeValue - move_coord + "px";
      }
      if (_move_coord > 0) {
        // 向上相对位移
        // 1.不能超过总高度
        if (move_coord < 0) {
          div.style.marginTop = "0px";
        }
        if (currentMarginTop >= totalListHeight) {
          div.style.marginTop = -totalListHeight + "px";
        }
      } else if (_move_coord < 0) {
        // 向下相对位移
        // 1.不能<0
        if (move_coord > totalListHeight) {
          div.style.marginTop = -totalListHeight + "px";
        }
        if (currentMarginTop <= 0) {
          div.style.marginTop = "0px";
        }
      }
      Math.round(1.879823123213);
      domRound({
        dom: div,
        totalLength: totalListHeight,
        length: div.getBoundingClientRect().height
      });
      lastmousey = touchmove.changedTouches[0].screenY;
    };
    document.addEventListener('touchmove', touchmoveFunc, false);
    document.addEventListener('touchend', function (e) {
      document.removeEventListener('touchmove', touchmoveFunc, false);
    }, false);
  };
  dom.addEventListener(event, eventProxy, false);
};

var domRound = function domRound(args) {
  var dom = args.dom,
      length = args.length,
      totalLength = args.totalLength;

  console.log(dom.style.marginTop);
};

var initHTML = function initHTML(data) {
  var dataTimePicker = document.createElement('div');
  dataTimePicker.className = "" + _index2.default.dataTimePicker;

  var _loop = function _loop(Data) {
    var container = document.createElement('div');
    container.className = Data + " " + _index2.default.list;
    data[Data].forEach(function (num, i) {
      var span = document.createElement('span');
      span.className = _index2.default.num;
      span.innerHTML = num;
      container.appendChild(span);
    });
    dataTimePicker.appendChild(container);
  };

  for (var Data in data) {
    _loop(Data);
  }

  return dataTimePicker;
};
},{"./index.less":4}],0:[function(require,module,exports) {
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

<<<<<<< HEAD:dist/4057f806ce174ea6cb6ce58020185c8a.js
if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:51284/');
=======
if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
<<<<<<< HEAD
  var ws = new WebSocket('ws://' + window.location.hostname + ':65261/');
>>>>>>> 0d335731311ba5887f95b58757926657c9504502:dist/abdabc64198a631a70e37dd4ed1ce203.js
=======
  var ws = new WebSocket('ws://' + window.location.hostname + ':64235/');
>>>>>>> b3a1439ca13987082e462e2f04aea8f0d3557bfc
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
},{}]},{},[0,2])