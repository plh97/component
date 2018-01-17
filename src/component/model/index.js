import $ from '../../utils/jquery.js';
import './index.less'
import Button from "../../container/button";

const model = args => {
    const {
        content
    } = args;
    let mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = `
        <div class="component-model">
            <div class="component-model-header">
                <span class="title">Basic Model</span>
                <span class="btn-close">X</span>
            </div>
            <div class="component-model-body">${content}</div>
            <div class="component-model-footer">
                ${Button({
                    className:"return",
                    text:"返回"
                }).outerHTML}
                &nbsp;
                &nbsp;
                ${Button({
                    className:"confirm btn-primary",
                    text:"确认"
                }).outerHTML}
            </div>
        </div>
    `;
    mask.addEventListener('click',e=>{
        e.stopPropagation()
        // e.preventDefault()
        // return false

        if(
            e.path[0].classList.contains('component-mask')
        ){
            mask.remove()
            $('body').style.overflow = "auto";
        }
	},false)
	let btns = mask.querySelectorAll('.component-model button');
    btns.forEach(dom=>{
        dom.addEventListener('click',()=>{
            mask.remove()
            $('body').style.overflow = "auto";
        })
    })
    $('body').style.overflow = "hidden";
    $('body').append(mask);
}

export default model;
