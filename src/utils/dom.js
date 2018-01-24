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

// 添加Array属性
const addArrProp = e => Array.prototype.slice.call(e)

const isDomInPathFunc = args => {
    const {
        path,
        selector
    } = args;
    for (let i = 0; i < path.length; i++) {
        if(path[i]== document.querySelector(selector)){
            return path[i]
        }else if(path[i] == document.body){
            return false
        }
    }
}
// toggle show dom animation
const domToggleAnimation = args => {
    const {
        dom,
        animationName,
        animationDuration,
        animationFillMode,
    } = args;
    if(
        dom.style.animationName == animationName[1]
    ){
        dom.style.animationDuration = animationDuration;
        dom.style.animationFillMode = animationFillMode;
        dom.style.animationName = animationName[0];
    } else {
        dom.style.animationDuration = animationDuration;
        dom.style.animationFillMode = animationFillMode;
        dom.style.animationName = animationName[1];
    }
}
// ===============Tool==============

const Dom = {
    domFunc,
    sleep,
    isDomInPathFunc,
    domToggleAnimation,
    addArrProp
}

export default Dom;