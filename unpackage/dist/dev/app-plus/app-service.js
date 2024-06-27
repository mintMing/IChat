if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
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
    },
    message: function() {
      let msgs = [
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "I caught my squirrel rustling through my gym bag.",
          types: 0,
          // 内容类型
          time: /* @__PURE__ */ new Date() - 1e3,
          // 发送时间
          tip: 0
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "I am counting my caloriesyet I really want dessert.",
          types: 0,
          // 内容类型
          time: /* @__PURE__ */ new Date() - 1e3 * 16,
          // 发送时间
          tip: 1
        },
        {
          id: "b",
          // 用户id
          imgurl: "OIP2.jpg",
          message: "For the 216th time he said he would quit drinking soda after this last Coke.",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60),
          // 发送时间
          tip: 2
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "OIP3.jpg",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 36),
          // 发送时间
          tip: 3
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "OIP4.jpg",
          types: 1,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 40),
          // 发送时间
          tip: 4
        },
        {
          id: "b",
          // 用户id
          imgurl: "OIP2.jpg",
          message: "OIP4.jpg",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 50),
          // 发送时间
          tip: 2
        },
        {
          id: "b",
          // 用户id
          imgurl: "OIP2.jpg",
          message: "time",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60),
          // 发送时间
          tip: 2
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "OIP3.jpg",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 70),
          // 发送时间
          tip: 3
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: "OIP4.jpg",
          types: 1,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 80),
          // 发送时间
          tip: 4
        },
        {
          id: "b",
          // 用户id
          imgurl: "OIP2.jpg",
          message: "OIP4.jpg",
          types: 0,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 90),
          // 发送时间
          tip: 2
        },
        {
          id: "a",
          // 用户id
          imgurl: "OIP1.jpg",
          message: {
            voice: "a",
            time: 60
          },
          types: 2,
          // 内容类型
          time: /* @__PURE__ */ new Date() - 1e3,
          // 发送时间
          tip: 6
        },
        {
          id: "b",
          // 用户id
          imgurl: "OIP2.jpg",
          message: {
            voice: "a",
            time: 2
          },
          types: 2,
          // 内容类型
          time: new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 90),
          // 发送时间
          tip: 7
        }
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
          time: new Date(/* @__PURE__ */ new Date() - Math.random() * 1e3 * 60 * 60 * 24 * 7),
          tip: Math.floor(Math.random() * 4)
        });
      }
      return msgs;
    }
  };
  function dateTime(e) {
    let old = new Date(e);
    let now = /* @__PURE__ */ new Date();
    old.getTime();
    let h = old.getHours();
    let m = old.getMinutes();
    let Y = old.getFullYear();
    let M = old.getMonth() + 1;
    let D = old.getDate();
    now.getTime();
    now.getHours();
    let nY = now.getFullYear();
    let nM = now.getMonth() + 1;
    let nD = now.getDate();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (D === nD && M === nM && Y === nY) {
      return h + ":" + m;
    }
    let yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(now.getDate() - 1);
    if (Y === yesterday.getFullYear() && M === yesterday.getMonth() + 1 && D === yesterday.getDate()) {
      return "昨天 " + h + ":" + m;
    }
    return Y + "/" + (M < 10 ? "0" + M : M) + "/" + (D < 10 ? "0" + D : D);
  }
  function debounce(func, wait = 300, immediate = false) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(this, args);
      }
    };
  }
  function backBefore() {
    uni.navigateBack({
      delta: 1
    });
  }
  function getDate(type) {
    const date = /* @__PURE__ */ new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (type === "start") {
      year = year - 60;
    } else if (type === "end") {
      year = year + 2;
    }
    month = month > 9 ? month : "0" + month;
    day = day > 9 ? day : "0" + day;
    return `${year}-${month}-${day}`;
  }
  const createAni = (duration, timingFun, properties) => {
    let ani = uni.createAnimation({
      duration,
      timingFun
    });
    for (const prop in properties) {
      ani[prop](properties[prop]).step();
    }
    return ani.export();
  };
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$c = {
    __name: "index",
    setup(__props) {
      let friends = vue.reactive([]);
      onLoad(() => {
        getFriends();
      });
      const getFriends = () => {
        friends = data.friends();
        for (let i = 0; i < friends.length; i++) {
          friends[i].imgurl = "../../static/images/img/" + friends[i].imgurl;
        }
      };
      const changeTime = (date) => {
        return dateTime(date);
      };
      const toSearch = () => {
        uni.navigateTo({
          url: "../search/search"
        });
      };
      const toBuildGroup = () => {
        uni.navigateTo({
          url: "../buildgroud/buildgroud"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("navigator", {
              url: "../userhome/userhome?id=aaa",
              class: "top-bar-left",
              "hover-class": "none"
            }, [
              vue.createElementVNode("image", { src: "/static/images/img/OIP1.jpg" })
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("image", {
                src: "/static/images/index/火.png",
                class: "logo"
              })
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", {
                class: "search",
                onClick: toSearch
              }, [
                vue.createElementVNode("image", { src: "/static/images/index/search.png" })
              ]),
              vue.createElementVNode("view", {
                class: "add",
                onClick: toBuildGroup
              }, [
                vue.createElementVNode("image", { src: "/static/images/index/加.png" })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "friends" }, [
              vue.createElementVNode("view", { class: "friend-list" }, [
                vue.createElementVNode("view", { class: "friend-list-l" }, [
                  vue.createElementVNode("text", { class: "tip" }, "1"),
                  vue.createElementVNode("image", { src: "/static/images/index/添加用户.png" })
                ]),
                vue.createElementVNode("view", { class: "friend-list-r" }, [
                  vue.createElementVNode("view", { class: "top" }, [
                    vue.createElementVNode("view", { class: "name" }, "好友申请"),
                    vue.createElementVNode("view", { class: "time" }, "上午7：45")
                  ]),
                  vue.createElementVNode("view", { class: "news" }, "今夜江河之源，只亮我的酥油灯")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "friends" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(friends), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "friend-list",
                    keys: item.id
                  }, [
                    vue.createElementVNode("view", { class: "friend-list-l" }, [
                      item.tip > 0 ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "tip"
                        },
                        vue.toDisplayString(item.tip),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("image", {
                        src: item.imgurl,
                        mode: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "friend-list-r" }, [
                      vue.createElementVNode("view", { class: "top" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "name" },
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "time" },
                          vue.toDisplayString(changeTime(item.time)),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "news" },
                        vue.toDisplayString(item.news),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 8, ["keys"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/Instant-message-chat-rooms/pages/index/index.vue"]]);
  const _sfc_main$b = {
    __name: "signup",
    setup(__props) {
      let type = vue.ref("password");
      let isUser = vue.ref(true);
      let isEmail = vue.ref(true);
      let isLook = vue.ref(false);
      let invalid = vue.ref(false);
      let employ = vue.ref(false);
      let lookurl = vue.ref("../../static/images/signup/闭眼(1).png");
      let email = vue.ref("");
      function looks() {
        if (isLook.value) {
          type.value = "text";
          isLook.value = !isLook.value;
          lookurl.value = "../../static/images/signup/睁开眼睛4.png";
        } else {
          type.value = "password";
          isLook.value = !isLook.value;
          lookurl.value = "../../static/images/signup/闭眼(1).png";
        }
      }
      function checkEmail(e) {
        let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        email.value = e.detail.value;
        if (email.value.length > 0) {
          if (pattern.test(email.value)) {
            formatAppLog("log", "at pages/signup/signup.vue:68", "yes");
            invalid.value = false;
          } else {
            invalid.value = true;
          }
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
            }, [
              vue.createElementVNode("image", {
                class: "back-img",
                src: "/static/images/common/左箭头.png"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", { src: "/static/images/signin/火@2x.png" })
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "title" }, "注册"),
            vue.createElementVNode("view", { class: "inputs" }, [
              vue.createElementVNode("view", { class: "inputs-div" }, [
                vue.createElementVNode("input", {
                  class: "user",
                  type: "text",
                  placeholder: "请取个名字",
                  "placeholder-style": "color:#aaa;font-weight:400;"
                }),
                vue.unref(employ) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "employ"
                }, "已占用")) : vue.createCommentVNode("v-if", true),
                vue.unref(isUser) ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  class: "ok",
                  src: "/static/images/signup/Group%203.png"
                })) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "inputs-div" }, [
                vue.createElementVNode(
                  "input",
                  {
                    class: "email",
                    type: "email",
                    placeholder: "请输入邮箱",
                    "placeholder-style": "color:#aaa;font-weight:400;",
                    onBlur: checkEmail
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.unref(employ) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "employ"
                }, "已占用")) : vue.createCommentVNode("v-if", true),
                vue.unref(invalid) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "invalid"
                }, "邮箱无效")) : vue.createCommentVNode("v-if", true),
                vue.unref(isEmail) ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 2,
                  class: "ok",
                  src: "/static/images/signup/Group%203.png"
                })) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "inputs-div" }, [
                vue.createElementVNode("input", {
                  class: "psw",
                  type: vue.unref(type),
                  placeholder: "请输入密码",
                  "placeholder-style": "color:#aaa;font-weight:400;"
                }, null, 8, ["type"]),
                vue.createElementVNode("image", {
                  class: "look",
                  src: vue.unref(lookurl),
                  onClick: looks
                }, null, 8, ["src"])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesSignupSignup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-69533909"], ["__file", "D:/Instant-message-chat-rooms/pages/signup/signup.vue"]]);
  const _sfc_main$a = {
    __name: "signin",
    setup(__props) {
      let user = vue.ref("");
      vue.ref("");
      const test = () => {
        uni.request({
          url: "http://192.168.50.185:3000/search/user",
          data: {
            data: "m"
          },
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          success: (data2) => {
            formatAppLog("log", "at pages/signin/signin.vue:105", data2);
          },
          fail: (data2) => {
            formatAppLog("log", "at pages/signin/signin.vue:108", "fail:" + data2);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "text" }, "注册")
            ])
          ]),
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", { src: "/static/images/signin/火@2x.png" })
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "title" }, "登录"),
            vue.createElementVNode("view", { class: "slogan" }, "您好，欢迎来到 mint!"),
            vue.createElementVNode("view", { class: "inputs" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "user",
                  type: "text",
                  placeholder: "用户名/邮箱",
                  "placeholder-style": "color:#aaa;font-weight:400;",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(user) ? user.value = $event : user = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(user)]
              ]),
              vue.createElementVNode("input", {
                class: "psw",
                type: "password",
                placeholder: "密码",
                "placeholder-style": "color:#aaa;font-weight:400;"
              })
            ]),
            vue.createElementVNode("view", { class: "tips" }, "输入用户或密码错误！")
          ]),
          vue.createElementVNode("view", {
            class: "submit",
            onClick: test
          }, "登录")
        ]);
      };
    }
  };
  const PagesSigninSignin = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-bfeccbf4"], ["__file", "D:/Instant-message-chat-rooms/pages/signin/signin.vue"]]);
  const _sfc_main$9 = {
    __name: "search",
    setup(__props) {
      const userArr = vue.reactive([]);
      const searchVal = vue.ref("");
      const searchUser = () => {
        const val = searchVal.value.toLowerCase();
        if (val.trim() !== "") {
          const exp = new RegExp(val, "gi");
          userArr.splice(0, userArr.length, ...data.friends().filter((user) => {
            const matchName = user.name.toLowerCase().search(exp) !== -1;
            const matchEmail = user.email.toLowerCase().search(exp) !== -1;
            if (matchName || matchEmail) {
              isFriend(user);
              user.imgurl = `../../static/images/img/${user.imgurl}`;
              user.name = user.name.replace(exp, (match) => `<span style="color:#4AAAFF;">${match}</span>`);
              user.email = user.email.replace(exp, (match) => `<span style="color:#4AAAFF;">${match}</span>`);
              return true;
            }
            return false;
          }));
        } else {
          searchVal.value = "";
        }
      };
      const isFriend = (curUser) => {
        let isMatch = 0;
        let friendArr = data.isFriend();
        for (const data2 of friendArr) {
          if (data2.friend === curUser.tip) {
            isMatch = 1;
          }
        }
        curUser.tip = isMatch;
      };
      const debouncedSearch = debounce(searchUser, 300);
      vue.watch(searchVal, debouncedSearch);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", { class: "search-div" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "search",
                  type: "search",
                  placeholder: "搜索用户/群",
                  "placeholder-style": "color:#aaa;font-weight:400;",
                  onInput: _cache[0] || (_cache[0] = (...args) => vue.unref(debouncedSearch) && vue.unref(debouncedSearch)(...args)),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchVal.value = $event)
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [vue.vModelText, searchVal.value]
              ]),
              vue.createElementVNode("image", {
                class: "search-img",
                src: "/static/images/index/search.png"
              })
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", {
                class: "text",
                onClick: _cache[2] || (_cache[2] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
              }, "取消")
            ])
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "search-user result" }, [
              userArr.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "title"
              }, "用户")) : vue.createCommentVNode("v-if", true),
              searchVal.value.length !== 0 ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 1 },
                vue.renderList(userArr, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "list user",
                    key: item.id
                  }, [
                    vue.createElementVNode("navigator", {
                      url: "../userhome/userhome?id=aaa",
                      class: "top-bar-left",
                      "hover-class": "none"
                    }, [
                      vue.createElementVNode("image", {
                        src: item.imgurl
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "names" }, [
                      vue.createElementVNode("view", {
                        class: "name",
                        innerHTML: item.name
                      }, null, 8, ["innerHTML"]),
                      vue.createElementVNode("view", {
                        class: "email",
                        innerHTML: item.email
                      }, null, 8, ["innerHTML"])
                    ]),
                    item.tip === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "right-bt send"
                    }, "发消息")) : vue.createCommentVNode("v-if", true),
                    item.tip === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "right-bt add"
                    }, "加好友")) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]);
      };
    }
  };
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c10c040c"], ["__file", "D:/Instant-message-chat-rooms/pages/search/search.vue"]]);
  const _sfc_main$8 = {
    __name: "userhome",
    setup(__props) {
      const sexBg = vue.ref("rgba(255, 93, 91, 1)");
      const user = vue.reactive({
        name: "神金",
        nick: "求职狗",
        intr: "在做了，希望能找到工作吧！唉！！！"
      });
      const selfName = vue.ref("mint");
      let infoHeight = vue.ref(0);
      let aniFriInfoData = vue.ref({});
      let aniBtnData = vue.ref({});
      const isAltStyle = vue.ref(false);
      const aniBgData = vue.ref(false);
      let isAdd = vue.ref(false);
      const showIcon = vue.ref(true);
      const getInfoHeight = () => {
        const query = uni.createSelectorQuery().in(vue.getCurrentInstance());
        query.select(".bg").boundingClientRect((data2) => {
          infoHeight.value = data2.height - 186;
          formatAppLog("log", "at pages/userhome/userhome.vue:83", data2.height);
          formatAppLog("log", "at pages/userhome/userhome.vue:84", infoHeight.value);
        }).exec();
      };
      onReady(() => {
        getInfoHeight();
      });
      const dynamicStyles = vue.computed(() => {
        return {
          bottom: `-${infoHeight.value}px`,
          height: `${infoHeight.value}px`
        };
      });
      const addFriendAni = () => {
        isAdd.value = !isAdd.value;
        const aniProp1 = isAdd.value ? { bottom: 0 } : { bottom: -infoHeight.value };
        const aniProp2 = isAdd.value ? { bottom: 0 } : { bottom: -100 };
        const aniProp3 = isAdd.value ? { backgroundColor: "rgba(255, 228, 49, 0.6)" } : { backgroundColor: "rgba(255, 228, 49, 0)" };
        aniFriInfoData.value = createAni(300, "ease", aniProp1);
        aniBtnData.value = createAni(400, "ease-in", aniProp2);
        aniBgData.value = createAni(300, "ease-in", aniProp3);
      };
      const handleToggle = (type) => {
        showIcon.value = false;
        isAltStyle.value = type === "add" ? true : false;
        setTimeout(() => {
          showIcon.value = true;
        }, 400);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
            }, [
              vue.createElementVNode("image", { src: "/static/images/common/左箭头.png" })
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "more-img" }, [
                vue.createElementVNode("image", { src: "/static/images/userhome/more.png" })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "bg" }, [
            vue.createElementVNode("view", {
              class: "bg-bai",
              animation: aniBgData.value
            }, null, 8, ["animation"]),
            vue.createElementVNode("image", {
              class: "bg-img",
              src: "/static/images/img/OIP1.jpg",
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "user-header" }, [
              vue.createVNode(vue.Transition, {
                name: "fade",
                persisted: ""
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["sex", { "sex-alt": isAltStyle.value }]),
                      style: vue.normalizeStyle({ backgroundColor: sexBg.value })
                    },
                    [
                      vue.createElementVNode("image", { src: "/static/images/userhome/nv.png" })
                    ],
                    6
                    /* CLASS, STYLE */
                  ), [
                    [vue.vShow, showIcon.value]
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode(
                "image",
                {
                  class: vue.normalizeClass(["user-img", { "user-img-alt": isAltStyle.value }]),
                  src: "/static/images/img/OIP1.jpg",
                  mode: "aspectFill"
                },
                null,
                2
                /* CLASS */
              )
            ]),
            vue.createElementVNode("view", { class: "user-info" }, [
              vue.createElementVNode(
                "view",
                { class: "name" },
                vue.toDisplayString(user.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "nick" },
                "昵称：" + vue.toDisplayString(user.nick),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "intr" },
                vue.toDisplayString(user.intr),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "bottom-bar" }, [
            vue.createElementVNode("view", {
              class: "bottom-btn common-btn-one",
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => (addFriendAni(), handleToggle("add")), ["stop"]))
            }, "加为好友")
          ]),
          vue.createCommentVNode(` <view class="add" :style="{height:addHeight+'px',bottom}"> `),
          vue.createCommentVNode(` <view class="add" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="aniFriInfoData"> `),
          vue.createElementVNode("view", {
            class: "add",
            style: vue.normalizeStyle(dynamicStyles.value),
            animation: vue.unref(aniFriInfoData)
          }, [
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString(user.name),
              1
              /* TEXT */
            ),
            vue.createElementVNode("textarea", {
              class: "add-main",
              value: selfName.value + "请求加为好友~",
              maxlength: "120"
            }, null, 8, ["value"])
          ], 12, ["animation"]),
          vue.createElementVNode("view", {
            class: "add-btn bottom-bar",
            animation: vue.unref(aniBtnData)
          }, [
            vue.createElementVNode("view", {
              class: "cancel common-btn-one",
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => (addFriendAni(), handleToggle("cancel")), ["stop"]))
            }, "取消"),
            vue.createElementVNode("view", { class: "send common-btn-one" }, "发送")
          ], 8, ["animation"])
        ]);
      };
    }
  };
  const PagesUserhomeUserhome = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3af742c0"], ["__file", "D:/Instant-message-chat-rooms/pages/userhome/userhome.vue"]]);
  const _sfc_main$7 = {
    name: "ling-imgcropper",
    props: {
      cropWidth: {
        type: Number,
        default: 200
      },
      cropHeight: {
        type: Number,
        default: 200
      },
      cropFixed: {
        type: Boolean,
        default: false
      },
      iszoom: {
        type: Boolean,
        default: false
      },
      src: {
        type: String
      },
      showResetBtn: {
        type: Boolean,
        default: true
      },
      showRotateBtn: {
        type: Boolean,
        default: true
      },
      proportion: {
        type: Number,
        default: 0
      }
    },
    data() {
      const sysInfo = uni.getSystemInfoSync();
      const pixelRatio = sysInfo.pixelRatio;
      return {
        show: false,
        scale: 1,
        rotate: 0,
        cropW: 0,
        cropH: 0,
        cropOldW: 0,
        cropOldH: 0,
        sysInfo,
        pixelRatio,
        imageRealWidth: 0,
        imageRealHeight: 0,
        cropOffsertX: 0,
        cropOffsertY: 0,
        startX: 0,
        startY: 0,
        // 裁剪框与边界间距
        border: 5,
        x: 0,
        y: 0,
        startL: 0,
        oldScale: 1,
        scaling: false
      };
    },
    watch: {
      src(val) {
        if (val.length > 0) {
          this.init();
        }
      },
      show(val) {
      }
    },
    computed: {
      containerTop() {
        let top = 0;
        return top;
      },
      // 容器高度
      containerHeight() {
        return this.windowHeight - 48;
      },
      // 屏幕宽度
      windowWidth() {
        return this.sysInfo.windowWidth;
      },
      windowHeight() {
        return this.sysInfo.windowHeight;
      },
      // 图片宽高比
      imageRatio() {
        if (this.imageRealHeight > 0) {
          return this.imageRealWidth / this.imageRealHeight;
        }
        return 0;
      },
      // 等比缩放后的宽度
      imageWidth() {
        if (this.imageRatio >= 1) {
          return this.windowWidth;
        }
        return this.windowWidth * this.imageRatio;
      },
      // 等比缩放后的高度
      imageHeight() {
        if (this.imageRatio >= 1) {
          return this.windowWidth / this.imageRatio;
        }
        return this.windowWidth;
      }
    },
    methods: {
      moveHandle() {
      },
      rotateHandler() {
        if (this.rotate == 3) {
          this.rotate = 0;
        } else {
          ++this.rotate;
        }
      },
      init() {
        this.rotate = 0;
        this.scale = 1;
        this.cropW = this.cropWidth;
        this.cropH = this.cropHeight;
        uni.showLoading({
          title: "图片加载中..."
        });
        this.loadImage(this.src).then((e) => {
          uni.hideLoading();
        }).catch((e) => {
          uni.hideLoading();
          uni.showModal({
            title: "标题",
            content: "图片加载失败"
          });
        });
      },
      loadImage(src) {
        const _this = this;
        return new Promise((resolve, reject) => {
          uni.getImageInfo({
            src,
            success: (res) => {
              _this.imageRealWidth = res.width;
              _this.imageRealHeight = res.height;
              _this.cropOffsertX = _this.windowWidth / 2 - _this.cropW / 2;
              _this.cropOffsertY = _this.windowHeight / 2 - _this.cropH / 2;
              _this.show = true;
              _this.$nextTick(() => {
                _this.x = _this.windowWidth / 2 - _this.imageWidth / 2;
                _this.y = _this.containerHeight / 2 - _this.imageHeight / 2;
              });
              resolve(res);
            },
            fail: (e) => {
              _this.show = false;
              reject(e);
            }
          });
        }).catch((e) => {
        });
      },
      cancel() {
        this.show = false;
        this.$emit("cancel");
      },
      confirm(event) {
        uni.showLoading({
          title: "裁剪中..."
        });
        if (this.iszoom) {
          this.pixelRatio = 1;
          formatAppLog("log", "at uni_modules/ling-imgcropper/components/ling-imgcropper/ling-imgcropper.vue:248", "this is fixed");
        } else {
          if (this.proportion != 0)
            this.proportion = this.pixelRatio;
        }
        const _this = this;
        const ctx = uni.createCanvasContext("myCanvas", _this);
        const pixelRatio = _this.pixelRatio;
        const imgage = _this.src;
        const imgW = _this.imageWidth * _this.scale;
        const imgH = _this.imageHeight * _this.scale;
        const rotate = _this.rotate;
        let dx = _this.cropOffsertX - _this.x - (_this.imageWidth - imgW) / 2;
        let dy = _this.cropOffsertY - _this.y - (_this.imageHeight - imgH) / 2;
        ctx.setFillStyle("white");
        ctx.fillRect(0, 0, imgW, imgH);
        ctx.save();
        ctx.rotate(rotate * 90 * Math.PI / 180);
        switch (rotate) {
          case 1:
            dx += (imgH - imgW) / 2;
            dy -= (imgH - imgW) / 2;
            ctx.drawImage(imgage, -dy, dx, imgW, -imgH);
            break;
          case 2:
            ctx.drawImage(imgage, dx, dy, -imgW, -imgH);
            break;
          case 3:
            dx += (imgH - imgW) / 2;
            dy -= (imgH - imgW) / 2;
            ctx.drawImage(imgage, dy, -dx, -imgW, imgH);
            break;
          default:
            ctx.drawImage(imgage, -dx, -dy, imgW, imgH);
            break;
        }
        ctx.restore();
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: "myCanvas",
            destWidth: _this.cropW * pixelRatio,
            destHeight: _this.cropH * pixelRatio,
            success: (res) => {
              uni.hideLoading();
              event.detail.tempFilePath = res.tempFilePath;
              console.log();
              _this.show = false;
              _this.$emit("confirm", event);
            },
            fail: (e) => {
              uni.hideLoading();
              uni.showModal({
                title: "提示",
                content: "裁剪失败"
              });
            }
          }, _this);
        });
      },
      imgTouchStart(e) {
        if (e.touches.length === 2) {
          this.oldScale = this.scale;
          const x = e.touches[0].pageX - e.touches[1].pageX;
          const y = e.touches[0].pageY - e.touches[1].pageY;
          const hypotenuse = Math.sqrt(
            Math.pow(x, 2) + Math.pow(y, 2)
          );
          this.startL = Math.max(x, y, hypotenuse);
        } else if (e.touches.length === 1) {
          this.scaling = true;
          this.startX = e.touches[0].pageX - this.x;
          this.startY = e.touches[0].pageY - this.y;
        }
      },
      imgMoveing(e) {
        if (e.touches.length === 2) {
          let scale = this.oldScale;
          const x = e.touches[0].pageX - e.touches[1].pageX;
          const y = e.touches[0].pageY - e.touches[1].pageY;
          const hypotenuse = Math.sqrt(
            Math.pow(x, 2) + Math.pow(y, 2)
          );
          const newL = Math.max(x, y, hypotenuse);
          const cha = newL - this.startL;
          let coe = 1;
          coe = coe / this.imageWidth > coe / this.imageHeight ? coe / this.imageHeight : coe / this.imageWidth;
          coe = coe > 0.1 ? 0.1 : coe;
          const num = coe * cha;
          if (cha > 0) {
            scale += Math.abs(num);
          } else if (cha < 0) {
            scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
          }
          this.scale = scale;
        } else if (this.scaling && e.touches.length === 1) {
          const moveX = e.touches[0].pageX - this.startX;
          const moveY = e.touches[0].pageY - this.startY;
          this.x = moveX;
          this.y = moveY;
        }
      },
      imgMoveEnd() {
        this.scaling = false;
      },
      imgcancel() {
        this.scaling = false;
      },
      touchStart(e) {
        if (!this.scaling) {
          this.startX = e.touches[0].pageX - this.cropOffsertX;
          this.startY = e.touches[0].pageY - this.cropOffsertY;
          this.cropOldW = this.cropW;
          this.cropOldH = this.cropH;
        }
      },
      cropMoveing(e) {
        if (!this.scaling) {
          const moveX = this._cropX(e.touches[0].pageX - this.startX);
          const moveY = this._cropY(e.touches[0].pageY - this.startY);
          this.cropOffsertX = moveX;
          this.cropOffsertY = moveY;
        }
      },
      dragMove(e, type) {
        if (this.cropFixed) {
          return false;
        }
        const moveX = e.touches[0].pageX - this.startX;
        const moveY = e.touches[0].pageY - this.startY;
        switch (type) {
          case "left-top":
            this._cropMoveLeft(moveX);
            this._cropMoveTop(moveY);
            break;
          case "middle-top":
            this._cropMoveTop(moveY);
            break;
          case "right-top":
            this._cropMoveTop(moveY);
            this._cropMoveRight(moveX);
            break;
          case "middle-right":
            this._cropMoveRight(moveX);
            break;
          case "right-bottom":
            this._cropMoveRight(moveX);
            this._cropMoveBottom(moveY);
            break;
          case "middle-bottom":
            this._cropMoveBottom(moveY);
            break;
          case "left-bottom":
            this._cropMoveBottom(moveY);
            this._cropMoveLeft(moveX);
            break;
          case "middle-left":
            this._cropMoveLeft(moveX);
            break;
        }
      },
      _cropMoveTop(y) {
        const topY = this._cropY(y);
        this.cropH += this.cropOffsertY - topY;
        this.cropOffsertY = topY;
      },
      _cropMoveRight(x) {
        if (this.cropOldW + x >= this.windowWidth - this.border) {
          return false;
        }
        this.cropW = this.cropOldW + (x - this.cropOffsertX);
      },
      _cropMoveBottom(y) {
        if (this.cropOldH + y >= this.windowHeight - this.containerTop - this.border) {
          return false;
        }
        this.cropH = this.cropOldH + (y - this.cropOffsertY);
      },
      _cropMoveLeft(x) {
        const leftX = this._cropY(x);
        this.cropW += this.cropOffsertX - leftX;
        this.cropOffsertX = leftX;
      },
      _cropX(x) {
        if (x <= this.border) {
          return this.border;
        }
        if (x + this.cropW >= this.windowWidth - this.border) {
          return this.windowWidth - this.cropW - this.border;
        }
        return x;
      },
      _cropY(y) {
        if (y <= this.border) {
          return this.border;
        }
        if (y + this.cropH >= this.windowHeight - this.containerTop - this.border) {
          return this.windowHeight - this.cropH - this.containerTop - this.border;
        }
        return y;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "vue-cropper",
        ref: "cropper",
        style: vue.normalizeStyle({ top: `${$options.containerTop}px` }),
        onTouchmove: _cache[26] || (_cache[26] = vue.withModifiers(() => {
        }, ["stop", "prevent"])),
        catchtouchmove: "false"
      },
      [
        vue.createElementVNode("view", { class: "cropper-box" }, [
          vue.createElementVNode(
            "view",
            {
              class: "cropper-box-canvas",
              onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTouchStart && $options.imgTouchStart(...args), ["stop", "prevent"])),
              onTouchcancel: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.imgcancel && $options.imgcancel(...args), ["stop", "prevent"])),
              onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.imgMoveing && $options.imgMoveing(...args), ["stop", "prevent"])),
              onTouchend: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgMoveEnd && $options.imgMoveEnd(...args), ["stop", "prevent"])),
              style: vue.normalizeStyle({
                "width": $options.imageWidth + "px",
                "height": $options.imageHeight + "px",
                "transform": "scale(" + $data.scale + "," + $data.scale + ") translate3d(" + $data.x / $data.scale + "px," + $data.y / $data.scale + "px,0)rotateZ(" + $data.rotate * 90 + "deg)"
              })
            },
            [
              vue.createElementVNode("image", {
                src: $props.src,
                alt: "cropper-img",
                ref: "cropperImg",
                mode: "scaleToFill",
                class: "uni-image"
              }, null, 8, ["src"])
            ],
            36
            /* STYLE, NEED_HYDRATION */
          )
        ]),
        vue.createElementVNode("view", { class: "cropper-drag-box cropper-modal cropper-move pointer-events" }),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["cropper-crop-box", { "pointer-events": $props.cropFixed }]),
            style: vue.normalizeStyle({ "width": $data.cropW + "px", "height": $data.cropH + "px", "transform": "translate3d(" + $data.cropOffsertX + "px," + $data.cropOffsertY + "px,0)" })
          },
          [
            vue.createElementVNode("view", { class: "cropper-view-box" }, [
              vue.createElementVNode("image", {
                style: vue.normalizeStyle({ "width": $options.imageWidth + "px", "height": $options.imageHeight + "px", "transform": "scale(" + $data.scale + "," + $data.scale + ") translate3d(" + ($data.x - $data.cropOffsertX) / $data.scale + "px," + ($data.y - $data.cropOffsertY) / $data.scale + "px,0)rotateZ(" + $data.rotate * 90 + "deg)" }),
                mode: "scaleToFill",
                src: $props.src,
                alt: "cropper-img"
              }, null, 12, ["src"])
            ]),
            !$props.cropFixed ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "cropper-face cropper-move",
                onTouchstart: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                onTouchmove: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.cropMoveing && $options.cropMoveing(...args), ["stop", "prevent"]))
              },
              null,
              32
              /* NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "crop-line line-w" }),
            vue.createElementVNode("view", { class: "crop-line line-a" }),
            vue.createElementVNode("view", { class: "crop-line line-s" }),
            vue.createElementVNode("view", { class: "crop-line line-d" }),
            !$props.cropFixed ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-lt",
                    onTouchstart: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[7] || (_cache[7] = vue.withModifiers(($event) => $options.dragMove($event, "left-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mt",
                    onTouchstart: _cache[8] || (_cache[8] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[9] || (_cache[9] = vue.withModifiers(($event) => $options.dragMove($event, "middle-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-rt",
                    onTouchstart: _cache[10] || (_cache[10] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[11] || (_cache[11] = vue.withModifiers(($event) => $options.dragMove($event, "right-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-ml",
                    onTouchstart: _cache[12] || (_cache[12] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[13] || (_cache[13] = vue.withModifiers(($event) => $options.dragMove($event, "middle-left"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mr",
                    onTouchstart: _cache[14] || (_cache[14] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[15] || (_cache[15] = vue.withModifiers(($event) => $options.dragMove($event, "middle-right"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-lb",
                    onTouchstart: _cache[16] || (_cache[16] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[17] || (_cache[17] = vue.withModifiers(($event) => $options.dragMove($event, "left-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mb",
                    onTouchstart: _cache[18] || (_cache[18] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[19] || (_cache[19] = vue.withModifiers(($event) => $options.dragMove($event, "middle-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-rb",
                    onTouchstart: _cache[20] || (_cache[20] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[21] || (_cache[21] = vue.withModifiers(($event) => $options.dragMove($event, "right-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createElementVNode(
          "canvas",
          {
            id: "myCanvas",
            "canvas-id": "myCanvas",
            class: "cropper-canvas",
            style: vue.normalizeStyle({ "width": $data.cropW + "px", "height": $data.cropH + "px" })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "btn-group" }, [
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: "btn-item reset-btn",
              onClick: _cache[22] || (_cache[22] = (...args) => $options.init && $options.init(...args))
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.showResetBtn]
          ]),
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: "btn-item rotate-btn",
              onClick: _cache[23] || (_cache[23] = (...args) => $options.rotateHandler && $options.rotateHandler(...args))
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.showRotateBtn]
          ])
        ]),
        vue.createElementVNode("view", { class: "uni-info__ft" }, [
          vue.createElementVNode("view", {
            class: "uni-modal__btn uni-modal__btn_default",
            style: { "color": "rgb(0, 0, 0)" },
            onClick: _cache[24] || (_cache[24] = (...args) => $options.cancel && $options.cancel(...args))
          }, "取消"),
          vue.createElementVNode("view", {
            class: "uni-modal__btn uni-modal__btn_primary",
            style: { "color": "rgb(0, 122, 255)" },
            onClick: _cache[25] || (_cache[25] = (...args) => $options.confirm && $options.confirm(...args))
          }, "确定")
        ])
      ],
      36
      /* STYLE, NEED_HYDRATION */
    )), [
      [vue.vShow, $data.show]
    ]);
  }
  const ImageCropper = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render], ["__scopeId", "data-v-6a9d1069"], ["__file", "D:/Instant-message-chat-rooms/uni_modules/ling-imgcropper/components/ling-imgcropper/ling-imgcropper.vue"]]);
  const _sfc_main$6 = {
    __name: "userdetial",
    setup(__props) {
      vue.ref("../../static/images/img/OIP1.jpg");
      let sexArr = vue.reactive(["男", "女"]);
      let sexIndex = vue.ref(0);
      let date = vue.ref(getDate());
      const startDate = vue.computed(() => getDate("start"));
      const endDate = vue.computed(() => getDate("end"));
      const bindPickerChange = (e) => {
        sexIndex.value = e.detail.value;
      };
      const bindDateChange = (e) => {
        date.value = e.detail.value;
      };
      let tempFilePath = vue.ref("");
      let cropFilePath = vue.ref("../../static/images/img/OIP1.jpg");
      const headimg2 = vue.ref("");
      const upload = (e) => {
        uni.chooseImage({
          count: 1,
          // 默认 9
          sizeType: ["original", "compressed"],
          // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "sourceType"],
          // 从相册选择
          success: (res) => {
            tempFilePath.value = res.tempFilePaths.shift();
          }
        });
      };
      const confirm = (e) => {
        tempFilePath.value = "";
        cropFilePath.value = e.detail.tempFilePath;
        headimg2.value = e.detail.tempFilePath;
        uni.uploadFile({
          url: "",
          filePath: headimg2,
          name: "file",
          success: (uploadFileRes) => {
            uploadFileRes.data;
          },
          complete() {
          },
          fail(e2) {
          }
        });
      };
      const cancel = () => {
        formatAppLog("log", "at pages/userdetial/userdetial.vue:191", "canceled");
      };
      const aniModifyData = vue.ref({});
      let isModify = vue.ref(false);
      let isPwd = vue.ref(false);
      const modifyHeight = vue.ref(0);
      const getViewHeight = () => {
        const query = uni.createSelectorQuery().in(vue.getCurrentInstance());
        query.select(".modify").boundingClientRect((data2) => {
          modifyHeight.value = data2.height - 10;
        }).exec();
      };
      onReady(() => {
        getViewHeight();
      });
      const dynamicStyles = vue.computed(() => {
        return {
          bottom: `-${modifyHeight.value}px`
        };
      });
      const addModifyAni = (type, data2, havePwd) => {
        if (havePwd) {
          isPwd.value = true;
        } else {
          isPwd.value = false;
        }
        modifyTitle.value = type;
        userData.value = data2;
        isModify.value = !isModify.value;
        const aniProp1 = isModify.value ? { bottom: 0 } : { bottom: -modifyHeight.value };
        aniModifyData.value = createAni(300, "ease", aniProp1);
      };
      let userData = vue.ref("修改的内容");
      const pwd = vue.ref("");
      const array = vue.reactive({
        //mock
        name: "mint",
        time: /* @__PURE__ */ new Date(),
        sex: "男",
        sign: "-------------------------------------------------",
        birth: "2000-09-14",
        tell: "18125034783",
        email: "2570803883@qq.com"
      });
      const modifyTitle = vue.ref("");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
            }, [
              vue.createElementVNode("image", { src: "/static/images/common/左箭头.png" })
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("view", { class: "title" }, " 详情 ")
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "price" })
            ])
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "column heads" }, [
              vue.createElementVNode("view", { class: "row head" }, [
                vue.createElementVNode("view", { class: "title" }, "头像"),
                vue.createElementVNode("view", { class: "user-head" }, [
                  vue.createCommentVNode(' <image class="user-img" :src="defaultImgurl"></image> '),
                  vue.createVNode(ImageCropper, {
                    src: vue.unref(tempFilePath),
                    onConfirm: confirm,
                    onCancel: cancel
                  }, null, 8, ["src"]),
                  vue.createElementVNode("image", {
                    class: "user-img",
                    src: vue.unref(cropFilePath),
                    onClick: upload
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", {
                  class: "title",
                  onClick: _cache[1] || (_cache[1] = ($event) => addModifyAni("签名", array.sign, _ctx.havePwd))
                }, "签名"),
                vue.createElementVNode("view", { class: "cont" }, " ...................................................................... "),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "注册"),
                vue.createElementVNode(
                  "view",
                  { class: "cont" },
                  vue.toDisplayString(),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "column" }, [
              vue.unref(isPwd) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "row",
                onClick: _cache[2] || (_cache[2] = ($event) => addModifyAni("昵称", array.name, _ctx.havePwd))
              }, [
                vue.createElementVNode("view", { class: "title" }, "昵称"),
                vue.createElementVNode(
                  "view",
                  { class: "cont" },
                  vue.toDisplayString(array.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "性别"),
                vue.createElementVNode("view", { class: "cont" }, [
                  vue.createElementVNode("picker", {
                    range: vue.unref(sexArr),
                    onChange: bindPickerChange,
                    value: vue.unref(sexIndex)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "uni-input" },
                      vue.toDisplayString(vue.unref(sexArr)[vue.unref(sexIndex)]),
                      1
                      /* TEXT */
                    )
                  ], 40, ["range", "value"])
                ]),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "生日"),
                vue.createElementVNode("view", { class: "cont" }, [
                  vue.createElementVNode("picker", {
                    mode: "date",
                    value: vue.unref(date),
                    start: startDate.value,
                    end: endDate.value,
                    onChange: bindDateChange
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "uni-input" },
                      vue.toDisplayString(vue.unref(date)),
                      1
                      /* TEXT */
                    )
                  ], 40, ["value", "start", "end"])
                ]),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "电话"),
                vue.createElementVNode(
                  "view",
                  { class: "cont" },
                  vue.toDisplayString(array.tell),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "邮箱"),
                vue.createElementVNode(
                  "view",
                  { class: "cont" },
                  vue.toDisplayString(array.email),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "title" }, "密码"),
                vue.createElementVNode("view", { class: "cont" }, " ******* "),
                vue.createElementVNode("view", { class: "more" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/common/youone.png",
                    mode: "aspectFit"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "btn-two" }, "退出登录")
          ]),
          vue.createElementVNode("view", {
            class: "modify",
            style: vue.normalizeStyle(dynamicStyles.value),
            animation: aniModifyData.value
          }, [
            vue.createElementVNode("view", { class: "modify-header" }, [
              vue.createElementVNode("view", {
                class: "close",
                onClick: addModifyAni
              }, "取消"),
              vue.createElementVNode(
                "view",
                { class: "title" },
                vue.toDisplayString(modifyTitle.value),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "define" }, "确定")
            ]),
            vue.createElementVNode("view", { class: "modify-main" }, [
              vue.unref(isPwd) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                "input",
                {
                  key: 0,
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => pwd.value = $event),
                  class: "modify-pwd",
                  placeholder: "请输入密码",
                  "placeholder-style": "color:#aaa;font-weight:400;"
                },
                null,
                512
                /* NEED_PATCH */
              )), [
                [vue.vModelText, pwd.value]
              ]) : vue.createCommentVNode("v-if", true),
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(userData) ? userData.value = $event : userData = $event),
                  class: "modify-content"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(userData)]
              ])
            ])
          ], 12, ["animation"])
        ]);
      };
    }
  };
  const PagesUserdetialUserdetial = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-659d2c98"], ["__file", "D:/Instant-message-chat-rooms/pages/userdetial/userdetial.vue"]]);
  const _sfc_main$5 = {
    __name: "friendrequest",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
            }, [
              vue.createElementVNode("image", { src: "/static/images/common/左箭头.png" })
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("view", { class: "title" }, "好友请求")
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "price" })
            ])
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "requester" }, [
              vue.createElementVNode("view", { class: "request-top" }, [
                vue.createElementVNode("view", { class: "reject btn" }, "拒绝"),
                vue.createElementVNode("view", { class: "header-img" }, [
                  vue.createElementVNode("image", { src: "/static/images/img/OIP4.jpg" })
                ]),
                vue.createElementVNode("view", { class: "aggree btn" }, "同意")
              ]),
              vue.createElementVNode("view", { class: "request-center" }, [
                vue.createElementVNode("view", { class: "title" }, "这里是名字"),
                vue.createElementVNode("view", { class: "time" }, "2020-05-01")
              ]),
              vue.createElementVNode("view", { class: "notic" }, [
                vue.createElementVNode("text", null, "留言："),
                vue.createTextVNode(" ········································· ")
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesFriendrequestFriendrequest = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-11a3f0bc"], ["__file", "D:/Instant-message-chat-rooms/pages/friendrequest/friendrequest.vue"]]);
  function formatDateComponent(value) {
    return value < 10 ? "0" : value;
  }
  function formatDateTime(date) {
    const Y = date.getFullYear();
    const M = formatDateComponent(date.getMonth() + 1);
    const D = formatDateComponent(date.getDate());
    const h = formatDateComponent(date.getHours());
    const m = formatDateComponent(date.getMinutes());
    return { Y, M, D, h, m };
  }
  function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date2.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  function isYesterday(date1, date2) {
    const yeaterday = new Date(date2);
    yeaterday.setDate(date2.getDate() - 1);
    return isSameDay(date1, yeaterday);
  }
  function chatDate(timeValue) {
    const old = new Date(timeValue);
    const now = /* @__PURE__ */ new Date();
    const { Y, M, D, h, m } = formatDateTime(old);
    if (isSameDay(old, now)) {
      return `${h}:${m}`;
    }
    if (isYesterday(old, now)) {
      return `昨天 ${h}:${m}`;
    }
    if (Y === now.getFullYear()) {
      return `${M}月${D}日 ${h}:${m}`;
    }
    return `${Y}年${M}月${D}日 ${h}:${m}`;
  }
  function spaceTime(old, now) {
    old = new Date(old);
    now = new Date(now);
    let tOld = old.getDate();
    let tNow = now.getTime();
    if (tOld > tNow + 1e3 * 60 * 5) {
      return now;
    } else {
      return "";
    }
  }
  const _sfc_main$4 = {
    __name: "Emoji",
    props: {
      height: {
        type: Number,
        default: 260
      }
    },
    emits: ["emotion"],
    setup(__props, { emit: __emit }) {
      const emoji = vue.reactive([
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
        ["😀", "😁", "😂", "😅"]
      ]);
      const emit = __emit;
      const clickEmoji = (item) => {
        emit("emotion", item);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "emoji",
            style: vue.normalizeStyle({ height: __props.height + "px" })
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(emoji, (line, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "emoji-line",
                  key: index
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(line, (item, idx) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "emoji-line-item",
                        key: idx,
                        onClick: ($event) => clickEmoji(item)
                      }, vue.toDisplayString(item), 9, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const Emoji = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dd73471c"], ["__file", "D:/Instant-message-chat-rooms/components/Emoji/Emoji.vue"]]);
  const _sfc_main$3 = {
    __name: "Submit",
    emits: ["chat", "heights"],
    setup(__props, { emit: __emit }) {
      let isRecord = vue.ref(false);
      let toc = vue.ref("../../static/images/submit/jianpan.png");
      let isEmoji = vue.ref(false);
      let msg = vue.ref("");
      let isMore = vue.ref(false);
      let voiceTimeout = vue.ref("");
      let vLength = vue.ref(0);
      let isVoiceBg = vue.ref(false);
      let pageY = vue.ref(0);
      const recorderManager = uni.getRecorderManager();
      const record = () => {
        isRecord.value = !isRecord.value;
        isMore.value = isEmoji.value = false;
        toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
      };
      const emit = __emit;
      const inputs = (e) => {
        let chatContent = e.detail.value;
        let pos = chatContent.indexOf("\n");
        if (pos != -1 && chatContent.length > 1) {
          send(msg.value, 0);
        }
      };
      const getSubHeight = () => {
        const query = uni.createSelectorQuery().in(vue.getCurrentInstance());
        query.select(".submit").boundingClientRect((data2) => {
          formatAppLog("log", "at components/Submit/Submit.vue:143", data2);
          emit("heights", data2.height);
        }).exec();
      };
      const emoji = () => {
        isEmoji.value = !isEmoji.value;
        isMore.value = false;
        isRecord.value = false;
        toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
        vue.nextTick(() => {
          getSubHeight();
        });
      };
      const GetEmoji = (emo) => {
        msg.value = msg.value + emo;
      };
      const emojiSend = () => {
        if (msg.value.length > 0) {
          send(msg.value, 0);
        }
      };
      const emojiBack = () => {
        if (msg.value.length > 0) {
          msg.value = msg.value.substring(0, msg.value.length - 1);
        }
      };
      const inputFocus = () => {
        isMore.value = false;
        isEmoji.value = false;
        setTimeout(() => {
          getSubHeight();
        }, 10);
      };
      const send = (msgs, type) => {
        let data2 = {
          message: msgs,
          types: type
        };
        emit("chat", data2);
        setTimeout(() => {
          msg.value = "";
        }, 0);
      };
      const more = () => {
        isMore.value = !isMore.value;
        isEmoji.value = false;
        isRecord.value = false;
        toc.value = isRecord.value ? "../../static/images/submit/shengboyuyinxiaoxi.png" : "../../static/images/submit/jianpan.png";
        setTimeout(() => {
          getSubHeight();
        }, 10);
      };
      const sendImg = (data2) => {
        let count = 9;
        if (data2 == "album") {
          count = 9;
        } else {
          count = 1;
        }
        uni.chooseImage({
          count,
          sizeType: ["original", "compressed"],
          sourceType: [data2],
          success: (res) => {
            const filePaths = res.tempFilePaths;
            filePaths.forEach((ele, idx) => {
              send(ele, 1);
            });
          }
        });
      };
      const touchStart = (e) => {
        formatAppLog("log", "at components/Submit/Submit.vue:227", e.changeTouches);
        pageY.value = e.changedTouches[0].pageY;
        isVoiceBg.value = true;
        let timeCount = 1;
        voiceTimeout.value = setInterval(() => {
          vLength.value = timeCount;
          timeCount++;
          if (timeCount > 60) {
            clearInterval(voiceTimeout.value);
            touchEnd();
          }
        }, 1e3);
        recorderManager.start(6e3);
      };
      const touchEnd = () => {
        clearInterval(voiceTimeout.value);
        recorderManager.stop();
        recorderManager.onStop((res) => {
          let data2 = {
            voice: res.tempFilePath,
            time: vLength.value
          };
          if (isVoiceBg.value) {
            send(data2, 2);
          }
          vLength.value = 0;
          isVoiceBg.value = false;
        });
      };
      const touchMove = (e) => {
        if (pageY.value - e.changedTouches[0].pageY > 100) {
          isVoiceBg.value = false;
        }
      };
      const chooseLoc = (e) => {
        uni.chooseLocation({
          success: (res) => {
            let data2 = {
              name: res.name,
              address: res.address,
              latitude: res.latitude,
              longitude: res.longitude
            };
            send(data2, 3);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "submit" }, [
            vue.createElementVNode("view", { class: "submit-chat" }, [
              vue.createElementVNode("view", { class: "bt-img" }, [
                vue.createElementVNode("image", {
                  src: vue.unref(toc),
                  onClick: record
                }, null, 8, ["src"])
              ]),
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  class: "chat-send btn",
                  "auto-height": "true",
                  onInput: inputs,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(msg) ? msg.value = $event : msg = $event),
                  onFocus: inputFocus
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [vue.vShow, !vue.unref(isRecord)],
                [vue.vModelText, vue.unref(msg)]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "view",
                {
                  class: "record btn",
                  onTouchstart: touchStart,
                  onTouchend: touchEnd,
                  onTouchmove: touchMove
                },
                "按住说话 ",
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [vue.vShow, vue.unref(isRecord)]
              ]),
              vue.createElementVNode("view", {
                class: "bt-img",
                onClick: emoji
              }, [
                vue.createElementVNode("image", { src: "/static/images/submit/biaoqing.png" })
              ]),
              vue.createElementVNode("view", {
                class: "bt-img",
                onClick: more
              }, [
                vue.createElementVNode("image", { src: "/static/images/submit/tianjia.png" })
              ])
            ]),
            vue.withDirectives(vue.createElementVNode(
              "view",
              { class: "emoji" },
              [
                vue.createElementVNode("view", { class: "emoji-send" }, [
                  vue.createElementVNode("view", {
                    class: "emoji-send-det",
                    onClick: emojiBack
                  }, [
                    vue.createElementVNode("image", { src: "/static/images/submit/操作-退格.png" })
                  ]),
                  vue.createElementVNode("view", {
                    class: "emoji-send-bt",
                    onClick: emojiSend
                  }, "发送")
                ]),
                vue.createVNode(Emoji, {
                  onEmotion: GetEmoji,
                  height: 260
                })
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, vue.unref(isEmoji)]
            ]),
            vue.createCommentVNode(' <view class="emoji" v-show="isEmoji">\r\n				<view class="emoji-send">\r\n					<view class="emoji-send-det" @tap="emojiBack">\r\n						<image src="../../static/images/submit/操作-退格.png"></image>\r\n					</view>\r\n					<view class="emoji-send-bt" @tap="emojiSend">发送</view>\r\n				</view>\r\n				<Emoji @emotion="GetEmoji" :height="260"></Emoji>\r\n			</view> '),
            vue.withDirectives(vue.createElementVNode(
              "view",
              { class: "more" },
              [
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/submit/31paishexuanzhong.png",
                    onClick: _cache[1] || (_cache[1] = ($event) => sendImg("album"))
                  }),
                  vue.createElementVNode("view", { class: "more-list-title" }, " 图片 ")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", {
                    src: "/static/images/submit/31paishexuanzhong.png",
                    onClick: _cache[2] || (_cache[2] = ($event) => sendImg("album"))
                  }),
                  vue.createElementVNode("view", { class: "more-list-title" }, " 拍照 ")
                ]),
                vue.createElementVNode("view", {
                  class: "more-list",
                  onClick: chooseLoc
                }, [
                  vue.createElementVNode("image", { src: "/static/images/submit/weizhi.png" }),
                  vue.createElementVNode("view", { class: "more-list-title" }, " 定位 ")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", { src: "/static/images/submit/luxiang1.png" }),
                  vue.createElementVNode("view", { class: "more-list-title" }, " 视频 ")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", { src: "/static/images/submit/31paishexuanzhong.png" }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "图片")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", { src: "/static/images/submit/31paishexuanzhong.png" }),
                  vue.createElementVNode("view", { class: "more-list-title" }, " 图片 ")
                ])
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, vue.unref(isMore)]
            ])
          ]),
          vue.unref(isVoiceBg) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "voice-bg"
          }, [
            vue.createElementVNode("view", { class: "voice-bg-len" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "voice-bg-time",
                  style: vue.normalizeStyle({ width: vue.unref(vLength) / 0.6 + "%" })
                },
                vue.toDisplayString(vue.unref(vLength)) + "′",
                5
                /* TEXT, STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "voice-del" }, "上滑取消录音")
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const Submit = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6a6b59dc"], ["__file", "D:/Instant-message-chat-rooms/components/Submit/Submit.vue"]]);
  const _sfc_main$2 = {
    __name: "chatroom",
    setup(__props) {
      let msgs = vue.reactive([]);
      let imgMsg = vue.reactive([]);
      let oldTime = vue.reactive(/* @__PURE__ */ new Date());
      let scrollToView = vue.ref("");
      let emojiHeight = vue.ref("60");
      const innerAudioContext = uni.createInnerAudioContext();
      let aniLoadData = vue.ref({});
      let nowPage = vue.ref(0);
      let loadTimeout = vue.ref(null);
      let isLoad = vue.ref(false);
      let swAni = vue.ref(true);
      let progressLoad = vue.ref(true);
      onLoad(() => {
        getMsg(nowPage.value);
      });
      const getMsg = (page) => {
        let msg = data.message();
        let maxPage = msg.length;
        if (msg.length > (page + 1) * 10) {
          maxPage = (page + 1) * 10;
          nowPage.value++;
        } else {
          nowPage.value = -1;
        }
        for (let i = page * 10; i < maxPage; i++) {
          msg[i].imgurl = "../../static/images/img/" + msg[i].imgurl;
          if (i < msg.length - 1) {
            let t = spaceTime(oldTime, msg[i].time);
            if (t) {
              oldTime = t;
            }
            msg[i].time = t;
          }
          if (msg[i].types == 1) {
            msg[i].message = "../../static/images/img/" + msg[i].message;
            imgMsg.unshift(msg[i].message);
          }
          msgs.unshift(msg[i]);
        }
        vue.nextTick(() => {
          swAni.value = true;
          scrollToView.value = "msg" + msgs[maxPage - page * 10 - 1].tip;
        });
        clearInterval(loadTimeout);
        isLoad.value = false;
        progressLoad.value = true;
      };
      const changeTime = (date) => {
        return chatDate(date);
      };
      const previewImg = (imgInfo) => {
        let index = 0;
        imgMsg.forEach((ele, idx) => {
          if (ele === imgInfo) {
            index = idx;
          }
        });
        uni.previewImage({
          current: index,
          urls: imgMsg,
          longPressActions: {
            itemList: ["发送给朋友", "保存图片", "收藏"],
            success: (data2) => {
            },
            fail: (err) => {
            }
          }
        });
      };
      const getChat = (obj) => {
        swAni.value = true;
        let len = msgs.length;
        let nowTime = /* @__PURE__ */ new Date();
        let t = spaceTime(oldTime, nowTime);
        if (t) {
          oldTime = t;
        }
        nowTime = t;
        let chatData = {
          id: "b",
          // 用户id
          imgurl: "../../static/images/img/OIP1.jpg",
          message: obj.message,
          types: obj.types,
          // 内容类型
          time: nowTime,
          // 发送时间
          tip: len
        };
        msgs.push(chatData);
        vue.nextTick(() => {
          scrollToView.value = "msg" + len;
        });
        if (obj.types == 1) {
          imgMsg.push(obj.message);
        }
      };
      const getHeights = (height) => {
        emojiHeight.value = height;
        goBottom();
      };
      const goBottom = () => {
        swAni.value = true;
        scrollToView.value = "";
        vue.nextTick(() => {
          scrollToView.value = "msg" + msgs[msgs.length - 1].tip;
        });
      };
      const playVoice = (e) => {
        innerAudioContext.src = e;
        innerAudioContext.onPlay();
      };
      const nextPage = () => {
        if (nowPage.value > 0 && progressLoad.value) {
          isLoad.value = true;
          progressLoad.value = false;
          let animation = uni.createAnimation({
            duration: 1e3,
            timingFunction: "step-start"
          });
          let i = 1;
          loadTimeout = setInterval(() => {
            animation.rotate(i * 30).step();
            aniLoadData.value = animation.export();
            i++;
            getMsg(nowPage.value);
          }, 1e3);
        }
      };
      const openLoc = (value) => {
        uni.openLocation({
          latitude: value.latitude,
          longitude: value.longitude,
          name: value.name,
          address: value.address,
          success: () => {
            formatAppLog("log", "at pages/chatroom/chatroom.vue:303", "success");
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(backBefore) && vue.unref(backBefore)(...args))
            }, [
              vue.createElementVNode("image", { src: "/static/images/common/左箭头.png" })
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("view", { class: "title" }, " 小明 ")
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "price" }),
              vue.createElementVNode("view", { class: "group-img" }, [
                vue.createElementVNode("image", { src: "/static/images/img/OIP1.jpg" })
              ])
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            class: "chat",
            "scroll-y": "true",
            "scroll-with-animation": vue.unref(swAni),
            "scroll-into-view": vue.unref(scrollToView),
            onScrolltoupper: nextPage
          }, [
            vue.createElementVNode(
              "view",
              {
                class: "chat-main",
                style: vue.normalizeStyle({ paddingBottom: vue.unref(emojiHeight) + "px" })
              },
              [
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "loading" },
                  [
                    vue.createElementVNode("image", {
                      class: "loading-img",
                      src: "/static/images/chatroom/加载.png",
                      animation: vue.unref(aniLoadData)
                    }, null, 8, ["animation"])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, vue.unref(isLoad)]
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(msgs), (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "chat-ls",
                      key: item.id,
                      id: "msg" + item.tip
                    }, [
                      item.time != "" ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "chat-time"
                        },
                        vue.toDisplayString(changeTime(item.time)),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      item.id != "b" ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "msg-m msg-left"
                      }, [
                        vue.createElementVNode("image", {
                          class: "user-img",
                          src: item.imgurl
                        }, null, 8, ["src"]),
                        item.types == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "message"
                        }, [
                          vue.createElementVNode(
                            "view",
                            { class: "msg-text" },
                            vue.toDisplayString(item.message),
                            1
                            /* TEXT */
                          )
                        ])) : vue.createCommentVNode("v-if", true),
                        item.types == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "message"
                        }, [
                          vue.createElementVNode("img", {
                            class: "msg-img",
                            src: item.message,
                            alt: "图片已丢失",
                            mode: "widthFix",
                            onClick: ($event) => previewImg(item.message)
                          }, null, 8, ["src", "onClick"])
                        ])) : vue.createCommentVNode("v-if", true),
                        item.types == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "message"
                        }, [
                          vue.createElementVNode("view", {
                            class: "msg-text voice",
                            style: vue.normalizeStyle({ width: item.message.time * 4 + "px" }),
                            onClick: ($event) => playVoice(item.message.voice)
                          }, [
                            vue.createElementVNode("image", {
                              class: "voice-img",
                              src: "/static/images/chatroom/语音.png"
                            }),
                            vue.createTextVNode(
                              " " + vue.toDisplayString(item.message.time) + "″ ",
                              1
                              /* TEXT */
                            )
                          ], 12, ["onClick"])
                        ])) : vue.createCommentVNode("v-if", true),
                        item.types == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "message"
                        }, [
                          vue.createElementVNode("view", {
                            class: "msg-map",
                            onClick: ($event) => openLoc(item.message)
                          }, [
                            vue.createElementVNode(
                              "view",
                              { class: "map-name" },
                              vue.toDisplayString(item.message.name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "view",
                              { class: "map-address" },
                              vue.toDisplayString(item.message.address),
                              1
                              /* TEXT */
                            ),
                            vue.createCommentVNode(' <map\r\n									class="map" \r\n									:longitude="item.message.longitude" \r\n									:latitude="item.message.latitude" \r\n									:markers="covers(item.message)"\r\n									>\r\n								</map> '),
                            vue.createElementVNode("image", {
                              class: "map-img",
                              src: "/static/images/chatroom/mapSeat.jpg",
                              mode: "aspectFill"
                            })
                          ], 8, ["onClick"])
                        ])) : vue.createCommentVNode("v-if", true)
                      ])) : vue.createCommentVNode("v-if", true),
                      item.id == "b" ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 2,
                        class: "msg-m msg-right"
                      }, [
                        vue.createElementVNode("image", {
                          class: "user-img",
                          src: item.imgurl
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "message" }, [
                          item.types == 0 ? (vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              key: 0,
                              class: "msg-text"
                            },
                            vue.toDisplayString(item.message),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true)
                        ]),
                        item.types == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "message"
                        }, [
                          vue.createElementVNode("img", {
                            class: "msg-img",
                            src: item.message,
                            alt: "图片已丢失",
                            mode: "widthFix",
                            onClick: ($event) => previewImg(item.message)
                          }, null, 8, ["src", "onClick"])
                        ])) : vue.createCommentVNode("v-if", true),
                        item.types == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "message"
                        }, [
                          vue.createElementVNode("view", {
                            class: "msg-text voice",
                            style: vue.normalizeStyle({ width: item.message.time * 4 + "px" }),
                            onClick: ($event) => playVoice(item.message.voice)
                          }, [
                            vue.createElementVNode("image", {
                              class: "voice-img",
                              src: "/static/images/chatroom/语音.png"
                            }),
                            vue.createTextVNode(
                              " " + vue.toDisplayString(item.message.time) + "″ ",
                              1
                              /* TEXT */
                            )
                          ], 12, ["onClick"])
                        ])) : vue.createCommentVNode("v-if", true),
                        item.types == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "message"
                        }, [
                          vue.createElementVNode("view", {
                            class: "msg-map",
                            onClick: ($event) => openLoc(item.message)
                          }, [
                            vue.createElementVNode(
                              "view",
                              { class: "map-name" },
                              vue.toDisplayString(item.message.name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "view",
                              { class: "map-address" },
                              vue.toDisplayString(item.message.address),
                              1
                              /* TEXT */
                            ),
                            vue.createCommentVNode(" <cover-view> "),
                            vue.createCommentVNode(' <map\r\n									class="map" \r\n									:longitude="item.message.longitude" \r\n									:latitude="item.message.latitude" \r\n									:markers="covers(item.message)"\r\n									>\r\n								</map> '),
                            vue.createElementVNode("image", {
                              class: "map-img",
                              src: "/static/images/chatroom/mapSeat.jpg",
                              mode: "aspectFill"
                            }),
                            vue.createCommentVNode(" </cover-view> "),
                            vue.createCommentVNode(' <cover-view class="map-cover-view">\r\n									<cover-image class="cover-marker" src="../../static/images/chatroom/定位.png"> </cover-image>\r\n								</cover-view> ')
                          ], 8, ["onClick"])
                        ])) : vue.createCommentVNode("v-if", true)
                      ])) : vue.createCommentVNode("v-if", true)
                    ], 8, ["id"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode("view", { class: "padbt" })
          ], 40, ["scroll-with-animation", "scroll-into-view"]),
          vue.createVNode(Submit, {
            onChat: getChat,
            onHeights: getHeights
          })
        ]);
      };
    }
  };
  const PagesChatroomChatroom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-410a3d35"], ["__file", "D:/Instant-message-chat-rooms/pages/chatroom/chatroom.vue"]]);
  const _sfc_main$1 = {
    __name: "buildgroud",
    setup(__props) {
      let tempFilePath = vue.ref("");
      let cropFilePath = vue.ref("../../static/images/buildgroud/群聊.png");
      let user = vue.reactive([
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: true,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: true,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: true,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        },
        {
          selected: false,
          imgurl: "../../static/images/img/OIP1.jpg",
          name: "这是哪里"
        }
      ]);
      let selectFriNum = vue.ref(0);
      let name = vue.ref("");
      onReady(() => {
        selectedNum();
      });
      const selec = vue.computed(() => {
        return selectFriNum.value > 0;
      });
      const back = () => {
        uni.navigateTo({
          url: "/pages/index/index"
        });
      };
      const confirm = (e) => {
        tempFilePath.value = "";
        cropFilePath.value = e.detail.tempFilePath;
        headimg.value = e.detail.tempFilePath;
      };
      const cancel = () => {
        formatAppLog("log", "at pages/buildgroud/buildgroud.vue:140", "canceled");
      };
      const upload = (e) => {
        uni.chooseImage({
          count: 1,
          // 默认 9
          sizeType: ["original", "compressed"],
          // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "sourceType"],
          // 从相册选择
          success: (res) => {
            tempFilePath.value = res.tempFilePaths.shift();
          }
        });
      };
      const selectFri = (idx) => {
        if (user[idx].selected) {
          user[idx].selected = false;
          selectFriNum.value--;
        } else {
          user[idx].selected = true;
          selectFriNum.value++;
          if (selectFriNum.value === 0)
            ;
        }
      };
      const selectedNum = () => {
        user.forEach((ele, idx) => {
          if (ele.selected) {
            selectFriNum.value++;
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("view", {
              class: "top-bar-left",
              onClick: back
            }, [
              vue.createElementVNode("view", { class: "text" }, "取消")
            ]),
            vue.createElementVNode("view", { class: "top-bar-center" }, [
              vue.createElementVNode("view", { class: "title" }, "创建群聊")
            ]),
            vue.createElementVNode("view", { class: "top-bar-right" }, [
              vue.createElementVNode("view", { class: "price" })
            ])
          ]),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "group-img" }, [
                vue.createVNode(ImageCropper, {
                  src: vue.unref(tempFilePath),
                  onConfirm: confirm,
                  onCancel: cancel
                }, null, 8, ["src"]),
                vue.createElementVNode("image", {
                  class: "edit",
                  src: "/static/images/buildgroud/edit.png",
                  onClick: upload
                }),
                vue.createElementVNode("image", {
                  class: "img",
                  src: vue.unref(cropFilePath),
                  onClick: upload
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "group-name" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    class: "group-name-input",
                    type: "text",
                    placeholder: "为群取个名字",
                    "placeholder-style": "color:#aaa;",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(name) ? name.value = $event : name = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, vue.unref(name)]
                ])
              ]),
              vue.createElementVNode("view", { class: "title" }, "用户")
            ]),
            vue.createElementVNode("view", { class: "friends" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(user), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "user",
                    key: index,
                    onClick: ($event) => selectFri(index)
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["selected", { isSelected: item.selected }])
                      },
                      [
                        item.selected ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 0,
                          class: "selected-img",
                          src: "/static/images/buildgroud/对.png"
                        })) : vue.createCommentVNode("v-if", true)
                      ],
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode("image", {
                      class: "user-img",
                      src: item.imgurl
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "view",
                      { class: "name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "bottom-bar" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["bottom-btn common-btn-one", { noSelect: selec.value && vue.unref(name).length > 0 }])
              },
              "创建(" + vue.toDisplayString(vue.unref(selectFriNum)) + ")",
              3
              /* TEXT, CLASS */
            )
          ])
        ]);
      };
    }
  };
  const PagesBuildgroudBuildgroud = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9be8533e"], ["__file", "D:/Instant-message-chat-rooms/pages/buildgroud/buildgroud.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/signup/signup", PagesSignupSignup);
  __definePage("pages/signin/signin", PagesSigninSignin);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/userhome/userhome", PagesUserhomeUserhome);
  __definePage("pages/userdetial/userdetial", PagesUserdetialUserdetial);
  __definePage("pages/friendrequest/friendrequest", PagesFriendrequestFriendrequest);
  __definePage("pages/chatroom/chatroom", PagesChatroomChatroom);
  __definePage("pages/buildgroud/buildgroud", PagesBuildgroudBuildgroud);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Instant-message-chat-rooms/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
