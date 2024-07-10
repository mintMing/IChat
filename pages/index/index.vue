<template>
	<view class="content">
		<view class="top-bar">
			<navigator :url="'../userhome/userhome?id='+userId" class="top-bar-left" hover-class="none">
				<image :src="userImgurl"></image>
			</navigator>
			<view class="top-bar-center">
				<image src="../../static/images/index/火.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="toSearch">
					<image src="../../static/images/index/search.png"></image>
				</view>
				<view class="add" @tap="toBuildGroup">
					<image src="../../static/images/index/加.png"></image>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/images/index/添加用户.png"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">上午7：45</view>
						</view>
						<view class="news">今夜江河之源，只亮我的酥油灯</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friend-list" v-for="(item, index) in friends" :keys="item.id">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip > 0">{{ item.tip }}</text>
						<image :src="item.imgurl" mode=""></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{ item.name }}</view>
							<view class="time">{{ changeTime(item.time) }}</view>
						</view>
						<view class="news">{{ item.news }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import data from "../../commons/js/data.js";
import { dateTime } from "../../commons/js/tool.js";
import { ref, reactive  } from "vue";
import { onLoad } from "@dcloudio/uni-app";
// import useUserStore from "../../stores/user.js";


let friends = reactive([]);
const userId = ref("");
const userImgurl = ref("");

const token = ref("");


onLoad(()=> {
	getFriends();
	const userInfo = JSON.parse(localStorage.getItem("userInfo")); 
	setUserDate(userInfo);
});


const getFriends = ()=> {
	friends = data.friends();
	for(let i = 0; i < friends.length; i++) {
		friends[i].imgurl = '../../static/images/img/' + friends[i].imgurl;
	}
}

const changeTime = (date)=> {
	return dateTime(date);
}

// 到搜索
const toSearch = ()=> {
	uni.navigateTo({
		url: "../search/search",
	})
}

// 到新建群
const toBuildGroup = ()=> {
	uni.navigateTo({
		url: "../buildgroud/buildgroud",
	});
}

// 获取缓存数据
const setUserDate = async (userData)=> {
	userId.value = userData.id;
	userImgurl.value = `http://192.168.60.185:3000/us/${userData.imgurl}`;
	token.value = userData.token;
}


</script>

<style scoped lang="scss">
@import "../../commons/css/common.scss";

.top-bar {
	background-color: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
	.top-bar-right {
		image {
			width: 20rpx;
			height: 20rpx;
			margin-left: 25rpx;
		}
	}
}

.main {
	padding-top: 100rpx;
	// border: 1px solid red;
	padding-bottom: $uni-spacing-col-base;
}
.friend-list {
	height: 96rpx;
	padding: 16rpx $uni-spacing-col-base;
		
	&:active {
		background-color: $uni-bg-color-grey;
	}
	.friend-list-l {
		position: relative;
		float: left;
		image {
			width: 96rpx;
			height: 96rpx;
			border-radius: 12rpx;
			background-color: $uni-color-primary;
		}
		.tip {
			position: absolute;
			top: -8rpx;
			left: 68rpx;
			height: 36rpx;
			min-width: 20rpx;
			padding: 0 8rpx;
			background: $uni-color-warning;
			border-radius: 18rpx;
			z-index: 10;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-inverse;
			line-height: 36rpx;
			text-align: center;
		}
	}
	.friend-list-r {
		padding-left: 128rpx;
		font-family: PingFangSC-Regular;
		.top {
			height: 56rpx;
			.name {
				float: left;
				font-size: 36rpx;
				font-weight: 400;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.time {
				float: right;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-disable;
				line-height: 50rpx;
			}
		}
	}
	.news {
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
		line-height: 40rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
}
// .friend-list {
// 	display: flex;
// 	place-content: center;
// 	.friend-list-l {
// 		position: relative;
// 		margin-top: 10rpx;
// 		image {
// 			width: 96rpx;
// 			height: 96rpx;
// 			border-radius: $uni-border-radius-base;
// 		}
// 		.tip {
// 			position: absolute;
// 			top: -5px;
// 			left: 35px;
// 			width: 18px;
// 			height: 18px;
// 			background: #FF5D5B;
// 			border-radius: 50%;
// 			text-align: center;
// 		}
// 	}
// 	.friend-list-c {
// 		// border: 1px solid red;
// 		margin-left: 30rpx;
// 		margin-top: 20rpx;
// 		.name {
// 			width: 70px;
// 			height: 25px;
// 			font-family: PingFangSC-Regular;
// 			font-size: 18px;
// 			color: #272832;
// 			letter-spacing: -0.62px;
// 			font-weight: 400;
// 		}
// 		.content {
// 			//width: 176rpx;
// 			//height: 20rpx;
// 			font-family: PingFangSC-Regular;
// 			font-size: 14px;
// 			color: rgba(39,40,50,0.60);
// 			letter-spacing: -0.48px;
// 			font-weight: 400;
// 		}
// 	}
// 	.time {
// 		width: 46rpx;
// 		height: 17rpx;
// 		font-family: PingFangSC-Regular;
// 		font-size: 12rpx;
// 		color: rgba(39,40,50,0.40);
// 		font-weight: 400;
// 		letter-spacing: -0.41px;
// 	}
// }
	
// .content {
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// }
// .top-bar {
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 88rpx;
// 	background: $uni-bg-color;
// 	box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
// 	.top-bar-left {
// 		float: left;
// 		image {
// 			width: 68rpx;
// 			height: 68rpx;
// 			border-radius: 16rpx;
// 		}
// 	}
// 	.top-bar-center {
// 		position: absolute;
// 		left: 50%;
// 		top: 50%;
// 		image {
// 			width: 88rpx;
// 			height: 42rpx;
// 		}
// 	}
// 	.top-bar-right {
// 		float: right;
// 		.search {
// 			display: inline-block;
// 			border: 1px solid red;
// 		}
// 		.add {
// 			display: inline-block;
// 			border: 1px solid red;
// 		}
// 		image {
// 			width: 52rpx;
// 			height: 52rpx;
// 		}
// 	}
// }

</style>
