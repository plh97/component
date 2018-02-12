import styles from './index.less'
import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import "lib-flexible";
import '../assets/common/common.less';

new Vue({
	el: '#app',
	router,
	data:{
		message:'Hello id'
	},
	components: { App },
	template: '<App/>'
})