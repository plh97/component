import './index.less'
import Button from "../../container/button";
import Icon from "../../container/icon";
import Dom from "../../utils/dom.js";

const {
    sleep,
    domFunc,
    addEvent,
    isDomFunc,
    addArrProp,
    showDomFunc,
    isDomInPathFunc,
    domToggleAnimation,
    transformStringToBool
} = Dom;


const Tree = async args => {
    let {
        data,
        select_model,
        callback
    } = args;
    console.log(select_model);
    let mask = document.createElement('div');
    mask.className = 'component-mask';
    mask.innerHTML = `
        <div class="component-tree">
            <div class="component-tree-all" id="all">
                ${Icon({ type:'navlist'})}
                <span class="text-container">全部</span>
                ${Icon({ type:'unfold' })}
            </div>
            <div class="component-tree-container"></div>
            <div class="btn-group">
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

    domFunc({
        dom:document.querySelector('html'),
        style: {
            paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
            overflow: "hidden"
        }
    })
    document.body.appendChild(mask);
    await sleep(300);
    await putDataToFirTable({
        data,
        container: document.querySelector('.component-tree .component-tree-container')
    })
    // all event proxy
    await eventProxy({
        event:'click',
        select_model
    });
    let btns = mask.querySelectorAll('.component-tree button');
    btns = Array.prototype.slice.call(btns);
    await btnAddevent({
        btns,
        mask,
        callback
    });
}


const btnAddevent = args => {
    const {
        btns,
        mask,
        callback
    } = args;
    btns.forEach(dom=>{
        if(dom.classList.contains('confirm')) {
            dom.addEventListener('click',() => {
                callback()
                mask.remove()
                domFunc({
                    dom:document.querySelector('html'),
                    style: {
                        paddingRight: `0`,
                        overflow: "auto"
                    }
                })
            })
        }else if(dom.classList.contains('return')){
            dom.addEventListener('click',() => {
                mask.remove()
                domFunc({
                    dom:document.querySelector('html'),
                    style: {
                        paddingRight: `0`,
                        overflow: "auto"
                    }
                })
            })
        }
    })
}






const putDataToFirTable = async args => {
    const {
        data,
        container
    } = args;
    let arr = data.map((row,i) => {
        let div = document.createElement('div');
        let html = `

            <div class="component-tree-container-list-div" data-type="${row.id}">
                ${Icon({type:"wujiaoxing"})}
                <span class="text-container">${row.name}</span>
                ${row.hasOwnProperty('children') ? Icon({type:"unfold"}) : ""}
            <div>
        `;
        div.className = "component-tree-container-list";
        div.innerHTML += html;
        div.id = "sec"+i;
        if(row.hasOwnProperty('children')){
            putDataToFirTable({
                data:row.children,
                container:div
            })
        }
        container.appendChild(div);
    });
}




const eventProxy = args => {
    const { 
        event,
        select_model
     } = args;
    if(event=="click"){
        let handleAllEvent = e => {
            // toggle show all with first table 
            let isShowAllInPath = isDomInPathFunc({
                path: e.path,
                selector: "#all"
            })
            if(isShowAllInPath){
                // add some animation
                let more = isShowAllInPath.querySelector('.icon-unfold');
                domToggleAnimation({
                    dom: more,
                    animationDuration: "0.3s",
                    animationFillMode: "forwards",
                    animationName: ["rotate-90","rotate90"]
                })
                let listContainer = isShowAllInPath.parentElement.querySelector('.component-tree-container');
                domToggleAnimation({
                    dom: listContainer,
                    animationDuration: "0.3s",
                    animationFillMode: "forwards",
                    animationName: ["slidein","slideout"]
                })
            }
            // toggle show the tree list in first table
            let openList = document.querySelectorAll('.component-tree-container .icon-unfold')
            openList = Array.prototype.slice.call(openList)
            openList.forEach(dom=>{
                let isShowAllInPath = isDomFunc({
                    path: e.path,
                    dom:dom.parentElement
                })
                if(isShowAllInPath){
                    // add some animation
                    domToggleAnimation({
                        dom: dom,
                        animationDuration: "0.3s",
                        animationFillMode: "forwards",
                        animationName: ["rotate-90","rotate90"]
                    })
                    let listContainer = isShowAllInPath.parentElement;
                    domToggleAnimation({
                        dom: listContainer,
                        animationDuration: "0.3s",
                        animationFillMode: "forwards",
                        animationName: ["slidein1","slideout1"]
                    })
                }
            })
            // 对于可以选择的dom元素 添加点击active的样式
            let selectInput = document.querySelectorAll('.component-tree-container-list-div')
            selectInput = addArrProp(selectInput).filter(dom=>{
                return !dom.querySelector('svg.icon-unfold')
            })
            selectInput.forEach(dom=>{
                let isSelectDomInPath = isDomFunc({
                    path: e.path, dom
                })
                if(isSelectDomInPath){
                    // if select one
                    if(select_model=="radio"){
                        addArrProp(document.querySelectorAll('.component-tree-container .active')).forEach(dom=>{
                            dom.classList.remove('active')
                        })
                        isSelectDomInPath.classList.add('active')
                    }else if(select_model=="checkbox"){
                        console.log(select_model);
                        // if select more
                        isSelectDomInPath.classList.toggle('active')
                    }
                }
            })
            // click mask remove tree
            if(e.path[0].classList.contains('component-mask')){
                document.querySelector('.component-mask').remove()
                domFunc({
                    dom:document.querySelector('html'),
                    style: {
                        paddingRight: `0px`,
                        overflow: "auto"
                    }
                })
            }
        }
        document.querySelector('.component-mask').addEventListener(event, handleAllEvent, false)
    }
}


export default Tree;