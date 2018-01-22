// import {
//     pc,
//     mobile
// } from "peng-component";
// } from "../dist/index.js";

// if(screen.width>768){
//     var {
//         modal,
//         modalInfo,
//         message,
//         spin,
//         container
//     } = pc;
// }else{
//     var {
//         modal,
//         modalInfo,
//         message,
//         spin,
//         container
//     } = mobile;
// }

// const {
//     modal,
//     modalInfo,
//     message,
//     spin,
//     container
// } = pc;
const pc = Component.pc


var modal  =pc.modal;
var modalInfo  =pc.modalInfo;
var message  =pc.message;
var spin  =pc.spin;
var container  =pc.container;

var button = container.button;
var icon = container.icon;


var times = 0;
document.querySelector('#container-modal').innerHTML = `
    ${button({
        className:"btn-primary",
        text:"Modal"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalInfo"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalConfirm"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalDelete"
    }).outerHTML}
`
document.querySelector('#container-message').innerHTML = `
    ${button({
        className:"confirm btn-primary",
        text:"info"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"success"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"error"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"warning"
    }).outerHTML}
`;
let messageBtns = document.querySelectorAll('#container-message button');
messageBtns = Array.prototype.slice.call(messageBtns)
let modalBtns = document.querySelectorAll('#container-modal button');
modalBtns = Array.prototype.slice.call(modalBtns)
messageBtns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=="info"){
            message('123')
        }else{
            message({
                type: e.target.innerText,
                time: 100000,
                content: `这个是这个是这个是这个是这个是这个是这个是这个是这个是这个是这个是这个是${e.target.innerText},第${times++}次`,
                callback: ()=>{
                    console.log('callback',e.target.innerText);
                }
            })
        }
    },false)
})
modalBtns.forEach(btn =>{
    if(btn.innerText == "Modal"){
        btn.addEventListener('click',(e)=>{
            modal({
                title: `${btn.innerText}的标题`,
                content: `这个是${e.target.innerText}的内容,第${times++}次`,
                callback: ()=>console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }else if(btn.innerText == "ModalInfo"){
        btn.addEventListener('click',(e)=>{
            modalInfo('这个是简化版标题！！')
        },false)
    }else if(btn.innerText == "ModalConfirm"){
        btn.addEventListener('click',(e)=>{
            modalInfo({
                type: `confirm`,
                title: `Do you Want to delete these items?`,
                content: `警告内容`,
                callback: () => console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }else if(btn.innerText == "ModalDelete"){
        btn.addEventListener('click',(e)=>{
            modalInfo({
                type: `delete`,
                title: `Do you Want to delete these items?`,
                content: `报错内容`,
                callback: () => console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }
})
document.querySelector('.container').addEventListener('click',(e)=>{
    if(screen.width>768){
        spin({dom: document.querySelector('.container')})
        setTimeout(() => {
            spin({dom: document.querySelector('.container')})
        }, 2000);
    }else {
        spin()
        setTimeout(() => {
            spin()
        }, 2000);
    }
},false)