import Component from "../dist";


window.onload=e=>{
	document.querySelector('.date').addEventListener('click',clickProxyFunc,false)
}


let clickProxyFunc = e =>{
	console.log(e.target,Component);
	e.target.get
}
