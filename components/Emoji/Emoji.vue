<template>
	<view class="emoji" :style="{height:height+'px'}">
		<view class="emoji-line" v-for="(line, index) in emoji" :key="index">
			<view 
				class="emoji-line-item" 
				v-for="(item, idx) in line"
				:key="idx" 
				@tap="clickEmoji(item)"
			>
			{{ item }}
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";

const emoji = reactive([
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
	["😀", "😁", "😂", "😅"],
]);

const emit = defineEmits(["emotion"]);

const props = defineProps({
	height: {
		type: Number,
		default: 260,
	},
})

const clickEmoji = (item)=> {
	emit("emotion", item);
}

</script>

<style lang="scss" scoped>
.emoji {
	width: 100%;
	// height: 460rpx;
	padding: 16rpx 10rpx 180rpx 10rpx;
	box-sizing: border-box;
	overflow: hidden;
	overflow-y: auto;
	.emoji-line {
		display: flex;
		.emoji-line-item {
			flex: 1;
			text-align: center;
			font-size: 52rpx;
			line-height: 72rpx;
		}
	}
}

</style>