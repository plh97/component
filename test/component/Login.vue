<template>
	<div class="login">
		<h1 class="title">登录</h1>
		<div class="userName">
			用户名：
			<input type="text"/>
		</div>
		<div class="passWord">
			密码：
			<input type="password"/>
		</div>
        <div class="group-btn">
			<router-link v-bind:to="'/login'">登录</router-link>
			<router-link v-bind:to="'/register'">注册</router-link>
        </div>
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
.login {
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
