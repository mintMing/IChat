"use strict";
const common_vendor = require("../../common/vendor.js");
const commons_js_tool = require("../../commons/js/tool.js");
const _sfc_main = {
  __name: "signup",
  setup(__props) {
    let type = common_vendor.ref("password");
    let isUser = common_vendor.ref(true);
    let isEmail = common_vendor.ref(true);
    let isLook = common_vendor.ref(false);
    let invalid = common_vendor.ref(false);
    let employ = common_vendor.ref(false);
    let lookurl = common_vendor.ref("../../static/images/signup/闭眼(1).png");
    let email = common_vendor.ref("");
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
          console.log("yes");
          invalid.value = false;
        } else {
          invalid.value = true;
        }
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o((...args) => common_vendor.unref(commons_js_tool.backHome) && common_vendor.unref(commons_js_tool.backHome)(...args)),
        b: common_vendor.unref(employ)
      }, common_vendor.unref(employ) ? {} : {}, {
        c: common_vendor.unref(isUser)
      }, common_vendor.unref(isUser) ? {} : {}, {
        d: common_vendor.o(checkEmail),
        e: common_vendor.unref(employ)
      }, common_vendor.unref(employ) ? {} : {}, {
        f: common_vendor.unref(invalid)
      }, common_vendor.unref(invalid) ? {} : {}, {
        g: common_vendor.unref(isEmail)
      }, common_vendor.unref(isEmail) ? {} : {}, {
        h: common_vendor.unref(type),
        i: common_vendor.unref(lookurl),
        j: common_vendor.o(looks)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-69533909"], ["__file", "D:/Instant-message-chat-rooms/pages/signup/signup.vue"]]);
wx.createPage(MiniProgramPage);
