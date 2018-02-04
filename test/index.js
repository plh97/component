import style from '../less/index.less'



let hour = [1,2,3,4,5,6,7,8,9,10,11,12]
let minute = []
let second = []

// for (let i = 1; 1 <= 60; i++) {
//     minute[i] = i;
//     second[i] = i;
// }

console.log(hour,minute,second);

window.onload = e =>{

    let input = document.querySelector('input#data')
    input.addEventListener('click',clickEventFunc,false)
}

let clickEventFunc = e =>{
    let dataTimePicker = document.createElement('div');
    let html = `
        <div class="hour list"></div>
        <div class="minute list"></div>
        <div class="second list"></div>
    `;
    dataTimePicker.innerHTML = html;
    dataTimePicker.className = 'dataTimePicker';
    document.body.appendChild(dataTimePicker)
    // dataTimePicker.
}
