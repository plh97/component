let $ = function (n) {
	return document.querySelector(n);
};
class Component {
    static model(){
        const {
            dom
        } = Component;
        let mask = document.createElement('div')
        mask.className = 'mask'
        mask.innerHTML = `
            <div class="model">
                <div class="title">
                    <span>Basic Model</span>
                    <span>X</span>
                </div>
                <div class="content">
                    <p>some content...<p>
                    <p>some content...<p>
                    <p>some content...<p>
                </div>
                <div class="botton">
                    <button class="ant-btn ant-btn-primary">返回</button>
                    <button class="ant-btn ant-btn-primary">确认</button>
                </div>
            </div>
        `
        $('body').style.overflow = "hidden";
        $('body').append(mask);
    }
}

// module.exports = Component;
