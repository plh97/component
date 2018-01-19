## usage


[效果预览](./test/index.html)

- message 组件弹出框
	```js
	message({
		// 消息类型，默认info,可选error success warning
		type: "info",				
		// 间隔多久消失。默认3s
		time: 1000,					
		content: `弹出框内容！`
	})
	```
- modal
	```js
	Modal({
		title: `标题`,
		content: `内容`,
		callback: ()=>console.log('回调函数!')
	})
	```