import './index.less'
import Icon from "../../container/icon";


const Spin = args => {
    if(args==undefined){
        var dom = document.body;
    } else {
        var {dom} = args;
        dom = (dom == undefined ? document.body : dom);
    }
    if(!!dom.querySelector('.component-container-spin')){
        dom.querySelector('.component-container-spin').remove()
        document.body.style.overflow = "auto";
    }else{
        dom.style.position="relative";
        let container = document.createElement('div')
        container.className = `component-container-spin ${dom==document.body?"component-container-global":""}`;
        container.innerHTML = `
            <div class="spin-container">
                ${Icon({type:'spin'})}
                <span>Loading...</span>
            </div>
        `;
        dom.appendChild(container)
        document.body.style.overflow = "hidden";
    }
}


export default Spin;
