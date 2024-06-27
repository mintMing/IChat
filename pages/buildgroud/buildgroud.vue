<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="back">
				<view class="text">取消</view>
			</view>
			<view class="top-bar-center">
				<view class="title">创建群聊</view>
			</view>
			<view class="top-bar-right">
				<view class="price"></view>
			</view>
		</view>
		<view class="main">
			<view class="top">
				<view class="group-img">
					<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
					<image class="edit" src="../../static/images/buildgroud/edit.png" @tap="upload"></image>
					<image class="img" :src="cropFilePath" @tap="upload"></image>
				</view>
				<view class="group-name">
					<input class="group-name-input" type="text" placeholder="为群取个名字" placeholder-style="color:#aaa;" v-model="name" />
				</view>
				<view class="title">用户</view>
			</view>
			<view class="friends">
				<view class="user" v-for="(item, index) in user" :key="index" @tap="selectFri(index)">
					<view class="selected" :class="{isSelected:item.selected}">
						<image class="selected-img" src="../../static/images/buildgroud/对.png" v-if="item.selected"></image>
					</view>
					<image class="user-img" :src="item.imgurl"></image>
					<view class="name">{{ item.name }}</view>
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn common-btn-one" :class="{noSelect:selec&&name.length>0}">创建({{ selectFriNum }})</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import ImageCropper from '@/uni_modules/ling-imgcropper/components/ling-imgcropper/ling-imgcropper.vue';
import { onReady } from "@dcloudio/uni-app";

// 图片处理
let tempFilePath = ref("");
let cropFilePath = ref("../../static/images/buildgroud/群聊.png");
// 用户
let user = reactive([
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: true,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: true,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: true,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	},
	{
		selected: false,
		imgurl: "../../static/images/img/OIP1.jpg",
		name: "这是哪里",
	}
]);
// 已选好友数
let selectFriNum = ref(0);
// 
let name = ref("");

onReady(()=> {
	selectedNum();
});
// 按钮的显示数量
const selec = computed(()=> {
	return selectFriNum.value > 0;
});

const back = ()=> {
	uni.navigateTo({
		url: "/pages/index/index",
	});
}

const confirm = (e)=> {
	tempFilePath.value = "";
	cropFilePath.value = e.detail.tempFilePath;
	headimg.value = e.detail.tempFilePath;
	// console.log(e.detail.tempFilePath);
}

const cancel = ()=> {
	console.log('canceled');
}

const upload = (e)=> {
	uni.chooseImage({
		count: 1, // 默认 9
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', "sourceType"], // 从相册选择
		success: (res) => {
			tempFilePath.value = res.tempFilePaths.shift();
		}
	});
}
// 动态选择好友
const selectFri = (idx)=> {
	if(user[idx].selected) {
		user[idx].selected = false;
		selectFriNum.value--;
	} else {
		user[idx].selected = true;
		selectFriNum.value++;
		if(selectFriNum.value === 0) {
			
		}
	}
	
}
// 已经选择的好友数量
const selectedNum = ()=> {
	user.forEach((ele, idx)=> {
		if(ele.selected) {
			selectFriNum.value++;
		} 
	});
}

</script>

<style lang="scss" scoped>
@import "../../commons/css/common.scss";
.top-bar {
	background-color: rgba(255, 255, 255, 1);
	border-bottom: 1px solid $uni-border-color;
}
.main {
	display: flex;
	flex-direction: column;
	.top {
		padding-top: 148rpx;
		position: fixed;
		background-color: #fff;
		width: 100%;
		z-index: 100;
	}
	.group-img {
		margin: 0 auto;
		width: 196rpx;
		height: 196rpx;
		background-color: $uni-color-primary;
		box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
		border-radius: 40rpx;
		overflow: hidden;
		position: relative;
		.img {
			width: 196rpx;
			height: 196rpx;
			// margin: 0 auto;
			// width: 196rpx;
			// height: 196rpx;
			// background-color: #FFE431;
			// box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
			// border-radius: 40rpx;
		}
		.edit {
			position: absolute;
			z-index: 10;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 56rpx;
			height: 56rpx;
		}
	}
	.group-name {
		padding: 62rpx $uni-spacing-col-base 0;
	}
	.group-name-input {
		text-align: center;
		height: 92rpx;
		background-color: $uni-bg-color-grey;
		border-radius: 46rpx;
		font-size: 32rpx;
		color: $uni-text-color;
	}
	.title {
		padding: $uni-spacing-row-base $uni-spacing-col-base 20rpx;
		font-size: 44rpx;
		font-weight: 600;
		color: $uni-text-color;
		line-height: 60rpx;
	}
	.friends {
		padding: 600rpx $uni-spacing-col-base 100rpx;
		.title {
			padding-top: $uni-spacing-row-base $uni-spacing-col-base;
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}
		.user {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 120rpx;
			.selected {
				flex: none;
				margin-right: 30rpx;
				width: 48rpx;
				height: 48rpx;
				background-color: rgba(255, 228, 49, 0.5);
				border-radius: 24rpx;
				position: relative;
				.selected-img {
					width: 30rpx;
					height: 20rpx;
					position: absolute;
					left: 10rpx;
					top: 16rpx;
				}
			}
			.isSelected {
				background-color: rgba(255, 228, 49, 1);
			}
			.user-img {
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
			.name {
				padding-left: 32rpx;
				font-size: 36rpx;
				color: $uni-text-color;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
	}
}

.bottom-bar {
	background-color: rgba(250, 250, 250, 0.9);
	box-shadow: 0 1rpx 0 0 rgba(0, 0, 0, 0.25);
	.bottom-btn {
		background-color: $uni-bg-color-grey;
		margin: 0 $uni-spacing-col-base;
	}
	.noSelect {
		background-color: $uni-color-primary;
	}
}


</style>
