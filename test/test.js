// import 'babel-polyfill';
// package


// window.Component.pc.tree({
//   // ifselect: false,是否加载之前选好的，默认true
//   beforeSelect: ['法塞特家族酒庄品鉴酒仓库', '法塞特家族酒庄配件仓库'], // 之前选好的内容
//   select_model: 'checkbox', // 多选
//   // select_model: 'radio', // 单选
//   data: [
//     {
//       id: '01', name: '圣路易·丁酒庄', pId: '', sid: 499, type: '',
//     }, {
//       id: '0101', name: '圣路易·丁酒庄/酒庄（原酒）', pId: '01', sid: 500, type: '半成品',
//     }, {
//       id: '0102', name: '圣路易·丁酒庄/酒庄（成品）', pId: '01', sid: 501, type: '正品',
//     }, {
//       id: '0103', name: '圣路易·丁酒庄/酒庄（半成品）', pId: '01', sid: 502, type: '半成品',
//     }, {
//       id: '0104', name: '圣路易·丁酒庄/酒庄（配件）', pId: '01', sid: 503, type: '物料',
//     }, {
//       id: '0105', name: '圣路易·丁酒庄/酒庄（辅料）', pId: '01', sid: 504, type: '半成品',
//     }, {
//       id: '0106', name: '圣路易·丁酒庄/酒庄（包材）', pId: '01', sid: 505, type: '物料',
//     }, {
//       id: '02', name: '老酒庄', pId: '', sid: 506, type: '',
//     }, {
//       id: '0201', name: '老酒庄/老酒庄（原酒）', pId: '02', sid: 507, type: '半成品',
//     }, {
//       id: '0202', name: '老酒庄/老酒庄（成品）', pId: '02', sid: 508, type: '正品',
//     }, {
//       id: '0203', name: '老酒庄/老酒庄（半成品）', pId: '02', sid: 509, type: '半成品',
//     }, {
//       id: '0204', name: '老酒庄/老酒庄（配件）', pId: '02', sid: 510, type: '物料',
//     }, {
//       id: '0205', name: '老酒庄/老酒庄（辅料）', pId: '02', sid: 511, type: '物料',
//     }, {
//       id: '0206', name: '老酒庄/老酒庄（包材）', pId: '02', sid: 512, type: '物料',
//     }, {
//       id: '03', name: '781山洞', pId: '', sid: 513, type: '',
//     }, {
//       id: '0301', name: '781山洞/山洞（原酒）', pId: '03', sid: 514, type: '半成品',
//     }, {
//       id: '0302', name: '781山洞/山洞（成品）', pId: '03', sid: 515, type: '正品',
//     }, {
//       id: '0303', name: '781山洞/山洞（半成品）', pId: '03', sid: 516, type: '半成品',
//     }, {
//       id: '0304', name: '781山洞/山洞（配件）', pId: '03', sid: 517, type: '正品',
//     }, {
//       id: '0305', name: '781山洞/山洞（辅料）', pId: '03', sid: 518, type: '物料',
//     }, {
//       id: '0306', name: '781山洞/山洞（包材）', pId: '03', sid: 519, type: '物料',
//     }, {
//       id: '04', name: '银川商贸仓库', pId: '', sid: 520, type: '正品',
//     }, {
//       id: '0401', name: '银川商贸（原酒）', pId: '04', sid: 521, type: '正品',
//     }, {
//       id: '0402', name: '银川商贸（成品）', pId: '04', sid: 522, type: '赠品',
//     }, {
//       id: '0403', name: '银川商贸（半成品）', pId: '04', sid: 523, type: '半成品',
//     }, {
//       id: '0404', name: '银川商贸（物料）', pId: '04', sid: 524, type: '物料',
//     }, {
//       id: '0405', name: '银川商贸（配件）', pId: '04', sid: 525, type: '物料',
//     }, {
//       id: '0406', name: '银川商贸（包材）', pId: '04', sid: 526, type: '物料',
//     }, {
//       id: '05', name: '法塞特家族酒庄仓库', pId: '', sid: 527, type: '',
//     }, {
//       id: '0501', name: '法塞特家族酒庄正品仓库', pId: '05', sid: 528, type: '正品',
//     }, {
//       id: '0502', name: '法塞特家族酒庄业务用酒仓库', pId: '05', sid: 529, type: '赠品',
//     }, {
//       id: '0503', name: '法塞特家族酒庄品鉴酒仓库', pId: '05', sid: 530, type: '试用装',
//     }, {
//       id: '0504', name: '法塞特家族酒庄物料仓库', pId: '05', sid: 531, type: '物料',
//     }, {
//       id: '0505', name: '法塞特家族酒庄配件仓库', pId: '05', sid: 532, type: '配件',
//     }, {
//       id: '0506', name: '法塞特家族酒庄包材仓库', pId: '05', sid: 533, type: '包材',
//     }, {
//       id: '06', name: '法塞特（浙江）仓库', pId: '', sid: 534, type: '',
//     }, {
//       id: '0601', name: '法塞特（浙江）正品仓库', pId: '06', sid: 535, type: '正品',
//     }, {
//       id: '0602', name: '法塞特（浙江）赠品仓库', pId: '06', sid: 536, type: '赠品',
//     }, {
//       id: '0603', name: '法塞特（浙江）试用装仓库', pId: '06', sid: 537, type: '试用装',
//     }, {
//       id: '0604', name: '法塞特（浙江）物料仓库', pId: '06', sid: 538, type: '物料',
//     }, {
//       id: '0605', name: '法塞特（浙江）配件仓库', pId: '06', sid: 539, type: '配件',
//     }, {
//       id: '0606', name: '法塞特（浙江）包材仓库', pId: '06', sid: 540, type: '包材',
//     }, {
//       id: '07', name: '法塞特（福建）仓库', pId: '', sid: 542, type: '',
//     }, {
//       id: '0701', name: '法塞特（福建）正品仓库', pId: '07', sid: 543, type: '正品',
//     }, {
//       id: '0702', name: '法塞特（福建）赠品仓库', pId: '07', sid: 544, type: '赠品',
//     }, {
//       id: '0703', name: '法塞特（福建）试用装仓库', pId: '07', sid: 545, type: '试用装',
//     }, {
//       id: '0704', name: '法塞特（福建）物料仓库', pId: '07', sid: 546, type: '物料',
//     }, {
//       id: '0705', name: '法塞特（福建）配件仓库', pId: '07', sid: 547, type: '配件',
//     }, {
//       id: '0706', name: '法塞特（福建）包材仓库', pId: '07', sid: 548, type: '包材',
//     }, {
//       id: '001001014012', name: '银川品牌店', pId: '0010010140', sid: 605, type: '',
//     }, {
//       id: '00100101401201', name: '银川店/正品仓库', pId: '001001014012', sid: 606, type: '正品',
//     }, {
//       id: '00100101401202', name: '银川店/赠品仓库', pId: '001001014012', sid: 607, type: '赠品',
//     }, {
//       id: '00100101401203', name: '银川店/物料仓库', pId: '001001014012', sid: 608, type: '物料',
//     }, {
//       id: '00100101401204', name: '银川店/试用装仓库', pId: '001001014012', sid: 609, type: '试用装',
//     }, {
//       id: '00100101401205', name: '银川店/促销产品仓库', pId: '001001014012', sid: 610, type: '促销产品',
//     }, {
//       id: '00100101401206', name: '银川店/不良品仓库', pId: '001001014012', sid: 611, type: '不良品',
//     }, {
//       id: '00100101401207', name: '银川店/福利仓库', pId: '001001014012', sid: 612, type: '福利',
//     }, {
//       id: '00100101401208', name: '银川店/积分换礼仓库', pId: '001001014012', sid: 613, type: '积分换礼',
//     }, {
//       id: '0507', name: '上海酒庄门店正品库', pId: '05', sid: 614, type: '正品',
//     }, {
//       id: '0508', name: '上海酒庄门店业务用酒仓', pId: '05', sid: 615, type: '正品',
//     }, {
//       id: '0509', name: '上海酒庄门店品鉴酒仓', pId: '05', sid: 616, type: '正品',
//     }, {
//       id: '0510', name: '上海酒庄门店厨房用品仓', pId: '05', sid: 617, type: '正品',
//     }, {
//       id: '0511', name: '上海酒庄门店样酒仓', pId: '05', sid: 618, type: '正品',
//     }, {
//       id: '0512', name: '上海代保管仓', pId: '05', sid: 619, type: '正品',
//     }, {
//       id: '001001015', name: '门店测试', pId: '0010010', sid: 773, type: '',
//     }, {
//       id: '00100101501', name: '门店测试/正品仓库', pId: '001001015', sid: 774, type: '正品',
//     }, {
//       id: '00100101502', name: '门店测试/赠品仓库', pId: '001001015', sid: 775, type: '赠品',
//     }, {
//       id: '00100101503', name: '门店测试/物料仓库', pId: '001001015', sid: 776, type: '物料',
//     }, {
//       id: '00100101504', name: '门店测试/试用装仓库', pId: '001001015', sid: 777, type: '试用装',
//     }, {
//       id: '00100101505', name: '门店测试/促销产品仓库', pId: '001001015', sid: 778, type: '促销产品',
//     }, {
//       id: '00100101506', name: '门店测试/不良品仓库', pId: '001001015', sid: 779, type: '不良品',
//     }, {
//       id: '00100101507', name: '门店测试/福利仓库', pId: '001001015', sid: 780, type: '福利',
//     }, {
//       id: '00100101508', name: '门店测试/积分换礼仓库', pId: '001001015', sid: 781, type: '积分换礼',
//     }, {
//       id: '001001016', name: '测试2', pId: '0010010', sid: 782, type: '',
//     }, {
//       id: '00100101601', name: '测试2/正品仓库', pId: '001001016', sid: 783, type: '正品',
//     }, {
//       id: '00100101602', name: '测试2/赠品仓库', pId: '001001016', sid: 784, type: '赠品',
//     }, {
//       id: '00100101603', name: '测试2/物料仓库', pId: '001001016', sid: 785, type: '物料',
//     }, {
//       id: '00100101604', name: '测试2/试用装仓库', pId: '001001016', sid: 786, type: '试用装',
//     }, {
//       id: '00100101605', name: '测试2/促销产品仓库', pId: '001001016', sid: 787, type: '促销产品',
//     }, {
//       id: '00100101606', name: '测试2/不良品仓库', pId: '001001016', sid: 788, type: '不良品',
//     }, {
//       id: '00100101607', name: '测试2/福利仓库', pId: '001001016', sid: 789, type: '福利',
//     }, {
//       id: '00100101608', name: '测试2/积分换礼仓库', pId: '001001016', sid: 790, type: '积分换礼',
//     }, {
//       id: '001001017', name: '测试3', pId: '0010010', sid: 791, type: '',
//     }, {
//       id: '00100101701', name: '3测试/正品仓库', pId: '001001017', sid: 792, type: '正品',
//     }, {
//       id: '00100101702', name: '3测试/赠品仓库', pId: '001001017', sid: 793, type: '赠品',
//     }, {
//       id: '00100101703', name: '3测试/物料仓库', pId: '001001017', sid: 794, type: '物料',
//     }, {
//       id: '00100101704', name: '3测试/试用装仓库', pId: '001001017', sid: 795, type: '试用装',
//     }, {
//       id: '00100101705', name: '3测试/促销产品仓库', pId: '001001017', sid: 796, type: '促销产品',
//     }, {
//       id: '00100101706', name: '3测试/不良品仓库', pId: '001001017', sid: 797, type: '不良品',
//     }, {
//       id: '00100101707', name: '3测试/福利仓库', pId: '001001017', sid: 798, type: '福利',
//     }, {
//       id: '00100101708', name: '3测试/积分换礼仓库', pId: '001001017', sid: 799, type: '积分换礼',
//     }, {
//       id: '001001018', name: '测试456', pId: '0010010', sid: 800, type: '',
//     }, {
//       id: '00100101801', name: '测试456/正品仓库', pId: '001001018', sid: 801, type: '正品',
//     }, {
//       id: '00100101802', name: '测试456/赠品仓库', pId: '001001018', sid: 802, type: '赠品',
//     }, {
//       id: '00100101803', name: '测试456/物料仓库', pId: '001001018', sid: 803, type: '物料',
//     }, {
//       id: '00100101804', name: '测试456/试用装仓库', pId: '001001018', sid: 804, type: '试用装',
//     }, {
//       id: '00100101805', name: '测试456/促销产品仓库', pId: '001001018', sid: 805, type: '促销产品',
//     }, {
//       id: '00100101806', name: '测试456/不良品仓库', pId: '001001018', sid: 806, type: '不良品',
//     }, {
//       id: '00100101807', name: '测试456/福利仓库', pId: '001001018', sid: 807, type: '福利',
//     }, {
//       id: '00100101808', name: '测试456/积分换礼仓库', pId: '001001018', sid: 808, type: '积分换礼',
//     }],
//   next: doms => alert(JSON.stringify(doms)),
// });

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

// const myMammal = {
//   name: 'Herb the Mammal',
//   getName() {
//     return this.name;
//   },
//   says() {
//     return this.saying || '';
//   },
// };
// const myCat = Object.create(myMammal);
// myCat.name = 'mimi';
// myCat.saying = 'meow';
// myCat.purr = (n) => {
//   let i;
//   let s = '';
//   for (i = 0; i < n; i += 1) {
//     if (s) {
//       s += '-';
//     }
//     s += 'r';
//   }
//   return s;
// };
// myCat.getName = () => `${this.says} ${this.name} ${this.says}`;
// console.log(myCat, myMammal);


// const block = function () {
//   // 记住当前作用域。构造一个包含了当前作用域中所有对象的新作用域。

//   const oldScope = scope;
//   scope = Object.create(scope);

//   // 传递左花括号作为调用参数调用 advance

//   advance('(');

//   // 使用新的作用域进行分析。

//   parse(scope);

//   // 传递右花括号作为参数调用 advance 并抛弃新作用于，回复原来老的作用域。

//   advance('}');
//   scope = oldScope;
// };


// console.log(block());

// const mammal = function (spec) {
//   const that = {};

//   that.get_name = function () {
//     return spec.name;
//   };
//   that.says = function () {
//     return spec.saying || '';
//   };
//   return that;
// };

// const myMammal = mammal({ name: 'herb' });

