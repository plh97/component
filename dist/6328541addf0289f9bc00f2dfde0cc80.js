// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
// window.Component.pc.tree({
//   // ifselect: false,是否加载之前选好的，默认true
//   beforeSelect: ["法塞特家族酒庄品鉴酒仓库", "法塞特家族酒庄配件仓库"],// 之前选好的内容
//   // select_model: "checkbox", //多选
//   select_model: "radio", //单选
//   data: [
//     { "id": "01", "name": "圣路易·丁酒庄", "pId": "", "sid": 499, "type": "" },
//     { "id": "0101", "name": "圣路易·丁酒庄/酒庄（原酒）", "pId": "01", "sid": 500, "type": "半成品" },
//     { "id": "0102", "name": "圣路易·丁酒庄/酒庄（成品）", "pId": "01", "sid": 501, "type": "正品" },
//     { "id": "0103", "name": "圣路易·丁酒庄/酒庄（半成品）", "pId": "01", "sid": 502, "type": "半成品" },
//     { "id": "0104", "name": "圣路易·丁酒庄/酒庄（配件）", "pId": "01", "sid": 503, "type": "物料" },
//     { "id": "0105", "name": "圣路易·丁酒庄/酒庄（辅料）", "pId": "01", "sid": 504, "type": "半成品" },
//     { "id": "0106", "name": "圣路易·丁酒庄/酒庄（包材）", "pId": "01", "sid": 505, "type": "物料" },
//     { "id": "0201", "name": "老酒庄/老酒庄（原酒）", "pId": "02", "sid": 507, "type": "半成品" },
//     { "id": "0202", "name": "老酒庄/老酒庄（成品）", "pId": "02", "sid": 508, "type": "正品" },
//     { "id": "0203", "name": "老酒庄/老酒庄（半成品）", "pId": "02", "sid": 509, "type": "半成品" },
//     { "id": "0204", "name": "老酒庄/老酒庄（配件）", "pId": "02", "sid": 510, "type": "物料" },
//     { "id": "0205", "name": "老酒庄/老酒庄（辅料）", "pId": "02", "sid": 511, "type": "物料" },
//     { "id": "0206", "name": "老酒庄/老酒庄（包材）", "pId": "02", "sid": 512, "type": "物料" },
//     { "id": "0301", "name": "781山洞/山洞（原酒）", "pId": "03", "sid": 514, "type": "半成品" },
//     { "id": "0302", "name": "781山洞/山洞（成品）", "pId": "03", "sid": 515, "type": "正品" },
//     { "id": "0303", "name": "781山洞/山洞（半成品）", "pId": "03", "sid": 516, "type": "半成品" },
//     { "id": "0304", "name": "781山洞/山洞（配件）", "pId": "03", "sid": 517, "type": "正品" },
//     { "id": "0305", "name": "781山洞/山洞（辅料）", "pId": "03", "sid": 518, "type": "物料" },
//     { "id": "0306", "name": "781山洞/山洞（包材）", "pId": "03", "sid": 519, "type": "物料" },
//     { "id": "0401", "name": "银川商贸（原酒）", "pId": "04", "sid": 521, "type": "正品" },
//     { "id": "0402", "name": "银川商贸（成品）", "pId": "04", "sid": 522, "type": "赠品" },
//     { "id": "0403", "name": "银川商贸（半成品）", "pId": "04", "sid": 523, "type": "半成品" },
//     { "id": "0404", "name": "银川商贸（物料）", "pId": "04", "sid": 524, "type": "物料" },
//     { "id": "0405", "name": "银川商贸（配件）", "pId": "04", "sid": 525, "type": "物料" },
//     { "id": "0406", "name": "银川商贸（包材）", "pId": "04", "sid": 526, "type": "物料" },
//     { "id": "0501", "name": "法塞特家族酒庄正品仓库", "pId": "05", "sid": 528, "type": "正品" },
//     { "id": "0502", "name": "法塞特家族酒庄业务用酒仓库", "pId": "05", "sid": 529, "type": "赠品" },
//     { "id": "0503", "name": "法塞特家族酒庄品鉴酒仓库", "pId": "05", "sid": 530, "type": "试用装" },
//     { "id": "0504", "name": "法塞特家族酒庄物料仓库", "pId": "05", "sid": 531, "type": "物料" },
//     { "id": "0505", "name": "法塞特家族酒庄配件仓库", "pId": "05", "sid": 532, "type": "配件" },
//     { "id": "0506", "name": "法塞特家族酒庄包材仓库", "pId": "05", "sid": 533, "type": "包材" },
//     { "id": "0601", "name": "法塞特（浙江）正品仓库", "pId": "06", "sid": 535, "type": "正品" },
//     { "id": "0602", "name": "法塞特（浙江）赠品仓库", "pId": "06", "sid": 536, "type": "赠品" },
//     { "id": "0603", "name": "法塞特（浙江）试用装仓库", "pId": "06", "sid": 537, "type": "试用装" },
//     { "id": "0604", "name": "法塞特（浙江）物料仓库", "pId": "06", "sid": 538, "type": "物料" },
//     { "id": "0605", "name": "法塞特（浙江）配件仓库", "pId": "06", "sid": 539, "type": "配件" },
//     { "id": "0606", "name": "法塞特（浙江）包材仓库", "pId": "06", "sid": 540, "type": "包材" },
//     { "id": "0701", "name": "法塞特（福建）正品仓库", "pId": "07", "sid": 543, "type": "正品" },
//     { "id": "0702", "name": "法塞特（福建）赠品仓库", "pId": "07", "sid": 544, "type": "赠品" },
//     { "id": "0703", "name": "法塞特（福建）试用装仓库", "pId": "07", "sid": 545, "type": "试用装" },
//     { "id": "0704", "name": "法塞特（福建）物料仓库", "pId": "07", "sid": 546, "type": "物料" },
//     { "id": "0705", "name": "法塞特（福建）配件仓库", "pId": "07", "sid": 547, "type": "配件" },
//     { "id": "0706", "name": "法塞特（福建）包材仓库", "pId": "07", "sid": 548, "type": "包材" },
//     { "id": "0507", "name": "上海酒庄门店正品库", "pId": "05", "sid": 614, "type": "正品" },
//     { "id": "0508", "name": "上海酒庄门店业务用酒仓", "pId": "05", "sid": 615, "type": "正品" },
//     { "id": "0509", "name": "上海酒庄门店品鉴酒仓", "pId": "05", "sid": 616, "type": "正品" },
//     { "id": "0510", "name": "上海酒庄门店厨房用品仓", "pId": "05", "sid": 617, "type": "正品" },
//     { "id": "0511", "name": "上海酒庄门店样酒仓", "pId": "05", "sid": 618, "type": "正品" },
//     { "id": "0512", "name": "上海代保管仓", "pId": "05", "sid": 619, "type": "正品" },
//     { "id": "02", "name": "老酒庄", "pId": "", "sid": 506, "type": "" },
//     { "id": "03", "name": "781山洞", "pId": "", "sid": 513, "type": "" },
//     { "id": "04", "name": "银川商贸仓库", "pId": "", "sid": 520, "type": "正品" },
//     { "id": "05", "name": "法塞特家族酒庄仓库", "pId": "", "sid": 527, "type": "" },
//     { "id": "06", "name": "法塞特（浙江）仓库", "pId": "", "sid": 534, "type": "" },
//     { "id": "07", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "08", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "09", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "10", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "11", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "12", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "13", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "14", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "15", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "16", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "17", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//     { "id": "18", "name": "法塞特（福建）仓库", "pId": "", "sid": 542, "type": "" },
//   ],
//   next: doms => console.log(doms)
// })

// window.Component.pc.treeTable({
//   ifselect: true,
//   beforeSelect: ["法塞特银川商贸有限公司", "宁夏一带一路供应链股份有限公司"],
//   select_model: "checkbox",
//   data: {
//     title: [
//       { "id": "001", "name": "半成品", "pId": "", "sid": 200, "code": "001" },
//       { "id": "002", "name": "包装材料", "pId": "", "sid": 201, "code": "002", },
//       { "id": "002001", "name": "酒瓶", "pId": "002", "sid": 205, "code": "002001" },
//       { "id": "002002", "name": "软木塞", "pId": "002", "sid": 206, "code": "002002" },
//       { "id": "002003", "name": "酒标", "pId": "002", "sid": 207, "code": "002003" },
//       { "id": "002004", "name": "胶帽", "pId": "002", "sid": 208, "code": "002004" },
//       { "id": "002005", "name": "内盒", "pId": "002", "sid": 209, "code": "002005" },
//       { "id": "002006", "name": "外箱", "pId": "002", "sid": 210, "code": "002006" },
//       { "id": "002007", "name": "礼盒", "pId": "002", "sid": 211, "code": "002007" },
//       { "id": "002008", "name": "3L橡木桶及配箱", "pId": "002", "sid": 212, "code": "002008" },
//       { "id": "002009", "name": "5L橡木桶及配箱", "pId": "002", "sid": 213, "code": "002009" },
//       { "id": "002010", "name": "套盒不干胶贴", "pId": "002", "sid": 214, "code": "002010" },
//       { "id": "002011", "name": "外箱不干胶贴", "pId": "002", "sid": 215, "code": "002011" },
//       { "id": "002012", "name": "其他包装类材料", "pId": "002", "sid": 216, "code": "002012" },
//       { "id": "004", "name": "辅料", "pId": "", "sid": 203, "code": "004" },
//       { "id": "005", "name": "配件", "pId": "", "sid": 204, "code": "005" },
//       { "id": "005001", "name": "酒具", "pId": "005", "sid": 224, "code": "005001" },
//       { "id": "006", "name": "原酒", "pId": "", "sid": 217, "code": "006" },
//       { "id": "007", "name": "饮料", "pId": "", "sid": 218, "code": "007" },
//       { "id": "008", "name": "物料", "pId": "", "sid": 219, "code": "008" },
//       { "id": "009", "name": "白酒", "pId": "", "sid": 220, "code": "009" },
//       { "id": "009001", "name": "五粮液", "pId": "009", "sid": 221, "code": "009001" },
//       { "id": "009002", "name": "剑南春", "pId": "009", "sid": 223, "code": "009002" },
//       { "id": "010", "name": "葡萄酒", "pId": "", "sid": 222, "code": "010"},
//       { "id": "010001", "name": "贺兰鹰", "pId": "010", "sid": 331, "code": "010001", "brand_id": 21, "brand_name": "贺兰鹰" },
//       { "id": "010002", "name": "法塞特", "pId": "010", "sid": 332, "code": "010002", "brand_id": 19, "brand_name": "法塞特" },
//       { "id": "010010", "name": "萌次元", "pId": "010", "sid": 342, "code": "010010", "brand_id": 29, "brand_name": "萌次元" },
//       { "id": "010200", "name": "超值精选", "pId": "010", "sid": 334, "code": "010200", "brand_id": 0, "brand_name": "" },
//       { "id": "010300", "name": "组合推荐", "pId": "010", "sid": 336, "code": "010300", "brand_id": 0, "brand_name": "" },
//       { "id": "010500", "name": "定制酒", "pId": "010", "sid": 335, "code": "010500", "brand_id": 0, "brand_name": ""},
//       { "id": "010501001", "name": "干红葡萄酒", "pId": "010501", "sid": 341, "code": "010501001", "brand_id": 29, "brand_name": "萌次元" },
//       { "id": "011", "name": "食品", "pId": "", "sid": 225, "code": "011"},
//       { "id": "011001", "name": "时令食品", "pId": "011", "sid": 227, "code": "011001" },
//       { "id": "012", "name": "样品酒", "pId": "", "sid": 337, "code": "012", "brand_id": 0, "brand_name": ""},
//       { "id": "012001", "name": "贺兰鹰样品酒", "pId": "012", "sid": 338, "code": "012001", "brand_id": 21, "brand_name": "贺兰鹰" },
//       { "id": "012002", "name": "法塞特样品酒", "pId": "012", "sid": 339, "code": "012002", "brand_id": 19, "brand_name": "法塞特" },
//     ],
//     content: [
//       { "id": "01d167cc9e864b038a3b9b26737d7e2d", "parent_ids": "0", "name": "111", "sort": 30, "code": "001001014013", "type": "4", "grade": "1", "USEABLE": "1", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "11521", "edu_user_name": "111" },
//       { "id": "32f08cdc623f41f99c614fe1b88c1c60", "parent_ids": "0", "name": "法塞特银川商贸有限公司", "sort": 30, "area_id": "76401", "code": "001001014012", "type": "5", "grade": "1", "address": "", "zip_code": "", "master": "", "phone": "", "fax": "", "email": "", "USEABLE": "1", "PRIMARY_PERSON": "", "DEPUTY_PERSON": "", "update_by": "30900", "update_date": 1514874616000, "remarks": "", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "11406", "edu_user_name": "银川品牌店" },
//       { "id": "42bfc2195d944b0ab79905991475d373", "parent_ids": "0", "name": "法塞特（浙江）供应链管理有限公司", "sort": 30, "code": "001001014005", "type": "4", "grade": "1", "USEABLE": "1", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "10445", "edu_user_name": "法塞特（浙江）供应链管理有限公司" },
//       { "id": "90a1b87797e94758bfdc91ec88fdf30c", "parent_ids": "0", "name": "法塞特（福建）供应链管理有限公司", "sort": 30, "code": "001001014005001", "type": "4", "grade": "1", "USEABLE": "1", "del_flag": "0", "corp_code": "001001014005", "corp_name": "法塞特（浙江）供应链管理有限公司", "dept_id": "e0e9b3f94f264c8bb979618f44b2e3cf", "dept_code": "001001014005", "dept_name": "法塞特（浙江）供应链管理有限公司", "edu_user_id": "10446", "edu_user_name": "法塞特（福建）供应链管理有限公司" },
//       { "id": "ff808081600fcb5f016010b0a87e00d2", "parent_ids": "0", "name": "宁夏圣路易.丁酒庄销售有限公司", "sort": 30, "area_id": "76401", "code": "001001014011", "type": "1", "grade": "1", "address": "", "zip_code": "", "master": "", "phone": "", "fax": "", "email": "", "USEABLE": "1", "PRIMARY_PERSON": "", "DEPUTY_PERSON": "", "create_by": "30158", "create_date": 1512108501000, "update_by": "30155", "update_date": 1514869647000, "remarks": "", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "", "edu_user_name": "圣路易&middot;丁酒庄销售有限公司" },
//       { "id": "ff8080816010d06e0160151416870111", "parent_ids": "0", "name": "宁夏一带一路供应链股份有限公司", "sort": 30, "area_id": "76401", "code": "001001014012", "type": "1", "grade": "1", "address": "", "zip_code": "", "master": "", "phone": "", "fax": "", "email": "", "USEABLE": "1", "PRIMARY_PERSON": "", "DEPUTY_PERSON": "", "create_by": "30158", "create_date": 1512182126000, "update_by": "30158", "update_date": 1512182126000, "remarks": "", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "", "edu_user_name": "宁夏一带一路供应链股份有限公司" },
//       { "id": "ff8080816082dae40160960dd02e0451", "parent_ids": "0", "name": "宁夏圣路易.丁葡萄酒庄（有限公司）", "sort": 30, "area_id": "76401", "code": "", "type": "2", "grade": "1", "address": "", "zip_code": "", "master": "", "phone": "", "fax": "", "email": "", "USEABLE": "1", "PRIMARY_PERSON": "", "DEPUTY_PERSON": "", "create_by": "30158", "create_date": 1514345975000, "update_by": "30158", "update_date": 1514345975000, "remarks": "", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "", "edu_user_name": "宁夏圣路易.丁葡萄酒庄（有限公司）" },
//       { "id": "ff808081609b096a01609b3e493c0033", "parent_ids": "0", "name": "顺丰快递", "sort": 30, "area_id": "11101", "code": "", "type": "6", "grade": "1", "address": "", "zip_code": "", "master": "", "phone": "", "fax": "", "email": "", "USEABLE": "1", "PRIMARY_PERSON": "", "DEPUTY_PERSON": "", "create_by": "30150", "create_date": 1514433038000, "update_by": "30150", "update_date": 1514433038000, "remarks": "", "del_flag": "0", "corp_code": "001001014", "corp_name": "法塞特酒业（上海）", "dept_id": "c7f76ff996244d08907911cba86597fc", "dept_code": "001001014", "dept_name": "法塞特酒业（上海）", "edu_user_id": "", "edu_user_name": "顺丰快递" }
//     ]
//   },
//   next: (doms) => {
//     console.log(doms);
//   }
// })

window.Component.pc.table({
    ifselect: true,
    beforeSelect:["法塞特银川商贸有限公司","宁夏一带一路供应链股份有限公司"],
    select_model: "checkbox",
    // select_model:"radio",
    data: [
        {"id":"01d167cc9e864b038a3b9b26737d7e2d","parent_ids":"0","name":"111","sort":30,"code":"001001014013","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11521","edu_user_name":"111"},
        {"id":"32f08cdc623f41f99c614fe1b88c1c60","parent_ids":"0","name":"法塞特银川商贸有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"5","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","update_by":"30900","update_date":1514874616000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11406","edu_user_name":"银川品牌店"},
        {"id":"42bfc2195d944b0ab79905991475d373","parent_ids":"0","name":"法塞特（浙江）供应链管理有限公司","sort":30,"code":"001001014005","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"10445","edu_user_name":"法塞特（浙江）供应链管理有限公司"},
        {"id":"90a1b87797e94758bfdc91ec88fdf30c","parent_ids":"0","name":"法塞特（福建）供应链管理有限公司","sort":30,"code":"001001014005001","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014005","corp_name":"法塞特（浙江）供应链管理有限公司","dept_id":"e0e9b3f94f264c8bb979618f44b2e3cf","dept_code":"001001014005","dept_name":"法塞特（浙江）供应链管理有限公司","edu_user_id":"10446","edu_user_name":"法塞特（福建）供应链管理有限公司"},
        {"id":"ff808081600fcb5f016010b0a87e00d2","parent_ids":"0","name":"宁夏圣路易.丁酒庄销售有限公司","sort":30,"area_id":"76401","code":"001001014011","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512108501000,"update_by":"30155","update_date":1514869647000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"圣路易&middot;丁酒庄销售有限公司"},
        {"id":"ff8080816010d06e0160151416870111","parent_ids":"0","name":"宁夏一带一路供应链股份有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512182126000,"update_by":"30158","update_date":1512182126000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏一带一路供应链股份有限公司"},
        {"id":"ff8080816082dae40160960dd02e0451","parent_ids":"0","name":"宁夏圣路易.丁葡萄酒庄（有限公司）","sort":30,"area_id":"76401","code":"","type":"2","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1514345975000,"update_by":"30158","update_date":1514345975000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏圣路易.丁葡萄酒庄（有限公司）"},
        {"id":"ff808081609b096a01609b3e493c0033","parent_ids":"0","name":"顺丰快递","sort":30,"area_id":"11101","code":"","type":"6","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30150","create_date":1514433038000,"update_by":"30150","update_date":1514433038000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"顺丰快递"}
    ],
    next: doms => console.log(doms)
})
},{}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':60851/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])