<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backBefore">
				<image src="../../static/images/common/左箭头.png"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">好友请求</view>
			</view>
			<view class="top-bar-right">
				<view class="price"></view>
			</view>
		</view>
		<view class="main">
			<view class="requester">
				<view class="request-top">
					<view class="reject btn">拒绝</view>
					<view class="header-img">
						<image src="../../static/images/img/OIP4.jpg"></image>
					</view>
					<view class="aggree btn">同意</view>
				</view>
				<view class="request-center">
					<view class="title">这里是名字</view>
					<view class="time">2020-05-01</view>
				</view>
				<view class="notic">
					<text>留言：</text>
					·········································
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { backBefore } from "../../commons/js/tool.js";
import { ref } from "vue";




</script>

<style lang="scss" scoped>
@import "../../commons/css/common.scss";

.top-bar {
	background: rgba(255, 255, 255, 0.96);
	border-bottom: 1px solid $uni-border-color;
}

.main {
	padding: 88rpx $uni-spacing-col-base;
	.requester {
		margin: 132rpx 0 20rpx;
		padding: $uni-spacing-col-base;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.1);
		border-radius: $uni-border-radius-base;
	}
	.request-top {
		display: flex;
		flex-direction: row;
		.btn {
			flex: none;
			text-align: center; 
			width: 160rpx;
			height: 64rpx;
			// text-align: center;
			border-radius: 40rpx;
			line-height: 64rpx;
			background-color: $uni-font-size-lg;
			border-radius: 40rpx;
		}
		.reject {
			color: $uni-color-warning;
			background-color: rgba(255, 93, 91, 0.1);
		}
		.aggree {
			color: $uni-text-color;
			background-color: $uni-color-primary;
		}
		.header-img {
			margin-top: -104rpx;
			flex: auto;
			text-align: center;
			image { 
				width: 144rpx;
				height: 144rpx;
				border-radius: 50%;
				background-color: $uni-color-primary;
			}
		}
	}
	.request-center {
		text-align: center;
		padding-top: 20rpx;
		padding-bottom: 40rpx;
		.title {
			font-size: 36rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 50rpx;
		}
		.time {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-disable;
			line-height: 34rpx;
		}
	}
	.notic {
		padding: $uni-spacing-row-sm $uni-spacing-col-base;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-grey;
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		line-height: 40rpx;
	}
}

</style>
