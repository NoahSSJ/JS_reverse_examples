window = global;
require("./mod6");
require("./mod2");
require("./mod7");
require("./mod8");
            (e => {
                function n(n) {
                    for (var u, a, h = n[0], d = n[1], f = n[2], k = 0, o = []; k < h.length; k++)
                        a = h[k],
                        Object.prototype.hasOwnProperty.call(t, a) && t[a] && o.push(t[a][0]),
                        t[a] = 0;
                    for (u in d)
                        Object.prototype.hasOwnProperty.call(d, u) && (e[u] = d[u]);
                    for (p && p(n); o.length; )
                        o.shift()();
                    return r.push.apply(r, f || []),
                    c()
                }
                function c() {
                    for (var e, n = 0; n < r.length; n++) {
                        for (var c = r[n], u = !0, a = 1; a < c.length; a++) {
                            var d = c[a];
                            0 !== t[d] && (u = !1)
                        }
                        u && (r.splice(n--, 1),
                        e = h(h.s = c[0]))
                    }
                    return e
                }
                var u = {}
                  , a = {
                    runtime: 0
                }
                  , t = {
                    runtime: 0
                }
                  , r = [];
                function h(n) {
                    var c;
                    return (u[n] || (c = u[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    },
                    console.log("加载的模块为:", n),
                    e[n].call(c.exports, c, c.exports, h),
                    c.l = !0,
                    c)).exports
                }
                window.xxx = h;
                h.e = function(e) {
                    var n, c, u, r, d, f = [], k = (a[e] ? f.push(a[e]) : 0 !== a[e] && {
                        "chunk-0f1ffe1c": 1,
                        "chunk-1094de92": 1,
                        "chunk-146aebe5": 1,
                        "chunk-3e1435b8": 1,
                        "chunk-4cd87112": 1,
                        "chunk-5b653bbc": 1,
                        "chunk-d46ecd34": 1,
                        "npm.riophae": 1,
                        "chunk-39920ee3": 1,
                        "chunk-6be9eebc": 1,
                        "chunk-d9ea458e": 1,
                        "chunk-f144df04": 1,
                        "chunk-202f1af3": 1,
                        "chunk-40560834": 1,
                        "chunk-267fa78f": 1,
                        "chunk-2bb98540": 1,
                        "chunk-3296e712": 1,
                        "chunk-f84fcd92": 1,
                        "chunk-aaf11876": 1,
                        "chunk-b57b7cdc": 1,
                        "chunk-5bd4ca55": 1,
                        "chunk-05f7fe1d": 1,
                        "chunk-177a37ba": 1,
                        "chunk-25a69f4f": 1,
                        "chunk-91795628": 1,
                        "chunk-9564991c": 1,
                        "chunk-3359289a": 1,
                        "chunk-358ed26e": 1,
                        "chunk-35d93411": 1,
                        "chunk-3d95dec4": 1,
                        "chunk-4779bea4": 1,
                        "chunk-539771c3": 1,
                        "chunk-556ae8a1": 1,
                        "chunk-5d86b28c": 1,
                        "chunk-68fc6c9a": 1,
                        "chunk-73ed9fe8": 1,
                        "chunk-75df3bce": 1,
                        "chunk-9e14a21e": 1,
                        "chunk-a49cfe5e": 1,
                        "chunk-a8d09d5e": 1,
                        "chunk-b048b240": 1,
                        "chunk-b4592d16": 1,
                        "chunk-cc75ba8a": 1,
                        "chunk-cfb3ca7e": 1,
                        "chunk-202293b2": 1,
                        "chunk-517da1c6": 1,
                        "chunk-8acaada2": 1,
                        "chunk-d8a51b04": 1,
                        "chunk-dd27b532": 1,
                        "chunk-ed9ce0cc": 1,
                        "chunk-1306e0f0": 1,
                        "chunk-38b17eaa": 1,
                        "chunk-0ea0f79f": 1,
                        "chunk-15d87280": 1,
                        "chunk-10fee767": 1,
                        "chunk-3990417d": 1,
                        "chunk-e9c91078": 1,
                        "chunk-99ff657e": 1
                    }[e] && f.push(a[e] = new Promise((function(n, c) {
                        for (var u = "static/css/" + ({
                            "npm.riophae": "npm.riophae",
                            "npm.sortablejs": "npm.sortablejs",
                            "npm.jsencrypt": "npm.jsencrypt",
                            "npm.vue-qr": "npm.vue-qr",
                            "npm.vue-json-viewer": "npm.vue-json-viewer",
                            "npm.markdown-it": "npm.markdown-it",
                            "npm.katex": "npm.katex",
                            "npm.echarts-liquidfill": "npm.echarts-liquidfill",
                            "npm.moment": "npm.moment",
                            "npm.sm-crypto": "npm.sm-crypto",
                            "npm.fingerprintjs": "npm.fingerprintjs",
                            "npm.vue-cropper": "npm.vue-cropper"
                        }[e] || e) + "." + {
                            "chunk-0f1ffe1c": "ca2263ca",
                            "chunk-1094de92": "43cc0229",
                            "chunk-146aebe5": "5a6820f9",
                            "chunk-2d0a2db2": "31d6cfe0",
                            "chunk-2d0d0818": "31d6cfe0",
                            "chunk-2f92a543": "31d6cfe0",
                            "chunk-38154e25": "31d6cfe0",
                            "chunk-3e1435b8": "31f59fbc",
                            "chunk-4cd87112": "90000c85",
                            "chunk-5b653bbc": "c12d292c",
                            "chunk-d19c1a98": "31d6cfe0",
                            "chunk-d46ecd34": "caf3eed4",
                            "npm.riophae": "84f98409",
                            "npm.sortablejs": "31d6cfe0",
                            "chunk-70b2be39": "31d6cfe0",
                            "npm.jsencrypt": "31d6cfe0",
                            "npm.vue-qr": "31d6cfe0",
                            "chunk-39920ee3": "f677d41f",
                            "chunk-6be9eebc": "e5a47770",
                            "chunk-d9ea458e": "2f481289",
                            "npm.vue-json-viewer": "31d6cfe0",
                            "chunk-2d0a3b04": "31d6cfe0",
                            "npm.markdown-it": "31d6cfe0",
                            "npm.katex": "31d6cfe0",
                            "chunk-f144df04": "98590a06",
                            "npm.echarts-liquidfill": "31d6cfe0",
                            "chunk-202f1af3": "f56e4dc7",
                            "chunk-40560834": "012f679c",
                            "chunk-8bab6dec": "31d6cfe0",
                            "chunk-267fa78f": "7c52d9ca",
                            "chunk-2bb98540": "7d20eca4",
                            "chunk-3296e712": "d22ba0c1",
                            "chunk-f84fcd92": "ff15e8e6",
                            "chunk-aaf11876": "096c235a",
                            "chunk-b57b7cdc": "8a4bdc8f",
                            "npm.moment": "31d6cfe0",
                            "chunk-5bd4ca55": "cd14f0d4",
                            "npm.sm-crypto": "31d6cfe0",
                            "chunk-05f7fe1d": "1247185a",
                            "chunk-177a37ba": "56d912df",
                            "chunk-25a69f4f": "ae091a6f",
                            "chunk-2f6315a7": "31d6cfe0",
                            "chunk-91795628": "8cb85973",
                            "chunk-9564991c": "d458df3b",
                            "chunk-3359289a": "4a344a1a",
                            "chunk-358ed26e": "9aa6d25b",
                            "chunk-35d93411": "d3459299",
                            "chunk-3d95dec4": "a8627a9f",
                            "chunk-4779bea4": "798fcf59",
                            "chunk-539771c3": "a8f41e29",
                            "chunk-556ae8a1": "ec977011",
                            "chunk-5d86b28c": "fbba18e0",
                            "chunk-68fc6c9a": "4bd7deab",
                            "chunk-73ed9fe8": "087408ad",
                            "chunk-75df3bce": "0ce55c6e",
                            "chunk-9e14a21e": "f65909d0",
                            "chunk-a49cfe5e": "92274dba",
                            "chunk-a8d09d5e": "ff4e174c",
                            "chunk-b048b240": "8ab6a972",
                            "chunk-b4592d16": "4a7e4c3f",
                            "chunk-cc75ba8a": "c7667f46",
                            "chunk-cfb3ca7e": "8debec57",
                            "chunk-202293b2": "7b85822e",
                            "chunk-517da1c6": "00a41b77",
                            "chunk-8acaada2": "31a30306",
                            "chunk-d8a51b04": "d07e1846",
                            "chunk-dd27b532": "d414664d",
                            "chunk-ed9ce0cc": "7d5b9b27",
                            "chunk-1306e0f0": "8ca3305e",
                            "chunk-38b17eaa": "9502b422",
                            "chunk-0ea0f79f": "c5531f23",
                            "chunk-15d87280": "46b6bc61",
                            "chunk-10fee767": "0b8be352",
                            "chunk-3990417d": "de5b1800",
                            "chunk-e9c91078": "cd2c9deb",
                            "npm.fingerprintjs": "31d6cfe0",
                            "chunk-99ff657e": "7ca09c1b",
                            "npm.vue-cropper": "31d6cfe0",
                            "chunk-779f4447": "31d6cfe0"
                        }[e] + ".css", t = h.p + u, r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                            var f = (k = r[d]).getAttribute("data-href") || k.getAttribute("href");
                            if ("stylesheet" === k.rel && (f === u || f === t))
                                return n()
                        }
                        var k, p = document.getElementsByTagName("style");
                        for (d = 0; d < p.length; d++)
                            if ((f = (k = p[d]).getAttribute("data-href")) === u || f === t)
                                return n();
                        var o = document.createElement("link");
                        o.rel = "stylesheet",
                        o.type = "text/css",
                        o.onload = n,
                        o.onerror = function(n) {
                            n = n && n.target && n.target.src || t;
                            var u = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                            u.code = "CSS_CHUNK_LOAD_FAILED",
                            u.request = n,
                            delete a[e],
                            o.parentNode.removeChild(o),
                            c(u)
                        }
                        ,
                        o.href = t,
                        document.getElementsByTagName("head")[0].appendChild(o)
                    }
                    )).then((function() {
                        a[e] = 0
                    }
                    ))),
                    t[e]);
                    return 0 !== k && (k ? f.push(k[2]) : (d = new Promise((function(n, c) {
                        k = t[e] = [n, c]
                    }
                    )),
                    f.push(k[2] = d),
                    (n = document.createElement("script")).charset = "utf-8",
                    n.timeout = 120,
                    h.nc && n.setAttribute("nonce", h.nc),
                    n.src = h.p + "static/js/" + ({
                        "npm.riophae": "npm.riophae",
                        "npm.sortablejs": "npm.sortablejs",
                        "npm.jsencrypt": "npm.jsencrypt",
                        "npm.vue-qr": "npm.vue-qr",
                        "npm.vue-json-viewer": "npm.vue-json-viewer",
                        "npm.markdown-it": "npm.markdown-it",
                        "npm.katex": "npm.katex",
                        "npm.echarts-liquidfill": "npm.echarts-liquidfill",
                        "npm.moment": "npm.moment",
                        "npm.sm-crypto": "npm.sm-crypto",
                        "npm.fingerprintjs": "npm.fingerprintjs",
                        "npm.vue-cropper": "npm.vue-cropper"
                    }[d = e] || d) + ".2026_3_23_10_7.js",
                    c = new Error,
                    u = function(u) {
                        n.onerror = n.onload = null,
                        clearTimeout(r);
                        var a, h = t[e];
                        0 !== h && (h && (a = u && ("load" === u.type ? "missing" : u.type),
                        u = u && u.target && u.target.src,
                        c.message = "Loading chunk " + e + " failed.\n(" + a + ": " + u + ")",
                        c.name = "ChunkLoadError",
                        c.type = a,
                        c.request = u,
                        h[1](c)),
                        t[e] = void 0)
                    }
                    ,
                    r = setTimeout((function() {
                        u({
                            type: "timeout",
                            target: n
                        })
                    }
                    ), 12e4),
                    n.onerror = n.onload = u,
                    document.head.appendChild(n))),
                    Promise.all(f)
                }
                ,
                h.m = e,
                h.c = u,
                h.d = function(e, n, c) {
                    h.o(e, n) || Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: c
                    })
                }
                ,
                h.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                h.t = function(e, n) {
                    if (1 & n && (e = h(e)),
                    8 & n)
                        return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule)
                        return e;
                    var c = Object.create(null);
                    if (h.r(c),
                    Object.defineProperty(c, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & n && "string" != typeof e)
                        for (var u in e)
                            h.d(c, u, function(n) {
                                return e[n]
                            }
                            .bind(null, u));
                    return c
                }
                ,
                h.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return h.d(n, "a", n),
                    n
                }
                ,
                h.o = function(e, n) {
                    return Object.prototype.hasOwnProperty.call(e, n)
                }
                ,
                h.p = "/",
                h.oe = function(e) {
                    throw e
                }
                ;
                var d = (f = window.webpackJsonp = window.webpackJsonp || []).push.bind(f);
                f.push = n;
                for (var f = f.slice(), k = 0; k < f.length; k++)
                    n(f[k]);
                var p = d;
                c()
            }
            )([]);
        
// var a = window.xxx("bc3a");
// let o = (a = window.xxx.n(a),window.xxx("4328"))
// const l = o.a.sm2;
// const p = Object(f.c)("0427404e3ad3e58323e62f09baf1a65ff9ded099bb3672c0c2fa632b28b1c687d01b2d92aa3032c8eacf5d7cb71c0dfdbb2da6d63cd6c1be6ada4da81136dbc3cc");
// function b(e) {
//             return "04" + l.doEncrypt(e, Object(f.a)(p), 0)
//         }
// const data = {
//     "pageNum": 4,
//     "pageSize": 20,
//     "releaseTime": "",
//     "search": "",
//     "informationType": "ANNOUNCEMENT",
//     "departmentId": "",
//     "projectType": "SZFJ",
//     "informationName": "ZBGG"
// }
// const res = b(JSON.stringify(data))
// console.log(res);


const sm2 = require('sm-crypto').sm2;

// 你代码里的公钥（去掉了开头的 04）
const publicKey = "0427404e3ad3e58323e62f09baff1a65ff9ded099bb3672c0c2fa632b28b1c687d01b2d92aa3032c8eacf5d7cb71c0dfdbb2da6d63cd6c1be6ada4da81136dbc3cc";

// 要加密的数据
const data = {
  "pageNum": 2,
  "pageSize": 20,
  "releaseTime": "",
  "search": "",
  "informationType": "ANNOUNCEMENT",
  "departmentId": "",
  "projectType": "SZFJ",
  "informationName": "ZBGG"
};

// 加密函数（1:1 还原你浏览器里的 b 函数）
function b(e) {
  // 转 JSON 字符串
  const jsonStr = JSON.stringify(e);
  // sm2 加密 + 自动补 04（和你源码逻辑一致）
  return "04" + sm2.doEncrypt(jsonStr, publicKey, 0);
}

// 输出结果
console.log("加密结果：");
console.log(b(data));