class Query {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.author = 'pengliheng';
    this.version = '0.0.1';
  }
  // 写方法
  css(key, val) {
    this.elements.forEach((dom) => { dom.style[key] = val; });
    return this;
  }
  // 选择第i个元素
  eq(i) {
    this.elements = [this.elements[i]];
    return this;
  }
  // find,查找///
  find(selector) {
    let newNode = [];
    this.elements.forEach((dom) => {
      newNode = [
        ...newNode,
        ...dom.querySelectorAll(selector),
      ];
    });
    this.elements = newNode;
    return this;
  }
  attr(attr, val) {
    this.elements.forEach((dom) => {
      if (attr.match(/data-/)) {
        dom.dataset[attr.match(/(?<=-)\w*/g)] = val;
      } else {
        dom[attr] = val;
      }
    });
    return this;
  }
  click(func) {
    this.elements.forEach(dom=>{
      dom.addEventListener('click',e=>func(e))
    })
    return this
  }
  each(func){
    this.elements.forEach(dom=>{
      func(dom)
    })
    return this;
  }
}
const $ = selector => new Query(selector);
// 用于写属性
$.ajax = ({
  type, url, dataType, success, error, data,
}) => {
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: type,
    body: JSON.stringify(data),
    // credentials: 'include'
  })
    .then(res => res[dataType]())
    .then(suc => success(suc))
    .catch(err => error(err));
};
window.$ = $;
