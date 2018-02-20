<template>
    <div class="wrap">
		<nav class="nav">
			<div class="header">
				<svg class="icon" viewBox="0 0 1024 1024">
					<path d="M163.36 197.184l735.52 0 0 91.968-735.52 0 0-91.968Z" p-id="997"></path>
					<path d="M163.36 461.504l735.52 0 0 91.936-735.52 0 0-91.936Z" p-id="998"></path>
					<path d="M163.36 725.824l735.52 0 0 91.936-735.52 0 0-91.936Z" p-id="999"></path>
				</svg>
				<span class="font">
					<font color="blue">G</font>
					<font color="red">o</font>
					<font color="yellow">o</font>
					<font color="blue">g</font>
					<font color="red">l</font>
					<font color="yellow">e</font>
				</span>
				<span class="right"></span>
			</div>
			<ul>
				<li>首页</li>
				<li>协同办公</li>
				<li>任务管理</li>
				<li>进销存</li>
				<li>财务管理</li>
				<li>会员管理</li>
				<li>市场管理</li>
				<li>人事管理</li>
			</ul>
		</nav>
		<router-view/>
        <footer>
            <p>create by peng</p>
        </footer>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang='less'>
html ,body{
	height: 100%;
	margin: 0;
	padding: 0;
}
ul,li{
	padding: 0;
	margin: 0;
}
.wrap {
	height: 100%;
	display: grid;
	grid-template-rows: 1fr 2fr;

	.nav {
		height: 128px;
		.header {
			width: 100%;
			height: 100%;
			display: inline-flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.font{
				.font-dpr(24px);
				letter-spacing: -0.1rem;
			}
			.icon {
				padding: 0.2rem;
				color: #757575;
				width: 1em; 
				height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
				.font-dpr(24px)
			}
		}
		ul {
			height: 100%;
			li {
				text-align: center;
				list-style: none;
				font-weight: bolder;
				.font-dpr(20px)
			}
		}
		.right {
			width: 1rem;
		}
	}

	footer {
		height: 2rem;
		grid-row: 6;
		display: grid;
		align-items: center;
		.font-dpr(20px);
		background: var(--dark);
		color: var(--light);
		text-align: center;

		p {
			margin: 0;
			padding: 0;
		}
	}
}
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {font-size: @font-size * 2}
    [data-dpr="3"] & {font-size: @font-size * 3}
}
</style>
