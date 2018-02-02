// add.test.js
// var last = require('../src/utils/functional.js');
// var expect = require('chai').expect;

// describe('变成大写字母+！', () => {
//     it('["tori_spelling", "tori amos"] 有空格 "tori amos"', () => {
//         expect(last(['jumpkick', 'roundhouse', 'uppercut'])).to.be.equal("uppercut");
//     });
// });


// import Component from '../dist/index.js'


window.onload = e =>{
    let container = document.createElement('div');
    container.className = "btn-container1";
    container.innerHTML = `
        ${Button({
            text:"按钮",
            className:"btn-primary"
        }).outerHTML}
    `;
    document.querySelector('.btn-container').appendChild(container);

    document.querySelector('Button').addEventListener('click',(e)=>{
        ModalInfo({
            title:"删除",
            content:`
                <p>12321</p>
                <p>12321</p>
                <p>12321</p>
                <p>12321</p>
            `,
            type:"delete"
        })
        // Spin(1111111)
    },false)
}