import axiosInstance from "./axiosInstance.js";

// 用户名/邮箱匹配
const checkNameAndEmailAva = async (usernameOrEmail)=> {
	
	const url = `/users/check/${usernameOrEmail}`;
	try {
		const res = await axiosInstance.get(url);
		
		if (res.status === 200) {
			return res.occupied;
		} else {
			throw new Error("服务器出错啦！");  
		}
	} catch (error) {
        throw error;
    }
};

// 注册
const register = async (name, pwd, email)=> {
	try {
		const res = await axiosInstance.post("/users", {
			name,
			pwd,
			email,
		});
		if(res.status === 200) {
			return res.status;
		} else {
			throw new Error("服务器出错啦！");
		}
	} catch (error) {
		throw error;
	}
};

// 登录
const logon = async (data, pwd)=> {
	try {
		const res = await axiosInstance.post("/users/login", {
			data,
			pwd,
		});
		return res;
	} catch (error) {
		throw error;
	}
}

// 获取用户详细信息
const userInfo = async (id, token)=> {
	try {

		const res = await axiosInstance.get(`/users/${id}`);
		
		return res;
	} catch (error) {
		throw error;
	}
}

export { 
	checkNameAndEmailAva, 
	register,
	logon,
	userInfo,
};