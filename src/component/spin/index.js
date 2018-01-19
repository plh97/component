import $ from '../../utils/jquery.js';
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
    }else{
        let container = document.createElement('div')
        container.className = `component-container-spin ${dom==document.body?"component-container-global":""}`;
        container.innerHTML = `
            ${Icon({type:'spin'})}
            <span>Loading...</span>
        `;
        dom.append(container)
    }
}


export default Spin;
