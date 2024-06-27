<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<input 
					class="search" 
					type="search" 
					placeholder="搜索用户/群" 
					placeholder-style="color:#aaa;font-weight:400;" 
					@input="debouncedSearch" 
					v-model="searchVal"
				/>
				<image class="search-img" src="../../static/images/index/search.png"></image>
			</view>
			<view class="top-bar-right" >
				<view class="text" @click="backBefore">取消</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userArr.length>0">用户</view>
				<view class="list user" v-for="(item, index) in userArr" :key="item.id" v-if="searchVal.length!==0">
					<navigator url="../userhome/userhome?id=aaa" class="top-bar-left" hover-class="none">
						<image :src="item.imgurl"></image>
					</navigator>
					<view class="names">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
					</view>
					<view class="right-bt send" v-if="item.tip===1">发消息</view>
					<view class="right-bt add" v-if="item.tip===0">加好友</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import data from "../../commons/js/data.js";
import { debounce, backBefore } from "../../commons/js/tool.js";
import { reactive, ref, watch } from "vue";

const userArr = reactive([]);
const searchVal = ref("");

const searchUser = ()=> {
	const val = searchVal.value.toLowerCase();
	if(val.trim() !== "") {
		const exp = new RegExp(val, "gi");
		userArr.splice(0, userArr.length, ...data.friends().filter(user=> {
			const matchName = user.name.toLowerCase().search(exp) !== -1;
			const matchEmail = user.email.toLowerCase().search(exp) !== -1;
			if(matchName || matchEmail) {
				isFriend(user);
				user.imgurl = `../../static/images/img/${user.imgurl}`;
				user.name = user.name.replace(exp, match=> `<span style="color:#4AAAFF;">${match}</span>`);
				user.email = user.email.replace(exp, match=> `<span style="color:#4AAAFF;">${match}</span>`);
				return true;
			}
			return false;
		}));
	} else {
		searchVal.value = "";
	}
}

const isFriend = (curUser)=> {
	let isMatch = 0;
	let friendArr = data.isFriend();
	for(const data of friendArr) {
		if(data.friend === curUser.tip) {
			isMatch = 1;
		}
	}
	curUser.tip = isMatch;
}

const debouncedSearch = debounce(searchUser, 300);

watch(searchVal, debouncedSearch);


function tesk() {
	console.log("tel")
}

</script>

<style scoped lang="scss">
@import "../../commons/css/common.scss";

.top-bar {
	background-color: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
	.search-div {
		position: absolute;
		top: 0;
		left: 0;
		padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;
		box-sizing: border-box;
		width: 100%;
		.search {
			// width: 530rpx;
			margin-top: 40rpx;
			height: 60rpx;
			background-color: $uni-bg-color-grey;
			border-radius: 10rpx;
			padding: 0 60rpx 0 12rpx;
		}
		.search-img {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 130rpx;
			top: 65rpx;
			// float: right;
		}
	}
}
.main {
	padding: 88rpx $uni-spacing-col-base;
	.result {
		padding-top: $uni-spacing-col-base;
		.title {
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}
		.list {
			width: 100%;
			// border: 1px solid red;
			padding: 20rpx 0;
			height: 80rpx;
			image {
				float: left;
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
		}
		.names {
			float: left;
			padding-left: $uni-spacing-col-base;
			.name {
				font-size: 36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.email {
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
				line-height: 28rpx;
			}
		}
		
		.right-bt {
			float: right;
			width: 120rpx;
			height: 48rpx;
			// background-color: $uni-color-primary;
			border-radius: 24rpx;
			font-size: $uni-font-size-sm;
			font-weight: 600;
			// color: $uni-text-color;
			line-height: 48rpx;
			margin-top: 16rpx;
			text-align: center;
		}
		.send {
			background-color: $uni-color-primary;
			color: $uni-text-color;
		}
		.add {
			background-color: rgba(74, 170, 255, 0.1);
			color: $uni-color-success;
		}
		
	}
}

</style>
