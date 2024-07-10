const setCookie = (name, value, options = {})=> {
	let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
	// Cookie的有效期
	if(options.expires) {
		const date = new Date();
		date.setTime(date.getTime() + options.expires * 1000);
		cookieStr += `; expires=${date.toUTCString()}`;
	}
	// 可以访问该Cookie的URL路径
	if (options.path) {  
	    cookieStr += `; path=${options.path}`;  
	}
	// Cookie的域名
	if (options.domain) {  
		cookieStr += `; domain=${options.domain}`;  
	}  
	// 是否通过加密协议发送请求
	if (options.secure) {  
		cookieStr += `; secure`;  
	}  
	// 限制Cookie在跨站请求中的发送
	// Strict 只会在当前网页的域名完全匹配的情况下发送Cookie。
	// Lax 会在顶级导航（如点击链接跳转）和POST请求时发送Cookie，但在跨域的GET请求中不会发送。
	// None 所有请求中都发送Cookie
	if (options.sameSite) {  
		cookieStr += `; SameSite=${options.sameSite}`;  
	}  
}

export default setCookie;