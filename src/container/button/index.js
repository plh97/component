import styles from "./index.less";

const Button = args => {
	const {
		className,
		text, type
	} = args;
	let btn = document.createElement('button');
	btn.className = `${styles['component-btn']} ${className} ${styles[type]}`;
	btn.innerText = text;
	return btn;
}

export default Button;