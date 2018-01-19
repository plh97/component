# css
## 《css世界》基于“流”的css布局
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
	彻底摆脱看不懂，难以控制的`float:left`.
	解决方案:
	- flex弹性布局 ,bootstrapt/antd 等优秀的库同样基于flex进行栅格布局.[can i use](https://caniuse.com/#search=flex)
	- grid网格布局，比flex更加优秀的布局.[can i use](https://caniuse.com/#search=grid)

### 布局
- flex 弹性布局 
	简单易用，适用于移动端不同浏览器宽度的一种方案
	```css
	container: {
		display: flex | inline-flex;
		flex-director: flex-direction: row | row-reverse | column | column-reverse;
		justify-content: flex-start | flex-end | center | space-between | space-around;
		align-items: flex-start | flex-end | center | baseline | stretch;
		flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
	}
	```
- grid 网格布局
	面向未来的css布局方案
	```css
	container: {
		display: grid | inline-grid | subgrid;
		grid-template-areas: 
			"1fr header . 1fr"
			"main main . sidebar"
			"footer footer footer footer";
		grid-gap: <line-size> <line-size>;
	}

### css工程化
- 工具
	- less sass(scss) stylus
		嵌套规则，颜色命名，
	- postcss
		- Autoprefixer 自动兼容性写法工具
		usage: 项目目录下新建`.postcssrc`文件
		```json
		{
			"plugins": {
				"autoprefixer": true,
			}
		}
		```
		- postcss-modules 自动隔离组件内的选择器
- 公共样式
	```css
	//公共颜色
	@education1: #38c78c;
	@lock: #5BB2EF;
	@daocheng-red: #ca1523;
	@btn-red: #E24647;

	//公共字体
	@font-face {
		font-family: "Reem Kufi";
		src: url("../../assets/font/a.woff");
	}
	
	//公共图标字体
	svg{
		&.icon{
			width: 1em; height: 1em;
			vertical-align: -0.15em;
			fill: currentColor;
			overflow: hidden;
		}
	}

	// 公共动画样式
	@keyframes shake {
		10%, 90% {
			-webkit-transform: translate3d(-1px, 0, 0);
			transform: translate3d(-1px, 0, 0);
		}
		20%, 80% {
			-webkit-transform: translate3d(2px, 0, 0);
			transform: translate3d(2px, 0, 0);
		}
		30%, 50%, 70% {
			-webkit-transform: translate3d(-4px, 0, 0);
			transform: translate3d(-4px, 0, 0);
		}
		40%, 60% {
			-webkit-transform: translate3d(4px, 0, 0);
			transform: translate3d(4px, 0, 0);
		}
	}
	```

# javascript 
- 传参
	```javascript
	// 以对象形式传参，可不分先后
	function a(args){
		const {
			name,
			bio
		} = args
		bio = (bio = undefined ? "" : bio);
		name = (name = undefined ? "" : name);
		return
	}
	a({name: 'peng',bio: 'code'})
	```
- callback hell es6帮你告别回调地狱
	```javascript
	//利用jq 先拿url_a数据，成功后再拿url_b数据，成功后再拿url_c数据
	$.ajax({
		url:url_a,
		data,
		successful: function(data_a){
			$.ajax({
				url:url_b,
				data:data_a,
				successful: function(data_b){
					$.ajax({
						url:url_c,
						data:data_b,
						successful: function(data_c){
							$(this).addClass(data_c);
						}
					})
				}
			})
		}
	})
	// 利用es7 async/await 异步加载
	let getData = e => {
		const {url,data} = e
		new Promise((resolve,reject)=>{
			fetch(url,{data})
				.then(res=>res.json)
				.then(json=>resolve(json))
		})
	}
	let data_a = await getData({url:url_a,data:data})
	let data_b = await getData({url:url_b,data:data_a})
	let data_c = await getData({url:url_c,data:data_b})
	await console.log(data_c)
	```
- addeventlistener事件绑定 与 debounce防抖 
	简单来说，当为浏览器body元素绑定scroll事件之后，监听屏幕滚动事件，调用函数，仅仅只是简单下移100px,浏览器却执行了上百次绑定的函数的调用，这种高消耗性能，在移动端则会出现卡屏现象，这个时候需要为绑定的函数添加
	`document.body.addEventListener(event,_debounce(handEvent,250),false)`
- jquery 替代方案
	```js
	let $ = selector => {
		return document.querySelector(selector)
	}
	$('div') work well
	```

# 自动化工具
- webpack3.10 健全，适合大型项目构建
- rollup 适合打包npm模块，react就是用它打包的。
- parcel 0配置，速度快，适合开发者环境下使用
- gulp 基于nodejs流，好像适合单个文件less=>css , coffeescript=>javascript转换,代码，图片压缩。

# 代码自动化检测
- jslint
- eslint

# 代码冲突，修改，合并
- vscode可以看，选择保存传入代码/本地代码，git status -s 同样可以查看冲突文件
	![](https://code.visualstudio.com/assets/docs/editor/versioncontrol/merge-conflict.png)

# react@16.2.0
- jsx语法 js里面写html标签必备语法。可视化，需要配合babel进行jsx语法转换
	```jsx
	const element = <h1>Hello, world!</h1>;
	```
- 渲染元素，通过render函数将jsx代码渲染到dom节点上面，
	```jsx
	const element = <h1>Hello, world</h1>;
	ReactDOM.render(
		element,
		document.getElementById('root')
	);
	```
	react 只会更新需要更新的dom节点
	```jsx
	function tick() {
		const element = (
			<div>
				<h1>Hello, world!</h1>
				<h2>
					It is{' '}
					{new Date().toLocaleTimeString()}.
				</h2>
			</div>
		);
		ReactDOM.render(
			element,
			document.getElementById('root')
		);
	}

	setInterval(tick, 1000);
	```
	![](https://reactjs.org/granular-dom-updates-c158617ed7cc0eac8f58330e49e48224.gif)

- Components与Props,翻译过来就是组件与属性，由于代码是英文构成， 为了便于理解，有必要知道英文
	```jsx
	function Welcome(props) {
		return <h1>Hello, {props.name}</h1>;
	}
	const element = <Welcome name="Sara" />;
	ReactDOM.render(
		element,
		document.getElementById('root')
	);
	```
	上面代码有助于理解父组件如何将数据传递给子组件，鉴于react是基于单向数据流设计的，所以之能将数据从上之下传递，
	```jsx
	function Welcome(props) {
		return <h1>Hello, {props.name}</h1>;
	}
	function App() {
		return (
			<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
			</div>
		);
	}
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
	```
	以上实现了代码的复用，props是不可修改的。
- state 以及 react的生命周期。
	```jsx
	class Clock extends React.Component {
		constructor(props) {
			super(props);
			this.state = {date: new Date()};
		}
		componentDidMount() {
			//某个时刻执行，忘了
		}
		componentWillUnmount() {
			//某个时刻执行，忘了
		}
		render() {
			return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
			);
		}
	}
	```
- 处理事件
	```jsx
	class Toggle extends React.Component {
		constructor(props) {
			super(props);
			this.state = {isToggleOn: true};

			// This binding is necessary to make `this` work in the callback
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			this.setState(prevState => ({
				isToggleOn: !prevState.isToggleOn
			}));
		}

		render() {
			return (
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
				);
			}
		}

		ReactDOM.render(
			<Toggle />,
			document.getElementById('root')
		);
	```
- 有条件的渲染某些元素
	```jsx
	function WarningBanner(props) {
		if (!props.warn) {
			return null;
		}
		return (
			<div className="warning">Warning!</div>
		);
	}
	class Page extends React.Component {
		constructor(props) {
			super(props);
			this.state = {showWarning: true}
			this.handleToggleClick = this.handleToggleClick.bind(this);
		}
		handleToggleClick() {
			this.setState(prevState => ({
			showWarning: !prevState.showWarning
			}));
		}
		render() {
			return (
				<div>
					<WarningBanner warn={this.state.showWarning} />
					<button onClick={this.handleToggleClick}>
						{this.state.showWarning ? 'Hide' : 'Show'}
					</button>
				</div>
			);
		}
	}
	ReactDOM.render(
		<Page />,
		document.getElementById('root')
	);
	```
- 状态提升 听名字挺高级，其实就一个作用，便于子组件调用父亲，

- react-router-dom  react的前台路由配套设施
- react-mobx,mobx   或者，react-redux,redux,,react状态管理，前面说了，react是基于单向数据流设计的，所以看下图形象说明所有问题
	![](https://cdn.css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)
	通过最顶点store保存所有数据，子组件若想改变父组件状态，只能通过修改store内部数据，然后数据从顶部层层流向底部直至父组件。
	有没有觉得react的单向数据流与angular和vue的双向绑定，在业务逻辑上面要清晰的多？看起来单向数据流多么麻烦，但是在浏览器内部仅仅只是一瞬间完成。

# 前端工程化构建
- 大型项目方案 react + webpack + react-router-dom + mobx + react-mobx
- 标配 react create-react-app 脚手架
- 标配 vue-cli 脚手架
- 屌丝版0配置  parcel + postcss + less + autoPrify
	parcel默认自带babel转换语法，所以不需要再配置。
