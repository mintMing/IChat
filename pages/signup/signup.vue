<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backBefore">
				<image class="back-img" src="../../static/images/common/左箭头.png"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/火@2x.png"></image>
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input class="user" type="text" placeholder="请取个名字" placeholder-style="color:#aaa;font-weight:400;" />
					<view class="employ" v-if="employ">已占用</view>
					<image class="ok" src="../../static/images/signup/Group 3.png" v-if="isUser"></image>
				</view>
				<view class="inputs-div">
					<input class="email" type="email" placeholder="请输入邮箱" placeholder-style="color:#aaa;font-weight:400;" @blur="checkEmail" />
					<view class="employ" v-if="employ">已占用</view>
					<view class="invalid" v-if="invalid">邮箱无效</view>
					<image class="ok" src="../../static/images/signup/Group 3.png" v-if="isEmail"></image>
				</view>
				<view class="inputs-div">
					<input class="psw" :type="type" placeholder="请输入密码" placeholder-style="color:#aaa;font-weight:400;" />
					<image class="look" :src="lookurl" @tap="looks"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { backBefore } from "../../commons/js/tool";

let type = ref("password");
let isUser = ref(true);
let isEmail = ref(true);
let isLook  = ref(false);
let invalid = ref(false); // 邮箱是否有效
let employ = ref(false); // 是否被“占有”
let lookurl = ref("../../static/images/signup/闭眼(1).png"); // ico url

let email = ref("");

// 密码显影
function looks() {
	if(isLook.value) {
		type.value = "text";
		isLook.value = !isLook.value;
		lookurl.value = "../../static/images/signup/睁开眼睛4.png";
	} else {
		type.value = "password";
		isLook.value = !isLook.value;
		lookurl.value = "../../static/images/signup/闭眼(1).png";
	}
}

// check Email
function checkEmail(e) {
	let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
	email.value = e.detail.value;
	if(email.value.length > 0) {
		if(pattern.test(email.value)) {
			console.log("yes");
			invalid.value = false;
		} else {
			invalid.value = true;
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
	.inputs-div {
		position: relative;
		.employ, .invalid {
			position: absolute;
			right: 0;
			top: 40rpx;
			float: right;
			font-size: $uni-font-size-base;
			font-weight: 500;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
		.ok {
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 42rpx;
			height: 32rpx;
		}
		.look {
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 42rpx;
			height: 32rpx;
		}
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
