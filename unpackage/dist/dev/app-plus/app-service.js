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
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
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
    let now2 = /* @__PURE__ */ new Date();
    old.getTime();
    let h = old.getHours();
    let m = old.getMinutes();
    let Y = old.getFullYear();
    let M = old.getMonth() + 1;
    let D = old.getDate();
    now2.getTime();
    now2.getHours();
    let nY = now2.getFullYear();
    let nM = now2.getMonth() + 1;
    let nD = now2.getDate();
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
    yesterday.setDate(now2.getDate() - 1);
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
      const userId = vue.ref("");
      const userImgurl = vue.ref("");
      const token = vue.ref("");
      onLoad(() => {
        getFriends();
        const userInfo2 = JSON.parse(localStorage.getItem("userInfo"));
        setUserDate(userInfo2);
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
      const setUserDate = async (userData) => {
        userId.value = userData.id;
        userImgurl.value = `http://192.168.60.185:3000/us/${userData.imgurl}`;
        token.value = userData.token;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top-bar" }, [
            vue.createElementVNode("navigator", {
              url: "../userhome/userhome?id=" + userId.value,
              class: "top-bar-left",
              "hover-class": "none"
            }, [
              vue.createElementVNode("image", { src: userImgurl.value }, null, 8, ["src"])
            ], 8, ["url"]),
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
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  const { toString } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  const typeOfTest = (type) => (thing) => typeof thing === type;
  const { isArray } = Array;
  const isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  const isString = typeOfTest("string");
  const isFunction = typeOfTest("function");
  const isNumber = typeOfTest("number");
  const isObject$1 = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject$1 = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate = kindOfTest("Date");
  const isFile = kindOfTest("File");
  const isBlob = kindOfTest("Blob");
  const isFileList = kindOfTest("FileList");
  const isStream = (val) => isObject$1(val) && isFunction(val.pipe);
  const isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams = kindOfTest("URLSearchParams");
  const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global$1 = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined(context) && context !== _global$1;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject$1(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  const stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop$1 = () => {
  };
  const toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject$1(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest("AsyncFunction");
  const isThenable = (thing) => thing && (isObject$1(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  const utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject: isObject$1,
    isPlainObject: isPlainObject$1,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop: noop$1,
    toFiniteNumber,
    findKey,
    global: _global$1,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$1 = AxiosError.prototype;
  const descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }
  function removeBrackets(key) {
    return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options = utils$1.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils$1.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError("Blob is not supported. Use a Buffer instead.");
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils$1.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils$1.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils$1.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$1(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  const hasStandardBrowserEnv = ((product) => {
    return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
  })(typeof navigator !== "undefined" && navigator.product);
  const hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const origin = hasBrowserEnv && window.location.href || "http://localhost";
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    hasBrowserEnv,
    hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv,
    origin
  }, Symbol.toStringTag, { value: "Module" }));
  const platform = {
    ...utils,
    ...platform$1
  };
  function toURLEncodedForm(data2, options) {
    return toFormData(data2, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  function parsePropPath(name) {
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__")
        return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      const obj = {};
      utils$1.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data2, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$1.isObject(data2);
      if (isObjectPayload && utils$1.isHTMLForm(data2)) {
        data2 = new FormData(data2);
      }
      const isFormData2 = utils$1.isFormData(data2);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data2)) : data2;
      }
      if (utils$1.isArrayBuffer(data2) || utils$1.isBuffer(data2) || utils$1.isStream(data2) || utils$1.isFile(data2) || utils$1.isBlob(data2) || utils$1.isReadableStream(data2)) {
        return data2;
      }
      if (utils$1.isArrayBufferView(data2)) {
        return data2.buffer;
      }
      if (utils$1.isURLSearchParams(data2)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data2.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data2, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$1.isFileList(data2)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data2 } : data2,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data2);
      }
      return data2;
    }],
    transformResponse: [function transformResponse(data2) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils$1.isResponse(data2) || utils$1.isReadableStream(data2)) {
        return data2;
      }
      if (data2 && utils$1.isString(data2) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data2);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data2;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  const defaults$1 = defaults;
  const ignoreDuplicateOf = utils$1.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value))
      return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils$1.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else if (utils$1.isHeaders(header)) {
        for (const [key, value] of header.entries()) {
          setHeader(value, key, rewrite);
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils$1.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils$1.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils$1.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils$1.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils$1.forEach(this, (value, header) => {
        const key = utils$1.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils$1.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils$1.freezeMethods(AxiosHeaders);
  const AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data2 = context.data;
    utils$1.forEach(fns, function transform(fn) {
      data2 = fn.call(config, data2, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data2;
  }
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now2 = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now2;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now2;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now2 - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now2 - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function throttle(fn, freq) {
    let timestamp = 0;
    const threshold = 1e3 / freq;
    let timer = null;
    return function throttled() {
      const force = this === true;
      const now2 = Date.now();
      if (force || now2 - timestamp > threshold) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timestamp = now2;
        return fn.apply(null, arguments);
      }
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          timestamp = Date.now();
          return fn.apply(null, arguments);
        }, threshold - (now2 - timestamp));
      }
    };
  }
  const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return throttle((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data2 = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null
      };
      data2[isDownloadStream ? "download" : "upload"] = true;
      listener(data2);
    }, freq);
  };
  const isURLSameOrigin = platform.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  const cookies = platform.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils$1.isString(path) && cookie.push("path=" + path);
        utils$1.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({ caseless }, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  const resolveConfig = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data: data2, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders$1.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils$1.isFormData(data2)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
      let { responseType } = _config;
      let onCanceled;
      function done() {
        if (_config.cancelToken) {
          _config.cancelToken.unsubscribe(onCanceled);
        }
        if (_config.signal) {
          _config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders$1.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, _config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, _config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          _config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (typeof _config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(_config.onDownloadProgress, true));
      }
      if (typeof _config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(_config.onUploadProgress));
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };
  const composeSignals = (signals, timeout) => {
    let controller = new AbortController();
    let aborted;
    const onabort = function(cancel) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = cancel instanceof Error ? cancel : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2 && (signal2.removeEventListener ? signal2.removeEventListener("abort", onabort) : signal2.unsubscribe(onabort));
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2 && signal2.addEventListener && signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = unsubscribe;
    return [signal, () => {
      timer && clearTimeout(timer);
      timer = null;
    }];
  };
  const streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  const readBytes = async function* (iterable, chunkSize, encode2) {
    for await (const chunk of iterable) {
      yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode2(String(chunk)), chunkSize);
    }
  };
  const trackStream = (stream, chunkSize, onProgress, onFinish, encode2) => {
    const iterator = readBytes(stream, chunkSize, encode2);
    let bytes = 0;
    return new ReadableStream({
      type: "bytes",
      async pull(controller) {
        const { done, value } = await iterator.next();
        if (done) {
          controller.close();
          onFinish();
          return;
        }
        let len = value.byteLength;
        onProgress && onProgress(bytes += len);
        controller.enqueue(new Uint8Array(value));
      },
      cancel(reason) {
        onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    });
  };
  const fetchProgressDecorator = (total, fn) => {
    const lengthComputable = total != null;
    return (loaded) => setTimeout(() => fn({
      lengthComputable,
      total,
      loaded
    }));
  };
  const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
  const supportsRequestStream = isReadableStreamSupported && (() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  })();
  const DEFAULT_CHUNK_SIZE = 64 * 1024;
  const supportsResponseStream = isReadableStreamSupported && !!(() => {
    try {
      return utils$1.isReadableStream(new Response("").body);
    } catch (err) {
    }
  })();
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  })(new Response());
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      return (await new Request(body).arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  const fetchAdapter = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data: data2,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? composeSignals([signal, cancelToken], timeout) : [];
    let finished, request;
    const onFinish = () => {
      !finished && setTimeout(() => {
        composedSignal && composedSignal.unsubscribe();
      });
      finished = true;
    };
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data2)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data2,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data2) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          data2 = trackStream(_request.body, DEFAULT_CHUNK_SIZE, fetchProgressDecorator(
            requestContentLength,
            progressEventReducer(onUploadProgress)
          ), null, encodeText);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? "cors" : "omit";
      }
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data2,
        duplex: "half",
        withCredentials
      });
      let response = await fetch(request);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onDownloadProgress && fetchProgressDecorator(
            responseContentLength,
            progressEventReducer(onDownloadProgress, true)
          ), isStreamResponse && onFinish, encodeText),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && onFinish();
      stopTimeout && stopTimeout();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      onFinish();
      if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError.from(err, err && err.code, config, request);
    }
  });
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter
  };
  utils$1.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  const renderReason = (reason) => `- ${reason}`;
  const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const VERSION = "1.7.2";
  const validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  const deprecatedWarnings = {};
  validators$1.transitional = function transitional(validator2, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator2 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        formatAppLog(
          "warn",
          "at node_modules/axios/lib/helpers/validator.js:43",
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator2 = schema[opt];
      if (validator2) {
        const value = options[opt];
        const result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  const validator = {
    assertOptions,
    validators: validators$1
  };
  const validators = validator.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional, paramsSerializer, headers } = config;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$1.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils$1.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils$1.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }
  utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data2, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data: data2
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  const Axios$1 = Axios;
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }
  const CancelToken$1 = CancelToken;
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  const HttpStatusCode$1 = HttpStatusCode;
  function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind(Axios$1.prototype.request, context);
    utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
    utils$1.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  const axios = createInstance(defaults$1);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;
  const axiosInstance = axios.create({
    baseURL: "http://192.168.60.185:3000",
    timeout: 1e4,
    headers: {
      "Content-Type": "application/json",
      "api-version": "v1",
      "authorization": ""
    }
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
      if (token) {
        config.headers["authorization"] = `Bearer ${token}`;
        formatAppLog("log", "at util/axios/axiosInstance.js:20", config.headers);
      } else {
        if (!config.url.includes("/login")) {
          formatAppLog("log", "at util/axios/axiosInstance.js:23", "token is null");
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status == 200) {
        localStorage.setItem("lastResponseTime", Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3));
        return response;
      }
    },
    (error) => {
      var _a;
      const res = error.response || {};
      if (((_a = res.data.meta) == null ? void 0 : _a.statusCode) == 403) {
        return refeshToken(res);
      } else {
        return Promise.reject(error);
      }
    }
  );
  const checkNameAndEmailAva = async (usernameOrEmail) => {
    const url = `/users/check/${usernameOrEmail}`;
    try {
      const res = await axiosInstance.get(url);
      if (res.status === 200) {
        return res.occupied;
      } else {
        throw new Error("服务器出错啦！");
      }
    } catch (error) {
      throw error;
    }
  };
  const register = async (name, pwd, email) => {
    try {
      const res = await axiosInstance.post("/users", {
        name,
        pwd,
        email
      });
      if (res.status === 200) {
        return res.status;
      } else {
        throw new Error("服务器出错啦！");
      }
    } catch (error) {
      throw error;
    }
  };
  const logon = async (data2, pwd) => {
    try {
      const res = await axiosInstance.post("/users/login", {
        data: data2,
        pwd
      });
      return res;
    } catch (error) {
      throw error;
    }
  };
  const userInfo = async (id, token) => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const _sfc_main$b = {
    __name: "signup",
    setup(__props) {
      let type = vue.ref("password");
      const user = vue.ref("");
      const userOccupy = vue.ref(false);
      const isUserAva = vue.ref(false);
      const email = vue.ref("");
      const emailOccupy = vue.ref(false);
      const isEmailAva = vue.ref(false);
      const isEmailInvalid = vue.ref(false);
      const pwd = vue.ref("");
      const isLook = vue.ref(false);
      const lookUrl = vue.ref("../../static/images/signup/闭眼(1).png");
      const isAllRight = vue.computed({
        get() {
          return isUserAva.value && isEmailAva.value && pwd.value.length > 5;
        }
      });
      const looks = () => {
        isLook.value = !isLook.value;
        type.value = isLook.value ? "text" : "password";
        lookUrl.value = isLook.value ? "../../static/images/signup/睁开眼睛4.png" : "../../static/images/signup/闭眼(1).png";
      };
      const matchName = async () => {
        if (user.value.length > 0) {
          try {
            userOccupy.value = await checkNameAndEmailAva(user.value);
            isUserAva.value = !userOccupy.value;
          } catch (err) {
            throw err;
          }
        } else {
          userOccupy.value = false;
          isUserAva.value = false;
        }
      };
      const matchEmail = async () => {
        let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        if (email.value.length > 0) {
          isEmailInvalid.value = !pattern.test(email.value);
          if (!isEmailInvalid.value) {
            try {
              emailOccupy.value = await checkNameAndEmailAva(email.value);
              isEmailAva.value = !emailOccupy.value;
            } catch (err) {
              formatAppLog("error", "at pages/signup/signup.vue:122", err);
            }
          } else {
            emailOccupy.value = false;
            isEmailAva.value = false;
          }
        } else {
          isEmailInvalid.value = false;
          emailOccupy.value = false;
          isEmailAva.value = false;
        }
      };
      const signup = async () => {
        if (isAllRight.value) {
          try {
            const success = await register(user.value, pwd.value, email.value);
            if (success) {
              uni.showToast({
                title: "注册成功",
                icon: "none",
                duration: 2e3
              });
              uni.navigateTo({
                url: `../signin/signin?user=${user.value}`
              });
            }
          } catch (err) {
            formatAppLog("log", "at pages/signup/signup.vue:153", err);
          }
        }
      };
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
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    class: "user",
                    type: "text",
                    placeholder: "请取个名字",
                    "placeholder-style": "color:#aaa;font-weight:400;",
                    onBlur: matchName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => user.value = $event)
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, user.value]
                ]),
                userOccupy.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "employ"
                }, "已占用")) : vue.createCommentVNode("v-if", true),
                isUserAva.value ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  class: "ok",
                  src: "/static/images/signup/Group%203.png"
                })) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "inputs-div" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    class: "email",
                    type: "email",
                    placeholder: "请输入邮箱",
                    "placeholder-style": "color:#aaa;font-weight:400;",
                    onBlur: matchEmail,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => email.value = $event)
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, email.value]
                ]),
                emailOccupy.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "employ"
                }, "已占用")) : vue.createCommentVNode("v-if", true),
                isEmailInvalid.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "invalid"
                }, "邮箱无效")) : vue.createCommentVNode("v-if", true),
                isEmailAva.value ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 2,
                  class: "ok",
                  src: "/static/images/signup/Group%203.png"
                })) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "inputs-div" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "psw",
                  type: vue.unref(type),
                  placeholder: "请输入密码",
                  "placeholder-style": "color:#aaa;font-weight:400;",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => pwd.value = $event)
                }, null, 8, ["type"]), [
                  [vue.vModelDynamic, pwd.value]
                ]),
                vue.createElementVNode("image", {
                  class: "look",
                  src: lookUrl.value,
                  onClick: looks
                }, null, 8, ["src"])
              ])
            ])
          ]),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([{ submit: isAllRight.value }, { noSubmit: !isAllRight.value }]),
              onClick: signup
            },
            " 注册 ",
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const PagesSignupSignup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-69533909"], ["__file", "D:/Instant-message-chat-rooms/pages/signup/signup.vue"]]);
  var isVue2 = false;
  function set$1(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data2, event) => {
        data2.keys.push(event.key);
        data2.operations.push(event.type);
        data2.oldValue[event.key] = event.oldValue;
        data2.newValue[event.key] = event.newValue;
        return data2;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set$1(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set$1(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set$1(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set$1(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  const useUserStore = defineStore("use", () => {
    const state = vue.reactive({
      userInfo: null
    });
    const setUserInfo = (user) => {
      state.userInfo = user;
    };
    return {
      userInfo: state.userInfo,
      setUserInfo
    };
  });
  const _sfc_main$a = {
    __name: "signin",
    setup(__props) {
      const user = vue.ref("");
      const pwd = vue.ref("");
      const isRight = vue.ref(false);
      useUserStore();
      onLoad((e) => {
        user.value = e.user;
      });
      const login = async () => {
        if (user.value.length > 0 && pwd.value.length > 0) {
          const result = await logon(user.value, pwd.value);
          if (result.status === 200) {
            const { accessToken, id, name, imgurl } = result.data.data;
            localStorage.setItem("userInfo", JSON.stringify({ accessToken, id, name, imgurl }));
            uni.navigateTo({
              url: "../index/index"
            });
          } else if (result.status === 400) {
            alert("Password mismatch");
            isRight.value = true;
          } else {
            alert("Login failed");
          }
        }
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
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => user.value = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, user.value]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "psw",
                  type: "password",
                  placeholder: "密码",
                  "placeholder-style": "color:#aaa;font-weight:400;",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pwd.value = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, pwd.value]
              ])
            ]),
            vue.withDirectives(vue.createElementVNode(
              "view",
              { class: "tips" },
              "输入用户或密码错误！",
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, isRight.value]
            ])
          ]),
          vue.createElementVNode("view", {
            class: "submit",
            onClick: login
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
      const basicUserInfo = vue.reactive({
        userId: "",
        token: ""
      });
      const user = vue.reactive({
        id: "",
        // 主页转入的id
        name: "",
        nick: "",
        intr: "",
        imgurl: "",
        markName: ""
        // 名称
      });
      const selfName = vue.ref("mint");
      let infoHeight = vue.ref(0);
      let aniFriInfoData = vue.ref({});
      let aniBtnData = vue.ref({});
      const isAltStyle = vue.ref(false);
      const aniBgData = vue.ref(false);
      let isAdd = vue.ref(false);
      const showIcon = vue.ref(true);
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
      onLoad((e) => {
        user.id = e.id;
        const data2 = JSON.parse(localStorage.getItem("userInfo"));
        if (data2) {
          basicUserInfo.userId = data2.id;
          basicUserInfo.token = data2.accessToken;
        } else {
          formatAppLog("error", "at pages/userhome/userhome.vue:145", "data is null");
        }
        getUserInfo();
      });
      const getUserInfo = async () => {
        try {
          const res = await userInfo(basicUserInfo.userId, basicUserInfo.token);
          if (res.status === 200) {
            user.name = res.name;
            user.imgurl = `http://192.168.60.185:3000/us/${res.imgurl}`;
            user.intr = res.explain || "这人很蓝，什么都没写";
            user.nick = res.markName || user.name;
          } else {
            formatAppLog("error", "at pages/userhome/userhome.vue:160", "User not found");
          }
        } catch (error) {
          throw error;
        }
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
                vue.createElementVNode("image", {
                  src: "/static/images/userhome/more.png",
                  mode: "aspectFill"
                })
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
              src: user.imgurl,
              mode: "aspectFill"
            }, null, 8, ["src"])
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
              vue.createElementVNode("image", {
                class: vue.normalizeClass(["user-img", { "user-img-alt": isAltStyle.value }]),
                src: user.imgurl,
                mode: "aspectFill"
              }, null, 10, ["src"])
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
    const now2 = /* @__PURE__ */ new Date();
    const { Y, M, D, h, m } = formatDateTime(old);
    if (isSameDay(old, now2)) {
      return `${h}:${m}`;
    }
    if (isYesterday(old, now2)) {
      return `昨天 ${h}:${m}`;
    }
    if (Y === now2.getFullYear()) {
      return `${M}月${D}日 ${h}:${m}`;
    }
    return `${Y}年${M}月${D}日 ${h}:${m}`;
  }
  function spaceTime(old, now2) {
    old = new Date(old);
    now2 = new Date(now2);
    let tOld = old.getDate();
    let tNow = now2.getTime();
    if (tOld > tNow + 1e3 * 60 * 5) {
      return now2;
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
            formatAppLog("log", "at pages/chatroom/chatroom.vue:305", "success");
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
  function get(state, path) {
    return path.reduce((obj, p) => {
      return obj == null ? void 0 : obj[p];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p) => {
      if (!/^(__proto__)$/.test(p)) {
        return obj[p] = obj[p] || {};
      } else
        return {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(
        substate,
        pathArray,
        get(baseState, pathArray)
      );
    }, {});
  }
  const isObject = (v) => typeof v === "object" && v !== null;
  const normalizeOptions = (options, globalOptions) => {
    options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(t, p, r) {
        return Reflect.get(t, p, r) || Reflect.get(globalOptions, p, r);
      }
    });
  };
  function passage(key) {
    return key;
  }
  function createUnistorage(globalOptions = {}) {
    const { key: normalizeKey = passage } = globalOptions || {};
    if (globalOptions == null ? void 0 : globalOptions.key) {
      delete globalOptions.key;
    }
    return function(ctx) {
      {
        const { store, options } = ctx;
        let { unistorage } = options || {};
        if (!unistorage)
          return;
        const {
          paths = null,
          afterRestore,
          beforeRestore,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id
        } = normalizeOptions(unistorage, globalOptions);
        beforeRestore == null ? void 0 : beforeRestore(ctx);
        const normalizedKey = normalizeKey(key);
        try {
          const fromStorage = uni.getStorageSync(normalizedKey);
          if (fromStorage) {
            store.$patch(serializer.deserialize(fromStorage));
          }
        } catch (_error) {
        }
        afterRestore == null ? void 0 : afterRestore(ctx);
        store.$subscribe(
          (_, state) => {
            try {
              const toStore = Array.isArray(paths) ? pick(state, paths) : state;
              uni.setStorageSync(
                normalizedKey,
                serializer.serialize(toStore)
              );
            } catch (_error) {
            }
          },
          { detached: true }
        );
      }
    };
  }
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    pinia.use(createUnistorage());
    app.use(pinia);
    return {
      app,
      pinia
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
