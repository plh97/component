## usage
[效果预览](./test/index.html)

#### 如果是直接引入
```html
<script src="path/to/component.js"></script>
```
##### 当你直接引入的时候，组件将作为全局变量直接可以获取，

- ### 用法
	```js
	Message('消息');
	// 或者
	Message({
		// 消息类型，默认info,可选error success warning
		type: "info",				
		// 间隔多久消失。默认3s
		time: 1000,					
		content: `弹出框内容！`,
		next: function(){
			// to do something
		}
	})
	```
	```js
	//如果不输入参数，默认给全屏加载中...
	Spin();
	// 输入同样参数调用2次取消加载中..
	Spin();

	// 给某个dom元素添加加载中...的样式
	Spin({
		dom:$('.container')
	})
	```
	```js
	Modal({
		title: `标题`,
		content: `
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		`,
		next: function(){
			console.log("回调函数")
		}
	})
	ModalInfo({
		type: `error`, // info/success/error/warning/delete/confirm
		title: `标题`,
		content: `
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		`,
		next: function(){
			console.log("确认")
		}
	})
	```
	### info
	![](http://oy82lbvct.bkt.clouddn.com/info.png)
	### success
	![](http://oy82lbvct.bkt.clouddn.com/success.png)
	### error
	![](http://oy82lbvct.bkt.clouddn.com/error.png)
	### delete
	![](http://oy82lbvct.bkt.clouddn.com/delete.png)
	### confirm
	![](http://oy82lbvct.bkt.clouddn.com/confirm.png)

	---
#### 如果你用npm，就可以用包的形式将组件引入
`yarn add peng-component`
或者
`npm install peng-component -s`
```js
import {pc,mobile} from "peng-component";
```
接下来你打印看一下，pc端所有组件都在里面
```js
console.log(pc);
var message = pc.message;
var modalInfo = pc.modalInfo;
var spin = pc.spin;
```
用法
- ### message 消息组件
	```js
	//简单用法
	message('你好吗~');
	//完整用法
	message({
		// 消息类型，默认info,可选error success warning
		type: "info",				
		// 间隔多久消失。默认3s
		time: 1000,					
		content: `弹出框内容！`,
		next: function(){
			// to do something
		}
	})
	```
- ### modal / modalInfo 弹出框组件
	```js
	// 简洁用法
	modalInfo('说点什么吧！');
	// 完整用法
	modal({
		title: `标题`,
		content: `
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		`,
		next: function(){
			console.log("确认")
		}
	})
	modalInfo({
		type: `error`, // info/success/error/warning
		title: `标题`,
		content: `
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		`,
		next: function(){
			console.log("确认")
		}
	})
	```
- ### spin 加载中...组件
	```js
	//如果不输入参数，默认给全屏加载中...
	spin();
	// 输入同样参数调用2次取消加载中..
	spin();

	// 给某个dom元素添加加载中...的样式
	spin({
		dom:document.querySelector('.container')
	})
	// 再次调用，取消加载中...
	spin({
		dom:document.querySelector('.container')
	})
	```
- ### tree 树形图组件
	```js
	tree({
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
		next: ()=>{
			let doms = document.querySelectorAll('.component-tree .active');
			doms = addArrProp(doms)
			doms = doms.map(dom=>dom.parentElement.querySelector('.text-container').textContent)
			doms = doms.join('，')
			console.log(doms);
		}
	})
	```
- ### table 表格组件
	```js
	table({
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
		next: function(){
			let doms = document.querySelectorAll('.thr-table .tb-container input');
			doms = addArrProp(doms)
			doms = doms.map(dom=>dom.parentElement.querySelector('.name').textContent)
			doms = doms.join('，')
			console.log(doms);
		}
	})
	```
- ### treetable 树表组件
	```js
	treeTable({
		ifselect: true,
		beforeSelect:["法塞特银川商贸有限公司","宁夏一带一路供应链股份有限公司"],
		select_model:"checkbox",
		data: {
			title:[
				{id: "1", name: "供应商"},
				{id: "2", name: "客户"},
				{id: "3", name: "供应商|客户"},
				{id: "6", name: "快递公司"},
				{id: "4", name: "经销商"},
				{id: "5", name: "门店"}
			],
			content:[
				{"id":"01d167cc9e864b038a3b9b26737d7e2d","parent_ids":"0","name":"111","sort":30,"code":"001001014013","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11521","edu_user_name":"111"},
				{"id":"32f08cdc623f41f99c614fe1b88c1c60","parent_ids":"0","name":"法塞特银川商贸有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"5","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","update_by":"30900","update_date":1514874616000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11406","edu_user_name":"银川品牌店"},
				{"id":"42bfc2195d944b0ab79905991475d373","parent_ids":"0","name":"法塞特（浙江）供应链管理有限公司","sort":30,"code":"001001014005","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"10445","edu_user_name":"法塞特（浙江）供应链管理有限公司"},
				{"id":"90a1b87797e94758bfdc91ec88fdf30c","parent_ids":"0","name":"法塞特（福建）供应链管理有限公司","sort":30,"code":"001001014005001","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014005","corp_name":"法塞特（浙江）供应链管理有限公司","dept_id":"e0e9b3f94f264c8bb979618f44b2e3cf","dept_code":"001001014005","dept_name":"法塞特（浙江）供应链管理有限公司","edu_user_id":"10446","edu_user_name":"法塞特（福建）供应链管理有限公司"},
				{"id":"ff808081600fcb5f016010b0a87e00d2","parent_ids":"0","name":"宁夏圣路易.丁酒庄销售有限公司","sort":30,"area_id":"76401","code":"001001014011","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512108501000,"update_by":"30155","update_date":1514869647000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"圣路易&middot;丁酒庄销售有限公司"},
				{"id":"ff8080816010d06e0160151416870111","parent_ids":"0","name":"宁夏一带一路供应链股份有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512182126000,"update_by":"30158","update_date":1512182126000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏一带一路供应链股份有限公司"},
				{"id":"ff8080816082dae40160960dd02e0451","parent_ids":"0","name":"宁夏圣路易.丁葡萄酒庄（有限公司）","sort":30,"area_id":"76401","code":"","type":"2","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1514345975000,"update_by":"30158","update_date":1514345975000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏圣路易.丁葡萄酒庄（有限公司）"},
				{"id":"ff808081609b096a01609b3e493c0033","parent_ids":"0","name":"顺丰快递","sort":30,"area_id":"11101","code":"","type":"6","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30150","create_date":1514433038000,"update_by":"30150","update_date":1514433038000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"顺丰快递"}
			]
		},
		next: ()=>{
			let doms = document.querySelectorAll('.thr-table .tb-container input');
			doms = addArrProp(doms)
			doms = doms.map(dom=>dom.parentElement.querySelector('.name').textContent)
			doms = doms.join('，')
			console.log(doms);
		}
	})
	```