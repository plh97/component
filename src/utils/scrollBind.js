let scrollBind = e => {
	const {row, column, scroll} = e;
	eventProxy({
		event: 'scroll',
		column, row, scroll
	})
	
	addArrayProp(row.children).forEach(dom=>{
		eventProxy({
			event: 'click',
			dom,row
		})
	})
}
let eventProxy = e => {
	const {
		event, column, row, scroll,dom
	} = e;
	let navCurrentClassName = navCurrentClassNameFunc(row);
	let scrollEventFunc = e => {
		let currentScreenPlace = document.documentElement.scrollTop < document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
		let scrollList = column.children
		scrollList = addArrayProp(scrollList)
		let activeNav = row.querySelector(`.${navCurrentClassName}`);
		scrollList.forEach((section, i) => {
			if (section.getBoundingClientRect().top < 0 &&
				section.getBoundingClientRect().bottom > 0) {
				if (currentScreenPlace + screen.height == document.body.scrollHeight) {
					navIntoViewFunc({
						currentNav: row.children[row.children.length - 1],
						activeNav,
						navCurrentClassName
					})
				} else {
					navIntoViewFunc({
						currentNav: row.children[i],
						activeNav,
						navCurrentClassName
					})
				}
			}
		})
	}
	let clickEventFunc = e =>{

		navIntoViewFunc({
			currentNav: e.target,
			activeNav: row.querySelector(`.${navCurrentClassName}`),
			navCurrentClassName
		})
	}
	if(event=="scroll"){
		scroll.addEventListener(event, scrollEventFunc, false)
		scrollEventFunc()
	}else if(event=="click"){
		dom.addEventListener(event, clickEventFunc, false)
	}
}
let navCurrentClassNameFunc = dom => {
	if (dom.querySelector('.active')) {
		return 'active'
	} else if (dom.querySelector('.on')) {
		return 'on'
	} else if (dom.querySelector('.current')) {
		return 'current'
	} else if (dom.querySelector('.cur')) {
		return 'cur'
	}
}

let navIntoViewFunc = e => {
	const { currentNav, activeNav, navCurrentClassName } = e;
	if (currentNav == activeNav) return;
	activeNav.classList.remove(navCurrentClassName)
	currentNav.classList.add(navCurrentClassName)
	currentNav.scrollIntoView({
		block: "center",
		inline: "center"
	})
}
let addArrayProp = e => Array.prototype.slice.call(e)
export default scrollBind;
