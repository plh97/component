import "./index.less";

const Button = args => {
	const {
		className
	} = args
	let btn = document.createElement('button');
	btn.className = `component-btn ${className?className:""}`;
	return btn;
}

export default Button;