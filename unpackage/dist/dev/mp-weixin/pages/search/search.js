"use strict";
const common_vendor = require("../../common/vendor.js");
const commons_js_data = require("../../commons/js/data.js");
const commons_js_tool = require("../../commons/js/tool.js");
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const userArr = common_vendor.reactive([]);
    const searchVal = common_vendor.ref("");
    const searchUser = () => {
      const val = searchVal.value.toLowerCase();
      if (val.trim() !== "") {
        const exp = new RegExp(val, "gi");
        userArr.splice(0, userArr.length, ...commons_js_data.data.friends().filter((user) => {
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
      let friendArr = commons_js_data.data.isFriend();
      for (const data of friendArr) {
        if (data.friend === curUser.tip) {
          isMatch = 1;
        }
      }
      curUser.tip = isMatch;
    };
    const debouncedSearch = commons_js_tool.debounce(searchUser, 300);
    common_vendor.watch(searchVal, debouncedSearch);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o([($event) => searchVal.value = $event.detail.value, (...args) => common_vendor.unref(debouncedSearch) && common_vendor.unref(debouncedSearch)(...args)]),
        b: searchVal.value,
        c: common_vendor.o(($event) => common_vendor.unref(commons_js_tool.backHome)()),
        d: userArr.length > 0
      }, userArr.length > 0 ? {} : {}, {
        e: searchVal.value.length !== 0
      }, searchVal.value.length !== 0 ? {
        f: common_vendor.f(userArr, (item, index, i0) => {
          return common_vendor.e({
            a: item.imgurl,
            b: item.name,
            c: item.email,
            d: item.tip === 1
          }, item.tip === 1 ? {} : {}, {
            e: item.tip === 0
          }, item.tip === 0 ? {} : {}, {
            f: item.id
          });
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "D:/Instant-message-chat-rooms/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
