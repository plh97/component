import styles from './index.less'
import 'babel-polyfill';


let hour = [1,2,3,4,5,6,7,8,9,10,11,12]
let minute = []
let second = []

for (var i = 1; i <= 60; i++) {
    minute.push(i)
    second.push(i)
}

window.onload = e =>{
    let input = document.querySelector('#data')
    input.addEventListener('click',clickEventFunc,false)
}

let clickEventFunc = e =>{
    let dataTimePicker = initHTML({
        hour,minute,second
    });
    let sliders =dataTimePicker.children
    sliders = Array.prototype.slice.call(sliders);
    sliders.forEach(dom=>{
        slideEventProxy({
            event:"touchstart",
            dom
        })
    })
    document.body.appendChild(dataTimePicker)
}

let slideEventProxy = args =>{
    const {
        event, dom
    } = args;
    let eventProxy = touchstart =>{
        let div = dom.querySelector('span:nth-child(1)')
        let beforeValue = Number(dom.querySelector('span:nth-child(1)').style.marginTop.match(/\d+/));
        var lastmousey=touchstart.changedTouches[0].screenY;
        let touchmoveFunc = touchmove => {
            let currentMarginTop = -Number(dom.querySelector('span:nth-child(1)').style.marginTop.replace(/(px|rem|%|vw|vh)/,''));
            let move_coord =  touchstart.changedTouches[0].screenY - touchmove.changedTouches[0].screenY;
            let _move_coord =  lastmousey - touchmove.changedTouches[0].screenY;
            let totalListHeight = div.getBoundingClientRect().height * (dom.children.length-1)
            if(_move_coord!=0){
                div.style.marginTop=(-beforeValue-move_coord)+"px";
            }
            currentMarginTop = -Number(dom.querySelector('span:nth-child(1)').style.marginTop.replace(/(px|rem|%|vw|vh)/,''));
            if(_move_coord>0){ // 相对向上位移
                if( currentMarginTop<0 && move_coord<0){
                    div.style.marginTop = "0px";
                }else if( currentMarginTop>=totalListHeight && move_coord>0){
                    div.style.marginTop=(-totalListHeight)+"px";
                }
            }else if(_move_coord<0){ // 相对向下位移
                if( currentMarginTop>totalListHeight && move_coord>0 ){
                    div.style.marginTop = (-totalListHeight)+"px";
                }else if( currentMarginTop<0 && move_coord < 0){
                    div.style.marginTop = "0px";
                }
            }
            window.mouseSpeed = _move_coord
            lastmousey = touchmove.changedTouches[0].screenY;
        }
        document.addEventListener('touchmove',touchmoveFunc,false)
        let touchendFunc = e => {
            // 当你松开手指的时候，需要获取当前手指位移速度
            mouseSpeedLessFunc({
                mouseSpeed,
                dom:div
            })
            let currentMarginTop = -Number(dom.querySelector('span:nth-child(1)').style.marginTop.replace(/(px|rem|%|vw|vh)/,''));
            div.style.transition = "all 0.3s cubic-bezier(0, 0.58, 0.46, 0.63)";
            setTimeout(() => {
                div.style.transition = "";
            }, 300);
            div.style.marginTop = -domRound({
                currentMarginTop,
                length:div.getBoundingClientRect().height
            })+"px";
            document.removeEventListener('touchmove',touchmoveFunc,false)
        }
        document.addEventListener('touchend',touchendFunc,false)
        setTimeout(() => {
            document.removeEventListener('touchend',touchendFunc,false)
        }, 300);
    }
    dom.addEventListener(event,eventProxy,false);
}

let mouseSpeedLessFunc = async e =>{
    const {
        dom,mouseSpeed
    } = e;
    let beforeValue = Number(dom.style.marginTop.match(/\d+/));
    let totalListHeight = dom.getBoundingClientRect().height * (dom.parentElement.children.length-1)
    dom.style.transition = `all ${(Math.abs(mouseSpeed))*10}s cubic-bezier(0.645, 0.045, 0.355, 1)`;
    // 向上滑动？
    // 向下滑动？
    if(beforeValue+mouseSpeed*10>totalListHeight-beforeValue){
        console.log(
            `当前位置${beforeValue}`,
            `位移速度${mouseSpeed}`,
            `总高度${totalListHeight}`,
        );
        dom.style.marginTop = -totalListHeight+"px";
    }else if(beforeValue+mouseSpeed*10<-beforeValue){
        console.log(22222);
        dom.style.marginTop = "0px";
    }else{
        console.log(
            `滑动了${beforeValue+mouseSpeed*10}px`
        );
        dom.style.marginTop = -beforeValue-mouseSpeed*10+"px";
    }
    await sleep(Math.abs(mouseSpeed)*10);
}

let sleep = ms => new Promise(resolve=>setTimeout(() => resolve, ms))


let domRound = args =>{
    const {
        length,currentMarginTop
    } = args;
    return Math.round(currentMarginTop/length)*length
}


let initHTML = data =>{
    let dataTimePicker = document.createElement('div');
    dataTimePicker.className = `${styles.dataTimePicker}`;
    for(let Data in data){
        let container = document.createElement('div');
        container.className = `${Data} ${styles.list}`;
        data[Data].forEach((num,i) => {
            let span = document.createElement('span');
            span.className = styles.num
            span.innerHTML=num
            container.appendChild(span)
        })
        dataTimePicker.appendChild(container)
    }

    return dataTimePicker
}