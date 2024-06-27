<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img">
					<image :src="toc" @tap="record"></image>
				</view>
				<textarea 
					class="chat-send btn" 
					v-show="!isRecord" 
					auto-height="true" 
					@input="inputs" 
					v-model="msg"
					@focus="inputFocus"
				></textarea>
				<view 
					class="record btn" 
					v-show="isRecord" 
					@touchstart="touchStart" 
					@touchend="touchEnd"
					@touchmove="touchMove"
					>按住说话
				</view>
				<view class="bt-img" @tap="emoji">
					<image src="../../static/images/submit/biaoqing.png"></image>
				</view>
				<view class="bt-img" @tap="more">
					<image src="../../static/images/submit/tianjia.png"></image>
				</view>
			</view>
			<view class="emoji" v-show="isEmoji">
				<view class="emoji-send">
					<view class="emoji-send-det" @tap="emojiBack">
						<image src="../../static/images/submit/操作-退格.png"></image>
					</view>
					<view class="emoji-send-bt" @tap="emojiSend">发送</view>
				</view>
				<Emoji @emotion="GetEmoji" :height="260"></Emoji>
			</view>
			<!-- <view class="emoji" v-show="isEmoji">
				<view class="emoji-send">
					<view class="emoji-send-det" @tap="emojiBack">
						<image src="../../static/images/submit/操作-退格.png"></image>
					</view>
					<view class="emoji-send-bt" @tap="emojiSend">发送</view>
				</view>
				<Emoji @emotion="GetEmoji" :height="260"></Emoji>
			</view> -->
			<view class="more" v-show="isMore">
				<view class="more-list">
					<image src="../../static/images/submit/31paishexuanzhong.png" @tap="sendImg('album')"></image>
					<view class="more-list-title">
						图片
					</view>
				</view>
				<view class="more-list">
					<image src="../../static/images/submit/31paishexuanzhong.png" @tap="sendImg('album')"></image>
					<view class="more-list-title">
						拍照
					</view>
				</view>
				<view class="more-list" @tap="chooseLoc">
					<image src="../../static/images/submit/weizhi.png"></image>
					<view class="more-list-title">
						定位
					</view>
				</view>
				<view class="more-list">
					<image src="../../static/images/submit/luxiang1.png" ></image>
					<view class="more-list-title">
						视频
					</view>
				</view>
				<view class="more-list">
					<image src="../../static/images/submit/31paishexuanzhong.png" ></image>
					<view class="more-list-title">图片</view>
				</view>
				<view class="more-list">
					<image src="../../static/images/submit/31paishexuanzhong.png"></image>
					<view class="more-list-title">
						图片
					</view>
				</view>
			</view>
		</view>
		<view class="voice-bg" v-if="isVoiceBg">
			<view class="voice-bg-len">
				<view class="voice-bg-time" :style="{width:vLength/0.6+'%'}">{{ vLength }}&prime;</view>
			</view>
			<view class="voice-del">上滑取消录音</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted, nextTick } from "vue";
import Emoji from "../Emoji/Emoji.vue";
import { onReady, onLoad  } from '@dcloudio/uni-app';
import { chatDate } from "../../commons/js/mintTime";

// 是否切换音频
let isRecord = ref(false);
// 语音或键盘图标
let toc = ref("../../static/images/submit/jianpan.png");
// 是否选择表情
let isEmoji = ref(false);
// 输入框内容
let msg = ref("");
// 是否显示更多
let isMore = ref(false);
// 语音计算器
let voiceTimeout = ref("");
// 录音时常
let vLength = ref(0);
// 提示录音背景
let isVoiceBg = ref(false);
// 点击录音时的高度
let pageY = ref(0);
// 当前全局的录音管理
const recorderManager = uni.getRecorderManager();

// 切换音频
const record = ()=> {
	isRecord.value = !isRecord.value;
	isMore.value = isEmoji.value = false;
	toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
}

const emit = defineEmits(["chat", "heights"]);

const inputs = (e)=> {
	let chatContent = e.detail.value;
	let pos = chatContent.indexOf("\n");
	if(pos != -1 && chatContent.length > 1) {
		send(msg.value, 0);
	}
}

// 获取组件高度
const getSubHeight = ()=> {
	const query = uni.createSelectorQuery().in(getCurrentInstance());
	query.select(".submit").boundingClientRect(data=> {
		console.log(data)
		emit("heights", data.height);
	}).exec();
}
// 点击表情
const emoji = ()=> {
	isEmoji.value = !isEmoji.value;
	isMore.value = false;
	isRecord.value = false;
	toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
	nextTick(()=> {
		getSubHeight();
	});
}
// 接收表情
const GetEmoji = (emo)=> {
	msg.value = msg.value + emo;
}
// 点击发送
const emojiSend = ()=> {
	if(msg.value.length > 0) {
		send(msg.value, 0);
	}
}
// 表情退格
const emojiBack = ()=> {
	if(msg.value.length > 0) {
		msg.value = msg.value.substring(0, msg.value.length - 1);
	}
}
// 输入框聚焦
const inputFocus = ()=> {
	isMore.value = false;
	isEmoji.value = false;
	setTimeout(()=> {
		getSubHeight();
	}, 10);
}

// 发送
const send = (msgs, type)=> {
	let data = {
		message: msgs,
		types: type,
	}
	emit("chat", data);
	setTimeout(()=> {
		msg.value = "";
	}, 0)
}

// 更多功能
const more = ()=> {
	isMore.value = !isMore.value;
	isEmoji.value = false;
	isRecord.value = false;
	toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
	setTimeout(()=> {
		getSubHeight();
	}, 10);
}
// 图片发送
const sendImg = (data)=> {
	let  count = 9;
	if(data == "album") {
		count = 9;
	} else {
		count = 1;
	}
	uni.chooseImage({
		count: count,
		sizeType: ["original", "compressed"],
		sourceType: [data],
		success: (res)=> {
			const filePaths = res.tempFilePaths;
			filePaths.forEach((ele, idx)=> {
				send(ele, 1);
			});
			// console.log(JSON.stringify(res.tempFilePaths));
		},
	});
}
// 开始语音处理
const touchStart = (e)=> {
	console.log(e.changeTouches);
	pageY.value = e.changedTouches[0].pageY;
	isVoiceBg.value = true;
	let timeCount = 1;
	voiceTimeout.value = setInterval(()=>{
		vLength.value = timeCount;
		timeCount++;
		// console.log(timeCount)
		if(timeCount > 60) {
			clearInterval(voiceTimeout.value);
			touchEnd();
		}
	}, 1000);
	recorderManager.start(6000);
}
// 结束语音处理
const touchEnd = ()=> {
	// console.log("end");
	
	clearInterval(voiceTimeout.value);
	recorderManager.stop();
	recorderManager.onStop((res)=> {
		let data = {
			voice: res.tempFilePath,
			time: vLength.value,
		}
		// console.log('recorder stop' + JSON.stringify(res));
		if(isVoiceBg.value) {
			send(data, 2);
		}
		vLength.value = 0;
		isVoiceBg.value = false;
	});
}
//中止录音
const touchMove = (e)=> {
	if(pageY.value - e.changedTouches[0].pageY > 100) {
		isVoiceBg.value = false;
		// console.log("del voice");
	}
}
// 选择位置
const chooseLoc = (e)=> {
	uni.chooseLocation({
		success: res=> {
			let data = {
				name: res.name,
				address: res.address,
				latitude: res.latitude,
				longitude: res.longitude,
			}
			send(data, 3);
		}
	})
}

</script>

<style lang="scss" scoped>
.submit {
	background-color: rgba(244, 244, 244, 1);
	border-top: 1px solid $uni-border-color;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 1002;
	// padding: var(--status-bar-height);
	padding-bottom: env(safe-area-inset-bottom);
}
.submit-chat {
	width: 100%;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;
	padding: 14rpx 14rpx;
	image {
		width: 56rpx;
		height: 56rpx;
		margin: 0 10rpx;
		flex: auto;
	}
	.btn {
		flex: auto;
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		max-height: 160rpx;
		margin: 0 10rpx;
	}
	.chat-send {
		line-height: 44rpx;
	}
	.record {
		line-height: 44rpx;
		text-align: center;
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
	}
}
.emoji {
	width: 100%;
	height: 460rpx;
	background-color: rgba(236, 237, 238, 1);
	box-shadow: 0 -1rpx 0 0 rgba(0, 0, 0, 0.1);
	.emoji-send {
		width: 280rpx;
		height: 104rpx;
		padding-top: 24rpx;
		background-color: rgba(236, 237, 238, 0.8);
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		bottom: env(safe-area-inset-bottom);
		.emoji-send-bt {
			flex: 1;
			margin: 0 32rpx 0 20rpx;
			height: 80rpx;
			background-color: rgba(255, 228, 48, 0.5);
			font-size: 32rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 12rpx;
		}
		.emoji-send-det {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 24rpx;
			height: 80rpx;
			background-color: #fff;
			font-size: 32rpx;
			text-align: center;
			line-height: 80rpx;
			// padding-top: 15rpx;
			border-radius: 12rpx;
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
}
.more {
	width: 100%;
	height: 436rpx;
	background-color: rgba(0, 0, 0, 0.1);
	box-shadow: 0px 1rpx 0 0 rgba(0, 0, 0, 0.1);
	bottom: env(safe-area-inset-bottom);
	padding: 8rpx 20rpx;
	box-sizing: border-box;
	.more-list {
		width: 25%;
		text-align: center;
		float: left;
		padding-top: 32rpx;
		image {
			width: 72rpx;
			height: 72rpx;
			padding: 24rpx;
			background-color: rgba(255, 255, 255, 1);
			border-radius: 24rpx;
		}
		.more-list-title {
			font-size: 24rpx;
			color: rgba(39, 40, 50, 0.5);
			line-height: 34rpx;
		}
	}
}
.voice-bg {
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 1001;
	.voice-bg-len {
		height: 84rpx;
		width: 600rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 42rpx;
		text-align: center;
	}
	.voice-bg-time {
		display: inline-block;
		min-width: 120rpx;
		line-height: 84rpx;
		background-color: $uni-color-primary;
		border-radius: 42rpx;
	}
	.voice-del {
		position: absolute;
		bottom: 148rpx;
		margin-bottom: env(safe-area-inset-bottom);
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: $uni-font-size-base;
	}
}

</style>