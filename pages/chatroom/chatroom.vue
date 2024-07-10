<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backBefore">
				<image src="../../static/images/common/左箭头.png"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">
					小明
				</view>
			</view>
			<view class="top-bar-right">
				<view class="price"></view>
				<view class="group-img">
					<image src="../../static/images/img/OIP1.jpg"></image>
				</view>
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" :scroll-with-animation="swAni" :scroll-into-view="scrollToView" @scrolltoupper="nextPage">
			<view class="chat-main" :style="{paddingBottom:emojiHeight+'px'}">
				<view class="loading" v-show="isLoad">
					<image class="loading-img" src="../../static/images/chatroom/加载.png" :animation="aniLoadData"></image>
				</view>
				<view class="chat-ls" v-for="(item, index) in msgs" :key="item.id" :id="'msg'+item.tip">
					<view class="chat-time" v-if="item.time != ''">{{ changeTime(item.time) }}</view>
					<view class="msg-m msg-left" v-if="item.id != 'b'">
						<image class="user-img" :src="item.imgurl"></image>
						<view class="message" v-if="item.types == 0">
							<view class="msg-text">{{ item.message }}</view>
						</view>
						<view class="message" v-if="item.types == 1" >
							<img 
								class="msg-img" 
								:src="item.message" 
								alt="图片已丢失" 
								mode="widthFix" 
								@tap="previewImg(item.message)" 
							/>
						</view>
						<view class="message" v-if="item.types == 2" >
							<view class="msg-text voice" :style="{width:item.message.time*4+'px'}" @tap="playVoice(item.message.voice)">
								<image class="voice-img" src="../../static/images/chatroom/语音.png"></image>
								{{ item.message.time }}&Prime;
							</view>
						</view>
						<view class="message" v-if="item.types == 3" >
							<view class="msg-map" @tap="openLoc(item.message)">
								<view class="map-name">{{ item.message.name }}</view>
								<view class="map-address">{{ item.message.address }}</view>
                            <!-- <map
									class="map" 
									:longitude="item.message.longitude" 
									:latitude="item.message.latitude" 
									:markers="covers(item.message)"
									>
								</map> -->
								<image class="map-img" src="../../static/images/chatroom/mapSeat.jpg" mode="aspectFill"></image>
							</view>
						</view>
					</view>
					<view class="msg-m msg-right" v-if="item.id == 'b'">
						<image class="user-img" :src="item.imgurl"></image>
						<view class="message">
							<view class="msg-text" v-if="item.types == 0">{{ item.message }}</view>
						</view>
						<view class="message" v-if="item.types == 1" >
							<img 
								class="msg-img" 
								:src="item.message" 
								alt="图片已丢失" 
								mode="widthFix" 
								@tap="previewImg(item.message)"  
							/>
						</view>
						<view class="message" v-if="item.types == 2" >
							<view class="msg-text voice" :style="{width:item.message.time*4+'px'}" @tap="playVoice(item.message.voice)">
								<image class="voice-img" src="../../static/images/chatroom/语音.png"></image>
								{{ item.message.time }}&Prime;
							</view>
						</view>
						<view class="message" v-if="item.types == 3" >
							<view class="msg-map" @tap="openLoc(item.message)">
								<view class="map-name">{{ item.message.name }}</view>
								<view class="map-address">{{ item.message.address }}</view>
								<!-- <cover-view> -->
								<!-- <map
									class="map" 
									:longitude="item.message.longitude" 
									:latitude="item.message.latitude" 
									:markers="covers(item.message)"
									>
								</map> -->
								<image class="map-img" src="../../static/images/chatroom/mapSeat.jpg" mode="aspectFill"></image>
								<!-- </cover-view> -->
								<!-- <cover-view class="map-cover-view">
									<cover-image class="cover-marker" src="../../static/images/chatroom/定位.png"> </cover-image>
								</cover-view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="padbt"></view>
		</scroll-view>
		<Submit @chat="getChat" @heights="getHeights"></Submit>
	</view>
</template>

<script setup>
import { backBefore, getDate, createAni } from "../../commons/js/tool.js";
import { chatDate, spaceTime } from "../../commons/js/mintTime.js"
import data from "../../commons/js/data.js";
import { ref, reactive, nextTick } from "vue";
import { onLoad, onShow } from "@dcloudio/uni-app";
import Submit from "../../components/Submit/Submit.vue";


// 聊天列表数据
let msgs = reactive([]);
// 图片数据
let imgMsg = reactive([]);
let oldTime = reactive(new Date());
// 
let scrollToView = ref("");
// 
let emojiHeight = ref("60");
// 录音管理器
const innerAudioContext = uni.createInnerAudioContext(); 
// 加载图片动画
let aniLoadData = ref({});
// 分页
let nowPage = ref(0);
// 加载图片的定时器
let loadTimeout = ref(null);
// 是否有加载
let isLoad = ref(false);
// 列表滚动动画
let swAni = ref(true);
// 逐步加载
let progressLoad = ref(true);

onLoad(()=> {
	getMsg(nowPage.value);
	// nextPage();
});

// 获取聊天数据
const getMsg = (page)=> {
	// 获取mock数据 以提供测试测试
	let msg = data.message();
	let maxPage = msg.length;
	if(msg.length > (page + 1) * 10) {
		maxPage = (page + 1) * 10;
		nowPage.value++;
	} else {
		// 数据已经取完
		nowPage.value = -1;
	}
	for(let i = page * 10; i < maxPage; i++) {
		msg[i].imgurl = "../../static/images/img/" + msg[i].imgurl;
		// 时间间隔
		if(i < msg.length - 1) {
			let t = spaceTime(oldTime, msg[i].time);
			if(t) {
				oldTime = t;
			}
			msg[i].time = t;
		}
		// 补充图片地址
		if(msg[i].types == 1) {
			msg[i].message = "../../static/images/img/" + msg[i].message;
			imgMsg.unshift(msg[i].message);
		}
		msgs.unshift(msg[i]);
	}
	nextTick(()=> {
		swAni.value = true;
		scrollToView.value = "msg" + msgs[maxPage - page * 10 - 1].tip;
	});
	// 清除加载循环l
	clearInterval(loadTimeout);
	isLoad.value = false;
	// 开启加载
	progressLoad.value = true;
}

// 处理时间
const changeTime = (date)=> {
	// console.log(chatDate(date))
	return chatDate(date);
}

// 预览图片
const previewImg = (imgInfo)=> {
	let index = 0;
	imgMsg.forEach((ele, idx)=> {
		if(ele === imgInfo) {
			index = idx;
		}
	});
	uni.previewImage({
		current: index,
		urls: imgMsg,
		longPressActions: {
			itemList: ['发送给朋友', '保存图片', '收藏'],
			success: (data)=> {
				
			},
			fail: (err)=> {
				
			}
		}
	});
}
// 输入框的聊天内容
const getChat = (obj)=> {
	// console.log(obj); 
	// if (!obj || typeof obj.message === 'undefined' || typeof obj.types === 'undefined') {
	//     console.error('Invalid object structure:', obj);
	//     return;
	// }
	swAni.value = true;
	let len = msgs.length;
	let nowTime = new Date();
	// 时间间隔
	let t = spaceTime(oldTime, nowTime);
	if(t) {
		oldTime = t;
	}
	
	nowTime = t;
	let chatData = {
		id: "b", // 用户id
		imgurl: "../../static/images/img/OIP1.jpg",
		message: obj.message,
		types: obj.types, // 内容类型
		time: nowTime, // 发送时间
		tip: len,
	};
	msgs.push(chatData);
	nextTick(()=> {
		scrollToView.value = "msg" + len;
	});
	if(obj.types == 1) {
		imgMsg.push(obj.message);
	}
}

// 处理表情所需要的高度
const getHeights = (height)=> {
	emojiHeight.value = height;
	goBottom();
}
// 滚动到底部
const goBottom = ()=> {
	swAni.value = true;
	scrollToView.value = "";
	nextTick(()=> {
		scrollToView.value = "msg" + msgs[msgs.length - 1].tip;
	})
}
// 播放音频
const playVoice = (e)=> {
	innerAudioContext.src = e;
	innerAudioContext.onPlay();
}
// 地图定位
const covers = (e)=> {
	let map = [{
		latitude: e.latitude,
		longitude: e.longitude,
		iconPath: "../../static/images/chatroom/定位.png",
	}];
	return map;
}

// 滚动到顶部加载下一页
const nextPage = ()=> {
	if(nowPage.value > 0 && progressLoad.value) {
		isLoad.value = true;
		progressLoad.value = false;
		let animation = uni.createAnimation({
			duration: 1000,
			timingFunction: "step-start",
		});
		
		let i = 1;
		loadTimeout = setInterval(() => {
			animation.rotate(i * 30).step();
		    aniLoadData.value = animation.export()
		    i++;
			getMsg(nowPage.value); 
		}, 1000);
	}
};

// 点击查看地图
const openLoc = (value)=> {
	uni.openLocation({
		latitude: value.latitude,
		longitude: value.longitude,
		name: value.name,
		address: value.address,
		success: ()=> {
			console.log("success");
		}
	})
}

</script>

<style lang="scss" scoped>
@import "../../commons/css/common.scss";

page {
	height: 100%;
}
.content {
	height: 100%;
	background-color: rgba(244, 244, 244, 1);
}

.top-bar {
	background: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
	.group-img {
		position: absolute;
		bottom: 10rpx;
		right: $uni-spacing-col-base;
		width: 68rpx;
		height: 68rpx;
		image {
			width: 68rpx;
			height: 68rpx;
			border-radius: 16rpx;
		}
	}
}
.chat {
	height: 100%;
	.padbt {
		height: env(safe-area-inset-bottom);
		width: 100%;
	}
	.loading {
		text-align: center;
		.loading-img {
			width: 60rpx;
			height: 60rpx;
		}
	}
	.chat-main {
		padding-left: $uni-spacing-col-base;
		padding-right: $uni-spacing-col-base;
		padding-top: 100rpx;
		// padding-bottom: 120rpx;
		display: flex;
		flex-direction: column;
	}
	.chat-ls {
		.chat-time {
			font-size: $uni-font-size-sm;
			color: rgba(39, 40, 50, 0.3);
			line-height: 34rpx;
			padding: 20rpx 0;
			text-align: center;
		}
		.msg-m {
			display: flex;
			padding: 20rpx 0;
			.user-img {
				flex: none;
				width: $uni-img-size-sm;
				height: $uni-img-size-sm;
				border-radius: $uni-border-radius-base;
			}
			.message {
				flex: none;
				max-width: 480rpx;
			}
			.msg-text {
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
				padding: 18rpx 24rpx;
			}
			.msg-img {
				max-width: 400rpx;
				border-radius: $uni-border-radius-base;
			}
			.voice {
				min-width: 88rpx;
				max-width: 400rpx;
			}
			.voice-img {
				width: 28rpx;
				height: 36rpx;
			}
			.msg-map {
				width: 464rpx;
				height: 284rpx;
				overflow: hidden;
				background-color: #fff;
				position: relative;
				.map-name {
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 44rpx;
					padding: 18rpx 24rpx 0 24rpx;
					overflow: hidden;
				}
				.map-address {
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					padding: 0 24rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
				.map {
					width: 464rpx;
					height: 180rpx;
					padding-top: 10rpx;
					position: absolute;
					z-index: 0;
				}
				.map-img {
					padding-top: 8rpx;
					width: 480rpx;
					height: 180rpx;
				}
				.map-cover-view {
					position: absolute;
					
				}
				.cover-marker {
					width: 464rpx;
					height: 180rpx;
				}
			}
			
		}
		.msg-left {
			flex-direction: row;
			.msg-text {
				margin-left: 16rpx;
				background-color: #fff;
				border-radius: 0rpx 20rpx 20rpx 20rpx;
			}
			.msg-img {
				margin-left: 16rpx;
			}
			.voice {
				text-align: right;
			}
			.voice-img {
				float: left;
				// transform: rotate(-180deg);
				padding-bottom: 10rpx;
				width: 28rpx;
				height: 36rpx;
			}
			.msg-map {
				margin-left: 16rpx;
				border-radius: 0 20rpx 20rpx 20rpx;
			}
		}
		.msg-right {
			flex-direction: row-reverse;
			.msg-text {
				margin-right: 16rpx;
				background-color: #fff260;
				border-radius: 20rpx 0rpx 20rpx 20rpx;
			}
			.msg-img {
				margin-right: 16rpx;
			}
			.voice {
				text-align: left;
				.voice-img {
					float: right;
					transform: rotate(180deg);
					width: 28rpx;
					height: 36rpx;
					padding-top: 4rpx;
				}
			}
			.msg-map {
				margin-right: 16rpx;
				border-radius: 20rpx 0 20rpx 20rpx;
			}
		}
	}
}


</style>
