import Component from "peng-component";


// const {message,spin} = Component;
const {info,modal,confirm} = Component.modal;
var times = 0;
document.querySelector('#container-modal').innerHTML = `
	${Button({
		className:"btn-primary",
		text:"Modal"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"ModalInfo"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"ModalConfirm"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"ModalDelete"
	}).outerHTML}
`
document.querySelector('#container-message').innerHTML = `
	${Button({
		className:"confirm btn-primary",
		text:"info"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"success"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"error"
	}).outerHTML}
	${Button({
		className:"confirm btn-primary",
		text:"warning"
	}).outerHTML}
`;
document.querySelectorAll('#container-message button').forEach(btn =>{
	btn.addEventListener('click',(e)=>{
		message({
			type: e.target.innerText,
			time: 1000,
			content: `这个是${e.target.innerText},第${times++}次`,
			callback: ()=>{
				console.log('callback',e.target.innerText);
			}
		})
	},false)
})
document.querySelectorAll('#container-modal button').forEach(btn =>{
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
			info({
				type: `info`,
				title: `${btn.innerText}的标题`,
				content: `这个是${e.target.innerText}的内容,第${times++}次`,
				callback: () => console.log('callback',e.target.innerText,"的确认")
			})
		},false)
	}else if(btn.innerText == "ModalConfirm"){
		btn.addEventListener('click',(e)=>{
			info({
				type: `confirm`,
				title: `Do you Want to delete these items?`,
				content: `警告内容`,
				callback: () => console.log('callback',e.target.innerText,"的确认")
			})
		},false)
	}else if(btn.innerText == "ModalDelete"){
		btn.addEventListener('click',(e)=>{
			info({
				type: `delete`,
				title: `Do you Want to delete these items?`,
				content: `报错内容`,
				callback: () => console.log('callback',e.target.innerText,"的确认")
			})
		},false)
	}
})
document.querySelector('.container').addEventListener('click',(e)=>{
	spin({dom: document.querySelector('.container')})
},false)