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
})({2:[function(require,module,exports) {
// // import {
// //     pc,
// //     mobile
// // } from "peng-component";
// // } from "../dist/index.js";

// // if(screen.width>768){
// //     var {
// //         modal,
// //         modalInfo,
// //         message,
// //         spin,
// //         container
// //     } = pc;
// // }else{
// //     var {
// //         modal,
// //         modalInfo,
// //         message,
// //         spin,
// //         container
// //     } = mobile;
// // }

// // const {
// //     modal,
// //     modalInfo,
// //     message,
// //     spin,
// //     container
// // } = pc;
var pc = Component.pc;

var modal = pc.modal;
var modalInfo = pc.modalInfo;
var message = pc.message;
var spin = pc.spin;
var container = pc.container;

var button = container.button;
var icon = container.icon;

var times = 0;
document.querySelector('#container-modal').innerHTML = "\n    " + button({
  className: "btn-primary",
  text: "Modal"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "ModalInfo"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "ModalConfirm"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "ModalDelete"
}).outerHTML + "\n";
document.querySelector('#container-message').innerHTML = "\n    " + button({
  className: "confirm btn-primary",
  text: "info"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "success"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "error"
}).outerHTML + "\n    " + button({
  className: "confirm btn-primary",
  text: "warning"
}).outerHTML + "\n";
var messageBtns = document.querySelectorAll('#container-message button');
messageBtns = Array.prototype.slice.call(messageBtns);
var modalBtns = document.querySelectorAll('#container-modal button');
modalBtns = Array.prototype.slice.call(modalBtns);
messageBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.target.innerText == "info") {
      message('123');
    } else {
      message({
        type: e.target.innerText,
        time: 100000,
        content: "\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F\u8FD9\u4E2A\u662F" + e.target.innerText + ",\u7B2C" + times++ + "\u6B21",
        callback: function callback() {
          console.log('callback', e.target.innerText);
        }
      });
    }
  }, false);
});
modalBtns.forEach(function (btn) {
  if (btn.innerText == "Modal") {
    btn.addEventListener('click', function (e) {
      modal({
        title: btn.innerText + "\u7684\u6807\u9898",
        content: "\u8FD9\u4E2A\u662F" + e.target.innerText + "\u7684\u5185\u5BB9,\u7B2C" + times++ + "\u6B21",
        callback: function callback() {
          return console.log('callback', e.target.innerText, "的确认");
        }
      });
    }, false);
  } else if (btn.innerText == "ModalInfo") {
    btn.addEventListener('click', function (e) {
      modalInfo('这个是简化版标题！！');
    }, false);
  } else if (btn.innerText == "ModalConfirm") {
    btn.addEventListener('click', function (e) {
      modalInfo({
        type: "confirm",
        title: "Do you Want to delete these items?",
        content: "\u8B66\u544A\u5185\u5BB9",
        callback: function callback() {
          return console.log('callback', e.target.innerText, "的确认");
        }
      });
    }, false);
  } else if (btn.innerText == "ModalDelete") {
    btn.addEventListener('click', function (e) {
      modalInfo({
        type: "delete",
        title: "Do you Want to delete these items?",
        content: "\u62A5\u9519\u5185\u5BB9",
        callback: function callback() {
          return console.log('callback', e.target.innerText, "的确认");
        }
      });
    }, false);
  }
});
document.querySelector('.container').addEventListener('click', function (e) {
  if (screen.width > 768) {
    spin({ dom: document.querySelector('.container') });
    setTimeout(function () {
      spin({ dom: document.querySelector('.container') });
    }, 2000);
  } else {
    spin();
    setTimeout(function () {
      spin();
    }, 2000);
  }
}, false);

// add.test.js
// var match = require('../src/utils/functional.js');
// var expect = require('chai').expect;

// describe('加法函数的测试', () => {
//     it('1 加 1 应该等于 2', () => {
//         expect(match(/\s+/g,"hello world")).to.be.equal([" "]);
//     });
// });
},{}],0:[function(require,module,exports) {
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
  var ws = new WebSocket('ws://' + window.location.hostname + ':63869/');
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