
import $ from './utils/jquery.js';
import answer from 'the-answer';
import './index.less'

class Component {
    static model(args){
        const {
            content
        } = args;
        console.log(`the answer is ${answer}`);
        let mask = document.createElement('div')
        mask.className = 'component-mask'
        mask.innerHTML = `
            <div class="component-model">
                <div class="component-model-header">
                    <span>Basic Model</span>
                    <span>X</span>
                </div>
                <div class="component-model-body">${content}</div>
                <div class="component-model-footer">
                    <button class="component-btn return">返回</button>
                    <button class="component-btn confirm ant-btn-primary">确认</button>
                </div>
            </div>
        `
        mask.addEventListener('click',e=>{
            e.stopPropagation()
            // e.preventDefault() 
            // return false
        },false)
        mask.querySelectorAll('.model button').forEach(dom=>{
            dom.addEventListener('click',()=>{
                console.log(dom.innerHTML)
                mask.remove()
                $('body').style.overflow = "auto";
            })
        })
        $('body').style.overflow = "hidden";
        $('body').append(mask);
    }
}

// export default Component;