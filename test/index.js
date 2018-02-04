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
    document.querySelector('input#data').addEventListener('click',(e)=>{
        let div = document.createElement('div')
        let html = `
            <div class="dateTimePicker-header">选择出生日期</div>
            <div class="dateTimePicker-body">
                <div class="dateTimePicker-body-year"></div>
                <div class="dateTimePicker-body-month"></div>
                <div class="dateTimePicker-body-day"></div>
            </div>
        `
        div.className='dateTimePicker'
        div.innerHTML=html;
        document.body.appendChild(div);
    },false)
}