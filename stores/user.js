import { defineStore } from "pinia";
import { reactive } from "vue";

const useUserStore = defineStore("use", ()=> {
	const state = reactive({
		userInfo: null,
	});
	
	const setUserInfo = (user)=> {
		state.userInfo = user;
	}
	return { 
		userInfo: state.userInfo,
		setUserInfo,
	}
});

export default useUserStore;