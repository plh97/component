// // import styles from './index.less'
// import Vue from 'vue';
// import App from "./App.vue";
// import router from "./router";
// import "lib-flexible";

// new Vue({
// 	el: '#app',
// 	router,
// 	data:{
// 		message:'Hello id'
// 	},
// 	components: { App },
// 	template: '<App/>'
// })


function reverseString(str){
	let revString = '';
	for (let i = str.length-1; i>=0 ;i--) {
		debugger;
		revString += str[i]
	}
	return revString
	// return str
	// 	.split('')
	// 	.reverse()
	// 	.join('');
}



console.log(
	reverseString('hello')
);
