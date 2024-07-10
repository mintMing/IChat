import axios from "axios";


const axiosInstance = axios.create({
	baseURL: "http://192.168.60.185:3000",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"api-version": "v1",
		"authorization": "",
	},
});
// 请求拦截器
axiosInstance.interceptors.request.use(
	config=> {
		const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
		if (token) {
			
			config.headers["authorization"] = `Bearer ${token}`;
			console.log(config.headers)
		} else {
			if(!config.url.includes("/login")) {
				console.log("token is null");
			}
		}
		return config;
	},
	error=> {
		return Promise.reject(error);
	}
);

// 响应拦截器
axiosInstance.interceptors.response.use(
	response=> {
		if(response.status == 200) {
			localStorage.setItem("lastResponseTime", Math.floor(new Date().getTime() / 1000));
			return response;
		}
	},
	error=> {
		const res = error.response || {}; 
		
		if (res.data.meta?.statusCode == 403) {
			return refeshToken(res);
		} else {
			// 非402 报的错误; 
			return Promise.reject(error);
		}
	}
);


/**
  * 会话过期：
  * 刷新token失败，得重新登录
  * 用户未授权，页面跳转到登录页面 
  * 接口过期 => 刷新token
  * 登录过期 => 重新登录
  * expiresTime => 在本业务中返回18000ms == 5h
 */
// 避免其他接口同时请求(只请求一次token接口)

let isRefreshToken = false;

const refreshToken = (response)=> {
	// 登录后拿到的有效期
	const userExpir = localStorage.getItem("expiresTime");
	// 当前时间
	const nowTime = Math.floor(new Date().getTime() / 1000);
	// 最后请求的时间
	const lastResTime = localStorage.getItem("lastResponseTime") || nowTime;
	// 登录后保存到本地的token
	const token = localStorage.getItem("token");
	
	// 根据 当前时间 - 过去时间 < expiresTime（epiresTime:登录后返回的有效时间）来判断是请求过期还是登录过期的
	if (token && nowTime - lastResTime < userExpir) {
		if (!isRefreshToken) {
			isRefreshToken = true;
			axios({ 
				url: `/refreshToken`,
			})
			.then((res) => {
				const { data = "", meta = {} } = res.data;
				isRefreshToken = false;
				if (meta.statusCode === 200) {
					localStorage.setItem("token", data);
					localStorage.setItem("lastResponseTime", nowTime);
					// 发布 消息
					retryOldRequest.trigger(data);
					// return axiosInstance(response.config);
				} else {
				   // 去登录
				   uni.redirectTo({ url: "/pages/signin/signin" });  
				   return Promise.reject(new Error("Refresh token failed"));
				}
			})
			.catch((err) => {
				isRefreshToken = false;
				//去登录
				uni.redirectTo({ url: "/pages/signin/signin" });  
				return Promise.reject(err);  
			});
		} else {
			// 收集订阅者 并把成功后的数据返回原接口
			return retryOldRequest.listen(response);
		}
	} else {
		
		uni.redirectTo({ url: "/pages/signin/signin" });  
		return Promise.reject(new Error("Token expired"));  
	}
}

/**
 * 发布订阅模式
 * 把失败的接口当订阅者，成功拿到新的token后再发布（重新请求接口）。
 * 失败的接口都会触发retryOldRequest.listen去订阅
 * 每次进入refeshToken方法,我们失败的接口都会触发retryOldRequest.listen去订阅，而我们的requestQuery则是保存这些订阅者的队列。
 */
// 
const retryOldRequest = {
	//维护失败请求的response
	requestQuery: [],
	//添加订阅者
	listen(response) {
		return new Promise((resolve)=> {
			this.requestQuery.push((newToken)=> { 
				const config = response.config || {};
				config.headers["Authorization"] = `Bearer ${newToken}`; 
				resolve(axiosInstance(config));
			});
		});
	},
	//发布消息
	trigger(newToken) {
		this.requestQuery.forEach((fn) => {
			fn(newToken);
		});
		this.requestQuery = [];
	},
}

export default axiosInstance;