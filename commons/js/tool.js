
// 好友列表时间转化
function dateTime(e) {
	let old = new Date(e);
	let now = new Date();
	// 获取old具体时间
	let d = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	// 月份需要加1
	let M = old.getMonth() + 1;
	let D = old.getDate();
	
	// 获取now具体时间
	let nd = now.getTime();
	let nh = now.getHours();
	let nY = now.getFullYear();
	let nM = now.getMonth() + 1;
	let nD = now.getDate();
	
	// 格式化小时和分钟
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10) {
		m = "0" + m;
	}
	// 当天时间
	if(D === nD && M === nM && Y === nY) {
		return h + ":" + m;
	}
	// 昨天
	let yesterday = new Date();
	yesterday.setDate(now.getDate() - 1);
	
	if(Y === yesterday.getFullYear() && 
		M === (yesterday.getMonth() + 1) &&
		D === yesterday.getDate()) {
		return "昨天 " + h + ":" + m;
	}
	
	// 其它情况
	return Y + "/" + (M < 10 ? "0" + M : M) + "/" + (D < 10 ? "0" + D : D);
}

// 防抖
function debounce(func, wait = 300, immediate = false) {
	let timeout;
	return function(...args) {
		const context = this;
		const later = ()=> {
			timeout = null;
			if(!immediate) {
				func.apply(context, args);
			}
		}
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if(callNow) {
			func.apply(this, args);
		}
	}
}

// 返回首页
function backBefore() {
	// console.log(getCurrentPages());
	uni.navigateBack({
		delta: 1
	});
}

// 
function getDate(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	
	if(type === "start") {
		year = year - 60;
	} else if(type === "end") {
		year = year + 2;
	}
	month = month > 9 ? month : "0" + month;
	day = day > 9 ? day : "0" + day;
	return `${year}-${month}-${day}`;
}

// createAnimation封装
const createAni = (duration, timingFun, properties)=> {
	let ani = uni.createAnimation({
		duration,
		timingFun,
	});
	for(const prop in properties) {
		ani[prop](properties[prop]).step();
	}
	return ani.export();
}


// 详细时间转换
function detailDate(e) {
	let old = new Date(e);
	let now = new Date();
	// 获取old具体时间
	let d = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	// 月份需要加1
	let M = old.getMonth() + 1;
	let D = old.getDate();
	
	if(M < 10) {
		M = "0" + M;
	}
	if(D < 10) {
		D = "0" + D;
	}
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10) {
		m = "0" + m;
	}
	return y + "-" + M + "-" + D + "" + h + ":" + m;
}

function chatDate(e) {
	let old = new Date(e);
	let now = new Date();
	// 获取old具体时间
	let d = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	// 月份需要加1
	let M = old.getMonth() + 1;
	let D = old.getDate();
	
	// 获取now具体时间
	let nd = now.getTime();
	let nh = now.getHours();
	let nY = now.getFullYear();
	let nM = now.getMonth() + 1;
	let nD = now.getDate();
	
	// 格式化小时和分钟
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10) {
		m = "0" + m;
	}
	// 当天时间
	if(D === nD && M === nM && Y === nY) {
		return h + ":" + m;
	}
	// 昨天
	if(D + 1 === nD && M === nM && Y === nY) {
		if(h < 10) {
			h = "0" + h;
		}
		if(m < 10) {
			m = "0" + m;
		}
		return h + ":" + m;
	}
	
	if(D + 1 === nD && M === nM && Y === nY) {
		if(h < 10) {
			h = "0" + h;
		}
		if(m < 10) {
			m = "0" + m;
		}
		return "昨天" + h + ":" + m;
	} else if(Y === nY){
		// 今年
		if(h < 10) {
			h = "0" + h;
		}
		if(m < 10) {
			m = "0" + m;
		}
		return M + "月" + D + "日" + h + ":" + m;
	} else {
		// 大于今年
		if(h < 10) {
			h = "0" + h;
		}
		if(m < 10) {
			m = "0" + m;
		}
		return Y + "年" + M + "月" + D + "日" + h + ":" + m;
	}
}

export { dateTime, debounce, backBefore, getDate, createAni, detailDate };