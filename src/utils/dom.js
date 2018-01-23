let domFunc = e => {
    const {
        dom,
        style
    } = e;
    for(let i in style) {
        dom.style[i] = style[i];
    }
}

const Dom = {
    domFunc:domFunc
}

export default Dom;