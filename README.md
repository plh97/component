## usage
[效果预览](./test/index.html)

#### 如果是直接引入
```js
<script src="path/to/peng-component.js"></script>
```
##### 当你直接引入的时候，组件将作为全局变量直接可以获取，

- 用法
	```js
	Message('消息');
	// 或者
	Message({
		// 消息类型，默认info,可选error success warning
		type: "info",				
		// 间隔多久消失。默认3s
		time: 1000,					
		content: `弹出框内容！`
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
		content: `内容`,
		callback: function(){
			console.log("回调函数")
		}
	})
	ModalInfo({
		type: `error`, // info/success/error/warning/delete/confirm
		title: `标题`,
		content: `内容`,
		callback: function(){
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
- message 消息组件
	```js
	//简单用法
	message('你好吗~');
	//完整用法
	message({
		// 消息类型，默认info,可选error success warning
		type: "info",				
		// 间隔多久消失。默认3s
		time: 1000,					
		content: `弹出框内容！`
	})
	```
- modal / modalInfo 弹出框组件
	```js
	// 简洁用法
	modalInfo('说点什么吧！');
	// 完整用法
	modal({
		title: `标题`,
		content: `内容`,
		callback: function(){
			console.log("确认")
		}
	})
	modalInfo({
		type: `error`, // info/success/error/warning
		title: `标题`,
		content: `内容`,
		callback: function(){
			console.log("确认")
		}
	})
	```
- spin 加载中...组件
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