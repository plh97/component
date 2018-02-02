import './index.less'
import Icon from "../../container/icon";
import Dom from "../../utils/dom.js";

const Message = async args => {
    const { domFunc, sleep } = Dom;
    let {
        type,
        content,
        callback,
        time
    } = args;
    typeof(args)=='string' && (content = args);
    type = (type == undefined ? "info" : type);
    time = (time == undefined ? 3000 : time);
    content = (content == undefined ? "{content: 请输入content参数}" : content);
    callback = (callback == undefined ? ()=>{} : callback);
    if(document.querySelector('.component-container')){
        var container = document.querySelector('.component-container');
    } else {
        var container = document.createElement('div');
        container.className = 'component-container';
        document.body.appendChild(container)
    }
    let message = document.createElement('div');
    message.className = `component-container-message ${type}`;
    message.innerHTML = `
        ${Icon({ type })}
        &nbsp;
        ${ content }
    `;
    container.appendChild(message);
    await sleep(time)
    message.remove()
}

export default Message;