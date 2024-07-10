<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right">
				<view class="text">注册</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/火@2x.png"></image>
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到 mint!</view>
			<view class="inputs">
				<input class="user" type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400;" v-model="user" />
				<input class="psw" type="password" placeholder="密码" placeholder-style="color:#aaa;font-weight:400;" v-model="pwd" />
			</view>
			<view class="tips" v-show="isRight">输入用户或密码错误！</view>
		</view>
		<view class="submit" @tap="login">登录</view>
	</view>
</template>

<script setup>
import { computed, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { logon } from "../../util/axios/requests";
import useUserStore from "../../stores/user";
import setCookie from "../../util/cookie.js"

const user = ref("");
const pwd = ref("");
const isRight = ref(false);

const userStore = useUserStore();

// 注册用户字段
onLoad((e)=> {
	user.value = e.user;
});

// const isRight = computed({
// 	get() {
// 		return (user.value || pwd.value);
// 	}
// });

const login = async ()=> {
	if(user.value.length > 0 && pwd.value.length > 0) {
		
		const result = await logon(user.value, pwd.value);
		
		if (result.status === 200) {
			const { accessToken, id, name, imgurl } = result.data.data;
			localStorage.setItem("userInfo", JSON.stringify({ accessToken, id, name, imgurl }));
			
			uni.navigateTo({
				url: "../index/index",
			});
		} else if (result.status === 400) {  
			alert("Password mismatch");  
			isRight.value = true;  
		} else {  
			alert("Login failed");  
		}  
	}
}

</script>

<style scoped lang="scss">
@import "../../commons/css/common.scss";
.logo {
	text-align: center;
	image{
		padding-top: 256rpx;
		width: 194rpx;
		height: 92rpx;
		margin: 0 auto;
	}
}

.main {
	padding: 54rpx $uni-spacing-row-lg 120rpx;
	// width: 100%;
	.title {
		font-size: 56rpx;
		font-weight: 500;
		color: $uni-text-color;
		line-height: 80rpx;
	}
	.slogan {
		font-size: 40rpx;
		color: $uni-text-color-grey;
		line-height: 56rpx;
	}
	.inputs {
		padding-top: 8rpx;
		input {
			padding-top: 40rpx;
			height: 88rpx;
			font-size: $uni-font-size-lg;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 88rpx;
			border-bottom: 1px solid $uni-border-color;
		}
	}
	.tips {
		float: left;
		font-size: $uni-font-size-lg;
		color: $uni-color-warning;
		line-height: 56rpx;
	}
}
.submit {
	margin: 0 auto;
	width: 520rpx;
	height: 96rpx;
	background: $uni-color-primary;
	box-shadow: 0px 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
	border-radius: 48rpx;
	font-size: $uni-font-size-lg;
	font-weight: 500;
	color: $uni-text-color;
	line-height: 96rpx;
	text-align: center;
}

</style>