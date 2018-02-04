import style from "./index.less";

const Button = args => {
	const {
		className,
		text
	} = args
	let btn = document.createElement('button');
	btn.className = `${style['component-btn']} ${style[className?className:""]}`;
	btn.innerText = text;
	return btn;
}

export default Button;