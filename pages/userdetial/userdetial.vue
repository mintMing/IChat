<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backBefore">
				<image src="../../static/images/common/左箭头.png"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">
					详情
				</view>
			</view>
			<view class="top-bar-right">
				<view class="price"></view>
			</view>
		</view>
		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">头像</view>
					<view class="user-head">
						<!-- <image class="user-img" :src="defaultImgurl"></image> -->
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image class="user-img" :src="cropFilePath" @tap="upload"></image>
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title" @tap="addModifyAni('签名', array.sign, havePwd)">签名</view>
					<view class="cont">
						......................................................................
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">注册</view>
					<view class="cont">
						{{  }}
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row" @tap="addModifyAni('昵称', array.name, havePwd)" v-if="isPwd">
					<view class="title">昵称</view>
					<view class="cont">
						{{ array.name }}
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">性别</view>
					<view class="cont">
						<picker :range="sexArr" @change="bindPickerChange" :value="sexIndex">
							<view class="uni-input">{{ sexArr[sexIndex] }}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">生日</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{ date }}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">电话</view>
					<view class="cont">
						{{ array.tell }}
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">邮箱</view>
					<view class="cont">
						{{ array.email }}
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">密码</view>
					<view class="cont">
						*******
					</view>
					<view class="more">
						<image src="../../static/images/common/youone.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="btn-two">退出登录</view>
		</view>
		<view class="modify" :style="dynamicStyles" :animation="aniModifyData">
			<view class="modify-header">
				<view class="close" @tap="addModifyAni">取消</view>
				<view class="title">{{ modifyTitle }}</view>
				<view class="define">确定</view>
			</view>
			<view class="modify-main">
				<input 
					type="text" 
					v-model="pwd" 
					class="modify-pwd" 
					placeholder="请输入密码" 
					placeholder-style="color:#aaa;font-weight:400;" 
					v-if="isPwd"
				/>
				<textarea v-model="userData" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import { backBefore, getDate, createAni, detailDate } from '../../commons/js/tool.js';
import { onReady } from '@dcloudio/uni-app';
import ImageCropper from '@/uni_modules/ling-imgcropper/components/ling-imgcropper/ling-imgcropper.vue';

// 个人信息
const defaultImgurl = ref("../../static/images/img/OIP1.jpg");
let sexArr = reactive(["男", "女"]);
let sexIndex = ref(0);
let date = ref(getDate());

const startDate = computed(()=> getDate("start"));
const endDate = computed(()=> getDate("end"));

const bindPickerChange = (e)=> {
	sexIndex.value = e.detail.value;
}

const bindDateChange = (e)=> {
	date.value = e.detail.value;
}

// 图片处理
let tempFilePath = ref("");
let cropFilePath = ref("../../static/images/img/OIP1.jpg");
const headimg = ref("");

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

const confirm = (e)=> {
	tempFilePath.value = "";
	cropFilePath.value = e.detail.tempFilePath;
	headimg.value = e.detail.tempFilePath;
	
	// #ifdef APP-PLUS||MP
	uni.uploadFile({
		url: "",
		filePath: headimg,
		name: "file",
		success: (uploadFileRes)=> {
			let backStr = uploadFileRes.data;
		}, 
		complete() {
			
		},
		fail(e) {
			
		}
	});
	// #endif
}

const cancel = ()=> {
	console.log('canceled');
}

// 信息页面处理
const aniModifyData = ref({});
let isModify = ref(false);
let isPwd = ref(false);
const modifyHeight = ref(0);

const getViewHeight = ()=> {
	const query = uni.createSelectorQuery().in(getCurrentInstance());
	query.select(".modify").boundingClientRect(data=> {
		modifyHeight.value = data.height - 10;
	}).exec();
}

onReady(()=> {
	getViewHeight();
});

const dynamicStyles = computed(()=> { // 缓存信息的页面高度
	return {
		bottom: `-${modifyHeight.value}px`,
	}
});

const addModifyAni = (type, data, havePwd)=> {
	if(havePwd) {
		isPwd.value = true;
	} else {
		isPwd.value = false;
	}
	modifyTitle.value = type;
	userData.value = data;
	isModify.value = !isModify.value;
	const aniProp1 = isModify.value ? { bottom: 0 } : { bottom: -modifyHeight.value };
	aniModifyData.value = createAni(300, "ease", aniProp1);
}


// 信息修改
let userData = ref("修改的内容");
const pwd = ref("");
const array = reactive({ //mock
	name: "mint",
	time: new Date(),
	sex: "男",
	sign: "-------------------------------------------------",
	birth: "2000-09-14",
	tell: "18125034783",
	email: "2570803883@qq.com",
});
const modifyTitle = ref("");

const modifyStbmit = ()=> {
	
}

// const changeTime = (date)=> {
// 	return 
// }

</script>

<style lang="scss" scoped>
@import "../../commons/css/common.scss";
.top-bar {
	background: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
}

.main {
	padding-top: 118rpx;
	display: flex;
	flex-direction: column;
	.column {
		display: flex;
		flex-direction: column;
		padding-top: 12rpx;
		width: 100%;
		border-bottom: 1px solid $uni-border-color;
		.row {
			display: flex;
			flex-direction: row;
		}
		.title {
			flex: none;
			padding: 0 $uni-spacing-col-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 112rpx;
		}
		.head {
			height: 148rpx;
			display: flex;
			align-items: center;
		}
		.user-img {
			width: $uni-img-size-lg;
			height: $uni-img-size-lg;
			border-radius: $uni-border-radius-base;
		}
		.user-head {
			flex: auto;
		}
		.cont {
			flex: auto;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;
			line-height: 112rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.more {
			flex: none;
			height: 112rpx;
			display: flex;
			align-items: center;
			image {
				width: 80rpx;
				height: 28rpx;
			}
		}
	}
	.btn-two {
		margin-top: 160rpx;
		text-align: center;
		font-size: $uni-font-size-lg;
		color: $uni-color-warning;
		line-height: 88rpx;
	}
}
.modify {
	position: fixed;
	z-index: 1002;
	// top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #fff;
	.modify-header {
		width: 100%;
		height: 88rpx;
		padding-top: var(--status-bar-height);
		display: flex;
		flex-direction: row;
		align-items: center;
		.close {
			padding-left: $uni-spacing-col-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
		.title {
			flex: auto;
			text-align: center;
			font-size: 40rpx;
			color:$uni-text-color;
			line-height: 88rpx;
		}
		.define {
			padding-right: $uni-spacing-col-base;
			font-size: $uni-font-size-lg;
			color: $uni-color-success;
			line-height: 44rpx;
		}
	}
	.modify-main {
		display: flex; 
		flex-direction: column;
		padding: $uni-spacing-col-base;
		.modify-pwd {
			margin-bottom: $uni-spacing-col-base;
			padding: 0 20rpx;
			box-sizing: border-box;
			width: 100%;
			height: 88rpx;
			background-color: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 88rpx;
		}
		.modify-content {
			padding: 16rpx 20rpx;
			box-sizing: border-box;
			flex: auto;
			width: 100%;
			height: 386rpx;
			background-color: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
	}
}
</style>
