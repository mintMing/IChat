"use strict";
const data = {
  friends: function() {
    let friendArr = [
      {
        id: 1,
        imgurl: "OIP1.jpg",
        tip: 2,
        name: "明朝",
        email: "mingchao@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未识百二秦关， 既见良人， 心中自此兵荒马乱。"
      },
      {
        id: 2,
        imgurl: "OIP2.jpg",
        tip: 0,
        name: "哒请",
        email: "wangwei@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未来的我，腹有诗书，眼有山川日月，心有你。"
      },
      {
        id: 3,
        imgurl: "OIP3.jpg",
        tip: 6,
        name: "劳达",
        email: "mingchao@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你"
      },
      {
        id: 4,
        imgurl: "OIP4.jpg",
        tip: 0,
        name: "老豁",
        email: "chenhao@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "你的眸中有山川河流 胜过我行经路上的一切不朽"
      },
      {
        id: 5,
        imgurl: "OIP1.jpg",
        tip: 2,
        name: "明朝",
        email: "mawei@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未识百二秦关， 既见良人， 心中自此兵荒马乱。"
      },
      {
        id: 6,
        imgurl: "OIP2.jpg",
        tip: 0,
        name: "哒请",
        email: "liuqing@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未来的我，腹有诗书，眼有山川日月，心有你。"
      },
      {
        id: 7,
        imgurl: "OIP3.jpg",
        tip: 6,
        name: "劳达",
        email: "zhaoliu@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你"
      },
      {
        id: 8,
        imgurl: "OIP4.jpg",
        tip: 56,
        name: "老豁",
        email: "zhangsan@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "你的眸中有山川河流 胜过我行经路上的一切不朽"
      },
      {
        id: 9,
        imgurl: "OIP1.jpg",
        tip: 2,
        name: "明朝",
        email: "liuqing@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未识百二秦关， 既见良人， 心中自此兵荒马乱。"
      },
      {
        id: 10,
        imgurl: "OIP2.jpg",
        tip: 8,
        name: "哒请",
        email: "tianqi@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "未来的我，腹有诗书，眼有山川日月，心有你。"
      },
      {
        id: 11,
        imgurl: "OIP3.jpg",
        tip: 0,
        name: "劳达",
        email: "chenhao@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "我找你的时候就是爆炸想你 ，没找你的时候就是在憋着想你"
      },
      {
        id: 12,
        imgurl: "OIP4.jpg",
        tip: 56,
        name: "老豁",
        email: "tianqi6k@example.com",
        time: /* @__PURE__ */ new Date(),
        news: "你的眸中有山川河流 胜过我行经路上的一切不朽"
      }
    ];
    return friendArr;
  },
  isFriend: function() {
    let isFriend = [
      {
        userid: 1,
        friend: 2
      },
      {
        userid: 1,
        friend: 5
      },
      {
        userid: 1,
        friend: 3
      },
      {
        userid: 2,
        friend: 8
      },
      {
        userid: 2,
        friend: 6
      }
    ];
    return isFriend;
  }
};
exports.data = data;
