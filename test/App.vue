<template>
    <div class="wrap">
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
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;

	footer {
		height: 2rem;
		grid-row: 6;
		display: grid;
		align-items: center;
		.font-dpr(20px);
		background: var(--dark);
		color: var(--light);
		text-align: center;
	}
}
.font-dpr(@font-size){
    font-size: @font-size;
    [data-dpr="2"] & {font-size: @font-size * 2}
    [data-dpr="3"] & {font-size: @font-size * 3}
}
</style>
