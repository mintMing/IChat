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
					<input 
						class="user" 
						type="text" 
						placeholder="请取个名字" 
						placeholder-style="color:#aaa;font-weight:400;" 
						@blur="matchName"
						v-model="user"
					/>
					<view class="employ" v-if="userOccupy">已占用</view>
					<image class="ok" src="../../static/images/signup/Group 3.png" v-if="isUserAva"></image>
				</view>
				<view class="inputs-div">
					<input 
						class="email" 
						type="email" 
						placeholder="请输入邮箱" 
						placeholder-style="color:#aaa;font-weight:400;" 
						@blur="matchEmail" 
						v-model="email"
					/>
					<view class="employ" v-if="emailOccupy">已占用</view>
					<view class="invalid" v-if="isEmailInvalid">邮箱无效</view>
					<image class="ok" src="../../static/images/signup/Group 3.png" v-if="isEmailAva"></image>
				</view>
				<view class="inputs-div">
					<input class="psw" :type="type" placeholder="请输入密码" placeholder-style="color:#aaa;font-weight:400;" v-model="pwd" />
					<image class="look" :src="lookUrl" @tap="looks"></image>
				</view>
			</view>
		</view>
		<view :class="[{submit:isAllRight}, {noSubmit:!isAllRight}]" @tap="signup">
			注册
		</view>
	</view>
</template>

<script setup> 
import { computed, ref } from "vue";
import { backBefore } from "../../commons/js/tool";
import { checkNameAndEmailAva, register } from "../../util/axios/requests";

let type = ref("password");

// 用户名
// 用户信息
const user = ref("");
const userOccupy = ref(false);
const isUserAva = ref(false);  // 用户是否可用

// 邮箱
const email = ref("");
const emailOccupy = ref(false); // 是否被占有
const isEmailAva = ref(false); // ok
const isEmailInvalid = ref(false);  // 邮箱是否有效

// 密码
const pwd = ref("");

// 密码显影
const isLook  = ref(false);
const lookUrl = ref("../../static/images/signup/闭眼(1).png"); // ico url


// 判断是否以及注册
const isAllRight = computed({
	get() {
		return (isUserAva.value && isEmailAva.value && pwd.value.length > 5 );
	}
});

// 密码显影
const looks = ()=> {
  isLook.value = !isLook.value;
  type.value = isLook.value ? "text" : "password";
  lookUrl.value = isLook.value
    ? "../../static/images/signup/睁开眼睛4.png" 
    : "../../static/images/signup/闭眼(1).png";
};

// 匹配用户名
const matchName = async ()=> {
	if(user.value.length > 0) {
		try {
			userOccupy.value = await checkNameAndEmailAva(user.value);
			isUserAva.value = !userOccupy.value;
		} catch(err) {
			throw err;
		}
	} else {
		userOccupy.value = false;
		isUserAva.value = false;
	}
};

// 匹配Email
const matchEmail = async ()=> {
	let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
	if(email.value.length > 0) {
		
		isEmailInvalid.value = !pattern.test(email.value);
		
		if(!isEmailInvalid.value) {
			try {
				emailOccupy.value = await checkNameAndEmailAva(email.value);
				
				isEmailAva.value = !emailOccupy.value;
			} catch(err) {
				console.error(err);
			}
		} else {
			emailOccupy.value = false;
			isEmailAva.value = false;
		}
		
	} else {
		isEmailInvalid.value = false;
		emailOccupy.value = false;
		isEmailAva.value = false;
	}
}

// 注册
const signup = async ()=> {
	if(isAllRight.value) {
		try {
			const success = await register(user.value, pwd.value, email.value);
			if(success) {
				uni.showToast({
					title:"注册成功",
					icon: "none",
					duration: 2000,
				});
				
				uni.navigateTo({
					url: `../signin/signin?user=${user.value}`,
				});
			}
		} catch(err) {
			console.log(err);
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
.noSubmit {
	background: #cececf;
	margin: 0 auto;
	width: 520rpx;
	height: 96rpx;
	box-shadow: 0px 50rpx 32rpx -36rpx rgba(206, 206, 207, 0.4);
	border-radius: 48rpx;
	font-size: $uni-font-size-lg;
	font-weight: 500;
	color: $uni-text-color;
	line-height: 96rpx;
	text-align: center;
}
</style>
