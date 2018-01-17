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

var $ = function $(n) {
	return document.querySelector(n);
};

var index = 42;

var css = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.component-mask .component-model {\n  top: 16vh;\n  width: 100%;\n  height: 220px;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-model .component-model-header {\n  padding: 0 24px;\n  height: 16px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n.component-mask .component-model .component-model-body {\n  padding: 24px;\n  font-size: 14px;\n}\n";
__$$styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Component = function () {
    function Component() {
        classCallCheck(this, Component);
    }

    createClass(Component, null, [{
        key: 'model',
        value: function model(args) {
            var content = args.content;

            console.log('the answer is ' + index);
            var mask = document.createElement('div');
            mask.className = 'component-mask';
            mask.innerHTML = '\n            <div class="component-model">\n                <div class="component-model-header">\n                    <span>Basic Model</span>\n                    <span>X</span>\n                </div>\n                <div class="component-model-body">' + content + '</div>\n                <div class="component-model-footer">\n                    <button class="component-btn return">\u8FD4\u56DE</button>\n                    <button class="component-btn confirm ant-btn-primary">\u786E\u8BA4</button>\n                </div>\n            </div>\n        ';
            mask.addEventListener('click', function (e) {
                e.stopPropagation();
                // e.preventDefault() 
                // return false
            }, false);
            mask.querySelectorAll('.model button').forEach(function (dom) {
                dom.addEventListener('click', function () {
                    console.log(dom.innerHTML);
                    mask.remove();
                    $('body').style.overflow = "auto";
                });
            });
            $('body').style.overflow = "hidden";
            $('body').append(mask);
        }
    }]);
    return Component;
}();

// export default Component;
