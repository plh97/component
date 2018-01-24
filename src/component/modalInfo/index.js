import './index.less'
import Button from "../../container/button";
import Icon from "../../container/icon";
import Dom from "../../utils/dom.js";

const ModalInfo = async args => {
    const {
        domFunc,
        sleep
    } = Dom;
    let {
        type,
        content,
        title,
        callback
    } = args;
    typeof(args)=='string' && (
        content = args,
        type = 'info'
    );
    if(type==undefined){
        type="info"
    }
    if(title==undefined){
        title="提示"
    }
    if(content==undefined){
        content="{content: 请输入content参数}"
    }
    if(callback==undefined){
        callback=()=>{}
    }
    if(!type.match(/(info|success|error|warning|confirm|delete)/)){
        type="info"
    }
    let mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = `
        <div class="component-modalInfo">
            <div class="component-model-header">
                ${Icon({
                    type
                })}
                <span class="title">${title}</span>
            </div>
            <div class="component-model-body">
                ${content}
            </div>
            <div class="component-modalInfo-footer">
                ${(type=="confirm"||type=="delete") ? Button({
                    className:"cancal",
                    text:"取消"
                }).outerHTML:""}
                ${Button({
                    className:`confirm ${type=="delete" ? "btn-danger":"btn-primary"}`,
                    text:"确认"
                }).outerHTML}
            </div>
        </div>
    `;
    domFunc({
        dom: document.querySelector('html'),
        style: {
            paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
            overflow: "hidden"
        }
    })
    document.body.appendChild(mask);
    await sleep(500);
    mask.addEventListener('click',e => {
        e.stopPropagation()
        // e.preventDefault()
        // return false
        if(
            e.path[0].classList.contains('component-mask')
        ){
            mask.remove()
            domFunc({
                dom:document.querySelector('html'),
                style: {
                    paddingRight: `0px`,
                    overflow: "auto"
                }
            })
        }
	},false)
    let btns = mask.querySelectorAll('.component-modalInfo button');
    btns = Array.prototype.slice.call(btns);
    btns.forEach(dom=>{
        dom.addEventListener('click',()=>{
            mask.remove()
            domFunc({
                dom:document.querySelector('html'),
                style: {
                    paddingRight: `0px`,
                    overflow: "auto"
                }
            })
            if(dom.classList.contains('confirm')) {
                callback();
            }
        })
    })
}

export default ModalInfo;
