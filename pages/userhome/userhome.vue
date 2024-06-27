<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backBefore">
				<image src="../../static/images/common/左箭头.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/userhome/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai" :animation="aniBgData"></view>
			<image class="bg-img" src="../../static/images/img/OIP1.jpg" mode="aspectFill"></image>
		</view>
		<view class="main"> 
			<view class="user-header">
				<transition name="fade">
					<view v-show="showIcon" :class="['sex', { 'sex-alt': isAltStyle }]" :style="{backgroundColor:sexBg}">
						<image src="../../static/images/userhome/nv.png"></image>
					</view>
				</transition>
				<image :class="['user-img', { 'user-img-alt': isAltStyle }]" src="../../static/images/img/OIP1.jpg" mode="aspectFill"></image>
			</view>
			<view class="user-info">
				<view class="name">{{ user.name }}</view>
				<view class="nick">昵称：{{ user.nick }}</view>
				<view class="intr">{{ user.intr }}</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn common-btn-one" @tap.stop="addFriendAni(), handleToggle('add')">加为好友</view>
		</view>
		<!-- <view class="add" :style="{height:addHeight+'px',bottom}"> -->
		<!-- <view class="add" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="aniFriInfoData"> -->
		<view class="add" :style="dynamicStyles" :animation="aniFriInfoData">
			<view class="name">{{ user.name }}</view>
			<textarea class="add-main" :value="selfName+'请求加为好友~'" maxlength="120"></textarea>
		</view>
		<view class="add-btn bottom-bar" :animation="aniBtnData">
			<view class="cancel common-btn-one" @tap.stop="addFriendAni(), handleToggle('cancel')">取消</view>
			<view class="send common-btn-one">发送</view>
		</view>
	</view>
</template>

<script setup>
import { backBefore, createAni } from "../../commons/js/tool.js";
import { onReady  } from '@dcloudio/uni-app';
import { ref, reactive, computed, getCurrentInstance } from "vue";

const sexBg = ref("rgba(255, 93, 91, 1)");

const user = reactive({
	name: "神金",
	nick: "求职狗",
	intr: "在做了，希望能找到工作吧！唉！！！"
});

const selfName = ref("mint");
// 页面高度
let infoHeight = ref(0);
// 好友信息弹出动画
let aniFriInfoData = ref({});
// 按钮弹出动画
let aniBtnData = ref({});
// 头像动画
const isAltStyle = ref(false);
// 背景动画
const aniBgData = ref(false);
// 是否添加
let isAdd = ref(false);
// 性别图片显示
const showIcon = ref(true);


// 获取页面高度
const getInfoHeight = ()=> {
	const query = uni.createSelectorQuery().in(getCurrentInstance());
	query.select(".bg").boundingClientRect(data=> {
		infoHeight.value = data.height - 186;
		console.log(data.height)
		console.log(infoHeight.value)
	}).exec();
}

onReady(()=> {
	getInfoHeight();
});
//页面高度 
const dynamicStyles = computed(()=> {
	return {
		bottom: `-${infoHeight.value}px`,
		height: `${infoHeight.value}px`,
	} 
});

const addFriendAni = ()=> {
	isAdd.value = !isAdd.value;

	const aniProp1 = isAdd.value ? { bottom: 0 } : { bottom: -infoHeight.value };
	const aniProp2 = isAdd.value ? { bottom: 0 } : { bottom: -100 };
	const aniProp3 = isAdd.value ? { backgroundColor: "rgba(255, 228, 49, 0.6)" } : { backgroundColor: "rgba(255, 228, 49, 0)" };

	aniFriInfoData.value = createAni(300, "ease", aniProp1);
	aniBtnData.value = createAni(400, "ease-in", aniProp2);
	aniBgData.value = createAni(300, "ease-in", aniProp3);
};
// 头像样式变更
const toggleStyle = ()=> {
	isAltStyle.value = !isAltStyle.value;
}
// 性别图像
const handleToggle = (type)=> {
	showIcon.value = false;
	isAltStyle.value = type === "add" ? true : false;
	setTimeout(()=> {
		showIcon.value = true;
	}, 400);
}
</script>

<style lang="scss" scoped>
@import "../../commons/css/common.scss";

.top-bar {
	background: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
}

.bg {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -2;
	width: 100%;
	height: 100%;
	// background-color: red;
	.bg-bai {
		width: 100%;
		height: 100%;
		//background-color: #eee;
		// background-color: red;
	}
	.bg-img {
		opacity: 0.4;
		position: absolute;
		z-index: -1;
		left: -10rpx;
		top: -10rpx;
		width: 100%;
		height: 100%;
		filter: blur(16px);
	}
}
.main {
	text-align: center;
	padding-top: 100rpx;
	.user-header {
		margin: 0 auto;
		margin-top: 80rpx;
		width: 412rpx;
		height: 412rpx;
		position: relative;
		// padding-top: 148rpx;
		.sex {
			position: absolute;
			bottom: 70rpx;
			right: 50rpx;
			z-index: 11;
			width: 64rpx;
			height: 64rpx;
			border-radius: $uni-border-radius-circle;
			transform: rotate(0.1turn);
			transition: all 1s;
			image {
				width: 50rpx;
				height: 50rpx;
				padding: 7rpx;
			}
		}
		.sex-alt {
			bottom: 100rpx;
			left: 110rpx;
		}
		.user-img {
			z-index: 10;
			width: 350rpx;
			height: 350rpx;
			border-radius: 48rpx;
			border: 6rpx solid rgba(255, 255, 255, 1);
			transition: all 0.5s ease-in;
		}
		.fade-enter-active, .fade-leave-active {
			transition: opacity .4s;
		}
		.fade-enter, .fade-leave-to {
			opacity: 0;
		}
		.user-img-alt {
		  width: 300rpx;
		  height: 300rpx;
		  border-radius: 50%;
		  box-shadow: 0 36rpx 40rpx 0rpx rgba(39, 40, 50, 0.5);
		  transform: translate(-150rpx, 25rpx);
		}
	}
	.user-info {
		padding-top: 0rpx;
		.name {
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}
		.nick {
			font-size: $uni-font-size-base;
			line-height: 40rpx;
			color: $uni-text-color;
		}
		.intr {
			padding: 20rpx 100rpx;
			font-size: $uni-font-size-base;
			font-weight: 300;
			color: $uni-text-color;
			line-height: 48rpx;
		}
	}
}
.bottom-bar {
	.bottom-btn {
		background-color: $uni-color-primary;
		margin: 0 $uni-spacing-col-base;
	}
}
.add {
	position: fixed;
	// bottom: -1252rpx;
	// bottom: v-bind(addHeight);
	width: 100%;
	box-sizing: border-box;
	padding: 0 56rpx;
	// height: 1252rpx;
	// height: v-bind(addHeight+'px');
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40rpx 40rpx 0 0;
	padding-top: 200rpx;
	.name {
		padding-top: 168rpx 0 40rpx;
		font-size: 52rpx;
		color: $uni-text-color;
		line-height: 74rpx;
	}
	.add-main {
		padding: 18rpx 22rpx;
		height: 420rpx;
		box-sizing: border-box;
		width: 100%;
		background-color: $uni-bg-color-grey;
		border-radius: $uni-border-radius-base;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		line-height: 44rpx;
	}
}
.add-btn {
	// position: fixed;
	bottom: -200rpx;
	// width: 100%;
	// height: 104rpx;
	// box-sizing: border-box;
	// padding: 12rpx $uni-spacing-col-base;
	z-index: 100;
	// height: 104rpx;
	display: flex;
	.cancel {
		// flex: auto;
		width: 172rpx;
		// text-align: center;
		// line-height: 80rpx;
		// font-size: $uni-font-size-lg;
		// color: $uni-text-color;
		// width: 684rpx;
		// height: 80rpx;
		background-color: $uni-bg-color-hover;
		margin-left: $uni-spacing-col-base;
		// border-radius: $uni-border-radius-sm;
	}
	.send {
		// margin-left: $uni-spacing-col-base;
		
		flex: auto;
		// text-align: center;
		// line-height: 80rpx;
		// font-size: $uni-font-size-lg;
		// color: $uni-text-color;
		// // width: 684rpx;
		// height: 80rpx;
		background-color: $uni-color-primary;
		margin: 0 $uni-spacing-col-base;
		// border-radius: $uni-border-radius-sm;
	}
}

</style>