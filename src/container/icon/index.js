import "./index.less";

const Icon = args => {
	const {
		className,
		type
	} = args;
	if(type=="info"){
		let icon = `
			<svg
				class="icon ${className}" viewBox="0 0 1024 1024" 
				width="200" height="200">
				<path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#2196F3" p-id="1690"></path>
				<path d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" fill="#FFFFFF" p-id="1691"></path>
				<path d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FFFFFF" p-id="1692"></path>
			</svg>
		`;
		return icon;
	}
}

export default Icon;