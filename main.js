import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


Vue.config.productionTip = false;
App.mpType = 'app'


const app = new Vue({
	...App
})

// 服务器地址
// app.provide("serverUrl", "http://192.168.214.185:3000");

//真机获取 解决app上adapter is not a function问题
axios.defaults.adapter = function(config) {
	 return new Promise((resolve, reject) => {
			var settle = require('axios/lib/core/settle');
			var buildURL = require('axios/lib/helpers/buildURL');
			var buildFullPath = require('axios/lib/core/buildFullPath');
			let fullurl = buildFullPath(config.baseURL,config.url)
			uni.request({
				method: config.method.toUpperCase(),
				url: buildURL(fullurl, config.params, config.paramsSerializer),
				header: config.headers,
				data: config.data,
				dataType: config.dataType,
				responseType: config.responseType,
				sslVerify: config.sslVerify,
				complete:function complete(response){
					response = {
					  data: response.data,
					  status: response.statusCode,
					  errMsg: response.errMsg,
					  header: response.header,
					  config: config
					};
					
				settle(resolve, reject, response);
				}
			})
	    })
}


app.$mount()
// #endif

// #ifdef VUE3

import { createSSRApp } from 'vue';  
import { createPinia } from 'pinia';  
import { createUnistorage  } from "./uni_modules/pinia-plugin-unistorage";

export function createApp() { 
	const app = createSSRApp(App);  
	const pinia = createPinia();  
	pinia.use(createUnistorage())
	app.use(pinia);  
	return {  
		app,
		pinia,
	};  
} 
// import { createSSRApp } from 'vue'
// import * as Pinia from "pinia";

// export function createApp() {
// 	const app = createSSRApp(App)
// 	return {
// 		app,
// 		Pinia,
// 	}	
// }
// #endif


