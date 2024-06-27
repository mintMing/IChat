"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "userhome",
  setup(__props) {
    const sexBg = common_vendor.ref("rgba(255, 93, 91, 1)");
    const user = common_vendor.reactive({
      name: "神金",
      nick: "求职狗",
      intr: "在做了，希望能找到工作吧！唉！！！"
    });
    const selfName = common_vendor.ref("mint");
    const addHeight = common_vendor.ref(0);
    let aniFriInfoData = common_vendor.ref({});
    let aniBtnData = common_vendor.ref({});
    const isAltStyle = common_vendor.ref(false);
    const aniBgData = common_vendor.ref(false);
    let isAdd = common_vendor.ref(false);
    const getViewHeight = () => {
      const query = common_vendor.index.createSelectorQuery().in(common_vendor.getCurrentInstance());
      query.select(".bg").boundingClientRect((data) => {
        addHeight.value = data.height - 186;
      }).exec();
    };
    common_vendor.onReady(() => {
      getViewHeight();
    });
    common_vendor.computed(() => {
      return {
        bottom: `-${addHeight.value}px`,
        height: `${addHeight.value}px`
      };
    });
    const createAni = (duration, timingFun, properties) => {
      let ani = common_vendor.index.createAnimation({
        duration,
        timingFun
      });
      for (const prop in properties) {
        ani[prop](properties[prop]).step();
      }
      return ani.export();
    };
    const addFriendAni = () => {
      isAdd.value = !isAdd.value;
      const aniProp1 = isAdd.value ? { bottom: 0 } : { bottom: -addHeight };
      const aniProp2 = isAdd.value ? { bottom: 0 } : { bottom: -100 };
      const aniProp3 = isAdd.value ? { backgroundColor: "rgba(255, 228, 49, 0.6)" } : { backgroundColor: "rgba(255, 228, 49, 0)" };
      aniFriInfoData.value = createAni(300, "ease", aniProp1);
      aniBtnData.value = createAni(400, "ease-in", aniProp2);
      aniBgData.value = createAni(300, "ease-in", aniProp3);
    };
    const toggleStyle = () => {
      isAltStyle.value = !isAltStyle.value;
    };
    return (_ctx, _cache) => {
      return {
        a: aniBgData.value,
        b: common_vendor.n({
          "sex-alt": isAltStyle.value
        }),
        c: sexBg.value,
        d: common_vendor.n({
          "user-img-alt": isAltStyle.value
        }),
        e: common_vendor.t(user.name),
        f: common_vendor.t(user.nick),
        g: common_vendor.t(user.intr),
        h: common_vendor.o(($event) => (addFriendAni(), toggleStyle())),
        i: common_vendor.t(user.name),
        j: selfName.value + "请求加为好友~",
        k: addHeight.value + "px",
        l: -+addHeight.value + "px",
        m: common_vendor.unref(aniFriInfoData),
        n: common_vendor.o(($event) => (addFriendAni(), toggleStyle())),
        o: common_vendor.unref(aniBtnData)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3af742c0"], ["__file", "D:/Instant-message-chat-rooms/pages/userhome/userhome.vue"]]);
wx.createPage(MiniProgramPage);
