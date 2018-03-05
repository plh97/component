window.Component.pc.tree({
  // ifselect: false,是否加载之前选好的，默认true
  beforeSelect: ['法塞特家族酒庄品鉴酒仓库', '法塞特家族酒庄配件仓库'], // 之前选好的内容
  // select_model: 'checkbox', //多选
  select_model: 'radio', // 单选
  data: [{
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
  next: doms => console.log(doms),
});

// window.Component.pc.treeTable({
//   ifselect: true,
//   beforeSelect: ['法塞特银川商贸有限公司', '宁夏一带一路供应链股份有限公司'],
//   select_model: 'radio',
//   data: {
//     title: [
//       {
//         id: '001', name: '半成品', pid: '', sid: 200, code: '001',
//       },
//       {
//         id: '002', name: '包装材料', pid: '', sid: 201, code: '002',
//       },
//       {
//         id: '002001', name: '酒瓶', pid: '002', sid: 205, code: '002001',
//       },
//       {
//         id: '002002', name: '软木塞', pid: '002', sid: 206, code: '002002',
//       },
//       {
//         id: '002003', name: '酒标', pid: '002', sid: 207, code: '002003',
//       },
//       {
//         id: '002004', name: '胶帽', pid: '002', sid: 208, code: '002004',
//       },
//       {
//         id: '002005', name: '内盒', pid: '002', sid: 209, code: '002005',
//       },
//       {
//         id: '002006', name: '外箱', pid: '002', sid: 210, code: '002006',
//       },
//       {
//         id: '002007', name: '礼盒', pid: '002', sid: 211, code: '002007',
//       },
//       {
//         id: '002008', name: '3L橡木桶及配箱', pid: '002', sid: 212, code: '002008',
//       },
//       {
//         id: '002009', name: '5L橡木桶及配箱', pid: '002', sid: 213, code: '002009',
//       },
//       {
//         id: '002010', name: '套盒不干胶贴', pid: '002', sid: 214, code: '002010',
//       },
//       {
//         id: '002011', name: '外箱不干胶贴', pid: '002', sid: 215, code: '002011',
//       },
//       {
//         id: '002012', name: '其他包装类材料', pid: '002', sid: 216, code: '002012',
//       },
//       {
//         id: '004', name: '辅料', pid: '', sid: 203, code: '004',
//       },
//       {
//         id: '005', name: '配件', pid: '', sid: 204, code: '005',
//       },
//       {
//         id: '005001', name: '酒具', pid: '005', sid: 224, code: '005001',
//       },
//       {
//         id: '006', name: '原酒', pid: '', sid: 217, code: '006',
//       },
//       {
//         id: '007', name: '饮料', pid: '', sid: 218, code: '007',
//       },
//       {
//         id: '008', name: '物料', pid: '', sid: 219, code: '008',
//       },
//       {
//         id: '009', name: '白酒', pid: '', sid: 220, code: '009',
//       },
//       {
//         id: '009001', name: '五粮液', pid: '009', sid: 221, code: '009001',
//       },
//       {
//         id: '009002', name: '剑南春', pid: '009', sid: 223, code: '009002',
//       },
//       {
//         id: '010', name: '葡萄酒', pid: '', sid: 222, code: '010',
//       },
//       {
//         id: '010001', name: '贺兰鹰', pid: '010', sid: 331, code: '010001', brand_id: 21, brand_name: '贺兰鹰',
//       },
//       {
//         id: '010002', name: '法塞特', pid: '010', sid: 332, code: '010002', brand_id: 19, brand_name: '法塞特',
//       },
//       {
//         id: '010010', name: '萌次元', pid: '010', sid: 342, code: '010010', brand_id: 29, brand_name: '萌次元',
//       },
//       {
//         id: '010200', name: '超值精选', pid: '010', sid: 334, code: '010200', brand_id: 0, brand_name: '',
//       },
//       {
//         id: '010300', name: '组合推荐', pid: '010', sid: 336, code: '010300', brand_id: 0, brand_name: '',
//       },
//       {
//         id: '010500', name: '定制酒', pid: '010', sid: 335, code: '010500', brand_id: 0, brand_name: '',
//       },
//       {
//         id: '010501001', name: '干红葡萄酒', pid: '010501', sid: 341, code: '010501001', brand_id: 29, brand_name: '萌次元',
//       },
//       {
//         id: '011', name: '食品', pid: '', sid: 225, code: '011',
//       },
//       {
//         id: '011001', name: '时令食品', pid: '011', sid: 227, code: '011001',
//       },
//       {
//         id: '012', name: '样品酒', pid: '', sid: 337, code: '012', brand_id: 0, brand_name: '',
//       },
//       {
//         id: '012001', name: '贺兰鹰样品酒', pid: '012', sid: 338, code: '012001', brand_id: 21, brand_name: '贺兰鹰',
//       },
//       {
//         id: '012002', name: '法塞特样品酒', pid: '012', sid: 339, code: '012002', brand_id: 19, brand_name: '法塞特',
//       },
//     ],
//     content: [{
//       id: 13632, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65858, goods_code: '002001010', goods_name: '红酒瓶模型', goods_type_id: 205, goods_type_name: '酒瓶', standard_name: '2500mm*61300mm', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '', produce_area_name: '', stock_number: 2, avg_cost: 2200, entry_amount: 4400, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 6200, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 2200, use_number: 2, name: '红酒瓶模型', goods_image: '', retail_price: 6200,
//     }, {
//       id: 13637, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65837, goods_code: '007001', goods_name: '桑果汁', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*12*300ml', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '瓶', produce_area_name: '浙江杭州萧山', stock_number: 60, avg_cost: 4, entry_amount: 240, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6932614911417', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 4, use_number: 60, name: '桑果汁', goods_image: '', retail_price: 129,
//     }, {
//       id: 13638, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65838, goods_code: '007002', goods_name: '原味乳酸菌', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*15*300ml', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '瓶', produce_area_name: '浙江杭州萧山', stock_number: 75, avg_cost: 4, entry_amount: 300, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6932614911370', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 4, use_number: 75, name: '原味乳酸菌', goods_image: '', retail_price: 129,
//     }, {
//       id: 13641, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65839, goods_code: '007003', goods_name: '红枣乳酸菌', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*15*300ml', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '瓶', produce_area_name: '浙江杭州萧山', stock_number: 75, avg_cost: 4, entry_amount: 300, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6932614911394', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 4, use_number: 75, name: '红枣乳酸菌', goods_image: '', retail_price: 129,
//     }, {
//       id: 13952, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65846, goods_code: '007004', goods_name: '乔戈里冰川  330ml', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*24*330ml', model_name: '', brand_id: 19, brand_name: '乔戈里冰川', unit_name: '瓶', produce_area_name: '新疆叶城县', stock_number: 240, avg_cost: 2.17, entry_amount: 520.8, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-28 13:39:58', batch_no: '001001014201712280001', business_type: '采购', business_id: '001001014RC201712280002', shelf_num: '', td_code: '6970060460011', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 280, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 2.17, use_number: 214, name: '乔戈里冰川  330ml', goods_image: '', retail_price: 280,
//     }, {
//       id: 13951, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65847, goods_code: '007005', goods_name: '乔戈里冰川  10L', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*2*10L', model_name: '', brand_id: 19, brand_name: '乔戈里冰川', unit_name: '瓶', produce_area_name: '新疆叶城县', stock_number: 20, avg_cost: 50, entry_amount: 1000, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-28 13:39:58', batch_no: '001001014201712280001', business_type: '采购', business_id: '001001014RC201712280002', shelf_num: '', td_code: '6970060460141', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 280, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 50, use_number: 16, name: '乔戈里冰川  10L', goods_image: '', retail_price: 280,
//     }, {
//       id: 16258, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66235, goods_code: '007006', goods_name: '北大荒桑果汁', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*15*300ml', model_name: '', brand_id: 39, brand_name: '北大荒', unit_name: '瓶', produce_area_name: '', stock_number: 75, avg_cost: 0, entry_amount: 0, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2018-01-31 12:27:30', batch_no: '001001014201801310001', business_type: '采购', business_id: '001001014RC201801310001', shelf_num: '', td_code: '6932614911776', supplier_id: 'f63ed4fb5ea3d1d4015ea44d7274010c', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2018', business_month: '1', sale_price: 0, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 0, use_number: 71, name: '北大荒桑果汁', goods_image: '', retail_price: 0,
//     }, {
//       id: 16259, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66236, goods_code: '007007', goods_name: '北大荒原味乳酸菌', goods_type_id: 218, goods_type_name: '饮料', standard_name: '1*15*300ml', model_name: '', brand_id: 39, brand_name: '北大荒', unit_name: '瓶', produce_area_name: '', stock_number: 75, avg_cost: 0, entry_amount: 0, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2018-01-31 12:27:30', batch_no: '001001014201801310001', business_type: '采购', business_id: '001001014RC201801310001', shelf_num: '', td_code: '6932614911813', supplier_id: 'f63ed4fb5ea3d1d4015ea44d7274010c', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2018', business_month: '1', sale_price: 0, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 0, use_number: 74, name: '北大荒原味乳酸菌', goods_image: '', retail_price: 0,
//     }, {
//       id: 13642, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65835, goods_code: '008001', goods_name: '打火机', goods_type_id: 219, goods_type_name: '物料', standard_name: '1*40*50', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '个', produce_area_name: '', stock_number: 500, avg_cost: 0.9, entry_amount: 450, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 0.9, use_number: 500, name: '打火机', goods_image: '', retail_price: 129,
//     }, {
//       id: 13635, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65836, goods_code: '008002', goods_name: '波尔多菱形红酒杯（650ml）', goods_type_id: 219, goods_type_name: '物料', standard_name: '1*12*2', model_name: '', brand_id: 999, brand_name: '无品牌', unit_name: '个', produce_area_name: '', stock_number: 288, avg_cost: 14.5, entry_amount: 4176, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 14.5, use_number: 288, name: '波尔多菱形红酒杯（650ml）', goods_image: '', retail_price: 129,
//     }, {
//       id: 16257, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66237, goods_code: '008042', goods_name: 'U型无铅水晶醒酒器1200ml', goods_type_id: 219, goods_type_name: '物料', standard_name: '1*10', model_name: '', brand_id: 19, brand_name: '', unit_name: '个', produce_area_name: '', stock_number: 20, avg_cost: 0, entry_amount: 0, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2018-01-31 12:27:30', batch_no: '001001014201801310001', business_type: '采购', business_id: '001001014RC201801310001', shelf_num: '', td_code: '', supplier_id: 'f63ed4fb5ea3d1d4015ea44d7274010c', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2018', business_month: '1', sale_price: 0, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 0, use_number: 19, name: 'U型无铅水晶醒酒器1200ml', goods_image: '', retail_price: 0,
//     }, {
//       id: 13953, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65841, goods_code: '009001002', goods_name: '52°江南古坊 248ML', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '1*12*248ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '四川宜宾五粮液酒类销售有限公司', stock_number: 144, avg_cost: 30, entry_amount: 4320, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-28 13:39:58', batch_no: '001001014201712280001', business_type: '采购', business_id: '001001014RC201712280002', shelf_num: '', td_code: '6901382019519', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 129, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 30, use_number: 242, name: '52°江南古坊 248ML', goods_image: '', retail_price: 129,
//     }, {
//       id: 13954, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65848, goods_code: '009001003', goods_name: '五粮液39°限量', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '6*750ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '四川宜宾', stock_number: 9000, avg_cost: 500, entry_amount: 4500000, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-28 13:34:40', batch_no: '001001014201712280002', business_type: '采购', business_id: '001001014RC201712280001', shelf_num: '', td_code: '690138266395', supplier_id: '90a1b87797e94758bfdc91ec88fdf30c', supplier_name: '法塞特（福建）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 280, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 500, use_number: 9000, name: '五粮液39°限量', goods_image: '', retail_price: 280,
//     }, {
//       id: 13640, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65856, goods_code: '009001004', goods_name: '70°五粮液封坛酒（红釉）', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '1*1*6000ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '', stock_number: 1, avg_cost: 88000, entry_amount: 88000, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6901382938148', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 188000, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 88000, use_number: 1, name: '70°五粮液封坛酒（红釉）', goods_image: '', retail_price: 188000,
//     }, {
//       id: 13633, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65859, goods_code: '009001005', goods_name: '72°五粮液原度酒', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '1*6*500ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '', stock_number: 2, avg_cost: 2580, entry_amount: 5160, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6901382027866', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 6580, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 2580, use_number: 2, name: '72°五粮液原度酒', goods_image: 'userfiles/upload/2017-11-27/30494/d09f4b531f044007a7b8b897e3f40031.jpg', retail_price: 6580,
//     }, {
//       id: 13639, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65860, goods_code: '009001006', goods_name: '56°五粮液老酒（单瓶带杯）', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '1*6*500ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '', stock_number: 2, avg_cost: 1980, entry_amount: 3960, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6901382034598', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 6980, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 1980, use_number: 2, name: '56°五粮液老酒（单瓶带杯）', goods_image: '', retail_price: 6980,
//     }, {
//       id: 13634, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65861, goods_code: '009001007', goods_name: '56°五粮液老酒（复合礼盒）', goods_type_id: 221, goods_type_name: '五粮液', standard_name: '1*4*850ml', model_name: '', brand_id: 18, brand_name: '五粮液', unit_name: '瓶', produce_area_name: '', stock_number: 2, avg_cost: 3980, entry_amount: 7960, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '6901382034604', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 9980, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 3980, use_number: 2, name: '56°五粮液老酒（复合礼盒）', goods_image: '', retail_price: 9980,
//     }, {
//       id: 13636, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 65857, goods_code: '009002001', goods_name: '52°剑南春（古窖陈酿）', goods_type_id: 223, goods_type_name: '剑南春', standard_name: '1*2*3000ml', model_name: '', brand_id: 20, brand_name: '剑南春', unit_name: '瓶', produce_area_name: '', stock_number: 1, avg_cost: 8900, entry_amount: 8900, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 16:22:53', batch_no: '001001014201712270005', business_type: '采购', business_id: '001001014RC201712270006', shelf_num: '', td_code: '', supplier_id: '42bfc2195d944b0ab79905991475d373', supplier_name: '法塞特（浙江）供应链管理有限公司', business_year: '2017', business_month: '12', sale_price: 18900, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 8900, use_number: 1, name: '52°剑南春（古窖陈酿）', goods_image: '', retail_price: 18900,
//     }, {
//       id: 13622, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66133, goods_code: '010001001', goods_name: '贺兰鹰赤霞珠干红葡萄酒', goods_type_id: 331, goods_type_name: '贺兰鹰', standard_name: '750ml', model_name: '', brand_id: 21, brand_name: '贺兰鹰', unit_name: '瓶', produce_area_name: '中国', stock_number: 10260, avg_cost: 16, entry_amount: 164160, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 15:55:29', batch_no: '001001014201712270004', business_type: '采购', business_id: '001001014RC201712270005', shelf_num: '', td_code: '6959901517190', supplier_id: 'ff8080816082dae40160960dd02e0451', supplier_name: '宁夏圣路易.丁葡萄酒庄（有限公司）', business_year: '2017', business_month: '12', sale_price: 158, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 16, use_number: 10253, name: '贺兰鹰赤霞珠干红葡萄酒', goods_image: 'userfiles/upload/2017-11-28/30494/a44967029a544aa98ef76d906709a8dd.jpg', retail_price: 158,
//     }, {
//       id: 13626, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66134, goods_code: '010001002', goods_name: '贺兰鹰2016霞多丽干白葡萄酒', goods_type_id: 331, goods_type_name: '贺兰鹰', standard_name: '750ml', model_name: '', brand_id: 21, brand_name: '贺兰鹰', unit_name: '瓶', produce_area_name: '', stock_number: 10260, avg_cost: 16, entry_amount: 164160, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 15:55:29', batch_no: '001001014201712270004', business_type: '采购', business_id: '001001014RC201712270005', shelf_num: '', td_code: '6959901517169', supplier_id: 'ff8080816082dae40160960dd02e0451', supplier_name: '宁夏圣路易.丁葡萄酒庄（有限公司）', business_year: '2017', business_month: '12', sale_price: 158, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 16, use_number: 9803, name: '贺兰鹰2016霞多丽干白葡萄酒', goods_image: 'userfiles/upload/2017-11-28/30494/5e2b996d2ef947d68847b492280fc7b8.jpg', retail_price: 158,
//     }, {
//       id: 13631, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66135, goods_code: '010001003', goods_name: '贺兰鹰2012蛇龙珠干红葡萄酒', goods_type_id: 331, goods_type_name: '贺兰鹰', standard_name: '750ml', model_name: '', brand_id: 21, brand_name: '贺兰鹰', unit_name: '瓶', produce_area_name: '', stock_number: 7260, avg_cost: 16, entry_amount: 116160, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 15:55:29', batch_no: '001001014201712270004', business_type: '采购', business_id: '001001014RC201712270005', shelf_num: '', td_code: '6959901517176', supplier_id: 'ff8080816082dae40160960dd02e0451', supplier_name: '宁夏圣路易.丁葡萄酒庄（有限公司）', business_year: '2017', business_month: '12', sale_price: 258, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 16, use_number: 7258, name: '贺兰鹰2012蛇龙珠干红葡萄酒', goods_image: 'userfiles/upload/2017-11-28/30494/d9e3bd2c77a345f790eab8e64ab15b97.jpg', retail_price: 258,
//     }, {
//       id: 13625, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66136, goods_code: '010001004', goods_name: '贺兰鹰美乐干红葡萄酒', goods_type_id: 331, goods_type_name: '贺兰鹰', standard_name: '750ml', model_name: '', brand_id: 21, brand_name: '贺兰鹰', unit_name: '瓶', produce_area_name: '', stock_number: 30000, avg_cost: 14, entry_amount: 420000, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 15:55:29', batch_no: '001001014201712270004', business_type: '采购', business_id: '001001014RC201712270005', shelf_num: '', td_code: '6959901517183', supplier_id: 'ff8080816082dae40160960dd02e0451', supplier_name: '宁夏圣路易.丁葡萄酒庄（有限公司）', business_year: '2017', business_month: '12', sale_price: 88, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 14, use_number: 29740, name: '贺兰鹰美乐干红葡萄酒', goods_image: 'userfiles/upload/2017-11-28/30494/28cd1a0e94484065ad1780427c71f620.jpg', retail_price: 88,
//     }, {
//       id: 13602, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66138, goods_code: '010002002', goods_name: '法塞特2012赤霞珠干红', goods_type_id: 332, goods_type_name: '法塞特', standard_name: '750ml', model_name: '', brand_id: 19, brand_name: '法塞特', unit_name: '瓶', produce_area_name: '', stock_number: 42, avg_cost: 70, entry_amount: 2940, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 14:43:03', batch_no: '001001014201712270001', business_type: '采购', business_id: '001001014RC201712270001', shelf_num: '', td_code: '6959901515103', supplier_id: 'ff8080816010d06e0160151416870111', supplier_name: '宁夏一带一路供应链股份有限公司', business_year: '2017', business_month: '12', sale_price: 268, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 70, use_number: 1131, name: '法塞特2012赤霞珠干红', goods_image: 'userfiles/upload/2017-11-30/30494/38ed2559bae945c4889d4b66ae6c3f5f.jpg', retail_price: 268,
//     }, {
//       id: 13605, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66140, goods_code: '010002004', goods_name: '法塞特2010晚采赤霞珠', goods_type_id: 332, goods_type_name: '法塞特', standard_name: '750ml', model_name: '', brand_id: 19, brand_name: '法塞特', unit_name: '瓶', produce_area_name: '', stock_number: 252, avg_cost: 239, entry_amount: 60228, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 14:43:03', batch_no: '001001014201712270001', business_type: '采购', business_id: '001001014RC201712270001', shelf_num: '', td_code: '6959901513253', supplier_id: 'ff8080816010d06e0160151416870111', supplier_name: '宁夏一带一路供应链股份有限公司', business_year: '2017', business_month: '12', sale_price: 980, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 239, use_number: 302, name: '法塞特2010晚采赤霞珠', goods_image: 'userfiles/upload/2017-11-30/30494/49a5a536b68b449997968f017c30828d.jpg', retail_price: 980,
//     }, {
//       id: 13604, warehouse_id: 528, warehouse_name: '法塞特家族酒庄正品仓库', warehouse_type: '正品', goods_id: 66141, goods_code: '010002005', goods_name: '法塞特2011霜后赤霞珠', goods_type_id: 332, goods_type_name: '法塞特', standard_name: '750ml', model_name: '', brand_id: 19, brand_name: '法塞特', unit_name: '瓶', produce_area_name: '', stock_number: 60, avg_cost: 239, entry_amount: 14340, assist_unit_number: '', corp_code: '001001014', corp_name: '法塞特酒业（上海）', create_user_id: 30158, create_user_name: '裘佳', create_date: '2017-12-27 14:43:03', batch_no: '001001014201712270001', business_type: '采购', business_id: '001001014RC201712270001', shelf_num: '', td_code: '6959901513246', supplier_id: 'ff8080816010d06e0160151416870111', supplier_name: '宁夏一带一路供应链股份有限公司', business_year: '2017', business_month: '12', sale_price: 980, dept_id: 'c7f76ff996244d08907911cba86597fc', dept_code: '001001014', dept_name: '法塞特酒业（上海）', avg_price: 239, use_number: 781, name: '法塞特2011霜后赤霞珠', goods_image: 'userfiles/upload/2017-11-30/30494/cdc85cd3058841288713aaf0b0fc9211.jpg', retail_price: 980,
//     }],
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
