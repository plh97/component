<template>
	<div class="home">
		<h1>1231231</h1>
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
	
}
</style>
