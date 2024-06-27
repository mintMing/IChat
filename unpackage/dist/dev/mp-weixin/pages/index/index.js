"use strict";
const common_vendor = require("../../common/vendor.js");
const commons_js_data = require("../../commons/js/data.js");
const commons_js_tool = require("../../commons/js/tool.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let friends = common_vendor.reactive([]);
    function getFriends() {
      friends = commons_js_data.data.friends();
      for (let i = 0; i < friends.length; i++) {
        friends[i].imgurl = "../../static/images/img/" + friends[i].imgurl;
      }
    }
    function changeTime(date) {
      return commons_js_tool.dateTime(date);
    }
    function toSearch() {
      common_vendor.index.navigateTo({
        url: "../search/search"
      });
    }
    common_vendor.onLoad(() => {
      getFriends();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toSearch),
        b: common_vendor.f(common_vendor.unref(friends), (item, index, i0) => {
          return common_vendor.e({
            a: item.tip > 0
          }, item.tip > 0 ? {
            b: common_vendor.t(item.tip)
          } : {}, {
            c: item.imgurl,
            d: common_vendor.t(item.name),
            e: common_vendor.t(changeTime(item.time)),
            f: common_vendor.t(item.news),
            g: item.id
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/Instant-message-chat-rooms/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
