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
            event:"mousedown",
            dom
        })
    })
}

let slideEventProxy = args =>{
    const {
        event, dom
    } = args;
    let eventProxy = mousedown_e =>{
        let div = dom.querySelector('span:nth-child(1)')
        let mousemoveFunc = e => {
            let move_coord =  mousedown_e.screenY - e.screenY
            
            console.log(
                'move_coord',move_coord
            );
        }
        document.addEventListener('mousemove',mousemoveFunc,false)
        document.removeEventListener('mouseup',mousemoveFunc,false)
    }
    dom.addEventListener(event,eventProxy,false);
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