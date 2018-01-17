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

var css = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.component-mask .component-model {\n  top: 16vh;\n  width: 100%;\n  min-height: 220px;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.component-mask .component-model .component-model-header {\n  padding: 0 24px;\n  height: 55px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n.component-mask .component-model .component-model-body {\n  padding: 24px;\n  font-size: 14px;\n}\n.component-mask .component-model .component-model-footer {\n  height: 55px;\n  padding: 0 24px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n";
__$$styleInject(css);

var css$2 = ".component-btn {\n  border: 2px solid red;\n}\n.component-btn.btn-primary {\n  background-color: blue;\n}\n";
__$$styleInject(css$2);

var Button = function Button(args) {
	var className = args.className;

	var btn = document.createElement('button');
	btn.className = "component-btn " + (className ? className : "");
	return btn;
};

var model = function model(args) {
    var content = args.content;

    var mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = '\n        <div class="component-model">\n            <div class="component-model-header">\n                <span>Basic Model</span>\n                <span>X</span>\n            </div>\n            <div class="component-model-body">' + content + '</div>\n            <div class="component-model-footer">\n                ' + Button({
        className: "return"
    }).outerHTML + '\n                <button class="component-btn return">\u8FD4\u56DE</button>\n                <button class="component-btn confirm btn-primary">\u786E\u8BA4</button>\n            </div>\n        </div>\n    ';
    console.log('button', Button.outerHTML);
    mask.addEventListener('click', function (e) {
        e.stopPropagation();
        // e.preventDefault()
        // return false
    }, false);
    var btns = mask.querySelectorAll('.component-model button');
    btns.forEach(function (dom) {
        dom.addEventListener('click', function () {
            console.log(dom.innerHTML);
            mask.remove();
            $('body').style.overflow = "auto";
        });
    });
    $('body').style.overflow = "hidden";
    $('body').append(mask);
};

var Component = {
    model: model,
    Button: Button
};

console.log("the answer is " + index + " " + Component);
