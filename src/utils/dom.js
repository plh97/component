let domFunc = e => {
    const {
        dom,
        style
    } = e;
    for(let i in style) {
        dom.style[i] = style[i];
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const Dom = {
    domFunc,
    sleep
}

export default Dom;