"use strict";
const common_vendor = require("../../common/vendor.js");
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
function backHome() {
  common_vendor.index.navigateBack({
    delta: 1
  });
}
exports.backHome = backHome;
exports.dateTime = dateTime;
exports.debounce = debounce;
