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
				<input class="psw" type="password" placeholder="密码" placeholder-style="color:#aaa;font-weight:400;" />
			</view>
			<view class="tips">输入用户或密码错误！</view>
		</view>
		<view class="submit" @tap="test">登录</view>
	</view>
</template>

<script setup>
import { ref } from "vue";

let user = ref("");
let password = ref("");

const test = ()=> {
	// uni.request({
	// 	url: "http://192.168.95.185:3000/test",
	// 	data: {
			
	// 	},
	// 	method: "GET",
	// 	success: (data)=> {
	// 		console.log(data);
	// 	}
	// });
	// uni.request({
	// 	url: "http://192.168.95.185:3000/mail",
	// 	data: {
	// 		 mail: user.value,
	// 	},
	// 	method: "POST",
	// 	header: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	success: (data)=> {
	// 		console.log(data);
	// 	},
	// 	fail: (data)=> {
	// 		console.log("fail:"+data)
	// 	}
	// });
	// 注册测试
	// uni.request({
	// 	url: "http://192.168.50.185:3000/signup/add",
	// 	data: {
	// 		 email: "2570803883@qq.com",
	// 		 name: "mint",
	// 		 pwd: "123",
	// 	},
	// 	method: "POST",
	// 	header: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	success: (data)=> {
	// 		console.log(data);
	// 	},
	// 	fail: (data)=> {
	// 		console.log("fail:"+data)
	// 	}
	// });
	// 登录测试
	// uni.request({
	// 	url: "http://192.168.50.185:3000/signin/match",
	// 	data: {
	// 		 data: "mint",
	// 		 pwd: "123",
	// 	},
	// 	method: "POST",
	// 	header: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	success: (data)=> {
	// 		console.log(data);
	// 	},
	// 	fail: (data)=> {
	// 		console.log("fail:"+data)
	// 	}
	// });
	// 搜索测试
	uni.request({
		url: "http://192.168.50.185:3000/search/user",
		data: {
			 data: "m"
		},
		method: "POST",
		header: {
			"Content-Type": "application/json",
		},
		success: (data)=> {
			console.log(data);
		},
		fail: (data)=> {
			console.log("fail:"+data)
		}
	});
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