# css
### 《css世界》基于“流”的css布局
### 无宽度，无图片，无浮动
- #### 无宽度
	为何要无宽度？
	表现为“外部尺寸”的块级元素一旦设定了宽度，流动性就失去了。
	减少代码，减少维护，减少计算。
	解决方案:
	```css
	container: {
		width: 100%;
		max-width: 500px;
	}
	```
	```css
	container: {
		width: calc(100vw - 500px);
	}
	```
- #### 无图片
	解决方案：
	- svg
	- canvas   画，图片高清，且便于实现动画效果,
	- iconfont图标字体的引入。
- #### 无浮动
	彻底摆脱看不懂，难以控制的`float:left`
	解决方案:
	- flex弹性布局 ,bootstrapt/antd 等优秀的库同样基于flex进行栅格布局.[can i use](https://caniuse.com/#search=flex)
	- grid网格布局，比flex更加优秀的布局.[can i use](https://caniuse.com/#search=grid)
