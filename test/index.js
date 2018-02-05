import styles from './index.less'



let hour = [1,2,3,4,5,6,7,8,9,10,11,12]
let minute = []
let second = []

for (var i = 1; i <= 60; i++) {
    minute.push(i)
    second.push(i)
}

window.onload = e =>{
    let input = document.querySelector('input#data')
    input.addEventListener('click',clickEventFunc,false)
}

let clickEventFunc = e =>{
    let dataTimePicker = initHTML({
        hour,minute,second
    });
    document.body.appendChild(dataTimePicker)
    let sliders =dataTimePicker.children
    sliders = Array.prototype.slice.call(sliders);
    sliders.forEach(dom=>{
        slideEventProxy({
            event:"touchstart",
            dom
        })
    })
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
            if(_move_coord>0){
                // 向上相对位移
                // 1.不能超过总高度
                if( move_coord<0){
                    div.style.marginTop = "0px";
                }
                if( currentMarginTop>=totalListHeight ){
                    div.style.marginTop=(-totalListHeight)+"px";
                }
            }else if(_move_coord<0){
                // 向下相对位移
                // 1.不能<0
                if( move_coord>totalListHeight ){
                    div.style.marginTop=(-totalListHeight)+"px";
                }
                if( currentMarginTop<=0 ){
                    div.style.marginTop = "0px";
                }
            }
            Math.round(1.879823123213)
            domRound({
                dom:div,
                totalLength: totalListHeight,
                length:div.getBoundingClientRect().height
            })
            lastmousey = touchmove.changedTouches[0].screenY;
        }
        document.addEventListener('touchmove',touchmoveFunc,false)
        document.addEventListener('touchend',e=>{
            document.removeEventListener('touchmove',touchmoveFunc,false)
        },false)
    }
    dom.addEventListener(event,eventProxy,false);
}

let domRound = args =>{
    const {
        dom,length,totalLength
    } = args;
    console.log(
        dom.style.marginTop
    );
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