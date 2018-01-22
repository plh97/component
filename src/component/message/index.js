import './index.less'
import Icon from "../../container/icon";

const Message = args => {
    let {
        type,
        content,
        callback,
        time
    } = args;
    typeof(args)=='string' && (content = args);
    type = (type == undefined ? "info" : type);
    time = (time == undefined ? 1000 : time);
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
    setTimeout(() => {
        message.remove()
    }, time);
    container.appendChild(message);
}

export default Message;