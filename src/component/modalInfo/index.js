import $ from '../../utils/jquery.js';
import './index.less'
import Button from "../../container/button";
import Icon from "../../container/icon";

const ModalInfo = args => {
    let {
        type,
        content,
        callback
    } = args;
    if(!type.match(/(info|success|error|warning)/)){
        type="info"
    }
    if(content==undefined){
        content="{content: 请输入content参数}"
    }
    if(callback==undefined){
        callback=()=>{}
    }
    let mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = `
        <div class="component-modalInfo">
            <div class="component-modalInfo-body">
                ${Icon({
                    type
                })}
                <span class="component-modalInfo-body-container">
                    ${content}
                </span>
            </div>
            <div class="component-modalInfo-footer">
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
            if(dom.classList.contains('confirm')) {
                callback();
            }
        })
    })
    $('body').style.overflow = "hidden";
    $('body').append(mask);
}

export default ModalInfo;
