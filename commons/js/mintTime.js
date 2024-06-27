function formatDateComponent(value) {
	return value < 10 ? "0" : value;
}

function formatDateTime(date) {
	const Y = date.getFullYear();
	const M = formatDateComponent(date.getMonth() + 1);
	const D = formatDateComponent(date.getDate());
	const h = formatDateComponent(date.getHours());
	const m = formatDateComponent(date.getMinutes());
	return { Y, M, D, h, m };
}

function isSameDay(date1, date2) {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date2.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

function isYesterday(date1, date2) {
	const yeaterday = new Date(date2);
	yeaterday.setDate(date2.getDate() - 1);
	return isSameDay(date1, yeaterday);
}

// 好友列表时间转化
function friListTime(time) {
	const old = new Date(e);
	const now = new Date();
	const { Y, M, D, h, m}  = formatDateTime(old);
	
	if(isSameDay(old, now)) {
		return `${h}:${m}`;
	}
	
	if(isYesterday(old, now)) {
		return `昨天 ${h}:${m}`;
	}
	
	return `${Y}/${M}/${D}`;
}

// 详细时间转换

function detailDate(e) {
	const old = new Date(e);
	const { Y, M, D, h, m } = formatDateTime(old);
	return `${Y}-${M}-${D} ${h}:${m}`;
}

// 聊天时间转换
function chatDate(timeValue) {
	const old = new Date(timeValue);
	const now = new Date();
	const { Y, M, D, h, m } = formatDateTime(old);

	if (isSameDay(old, now)) {
		return `${h}:${m}`;
	}

	if (isYesterday(old, now)) {
		return `昨天 ${h}:${m}`;
	}

	if (Y === now.getFullYear()) {
		return `${M}月${D}日 ${h}:${m}`;
	}

	return `${Y}年${M}月${D}日 ${h}:${m}`;
}

function spaceTime(old, now) {
	old = new Date(old);
	now = new Date(now);
	let tOld = old.getDate();
	let tNow = now.getTime();
	if(tOld > (tNow + 1000 * 60 * 5)) {
		return now;
	} else {
		return "";
	}
}

export { detailDate, chatDate, friListTime, spaceTime};