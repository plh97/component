import "./index.less";

const Button = args => {
	const {
		className,
		text
	} = args
	let btn = document.createElement('button');
	btn.className = `component-btn ${className?className:""}`;
	btn.innerText = text;
	return btn;
}

export default Button;