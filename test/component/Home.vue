<template>
	<div class="home">
		<nav>
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
	</div>
</template>

<style lang="less">
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {
        font-size: @font-size * 2;
    }

    [data-dpr="3"] & {
        font-size: @font-size * 3;
    }
}
.home {
	text-align: center;
	height: 100%;
	display: grid;
	grid-gap: 0.5rem;
	grid-template-rows: 1fr 1rem 0.7rem 0.7rem 1rem 2fr;
	align-items: center;
	.title {
		grid-row: 2;
	}
	.userName {
		grid-row: 3;
		margin: 0 0.5rem;
		align-items: flex-end;
		display: grid;
		align-items: stretch;
		grid-template-columns: 2rem 1fr;
		.font-dpr(18px);
		input {
			border-radius: 0.1rem;
			padding: 0.1rem;
		}
	}
	.passWord {
		margin: 0 0.5rem;
		grid-row: 4;
		align-items: flex-start;
		display: grid;
		align-items: stretch;
		grid-template-columns: 2rem 1fr;
		.font-dpr(18px);
		input {
			border-radius: 0.1rem;
			padding: 0.1rem;
		}
	}
	.group-btn {
		margin: 0 0.5rem;
		grid-row: 5;
		display: grid;
		grid-gap: 0.5rem;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1,1rem);
		align-content: space-around;
		justify-content: space-between;

		a {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			.font-dpr(24px);
			box-sizing:border-box;
			color: var(--dark);
			text-decoration: none;
			box-shadow: var(--shadow);
			background-color: var(--primary);
		}
	}
	
}
</style>
