// import { func } from "prop-types";

export default {
	friends: function() {
		let friendArr = [
			{
				id: 1,
				imgurl: "OIP1.jpg",
				tip: 2,
				name: "明朝",
				email: "mingchao@example.com",
				time: new Date(),
				news: '未识百二秦关， 既见良人， 心中自此兵荒马乱。',
			},
			{
				id: 2,
				imgurl: "OIP2.jpg",
				tip: 0,
				name: "哒请",
				email: "wangwei@example.com",
				time: new Date(),
				news: '未来的我，腹有诗书，眼有山川日月，心有你。',
			},
			{
				id: 3,
				imgurl: "OIP3.jpg",
				tip: 6,
				name: "劳达",
				email: "mingchao@example.com",
				time: new Date(),
				news: '我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你',
			},
			{
				id: 4,
				imgurl: "OIP4.jpg",
				tip: 0,
				name: "老豁",
				email: "chenhao@example.com",
				time: new Date(),
				news: '你的眸中有山川河流 胜过我行经路上的一切不朽',
			},{
				id: 5,
				imgurl: "OIP1.jpg",
				tip: 2,
				name: "明朝",
				email: "mawei@example.com",
				time: new Date(),
				news: '未识百二秦关， 既见良人， 心中自此兵荒马乱。',
			},
			{
				id: 6,
				imgurl: "OIP2.jpg",
				tip: 0,
				name: "哒请",
				email: "liuqing@example.com",
				time: new Date(),
				news: '未来的我，腹有诗书，眼有山川日月，心有你。',
			},
			{
				id: 7,
				imgurl: "OIP3.jpg",
				tip: 6,
				name: "劳达",
				email: "zhaoliu@example.com",
				time: new Date(),
				news: '我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你',
			},
			{
				id: 8,
				imgurl: "OIP4.jpg",
				tip: 56,
				name: "老豁",
				email: "zhangsan@example.com",
				time: new Date(),
				news: '你的眸中有山川河流 胜过我行经路上的一切不朽',
			},
			{
				id: 9,
				imgurl: "OIP1.jpg",
				tip: 2,
				name: "明朝",
				email: "liuqing@example.com",
				time: new Date(),
				news: '未识百二秦关， 既见良人， 心中自此兵荒马乱。',
			},
			{
				id: 10,
				imgurl: "OIP2.jpg",
				tip: 8,
				name: "哒请",
				email: "tianqi@example.com",
				time: new Date(),
				news: '未来的我，腹有诗书，眼有山川日月，心有你。',
			},
			{
				id: 11,
				imgurl: "OIP3.jpg",
				tip: 0,
				name: "劳达",
				email: "chenhao@example.com",
				time: new Date(),
				news: '我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你',
			},
			{
				id: 12,
				imgurl: "OIP4.jpg",
				tip: 56,
				name: "老豁",
				email: "tianqi6k@example.com",
				time: new Date(),
				news: '你的眸中有山川河流 胜过我行经路上的一切不朽',
			},
		];
		return friendArr;
	},
	isFriend: function() {
		let isFriend = [
			{
				userid: 1,
				friend: 2,
			},
			{
				userid: 1,
				friend: 5,
			},
			{
				userid: 1,
				friend: 3,
			},
			{
				userid: 2,
				friend: 8,
			},
			{
				userid: 2,
				friend: 6,
			}
		];
		return isFriend;
	},
	message: function() {
		let msgs = [
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "I caught my squirrel rustling through my gym bag.",
				types: 0, // 内容类型
				time: new Date() - 1000, // 发送时间
				tip: 0,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "I am counting my caloriesyet I really want dessert.",
				types: 0, // 内容类型
				time: new Date() - 1000 * 16, // 发送时间
				tip: 1,
			},
			{
				id: "b", // 用户id
				imgurl: "OIP2.jpg",
				message: "For the 216th time he said he would quit drinking soda after this last Coke.",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60), // 发送时间
				tip: 2,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "OIP3.jpg",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 36), // 发送时间
				tip: 3,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "OIP4.jpg",
				types: 1, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 40), // 发送时间
				tip: 4,
			},
			{
				id: "b", // 用户id
				imgurl: "OIP2.jpg",
				message: "OIP4.jpg",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 50), // 发送时间
				tip: 2,
			},
			{
				id: "b", // 用户id
				imgurl: "OIP2.jpg",
				message: "time",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60), // 发送时间
				tip: 2,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "OIP3.jpg",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 70), // 发送时间
				tip: 3,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: "OIP4.jpg",
				types: 1, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 80), // 发送时间
				tip: 4,
			},
			{
				id: "b", // 用户id
				imgurl: "OIP2.jpg",
				message: "OIP4.jpg",
				types: 0, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 90), // 发送时间
				tip: 2,
			},
			{
				id: "a", // 用户id
				imgurl: "OIP1.jpg",
				message: {
					voice: "a",
					time: 60,
				},
				types: 2, // 内容类型
				time: new Date() - 1000, // 发送时间
				tip: 6,
			},
			{
				id: "b", // 用户id
				imgurl: "OIP2.jpg",
				message: {
					voice: "a",
					time: 2,
				},
				types: 2, // 内容类型
				time: new Date(new Date() - 1000 * 60 * 90), // 发送时间
				tip: 7,
			},
			
		];
		const randomMessages = [
			"I spilled coffee on my keyboard and it made me feel alive.",
			"My cat just knocked over my plant and looked at me like it was my fault.",
			"Just found out my neighbor's dog has a Twitter account.",
			"Tried to take a nap and ended up planning my entire week.",
			"Accidentally wore slippers to a video call. No one noticed.",
			"I think my houseplant is judging me.",
			"I just accidentally liked my ex's photo from 3 years ago.",
			"Started a TV show marathon and forgot to eat.",
			"Decided to organize my closet and found clothes I forgot I owned.",
			"My phone autocorrected 'food' to 'good' and it's the most accurate thing it's ever done.",
			"I just realized I've been using the wrong emojis for an entire conversation.",
			"Forgot my umbrella on the rainiest day of the year.",
			"Accidentally sent a screenshot to the person I screenshotted.",
			"Binge-watched a whole season in one night and now I regret nothing.",
			"Dropped my phone and it somehow survived without a scratch.",
			"Caught my dog eating my homework. Not sure how to explain that one.",
			"My GPS took me to a closed restaurant and I had to eat elsewhere.",
			"Spent an hour looking for my glasses, only to realize they were on my head.",
			"Ordered takeout and forgot to ask for utensils.",
			"Accidentally liked my own social media post from 5 years ago."
		];
		for (let i = 0; i < 20; i++) {
			let randomIndex = Math.floor(Math.random() * randomMessages.length);
			let randomId = Math.random() < 0.5 ? "a" : "b"; 
			msgs.push({
				id: randomId,
				imgurl: randomId === "a" ? "OIP1.jpg" : "OIP2.jpg",
				message: randomMessages[randomIndex],
				types: 0,
				time: new Date(new Date() - Math.random() * 1000 * 60 * 60 * 24 * 7), 
				tip: Math.floor(Math.random() * 4), 
			});
		  }
		return msgs;
	}
}