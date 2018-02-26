window.Component.pc.tree({
    // ifselect: false,是否加载之前选好的，默认true
    beforeSelect:["法塞特家族酒庄品鉴酒仓库","法塞特家族酒庄配件仓库"],// 之前选好的内容
    // select_model: "checkbox", //多选
    select_model: "radio", //单选
    data: [
        {id: "05", name: "法塞特家族酒庄仓库", pId: "", sid: 527, type: ""},
        {id: "0501", name: "法塞特家族酒庄正品仓库", pId: "05", sid: 528, type: "正品"},
        {id: "0502", name: "法塞特家族酒庄业务用酒仓库", pId: "05", sid: 529, type: "赠品"},
        {id: "0503", name: "法塞特家族酒庄品鉴酒仓库", pId: "05", sid: 530, type: "试用装"},
        {id: "0504", name: "法塞特家族酒庄物料仓库", pId: "05", sid: 531, type: "物料"},
        {id: "0505", name: "法塞特家族酒庄配件仓库", pId: "05", sid: 532, type: "配件"},
        {id: "0506", name: "法塞特家族酒庄包材仓库", pId: "05", sid: 533, type: "包材"},
        {id: "0507", name: "上海酒庄门店正品库", pId: "05", sid: 614, type: "正品"},
        {id: "0508", name: "上海酒庄门店业务用酒仓", pId: "05", sid: 615, type: "正品"},
        {id: "0509", name: "上海酒庄门店品鉴酒仓", pId: "05", sid: 616, type: "正品"},
        {id: "0510", name: "上海酒庄门店厨房用品仓", pId: "05", sid: 617, type: "正品"},
        {id: "0511", name: "上海酒庄门店样酒仓", pId: "05", sid: 618, type: "正品"},
        {id: "0512", name: "上海代保管仓", pId: "05", sid: 619, type: "正品"}
    ],
    next: (styles) => {
        let doms = document.querySelectorAll(`.${styles.active}`);
        doms = Array.prototype.slice.call(doms);
        doms = doms.map(dom => dom.querySelector(`.${styles['text-container']}`).textContent)
        doms = doms.join('，')
    }
})