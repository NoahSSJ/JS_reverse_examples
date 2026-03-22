(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-SearchProducts-index~pages-SearchProducts2-index"], {
    "0fc0": function(t, e, n) {
        var i = n("c86c")
          , r = n("2ec5")
          , s = n("8d1f");
        e = i(!1);
        var a = r(s);
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-input[data-v-30b9adea]{-webkit-user-select:auto}.container[data-v-30b9adea]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:%?200?% 0;box-sizing:border-box}\r\n/* this rule will be remove */*[data-v-30b9adea]{transition:width 2s;-moz-transition:width 2s;-webkit-transition:width 2s;-o-transition:width 2s}uni-page-body[data-v-30b9adea]{background:#f1eff0}body.?%PAGE?%[data-v-30b9adea]{background:#f1eff0}\r\n/* 清除图片默认样式 */img[data-v-30b9adea]{display:block}\r\n/* 解决ios input卡顿问题 */uni-input[data-v-30b9adea], uni-textarea[data-v-30b9adea]{-webkit-user-select:auto!important;-khtml-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;-o-user-select:auto!important;user-select:auto!important}.appcolor1[data-v-30b9adea]{color:#0c67ea}.appcolor2[data-v-30b9adea]{color:#666}.appcolor3[data-v-30b9adea]{color:#750001}.appbg1[data-v-30b9adea]{background-color:#0c67ea}.appbg2[data-v-30b9adea]{background-color:#666}.appbg3[data-v-30b9adea]{background-color:#c3c3c3}.appbg4[data-v-30b9adea]{background-color:#13d05f}.appbg5[data-v-30b9adea]{background-color:#c2c2c2}.appbg6[data-v-30b9adea]{background-color:#464646}@-webkit-keyframes rotate-data-v-30b9adea{from{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotate-data-v-30b9adea{from{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.runing[data-v-30b9adea]{display:flex;align-items:center;justify-content:center;font-size:15px;height:60px;color:grey}.runing img[data-v-30b9adea], .runing uni-image[data-v-30b9adea]{width:25px;height:25px;margin-right:10px;-webkit-animation:rotate-data-v-30b9adea 1s linear infinite;animation:rotate-data-v-30b9adea 1s linear infinite}.windowbg[data-v-30b9adea]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;background-color:rgba(0,0,0,.6)}.windowbg[data-v-30b9adea]{display:flex;justify-content:center;align-items:center}.windowbg .activitybox[data-v-30b9adea]{background-color:#fff;width:80%;padding:5%;border-radius:10px}.windowbg .activitybox .activitybox-title[data-v-30b9adea]{font-size:18px;text-align:center;font-weight:700;color:#0c67ea}.windowbg .activitybox .activitybox-value[data-v-30b9adea]{margin-top:10px;font-size:15px;margin-bottom:10px}.windowbg .activitybox p[data-v-30b9adea]{color:grey;font-size:15px}.windowbg .activitybox .activitybox-btn[data-v-30b9adea]{margin-top:10px;display:flex;justify-content:space-between}.windowbg .activitybox .activitybox-btn .b1[data-v-30b9adea],\r\n.windowbg .activitybox .activitybox-btn .b2[data-v-30b9adea]{width:48%;border-radius:5px;font-size:15px;line-height:15px;padding:0;height:35px;display:flex;justify-content:center;align-items:center}.windowbg .activitybox .activitybox-btn .b1[data-v-30b9adea]{background-color:#dcdcdc}.windowbg .activitybox .activitybox-btn .b2[data-v-30b9adea]{background-color:#0c67ea;color:#fff}@font-face{font-family:uniicons;src:url(' + a + ') format("truetype")}.uni-icons[data-v-30b9adea]{font-family:uniicons;text-decoration:none;text-align:center}', ""]),
        t.exports = e
    },
    "2ec5": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return e || (e = {}),
            t = t && t.__esModule ? t.default : t,
            "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            e.hash && (t += e.hash),
            /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
        }
    },
    3018: function(t, e, n) {
        "use strict";
        var i = n("9aec")
          , r = n.n(i);
        r.a
    },
    "88a7": function(t, e, n) {
        "use strict";
        (function(t) {
            n("6a54");
            var i = n("f5bd").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.hex2b642 = e.b64tohex2 = e.RSAKey2 = e.KEYUTIL2 = void 0;
            var r = i(n("fcf3"));
            n("aa9c"),
            n("e838"),
            n("5c47"),
            n("a1c1"),
            n("5ef2"),
            n("0506"),
            n("2c10"),
            n("c9b5"),
            n("bf0f"),
            n("ab80"),
            n("7a76"),
            n("20f3"),
            n("e966"),
            n("23f4"),
            n("7d2f"),
            n("9c4e"),
            n("f7a5"),
            n("c223"),
            n("dd2b"),
            n("473f"),
            n("4db2"),
            n("c976"),
            n("4d8f"),
            n("7b97"),
            n("668a"),
            n("c5b7"),
            n("8ff5"),
            n("2378"),
            n("641a"),
            n("64e0"),
            n("cce3"),
            n("efba"),
            n("d009"),
            n("bd7d"),
            n("7edd"),
            n("d798"),
            n("f547"),
            n("5e54"),
            n("b60a"),
            n("8c18"),
            n("12973"),
            n("f991"),
            n("198e"),
            n("8557"),
            n("63b1"),
            n("1954"),
            n("1cf1"),
            n("3efd"),
            n("dc8a"),
            n("4100"),
            n("d4b5"),
            n("dc69"),
            n("fd3c"),
            n("dfcf"),
            n("64aa"),
            n("80e3");
            var s = {
                appName: "Netscape",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
            }
              , a = {
                ASN1: null,
                Base64: null,
                Hex: null,
                crypto: null,
                href: null
            }
              , o = null;
            if ("undefined" == typeof u || !u)
                var u = {};
            u.namespace = function() {
                var t, e, n, i = arguments, r = null;
                for (t = 0; t < i.length; t += 1)
                    for (n = ("" + i[t]).split("."),
                    r = u,
                    e = "YAHOO" == n[0] ? 1 : 0; e < n.length; e += 1)
                        r[n[e]] = r[n[e]] || {},
                        r = r[n[e]];
                return r
            }
            ,
            u.log = function(t, e, n) {
                var i = u.widget.Logger;
                return !(!i || !i.log) && i.log(t, e, n)
            }
            ,
            u.register = function(t, e, n) {
                var i, r, s, a, o, h = u.env.modules;
                for (h[t] || (h[t] = {
                    versions: [],
                    builds: []
                }),
                i = h[t],
                r = n.version,
                s = n.build,
                a = u.env.listeners,
                i.name = t,
                i.version = r,
                i.build = s,
                i.versions.push(r),
                i.builds.push(s),
                i.mainClass = e,
                o = 0; o < a.length; o += 1)
                    a[o](i);
                e ? (e.VERSION = r,
                e.BUILD = s) : u.log("mainClass is undefined for module " + t, "warn")
            }
            ,
            u.env = u.env || {
                modules: [],
                listeners: []
            },
            u.env.getVersion = function(t) {
                return u.env.modules[t] || null
            }
            ,
            u.env.parseUA = function(t) {
                var e, n = function(t) {
                    var e = 0;
                    return parseFloat(t.replace(/\./g, (function() {
                        return 1 == e++ ? "" : "."
                    }
                    )))
                }, i = s, r = {
                    ie: 0,
                    opera: 0,
                    gecko: 0,
                    webkit: 0,
                    chrome: 0,
                    mobile: null,
                    air: 0,
                    ipad: 0,
                    iphone: 0,
                    ipod: 0,
                    ios: null,
                    android: 0,
                    webos: 0,
                    caja: i && i.cajaVersion,
                    secure: !1,
                    os: null
                }, o = t || s && s.userAgent, h = a && a.location, u = h && h.href;
                return r.secure = u && 0 === u.toLowerCase().indexOf("https"),
                o && (/windows|win32/i.test(o) ? r.os = "windows" : /macintosh/i.test(o) ? r.os = "macintosh" : /rhino/i.test(o) && (r.os = "rhino"),
                /KHTML/.test(o) && (r.webkit = 1),
                e = o.match(/AppleWebKit\/([^\s]*)/),
                e && e[1] && (r.webkit = n(e[1]),
                / Mobile\//.test(o) ? (r.mobile = "Apple",
                e = o.match(/OS ([^\s]*)/),
                e && e[1] && (e = n(e[1].replace("_", "."))),
                r.ios = e,
                r.ipad = r.ipod = r.iphone = 0,
                e = o.match(/iPad|iPod|iPhone/),
                e && e[0] && (r[e[0].toLowerCase()] = r.ios)) : (e = o.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
                e && (r.mobile = e[0]),
                /webOS/.test(o) && (r.mobile = "WebOS",
                e = o.match(/webOS\/([^\s]*);/),
                e && e[1] && (r.webos = n(e[1]))),
                / Android/.test(o) && (r.mobile = "Android",
                e = o.match(/Android ([^\s]*);/),
                e && e[1] && (r.android = n(e[1])))),
                e = o.match(/Chrome\/([^\s]*)/),
                e && e[1] ? r.chrome = n(e[1]) : (e = o.match(/AdobeAIR\/([^\s]*)/),
                e && (r.air = e[0]))),
                r.webkit || (e = o.match(/Opera[\s\/]([^\s]*)/),
                e && e[1] ? (r.opera = n(e[1]),
                e = o.match(/Version\/([^\s]*)/),
                e && e[1] && (r.opera = n(e[1])),
                e = o.match(/Opera Mini[^;]*/),
                e && (r.mobile = e[0])) : (e = o.match(/MSIE\s([^;]*)/),
                e && e[1] ? r.ie = n(e[1]) : (e = o.match(/Gecko\/([^\s]*)/),
                e && (r.gecko = 1,
                e = o.match(/rv:([^\s\)]*)/),
                e && e[1] && (r.gecko = n(e[1]))))))),
                r
            }
            ,
            u.env.ua = u.env.parseUA(),
            function() {
                if (u.namespace("util", "widget", "example"),
                "undefined" !== typeof YAHOO_config) {
                    var t, e = YAHOO_config.listener, n = u.env.listeners, i = !0;
                    if (e) {
                        for (t = 0; t < n.length; t++)
                            if (n[t] == e) {
                                i = !1;
                                break
                            }
                        i && n.push(e)
                    }
                }
            }(),
            u.lang = u.lang || {},
            function() {
                var t = u.lang
                  , e = Object.prototype
                  , n = []
                  , i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "/": "&#x2F;",
                    "`": "&#x60;"
                }
                  , s = ["toString", "valueOf"]
                  , a = {
                    isArray: function(t) {
                        return "[object Array]" === e.toString.apply(t)
                    },
                    isBoolean: function(t) {
                        return "boolean" === typeof t
                    },
                    isFunction: function(t) {
                        return "function" === typeof t || "[object Function]" === e.toString.apply(t)
                    },
                    isNull: function(t) {
                        return null === t
                    },
                    isNumber: function(t) {
                        return "number" === typeof t && isFinite(t)
                    },
                    isObject: function(e) {
                        return e && ("object" === (0,
                        r.default)(e) || t.isFunction(e)) || !1
                    },
                    isString: function(t) {
                        return "string" === typeof t
                    },
                    isUndefined: function(t) {
                        return "undefined" === typeof t
                    },
                    _IEEnumFix: u.env.ua.ie ? function(n, i) {
                        var r, a, o;
                        for (r = 0; r < s.length; r += 1)
                            a = s[r],
                            o = i[a],
                            t.isFunction(o) && o != e[a] && (n[a] = o)
                    }
                    : function() {}
                    ,
                    escapeHTML: function(t) {
                        return t.replace(/[&<>"'\/`]/g, (function(t) {
                            return i[t]
                        }
                        ))
                    },
                    extend: function(n, i, r) {
                        if (!i || !n)
                            throw new Error("extend failed, please check that all dependencies are included.");
                        var s, a = function() {};
                        if (a.prototype = i.prototype,
                        n.prototype = new a,
                        n.prototype.constructor = n,
                        n.superclass = i.prototype,
                        i.prototype.constructor == e.constructor && (i.prototype.constructor = i),
                        r) {
                            for (s in r)
                                t.hasOwnProperty(r, s) && (n.prototype[s] = r[s]);
                            t._IEEnumFix(n.prototype, r)
                        }
                    },
                    augmentObject: function(e, n) {
                        if (!n || !e)
                            throw new Error("Absorb failed, verify dependencies.");
                        var i, r, s = arguments, a = s[2];
                        if (a && !0 !== a)
                            for (i = 2; i < s.length; i += 1)
                                e[s[i]] = n[s[i]];
                        else {
                            for (r in n)
                                !a && r in e || (e[r] = n[r]);
                            t._IEEnumFix(e, n)
                        }
                        return e
                    },
                    augmentProto: function(e, n) {
                        if (!n || !e)
                            throw new Error("Augment failed, verify dependencies.");
                        var i, r = [e.prototype, n.prototype];
                        for (i = 2; i < arguments.length; i += 1)
                            r.push(arguments[i]);
                        return t.augmentObject.apply(this, r),
                        e
                    },
                    dump: function(e, n) {
                        var i, r, s = [], a = "{...}";
                        if (!t.isObject(e))
                            return e + "";
                        if (e instanceof Date || "nodeType"in e && "tagName"in e)
                            return e;
                        if (t.isFunction(e))
                            return "f(){...}";
                        if (n = t.isNumber(n) ? n : 3,
                        t.isArray(e)) {
                            for (s.push("["),
                            i = 0,
                            r = e.length; i < r; i += 1)
                                t.isObject(e[i]) ? s.push(n > 0 ? t.dump(e[i], n - 1) : a) : s.push(e[i]),
                                s.push(", ");
                            s.length > 1 && s.pop(),
                            s.push("]")
                        } else {
                            for (i in s.push("{"),
                            e)
                                t.hasOwnProperty(e, i) && (s.push(i + " => "),
                                t.isObject(e[i]) ? s.push(n > 0 ? t.dump(e[i], n - 1) : a) : s.push(e[i]),
                                s.push(", "));
                            s.length > 1 && s.pop(),
                            s.push("}")
                        }
                        return s.join("")
                    },
                    substitute: function(e, n, i, r) {
                        for (var s, a, o, h, u, c, l, f, d, g = [], p = e.length; ; ) {
                            if (s = e.lastIndexOf("{", p),
                            s < 0)
                                break;
                            if (a = e.indexOf("}", s),
                            s + 1 > a)
                                break;
                            l = e.substring(s + 1, a),
                            h = l,
                            c = null,
                            o = h.indexOf(" "),
                            o > -1 && (c = h.substring(o + 1),
                            h = h.substring(0, o)),
                            u = n[h],
                            i && (u = i(h, u, c)),
                            t.isObject(u) ? t.isArray(u) ? u = t.dump(u, parseInt(c, 10)) : (c = c || "",
                            f = c.indexOf("dump"),
                            f > -1 && (c = c.substring(4)),
                            d = u.toString(),
                            u = "[object Object]" === d || f > -1 ? t.dump(u, parseInt(c, 10)) : d) : t.isString(u) || t.isNumber(u) || (u = "~-" + g.length + "-~",
                            g[g.length] = l),
                            e = e.substring(0, s) + u + e.substring(a + 1),
                            !1 === r && (p = s - 1)
                        }
                        for (s = g.length - 1; s >= 0; s -= 1)
                            e = e.replace(new RegExp("~-" + s + "-~"), "{" + g[s] + "}", "g");
                        return e
                    },
                    trim: function(t) {
                        try {
                            return t.replace(/^\s+|\s+$/g, "")
                        } catch (e) {
                            return t
                        }
                    },
                    merge: function() {
                        var e, n = {}, i = arguments, r = i.length;
                        for (e = 0; e < r; e += 1)
                            t.augmentObject(n, i[e], !0);
                        return n
                    },
                    later: function(e, i, r, s, a) {
                        e = e || 0,
                        i = i || {};
                        var o, h, u = r, c = s;
                        if (t.isString(r) && (u = i[r]),
                        !u)
                            throw new TypeError("method undefined");
                        return t.isUndefined(s) || t.isArray(c) || (c = [s]),
                        o = function() {
                            u.apply(i, c || n)
                        }
                        ,
                        h = a ? setInterval(o, e) : setTimeout(o, e),
                        {
                            interval: a,
                            cancel: function() {
                                this.interval ? clearInterval(h) : clearTimeout(h)
                            }
                        }
                    },
                    isValue: function(e) {
                        return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e)
                    }
                };
                t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
                    return t && t.hasOwnProperty && t.hasOwnProperty(e)
                }
                : function(e, n) {
                    return !t.isUndefined(e[n]) && e.constructor.prototype[n] !== e[n]
                }
                ,
                a.augmentObject(t, a, !0),
                u.util.Lang = t,
                t.augment = t.augmentProto,
                u.augment = t.augmentProto,
                u.extend = t.extend
            }(),
            u.register("yahoo", u, {
                version: "2.9.0",
                build: "2800"
            });
            var c = c || function(t, e) {
                var n = {}
                  , i = n.lib = {}
                  , r = i.Base = function() {
                    function t() {}
                    return {
                        extend: function(e) {
                            t.prototype = this;
                            var n = new t;
                            return e && n.mixIn(e),
                            n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            }
                            ),
                            n.init.prototype = n,
                            n.$super = this,
                            n
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments),
                            t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var e in t)
                                t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }()
                  , s = i.WordArray = r.extend({
                    init: function(t, e) {
                        t = this.words = t || [],
                        this.sigBytes = void 0 != e ? e : 4 * t.length
                    },
                    toString: function(t) {
                        return (t || o).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words
                          , n = t.words
                          , i = this.sigBytes
                          , r = t.sigBytes;
                        if (this.clamp(),
                        i % 4)
                            for (var s = 0; s < r; s++) {
                                var a = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                e[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8
                            }
                        else
                            for (s = 0; s < r; s += 4)
                                e[i + s >>> 2] = n[s >>> 2];
                        return this.sigBytes += r,
                        this
                    },
                    clamp: function() {
                        var e = this.words
                          , n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t.words = this.words.slice(0),
                        t
                    },
                    random: function(e) {
                        for (var n = [], i = 0; i < e; i += 4)
                            n.push(4294967296 * t.random() | 0);
                        return new s.init(n,e)
                    }
                })
                  , a = n.enc = {}
                  , o = a.Hex = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push((s >>> 4).toString(16)),
                            i.push((15 & s).toString(16))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i += 2)
                            n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new s.init(n,e / 2)
                    }
                }
                  , h = a.Latin1 = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push(String.fromCharCode(s))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i++)
                            n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new s.init(n,e)
                    }
                }
                  , u = a.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(h.stringify(t)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return h.parse(unescape(encodeURIComponent(t)))
                    }
                }
                  , c = i.BufferedBlockAlgorithm = r.extend({
                    reset: function() {
                        this._data = new s.init,
                        this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = u.parse(t)),
                        this._data.concat(t),
                        this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data
                          , i = n.words
                          , r = n.sigBytes
                          , a = this.blockSize
                          , o = 4 * a
                          , h = r / o;
                        h = e ? t.ceil(h) : t.max((0 | h) - this._minBufferSize, 0);
                        var u = h * a
                          , c = t.min(4 * u, r);
                        if (u) {
                            for (var l = 0; l < u; l += a)
                                this._doProcessBlock(i, l);
                            var f = i.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new s.init(f,c)
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._data = this._data.clone(),
                        t
                    },
                    _minBufferSize: 0
                })
                  , l = (i.Hasher = c.extend({
                    cfg: r.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t),
                        this.reset()
                    },
                    reset: function() {
                        c.reset.call(this),
                        this._doReset()
                    },
                    update: function(t) {
                        return this._append(t),
                        this._process(),
                        this
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var e = this._doFinalize();
                        return e
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(e, n) {
                            return new l.HMAC.init(t,n).finalize(e)
                        }
                    }
                }),
                n.algo = {});
                return n
            }(Math);
            (function(t) {
                var e = c
                  , n = e.lib
                  , i = n.Base
                  , r = n.WordArray;
                e = e.x64 = {};
                e.Word = i.extend({
                    init: function(t, e) {
                        this.high = t,
                        this.low = e
                    }
                }),
                e.WordArray = i.extend({
                    init: function(t, e) {
                        t = this.words = t || [],
                        this.sigBytes = void 0 != e ? e : 8 * t.length
                    },
                    toX32: function() {
                        for (var t = this.words, e = t.length, n = [], i = 0; i < e; i++) {
                            var s = t[i];
                            n.push(s.high),
                            n.push(s.low)
                        }
                        return r.create(n, this.sigBytes)
                    },
                    clone: function() {
                        for (var t = i.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++)
                            e[r] = e[r].clone();
                        return t
                    }
                })
            }
            )(),
            c.lib.Cipher || function(t) {
                var e = c
                  , n = e.lib
                  , i = n.Base
                  , r = n.WordArray
                  , s = n.BufferedBlockAlgorithm
                  , a = e.enc.Base64
                  , o = e.algo.EvpKDF
                  , h = n.Cipher = s.extend({
                    cfg: i.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, n) {
                        this.cfg = this.cfg.extend(n),
                        this._xformMode = t,
                        this._key = e,
                        this.reset()
                    },
                    reset: function() {
                        s.reset.call(this),
                        this._doReset()
                    },
                    process: function(t) {
                        return this._append(t),
                        this._process()
                    },
                    finalize: function(t) {
                        return t && this._append(t),
                        this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function(t) {
                        return {
                            encrypt: function(e, n, i) {
                                return ("string" == typeof n ? p : g).encrypt(t, e, n, i)
                            },
                            decrypt: function(e, n, i) {
                                return ("string" == typeof n ? p : g).decrypt(t, e, n, i)
                            }
                        }
                    }
                });
                n.StreamCipher = h.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                });
                var u = e.mode = {}
                  , l = function(t, e, n) {
                    var i = this._iv;
                    i ? this._iv = void 0 : i = this._prevBlock;
                    for (var r = 0; r < n; r++)
                        t[e + r] ^= i[r]
                }
                  , f = (n.BlockCipherMode = i.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t,
                        this._iv = e
                    }
                })).extend();
                f.Encryptor = f.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , i = n.blockSize;
                        l.call(this, t, e, i),
                        n.encryptBlock(t, e),
                        this._prevBlock = t.slice(e, e + i)
                    }
                }),
                f.Decryptor = f.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , i = n.blockSize
                          , r = t.slice(e, e + i);
                        n.decryptBlock(t, e),
                        l.call(this, t, e, i),
                        this._prevBlock = r
                    }
                }),
                u = u.CBC = f,
                f = (e.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var n = 4 * e, i = (n = n - t.sigBytes % n,
                        n << 24 | n << 16 | n << 8 | n), s = [], a = 0; a < n; a += 4)
                            s.push(i);
                        n = r.create(s, n),
                        t.concat(n)
                    },
                    unpad: function(t) {
                        t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                    }
                },
                n.BlockCipher = h.extend({
                    cfg: h.cfg.extend({
                        mode: u,
                        padding: f
                    }),
                    reset: function() {
                        h.reset.call(this);
                        var t = this.cfg
                          , e = t.iv;
                        t = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE)
                            var n = t.createEncryptor;
                        else
                            n = t.createDecryptor,
                            this._minBufferSize = 1;
                        this._mode = n.call(t, this, e && e.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else
                            e = this._process(!0),
                            t.unpad(e);
                        return e
                    },
                    blockSize: 4
                });
                var d = n.CipherParams = i.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                })
                  , g = (u = (e.format = {}).OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext;
                        return t = t.salt,
                        (t ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(a)
                    },
                    parse: function(t) {
                        t = a.parse(t);
                        var e = t.words;
                        if (1398893684 == e[0] && 1701076831 == e[1]) {
                            var n = r.create(e.slice(2, 4));
                            e.splice(0, 4),
                            t.sigBytes -= 16
                        }
                        return d.create({
                            ciphertext: t,
                            salt: n
                        })
                    }
                },
                n.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: u
                    }),
                    encrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i);
                        var r = t.createEncryptor(n, i);
                        return e = r.finalize(e),
                        r = r.cfg,
                        d.create({
                            ciphertext: e,
                            key: n,
                            iv: r.iv,
                            algorithm: t,
                            mode: r.mode,
                            padding: r.padding,
                            blockSize: t.blockSize,
                            formatter: i.format
                        })
                    },
                    decrypt: function(t, e, n, i) {
                        return i = this.cfg.extend(i),
                        e = this._parse(e, i.format),
                        t.createDecryptor(n, i).finalize(e.ciphertext)
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                }))
                  , p = (e = (e.kdf = {}).OpenSSL = {
                    execute: function(t, e, n, i) {
                        return i || (i = r.random(8)),
                        t = o.create({
                            keySize: e + n
                        }).compute(t, i),
                        n = r.create(t.words.slice(e), 4 * n),
                        t.sigBytes = 4 * e,
                        d.create({
                            key: t,
                            iv: n,
                            salt: i
                        })
                    }
                },
                n.PasswordBasedCipher = g.extend({
                    cfg: g.cfg.extend({
                        kdf: e
                    }),
                    encrypt: function(t, e, n, i) {
                        return i = this.cfg.extend(i),
                        n = i.kdf.execute(n, t.keySize, t.ivSize),
                        i.iv = n.iv,
                        t = g.encrypt.call(this, t, e, n.key, i),
                        t.mixIn(n),
                        t
                    },
                    decrypt: function(t, e, n, i) {
                        return i = this.cfg.extend(i),
                        e = this._parse(e, i.format),
                        n = i.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                        i.iv = n.iv,
                        g.decrypt.call(this, t, e, n.key, i)
                    }
                }))
            }(),
            function() {
                for (var t = c, e = t.lib.BlockCipher, n = t.algo, i = [], r = [], s = [], a = [], o = [], h = [], u = [], l = [], f = [], d = [], g = [], p = 0; 256 > p; p++)
                    g[p] = 128 > p ? p << 1 : p << 1 ^ 283;
                var y = 0
                  , v = 0;
                for (p = 0; 256 > p; p++) {
                    var m = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                    m = m >>> 8 ^ 255 & m ^ 99;
                    i[y] = m,
                    r[m] = y;
                    var S = g[y]
                      , b = g[S]
                      , x = g[b]
                      , A = 257 * g[m] ^ 16843008 * m;
                    s[y] = A << 24 | A >>> 8,
                    a[y] = A << 16 | A >>> 16,
                    o[y] = A << 8 | A >>> 24,
                    h[y] = A,
                    A = 16843009 * x ^ 65537 * b ^ 257 * S ^ 16843008 * y,
                    u[m] = A << 24 | A >>> 8,
                    l[m] = A << 16 | A >>> 16,
                    f[m] = A << 8 | A >>> 24,
                    d[m] = A,
                    y ? (y = S ^ g[g[g[x ^ S]]],
                    v ^= g[g[v]]) : y = v = 1
                }
                var F = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                n = n.AES = e.extend({
                    _doReset: function() {
                        for (var t = this._key, e = t.words, n = t.sigBytes / 4, r = (t = 4 * ((this._nRounds = n + 6) + 1),
                        this._keySchedule = []), s = 0; s < t; s++)
                            if (s < n)
                                r[s] = e[s];
                            else {
                                var a = r[s - 1];
                                s % n ? 6 < n && 4 == s % n && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = a << 8 | a >>> 24,
                                a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a],
                                a ^= F[s / n | 0] << 24),
                                r[s] = r[s - n] ^ a
                            }
                        for (e = this._invKeySchedule = [],
                        n = 0; n < t; n++)
                            s = t - n,
                            a = n % 4 ? r[s] : r[s - 4],
                            e[n] = 4 > n || 4 >= s ? a : u[i[a >>> 24]] ^ l[i[a >>> 16 & 255]] ^ f[i[a >>> 8 & 255]] ^ d[i[255 & a]]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, a, o, h, i)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n,
                        this._doCryptBlock(t, e, this._invKeySchedule, u, l, f, d, r),
                        n = t[e + 1],
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, i, r, s, a, o) {
                        for (var h = this._nRounds, u = t[e] ^ n[0], c = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], d = 4, g = 1; g < h; g++) {
                            var p = i[u >>> 24] ^ r[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & f] ^ n[d++]
                              , y = i[c >>> 24] ^ r[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ a[255 & u] ^ n[d++]
                              , v = i[l >>> 24] ^ r[f >>> 16 & 255] ^ s[u >>> 8 & 255] ^ a[255 & c] ^ n[d++];
                            f = i[f >>> 24] ^ r[u >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & l] ^ n[d++],
                            u = p,
                            c = y,
                            l = v
                        }
                        p = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & f]) ^ n[d++],
                        y = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & u]) ^ n[d++],
                        v = (o[l >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ n[d++],
                        f = (o[f >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ n[d++],
                        t[e] = p,
                        t[e + 1] = y,
                        t[e + 2] = v,
                        t[e + 3] = f
                    },
                    keySize: 8
                });
                t.AES = e._createHelper(n)
            }(),
            function() {
                function t(t, e) {
                    var n = (this._lBlock >>> t ^ this._rBlock) & e;
                    this._rBlock ^= n,
                    this._lBlock ^= n << t
                }
                function e(t, e) {
                    var n = (this._rBlock >>> t ^ this._lBlock) & e;
                    this._lBlock ^= n,
                    this._rBlock ^= n << t
                }
                var n = c
                  , i = n.lib
                  , r = i.WordArray
                  , s = (i = i.BlockCipher,
                n.algo)
                  , a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                  , o = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                  , h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                  , u = [{
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378
                }, {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672
                }, {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792
                }, {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464
                }, {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040
                }, {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656
                }, {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577
                }, {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848
                }]
                  , l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                  , f = s.DES = i.extend({
                    _doReset: function() {
                        for (var t = this._key.words, e = [], n = 0; 56 > n; n++) {
                            var i = a[n] - 1;
                            e[n] = t[i >>> 5] >>> 31 - i % 32 & 1
                        }
                        for (t = this._subKeys = [],
                        i = 0; 16 > i; i++) {
                            var r = t[i] = []
                              , s = h[i];
                            for (n = 0; 24 > n; n++)
                                r[n / 6 | 0] |= e[(o[n] - 1 + s) % 28] << 31 - n % 6,
                                r[4 + (n / 6 | 0)] |= e[28 + (o[n + 24] - 1 + s) % 28] << 31 - n % 6;
                            for (r[0] = r[0] << 1 | r[0] >>> 31,
                            n = 1; 7 > n; n++)
                                r[n] >>>= 4 * (n - 1) + 3;
                            r[7] = r[7] << 5 | r[7] >>> 27
                        }
                        for (e = this._invSubKeys = [],
                        n = 0; 16 > n; n++)
                            e[n] = t[15 - n]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._subKeys)
                    },
                    decryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._invSubKeys)
                    },
                    _doCryptBlock: function(n, i, r) {
                        this._lBlock = n[i],
                        this._rBlock = n[i + 1],
                        t.call(this, 4, 252645135),
                        t.call(this, 16, 65535),
                        e.call(this, 2, 858993459),
                        e.call(this, 8, 16711935),
                        t.call(this, 1, 1431655765);
                        for (var s = 0; 16 > s; s++) {
                            for (var a = r[s], o = this._lBlock, h = this._rBlock, c = 0, f = 0; 8 > f; f++)
                                c |= u[f][((h ^ a[f]) & l[f]) >>> 0];
                            this._lBlock = h,
                            this._rBlock = o ^ c
                        }
                        r = this._lBlock,
                        this._lBlock = this._rBlock,
                        this._rBlock = r,
                        t.call(this, 1, 1431655765),
                        e.call(this, 8, 16711935),
                        e.call(this, 2, 858993459),
                        t.call(this, 16, 65535),
                        t.call(this, 4, 252645135),
                        n[i] = this._lBlock,
                        n[i + 1] = this._rBlock
                    },
                    keySize: 2,
                    ivSize: 2,
                    blockSize: 2
                });
                n.DES = i._createHelper(f),
                s = s.TripleDES = i.extend({
                    _doReset: function() {
                        var t = this._key.words;
                        this._des1 = f.createEncryptor(r.create(t.slice(0, 2))),
                        this._des2 = f.createEncryptor(r.create(t.slice(2, 4))),
                        this._des3 = f.createEncryptor(r.create(t.slice(4, 6)))
                    },
                    encryptBlock: function(t, e) {
                        this._des1.encryptBlock(t, e),
                        this._des2.decryptBlock(t, e),
                        this._des3.encryptBlock(t, e)
                    },
                    decryptBlock: function(t, e) {
                        this._des3.decryptBlock(t, e),
                        this._des2.encryptBlock(t, e),
                        this._des1.decryptBlock(t, e)
                    },
                    keySize: 6,
                    ivSize: 2,
                    blockSize: 2
                }),
                n.TripleDES = i._createHelper(s)
            }(),
            function() {
                var t = c
                  , e = t.lib.WordArray;
                t.enc.Base64 = {
                    stringify: function(t) {
                        var e = t.words
                          , n = t.sigBytes
                          , i = this._map;
                        t.clamp(),
                        t = [];
                        for (var r = 0; r < n; r += 3)
                            for (var s = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < n; a++)
                                t.push(i.charAt(s >>> 6 * (3 - a) & 63));
                        if (e = i.charAt(64))
                            for (; t.length % 4; )
                                t.push(e);
                        return t.join("")
                    },
                    parse: function(t) {
                        var n = t.length
                          , i = this._map
                          , r = i.charAt(64);
                        r && (r = t.indexOf(r),
                        -1 != r && (n = r));
                        r = [];
                        for (var s = 0, a = 0; a < n; a++)
                            if (a % 4) {
                                var o = i.indexOf(t.charAt(a - 1)) << a % 4 * 2
                                  , h = i.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                                r[s >>> 2] |= (o | h) << 24 - s % 4 * 8,
                                s++
                            }
                        return e.create(r, s)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(),
            function(t) {
                function e(t, e, n, i, r, s, a) {
                    return t = t + (e & n | ~e & i) + r + a,
                    (t << s | t >>> 32 - s) + e
                }
                function n(t, e, n, i, r, s, a) {
                    return t = t + (e & i | n & ~i) + r + a,
                    (t << s | t >>> 32 - s) + e
                }
                function i(t, e, n, i, r, s, a) {
                    return t = t + (e ^ n ^ i) + r + a,
                    (t << s | t >>> 32 - s) + e
                }
                function r(t, e, n, i, r, s, a) {
                    return t = t + (n ^ (e | ~i)) + r + a,
                    (t << s | t >>> 32 - s) + e
                }
                for (var s = c, a = s.lib, o = a.WordArray, h = a.Hasher, u = (a = s.algo,
                []), l = 0; 64 > l; l++)
                    u[l] = 4294967296 * t.abs(t.sin(l + 1)) | 0;
                a = a.MD5 = h.extend({
                    _doReset: function() {
                        this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, s) {
                        for (var a = 0; 16 > a; a++) {
                            var o = s + a
                              , h = t[o];
                            t[o] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
                        }
                        a = this._hash.words,
                        o = t[s + 0],
                        h = t[s + 1];
                        var c = t[s + 2]
                          , l = t[s + 3]
                          , f = t[s + 4]
                          , d = t[s + 5]
                          , g = t[s + 6]
                          , p = t[s + 7]
                          , y = t[s + 8]
                          , v = t[s + 9]
                          , m = t[s + 10]
                          , S = t[s + 11]
                          , b = t[s + 12]
                          , x = t[s + 13]
                          , A = t[s + 14]
                          , F = t[s + 15]
                          , E = a[0]
                          , w = a[1]
                          , P = a[2]
                          , H = a[3];
                        E = e(E, w, P, H, o, 7, u[0]),
                        H = e(H, E, w, P, h, 12, u[1]),
                        P = e(P, H, E, w, c, 17, u[2]),
                        w = e(w, P, H, E, l, 22, u[3]),
                        E = e(E, w, P, H, f, 7, u[4]),
                        H = e(H, E, w, P, d, 12, u[5]),
                        P = e(P, H, E, w, g, 17, u[6]),
                        w = e(w, P, H, E, p, 22, u[7]),
                        E = e(E, w, P, H, y, 7, u[8]),
                        H = e(H, E, w, P, v, 12, u[9]),
                        P = e(P, H, E, w, m, 17, u[10]),
                        w = e(w, P, H, E, S, 22, u[11]),
                        E = e(E, w, P, H, b, 7, u[12]),
                        H = e(H, E, w, P, x, 12, u[13]),
                        P = e(P, H, E, w, A, 17, u[14]),
                        w = e(w, P, H, E, F, 22, u[15]),
                        E = n(E, w, P, H, h, 5, u[16]),
                        H = n(H, E, w, P, g, 9, u[17]),
                        P = n(P, H, E, w, S, 14, u[18]),
                        w = n(w, P, H, E, o, 20, u[19]),
                        E = n(E, w, P, H, d, 5, u[20]),
                        H = n(H, E, w, P, m, 9, u[21]),
                        P = n(P, H, E, w, F, 14, u[22]),
                        w = n(w, P, H, E, f, 20, u[23]),
                        E = n(E, w, P, H, v, 5, u[24]),
                        H = n(H, E, w, P, A, 9, u[25]),
                        P = n(P, H, E, w, l, 14, u[26]),
                        w = n(w, P, H, E, y, 20, u[27]),
                        E = n(E, w, P, H, x, 5, u[28]),
                        H = n(H, E, w, P, c, 9, u[29]),
                        P = n(P, H, E, w, p, 14, u[30]),
                        w = n(w, P, H, E, b, 20, u[31]),
                        E = i(E, w, P, H, d, 4, u[32]),
                        H = i(H, E, w, P, y, 11, u[33]),
                        P = i(P, H, E, w, S, 16, u[34]),
                        w = i(w, P, H, E, A, 23, u[35]),
                        E = i(E, w, P, H, h, 4, u[36]),
                        H = i(H, E, w, P, f, 11, u[37]),
                        P = i(P, H, E, w, p, 16, u[38]),
                        w = i(w, P, H, E, m, 23, u[39]),
                        E = i(E, w, P, H, x, 4, u[40]),
                        H = i(H, E, w, P, o, 11, u[41]),
                        P = i(P, H, E, w, l, 16, u[42]),
                        w = i(w, P, H, E, g, 23, u[43]),
                        E = i(E, w, P, H, v, 4, u[44]),
                        H = i(H, E, w, P, b, 11, u[45]),
                        P = i(P, H, E, w, F, 16, u[46]),
                        w = i(w, P, H, E, c, 23, u[47]),
                        E = r(E, w, P, H, o, 6, u[48]),
                        H = r(H, E, w, P, p, 10, u[49]),
                        P = r(P, H, E, w, A, 15, u[50]),
                        w = r(w, P, H, E, d, 21, u[51]),
                        E = r(E, w, P, H, b, 6, u[52]),
                        H = r(H, E, w, P, l, 10, u[53]),
                        P = r(P, H, E, w, m, 15, u[54]),
                        w = r(w, P, H, E, h, 21, u[55]),
                        E = r(E, w, P, H, y, 6, u[56]),
                        H = r(H, E, w, P, F, 10, u[57]),
                        P = r(P, H, E, w, g, 15, u[58]),
                        w = r(w, P, H, E, x, 21, u[59]),
                        E = r(E, w, P, H, f, 6, u[60]),
                        H = r(H, E, w, P, S, 10, u[61]),
                        P = r(P, H, E, w, c, 15, u[62]),
                        w = r(w, P, H, E, v, 21, u[63]);
                        a[0] = a[0] + E | 0,
                        a[1] = a[1] + w | 0,
                        a[2] = a[2] + P | 0,
                        a[3] = a[3] + H | 0
                    },
                    _doFinalize: function() {
                        var e = this._data
                          , n = e.words
                          , i = 8 * this._nDataBytes
                          , r = 8 * e.sigBytes;
                        n[r >>> 5] |= 128 << 24 - r % 32;
                        var s = t.floor(i / 4294967296);
                        for (n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                        n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                        e.sigBytes = 4 * (n.length + 1),
                        this._process(),
                        e = this._hash,
                        n = e.words,
                        i = 0; 4 > i; i++)
                            r = n[i],
                            n[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                        return e
                    },
                    clone: function() {
                        var t = h.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                }),
                s.MD5 = h._createHelper(a),
                s.HmacMD5 = h._createHmacHelper(a)
            }(Math),
            function() {
                var t = c
                  , e = t.lib
                  , n = e.WordArray
                  , i = e.Hasher
                  , r = [];
                e = t.algo.SHA1 = i.extend({
                    _doReset: function() {
                        this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], s = n[1], a = n[2], o = n[3], h = n[4], u = 0; 80 > u; u++) {
                            if (16 > u)
                                r[u] = 0 | t[e + u];
                            else {
                                var c = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
                                r[u] = c << 1 | c >>> 31
                            }
                            c = (i << 5 | i >>> 27) + h + r[u],
                            c = 20 > u ? c + (1518500249 + (s & a | ~s & o)) : 40 > u ? c + (1859775393 + (s ^ a ^ o)) : 60 > u ? c + ((s & a | s & o | a & o) - 1894007588) : c + ((s ^ a ^ o) - 899497514),
                            h = o,
                            o = a,
                            a = s << 30 | s >>> 2,
                            s = i,
                            i = c
                        }
                        n[0] = n[0] + i | 0,
                        n[1] = n[1] + s | 0,
                        n[2] = n[2] + a | 0,
                        n[3] = n[3] + o | 0,
                        n[4] = n[4] + h | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , i = 8 * t.sigBytes;
                        return e[i >>> 5] |= 128 << 24 - i % 32,
                        e[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                        e[15 + (i + 64 >>> 9 << 4)] = n,
                        t.sigBytes = 4 * e.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                t.SHA1 = i._createHelper(e),
                t.HmacSHA1 = i._createHmacHelper(e)
            }(),
            function(t) {
                for (var e = c, n = e.lib, i = n.WordArray, r = n.Hasher, s = (n = e.algo,
                []), a = [], o = function(t) {
                    return 4294967296 * (t - (0 | t)) | 0
                }, h = 2, u = 0; 64 > u; ) {
                    var l;
                    t: {
                        l = h;
                        for (var f = t.sqrt(l), d = 2; d <= f; d++)
                            if (!(l % d)) {
                                l = !1;
                                break t
                            }
                        l = !0
                    }
                    l && (8 > u && (s[u] = o(t.pow(h, .5))),
                    a[u] = o(t.pow(h, 1 / 3)),
                    u++),
                    h++
                }
                var g = [];
                n = n.SHA256 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init(s.slice(0))
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], o = n[3], h = n[4], u = n[5], c = n[6], l = n[7], f = 0; 64 > f; f++) {
                            if (16 > f)
                                g[f] = 0 | t[e + f];
                            else {
                                var d = g[f - 15]
                                  , p = g[f - 2];
                                g[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + g[f - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + g[f - 16]
                            }
                            d = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + a[f] + g[f],
                            p = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & r ^ i & s ^ r & s),
                            l = c,
                            c = u,
                            u = h,
                            h = o + d | 0,
                            o = s,
                            s = r,
                            r = i,
                            i = d + p | 0
                        }
                        n[0] = n[0] + i | 0,
                        n[1] = n[1] + r | 0,
                        n[2] = n[2] + s | 0,
                        n[3] = n[3] + o | 0,
                        n[4] = n[4] + h | 0,
                        n[5] = n[5] + u | 0,
                        n[6] = n[6] + c | 0,
                        n[7] = n[7] + l | 0
                    },
                    _doFinalize: function() {
                        var e = this._data
                          , n = e.words
                          , i = 8 * this._nDataBytes
                          , r = 8 * e.sigBytes;
                        return n[r >>> 5] |= 128 << 24 - r % 32,
                        n[14 + (r + 64 >>> 9 << 4)] = t.floor(i / 4294967296),
                        n[15 + (r + 64 >>> 9 << 4)] = i,
                        e.sigBytes = 4 * n.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                e.SHA256 = r._createHelper(n),
                e.HmacSHA256 = r._createHmacHelper(n)
            }(Math),
            function() {
                var t = c
                  , e = t.lib.WordArray
                  , n = t.algo
                  , i = n.SHA256;
                n = n.SHA224 = i.extend({
                    _doReset: function() {
                        this._hash = new e.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                    },
                    _doFinalize: function() {
                        var t = i._doFinalize.call(this);
                        return t.sigBytes -= 4,
                        t
                    }
                });
                t.SHA224 = i._createHelper(n),
                t.HmacSHA224 = i._createHmacHelper(n)
            }(),
            function() {
                function t() {
                    return r.create.apply(r, arguments)
                }
                for (var e = c, n = e.lib.Hasher, i = e.x64, r = i.Word, s = i.WordArray, a = (i = e.algo,
                [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)]), o = [], h = 0; 80 > h; h++)
                    o[h] = t();
                i = i.SHA512 = n.extend({
                    _doReset: function() {
                        this._hash = new s.init([new r.init(1779033703,4089235720), new r.init(3144134277,2227873595), new r.init(1013904242,4271175723), new r.init(2773480762,1595750129), new r.init(1359893119,2917565137), new r.init(2600822924,725511199), new r.init(528734635,4215389547), new r.init(1541459225,327033209)])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], h = n[3], u = n[4], c = n[5], l = n[6], f = (n = n[7],
                        i.high), d = i.low, g = r.high, p = r.low, y = s.high, v = s.low, m = h.high, S = h.low, b = u.high, x = u.low, A = c.high, F = c.low, E = l.high, w = l.low, P = n.high, H = n.low, C = f, O = d, D = g, T = p, j = y, I = v, R = m, B = S, N = b, V = x, K = A, _ = F, L = E, k = w, M = P, q = H, U = 0; 80 > U; U++) {
                            var z = o[U];
                            if (16 > U)
                                var W = z.high = 0 | t[e + 2 * U]
                                  , G = z.low = 0 | t[e + 2 * U + 1];
                            else {
                                W = o[U - 15],
                                G = W.high;
                                var J = W.low
                                  , Y = (W = (G >>> 1 | J << 31) ^ (G >>> 8 | J << 24) ^ G >>> 7,
                                J = (J >>> 1 | G << 31) ^ (J >>> 8 | G << 24) ^ (J >>> 7 | G << 25),
                                o[U - 2])
                                  , X = (G = Y.high,
                                Y.low)
                                  , $ = (Y = (G >>> 19 | X << 13) ^ (G << 3 | X >>> 29) ^ G >>> 6,
                                X = (X >>> 19 | G << 13) ^ (X << 3 | G >>> 29) ^ (X >>> 6 | G << 26),
                                G = o[U - 7],
                                G.high)
                                  , Z = o[U - 16]
                                  , Q = Z.high;
                                Z = Z.low,
                                G = J + G.low,
                                W = W + $ + (G >>> 0 < J >>> 0 ? 1 : 0),
                                G = G + X,
                                W = W + Y + (G >>> 0 < X >>> 0 ? 1 : 0),
                                G = G + Z,
                                W = W + Q + (G >>> 0 < Z >>> 0 ? 1 : 0);
                                z.high = W,
                                z.low = G
                            }
                            $ = N & K ^ ~N & L,
                            Z = V & _ ^ ~V & k,
                            z = C & D ^ C & j ^ D & j;
                            var tt = O & T ^ O & I ^ T & I
                              , et = (J = (C >>> 28 | O << 4) ^ (C << 30 | O >>> 2) ^ (C << 25 | O >>> 7),
                            Y = (O >>> 28 | C << 4) ^ (O << 30 | C >>> 2) ^ (O << 25 | C >>> 7),
                            X = a[U],
                            X.high)
                              , nt = X.low;
                            X = q + ((V >>> 14 | N << 18) ^ (V >>> 18 | N << 14) ^ (V << 23 | N >>> 9)),
                            Q = M + ((N >>> 14 | V << 18) ^ (N >>> 18 | V << 14) ^ (N << 23 | V >>> 9)) + (X >>> 0 < q >>> 0 ? 1 : 0),
                            X = X + Z,
                            Q = Q + $ + (X >>> 0 < Z >>> 0 ? 1 : 0),
                            X = X + nt,
                            Q = Q + et + (X >>> 0 < nt >>> 0 ? 1 : 0),
                            X = X + G,
                            Q = Q + W + (X >>> 0 < G >>> 0 ? 1 : 0),
                            G = Y + tt,
                            z = J + z + (G >>> 0 < Y >>> 0 ? 1 : 0),
                            M = L,
                            q = k,
                            L = K,
                            k = _,
                            K = N,
                            _ = V,
                            V = B + X | 0,
                            N = R + Q + (V >>> 0 < B >>> 0 ? 1 : 0) | 0,
                            R = j,
                            B = I,
                            j = D,
                            I = T,
                            D = C,
                            T = O,
                            O = X + G | 0,
                            C = Q + z + (O >>> 0 < X >>> 0 ? 1 : 0) | 0
                        }
                        d = i.low = d + O,
                        i.high = f + C + (d >>> 0 < O >>> 0 ? 1 : 0),
                        p = r.low = p + T,
                        r.high = g + D + (p >>> 0 < T >>> 0 ? 1 : 0),
                        v = s.low = v + I,
                        s.high = y + j + (v >>> 0 < I >>> 0 ? 1 : 0),
                        S = h.low = S + B,
                        h.high = m + R + (S >>> 0 < B >>> 0 ? 1 : 0),
                        x = u.low = x + V,
                        u.high = b + N + (x >>> 0 < V >>> 0 ? 1 : 0),
                        F = c.low = F + _,
                        c.high = A + K + (F >>> 0 < _ >>> 0 ? 1 : 0),
                        w = l.low = w + k,
                        l.high = E + L + (w >>> 0 < k >>> 0 ? 1 : 0),
                        H = n.low = H + q,
                        n.high = P + M + (H >>> 0 < q >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , i = 8 * t.sigBytes;
                        return e[i >>> 5] |= 128 << 24 - i % 32,
                        e[30 + (i + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                        e[31 + (i + 128 >>> 10 << 5)] = n,
                        t.sigBytes = 4 * e.length,
                        this._process(),
                        this._hash.toX32()
                    },
                    clone: function() {
                        var t = n.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    },
                    blockSize: 32
                }),
                e.SHA512 = n._createHelper(i),
                e.HmacSHA512 = n._createHmacHelper(i)
            }(),
            function() {
                var t = c
                  , e = t.x64
                  , n = e.Word
                  , i = e.WordArray
                  , r = (e = t.algo,
                e.SHA512);
                e = e.SHA384 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init([new n.init(3418070365,3238371032), new n.init(1654270250,914150663), new n.init(2438529370,812702999), new n.init(355462360,4144912697), new n.init(1731405415,4290775857), new n.init(2394180231,1750603025), new n.init(3675008525,1694076839), new n.init(1203062813,3204075428)])
                    },
                    _doFinalize: function() {
                        var t = r._doFinalize.call(this);
                        return t.sigBytes -= 16,
                        t
                    }
                });
                t.SHA384 = r._createHelper(e),
                t.HmacSHA384 = r._createHmacHelper(e)
            }(),
            function() {
                var t = c
                  , e = t.lib
                  , n = e.WordArray
                  , i = e.Hasher
                  , r = (e = t.algo,
                n.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]))
                  , s = n.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                  , a = n.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                  , o = n.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                  , h = n.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                  , u = n.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
                e = e.RIPEMD160 = i.extend({
                    _doReset: function() {
                        this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = 0; 16 > n; n++) {
                            var i = e + n
                              , c = t[i];
                            t[i] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                        }
                        i = this._hash.words,
                        c = h.words;
                        var l, f, d, g, p, y, v, m, S, b, x = u.words, A = r.words, F = s.words, E = a.words, w = o.words;
                        y = l = i[0],
                        v = f = i[1],
                        m = d = i[2],
                        S = g = i[3],
                        b = p = i[4];
                        var P;
                        for (n = 0; 80 > n; n += 1)
                            P = l + t[e + A[n]] | 0,
                            P = 16 > n ? P + ((f ^ d ^ g) + c[0]) : 32 > n ? P + ((f & d | ~f & g) + c[1]) : 48 > n ? P + (((f | ~d) ^ g) + c[2]) : 64 > n ? P + ((f & g | d & ~g) + c[3]) : P + ((f ^ (d | ~g)) + c[4]),
                            P |= 0,
                            P = P << E[n] | P >>> 32 - E[n],
                            P = P + p | 0,
                            l = p,
                            p = g,
                            g = d << 10 | d >>> 22,
                            d = f,
                            f = P,
                            P = y + t[e + F[n]] | 0,
                            P = 16 > n ? P + ((v ^ (m | ~S)) + x[0]) : 32 > n ? P + ((v & S | m & ~S) + x[1]) : 48 > n ? P + (((v | ~m) ^ S) + x[2]) : 64 > n ? P + ((v & m | ~v & S) + x[3]) : P + ((v ^ m ^ S) + x[4]),
                            P |= 0,
                            P = P << w[n] | P >>> 32 - w[n],
                            P = P + b | 0,
                            y = b,
                            b = S,
                            S = m << 10 | m >>> 22,
                            m = v,
                            v = P;
                        P = i[1] + d + S | 0,
                        i[1] = i[2] + g + b | 0,
                        i[2] = i[3] + p + y | 0,
                        i[3] = i[4] + l + v | 0,
                        i[4] = i[0] + f + m | 0,
                        i[0] = P
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , i = 8 * t.sigBytes;
                        for (e[i >>> 5] |= 128 << 24 - i % 32,
                        e[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                        t.sigBytes = 4 * (e.length + 1),
                        this._process(),
                        t = this._hash,
                        e = t.words,
                        n = 0; 5 > n; n++)
                            i = e[n],
                            e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        return t
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                t.RIPEMD160 = i._createHelper(e),
                t.HmacRIPEMD160 = i._createHmacHelper(e)
            }(Math),
            function() {
                var t = c
                  , e = t.enc.Utf8;
                t.algo.HMAC = t.lib.Base.extend({
                    init: function(t, n) {
                        t = this._hasher = new t.init,
                        "string" == typeof n && (n = e.parse(n));
                        var i = t.blockSize
                          , r = 4 * i;
                        n.sigBytes > r && (n = t.finalize(n)),
                        n.clamp();
                        for (var s = this._oKey = n.clone(), a = this._iKey = n.clone(), o = s.words, h = a.words, u = 0; u < i; u++)
                            o[u] ^= 1549556828,
                            h[u] ^= 909522486;
                        s.sigBytes = a.sigBytes = r,
                        this.reset()
                    },
                    reset: function() {
                        var t = this._hasher;
                        t.reset(),
                        t.update(this._iKey)
                    },
                    update: function(t) {
                        return this._hasher.update(t),
                        this
                    },
                    finalize: function(t) {
                        var e = this._hasher;
                        return t = e.finalize(t),
                        e.reset(),
                        e.finalize(this._oKey.clone().concat(t))
                    }
                })
            }(),
            function() {
                var t = c
                  , e = t.lib
                  , n = e.Base
                  , i = e.WordArray
                  , r = (e = t.algo,
                e.HMAC)
                  , s = e.PBKDF2 = n.extend({
                    cfg: n.extend({
                        keySize: 4,
                        hasher: e.SHA1,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        var n = this.cfg
                          , s = r.create(n.hasher, t)
                          , a = i.create()
                          , o = i.create([1])
                          , h = a.words
                          , u = o.words
                          , c = n.keySize;
                        for (n = n.iterations; h.length < c; ) {
                            var l = s.update(e).finalize(o);
                            s.reset();
                            for (var f = l.words, d = f.length, g = l, p = 1; p < n; p++) {
                                g = s.finalize(g),
                                s.reset();
                                for (var y = g.words, v = 0; v < d; v++)
                                    f[v] ^= y[v]
                            }
                            a.concat(l),
                            u[0]++
                        }
                        return a.sigBytes = 4 * c,
                        a
                    }
                });
                t.PBKDF2 = function(t, e, n) {
                    return s.create(n).compute(t, e)
                }
            }();
            var l, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            function d(t) {
                var e, n, i = "";
                for (e = 0; e + 3 <= t.length; e += 3)
                    n = parseInt(t.substring(e, e + 3), 16),
                    i += f.charAt(n >> 6) + f.charAt(63 & n);
                e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
                i += f.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
                i += f.charAt(n >> 2) + f.charAt((3 & n) << 4));
                while ((3 & i.length) > 0)
                    i += "=";
                return i
            }
            function g(t) {
                var e, n, i, r = "", s = 0;
                for (e = 0; e < t.length; ++e) {
                    if ("=" == t.charAt(e))
                        break;
                    i = f.indexOf(t.charAt(e)),
                    i < 0 || (0 == s ? (r += b(i >> 2),
                    n = 3 & i,
                    s = 1) : 1 == s ? (r += b(n << 2 | i >> 4),
                    n = 15 & i,
                    s = 2) : 2 == s ? (r += b(n),
                    r += b(i >> 2),
                    n = 3 & i,
                    s = 3) : (r += b(n << 2 | i >> 4),
                    r += b(15 & i),
                    s = 0))
                }
                return 1 == s && (r += b(n << 2)),
                r
            }
            function p(t, e, n) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            function y() {
                return new p(null)
            }
            "Microsoft Internet Explorer" == s.appName ? (p.prototype.am = function(t, e, n, i, r, s) {
                var a = 32767 & e
                  , o = e >> 15;
                while (--s >= 0) {
                    var h = 32767 & this[t]
                      , u = this[t++] >> 15
                      , c = o * h + u * a;
                    h = a * h + ((32767 & c) << 15) + n[i] + (1073741823 & r),
                    r = (h >>> 30) + (c >>> 15) + o * u + (r >>> 30),
                    n[i++] = 1073741823 & h
                }
                return r
            }
            ,
            l = 30) : "Netscape" != s.appName ? (p.prototype.am = function(t, e, n, i, r, s) {
                while (--s >= 0) {
                    var a = e * this[t++] + n[i] + r;
                    r = Math.floor(a / 67108864),
                    n[i++] = 67108863 & a
                }
                return r
            }
            ,
            l = 26) : (p.prototype.am = function(t, e, n, i, r, s) {
                var a = 16383 & e
                  , o = e >> 14;
                while (--s >= 0) {
                    var h = 16383 & this[t]
                      , u = this[t++] >> 14
                      , c = o * h + u * a;
                    h = a * h + ((16383 & c) << 14) + n[i] + r,
                    r = (h >> 28) + (c >> 14) + o * u,
                    n[i++] = 268435455 & h
                }
                return r
            }
            ,
            l = 28),
            p.prototype.DB = l,
            p.prototype.DM = (1 << l) - 1,
            p.prototype.DV = 1 << l;
            p.prototype.FV = Math.pow(2, 52),
            p.prototype.F1 = 52 - l,
            p.prototype.F2 = 2 * l - 52;
            var v, m, S = new Array;
            for (v = "0".charCodeAt(0),
            m = 0; m <= 9; ++m)
                S[v++] = m;
            for (v = "a".charCodeAt(0),
            m = 10; m < 36; ++m)
                S[v++] = m;
            for (v = "A".charCodeAt(0),
            m = 10; m < 36; ++m)
                S[v++] = m;
            function b(t) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
            }
            function x(t, e) {
                var n = S[t.charCodeAt(e)];
                return null == n ? -1 : n
            }
            function A(t) {
                var e = y();
                return e.fromInt(t),
                e
            }
            function F(t) {
                var e, n = 1;
                return 0 != (e = t >>> 16) && (t = e,
                n += 16),
                0 != (e = t >> 8) && (t = e,
                n += 8),
                0 != (e = t >> 4) && (t = e,
                n += 4),
                0 != (e = t >> 2) && (t = e,
                n += 2),
                0 != (e = t >> 1) && (t = e,
                n += 1),
                n
            }
            function E(t) {
                this.m = t
            }
            function w(t) {
                this.m = t,
                this.mp = t.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << t.DB - 15) - 1,
                this.mt2 = 2 * t.t
            }
            function P(t, e) {
                return t & e
            }
            function H(t, e) {
                return t | e
            }
            function C(t, e) {
                return t ^ e
            }
            function O(t, e) {
                return t & ~e
            }
            function D(t) {
                if (0 == t)
                    return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16,
                e += 16),
                0 == (255 & t) && (t >>= 8,
                e += 8),
                0 == (15 & t) && (t >>= 4,
                e += 4),
                0 == (3 & t) && (t >>= 2,
                e += 2),
                0 == (1 & t) && ++e,
                e
            }
            function T(t) {
                var e = 0;
                while (0 != t)
                    t &= t - 1,
                    ++e;
                return e
            }
            function j() {}
            function I(t) {
                return t
            }
            function R(t) {
                this.r2 = y(),
                this.q3 = y(),
                p.ONE.dlShiftTo(2 * t.t, this.r2),
                this.mu = this.r2.divide(t),
                this.m = t
            }
            E.prototype.convert = function(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }
            ,
            E.prototype.revert = function(t) {
                return t
            }
            ,
            E.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }
            ,
            E.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            E.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            w.prototype.convert = function(t) {
                var e = y();
                return t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && e.compareTo(p.ZERO) > 0 && this.m.subTo(e, e),
                e
            }
            ,
            w.prototype.revert = function(t) {
                var e = y();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            w.prototype.reduce = function(t) {
                while (t.t <= this.mt2)
                    t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var n = 32767 & t[e]
                      , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    n = e + this.m.t,
                    t[n] += this.m.am(0, i, t, e, 0, this.m.t);
                    while (t[n] >= t.DV)
                        t[n] -= t.DV,
                        t[++n]++
                }
                t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }
            ,
            w.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            w.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            p.prototype.copyTo = function(t) {
                for (var e = this.t - 1; e >= 0; --e)
                    t[e] = this[e];
                t.t = this.t,
                t.s = this.s
            }
            ,
            p.prototype.fromInt = function(t) {
                this.t = 1,
                this.s = t < 0 ? -1 : 0,
                t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }
            ,
            p.prototype.fromString = function(t, e) {
                var n;
                if (16 == e)
                    n = 4;
                else if (8 == e)
                    n = 3;
                else if (256 == e)
                    n = 8;
                else if (2 == e)
                    n = 1;
                else if (32 == e)
                    n = 5;
                else {
                    if (4 != e)
                        return void this.fromRadix(t, e);
                    n = 2
                }
                this.t = 0,
                this.s = 0;
                var i = t.length
                  , r = !1
                  , s = 0;
                while (--i >= 0) {
                    var a = 8 == n ? 255 & t[i] : x(t, i);
                    a < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1,
                    0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s,
                    this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s,
                    s += n,
                    s >= this.DB && (s -= this.DB))
                }
                8 == n && 0 != (128 & t[0]) && (this.s = -1,
                s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                this.clamp(),
                r && p.ZERO.subTo(this, this)
            }
            ,
            p.prototype.clamp = function() {
                var t = this.s & this.DM;
                while (this.t > 0 && this[this.t - 1] == t)
                    --this.t
            }
            ,
            p.prototype.dlShiftTo = function(t, e) {
                var n;
                for (n = this.t - 1; n >= 0; --n)
                    e[n + t] = this[n];
                for (n = t - 1; n >= 0; --n)
                    e[n] = 0;
                e.t = this.t + t,
                e.s = this.s
            }
            ,
            p.prototype.drShiftTo = function(t, e) {
                for (var n = t; n < this.t; ++n)
                    e[n - t] = this[n];
                e.t = Math.max(this.t - t, 0),
                e.s = this.s
            }
            ,
            p.prototype.lShiftTo = function(t, e) {
                var n, i = t % this.DB, r = this.DB - i, s = (1 << r) - 1, a = Math.floor(t / this.DB), o = this.s << i & this.DM;
                for (n = this.t - 1; n >= 0; --n)
                    e[n + a + 1] = this[n] >> r | o,
                    o = (this[n] & s) << i;
                for (n = a - 1; n >= 0; --n)
                    e[n] = 0;
                e[a] = o,
                e.t = this.t + a + 1,
                e.s = this.s,
                e.clamp()
            }
            ,
            p.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t)
                    e.t = 0;
                else {
                    var i = t % this.DB
                      , r = this.DB - i
                      , s = (1 << i) - 1;
                    e[0] = this[n] >> i;
                    for (var a = n + 1; a < this.t; ++a)
                        e[a - n - 1] |= (this[a] & s) << r,
                        e[a - n] = this[a] >> i;
                    i > 0 && (e[this.t - n - 1] |= (this.s & s) << r),
                    e.t = this.t - n,
                    e.clamp()
                }
            }
            ,
            p.prototype.subTo = function(t, e) {
                var n = 0
                  , i = 0
                  , r = Math.min(t.t, this.t);
                while (n < r)
                    i += this[n] - t[n],
                    e[n++] = i & this.DM,
                    i >>= this.DB;
                if (t.t < this.t) {
                    i -= t.s;
                    while (n < this.t)
                        i += this[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    i += this.s
                } else {
                    i += this.s;
                    while (n < t.t)
                        i -= t[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    i -= t.s
                }
                e.s = i < 0 ? -1 : 0,
                i < -1 ? e[n++] = this.DV + i : i > 0 && (e[n++] = i),
                e.t = n,
                e.clamp()
            }
            ,
            p.prototype.multiplyTo = function(t, e) {
                var n = this.abs()
                  , i = t.abs()
                  , r = n.t;
                e.t = r + i.t;
                while (--r >= 0)
                    e[r] = 0;
                for (r = 0; r < i.t; ++r)
                    e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
                e.s = 0,
                e.clamp(),
                this.s != t.s && p.ZERO.subTo(e, e)
            }
            ,
            p.prototype.squareTo = function(t) {
                var e = this.abs()
                  , n = t.t = 2 * e.t;
                while (--n >= 0)
                    t[n] = 0;
                for (n = 0; n < e.t - 1; ++n) {
                    var i = e.am(n, e[n], t, 2 * n, 0, 1);
                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                    t[n + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                t.s = 0,
                t.clamp()
            }
            ,
            p.prototype.divRemTo = function(t, e, n) {
                var i = t.abs();
                if (!(i.t <= 0)) {
                    var r = this.abs();
                    if (r.t < i.t)
                        return null != e && e.fromInt(0),
                        void (null != n && this.copyTo(n));
                    null == n && (n = y());
                    var s = y()
                      , a = this.s
                      , o = t.s
                      , h = this.DB - F(i[i.t - 1]);
                    h > 0 ? (i.lShiftTo(h, s),
                    r.lShiftTo(h, n)) : (i.copyTo(s),
                    r.copyTo(n));
                    var u = s.t
                      , c = s[u - 1];
                    if (0 != c) {
                        var l = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0)
                          , f = this.FV / l
                          , d = (1 << this.F1) / l
                          , g = 1 << this.F2
                          , v = n.t
                          , m = v - u
                          , S = null == e ? y() : e;
                        s.dlShiftTo(m, S),
                        n.compareTo(S) >= 0 && (n[n.t++] = 1,
                        n.subTo(S, n)),
                        p.ONE.dlShiftTo(u, S),
                        S.subTo(s, s);
                        while (s.t < u)
                            s[s.t++] = 0;
                        while (--m >= 0) {
                            var b = n[--v] == c ? this.DM : Math.floor(n[v] * f + (n[v - 1] + g) * d);
                            if ((n[v] += s.am(0, b, n, m, 0, u)) < b) {
                                s.dlShiftTo(m, S),
                                n.subTo(S, n);
                                while (n[v] < --b)
                                    n.subTo(S, n)
                            }
                        }
                        null != e && (n.drShiftTo(u, e),
                        a != o && p.ZERO.subTo(e, e)),
                        n.t = u,
                        n.clamp(),
                        h > 0 && n.rShiftTo(h, n),
                        a < 0 && p.ZERO.subTo(n, n)
                    }
                }
            }
            ,
            p.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var e = 3 & t;
                return e = e * (2 - (15 & t) * e) & 15,
                e = e * (2 - (255 & t) * e) & 255,
                e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
                e = e * (2 - t * e % this.DV) % this.DV,
                e > 0 ? this.DV - e : -e
            }
            ,
            p.prototype.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            p.prototype.exp = function(t, e) {
                if (t > 4294967295 || t < 1)
                    return p.ONE;
                var n = y()
                  , i = y()
                  , r = e.convert(this)
                  , s = F(t) - 1;
                r.copyTo(n);
                while (--s >= 0)
                    if (e.sqrTo(n, i),
                    (t & 1 << s) > 0)
                        e.mulTo(i, r, n);
                    else {
                        var a = n;
                        n = i,
                        i = a
                    }
                return e.revert(n)
            }
            ,
            p.prototype.toString = function(t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var e;
                if (16 == t)
                    e = 4;
                else if (8 == t)
                    e = 3;
                else if (2 == t)
                    e = 1;
                else if (32 == t)
                    e = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    e = 2
                }
                var n, i = (1 << e) - 1, r = !1, s = "", a = this.t, o = this.DB - a * this.DB % e;
                if (a-- > 0) {
                    o < this.DB && (n = this[a] >> o) > 0 && (r = !0,
                    s = b(n));
                    while (a >= 0)
                        o < e ? (n = (this[a] & (1 << o) - 1) << e - o,
                        n |= this[--a] >> (o += this.DB - e)) : (n = this[a] >> (o -= e) & i,
                        o <= 0 && (o += this.DB,
                        --a)),
                        n > 0 && (r = !0),
                        r && (s += b(n))
                }
                return r ? s : "0"
            }
            ,
            p.prototype.negate = function() {
                var t = y();
                return p.ZERO.subTo(this, t),
                t
            }
            ,
            p.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            p.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e)
                    return e;
                var n = this.t;
                if (e = n - t.t,
                0 != e)
                    return this.s < 0 ? -e : e;
                while (--n >= 0)
                    if (0 != (e = this[n] - t[n]))
                        return e;
                return 0
            }
            ,
            p.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            p.prototype.mod = function(t) {
                var e = y();
                return this.abs().divRemTo(t, null, e),
                this.s < 0 && e.compareTo(p.ZERO) > 0 && t.subTo(e, e),
                e
            }
            ,
            p.prototype.modPowInt = function(t, e) {
                var n;
                return n = t < 256 || e.isEven() ? new E(e) : new w(e),
                this.exp(t, n)
            }
            ,
            p.ZERO = A(0),
            p.ONE = A(1),
            j.prototype.convert = I,
            j.prototype.revert = I,
            j.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n)
            }
            ,
            j.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }
            ,
            R.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t)
                    return t.mod(this.m);
                if (t.compareTo(this.m) < 0)
                    return t;
                var e = y();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            R.prototype.revert = function(t) {
                return t
            }
            ,
            R.prototype.reduce = function(t) {
                t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                while (t.compareTo(this.r2) < 0)
                    t.dAddOffset(1, this.m.t + 1);
                t.subTo(this.r2, t);
                while (t.compareTo(this.m) >= 0)
                    t.subTo(this.m, t)
            }
            ,
            R.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            R.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ;
            var B = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
              , N = (1 << 26) / B[B.length - 1];
            function V() {
                this.i = 0,
                this.j = 0,
                this.S = new Array
            }
            p.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }
            ,
            p.prototype.toRadix = function(t) {
                if (null == t && (t = 10),
                0 == this.signum() || t < 2 || t > 36)
                    return "0";
                var e = this.chunkSize(t)
                  , n = Math.pow(t, e)
                  , i = A(n)
                  , r = y()
                  , s = y()
                  , a = "";
                this.divRemTo(i, r, s);
                while (r.signum() > 0)
                    a = (n + s.intValue()).toString(t).substr(1) + a,
                    r.divRemTo(i, r, s);
                return s.intValue().toString(t) + a
            }
            ,
            p.prototype.fromRadix = function(t, e) {
                this.fromInt(0),
                null == e && (e = 10);
                for (var n = this.chunkSize(e), i = Math.pow(e, n), r = !1, s = 0, a = 0, o = 0; o < t.length; ++o) {
                    var h = x(t, o);
                    h < 0 ? "-" == t.charAt(o) && 0 == this.signum() && (r = !0) : (a = e * a + h,
                    ++s >= n && (this.dMultiply(i),
                    this.dAddOffset(a, 0),
                    s = 0,
                    a = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(e, s)),
                this.dAddOffset(a, 0)),
                r && p.ZERO.subTo(this, this)
            }
            ,
            p.prototype.fromNumber = function(t, e, n) {
                if ("number" == typeof e)
                    if (t < 2)
                        this.fromInt(1);
                    else {
                        this.fromNumber(t, n),
                        this.testBit(t - 1) || this.bitwiseTo(p.ONE.shiftLeft(t - 1), H, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        while (!this.isProbablePrime(e))
                            this.dAddOffset(2, 0),
                            this.bitLength() > t && this.subTo(p.ONE.shiftLeft(t - 1), this)
                    }
                else {
                    var i = new Array
                      , r = 7 & t;
                    i.length = 1 + (t >> 3),
                    e.nextBytes(i),
                    r > 0 ? i[0] &= (1 << r) - 1 : i[0] = 0,
                    this.fromString(i, 256)
                }
            }
            ,
            p.prototype.bitwiseTo = function(t, e, n) {
                var i, r, s = Math.min(t.t, this.t);
                for (i = 0; i < s; ++i)
                    n[i] = e(this[i], t[i]);
                if (t.t < this.t) {
                    for (r = t.s & this.DM,
                    i = s; i < this.t; ++i)
                        n[i] = e(this[i], r);
                    n.t = this.t
                } else {
                    for (r = this.s & this.DM,
                    i = s; i < t.t; ++i)
                        n[i] = e(r, t[i]);
                    n.t = t.t
                }
                n.s = e(this.s, t.s),
                n.clamp()
            }
            ,
            p.prototype.changeBit = function(t, e) {
                var n = p.ONE.shiftLeft(t);
                return this.bitwiseTo(n, e, n),
                n
            }
            ,
            p.prototype.addTo = function(t, e) {
                var n = 0
                  , i = 0
                  , r = Math.min(t.t, this.t);
                while (n < r)
                    i += this[n] + t[n],
                    e[n++] = i & this.DM,
                    i >>= this.DB;
                if (t.t < this.t) {
                    i += t.s;
                    while (n < this.t)
                        i += this[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    i += this.s
                } else {
                    i += this.s;
                    while (n < t.t)
                        i += t[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    i += t.s
                }
                e.s = i < 0 ? -1 : 0,
                i > 0 ? e[n++] = i : i < -1 && (e[n++] = this.DV + i),
                e.t = n,
                e.clamp()
            }
            ,
            p.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
            }
            ,
            p.prototype.dAddOffset = function(t, e) {
                if (0 != t) {
                    while (this.t <= e)
                        this[this.t++] = 0;
                    this[e] += t;
                    while (this[e] >= this.DV)
                        this[e] -= this.DV,
                        ++e >= this.t && (this[this.t++] = 0),
                        ++this[e]
                }
            }
            ,
            p.prototype.multiplyLowerTo = function(t, e, n) {
                var i, r = Math.min(this.t + t.t, e);
                n.s = 0,
                n.t = r;
                while (r > 0)
                    n[--r] = 0;
                for (i = n.t - this.t; r < i; ++r)
                    n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                for (i = Math.min(t.t, e); r < i; ++r)
                    this.am(0, t[r], n, r, 0, e - r);
                n.clamp()
            }
            ,
            p.prototype.multiplyUpperTo = function(t, e, n) {
                --e;
                var i = n.t = this.t + t.t - e;
                n.s = 0;
                while (--i >= 0)
                    n[i] = 0;
                for (i = Math.max(e - this.t, 0); i < t.t; ++i)
                    n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
                n.clamp(),
                n.drShiftTo(1, n)
            }
            ,
            p.prototype.modInt = function(t) {
                if (t <= 0)
                    return 0;
                var e = this.DV % t
                  , n = this.s < 0 ? t - 1 : 0;
                if (this.t > 0)
                    if (0 == e)
                        n = this[0] % t;
                    else
                        for (var i = this.t - 1; i >= 0; --i)
                            n = (e * n + this[i]) % t;
                return n
            }
            ,
            p.prototype.millerRabin = function(t) {
                var e = this.subtract(p.ONE)
                  , n = e.getLowestSetBit();
                if (n <= 0)
                    return !1;
                var i = e.shiftRight(n);
                t = t + 1 >> 1,
                t > B.length && (t = B.length);
                for (var r = y(), s = 0; s < t; ++s) {
                    r.fromInt(B[Math.floor(Math.random() * B.length)]);
                    var a = r.modPow(i, this);
                    if (0 != a.compareTo(p.ONE) && 0 != a.compareTo(e)) {
                        var o = 1;
                        while (o++ < n && 0 != a.compareTo(e))
                            if (a = a.modPowInt(2, this),
                            0 == a.compareTo(p.ONE))
                                return !1;
                        if (0 != a.compareTo(e))
                            return !1
                    }
                }
                return !0
            }
            ,
            p.prototype.clone = function() {
                var t = y();
                return this.copyTo(t),
                t
            }
            ,
            p.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            p.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            p.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            p.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            p.prototype.toByteArray = function() {
                var t = this.t
                  , e = new Array;
                e[0] = this.s;
                var n, i = this.DB - t * this.DB % 8, r = 0;
                if (t-- > 0) {
                    i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i);
                    while (t >= 0)
                        i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i,
                        n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255,
                        i <= 0 && (i += this.DB,
                        --t)),
                        0 != (128 & n) && (n |= -256),
                        0 == r && (128 & this.s) != (128 & n) && ++r,
                        (r > 0 || n != this.s) && (e[r++] = n)
                }
                return e
            }
            ,
            p.prototype.equals = function(t) {
                return 0 == this.compareTo(t)
            }
            ,
            p.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }
            ,
            p.prototype.max = function(t) {
                return this.compareTo(t) > 0 ? this : t
            }
            ,
            p.prototype.and = function(t) {
                var e = y();
                return this.bitwiseTo(t, P, e),
                e
            }
            ,
            p.prototype.or = function(t) {
                var e = y();
                return this.bitwiseTo(t, H, e),
                e
            }
            ,
            p.prototype.xor = function(t) {
                var e = y();
                return this.bitwiseTo(t, C, e),
                e
            }
            ,
            p.prototype.andNot = function(t) {
                var e = y();
                return this.bitwiseTo(t, O, e),
                e
            }
            ,
            p.prototype.not = function() {
                for (var t = y(), e = 0; e < this.t; ++e)
                    t[e] = this.DM & ~this[e];
                return t.t = this.t,
                t.s = ~this.s,
                t
            }
            ,
            p.prototype.shiftLeft = function(t) {
                var e = y();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                e
            }
            ,
            p.prototype.shiftRight = function(t) {
                var e = y();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                e
            }
            ,
            p.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t])
                        return t * this.DB + D(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            p.prototype.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                    t += T(this[n] ^ e);
                return t
            }
            ,
            p.prototype.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }
            ,
            p.prototype.setBit = function(t) {
                return this.changeBit(t, H)
            }
            ,
            p.prototype.clearBit = function(t) {
                return this.changeBit(t, O)
            }
            ,
            p.prototype.flipBit = function(t) {
                return this.changeBit(t, C)
            }
            ,
            p.prototype.add = function(t) {
                var e = y();
                return this.addTo(t, e),
                e
            }
            ,
            p.prototype.subtract = function(t) {
                var e = y();
                return this.subTo(t, e),
                e
            }
            ,
            p.prototype.multiply = function(t) {
                var e = y();
                return this.multiplyTo(t, e),
                e
            }
            ,
            p.prototype.divide = function(t) {
                var e = y();
                return this.divRemTo(t, e, null),
                e
            }
            ,
            p.prototype.remainder = function(t) {
                var e = y();
                return this.divRemTo(t, null, e),
                e
            }
            ,
            p.prototype.divideAndRemainder = function(t) {
                var e = y()
                  , n = y();
                return this.divRemTo(t, e, n),
                new Array(e,n)
            }
            ,
            p.prototype.modPow = function(t, e) {
                var n, i, r = t.bitLength(), s = A(1);
                if (r <= 0)
                    return s;
                n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
                i = r < 8 ? new E(e) : e.isEven() ? new R(e) : new w(e);
                var a = new Array
                  , o = 3
                  , h = n - 1
                  , u = (1 << n) - 1;
                if (a[1] = i.convert(this),
                n > 1) {
                    var c = y();
                    i.sqrTo(a[1], c);
                    while (o <= u)
                        a[o] = y(),
                        i.mulTo(c, a[o - 2], a[o]),
                        o += 2
                }
                var l, f, d = t.t - 1, g = !0, p = y();
                r = F(t[d]) - 1;
                while (d >= 0) {
                    r >= h ? l = t[d] >> r - h & u : (l = (t[d] & (1 << r + 1) - 1) << h - r,
                    d > 0 && (l |= t[d - 1] >> this.DB + r - h)),
                    o = n;
                    while (0 == (1 & l))
                        l >>= 1,
                        --o;
                    if ((r -= o) < 0 && (r += this.DB,
                    --d),
                    g)
                        a[l].copyTo(s),
                        g = !1;
                    else {
                        while (o > 1)
                            i.sqrTo(s, p),
                            i.sqrTo(p, s),
                            o -= 2;
                        o > 0 ? i.sqrTo(s, p) : (f = s,
                        s = p,
                        p = f),
                        i.mulTo(p, a[l], s)
                    }
                    while (d >= 0 && 0 == (t[d] & 1 << r))
                        i.sqrTo(s, p),
                        f = s,
                        s = p,
                        p = f,
                        --r < 0 && (r = this.DB - 1,
                        --d)
                }
                return i.revert(s)
            }
            ,
            p.prototype.modInverse = function(t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum())
                    return p.ZERO;
                var n = t.clone()
                  , i = this.clone()
                  , r = A(1)
                  , s = A(0)
                  , a = A(0)
                  , o = A(1);
                while (0 != n.signum()) {
                    while (n.isEven())
                        n.rShiftTo(1, n),
                        e ? (r.isEven() && s.isEven() || (r.addTo(this, r),
                        s.subTo(t, s)),
                        r.rShiftTo(1, r)) : s.isEven() || s.subTo(t, s),
                        s.rShiftTo(1, s);
                    while (i.isEven())
                        i.rShiftTo(1, i),
                        e ? (a.isEven() && o.isEven() || (a.addTo(this, a),
                        o.subTo(t, o)),
                        a.rShiftTo(1, a)) : o.isEven() || o.subTo(t, o),
                        o.rShiftTo(1, o);
                    n.compareTo(i) >= 0 ? (n.subTo(i, n),
                    e && r.subTo(a, r),
                    s.subTo(o, s)) : (i.subTo(n, i),
                    e && a.subTo(r, a),
                    o.subTo(s, o))
                }
                return 0 != i.compareTo(p.ONE) ? p.ZERO : o.compareTo(t) >= 0 ? o.subtract(t) : o.signum() < 0 ? (o.addTo(t, o),
                o.signum() < 0 ? o.add(t) : o) : o
            }
            ,
            p.prototype.pow = function(t) {
                return this.exp(t, new j)
            }
            ,
            p.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone()
                  , n = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(n) < 0) {
                    var i = e;
                    e = n,
                    n = i
                }
                var r = e.getLowestSetBit()
                  , s = n.getLowestSetBit();
                if (s < 0)
                    return e;
                r < s && (s = r),
                s > 0 && (e.rShiftTo(s, e),
                n.rShiftTo(s, n));
                while (e.signum() > 0)
                    (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                    (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                    e.compareTo(n) >= 0 ? (e.subTo(n, e),
                    e.rShiftTo(1, e)) : (n.subTo(e, n),
                    n.rShiftTo(1, n));
                return s > 0 && n.lShiftTo(s, n),
                n
            }
            ,
            p.prototype.isProbablePrime = function(t) {
                var e, n = this.abs();
                if (1 == n.t && n[0] <= B[B.length - 1]) {
                    for (e = 0; e < B.length; ++e)
                        if (n[0] == B[e])
                            return !0;
                    return !1
                }
                if (n.isEven())
                    return !1;
                e = 1;
                while (e < B.length) {
                    var i = B[e]
                      , r = e + 1;
                    while (r < B.length && i < N)
                        i *= B[r++];
                    i = n.modInt(i);
                    while (e < r)
                        if (i % B[e++] == 0)
                            return !1
                }
                return n.millerRabin(t)
            }
            ,
            p.prototype.square = function() {
                var t = y();
                return this.squareTo(t),
                t
            }
            ,
            V.prototype.init = function(t) {
                var e, n, i;
                for (e = 0; e < 256; ++e)
                    this.S[e] = e;
                for (n = 0,
                e = 0; e < 256; ++e)
                    n = n + this.S[e] + t[e % t.length] & 255,
                    i = this.S[e],
                    this.S[e] = this.S[n],
                    this.S[n] = i;
                this.i = 0,
                this.j = 0
            }
            ,
            V.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
            }
            ;
            var K, _, L;
            function k() {
                (function(t) {
                    _[L++] ^= 255 & t,
                    _[L++] ^= t >> 8 & 255,
                    _[L++] ^= t >> 16 & 255,
                    _[L++] ^= t >> 24 & 255,
                    L >= 256 && (L -= 256)
                }
                )((new Date).getTime())
            }
            if (null == _) {
                var M;
                if (_ = new Array,
                L = 0,
                a.crypto && a.crypto.getRandomValues) {
                    var q = new Uint8Array(32);
                    for (a.crypto.getRandomValues(q),
                    M = 0; M < 32; ++M)
                        _[L++] = q[M]
                }
                if ("Netscape" == s.appName && s.appVersion < "5" && a.crypto && a.crypto.random) {
                    var U = a.crypto.random(32);
                    for (M = 0; M < U.length; ++M)
                        _[L++] = 255 & U.charCodeAt(M)
                }
                while (L < 256)
                    M = Math.floor(65536 * Math.random()),
                    _[L++] = M >>> 8,
                    _[L++] = 255 & M;
                L = 0,
                k()
            }
            function z() {
                if (null == K) {
                    for (k(),
                    K = function() {
                        return new V
                    }(),
                    K.init(_),
                    L = 0; L < _.length; ++L)
                        _[L] = 0;
                    L = 0
                }
                return K.next()
            }
            function W() {}
            function G(t, e) {
                return new p(t,e)
            }
            function J(t, e, n) {
                var i = ""
                  , r = 0;
                while (i.length < e)
                    i += n(String.fromCharCode.apply(String, t.concat([(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r]))),
                    r += 1;
                return i
            }
            function Y() {
                this.n = null,
                this.e = 0,
                this.d = null,
                this.p = null,
                this.q = null,
                this.dmp1 = null,
                this.dmq1 = null,
                this.coeff = null
            }
            function X(t, e, n) {
                var i = ""
                  , r = 0;
                while (i.length < e)
                    i += n(t + String.fromCharCode.apply(String, [(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r])),
                    r += 1;
                return i
            }
            function $(t, e) {
                this.x = e,
                this.q = t
            }
            function Z(t, e, n, i) {
                this.curve = t,
                this.x = e,
                this.y = n,
                this.z = null == i ? p.ONE : i,
                this.zinv = null
            }
            function Q(t, e, n) {
                this.q = t,
                this.a = this.fromBigInteger(e),
                this.b = this.fromBigInteger(n),
                this.infinity = new Z(this,null,null)
            }
            W.prototype.nextBytes = function(t) {
                var e;
                for (e = 0; e < t.length; ++e)
                    t[e] = z()
            }
            ,
            Y.prototype.doPublic = function(t) {
                return t.modPowInt(this.e, this.n)
            }
            ,
            Y.prototype.setPublic = function(t, e) {
                if (this.isPublic = !0,
                this.isPrivate = !1,
                "string" !== typeof t)
                    this.n = t,
                    this.e = e;
                else {
                    if (!(null != t && null != e && t.length > 0 && e.length > 0))
                        throw "Invalid RSA public key";
                    this.n = G(t, 16),
                    this.e = parseInt(e, 16)
                }
            }
            ,
            Y.prototype.encrypt = function(t) {
                var e = function(t, e) {
                    if (e < t.length + 11)
                        return console.log("Message too long for RSA"),
                        null;
                    var n = new Array
                      , i = t.length - 1;
                    while (i >= 0 && e > 0) {
                        var r = t.charCodeAt(i--);
                        r < 128 ? n[--e] = r : r > 127 && r < 2048 ? (n[--e] = 63 & r | 128,
                        n[--e] = r >> 6 | 192) : (n[--e] = 63 & r | 128,
                        n[--e] = r >> 6 & 63 | 128,
                        n[--e] = r >> 12 | 224)
                    }
                    n[--e] = 0;
                    var s = new W
                      , a = new Array;
                    while (e > 2) {
                        a[0] = 0;
                        while (0 == a[0])
                            s.nextBytes(a);
                        n[--e] = a[0]
                    }
                    return n[--e] = 2,
                    n[--e] = 0,
                    new p(n)
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e)
                    return null;
                var n = this.doPublic(e);
                if (null == n)
                    return null;
                var i = n.toString(16);
                return 0 == (1 & i.length) ? i : "0" + i
            }
            ,
            Y.prototype.encryptOAEP = function(t, e, n) {
                var i = function(t, e, n, i) {
                    var r = o.crypto.MessageDigest
                      , s = o.crypto.Util
                      , a = null;
                    if (n || (n = "sha1"),
                    "string" === typeof n && (a = r.getCanonicalAlgName(n),
                    i = r.getHashLength(a),
                    n = function(t) {
                        return ft(s.hashString(t, a))
                    }
                    ),
                    t.length + 2 * i + 2 > e)
                        throw "Message too long for RSA";
                    var h, u = "";
                    for (h = 0; h < e - t.length - 2 * i - 2; h += 1)
                        u += "\0";
                    var c = n("") + u + "" + t
                      , l = new Array(i);
                    (new W).nextBytes(l);
                    var f = J(l, c.length, n)
                      , d = [];
                    for (h = 0; h < c.length; h += 1)
                        d[h] = c.charCodeAt(h) ^ f.charCodeAt(h);
                    var g = J(d, l.length, n)
                      , y = [0];
                    for (h = 0; h < l.length; h += 1)
                        y[h + 1] = l[h] ^ g.charCodeAt(h);
                    return new p(y.concat(d))
                }(t, this.n.bitLength() + 7 >> 3, e, n);
                if (null == i)
                    return null;
                var r = this.doPublic(i);
                if (null == r)
                    return null;
                var s = r.toString(16);
                return 0 == (1 & s.length) ? s : "0" + s
            }
            ,
            Y.prototype.type = "RSA",
            Y.prototype.doPrivate = function(t) {
                if (null == this.p || null == this.q)
                    return t.modPow(this.d, this.n);
                var e = t.mod(this.p).modPow(this.dmp1, this.p)
                  , n = t.mod(this.q).modPow(this.dmq1, this.q);
                while (e.compareTo(n) < 0)
                    e = e.add(this.p);
                return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
            }
            ,
            Y.prototype.setPrivate = function(t, e, n) {
                this.isPrivate = !0,
                "string" !== typeof t ? (this.n = t,
                this.e = e,
                this.d = n) : null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = G(t, 16),
                this.e = parseInt(e, 16),
                this.d = G(n, 16)) : console.log("Invalid RSA private key")
            }
            ,
            Y.prototype.setPrivateEx = function(t, e, n, i, r, s, a, o) {
                if (this.isPrivate = !0,
                this.isPublic = !1,
                null == t)
                    throw "RSASetPrivateEx N == null";
                if (null == e)
                    throw "RSASetPrivateEx E == null";
                if (0 == t.length)
                    throw "RSASetPrivateEx N.length == 0";
                if (0 == e.length)
                    throw "RSASetPrivateEx E.length == 0";
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = G(t, 16),
                this.e = parseInt(e, 16),
                this.d = G(n, 16),
                this.p = G(i, 16),
                this.q = G(r, 16),
                this.dmp1 = G(s, 16),
                this.dmq1 = G(a, 16),
                this.coeff = G(o, 16)) : console.log("Invalid RSA private key in RSASetPrivateEx")
            }
            ,
            Y.prototype.generate = function(t, e) {
                var n = new W
                  , i = t >> 1;
                this.e = parseInt(e, 16);
                for (var r = new p(e,16); ; ) {
                    for (; ; )
                        if (this.p = new p(t - i,1,n),
                        0 == this.p.subtract(p.ONE).gcd(r).compareTo(p.ONE) && this.p.isProbablePrime(10))
                            break;
                    for (; ; )
                        if (this.q = new p(i,1,n),
                        0 == this.q.subtract(p.ONE).gcd(r).compareTo(p.ONE) && this.q.isProbablePrime(10))
                            break;
                    if (this.p.compareTo(this.q) <= 0) {
                        var s = this.p;
                        this.p = this.q,
                        this.q = s
                    }
                    var a = this.p.subtract(p.ONE)
                      , o = this.q.subtract(p.ONE)
                      , h = a.multiply(o);
                    if (0 == h.gcd(r).compareTo(p.ONE)) {
                        this.n = this.p.multiply(this.q),
                        this.d = r.modInverse(h),
                        this.dmp1 = this.d.mod(a),
                        this.dmq1 = this.d.mod(o),
                        this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
                this.isPrivate = !0
            }
            ,
            Y.prototype.decrypt = function(t) {
                var e = G(t, 16)
                  , n = this.doPrivate(e);
                return null == n ? null : function(t, e) {
                    var n = t.toByteArray()
                      , i = 0;
                    while (i < n.length && 0 == n[i])
                        ++i;
                    if (n.length - i != e - 1 || 2 != n[i])
                        return null;
                    ++i;
                    while (0 != n[i])
                        if (++i >= n.length)
                            return null;
                    var r = "";
                    while (++i < n.length) {
                        var s = 255 & n[i];
                        s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((31 & s) << 6 | 63 & n[i + 1]),
                        ++i) : (r += String.fromCharCode((15 & s) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]),
                        i += 2)
                    }
                    return r
                }(n, this.n.bitLength() + 7 >> 3)
            }
            ,
            Y.prototype.decryptOAEP = function(t, e, n) {
                var i = G(t, 16)
                  , r = this.doPrivate(i);
                return null == r ? null : function(t, e, n, i) {
                    var r = o.crypto.MessageDigest
                      , s = o.crypto.Util
                      , a = null;
                    for (n || (n = "sha1"),
                    "string" === typeof n && (a = r.getCanonicalAlgName(n),
                    i = r.getHashLength(a),
                    n = function(t) {
                        return ft(s.hashString(t, a))
                    }
                    ),
                    t = t.toByteArray(),
                    h = 0; h < t.length; h += 1)
                        t[h] &= 255;
                    while (t.length < e)
                        t.unshift(0);
                    if (t = String.fromCharCode.apply(String, t),
                    t.length < 2 * i + 2)
                        throw "Cipher too short";
                    var h, u = t.substr(1, i), c = t.substr(i + 1), l = X(c, i, n), f = [];
                    for (h = 0; h < u.length; h += 1)
                        f[h] = u.charCodeAt(h) ^ l.charCodeAt(h);
                    var d = X(String.fromCharCode.apply(String, f), t.length - i, n)
                      , g = [];
                    for (h = 0; h < c.length; h += 1)
                        g[h] = c.charCodeAt(h) ^ d.charCodeAt(h);
                    if (g = String.fromCharCode.apply(String, g),
                    g.substr(0, i) !== n(""))
                        throw "Hash mismatch";
                    g = g.substr(i);
                    var p = g.indexOf("")
                      , y = -1 != p ? g.substr(0, p).lastIndexOf("\0") : -1;
                    if (y + 1 != p)
                        throw "Malformed data";
                    return g.substr(p + 1)
                }(r, this.n.bitLength() + 7 >> 3, e, n)
            }
            ,
            $.prototype.equals = function(t) {
                return t == this || this.q.equals(t.q) && this.x.equals(t.x)
            }
            ,
            $.prototype.toBigInteger = function() {
                return this.x
            }
            ,
            $.prototype.negate = function() {
                return new $(this.q,this.x.negate().mod(this.q))
            }
            ,
            $.prototype.add = function(t) {
                return new $(this.q,this.x.add(t.toBigInteger()).mod(this.q))
            }
            ,
            $.prototype.subtract = function(t) {
                return new $(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))
            }
            ,
            $.prototype.multiply = function(t) {
                return new $(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))
            }
            ,
            $.prototype.square = function() {
                return new $(this.q,this.x.square().mod(this.q))
            }
            ,
            $.prototype.divide = function(t) {
                return new $(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
            }
            ,
            Z.prototype.getX = function() {
                return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
            ,
            Z.prototype.getY = function() {
                return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
            ,
            Z.prototype.equals = function(t) {
                return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : (e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
                !!e.equals(p.ZERO) && (n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q),
                n.equals(p.ZERO))));
                var e, n
            }
            ,
            Z.prototype.isInfinity = function() {
                return null == this.x && null == this.y || this.z.equals(p.ZERO) && !this.y.toBigInteger().equals(p.ZERO)
            }
            ,
            Z.prototype.negate = function() {
                return new Z(this.curve,this.x,this.y.negate(),this.z)
            }
            ,
            Z.prototype.add = function(t) {
                if (this.isInfinity())
                    return t;
                if (t.isInfinity())
                    return this;
                var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q)
                  , n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
                if (p.ZERO.equals(n))
                    return p.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
                var i = new p("3")
                  , r = this.x.toBigInteger()
                  , s = this.y.toBigInteger()
                  , a = (t.x.toBigInteger(),
                t.y.toBigInteger(),
                n.square())
                  , o = a.multiply(n)
                  , h = r.multiply(a)
                  , u = e.square().multiply(this.z)
                  , c = u.subtract(h.shiftLeft(1)).multiply(t.z).subtract(o).multiply(n).mod(this.curve.q)
                  , l = h.multiply(i).multiply(e).subtract(s.multiply(o)).subtract(u.multiply(e)).multiply(t.z).add(e.multiply(o)).mod(this.curve.q)
                  , f = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
                return new Z(this.curve,this.curve.fromBigInteger(c),this.curve.fromBigInteger(l),f)
            }
            ,
            Z.prototype.twice = function() {
                if (this.isInfinity())
                    return this;
                if (0 == this.y.toBigInteger().signum())
                    return this.curve.getInfinity();
                var t = new p("3")
                  , e = this.x.toBigInteger()
                  , n = this.y.toBigInteger()
                  , i = n.multiply(this.z)
                  , r = i.multiply(n).mod(this.curve.q)
                  , s = this.curve.a.toBigInteger()
                  , a = e.square().multiply(t);
                p.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s))),
                a = a.mod(this.curve.q);
                var o = a.square().subtract(e.shiftLeft(3).multiply(r)).shiftLeft(1).multiply(i).mod(this.curve.q)
                  , h = a.multiply(t).multiply(e).subtract(r.shiftLeft(1)).shiftLeft(2).multiply(r).subtract(a.square().multiply(a)).mod(this.curve.q)
                  , u = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
                return new Z(this.curve,this.curve.fromBigInteger(o),this.curve.fromBigInteger(h),u)
            }
            ,
            Z.prototype.multiply = function(t) {
                if (this.isInfinity())
                    return this;
                if (0 == t.signum())
                    return this.curve.getInfinity();
                var e, n = t, i = n.multiply(new p("3")), r = this.negate(), s = this;
                for (e = i.bitLength() - 2; e > 0; --e) {
                    s = s.twice();
                    var a = i.testBit(e)
                      , o = n.testBit(e);
                    a != o && (s = s.add(a ? this : r))
                }
                return s
            }
            ,
            Z.prototype.multiplyTwo = function(t, e, n) {
                var i;
                i = t.bitLength() > n.bitLength() ? t.bitLength() - 1 : n.bitLength() - 1;
                var r = this.curve.getInfinity()
                  , s = this.add(e);
                while (i >= 0)
                    r = r.twice(),
                    t.testBit(i) ? r = n.testBit(i) ? r.add(s) : r.add(this) : n.testBit(i) && (r = r.add(e)),
                    --i;
                return r
            }
            ,
            Q.prototype.getQ = function() {
                return this.q
            }
            ,
            Q.prototype.getA = function() {
                return this.a
            }
            ,
            Q.prototype.getB = function() {
                return this.b
            }
            ,
            Q.prototype.equals = function(t) {
                return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
            }
            ,
            Q.prototype.getInfinity = function() {
                return this.infinity
            }
            ,
            Q.prototype.fromBigInteger = function(t) {
                return new $(this.q,t)
            }
            ,
            Q.prototype.decodePointHex = function(t) {
                switch (parseInt(t.substr(0, 2), 16)) {
                case 0:
                    return this.infinity;
                case 2:
                case 3:
                    return null;
                case 4:
                case 6:
                case 7:
                    var e = (t.length - 2) / 2
                      , n = t.substr(2, e)
                      , i = t.substr(e + 2, e);
                    return new Z(this,this.fromBigInteger(new p(n,16)),this.fromBigInteger(new p(i,16)));
                default:
                    return null
                }
            }
            ,
            $.prototype.getByteLength = function() {
                return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
            }
            ,
            Z.prototype.getEncoded = function(t) {
                var e = function(t, e) {
                    var n = t.toByteArrayUnsigned();
                    if (e < n.length)
                        n = n.slice(n.length - e);
                    else
                        while (e > n.length)
                            n.unshift(0);
                    return n
                }
                  , n = this.getX().toBigInteger()
                  , i = this.getY().toBigInteger()
                  , r = e(n, 32);
                return t ? i.isEven() ? r.unshift(2) : r.unshift(3) : (r.unshift(4),
                r = r.concat(e(i, 32))),
                r
            }
            ,
            Z.decodeFrom = function(t, e) {
                e[0];
                var n = e.length - 1
                  , i = e.slice(1, 1 + n / 2)
                  , r = e.slice(1 + n / 2, 1 + n);
                i.unshift(0),
                r.unshift(0);
                var s = new p(i)
                  , a = new p(r);
                return new Z(t,t.fromBigInteger(s),t.fromBigInteger(a))
            }
            ,
            Z.decodeFromHex = function(t, e) {
                e.substr(0, 2);
                var n = e.length - 2
                  , i = e.substr(2, n / 2)
                  , r = e.substr(2 + n / 2, n / 2)
                  , s = new p(i,16)
                  , a = new p(r,16);
                return new Z(t,t.fromBigInteger(s),t.fromBigInteger(a))
            }
            ,
            Z.prototype.add2D = function(t) {
                if (this.isInfinity())
                    return t;
                if (t.isInfinity())
                    return this;
                if (this.x.equals(t.x))
                    return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
                var e = t.x.subtract(this.x)
                  , n = t.y.subtract(this.y)
                  , i = n.divide(e)
                  , r = i.square().subtract(this.x).subtract(t.x)
                  , s = i.multiply(this.x.subtract(r)).subtract(this.y);
                return new Z(this.curve,r,s)
            }
            ,
            Z.prototype.twice2D = function() {
                if (this.isInfinity())
                    return this;
                if (0 == this.y.toBigInteger().signum())
                    return this.curve.getInfinity();
                var t = this.curve.fromBigInteger(p.valueOf(2))
                  , e = this.curve.fromBigInteger(p.valueOf(3))
                  , n = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t))
                  , i = n.square().subtract(this.x.multiply(t))
                  , r = n.multiply(this.x.subtract(i)).subtract(this.y);
                return new Z(this.curve,i,r)
            }
            ,
            Z.prototype.multiply2D = function(t) {
                if (this.isInfinity())
                    return this;
                if (0 == t.signum())
                    return this.curve.getInfinity();
                var e, n = t, i = n.multiply(new p("3")), r = this.negate(), s = this;
                for (e = i.bitLength() - 2; e > 0; --e) {
                    s = s.twice();
                    var a = i.testBit(e)
                      , o = n.testBit(e);
                    a != o && (s = s.add2D(a ? this : r))
                }
                return s
            }
            ,
            Z.prototype.isOnCurve = function() {
                var t = this.getX().toBigInteger()
                  , e = this.getY().toBigInteger()
                  , n = this.curve.getA().toBigInteger()
                  , i = this.curve.getB().toBigInteger()
                  , r = this.curve.getQ()
                  , s = e.multiply(e).mod(r)
                  , a = t.multiply(t).multiply(t).add(n.multiply(t)).add(i).mod(r);
                return s.equals(a)
            }
            ,
            Z.prototype.toString = function() {
                return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
            }
            ,
            Z.prototype.validate = function() {
                var t = this.curve.getQ();
                if (this.isInfinity())
                    throw new Error("Point is at infinity.");
                var e = this.getX().toBigInteger()
                  , n = this.getY().toBigInteger();
                if (e.compareTo(p.ONE) < 0 || e.compareTo(t.subtract(p.ONE)) > 0)
                    throw new Error("x coordinate out of bounds");
                if (n.compareTo(p.ONE) < 0 || n.compareTo(t.subtract(p.ONE)) > 0)
                    throw new Error("y coordinate out of bounds");
                if (!this.isOnCurve())
                    throw new Error("Point is not on the curve.");
                if (this.multiply(t).isInfinity())
                    throw new Error("Point is not a scalar multiple of G.");
                return !0
            }
            ;
            var tt = function() {
                var t = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',"g")
                  , e = new RegExp("\\\\(?:([^u])|u(.{4}))","g")
                  , n = {
                    '"': '"',
                    "/": "/",
                    "\\": "\\",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                };
                function i(t, e, i) {
                    return e ? n[e] : String.fromCharCode(parseInt(i, 16))
                }
                var s = new String("")
                  , a = Object.hasOwnProperty;
                return function(n, o) {
                    var h, u, c = n.match(t), l = c[0], f = !1;
                    "{" === l ? h = {} : "[" === l ? h = [] : (h = [],
                    f = !0);
                    for (var d = [h], g = 1 - f, p = c.length; g < p; ++g) {
                        var y;
                        switch (l = c[g],
                        l.charCodeAt(0)) {
                        default:
                            y = d[0],
                            y[u || y.length] = +l,
                            u = void 0;
                            break;
                        case 34:
                            if (l = l.substring(1, l.length - 1),
                            -1 !== l.indexOf("\\") && (l = l.replace(e, i)),
                            y = d[0],
                            !u) {
                                if (!(y instanceof Array)) {
                                    u = l || s;
                                    break
                                }
                                u = y.length
                            }
                            y[u] = l,
                            u = void 0;
                            break;
                        case 91:
                            y = d[0],
                            d.unshift(y[u || y.length] = []),
                            u = void 0;
                            break;
                        case 93:
                            d.shift();
                            break;
                        case 102:
                            y = d[0],
                            y[u || y.length] = !1,
                            u = void 0;
                            break;
                        case 110:
                            y = d[0],
                            y[u || y.length] = null,
                            u = void 0;
                            break;
                        case 116:
                            y = d[0],
                            y[u || y.length] = !0,
                            u = void 0;
                            break;
                        case 123:
                            y = d[0],
                            d.unshift(y[u || y.length] = {}),
                            u = void 0;
                            break;
                        case 125:
                            d.shift();
                            break
                        }
                    }
                    if (f) {
                        if (1 !== d.length)
                            throw new Error;
                        h = h[0]
                    } else if (d.length)
                        throw new Error;
                    if (o) {
                        h = function t(e, n) {
                            var i = e[n];
                            if (i && "object" === (0,
                            r.default)(i)) {
                                var s = null;
                                for (var h in i)
                                    if (a.call(i, h) && i !== e) {
                                        var u = t(i, h);
                                        void 0 !== u ? i[h] = u : (s || (s = []),
                                        s.push(h))
                                    }
                                if (s)
                                    for (var c = s.length; --c >= 0; )
                                        delete i[s[c]]
                            }
                            return o.call(e, n, i)
                        }({
                            "": h
                        }, "")
                    }
                    return h
                }
            }();
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            o.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e),
                    e
                }
                ,
                this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1))
                        e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var n = e.substr(1)
                          , i = n.length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", s = 0; s < i; s++)
                            r += "f";
                        var a = new p(r,16)
                          , o = a.xor(t).add(p.ONE);
                        e = o.toString(16).replace(/^-/, "")
                    }
                    return e
                }
                ,
                this.getPEMStringFromHex = function(t, e) {
                    var n = gt(t)
                      , i = n.replace(/(.{64})/g, "$1\r\n");
                    return i = i.replace(/\r\n$/, ""),
                    "-----BEGIN " + e + "-----\r\n" + i + "\r\n-----END " + e + "-----\r\n"
                }
                ,
                this.newObject = function(t) {
                    var e = o.asn1
                      , n = Object.keys(t);
                    if (1 != n.length)
                        throw "key of param shall be only one.";
                    var i = n[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + i + ":"))
                        throw "undefined key: " + i;
                    if ("bool" == i)
                        return new e.DERBoolean(t[i]);
                    if ("int" == i)
                        return new e.DERInteger(t[i]);
                    if ("bitstr" == i)
                        return new e.DERBitString(t[i]);
                    if ("octstr" == i)
                        return new e.DEROctetString(t[i]);
                    if ("null" == i)
                        return new e.DERNull(t[i]);
                    if ("oid" == i)
                        return new e.DERObjectIdentifier(t[i]);
                    if ("enum" == i)
                        return new e.DEREnumerated(t[i]);
                    if ("utf8str" == i)
                        return new e.DERUTF8String(t[i]);
                    if ("numstr" == i)
                        return new e.DERNumericString(t[i]);
                    if ("prnstr" == i)
                        return new e.DERPrintableString(t[i]);
                    if ("telstr" == i)
                        return new e.DERTeletexString(t[i]);
                    if ("ia5str" == i)
                        return new e.DERIA5String(t[i]);
                    if ("utctime" == i)
                        return new e.DERUTCTime(t[i]);
                    if ("gentime" == i)
                        return new e.DERGeneralizedTime(t[i]);
                    if ("seq" == i) {
                        for (var r = t[i], s = [], a = 0; a < r.length; a++) {
                            var h = e.ASN1Util.newObject(r[a]);
                            s.push(h)
                        }
                        return new e.DERSequence({
                            array: s
                        })
                    }
                    if ("set" == i) {
                        for (r = t[i],
                        s = [],
                        a = 0; a < r.length; a++) {
                            h = e.ASN1Util.newObject(r[a]);
                            s.push(h)
                        }
                        return new e.DERSet({
                            array: s
                        })
                    }
                    if ("tag" == i) {
                        var u = t[i];
                        if ("[object Array]" === Object.prototype.toString.call(u) && 3 == u.length) {
                            var c = e.ASN1Util.newObject(u[2]);
                            return new e.DERTaggedObject({
                                tag: u[0],
                                explicit: u[1],
                                obj: c
                            })
                        }
                        var l = {};
                        if (void 0 !== u.explicit && (l.explicit = u.explicit),
                        void 0 !== u.tag && (l.tag = u.tag),
                        void 0 === u.obj)
                            throw "obj shall be specified for 'tag'.";
                        return l.obj = e.ASN1Util.newObject(u.obj),
                        new e.DERTaggedObject(l)
                    }
                }
                ,
                this.jsonToASN1HEX = function(t) {
                    var e = this.newObject(t);
                    return e.getEncodedHex()
                }
            }
            ,
            o.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", n = parseInt(t.substr(0, 2), 16), i = Math.floor(n / 40), r = n % 40, s = (e = i + "." + r,
                ""), a = 2; a < t.length; a += 2) {
                    var o = parseInt(t.substr(a, 2), 16)
                      , h = ("00000000" + o.toString(2)).slice(-8);
                    if (s += h.substr(1, 7),
                    "0" == h.substr(0, 1)) {
                        var u = new p(s,2);
                        e = e + "." + u.toString(10),
                        s = ""
                    }
                }
                return e
            }
            ,
            o.asn1.ASN1Util.oidIntToHex = function(t) {
                var e = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e),
                    e
                }
                  , n = function(t) {
                    var n = ""
                      , i = new p(t,10)
                      , r = i.toString(2)
                      , s = 7 - r.length % 7;
                    7 == s && (s = 0);
                    for (var a = "", o = 0; o < s; o++)
                        a += "0";
                    r = a + r;
                    for (o = 0; o < r.length - 1; o += 7) {
                        var h = r.substr(o, 7);
                        o != r.length - 7 && (h = "1" + h),
                        n += e(parseInt(h, 2))
                    }
                    return n
                };
                if (!t.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + t;
                var i = ""
                  , r = t.split(".")
                  , s = 40 * parseInt(r[0]) + parseInt(r[1]);
                i += e(s),
                r.splice(0, 2);
                for (var a = 0; a < r.length; a++)
                    i += n(r[a]);
                return i
            }
            ,
            o.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if ("undefined" == typeof this.hV || null == this.hV)
                        throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1)
                        throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2
                      , e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e),
                    t < 128)
                        return e;
                    var n = e.length / 2;
                    if (n > 15)
                        throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    var i = 128 + n;
                    return i.toString(16) + e
                }
                ,
                this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                    this.hL = this.getLengthHexFromValue(),
                    this.hTLV = this.hT + this.hL + this.hV,
                    this.isModified = !1),
                    this.hTLV
                }
                ,
                this.getValueHex = function() {
                    return this.getEncodedHex(),
                    this.hV
                }
                ,
                this.getFreshValueHex = function() {
                    return ""
                }
            }
            ,
            o.asn1.DERAbstractString = function(t) {
                o.asn1.DERAbstractString.superclass.constructor.call(this);
                this.getString = function() {
                    return this.s
                }
                ,
                this.setString = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.s = t,
                    this.hV = st(this.s)
                }
                ,
                this.setStringHex = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
            }
            ,
            u.lang.extend(o.asn1.DERAbstractString, o.asn1.ASN1Object),
            o.asn1.DERAbstractTime = function(t) {
                o.asn1.DERAbstractTime.superclass.constructor.call(this);
                this.localDateToUTC = function(t) {
                    utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                    var e = new Date(utc);
                    return e
                }
                ,
                this.formatDate = function(t, e, n) {
                    var i = this.zeroPadding
                      , r = this.localDateToUTC(t)
                      , s = String(r.getFullYear());
                    "utc" == e && (s = s.substr(2, 2));
                    var a = i(String(r.getMonth() + 1), 2)
                      , o = i(String(r.getDate()), 2)
                      , h = i(String(r.getHours()), 2)
                      , u = i(String(r.getMinutes()), 2)
                      , c = i(String(r.getSeconds()), 2)
                      , l = s + a + o + h + u + c;
                    if (!0 === n) {
                        var f = r.getMilliseconds();
                        if (0 != f) {
                            var d = i(String(f), 3);
                            d = d.replace(/[0]+$/, ""),
                            l = l + "." + d
                        }
                    }
                    return l + "Z"
                }
                ,
                this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }
                ,
                this.getString = function() {
                    return this.s
                }
                ,
                this.setString = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.s = t,
                    this.hV = st(t)
                }
                ,
                this.setByDateValue = function(t, e, n, i, r, s) {
                    var a = new Date(Date.UTC(t, e - 1, n, i, r, s, 0));
                    this.setByDate(a)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
            }
            ,
            u.lang.extend(o.asn1.DERAbstractTime, o.asn1.ASN1Object),
            o.asn1.DERAbstractStructured = function(t) {
                o.asn1.DERAbstractString.superclass.constructor.call(this);
                this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array = t
                }
                ,
                this.appendASN1Object = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array.push(t)
                }
                ,
                this.asn1Array = new Array,
                "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
            }
            ,
            u.lang.extend(o.asn1.DERAbstractStructured, o.asn1.ASN1Object),
            o.asn1.DERBoolean = function() {
                o.asn1.DERBoolean.superclass.constructor.call(this),
                this.hT = "01",
                this.hTLV = "0101ff"
            }
            ,
            u.lang.extend(o.asn1.DERBoolean, o.asn1.ASN1Object),
            o.asn1.DERInteger = function(t) {
                o.asn1.DERInteger.superclass.constructor.call(this),
                this.hT = "02",
                this.setByBigInteger = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.hV = o.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }
                ,
                this.setByInteger = function(t) {
                    var e = new p(String(t),10);
                    this.setByBigInteger(e)
                }
                ,
                this.setValueHex = function(t) {
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
            }
            ,
            u.lang.extend(o.asn1.DERInteger, o.asn1.ASN1Object),
            o.asn1.DERBitString = function(t) {
                if (void 0 !== t && "undefined" !== typeof t.obj) {
                    var e = o.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex()
                }
                o.asn1.DERBitString.superclass.constructor.call(this),
                this.hT = "03",
                this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.hV = t
                }
                ,
                this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t)
                        throw "unused bits shall be from 0 to 7: u = " + t;
                    var n = "0" + t;
                    this.hTLV = null,
                    this.isModified = !0,
                    this.hV = n + e
                }
                ,
                this.setByBinaryString = function(t) {
                    t = t.replace(/0+$/, "");
                    var e = 8 - t.length % 8;
                    8 == e && (e = 0);
                    for (var n = 0; n <= e; n++)
                        t += "0";
                    var i = "";
                    for (n = 0; n < t.length - 1; n += 8) {
                        var r = t.substr(n, 8)
                          , s = parseInt(r, 2).toString(16);
                        1 == s.length && (s = "0" + s),
                        i += s
                    }
                    this.hTLV = null,
                    this.isModified = !0,
                    this.hV = "0" + e + i
                }
                ,
                this.setByBooleanArray = function(t) {
                    for (var e = "", n = 0; n < t.length; n++)
                        1 == t[n] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }
                ,
                this.newFalseArray = function(t) {
                    for (var e = new Array(t), n = 0; n < t; n++)
                        e[n] = !1;
                    return e
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
            }
            ,
            u.lang.extend(o.asn1.DERBitString, o.asn1.ASN1Object),
            o.asn1.DEROctetString = function(t) {
                if (void 0 !== t && "undefined" !== typeof t.obj) {
                    var e = o.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex()
                }
                o.asn1.DEROctetString.superclass.constructor.call(this, t),
                this.hT = "04"
            }
            ,
            u.lang.extend(o.asn1.DEROctetString, o.asn1.DERAbstractString),
            o.asn1.DERNull = function() {
                o.asn1.DERNull.superclass.constructor.call(this),
                this.hT = "05",
                this.hTLV = "0500"
            }
            ,
            u.lang.extend(o.asn1.DERNull, o.asn1.ASN1Object),
            o.asn1.DERObjectIdentifier = function(t) {
                var e = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e),
                    e
                }
                  , n = function(t) {
                    var n = ""
                      , i = new p(t,10)
                      , r = i.toString(2)
                      , s = 7 - r.length % 7;
                    7 == s && (s = 0);
                    for (var a = "", o = 0; o < s; o++)
                        a += "0";
                    r = a + r;
                    for (o = 0; o < r.length - 1; o += 7) {
                        var h = r.substr(o, 7);
                        o != r.length - 7 && (h = "1" + h),
                        n += e(parseInt(h, 2))
                    }
                    return n
                };
                o.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                this.hT = "06",
                this.setValueHex = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = t
                }
                ,
                this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                    var i = ""
                      , r = t.split(".")
                      , s = 40 * parseInt(r[0]) + parseInt(r[1]);
                    i += e(s),
                    r.splice(0, 2);
                    for (var a = 0; a < r.length; a++)
                        i += n(r[a]);
                    this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = i
                }
                ,
                this.setValueName = function(t) {
                    var e = o.asn1.x509.OID.name2oid(t);
                    if ("" === e)
                        throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                void 0 !== t && ("string" === typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }
            ,
            u.lang.extend(o.asn1.DERObjectIdentifier, o.asn1.ASN1Object),
            o.asn1.DEREnumerated = function(t) {
                o.asn1.DEREnumerated.superclass.constructor.call(this),
                this.hT = "0a",
                this.setByBigInteger = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.hV = o.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }
                ,
                this.setByInteger = function(t) {
                    var e = new p(String(t),10);
                    this.setByBigInteger(e)
                }
                ,
                this.setValueHex = function(t) {
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
            }
            ,
            u.lang.extend(o.asn1.DEREnumerated, o.asn1.ASN1Object),
            o.asn1.DERUTF8String = function(t) {
                o.asn1.DERUTF8String.superclass.constructor.call(this, t),
                this.hT = "0c"
            }
            ,
            u.lang.extend(o.asn1.DERUTF8String, o.asn1.DERAbstractString),
            o.asn1.DERNumericString = function(t) {
                o.asn1.DERNumericString.superclass.constructor.call(this, t),
                this.hT = "12"
            }
            ,
            u.lang.extend(o.asn1.DERNumericString, o.asn1.DERAbstractString),
            o.asn1.DERPrintableString = function(t) {
                o.asn1.DERPrintableString.superclass.constructor.call(this, t),
                this.hT = "13"
            }
            ,
            u.lang.extend(o.asn1.DERPrintableString, o.asn1.DERAbstractString),
            o.asn1.DERTeletexString = function(t) {
                o.asn1.DERTeletexString.superclass.constructor.call(this, t),
                this.hT = "14"
            }
            ,
            u.lang.extend(o.asn1.DERTeletexString, o.asn1.DERAbstractString),
            o.asn1.DERIA5String = function(t) {
                o.asn1.DERIA5String.superclass.constructor.call(this, t),
                this.hT = "16"
            }
            ,
            u.lang.extend(o.asn1.DERIA5String, o.asn1.DERAbstractString),
            o.asn1.DERUTCTime = function(t) {
                o.asn1.DERUTCTime.superclass.constructor.call(this, t),
                this.hT = "17",
                this.setByDate = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.date = t,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = st(this.s)
                }
                ,
                this.getFreshValueHex = function() {
                    return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = st(this.s)),
                    this.hV
                }
                ,
                void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }
            ,
            u.lang.extend(o.asn1.DERUTCTime, o.asn1.DERAbstractTime),
            o.asn1.DERGeneralizedTime = function(t) {
                o.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                this.hT = "18",
                this.withMillis = !1,
                this.setByDate = function(t) {
                    this.hTLV = null,
                    this.isModified = !0,
                    this.date = t,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = st(this.s)
                }
                ,
                this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = st(this.s)),
                    this.hV
                }
                ,
                void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date),
                !0 === t.millis && (this.withMillis = !0))
            }
            ,
            u.lang.extend(o.asn1.DERGeneralizedTime, o.asn1.DERAbstractTime),
            o.asn1.DERSequence = function(t) {
                o.asn1.DERSequence.superclass.constructor.call(this, t),
                this.hT = "30",
                this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t += n.getEncodedHex()
                    }
                    return this.hV = t,
                    this.hV
                }
            }
            ,
            u.lang.extend(o.asn1.DERSequence, o.asn1.DERAbstractStructured),
            o.asn1.DERSet = function(t) {
                o.asn1.DERSet.superclass.constructor.call(this, t),
                this.hT = "31",
                this.sortFlag = !0,
                this.getFreshValueHex = function() {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t.push(n.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(),
                    this.hV = t.join(""),
                    this.hV
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }
            ,
            u.lang.extend(o.asn1.DERSet, o.asn1.DERAbstractStructured),
            o.asn1.DERTaggedObject = function(t) {
                o.asn1.DERTaggedObject.superclass.constructor.call(this),
                this.hT = "a0",
                this.hV = "",
                this.isExplicit = !0,
                this.asn1Object = null,
                this.setASN1Object = function(t, e, n) {
                    this.hT = e,
                    this.isExplicit = t,
                    this.asn1Object = n,
                    this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                    this.hTLV = null,
                    this.isModified = !0) : (this.hV = null,
                    this.hTLV = n.getEncodedHex(),
                    this.hTLV = this.hTLV.replace(/^../, e),
                    this.isModified = !1)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
                "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
                "undefined" != typeof t.obj && (this.asn1Object = t.obj,
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }
            ,
            u.lang.extend(o.asn1.DERTaggedObject, o.asn1.ASN1Object);
            var et, nt, it = new function() {}
            ;
            function rt(t) {
                for (var e = "", n = 0; n < t.length; n++) {
                    var i = t[n].toString(16);
                    1 == i.length && (i = "0" + i),
                    e += i
                }
                return e
            }
            function st(t) {
                return rt(function(t) {
                    for (var e = new Array, n = 0; n < t.length; n++)
                        e[n] = t.charCodeAt(n);
                    return e
                }(t))
            }
            function at(t) {
                return t = t.replace(/\=/g, ""),
                t = t.replace(/\+/g, "-"),
                t = t.replace(/\//g, "_"),
                t
            }
            function ot(t) {
                return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="),
                t = t.replace(/-/g, "+"),
                t = t.replace(/_/g, "/"),
                t
            }
            function ht(t) {
                return t.length % 2 == 1 && (t = "0" + t),
                at(d(t))
            }
            function ut(t) {
                return g(ot(t))
            }
            function ct(t) {
                return pt(vt(t))
            }
            function lt(t) {
                return decodeURIComponent(yt(t))
            }
            function ft(t) {
                for (var e = "", n = 0; n < t.length - 1; n += 2)
                    e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                return e
            }
            function dt(t) {
                for (var e = "", n = 0; n < t.length; n++)
                    e += ("0" + t.charCodeAt(n).toString(16)).slice(-2);
                return e
            }
            function gt(t) {
                return d(t)
            }
            function pt(t) {
                return t.replace(/%/g, "")
            }
            function yt(t) {
                return t.replace(/(..)/g, "%$1")
            }
            function vt(t) {
                for (var e = encodeURIComponent(t), n = "", i = 0; i < e.length; i++)
                    "%" == e[i] ? (n += e.substr(i, 3),
                    i += 2) : n = n + "%" + st(e[i]);
                return n
            }
            it.getByteLengthOfL_AtObj = function(t, e) {
                if ("8" != t.substring(e + 2, e + 3))
                    return 1;
                var n = parseInt(t.substring(e + 3, e + 4));
                return 0 == n ? -1 : 0 < n && n < 10 ? n + 1 : -2
            }
            ,
            it.getHexOfL_AtObj = function(t, e) {
                var n = it.getByteLengthOfL_AtObj(t, e);
                return n < 1 ? "" : t.substring(e + 2, e + 2 + 2 * n)
            }
            ,
            it.getIntOfL_AtObj = function(t, e) {
                var n, i = it.getHexOfL_AtObj(t, e);
                return "" == i ? -1 : (n = parseInt(i.substring(0, 1)) < 8 ? new p(i,16) : new p(i.substring(2),16),
                n.intValue())
            }
            ,
            it.getStartPosOfV_AtObj = function(t, e) {
                var n = it.getByteLengthOfL_AtObj(t, e);
                return n < 0 ? n : e + 2 * (n + 1)
            }
            ,
            it.getHexOfV_AtObj = function(t, e) {
                var n = it.getStartPosOfV_AtObj(t, e)
                  , i = it.getIntOfL_AtObj(t, e);
                return t.substring(n, n + 2 * i)
            }
            ,
            it.getHexOfTLV_AtObj = function(t, e) {
                var n = t.substr(e, 2)
                  , i = it.getHexOfL_AtObj(t, e)
                  , r = it.getHexOfV_AtObj(t, e);
                return n + i + r
            }
            ,
            it.getPosOfNextSibling_AtObj = function(t, e) {
                var n = it.getStartPosOfV_AtObj(t, e)
                  , i = it.getIntOfL_AtObj(t, e);
                return n + 2 * i
            }
            ,
            it.getPosArrayOfChildren_AtObj = function(t, e) {
                var n = new Array
                  , i = it.getStartPosOfV_AtObj(t, e);
                "03" == t.substr(e, 2) ? n.push(i + 2) : n.push(i);
                var r = it.getIntOfL_AtObj(t, e)
                  , s = i
                  , a = 0;
                while (1) {
                    var o = it.getPosOfNextSibling_AtObj(t, s);
                    if (null == o || o - i >= 2 * r)
                        break;
                    if (a >= 200)
                        break;
                    n.push(o),
                    s = o,
                    a++
                }
                return n
            }
            ,
            it.getNthChildIndex_AtObj = function(t, e, n) {
                var i = it.getPosArrayOfChildren_AtObj(t, e);
                return i[n]
            }
            ,
            it.getDecendantIndexByNthList = function(t, e, n) {
                if (0 == n.length)
                    return e;
                var i = n.shift()
                  , r = it.getPosArrayOfChildren_AtObj(t, e);
                return it.getDecendantIndexByNthList(t, r[i], n)
            }
            ,
            it.getDecendantHexTLVByNthList = function(t, e, n) {
                var i = it.getDecendantIndexByNthList(t, e, n);
                return it.getHexOfTLV_AtObj(t, i)
            }
            ,
            it.getDecendantHexVByNthList = function(t, e, n) {
                var i = it.getDecendantIndexByNthList(t, e, n);
                return it.getHexOfV_AtObj(t, i)
            }
            ,
            it.getVbyList = function(t, e, n, i) {
                var r = it.getDecendantIndexByNthList(t, e, n);
                if (void 0 === r)
                    throw "can't find nthList object";
                if (void 0 !== i && t.substr(r, 2) != i)
                    throw "checking tag doesn't match: " + t.substr(r, 2) + "!=" + i;
                return it.getHexOfV_AtObj(t, r)
            }
            ,
            it.hextooidstr = function(t) {
                var e = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }
                  , n = []
                  , i = t.substr(0, 2)
                  , r = parseInt(i, 16);
                n[0] = new String(Math.floor(r / 40)),
                n[1] = new String(r % 40);
                for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++)
                    a.push(parseInt(s.substr(2 * o, 2), 16));
                var h = []
                  , u = "";
                for (o = 0; o < a.length; o++)
                    128 & a[o] ? u += e((127 & a[o]).toString(2), 7) : (u += e((127 & a[o]).toString(2), 7),
                    h.push(new String(parseInt(u, 2))),
                    u = "");
                var c = n.join(".");
                return h.length > 0 && (c = c + "." + h.join(".")),
                c
            }
            ,
            it.dump = function(t, e, n, i) {
                var r = t;
                t instanceof o.asn1.ASN1Object && (r = t.getEncodedHex());
                var s = function(t, e) {
                    if (t.length <= 2 * e)
                        return t;
                    var n = t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
                    return n
                };
                void 0 === e && (e = {
                    ommit_long_octet: 32
                }),
                void 0 === n && (n = 0),
                void 0 === i && (i = "");
                var a = e.ommit_long_octet;
                if ("01" == r.substr(n, 2)) {
                    var h = it.getHexOfV_AtObj(r, n);
                    return "00" == h ? i + "BOOLEAN FALSE\n" : i + "BOOLEAN TRUE\n"
                }
                if ("02" == r.substr(n, 2)) {
                    h = it.getHexOfV_AtObj(r, n);
                    return i + "INTEGER " + s(h, a) + "\n"
                }
                if ("03" == r.substr(n, 2)) {
                    h = it.getHexOfV_AtObj(r, n);
                    return i + "BITSTRING " + s(h, a) + "\n"
                }
                if ("04" == r.substr(n, 2)) {
                    h = it.getHexOfV_AtObj(r, n);
                    if (it.isASN1HEX(h)) {
                        var u = i + "OCTETSTRING, encapsulates\n";
                        return u += it.dump(h, e, 0, i + "  "),
                        u
                    }
                    return i + "OCTETSTRING " + s(h, a) + "\n"
                }
                if ("05" == r.substr(n, 2))
                    return i + "NULL\n";
                if ("06" == r.substr(n, 2)) {
                    var c = it.getHexOfV_AtObj(r, n)
                      , l = o.asn1.ASN1Util.oidHexToInt(c)
                      , f = o.asn1.x509.OID.oid2name(l)
                      , d = l.replace(/\./g, " ");
                    return "" != f ? i + "ObjectIdentifier " + f + " (" + d + ")\n" : i + "ObjectIdentifier (" + d + ")\n"
                }
                if ("0c" == r.substr(n, 2))
                    return i + "UTF8String '" + lt(it.getHexOfV_AtObj(r, n)) + "'\n";
                if ("13" == r.substr(n, 2))
                    return i + "PrintableString '" + lt(it.getHexOfV_AtObj(r, n)) + "'\n";
                if ("14" == r.substr(n, 2))
                    return i + "TeletexString '" + lt(it.getHexOfV_AtObj(r, n)) + "'\n";
                if ("16" == r.substr(n, 2))
                    return i + "IA5String '" + lt(it.getHexOfV_AtObj(r, n)) + "'\n";
                if ("17" == r.substr(n, 2))
                    return i + "UTCTime " + lt(it.getHexOfV_AtObj(r, n)) + "\n";
                if ("18" == r.substr(n, 2))
                    return i + "GeneralizedTime " + lt(it.getHexOfV_AtObj(r, n)) + "\n";
                if ("30" == r.substr(n, 2)) {
                    if ("3000" == r.substr(n, 4))
                        return i + "SEQUENCE {}\n";
                    u = i + "SEQUENCE\n";
                    var g = it.getPosArrayOfChildren_AtObj(r, n)
                      , p = e;
                    if ((2 == g.length || 3 == g.length) && "06" == r.substr(g[0], 2) && "04" == r.substr(g[g.length - 1], 2)) {
                        var y = it.getHexOfV_AtObj(r, g[0])
                          , v = (l = o.asn1.ASN1Util.oidHexToInt(y),
                        f = o.asn1.x509.OID.oid2name(l),
                        JSON.parse(JSON.stringify(e)));
                        v.x509ExtName = f,
                        p = v
                    }
                    for (var m = 0; m < g.length; m++)
                        u += it.dump(r, p, g[m], i + "  ");
                    return u
                }
                if ("31" == r.substr(n, 2)) {
                    for (u = i + "SET\n",
                    g = it.getPosArrayOfChildren_AtObj(r, n),
                    m = 0; m < g.length; m++)
                        u += it.dump(r, e, g[m], i + "  ");
                    return u
                }
                var S = parseInt(r.substr(n, 2), 16);
                if (0 != (128 & S)) {
                    var b = 31 & S;
                    if (0 != (32 & S)) {
                        for (u = i + "[" + b + "]\n",
                        g = it.getPosArrayOfChildren_AtObj(r, n),
                        m = 0; m < g.length; m++)
                            u += it.dump(r, e, g[m], i + "  ");
                        return u
                    }
                    h = it.getHexOfV_AtObj(r, n);
                    "68747470" == h.substr(0, 8) && (h = lt(h)),
                    "subjectAltName" === e.x509ExtName && 2 == b && (h = lt(h));
                    u = i + "[" + b + "] " + h + "\n";
                    return u
                }
                return i + "UNKNOWN(" + r.substr(n, 2) + ") " + it.getHexOfV_AtObj(r, n) + "\n"
            }
            ,
            it.isASN1HEX = function(t) {
                if (t.length % 2 == 1)
                    return !1;
                var e = it.getIntOfL_AtObj(t, 0)
                  , n = t.substr(0, 2)
                  , i = it.getHexOfL_AtObj(t, 0)
                  , r = t.length - n.length - i.length;
                return r == 2 * e
            }
            ,
            it.pemToHex = function(t, e) {
                if (-1 == t.indexOf("-----BEGIN "))
                    throw "can't find PEM header: " + e;
                void 0 !== e ? (t = t.replace("-----BEGIN " + e + "-----", ""),
                t = t.replace("-----END " + e + "-----", "")) : (t = t.replace(/-----BEGIN [^-]+-----/, ""),
                t = t.replace(/-----END [^-]+-----/, ""));
                var n = t.replace(/\s+/g, "")
                  , i = g(n);
                return i
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            "undefined" != typeof o.asn1.x509 && o.asn1.x509 || (o.asn1.x509 = {}),
            o.asn1.x509.Certificate = function(t) {
                o.asn1.x509.Certificate.superclass.constructor.call(this);
                this.setRsaPrvKeyByPEMandPass = function(t, e) {
                    var n = mt.getDecryptedKeyHex(t, e)
                      , i = new Y;
                    i.readPrivateKeyFromASN1HexString(n),
                    this.prvKey = i
                }
                ,
                this.sign = function() {
                    this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
                    var t = new o.crypto.Signature({
                        alg: this.asn1SignatureAlg.nameAlg
                    });
                    t.init(this.prvKey),
                    t.updateHex(this.asn1TBSCert.getEncodedHex()),
                    this.hexSig = t.sign(),
                    this.asn1Sig = new o.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var e = new o.asn1.DERSequence({
                        array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = e.getEncodedHex(),
                    this.isModified = !1
                }
                ,
                this.setSignatureHex = function(t) {
                    this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg,
                    this.hexSig = t,
                    this.asn1Sig = new o.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var e = new o.asn1.DERSequence({
                        array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = e.getEncodedHex(),
                    this.isModified = !1
                }
                ,
                this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV)
                        return this.hTLV;
                    throw "not signed yet"
                }
                ,
                this.getPEMString = function() {
                    var t = this.getEncodedHex()
                      , e = c.enc.Hex.parse(t)
                      , n = c.enc.Base64.stringify(e)
                      , i = n.replace(/(.{64})/g, "$1\r\n");
                    return "-----BEGIN CERTIFICATE-----\r\n" + i + "\r\n-----END CERTIFICATE-----\r\n"
                }
                ,
                void 0 !== t && (void 0 !== t.tbscertobj && (this.asn1TBSCert = t.tbscertobj),
                void 0 !== t.prvkeyobj ? this.prvKey = t.prvkeyobj : void 0 !== t.rsaprvkey ? this.prvKey = t.rsaprvkey : void 0 !== t.rsaprvpem && void 0 !== t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas))
            }
            ,
            u.lang.extend(o.asn1.x509.Certificate, o.asn1.ASN1Object),
            o.asn1.x509.TBSCertificate = function(t) {
                o.asn1.x509.TBSCertificate.superclass.constructor.call(this),
                this._initialize = function() {
                    this.asn1Array = new Array,
                    this.asn1Version = new o.asn1.DERTaggedObject({
                        obj: new o.asn1.DERInteger({
                            int: 2
                        })
                    }),
                    this.asn1SerialNumber = null,
                    this.asn1SignatureAlg = null,
                    this.asn1Issuer = null,
                    this.asn1NotBefore = null,
                    this.asn1NotAfter = null,
                    this.asn1Subject = null,
                    this.asn1SubjPKey = null,
                    this.extensionsArray = new Array
                }
                ,
                this.setSerialNumberByParam = function(t) {
                    this.asn1SerialNumber = new o.asn1.DERInteger(t)
                }
                ,
                this.setSignatureAlgByParam = function(t) {
                    this.asn1SignatureAlg = new o.asn1.x509.AlgorithmIdentifier(t)
                }
                ,
                this.setIssuerByParam = function(t) {
                    this.asn1Issuer = new o.asn1.x509.X500Name(t)
                }
                ,
                this.setNotBeforeByParam = function(t) {
                    this.asn1NotBefore = new o.asn1.x509.Time(t)
                }
                ,
                this.setNotAfterByParam = function(t) {
                    this.asn1NotAfter = new o.asn1.x509.Time(t)
                }
                ,
                this.setSubjectByParam = function(t) {
                    this.asn1Subject = new o.asn1.x509.X500Name(t)
                }
                ,
                this.setSubjectPublicKeyByParam = function(t) {
                    this.asn1SubjPKey = new o.asn1.x509.SubjectPublicKeyInfo(t)
                }
                ,
                this.setSubjectPublicKeyByGetKey = function(t) {
                    var e = St.getKey(t);
                    this.asn1SubjPKey = new o.asn1.x509.SubjectPublicKeyInfo(e)
                }
                ,
                this.appendExtension = function(t) {
                    this.extensionsArray.push(t)
                }
                ,
                this.appendExtensionByName = function(t, e) {
                    o.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray)
                }
                ,
                this.getEncodedHex = function() {
                    if (null == this.asn1NotBefore || null == this.asn1NotAfter)
                        throw "notBefore and/or notAfter not set";
                    var t = new o.asn1.DERSequence({
                        array: [this.asn1NotBefore, this.asn1NotAfter]
                    });
                    if (this.asn1Array = new Array,
                    this.asn1Array.push(this.asn1Version),
                    this.asn1Array.push(this.asn1SerialNumber),
                    this.asn1Array.push(this.asn1SignatureAlg),
                    this.asn1Array.push(this.asn1Issuer),
                    this.asn1Array.push(t),
                    this.asn1Array.push(this.asn1Subject),
                    this.asn1Array.push(this.asn1SubjPKey),
                    this.extensionsArray.length > 0) {
                        var e = new o.asn1.DERSequence({
                            array: this.extensionsArray
                        })
                          , n = new o.asn1.DERTaggedObject({
                            explicit: !0,
                            tag: "a3",
                            obj: e
                        });
                        this.asn1Array.push(n)
                    }
                    var i = new o.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = i.getEncodedHex(),
                    this.isModified = !1,
                    this.hTLV
                }
                ,
                this._initialize()
            }
            ,
            u.lang.extend(o.asn1.x509.TBSCertificate, o.asn1.ASN1Object),
            o.asn1.x509.Extension = function(t) {
                o.asn1.x509.Extension.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERObjectIdentifier({
                        oid: this.oid
                    })
                      , e = new o.asn1.DEROctetString({
                        hex: this.getExtnValueHex()
                    })
                      , n = new Array;
                    n.push(t),
                    this.critical && n.push(new o.asn1.DERBoolean),
                    n.push(e);
                    var i = new o.asn1.DERSequence({
                        array: n
                    });
                    return i.getEncodedHex()
                }
                ,
                this.critical = !1,
                "undefined" != typeof t && "undefined" != typeof t.critical && (this.critical = t.critical)
            }
            ,
            u.lang.extend(o.asn1.x509.Extension, o.asn1.ASN1Object),
            o.asn1.x509.Extension.appendByNameToArray = function(t, e, n) {
                if ("basicconstraints" == t.toLowerCase()) {
                    var i = new o.asn1.x509.BasicConstraints(e);
                    n.push(i)
                } else if ("keyusage" == t.toLowerCase()) {
                    i = new o.asn1.x509.KeyUsage(e);
                    n.push(i)
                } else if ("crldistributionpoints" == t.toLowerCase()) {
                    i = new o.asn1.x509.CRLDistributionPoints(e);
                    n.push(i)
                } else if ("extkeyusage" == t.toLowerCase()) {
                    i = new o.asn1.x509.ExtKeyUsage(e);
                    n.push(i)
                } else if ("authoritykeyidentifier" == t.toLowerCase()) {
                    i = new o.asn1.x509.AuthorityKeyIdentifier(e);
                    n.push(i)
                } else if ("authorityinfoaccess" == t.toLowerCase()) {
                    i = new o.asn1.x509.AuthorityInfoAccess(e);
                    n.push(i)
                } else if ("subjectaltname" == t.toLowerCase()) {
                    i = new o.asn1.x509.SubjectAltName(e);
                    n.push(i)
                } else {
                    if ("issueraltname" != t.toLowerCase())
                        throw "unsupported extension name: " + t;
                    i = new o.asn1.x509.IssuerAltName(e);
                    n.push(i)
                }
            }
            ,
            o.asn1.x509.KeyUsage = function(t) {
                o.asn1.x509.KeyUsage.superclass.constructor.call(this, t),
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "2.5.29.15",
                "undefined" != typeof t && "undefined" != typeof t.bin && (this.asn1ExtnValue = new o.asn1.DERBitString(t))
            }
            ,
            u.lang.extend(o.asn1.x509.KeyUsage, o.asn1.x509.Extension),
            o.asn1.x509.BasicConstraints = function(t) {
                o.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
                this.getExtnValueHex = function() {
                    var t = new Array;
                    this.cA && t.push(new o.asn1.DERBoolean),
                    this.pathLen > -1 && t.push(new o.asn1.DERInteger({
                        int: this.pathLen
                    }));
                    var e = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.asn1ExtnValue = e,
                    this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "2.5.29.19",
                this.cA = !1,
                this.pathLen = -1,
                "undefined" != typeof t && ("undefined" != typeof t.cA && (this.cA = t.cA),
                "undefined" != typeof t.pathLen && (this.pathLen = t.pathLen))
            }
            ,
            u.lang.extend(o.asn1.x509.BasicConstraints, o.asn1.x509.Extension),
            o.asn1.x509.CRLDistributionPoints = function(t) {
                o.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t),
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.setByDPArray = function(t) {
                    this.asn1ExtnValue = new o.asn1.DERSequence({
                        array: t
                    })
                }
                ,
                this.setByOneURI = function(t) {
                    var e = new o.asn1.x509.GeneralNames([{
                        uri: t
                    }])
                      , n = new o.asn1.x509.DistributionPointName(e)
                      , i = new o.asn1.x509.DistributionPoint({
                        dpobj: n
                    });
                    this.setByDPArray([i])
                }
                ,
                this.oid = "2.5.29.31",
                "undefined" != typeof t && ("undefined" != typeof t.array ? this.setByDPArray(t.array) : "undefined" != typeof t.uri && this.setByOneURI(t.uri))
            }
            ,
            u.lang.extend(o.asn1.x509.CRLDistributionPoints, o.asn1.x509.Extension),
            o.asn1.x509.ExtKeyUsage = function(t) {
                o.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t),
                this.setPurposeArray = function(t) {
                    this.asn1ExtnValue = new o.asn1.DERSequence;
                    for (var e = 0; e < t.length; e++) {
                        var n = new o.asn1.DERObjectIdentifier(t[e]);
                        this.asn1ExtnValue.appendASN1Object(n)
                    }
                }
                ,
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "2.5.29.37",
                "undefined" != typeof t && "undefined" != typeof t.array && this.setPurposeArray(t.array)
            }
            ,
            u.lang.extend(o.asn1.x509.ExtKeyUsage, o.asn1.x509.Extension),
            o.asn1.x509.AuthorityKeyIdentifier = function(t) {
                o.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t),
                this.asn1KID = null,
                this.asn1CertIssuer = null,
                this.asn1CertSN = null,
                this.getExtnValueHex = function() {
                    var t = new Array;
                    this.asn1KID && t.push(new o.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "80",
                        obj: this.asn1KID
                    })),
                    this.asn1CertIssuer && t.push(new o.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "a1",
                        obj: this.asn1CertIssuer
                    })),
                    this.asn1CertSN && t.push(new o.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "82",
                        obj: this.asn1CertSN
                    }));
                    var e = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.asn1ExtnValue = e,
                    this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.setKIDByParam = function(t) {
                    this.asn1KID = new o.asn1.DEROctetString(t)
                }
                ,
                this.setCertIssuerByParam = function(t) {
                    this.asn1CertIssuer = new o.asn1.x509.X500Name(t)
                }
                ,
                this.setCertSNByParam = function(t) {
                    this.asn1CertSN = new o.asn1.DERInteger(t)
                }
                ,
                this.oid = "2.5.29.35",
                "undefined" != typeof t && ("undefined" != typeof t.kid && this.setKIDByParam(t.kid),
                "undefined" != typeof t.issuer && this.setCertIssuerByParam(t.issuer),
                "undefined" != typeof t.sn && this.setCertSNByParam(t.sn))
            }
            ,
            u.lang.extend(o.asn1.x509.AuthorityKeyIdentifier, o.asn1.x509.Extension),
            o.asn1.x509.AuthorityInfoAccess = function(t) {
                o.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t),
                this.setAccessDescriptionArray = function(t) {
                    for (var e = new Array, n = 0; n < t.length; n++) {
                        var i = new o.asn1.DERObjectIdentifier(t[n].accessMethod)
                          , r = new o.asn1.x509.GeneralName(t[n].accessLocation)
                          , s = new o.asn1.DERSequence({
                            array: [i, r]
                        });
                        e.push(s)
                    }
                    this.asn1ExtnValue = new o.asn1.DERSequence({
                        array: e
                    })
                }
                ,
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "1.3.6.1.5.5.7.1.1",
                "undefined" != typeof t && "undefined" != typeof t.array && this.setAccessDescriptionArray(t.array)
            }
            ,
            u.lang.extend(o.asn1.x509.AuthorityInfoAccess, o.asn1.x509.Extension),
            o.asn1.x509.SubjectAltName = function(t) {
                o.asn1.x509.SubjectAltName.superclass.constructor.call(this, t),
                this.setNameArray = function(t) {
                    this.asn1ExtnValue = new o.asn1.x509.GeneralNames(t)
                }
                ,
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "2.5.29.17",
                void 0 !== t && void 0 !== t.array && this.setNameArray(t.array)
            }
            ,
            u.lang.extend(o.asn1.x509.SubjectAltName, o.asn1.x509.Extension),
            o.asn1.x509.IssuerAltName = function(t) {
                o.asn1.x509.IssuerAltName.superclass.constructor.call(this, t),
                this.setNameArray = function(t) {
                    this.asn1ExtnValue = new o.asn1.x509.GeneralNames(t)
                }
                ,
                this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }
                ,
                this.oid = "2.5.29.18",
                void 0 !== t && void 0 !== t.array && this.setNameArray(t.array)
            }
            ,
            u.lang.extend(o.asn1.x509.IssuerAltName, o.asn1.x509.Extension),
            o.asn1.x509.CRL = function(t) {
                o.asn1.x509.CRL.superclass.constructor.call(this);
                this.setRsaPrvKeyByPEMandPass = function(t, e) {
                    var n = mt.getDecryptedKeyHex(t, e)
                      , i = new Y;
                    i.readPrivateKeyFromASN1HexString(n),
                    this.rsaPrvKey = i
                }
                ,
                this.sign = function() {
                    this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg,
                    sig = new o.crypto.Signature({
                        alg: "SHA1withRSA",
                        prov: "cryptojs/jsrsa"
                    }),
                    sig.initSign(this.rsaPrvKey),
                    sig.updateHex(this.asn1TBSCertList.getEncodedHex()),
                    this.hexSig = sig.sign(),
                    this.asn1Sig = new o.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var t = new o.asn1.DERSequence({
                        array: [this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = t.getEncodedHex(),
                    this.isModified = !1
                }
                ,
                this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV)
                        return this.hTLV;
                    throw "not signed yet"
                }
                ,
                this.getPEMString = function() {
                    var t = this.getEncodedHex()
                      , e = c.enc.Hex.parse(t)
                      , n = c.enc.Base64.stringify(e)
                      , i = n.replace(/(.{64})/g, "$1\r\n");
                    return "-----BEGIN X509 CRL-----\r\n" + i + "\r\n-----END X509 CRL-----\r\n"
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof t.tbsobj && (this.asn1TBSCertList = t.tbsobj),
                "undefined" != typeof t.rsaprvkey && (this.rsaPrvKey = t.rsaprvkey),
                "undefined" != typeof t.rsaprvpem && "undefined" != typeof t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas))
            }
            ,
            u.lang.extend(o.asn1.x509.CRL, o.asn1.ASN1Object),
            o.asn1.x509.TBSCertList = function(t) {
                o.asn1.x509.TBSCertList.superclass.constructor.call(this);
                this.setSignatureAlgByParam = function(t) {
                    this.asn1SignatureAlg = new o.asn1.x509.AlgorithmIdentifier(t)
                }
                ,
                this.setIssuerByParam = function(t) {
                    this.asn1Issuer = new o.asn1.x509.X500Name(t)
                }
                ,
                this.setThisUpdateByParam = function(t) {
                    this.asn1ThisUpdate = new o.asn1.x509.Time(t)
                }
                ,
                this.setNextUpdateByParam = function(t) {
                    this.asn1NextUpdate = new o.asn1.x509.Time(t)
                }
                ,
                this.addRevokedCert = function(t, e) {
                    var n = {};
                    void 0 != t && null != t && (n.sn = t),
                    void 0 != e && null != e && (n.time = e);
                    var i = new o.asn1.x509.CRLEntry(n);
                    this.aRevokedCert.push(i)
                }
                ,
                this.getEncodedHex = function() {
                    if (this.asn1Array = new Array,
                    null != this.asn1Version && this.asn1Array.push(this.asn1Version),
                    this.asn1Array.push(this.asn1SignatureAlg),
                    this.asn1Array.push(this.asn1Issuer),
                    this.asn1Array.push(this.asn1ThisUpdate),
                    null != this.asn1NextUpdate && this.asn1Array.push(this.asn1NextUpdate),
                    this.aRevokedCert.length > 0) {
                        var t = new o.asn1.DERSequence({
                            array: this.aRevokedCert
                        });
                        this.asn1Array.push(t)
                    }
                    var e = new o.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = e.getEncodedHex(),
                    this.isModified = !1,
                    this.hTLV
                }
                ,
                this._initialize = function() {
                    this.asn1Version = null,
                    this.asn1SignatureAlg = null,
                    this.asn1Issuer = null,
                    this.asn1ThisUpdate = null,
                    this.asn1NextUpdate = null,
                    this.aRevokedCert = new Array
                }
                ,
                this._initialize()
            }
            ,
            u.lang.extend(o.asn1.x509.TBSCertList, o.asn1.ASN1Object),
            o.asn1.x509.CRLEntry = function(t) {
                o.asn1.x509.CRLEntry.superclass.constructor.call(this);
                this.setCertSerial = function(t) {
                    this.sn = new o.asn1.DERInteger(t)
                }
                ,
                this.setRevocationDate = function(t) {
                    this.time = new o.asn1.x509.Time(t)
                }
                ,
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSequence({
                        array: [this.sn, this.time]
                    });
                    return this.TLV = t.getEncodedHex(),
                    this.TLV
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof t.time && this.setRevocationDate(t.time),
                "undefined" != typeof t.sn && this.setCertSerial(t.sn))
            }
            ,
            u.lang.extend(o.asn1.x509.CRLEntry, o.asn1.ASN1Object),
            o.asn1.x509.X500Name = function(t) {
                if (o.asn1.x509.X500Name.superclass.constructor.call(this),
                this.asn1Array = new Array,
                this.setByString = function(t) {
                    var e = t.split("/");
                    e.shift();
                    for (var n = 0; n < e.length; n++)
                        this.asn1Array.push(new o.asn1.x509.RDN({
                            str: e[n]
                        }))
                }
                ,
                this.setByLdapString = function(t) {
                    var e = o.asn1.x509.X500Name.ldapToOneline(t);
                    this.setByString(e)
                }
                ,
                this.setByObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) {
                            var n = new o.asn1.x509.RDN({
                                str: e + "=" + t[e]
                            });
                            this.asn1Array ? this.asn1Array.push(n) : this.asn1Array = [n]
                        }
                }
                ,
                this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV)
                        return this.hTLV;
                    var t = new o.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                void 0 !== t) {
                    if (void 0 !== t.str ? this.setByString(t.str) : void 0 !== t.ldapstr ? this.setByLdapString(t.ldapstr) : "object" === (0,
                    r.default)(t) && this.setByObject(t),
                    void 0 !== t.certissuer) {
                        var e = new jt;
                        e.hex = it.pemToHex(t.certissuer),
                        this.hTLV = e.getIssuerHex()
                    }
                    if (void 0 !== t.certsubject) {
                        e = new jt;
                        e.hex = it.pemToHex(t.certsubject),
                        this.hTLV = e.getSubjectHex()
                    }
                }
            }
            ,
            u.lang.extend(o.asn1.x509.X500Name, o.asn1.ASN1Object),
            o.asn1.x509.X500Name.onelineToLDAP = function(t) {
                if ("/" !== t.substr(0, 1))
                    throw "malformed input";
                t = t.substr(1);
                var e = t.split("/");
                return e.reverse(),
                e = e.map((function(t) {
                    return t.replace(/,/, "\\,")
                }
                )),
                e.join(",")
            }
            ,
            o.asn1.x509.X500Name.ldapToOneline = function(t) {
                for (var e = t.split(","), n = !1, i = [], r = 0; e.length > 0; r++) {
                    var s = e.shift();
                    if (!0 === n) {
                        var a = i.pop()
                          , o = (a + "," + s).replace(/\\,/g, ",");
                        i.push(o),
                        n = !1
                    } else
                        i.push(s);
                    "\\" === s.substr(-1, 1) && (n = !0)
                }
                return i = i.map((function(t) {
                    return t.replace("/", "\\/")
                }
                )),
                i.reverse(),
                "/" + i.join("/")
            }
            ,
            o.asn1.x509.RDN = function(t) {
                o.asn1.x509.RDN.superclass.constructor.call(this),
                this.asn1Array = new Array,
                this.addByString = function(t) {
                    this.asn1Array.push(new o.asn1.x509.AttributeTypeAndValue({
                        str: t
                    }))
                }
                ,
                this.addByMultiValuedString = function(t) {
                    for (var e = o.asn1.x509.RDN.parseString(t), n = 0; n < e.length; n++)
                        this.addByString(e[n])
                }
                ,
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSet({
                        array: this.asn1Array
                    });
                    return this.TLV = t.getEncodedHex(),
                    this.TLV
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.str && this.addByMultiValuedString(t.str)
            }
            ,
            u.lang.extend(o.asn1.x509.RDN, o.asn1.ASN1Object),
            o.asn1.x509.RDN.parseString = function(t) {
                for (var e = t.split(/\+/), n = !1, i = [], r = 0; e.length > 0; r++) {
                    var s = e.shift();
                    if (!0 === n) {
                        var a = i.pop()
                          , o = (a + "+" + s).replace(/\\\+/g, "+");
                        i.push(o),
                        n = !1
                    } else
                        i.push(s);
                    "\\" === s.substr(-1, 1) && (n = !0)
                }
                var h = !1
                  , u = [];
                for (r = 0; i.length > 0; r++) {
                    s = i.shift();
                    if (!0 === h) {
                        var c = u.pop();
                        if (s.match(/"$/)) {
                            o = (c + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                            u.push(o),
                            h = !1
                        } else
                            u.push(c + "+" + s)
                    } else
                        u.push(s);
                    s.match(/^[^=]+="/) && (h = !0)
                }
                return u
            }
            ,
            o.asn1.x509.AttributeTypeAndValue = function(t) {
                o.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
                this.setByString = function(t) {
                    var e = t.match(/^([^=]+)=(.+)$/);
                    if (!e)
                        throw "malformed attrTypeAndValueStr: " + t;
                    this.setByAttrTypeAndValueStr(e[1], e[2])
                }
                ,
                this.setByAttrTypeAndValueStr = function(t, e) {
                    this.typeObj = o.asn1.x509.OID.atype2obj(t);
                    var n = "utf8";
                    "C" == t && (n = "prn"),
                    this.valueObj = this.getValueObj(n, e)
                }
                ,
                this.getValueObj = function(t, e) {
                    if ("utf8" == t)
                        return new o.asn1.DERUTF8String({
                            str: e
                        });
                    if ("prn" == t)
                        return new o.asn1.DERPrintableString({
                            str: e
                        });
                    if ("tel" == t)
                        return new o.asn1.DERTeletexString({
                            str: e
                        });
                    if ("ia5" == t)
                        return new o.asn1.DERIA5String({
                            str: e
                        });
                    throw "unsupported directory string type: type=" + t + " value=" + e
                }
                ,
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSequence({
                        array: [this.typeObj, this.valueObj]
                    });
                    return this.TLV = t.getEncodedHex(),
                    this.TLV
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.str && this.setByString(t.str)
            }
            ,
            u.lang.extend(o.asn1.x509.AttributeTypeAndValue, o.asn1.ASN1Object),
            o.asn1.x509.SubjectPublicKeyInfo = function(t) {
                o.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
                this.setRSAKey = function(t) {
                    if (!Y.prototype.isPrototypeOf(t))
                        throw "argument is not RSAKey instance";
                    this.rsaKey = t;
                    var e = new o.asn1.DERInteger({
                        bigint: t.n
                    })
                      , n = new o.asn1.DERInteger({
                        int: t.e
                    })
                      , i = new o.asn1.DERSequence({
                        array: [e, n]
                    })
                      , r = i.getEncodedHex();
                    this.asn1AlgId = new o.asn1.x509.AlgorithmIdentifier({
                        name: "rsaEncryption"
                    }),
                    this.asn1SubjPKey = new o.asn1.DERBitString({
                        hex: "00" + r
                    })
                }
                ,
                this.setRSAPEM = function(t) {
                    if (!t.match(/-----BEGIN PUBLIC KEY-----/))
                        throw "key not supported";
                    var e = t;
                    e = e.replace(/^-----[^-]+-----/, ""),
                    e = e.replace(/-----[^-]+-----\s*$/, "");
                    var n = e.replace(/\s+/g, "")
                      , i = c.enc.Base64.parse(n)
                      , r = c.enc.Hex.stringify(i)
                      , s = Y.getHexValueArrayOfChildrenFromHex(r)
                      , a = s[1]
                      , o = a.substr(2)
                      , h = Y.getHexValueArrayOfChildrenFromHex(o)
                      , u = new Y;
                    u.setPublic(h[0], h[1]),
                    this.setRSAKey(u)
                }
                ,
                this.getASN1Object = function() {
                    if (null == this.asn1AlgId || null == this.asn1SubjPKey)
                        throw "algId and/or subjPubKey not set";
                    var t = new o.asn1.DERSequence({
                        array: [this.asn1AlgId, this.asn1SubjPKey]
                    });
                    return t
                }
                ,
                this.getEncodedHex = function() {
                    var t = this.getASN1Object();
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                this._setRSAKey = function(t) {
                    var e = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: {
                                bigint: t.n
                            }
                        }, {
                            int: {
                                int: t.e
                            }
                        }]
                    })
                      , n = e.getEncodedHex();
                    this.asn1AlgId = new o.asn1.x509.AlgorithmIdentifier({
                        name: "rsaEncryption"
                    }),
                    this.asn1SubjPKey = new o.asn1.DERBitString({
                        hex: "00" + n
                    })
                }
                ,
                this._setEC = function(t) {
                    var e = new o.asn1.DERObjectIdentifier({
                        name: t.curveName
                    });
                    this.asn1AlgId = new o.asn1.x509.AlgorithmIdentifier({
                        name: "ecPublicKey",
                        asn1params: e
                    }),
                    this.asn1SubjPKey = new o.asn1.DERBitString({
                        hex: "00" + t.pubKeyHex
                    })
                }
                ,
                this._setDSA = function(t) {
                    var e = new o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: {
                                bigint: t.p
                            }
                        }, {
                            int: {
                                bigint: t.q
                            }
                        }, {
                            int: {
                                bigint: t.g
                            }
                        }]
                    });
                    this.asn1AlgId = new o.asn1.x509.AlgorithmIdentifier({
                        name: "dsa",
                        asn1params: e
                    });
                    var n = new o.asn1.DERInteger({
                        bigint: t.y
                    });
                    this.asn1SubjPKey = new o.asn1.DERBitString({
                        hex: "00" + n.getEncodedHex()
                    })
                }
                ,
                "undefined" != typeof t && ("undefined" != typeof Y && t instanceof Y ? this._setRSAKey(t) : "undefined" != typeof o.crypto.ECDSA && t instanceof o.crypto.ECDSA ? this._setEC(t) : "undefined" != typeof o.crypto.DSA && t instanceof o.crypto.DSA ? this._setDSA(t) : "undefined" != typeof t.rsakey ? this.setRSAKey(t.rsakey) : "undefined" != typeof t.rsapem && this.setRSAPEM(t.rsapem))
            }
            ,
            u.lang.extend(o.asn1.x509.SubjectPublicKeyInfo, o.asn1.ASN1Object),
            o.asn1.x509.Time = function(t) {
                o.asn1.x509.Time.superclass.constructor.call(this);
                this.setTimeParams = function(t) {
                    this.timeParams = t
                }
                ,
                this.getEncodedHex = function() {
                    var t = null;
                    return t = null != this.timeParams ? "utc" == this.type ? new o.asn1.DERUTCTime(this.timeParams) : new o.asn1.DERGeneralizedTime(this.timeParams) : "utc" == this.type ? new o.asn1.DERUTCTime : new o.asn1.DERGeneralizedTime,
                    this.TLV = t.getEncodedHex(),
                    this.TLV
                }
                ,
                this.type = "utc",
                "undefined" != typeof t && ("undefined" != typeof t.type ? this.type = t.type : "undefined" != typeof t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"),
                t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")),
                this.timeParams = t)
            }
            ,
            u.lang.extend(o.asn1.x509.Time, o.asn1.ASN1Object),
            o.asn1.x509.AlgorithmIdentifier = function(t) {
                if (o.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),
                this.nameAlg = null,
                this.asn1Alg = null,
                this.asn1Params = null,
                this.paramEmpty = !1,
                this.getEncodedHex = function() {
                    if (null === this.nameAlg && null === this.asn1Alg)
                        throw "algorithm not specified";
                    null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = o.asn1.x509.OID.name2obj(this.nameAlg));
                    var t = [this.asn1Alg];
                    null !== this.asn1Params && t.push(this.asn1Params);
                    var e = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.hTLV = e.getEncodedHex(),
                    this.hTLV
                }
                ,
                void 0 !== t && (void 0 !== t.name && (this.nameAlg = t.name),
                void 0 !== t.asn1params && (this.asn1Params = t.asn1params),
                void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)),
                null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
                    var e = this.nameAlg.toLowerCase();
                    "withdsa" !== e.substr(-7, 7) && "withecdsa" !== e.substr(-9, 9) && (this.asn1Params = new o.asn1.DERNull)
                }
            }
            ,
            u.lang.extend(o.asn1.x509.AlgorithmIdentifier, o.asn1.ASN1Object),
            o.asn1.x509.GeneralName = function(t) {
                o.asn1.x509.GeneralName.superclass.constructor.call(this);
                var e = {
                    rfc822: "81",
                    dns: "82",
                    dn: "a4",
                    uri: "86"
                };
                this.explicit = !1,
                this.setByParam = function(t) {
                    var n = null;
                    if (void 0 !== t) {
                        if (void 0 !== t.rfc822 && (this.type = "rfc822",
                        n = new o.asn1.DERIA5String({
                            str: t[this.type]
                        })),
                        void 0 !== t.dns && (this.type = "dns",
                        n = new o.asn1.DERIA5String({
                            str: t[this.type]
                        })),
                        void 0 !== t.uri && (this.type = "uri",
                        n = new o.asn1.DERIA5String({
                            str: t[this.type]
                        })),
                        void 0 !== t.dn && (this.type = "dn",
                        n = new o.asn1.x509.X500Name({
                            str: t.dn
                        })),
                        void 0 !== t.ldapdn && (this.type = "dn",
                        n = new o.asn1.x509.X500Name({
                            ldapstr: t.ldapdn
                        })),
                        void 0 !== t.certissuer) {
                            this.type = "dn",
                            this.explicit = !0;
                            var i = t.certissuer
                              , r = null;
                            if (i.match(/^[0-9A-Fa-f]+$/),
                            -1 != i.indexOf("-----BEGIN ") && (r = it.pemToHex(i)),
                            null == r)
                                throw "certissuer param not cert";
                            var s = new jt;
                            s.hex = r;
                            var a = s.getIssuerHex();
                            n = new o.asn1.ASN1Object,
                            n.hTLV = a
                        }
                        if (void 0 !== t.certsubj) {
                            this.type = "dn",
                            this.explicit = !0;
                            i = t.certsubj,
                            r = null;
                            if (i.match(/^[0-9A-Fa-f]+$/),
                            -1 != i.indexOf("-----BEGIN ") && (r = it.pemToHex(i)),
                            null == r)
                                throw "certsubj param not cert";
                            s = new jt;
                            s.hex = r;
                            a = s.getSubjectHex();
                            n = new o.asn1.ASN1Object,
                            n.hTLV = a
                        }
                        if (null == this.type)
                            throw "unsupported type in params=" + t;
                        this.asn1Obj = new o.asn1.DERTaggedObject({
                            explicit: this.explicit,
                            tag: e[this.type],
                            obj: n
                        })
                    }
                }
                ,
                this.getEncodedHex = function() {
                    return this.asn1Obj.getEncodedHex()
                }
                ,
                void 0 !== t && this.setByParam(t)
            }
            ,
            u.lang.extend(o.asn1.x509.GeneralName, o.asn1.ASN1Object),
            o.asn1.x509.GeneralNames = function(t) {
                o.asn1.x509.GeneralNames.superclass.constructor.call(this);
                this.setByParamArray = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = new o.asn1.x509.GeneralName(t[e]);
                        this.asn1Array.push(n)
                    }
                }
                ,
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return t.getEncodedHex()
                }
                ,
                this.asn1Array = new Array,
                "undefined" != typeof t && this.setByParamArray(t)
            }
            ,
            u.lang.extend(o.asn1.x509.GeneralNames, o.asn1.ASN1Object),
            o.asn1.x509.DistributionPointName = function(t) {
                o.asn1.x509.DistributionPointName.superclass.constructor.call(this);
                if (this.getEncodedHex = function() {
                    if ("full" != this.type)
                        throw "currently type shall be 'full': " + this.type;
                    return this.asn1Obj = new o.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: this.tag,
                        obj: this.asn1V
                    }),
                    this.hTLV = this.asn1Obj.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t) {
                    if (!o.asn1.x509.GeneralNames.prototype.isPrototypeOf(t))
                        throw "This class supports GeneralNames only as argument";
                    this.type = "full",
                    this.tag = "a0",
                    this.asn1V = t
                }
            }
            ,
            u.lang.extend(o.asn1.x509.DistributionPointName, o.asn1.ASN1Object),
            o.asn1.x509.DistributionPoint = function(t) {
                o.asn1.x509.DistributionPoint.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSequence;
                    if (null != this.asn1DP) {
                        var e = new o.asn1.DERTaggedObject({
                            explicit: !0,
                            tag: "a0",
                            obj: this.asn1DP
                        });
                        t.appendASN1Object(e)
                    }
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.dpobj && (this.asn1DP = t.dpobj)
            }
            ,
            u.lang.extend(o.asn1.x509.DistributionPoint, o.asn1.ASN1Object),
            o.asn1.x509.OID = new function(t) {
                this.atype2oidList = {
                    CN: "2.5.4.3",
                    L: "2.5.4.7",
                    ST: "2.5.4.8",
                    O: "2.5.4.10",
                    OU: "2.5.4.11",
                    C: "2.5.4.6",
                    STREET: "2.5.4.9",
                    DC: "0.9.2342.19200300.100.1.25",
                    UID: "0.9.2342.19200300.100.1.1",
                    SN: "2.5.4.4",
                    DN: "2.5.4.49",
                    E: "1.2.840.113549.1.9.1",
                    businessCategory: "2.5.4.15",
                    postalCode: "2.5.4.17",
                    jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
                    jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
                    jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
                },
                this.name2oidList = {
                    sha1: "1.3.14.3.2.26",
                    sha256: "2.16.840.1.101.3.4.2.1",
                    sha384: "2.16.840.1.101.3.4.2.2",
                    sha512: "2.16.840.1.101.3.4.2.3",
                    sha224: "2.16.840.1.101.3.4.2.4",
                    md5: "1.2.840.113549.2.5",
                    md2: "1.3.14.7.2.2.1",
                    ripemd160: "1.3.36.3.2.1",
                    MD2withRSA: "1.2.840.113549.1.1.2",
                    MD4withRSA: "1.2.840.113549.1.1.3",
                    MD5withRSA: "1.2.840.113549.1.1.4",
                    SHA1withRSA: "1.2.840.113549.1.1.5",
                    SHA224withRSA: "1.2.840.113549.1.1.14",
                    SHA256withRSA: "1.2.840.113549.1.1.11",
                    SHA384withRSA: "1.2.840.113549.1.1.12",
                    SHA512withRSA: "1.2.840.113549.1.1.13",
                    SHA1withECDSA: "1.2.840.10045.4.1",
                    SHA224withECDSA: "1.2.840.10045.4.3.1",
                    SHA256withECDSA: "1.2.840.10045.4.3.2",
                    SHA384withECDSA: "1.2.840.10045.4.3.3",
                    SHA512withECDSA: "1.2.840.10045.4.3.4",
                    dsa: "1.2.840.10040.4.1",
                    SHA1withDSA: "1.2.840.10040.4.3",
                    SHA224withDSA: "2.16.840.1.101.3.4.3.1",
                    SHA256withDSA: "2.16.840.1.101.3.4.3.2",
                    rsaEncryption: "1.2.840.113549.1.1.1",
                    commonName: "2.5.4.3",
                    localityName: "2.5.4.7",
                    stateOrProvinceName: "2.5.4.8",
                    organizationName: "2.5.4.10",
                    organizationalUnitName: "2.5.4.11",
                    countryName: "2.5.4.6",
                    streetAddress: "2.5.4.9",
                    domainComponent: "0.9.2342.19200300.100.1.25",
                    userId: "0.9.2342.19200300.100.1.1",
                    surname: "2.5.4.4",
                    distinguishedName: "2.5.4.49",
                    emailAddress: "1.2.840.113549.1.9.1",
                    businessCategory: "2.5.4.15",
                    postalCode: "2.5.4.17",
                    jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
                    jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
                    jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
                    subjectKeyIdentifier: "2.5.29.14",
                    keyUsage: "2.5.29.15",
                    subjectAltName: "2.5.29.17",
                    issuerAltName: "2.5.29.18",
                    basicConstraints: "2.5.29.19",
                    nameConstraints: "2.5.29.30",
                    cRLDistributionPoints: "2.5.29.31",
                    certificatePolicies: "2.5.29.32",
                    authorityKeyIdentifier: "2.5.29.35",
                    policyConstraints: "2.5.29.36",
                    extKeyUsage: "2.5.29.37",
                    authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
                    ocsp: "1.3.6.1.5.5.7.48.1",
                    caIssuers: "1.3.6.1.5.5.7.48.2",
                    anyExtendedKeyUsage: "2.5.29.37.0",
                    serverAuth: "1.3.6.1.5.5.7.3.1",
                    clientAuth: "1.3.6.1.5.5.7.3.2",
                    codeSigning: "1.3.6.1.5.5.7.3.3",
                    emailProtection: "1.3.6.1.5.5.7.3.4",
                    timeStamping: "1.3.6.1.5.5.7.3.8",
                    ocspSigning: "1.3.6.1.5.5.7.3.9",
                    ecPublicKey: "1.2.840.10045.2.1",
                    secp256r1: "1.2.840.10045.3.1.7",
                    secp256k1: "1.3.132.0.10",
                    secp384r1: "1.3.132.0.34",
                    pkcs5PBES2: "1.2.840.113549.1.5.13",
                    pkcs5PBKDF2: "1.2.840.113549.1.5.12",
                    "des-EDE3-CBC": "1.2.840.113549.3.7",
                    data: "1.2.840.113549.1.7.1",
                    "signed-data": "1.2.840.113549.1.7.2",
                    "enveloped-data": "1.2.840.113549.1.7.3",
                    "digested-data": "1.2.840.113549.1.7.5",
                    "encrypted-data": "1.2.840.113549.1.7.6",
                    "authenticated-data": "1.2.840.113549.1.9.16.1.2",
                    tstinfo: "1.2.840.113549.1.9.16.1.4",
                    extensionRequest: "1.2.840.113549.1.9.14"
                },
                this.objCache = {},
                this.name2obj = function(t) {
                    if ("undefined" != typeof this.objCache[t])
                        return this.objCache[t];
                    if ("undefined" == typeof this.name2oidList[t])
                        throw "Name of ObjectIdentifier not defined: " + t;
                    var e = this.name2oidList[t]
                      , n = new o.asn1.DERObjectIdentifier({
                        oid: e
                    });
                    return this.objCache[t] = n,
                    n
                }
                ,
                this.atype2obj = function(t) {
                    if ("undefined" != typeof this.objCache[t])
                        return this.objCache[t];
                    if ("undefined" == typeof this.atype2oidList[t])
                        throw "AttributeType name undefined: " + t;
                    var e = this.atype2oidList[t]
                      , n = new o.asn1.DERObjectIdentifier({
                        oid: e
                    });
                    return this.objCache[t] = n,
                    n
                }
            }
            ,
            o.asn1.x509.OID.oid2name = function(t) {
                var e = o.asn1.x509.OID.name2oidList;
                for (var n in e)
                    if (e[n] == t)
                        return n;
                return ""
            }
            ,
            o.asn1.x509.OID.oid2atype = function(t) {
                var e = o.asn1.x509.OID.atype2oidList;
                for (var n in e)
                    if (e[n] == t)
                        return n;
                return t
            }
            ,
            o.asn1.x509.OID.name2oid = function(t) {
                var e = o.asn1.x509.OID.name2oidList;
                return void 0 === e[t] ? "" : e[t]
            }
            ,
            o.asn1.x509.X509Util = new function() {
                this.getPKCS8PubKeyPEMfromRSAKey = function(t) {
                    var e = o.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n)
                      , n = o.asn1.ASN1Util.integerToByteHex(t.e)
                      , i = new o.asn1.DERInteger({
                        hex: e
                    })
                      , r = new o.asn1.DERInteger({
                        hex: n
                    })
                      , s = new o.asn1.DERSequence({
                        array: [i, r]
                    })
                      , a = s.getEncodedHex()
                      , h = new o.asn1.x509.AlgorithmIdentifier({
                        name: "rsaEncryption"
                    })
                      , u = new o.asn1.DERBitString({
                        hex: "00" + a
                    })
                      , c = new o.asn1.DERSequence({
                        array: [h, u]
                    })
                      , l = c.getEncodedHex()
                      , f = o.asn1.ASN1Util.getPEMStringFromHex(l, "PUBLIC KEY");
                    return f
                }
            }
            ,
            o.asn1.x509.X509Util.newCertPEM = function(t) {
                var e = o.asn1.x509
                  , n = new e.TBSCertificate;
                if (void 0 === t.serial)
                    throw "serial number undefined.";
                if (n.setSerialNumberByParam(t.serial),
                "string" !== typeof t.sigalg.name)
                    throw "unproper signature algorithm name";
                if (n.setSignatureAlgByParam(t.sigalg),
                void 0 === t.issuer)
                    throw "issuer name undefined.";
                if (n.setIssuerByParam(t.issuer),
                void 0 === t.notbefore)
                    throw "notbefore undefined.";
                if (n.setNotBeforeByParam(t.notbefore),
                void 0 === t.notafter)
                    throw "notafter undefined.";
                if (n.setNotAfterByParam(t.notafter),
                void 0 === t.subject)
                    throw "subject name undefined.";
                if (n.setSubjectByParam(t.subject),
                void 0 === t.sbjpubkey)
                    throw "subject public key undefined.";
                if (n.setSubjectPublicKeyByGetKey(t.sbjpubkey),
                void 0 !== t.ext && void 0 !== t.ext.length)
                    for (var i = 0; i < t.ext.length; i++)
                        for (key in t.ext[i])
                            n.appendExtensionByName(key, t.ext[i][key]);
                if (void 0 === t.cakey && void 0 === t.sighex)
                    throw "param cakey and sighex undefined.";
                var r = null
                  , s = null;
                return t.cakey && (r = !0 === t.cakey.isPrivate ? t.cakey : St.getKey.apply(null, t.cakey),
                s = new e.Certificate({
                    tbscertobj: n,
                    prvkeyobj: r
                }),
                s.sign()),
                t.sighex && (s = new e.Certificate({
                    tbscertobj: n
                }),
                s.setSignatureHex(t.sighex)),
                s.getPEMString()
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            "undefined" != typeof o.asn1.cms && o.asn1.cms || (o.asn1.cms = {}),
            o.asn1.cms.Attribute = function(t) {
                o.asn1.cms.Attribute.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t, e, n;
                    t = new o.asn1.DERObjectIdentifier({
                        oid: this.attrTypeOid
                    }),
                    e = new o.asn1.DERSet({
                        array: this.valueList
                    });
                    try {
                        e.getEncodedHex()
                    } catch (i) {
                        throw "fail valueSet.getEncodedHex in Attribute(1)/" + i
                    }
                    n = new o.asn1.DERSequence({
                        array: [t, e]
                    });
                    try {
                        this.hTLV = n.getEncodedHex()
                    } catch (i) {
                        throw "failed seq.getEncodedHex in Attribute(2)/" + i
                    }
                    return this.hTLV
                }
            }
            ,
            u.lang.extend(o.asn1.cms.Attribute, o.asn1.ASN1Object),
            o.asn1.cms.ContentType = function(t) {
                o.asn1.cms.ContentType.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.3";
                var e = null;
                if ("undefined" != typeof t) {
                    e = new o.asn1.DERObjectIdentifier(t);
                    this.valueList = [e]
                }
            }
            ,
            u.lang.extend(o.asn1.cms.ContentType, o.asn1.cms.Attribute),
            o.asn1.cms.MessageDigest = function(t) {
                if (o.asn1.cms.MessageDigest.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.4",
                "undefined" != typeof t)
                    if (t.eciObj instanceof o.asn1.cms.EncapsulatedContentInfo && "string" == typeof t.hashAlg) {
                        var e = t.eciObj.eContentValueHex
                          , n = t.hashAlg
                          , i = o.crypto.Util.hashHex(e, n)
                          , r = new o.asn1.DEROctetString({
                            hex: i
                        });
                        r.getEncodedHex(),
                        this.valueList = [r]
                    } else {
                        r = new o.asn1.DEROctetString(t);
                        r.getEncodedHex(),
                        this.valueList = [r]
                    }
            }
            ,
            u.lang.extend(o.asn1.cms.MessageDigest, o.asn1.cms.Attribute),
            o.asn1.cms.SigningTime = function(t) {
                if (o.asn1.cms.SigningTime.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.5",
                "undefined" != typeof t) {
                    var e = new o.asn1.x509.Time(t);
                    try {
                        e.getEncodedHex()
                    } catch (n) {
                        throw "SigningTime.getEncodedHex() failed/" + n
                    }
                    this.valueList = [e]
                }
            }
            ,
            u.lang.extend(o.asn1.cms.SigningTime, o.asn1.cms.Attribute),
            o.asn1.cms.SigningCertificate = function(t) {
                o.asn1.cms.SigningCertificate.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.16.2.12";
                var e = o.asn1
                  , n = o.asn1.cms
                  , i = o.crypto;
                this.setCerts = function(t) {
                    for (var r = [], s = 0; s < t.length; s++) {
                        var a = it.pemToHex(t[s])
                          , o = i.Util.hashHex(a, "sha1")
                          , h = new e.DEROctetString({
                            hex: o
                        });
                        h.getEncodedHex();
                        var u = new n.IssuerAndSerialNumber({
                            cert: t[s]
                        });
                        u.getEncodedHex();
                        var c = new e.DERSequence({
                            array: [h, u]
                        });
                        c.getEncodedHex(),
                        r.push(c)
                    }
                    var l = new e.DERSequence({
                        array: r
                    });
                    l.getEncodedHex(),
                    this.valueList = [l]
                }
                ,
                "undefined" != typeof t && "object" == (0,
                r.default)(t.array) && this.setCerts(t.array)
            }
            ,
            u.lang.extend(o.asn1.cms.SigningCertificate, o.asn1.cms.Attribute),
            o.asn1.cms.SigningCertificateV2 = function(t) {
                o.asn1.cms.SigningCertificateV2.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.16.2.47";
                var e = o.asn1
                  , n = o.asn1.x509
                  , i = o.asn1.cms
                  , s = o.crypto;
                if (this.setCerts = function(t, r) {
                    for (var a = [], o = 0; o < t.length; o++) {
                        var h = it.pemToHex(t[o])
                          , u = [];
                        "sha256" != r && u.push(new n.AlgorithmIdentifier({
                            name: r
                        }));
                        var c = s.Util.hashHex(h, r)
                          , l = new e.DEROctetString({
                            hex: c
                        });
                        l.getEncodedHex(),
                        u.push(l);
                        var f = new i.IssuerAndSerialNumber({
                            cert: t[o]
                        });
                        f.getEncodedHex(),
                        u.push(f);
                        var d = new e.DERSequence({
                            array: u
                        });
                        d.getEncodedHex(),
                        a.push(d)
                    }
                    var g = new e.DERSequence({
                        array: a
                    });
                    g.getEncodedHex(),
                    this.valueList = [g]
                }
                ,
                "undefined" != typeof t && "object" == (0,
                r.default)(t.array)) {
                    var a = "sha256";
                    "string" == typeof t.hashAlg && (a = t.hashAlg),
                    this.setCerts(t.array, a)
                }
            }
            ,
            u.lang.extend(o.asn1.cms.SigningCertificateV2, o.asn1.cms.Attribute),
            o.asn1.cms.IssuerAndSerialNumber = function(t) {
                o.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);
                var e = o.asn1
                  , n = e.x509;
                this.setByCertPEM = function(t) {
                    var i = it.pemToHex(t)
                      , r = new jt;
                    r.hex = i;
                    var s = r.getIssuerHex();
                    this.dIssuer = new n.X500Name,
                    this.dIssuer.hTLV = s;
                    var a = r.getSerialNumberHex();
                    this.dSerial = new e.DERInteger({
                        hex: a
                    })
                }
                ,
                this.getEncodedHex = function() {
                    var t = new o.asn1.DERSequence({
                        array: [this.dIssuer, this.dSerial]
                    });
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t),
                t.issuer && t.serial && (t.issuer instanceof o.asn1.x509.X500Name ? this.dIssuer = t.issuer : this.dIssuer = new o.asn1.x509.X500Name(t.issuer),
                t.serial instanceof o.asn1.DERInteger ? this.dSerial = t.serial : this.dSerial = new o.asn1.DERInteger(t.serial)),
                "string" == typeof t.cert && this.setByCertPEM(t.cert))
            }
            ,
            u.lang.extend(o.asn1.cms.IssuerAndSerialNumber, o.asn1.ASN1Object),
            o.asn1.cms.AttributeList = function(t) {
                o.asn1.cms.AttributeList.superclass.constructor.call(this),
                this.list = new Array,
                this.sortFlag = !0,
                this.add = function(t) {
                    t instanceof o.asn1.cms.Attribute && this.list.push(t)
                }
                ,
                this.length = function() {
                    return this.list.length
                }
                ,
                this.clear = function() {
                    this.list = new Array,
                    this.hTLV = null,
                    this.hV = null
                }
                ,
                this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV)
                        return this.hTLV;
                    var t = new o.asn1.DERSet({
                        array: this.list,
                        sortflag: this.sortFlag
                    });
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }
            ,
            u.lang.extend(o.asn1.cms.AttributeList, o.asn1.ASN1Object),
            o.asn1.cms.SignerInfo = function(t) {
                o.asn1.cms.SignerInfo.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.cms
                  , i = o.asn1.x509;
                this.dCMSVersion = new e.DERInteger({
                    int: 1
                }),
                this.dSignerIdentifier = null,
                this.dDigestAlgorithm = null,
                this.dSignedAttrs = new n.AttributeList,
                this.dSigAlg = null,
                this.dSig = null,
                this.dUnsignedAttrs = new n.AttributeList,
                this.setSignerIdentifier = function(t) {
                    if ("string" == typeof t && -1 != t.indexOf("CERTIFICATE") && -1 != t.indexOf("BEGIN") && -1 != t.indexOf("END")) {
                        this.dSignerIdentifier = new n.IssuerAndSerialNumber({
                            cert: t
                        })
                    }
                }
                ,
                this.setForContentAndHash = function(t) {
                    "undefined" != typeof t && (t.eciObj instanceof o.asn1.cms.EncapsulatedContentInfo && (this.dSignedAttrs.add(new n.ContentType({
                        oid: "1.2.840.113549.1.7.1"
                    })),
                    this.dSignedAttrs.add(new n.MessageDigest({
                        eciObj: t.eciObj,
                        hashAlg: t.hashAlg
                    }))),
                    "undefined" != typeof t.sdObj && t.sdObj instanceof o.asn1.cms.SignedData && -1 == t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) && t.sdObj.digestAlgNameList.push(t.hashAlg),
                    "string" == typeof t.hashAlg && (this.dDigestAlgorithm = new i.AlgorithmIdentifier({
                        name: t.hashAlg
                    })))
                }
                ,
                this.sign = function(t, n) {
                    this.dSigAlg = new i.AlgorithmIdentifier({
                        name: n
                    });
                    var r = this.dSignedAttrs.getEncodedHex()
                      , s = St.getKey(t)
                      , a = new o.crypto.Signature({
                        alg: n
                    });
                    a.init(s),
                    a.updateHex(r);
                    var h = a.sign();
                    this.dSig = new e.DEROctetString({
                        hex: h
                    })
                }
                ,
                this.addUnsigned = function(t) {
                    this.hTLV = null,
                    this.dUnsignedAttrs.hTLV = null,
                    this.dUnsignedAttrs.add(t)
                }
                ,
                this.getEncodedHex = function() {
                    if (this.dSignedAttrs instanceof o.asn1.cms.AttributeList && 0 == this.dSignedAttrs.length())
                        throw "SignedAttrs length = 0 (empty)";
                    var t = new e.DERTaggedObject({
                        obj: this.dSignedAttrs,
                        tag: "a0",
                        explicit: !1
                    })
                      , n = null;
                    this.dUnsignedAttrs.length() > 0 && (n = new e.DERTaggedObject({
                        obj: this.dUnsignedAttrs,
                        tag: "a1",
                        explicit: !1
                    }));
                    var i = [this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, t, this.dSigAlg, this.dSig];
                    null != n && i.push(n);
                    var r = new e.DERSequence({
                        array: i
                    });
                    return this.hTLV = r.getEncodedHex(),
                    this.hTLV
                }
            }
            ,
            u.lang.extend(o.asn1.cms.SignerInfo, o.asn1.ASN1Object),
            o.asn1.cms.EncapsulatedContentInfo = function(t) {
                o.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);
                var e = o.asn1;
                o.asn1.cms,
                o.asn1.x509;
                this.dEContentType = new e.DERObjectIdentifier({
                    name: "data"
                }),
                this.dEContent = null,
                this.isDetached = !1,
                this.eContentValueHex = null,
                this.setContentType = function(t) {
                    t.match(/^[0-2][.][0-9.]+$/) ? this.dEContentType = new e.DERObjectIdentifier({
                        oid: t
                    }) : this.dEContentType = new e.DERObjectIdentifier({
                        name: t
                    })
                }
                ,
                this.setContentValue = function(t) {
                    "undefined" != typeof t && ("string" == typeof t.hex ? this.eContentValueHex = t.hex : "string" == typeof t.str && (this.eContentValueHex = ct(t.str)))
                }
                ,
                this.setContentValueHex = function(t) {
                    this.eContentValueHex = t
                }
                ,
                this.setContentValueStr = function(t) {
                    this.eContentValueHex = ct(t)
                }
                ,
                this.getEncodedHex = function() {
                    if ("string" != typeof this.eContentValueHex)
                        throw "eContentValue not yet set";
                    var t = new e.DEROctetString({
                        hex: this.eContentValueHex
                    });
                    this.dEContent = new e.DERTaggedObject({
                        obj: t,
                        tag: "a0",
                        explicit: !0
                    });
                    var n = [this.dEContentType];
                    this.isDetached || n.push(this.dEContent);
                    var i = new e.DERSequence({
                        array: n
                    });
                    return this.hTLV = i.getEncodedHex(),
                    this.hTLV
                }
            }
            ,
            u.lang.extend(o.asn1.cms.EncapsulatedContentInfo, o.asn1.ASN1Object),
            o.asn1.cms.ContentInfo = function(t) {
                o.asn1.cms.ContentInfo.superclass.constructor.call(this);
                var e = o.asn1
                  , n = (o.asn1.cms,
                o.asn1.x509);
                this.dContentType = null,
                this.dContent = null,
                this.setContentType = function(t) {
                    "string" == typeof t && (this.dContentType = n.OID.name2obj(t))
                }
                ,
                this.getEncodedHex = function() {
                    var t = new e.DERTaggedObject({
                        obj: this.dContent,
                        tag: "a0",
                        explicit: !0
                    })
                      , n = new e.DERSequence({
                        array: [this.dContentType, t]
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && (t.type && this.setContentType(t.type),
                t.obj && t.obj instanceof e.ASN1Object && (this.dContent = t.obj))
            }
            ,
            u.lang.extend(o.asn1.cms.ContentInfo, o.asn1.ASN1Object),
            o.asn1.cms.SignedData = function(t) {
                o.asn1.cms.SignedData.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.cms
                  , i = o.asn1.x509;
                this.dCMSVersion = new e.DERInteger({
                    int: 1
                }),
                this.dDigestAlgs = null,
                this.digestAlgNameList = [],
                this.dEncapContentInfo = new n.EncapsulatedContentInfo,
                this.dCerts = null,
                this.certificateList = [],
                this.crlList = [],
                this.signerInfoList = [new n.SignerInfo],
                this.addCertificatesByPEM = function(t) {
                    var n = it.pemToHex(t)
                      , i = new e.ASN1Object;
                    i.hTLV = n,
                    this.certificateList.push(i)
                }
                ,
                this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV)
                        return this.hTLV;
                    if (null == this.dDigestAlgs) {
                        for (var t = [], n = 0; n < this.digestAlgNameList.length; n++) {
                            var r = this.digestAlgNameList[n]
                              , s = new i.AlgorithmIdentifier({
                                name: r
                            });
                            t.push(s)
                        }
                        this.dDigestAlgs = new e.DERSet({
                            array: t
                        })
                    }
                    var a = [this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo];
                    if (null == this.dCerts && this.certificateList.length > 0) {
                        var o = new e.DERSet({
                            array: this.certificateList
                        });
                        this.dCerts = new e.DERTaggedObject({
                            obj: o,
                            tag: "a0",
                            explicit: !1
                        })
                    }
                    null != this.dCerts && a.push(this.dCerts);
                    var h = new e.DERSet({
                        array: this.signerInfoList
                    });
                    a.push(h);
                    var u = new e.DERSequence({
                        array: a
                    });
                    return this.hTLV = u.getEncodedHex(),
                    this.hTLV
                }
                ,
                this.getContentInfo = function() {
                    this.getEncodedHex();
                    var t = new n.ContentInfo({
                        type: "signed-data",
                        obj: this
                    });
                    return t
                }
                ,
                this.getContentInfoEncodedHex = function() {
                    var t = this.getContentInfo()
                      , e = t.getEncodedHex();
                    return e
                }
                ,
                this.getPEM = function() {
                    var t = this.getContentInfoEncodedHex()
                      , n = e.ASN1Util.getPEMStringFromHex(t, "CMS");
                    return n
                }
            }
            ,
            u.lang.extend(o.asn1.cms.SignedData, o.asn1.ASN1Object),
            o.asn1.cms.CMSUtil = new function() {}
            ,
            o.asn1.cms.CMSUtil.newSignedData = function(t) {
                var e = o.asn1.cms
                  , n = o.asn1.cades
                  , i = new e.SignedData;
                if (i.dEncapContentInfo.setContentValue(t.content),
                "object" == (0,
                r.default)(t.certs))
                    for (var s = 0; s < t.certs.length; s++)
                        i.addCertificatesByPEM(t.certs[s]);
                i.signerInfoList = [];
                for (s = 0; s < t.signerInfos.length; s++) {
                    var a = t.signerInfos[s]
                      , h = new e.SignerInfo;
                    for (attrName in h.setSignerIdentifier(a.signerCert),
                    h.setForContentAndHash({
                        sdObj: i,
                        eciObj: i.dEncapContentInfo,
                        hashAlg: a.hashAlg
                    }),
                    a.sAttr) {
                        var u = a.sAttr[attrName];
                        if ("SigningTime" == attrName) {
                            var c = new e.SigningTime(u);
                            h.dSignedAttrs.add(c)
                        }
                        if ("SigningCertificate" == attrName) {
                            c = new e.SigningCertificate(u);
                            h.dSignedAttrs.add(c)
                        }
                        if ("SigningCertificateV2" == attrName) {
                            c = new e.SigningCertificateV2(u);
                            h.dSignedAttrs.add(c)
                        }
                        if ("SignaturePolicyIdentifier" == attrName) {
                            c = new n.SignaturePolicyIdentifier(u);
                            h.dSignedAttrs.add(c)
                        }
                    }
                    h.sign(a.signerPrvKey, a.sigAlg),
                    i.signerInfoList.push(h)
                }
                return i
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            "undefined" != typeof o.asn1.tsp && o.asn1.tsp || (o.asn1.tsp = {}),
            o.asn1.tsp.Accuracy = function(t) {
                o.asn1.tsp.Accuracy.superclass.constructor.call(this);
                var e = o.asn1;
                this.seconds = null,
                this.millis = null,
                this.micros = null,
                this.getEncodedHex = function() {
                    var t = null
                      , n = null
                      , i = null
                      , r = [];
                    if (null != this.seconds && (t = new e.DERInteger({
                        int: this.seconds
                    }),
                    r.push(t)),
                    null != this.millis) {
                        var s = new e.DERInteger({
                            int: this.millis
                        });
                        n = new e.DERTaggedObject({
                            obj: s,
                            tag: "80",
                            explicit: !1
                        }),
                        r.push(n)
                    }
                    if (null != this.micros) {
                        var a = new e.DERInteger({
                            int: this.micros
                        });
                        i = new e.DERTaggedObject({
                            obj: a,
                            tag: "81",
                            explicit: !1
                        }),
                        r.push(i)
                    }
                    var o = new e.DERSequence({
                        array: r
                    });
                    return this.hTLV = o.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("number" == typeof t.seconds && (this.seconds = t.seconds),
                "number" == typeof t.millis && (this.millis = t.millis),
                "number" == typeof t.micros && (this.micros = t.micros))
            }
            ,
            u.lang.extend(o.asn1.tsp.Accuracy, o.asn1.ASN1Object),
            o.asn1.tsp.MessageImprint = function(t) {
                o.asn1.tsp.MessageImprint.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.x509;
                this.dHashAlg = null,
                this.dHashValue = null,
                this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV)
                        return this.hTLV;
                    var t = new e.DERSequence({
                        array: [this.dHashAlg, this.dHashValue]
                    });
                    return t.getEncodedHex()
                }
                ,
                "undefined" != typeof t && ("string" == typeof t.hashAlg && (this.dHashAlg = new n.AlgorithmIdentifier({
                    name: t.hashAlg
                })),
                "string" == typeof t.hashValue && (this.dHashValue = new e.DEROctetString({
                    hex: t.hashValue
                })))
            }
            ,
            u.lang.extend(o.asn1.tsp.MessageImprint, o.asn1.ASN1Object),
            o.asn1.tsp.TimeStampReq = function(t) {
                o.asn1.tsp.TimeStampReq.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.tsp;
                this.dVersion = new e.DERInteger({
                    int: 1
                }),
                this.dMessageImprint = null,
                this.dPolicy = null,
                this.dNonce = null,
                this.certReq = !0,
                this.setMessageImprint = function(t) {
                    t instanceof o.asn1.tsp.MessageImprint ? this.dMessageImprint = t : "object" == (0,
                    r.default)(t) && (this.dMessageImprint = new n.MessageImprint(t))
                }
                ,
                this.getEncodedHex = function() {
                    if (null == this.dMessageImprint)
                        throw "messageImprint shall be specified";
                    var t = [this.dVersion, this.dMessageImprint];
                    null != this.dPolicy && t.push(this.dPolicy),
                    null != this.dNonce && t.push(this.dNonce),
                    this.certReq && t.push(new e.DERBoolean);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("object" == (0,
                r.default)(t.mi) && this.setMessageImprint(t.mi),
                "object" == (0,
                r.default)(t.policy) && (this.dPolicy = new e.DERObjectIdentifier(t.policy)),
                "object" == (0,
                r.default)(t.nonce) && (this.dNonce = new e.DERInteger(t.nonce)),
                "boolean" == typeof t.certreq && (this.certReq = t.certreq))
            }
            ,
            u.lang.extend(o.asn1.tsp.TimeStampReq, o.asn1.ASN1Object),
            o.asn1.tsp.TSTInfo = function(t) {
                o.asn1.tsp.TSTInfo.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.x509
                  , i = o.asn1.tsp;
                if (this.dVersion = new e.DERInteger({
                    int: 1
                }),
                this.dPolicy = null,
                this.dMessageImprint = null,
                this.dSerialNumber = null,
                this.dGenTime = null,
                this.dAccuracy = null,
                this.dOrdering = null,
                this.dNonce = null,
                this.dTsa = null,
                this.getEncodedHex = function() {
                    var t = [this.dVersion];
                    if (null == this.dPolicy)
                        throw "policy shall be specified.";
                    if (t.push(this.dPolicy),
                    null == this.dMessageImprint)
                        throw "messageImprint shall be specified.";
                    if (t.push(this.dMessageImprint),
                    null == this.dSerialNumber)
                        throw "serialNumber shall be specified.";
                    if (t.push(this.dSerialNumber),
                    null == this.dGenTime)
                        throw "genTime shall be specified.";
                    t.push(this.dGenTime),
                    null != this.dAccuracy && t.push(this.dAccuracy),
                    null != this.dOrdering && t.push(this.dOrdering),
                    null != this.dNonce && t.push(this.dNonce),
                    null != this.dTsa && t.push(this.dTsa);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t) {
                    if ("string" == typeof t.policy) {
                        if (!t.policy.match(/^[0-9.]+$/))
                            throw "policy shall be oid like 0.1.4.134";
                        this.dPolicy = new e.DERObjectIdentifier({
                            oid: t.policy
                        })
                    }
                    "undefined" != typeof t.messageImprint && (this.dMessageImprint = new i.MessageImprint(t.messageImprint)),
                    "undefined" != typeof t.serialNumber && (this.dSerialNumber = new e.DERInteger(t.serialNumber)),
                    "undefined" != typeof t.genTime && (this.dGenTime = new e.DERGeneralizedTime(t.genTime)),
                    "undefind" != typeof t.accuracy && (this.dAccuracy = new i.Accuracy(t.accuracy)),
                    "undefined" != typeof t.ordering && 1 == t.ordering && (this.dOrdering = new e.DERBoolean),
                    "undefined" != typeof t.nonce && (this.dNonce = new e.DERInteger(t.nonce)),
                    "undefined" != typeof t.tsa && (this.dTsa = new n.X500Name(t.tsa))
                }
            }
            ,
            u.lang.extend(o.asn1.tsp.TSTInfo, o.asn1.ASN1Object),
            o.asn1.tsp.TimeStampResp = function(t) {
                o.asn1.tsp.TimeStampResp.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.tsp;
                this.dStatus = null,
                this.dTST = null,
                this.getEncodedHex = function() {
                    if (null == this.dStatus)
                        throw "status shall be specified";
                    var t = [this.dStatus];
                    null != this.dTST && t.push(this.dTST);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("object" == (0,
                r.default)(t.status) && (this.dStatus = new n.PKIStatusInfo(t.status)),
                "undefined" != typeof t.tst && t.tst instanceof o.asn1.ASN1Object && (this.dTST = t.tst.getContentInfo()))
            }
            ,
            u.lang.extend(o.asn1.tsp.TimeStampResp, o.asn1.ASN1Object),
            o.asn1.tsp.PKIStatusInfo = function(t) {
                o.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.tsp;
                this.dStatus = null,
                this.dStatusString = null,
                this.dFailureInfo = null,
                this.getEncodedHex = function() {
                    if (null == this.dStatus)
                        throw "status shall be specified";
                    var t = [this.dStatus];
                    null != this.dStatusString && t.push(this.dStatusString),
                    null != this.dFailureInfo && t.push(this.dFailureInfo);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("object" == (0,
                r.default)(t.status) && (this.dStatus = new n.PKIStatus(t.status)),
                "object" == (0,
                r.default)(t.statstr) && (this.dStatusString = new n.PKIFreeText({
                    array: t.statstr
                })),
                "object" == (0,
                r.default)(t.failinfo) && (this.dFailureInfo = new n.PKIFailureInfo(t.failinfo)))
            }
            ,
            u.lang.extend(o.asn1.tsp.PKIStatusInfo, o.asn1.ASN1Object),
            o.asn1.tsp.PKIStatus = function(t) {
                o.asn1.tsp.PKIStatus.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.tsp;
                if (this.getEncodedHex = function() {
                    return this.hTLV = this.dStatus.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t)
                    if ("undefined" != typeof t.name) {
                        var i = n.PKIStatus.valueList;
                        if ("undefined" == typeof i[t.name])
                            throw "name undefined: " + t.name;
                        this.dStatus = new e.DERInteger({
                            int: i[t.name]
                        })
                    } else
                        this.dStatus = new e.DERInteger(t)
            }
            ,
            u.lang.extend(o.asn1.tsp.PKIStatus, o.asn1.ASN1Object),
            o.asn1.tsp.PKIStatus.valueList = {
                granted: 0,
                grantedWithMods: 1,
                rejection: 2,
                waiting: 3,
                revocationWarning: 4,
                revocationNotification: 5
            },
            o.asn1.tsp.PKIFreeText = function(t) {
                o.asn1.tsp.PKIFreeText.superclass.constructor.call(this);
                var e = o.asn1;
                this.textList = [],
                this.getEncodedHex = function() {
                    for (var t = [], n = 0; n < this.textList.length; n++)
                        t.push(new e.DERUTF8String({
                            str: this.textList[n]
                        }));
                    var i = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = i.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && "object" == (0,
                r.default)(t.array) && (this.textList = t.array)
            }
            ,
            u.lang.extend(o.asn1.tsp.PKIFreeText, o.asn1.ASN1Object),
            o.asn1.tsp.PKIFailureInfo = function(t) {
                o.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.tsp;
                if (this.value = null,
                this.getEncodedHex = function() {
                    if (null == this.value)
                        throw "value shall be specified";
                    var t = new Number(this.value).toString(2)
                      , n = new e.DERBitString;
                    return n.setByBinaryString(t),
                    this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t)
                    if ("string" == typeof t.name) {
                        var i = n.PKIFailureInfo.valueList;
                        if ("undefined" == typeof i[t.name])
                            throw "name undefined: " + t.name;
                        this.value = i[t.name]
                    } else
                        "number" == typeof t["int"] && (this.value = t["int"])
            }
            ,
            u.lang.extend(o.asn1.tsp.PKIFailureInfo, o.asn1.ASN1Object),
            o.asn1.tsp.PKIFailureInfo.valueList = {
                badAlg: 0,
                badRequest: 2,
                badDataFormat: 5,
                timeNotAvailable: 14,
                unacceptedPolicy: 15,
                unacceptedExtension: 16,
                addInfoNotAvailable: 17,
                systemFailure: 25
            },
            o.asn1.tsp.AbstractTSAAdapter = function(t) {
                this.getTSTHex = function(t, e) {
                    throw "not implemented yet"
                }
            }
            ,
            o.asn1.tsp.SimpleTSAAdapter = function(t) {
                o.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this),
                this.params = null,
                this.serial = 0,
                this.getTSTHex = function(t, e) {
                    var n = o.crypto.Util.hashHex(t, e);
                    this.params.tstInfo.messageImprint = {
                        hashAlg: e,
                        hashValue: n
                    },
                    this.params.tstInfo.serialNumber = {
                        int: this.serial++
                    };
                    var i = Math.floor(1e9 * Math.random());
                    this.params.tstInfo.nonce = {
                        int: i
                    };
                    var r = o.asn1.tsp.TSPUtil.newTimeStampToken(this.params);
                    return r.getContentInfoEncodedHex()
                }
                ,
                "undefined" != typeof t && (this.params = t)
            }
            ,
            u.lang.extend(o.asn1.tsp.SimpleTSAAdapter, o.asn1.tsp.AbstractTSAAdapter),
            o.asn1.tsp.FixedTSAAdapter = function(t) {
                o.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this),
                this.params = null,
                this.getTSTHex = function(t, e) {
                    var n = o.crypto.Util.hashHex(t, e);
                    this.params.tstInfo.messageImprint = {
                        hashAlg: e,
                        hashValue: n
                    };
                    var i = o.asn1.tsp.TSPUtil.newTimeStampToken(this.params);
                    return i.getContentInfoEncodedHex()
                }
                ,
                "undefined" != typeof t && (this.params = t)
            }
            ,
            u.lang.extend(o.asn1.tsp.FixedTSAAdapter, o.asn1.tsp.AbstractTSAAdapter),
            o.asn1.tsp.TSPUtil = new function() {}
            ,
            o.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
                var e = o.asn1.cms
                  , n = o.asn1.tsp
                  , i = new e.SignedData
                  , s = new n.TSTInfo(t.tstInfo)
                  , a = s.getEncodedHex();
                if (i.dEncapContentInfo.setContentValue({
                    hex: a
                }),
                i.dEncapContentInfo.setContentType("tstinfo"),
                "object" == (0,
                r.default)(t.certs))
                    for (var h = 0; h < t.certs.length; h++)
                        i.addCertificatesByPEM(t.certs[h]);
                var u = i.signerInfoList[0];
                u.setSignerIdentifier(t.signerCert),
                u.setForContentAndHash({
                    sdObj: i,
                    eciObj: i.dEncapContentInfo,
                    hashAlg: t.hashAlg
                });
                var c = new e.SigningCertificate({
                    array: [t.signerCert]
                });
                return u.dSignedAttrs.add(c),
                u.sign(t.signerPrvKey, t.sigAlg),
                i
            }
            ,
            o.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
                var e = {
                    certreq: !1
                }
                  , n = it.getPosArrayOfChildren_AtObj(t, 0);
                if (n.length < 2)
                    throw "TimeStampReq must have at least 2 items";
                var i = it.getHexOfTLV_AtObj(t, n[1]);
                e.mi = o.asn1.tsp.TSPUtil.parseMessageImprint(i);
                for (var r = 2; r < n.length; r++) {
                    var s = n[r]
                      , a = t.substr(s, 2);
                    if ("06" == a) {
                        var h = it.getHexOfV_AtObj(t, s);
                        e.policy = it.hextooidstr(h)
                    }
                    "02" == a && (e.nonce = it.getHexOfV_AtObj(t, s)),
                    "01" == a && (e.certreq = !0)
                }
                return e
            }
            ,
            o.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
                var e = {};
                if ("30" != t.substr(0, 2))
                    throw "head of messageImprint hex shall be '30'";
                it.getPosArrayOfChildren_AtObj(t, 0);
                var n = it.getDecendantIndexByNthList(t, 0, [0, 0])
                  , i = it.getHexOfV_AtObj(t, n)
                  , r = it.hextooidstr(i)
                  , s = o.asn1.x509.OID.oid2name(r);
                if ("" == s)
                    throw "hashAlg name undefined: " + r;
                var a = s
                  , h = it.getDecendantIndexByNthList(t, 0, [1]);
                return e.hashAlg = a,
                e.hashValue = it.getHexOfV_AtObj(t, h),
                e
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            "undefined" != typeof o.asn1.cades && o.asn1.cades || (o.asn1.cades = {}),
            o.asn1.cades.SignaturePolicyIdentifier = function(t) {
                o.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.16.2.15";
                var e = o.asn1
                  , n = o.asn1.cades;
                if ("undefined" != typeof t && "string" == typeof t.oid && "object" == (0,
                r.default)(t.hash)) {
                    var i = new e.DERObjectIdentifier({
                        oid: t.oid
                    })
                      , s = new n.OtherHashAlgAndValue(t.hash)
                      , a = new e.DERSequence({
                        array: [i, s]
                    });
                    this.valueList = [a]
                }
            }
            ,
            u.lang.extend(o.asn1.cades.SignaturePolicyIdentifier, o.asn1.cms.Attribute),
            o.asn1.cades.OtherHashAlgAndValue = function(t) {
                o.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.x509;
                this.dAlg = null,
                this.dHash = null,
                this.getEncodedHex = function() {
                    var t = new e.DERSequence({
                        array: [this.dAlg, this.dHash]
                    });
                    return this.hTLV = t.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && "string" == typeof t.alg && "string" == typeof t.hash && (this.dAlg = new n.AlgorithmIdentifier({
                    name: t.alg
                }),
                this.dHash = new e.DEROctetString({
                    hex: t.hash
                }))
            }
            ,
            u.lang.extend(o.asn1.cades.OtherHashAlgAndValue, o.asn1.ASN1Object),
            o.asn1.cades.SignatureTimeStamp = function(t) {
                o.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.16.2.14",
                this.tstHex = null;
                var e = o.asn1;
                if ("undefined" != typeof t) {
                    if ("undefined" != typeof t.res)
                        if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/))
                            ;
                        else if (!(t.res instanceof o.asn1.ASN1Object))
                            throw "res param shall be ASN1Object or hex string";
                    if ("undefined" != typeof t.tst)
                        if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
                            var n = new e.ASN1Object;
                            this.tstHex = t.tst,
                            n.hTLV = this.tstHex,
                            n.getEncodedHex(),
                            this.valueList = [n]
                        } else if (!(t.tst instanceof o.asn1.ASN1Object))
                            throw "tst param shall be ASN1Object or hex string"
                }
            }
            ,
            u.lang.extend(o.asn1.cades.SignatureTimeStamp, o.asn1.cms.Attribute),
            o.asn1.cades.CompleteCertificateRefs = function(t) {
                o.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this),
                this.attrTypeOid = "1.2.840.113549.1.9.16.2.21";
                o.asn1;
                var e = o.asn1.cades;
                this.setByArray = function(t) {
                    this.valueList = [];
                    for (var n = 0; n < t.length; n++) {
                        var i = new e.OtherCertID(t[n]);
                        this.valueList.push(i)
                    }
                }
                ,
                "undefined" != typeof t && "object" == (0,
                r.default)(t) && "number" == typeof t.length && this.setByArray(t)
            }
            ,
            u.lang.extend(o.asn1.cades.CompleteCertificateRefs, o.asn1.cms.Attribute),
            o.asn1.cades.OtherCertID = function(t) {
                o.asn1.cades.OtherCertID.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.cms
                  , i = o.asn1.cades;
                this.hasIssuerSerial = !0,
                this.dOtherCertHash = null,
                this.dIssuerSerial = null,
                this.setByCertPEM = function(t) {
                    this.dOtherCertHash = new i.OtherHash(t),
                    this.hasIssuerSerial && (this.dIssuerSerial = new n.IssuerAndSerialNumber(t))
                }
                ,
                this.getEncodedHex = function() {
                    if (null != this.hTLV)
                        return this.hTLV;
                    if (null == this.dOtherCertHash)
                        throw "otherCertHash not set";
                    var t = [this.dOtherCertHash];
                    null != this.dIssuerSerial && t.push(this.dIssuerSerial);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" != typeof t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t),
                "object" == (0,
                r.default)(t) && (!1 === t.hasis && (this.hasIssuerSerial = !1),
                "string" == typeof t.cert && this.setByCertPEM(t.cert)))
            }
            ,
            u.lang.extend(o.asn1.cades.OtherCertID, o.asn1.ASN1Object),
            o.asn1.cades.OtherHash = function(t) {
                o.asn1.cades.OtherHash.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.cades;
                if (this.alg = "sha256",
                this.dOtherHash = null,
                this.setByCertPEM = function(t) {
                    if (-1 == t.indexOf("-----BEGIN "))
                        throw "certPEM not to seem PEM format";
                    var e = it.pemToHex(t)
                      , i = o.crypto.Util.hashHex(e, this.alg);
                    this.dOtherHash = new n.OtherHashAlgAndValue({
                        alg: this.alg,
                        hash: i
                    })
                }
                ,
                this.getEncodedHex = function() {
                    if (null == this.dOtherHash)
                        throw "OtherHash not set";
                    return this.dOtherHash.getEncodedHex()
                }
                ,
                "undefined" != typeof t)
                    if ("string" == typeof t)
                        if (-1 != t.indexOf("-----BEGIN "))
                            this.setByCertPEM(t);
                        else {
                            if (!t.match(/^[0-9A-Fa-f]+$/))
                                throw "unsupported string value for params";
                            this.dOtherHash = new e.DEROctetString({
                                hex: t
                            })
                        }
                    else
                        "object" == (0,
                        r.default)(t) && ("string" == typeof t.cert ? ("string" == typeof t.alg && (this.alg = t.alg),
                        this.setByCertPEM(t.cert)) : this.dOtherHash = new n.OtherHashAlgAndValue(t))
            }
            ,
            u.lang.extend(o.asn1.cades.OtherHash, o.asn1.ASN1Object),
            o.asn1.cades.CAdESUtil = new function() {}
            ,
            o.asn1.cades.CAdESUtil.addSigTS = function(t, e, n) {}
            ,
            o.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
                var e = o.asn1
                  , n = o.asn1.cms
                  , i = o.asn1.cades.CAdESUtil
                  , r = {};
                if ("06092a864886f70d010702" != it.getDecendantHexTLVByNthList(t, 0, [0]))
                    throw "hex is not CMS SignedData";
                var s = it.getDecendantIndexByNthList(t, 0, [1, 0])
                  , a = it.getPosArrayOfChildren_AtObj(t, s);
                if (a.length < 4)
                    throw "num of SignedData elem shall be 4 at least";
                var h = a.shift();
                r.version = it.getHexOfTLV_AtObj(t, h);
                var u = a.shift();
                r.algs = it.getHexOfTLV_AtObj(t, u);
                var c = a.shift();
                r.encapcontent = it.getHexOfTLV_AtObj(t, c),
                r.certs = null,
                r.revs = null,
                r.si = [];
                var l = a.shift();
                "a0" == t.substr(l, 2) && (r.certs = it.getHexOfTLV_AtObj(t, l),
                l = a.shift()),
                "a1" == t.substr(l, 2) && (r.revs = it.getHexOfTLV_AtObj(t, l),
                l = a.shift());
                var f = l;
                if ("31" != t.substr(f, 2))
                    throw "Can't find signerInfos";
                for (var d = it.getPosArrayOfChildren_AtObj(t, f), g = 0; g < d.length; g++) {
                    var p = d[g]
                      , y = i.parseSignerInfoForAddingUnsigned(t, p, g);
                    r.si[g] = y
                }
                var v = null;
                r.obj = new n.SignedData,
                v = new e.ASN1Object,
                v.hTLV = r.version,
                r.obj.dCMSVersion = v,
                v = new e.ASN1Object,
                v.hTLV = r.algs,
                r.obj.dDigestAlgs = v,
                v = new e.ASN1Object,
                v.hTLV = r.encapcontent,
                r.obj.dEncapContentInfo = v,
                v = new e.ASN1Object,
                v.hTLV = r.certs,
                r.obj.dCerts = v,
                r.obj.signerInfoList = [];
                for (g = 0; g < r.si.length; g++)
                    r.obj.signerInfoList.push(r.si[g].obj);
                return r
            }
            ,
            o.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, n) {
                var i = o.asn1
                  , r = o.asn1.cms
                  , s = {}
                  , a = it.getPosArrayOfChildren_AtObj(t, e);
                if (6 != a.length)
                    throw "not supported items for SignerInfo (!=6)";
                var h = a.shift();
                s.version = it.getHexOfTLV_AtObj(t, h);
                var u = a.shift();
                s.si = it.getHexOfTLV_AtObj(t, u);
                var c = a.shift();
                s.digalg = it.getHexOfTLV_AtObj(t, c);
                var l = a.shift();
                s.sattrs = it.getHexOfTLV_AtObj(t, l);
                var f = a.shift();
                s.sigalg = it.getHexOfTLV_AtObj(t, f);
                var d = a.shift();
                s.sig = it.getHexOfTLV_AtObj(t, d),
                s.sigval = it.getHexOfV_AtObj(t, d);
                var g = null;
                return s.obj = new r.SignerInfo,
                g = new i.ASN1Object,
                g.hTLV = s.version,
                s.obj.dCMSVersion = g,
                g = new i.ASN1Object,
                g.hTLV = s.si,
                s.obj.dSignerIdentifier = g,
                g = new i.ASN1Object,
                g.hTLV = s.digalg,
                s.obj.dDigestAlgorithm = g,
                g = new i.ASN1Object,
                g.hTLV = s.sattrs,
                s.obj.dSignedAttrs = g,
                g = new i.ASN1Object,
                g.hTLV = s.sigalg,
                s.obj.dSigAlg = g,
                g = new i.ASN1Object,
                g.hTLV = s.sig,
                s.obj.dSig = g,
                s.obj.dUnsignedAttrs = new r.AttributeList,
                s
            }
            ,
            "undefined" != typeof o.asn1.csr && o.asn1.csr || (o.asn1.csr = {}),
            o.asn1.csr.CertificationRequest = function(t) {
                o.asn1.csr.CertificationRequest.superclass.constructor.call(this);
                this.sign = function(t, e) {
                    null == this.prvKey && (this.prvKey = e),
                    this.asn1SignatureAlg = new o.asn1.x509.AlgorithmIdentifier({
                        name: t
                    }),
                    sig = new o.crypto.Signature({
                        alg: t
                    }),
                    sig.initSign(this.prvKey),
                    sig.updateHex(this.asn1CSRInfo.getEncodedHex()),
                    this.hexSig = sig.sign(),
                    this.asn1Sig = new o.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var n = new o.asn1.DERSequence({
                        array: [this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = n.getEncodedHex(),
                    this.isModified = !1
                }
                ,
                this.getPEMString = function() {
                    var t = o.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(), "CERTIFICATE REQUEST");
                    return t
                }
                ,
                this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV)
                        return this.hTLV;
                    throw "not signed yet"
                }
                ,
                "undefined" != typeof t && "undefined" != typeof t.csrinfo && (this.asn1CSRInfo = t.csrinfo)
            }
            ,
            u.lang.extend(o.asn1.csr.CertificationRequest, o.asn1.ASN1Object),
            o.asn1.csr.CertificationRequestInfo = function(t) {
                o.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this),
                this._initialize = function() {
                    this.asn1Array = new Array,
                    this.asn1Version = new o.asn1.DERInteger({
                        int: 0
                    }),
                    this.asn1Subject = null,
                    this.asn1SubjPKey = null,
                    this.extensionsArray = new Array
                }
                ,
                this.setSubjectByParam = function(t) {
                    this.asn1Subject = new o.asn1.x509.X500Name(t)
                }
                ,
                this.setSubjectPublicKeyByGetKey = function(t) {
                    var e = St.getKey(t);
                    this.asn1SubjPKey = new o.asn1.x509.SubjectPublicKeyInfo(e)
                }
                ,
                this.appendExtensionByName = function(t, e) {
                    o.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray)
                }
                ,
                this.getEncodedHex = function() {
                    if (this.asn1Array = new Array,
                    this.asn1Array.push(this.asn1Version),
                    this.asn1Array.push(this.asn1Subject),
                    this.asn1Array.push(this.asn1SubjPKey),
                    this.extensionsArray.length > 0) {
                        var t = new o.asn1.DERSequence({
                            array: this.extensionsArray
                        })
                          , e = new o.asn1.DERSet({
                            array: [t]
                        })
                          , n = new o.asn1.DERSequence({
                            array: [new o.asn1.DERObjectIdentifier({
                                oid: "1.2.840.113549.1.9.14"
                            }), e]
                        })
                          , i = new o.asn1.DERTaggedObject({
                            explicit: !0,
                            tag: "a0",
                            obj: n
                        });
                        this.asn1Array.push(i)
                    } else {
                        i = new o.asn1.DERTaggedObject({
                            explicit: !1,
                            tag: "a0",
                            obj: new o.asn1.DERNull
                        });
                        this.asn1Array.push(i)
                    }
                    var r = new o.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = r.getEncodedHex(),
                    this.isModified = !1,
                    this.hTLV
                }
                ,
                this._initialize()
            }
            ,
            u.lang.extend(o.asn1.csr.CertificationRequestInfo, o.asn1.ASN1Object),
            o.asn1.csr.CSRUtil = new function() {}
            ,
            o.asn1.csr.CSRUtil.newCSRPEM = function(t) {
                var e = o.asn1.csr;
                if (void 0 === t.subject)
                    throw "parameter subject undefined";
                if (void 0 === t.sbjpubkey)
                    throw "parameter sbjpubkey undefined";
                if (void 0 === t.sigalg)
                    throw "parameter sigalg undefined";
                if (void 0 === t.sbjprvkey)
                    throw "parameter sbjpubkey undefined";
                var n = new e.CertificationRequestInfo;
                if (n.setSubjectByParam(t.subject),
                n.setSubjectPublicKeyByGetKey(t.sbjpubkey),
                void 0 !== t.ext && void 0 !== t.ext.length)
                    for (var i = 0; i < t.ext.length; i++)
                        for (key in t.ext[i])
                            n.appendExtensionByName(key, t.ext[i][key]);
                var r = new e.CertificationRequest({
                    csrinfo: n
                })
                  , s = St.getKey(t.sbjprvkey);
                r.sign(t.sigalg, s);
                var a = r.getPEMString();
                return a
            }
            ,
            o.asn1.csr.CSRUtil.getInfo = function(t) {
                var e = {
                    subject: {},
                    pubkey: {}
                };
                if (-1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST"))
                    throw "argument is not PEM file";
                var n = it.pemToHex(t, "CERTIFICATE REQUEST");
                return e.subject.hex = it.getDecendantHexTLVByNthList(n, 0, [0, 1]),
                e.subject.name = jt.hex2dn(e.subject.hex),
                e.pubkey.hex = it.getDecendantHexTLVByNthList(n, 0, [0, 2]),
                e.pubkey.obj = St.getKey(e.pubkey.hex, null, "pkcs8pub"),
                e
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.asn1 && o.asn1 || (o.asn1 = {}),
            "undefined" != typeof o.asn1.ocsp && o.asn1.ocsp || (o.asn1.ocsp = {}),
            o.asn1.ocsp.DEFAULT_HASH = "sha1",
            o.asn1.ocsp.CertID = function(t) {
                o.asn1.ocsp.CertID.superclass.constructor.call(this);
                var e = o.asn1
                  , n = o.asn1.x509;
                if (this.dHashAlg = null,
                this.dIssuerNameHash = null,
                this.dIssuerKeyHash = null,
                this.dSerialNumber = null,
                this.setByValue = function(t, i, r, s) {
                    void 0 === s && (s = o.asn1.ocsp.DEFAULT_HASH),
                    this.dHashAlg = new n.AlgorithmIdentifier({
                        name: s
                    }),
                    this.dIssuerNameHash = new e.DEROctetString({
                        hex: t
                    }),
                    this.dIssuerKeyHash = new e.DEROctetString({
                        hex: i
                    }),
                    this.dSerialNumber = new e.DERInteger({
                        hex: r
                    })
                }
                ,
                this.setByCert = function(t, e, n) {
                    void 0 === n && (n = o.asn1.ocsp.DEFAULT_HASH);
                    var i = new jt;
                    i.readCertPEM(e);
                    var r = new jt;
                    r.readCertPEM(t);
                    var s = jt.getPublicKeyInfoPropOfCertPEM(t)
                      , a = s.keyhex
                      , h = i.getSerialNumberHex()
                      , u = o.crypto.Util.hashHex(r.getSubjectHex(), n)
                      , c = o.crypto.Util.hashHex(a, n);
                    this.setByValue(u, c, h, n),
                    this.hoge = i.getSerialNumberHex()
                }
                ,
                this.getEncodedHex = function() {
                    if (null === this.dHashAlg && null === this.dIssuerNameHash && null === this.dIssuerKeyHash && null === this.dSerialNumber)
                        throw "not yet set values";
                    var t = [this.dHashAlg, this.dIssuerNameHash, this.dIssuerKeyHash, this.dSerialNumber]
                      , n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" !== typeof t) {
                    var i = t;
                    if ("undefined" !== typeof i.issuerCert && "undefined" !== typeof i.subjectCert) {
                        var r = o.asn1.ocsp.DEFAULT_HASH;
                        "undefined" === typeof i.alg && (r = void 0),
                        this.setByCert(i.issuerCert, i.subjectCert, r)
                    } else {
                        if ("undefined" === typeof i.namehash || "undefined" === typeof i.keyhash || "undefined" === typeof i.serial)
                            throw "invalid constructor arguments";
                        r = o.asn1.ocsp.DEFAULT_HASH;
                        "undefined" === typeof i.alg && (r = void 0),
                        this.setByValue(i.namehash, i.keyhash, i.serial, r)
                    }
                }
            }
            ,
            u.lang.extend(o.asn1.ocsp.CertID, o.asn1.ASN1Object),
            o.asn1.ocsp.Request = function(t) {
                if (o.asn1.ocsp.Request.superclass.constructor.call(this),
                this.dReqCert = null,
                this.dExt = null,
                this.getEncodedHex = function() {
                    var t = [];
                    if (null === this.dReqCert)
                        throw "reqCert not set";
                    t.push(this.dReqCert);
                    var e = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.hTLV = e.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" !== typeof t) {
                    var e = new o.asn1.ocsp.CertID(t);
                    this.dReqCert = e
                }
            }
            ,
            u.lang.extend(o.asn1.ocsp.Request, o.asn1.ASN1Object),
            o.asn1.ocsp.TBSRequest = function(t) {
                o.asn1.ocsp.TBSRequest.superclass.constructor.call(this),
                this.version = 0,
                this.dRequestorName = null,
                this.dRequestList = [],
                this.dRequestExt = null,
                this.setRequestListByParam = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var i = new o.asn1.ocsp.Request(t[0]);
                        e.push(i)
                    }
                    this.dRequestList = e
                }
                ,
                this.getEncodedHex = function() {
                    var t = [];
                    if (0 !== this.version)
                        throw "not supported version: " + this.version;
                    if (null !== this.dRequestorName)
                        throw "requestorName not supported";
                    var e = new o.asn1.DERSequence({
                        array: this.dRequestList
                    });
                    if (t.push(e),
                    null !== this.dRequestExt)
                        throw "requestExtensions not supported";
                    var n = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" !== typeof t && "undefined" !== typeof t.reqList && this.setRequestListByParam(t.reqList)
            }
            ,
            u.lang.extend(o.asn1.ocsp.TBSRequest, o.asn1.ASN1Object),
            o.asn1.ocsp.OCSPRequest = function(t) {
                if (o.asn1.ocsp.OCSPRequest.superclass.constructor.call(this),
                this.dTbsRequest = null,
                this.dOptionalSignature = null,
                this.getEncodedHex = function() {
                    var t = [];
                    if (null === this.dTbsRequest)
                        throw "tbsRequest not set";
                    if (t.push(this.dTbsRequest),
                    null !== this.dOptionalSignature)
                        throw "optionalSignature not supported";
                    var e = new o.asn1.DERSequence({
                        array: t
                    });
                    return this.hTLV = e.getEncodedHex(),
                    this.hTLV
                }
                ,
                "undefined" !== typeof t && "undefined" !== typeof t.reqList) {
                    var e = new o.asn1.ocsp.TBSRequest(t);
                    this.dTbsRequest = e
                }
            }
            ,
            u.lang.extend(o.asn1.ocsp.OCSPRequest, o.asn1.ASN1Object),
            o.asn1.ocsp.OCSPUtil = {},
            o.asn1.ocsp.OCSPUtil.getRequestHex = function(t, e, n) {
                void 0 === n && (n = o.asn1.ocsp.DEFAULT_HASH);
                var i = {
                    alg: n,
                    issuerCert: t,
                    subjectCert: e
                }
                  , r = new o.asn1.ocsp.OCSPRequest({
                    reqList: [i]
                });
                return r.getEncodedHex()
            }
            ,
            o.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(t) {
                var e = {};
                try {
                    var n = it.getVbyList(t, 0, [0], "0a");
                    e.responseStatus = parseInt(n, 16)
                } catch (a) {}
                if (0 !== e.responseStatus)
                    return e;
                try {
                    var i = it.getDecendantIndexByNthList(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
                    "80" === t.substr(i, 2) ? e.certStatus = "good" : "a1" === t.substr(i, 2) ? (e.certStatus = "revoked",
                    e.revocationTime = lt(it.getDecendantHexVByNthList(t, i, [0]))) : "82" === t.substr(i, 2) && (e.certStatus = "unknown")
                } catch (a) {}
                try {
                    var r = it.getDecendantIndexByNthList(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
                    e.thisUpdate = lt(it.getHexOfV_AtObj(t, r))
                } catch (a) {}
                try {
                    var s = it.getDecendantIndexByNthList(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
                    "a0" === t.substr(s, 2) && (e.nextUpdate = lt(it.getDecendantHexVByNthList(t, s, [0])))
                } catch (a) {}
                return e
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.lang && o.lang || (o.lang = {}),
            o.lang.String = function() {}
            ,
            "function" === typeof t ? (et = function(e) {
                return at(new t(e,"utf8").toString("base64"))
            }
            ,
            nt = function(e) {
                return new t(ot(e),"base64").toString("utf8")
            }
            ) : (et = function(t) {
                return ht(pt(vt(t)))
            }
            ,
            nt = function(t) {
                return decodeURIComponent(yt(ut(t)))
            }
            ),
            o.lang.String.isInteger = function(t) {
                return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/)
            }
            ,
            o.lang.String.isHex = function(t) {
                return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
            }
            ,
            o.lang.String.isBase64 = function(t) {
                return t = t.replace(/\s+/g, ""),
                !(!t.match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0)
            }
            ,
            o.lang.String.isBase64URL = function(t) {
                return !t.match(/[+/=]/) && (t = ot(t),
                o.lang.String.isBase64(t))
            }
            ,
            o.lang.String.isIntegerArray = function(t) {
                return t = t.replace(/\s+/g, ""),
                !!t.match(/^\[[0-9,]+\]$/)
            }
            ;
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.crypto && o.crypto || (o.crypto = {}),
            o.crypto.Util = new function() {
                this.DIGESTINFOHEAD = {
                    sha1: "3021300906052b0e03021a05000414",
                    sha224: "302d300d06096086480165030402040500041c",
                    sha256: "3031300d060960864801650304020105000420",
                    sha384: "3041300d060960864801650304020205000430",
                    sha512: "3051300d060960864801650304020305000440",
                    md2: "3020300c06082a864886f70d020205000410",
                    md5: "3020300c06082a864886f70d020505000410",
                    ripemd160: "3021300906052b2403020105000414"
                },
                this.DEFAULTPROVIDER = {
                    md5: "cryptojs",
                    sha1: "cryptojs",
                    sha224: "cryptojs",
                    sha256: "cryptojs",
                    sha384: "cryptojs",
                    sha512: "cryptojs",
                    ripemd160: "cryptojs",
                    hmacmd5: "cryptojs",
                    hmacsha1: "cryptojs",
                    hmacsha224: "cryptojs",
                    hmacsha256: "cryptojs",
                    hmacsha384: "cryptojs",
                    hmacsha512: "cryptojs",
                    hmacripemd160: "cryptojs",
                    MD5withRSA: "cryptojs/jsrsa",
                    SHA1withRSA: "cryptojs/jsrsa",
                    SHA224withRSA: "cryptojs/jsrsa",
                    SHA256withRSA: "cryptojs/jsrsa",
                    SHA384withRSA: "cryptojs/jsrsa",
                    SHA512withRSA: "cryptojs/jsrsa",
                    RIPEMD160withRSA: "cryptojs/jsrsa",
                    MD5withECDSA: "cryptojs/jsrsa",
                    SHA1withECDSA: "cryptojs/jsrsa",
                    SHA224withECDSA: "cryptojs/jsrsa",
                    SHA256withECDSA: "cryptojs/jsrsa",
                    SHA384withECDSA: "cryptojs/jsrsa",
                    SHA512withECDSA: "cryptojs/jsrsa",
                    RIPEMD160withECDSA: "cryptojs/jsrsa",
                    SHA1withDSA: "cryptojs/jsrsa",
                    SHA224withDSA: "cryptojs/jsrsa",
                    SHA256withDSA: "cryptojs/jsrsa",
                    MD5withRSAandMGF1: "cryptojs/jsrsa",
                    SHA1withRSAandMGF1: "cryptojs/jsrsa",
                    SHA224withRSAandMGF1: "cryptojs/jsrsa",
                    SHA256withRSAandMGF1: "cryptojs/jsrsa",
                    SHA384withRSAandMGF1: "cryptojs/jsrsa",
                    SHA512withRSAandMGF1: "cryptojs/jsrsa",
                    RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
                },
                this.CRYPTOJSMESSAGEDIGESTNAME = {
                    md5: c.algo.MD5,
                    sha1: c.algo.SHA1,
                    sha224: c.algo.SHA224,
                    sha256: c.algo.SHA256,
                    sha384: c.algo.SHA384,
                    sha512: c.algo.SHA512,
                    ripemd160: c.algo.RIPEMD160
                },
                this.getDigestInfoHex = function(t, e) {
                    if ("undefined" == typeof this.DIGESTINFOHEAD[e])
                        throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
                    return this.DIGESTINFOHEAD[e] + t
                }
                ,
                this.getPaddedDigestInfoHex = function(t, e, n) {
                    var i = this.getDigestInfoHex(t, e)
                      , r = n / 4;
                    if (i.length + 22 > r)
                        throw "key is too short for SigAlg: keylen=" + n + "," + e;
                    for (var s = "0001", a = "00" + i, o = "", h = r - s.length - a.length, u = 0; u < h; u += 2)
                        o += "ff";
                    var c = s + o + a;
                    return c
                }
                ,
                this.hashString = function(t, e) {
                    var n = new o.crypto.MessageDigest({
                        alg: e
                    });
                    return n.digestString(t)
                }
                ,
                this.hashHex = function(t, e) {
                    var n = new o.crypto.MessageDigest({
                        alg: e
                    });
                    return n.digestHex(t)
                }
                ,
                this.sha1 = function(t) {
                    var e = new o.crypto.MessageDigest({
                        alg: "sha1",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }
                ,
                this.sha256 = function(t) {
                    var e = new o.crypto.MessageDigest({
                        alg: "sha256",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }
                ,
                this.sha256Hex = function(t) {
                    var e = new o.crypto.MessageDigest({
                        alg: "sha256",
                        prov: "cryptojs"
                    });
                    return e.digestHex(t)
                }
                ,
                this.sha512 = function(t) {
                    var e = new o.crypto.MessageDigest({
                        alg: "sha512",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }
                ,
                this.sha512Hex = function(t) {
                    var e = new o.crypto.MessageDigest({
                        alg: "sha512",
                        prov: "cryptojs"
                    });
                    return e.digestHex(t)
                }
            }
            ,
            o.crypto.Util.md5 = function(t) {
                var e = new o.crypto.MessageDigest({
                    alg: "md5",
                    prov: "cryptojs"
                });
                return e.digestString(t)
            }
            ,
            o.crypto.Util.ripemd160 = function(t) {
                var e = new o.crypto.MessageDigest({
                    alg: "ripemd160",
                    prov: "cryptojs"
                });
                return e.digestString(t)
            }
            ,
            o.crypto.Util.SECURERANDOMGEN = new W,
            o.crypto.Util.getRandomHexOfNbytes = function(t) {
                var e = new Array(t);
                return o.crypto.Util.SECURERANDOMGEN.nextBytes(e),
                rt(e)
            }
            ,
            o.crypto.Util.getRandomBigIntegerOfNbytes = function(t) {
                return new p(o.crypto.Util.getRandomHexOfNbytes(t),16)
            }
            ,
            o.crypto.Util.getRandomHexOfNbits = function(t) {
                var e = t % 8
                  , n = (t - e) / 8
                  , i = new Array(n + 1);
                return o.crypto.Util.SECURERANDOMGEN.nextBytes(i),
                i[0] = (255 << e & 255 ^ 255) & i[0],
                rt(i)
            }
            ,
            o.crypto.Util.getRandomBigIntegerOfNbits = function(t) {
                return new p(o.crypto.Util.getRandomHexOfNbits(t),16)
            }
            ,
            o.crypto.Util.getRandomBigIntegerZeroToMax = function(t) {
                var e = t.bitLength();
                while (1) {
                    var n = o.crypto.Util.getRandomBigIntegerOfNbits(e);
                    if (-1 != t.compareTo(n))
                        return n
                }
            }
            ,
            o.crypto.Util.getRandomBigIntegerMinToMax = function(t, e) {
                var n = t.compareTo(e);
                if (1 == n)
                    throw "biMin is greater than biMax";
                if (0 == n)
                    return t;
                var i = e.subtract(t)
                  , r = o.crypto.Util.getRandomBigIntegerZeroToMax(i);
                return r.add(t)
            }
            ,
            o.crypto.MessageDigest = function(t) {
                this.setAlgAndProvider = function(t, e) {
                    if (t = o.crypto.MessageDigest.getCanonicalAlgName(t),
                    null !== t && void 0 === e && (e = o.crypto.Util.DEFAULTPROVIDER[t]),
                    -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
                        try {
                            this.md = o.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()
                        } catch (n) {
                            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + n
                        }
                        this.updateString = function(t) {
                            this.md.update(t)
                        }
                        ,
                        this.updateHex = function(t) {
                            var e = c.enc.Hex.parse(t);
                            this.md.update(e)
                        }
                        ,
                        this.digest = function() {
                            var t = this.md.finalize();
                            return t.toString(c.enc.Hex)
                        }
                        ,
                        this.digestString = function(t) {
                            return this.updateString(t),
                            this.digest()
                        }
                        ,
                        this.digestHex = function(t) {
                            return this.updateHex(t),
                            this.digest()
                        }
                    }
                    if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
                        try {
                            this.md = new sjcl.hash.sha256
                        } catch (n) {
                            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + n
                        }
                        this.updateString = function(t) {
                            this.md.update(t)
                        }
                        ,
                        this.updateHex = function(t) {
                            var e = sjcl.codec.hex.toBits(t);
                            this.md.update(e)
                        }
                        ,
                        this.digest = function() {
                            var t = this.md.finalize();
                            return sjcl.codec.hex.fromBits(t)
                        }
                        ,
                        this.digestString = function(t) {
                            return this.updateString(t),
                            this.digest()
                        }
                        ,
                        this.digestHex = function(t) {
                            return this.updateHex(t),
                            this.digest()
                        }
                    }
                }
                ,
                this.updateString = function(t) {
                    throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }
                ,
                this.updateHex = function(t) {
                    throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }
                ,
                this.digest = function() {
                    throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName
                }
                ,
                this.digestString = function(t) {
                    throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }
                ,
                this.digestHex = function(t) {
                    throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }
                ,
                void 0 !== t && void 0 !== t.alg && (this.algName = t.alg,
                void 0 === t.prov && (this.provName = o.crypto.Util.DEFAULTPROVIDER[this.algName]),
                this.setAlgAndProvider(this.algName, this.provName))
            }
            ,
            o.crypto.MessageDigest.getCanonicalAlgName = function(t) {
                return "string" === typeof t && (t = t.toLowerCase(),
                t = t.replace(/-/, "")),
                t
            }
            ,
            o.crypto.MessageDigest.getHashLength = function(t) {
                var e = o.crypto.MessageDigest
                  , n = e.getCanonicalAlgName(t);
                if (void 0 === e.HASHLENGTH[n])
                    throw "not supported algorithm: " + t;
                return e.HASHLENGTH[n]
            }
            ,
            o.crypto.MessageDigest.HASHLENGTH = {
                md5: 16,
                sha1: 20,
                sha224: 28,
                sha256: 32,
                sha384: 48,
                sha512: 64,
                ripemd160: 20
            },
            o.crypto.Mac = function(t) {
                this.setAlgAndProvider = function(t, e) {
                    if (t = t.toLowerCase(),
                    null == t && (t = "hmacsha1"),
                    t = t.toLowerCase(),
                    "hmac" != t.substr(0, 4))
                        throw "setAlgAndProvider unsupported HMAC alg: " + t;
                    void 0 === e && (e = o.crypto.Util.DEFAULTPROVIDER[t]),
                    this.algProv = t + "/" + e;
                    var n = t.substr(4);
                    if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(n) && "cryptojs" == e) {
                        try {
                            var i = o.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[n];
                            this.mac = c.algo.HMAC.create(i, this.pass)
                        } catch (h) {
                            throw "setAlgAndProvider hash alg set fail hashAlg=" + n + "/" + h
                        }
                        this.updateString = function(t) {
                            this.mac.update(t)
                        }
                        ,
                        this.updateHex = function(t) {
                            var e = c.enc.Hex.parse(t);
                            this.mac.update(e)
                        }
                        ,
                        this.doFinal = function() {
                            var t = this.mac.finalize();
                            return t.toString(c.enc.Hex)
                        }
                        ,
                        this.doFinalString = function(t) {
                            return this.updateString(t),
                            this.doFinal()
                        }
                        ,
                        this.doFinalHex = function(t) {
                            return this.updateHex(t),
                            this.doFinal()
                        }
                    }
                }
                ,
                this.updateString = function(t) {
                    throw "updateString(str) not supported for this alg/prov: " + this.algProv
                }
                ,
                this.updateHex = function(t) {
                    throw "updateHex(hex) not supported for this alg/prov: " + this.algProv
                }
                ,
                this.doFinal = function() {
                    throw "digest() not supported for this alg/prov: " + this.algProv
                }
                ,
                this.doFinalString = function(t) {
                    throw "digestString(str) not supported for this alg/prov: " + this.algProv
                }
                ,
                this.doFinalHex = function(t) {
                    throw "digestHex(hex) not supported for this alg/prov: " + this.algProv
                }
                ,
                this.setPassword = function(t) {
                    if ("string" == typeof t) {
                        var e = t;
                        return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = dt(t)),
                        void (this.pass = c.enc.Hex.parse(e))
                    }
                    if ("object" != (0,
                    r.default)(t))
                        throw "KJUR.crypto.Mac unsupported password type: " + t;
                    e = null;
                    if (void 0 !== t.hex) {
                        if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
                            throw "Mac: wrong hex password: " + t.hex;
                        e = t.hex
                    }
                    if (void 0 !== t.utf8 && (e = ct(t.utf8)),
                    void 0 !== t.rstr && (e = dt(t.rstr)),
                    void 0 !== t.b64 && (e = g(t.b64)),
                    void 0 !== t.b64u && (e = ut(t.b64u)),
                    null == e)
                        throw "KJUR.crypto.Mac unsupported password type: " + t;
                    this.pass = c.enc.Hex.parse(e)
                }
                ,
                void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass),
                void 0 !== t.alg && (this.algName = t.alg,
                void 0 === t.prov && (this.provName = o.crypto.Util.DEFAULTPROVIDER[this.algName]),
                this.setAlgAndProvider(this.algName, this.provName)))
            }
            ,
            o.crypto.Signature = function(t) {
                var e = null;
                if (this._setAlgNames = function() {
                    var t = this.algName.match(/^(.+)with(.+)$/);
                    t && (this.mdAlgName = t[1].toLowerCase(),
                    this.pubkeyAlgName = t[2].toLowerCase())
                }
                ,
                this._zeroPaddingOfSignature = function(t, e) {
                    for (var n = "", i = e / 4 - t.length, r = 0; r < i; r++)
                        n += "0";
                    return n + t
                }
                ,
                this.setAlgAndProvider = function(t, e) {
                    if (this._setAlgNames(),
                    "cryptojs/jsrsa" != e)
                        throw "provider not supported: " + e;
                    if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
                        try {
                            this.md = new o.crypto.MessageDigest({
                                alg: this.mdAlgName
                            })
                        } catch (n) {
                            throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + n
                        }
                        this.init = function(t, e) {
                            var n = null;
                            try {
                                n = void 0 === e ? St.getKey(t) : St.getKey(t, e)
                            } catch (i) {
                                throw "init failed:" + i
                            }
                            if (!0 === n.isPrivate)
                                this.prvKey = n,
                                this.state = "SIGN";
                            else {
                                if (!0 !== n.isPublic)
                                    throw "init failed.:" + n;
                                this.pubKey = n,
                                this.state = "VERIFY"
                            }
                        }
                        ,
                        this.initSign = function(t) {
                            "string" == typeof t.ecprvhex && "string" == typeof t.eccurvename ? (this.ecprvhex = t.ecprvhex,
                            this.eccurvename = t.eccurvename) : this.prvKey = t,
                            this.state = "SIGN"
                        }
                        ,
                        this.initVerifyByPublicKey = function(t) {
                            "string" == typeof t.ecpubhex && "string" == typeof t.eccurvename ? (this.ecpubhex = t.ecpubhex,
                            this.eccurvename = t.eccurvename) : (t instanceof o.crypto.ECDSA || t instanceof Y) && (this.pubKey = t),
                            this.state = "VERIFY"
                        }
                        ,
                        this.initVerifyByCertificatePEM = function(t) {
                            var e = new jt;
                            e.readCertPEM(t),
                            this.pubKey = e.subjectPublicKeyRSA,
                            this.state = "VERIFY"
                        }
                        ,
                        this.updateString = function(t) {
                            this.md.updateString(t)
                        }
                        ,
                        this.updateHex = function(t) {
                            this.md.updateHex(t)
                        }
                        ,
                        this.sign = function() {
                            if (this.sHashHex = this.md.digest(),
                            "undefined" != typeof this.ecprvhex && "undefined" != typeof this.eccurvename) {
                                var t = new o.crypto.ECDSA({
                                    curve: this.eccurvename
                                });
                                this.hSign = t.signHex(this.sHashHex, this.ecprvhex)
                            } else if (this.prvKey instanceof Y && "rsaandmgf1" == this.pubkeyAlgName)
                                this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                            else if (this.prvKey instanceof Y && "rsa" == this.pubkeyAlgName)
                                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                            else if (this.prvKey instanceof o.crypto.ECDSA)
                                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                            else {
                                if (!(this.prvKey instanceof o.crypto.DSA))
                                    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex)
                            }
                            return this.hSign
                        }
                        ,
                        this.signString = function(t) {
                            return this.updateString(t),
                            this.sign()
                        }
                        ,
                        this.signHex = function(t) {
                            return this.updateHex(t),
                            this.sign()
                        }
                        ,
                        this.verify = function(t) {
                            if (this.sHashHex = this.md.digest(),
                            "undefined" != typeof this.ecpubhex && "undefined" != typeof this.eccurvename) {
                                var e = new o.crypto.ECDSA({
                                    curve: this.eccurvename
                                });
                                return e.verifyHex(this.sHashHex, t, this.ecpubhex)
                            }
                            if (this.pubKey instanceof Y && "rsaandmgf1" == this.pubkeyAlgName)
                                return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                            if (this.pubKey instanceof Y && "rsa" == this.pubkeyAlgName)
                                return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                            if (this.pubKey instanceof o.crypto.ECDSA)
                                return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                            if (this.pubKey instanceof o.crypto.DSA)
                                return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                            throw "Signature: unsupported public key alg: " + this.pubkeyAlgName
                        }
                    }
                }
                ,
                this.init = function(t, e) {
                    throw "init(key, pass) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.initVerifyByPublicKey = function(t) {
                    throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.initVerifyByCertificatePEM = function(t) {
                    throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.initSign = function(t) {
                    throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.updateString = function(t) {
                    throw "updateString(str) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.updateHex = function(t) {
                    throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.sign = function() {
                    throw "sign() not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.signString = function(t) {
                    throw "digestString(str) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.signHex = function(t) {
                    throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.verify = function(t) {
                    throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName
                }
                ,
                this.initParams = t,
                void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg,
                void 0 === t.prov ? this.provName = o.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov,
                this.algProvName = this.algName + ":" + this.provName,
                this.setAlgAndProvider(this.algName, this.provName),
                this._setAlgNames()),
                void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen),
                void 0 !== t.prvkeypem)) {
                    if (void 0 !== t.prvkeypas)
                        throw "both prvkeypem and prvkeypas parameters not supported";
                    try {
                        e = new Y;
                        e.readPrivateKeyFromPEMString(t.prvkeypem),
                        this.initSign(e)
                    } catch (n) {
                        throw "fatal error to load pem private key: " + n
                    }
                }
            }
            ,
            o.crypto.Cipher = function(t) {}
            ,
            o.crypto.Cipher.encrypt = function(t, e, n) {
                if (e instanceof Y && e.isPublic) {
                    var i = o.crypto.Cipher.getAlgByKeyAndName(e, n);
                    if ("RSA" === i)
                        return e.encrypt(t);
                    if ("RSAOAEP" === i)
                        return e.encryptOAEP(t, "sha1");
                    var r = i.match(/^RSAOAEP(\d+)$/);
                    if (null !== r)
                        return e.encryptOAEP(t, "sha" + r[1]);
                    throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + n
                }
                throw "Cipher.encrypt: unsupported key or algorithm"
            }
            ,
            o.crypto.Cipher.decrypt = function(t, e, n) {
                if (e instanceof Y && e.isPrivate) {
                    var i = o.crypto.Cipher.getAlgByKeyAndName(e, n);
                    if ("RSA" === i)
                        return e.decrypt(t);
                    if ("RSAOAEP" === i)
                        return e.decryptOAEP(t, "sha1");
                    var r = i.match(/^RSAOAEP(\d+)$/);
                    if (null !== r)
                        return e.decryptOAEP(t, "sha" + r[1]);
                    throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + n
                }
                throw "Cipher.decrypt: unsupported key or algorithm"
            }
            ,
            o.crypto.Cipher.getAlgByKeyAndName = function(t, e) {
                if (t instanceof Y) {
                    if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e))
                        return e;
                    if (null === e || void 0 === e)
                        return "RSA";
                    throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e
                }
                throw "getAlgByKeyAndName: not supported algorithm name: " + e
            }
            ,
            o.crypto.OID = new function() {
                this.oidhex2name = {
                    "2a864886f70d010101": "rsaEncryption",
                    "2a8648ce3d0201": "ecPublicKey",
                    "2a8648ce380401": "dsa",
                    "2a8648ce3d030107": "secp256r1",
                    "2b8104001f": "secp192k1",
                    "2b81040021": "secp224r1",
                    "2b8104000a": "secp256k1",
                    "2b81040023": "secp521r1",
                    "2b81040022": "secp384r1",
                    "2a8648ce380403": "SHA1withDSA",
                    "608648016503040301": "SHA224withDSA",
                    "608648016503040302": "SHA256withDSA"
                }
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.crypto && o.crypto || (o.crypto = {}),
            o.crypto.ECDSA = function(t) {
                var e = new W;
                this.type = "EC",
                this.isPrivate = !1,
                this.isPublic = !1,
                this.getBigRandom = function(t) {
                    return new p(t.bitLength(),e).mod(t.subtract(p.ONE)).add(p.ONE)
                }
                ,
                this.setNamedCurve = function(t) {
                    this.ecparams = o.crypto.ECParameterDB.getByName(t),
                    this.prvKeyHex = null,
                    this.pubKeyHex = null,
                    this.curveName = t
                }
                ,
                this.setPrivateKeyHex = function(t) {
                    this.isPrivate = !0,
                    this.prvKeyHex = t
                }
                ,
                this.setPublicKeyHex = function(t) {
                    this.isPublic = !0,
                    this.pubKeyHex = t
                }
                ,
                this.getPublicKeyXYHex = function() {
                    var t = this.pubKeyHex;
                    if ("04" !== t.substr(0, 2))
                        throw "this method supports uncompressed format(04) only";
                    var e = this.ecparams.keylen / 4;
                    if (t.length !== 2 + 2 * e)
                        throw "malformed public key hex length";
                    var n = {};
                    return n.x = t.substr(2, e),
                    n.y = t.substr(2 + e),
                    n
                }
                ,
                this.getShortNISTPCurveName = function() {
                    var t = this.curveName;
                    return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null
                }
                ,
                this.generateKeyPairHex = function() {
                    var t = this.ecparams.n
                      , e = this.getBigRandom(t)
                      , n = this.ecparams.G.multiply(e)
                      , i = n.getX().toBigInteger()
                      , r = n.getY().toBigInteger()
                      , s = this.ecparams.keylen / 4
                      , a = ("0000000000" + e.toString(16)).slice(-s)
                      , o = ("0000000000" + i.toString(16)).slice(-s)
                      , h = ("0000000000" + r.toString(16)).slice(-s)
                      , u = "04" + o + h;
                    return this.setPrivateKeyHex(a),
                    this.setPublicKeyHex(u),
                    {
                        ecprvhex: a,
                        ecpubhex: u
                    }
                }
                ,
                this.signWithMessageHash = function(t) {
                    return this.signHex(t, this.prvKeyHex)
                }
                ,
                this.signHex = function(t, e) {
                    var n = new p(e,16)
                      , i = this.ecparams.n
                      , r = new p(t,16);
                    do {
                        var s = this.getBigRandom(i)
                          , a = this.ecparams.G
                          , h = a.multiply(s)
                          , u = h.getX().toBigInteger().mod(i)
                    } while (u.compareTo(p.ZERO) <= 0);
                    var c = s.modInverse(i).multiply(r.add(n.multiply(u))).mod(i);
                    return o.crypto.ECDSA.biRSSigToASN1Sig(u, c)
                }
                ,
                this.sign = function(t, e) {
                    var n = e
                      , i = this.ecparams.n
                      , r = p.fromByteArrayUnsigned(t);
                    do {
                        var s = this.getBigRandom(i)
                          , a = this.ecparams.G
                          , o = a.multiply(s)
                          , h = o.getX().toBigInteger().mod(i)
                    } while (h.compareTo(p.ZERO) <= 0);
                    var u = s.modInverse(i).multiply(r.add(n.multiply(h))).mod(i);
                    return this.serializeSig(h, u)
                }
                ,
                this.verifyWithMessageHash = function(t, e) {
                    return this.verifyHex(t, e, this.pubKeyHex)
                }
                ,
                this.verifyHex = function(t, e, n) {
                    var i, r, s, a = o.crypto.ECDSA.parseSigHex(e);
                    i = a.r,
                    r = a.s,
                    s = Z.decodeFromHex(this.ecparams.curve, n);
                    var h = new p(t,16);
                    return this.verifyRaw(h, i, r, s)
                }
                ,
                this.verify = function(t, e, n) {
                    var i, s, a;
                    if (Bitcoin.Util.isArray(e)) {
                        var o = this.parseSig(e);
                        i = o.r,
                        s = o.s
                    } else {
                        if ("object" !== (0,
                        r.default)(e) || !e.r || !e.s)
                            throw "Invalid value for signature";
                        i = e.r,
                        s = e.s
                    }
                    if (n instanceof Z)
                        a = n;
                    else {
                        if (!Bitcoin.Util.isArray(n))
                            throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                        a = Z.decodeFrom(this.ecparams.curve, n)
                    }
                    var h = p.fromByteArrayUnsigned(t);
                    return this.verifyRaw(h, i, s, a)
                }
                ,
                this.verifyRaw = function(t, e, n, i) {
                    var r = this.ecparams.n
                      , s = this.ecparams.G;
                    if (e.compareTo(p.ONE) < 0 || e.compareTo(r) >= 0)
                        return !1;
                    if (n.compareTo(p.ONE) < 0 || n.compareTo(r) >= 0)
                        return !1;
                    var a = n.modInverse(r)
                      , o = t.multiply(a).mod(r)
                      , h = e.multiply(a).mod(r)
                      , u = s.multiply(o).add(i.multiply(h))
                      , c = u.getX().toBigInteger().mod(r);
                    return c.equals(e)
                }
                ,
                this.serializeSig = function(t, e) {
                    var n = t.toByteArraySigned()
                      , i = e.toByteArraySigned()
                      , r = [];
                    return r.push(2),
                    r.push(n.length),
                    r = r.concat(n),
                    r.push(2),
                    r.push(i.length),
                    r = r.concat(i),
                    r.unshift(r.length),
                    r.unshift(48),
                    r
                }
                ,
                this.parseSig = function(t) {
                    var e;
                    if (48 != t[0])
                        throw new Error("Signature not a valid DERSequence");
                    if (e = 2,
                    2 != t[e])
                        throw new Error("First element in signature must be a DERInteger");
                    var n = t.slice(e + 2, e + 2 + t[e + 1]);
                    if (e += 2 + t[e + 1],
                    2 != t[e])
                        throw new Error("Second element in signature must be a DERInteger");
                    var i = t.slice(e + 2, e + 2 + t[e + 1]);
                    e += 2 + t[e + 1];
                    var r = p.fromByteArrayUnsigned(n)
                      , s = p.fromByteArrayUnsigned(i);
                    return {
                        r: r,
                        s: s
                    }
                }
                ,
                this.parseSigCompact = function(t) {
                    if (65 !== t.length)
                        throw "Signature has the wrong length";
                    var e = t[0] - 27;
                    if (e < 0 || e > 7)
                        throw "Invalid signature type";
                    var n = this.ecparams.n
                      , i = p.fromByteArrayUnsigned(t.slice(1, 33)).mod(n)
                      , r = p.fromByteArrayUnsigned(t.slice(33, 65)).mod(n);
                    return {
                        r: i,
                        s: r,
                        i: e
                    }
                }
                ,
                this.readPKCS5PrvKeyHex = function(t) {
                    var e, n, i, r = it, s = o.crypto.ECDSA.getName, a = r.getVbyList;
                    if (!1 === r.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        e = a(t, 0, [2, 0], "06"),
                        n = a(t, 0, [1], "04");
                        try {
                            i = a(t, 0, [3, 0], "03").substr(2)
                        } catch (h) {}
                    } catch (h) {
                        throw "malformed PKCS#1/5 plain ECC private key"
                    }
                    if (this.curveName = s(e),
                    void 0 === this.curveName)
                        throw "unsupported curve name";
                    this.setNamedCurve(this.curveName),
                    this.setPublicKeyHex(i),
                    this.setPrivateKeyHex(n),
                    this.isPublic = !1
                }
                ,
                this.readPKCS8PrvKeyHex = function(t) {
                    var e, n, i, r = it, s = o.crypto.ECDSA.getName, a = r.getVbyList;
                    if (!1 === r.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        a(t, 0, [1, 0], "06"),
                        e = a(t, 0, [1, 1], "06"),
                        n = a(t, 0, [2, 0, 1], "04");
                        try {
                            i = a(t, 0, [2, 0, 2, 0], "03").substr(2)
                        } catch (h) {}
                    } catch (h) {
                        throw "malformed PKCS#8 plain ECC private key"
                    }
                    if (this.curveName = s(e),
                    void 0 === this.curveName)
                        throw "unsupported curve name";
                    this.setNamedCurve(this.curveName),
                    this.setPublicKeyHex(i),
                    this.setPrivateKeyHex(n),
                    this.isPublic = !1
                }
                ,
                this.readPKCS8PubKeyHex = function(t) {
                    var e, n, i = it, r = o.crypto.ECDSA.getName, s = i.getVbyList;
                    if (!1 === i.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        s(t, 0, [0, 0], "06"),
                        e = s(t, 0, [0, 1], "06"),
                        n = s(t, 0, [1], "03").substr(2)
                    } catch (a) {
                        throw "malformed PKCS#8 ECC public key"
                    }
                    if (this.curveName = r(e),
                    null === this.curveName)
                        throw "unsupported curve name";
                    this.setNamedCurve(this.curveName),
                    this.setPublicKeyHex(n)
                }
                ,
                this.readCertPubKeyHex = function(t, e) {
                    5 !== e && (e = 6);
                    var n, i, r = it, s = o.crypto.ECDSA.getName, a = r.getVbyList;
                    if (!1 === r.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        n = a(t, 0, [0, e, 0, 1], "06"),
                        i = a(t, 0, [0, e, 1], "03").substr(2)
                    } catch (h) {
                        throw "malformed X.509 certificate ECC public key"
                    }
                    if (this.curveName = s(n),
                    null === this.curveName)
                        throw "unsupported curve name";
                    this.setNamedCurve(this.curveName),
                    this.setPublicKeyHex(i)
                }
                ,
                void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve),
                void 0 === this.curveName && (this.curveName = "secp256r1"),
                this.setNamedCurve(this.curveName),
                void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv),
                void 0 !== t.pub && this.setPublicKeyHex(t.pub))
            }
            ,
            o.crypto.ECDSA.parseSigHex = function(t) {
                var e = o.crypto.ECDSA.parseSigHexInHexRS(t)
                  , n = new p(e.r,16)
                  , i = new p(e.s,16);
                return {
                    r: n,
                    s: i
                }
            }
            ,
            o.crypto.ECDSA.parseSigHexInHexRS = function(t) {
                if ("30" != t.substr(0, 2))
                    throw "signature is not a ASN.1 sequence";
                var e = it.getPosArrayOfChildren_AtObj(t, 0);
                if (2 != e.length)
                    throw "number of signature ASN.1 sequence elements seem wrong";
                var n = e[0]
                  , i = e[1];
                if ("02" != t.substr(n, 2))
                    throw "1st item of sequene of signature is not ASN.1 integer";
                if ("02" != t.substr(i, 2))
                    throw "2nd item of sequene of signature is not ASN.1 integer";
                var r = it.getHexOfV_AtObj(t, n)
                  , s = it.getHexOfV_AtObj(t, i);
                return {
                    r: r,
                    s: s
                }
            }
            ,
            o.crypto.ECDSA.asn1SigToConcatSig = function(t) {
                var e = o.crypto.ECDSA.parseSigHexInHexRS(t)
                  , n = e.r
                  , i = e.s;
                if ("00" == n.substr(0, 2) && n.length / 2 * 8 % 128 == 8 && (n = n.substr(2)),
                "00" == i.substr(0, 2) && i.length / 2 * 8 % 128 == 8 && (i = i.substr(2)),
                n.length / 2 * 8 % 128 != 0)
                    throw "unknown ECDSA sig r length error";
                if (i.length / 2 * 8 % 128 != 0)
                    throw "unknown ECDSA sig s length error";
                return n + i
            }
            ,
            o.crypto.ECDSA.concatSigToASN1Sig = function(t) {
                if (t.length / 2 * 8 % 128 != 0)
                    throw "unknown ECDSA concatinated r-s sig  length error";
                var e = t.substr(0, t.length / 2)
                  , n = t.substr(t.length / 2);
                return o.crypto.ECDSA.hexRSSigToASN1Sig(e, n)
            }
            ,
            o.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
                var n = new p(t,16)
                  , i = new p(e,16);
                return o.crypto.ECDSA.biRSSigToASN1Sig(n, i)
            }
            ,
            o.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
                var n = new o.asn1.DERInteger({
                    bigint: t
                })
                  , i = new o.asn1.DERInteger({
                    bigint: e
                })
                  , r = new o.asn1.DERSequence({
                    array: [n, i]
                });
                return r.getEncodedHex()
            }
            ,
            o.crypto.ECDSA.getName = function(t) {
                return "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040022" === t ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : null
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.crypto && o.crypto || (o.crypto = {}),
            o.crypto.ECParameterDB = new function() {
                var t = {}
                  , e = {};
                function n(t) {
                    return new p(t,16)
                }
                this.getByName = function(n) {
                    var i = n;
                    if ("undefined" != typeof e[i] && (i = e[n]),
                    "undefined" != typeof t[i])
                        return t[i];
                    throw "unregistered EC curve name: " + i
                }
                ,
                this.regist = function(i, r, s, a, o, h, u, c, l, f, d, g) {
                    t[i] = {};
                    var p = n(s)
                      , y = n(a)
                      , v = n(o)
                      , m = n(h)
                      , S = n(u)
                      , b = new Q(p,y,v)
                      , x = b.decodePointHex("04" + c + l);
                    t[i]["name"] = i,
                    t[i]["keylen"] = r,
                    t[i]["curve"] = b,
                    t[i]["G"] = x,
                    t[i]["n"] = m,
                    t[i]["h"] = S,
                    t[i]["oid"] = d,
                    t[i]["info"] = g;
                    for (var A = 0; A < f.length; A++)
                        e[f[A]] = i
                }
            }
            ,
            o.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"),
            o.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"),
            o.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"),
            o.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []),
            o.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []),
            o.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []),
            o.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []),
            o.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]),
            o.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]),
            o.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]),
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.crypto && o.crypto || (o.crypto = {}),
            o.crypto.DSA = function() {
                this.p = null,
                this.q = null,
                this.g = null,
                this.y = null,
                this.x = null,
                this.type = "DSA",
                this.isPrivate = !1,
                this.isPublic = !1,
                this.setPrivate = function(t, e, n, i, r) {
                    this.isPrivate = !0,
                    this.p = t,
                    this.q = e,
                    this.g = n,
                    this.y = i,
                    this.x = r
                }
                ,
                this.setPrivateHex = function(t, e, n, i, r) {
                    var s, a, o, h, u;
                    s = new p(t,16),
                    a = new p(e,16),
                    o = new p(n,16),
                    h = "string" === typeof i && i.length > 1 ? new p(i,16) : null,
                    u = new p(r,16),
                    this.setPrivate(s, a, o, h, u)
                }
                ,
                this.setPublic = function(t, e, n, i) {
                    this.isPublic = !0,
                    this.p = t,
                    this.q = e,
                    this.g = n,
                    this.y = i,
                    this.x = null
                }
                ,
                this.setPublicHex = function(t, e, n, i) {
                    var r, s, a, o;
                    r = new p(t,16),
                    s = new p(e,16),
                    a = new p(n,16),
                    o = new p(i,16),
                    this.setPublic(r, s, a, o)
                }
                ,
                this.signWithMessageHash = function(t) {
                    var e = this.p
                      , n = this.q
                      , i = this.g
                      , r = (this.y,
                    this.x)
                      , s = o.crypto.Util.getRandomBigIntegerMinToMax(p.ONE.add(p.ONE), n.subtract(p.ONE))
                      , a = t.substr(0, n.bitLength() / 4)
                      , h = new p(a,16)
                      , u = i.modPow(s, e).mod(n)
                      , c = s.modInverse(n).multiply(h.add(r.multiply(u))).mod(n)
                      , l = o.asn1.ASN1Util.jsonToASN1HEX({
                        seq: [{
                            int: {
                                bigint: u
                            }
                        }, {
                            int: {
                                bigint: c
                            }
                        }]
                    });
                    return l
                }
                ,
                this.verifyWithMessageHash = function(t, e) {
                    var n = this.p
                      , i = this.q
                      , r = this.g
                      , s = this.y
                      , a = this.parseASN1Signature(e)
                      , o = a[0]
                      , h = a[1]
                      , u = t.substr(0, i.bitLength() / 4)
                      , c = new p(u,16);
                    if (p.ZERO.compareTo(o) > 0 || o.compareTo(i) > 0)
                        throw "invalid DSA signature";
                    if (p.ZERO.compareTo(h) > 0 || h.compareTo(i) > 0)
                        throw "invalid DSA signature";
                    var l = h.modInverse(i)
                      , f = c.multiply(l).mod(i)
                      , d = o.multiply(l).mod(i)
                      , g = r.modPow(f, n).multiply(s.modPow(d, n)).mod(n).mod(i);
                    return 0 == g.compareTo(o)
                }
                ,
                this.parseASN1Signature = function(t) {
                    try {
                        var e = new p(it.getVbyList(t, 0, [0], "02"),16)
                          , n = new p(it.getVbyList(t, 0, [1], "02"),16);
                        return [e, n]
                    } catch (i) {
                        throw "malformed ASN.1 DSA signature"
                    }
                }
                ,
                this.readPKCS5PrvKeyHex = function(t) {
                    var e, n, i, r, s, a = it, o = a.getVbyList;
                    if (!1 === a.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        e = o(t, 0, [1], "02"),
                        n = o(t, 0, [2], "02"),
                        i = o(t, 0, [3], "02"),
                        r = o(t, 0, [4], "02"),
                        s = o(t, 0, [5], "02")
                    } catch (h) {
                        throw console.log("EXCEPTION:" + h),
                        "malformed PKCS#1/5 plain DSA private key"
                    }
                    this.setPrivateHex(e, n, i, r, s)
                }
                ,
                this.readPKCS8PrvKeyHex = function(t) {
                    var e, n, i, r, s = it, a = s.getVbyList;
                    if (!1 === s.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        e = a(t, 0, [1, 1, 0], "02"),
                        n = a(t, 0, [1, 1, 1], "02"),
                        i = a(t, 0, [1, 1, 2], "02"),
                        r = a(t, 0, [2, 0], "02")
                    } catch (o) {
                        throw console.log("EXCEPTION:" + o),
                        "malformed PKCS#8 plain DSA private key"
                    }
                    this.setPrivateHex(e, n, i, null, r)
                }
                ,
                this.readPKCS8PubKeyHex = function(t) {
                    var e, n, i, r, s = it, a = s.getVbyList;
                    if (!1 === s.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        e = a(t, 0, [0, 1, 0], "02"),
                        n = a(t, 0, [0, 1, 1], "02"),
                        i = a(t, 0, [0, 1, 2], "02"),
                        r = a(t, 0, [1, 0], "02")
                    } catch (o) {
                        throw console.log("EXCEPTION:" + o),
                        "malformed PKCS#8 DSA public key"
                    }
                    this.setPublicHex(e, n, i, r)
                }
                ,
                this.readCertPubKeyHex = function(t, e) {
                    var n, i, r, s;
                    5 !== e && (e = 6);
                    var a = it
                      , o = a.getVbyList;
                    if (!1 === a.isASN1HEX(t))
                        throw "not ASN.1 hex string";
                    try {
                        n = o(t, 0, [0, e, 0, 1, 0], "02"),
                        i = o(t, 0, [0, e, 0, 1, 1], "02"),
                        r = o(t, 0, [0, e, 0, 1, 2], "02"),
                        s = o(t, 0, [0, e, 1, 0], "02")
                    } catch (h) {
                        throw console.log("EXCEPTION:" + h),
                        "malformed X.509 certificate DSA public key"
                    }
                    this.setPublicHex(n, i, r, s)
                }
            }
            ;
            var mt = function() {
                var t = function(t, n, i) {
                    return e(c.AES, t, n, i)
                }
                  , e = function(t, e, n, i) {
                    var r = c.enc.Hex.parse(e)
                      , s = c.enc.Hex.parse(n)
                      , a = c.enc.Hex.parse(i)
                      , o = {};
                    o.key = s,
                    o.iv = a,
                    o.ciphertext = r;
                    var h = t.decrypt(o, s, {
                        iv: a
                    });
                    return c.enc.Hex.stringify(h)
                }
                  , n = function(t, e, n) {
                    return i(c.AES, t, e, n)
                }
                  , i = function(t, e, n, i) {
                    var r = c.enc.Hex.parse(e)
                      , s = c.enc.Hex.parse(n)
                      , a = c.enc.Hex.parse(i)
                      , o = t.encrypt(r, s, {
                        iv: a
                    })
                      , h = c.enc.Hex.parse(o.toString())
                      , u = c.enc.Base64.stringify(h);
                    return u
                }
                  , r = {
                    "AES-256-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 32,
                        ivlen: 16
                    },
                    "AES-192-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 24,
                        ivlen: 16
                    },
                    "AES-128-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 16,
                        ivlen: 16
                    },
                    "DES-EDE3-CBC": {
                        proc: function(t, n, i) {
                            return e(c.TripleDES, t, n, i)
                        },
                        eproc: function(t, e, n) {
                            return i(c.TripleDES, t, e, n)
                        },
                        keylen: 24,
                        ivlen: 8
                    }
                }
                  , s = function(t) {
                    var e = {}
                      , n = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"));
                    n && (e.cipher = n[1],
                    e.ivsalt = n[2]);
                    var i = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
                    i && (e.type = i[1]);
                    var r = -1
                      , s = 0;
                    -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"),
                    s = 2),
                    -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"),
                    s = 1);
                    var a = t.indexOf("-----END");
                    if (-1 != r && -1 != a) {
                        var o = t.substring(r + 2 * s, a - s);
                        o = o.replace(/\s+/g, ""),
                        e.data = o
                    }
                    return e
                }
                  , a = function(t, e, n) {
                    for (var i = n.substring(0, 16), s = c.enc.Hex.parse(i), a = c.enc.Utf8.parse(e), o = r[t]["keylen"] + r[t]["ivlen"], h = "", u = null; ; ) {
                        var l = c.algo.MD5.create();
                        if (null != u && l.update(u),
                        l.update(a),
                        l.update(s),
                        u = l.finalize(),
                        h += c.enc.Hex.stringify(u),
                        h.length >= 2 * o)
                            break
                    }
                    var f = {};
                    return f.keyhex = h.substr(0, 2 * r[t]["keylen"]),
                    f.ivhex = h.substr(2 * r[t]["keylen"], 2 * r[t]["ivlen"]),
                    f
                }
                  , u = function(t, e, n, i) {
                    var s = c.enc.Base64.parse(t)
                      , a = c.enc.Hex.stringify(s)
                      , o = r[e]["proc"]
                      , h = o(a, n, i);
                    return h
                };
                return {
                    version: "1.0.5",
                    getHexFromPEM: function(t, e) {
                        return it.pemToHex(t, e)
                    },
                    getDecryptedKeyHexByKeyIV: function(t, e, n, i) {
                        var s = function(t) {
                            return r[t]["proc"]
                        }(e);
                        return s(t, n, i)
                    },
                    parsePKCS5PEM: function(t) {
                        return s(t)
                    },
                    getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, n) {
                        return a(t, e, n)
                    },
                    decryptKeyB64: function(t, e, n, i) {
                        return u(t, e, n, i)
                    },
                    getDecryptedKeyHex: function(t, e) {
                        var n = s(t)
                          , i = (n.type,
                        n.cipher)
                          , r = n.ivsalt
                          , o = n.data
                          , h = a(i, e, r)
                          , c = h.keyhex
                          , l = u(o, i, c, r);
                        return l
                    },
                    getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
                        var n = this.getDecryptedKeyHex(t, e)
                          , i = new Y;
                        return i.readPrivateKeyFromASN1HexString(n),
                        i
                    },
                    getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, n, i) {
                        if ("undefined" != typeof n && null != n || (n = "AES-256-CBC"),
                        "undefined" == typeof r[n])
                            throw "PKCS5PKEY unsupported algorithm: " + n;
                        if ("undefined" == typeof i || null == i) {
                            var s = r[n]["ivlen"]
                              , o = function(t) {
                                var e = c.lib.WordArray.random(t)
                                  , n = c.enc.Hex.stringify(e);
                                return n
                            }(s);
                            i = o.toUpperCase()
                        }
                        var h = a(n, e, i)
                          , u = h.keyhex
                          , l = function(t, e, n, i) {
                            var s = r[e]["eproc"]
                              , a = s(t, n, i);
                            return a
                        }(t, n, u, i)
                          , f = l.replace(/(.{64})/g, "$1\r\n")
                          , d = "-----BEGIN RSA PRIVATE KEY-----\r\n";
                        return d += "Proc-Type: 4,ENCRYPTED\r\n",
                        d += "DEK-Info: " + n + "," + i + "\r\n",
                        d += "\r\n",
                        d += f,
                        d += "\r\n-----END RSA PRIVATE KEY-----\r\n",
                        d
                    },
                    getEncryptedPKCS5PEMFromRSAKey: function(t, e, n, i) {
                        var r = new o.asn1.DERInteger({
                            int: 0
                        })
                          , s = new o.asn1.DERInteger({
                            bigint: t.n
                        })
                          , a = new o.asn1.DERInteger({
                            int: t.e
                        })
                          , h = new o.asn1.DERInteger({
                            bigint: t.d
                        })
                          , u = new o.asn1.DERInteger({
                            bigint: t.p
                        })
                          , c = new o.asn1.DERInteger({
                            bigint: t.q
                        })
                          , l = new o.asn1.DERInteger({
                            bigint: t.dmp1
                        })
                          , f = new o.asn1.DERInteger({
                            bigint: t.dmq1
                        })
                          , d = new o.asn1.DERInteger({
                            bigint: t.coeff
                        })
                          , g = new o.asn1.DERSequence({
                            array: [r, s, a, h, u, c, l, f, d]
                        })
                          , p = g.getEncodedHex();
                        return this.getEncryptedPKCS5PEMFromPrvKeyHex(p, e, n, i)
                    },
                    newEncryptedPKCS5PEM: function(t, e, n, i) {
                        "undefined" != typeof e && null != e || (e = 1024),
                        "undefined" != typeof n && null != n || (n = "10001");
                        var r = new Y;
                        r.generate(e, n);
                        var s = null;
                        return s = "undefined" == typeof i || null == i ? this.getEncryptedPKCS5PEMFromRSAKey(pkey, t) : this.getEncryptedPKCS5PEMFromRSAKey(pkey, t, i),
                        s
                    },
                    getRSAKeyFromPlainPKCS8PEM: function(t) {
                        if (t.match(/ENCRYPTED/))
                            throw "pem shall be not ENCRYPTED";
                        var e = it.pemToHex(t, "PRIVATE KEY")
                          , n = this.getRSAKeyFromPlainPKCS8Hex(e);
                        return n
                    },
                    getRSAKeyFromPlainPKCS8Hex: function(t) {
                        var e = new Y;
                        return e.readPKCS8PrvKeyHex(t),
                        e
                    },
                    parseHexOfEncryptedPKCS8: function(t) {
                        var e = {}
                          , n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "malformed format: SEQUENCE(0).items != 2: " + n.length;
                        e.ciphertext = it.getHexOfV_AtObj(t, n[1]);
                        var i = it.getPosArrayOfChildren_AtObj(t, n[0]);
                        if (2 != i.length)
                            throw "malformed format: SEQUENCE(0.0).items != 2: " + i.length;
                        if ("2a864886f70d01050d" != it.getHexOfV_AtObj(t, i[0]))
                            throw "this only supports pkcs5PBES2";
                        var r = it.getPosArrayOfChildren_AtObj(t, i[1]);
                        if (2 != i.length)
                            throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
                        var s = it.getPosArrayOfChildren_AtObj(t, r[1]);
                        if (2 != s.length)
                            throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
                        if ("2a864886f70d0307" != it.getHexOfV_AtObj(t, s[0]))
                            throw "this only supports TripleDES";
                        e.encryptionSchemeAlg = "TripleDES",
                        e.encryptionSchemeIV = it.getHexOfV_AtObj(t, s[1]);
                        var a = it.getPosArrayOfChildren_AtObj(t, r[0]);
                        if (2 != a.length)
                            throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
                        if ("2a864886f70d01050c" != it.getHexOfV_AtObj(t, a[0]))
                            throw "this only supports pkcs5PBKDF2";
                        var o = it.getPosArrayOfChildren_AtObj(t, a[1]);
                        if (o.length < 2)
                            throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
                        e.pbkdf2Salt = it.getHexOfV_AtObj(t, o[0]);
                        var h = it.getHexOfV_AtObj(t, o[1]);
                        try {
                            e.pbkdf2Iter = parseInt(h, 16)
                        } catch (u) {
                            throw "malformed format pbkdf2Iter: " + h
                        }
                        return e
                    },
                    getPBKDF2KeyHexFromParam: function(t, e) {
                        var n = c.enc.Hex.parse(t.pbkdf2Salt)
                          , i = t.pbkdf2Iter
                          , r = c.PBKDF2(e, n, {
                            keySize: 6,
                            iterations: i
                        })
                          , s = c.enc.Hex.stringify(r);
                        return s
                    },
                    getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
                        var n = it.pemToHex(t, "ENCRYPTED PRIVATE KEY")
                          , i = this.parseHexOfEncryptedPKCS8(n)
                          , r = mt.getPBKDF2KeyHexFromParam(i, e)
                          , s = {};
                        s.ciphertext = c.enc.Hex.parse(i.ciphertext);
                        var a = c.enc.Hex.parse(r)
                          , o = c.enc.Hex.parse(i.encryptionSchemeIV)
                          , h = c.TripleDES.decrypt(s, a, {
                            iv: o
                        })
                          , u = c.enc.Hex.stringify(h);
                        return u
                    },
                    getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e)
                          , i = this.getRSAKeyFromPlainPKCS8Hex(n);
                        return i
                    },
                    getKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e)
                          , i = this.getKeyFromPlainPrivatePKCS8Hex(n);
                        return i
                    },
                    parsePlainPrivatePKCS8Hex: function(t) {
                        var e = {
                            algparam: null
                        };
                        if ("30" != t.substr(0, 2))
                            throw "malformed plain PKCS8 private key(code:001)";
                        var n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != n.length)
                            throw "malformed plain PKCS8 private key(code:002)";
                        if ("30" != t.substr(n[1], 2))
                            throw "malformed PKCS8 private key(code:003)";
                        var i = it.getPosArrayOfChildren_AtObj(t, n[1]);
                        if (2 != i.length)
                            throw "malformed PKCS8 private key(code:004)";
                        if ("06" != t.substr(i[0], 2))
                            throw "malformed PKCS8 private key(code:005)";
                        if (e.algoid = it.getHexOfV_AtObj(t, i[0]),
                        "06" == t.substr(i[1], 2) && (e.algparam = it.getHexOfV_AtObj(t, i[1])),
                        "04" != t.substr(n[2], 2))
                            throw "malformed PKCS8 private key(code:006)";
                        return e.keyidx = it.getStartPosOfV_AtObj(t, n[2]),
                        e
                    },
                    getKeyFromPlainPrivatePKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PRIVATE KEY")
                          , n = this.getKeyFromPlainPrivatePKCS8Hex(e);
                        return n
                    },
                    getKeyFromPlainPrivatePKCS8Hex: function(t) {
                        var e, n = this.parsePlainPrivatePKCS8Hex(t);
                        if ("2a864886f70d010101" == n.algoid)
                            e = new Y;
                        else if ("2a8648ce380401" == n.algoid)
                            e = new o.crypto.DSA;
                        else {
                            if ("2a8648ce3d0201" != n.algoid)
                                throw "unsupported private key algorithm";
                            e = new o.crypto.ECDSA
                        }
                        return e.readPKCS8PrvKeyHex(t),
                        e
                    },
                    getRSAKeyFromPublicPKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PUBLIC KEY")
                          , n = this.getRSAKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PUBLIC KEY")
                          , n = this.getKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8Hex: function(t) {
                        var e, n = it.getVbyList(h, 0, [0, 0], "06");
                        if ("2a864886f70d010101" === n)
                            e = new Y;
                        else if ("2a8648ce380401" === n)
                            e = new o.crypto.DSA;
                        else {
                            if ("2a8648ce3d0201" !== n)
                                throw "unsupported PKCS#8 public key hex";
                            e = new o.crypto.ECDSA
                        }
                        return e.readPKCS8PubKeyHex(h),
                        e
                    },
                    parsePublicRawRSAKeyHex: function(t) {
                        var e = {};
                        if ("30" != t.substr(0, 2))
                            throw "malformed RSA key(code:001)";
                        var n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "malformed RSA key(code:002)";
                        if ("02" != t.substr(n[0], 2))
                            throw "malformed RSA key(code:003)";
                        if (e.n = it.getHexOfV_AtObj(t, n[0]),
                        "02" != t.substr(n[1], 2))
                            throw "malformed RSA key(code:004)";
                        return e.e = it.getHexOfV_AtObj(t, n[1]),
                        e
                    },
                    parsePrivateRawRSAKeyHexAtObj: function(t, e) {
                        var n = e.keyidx;
                        if ("30" != t.substr(n, 2))
                            throw "malformed RSA private key(code:001)";
                        var i = it.getPosArrayOfChildren_AtObj(t, n);
                        if (9 != i.length)
                            throw "malformed RSA private key(code:002)";
                        e.key = {},
                        e.key.n = it.getHexOfV_AtObj(t, i[1]),
                        e.key.e = it.getHexOfV_AtObj(t, i[2]),
                        e.key.d = it.getHexOfV_AtObj(t, i[3]),
                        e.key.p = it.getHexOfV_AtObj(t, i[4]),
                        e.key.q = it.getHexOfV_AtObj(t, i[5]),
                        e.key.dp = it.getHexOfV_AtObj(t, i[6]),
                        e.key.dq = it.getHexOfV_AtObj(t, i[7]),
                        e.key.co = it.getHexOfV_AtObj(t, i[8])
                    },
                    parsePrivateRawECKeyHexAtObj: function(t, e) {
                        var n = e.keyidx;
                        if ("30" != t.substr(n, 2))
                            throw "malformed ECC private key(code:001)";
                        var i = it.getPosArrayOfChildren_AtObj(t, n);
                        if (3 != i.length)
                            throw "malformed ECC private key(code:002)";
                        if ("04" != t.substr(i[1], 2))
                            throw "malformed ECC private key(code:003)";
                        e.key = it.getHexOfV_AtObj(t, i[1])
                    },
                    parsePublicPKCS8Hex: function(t) {
                        var e = {
                            algparam: null
                        }
                          , n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "outer DERSequence shall have 2 elements: " + n.length;
                        var i = n[0];
                        if ("30" != t.substr(i, 2))
                            throw "malformed PKCS8 public key(code:001)";
                        var r = it.getPosArrayOfChildren_AtObj(t, i);
                        if (2 != r.length)
                            throw "malformed PKCS8 public key(code:002)";
                        if ("06" != t.substr(r[0], 2))
                            throw "malformed PKCS8 public key(code:003)";
                        if (e.algoid = it.getHexOfV_AtObj(t, r[0]),
                        "06" == t.substr(r[1], 2) && (e.algparam = it.getHexOfV_AtObj(t, r[1])),
                        "03" != t.substr(n[1], 2))
                            throw "malformed PKCS8 public key(code:004)";
                        return e.key = it.getHexOfV_AtObj(t, n[1]).substr(2),
                        e
                    },
                    getRSAKeyFromPublicPKCS8Hex: function(t) {
                        var e = new Y;
                        return e.readPKCS8PubKeyHex(t),
                        e
                    }
                }
            }()
              , St = function() {
                var t = function(t, n, i) {
                    return e(c.AES, t, n, i)
                }
                  , e = function(t, e, n, i) {
                    var r = c.enc.Hex.parse(e)
                      , s = c.enc.Hex.parse(n)
                      , a = c.enc.Hex.parse(i)
                      , o = {};
                    o.key = s,
                    o.iv = a,
                    o.ciphertext = r;
                    var h = t.decrypt(o, s, {
                        iv: a
                    });
                    return c.enc.Hex.stringify(h)
                }
                  , n = function(t, e, n) {
                    return i(c.AES, t, e, n)
                }
                  , i = function(t, e, n, i) {
                    var r = c.enc.Hex.parse(e)
                      , s = c.enc.Hex.parse(n)
                      , a = c.enc.Hex.parse(i)
                      , o = t.encrypt(r, s, {
                        iv: a
                    })
                      , h = c.enc.Hex.parse(o.toString())
                      , u = c.enc.Base64.stringify(h);
                    return u
                }
                  , r = {
                    "AES-256-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 32,
                        ivlen: 16
                    },
                    "AES-192-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 24,
                        ivlen: 16
                    },
                    "AES-128-CBC": {
                        proc: t,
                        eproc: n,
                        keylen: 16,
                        ivlen: 16
                    },
                    "DES-EDE3-CBC": {
                        proc: function(t, n, i) {
                            return e(c.TripleDES, t, n, i)
                        },
                        eproc: function(t, e, n) {
                            return i(c.TripleDES, t, e, n)
                        },
                        keylen: 24,
                        ivlen: 8
                    },
                    "DES-CBC": {
                        proc: function(t, n, i) {
                            return e(c.DES, t, n, i)
                        },
                        eproc: function(t, e, n) {
                            return i(c.DES, t, e, n)
                        },
                        keylen: 8,
                        ivlen: 8
                    }
                }
                  , s = function(t) {
                    var e = {}
                      , n = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"));
                    n && (e.cipher = n[1],
                    e.ivsalt = n[2]);
                    var i = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
                    i && (e.type = i[1]);
                    var r = -1
                      , s = 0;
                    -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"),
                    s = 2),
                    -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"),
                    s = 1);
                    var a = t.indexOf("-----END");
                    if (-1 != r && -1 != a) {
                        var o = t.substring(r + 2 * s, a - s);
                        o = o.replace(/\s+/g, ""),
                        e.data = o
                    }
                    return e
                }
                  , a = function(t, e, n) {
                    for (var i = n.substring(0, 16), s = c.enc.Hex.parse(i), a = c.enc.Utf8.parse(e), o = r[t]["keylen"] + r[t]["ivlen"], h = "", u = null; ; ) {
                        var l = c.algo.MD5.create();
                        if (null != u && l.update(u),
                        l.update(a),
                        l.update(s),
                        u = l.finalize(),
                        h += c.enc.Hex.stringify(u),
                        h.length >= 2 * o)
                            break
                    }
                    var f = {};
                    return f.keyhex = h.substr(0, 2 * r[t]["keylen"]),
                    f.ivhex = h.substr(2 * r[t]["keylen"], 2 * r[t]["ivlen"]),
                    f
                }
                  , h = function(t, e, n, i) {
                    var s = c.enc.Base64.parse(t)
                      , a = c.enc.Hex.stringify(s)
                      , o = r[e]["proc"]
                      , h = o(a, n, i);
                    return h
                };
                return {
                    version: "1.0.0",
                    getHexFromPEM: function(t, e) {
                        return it.pemToHex(t, e)
                    },
                    getDecryptedKeyHexByKeyIV: function(t, e, n, i) {
                        var s = function(t) {
                            return r[t]["proc"]
                        }(e);
                        return s(t, n, i)
                    },
                    parsePKCS5PEM: function(t) {
                        return s(t)
                    },
                    getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, n) {
                        return a(t, e, n)
                    },
                    decryptKeyB64: function(t, e, n, i) {
                        return h(t, e, n, i)
                    },
                    getDecryptedKeyHex: function(t, e) {
                        var n = s(t)
                          , i = (n.type,
                        n.cipher)
                          , r = n.ivsalt
                          , o = n.data
                          , u = a(i, e, r)
                          , c = u.keyhex
                          , l = h(o, i, c, r);
                        return l
                    },
                    getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
                        var n = this.getDecryptedKeyHex(t, e)
                          , i = new Y;
                        return i.readPrivateKeyFromASN1HexString(n),
                        i
                    },
                    getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, n, i, s) {
                        var o = "";
                        if ("undefined" != typeof i && null != i || (i = "AES-256-CBC"),
                        "undefined" == typeof r[i])
                            throw "KEYUTIL unsupported algorithm: " + i;
                        if ("undefined" == typeof s || null == s) {
                            var h = r[i]["ivlen"]
                              , u = function(t) {
                                var e = c.lib.WordArray.random(t)
                                  , n = c.enc.Hex.stringify(e);
                                return n
                            }(h);
                            s = u.toUpperCase()
                        }
                        var l = a(i, n, s)
                          , f = l.keyhex
                          , d = function(t, e, n, i) {
                            var s = r[e]["eproc"]
                              , a = s(t, n, i);
                            return a
                        }(e, i, f, s)
                          , g = d.replace(/(.{64})/g, "$1\r\n");
                        o = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
                        return o += "Proc-Type: 4,ENCRYPTED\r\n",
                        o += "DEK-Info: " + i + "," + s + "\r\n",
                        o += "\r\n",
                        o += g,
                        o += "\r\n-----END " + t + " PRIVATE KEY-----\r\n",
                        o
                    },
                    getEncryptedPKCS5PEMFromRSAKey: function(t, e, n, i) {
                        var r = new o.asn1.DERInteger({
                            int: 0
                        })
                          , s = new o.asn1.DERInteger({
                            bigint: t.n
                        })
                          , a = new o.asn1.DERInteger({
                            int: t.e
                        })
                          , h = new o.asn1.DERInteger({
                            bigint: t.d
                        })
                          , u = new o.asn1.DERInteger({
                            bigint: t.p
                        })
                          , c = new o.asn1.DERInteger({
                            bigint: t.q
                        })
                          , l = new o.asn1.DERInteger({
                            bigint: t.dmp1
                        })
                          , f = new o.asn1.DERInteger({
                            bigint: t.dmq1
                        })
                          , d = new o.asn1.DERInteger({
                            bigint: t.coeff
                        })
                          , g = new o.asn1.DERSequence({
                            array: [r, s, a, h, u, c, l, f, d]
                        })
                          , p = g.getEncodedHex();
                        return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", p, e, n, i)
                    },
                    newEncryptedPKCS5PEM: function(t, e, n, i) {
                        "undefined" != typeof e && null != e || (e = 1024),
                        "undefined" != typeof n && null != n || (n = "10001");
                        var r = new Y;
                        r.generate(e, n);
                        var s = null;
                        return s = "undefined" == typeof i || null == i ? this.getEncryptedPKCS5PEMFromRSAKey(r, t) : this.getEncryptedPKCS5PEMFromRSAKey(r, t, i),
                        s
                    },
                    getRSAKeyFromPlainPKCS8PEM: function(t) {
                        if (t.match(/ENCRYPTED/))
                            throw "pem shall be not ENCRYPTED";
                        var e = it.pemToHex(t, "PRIVATE KEY")
                          , n = this.getRSAKeyFromPlainPKCS8Hex(e);
                        return n
                    },
                    getRSAKeyFromPlainPKCS8Hex: function(t) {
                        var e = new Y;
                        return e.readPKCS8PrvKeyHex(t),
                        e
                    },
                    parseHexOfEncryptedPKCS8: function(t) {
                        var e = {}
                          , n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "malformed format: SEQUENCE(0).items != 2: " + n.length;
                        e.ciphertext = it.getHexOfV_AtObj(t, n[1]);
                        var i = it.getPosArrayOfChildren_AtObj(t, n[0]);
                        if (2 != i.length)
                            throw "malformed format: SEQUENCE(0.0).items != 2: " + i.length;
                        if ("2a864886f70d01050d" != it.getHexOfV_AtObj(t, i[0]))
                            throw "this only supports pkcs5PBES2";
                        var r = it.getPosArrayOfChildren_AtObj(t, i[1]);
                        if (2 != i.length)
                            throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
                        var s = it.getPosArrayOfChildren_AtObj(t, r[1]);
                        if (2 != s.length)
                            throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
                        if ("2a864886f70d0307" != it.getHexOfV_AtObj(t, s[0]))
                            throw "this only supports TripleDES";
                        e.encryptionSchemeAlg = "TripleDES",
                        e.encryptionSchemeIV = it.getHexOfV_AtObj(t, s[1]);
                        var a = it.getPosArrayOfChildren_AtObj(t, r[0]);
                        if (2 != a.length)
                            throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
                        if ("2a864886f70d01050c" != it.getHexOfV_AtObj(t, a[0]))
                            throw "this only supports pkcs5PBKDF2";
                        var o = it.getPosArrayOfChildren_AtObj(t, a[1]);
                        if (o.length < 2)
                            throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
                        e.pbkdf2Salt = it.getHexOfV_AtObj(t, o[0]);
                        var h = it.getHexOfV_AtObj(t, o[1]);
                        try {
                            e.pbkdf2Iter = parseInt(h, 16)
                        } catch (u) {
                            throw "malformed format pbkdf2Iter: " + h
                        }
                        return e
                    },
                    getPBKDF2KeyHexFromParam: function(t, e) {
                        var n = c.enc.Hex.parse(t.pbkdf2Salt)
                          , i = t.pbkdf2Iter
                          , r = c.PBKDF2(e, n, {
                            keySize: 6,
                            iterations: i
                        })
                          , s = c.enc.Hex.stringify(r);
                        return s
                    },
                    getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
                        var n = it.pemToHex(t, "ENCRYPTED PRIVATE KEY")
                          , i = this.parseHexOfEncryptedPKCS8(n)
                          , r = St.getPBKDF2KeyHexFromParam(i, e)
                          , s = {};
                        s.ciphertext = c.enc.Hex.parse(i.ciphertext);
                        var a = c.enc.Hex.parse(r)
                          , o = c.enc.Hex.parse(i.encryptionSchemeIV)
                          , h = c.TripleDES.decrypt(s, a, {
                            iv: o
                        })
                          , u = c.enc.Hex.stringify(h);
                        return u
                    },
                    getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e)
                          , i = this.getRSAKeyFromPlainPKCS8Hex(n);
                        return i
                    },
                    getKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e)
                          , i = this.getKeyFromPlainPrivatePKCS8Hex(n);
                        return i
                    },
                    parsePlainPrivatePKCS8Hex: function(t) {
                        var e = {
                            algparam: null
                        };
                        if ("30" != t.substr(0, 2))
                            throw "malformed plain PKCS8 private key(code:001)";
                        var n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != n.length)
                            throw "malformed plain PKCS8 private key(code:002)";
                        if ("30" != t.substr(n[1], 2))
                            throw "malformed PKCS8 private key(code:003)";
                        var i = it.getPosArrayOfChildren_AtObj(t, n[1]);
                        if (2 != i.length)
                            throw "malformed PKCS8 private key(code:004)";
                        if ("06" != t.substr(i[0], 2))
                            throw "malformed PKCS8 private key(code:005)";
                        if (e.algoid = it.getHexOfV_AtObj(t, i[0]),
                        "06" == t.substr(i[1], 2) && (e.algparam = it.getHexOfV_AtObj(t, i[1])),
                        "04" != t.substr(n[2], 2))
                            throw "malformed PKCS8 private key(code:006)";
                        return e.keyidx = it.getStartPosOfV_AtObj(t, n[2]),
                        e
                    },
                    getKeyFromPlainPrivatePKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PRIVATE KEY")
                          , n = this.getKeyFromPlainPrivatePKCS8Hex(e);
                        return n
                    },
                    getKeyFromPlainPrivatePKCS8Hex: function(t) {
                        var e, n = this.parsePlainPrivatePKCS8Hex(t);
                        if ("2a864886f70d010101" == n.algoid)
                            e = new Y;
                        else if ("2a8648ce380401" == n.algoid)
                            e = new o.crypto.DSA;
                        else {
                            if ("2a8648ce3d0201" != n.algoid)
                                throw "unsupported private key algorithm";
                            e = new o.crypto.ECDSA
                        }
                        return e.readPKCS8PrvKeyHex(t),
                        e
                    },
                    getRSAKeyFromPublicPKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PUBLIC KEY")
                          , n = this.getRSAKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8PEM: function(t) {
                        var e = it.pemToHex(t, "PUBLIC KEY")
                          , n = this.getKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8Hex: function(t) {
                        var e, n = it.getVbyList(t, 0, [0, 0], "06");
                        if ("2a864886f70d010101" === n)
                            e = new Y;
                        else if ("2a8648ce380401" === n)
                            e = new o.crypto.DSA;
                        else {
                            if ("2a8648ce3d0201" !== n)
                                throw "unsupported PKCS#8 public key hex";
                            e = new o.crypto.ECDSA
                        }
                        return e.readPKCS8PubKeyHex(t),
                        e
                    },
                    parsePublicRawRSAKeyHex: function(t) {
                        var e = {};
                        if ("30" != t.substr(0, 2))
                            throw "malformed RSA key(code:001)";
                        var n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "malformed RSA key(code:002)";
                        if ("02" != t.substr(n[0], 2))
                            throw "malformed RSA key(code:003)";
                        if (e.n = it.getHexOfV_AtObj(t, n[0]),
                        "02" != t.substr(n[1], 2))
                            throw "malformed RSA key(code:004)";
                        return e.e = it.getHexOfV_AtObj(t, n[1]),
                        e
                    },
                    parsePrivateRawRSAKeyHexAtObj: function(t, e) {
                        var n = it
                          , i = n.getHexOfV_AtObj
                          , r = n.getDecendantIndexByNthList(t, 0, [2, 0])
                          , s = n.getPosArrayOfChildren_AtObj(t, r);
                        if (9 !== s.length)
                            throw "malformed PKCS#8 plain RSA private key";
                        e.key = {},
                        e.key.n = i(t, s[1]),
                        e.key.e = i(t, s[2]),
                        e.key.d = i(t, s[3]),
                        e.key.p = i(t, s[4]),
                        e.key.q = i(t, s[5]),
                        e.key.dp = i(t, s[6]),
                        e.key.dq = i(t, s[7]),
                        e.key.co = i(t, s[8])
                    },
                    parsePrivateRawECKeyHexAtObj: function(t, e) {
                        e.keyidx;
                        var n = new o.crypto.ECDSA;
                        n.readPKCS8PrvKeyHex(t),
                        e.key = n.prvKeyHex,
                        e.pubkey = n.pubKeyHex
                    },
                    parsePublicPKCS8Hex: function(t) {
                        var e = {
                            algparam: null
                        }
                          , n = it.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length)
                            throw "outer DERSequence shall have 2 elements: " + n.length;
                        var i = n[0];
                        if ("30" != t.substr(i, 2))
                            throw "malformed PKCS8 public key(code:001)";
                        var r = it.getPosArrayOfChildren_AtObj(t, i);
                        if (2 != r.length)
                            throw "malformed PKCS8 public key(code:002)";
                        if ("06" != t.substr(r[0], 2))
                            throw "malformed PKCS8 public key(code:003)";
                        if (e.algoid = it.getHexOfV_AtObj(t, r[0]),
                        "06" == t.substr(r[1], 2) ? e.algparam = it.getHexOfV_AtObj(t, r[1]) : "30" == t.substr(r[1], 2) && (e.algparam = {},
                        e.algparam.p = it.getVbyList(t, r[1], [0], "02"),
                        e.algparam.q = it.getVbyList(t, r[1], [1], "02"),
                        e.algparam.g = it.getVbyList(t, r[1], [2], "02")),
                        "03" != t.substr(n[1], 2))
                            throw "malformed PKCS8 public key(code:004)";
                        return e.key = it.getHexOfV_AtObj(t, n[1]).substr(2),
                        e
                    },
                    getRSAKeyFromPublicPKCS8Hex: function(t) {
                        var e = new Y;
                        return e.readPKCS8PubKeyHex(t),
                        e
                    }
                }
            }();
            St.getKey = function(t, e, n) {
                if ("undefined" != typeof Y && t instanceof Y)
                    return t;
                if ("undefined" != typeof o.crypto.ECDSA && t instanceof o.crypto.ECDSA)
                    return t;
                if ("undefined" != typeof o.crypto.DSA && t instanceof o.crypto.DSA)
                    return t;
                if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d)
                    return new o.crypto.ECDSA({
                        pub: t.xy,
                        curve: t.curve
                    });
                if (void 0 !== t.curve && void 0 !== t.d)
                    return new o.crypto.ECDSA({
                        prv: t.d,
                        curve: t.curve
                    });
                if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
                    var i = new Y;
                    return i.setPublic(t.n, t.e),
                    i
                }
                if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) {
                    i = new Y;
                    return i.setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co),
                    i
                }
                if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) {
                    i = new Y;
                    return i.setPrivate(t.n, t.e, t.d),
                    i
                }
                if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) {
                    i = new o.crypto.DSA;
                    return i.setPublic(t.p, t.q, t.g, t.y),
                    i
                }
                if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) {
                    i = new o.crypto.DSA;
                    return i.setPrivate(t.p, t.q, t.g, t.y, t.x),
                    i
                }
                if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
                    i = new Y;
                    return i.setPublic(ut(t.n), ut(t.e)),
                    i
                }
                if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) {
                    i = new Y;
                    return i.setPrivateEx(ut(t.n), ut(t.e), ut(t.d), ut(t.p), ut(t.q), ut(t.dp), ut(t.dq), ut(t.qi)),
                    i
                }
                if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) {
                    i = new Y;
                    return i.setPrivate(ut(t.n), ut(t.e), ut(t.d)),
                    i
                }
                if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
                    var s = new o.crypto.ECDSA({
                        curve: t.crv
                    })
                      , a = s.ecparams.keylen / 4
                      , h = ("0000000000" + ut(t.x)).slice(-a)
                      , u = ("0000000000" + ut(t.y)).slice(-a)
                      , c = "04" + h + u;
                    return s.setPublicKeyHex(c),
                    s
                }
                if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
                    s = new o.crypto.ECDSA({
                        curve: t.crv
                    }),
                    a = s.ecparams.keylen / 4,
                    h = ("0000000000" + ut(t.x)).slice(-a),
                    u = ("0000000000" + ut(t.y)).slice(-a),
                    c = "04" + h + u;
                    var l = ("0000000000" + ut(t.d)).slice(-a);
                    return s.setPublicKeyHex(c),
                    s.setPrivateKeyHex(l),
                    s
                }
                if ("pkcs5prv" === n) {
                    var f, d = t, g = it;
                    if (f = g.getPosArrayOfChildren_AtObj(d, 0),
                    9 === f.length)
                        i = new Y,
                        i.readPrivateKeyFromASN1HexString(t);
                    else if (6 === f.length)
                        i = new o.crypto.DSA,
                        i.readPKCS5PrvKeyHex(d);
                    else {
                        if (!(f.length > 2 && "04" === d.substr(f[1], 2)))
                            throw "unsupported PKCS#1/5 hexadecimal key";
                        i = new o.crypto.ECDSA,
                        i.readPKCS5PrvKeyHex(d)
                    }
                    return i
                }
                if ("pkcs8prv" === n) {
                    i = St.getKeyFromPlainPrivatePKCS8Hex(t);
                    return i
                }
                if ("pkcs8pub" === n)
                    return St.getKeyFromPublicPKCS8Hex(t);
                if ("x509pub" === n)
                    return jt.getPublicKeyFromCertHex(t);
                if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0))
                    return jt.getPublicKeyFromCertPEM(t);
                if (-1 != t.indexOf("-END PUBLIC KEY-"))
                    return St.getKeyFromPublicPKCS8PEM(t.replace((0,
                    r.default)(Object[Object])[2], String(Number(1) + Object[Object])[1]));
                if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
                    var y = it.pemToHex(t, "RSA PRIVATE KEY");
                    return St.getKey(y, null, "pkcs5prv")
                }
                if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
                    var v = it.pemToHex(t, "DSA PRIVATE KEY")
                      , m = it.getVbyList(v, 0, [1], "02")
                      , S = it.getVbyList(v, 0, [2], "02")
                      , b = it.getVbyList(v, 0, [3], "02")
                      , x = it.getVbyList(v, 0, [4], "02")
                      , A = it.getVbyList(v, 0, [5], "02");
                    i = new o.crypto.DSA;
                    return i.setPrivate(new p(m,16), new p(S,16), new p(b,16), new p(x,16), new p(A,16)),
                    i
                }
                if (-1 != t.indexOf("-END PRIVATE KEY-"))
                    return St.getKeyFromPlainPrivatePKCS8PEM(t);
                if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED"))
                    return St.getRSAKeyFromEncryptedPKCS5PEM(t, e);
                if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
                    v = St.getDecryptedKeyHex(t, e),
                    i = it.getVbyList(v, 0, [1], "04");
                    var F = it.getVbyList(v, 0, [2, 0], "06")
                      , E = it.getVbyList(v, 0, [3, 0], "03").substr(2)
                      , w = "";
                    if (void 0 === o.crypto.OID.oidhex2name[F])
                        throw "undefined OID(hex) in KJUR.crypto.OID: " + F;
                    w = o.crypto.OID.oidhex2name[F];
                    s = new o.crypto.ECDSA({
                        curve: w
                    });
                    return s.setPublicKeyHex(E),
                    s.setPrivateKeyHex(i),
                    s.isPublic = !1,
                    s
                }
                if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
                    v = St.getDecryptedKeyHex(t, e),
                    m = it.getVbyList(v, 0, [1], "02"),
                    S = it.getVbyList(v, 0, [2], "02"),
                    b = it.getVbyList(v, 0, [3], "02"),
                    x = it.getVbyList(v, 0, [4], "02"),
                    A = it.getVbyList(v, 0, [5], "02"),
                    i = new o.crypto.DSA;
                    return i.setPrivate(new p(m,16), new p(S,16), new p(b,16), new p(x,16), new p(A,16)),
                    i
                }
                if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-"))
                    return St.getKeyFromEncryptedPKCS8PEM(t, e);
                throw "not supported argument"
            }
            ,
            St.generateKeypair = function(t, e) {
                if ("RSA" == t) {
                    var n = e
                      , i = new Y;
                    i.generate(n, "10001"),
                    i.isPrivate = !0,
                    i.isPublic = !0;
                    var r = new Y
                      , s = i.n.toString(16)
                      , a = i.e.toString(16);
                    r.setPublic(s, a),
                    r.isPrivate = !1,
                    r.isPublic = !0;
                    var h = {};
                    return h.prvKeyObj = i,
                    h.pubKeyObj = r,
                    h
                }
                if ("EC" == t) {
                    var u = e
                      , c = new o.crypto.ECDSA({
                        curve: u
                    })
                      , l = c.generateKeyPairHex();
                    i = new o.crypto.ECDSA({
                        curve: u
                    });
                    i.setPublicKeyHex(l.ecpubhex),
                    i.setPrivateKeyHex(l.ecprvhex),
                    i.isPrivate = !0,
                    i.isPublic = !1;
                    r = new o.crypto.ECDSA({
                        curve: u
                    });
                    r.setPublicKeyHex(l.ecpubhex),
                    r.isPrivate = !1,
                    r.isPublic = !0;
                    h = {};
                    return h.prvKeyObj = i,
                    h.pubKeyObj = r,
                    h
                }
                throw "unknown algorithm: " + t
            }
            ,
            St.getPEM = function(t, e, n, i, r) {
                var s = o.asn1
                  , a = o.crypto;
                function h(t) {
                    var e = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            int: {
                                bigint: t.n
                            }
                        }, {
                            int: t.e
                        }, {
                            int: {
                                bigint: t.d
                            }
                        }, {
                            int: {
                                bigint: t.p
                            }
                        }, {
                            int: {
                                bigint: t.q
                            }
                        }, {
                            int: {
                                bigint: t.dmp1
                            }
                        }, {
                            int: {
                                bigint: t.dmq1
                            }
                        }, {
                            int: {
                                bigint: t.coeff
                            }
                        }]
                    });
                    return e
                }
                function u(t) {
                    var e = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 1
                        }, {
                            octstr: {
                                hex: t.prvKeyHex
                            }
                        }, {
                            tag: ["a0", !0, {
                                oid: {
                                    name: t.curveName
                                }
                            }]
                        }, {
                            tag: ["a1", !0, {
                                bitstr: {
                                    hex: "00" + t.pubKeyHex
                                }
                            }]
                        }]
                    });
                    return e
                }
                function l(t) {
                    var e = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            int: {
                                bigint: t.p
                            }
                        }, {
                            int: {
                                bigint: t.q
                            }
                        }, {
                            int: {
                                bigint: t.g
                            }
                        }, {
                            int: {
                                bigint: t.y
                            }
                        }, {
                            int: {
                                bigint: t.x
                            }
                        }]
                    });
                    return e
                }
                if (("undefined" != typeof Y && t instanceof Y || "undefined" != typeof a.DSA && t instanceof a.DSA || "undefined" != typeof a.ECDSA && t instanceof a.ECDSA) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) {
                    var f = new o.asn1.x509.SubjectPublicKeyInfo(t)
                      , d = f.getEncodedHex();
                    return s.ASN1Util.getPEMStringFromHex(d, "PUBLIC KEY")
                }
                if ("PKCS1PRV" == e && "undefined" != typeof Y && t instanceof Y && (void 0 === n || null == n) && 1 == t.isPrivate) {
                    f = h(t),
                    d = f.getEncodedHex();
                    return s.ASN1Util.getPEMStringFromHex(d, "RSA PRIVATE KEY")
                }
                if ("PKCS1PRV" == e && "undefined" != typeof Y && t instanceof o.crypto.ECDSA && (void 0 === n || null == n) && 1 == t.isPrivate) {
                    var g = new o.asn1.DERObjectIdentifier({
                        name: t.curveName
                    })
                      , p = g.getEncodedHex()
                      , y = u(t)
                      , v = y.getEncodedHex()
                      , m = "";
                    return m += s.ASN1Util.getPEMStringFromHex(p, "EC PARAMETERS"),
                    m += s.ASN1Util.getPEMStringFromHex(v, "EC PRIVATE KEY"),
                    m
                }
                if ("PKCS1PRV" == e && "undefined" != typeof o.crypto.DSA && t instanceof o.crypto.DSA && (void 0 === n || null == n) && 1 == t.isPrivate) {
                    f = l(t),
                    d = f.getEncodedHex();
                    return s.ASN1Util.getPEMStringFromHex(d, "DSA PRIVATE KEY")
                }
                if ("PKCS5PRV" == e && "undefined" != typeof Y && t instanceof Y && void 0 !== n && null != n && 1 == t.isPrivate) {
                    f = h(t),
                    d = f.getEncodedHex();
                    return void 0 === i && (i = "DES-EDE3-CBC"),
                    this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", d, n, i)
                }
                if ("PKCS5PRV" == e && "undefined" != typeof o.crypto.ECDSA && t instanceof o.crypto.ECDSA && void 0 !== n && null != n && 1 == t.isPrivate) {
                    f = u(t),
                    d = f.getEncodedHex();
                    return void 0 === i && (i = "DES-EDE3-CBC"),
                    this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", d, n, i)
                }
                if ("PKCS5PRV" == e && "undefined" != typeof o.crypto.DSA && t instanceof o.crypto.DSA && void 0 !== n && null != n && 1 == t.isPrivate) {
                    f = l(t),
                    d = f.getEncodedHex();
                    return void 0 === i && (i = "DES-EDE3-CBC"),
                    this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", d, n, i)
                }
                var S = function(t, e) {
                    var n = b(t, e)
                      , i = new o.asn1.ASN1Util.newObject({
                        seq: [{
                            seq: [{
                                oid: {
                                    name: "pkcs5PBES2"
                                }
                            }, {
                                seq: [{
                                    seq: [{
                                        oid: {
                                            name: "pkcs5PBKDF2"
                                        }
                                    }, {
                                        seq: [{
                                            octstr: {
                                                hex: n.pbkdf2Salt
                                            }
                                        }, {
                                            int: n.pbkdf2Iter
                                        }]
                                    }]
                                }, {
                                    seq: [{
                                        oid: {
                                            name: "des-EDE3-CBC"
                                        }
                                    }, {
                                        octstr: {
                                            hex: n.encryptionSchemeIV
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            octstr: {
                                hex: n.ciphertext
                            }
                        }]
                    });
                    return i.getEncodedHex()
                }
                  , b = function(t, e) {
                    var n = c.lib.WordArray.random(8)
                      , i = c.lib.WordArray.random(8)
                      , r = c.PBKDF2(e, n, {
                        keySize: 6,
                        iterations: 100
                    })
                      , s = c.enc.Hex.parse(t)
                      , a = c.TripleDES.encrypt(s, r, {
                        iv: i
                    }) + ""
                      , o = {};
                    return o.ciphertext = a,
                    o.pbkdf2Salt = c.enc.Hex.stringify(n),
                    o.pbkdf2Iter = 100,
                    o.encryptionSchemeAlg = "DES-EDE3-CBC",
                    o.encryptionSchemeIV = c.enc.Hex.stringify(i),
                    o
                };
                if ("PKCS8PRV" == e && "undefined" != typeof Y && t instanceof Y && 1 == t.isPrivate) {
                    var x = h(t)
                      , A = x.getEncodedHex();
                    f = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "rsaEncryption"
                                }
                            }, {
                                null: !0
                            }]
                        }, {
                            octstr: {
                                hex: A
                            }
                        }]
                    }),
                    d = f.getEncodedHex();
                    if (void 0 === n || null == n)
                        return s.ASN1Util.getPEMStringFromHex(d, "PRIVATE KEY");
                    v = S(d, n);
                    return s.ASN1Util.getPEMStringFromHex(v, "ENCRYPTED PRIVATE KEY")
                }
                if ("PKCS8PRV" == e && "undefined" != typeof o.crypto.ECDSA && t instanceof o.crypto.ECDSA && 1 == t.isPrivate) {
                    x = new o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 1
                        }, {
                            octstr: {
                                hex: t.prvKeyHex
                            }
                        }, {
                            tag: ["a1", !0, {
                                bitstr: {
                                    hex: "00" + t.pubKeyHex
                                }
                            }]
                        }]
                    }),
                    A = x.getEncodedHex(),
                    f = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "ecPublicKey"
                                }
                            }, {
                                oid: {
                                    name: t.curveName
                                }
                            }]
                        }, {
                            octstr: {
                                hex: A
                            }
                        }]
                    }),
                    d = f.getEncodedHex();
                    if (void 0 === n || null == n)
                        return s.ASN1Util.getPEMStringFromHex(d, "PRIVATE KEY");
                    v = S(d, n);
                    return s.ASN1Util.getPEMStringFromHex(v, "ENCRYPTED PRIVATE KEY")
                }
                if ("PKCS8PRV" == e && "undefined" != typeof o.crypto.DSA && t instanceof o.crypto.DSA && 1 == t.isPrivate) {
                    x = new o.asn1.DERInteger({
                        bigint: t.x
                    }),
                    A = x.getEncodedHex(),
                    f = o.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "dsa"
                                }
                            }, {
                                seq: [{
                                    int: {
                                        bigint: t.p
                                    }
                                }, {
                                    int: {
                                        bigint: t.q
                                    }
                                }, {
                                    int: {
                                        bigint: t.g
                                    }
                                }]
                            }]
                        }, {
                            octstr: {
                                hex: A
                            }
                        }]
                    }),
                    d = f.getEncodedHex();
                    if (void 0 === n || null == n)
                        return s.ASN1Util.getPEMStringFromHex(d, "PRIVATE KEY");
                    v = S(d, n);
                    return s.ASN1Util.getPEMStringFromHex(v, "ENCRYPTED PRIVATE KEY")
                }
                throw "unsupported object nor format"
            }
            ,
            St.getKeyFromCSRPEM = function(t) {
                var e = it.pemToHex(t, "CERTIFICATE REQUEST")
                  , n = St.getKeyFromCSRHex(e);
                return n
            }
            ,
            St.getKeyFromCSRHex = function(t) {
                var e = St.parseCSRHex(t)
                  , n = St.getKey(e.p8pubkeyhex, null, "pkcs8pub");
                return n
            }
            ,
            St.parseCSRHex = function(t) {
                var e = {}
                  , n = t;
                if ("30" != n.substr(0, 2))
                    throw "malformed CSR(code:001)";
                var i = it.getPosArrayOfChildren_AtObj(n, 0);
                if (i.length < 1)
                    throw "malformed CSR(code:002)";
                if ("30" != n.substr(i[0], 2))
                    throw "malformed CSR(code:003)";
                var r = it.getPosArrayOfChildren_AtObj(n, i[0]);
                if (r.length < 3)
                    throw "malformed CSR(code:004)";
                return e.p8pubkeyhex = it.getHexOfTLV_AtObj(n, r[2]),
                e
            }
            ,
            St.getJWKFromKey = function(t) {
                var e = {};
                if (t instanceof Y && t.isPrivate)
                    return e.kty = "RSA",
                    e.n = ht(t.n.toString(16)),
                    e.e = ht(t.e.toString(16)),
                    e.d = ht(t.d.toString(16)),
                    e.p = ht(t.p.toString(16)),
                    e.q = ht(t.q.toString(16)),
                    e.dp = ht(t.dmp1.toString(16)),
                    e.dq = ht(t.dmq1.toString(16)),
                    e.qi = ht(t.coeff.toString(16)),
                    e;
                if (t instanceof Y && t.isPublic)
                    return e.kty = "RSA",
                    e.n = ht(t.n.toString(16)),
                    e.e = ht(t.e.toString(16)),
                    e;
                if (t instanceof o.crypto.ECDSA && t.isPrivate) {
                    var n = t.getShortNISTPCurveName();
                    if ("P-256" !== n && "P-384" !== n)
                        throw "unsupported curve name for JWT: " + n;
                    var i = t.getPublicKeyXYHex();
                    return e.kty = "EC",
                    e.crv = n,
                    e.x = ht(i.x),
                    e.y = ht(i.y),
                    e.d = ht(t.prvKeyHex),
                    e
                }
                if (t instanceof o.crypto.ECDSA && t.isPublic) {
                    n = t.getShortNISTPCurveName();
                    if ("P-256" !== n && "P-384" !== n)
                        throw "unsupported curve name for JWT: " + n;
                    i = t.getPublicKeyXYHex();
                    return e.kty = "EC",
                    e.crv = n,
                    e.x = ht(i.x),
                    e.y = ht(i.y),
                    e
                }
                throw "not supported key object"
            }
            ,
            Y.pemToBase64 = function(t) {
                var e = t;
                return e = e.replace("-----BEGIN RSA PRIVATE KEY-----", ""),
                e = e.replace("-----END RSA PRIVATE KEY-----", ""),
                e = e.replace(/[ \n]+/g, ""),
                e
            }
            ,
            Y.getPosArrayOfChildrenFromHex = function(t) {
                var e = new Array
                  , n = it.getStartPosOfV_AtObj(t, 0)
                  , i = it.getPosOfNextSibling_AtObj(t, n)
                  , r = it.getPosOfNextSibling_AtObj(t, i)
                  , s = it.getPosOfNextSibling_AtObj(t, r)
                  , a = it.getPosOfNextSibling_AtObj(t, s)
                  , o = it.getPosOfNextSibling_AtObj(t, a)
                  , h = it.getPosOfNextSibling_AtObj(t, o)
                  , u = it.getPosOfNextSibling_AtObj(t, h)
                  , c = it.getPosOfNextSibling_AtObj(t, u);
                return e.push(n, i, r, s, a, o, h, u, c),
                e
            }
            ,
            Y.getHexValueArrayOfChildrenFromHex = function(t) {
                var e = Y.getPosArrayOfChildrenFromHex(t)
                  , n = it.getHexOfV_AtObj(t, e[0])
                  , i = it.getHexOfV_AtObj(t, e[1])
                  , r = it.getHexOfV_AtObj(t, e[2])
                  , s = it.getHexOfV_AtObj(t, e[3])
                  , a = it.getHexOfV_AtObj(t, e[4])
                  , o = it.getHexOfV_AtObj(t, e[5])
                  , h = it.getHexOfV_AtObj(t, e[6])
                  , u = it.getHexOfV_AtObj(t, e[7])
                  , c = it.getHexOfV_AtObj(t, e[8])
                  , l = new Array;
                return l.push(n, i, r, s, a, o, h, u, c),
                l
            }
            ,
            Y.prototype.readPrivateKeyFromPEMString = function(t) {
                var e = Y.pemToBase64(t)
                  , n = g(e)
                  , i = Y.getHexValueArrayOfChildrenFromHex(n);
                this.setPrivateEx(i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8])
            }
            ,
            Y.prototype.readPrivateKeyFromASN1HexString = function(t) {
                this.readPKCS5PrvKeyHex(t)
            }
            ,
            Y.prototype.readPKCS5PrvKeyHex = function(t) {
                var e = Y.getHexValueArrayOfChildrenFromHex(t);
                this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
            }
            ,
            Y.prototype.readPKCS8PrvKeyHex = function(t) {
                var e, n, i, r, s, a, o, h, u = it, c = u.getVbyList;
                if (!1 === u.isASN1HEX(t))
                    throw "not ASN.1 hex string";
                try {
                    e = c(t, 0, [2, 0, 1], "02"),
                    n = c(t, 0, [2, 0, 2], "02"),
                    i = c(t, 0, [2, 0, 3], "02"),
                    r = c(t, 0, [2, 0, 4], "02"),
                    s = c(t, 0, [2, 0, 5], "02"),
                    a = c(t, 0, [2, 0, 6], "02"),
                    o = c(t, 0, [2, 0, 7], "02"),
                    h = c(t, 0, [2, 0, 8], "02")
                } catch (l) {
                    throw "malformed PKCS#8 plain RSA private key"
                }
                this.setPrivateEx(e, n, i, r, s, a, o, h)
            }
            ,
            Y.prototype.readPKCS5PubKeyHex = function(t) {
                if (!1 === it.isASN1HEX(t))
                    throw "keyHex is not ASN.1 hex string";
                var e = it.getPosArrayOfChildren_AtObj(t, 0);
                if (2 !== e.length || "02" !== t.substr(e[0], 2) || "02" !== t.substr(e[1], 2))
                    throw "wrong hex for PKCS#5 public key";
                var n = it.getHexOfV_AtObj(t, e[0])
                  , i = it.getHexOfV_AtObj(t, e[1]);
                this.setPublic(n, i)
            }
            ,
            Y.prototype.readPKCS8PubKeyHex = function(t) {
                if (!1 === it.isASN1HEX(t))
                    throw "not ASN.1 hex string";
                if ("06092a864886f70d010101" !== it.getDecendantHexTLVByNthList(t, 0, [0, 0]))
                    throw "not PKCS8 RSA public key";
                var e = it.getDecendantHexTLVByNthList(t, 0, [1, 0]);
                this.readPKCS5PubKeyHex(e)
            }
            ,
            Y.prototype.readCertPubKeyHex = function(t, e) {
                if (5 !== e && (e = 6),
                !1 === it.isASN1HEX(t))
                    throw "not ASN.1 hex string";
                var n = it.getDecendantHexTLVByNthList(t, 0, [0, e]);
                this.readPKCS8PubKeyHex(n)
            }
            ;
            var bt = new RegExp("");
            function xt(t, e) {
                for (var n = "", i = e / 4 - t.length, r = 0; r < i; r++)
                    n += "0";
                return n + t
            }
            function At(t, e) {
                var n = function(t) {
                    return o.crypto.Util.hashString(t, e)
                }(t);
                return this.signWithMessageHash(n, e)
            }
            function Ft(t) {
                return At.call(this, t, "sha1")
            }
            function Et(t) {
                return At.call(this, t, "sha256")
            }
            function wt(t, e, n) {
                var i = ""
                  , r = 0;
                while (i.length < e)
                    i += ft(n(dt(t + String.fromCharCode.apply(String, [(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r])))),
                    r += 1;
                return i
            }
            function Pt(t, e, n) {
                var i = function(t) {
                    return o.crypto.Util.hashHex(t, e)
                }(dt(t));
                return void 0 === n && (n = -1),
                this.signWithMessageHashPSS(i, e, n)
            }
            function Ht(t, e, n) {
                var i = function(t, e, n) {
                    var i = new Y;
                    i.setPublic(e, n);
                    var r = i.doPublic(t);
                    return r
                }(t, e, n)
                  , r = i.toString(16).replace(/^1f+00/, "");
                return r
            }
            function Ct(t) {
                for (var e in o.crypto.Util.DIGESTINFOHEAD) {
                    var n = o.crypto.Util.DIGESTINFOHEAD[e]
                      , i = n.length;
                    if (t.substring(0, i) == n) {
                        var r = [e, t.substring(i)];
                        return r
                    }
                }
                return []
            }
            function Ot(t, e) {
                var n = G(t, 16)
                  , i = function(t, e, n, i) {
                    var r = Ht(e, n, i)
                      , s = Ct(r);
                    if (0 == s.length)
                        return !1;
                    var a = s[0]
                      , h = s[1]
                      , u = function(t) {
                        return o.crypto.Util.hashString(t, a)
                    }(t);
                    return h == u
                }(e, n, this.n.toString(16), this.e.toString(16));
                return i
            }
            function Dt(t, e) {
                e = e.replace(bt, ""),
                e = e.replace(/[ \n]+/g, "");
                var n = G(e, 16);
                if (n.bitLength() > this.n.bitLength())
                    return 0;
                var i = this.doPublic(n)
                  , r = i.toString(16).replace(/^1f+00/, "")
                  , s = Ct(r);
                if (0 == s.length)
                    return !1;
                var a = s[0]
                  , h = s[1]
                  , u = function(t) {
                    return o.crypto.Util.hashString(t, a)
                }(t);
                return h == u
            }
            function Tt(t, e, n, i) {
                var r = function(t) {
                    return o.crypto.Util.hashHex(t, n)
                }(dt(t));
                return void 0 === i && (i = -1),
                this.verifyWithMessageHashPSS(r, e, n, i)
            }
            function jt() {
                this.subjectPublicKeyRSA = null,
                this.subjectPublicKeyRSA_hN = null,
                this.subjectPublicKeyRSA_hE = null,
                this.hex = null,
                this.getSerialNumberHex = function() {
                    return it.getDecendantHexVByNthList(this.hex, 0, [0, 1])
                }
                ,
                this.getSignatureAlgorithmField = function() {
                    var t = it.getDecendantHexVByNthList(this.hex, 0, [0, 2, 0])
                      , e = o.asn1.ASN1Util.oidHexToInt(t)
                      , n = o.asn1.x509.OID.oid2name(e);
                    return n
                }
                ,
                this.getIssuerHex = function() {
                    return it.getDecendantHexTLVByNthList(this.hex, 0, [0, 3])
                }
                ,
                this.getIssuerString = function() {
                    return jt.hex2dn(it.getDecendantHexTLVByNthList(this.hex, 0, [0, 3]))
                }
                ,
                this.getSubjectHex = function() {
                    return it.getDecendantHexTLVByNthList(this.hex, 0, [0, 5])
                }
                ,
                this.getSubjectString = function() {
                    return jt.hex2dn(it.getDecendantHexTLVByNthList(this.hex, 0, [0, 5]))
                }
                ,
                this.getNotBefore = function() {
                    var t = it.getDecendantHexVByNthList(this.hex, 0, [0, 4, 0]);
                    return t = t.replace(/(..)/g, "%$1"),
                    t = decodeURIComponent(t),
                    t
                }
                ,
                this.getNotAfter = function() {
                    var t = it.getDecendantHexVByNthList(this.hex, 0, [0, 4, 1]);
                    return t = t.replace(/(..)/g, "%$1"),
                    t = decodeURIComponent(t),
                    t
                }
                ,
                this.readCertPEM = function(t) {
                    var e = it.pemToHex(t)
                      , n = jt.getPublicKeyHexArrayFromCertHex(e)
                      , i = new Y;
                    i.setPublic(n[0], n[1]),
                    this.subjectPublicKeyRSA = i,
                    this.subjectPublicKeyRSA_hN = n[0],
                    this.subjectPublicKeyRSA_hE = n[1],
                    this.hex = e
                }
                ,
                this.readCertPEMWithoutRSAInit = function(t) {
                    var e = it.pemToHex(t)
                      , n = jt.getPublicKeyHexArrayFromCertHex(e);
                    "function" === typeof this.subjectPublicKeyRSA.setPublic && this.subjectPublicKeyRSA.setPublic(n[0], n[1]),
                    this.subjectPublicKeyRSA_hN = n[0],
                    this.subjectPublicKeyRSA_hE = n[1],
                    this.hex = e
                }
                ,
                this.getInfo = function() {
                    var t = "Basic Fields\n";
                    t += "  serial number: " + this.getSerialNumberHex() + "\n",
                    t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n",
                    t += "  issuer: " + this.getIssuerString() + "\n",
                    t += "  notBefore: " + this.getNotBefore() + "\n",
                    t += "  notAfter: " + this.getNotAfter() + "\n",
                    t += "  subject: " + this.getSubjectString() + "\n",
                    t += "  subject public key info: \n";
                    var e = jt.getSubjectPublicKeyInfoPosFromCertHex(this.hex)
                      , n = it.getHexOfTLV_AtObj(this.hex, e)
                      , i = St.getKey(n, null, "pkcs8pub");
                    i instanceof Y && (t += "    key algorithm: RSA\n",
                    t += "    n=" + i.n.toString(16).substr(0, 16) + "...\n",
                    t += "    e=" + i.e.toString(16) + "\n"),
                    t += "X509v3 Extensions:\n";
                    for (var r = jt.getV3ExtInfoListOfCertHex(this.hex), s = 0; s < r.length; s++) {
                        var a = r[s]
                          , h = o.asn1.x509.OID.oid2name(a.oid);
                        "" === h && (h = a.oid);
                        var u = "";
                        if (!0 === a.critical && (u = "CRITICAL"),
                        t += "  " + h + " " + u + ":\n",
                        "basicConstraints" === h) {
                            var c = jt.getExtBasicConstraints(this.hex);
                            void 0 === c.cA ? t += "    {}\n" : (t += "    cA=true",
                            void 0 !== c.pathLen && (t += ", pathLen=" + c.pathLen),
                            t += "\n")
                        } else if ("keyUsage" === h)
                            t += "    " + jt.getExtKeyUsageString(this.hex) + "\n";
                        else if ("subjectKeyIdentifier" === h)
                            t += "    " + jt.getExtSubjectKeyIdentifier(this.hex) + "\n";
                        else if ("authorityKeyIdentifier" === h) {
                            var l = jt.getExtAuthorityKeyIdentifier(this.hex);
                            void 0 !== l.kid && (t += "    kid=" + l.kid + "\n")
                        } else if ("extKeyUsage" === h) {
                            var f = jt.getExtExtKeyUsageName(this.hex);
                            t += "    " + f.join(", ") + "\n"
                        } else if ("subjectAltName" === h) {
                            var d = jt.getExtSubjectAltName(this.hex);
                            t += "    " + d.join(", ") + "\n"
                        } else if ("cRLDistributionPoints" === h) {
                            var g = jt.getExtCRLDistributionPointsURI(this.hex);
                            t += "    " + g + "\n"
                        } else if ("authorityInfoAccess" === h) {
                            var p = jt.getExtAIAInfo(this.hex);
                            void 0 !== p.ocsp && (t += "    ocsp: " + p.ocsp.join(",") + "\n"),
                            void 0 !== p.caissuer && (t += "    caissuer: " + p.caissuer.join(",") + "\n")
                        }
                    }
                    return t += "signature algorithm: " + jt.getSignatureAlgorithmName(this.hex) + "\n",
                    t += "signature: " + jt.getSignatureValueHex(this.hex).substr(0, 16) + "...\n",
                    t
                }
            }
            bt.compile("[^0-9a-f]", "gi"),
            Y.prototype.signWithMessageHash = function(t, e) {
                var n = o.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength())
                  , i = G(n, 16)
                  , r = this.doPrivate(i)
                  , s = r.toString(16);
                return xt(s, this.n.bitLength())
            }
            ,
            Y.prototype.signString = At,
            Y.prototype.signStringWithSHA1 = Ft,
            Y.prototype.signStringWithSHA256 = Et,
            Y.prototype.sign = At,
            Y.prototype.signWithSHA1 = Ft,
            Y.prototype.signWithSHA256 = Et,
            Y.prototype.signWithMessageHashPSS = function(t, e, n) {
                var i, r = ft(t), s = r.length, a = this.n.bitLength() - 1, h = Math.ceil(a / 8), u = function(t) {
                    return o.crypto.Util.hashHex(t, e)
                };
                if (-1 === n || void 0 === n)
                    n = s;
                else if (-2 === n)
                    n = h - s - 2;
                else if (n < -2)
                    throw "invalid salt length";
                if (h < s + n + 2)
                    throw "data too long";
                var c = "";
                n > 0 && (c = new Array(n),
                (new W).nextBytes(c),
                c = String.fromCharCode.apply(String, c));
                var l = ft(u(dt("\0\0\0\0\0\0\0\0" + r + c)))
                  , f = [];
                for (i = 0; i < h - n - s - 2; i += 1)
                    f[i] = 0;
                var d = String.fromCharCode.apply(String, f) + "" + c
                  , g = wt(l, d.length, u)
                  , y = [];
                for (i = 0; i < d.length; i += 1)
                    y[i] = d.charCodeAt(i) ^ g.charCodeAt(i);
                var v = 65280 >> 8 * h - a & 255;
                for (y[0] &= ~v,
                i = 0; i < s; i++)
                    y.push(l.charCodeAt(i));
                return y.push(188),
                xt(this.doPrivate(new p(y)).toString(16), this.n.bitLength())
            }
            ,
            Y.prototype.signStringPSS = Pt,
            Y.prototype.signPSS = Pt,
            Y.SALT_LEN_HLEN = -1,
            Y.SALT_LEN_MAX = -2,
            Y.prototype.verifyWithMessageHash = function(t, e) {
                e = e.replace(bt, ""),
                e = e.replace(/[ \n]+/g, "");
                var n = G(e, 16);
                if (n.bitLength() > this.n.bitLength())
                    return 0;
                var i = this.doPublic(n)
                  , r = i.toString(16).replace(/^1f+00/, "")
                  , s = Ct(r);
                if (0 == s.length)
                    return !1;
                s[0];
                var a = s[1];
                return a == t
            }
            ,
            Y.prototype.verifyString = Dt,
            Y.prototype.verifyHexSignatureForMessage = Ot,
            Y.prototype.verify = Dt,
            Y.prototype.verifyHexSignatureForByteArrayMessage = Ot,
            Y.prototype.verifyWithMessageHashPSS = function(t, e, n, i) {
                var r = new p(e,16);
                if (r.bitLength() > this.n.bitLength())
                    return !1;
                var s, a = function(t) {
                    return o.crypto.Util.hashHex(t, n)
                }, h = ft(t), u = h.length, c = this.n.bitLength() - 1, l = Math.ceil(c / 8);
                if (-1 === i || void 0 === i)
                    i = u;
                else if (-2 === i)
                    i = l - u - 2;
                else if (i < -2)
                    throw "invalid salt length";
                if (l < u + i + 2)
                    throw "data too long";
                var f = this.doPublic(r).toByteArray();
                for (s = 0; s < f.length; s += 1)
                    f[s] &= 255;
                while (f.length < l)
                    f.unshift(0);
                if (188 !== f[l - 1])
                    throw "encoded message does not end in 0xbc";
                f = String.fromCharCode.apply(String, f);
                var d = f.substr(0, l - u - 1)
                  , g = f.substr(d.length, u)
                  , y = 65280 >> 8 * l - c & 255;
                if (0 !== (d.charCodeAt(0) & y))
                    throw "bits beyond keysize not zero";
                var v = wt(g, d.length, a)
                  , m = [];
                for (s = 0; s < d.length; s += 1)
                    m[s] = d.charCodeAt(s) ^ v.charCodeAt(s);
                m[0] &= ~y;
                var S = l - u - i - 2;
                for (s = 0; s < S; s += 1)
                    if (0 !== m[s])
                        throw "leftmost octets not zero";
                if (1 !== m[S])
                    throw "0x01 marker not found";
                return g === ft(a(dt("\0\0\0\0\0\0\0\0" + h + String.fromCharCode.apply(String, m.slice(-i)))))
            }
            ,
            Y.prototype.verifyStringPSS = Tt,
            Y.prototype.verifyPSS = Tt,
            Y.SALT_LEN_RECOVER = -2,
            jt.pemToBase64 = function(t) {
                var e = t;
                return e = e.replace("-----BEGIN CERTIFICATE-----", ""),
                e = e.replace("-----END CERTIFICATE-----", ""),
                e = e.replace(/[ \n]+/g, ""),
                e
            }
            ,
            jt.pemToHex = function(t) {
                return it.pemToHex(t)
            }
            ,
            jt.getSubjectPublicKeyPosFromCertHex = function(t) {
                var e = jt.getSubjectPublicKeyInfoPosFromCertHex(t);
                if (-1 == e)
                    return -1;
                var n = it.getPosArrayOfChildren_AtObj(t, e);
                if (2 != n.length)
                    return -1;
                var i = n[1];
                if ("03" != t.substring(i, i + 2))
                    return -1;
                var r = it.getStartPosOfV_AtObj(t, i);
                return "00" != t.substring(r, r + 2) ? -1 : r + 2
            }
            ,
            jt.getSubjectPublicKeyInfoPosFromCertHex = function(t) {
                var e = it.getStartPosOfV_AtObj(t, 0)
                  , n = it.getPosArrayOfChildren_AtObj(t, e);
                return n.length < 1 ? -1 : "a003020102" == t.substring(n[0], n[0] + 10) ? n.length < 6 ? -1 : n[6] : n.length < 5 ? -1 : n[5]
            }
            ,
            jt.getPublicKeyHexArrayFromCertHex = function(t) {
                var e = jt.getSubjectPublicKeyPosFromCertHex(t)
                  , n = it.getPosArrayOfChildren_AtObj(t, e);
                if (2 != n.length)
                    return [];
                var i = it.getHexOfV_AtObj(t, n[0])
                  , r = it.getHexOfV_AtObj(t, n[1]);
                return null != i && null != r ? [i, r] : []
            }
            ,
            jt.getHexTbsCertificateFromCert = function(t) {
                var e = it.getStartPosOfV_AtObj(t, 0);
                return e
            }
            ,
            jt.getPublicKeyHexArrayFromCertPEM = function(t) {
                var e = it.pemToHex(t)
                  , n = jt.getPublicKeyHexArrayFromCertHex(e);
                return n
            }
            ,
            jt.hex2dn = function(t, e) {
                if (void 0 === e && (e = 0),
                "30" !== t.substr(e, 2))
                    throw "malformed DN";
                for (var n = new Array, i = it.getPosArrayOfChildren_AtObj(t, e), r = 0; r < i.length; r++)
                    n.push(jt.hex2rdn(t, i[r]));
                return n = n.map((function(t) {
                    return t.replace("/", "\\/")
                }
                )),
                "/" + n.join("/")
            }
            ,
            jt.hex2rdn = function(t, e) {
                if (void 0 === e && (e = 0),
                "31" !== t.substr(e, 2))
                    throw "malformed RDN";
                for (var n = new Array, i = it.getPosArrayOfChildren_AtObj(t, e), r = 0; r < i.length; r++)
                    n.push(jt.hex2attrTypeValue(t, i[r]));
                return n = n.map((function(t) {
                    return t.replace("+", "\\+")
                }
                )),
                n.join("+")
            }
            ,
            jt.hex2attrTypeValue = function(t, e) {
                if (void 0 === e && (e = 0),
                "30" !== t.substr(e, 2))
                    throw "malformed attribute type and value";
                var n = it.getPosArrayOfChildren_AtObj(t, e);
                2 !== n.length || t.substr(n[0], 2);
                var i = it.getHexOfV_AtObj(t, n[0])
                  , r = o.asn1.ASN1Util.oidHexToInt(i)
                  , s = o.asn1.x509.OID.oid2atype(r)
                  , a = it.getHexOfV_AtObj(t, n[1])
                  , h = ft(a);
                return s + "=" + h
            }
            ,
            jt.getPublicKeyFromCertHex = function(t) {
                var e, n, i, r = 6, s = it, a = s.getVbyList;
                if (i = s.getDecendantHexTLVByNthList(t, 0, [0, 0]),
                "a003020102" !== i && (r = 5),
                n = a(t, 0, [0, r, 0, 0], "06"),
                "2a864886f70d010101" === n)
                    e = new Y;
                else if ("2a8648ce380401" === n)
                    e = new o.crypto.DSA;
                else {
                    if ("2a8648ce3d0201" !== n)
                        throw "unsupported public key in X.509 cert";
                    e = new o.crypto.ECDSA
                }
                return e.readCertPubKeyHex(t, r),
                e
            }
            ,
            jt.getPublicKeyFromCertPEM = function(t) {
                var e = it
                  , n = e.pemToHex(t);
                return jt.getPublicKeyFromCertHex(n)
            }
            ,
            jt.getPublicKeyInfoPropOfCertPEM = function(t) {
                var e = {
                    algparam: null
                }
                  , n = it.pemToHex(t)
                  , i = it.getPosArrayOfChildren_AtObj(n, 0);
                if (3 != i.length)
                    throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != n.substr(i[0], 2))
                    throw "malformed X.509 certificate PEM (code:002)";
                var r = it.getPosArrayOfChildren_AtObj(n, i[0])
                  , s = 6;
                if ("a0" !== n.substr(r[0], 2) && (s = 5),
                r.length < s + 1)
                    throw "malformed X.509 certificate PEM (code:003)";
                var a = it.getPosArrayOfChildren_AtObj(n, r[s]);
                if (2 != a.length)
                    throw "malformed X.509 certificate PEM (code:004)";
                var o = it.getPosArrayOfChildren_AtObj(n, a[0]);
                if (2 != o.length)
                    throw "malformed X.509 certificate PEM (code:005)";
                if (e.algoid = it.getHexOfV_AtObj(n, o[0]),
                "06" == n.substr(o[1], 2) ? e.algparam = it.getHexOfV_AtObj(n, o[1]) : "30" == n.substr(o[1], 2) && (e.algparam = it.getHexOfTLV_AtObj(n, o[1])),
                "03" != n.substr(a[1], 2))
                    throw "malformed X.509 certificate PEM (code:006)";
                var h = it.getHexOfV_AtObj(n, a[1]);
                return e.keyhex = h.substr(2),
                e
            }
            ,
            jt.getPublicKeyInfoPosOfCertHEX = function(t) {
                var e = it.getPosArrayOfChildren_AtObj(t, 0);
                if (3 != e.length)
                    throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != t.substr(e[0], 2))
                    throw "malformed X.509 certificate PEM (code:002)";
                var n = it.getPosArrayOfChildren_AtObj(t, e[0]);
                if (n.length < 7)
                    throw "malformed X.509 certificate PEM (code:003)";
                return n[6]
            }
            ,
            jt.getV3ExtInfoListOfCertHex = function(t) {
                var e = it.getPosArrayOfChildren_AtObj(t, 0);
                if (3 != e.length)
                    throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != t.substr(e[0], 2))
                    throw "malformed X.509 certificate PEM (code:002)";
                var n = it.getPosArrayOfChildren_AtObj(t, e[0]);
                if (n.length < 8)
                    throw "malformed X.509 certificate PEM (code:003)";
                if ("a3" != t.substr(n[7], 2))
                    throw "malformed X.509 certificate PEM (code:004)";
                var i = it.getPosArrayOfChildren_AtObj(t, n[7]);
                if (1 != i.length)
                    throw "malformed X.509 certificate PEM (code:005)";
                if ("30" != t.substr(i[0], 2))
                    throw "malformed X.509 certificate PEM (code:006)";
                for (var r = it.getPosArrayOfChildren_AtObj(t, i[0]), s = r.length, a = new Array(s), o = 0; o < s; o++)
                    a[o] = jt.getV3ExtItemInfo_AtObj(t, r[o]);
                return a
            }
            ,
            jt.getV3ExtItemInfo_AtObj = function(t, e) {
                var n = {};
                n.posTLV = e;
                var i = it.getPosArrayOfChildren_AtObj(t, e);
                if (2 != i.length && 3 != i.length)
                    throw "malformed X.509v3 Ext (code:001)";
                if ("06" != t.substr(i[0], 2))
                    throw "malformed X.509v3 Ext (code:002)";
                var r = it.getHexOfV_AtObj(t, i[0]);
                n.oid = it.hextooidstr(r),
                n.critical = !1,
                3 == i.length && (n.critical = !0);
                var s = i[i.length - 1];
                if ("04" != t.substr(s, 2))
                    throw "malformed X.509v3 Ext (code:003)";
                return n.posV = it.getStartPosOfV_AtObj(t, s),
                n
            }
            ,
            jt.getHexOfTLV_V3ExtValue = function(t, e) {
                var n = jt.getPosOfTLV_V3ExtValue(t, e);
                return -1 == n ? null : it.getHexOfTLV_AtObj(t, n)
            }
            ,
            jt.getHexOfV_V3ExtValue = function(t, e) {
                var n = jt.getPosOfTLV_V3ExtValue(t, e);
                return -1 == n ? null : it.getHexOfV_AtObj(t, n)
            }
            ,
            jt.getPosOfTLV_V3ExtValue = function(t, e) {
                var n = e;
                if (e.match(/^[0-9.]+$/) || (n = o.asn1.x509.OID.name2oid(e)),
                "" == n)
                    return -1;
                for (var i = jt.getV3ExtInfoListOfCertHex(t), r = 0; r < i.length; r++) {
                    var s = i[r];
                    if (s.oid == n)
                        return s.posV
                }
                return -1
            }
            ,
            jt.getExtBasicConstraints = function(t) {
                var e = jt.getHexOfV_V3ExtValue(t, "basicConstraints");
                if (null === e)
                    return null;
                if ("" === e)
                    return {};
                if ("0101ff" === e)
                    return {
                        cA: !0
                    };
                if ("0101ff02" === e.substr(0, 8)) {
                    var n = it.getHexOfV_AtObj(e, 6)
                      , i = parseInt(n, 16);
                    return {
                        cA: !0,
                        pathLen: i
                    }
                }
                throw "unknown error"
            }
            ,
            jt.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"],
            jt.getExtKeyUsageBin = function(t) {
                var e = jt.getHexOfV_V3ExtValue(t, "keyUsage");
                if ("" == e)
                    return "";
                if (e.length % 2 != 0 || e.length <= 2)
                    throw "malformed key usage value";
                var n = parseInt(e.substr(0, 2))
                  , i = parseInt(e.substr(2), 16).toString(2);
                return i.substr(0, i.length - n)
            }
            ,
            jt.getExtKeyUsageString = function(t) {
                for (var e = jt.getExtKeyUsageBin(t), n = new Array, i = 0; i < e.length; i++)
                    "1" == e.substr(i, 1) && n.push(jt.KEYUSAGE_NAME[i]);
                return n.join(",")
            }
            ,
            jt.getExtSubjectKeyIdentifier = function(t) {
                var e = jt.getHexOfV_V3ExtValue(t, "subjectKeyIdentifier");
                return e
            }
            ,
            jt.getExtAuthorityKeyIdentifier = function(t) {
                var e = {}
                  , n = jt.getHexOfTLV_V3ExtValue(t, "authorityKeyIdentifier");
                if (null === n)
                    return null;
                for (var i = it.getPosArrayOfChildren_AtObj(n, 0), r = 0; r < i.length; r++)
                    "80" === n.substr(i[r], 2) && (e.kid = it.getHexOfV_AtObj(n, i[r]));
                return e
            }
            ,
            jt.getExtExtKeyUsageName = function(t) {
                var e = new Array
                  , n = jt.getHexOfTLV_V3ExtValue(t, "extKeyUsage");
                if (null === n)
                    return null;
                for (var i = it.getPosArrayOfChildren_AtObj(n, 0), r = 0; r < i.length; r++) {
                    var s = it.getHexOfV_AtObj(n, i[r])
                      , a = o.asn1.ASN1Util.oidHexToInt(s)
                      , h = o.asn1.x509.OID.oid2name(a);
                    e.push(h)
                }
                return e
            }
            ,
            jt.getExtSubjectAltName = function(t) {
                for (var e = new Array, n = jt.getHexOfTLV_V3ExtValue(t, "subjectAltName"), i = it.getPosArrayOfChildren_AtObj(n, 0), r = 0; r < i.length; r++)
                    if ("82" === n.substr(i[r], 2)) {
                        var s = lt(it.getHexOfV_AtObj(n, i[r]));
                        e.push(s)
                    }
                return e
            }
            ,
            jt.getExtCRLDistributionPointsURI = function(t) {
                for (var e = new Array, n = jt.getHexOfTLV_V3ExtValue(t, "cRLDistributionPoints"), i = it.getPosArrayOfChildren_AtObj(n, 0), r = 0; r < i.length; r++)
                    for (var s = it.getHexOfTLV_AtObj(n, i[r]), a = it.getPosArrayOfChildren_AtObj(s, 0), o = 0; o < a.length; o++)
                        if ("a0" === s.substr(a[o], 2)) {
                            var h = it.getHexOfV_AtObj(s, a[o]);
                            if ("a0" === h.substr(0, 2)) {
                                var u = it.getHexOfV_AtObj(h, 0);
                                if ("86" === u.substr(0, 2)) {
                                    var c = it.getHexOfV_AtObj(u, 0)
                                      , l = lt(c);
                                    e.push(l)
                                }
                            }
                        }
                return e
            }
            ,
            jt.getExtAIAInfo = function(t) {
                var e = {
                    ocsp: [],
                    caissuer: []
                }
                  , n = jt.getPosOfTLV_V3ExtValue(t, "authorityInfoAccess");
                if (-1 == n)
                    return null;
                if ("30" != t.substr(n, 2))
                    throw "malformed AIA Extn Value";
                for (var i = it.getPosArrayOfChildren_AtObj(t, n), r = 0; r < i.length; r++) {
                    var s = i[r]
                      , a = it.getPosArrayOfChildren_AtObj(t, s);
                    if (2 != a.length)
                        throw "malformed AccessDescription of AIA Extn";
                    var o = a[0]
                      , h = a[1];
                    "2b06010505073001" == it.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.ocsp.push(lt(it.getHexOfV_AtObj(t, h))),
                    "2b06010505073002" == it.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.caissuer.push(lt(it.getHexOfV_AtObj(t, h)))
                }
                return e
            }
            ,
            jt.getSignatureAlgorithmName = function(t) {
                var e = it.getDecendantHexVByNthList(t, 0, [1, 0])
                  , n = o.asn1.ASN1Util.oidHexToInt(e)
                  , i = o.asn1.x509.OID.oid2name(n);
                return i
            }
            ,
            jt.getSignatureValueHex = function(t) {
                var e = it.getDecendantHexVByNthList(t, 0, [2]);
                if ("00" !== e.substr(0, 2))
                    throw "can't get signature value";
                return e.substr(2)
            }
            ,
            jt.getSerialNumberHex = function(t) {
                return it.getDecendantHexVByNthList(t, 0, [0, 1])
            }
            ,
            jt.verifySignature = function(t, e) {
                var n = jt.getSignatureAlgorithmName(t)
                  , i = jt.getSignatureValueHex(t)
                  , r = it.getDecendantHexTLVByNthList(t, 0, [0])
                  , s = new o.crypto.Signature({
                    alg: n
                });
                return s.init(e),
                s.updateHex(r),
                s.verify(i)
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.jws && o.jws || (o.jws = {}),
            o.jws.JWS = function() {
                var t = o.jws.JWS;
                this.parseJWS = function(e, n) {
                    if (void 0 === this.parsedJWS || !n && void 0 === this.parsedJWS.sigvalH) {
                        var i = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                        if (null == i)
                            throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                        var r = i[1]
                          , s = i[2]
                          , a = i[3]
                          , o = r + "." + s;
                        if (this.parsedJWS = {},
                        this.parsedJWS.headB64U = r,
                        this.parsedJWS.payloadB64U = s,
                        this.parsedJWS.sigvalB64U = a,
                        this.parsedJWS.si = o,
                        !n) {
                            var h = ut(a)
                              , u = G(h, 16);
                            this.parsedJWS.sigvalH = h,
                            this.parsedJWS.sigvalBI = u
                        }
                        var c = nt(r)
                          , l = nt(s);
                        if (this.parsedJWS.headS = c,
                        this.parsedJWS.payloadS = l,
                        !t.isSafeJSONString(c, this.parsedJWS, "headP"))
                            throw "malformed JSON string for JWS Head: " + c
                    }
                }
            }
            ,
            o.jws.JWS.sign = function(t, e, n, i, s) {
                var a, h, u, c = o.jws.JWS;
                if ("string" != typeof e && "object" != (0,
                r.default)(e))
                    throw "spHeader must be JSON string or object: " + e;
                if ("object" == (0,
                r.default)(e) && (h = e,
                a = JSON.stringify(h)),
                "string" == typeof e) {
                    if (a = e,
                    !c.isSafeJSONString(a))
                        throw "JWS Head is not safe JSON string: " + a;
                    h = c.readSafeJSONString(a)
                }
                if (u = n,
                "object" == (0,
                r.default)(n) && (u = JSON.stringify(n)),
                "" != t && null != t || void 0 === h.alg || (t = h.alg),
                "" != t && null != t && void 0 === h.alg && (h.alg = t,
                a = JSON.stringify(h)),
                t !== h.alg)
                    throw "alg and sHeader.alg doesn't match: " + t + "!=" + h.alg;
                var l = null;
                if (void 0 === c.jwsalg2sigalg[t])
                    throw "unsupported alg name: " + t;
                l = c.jwsalg2sigalg[t];
                var f = et(a)
                  , d = et(u)
                  , g = f + "." + d
                  , p = "";
                if ("Hmac" == l.substr(0, 4)) {
                    if (void 0 === i)
                        throw "mac key shall be specified for HS* alg";
                    var y = new o.crypto.Mac({
                        alg: l,
                        prov: "cryptojs",
                        pass: i
                    });
                    y.updateString(g),
                    p = y.doFinal()
                } else if (-1 != l.indexOf("withECDSA")) {
                    var v = new o.crypto.Signature({
                        alg: l
                    });
                    v.init(i, s),
                    v.updateString(g),
                    hASN1Sig = v.sign(),
                    p = o.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)
                } else if ("none" != l) {
                    v = new o.crypto.Signature({
                        alg: l
                    });
                    v.init(i, s),
                    v.updateString(g),
                    p = v.sign()
                }
                var m = ht(p);
                return g + "." + m
            }
            ,
            o.jws.JWS.verify = function(t, e, n) {
                var i = o.jws.JWS
                  , r = t.split(".")
                  , s = r[0]
                  , a = r[1]
                  , h = s + "." + a
                  , u = ut(r[2])
                  , c = i.readSafeJSONString(nt(r[0]))
                  , l = null
                  , f = null;
                if (void 0 === c.alg)
                    throw "algorithm not specified in header";
                if (l = c.alg,
                f = l.substr(0, 2),
                null != n && "[object Array]" === Object.prototype.toString.call(n) && n.length > 0) {
                    var d = ":" + n.join(":") + ":";
                    if (-1 == d.indexOf(":" + l + ":"))
                        throw "algorithm '" + l + "' not accepted in the list"
                }
                if ("none" != l && null === e)
                    throw "key shall be specified to verify.";
                if ("string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = St.getKey(e)),
                ("RS" == f || "PS" == f) && !(e instanceof Y))
                    throw "key shall be a RSAKey obj for RS* and PS* algs";
                if ("ES" == f && !(e instanceof o.crypto.ECDSA))
                    throw "key shall be a ECDSA obj for ES* algs";
                var g = null;
                if (void 0 === i.jwsalg2sigalg[c.alg])
                    throw "unsupported alg name: " + l;
                if (g = i.jwsalg2sigalg[l],
                "none" == g)
                    throw "not supported";
                if ("Hmac" == g.substr(0, 4)) {
                    var p;
                    if (void 0 === e)
                        throw "hexadecimal key shall be specified for HMAC";
                    var y = new o.crypto.Mac({
                        alg: g,
                        pass: e
                    });
                    return y.updateString(h),
                    p = y.doFinal(),
                    u == p
                }
                if (-1 != g.indexOf("withECDSA")) {
                    var v = null;
                    try {
                        v = o.crypto.ECDSA.concatSigToASN1Sig(u)
                    } catch (S) {
                        return !1
                    }
                    var m = new o.crypto.Signature({
                        alg: g
                    });
                    return m.init(e),
                    m.updateString(h),
                    m.verify(v)
                }
                m = new o.crypto.Signature({
                    alg: g
                });
                return m.init(e),
                m.updateString(h),
                m.verify(u)
            }
            ,
            o.jws.JWS.parse = function(t) {
                var e, n, i, r = t.split("."), s = {};
                if (2 != r.length && 3 != r.length)
                    throw "malformed sJWS: wrong number of '.' splitted elements";
                return e = r[0],
                n = r[1],
                3 == r.length && (i = r[2]),
                s.headerObj = o.jws.JWS.readSafeJSONString(nt(e)),
                s.payloadObj = o.jws.JWS.readSafeJSONString(nt(n)),
                s.headerPP = JSON.stringify(s.headerObj, null, "  "),
                null == s.payloadObj ? s.payloadPP = nt(n) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "),
                void 0 !== i && (s.sigHex = ut(i)),
                s
            }
            ,
            o.jws.JWS.verifyJWT = function(t, e, n) {
                var i = o.jws.JWS
                  , s = t.split(".")
                  , a = s[0]
                  , h = s[1]
                  , u = (ut(s[2]),
                i.readSafeJSONString(nt(a)))
                  , c = i.readSafeJSONString(nt(h));
                if (void 0 === u.alg)
                    return !1;
                if (void 0 === n.alg)
                    throw "acceptField.alg shall be specified";
                if (!i.inArray(u.alg, n.alg))
                    return !1;
                if (void 0 !== c.iss && "object" === (0,
                r.default)(n.iss) && !i.inArray(c.iss, n.iss))
                    return !1;
                if (void 0 !== c.sub && "object" === (0,
                r.default)(n.sub) && !i.inArray(c.sub, n.sub))
                    return !1;
                if (void 0 !== c.aud && "object" === (0,
                r.default)(n.aud))
                    if ("string" == typeof c.aud) {
                        if (!i.inArray(c.aud, n.aud))
                            return !1
                    } else if ("object" == (0,
                    r.default)(c.aud) && !i.includedArray(c.aud, n.aud))
                        return !1;
                var l = o.jws.IntDate.getNow();
                return void 0 !== n.verifyAt && "number" === typeof n.verifyAt && (l = n.verifyAt),
                void 0 !== n.gracePeriod && "number" === typeof n.gracePeriod || (n.gracePeriod = 0),
                !(void 0 !== c.exp && "number" == typeof c.exp && c.exp + n.gracePeriod < l) && (!(void 0 !== c.nbf && "number" == typeof c.nbf && l < c.nbf - n.gracePeriod) && (!(void 0 !== c.iat && "number" == typeof c.iat && l < c.iat - n.gracePeriod) && ((void 0 === c.jti || void 0 === n.jti || c.jti === n.jti) && !!o.jws.JWS.verify(t, e, n.alg))))
            }
            ,
            o.jws.JWS.includedArray = function(t, e) {
                var n = o.jws.JWS.inArray;
                if (null === t)
                    return !1;
                if ("object" !== (0,
                r.default)(t))
                    return !1;
                if ("number" !== typeof t.length)
                    return !1;
                for (var i = 0; i < t.length; i++)
                    if (!n(t[i], e))
                        return !1;
                return !0
            }
            ,
            o.jws.JWS.inArray = function(t, e) {
                if (null === e)
                    return !1;
                if ("object" !== (0,
                r.default)(e))
                    return !1;
                if ("number" !== typeof e.length)
                    return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] == t)
                        return !0;
                return !1
            }
            ,
            o.jws.JWS.jwsalg2sigalg = {
                HS256: "HmacSHA256",
                HS384: "HmacSHA384",
                HS512: "HmacSHA512",
                RS256: "SHA256withRSA",
                RS384: "SHA384withRSA",
                RS512: "SHA512withRSA",
                ES256: "SHA256withECDSA",
                ES384: "SHA384withECDSA",
                PS256: "SHA256withRSAandMGF1",
                PS384: "SHA384withRSAandMGF1",
                PS512: "SHA512withRSAandMGF1",
                none: "none"
            },
            o.jws.JWS.isSafeJSONString = function(t, e, n) {
                var i = null;
                try {
                    return i = tt(t),
                    "object" != (0,
                    r.default)(i) ? 0 : i.constructor === Array ? 0 : (e && (e[n] = i),
                    1)
                } catch (s) {
                    return 0
                }
            }
            ,
            o.jws.JWS.readSafeJSONString = function(t) {
                var e = null;
                try {
                    return e = tt(t),
                    "object" != (0,
                    r.default)(e) || e.constructor === Array ? null : e
                } catch (n) {
                    return null
                }
            }
            ,
            o.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
                var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
                if (null == e)
                    throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                return e[1]
            }
            ,
            o.jws.JWS.getJWKthumbprint = function(t) {
                if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty)
                    throw "unsupported algorithm for JWK Thumprint";
                var e = "{";
                if ("RSA" === t.kty) {
                    if ("string" != typeof t.n || "string" != typeof t.e)
                        throw "wrong n and e value for RSA key";
                    e += '"e":"' + t.e + '",',
                    e += '"kty":"' + t.kty + '",',
                    e += '"n":"' + t.n + '"}'
                } else if ("EC" === t.kty) {
                    if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y)
                        throw "wrong crv, x and y value for EC key";
                    e += '"crv":"' + t.crv + '",',
                    e += '"kty":"' + t.kty + '",',
                    e += '"x":"' + t.x + '",',
                    e += '"y":"' + t.y + '"}'
                } else if ("oct" === t.kty) {
                    if ("string" != typeof t.k)
                        throw "wrong k value for oct(symmetric) key";
                    e += '"kty":"' + t.kty + '",',
                    e += '"k":"' + t.k + '"}'
                }
                var n = dt(e)
                  , i = o.crypto.Util.hashHex(n, "sha256")
                  , r = ht(i);
                return r
            }
            ,
            o.jws.IntDate = {},
            o.jws.IntDate.get = function(t) {
                if ("now" == t)
                    return o.jws.IntDate.getNow();
                if ("now + 1hour" == t)
                    return o.jws.IntDate.getNow() + 3600;
                if ("now + 1day" == t)
                    return o.jws.IntDate.getNow() + 86400;
                if ("now + 1month" == t)
                    return o.jws.IntDate.getNow() + 2592e3;
                if ("now + 1year" == t)
                    return o.jws.IntDate.getNow() + 31536e3;
                if (t.match(/Z$/))
                    return o.jws.IntDate.getZulu(t);
                if (t.match(/^[0-9]+$/))
                    return parseInt(t);
                throw "unsupported format: " + t
            }
            ,
            o.jws.IntDate.getZulu = function(t) {
                var e = t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/);
                if (e) {
                    var n = e[1]
                      , i = parseInt(n);
                    if (4 == n.length)
                        ;
                    else {
                        if (2 != n.length)
                            throw "malformed year string";
                        if (50 <= i && i < 100)
                            i = 1900 + i;
                        else {
                            if (!(0 <= i && i < 50))
                                throw "malformed year string for UTCTime";
                            i = 2e3 + i
                        }
                    }
                    var r = parseInt(e[2]) - 1
                      , s = parseInt(e[3])
                      , a = parseInt(e[4])
                      , o = parseInt(e[5])
                      , h = parseInt(e[6])
                      , u = new Date(Date.UTC(i, r, s, a, o, h));
                    return ~~(u / 1e3)
                }
                throw "unsupported format: " + t
            }
            ,
            o.jws.IntDate.getNow = function() {
                var t = ~~(new Date / 1e3);
                return t
            }
            ,
            o.jws.IntDate.intDate2UTCString = function(t) {
                var e = new Date(1e3 * t);
                return e.toUTCString()
            }
            ,
            o.jws.IntDate.intDate2Zulu = function(t) {
                var e = new Date(1e3 * t)
                  , n = ("0000" + e.getUTCFullYear()).slice(-4)
                  , i = ("00" + (e.getUTCMonth() + 1)).slice(-2)
                  , r = ("00" + e.getUTCDate()).slice(-2)
                  , s = ("00" + e.getUTCHours()).slice(-2)
                  , a = ("00" + e.getUTCMinutes()).slice(-2)
                  , o = ("00" + e.getUTCSeconds()).slice(-2);
                return n + i + r + s + a + o + "Z"
            }
            ,
            "undefined" != typeof o && o || (o = {}),
            "undefined" != typeof o.jws && o.jws || (o.jws = {}),
            o.jws.JWSJS = function() {
                var t = o.jws.JWS
                  , e = o.jws.JWS;
                this.aHeader = [],
                this.sPayload = "",
                this.aSignature = [],
                this.init = function() {
                    this.aHeader = [],
                    this.sPayload = void 0,
                    this.aSignature = []
                }
                ,
                this.initWithJWS = function(t) {
                    this.init();
                    var e = t.split(".");
                    if (3 != e.length)
                        throw "malformed input JWS";
                    this.aHeader.push(e[0]),
                    this.sPayload = e[1],
                    this.aSignature.push(e[2])
                }
                ,
                this.addSignature = function(t, e, n, i) {
                    if (void 0 === this.sPayload || null === this.sPayload)
                        throw "there's no JSON-JS signature to add.";
                    var r = this.aHeader.length;
                    if (this.aHeader.length != this.aSignature.length)
                        throw "aHeader.length != aSignature.length";
                    try {
                        var s = o.jws.JWS.sign(t, e, this.sPayload, n, i)
                          , a = s.split(".");
                        a[0],
                        a[2];
                        this.aHeader.push(a[0]),
                        this.aSignature.push(a[2])
                    } catch (h) {
                        throw this.aHeader.length > r && this.aHeader.pop(),
                        this.aSignature.length > r && this.aSignature.pop(),
                        "addSignature failed: " + h
                    }
                }
                ,
                this.addSignatureByHeaderKey = function(t, e) {
                    var n = nt(this.sPayload)
                      , i = new o.jws.JWS;
                    i.generateJWSByP1PrvKey(t, n, e);
                    this.aHeader.push(i.parsedJWS.headB64U),
                    this.aSignature.push(i.parsedJWS.sigvalB64U)
                }
                ,
                this.addSignatureByHeaderPayloadKey = function(t, e, n) {
                    var i = new o.jws.JWS;
                    i.generateJWSByP1PrvKey(t, e, n);
                    this.aHeader.push(i.parsedJWS.headB64U),
                    this.sPayload = i.parsedJWS.payloadB64U,
                    this.aSignature.push(i.parsedJWS.sigvalB64U)
                }
                ,
                this.verifyAll = function(t) {
                    if (this.aHeader.length !== t.length || this.aSignature.length !== t.length)
                        return !1;
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (2 !== n.length)
                            return !1;
                        var i = this.verifyNth(e, n[0], n[1]);
                        if (!1 === i)
                            return !1
                    }
                    return !0
                }
                ,
                this.verifyNth = function(t, n, i) {
                    if (this.aHeader.length <= t || this.aSignature.length <= t)
                        return !1;
                    var r = this.aHeader[t]
                      , s = this.aSignature[t]
                      , a = r + "." + this.sPayload + "." + s
                      , o = !1;
                    try {
                        o = e.verify(a, n, i)
                    } catch (h) {
                        return !1
                    }
                    return o
                }
                ,
                this.verifyWithCerts = function(t) {
                    if (this.aHeader.length != t.length)
                        throw "num headers does not match with num certs";
                    if (this.aSignature.length != t.length)
                        throw "num signatures does not match with num certs";
                    for (var e = this.sPayload, n = "", i = 0; i < t.length; i++) {
                        var r = t[i]
                          , s = this.aHeader[i]
                          , a = this.aSignature[i]
                          , h = s + "." + e + "." + a
                          , u = new o.jws.JWS;
                        try {
                            var c = u.verifyJWSByPemX509Cert(h, r);
                            1 != c && (n += i + 1 + "th signature unmatch. ")
                        } catch (l) {
                            n += i + 1 + "th signature fail(" + l + "). "
                        }
                    }
                    if ("" == n)
                        return 1;
                    throw n
                }
                ,
                this.readJWSJS = function(e) {
                    if ("string" === typeof e) {
                        var n = t.readSafeJSONString(e);
                        if (null == n)
                            throw "argument is not safe JSON object string";
                        this.aHeader = n.headers,
                        this.sPayload = n.payload,
                        this.aSignature = n.signatures
                    } else
                        try {
                            if (!(e.headers.length > 0))
                                throw "malformed header";
                            if (this.aHeader = e.headers,
                            "string" !== typeof e.payload)
                                throw "malformed signatures";
                            if (this.sPayload = e.payload,
                            !(e.signatures.length > 0))
                                throw "malformed signatures";
                            this.signatures = e.signatures
                        } catch (i) {
                            throw "malformed JWS-JS JSON object: " + i
                        }
                }
                ,
                this.getJSON = function() {
                    return {
                        headers: this.aHeader,
                        payload: this.sPayload,
                        signatures: this.aSignature
                    }
                }
                ,
                this.isEmpty = function() {
                    return 0 == this.aHeader.length ? 1 : 0
                }
            }
            ;
            var It = Y;
            e.RSAKey2 = It;
            var Rt = St;
            e.KEYUTIL2 = Rt;
            var Bt = d;
            e.hex2b642 = Bt;
            var Nt = g;
            e.b64tohex2 = Nt
        }
        ).call(this, n("12e3").Buffer)
    },
    "8a31": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("c1ac")
          , r = n.n(i);
        for (var s in i)
            ["default"].indexOf(s) < 0 && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = r.a
    },
    "8d1f": function(t, e, n) {
        t.exports = n.p + "assets/uni.75745d34.ttf"
    },
    "8efb": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return r
        }
        )),
        n.d(e, "a", (function() {}
        ));
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("v-uni-text", {
                staticClass: "uni-icons",
                class: [t.customIcons, t.customIcons ? t.type : ""],
                style: {
                    color: t.color,
                    "font-size": t.size + "px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t._onClick.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.icons[t.type]))])
        }
          , r = []
    },
    9557: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("8efb")
          , r = n("8a31");
        for (var s in r)
            ["default"].indexOf(s) < 0 && function(t) {
                n.d(e, t, (function() {
                    return r[t]
                }
                ))
            }(s);
        n("3018");
        var a = n("828b")
          , o = Object(a["a"])(r["default"], i["b"], i["c"], !1, null, "30b9adea", null, !1, i["a"], void 0);
        e["default"] = o.exports
    },
    "9aec": function(t, e, n) {
        var i = n("0fc0");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var r = n("967d").default;
        r("28486b33", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c1ac: function(t, e, n) {
        "use strict";
        n("6a54");
        var i = n("f5bd").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        n("64aa");
        var r = i(n("d413"))
          , s = {
            name: "UniIcons",
            props: {
                type: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: "#333333"
                },
                size: {
                    type: [Number, String],
                    default: 16
                },
                customIcons: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    icons: r.default
                }
            },
            methods: {
                _onClick: function() {
                    this.$emit("click")
                }
            }
        };
        e.default = s
    },
    d413: function(t, e, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        e.default = {
            pulldown: "",
            refreshempty: "",
            back: "",
            forward: "",
            more: "",
            "more-filled": "",
            scan: "",
            qq: "",
            weibo: "",
            weixin: "",
            pengyouquan: "",
            loop: "",
            refresh: "",
            "refresh-filled": "",
            arrowthindown: "",
            arrowthinleft: "",
            arrowthinright: "",
            arrowthinup: "",
            "undo-filled": "",
            undo: "",
            redo: "",
            "redo-filled": "",
            bars: "",
            chatboxes: "",
            camera: "",
            "chatboxes-filled": "",
            "camera-filled": "",
            "cart-filled": "",
            cart: "",
            "checkbox-filled": "",
            checkbox: "",
            arrowleft: "",
            arrowdown: "",
            arrowright: "",
            "smallcircle-filled": "",
            arrowup: "",
            circle: "",
            "eye-filled": "",
            "eye-slash-filled": "",
            "eye-slash": "",
            eye: "",
            "flag-filled": "",
            flag: "",
            "gear-filled": "",
            reload: "",
            gear: "",
            "hand-thumbsdown-filled": "",
            "hand-thumbsdown": "",
            "hand-thumbsup-filled": "",
            "heart-filled": "",
            "hand-thumbsup": "",
            heart: "",
            home: "",
            info: "",
            "home-filled": "",
            "info-filled": "",
            "circle-filled": "",
            "chat-filled": "",
            chat: "",
            "mail-open-filled": "",
            "email-filled": "",
            "mail-open": "",
            email: "",
            checkmarkempty: "",
            list: "",
            "locked-filled": "",
            locked: "",
            "map-filled": "",
            "map-pin": "",
            "map-pin-ellipse": "",
            map: "",
            "minus-filled": "",
            "mic-filled": "",
            minus: "",
            micoff: "",
            mic: "",
            clear: "",
            smallcircle: "",
            close: "",
            closeempty: "",
            paperclip: "",
            paperplane: "",
            "paperplane-filled": "",
            "person-filled": "",
            "contact-filled": "",
            person: "",
            contact: "",
            "images-filled": "",
            phone: "",
            images: "",
            image: "",
            "image-filled": "",
            "location-filled": "",
            location: "",
            "plus-filled": "",
            plus: "",
            plusempty: "",
            "help-filled": "",
            help: "",
            "navigate-filled": "",
            navigate: "",
            "mic-slash-filled": "",
            search: "",
            settings: "",
            sound: "",
            "sound-filled": "",
            "spinner-cycle": "",
            "download-filled": "",
            "personadd-filled": "",
            "videocam-filled": "",
            personadd: "",
            upload: "",
            "upload-filled": "",
            starhalf: "",
            "star-filled": "",
            star: "",
            trash: "",
            "phone-filled": "",
            compose: "",
            videocam: "",
            "trash-filled": "",
            download: "",
            "chatbubble-filled": "",
            chatbubble: "",
            "cloud-download": "",
            "cloud-upload-filled": "",
            "cloud-upload": "",
            "cloud-download-filled": "",
            headphones: "",
            shop: ""
        }
    },
    fadf: function(t, e, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.RSADecrypt = function(t, e) {
            var n = "-----BEGIN PRIVATE KEY-----" + e + "-----END PRIVATE KEY-----"
              , r = new i.RSAKey2;
            r = i.KEYUTIL2.getKey(n);
            var s = i.b64tohex2(t)
              , a = r.decrypt(s);
            return console.log("解密结果：" + a),
            a
        }
        ,
        e.RSAEncrypt = function(t, e) {
            var n = "-----BEGIN PUBLIC KEY-----" + e + "-----END PUBLIC KEY-----"
              , r = new i.RSAKey2;
            r = i.KEYUTIL2.getKey(n);
            var s = r.encrypt(t);
            return s = i.hex2b642(s),
            s
        }
        ;
        var i = n("88a7")
    }
}]);
