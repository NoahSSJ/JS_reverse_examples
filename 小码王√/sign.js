// function c(e, t, A) {
//                 return A ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)),
//                 t ? e.then(t) : e)
//             }

// function m(e) {
//                 return function() {
//                     for (var t = [], A = 0; A < arguments.length; A++)
//                         t[A] = arguments[A];
//                     try {
//                         return Promise.resolve(e.apply(this, t))
//                     } catch (e) {
//                         return Promise.reject(e)
//                     }
//                 }
//             }


// function g(e, t) {
//     const f = "aaa1";
//     const C = "aaa1";
//     const B = "abcdefg1a72061ceebc7164c3c4584f2";
//                 return c(m(f, C, [C, C, C], [t, e, B]), (function(t) {
//                     return {
//                         timeString: e,
//                         signString: t
//                     }
//                 }
//                 ))
//             }
// const a = Date.now()
// const i = {
//     "adBizId": null,
//     "adType": 0,
//     "content": "123",
//     "targetId": "Z2NE666J",
//     "targetType": 1,
//     "timestamp": 1772591923,
//     "type": 1,
//     "uuid": "35994312206b4bfb"
// };
// res = g("" + a, JSON.stringify(i))
// console.log(res)

require("./loader")
// require("./mod1")
window.xxx("jeHg")
const a = 1772593861
const i = {
    "adBizId": null,
    "adType": 0,
    "content": "123",
    "targetId": "Z2NE666J",
    "targetType": 1,
    "timestamp": 1772593861,
    "type": 1,
    "uuid": "039960a929e04dca"
};
g = window.xxx("jeHg").getSign
const res = g("" + a, JSON.stringify(i))
console.log(res.then(i=>console.log(i)));


