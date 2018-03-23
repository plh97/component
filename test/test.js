import 'babel-polyfill';
// package
// import 'vconsole/dist/vconsole.min.js'
// import '../assets/vconsole.js'
// var VConsole = require('vconsole/dist/vconsole.min.js');
// var vConsole = new VConsole();


window.Component.pc.tree({
  // ifselect: false,是否加载之前选好的，默认true
  beforeSelect: ['法塞特家族酒庄品鉴酒仓库', '法塞特家族酒庄配件仓库'], // 之前选好的内容
  select_model: 'checkbox', // 多选
  // select_model: 'radio', // 单选
  data: [
    {
      id: '01', name: '圣路易·丁酒庄', pId: '', sid: 499, type: '',
    }, {
      id: '0101', name: '圣路易·丁酒庄/酒庄（原酒）', pId: '01', sid: 500, type: '半成品',
    }, {
      id: '0102', name: '圣路易·丁酒庄/酒庄（成品）', pId: '01', sid: 501, type: '正品',
    }, {
      id: '0103', name: '圣路易·丁酒庄/酒庄（半成品）', pId: '01', sid: 502, type: '半成品',
    }, {
      id: '0104', name: '圣路易·丁酒庄/酒庄（配件）', pId: '01', sid: 503, type: '物料',
    }, {
      id: '0105', name: '圣路易·丁酒庄/酒庄（辅料）', pId: '01', sid: 504, type: '半成品',
    }, {
      id: '0106', name: '圣路易·丁酒庄/酒庄（包材）', pId: '01', sid: 505, type: '物料',
    }, {
      id: '02', name: '老酒庄', pId: '', sid: 506, type: '',
    }, {
      id: '0201', name: '老酒庄/老酒庄（原酒）', pId: '02', sid: 507, type: '半成品',
    }, {
      id: '0202', name: '老酒庄/老酒庄（成品）', pId: '02', sid: 508, type: '正品',
    }, {
      id: '0203', name: '老酒庄/老酒庄（半成品）', pId: '02', sid: 509, type: '半成品',
    }, {
      id: '0204', name: '老酒庄/老酒庄（配件）', pId: '02', sid: 510, type: '物料',
    }, {
      id: '0205', name: '老酒庄/老酒庄（辅料）', pId: '02', sid: 511, type: '物料',
    }, {
      id: '0206', name: '老酒庄/老酒庄（包材）', pId: '02', sid: 512, type: '物料',
    }, {
      id: '03', name: '781山洞', pId: '', sid: 513, type: '',
    }, {
      id: '0301', name: '781山洞/山洞（原酒）', pId: '03', sid: 514, type: '半成品',
    }, {
      id: '0302', name: '781山洞/山洞（成品）', pId: '03', sid: 515, type: '正品',
    }, {
      id: '0303', name: '781山洞/山洞（半成品）', pId: '03', sid: 516, type: '半成品',
    }, {
      id: '0304', name: '781山洞/山洞（配件）', pId: '03', sid: 517, type: '正品',
    }, {
      id: '0305', name: '781山洞/山洞（辅料）', pId: '03', sid: 518, type: '物料',
    }, {
      id: '0306', name: '781山洞/山洞（包材）', pId: '03', sid: 519, type: '物料',
    }, {
      id: '04', name: '银川商贸仓库', pId: '', sid: 520, type: '正品',
    }, {
      id: '0401', name: '银川商贸（原酒）', pId: '04', sid: 521, type: '正品',
    }, {
      id: '0402', name: '银川商贸（成品）', pId: '04', sid: 522, type: '赠品',
    }, {
      id: '0403', name: '银川商贸（半成品）', pId: '04', sid: 523, type: '半成品',
    }, {
      id: '0404', name: '银川商贸（物料）', pId: '04', sid: 524, type: '物料',
    }, {
      id: '0405', name: '银川商贸（配件）', pId: '04', sid: 525, type: '物料',
    }, {
      id: '0406', name: '银川商贸（包材）', pId: '04', sid: 526, type: '物料',
    }, {
      id: '05', name: '法塞特家族酒庄仓库', pId: '', sid: 527, type: '',
    }, {
      id: '0501', name: '法塞特家族酒庄正品仓库', pId: '05', sid: 528, type: '正品',
    }, {
      id: '0502', name: '法塞特家族酒庄业务用酒仓库', pId: '05', sid: 529, type: '赠品',
    }, {
      id: '0503', name: '法塞特家族酒庄品鉴酒仓库', pId: '05', sid: 530, type: '试用装',
    }, {
      id: '0504', name: '法塞特家族酒庄物料仓库', pId: '05', sid: 531, type: '物料',
    }, {
      id: '0505', name: '法塞特家族酒庄配件仓库', pId: '05', sid: 532, type: '配件',
    }, {
      id: '0506', name: '法塞特家族酒庄包材仓库', pId: '05', sid: 533, type: '包材',
    }, {
      id: '06', name: '法塞特（浙江）仓库', pId: '', sid: 534, type: '',
    }, {
      id: '0601', name: '法塞特（浙江）正品仓库', pId: '06', sid: 535, type: '正品',
    }, {
      id: '0602', name: '法塞特（浙江）赠品仓库', pId: '06', sid: 536, type: '赠品',
    }, {
      id: '0603', name: '法塞特（浙江）试用装仓库', pId: '06', sid: 537, type: '试用装',
    }, {
      id: '0604', name: '法塞特（浙江）物料仓库', pId: '06', sid: 538, type: '物料',
    }, {
      id: '0605', name: '法塞特（浙江）配件仓库', pId: '06', sid: 539, type: '配件',
    }, {
      id: '0606', name: '法塞特（浙江）包材仓库', pId: '06', sid: 540, type: '包材',
    }, {
      id: '07', name: '法塞特（福建）仓库', pId: '', sid: 542, type: '',
    }, {
      id: '0701', name: '法塞特（福建）正品仓库', pId: '07', sid: 543, type: '正品',
    }, {
      id: '0702', name: '法塞特（福建）赠品仓库', pId: '07', sid: 544, type: '赠品',
    }, {
      id: '0703', name: '法塞特（福建）试用装仓库', pId: '07', sid: 545, type: '试用装',
    }, {
      id: '0704', name: '法塞特（福建）物料仓库', pId: '07', sid: 546, type: '物料',
    }, {
      id: '0705', name: '法塞特（福建）配件仓库', pId: '07', sid: 547, type: '配件',
    }, {
      id: '0706', name: '法塞特（福建）包材仓库', pId: '07', sid: 548, type: '包材',
    }, {
      id: '001001014012', name: '银川品牌店', pId: '0010010140', sid: 605, type: '',
    }, {
      id: '00100101401201', name: '银川店/正品仓库', pId: '001001014012', sid: 606, type: '正品',
    }, {
      id: '00100101401202', name: '银川店/赠品仓库', pId: '001001014012', sid: 607, type: '赠品',
    }, {
      id: '00100101401203', name: '银川店/物料仓库', pId: '001001014012', sid: 608, type: '物料',
    }, {
      id: '00100101401204', name: '银川店/试用装仓库', pId: '001001014012', sid: 609, type: '试用装',
    }, {
      id: '00100101401205', name: '银川店/促销产品仓库', pId: '001001014012', sid: 610, type: '促销产品',
    }, {
      id: '00100101401206', name: '银川店/不良品仓库', pId: '001001014012', sid: 611, type: '不良品',
    }, {
      id: '00100101401207', name: '银川店/福利仓库', pId: '001001014012', sid: 612, type: '福利',
    }, {
      id: '00100101401208', name: '银川店/积分换礼仓库', pId: '001001014012', sid: 613, type: '积分换礼',
    }, {
      id: '0507', name: '上海酒庄门店正品库', pId: '05', sid: 614, type: '正品',
    }, {
      id: '0508', name: '上海酒庄门店业务用酒仓', pId: '05', sid: 615, type: '正品',
    }, {
      id: '0509', name: '上海酒庄门店品鉴酒仓', pId: '05', sid: 616, type: '正品',
    }, {
      id: '0510', name: '上海酒庄门店厨房用品仓', pId: '05', sid: 617, type: '正品',
    }, {
      id: '0511', name: '上海酒庄门店样酒仓', pId: '05', sid: 618, type: '正品',
    }, {
      id: '0512', name: '上海代保管仓', pId: '05', sid: 619, type: '正品',
    }, {
      id: '001001015', name: '门店测试', pId: '0010010', sid: 773, type: '',
    }, {
      id: '00100101501', name: '门店测试/正品仓库', pId: '001001015', sid: 774, type: '正品',
    }, {
      id: '00100101502', name: '门店测试/赠品仓库', pId: '001001015', sid: 775, type: '赠品',
    }, {
      id: '00100101503', name: '门店测试/物料仓库', pId: '001001015', sid: 776, type: '物料',
    }, {
      id: '00100101504', name: '门店测试/试用装仓库', pId: '001001015', sid: 777, type: '试用装',
    }, {
      id: '00100101505', name: '门店测试/促销产品仓库', pId: '001001015', sid: 778, type: '促销产品',
    }, {
      id: '00100101506', name: '门店测试/不良品仓库', pId: '001001015', sid: 779, type: '不良品',
    }, {
      id: '00100101507', name: '门店测试/福利仓库', pId: '001001015', sid: 780, type: '福利',
    }, {
      id: '00100101508', name: '门店测试/积分换礼仓库', pId: '001001015', sid: 781, type: '积分换礼',
    }, {
      id: '001001016', name: '测试2', pId: '0010010', sid: 782, type: '',
    }, {
      id: '00100101601', name: '测试2/正品仓库', pId: '001001016', sid: 783, type: '正品',
    }, {
      id: '00100101602', name: '测试2/赠品仓库', pId: '001001016', sid: 784, type: '赠品',
    }, {
      id: '00100101603', name: '测试2/物料仓库', pId: '001001016', sid: 785, type: '物料',
    }, {
      id: '00100101604', name: '测试2/试用装仓库', pId: '001001016', sid: 786, type: '试用装',
    }, {
      id: '00100101605', name: '测试2/促销产品仓库', pId: '001001016', sid: 787, type: '促销产品',
    }, {
      id: '00100101606', name: '测试2/不良品仓库', pId: '001001016', sid: 788, type: '不良品',
    }, {
      id: '00100101607', name: '测试2/福利仓库', pId: '001001016', sid: 789, type: '福利',
    }, {
      id: '00100101608', name: '测试2/积分换礼仓库', pId: '001001016', sid: 790, type: '积分换礼',
    }, {
      id: '001001017', name: '测试3', pId: '0010010', sid: 791, type: '',
    }, {
      id: '00100101701', name: '3测试/正品仓库', pId: '001001017', sid: 792, type: '正品',
    }, {
      id: '00100101702', name: '3测试/赠品仓库', pId: '001001017', sid: 793, type: '赠品',
    }, {
      id: '00100101703', name: '3测试/物料仓库', pId: '001001017', sid: 794, type: '物料',
    }, {
      id: '00100101704', name: '3测试/试用装仓库', pId: '001001017', sid: 795, type: '试用装',
    }, {
      id: '00100101705', name: '3测试/促销产品仓库', pId: '001001017', sid: 796, type: '促销产品',
    }, {
      id: '00100101706', name: '3测试/不良品仓库', pId: '001001017', sid: 797, type: '不良品',
    }, {
      id: '00100101707', name: '3测试/福利仓库', pId: '001001017', sid: 798, type: '福利',
    }, {
      id: '00100101708', name: '3测试/积分换礼仓库', pId: '001001017', sid: 799, type: '积分换礼',
    }, {
      id: '001001018', name: '测试456', pId: '0010010', sid: 800, type: '',
    }, {
      id: '00100101801', name: '测试456/正品仓库', pId: '001001018', sid: 801, type: '正品',
    }, {
      id: '00100101802', name: '测试456/赠品仓库', pId: '001001018', sid: 802, type: '赠品',
    }, {
      id: '00100101803', name: '测试456/物料仓库', pId: '001001018', sid: 803, type: '物料',
    }, {
      id: '00100101804', name: '测试456/试用装仓库', pId: '001001018', sid: 804, type: '试用装',
    }, {
      id: '00100101805', name: '测试456/促销产品仓库', pId: '001001018', sid: 805, type: '促销产品',
    }, {
      id: '00100101806', name: '测试456/不良品仓库', pId: '001001018', sid: 806, type: '不良品',
    }, {
      id: '00100101807', name: '测试456/福利仓库', pId: '001001018', sid: 807, type: '福利',
    }, {
      id: '00100101808', name: '测试456/积分换礼仓库', pId: '001001018', sid: 808, type: '积分换礼',
    }],
  next: doms => alert(JSON.stringify(doms)),
});

// Component.pc.treeTable({
//   ifselect: true,
//   beforeSelect: ['法塞特银川商贸有限公司', '宁夏一带一路供应链股份有限公司'],
//   select_model: 'checkbox',
//   data: {
//     title: [
//       {
//         id: '001002009', name: '扬名阿朵店', pId: '0010020', sid: 629, type: '',
//       },
//       {
//         id: '00100200901', name: '扬名店/正品仓库', pId: '001002009', sid: 630, type: '正品',
//       },
//       {
//         id: '00100200902', name: '扬名店/赠品仓库', pId: '001002009', sid: 631, type: '赠品',
//       },
//       {
//         id: '00100200903', name: '扬名店/物料仓库', pId: '001002009', sid: 632, type: '物料',
//       },
//       {
//         id: '00100200904', name: '扬名店/试用装仓库', pId: '001002009', sid: 633, type: '试用装',
//       },
//       {
//         id: '00100200905', name: '扬名店/促销产品仓库', pId: '001002009', sid: 634, type: '促销产品',
//       },
//       {
//         id: '00100200906', name: '扬名店/不良品仓库', pId: '001002009', sid: 635, type: '不良品',
//       },
//       {
//         id: '00100200907', name: '扬名店/福利仓库', pId: '001002009', sid: 636, type: '福利',
//       },
//       {
//         id: '00100200908', name: '扬名店/积分换礼仓库', pId: '001002009', sid: 637, type: '积分换礼',
//       },
//       {
//         id: '00100200901', name: '扬名店/正品仓库', pId: '001002009', sid: 630, type: '正品',
//       },
//       {
//         id: '00100200902', name: '扬名店/赠品仓库', pId: '001002009', sid: 631, type: '赠品',
//       },
//       {
//         id: '00100200903', name: '扬名店/物料仓库', pId: '001002009', sid: 632, type: '物料',
//       },
//       {
//         id: '00100200904', name: '扬名店/试用装仓库', pId: '001002009', sid: 633, type: '试用装',
//       },
//       {
//         id: '00100200905', name: '扬名店/促销产品仓库', pId: '001002009', sid: 634, type: '促销产品',
//       },
//       {
//         id: '00100200906', name: '扬名店/不良品仓库', pId: '001002009', sid: 635, type: '不良品',
//       },
//       {
//         id: '00100200907', name: '扬名店/福利仓库', pId: '001002009', sid: 636, type: '福利',
//       },
//       {
//         id: '00100200908', name: '扬名店/积分换礼仓库', pId: '001002009', sid: 637, type: '积分换礼',
//       },
//       {
//         id: '00100200901', name: '扬名店/正品仓库', pId: '001002009', sid: 630, type: '正品',
//       },
//       {
//         id: '00100200902', name: '扬名店/赠品仓库', pId: '001002009', sid: 631, type: '赠品',
//       },
//       {
//         id: '00100200903', name: '扬名店/物料仓库', pId: '001002009', sid: 632, type: '物料',
//       },
//       {
//         id: '00100200904', name: '扬名店/试用装仓库', pId: '001002009', sid: 633, type: '试用装',
//       },
//       {
//         id: '00100200905', name: '扬名店/促销产品仓库', pId: '001002009', sid: 634, type: '促销产品',
//       },
//       {
//         id: '00100200906', name: '扬名店/不良品仓库', pId: '001002009', sid: 635, type: '不良品',
//       },
//       {
//         id: '00100200907', name: '扬名店/福利仓库', pId: '001002009', sid: 636, type: '福利',
//       },
//       {
//         id: '00100200908', name: '扬名店/积分换礼仓库', pId: '001002009', sid: 637, type: '积分换礼',
//       },
//     ],
//     content: [
//       {
//         id: 143, goods_name: '1233--诱惑(白麝香)-White musk123', goods_code: '001', goods_short_name: '001', brand_id: 14, brand_name: 'adopt香水', td_code: '376003123698056123', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/dff4f66269a345c7a3e21f4292145746.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 26, grade_name: '一级', mold_id: 24, mold_name: '货品', price_type: '折扣定价', name: '1233--诱惑(白麝香)-White musk123',
//       }, {
//         id: 144, goods_name: '海之凉(利古里亚之水)-Aqua liguria', goods_code: '002', goods_short_name: '002', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719005378', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/9b1be2ea1cbc45bebc4f3530f3b1ab76.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '海之凉(利古里亚之水)-Aqua liguria',
//       }, {
//         id: 145, goods_name: '执手一生(木棉花)-Cotton flower', goods_code: '003', goods_short_name: '003', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719005385', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/0101dee777ce4fa1a77fcd7b65300772.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '执手一生(木棉花)-Cotton flower',
//       }, {
//         id: 146, goods_name: '刚刚好(桃子凤梨雪松)-Peach Pineapple Cedar', goods_code: '004', goods_short_name: '004', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719002551', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '水果香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/c7f9d8aaf581411cb27a8ca9d2a01402.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '刚刚好(桃子凤梨雪松)-Peach Pineapple Cedar',
//       }, {
//         id: 147, goods_name: '喜欢你(玫瑰蜜)-Nectar of rose', goods_code: '005', goods_short_name: '005', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719003343', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/e13f0bd7b762403b915c36f650e4b56f.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '喜欢你(玫瑰蜜)-Nectar of rose',
//       }, {
//         id: 148, goods_name: '盛宴(牡丹花)-Peony flower', goods_code: '006', goods_short_name: '006', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719000595', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/2e79a98937c046068a8a1532ffb5fcb7.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '盛宴(牡丹花)-Peony flower',
//       }, {
//         id: 149, goods_name: '初之蜜吻(我的小玫瑰)-My little rose', goods_code: '007', goods_short_name: '007', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719000021', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/4fa58a0c52ff4284ae9b09a0cca04fef.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '初之蜜吻(我的小玫瑰)-My little rose',
//       }, {
//         id: 150, goods_name: '魅之尊(波光涟漪)-Silver water', goods_code: '008', goods_short_name: '008', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719002889', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/faec7e8e50824c0fbc82fa11f81b6056.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '魅之尊(波光涟漪)-Silver water',
//       }, {
//         id: 151, goods_name: '午后时光(西柚石榴)-Grapefruit Pomegranate', goods_code: '009', goods_short_name: '009', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719002520', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '水果香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', detail: '<p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">原标题：华中农业大学最新科研成果&quot;验汗&quot;可能取代验血</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">今后，验汗可能取代查血验尿，成为诊断疾病的新方式。</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">11月5日，华中农业大学刘正飞教授展示了团队的最新科研成果：首次成功分离汗液外泌体并解析其蛋白表达谱。该研究成果在国际权威学术期刊《皮肤学研究》发表，为皮肤免疫功能和皮肤疾病生物标志物的鉴定提供了理论基础。</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">外泌体是广泛存在于唾液、血液、尿液等体液中的微小生物颗粒。1983年首次被发现时，仅认为是细胞排泄废物的一种形式。如今，不断发展的科研成果表明，外泌体可参与到机体免疫应答、抗原提呈、细胞迁移及分化、肿瘤侵袭等方方面面，健康状态信息可以从中检测出来。</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">人体汗液外泌体，多年来因分离鉴定极为困难，其存在证据一直没有被攻克。刘正飞课题组研究建立了一套无细胞碎片、细菌和油脂污染的汗液外泌体分离方法，并通过进一步质谱分析表明，汗液外泌体含有1062种蛋白质，其中896种不同于血液、尿液和唾液外泌体的蛋白标记物。同时，多种抗菌肽、免疫相关因子也在汗液外泌体中高丰度表达。</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">该研究提供了直接的汗液外泌体存在证据，为汗液潜在的生理生化特性、皮肤免疫系统抵御外界病原体侵害研究和生物标记物开发奠定了理论基础。</p><p style="margin-top: 0px; margin-bottom: 25px; padding: 0px; text-indent: 28px; text-align: justify; word-wrap: break-word; word-break: normal;">目前，刘正飞团队正与医院合作开展临床研究运用，让“验汗断病”早日成为现实。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank" style="text-decoration-line: none; color: rgb(0, 66, 118); font-weight: bold;"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"/></a></span></p><p><img src="http://y2.ifengimg.com/ifengimcp/pic/20150902/3677f2773fd79f12b079_size1_w35_h15.png"/></p><p><img src="http://p1.ifengimg.com/a/2017/0405/46c1a30fa15dcf3size20_w160_h214.jpg"/></p><p><img src="http://p3.ifengimg.com/a/2017/0822/ef1f8f1ad492125size20_w160_h214.jpg"/></p><p><a target="_blank" href="http://ids1.deliver.ifeng.com/ids/mnt/cli?args=zJYOh_xIl6_X2kubJYPv-_9d1JkGdVoq_4xnS4X9U9CByKeL5RlHzsCVvidI-7N7C-AVrWP-8wgC12-KWY9HcqMbQRqsVmGwDP_l7O8Y3MBok5jLUL7Dj15fkALLLEa9dAaL0An8zZXOFwQVRNZptNIepLHbxUhkIkpY_sOuBo8kD8UTaQO0pYTxSQhyvY7d8t4JMB3imnMrAFTGCyUVn1hARR_PlPJnFK1sfTKOdwTnjWInxZX3K1-7yNMRifWzHUUH5F9t0lDsskW7XZ0qPLqpjWJfclSxc8C1IwB56NghD11w1TIxt3uKbueRfGVV-P1P9X4ttd2eGy-xCVaASUEveoG3phG9fz-CwJpfhKIaVIVrIxb3GiC6HTmHSZsFI2PzUZcEVHgIqp0CAKfg2rnx-Z-ifADNkWCCZdU8PtfHlsi_JkaCzXRMo66EHYwE_Ma8nR6okyksgYtiALME2cZWa1UxqAvqTdTQTAf3cmhpwjPlCbeLVILFGXhj1grViEUE1e7lTdEgWHGHjyZKMw&jmp=l86dcyuV-ym1Ebfx-OVX3dXMuqJx-uZLLbDUcOcOl3AdCEjndF8qm1-98qdVFViY" style="text-decoration-line: none; color: rgb(0, 66, 118); line-height: 24px;"><img src="http://y0.ifengimg.com/34c4a1d78882290c/2012/0528/1x1.gif"/></a></p><p class="iphone_none" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; float: left; width: 322px;"><br/></p><p>推荐7</p><p><img src="http://h2.ifengimg.com/0f56ee67a4c375c2/2013/1106/indeccode.png" class="js_wx_qrcod"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 12px 0px 0px; float: left; width: auto; color: rgb(102, 102, 102); line-height: 24px;"><br/></p><p><a class="bds_tsina js_content_share_btn" style="float: left; display: block; width: 40px; height: 30px; margin: 0px 0px 0px 10px; padding: 0px; background:url(&quot;http://p0.ifengimg.com/fe/zx2/images/share_e5555840.jpg&quot;) 0px 0px no-repeat;"></a><a class="bds_qzone js_content_share_btn" style="float: left; display: block; width: 40px; height: 30px; margin: 0px 0px 0px 10px; padding: 0px; background:url(&quot;http://p0.ifengimg.com/fe/zx2/images/share_e5555840.jpg&quot;) 0px -32px no-repeat;"></a><a class="bds_twx js_content_share_btn iphone_none" style="float: left; display: block; width: 40px; height: 30px; margin: 0px 0px 0px 10px; padding: 0px; background:url(&quot;http://p0.ifengimg.com/fe/zx2/images/share_e5555840.jpg&quot;) 0px -66px no-repeat;"></a></p><p><span class="w-rightBox" style="float: right;"><span class="w-com"><a href="http://gentie.ifeng.com/view.html?docUrl=sub_36131028&docName=%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%9C%80%E6%96%B0%E6%88%90%E6%9E%9C%EF%BC%9A%E9%AA%8C%E6%B1%97%E8%AF%8A%E6%96%AD%E7%96%BE%E7%97%85%E6%88%96%E5%8F%96%E4%BB%A3%E6%9F%A5%E8%A1%80%E9%AA%8C%E5%B0%BF&skey=465936&speUrl=&pcUrl=http%3A%2F%2Fnews.ifeng.com%2Fa%2F20171107%2F53039034_0.shtml" target="_blank" style="text-decoration-line: none; color: rgb(245, 67, 67);"><span class="w-num" style="font-stretch: normal; font-size: 18px; line-height: normal; font-family: georgia;">9</span></a>&nbsp;<span class="w-txt" style="font-size: 12px; color: rgb(153, 153, 153);">条评论</span>&nbsp;</span><span class="w-line" style="color: rgb(153, 153, 153); padding: 0px 8px;">/</span>&nbsp;<span class="w-reply"><a href="http://gentie.ifeng.com/view.html?docUrl=sub_36131028&docName=%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%9C%80%E6%96%B0%E6%88%90%E6%9E%9C%EF%BC%9A%E9%AA%8C%E6%B1%97%E8%AF%8A%E6%96%AD%E7%96%BE%E7%97%85%E6%88%96%E5%8F%96%E4%BB%A3%E6%9F%A5%E8%A1%80%E9%AA%8C%E5%B0%BF&skey=465936&speUrl=&pcUrl=http%3A%2F%2Fnews.ifeng.com%2Fa%2F20171107%2F53039034_0.shtml" target="_blank" style="text-decoration-line: none; color: rgb(245, 67, 67);"><span class="w-num" style="font-stretch: normal; font-size: 18px; line-height: normal; font-family: georgia;">19</span></a>&nbsp;<span class="w-txt" style="font-size: 12px; color: rgb(153, 153, 153);">人参与</span></span></span><span class="w-tips" style="font-size: 12px; color: rgb(153, 153, 153);">网友评论</span><span class="w-tips phoneNone" style="font-size: 12px; color: rgb(153, 153, 153);">｜</span><a href="http://comment.ifeng.com/content/gongyue/gtgl.html" target="_blank" class="w-tips phoneNone" style="text-decoration-line: none; color: rgb(153, 153, 153); font-size: 12px;">跟帖管理</a><span class="w-tips" style="font-size: 12px; color: rgb(153, 153, 153);">｜</span><a href="http://news.ifeng.com/ask/index.shtml" target="_blank" class="w-tips" style="text-decoration-line: none; color: rgb(153, 153, 153); font-size: 12px;">举报</a></p><p><span class="w-arr"></span></p><p><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-submitBtn js_cmtSubmit" style="text-decoration-line: none; color: rgb(255, 255, 255); display: block; float: right; width: 120px; height: 40px; background: rgb(245, 67, 67); text-align: center; font-stretch: normal; font-size: 18px; line-height: 40px; font-family: &quot;microsoft yahei&quot;;">发表评论</a></p><p><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-face-trigger js_faceMore" style="text-decoration-line: none; color: rgb(0, 66, 118); display: inline-block; position: relative; margin-left: 7px; width: 50px; height: 30px; float: left; line-height: 30px; vertical-align: middle; cursor: pointer;"><img src="http://y0.ifengimg.com/a/2015/1130/face_1.png" title="微笑" alt="微笑"/><span class="icon-faceTrigArr" style="display: inline-block; width: 7px; height: 4px; margin-bottom: 2px; overflow: hidden; background:url(&quot;http://y0.ifengimg.com/fe/F_comment_new/images/face-TriggerArr_b9713c54.gif&quot;) 0px -4px no-repeat;"></span></a></p><p><a class="w-name" style="color: rgb(0, 0, 0);">一键登录：&nbsp;</a><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="js_ifeng_account" style="text-decoration-line: none; color: rgb(153, 153, 153);">凤凰帐号</a><span class="w-line" style="color: rgb(153, 153, 153); padding: 0px 2px;">/</span><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="js_sina_account" style="text-decoration-line: none; color: rgb(153, 153, 153);">新浪微博</a></p><p>最热评论</p><p class="w-username" style="margin-top: 0px; margin-bottom: 17px; padding: 0px; color: rgb(153, 153, 153);"><a href="http://comment.ifeng.com/viewpersonal.php?uname=%E6%85%A7%E7%9C%BC%E4%B8%80%E6%89%AB&guid=74390991" target="_blank" style="text-decoration-line: none; color: rgb(0, 66, 118);">慧眼一扫</a>&nbsp;<span class="w-location">[江苏省无锡市网友]</span></p><p class="w-contentTxt" style="margin-top: 0px; margin-bottom: 15px; padding: 0px; line-height: 1.4em; word-wrap: break-word; word-break: break-all;">祝贺刘正飞团队！希望早日投入临床应用！</p><p><span class="w-reply" style="float: right; line-height: 14px;"><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-rep-rec js_recm" style="text-decoration-line: none; color: rgb(0, 0, 0);">推荐<span class="w-rep-num" style="padding-left: 8px; font-stretch: normal; font-size: 16px; line-height: normal; font-family: georgia; color: rgb(245, 67, 67);">37</span></a>&nbsp;<span class="w-rep-line" style="display: inline-block; padding: 0px 8px; color: rgb(194, 194, 194);">/</span>&nbsp;<a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-rep-reply js_reply" style="text-decoration-line: none; color: rgb(0, 0, 0);">回复</a>&nbsp;<span class="w-rep-line" style="display: inline-block; padding: 0px 8px; color: rgb(194, 194, 194);">/</span>&nbsp;<a class="w-report js_report" href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" style="text-decoration-line: none; color: rgb(0, 0, 0);">举报</a></span><span class="w-commentTime" style="color: rgb(153, 153, 153); padding-top: 4px;">2017-11-07 15:29</span></p><p class="w-username" style="margin-top: 0px; margin-bottom: 17px; padding: 0px; color: rgb(153, 153, 153);"><a href="http://comment.ifeng.com/viewpersonal.php?uname=FYK441&guid=9319760" target="_blank" style="text-decoration-line: none; color: rgb(0, 66, 118);">FYK441</a>&nbsp;<span class="w-location">[广东省广州市网友]</span></p><p><span class="w-order" style="position: absolute; top: 20px; right: 10px;">1</span></p><p class="w-username" style="margin-top: 0px; margin-bottom: 17px; padding: 0px 42px 0px 12px; color: rgb(153, 153, 153); word-break: break-all;"><a href="http://comment.ifeng.com/viewpersonal.php?uname=HXY589238&guid=30911468" target="_blank" style="text-decoration-line: none; color: rgb(0, 66, 118);">HXY589238</a>&nbsp;<span class="w-location">[重庆市网友]</span></p><p class="w-contentTxt" style="margin-top: 0px; margin-bottom: 15px; padding: 0px 42px 0px 12px; line-height: 1.4em; word-wrap: break-word; word-break: break-all;">通过验屁的成分准确率更高！</p><p><span class="w-commentTime" style="color: rgb(153, 153, 153); padding-top: 4px;">2017-11-07 15:08</span></p><p class="w-contentTxt" style="margin-top: 0px; margin-bottom: 15px; padding: 0px; line-height: 1.4em; word-wrap: break-word; word-break: break-all;">你的研究？</p><p><span class="w-reply" style="float: right; line-height: 14px;"><a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-rep-rec js_recm" style="text-decoration-line: none; color: rgb(0, 0, 0);">推荐<span class="w-rep-num" style="padding-left: 8px; font-stretch: normal; font-size: 16px; line-height: normal; font-family: georgia; color: rgb(245, 67, 67);">13</span></a>&nbsp;<span class="w-rep-line" style="display: inline-block; padding: 0px 8px; color: rgb(194, 194, 194);">/</span>&nbsp;<a href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" class="w-rep-reply js_reply" style="text-decoration-line: none; color: rgb(0, 0, 0);">回复</a>&nbsp;<span class="w-rep-line" style="display: inline-block; padding: 0px 8px; color: rgb(194, 194, 194);">/</span>&nbsp;<a class="w-report js_report" href="http://news.ifeng.com/a/20171107/53039034_0.shtml?_zbs_baidu_news#" style="text-decoration-line: none; color: rgb(0, 0, 0);">举报</a></span><span class="w-commentTime" style="color: rgb(153, 153, 153); padding-top: 4px;">2017-11-07 15:30</span></p><p><a style="color: rgb(0, 66, 118); width: 35px; height: 15px; overflow: hidden; position: absolute; left: 0px; bottom: 0px; z-index: 2; background:url(&quot;http://y2.ifengimg.com/ifengimcp/pic/20150902/3677f2773fd79f12b079_size1_w35_h15.png&quot;) no-repeat;"></a><a target="_blank" href="http://ids1.deliver.ifeng.com/ids/mnt/cli?args=EYPHVwOfisD6vEJFJlRTYoBdPK8a_3UynSlMob46C28NojM1ojeqeA764WXOsfA-bsvREyvhkf6njOZBqr-RaOkb0tblhmT3lwj2zUTkeRuqnmpMgG-WAsSSs00giLTNMZsQkKtBbFLa6EuvRkBR94CHlUA-nU9j9EgElpYIlc2pc75I3BJjlyMmLLzqPO_b8t4JMB3imnMrAFTGCyUVn1hARR_PlPJnFK1sfTKOdwQKDDN2ctv2hDZtcvCd0qgA3Sag5RAETUG55H5yWAixiEbUej8IXBExPRfKiSo6pLsiGjff17-g9v3GGIvMgz8k-P1P9X4ttd2eGy-xCVaASUEveoG3phG9fz-CwJpfhKIaVIVrIxb3GiC6HTmHSZsFSlByieaeEVIT_aBO8C-T-Gb9p17qEFoD_x6WfKSJTUuRzdWU75mtf2zy4pCxYkOXxE43B8JRmgIznG6brx-sLlOg1u3M17WGvjfKYf0rINnEYr0uI-oHxg7G0RKkIUL9GmxTo45wPl0cesyFJiGoxG9Fm9PqFzVC5Q8nK3NG5gTfCde3uEoV_5XdfZ64DgfI&jmp=3rg97TyFDY06UN8B0hAISImlqeXUqRz8RD0CXqBf-8HI24rPCWPchaoCDE5ewLAZSU6phnDDWfMNVZ2EN0g0XNgwc5b0vdUzpzrBt3BCQg8" style="text-decoration-line: none; color: rgb(0, 66, 118);"><img src="http://c1.ifengimg.com/feather/images/6690/2017/55/07/1510019749278.jpg"/></a></p><p><img src="http://y2.ifengimg.com/ifengimcp/pic/20150902/3677f2773fd79f12b079_size1_w35_h15.png"/></p><p><a style="color: rgb(0, 66, 118); width: 35px; height: 15px; overflow: hidden; position: absolute; left: 0px; bottom: 0px; z-index: 2; background:url(&quot;http://y2.ifengimg.com/ifengimcp/pic/20150902/3677f2773fd79f12b079_size1_w35_h15.png&quot;) no-repeat;"></a><a target="_blank" href="http://ids1.deliver.ifeng.com/ids/mnt/cli?args=BFQdxzsAcbBvtDPu5uRfFKf9toTb0a2slM14lgJKt_d1E3OoZZaFQ7uvGuxPExryVL-wNh0-DO5-gswZrscmgkKyAnHuHMh7foX2D4h-OBXa9iRuJF-igpLsuI31tcksC6H41Q_uzs8YlA3Qw0Xz_eQ1oXiyqBICiUvU0-CsCkbNKb23YTzSKRy8H_5ddAJ68t4JMB3imnMrAFTGCyUVn1hARR_PlPJnFK1sfTKOdwSC-cZyQLYdjtagr1Q54Pw29_nfAtz9JaSe8MTCS8k3PiL4JamV2uOhYXhOXs7HXQAiGjff17-g9v3GGIvMgz8k-P1P9X4ttd2eGy-xCVaASUEveoG3phG9fz-CwJpfhKIaVIVrIxb3GiC6HTmHSZsFI-2HW_IYsJCWmsXdSzBn3_YDyzlLWpEQxncEGDGlXc-D_akHCgoIsUE04qKvpY6a5BI-0sBga_2N_8RaPwL6PPHxlpi4Wn0JxHmCvDi6hY_RTWPg-HlGb4IBYb9rmL3vPvC3_QNfF2u3LDKOwi_JpA&jmp=nmdsyPw_eq5jukMrtGS0Q8kXmlElyIyainB6n3Jzur9DUeqCkpk73lbAjVf0eqEwUUNzwI9AF-Po8bFQjNg0EA" style="color: rgb(186, 38, 54);"><img src="http://c1.ifengimg.com/feather/images/5793/2017/03/03/1509696216300.jpg"/></a></p><p><br/></p>', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/96321eb2cb7e425380a8eb09f7ef041c.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '午后时光(西柚石榴)-Grapefruit Pomegranate',
//       }, {
//         id: 152, goods_name: '狂野之夜(麝香玫瑰)-Musk of rose', goods_code: '010', goods_short_name: '010', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719002261', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/7ec42ae85b9747c5863985cb467f23be.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '狂野之夜(麝香玫瑰)-Musk of rose',
//       }, {
//         id: 163, goods_name: '人鱼假日(美人鱼与海)-Oceans and Seas', goods_code: '011', goods_short_name: '011', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719005392', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/30fbf9db5002461cbffd3c9563d769e9.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '人鱼假日(美人鱼与海)-Oceans and Seas',
//       }, {
//         id: 164, goods_name: '永恒(姜花白蝴蝶)-Ginger flower', goods_code: '012', goods_short_name: '012', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719009956', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/bd6b2ff96ac845ec822b57b6b0b5e05e.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '永恒(姜花白蝴蝶)-Ginger flower',
//       }, {
//         id: 165, goods_name: '内萝拉(橙花之恋)-Neroli', goods_code: '013', goods_short_name: '013', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719005859', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/678bd458c6364604ab1ed363c93ed9a5.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '内萝拉(橙花之恋)-Neroli',
//       }, {
//         id: 166, goods_name: '香忆(茉莉依兰含羞草)-Jasmine Ylang Mimosa', goods_code: '014', goods_short_name: '014', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719000441', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/884e9a294cd54c838389770ead9d41cc.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '香忆(茉莉依兰含羞草)-Jasmine Ylang Mimosa',
//       }, {
//         id: 167, goods_name: '青春乐章(花漾女孩)-Flower girl', goods_code: '015', goods_short_name: '015', brand_id: 14, brand_name: 'adopt香水', td_code: '3760031230063', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-18/30516/4805e595546f4d91b12e523cebf0012c.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '青春乐章(花漾女孩)-Flower girl',
//       }, {
//         id: 168, goods_name: '人间伊甸园(大溪地鸢尾花)-Tiara flower', goods_code: '016', goods_short_name: '016', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719006139', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/121be38ad65642e1b790f8b33f748c8f.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '人间伊甸园(大溪地鸢尾花)-Tiara flower',
//       }, {
//         id: 169, goods_name: '夏日灵动(春之绿茶)-Green tea', goods_code: '017', goods_short_name: '017', brand_id: 14, brand_name: 'adopt香水', td_code: '3760031230094', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/1b3986a6f9a046e794d330dab76ceba8.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '夏日灵动(春之绿茶)-Green tea',
//       }, {
//         id: 170, goods_name: '绽放(樱花绽放)-Cherry blossom', goods_code: '018', goods_short_name: '018', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719002377', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2018-01-15/30516/a01e6c36e3ee451da824ce4795a90e2b.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '绽放(樱花绽放)-Cherry blossom',
//       }, {
//         id: 171, goods_name: '漫步巴黎(香草依兰)-Vanilla Ylang Ylang', goods_code: '019', goods_short_name: '019', brand_id: 14, brand_name: 'adopt香水', td_code: '3760031235914', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-18/30516/ec53cb66032a4551aa1d416b938ec70b.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '漫步巴黎(香草依兰)-Vanilla Ylang Ylang',
//       }, {
//         id: 172, goods_name: '娇小姐(紫罗兰树莓)-Violet Raspberry', goods_code: '020', goods_short_name: '020', brand_id: 14, brand_name: 'adopt香水', td_code: '3760031230025', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/2a70d2a939564ff09787896873c114ca.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '娇小姐(紫罗兰树莓)-Violet Raspberry',
//       }, {
//         id: 173, goods_name: '魅舞(佛手柑茉莉)-Bergamot Jasmine ', goods_code: '021', goods_short_name: '021', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719010587', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/ac1175369c1e465e958aed2eb6c0041a.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '魅舞(佛手柑茉莉)-Bergamot Jasmine ',
//       }, {
//         id: 174, goods_name: '名媛(窈窕淑女)-Lady Glitter', goods_code: '022', goods_short_name: '022', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719010334', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 129.00, prime_cost: 129.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-18/30516/847e69fa24e74f099d0c4916ddc30b8a.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '名媛(窈窕淑女)-Lady Glitter',
//       }, {
//         id: 175, goods_name: '淡香(桂馥兰香)-Osmanthus Flower ', goods_code: '023', goods_short_name: '023', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719005323', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '混合花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-13/30516/d2e92e99279d4ee49c62fdd02fd6c8c5.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '淡香(桂馥兰香)-Osmanthus Flower ',
//       }, {
//         id: 176, goods_name: '电光幻影(摇滚女王)-Miss rock', goods_code: '024', goods_short_name: '024', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719009734', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-18/30516/431dbf4bed9340f3b1af9efdea1c7457.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '电光幻影(摇滚女王)-Miss rock',
//       }, {
//         id: 177, goods_name: '海洛因之吻(甜吻)-Sweet kiss', goods_code: '025', goods_short_name: '025', brand_id: 14, brand_name: 'adopt香水', td_code: '3700719010020', bar_code: '', standard_id: 0, standard_name: '30ml', produce_area_id: 0, produce_area_name: '法国', model_id: 0, model_name: '花香型', unit_id: 24, unit_name: '支', assist_unit_enable: '1', assist_unit_id: 26, assist_unit_name: '盒', assist_unit_conversion: '12', retail_price: 99.00, prime_cost: 99.00, primary_dealer_price: 0.00, second_dealer_price: 0.00, third_dealer_price: 0.00, produce_cost: 0.00, validity_days: '3年', remarks: '', corp_id: '', corp_code: '001002', corp_name: '卓高实业', del_flag: '0', create_date: '', create_user_id: '', create_user_name: '', goods_status: 'A0', goods_image_list: '', goods_image: 'userfiles/upload/2017-12-11/30516/ddac8f91039f461e822e2cb088a56e10.jpg', goods_type_id: 27, goods_type_name: 'Adopt香水', is_score: '', score_num: 0, is_discount: '', discount_reat: '', ticket_price: 0.00, goods_attribute: '', goods_factory: '', supplier_id: '', dept_id: '7453d16d474244d18c7a86b9f68bb8b1', dept_code: '001002008', dept_name: '技术支持部', breed_id: 0, breed_name: '', grade_id: 0, grade_name: '', mold_id: 0, mold_name: '货品', price_type: '折扣定价', name: '海洛因之吻(甜吻)-Sweet kiss',
//       },
//     ],
//   },
//   next: (doms) => {
//     console.log(doms);
//   },
// });

// window.Component.pc.table({
//   ifselect: true,
//   beforeSelect: ['法塞特银川商贸有限公司', '宁夏一带一路供应链股份有限公司'],
//   // select_model: 'checkbox',
//   select_model: 'radio',
//   data: [
//     {
//       id: '01d167cc9e864b038a3b9b26737d7e2d', parent_ids: '0', name: '111', sort: 30, code: '001001014013', type: '4', grade: '1', USEABLE: '1', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '11521', edu_user_name: '111',
//     },
//     {
//       id: '32f08cdc623f41f99c614fe1b88c1c60', parent_ids: '0', name: '法塞特银川商贸有限公司', sort: 30, area_id: '76401', code: '001001014012', type: '5', grade: '1', address: '', zip_code: '', master: '', phone: '', fax: '', email: '', USEABLE: '1', PRIMARY_PERSON: '', DEPUTY_PERSON: '', update_by: '30900', update_date: 1514874616000, remarks: '', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '11406', edu_user_name: '银川品牌店',
//     },
//     {
//       id: '42bfc2195d944b0ab79905991475d373', parent_ids: '0', name: '法塞特（浙江）供应链管理有限公司', sort: 30, code: '001001014005', type: '4', grade: '1', USEABLE: '1', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '10445', edu_user_name: '法塞特（浙江）供应链管理有限公司',
//     },
//     {
//       id: '90a1b87797e94758bfdc91ec88fdf30c', parent_ids: '0', name: '法塞特（福建）供应链管理有限公司', sort: 30, code: '001001014005001', type: '4', grade: '1', USEABLE: '1', del_flag: '0', corp_code: '001001014005', corp_name: '法塞特（浙江）供应链管理有限公司', dept_id: 'e0e9b3f94f264c8bb979618f44b2e3cf', dept_code: '001001014005', dept_name: '法塞特（浙江）供应链管理有限公司', edu_user_id: '10446', edu_user_name: '法塞特（福建）供应链管理有限公司',
//     },
//     {
//       id: 'ff808081600fcb5f016010b0a87e00d2', parent_ids: '0', name: '宁夏圣路易.丁酒庄销售有限公司', sort: 30, area_id: '76401', code: '001001014011', type: '1', grade: '1', address: '', zip_code: '', master: '', phone: '', fax: '', email: '', USEABLE: '1', PRIMARY_PERSON: '', DEPUTY_PERSON: '', create_by: '30158', create_date: 1512108501000, update_by: '30155', update_date: 1514869647000, remarks: '', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '', edu_user_name: '圣路易&middot;丁酒庄销售有限公司',
//     },
//     {
//       id: 'ff8080816010d06e0160151416870111', parent_ids: '0', name: '宁夏一带一路供应链股份有限公司', sort: 30, area_id: '76401', code: '001001014012', type: '1', grade: '1', address: '', zip_code: '', master: '', phone: '', fax: '', email: '', USEABLE: '1', PRIMARY_PERSON: '', DEPUTY_PERSON: '', create_by: '30158', create_date: 1512182126000, update_by: '30158', update_date: 1512182126000, remarks: '', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '', edu_user_name: '宁夏一带一路供应链股份有限公司',
//     },
//     {
//       id: 'ff8080816082dae40160960dd02e0451', parent_ids: '0', name: '宁夏圣路易.丁葡萄酒庄（有限公司）', sort: 30, area_id: '76401', code: '', type: '2', grade: '1', address: '', zip_code: '', master: '', phone: '', fax: '', email: '', USEABLE: '1', PRIMARY_PERSON: '', DEPUTY_PERSON: '', create_by: '30158', create_date: 1514345975000, update_by: '30158', update_date: 1514345975000, remarks: '', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '', edu_user_name: '宁夏圣路易.丁葡萄酒庄（有限公司）',
//     },
//     {
//       id: 'ff808081609b096a01609b3e493c0033', parent_ids: '0', name: '顺丰快递', sort: 30, area_id: '11101', code: '', type: '6', grade: '1', address: '', zip_code: '', master: '', phone: '', fax: '', email: '', USEABLE: '1', PRIMARY_PERSON: '', DEPUTY_PERSON: '', create_by: '30150', create_date: 1514433038000, update_by: '30150', update_date: 1514433038000, remarks: '', del_flag: '0', corp_code: '001001014', corp_name: '法塞特酒业（上海）', dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', edu_user_id: '', edu_user_name: '顺丰快递',
//     },
//   ],
//   next: doms => console.log(doms),
// });

// window.Component.ModalInfo({
//   type: 'error', // info/success/error/warning/delete/confirm
//   title: '标题',
//   content: `
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//     `,
//   next() {
//     console.log('确认');
//   },
// });


// var serial_maker = function(){
//   // 返回一个用来产生唯一字符串的对象
//   // 位移字符串由：前缀+序列号
//   // 这包括一个设置前缀的方法，一个设置序列号的方法
//   // 和一个产生位移字符串的gensym的方法
//   var prefix = ' ';
//   var seq = 0;
//   return {
//     set_prifex: function(p) {
//       prefix = String(p);
//     },
//     set_seq: function (s){
//       seq = s;
//     },
//     gensym: function(){
//       var result = prefix+seq;
//       seq += 1;
//       return result;
//     }
//   }
// }
// var seqer = serial_maker();
// seqer.set_prifex("Q");
// seqer.set_seq(1111)
// var unique = seqer.gensym();
// console.log(unique);  // Q1000






















// ;(function(win, doc, undefined) {
// 	var $ = (function() {
// 		//构造函数
// 		var TQuery = function(selectors){
// 			return TQuery.fn.init(selectors);
// 		};
// 		var vision = 1.02;
// 		TQuery.fn = TQuery.prototype = {
// 			"constructor": TQuery,
// 			"TQuery": vision,
// 			//初始化
// 			"init": function(selectors) {
// 				this.selectors = selectors;
// 				var eles = []; //所有选择的元素
// 				switch (typeof selectors) {
// 					case "undefined":
// 						return this;
// 					case "function":
// 						this.ready(function(e){
// 							selectors.call(this, e);
// 						});
// 						break;
// 					case "string":
// 						switch (selectors.charAt(0)) {
// 							case '<': //<div></div>，创建元素
// 								var oDiv = doc.createElement('div'); //创建一个容器
// 								var oFragment = doc.createDocumentFragment(); //创建文档碎片
// 								oDiv.innerHTML = selectors;
// 								var child = oDiv.childNodes;
// 								//储存在文档碎片中
// 								for (var t = 0; t < child.length; t++) {
// 									var clone = child[t].cloneNode(true);
// 									oFragment.appendChild(clone);
// 								}
// 								//输出到对象中
// 								var temp = [];
// 								for (var i = 0; i < oFragment.childNodes.length; i++) {
// 									temp.push(oFragment.childNodes[i]);
// 								}
// 								eles = temp;
// 								break;
// 							default: //默认情况下是选择符
// 								//现代浏览器，IE8+，chrome，firefox，safari，opera
// 								if (doc.querySelectorAll) {
// 									var aElems = doc.querySelectorAll(selectors);
// 									for (var o = 0; o < aElems.length; o++) {
// 										eles.push(aElems[o]);
// 									}
// 								}
// 								//IE8以下
// 								else{
// 									console.log('您的浏览器不支持TQuery');
// 								}
// 						}
// 						break;
// 					case "object":
// 						// //数组
// 						// if (TQuery.isArray(selectors)) {
// 						// 	$ARR(selectors);
// 						// }
// 						//DOM
// 						// else if (TQuery.isDOM(selectors)) {
// 							eles.push(selectors);
// 						// }
// 						//普通对象，IE8下，一切皆为对象
// 						// else {

// 						// 	$OBJ(selectors);
// 						// }
// 						break;
// 					default:
// 						return this;
// 				}
// 				this.refresh(eles);
// 				return this;
// 			},
// 			//重拾新的对象
// 			"reinit":function(selectors){
// 				return this.init(selectors);
// 			},
// 			//刷新对象数据
// 			"refresh": function(newArray) {
// 				//清空
// 				for (var j = 0; j < this.length; j++) {
// 					delete this[j];
// 				}
// 				if (newArray) this.init.elements = newArray;
// 				this.length = this.init.elements.length;
// 				//生成
// 				for (var i = 0; i < this.init.elements.length; i++) {
// 					this[i] = this.init.elements[i];
// 				}
// 			},
// 			//==============选择器=============
// 			"eq": function(n) {
// 				var m = n || 0,
// 					newArray = [];
// 				newArray[0] = this[m];
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//CSS3:nth-child
// 			"nth":function(selectors){
// 				var s = this.selectors.split(",");//'input,ul li'
// 				for( var i=0;i<s.length;i++ ){
// 					s[i] += ':nth-child(' + selectors + ')';
// 				}
// 				return this.reinit(s.join(","));
// 			},
// 			//倍数选择器
// 			"an":function(n){
// 				n = n ? n : 1;
// 				this.nth(n + 'n');
// 			},
// 			//奇数,2n-1
// 			"odd":function(){
// 				return this.nth('odd');
// 			},
// 			//偶数,2n
// 			"even":function(){
// 				return this.nth('even');
// 			},
// 			"first": function() {
// 				var s = this.selectors.split(",");//'input,ul li'
// 				for( var i=0;i<s.length;i++ ){
// 					s[i] += ':first-child';
// 				}
// 				return this.reinit( s.join(",") );
// 			},
// 			//选择倒数第几个，默认为0
// 			"last":function(n){
// 				n = n ? n : 1;
// 				var s = this.selectors.split(",");//'input,ul li'
// 				for( var i=0;i<s.length;i++ ){
// 					s[i] += ':nth-last-child(' + n + ')';
// 				}
// 				return this.reinit( s.join(",") );
// 			},
// 			"not": function(selectors) {//过滤掉
// 				var childElements = [];
// 				for (var i = 0; i < this.length; i++) {
// 					switch (selectors.charAt(0)) {
// 						case '#': //id
// 							if (this[i].id != selectors.substring(1)) {
// 								childElements.push(this[i]);
// 							}
// 							break;
// 						case '.': //class
// 							if (!this.hasClass(this[i], selectors.substring(1))) { //没有匹配到class
// 								childElements.push(this[i]);
// 							}
// 							break;
// 						default: //tagName
// 							if (this[i].tagName != selectors.toUpperCase()) {
// 								childElements.push(this[i]);
// 							}
// 					}
// 				}
// 				this.refresh(childElements);
// 				return this;
// 			},
// 			"filter": function(selectors) {//筛选
// 				var childElements = [];
// 				for (var i = 0; i < this.length; i++) {
// 					var ele = this[i];
// 					switch (selectors.charAt(0)) {
// 						case '#':
// 							if (this[i].id == selectors.substring(1)) {
// 								childElements.push(ele);
// 							}
// 							break;
// 						case '.':
// 							if (this.hasClass(ele, selectors.substring(1))) { //如果有class
// 								childElements.push(ele);
// 							}
// 							break;
// 						case '[':
// 							var attrinfo = selectors.replace(/(\[+|\]+|\"|\"+])/g, '').split('=');
// 							var attr = attrinfo[0];
// 							var value = attrinfo[1];
// 							if (attrinfo.length === 1) { //只过滤属性，没有值
// 								if (ele[attr] !== null || ele.getAttribute(attr)) {
// 									childElements.push(ele);
// 								}
// 							} else if (attrinfo.length == 2) { //过滤属性值
// 								if (ele[attr] == value || ele.getAttribute(attr) == value) {
// 									childElements.push(ele);
// 								}
// 							}
// 							break;
// 						default:
// 							if (ele.tagName == selectors.toUpperCase()) {
// 								childElements.push(ele);
// 							}
// 					}
// 				}
// 				this.refresh(childElements);
// 				return this;
// 			},
// 			"find": function(selectors) {//查找子节点
// 				var childElements = [];
// 				for (var i = 0; i < this.length; i++) {
// 					var aElems = this[i].querySelectorAll(selectors);
// 					var length = aElems.length;
// 					var j = 0;
// 					while (j < length) {
// 						childElements.push(aElems[j]);
// 						j++;
// 					}
// 				}
// 				this.refresh(childElements);
// 				return this;
// 			},
// 			"add": function(selectors) {
// 				var newSelectors = this.selectors + ',' + selectors;
// 				var newElements = doc.querySelectorAll(newSelectors);
// 				this.refresh(newElements);
// 				return this;
// 			},
// 			"slice": function(n, m) {
// 				if (n < 0 || m > this.length) return;
// 				var newArray = this.init.elements.slice(n, m + 1);
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//还原最初状态
// 			"end": function() {
// 				var newArray = doc.querySelectorAll(this.selectors);
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//是否包含元素
// 			"has": function(selectors) {
// 				var newArray = [];
// 				for (var i = 0; i < this.length; i++) {
// 					if (this[i].querySelectorAll(selectors).length > 0) {
// 						newArray.push(this[i]);
// 					}
// 				}
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//可见
// 			"visible":function(){

// 			},
// 			//不可见
// 			"unvisible":function(){

// 			},
// 			//在可视区域内的
// 			"inViewPort": function() {
// 				this.inViewPort.get = function(jugg) {
// 					var visi = [],
// 						unvisi = [],
// 						w, h, pos, inViewPort;
// 					for (var i = 0; i < this.length; i++) {
// 						pos = this[i].getBoundingClientRect();
// 						w = doc.documentElement.clientWidth || doc.body.clientWidth;
// 						h = doc.documentElement.clientHeight || doc.body.clientHeight;
// 						inViewPort = pos.top > h || pos.bottom < 0 || pos.left > w || pos.right < 0;
// 						if (inViewPort === true) { //不在可视区域
// 							unvisi.push(this[i]);
// 						} else { //在可视区域
// 							visi.push(this[i]);
// 						}
// 					}
// 					return jugg === true ? visi : unvisi;
// 				};
// 				var newArray = this.inViewPort.get.call(this, true);
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//不在可视区域内
// 			"outViewPort": function() {
// 				var newArray = this.inViewPort.get.call(this, false);
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			//==============遍历=============
// 			"each": function(fn) {
// 				for (var i = 0; i < this.length; i++) {
// 					fn.call(this[i]);
// 				}
// 				return this;
// 			},
// 			"findParent": function(selectors) {
// 				var parent = this[0].parentNode;
// 				if (parent.className.match(/result/)) { //找到结果
// 					var newArray = [];
// 					newArray[0] = parent;
// 					this.refresh(newArray);
// 					return this;
// 				} else if (parent == doc.documentElement || parent == doc.body) { //到达DOM顶层
// 					return this;
// 				} else { //继续查找
// 					this.findParent(selectors);
// 				}
// 			},
// 			"parent": function() {
// 				var newArray = [];
// 				newArray[0] = this[0].parentNode;
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			"parents": function() {
// 				var newArray = []; //存储所有的父节点
// 				var hash = {};
// 				for (var i = 0; i < this.length; i++) {
// 					var v = this[i].parentNode;
// 					if (typeof(hash[v]) == 'undefined') {
// 						hash[v] = 1;
// 						newArray.push(v);
// 					}
// 				}
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			"children": function() {
// 				var childElements = []; //存放所有的子节点
// 				var hash = {}; //过滤已经重复的子节点,中转站
// 				for (var i = 0; i < this.length; i++) {
// 					if (this[i].hasChildNodes() === false) {
// 						continue;
// 					}
// 					for (var j = 0; j < this[i].children.length; j++) {
// 						childElements.push(this[i].children[j]);
// 					}
// 				}
// 				var newArray = TQuery.unique(childElements);
// 				this.refresh(newArray);
// 				return this;
// 			},
// 			"prev": function() {
// 				var temps = [];
// 				for (var i = 0; i < this.length; i++) {
// 					var ele = this[i];
// 					if ($(ele).index() === 0) { //如果处在第一位，没有上一个兄弟节点
// 						continue;
// 					}
// 					temps.push(ele.parentNode.children[$(ele).index() - 1]);
// 				}
// 				this.refresh(temps);
// 				return this;
// 			},
// 			"prevAll": function() {
// 				var prevAllElements = [];
// 				for (var i = 0; i < this.length; i++) {

// 				}
// 				return this;
// 			},
// 			"next": function() {
// 				var temps = [];
// 				for (var i = 0; i < this.length; i++) {
// 					var ele = this[i];
// 					if ($(ele).index() == ele.parentNode.children.length - 1) { //如果处最后一位，没有下一个兄弟节点
// 						continue;
// 					}
// 					temps.push(ele.parentNode.children[$(ele).index() + 1]);
// 				}
// 				this.refresh(temps);
// 				return this;
// 			},
// 			"nextAll": function() {
// 				return this;
// 			},
// 			"siblings": function(selectors) {
// 				var temps = [];
// 				var parentNode = this.parents().elements;
// 				var parentNodeLength = parentNode.length;
// 				var allChild;
// 				for (var i = 0; i < parentNodeLength; i++) {
// 					allChild = parentNode[i].children; //所有同胞元素集合
// 					for (var j = 0; j < allChild.length; j++) {
// 						temps.push(allChild[j]); //获取所有同胞元素，包括自身
// 					}
// 				}
// 				this.refresh(temps);
// 				//如果有参数传入，则过滤同胞元素
// 				if (selectors) {
// 					this.not(selectors);
// 				}
// 				return this;
// 			},
// 			//==============事件=============
// 			"ready": function(fn) {
// 				if (this[0] == win) this[0] = doc;
// 				this.reinit(doc).bind('DOMContentLoaded', function(e) {
// 					fn.call(this, e);
// 					this.ready = "complete";
// 					// $(this).unbind('DOMContentLoaded',"ready");
// 				});
// 				//如果不支持DOMContentLoaded(IE8及以下不支持),
// 				if( !TQuery.browser.msie() || TQuery.browser().visoin>8 ) return this;
// 				if( typeof this[0].ready == "undefined" ||this[0].ready!=="complete" ){
// 					if( typeof this[0].onreadystatechange !== "undefined" ){
// 						this.bind('readystatechange',function(e){
// 							if(this.readyState == 'complete'){
// 								fn.call(this, e);
// 								this.ready = "complete";
// 								$(this).unbind('readystatechange',"ready");
// 								return false;
// 							}
// 						},"ready");
// 					}
// 					// 不支持document.onreadystatechange
// 					else{
// 						(function(){
// 						    try{
// 						        //doScroll方法只有在dom ready之后可以调用，否则会抛异常
// 						        doc.documentElement.doScroll('left');
// 						    }catch(e){
// 						    win.setTimeout( arguments.callee, 0 );
// 						    return;
// 						    }
// 						    //这里触发DOMContentLoaded事件
// 						    fn.call(doc);
// 						    doc.ready = "complete";
// 						})();
// 					}
// 				}
// 				return this;
// 			},
// 			"load": function(fn) {
// 				if (this[0] == doc) this[0] = win;
// 				this.bind('load', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				},'load');
// 				return this;
// 			},
// 			"unload":function(fn){
// 				this.reinit(win).bind('unload',function(e){
// 					fn.call(this,e);
// 					return stop.call(e);
// 				},"unload");
// 			},
// 			"isreload":function(message){
// 				this.reinit(win).bind('beforeunload',function(e){
// 					e.returnValue = message;
// 					return message;
// 				},'beforeunload');
// 			},
// 			"click": function(fn) {
// 				this.bind('click', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"keydown": function(fn) {
// 				this.bind('keydown', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"keyup": function(fn) {
// 				this.bind('keyup', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"keypress": function(fn) {
// 				this.bind('keypress', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mousedown": function(fn) {
// 				this.bind('mousedown', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mouseup": function(fn) {
// 				this.bind('mouseup', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mouseenter": function(fn) {
// 				this.bind("mouseover", function(e) {
// 					if (e.target == this) {
// 						fn.call(this, e);
// 					}
// 					return stop.call(e); //默认禁止冒泡
// 				});
// 				return this;
// 			},
// 			"mouseleave": function(fn) {
// 				this.bind("mouseout", function(e) {
// 					if (e.target == this) {
// 						fn.call(this, e);
// 					}
// 					return stop.call(e); //默认禁止冒泡
// 				});
// 				return this;
// 			},
// 			"mousemove": function(fn) {
// 				this.bind("mousemove", function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mouseover": function(fn) {
// 				this.bind("mouseover", function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mouseout": function(fn) {
// 				this.bind("mouseout", function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"on": function(type, fn) {
// 				var ev = null;
// 				//如果只传一个json参数
// 				if (arguments.length == 1) {
// 					for (var k = 0; k < this.length; k++) {
// 						for (var attr in type) {
// 							// this[k][ 'on'+attr ] = type[attr];
// 							this[k]['on' + attr] = function(e) {
// 								ev = win.event ? win.event : (e ? e : null);
// 								if (type[attr].call(this, ev) === false) {
// 									return stop.call(e);
// 								}
// 							};
// 						}
// 					}
// 				}
// 				//如果传两个参数type,fn
// 				else {
// 					var events = type.split(' '); //获取每个事件
// 					var eventsLength = events.length;
// 					for (var i = 0; i < this.length; i++) {
// 						var j = 0;
// 						while (j < eventsLength) {
// 							// this[i][ 'on'+events[j] ] = fn;
// 							this[i]['on' + events[j]] = function(e) {
// 								ev = win.event ? win.event : (e ? e : null);
// 								if (fn.call(this, ev) === false) {
// 									ev.stopPropagation(); //阻止冒泡，w3c标准
// 									ev.cancelBubble = true; //阻止冒泡,ie,firefox
// 									ev.preventDefault(); //w3c标准
// 									ev.returnValue = false; //阻止默认事件，针对老版本IE
// 									return false;
// 								}
// 							};
// 							j++;
// 						}
// 					}
// 				}
// 				return this;
// 			},
// 			"hover": function(mouseenter, mouseleave) {
// 				this.mouseenter(function(e) {
// 					mouseenter.call(this, e);
// 				});
// 				this.mouseleave(function(e) {
// 					mouseleave.call(this, e);
// 				});
// 				return this;
// 			},
// 			"toggleClick": function() {
// 				var _this = this,
// 					_arguments = arguments,
// 					data = this.data('toggleClick'); //获取属性
// 				if (typeof data.count == "undefined") data.count = 0;
// 				if (typeof data.fns == "undefined") data.fns = arguments.length;
// 				this.data('toggleClick', data); //设置属性
// 				for (var i = 0; i < this.length; i++) {
// 					this.bind('click', function() {
// 						_arguments[data.count++ % data.fns].call(_this[i]);
// 						return stop.call(e);; //默认禁止冒泡
// 					}, 'toggleClick');
// 				}
// 				return this;
// 			},
// 			"resize":function(fn){
// 				this.bind('resize',function(e){
// 					if( fn.call(this,e) === false){
// 						return stop.call(e);
// 					}
// 				});
// 			},
// 			"scroll": function(fn) {
// 				this.bind('scroll', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				});
// 				return this;
// 			},
// 			"mouseScroll": function(fn) {
// 				this.bind('mousewheel DOMMouseScroll', function(e) {
// 					if (fn.call(this, e) === false) {
// 						return stop.call(e);
// 					}
// 				},'mouseScroll');
// 				return this;
// 			},
// 			"mouseScrollUp": function(fn) {
// 				this.bind('mousewheel DOMMouseScroll', function(e) {
// 					if (e.wheelDelta) { //chrome,ie
// 						if (e.wheelDelta > 0) { //滚轮向上滚动
// 							if (fn.call(this, e) === false) {
// 								return stop.call(e);
// 							}
// 						}
// 					} else { //狗日的firefox
// 						if (e.detail < 0) { //滚轮向上滚动
// 							if (fn.call(this, e) === false) {
// 								return stop.call(e);
// 							}
// 						}
// 					}
// 				}, "mouseScrollUp");
// 				return this;
// 			},
// 			"mouseScrollDown": function(fn) {
// 				this.bind('mousewheel DOMMouseScroll', function(e) {
// 					if (e.wheelDelta) { //chrome,ie
// 						if (e.wheelDelta < 0) { //滚轮向下滚动
// 							if (fn.call(this, e) === false) {
// 								return stop.call(e);
// 							}
// 						}
// 					} else { //狗日的firefox
// 						if (e.detail > 0) { //滚轮向下滚动
// 							if (fn.call(this, e) === false) {
// 								return stop.call(e);
// 							}
// 						}
// 					}
// 				}, "mouseScrollDown");
// 				return this;
// 			},
// 			"bind": function(type, fn, fnName) {
// 				//如果只传一个json参数
// 				if (arguments.length == 1) {
// 					for (var k = 0; k < this.length; k++) {
// 						for (var attr in type) {
// 							bindEvent(this[k], attr, type[attr], fnName);
// 						}
// 					}
// 				}
// 				//如果传两个参数，则多个事件统一执行一个e
// 				else {
// 					var events = type.split(' ');
// 					for (var i = 0; i < this.length; i++) {
// 						var j = 0;
// 						while (j < events.length) {
// 							bindEvent.call(this[i], this[i], events[j], fn, fnName);
// 							j++;
// 						}
// 					}
// 				}

// 				function bindEvent(dom, type, fn, fnName) {
// 					dom.eventQueue = dom.eventQueue || {};
// 					dom.eventQueue[type] = dom.eventQueue[type] || {};
// 					dom.handler = dom.handler || {};
// 					var index = 0; //事件队列长度
// 					for (var length in dom.eventQueue[type]) {
// 						index++;
// 					}
// 					if (!fnName) {
// 						dom.eventQueue[type]['fn' + index] = fn;
// 					} else {
// 						dom.eventQueue[type][fnName] = fn;
// 						// this.fnName = fnName;
// 					}
// 					//如果不存在handler[click]，handler[mouseover],…………
// 					if (!dom.handler[type]) {
// 						dom.handler[type] = function(e) {
// 							ev = win.event ? win.event : (e ? e : null);
// 							ev.target = ev.target || ev.srcElement;
// 							for (var fn in dom.eventQueue[type]) {
// 								if (dom.eventQueue[type][fn].call(this, ev) === false) {
// 									return stop.call(ev);
// 								}
// 							}
// 						};
// 						addEvent(dom, type, dom.handler[type]);
// 					}
// 				}
// 				return this;
// 			},
// 			"unbind": function(type, fnName) {
// 				for (var m = 0; m < this.length; m++) {
// 					var dom = this[m];
// 					var hasQueue = dom.eventQueue && dom.eventQueue[type];
// 					var queueLength = 0;
// 					for (var length in dom.eventQueue[type]) {
// 						queueLength++;
// 					}
// 					//没有绑定
// 					if (!hasQueue) return;
// 					if (!fnName) { //解除匿名函数
// 						if (win.removeEventListener) {
// 							dom.removeEventListener(type, dom.handler[type]);
// 						} else {
// 							dom.detachEvent(type, dom.handler[type]);
// 						}
// 						delete dom.eventQueue[type];
// 					}
// 					else { //解除有名函数
// 						delete dom.eventQueue[type][fnName];
// 						//如果没有队列了，则删除队列。
// 						if (queueLength === 0) {
// 							if (win.removeEventListener) {
// 								dom.removeEventListener(type, dom.handler[type]);
// 							} else {
// 								dom.detachEvent(type, dom.handler[type]);
// 							}
// 							delete dom.eventQueue[type];
// 						}
// 					}
// 				}
// 			},
// 			"one": function(type, fn) {
// 				var _this = this;
// 				//只穿一个json参数
// 				if (arguments.length == 1) {
// 					for (var k = 0; k < this.length; k++) {
// 						for (var attr in type) {
// 							// bindEvent(this[k],attr,type[attr],fnName);
// 							this.bind(attr, function(e) {
// 								var ev = win.event ? win.event : (e ? e : null);
// 								_this.unbind(ev.type, 'one');
// 								if (type[attr].call(this, ev) === false) {
// 									return stop.call(e);
// 								}
// 							}, "one");
// 						}
// 					}
// 				}
// 				//传2个参数
// 				else {
// 					var events = type.split(' '); //获取每个事件
// 					var eventsLength = events.length;
// 					for (var i = 0; i < this.length; i++) {
// 						var j = 0;
// 						while (j < eventsLength) {
// 							// this[i][ 'on'+events[j] ] = fn;
// 							this.bind(events[j], function(e) {
// 								var ev = win.event ? win.event : (e ? e : null);
// 								_this.unbind(ev.type, 'one');
// 								if (fn.call(this, ev) === false) {
// 									return stop.call(e);
// 								}
// 							}, "one");
// 							j++;
// 						}
// 					}
// 				}
// 				return this;
// 			},
// 			"trigger": function(type, fnName) {
// 				for (var k = 0; k < this.length; k++) {
// 					var dom = this[k];
// 					if (!fnName) {
// 						//如果是自定义事件
// 						if ( TQuery.isUndefined(dom["on" + type]) || TQuery.isUndefined(dom[type]) ) {
// 							//触发DOM2级事件，通过bind绑定的。
// 							if (dom.eventQueue) {
// 								for (var fn in dom.eventQueue[type]) {
// 									dom.eventQueue[type][fn].call(dom);
// 								}
// 							}
// 						}
// 						//如果是DOM原生事件
// 						else {
// 							// 触发DOM0,DOM2级事件,不通过bind绑定的
// 							if (typeof dom[type] !== "undefined") {
// 								dom[type].call(dom);
// 							}
// 						}
// 					}
// 					//指定触发哪个函数
// 					else {
// 						dom.eventQueue[type][fnName].call(dom);
// 					}
// 				}
// 				return this;
// 			},
// 			"triggerHandler":function(type, fnName){
// 				this.trigger(type, fnName);
// 			},
// 			"live": function(type, fn, parent) {
// 				var _this = this,
// 					liveIndex = "live" + parseFloat(Math.random() * 10).toFixed(10).replace('.', "");
// 				parent = parent ? parent : doc;
// 				for (var j = 0; j < this.length; j++) {
// 					this[j].parentLive = parent;
// 					this[j].liveIndex = liveIndex;
// 				}
// 				$(parent).bind(type, function(e) {
// 					for (var i = 0; i < _this.length; i++) {
// 						if (e.target == _this[i]) {
// 							fn.call(e.target, e);
// 							break;
// 						}
// 					}
// 					return stop.call(e);//默认阻止冒泡
// 				}, liveIndex);
// 				return this;
// 			},
// 			"die": function(type, parent) {
// 				var liveIndex = this[0].liveIndex;
// 				parent = parent ? parent : (this[0].parentLive ? this[0].parentLive : doc);
// 				$(parent).unbind(type, liveIndex);
// 			},
// 			"mutation": function(options, fn) {
// 				var MutationObserver, observer;
// 				for (var i = 0; i < this.length; i++) {
// 					MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver;
// 					observer = new MutationObserver(function(mutations) {
// 						mutations.forEach(function(mutation) {
// 							fn.call(this[i]);
// 						});
// 					});
// 					observer.observe(this[i], options);
// 				}
// 				return this;
// 			},
// 			//支持的标签<input type="text">, <select>, <textarea>，js对象：fileUpload, select, text, textarea
// 			"change":function(fn){
// 				this.bind('change',function(e){
// 					fn.call(this,e);
// 				});
// 			},
// 			//==============尺寸=============
// 			"width": function(setting) {
// 				if (!setting && this[0] instanceof Object && (this[0].alert || this[0].body)) { //如果是win，或document
// 					return doc.body.scrollWidth > doc.documentElement.scrollWidth ? doc.body.scrollWidth : doc.documentElement.scrollWidth; //获取带padding和margin的值
// 				} else if (setting) { //设置宽度
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].style.width = setting.toString().replace('px', '') + 'px';
// 					}
// 					return this;
// 				} else {
// 					return this[0].offsetWidth || parseFloat(this.style('width')); //获取宽度
// 				}
// 			},
// 			"height": function(setting) {
// 				if (this[0] instanceof Object && (this[0].alert || this[0].body)) { //如果是win，或document，则返回整个文档高度
// 					return doc.body.scrollHeight > doc.documentElement.scrollHeight ? doc.body.clientHeight : doc.documentElement.scrollHeight; //获取带padding和margin的值
// 				} else if (setting) { //设置高度
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].style.height = setting.toString().replace('px', '') + 'px';
// 					}
// 					return this;
// 				} else if (!setting) {
// 					return this[0].offsetHeight || parseFloat(this.style('height')); //获取高度
// 				}
// 			},
// 			"innerWidth": function() {

// 			},
// 			"innerHeight": function() {

// 			},
// 			"top": function(setting) {
// 				if (setting) {
// 					this.css('top', setting);
// 					return this;
// 				}
// 				return parseInt(this[0].offsetTop);
// 			},
// 			"left": function(setting) {
// 				if (setting) {
// 					this.css('left', setting);
// 					return this; //返回对象，进行链式操作
// 				}
// 				return parseInt(this[0].offsetLeft);
// 			},
// 			"viewWidth": function() {
// 				return doc.body.clientWidth < doc.documentElement.clientWidth ? doc.body.clientWidth : doc.documentElement.clientWidth; //取较小值
// 			},
// 			"viewHeight": function() {
// 				return doc.body.clientHeight < doc.documentElement.clientHeight ? doc.body.clientHeight : doc.documentElement.clientHeight; //取较小值
// 			},
// 			"style": function(attr) {
// 				return this[0].currentStyle ? this[0].currentStyle[attr] : getComputedStyle(this[0])[attr];
// 			},
// 			"scrollTop": function() {
// 				return this.size('scrollTop');
// 			},
// 			"scrollHeight": function() {
// 				return this.size('scrollHeight');
// 			},
// 			"scrollLeft": function() {
// 				return this.size('scrollLeft');
// 			},
// 			"scrollWidth": function() {
// 				return this.size('scrollLeft');
// 			},
// 			"size": function(attr) {
// 				return doc.documentElement[attr] ? doc.documentElement[attr] : doc.body[attr];
// 			},
// 			//包含margin
// 			"offset": function(attr) {
// 				return this[0]['offset' + TQuery.upper(attr)];
// 			},
// 			//==============属性=============
// 			//可编辑性,true>>>可编辑,false>>>不可编辑
// 			"modify":function(boolean){
// 				boolean = (typeof boolean !== "undefined") ? boolean : true;
// 				this.prop({
// 					"contentEditable":boolean,
// 					"readOnly":!boolean
// 				});
// 				return this;
// 			},
// 			//一个是特性
// 			"prop": function(prop, value) {
// 				if (arguments.length == 1) {
// 					//读取
// 					if (typeof prop == "string") {
// 						return this[0][prop];
// 					}
// 					//写,json格式
// 					else {
// 						for (var key in prop) {
// 							for( var j=0;j<this.length;j++ ){
// 								if( typeof this[j][key] !=="undefined" ){
// 									this[j][key] = prop[key];
// 								}
// 							}
// 						}
// 					}
// 				}
// 				else if (arguments.length == 2) {
// 					for (var i = 0; i < this.length; i++) {
// 						this[i][prop] = value;
// 					}
// 				}
// 				return this;
// 			},
// 			// .toggleProp('value',[1,2,3,4,5,6]) || .toggleProp('value')
// 			"toggleProp": function(prop, array) {
// 				var type = {
// 					"prop": TQuery.type(prop),
// 					"array": TQuery.type(array)
// 				};
// 				//1个值的toggle,增加/删除
// 				if (arguments.length <= 2 && (type.array !== "array" || type.array == "undefined")) {
// 					for (var i = 0; i < this.length; i++) {
// 						if (!this[i][prop]) { //不存在
// 							this[i][prop] = array;
// 						} else { //存在
// 							this[i][prop] = null;
// 						}
// 					}
// 				}
// 				//多个值得toggle
// 				else {
// 					var values = TQuery.toArray(arguments).slice(1)[0];
// 					var data = this.data('toggleProp');
// 					if (typeof data.count == "undefined") data.count = 0;
// 					if (typeof data.values == "undefined") data.values = values;
// 					this.data('toggleProp', data); //设置属性
// 					this.prop(prop, values[data.count++ % data.values.length]);
// 				}
// 				return this;
// 			},
// 			//一个是属性
// 			"attr": function(attr, value) {
// 				//2个参数，设置属性
// 				if (arguments.length == 2) {
// 					if (attr == "className") {
// 						attr = "class";
// 					}
// 					for (var k = 0; k < this.length; k++) {
// 						if (this[k][attr]) {
// 							this[k][attr] = value;
// 						} else {
// 							this[k].setAttribute(attr, value);
// 						}
// 					}
// 				}
// 				//1个参数
// 				else if (arguments.length == 1) { //1个参数
// 					//JSON，设置属性
// 					if (typeof(attr) == "object" && Object.prototype.toString.call(attr).toLowerCase() == "[object object]") { //如果是json，则分别设置属性
// 						for (var i = 0; i < this.length; i++) {
// 							for (var j in attr) {
// 								if (j == "className" || j == "class") {
// 									var classValue = attr[j];
// 									this[i].setAttribute("class", classValue);
// 									continue;
// 								}
// 								if (this[i][j]) { //如果属性是可以直接读取
// 									this[i][j] = attr[j];
// 								} else { //如果是自定义属性
// 									this[i].setAttribute(j, attr[j]);
// 								}
// 							}
// 						}
// 					}
// 					//读取
// 					else {
// 						return this[0][attr] || this[0].getAttribute(attr);
// 					}
// 				}
// 				return this;
// 			},
// 			// .toggleProp('data-set',[1,2,3,4,5,6]) || .toggleProp('data-set')
// 			"toggleAttr": function(attr, array) {
// 				var type = {
// 					"attr": TQuery.type(attr),
// 					"array": TQuery.type(array)
// 				};
// 				//1个值的toggle,增加和删除
// 				if (arguments.length <= 2 && (type.array !== "array" || type.array == "undefined")) {
// 					for (var i = 0; i < this.length; i++) {
// 						if (!this[i].getAttribute(attr)) { //不存在
// 							this[i].setAttribute(attr, array);
// 						} else { //存在
// 							this[i].removeAttribute(attr);
// 						}
// 					}
// 				}
// 				//同时设置多个值的toggle
// 				else {
// 					var values = TQuery.toArray(arguments).slice(1)[0];
// 					var data = this.data('toggleAttr'); //读取属性
// 					if (typeof data.count == "undefined") data.count = 0;
// 					if (typeof data.values == "undefined") data.values = values;
// 					this.data('toggleAttr', data); //设置属性
// 					this.attr(attr, values[data.count++ % data.values.length]);
// 				}
// 				return this;
// 			},
// 			"removeAttr": function(attr) {
// 				for (var i = 0; i < this.length; i++) {
// 					if (this[i][attr]) {
// 						delete this[i][attr];
// 					} else {
// 						this[i].removeAttribute(attr);
// 					}
// 				}
// 				return this;
// 			},
// 			"hasClass": function(obj, classValue) {
// 				return obj.classList.contains(classValue);
// 			},
// 			"addClass": function(classValue) {
// 				for (var i = 0; i < this.length; i++) {
// 					this[i].classList.add(classValue);
// 				}
// 				return this;
// 			},
// 			"removeClass": function(classValue) {
// 				for (var i = 0; i < this.length; i++) {
// 					this[i].classList.remove(classValue);
// 				}
// 				return this;
// 			},
// 			// .toggleProp('class1','class2','class3') || .toggleProp('class1')
// 			"toggleClass": function() {
// 				//单个ClassName开关
// 				if (arguments.length === 1) {
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].classList.toggle( arguments[0] );
// 					}
// 				}
// 				//多个className切换
// 				else{
// 					var values = TQuery.toArray(arguments);
// 					var data = this.data('toggleAttr'); //读取属性
// 					if (typeof data.count == "undefined") data.count = 0;
// 					if (typeof data.values == "undefined") data.values = values;
// 					for (var j = 0; j < arguments.length; j++) {
// 						this.removeClass(arguments[j]);
// 					}
// 					this.data('toggleAttr', data); //设置属性
// 					this.addClass(values[data.count++ % data.values.length]);
// 				}
// 				return this;
// 			},
// 			// .data('info',{})
// 			"data": function(key,value) {
// 				var data = this[0].dataTQuery = this[0].dataTQuery || {};
// 				//读数据
// 				if (arguments.length == 1 && typeof data[key] !== "undefined") {
// 					return data[key];
// 				}
// 				//存数据
// 				else {
// 					for (var i = 0; i < this.length; i++) {
// 						data = this[i].dataTQuery;
// 						data[key] = value;
// 					}
// 				}
// 				return data;
// 			},
// 			"removeData": function(key) {
// 				var data;
// 				for (var i = 0; i < this.length; i++) {
// 					data = this[i].dataTQuery;
// 					if (data[key]) {
// 						data[key] = null;
// 						delete data[key];
// 						this[i].dataTQuery = data;
// 					}
// 				}
// 			},
// 			//==============样式=============
// 			"css": function(attr, value) {
// 				var type = /^(width|left|top|bottom|right|line-height|font-size)+/ig;
// 				var type2 = /^(height|margin|padding)+/ig;
// 				var type3 = /\d+(px)/ig;
// 				var type4 = /\:/ig;
// 				//两个参数
// 				if (arguments.length == 2) {
// 					//设置
// 					value += "";
// 					if (type.test(attr) && value.indexOf('%') < 0) {
// 						value = parseFloat(value).toFixed(2) + 'px';
// 					}
// 					for (var m = 0; m < this.length; m++) {
// 						this[m].style[attr] = value;
// 					}
// 				}
// 				//一个参数
// 				else {
// 					//字符串格式
// 					if (typeof attr == "string") {
// 						//设置,background:#303030;font-size:20px;
// 						//设置样式
// 						if (type4.test(attr)) {
// 							for (var x = 0; x < this.length; x++) {
// 								this[x].style.cssText = attr;
// 							}
// 						}
// 						//读取样式
// 						else {
// 							return this[0].currentStyle ? this[0].currentStyle[attr] : getComputedStyle(this[0])[attr];
// 						}
// 					}
// 					//JSON格式
// 					else if (typeof(attr) == "object" && Object.prototype.toString.call(attr).toLowerCase() == "[object object]" && !attr.length) {
// 						var css = "",
// 							key,
// 							val;
// 						for (var i = 0; i < this.length; i++) {
// 							//JS写法
// 							// for(var k in attr){
// 							// 	//k == 属性名字,width,height,opacity等
// 							// 	//attr[k] == 属性值,300px,#303030等
// 							// 	if((type.test(k) || type2.test(k)) && attr[k].indexOf('%')<0 ){//如果没有%符号
// 							// 		attr[k] = parseFloat( attr[k] ).toFixed(2) + 'px';
// 							// 	}
// 							// 	this[i].style[k] = attr[k];
// 							// }
// 							//纯CSS写法
// 							for (key in attr) {
// 								//k == 属性名字,width,height,opacity等
// 								//attr[k] == 属性值,300px,#303030等
// 								val = attr[key] + "";
// 								if ((type.test(key) || type2.test(key)) && val.indexOf('%') < 0) { //如果是带像素的属性，并且没有%符号
// 									val = parseFloat(val).toFixed(2) + 'px';
// 								}
// 								css += key + ":" + val + ";";
// 							}
// 							this[i].style.cssText = css;
// 						}
// 					}
// 				}
// 				return this;
// 			},
// 			//参数：内容，{}(properties)
// 			"addStyle": function() {
// 				var contents,prop,textNode,styleSheet;
// 				for( var i=0;i<arguments.length;i++ ){
// 					var agm = arguments[i];
// 					//Style内容
// 					if( TQuery.isString(agm) ){
// 						contents = agm;
// 					}
// 					//Style属性
// 					else if( TQuery.isObject(agm) ){
// 						prop = agm;
// 					}
// 				}
// 				textNode = doc.createTextNode(contents);
// 				styleSheet = doc.createElement('style');
// 				styleSheet.type = "text/css";
// 				for( var attr in prop ){
// 					if( typeof styleSheet[attr] !=="undefined" ){
// 						styleSheet[attr] = prop[attr];
// 					}
// 				}
// 				styleSheet.appendChild(textNode);
// 				doc.head.appendChild(styleSheet);
// 				return this;
// 			},
// 			//参数：内容，{}(properties)
// 			"addScript":function(){
// 				var contents,url,prop,position,textNode,script;
// 				for( var i=0;i<arguments.length;i++ ){
// 					var agm = arguments[i];
// 					//内容
// 					if( TQuery.isString(agm) ){
// 						contents = agm;
// 					}
// 					//属性
// 					else if( TQuery.isObject(agm) ){
// 						prop = agm;
// 					}
// 					//position,true为头部，false为尾部
// 					else if( TQuery.isBoolean(agm) ){
// 						position = agm;
// 					}
// 				}
// 				contents = contents ? contents : "";
// 				textNode = doc.createTextNode(contents);
// 				script = doc.createElement('script');
// 				script.type = "text/javascript";
// 				for( var attr in prop ){
// 					if( !TQuery.isUndefined(script[attr]) ){
// 						script[ attr ] = prop[attr];
// 					}
// 				}
// 				script.appendChild(textNode);
// 				//插入头部
// 				if( position===true ){
// 					doc.head.appendChild(script);
// 				}
// 				//插入尾部
// 				else{
// 					doc.body.appendChild(script);
// 				}
// 				return this;
// 			},
// 			//参数：{}(properties)
// 			"addLink":function(){
// 				var link = doc.createElement('link');
// 				for( var attr in arguments[0] ){
// 					link[ attr ] = arguments[0][ attr ];
// 				}
// 				doc.head.appendChild( link );
// 				return this;
// 			},
// 			//==============动画=============
// 			//animate({},load,speed,callBack)
// 			"animate": function() {
// 				var properties,load,speed,callBack,this_ = this,fps = parseInt(1000/60);
// 				for( var o=0;o<arguments.length;o++ ){
// 					var agm = arguments[o];
// 					// properties
// 					if( TQuery.isObject( agm ) ){
// 						properties = agm;
// 					}
// 					// load
// 					else if( TQuery.isFunction( agm ) && o!==arguments.length-1 ){
// 						load = agm;
// 					}
// 					// speed
// 					else if( TQuery.isNumber( agm ) || ( TQuery.isString(agm) &&  agm>=0) ){
// 						speed = agm;
// 					}
// 					// callBack
// 					else if( TQuery.isFunction( agm ) && o==arguments.length-1 ){
// 						callBack = agm;
// 					}
// 				}
// 				for (var i = 0; i < this.length; i++) {
// 					var _this = this[i];
// 					clearInterval(_this.animate);
// 					_this.animate = setInterval(function() {
// 						var bStop = true,
// 							current,
// 							target;

// 						for (var attr in properties) {
// 							// 1. 取得当前的值(可以是width，height，opacity等的值)
// 							current = 0; //当前值
// 							target = 0; //目标值
// 							if (attr == 'opacity') {
// 								current = Math.round(parseFloat($(_this).style(attr)) * 100);
// 								target = parseFloat(properties[attr]) * 100;
// 							}
// 							else if( attr== 'scrollTop' ){
// 								current = parseInt( this_.scrollTop() );
// 								target = parseInt( properties[attr] );
// 							}
// 							else {

// 								current = parseInt($(_this).style(attr));
// 								target = parseFloat(properties[attr]);
// 							}
// 							// 2.计算运动速度
// 							var speedConfig = typeof(speed) != 'undefined' ? speed : 10;
// 							var iSpeed = (target - current) / speedConfig;
// 							iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
// 							// 3. 检测所有运动是否到达目标
// 							if ((iSpeed > 0 && current <= target) || (iSpeed < 0 && current >= target)) {
// 								bStop = false;
// 							}
// 							// 4. 开始运动
// 							if (attr == "opacity") {
// 								_this.style.filter = 'alpha(opacity=' + (current + iSpeed) + ')';
// 								_this.style.opacity = (current + iSpeed) / 100;
// 							}
// 							else if( attr == 'scrollTop' ){
// 								this_.scrollTo( target );
// 							}
// 							else {
// 								_this.style[attr] = current + iSpeed + 'px';
// 							}
// 							load && load.call(_this);
// 							// 4. 运动停止
// 							if (bStop) {
// 								clearInterval(_this.animate);
// 								callBack && callBack.call(_this);
// 							}
// 						}
// 					},fps);
// 				}
// 				return this;
// 			},
// 			//animateToggle({},{},{},{})
// 			"animateToggle":function(){
// 				var _arguments = arguments;
// 				var data = this.data('animateToggle'); //获取属性
// 				if (typeof data.count == "undefined") data.count = 0;
// 				if (typeof data.objLength == "undefined") data.objLength = _arguments.length;
// 				this.data('animateToggle', data); //设置属性
// 				for (var i = 0; i < this.length; i++) {
// 					this.animate( _arguments[data.count++ % data.objLength] );
// 				}
// 				return this;
// 			},
// 			"stop": function(delay) {
// 				var stardelay = delay ? delay : 0;
// 				setTimeout(function() {
// 					clearInterval($(this)[0].animate);
// 				}, stardelay);
// 				return this;
// 			},
// 			"show": function() {
// 				for (var i = 0; i < this.length; i++) {
// 					this[i].style.display = 'block';
// 				}
// 				return this;
// 			},
// 			"hide": function() {
// 				for (var i = 0; i < this.length; i++) {
// 					this[i].style.display = 'none';
// 				}
// 				return this;
// 			},
// 			"fadeToggle": function() {
// 				var _this = this;
// 				this.toggle(function() {
// 					_this.fadeOut();
// 				}, function() {
// 					_this.fadeIn();
// 				});
// 				return this;
// 			},
// 			"fadeIn": function(callBack) {
// 				var _this = this;
// 				this.css('display', 'block');
// 				this.animate({
// 					"opacity": 1
// 				},function(){
// 					if (callBack) callBack(this);
// 				});
// 			},
// 			"fadeOut": function(callBack) {
// 				var _this = this;
// 				this.animate({
// 					"opacity": 0
// 				},function(){
// 					_this.css('display', 'none');
// 					if (callBack) callBack(this);
// 				});
// 			},
// 			"fadeTo": function(target, callBack) {
// 				var _this = this;
// 				this.animate({
// 					"opacity": target
// 				}, function(){
// 						if (target <= 0) {
// 							_this.css('display', 'none');
// 						} else {
// 							_this.css('display', 'block');
// 						}
// 						if (callBack) callBack(this);
// 				});
// 			},
// 			"scale": function(times,callBack) {
// 				callBack = TQuery.isFunction(callBack) ? callBack : TQuery.noop;
// 				var prop = {},width,height,arr = [],
// 					eles = this.toArray();
// 				for( var i=0;i<eles.length;i++ ){
// 					var _this = $(eles[i]);
// 					width = _this.data('size').width || _this.width();
// 					height = _this.data('size').height || _this.height();
// 					_this.data("size",{"width":width,"height":height});
// 					_this.animate( {"width":width*times,"height":height*times},callBack );
// 				}
// 				return this;
// 			},
// 			//scaleToggle(2,3,1,0.5,callBack)
// 			"scaleToggle":function(){
// 				var agms = arguments,_arguments,callBack;
// 				//如果最后一位是function，则最为回掉
// 				if( TQuery.isFunction( agms[length-1] ) ) {
// 					callBack = agms[length-1];
// 					_arguments = TQuery.toArray(arguments).splice(0,arguments.length-1);
// 				}else{
// 					callBack = TQuery.noop;
// 					_arguments = TQuery.toArray(arguments);
// 				}
// 				var data = this.data('scaleToggle'); //获取属性
// 				if (typeof data.count == "undefined") data.count = 0;
// 				if (typeof data.agms == "undefined") data.agms = _arguments.length;
// 				this.data('scaleToggle', data); //设置属性
// 				this.scale( _arguments[data.count++ %data.agms] ,callBack);
// 				return this;
// 			},
// 			"toggle": function() {
// 				var _arguments = arguments;
// 				var data = this.data('toggle'); //获取属性
// 				if (typeof data.count == "undefined") data.count = 0;
// 				if (typeof data.fns == "undefined") data.fns = _arguments.length;
// 				this.data('toggle', data); //设置属性
// 				for (var i = 0; i < this.length; i++) {
// 					_arguments[data.count++ % data.fns].call(this[i]);
// 				}
// 				return this;
// 			},
// 			"slideToggle": function() {
// 				var _this = this;
// 				this.toggle(function() {
// 					$(this).slideUp();
// 				}, function() {
// 					$(this).slideDown();
// 				});
// 				return this;
// 			},
// 			"slideRight": function(callBack) {
// 				var width = this.data('size').width;
// 				this.show().animate({
// 					"width": width
// 				}, function(){
// 					if (callBack) callBack.call(this);
// 				});
// 				return this;
// 			},
// 			"slideLeft": function(callBack) {
// 				var size = this.data('size');
// 				if (typeof size.width == "undefined") {
// 					this.data('size').width = this.width();
// 				}
// 				var _this = this;
// 				this.animate({
// 					"width": 0
// 				},function(){
// 					_this.hide();
// 					if (callBack) callBack.call(this);
// 				});
// 				return this;
// 			},
// 			"slideDown": function(callBack) {
// 				var height = this.data('size').height;
// 				this.show().animate({
// 					"height": height
// 				}, function(){
// 					if (callBack) callBack.call(this);
// 				});
// 				return this;
// 			},
// 			"slideUp": function(callBack) {
// 				var size = this.data('size');
// 				if (typeof size.height == "undefined") {
// 					this.data('size').height = this.height();
// 				}
// 				var _this = this;
// 				this.animate({
// 					"height": 0
// 				}, function(){
// 					_this.hide();
// 					if (callBack) callBack.call(this);
// 				});
// 				return this;
// 			},
// 			"scrollTo": function(target, callBack) {
// 				//传入DOM节点
// 				if ( TQuery.isDOM(target) ) {
// 					target = parseInt($(target).offset('top'));
// 				}
// 				//传入选择符,字符串
// 				else if ( typeof target == "string" ) {
// 					//字符串数字
// 					if (target > 0) {
// 						target = parseInt(target);
// 					} else {
// 						target = $(target).offset('top');
// 					}
// 				}
// 				//传入TQuery对象
// 				else if (typeof target.TQuery !== "undefined") {
// 					target = target.offset('top');
// 				}
// 				var _this = this,
// 					nowScrollTop, dif, speed, position,
// 					pageHeight = $(doc).height() - $(doc).viewHeight();
// 				target = target < 0 ? 0 : (target < pageHeight ? target : pageHeight); //超出范围
// 				clearInterval(doc.timerScroll);
// 				doc.timerScroll = setInterval(function() {
// 					nowScrollTop = doc.body.scrollTop || doc.documentElement.scrollTop;
// 					dif = Math.abs(nowScrollTop - target); //差值
// 					speed = nowScrollTop - target < 0 ? (dif / 10) + 1 : -((dif / 10) + 1);
// 					position = nowScrollTop + (speed);
// 					if ((speed > 0 && position >= target) || (speed < 0 && position <= target)) {
// 						doc.body.scrollTop = doc.documentElement.scrollTop = target;
// 						clearInterval(doc.timerScroll);
// 						if (callBack) callBack.call(_this[0]);
// 					} else {
// 						doc.body.scrollTop = doc.documentElement.scrollTop = position;
// 					}
// 				}, parseInt(1000 / 60));
// 				return this;
// 			},
// 			"scrollToggle": function() {
// 				var data = this.data('toggleClick'); //获取属性
// 				if (typeof data.count == "undefined") data.count = 0;
// 				if (typeof data.targets == "undefined") data.targets = arguments;
// 				this.data('toggleClick', data); //设置属性
// 				this.scrollTo(data.targets[data.count++ % arguments.length]);
// 				return this;
// 			},
// 			//==============DOM=============
// 			"replace":function(DOMNode){
// 				//传入DOM节点
// 				if( TQuery.isDOM( DOMNode ) ){
// 					DOMNode = DOMNode;
// 				}
// 				//传入DOM字符串
// 				else{

// 				}
// 				//替换
// 				for( var i=0;i<this.length;i++ ){
// 					doc.body.replaceChild(DOMNode,this[i]);//DOMNode替换掉this[i]
// 				}
// 				return this;
// 			},
// 			"replaceAll":function(){

// 			},
// 			"replaceWidth":function(){

// 			},
// 			"clone": function(deep) {
// 				var newElements = [],
// 					cloneNode;
// 				for (var i = 0; i < this.length; i++) {
// 					cloneNode = this[i].cloneNode(true); //带子节点
// 					if (deep && deep === true) { //深度克隆，带事件

// 					}
// 				}
// 				return this;
// 			},
// 			"append": function(content) {

// 			},
// 			"appendChild": function(content) {

// 			},
// 			"prepend": function(prepend) {

// 			},
// 			"prependChild": function() {

// 			},
// 			//插入到DOMNode之后
// 			"after": function(DOMNode) {
// 				var parent,
// 					oFragment = doc.createDocumentFragment(); //创建文档碎片;
// 				for (var i = 0; i < this.length; i++) {
// 					oFragment.appendChild(this[i]);
// 				}
// 				parent = DOMNode.parentNode; //插入位置的父元素
// 				if (parent.lastChild == DOMNode) { //如果最后的节点是目标节点，直接添加
// 					parent.appendChild(oFragment);
// 				} else { //如果不是，则插入在目标元素的下一个兄弟节点的前面，也就是目标元素的后面
// 					parent.insertBefore(oFragment, DOMNode.nextSibling);
// 				}
// 				return this;
// 			},
// 			//插入到DOMNode之前
// 			"before": function(DOMNode) {
// 				var oFragment = doc.createDocumentFragment(); //创建文档碎片
// 				for (var i = 0; i < this.length; i++) {
// 					oFragment.appendChild(this[i]);
// 				}
// 				DOMNode.parentNode.insertBefore(oFragment, DOMNode);
// 				return this;
// 			},
// 			"remove": function() {
// 				for (var i = 0; i < this.length; i++) {
// 					this[i].remove();
// 				}
// 				return this;
// 			},
// 			"empty": function() {
// 				this.text(' ');
// 				this.html(' ');
// 				return this;
// 			},
// 			"html": function(setting) {
// 				if (setting) {
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].innerHTML = setting;
// 					}
// 					return this;
// 				} else {
// 					return this[0].innerHTML;
// 				}
// 			},
// 			"text": function(setting) {
// 				if (setting) {
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].innerText = this[i].textContent = setting;
// 					}
// 					return this;
// 				} else {
// 					return this[0].innerText || this[0].textContent;
// 				}
// 			},
// 			//带标签,注释
// 			"contents":function(setting){
// 				if (setting) {
// 					for (var i = 0; i < this.length; i++) {
// 						this[i].outerText = this[i].outerHTML = setting;
// 					}
// 					return this;
// 				} else {
// 					return this[0].outerText || this[0].outerHTML;
// 				}
// 			},
// 			"val": function(setting) {
// 				if (setting) {
// 					this.prop("value",setting);
// 					return this;
// 				} else {
// 					return this[0].value;
// 				}
// 			},
// 			//==============其他=============
// 			"proxy": function(fn, _this) {
// 				fn.call(_this);
// 				return this;
// 			},
// 			"delay": function(fn, time) {
// 				var _this = this;
// 				setTimeout(function() {
// 					fn.call(_this);
// 				}, time);
// 				return this;
// 			},
// 			"do": function(fn) {
// 				fn.call(this);
// 				return this;
// 			},
// 			//==============转换=============
// 			"get": function(n) {
// 				n = n || 0;
// 				return this[n];
// 			},
// 			"toArray": function() {
// 				var temp = [];
// 				for (var i in this) {
// 					if (i >= 0) temp.push(this[i]);
// 				}
// 				return this.init.elements ? this.init.elements : temp;
// 			},
// 			"index": function(n) {
// 				var _this = this,
// 					index = 0,
// 					brothers = _this[0].parentNode.children;
// 				for (var i = 0; i < brothers.length; i++) { //遍历
// 					if (brothers[i] == this[0]) { //如果匹配到
// 						index = i;
// 						break;
// 					}
// 				}
// 				return index;
// 			}
// 		};
// 		TQuery.fn.init.prototype = TQuery.fn;
// 		//==============工具集=============
// 		//****检查类型****
// 		TQuery.type = function(obj) {
// 			var string = Object.prototype.toString.call(obj);
// 			return string.split(" ")[1].replace(/\]|\[/img, "").toString().toLowerCase();
// 		};
// 		TQuery.isNumber = function(obj) {
// 			if (typeof obj == "number" && !isNaN(obj)) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		};
// 		TQuery.isString = function(obj) {
// 			if (typeof obj == "string" || obj instanceof String) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		};
// 		TQuery.isFunction = function(obj) {
// 			if (typeof obj == "function" && obj instanceof Function && Object.prototype.toString.call(obj) === '[object Function]') {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		};
// 		TQuery.isArray = function(obj) {
// 			return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
// 		};
// 		TQuery.isObject = function(obj) {
// 			return Object.prototype.toString.call(obj) === '[object Object]';
// 		};
// 		TQuery.isDOM = function(obj) {
// 			//IE8下，一切皆为object
// 			return /html|document|element|object/img.test(Object.prototype.toString.call(obj).split(" ")[1]) && typeof obj.parentNode !=="undefined";
// 		};
// 		TQuery.isBoolean = function(obj){
// 			return (obj===true || obj===false) ? true : Object.prototype.toString.call(obj)==='[object Boolean]';
// 		};
// 		TQuery.isWindow = function(obj) {
// 			return (obj == obj.obj && typeof obj == "object") ? true : false;
// 		};
// 		TQuery.isUndefined = function(obj) {
// 			return Object.prototype.toString.call(obj) === '[object Undefined]';
// 		};
// 		//创新一个新的TQuery副本,可以自行修改方法，属性，而不影响原有的。
// 		TQuery.sub = function(selectors){
// 			//构造函数
// 			var newTQuery = function(selectors){
// 				return newTQuery.fn.init(selectors);
// 			};
// 			for( var prop in $ ){
// 				newTQuery[prop] = $[prop];
// 			}
// 			var prototype = {};
// 			for( var attr in $.prototype ){
// 				prototype[attr] = $.prototype[attr];
// 			}
// 			newTQuery.fn = newTQuery.prototype = prototype;
// 			newTQuery.fn.init.prototype = newTQuery.fn;
// 			return newTQuery;
// 		};
// 		//****AJAX****
// 		TQuery.ajax = function(options) {
// 			var oAjax,
// 				data = options.data ? options.data : "", //头部信息。必须是数组[key,value]
// 				context = options.context ? options.context : win, //执行上下文，this
// 				type = options.type ? options.type : 'GET', //请求方式
// 				async = options.async ? options.async : true; //默认异步加载
// 			if (win.XMLHttpRequest) { //IE7+，chrome，firefox，opara，safari
// 				oAjax = new XMLHttpRequest();
// 			} else {
// 				oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //IE5，IE6
// 			}

// 			if (options.beforeSend) options.beforeSend.call(context); //发送之前

// 			oAjax.setRequestHeader(data[0], data[1]); //设置头部信息
// 			oAjax.open(options.type, options.url, async);
// 			oAjax.send();
// 			oAjax.onreadystatechange = function() {
// 				if (oAjax.readyState == 4) {
// 					if (options.complete) options.complete.call(context, oAjax.status); //读取完成
// 					if (oAjax.status == 200) {
// 						if (options.success) options.success.call(context, oAjax.responseText); //读取成功
// 					} else {
// 						if (options.fail) options.fail.call(context, oAjax.status); //读取失败
// 					}
// 				}
// 			};
// 		};
// 		//****对象操作****
// 		//去重复
// 		TQuery.unique = function(obj) {
// 			var V = {
// 				"hash": {},
// 				"arr": [],
// 				"length": obj.length
// 			};
// 			for (var i = 0; i < V.length; i++) {
// 				if (typeof V.hash[obj[i]] == "undefined") {
// 					V.hash[obj[i]] = 1;
// 					V.arr.push(obj[i]);
// 				}
// 			}
// 			return V.arr;
// 		};

// 		//空函数，同jquery
// 		TQuery.noop = function() {
// 			return;
// 		};

// 		//去掉首尾空格，同jquery
// 		TQuery.trim = function(str) {
// 			var newStr = str.replace(/^\s*(\S*)\s*$/img, "$1");
// 			return newStr;
// 		};

// 		//返回当前时间，同jquery
// 		TQuery.now = function() {
// 			return (new Date()).getTime();
// 		};
// 		//刷新页面，同jquery
// 		TQuery.reload = function() {
// 			win.location.reload(true);
// 		};
// 		//将类数组转成数组
// 		TQuery.toArray = function(iArray) {
// 			var temp = [];
// 			for (var i = 0; i < iArray.length; i++) {
// 				temp.push(iArray[i]);
// 			}
// 			return temp;
// 		};
// 		//单词首字母大写
// 		TQuery.upper = function(str) {
// 			var reg = /\b(\w)|\s(\w)/g;
// 			str = str.toLowerCase();
// 			return str.replace(reg, function(m) {
// 				return m.toUpperCase();
// 			});
// 		};
// 		//打乱数组，同jquery
// 		TQuery.shuffleArray = function(arr) {
// 			var V = {
// 				"temp": [],
// 				"length": arr.length
// 			};
// 			for (var i = 0; i < V.length; i++) {
// 				V.temp.push(arr[i]);
// 			}
// 			V.temp.sort(function() {
// 				return Math.random() - 0.5;
// 			});
// 			return V.temp;
// 		};

// 		//获取对象的长度
// 		TQuery.sizeof = function(obj) {
// 			var V = {
// 				"temp": [],
// 				"length": 0
// 			};
// 			for (var attr in obj) {
// 				V.length++;
// 			}
// 			return V.length;
// 		};
// 		//获取浏览器信息
// 		var ua = navigator.userAgent;
// 		TQuery.browser = function() {
// 			var name = null;
// 			var vision = null;
// 			var content = null;
// 			//IE
// 			if( /msie|Trident/img.test(ua) ){
// 				name = "ie";
// 				content = ua.match( /MSIE\s\d+\.\d/img );
// 				if( content===null || typeof content === "undefined" ){
// 					vision = 11;//IE11
// 				}else{
// 					vision = content[0].split(" ")[1];
// 				}
// 			}
// 			//webkit
// 			else if(/webkit/img.test(ua)){
// 				name = "chrome";
// 				content = ua.match( /Chrome\/[\d\.]+/img );
// 				vision = content[0].split("/")[1];
// 			}
// 			//moz
// 			else if(/firefox/img.test(ua)){
// 				name = "firefox";
// 				content = ua.match( /Firefox\/[\d\.]+/img );
// 				vision = content[0].split("/")[1];
// 			}
// 			//opera
// 			else if(/opera|Presto/img.test(ua)){
// 				name = "opera";
// 				content = ua.match( /Opera\/[\d\.]+/img );
// 				vision = content[0].split("/")[1];
// 			}
// 			return {
// 				"name":name,
// 				"vision":vision
// 			};
// 		};
// 		TQuery.browser.webkit = function() {
// 			var content = ua.match( /Chrome\/[\d\.]+/img );
// 			if( /webkit/img.test(ua)===false ){
// 				return false;//不是webkit
// 			}else{
// 				if( content===null && typeof content =="undefined" ){
// 					return true;
// 				}
// 				return content[0].split("/")[1];//返回版本号
// 			}
// 		};
// 		TQuery.browser.msie = function() {
// 			var content = ua.match( /MSIE\s\d+\.\d/img );
// 			if( !/msie|Trident/img.test(ua) ){
// 				return false;//不是IE
// 			}else{
// 				if( content===null || typeof content === "undefined" ){
// 					return 11;//IE11
// 				}else{
// 					TQuery.browser.vision = content[0].split(" ")[1];
// 					return content[0].split(" ")[1];//IE11以下版本号

// 				}
// 			}
// 		};
// 		TQuery.browser.moz = function() {
// 			var content = ua.match( /Firefox\/[\d\.]+/img );
// 			if( !/firefox/img.test(ua) ){
// 				return false;//不是moz
// 			}else{
// 				if( content===null && typeof content =="undefined" ){
// 					return true;
// 				}
// 				return content[0].split("/")[1];//返回版本号
// 			}
// 		};
// 		TQuery.browser.opera = function() {
// 			var content = ua.match( /Opera\/[\d\.]+/img );
// 			if( !/Opera/img.test(ua) ){
// 				return false;//不是opera
// 			}else{
// 				if( content===null && typeof content =="undefined" ){
// 					return true;
// 				}
// 				return content[0].split("/")[1];//返回版本号
// 			}
// 		};
// 		//合并对象
// 		TQuery.merge = function() {
// 			//合并json
// 			if (TQuery.type.isObject(arguments[0])) {
// 				var object = new Object({});
// 				for (var i = 0; i < arguments.length; i++) {
// 					for (var key in arguments[i]) {
// 						if (typeof object[key] == "undefined") { //默认不覆盖
// 							object[key] = arguments[i][key];
// 						}
// 					}
// 				}
// 				return object;
// 			}
// 			//合并数组
// 			else if (TQuery.type.isArray(arguments[0])) {
// 				var newArray = [];
// 				for (var k = 0; k < arguments.length; k++) {
// 					newArray = newArray.concat(arguments[k]);
// 				}
// 				return newArray;
// 			}
// 		};

// 		//遍历对象
// 		TQuery.map = function(obj, fn) {
// 			var temps = [],
// 				returnValue;
// 			if (this.type.isArray(obj)) {

// 				for (var i = 0; i < obj.length; i++) {
// 					returnValue = fn.call(obj, obj[i], i);
// 					if (returnValue && returnValue !== "undefined" || returnValue !== null) {
// 						temps.push(returnValue);
// 					}
// 				}
// 			} else if (this.type.isObject(obj)) {
// 				for (var key in obj) {
// 					returnValue = fn.call(obj, key, obj[key]);
// 					if (returnValue && returnValue !== "undefined" || returnValue !== null) {
// 						temps.push(returnValue);
// 					}
// 				}
// 			}
// 			return temps;
// 		};
// 		//转换JSON
// 		TQuery.parseJSON = function(str, compatibility) {
// 			return (compatibility && compatibility === true) ? (new Function("return " + str))() : JSON.parse(str);
// 		};
// 		//插件入口
// 		TQuery.extend = TQuery.fn.extend = function(object) {
// 			for( var name in object ){
// 				if( TQuery.isUndefined(TQuery.prototype[name]) ){
// 					TQuery.fn[name] = TQuery.prototype[name] = object[name];
// 				}
// 			}
// 			return this;
// 		};

// 		return TQuery;
// 	})();


// 	//公共函数
// 	function addEvent(obj, type, fn) {
// 		var ev = null;
// 		return obj.addEventListener ?
// 			obj.addEventListener(type, function(e) {
// 				ev = win.event ? win.event : (e ? e : null);
// 				ev.target = ev.target || ev.srcElement;
// 				if (fn.call(obj, ev) === false) {
// 					return stop.call(ev);
// 				}
// 			}, false) :
// 			obj.attachEvent('on' + type, function(e) {
// 				ev = win.event ? win.event : (e ? e : null);
// 				ev.target = ev.target || ev.srcElement;
// 				ev.preventDefault = function(){
// 					if (typeof this.preventDefault !== "undefined") this.preventDefault(); //w3c标准
// 					if (typeof this.returnValue !== "undefined") this.returnValue = false; //阻止默认事件，针对老版本IE
// 				};
// 				if (fn.call(obj, ev) === false) {
// 					return stop.call(ev);
// 				}
// 			});
// 	}
// 	//禁止冒泡和默认事件。
// 	function stop() {
// 		if (typeof this.stopPropagation !== "undefined") this.stopPropagation(); //阻止冒泡，w3c标准
// 		if (typeof this.cancelBubble !== "undefined") this.cancelBubble = true; //阻止冒泡,ie,firefox
// 		if (typeof this.preventDefault !== "undefined") this.preventDefault(); //w3c标准
// 		if (typeof this.returnValue !== "undefined") this.returnValue = false; //阻止默认事件，针对老版本IE
// 		return false;
// 	}

// 	win.TQuery = win.$ = $;
// })(window, document, undefined);




// $.ajax({
//   type: "POST",
//   url: `https://chat.pipk.top/graphql`,
//   dataType: "json",
//   data:{
//     query: `{
//       search(query: "${name||'pengliheng'}", type: USER, first: 1) {
//         edges {
//           node {
//             ... on User {
//               avatarUrl login bio url createdAt name
//               contributedRepositories(first: 100,orderBy: {field: CREATED_AT, direction: DESC}) {
//                 totalCount
//                 nodes{
//                   nameWithOwner url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`,
//   },
//   success: function (data) {
//     console.log(data);
//   },
//   error: function (error) {
//     console.log(error);
//   }
// });

$('svg').css('background', 'red').click((e) => {
  $('li').each((e) => {
    console.log(e);
  });
});
