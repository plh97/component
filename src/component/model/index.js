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
                <span>Basic Model</span>
                <span>X</span>
            </div>
            <div class="component-model-body">${content}</div>
            <div class="component-model-footer">
                ${Button({
                    className:"return"
                }).outerHTML}
                <button class="component-btn return">返回</button>
                <button class="component-btn confirm btn-primary">确认</button>
            </div>
        </div>
    `;
    console.log(
        'button',Button.outerHTML
    );
    mask.addEventListener('click',e=>{
        e.stopPropagation()
        // e.preventDefault()
        // return false
	},false)
	let btns = mask.querySelectorAll('.component-model button');
    btns.forEach(dom=>{
        dom.addEventListener('click',()=>{
            console.log(dom.innerHTML)
            mask.remove()
            $('body').style.overflow = "auto";
        })
    })
    $('body').style.overflow = "hidden";
    $('body').append(mask);
}

export default model;
