window = global;
require("./mod");

(function(e) {
    function n(n) {
        for (var a, c, r = n[0], u = n[1], l = n[2], s = 0, d = []; s < r.length; s++)
            c = r[s],
            o[c] && d.push(o[c][0]),
            o[c] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        f && f(n);
        while (d.length)
            d.shift()();
        return i.push.apply(i, l || []),
        t()
    }
    function t() {
        for (var e, n = 0; n < i.length; n++) {
            for (var t = i[n], a = !0, c = 1; c < t.length; c++) {
                var r = t[c];
                0 !== o[r] && (a = !1)
            }
            a && (i.splice(n--, 1),
            e = u(u.s = t[0]))
        }
        return e
    }
    var a = {}
      , c = {
        app: 0
    }
      , o = {
        app: 0
    }
      , i = [];
    function r(e) {
        return u.p + "js/" + ({
            "baosteel.print-js": "baosteel.print-js",
            "baosteel.better-scroll": "baosteel.better-scroll",
            "baosteel.async-validator": "baosteel.async-validator",
            "baosteel.mescroll.js": "baosteel.mescroll.js"
        }[e] || e) + "." + {
            "baosteel.print-js": "2fd5230b",
            "baosteel.better-scroll": "360c6d57",
            "chunk-3a2e2ef7": "b731bfc9",
            "chunk-02d9a221": "2f2b4499",
            "chunk-179fa765": "1bd9793c",
            "chunk-17a469ab": "39a31dad",
            "chunk-39ce61dc": "3bc4508b",
            "chunk-42cbf744": "3728a300",
            "chunk-644739be": "e841dcf0",
            "chunk-6c675123": "58273bdf",
            "chunk-96f435b2": "0fe4ed81",
            "chunk-a1be8d18": "db93c197",
            "chunk-b5d291a0": "01f9c186",
            "chunk-d4f51f38": "038c35b7",
            "chunk-d9b2e108": "ad664165",
            "chunk-0232907b": "961d0f50",
            "chunk-0767c0eb": "96d01d85",
            "chunk-084d7775": "cd951abf",
            "chunk-08632aa1": "b0c8b23b",
            "chunk-087ac05b": "408d66d1",
            "chunk-08df5186": "4fd10ca9",
            "chunk-0a87e440": "b0e54a17",
            "chunk-0c88acb0": "fee6083b",
            "chunk-159c2c30": "beb71a1d",
            "chunk-15cc0053": "c17452fc",
            "chunk-17f36c82": "46f8b9fc",
            "chunk-196419cc": "f2da2f89",
            "chunk-1ec999f4": "b84a049a",
            "chunk-273518f9": "8b88c65c",
            "chunk-2a056f74": "054cbe75",
            "chunk-2aedf43e": "17dca851",
            "chunk-2ed6ef5a": "ae0d1f53",
            "chunk-3292274a": "32dc8a7b",
            "chunk-34653310": "11c1c93d",
            "chunk-38e45747": "1f28a60b",
            "chunk-3c6bf500": "ad8539b1",
            "chunk-3f7cf150": "83e6fec3",
            "chunk-40e0d3c2": "e871bbf6",
            "chunk-4a26fcca": "a91fc865",
            "chunk-4cd9ae00": "2f1171ef",
            "chunk-4db384ee": "cd8fda01",
            "chunk-50f9b3e8": "2a21d2f5",
            "chunk-53105efc": "0466cf08",
            "chunk-53595737": "2b5a9859",
            "chunk-5b41f7d6": "bf9a477c",
            "chunk-5f4b5251": "a4ec9d66",
            "chunk-60e3720e": "3476d23d",
            "chunk-61081776": "cadb6917",
            "chunk-621b1556": "de068614",
            "chunk-6fe0ef84": "9f3887d8",
            "chunk-701203d4": "281e5ca3",
            "chunk-72fab4a8": "2541de94",
            "chunk-75113b9a": "328bd016",
            "chunk-78cf29e4": "34289436",
            "chunk-7c289b82": "df7849d0",
            "chunk-7c36a501": "2abca818",
            "chunk-90d69d14": "ba5c0b81",
            "chunk-9138e300": "b041ef2e",
            "chunk-a22e67b6": "82bb153c",
            "chunk-a30246c2": "1e719790",
            "chunk-a38b74ae": "14194869",
            "chunk-af7742f8": "ca21ccdd",
            "chunk-b71968a8": "8a21dade",
            "chunk-bed7ba2a": "57386f7a",
            "chunk-c50e208e": "7709bcd8",
            "chunk-ca72283e": "3ea2c4d4",
            "chunk-daa6f252": "f3b4088e",
            "chunk-dbc5f3f4": "45be091e",
            "chunk-dc9e3a22": "dd5160f5",
            "chunk-e65958d2": "4efaee00",
            "chunk-ef65da46": "f3ddd3b1",
            "chunk-ef680bba": "09651ec5",
            "chunk-f6ba85fc": "a2bbcc1c",
            "baosteel.async-validator": "f4730761",
            "chunk-8a38ecb0": "b6eee9e9",
            "baosteel.mescroll.js": "98f2f473",
            "chunk-4c773119": "23b8a8c0",
            "chunk-12601796": "21e0b44b",
            "chunk-20b0c586": "a387cb57",
            "chunk-36e2aa4b": "0944d04b",
            "chunk-4b50dc09": "fb117748",
            "chunk-6013bc44": "bf63f196"
        }[e] + ".js"
    }
    function u(n) {
        if (a[n])
            return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        console.log("加载的模块为:", n);
        return e[n].call(t.exports, t, t.exports, u),
        t.l = !0,
        t.exports
    }
    window.xxx = u;
    u.e = function(e) {
        var n = []
          , t = {
            "chunk-3a2e2ef7": 1,
            "chunk-02d9a221": 1,
            "chunk-179fa765": 1,
            "chunk-17a469ab": 1,
            "chunk-39ce61dc": 1,
            "chunk-42cbf744": 1,
            "chunk-644739be": 1,
            "chunk-6c675123": 1,
            "chunk-96f435b2": 1,
            "chunk-a1be8d18": 1,
            "chunk-b5d291a0": 1,
            "chunk-d4f51f38": 1,
            "chunk-d9b2e108": 1,
            "chunk-0232907b": 1,
            "chunk-0767c0eb": 1,
            "chunk-084d7775": 1,
            "chunk-08632aa1": 1,
            "chunk-087ac05b": 1,
            "chunk-08df5186": 1,
            "chunk-0a87e440": 1,
            "chunk-0c88acb0": 1,
            "chunk-159c2c30": 1,
            "chunk-15cc0053": 1,
            "chunk-17f36c82": 1,
            "chunk-196419cc": 1,
            "chunk-1ec999f4": 1,
            "chunk-273518f9": 1,
            "chunk-2a056f74": 1,
            "chunk-2aedf43e": 1,
            "chunk-2ed6ef5a": 1,
            "chunk-3292274a": 1,
            "chunk-34653310": 1,
            "chunk-38e45747": 1,
            "chunk-3c6bf500": 1,
            "chunk-3f7cf150": 1,
            "chunk-40e0d3c2": 1,
            "chunk-4a26fcca": 1,
            "chunk-4cd9ae00": 1,
            "chunk-4db384ee": 1,
            "chunk-50f9b3e8": 1,
            "chunk-53105efc": 1,
            "chunk-53595737": 1,
            "chunk-5b41f7d6": 1,
            "chunk-5f4b5251": 1,
            "chunk-60e3720e": 1,
            "chunk-61081776": 1,
            "chunk-621b1556": 1,
            "chunk-6fe0ef84": 1,
            "chunk-701203d4": 1,
            "chunk-72fab4a8": 1,
            "chunk-75113b9a": 1,
            "chunk-78cf29e4": 1,
            "chunk-7c289b82": 1,
            "chunk-7c36a501": 1,
            "chunk-90d69d14": 1,
            "chunk-9138e300": 1,
            "chunk-a22e67b6": 1,
            "chunk-a30246c2": 1,
            "chunk-a38b74ae": 1,
            "chunk-af7742f8": 1,
            "chunk-b71968a8": 1,
            "chunk-bed7ba2a": 1,
            "chunk-c50e208e": 1,
            "chunk-ca72283e": 1,
            "chunk-daa6f252": 1,
            "chunk-dbc5f3f4": 1,
            "chunk-dc9e3a22": 1,
            "chunk-e65958d2": 1,
            "chunk-ef65da46": 1,
            "chunk-ef680bba": 1,
            "chunk-f6ba85fc": 1,
            "chunk-8a38ecb0": 1,
            "baosteel.mescroll.js": 1,
            "chunk-4c773119": 1,
            "chunk-12601796": 1,
            "chunk-20b0c586": 1,
            "chunk-36e2aa4b": 1,
            "chunk-4b50dc09": 1,
            "chunk-6013bc44": 1
        };
        c[e] ? n.push(c[e]) : 0 !== c[e] && t[e] && n.push(c[e] = new Promise(function(n, t) {
            for (var a = "css/" + ({
                "baosteel.print-js": "baosteel.print-js",
                "baosteel.better-scroll": "baosteel.better-scroll",
                "baosteel.async-validator": "baosteel.async-validator",
                "baosteel.mescroll.js": "baosteel.mescroll.js"
            }[e] || e) + "." + {
                "baosteel.print-js": "31d6cfe0",
                "baosteel.better-scroll": "31d6cfe0",
                "chunk-3a2e2ef7": "0ca9f242",
                "chunk-02d9a221": "44f857a6",
                "chunk-179fa765": "cd30b3fc",
                "chunk-17a469ab": "4ea07c79",
                "chunk-39ce61dc": "dd3fcbe7",
                "chunk-42cbf744": "9db74cfc",
                "chunk-644739be": "6ffc978b",
                "chunk-6c675123": "e467b181",
                "chunk-96f435b2": "05ed21e6",
                "chunk-a1be8d18": "a15d4cf1",
                "chunk-b5d291a0": "e3ffcd1f",
                "chunk-d4f51f38": "9685571f",
                "chunk-d9b2e108": "c59ecf35",
                "chunk-0232907b": "a0de7ba4",
                "chunk-0767c0eb": "399786ae",
                "chunk-084d7775": "7231fb2c",
                "chunk-08632aa1": "024f9979",
                "chunk-087ac05b": "67900ea0",
                "chunk-08df5186": "592fa5ca",
                "chunk-0a87e440": "5646f6fc",
                "chunk-0c88acb0": "a0b2ca24",
                "chunk-159c2c30": "e862cd87",
                "chunk-15cc0053": "d5c362d9",
                "chunk-17f36c82": "16099692",
                "chunk-196419cc": "4ad1288f",
                "chunk-1ec999f4": "4a269699",
                "chunk-273518f9": "34a2861c",
                "chunk-2a056f74": "2c20d146",
                "chunk-2aedf43e": "75d03ab3",
                "chunk-2ed6ef5a": "7cbdf52a",
                "chunk-3292274a": "9d3dac3c",
                "chunk-34653310": "89c0dd31",
                "chunk-38e45747": "0a08a06d",
                "chunk-3c6bf500": "5a551e73",
                "chunk-3f7cf150": "c6b41ec9",
                "chunk-40e0d3c2": "2c20d146",
                "chunk-4a26fcca": "740313a3",
                "chunk-4cd9ae00": "247ab54f",
                "chunk-4db384ee": "e2840ac3",
                "chunk-50f9b3e8": "1c126bae",
                "chunk-53105efc": "750dcefc",
                "chunk-53595737": "f5e013cd",
                "chunk-5b41f7d6": "1a0ecfa7",
                "chunk-5f4b5251": "80345ae7",
                "chunk-60e3720e": "6bd2d0c0",
                "chunk-61081776": "b21574b1",
                "chunk-621b1556": "2ff50259",
                "chunk-6fe0ef84": "33f11650",
                "chunk-701203d4": "4754d465",
                "chunk-72fab4a8": "6c950263",
                "chunk-75113b9a": "850bd685",
                "chunk-78cf29e4": "9e386100",
                "chunk-7c289b82": "5e9f21a7",
                "chunk-7c36a501": "8f9af2d6",
                "chunk-90d69d14": "c339c17b",
                "chunk-9138e300": "3930829d",
                "chunk-a22e67b6": "e2827d72",
                "chunk-a30246c2": "e361a4a2",
                "chunk-a38b74ae": "003c6ad4",
                "chunk-af7742f8": "f4d4b163",
                "chunk-b71968a8": "2c20d146",
                "chunk-bed7ba2a": "a3e8cf77",
                "chunk-c50e208e": "4a1ba65a",
                "chunk-ca72283e": "62f410cc",
                "chunk-daa6f252": "a6def799",
                "chunk-dbc5f3f4": "212d1871",
                "chunk-dc9e3a22": "2c20d146",
                "chunk-e65958d2": "ff5ecf31",
                "chunk-ef65da46": "52539b5b",
                "chunk-ef680bba": "21f37ea8",
                "chunk-f6ba85fc": "25431aa3",
                "baosteel.async-validator": "31d6cfe0",
                "chunk-8a38ecb0": "d57152c7",
                "baosteel.mescroll.js": "e8e2fe33",
                "chunk-4c773119": "76078dc7",
                "chunk-12601796": "e46e1651",
                "chunk-20b0c586": "8286ae33",
                "chunk-36e2aa4b": "cecfbae8",
                "chunk-4b50dc09": "3b13078d",
                "chunk-6013bc44": "e9fc0ff4"
            }[e] + ".css", o = u.p + a, i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
                var l = i[r]
                  , s = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (s === a || s === o))
                    return n()
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
                l = d[r],
                s = l.getAttribute("data-href");
                if (s === a || s === o)
                    return n()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = n,
            f.onerror = function(n) {
                var a = n && n.target && n.target.src || o
                  , i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                i.request = a,
                delete c[e],
                f.parentNode.removeChild(f),
                t(i)
            }
            ,
            f.href = o;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        }
        ).then(function() {
            c[e] = 0
        }));
        var a = o[e];
        if (0 !== a)
            if (a)
                n.push(a[2]);
            else {
                var i = new Promise(function(n, t) {
                    a = o[e] = [n, t]
                }
                );
                n.push(a[2] = i);
                var l, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                u.nc && s.setAttribute("nonce", u.nc),
                s.src = r(e),
                l = function(n) {
                    s.onerror = s.onload = null,
                    clearTimeout(d);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var a = n && ("load" === n.type ? "missing" : n.type)
                              , c = n && n.target && n.target.src
                              , i = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + c + ")");
                            i.type = a,
                            i.request = c,
                            t[1](i)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout(function() {
                    l({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = l,
                document.head.appendChild(s)
            }
        return Promise.all(n)
    }
    ,
    u.m = e,
    u.c = a,
    u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    u.t = function(e, n) {
        if (1 & n && (e = u(e)),
        8 & n)
            return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (u.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var a in e)
                u.d(t, a, function(n) {
                    return e[n]
                }
                .bind(null, a));
        return t
    }
    ,
    u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return u.d(n, "a", n),
        n
    }
    ,
    u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    u.p = "/",
    u.oe = function(e) {
        throw e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = l.push.bind(l);
    l.push = n,
    l = l.slice();
    for (var d = 0; d < l.length; d++)
        n(l[d]);
    var f = s;
    i.push([0, "baosteel.regenerator-runtime", "baosteel.element-ui", "baosteel.core-js", "baosteel.crypto-js", "baosteel.axios", "baosteel.swiper", "baosteel.animate.css", "baosteel.vue-amap", "baosteel.vue-i18n", "baosteel.vue-router", "baosteel.vue-social-share", "baosteel.vue", "baosteel.vuex", "vendors~app"]),
    t()
}
)({
    0: function(e, n, t) {
        e.exports = t("56d7")
    },
    "0e61": function(e, n, t) {},
    "13a3": function(e, n, t) {
        "use strict";
        var a = t("5d92")
          , c = t.n(a);
        c.a
    },
    "267b": function(e, n, t) {
        "use strict";
        var a = t("c000")
          , c = t.n(a);
        c.a
    },
    "2c03": function(e, n, t) {},
    "403a": function(e, n) {
        n.install = function(e, n) {
            e.prototype.G = {
                offPageScroll: function() {
                    document.body.style.height = "100vh",
                    document.body.style.overflow = "hidden"
                },
                onPageScroll: function() {
                    document.body.style.height = "inherit",
                    document.body.style.overflow = ""
                },
                apiErr: function(e) {
                    alert("请求错误")
                }
            }
        }
    },
    4360: function(e, n, t) {
        "use strict";
        var a = t("2b0e")
          , c = t("2f62")
          , o = t("a78e")
          , i = t.n(o)
          , r = {
            state: {
                language: i.a.get("language") || "zh",
                device: "desktop",
                topBgHeight: 500,
                barList: [],
                isMenuOpened: !1,
                isSubMenuOpened: !1,
                isBarSearchOpened: !1,
                nodeMap: null,
                mediaListPath: {
                    pre: "/",
                    current: "/",
                    next: "/"
                },
                appNewScroll: 0
            },
            mutations: {
                SET_LANGUAGE: function(e, n) {
                    e.language = n,
                    i.a.set("language", n)
                },
                TOGGLE_DEVICE: function(e, n) {
                    e.device = n
                },
                SET_TOP_BG_HEIGHT: function(e, n) {
                    e.topBgHeight = n
                },
                SET_BAR_LIST: function(e, n) {
                    e.barList = n
                },
                SET_IS_MENU_OPENED: function(e, n) {
                    e.isMenuOpened = n
                },
                SET_IS_SUB_MENU_OPENED: function(e, n) {
                    e.isSubMenuOpened = n
                },
                SET_MEIALISTPATH: function(e, n) {
                    e.mediaListPath = n
                },
                SET_IS_BAR_SEARCH_OPENED: function(e, n) {
                    e.isBarSearchOpened = n
                },
                SET_APP_NEW_SCROLL: function(e, n) {
                    e.appNewScroll = n
                },
                SET_NODE_MAP: function(e, n) {
                    var t = function n(t) {
                        t.forEach(function(t) {
                            (e.nodeMap || (e.nodeMap = {}))[t.nodeId] = t,
                            t.childs && t.childs.length && n(t.childs)
                        })
                    };
                    t(n)
                }
            },
            actions: {
                setLanguage: function(e, n) {
                    var t = e.commit;
                    t("SET_LANGUAGE", n)
                },
                toggleDevice: function(e, n) {
                    var t = e.commit;
                    t("TOGGLE_DEVICE", n)
                },
                settopBgHeight: function(e, n) {
                    var t = e.commit;
                    t("SET_TOP_BG_HEIGHT", n)
                },
                setbarList: function(e, n) {
                    var t = e.commit;
                    t("SET_BAR_LIST", n)
                },
                setIsMenuOpened: function(e, n) {
                    var t = e.commit;
                    t("SET_IS_MENU_OPENED", n)
                },
                setIsSubMenuOpened: function(e, n) {
                    var t = e.commit;
                    t("SET_IS_SUB_MENU_OPENED", n)
                },
                setIsBarSearchOpened: function(e, n) {
                    var t = e.commit;
                    t("SET_IS_BAR_SEARCH_OPENED", n)
                },
                setmediaListPath: function(e, n) {
                    var t = e.commit;
                    t("SET_MEIALISTPATH", n)
                },
                setAppNewScroll: function(e, n) {
                    var t = e.commit;
                    t("SET_APP_NEW_SCROLL", n)
                }
            }
        }
          , u = r
          , l = {
            state: {
                activeIndex: null,
                slideToIndex: null,
                initialized: !1,
                homeData: []
            },
            mutations: {
                SET_ACTIVE_INDEX: function(e, n) {
                    e.activeIndex = n
                },
                SET_INITIALIZED: function(e, n) {
                    e.initialized = n
                },
                SET_SLIDE_TO_INDEX: function(e, n) {
                    e.slideToIndex = n
                },
                SET_SLIDE_TO_NEXT: function(e, n) {
                    e.slideToIndex = e.activeIndex + n
                },
                SET_HOMEDATA: function(e, n) {
                    e.homeData = n
                },
                RESET_DATA: function(e) {
                    e.activeIndex = null,
                    e.slideToIndex = null,
                    e.initialized = !1
                }
            },
            actions: {
                setActiveIndex: function(e, n) {
                    var t = e.commit;
                    t("SET_ACTIVE_INDEX", n)
                },
                setInitialized: function(e, n) {
                    var t = e.commit;
                    t("SET_INITIALIZED", n)
                },
                setSlideToIndex: function(e, n) {
                    var t = e.commit;
                    t("SET_SLIDE_TO_INDEX", n)
                },
                setSlideToNext: function(e, n) {
                    var t = e.commit;
                    t("SET_SLIDE_TO_NEXT", n)
                },
                setHomeData: function(e, n) {
                    var t = e.commit;
                    t("SET_HOMEDATA", n)
                },
                resetData: function(e) {
                    var n = e.commit;
                    n("RESET_DATA")
                }
            }
        }
          , s = l
          , d = {
            language: function(e) {
                return e.app.language
            },
            device: function(e) {
                return e.app.device
            },
            topBgHeight: function(e) {
                return e.app.topBgHeight
            },
            barList: function(e) {
                return e.app.barList
            },
            isMenuOpened: function(e) {
                return e.app.isMenuOpened
            },
            isSubMenuOpened: function(e) {
                return e.app.isSubMenuOpened
            },
            isBarSearchOpened: function(e) {
                return e.app.isBarSearchOpened
            },
            appNewScroll: function(e) {
                return e.app.appNewScroll
            },
            nodeMap: function(e) {
                return e.app.nodeMap
            },
            activeIndex: function(e) {
                return e.home.activeIndex
            },
            initialized: function(e) {
                return e.home.initialized
            },
            slideToIndex: function(e) {
                return e.home.slideToIndex
            },
            homeData: function(e) {
                return e.home.homeData
            }
        }
          , f = d;
        a["default"].use(c["a"]);
        var h = new c["a"].Store({
            modules: {
                app: u,
                home: s
            },
            getters: f
        });
        n["a"] = h
    },
    "4ac6": function(e, n, t) {
        "use strict";
        var a = t("2c03")
          , c = t.n(a);
        c.a
    },
    "4b4f": function(e, n, t) {},
    "4b4f7": function(e, n, t) {
        "use strict";
        var a = t("c961")
          , c = t.n(a);
        c.a
    },
    5011: function(e, n, t) {},
    "51b9": function(e, n, t) {
        "use strict";
        var a = t("f581")
          , c = t.n(a);
        c.a
    },
    "56d7": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = {};
        t.r(a),
        t.d(a, "formatNum", function() {
            return O
        });
        t("744f"),
        t("6c7b"),
        t("7514"),
        t("20d6"),
        t("1c4c"),
        t("6762"),
        t("cadf"),
        t("e804"),
        t("55dd"),
        t("d04f"),
        t("c8ce"),
        t("217b"),
        t("7f7f"),
        t("f400"),
        t("7f25"),
        t("536b"),
        t("d9ab"),
        t("f9ab"),
        t("32d7"),
        t("25c9"),
        t("9f3c"),
        t("042e"),
        t("c7c6"),
        t("f4ff"),
        t("049f"),
        t("7872"),
        t("a69f"),
        t("0b21"),
        t("6c1a"),
        t("c7c62"),
        t("84b4"),
        t("c5f6"),
        t("2e37"),
        t("fca0"),
        t("7cdf"),
        t("ee1d"),
        t("b1b1"),
        t("87f3"),
        t("9278"),
        t("5df2"),
        t("04ff"),
        t("f751"),
        t("4504"),
        t("fee7"),
        t("ffc1"),
        t("0d6d"),
        t("9986"),
        t("8e6e"),
        t("25db"),
        t("e4f7"),
        t("b9a1"),
        t("64d5"),
        t("9aea"),
        t("db97"),
        t("66c8"),
        t("57f0"),
        t("165b"),
        t("456d"),
        t("cf6a"),
        t("fd24"),
        t("8615"),
        t("551c"),
        t("097d"),
        t("df1b"),
        t("2397"),
        t("88ca"),
        t("ba16"),
        t("d185"),
        t("ebde"),
        t("2d34"),
        t("f6b3"),
        t("2251"),
        t("c698"),
        t("a19f"),
        t("9253"),
        t("9275"),
        t("3b2b"),
        t("3846"),
        t("4917"),
        t("a481"),
        t("28a5"),
        t("386d"),
        t("6b54"),
        t("4f7f"),
        t("8a81"),
        t("ac4d"),
        t("8449"),
        t("9c86"),
        t("fa83"),
        t("48c0"),
        t("a032"),
        t("aef6"),
        t("d263"),
        t("6c37"),
        t("9ec8"),
        t("5695"),
        t("2fdb"),
        t("d0b0"),
        t("5df3"),
        t("b54a"),
        t("f576"),
        t("ed50"),
        t("788d"),
        t("14b9"),
        t("f386"),
        t("f559"),
        t("1448"),
        t("673e"),
        t("242a"),
        t("c66f"),
        t("b05c"),
        t("34ef"),
        t("6aa2"),
        t("15ac"),
        t("af56"),
        t("b6e4"),
        t("9c29"),
        t("63d9"),
        t("4dda"),
        t("10ad"),
        t("c02b"),
        t("4795"),
        t("130f"),
        t("ac6a"),
        t("96cf");
        var c = t("2b0e")
          , o = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("keep-alive", [e.$route.meta.keepAlive ? t("router-view") : e._e()], 1), e.$route.meta.keepAlive ? e._e() : t("router-view")], 1)
        }
          , i = []
          , r = {
            name: "App"
        }
          , u = r
          , l = (t("4ac6"),
        t("2877"))
          , s = Object(l["a"])(u, o, i, !1, null, "3cf447a2", null)
          , d = s.exports
          , f = t("a18c")
          , h = t("4360")
          , b = t("7212")
          , m = t.n(b)
          , p = (t("dfa4"),
        t("a925"))
          , k = t("a78e")
          , v = t.n(k)
          , g = {
            allMenu: {
                openSubmenu: "打开子菜单",
                closeSubmenu: "关闭子菜单"
            }
        }
          , I = {
            allMenu: {
                openSubmenu: "打开子菜单",
                closeSubmenu: "关闭子菜单"
            }
        };
        c["default"].use(p["a"]);
        var y = {
            en: g,
            zh: I
        }
          , j = new p["a"]({
            locale: v.a.get("language") || "zh",
            messages: y
        })
          , S = j
          , P = (t("b20f"),
        t("499a"),
        t("77ed"))
          , _ = t.n(P);
        function O(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
              , t = ("" + e).length;
            return Array(n > t && n - t + 1 || 0).join(0) + e
        }
        var w = t("4eb5")
          , E = t.n(w)
          , M = {
            findIndexArray: function(e, n) {
                for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], a = this, c = Array.from(t), o = 0, i = e.length; o < i; o++) {
                    if (c.push({
                        index: o,
                        nodeId: e[o].nodeId
                    }),
                    e[o].nodeId === n)
                        return c;
                    var r = e[o].childs;
                    if (r && r.length) {
                        var u = a.findIndexArray(r, n, c);
                        if (u)
                            return u
                    }
                    c.pop()
                }
                return !1
            },
            GetBreadList: function(e, n) {
                if (0 === e.length)
                    return [];
                for (var t = this.findIndexArray(e, +n), a = Array.from(e), c = [], o = 0; o < t.length; o++) {
                    var i = t[o].index
                      , r = {
                        data: a,
                        Current: a[i]
                    };
                    c.push(r),
                    a[i].childs && (a = a[i].childs)
                }
                return c
            },
            IgonHtml: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = 0; n < e.length; n++) {
                    var t = {
                        lt: "<",
                        gt: ">",
                        nbsp: " ",
                        amp: "&",
                        quot: '"',
                        ldquo: '"',
                        rdquo: '"',
                        mdash: "——"
                    };
                    e[n].content && (e[n].content = e[n].content.replace(/<[^>]+>/g, "").replace(/&(lt|gt|nbsp|amp|quot|ldquo|rdquo|mdash);/gi, function(e, n) {
                        return t[n]
                    }))
                }
                return e
            },
            findroutes: function(e, n) {
                var t = !0
                  , a = !1
                  , c = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var r = o.value;
                        if (r.meta.nodeId === n.nodeId)
                            return r;
                        var u = !0
                          , l = !1
                          , s = void 0;
                        try {
                            for (var d, f = r.children[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                                var h = d.value;
                                if (h.meta.nodeId === n.nodeId)
                                    return h
                            }
                        } catch (b) {
                            l = !0,
                            s = b
                        } finally {
                            try {
                                u || null == f.return || f.return()
                            } finally {
                                if (l)
                                    throw s
                            }
                        }
                    }
                } catch (b) {
                    a = !0,
                    c = b
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (a)
                            throw c
                    }
                }
                return !1
            },
            findChannel: function(e, n) {
                var t = !1
                  , a = !0
                  , c = !1
                  , o = void 0;
                try {
                    for (var i, r = n[Symbol.iterator](); !(a = (i = r.next()).done); a = !0) {
                        var u = i.value
                          , l = this.findroutes(e, u);
                        if (!l)
                            return t;
                        t = l
                    }
                } catch (s) {
                    c = !0,
                    o = s
                } finally {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
                return t
            }
        }
          , T = t("ec7e")
          , C = t.n(T)
          , x = t("edee")
          , A = t.n(x)
          , D = t("8f9b")
          , L = t.n(D)
          , N = t("403a")
          , H = t.n(N)
          , B = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("transition", {
                attrs: {
                    "leave-active-class": "animated fadeOut"
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "loading-container"
            }, [t("div", {
                staticClass: "mask"
            }), t("div", {
                staticClass: "content"
            }, [t("img", {
                attrs: {
                    src: "/img/logo-fill.png",
                    alt: "宝钢股份"
                }
            })])])])
        }
          , $ = []
          , R = {
            name: "AppLoading",
            data: function() {
                return {
                    show: !1
                }
            },
            watch: {
                show: function(e) {
                    e ? this.G.offPageScroll() : this.G.onPageScroll()
                }
            }
        }
          , U = R
          , G = (t("51b9"),
        Object(l["a"])(U, B, $, !1, null, "e8194cac", null))
          , z = G.exports
          , q = {
            install: function(e, n) {
                var t = e.extend(z)
                  , a = new t({
                    el: document.createElement("div")
                });
                document.body.appendChild(a.$el);
                var c = {
                    open: function() {
                        a.show = !0
                    },
                    hide: function() {
                        setTimeout(function() {
                            a.show = !1
                        }, 1e3)
                    }
                };
                e.prototype.$appLoading = c
            }
        }
          , F = (t("0fb7"),
        t("450d"),
        t("f529"))
          , V = t.n(F)
          , X = (t("be4f"),
        t("896a"))
          , J = t.n(X);
        c["default"].prototype.$loading = J.a.service,
        c["default"].prototype.$message = V.a,
        c["default"].use(m.a),
        c["default"].use(_.a),
        c["default"].use(A.a),
        c["default"].use(E.a),
        c["default"].use(C.a),
        c["default"].use(L.a),
        L.a.initAMapApiLoader({
            key: "870c4fa73df7c223e386965f88507b8e",
            plugin: ["ToolBar"]
        }),
        Object.keys(a).forEach(function(e) {
            c["default"].filter(e, a[e])
        }),
        c["default"].prototype.$Common = M,
        c["default"].use(H.a),
        c["default"].use(q),
        c["default"].config.productionTip = !1,
        f["a"].afterEach(function(e, n, t) {
            window.scrollTo(0, 0)
        }),
        new c["default"]({
            router: f["a"],
            store: h["a"],
            i18n: S,
            render: function(e) {
                return e(d)
            }
        }).$mount("#app")
    },
    "5d92": function(e, n, t) {},
    "69d7": function(e, n, t) {
        "use strict";
        var a = t("ce9a")
          , c = t.n(a);
        c.a
    },
    "6bbf": function(e, n, t) {
        "use strict";
        var a = t("4b4f")
          , c = t.n(a);
        c.a
    },
    "701a": function(e, n, t) {},
    8362: function(e, n, t) {
        "use strict";
        var a = t("0e61")
          , c = t.n(a);
        c.a
    },
    a0a8: function(e, n, t) {
        "use strict";
        var a = t("d078")
          , c = t.n(a);
        c.a
    },
    a18c: function(e, n, t) {
        "use strict";
        var a = t("2b0e")
          , c = t("8c4f")
          , o = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "container"
            }, [t("navbar", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.barList && e.barList.length,
                    expression: "barList&&barList.length"
                }]
            }), e.nodeMap ? t("app-main") : e._e(), e.isFooterShow ? t("page-footer") : e._e()], 1)
        }
          , i = []
          , r = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("section", {
                staticClass: "app-main"
            }, [t("transition", {
                attrs: {
                    name: "fade-transform",
                    mode: "out-in"
                }
            }, [t("router-view", {
                key: e.key
            })], 1)], 1)
        }
          , u = []
          , l = {
            name: "AppMain",
            computed: {
                key: function() {
                    return this.$route.fullPath
                }
            }
        }
          , s = l
          , d = (t("6bbf"),
        t("2877"))
          , f = Object(d["a"])(s, r, u, !1, null, "284f399c", null)
          , h = f.exports
          , b = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "navbar-container",
                style: e.navbarBg
            }, [t("div", {
                staticClass: "left-box"
            }, [t("img", {
                staticClass: "logo",
                attrs: {
                    src: e.logoPath,
                    alt: "宝钢股份"
                },
                on: {
                    click: e.goHome
                }
            })]), t("div", {
                staticClass: "right-box"
            }, [t("div", {
                staticClass: "fst"
            }, [t("lang-select"), t("bar-search"), t("all-menu")], 1), t("div", {
                staticClass: "snd"
            }, [t("nav-menu"), "desktop" === e.device ? t("baowu-logo") : e._e()], 1)])])
        }
          , m = []
          , p = t("2f62")
          , k = function() {
            var e = this
              , n = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , v = [function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("a", {
                staticClass: "baowu-logo-container",
                attrs: {
                    href: "http://www.baowugroup.com",
                    target: "_blank"
                }
            }, [t("img", {
                attrs: {
                    src: "/img/baowu-logo.png",
                    alt: ""
                }
            })])
        }
        ]
          , g = {
            name: "BaowuLogo"
        }
          , I = g
          , y = (t("4b4f7"),
        Object(d["a"])(I, k, v, !1, null, "26bfab84", null))
          , j = y.exports
          , S = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "lang-select-container"
            }, e._l(e.langType, function(n) {
                return t("span", {
                    key: n.key,
                    staticClass: "link",
                    class: e.language === n.key ? "active" : "",
                    on: {
                        click: function(t) {
                            return e.fnSetLanguage(n.key)
                        }
                    }
                }, [e._v(e._s(n.name))])
            }), 0)
        }
          , P = []
          , _ = {
            data: function() {
                return {
                    langType: [{
                        name: "EN",
                        key: "en"
                    }]
                }
            },
            computed: {
                language: function() {
                    return this.$store.getters.language
                }
            },
            methods: {
                fnSetLanguage: function(e) {
                    window.open("//www.baosteel.com/en/", "_blank"),
                    this.$i18n.locale = e,
                    this.$store.dispatch("setLanguage", e)
                }
            }
        }
          , O = _
          , w = (t("69d7"),
        Object(d["a"])(O, S, P, !1, null, "4cd75086", null))
          , E = w.exports
          , M = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "nav-menu-container"
            }, e._l(e.barList, function(n, a) {
                return t("a", {
                    key: a,
                    staticClass: "link",
                    class: e.CurrentnodeId === n.nodeId ? "active" : "",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(t) {
                            return e.go(n)
                        }
                    }
                }, [e._v("\n    " + e._s(n.nodeName) + "\n  ")])
            }), 0)
        }
          , T = []
          , C = t("a417");
        function x(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    A(e, n, t[n])
                })
            }
            return e
        }
        function A(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var D = {
            name: "NavMenu",
            data: function() {
                return {
                    barList: []
                }
            },
            computed: x({}, Object(p["b"])(["isBarSearchOpened"]), {
                CurrentnodeId: function() {
                    return "layout" === this.$route.matched[0].name ? this.$route.meta.nodeId : this.$route.matched[0].meta.nodeId
                }
            }),
            created: function() {
                this._getBarList()
            },
            methods: {
                _getBarList: function() {
                    var e = this
                      , n = this;
                    Object(C["a"])().then(function(t) {
                        e.$store.commit("SET_NODE_MAP", t),
                        n.barList = t[0].childs.filter(function(e) {
                            return 1 === e.isShow
                        }),
                        n.getPath(n.barList),
                        n.$store.dispatch("setbarList", n.barList)
                    })
                },
                filterRoutes: function(e) {
                    e.path = "layout",
                    Oe.forEach(function(n) {
                        n.meta.nodeId !== e.nodeId ? n.children && n.children.forEach(function(n) {
                            n.meta && n.meta.nodeId === e.nodeId && (e.path = n.name)
                        }) : e.path = n.name
                    })
                },
                getPath: function(e) {
                    var n = this;
                    e.forEach(function(e) {
                        n.filterRoutes(e),
                        e.childs && n.getPath(e.childs)
                    })
                },
                go: function(e) {
                    e.linkUrl ? window.open(e.linkUrl, "_blank") : this.$router.push({
                        name: e.path
                    })
                }
            }
        }
          , L = D
          , N = (t("13a3"),
        Object(d["a"])(L, M, T, !1, null, "0edd980a", null))
          , H = N.exports
          , B = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "all-menu-container"
            }, [t("i", {
                staticClass: "iconfont icon-menu",
                on: {
                    click: e.fnHandleMenu
                }
            }), t("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isMenuOpened,
                    expression: "isMenuOpened"
                }],
                staticClass: "menu-box"
            }, [t("div", {
                staticClass: "header"
            }, [t("div", {
                staticClass: "left-box"
            }, [t("img", {
                staticClass: "logo",
                attrs: {
                    src: e.logoPath,
                    alt: "宝钢股份"
                }
            })]), t("div", {
                staticClass: "right-box"
            }, [t("div", {
                staticClass: "submenu-select",
                on: {
                    click: function(n) {
                        return n.preventDefault(),
                        n.stopPropagation(),
                        e.fnHandleSubMenu(n)
                    }
                }
            }, [e._v("\n            " + e._s(e.subMenuText) + "\n            "), t("i", {
                staticClass: "iconfont icon-down",
                class: e.isSubMenuOpened ? "" : "opened"
            })]), t("i", {
                staticClass: "iconfont icon-close",
                on: {
                    click: function(n) {
                        return n.preventDefault(),
                        n.stopPropagation(),
                        e.fnHandleMenu(n)
                    }
                }
            })])]), "desktop" === e.device ? t("div", {
                staticClass: "body"
            }, e._l(e.barList, function(n, a) {
                return t("div", {
                    key: a,
                    staticClass: "item"
                }, [t("dt", [t("a", {
                    staticClass: "first",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(t) {
                            return e.go(n)
                        }
                    }
                }, [e._v("\n              " + e._s(n.nodeName) + "\n            ")])]), e._l(n.childs, function(n, a) {
                    return [1 === n.isShow ? t("dd", {
                        key: a
                    }, [t("a", {
                        staticClass: "second",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(t) {
                                return e.go(n)
                            }
                        }
                    }, [e._v("\n                " + e._s(n.nodeName) + "\n              ")]), t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t("ul", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isSubMenuOpened,
                            expression: "isSubMenuOpened"
                        }]
                    }, [e._l(n.childs, function(n, a) {
                        return [1 === n.isShow ? t("li", {
                            key: a
                        }, [t("a", {
                            staticClass: "third",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(t) {
                                    return e.go(n)
                                }
                            }
                        }, [e._v("\n                        " + e._s(n.nodeName) + "\n                      ")])]) : e._e()]
                    })], 2)])], 1) : e._e()]
                })], 2)
            }), 0) : t("div", {
                staticClass: "mobile-body"
            }, e._l(e.barList, function(n, a) {
                return t("ul", {
                    key: a
                }, [t("li", [t("a", {
                    staticClass: "first",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(t) {
                            return e.go(n)
                        }
                    }
                }, [e._v("\n              " + e._s(n.nodeName) + "\n            ")])])])
            }), 0)])])], 1)
        }
          , $ = [];
        function R(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    U(e, n, t[n])
                })
            }
            return e
        }
        function U(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var G = {
            components: {},
            data: function() {
                return {}
            },
            computed: R({}, Object(p["b"])(["device", "barList", "isSubMenuOpened", "isMenuOpened"]), {
                subMenuText: function() {
                    return this.isSubMenuOpened ? this.$t("allMenu.closeSubmenu") : this.$t("allMenu.openSubmenu")
                },
                logoPath: function() {
                    return "desktop" === this.device ? "/img/logo-fill.png" : "/img/logo-m.png"
                }
            }),
            watch: {
                $route: function() {
                    if (this.isMenuOpened)
                        return this.fnHandleMenu()
                }
            },
            methods: {
                fnHandleMenu: function() {
                    this.$store.dispatch("setIsMenuOpened", !this.isMenuOpened)
                },
                fnHandleSubMenu: function() {
                    this.$store.dispatch("setIsSubMenuOpened", !this.isSubMenuOpened)
                },
                go: function(e) {
                    e.linkUrl ? window.open(e.linkUrl, "_blank") : this.$router.push({
                        name: e.path
                    })
                }
            }
        }
          , z = G
          , q = (t("a0a8"),
        Object(d["a"])(z, B, $, !1, null, "2cefbd25", null))
          , F = q.exports
          , V = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "bar-search-container"
            }, [t("i", {
                staticClass: "iconfont icon-search",
                on: {
                    click: e.fnSearch
                }
            }), t("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isBarSearchOpened,
                    expression: "isBarSearchOpened"
                }],
                staticClass: "search-box",
                on: {
                    click: e.fnHandleSearchBox
                }
            }, [t("div", {
                staticClass: "form",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [t("div", {
                staticClass: "box"
            }, [t("i", {
                staticClass: "iconfont icon-search"
            }), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.searchText,
                    expression: "searchText"
                }],
                ref: "input",
                attrs: {
                    type: "text",
                    placeholder: "请输入你要查询的关键词"
                },
                domProps: {
                    value: e.searchText
                },
                on: {
                    keyup: function(n) {
                        return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.fnSearch(n)
                    },
                    input: function(n) {
                        n.target.composing || (e.searchText = n.target.value)
                    }
                }
            }), t("i", {
                staticClass: "iconfont icon-close",
                on: {
                    click: e.fnHandleSearchBox
                }
            })])])])])], 1)
        }
          , X = [];
        function J(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    Y(e, n, t[n])
                })
            }
            return e
        }
        function Y(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var W = {
            components: {},
            data: function() {
                return {
                    searchText: ""
                }
            },
            computed: J({}, Object(p["b"])(["device", "isBarSearchOpened"])),
            watch: {
                isBarSearchOpened: function(e) {
                    var n = this;
                    e ? setTimeout(function() {
                        n.$refs.input.focus()
                    }, 300) : this.$refs.input.blur()
                }
            },
            methods: {
                fnHandleSearchBox: function() {
                    this.searchText = "",
                    this.$store.dispatch("setIsBarSearchOpened", !this.isBarSearchOpened)
                },
                fnSearch: function() {
                    this.searchText && this.$router.push({
                        name: "MediaSearch",
                        params: {
                            text: this.searchText
                        }
                    }),
                    this.fnHandleSearchBox()
                }
            }
        }
          , Z = W
          , K = (t("267b"),
        Object(d["a"])(Z, V, X, !1, null, "7acac78e", null))
          , Q = K.exports;
        function ee(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    ne(e, n, t[n])
                })
            }
            return e
        }
        function ne(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var te = {
            components: {
                NavMenu: H,
                AllMenu: F,
                BarSearch: Q,
                LangSelect: E,
                BaowuLogo: j
            },
            data: function() {
                return {
                    scrollY: 0
                }
            },
            computed: ee({}, Object(p["b"])(["device", "topBgHeight"]), {
                logoPath: function() {
                    return "desktop" === this.device ? "/img/logo.png" : "/img/logo-m.png"
                },
                navbarBg: function() {
                    var e = Math.min(this.topBgHeight, this.scrollY) / this.topBgHeight;
                    return "background: rgba(0,".concat(54 * e, ",").concat(134 * e, ",").concat(.4 + e, ");")
                }
            }),
            beforeMount: function() {
                var e = this;
                window.onscroll = function() {
                    e.scrollY = document.documentElement.scrollTop
                }
            },
            methods: {
                fnOpenMenu: function() {},
                goHome: function() {
                    this.$router.push({
                        path: "/"
                    })
                }
            }
        }
          , ae = te
          , ce = (t("8362"),
        Object(d["a"])(ae, b, m, !1, null, "452ca865", null))
          , oe = ce.exports
          , ie = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                staticClass: "page-footer-container"
            }, ["desktop" === e.device && e.homeData.length > 0 ? t("div", {
                staticClass: "bg",
                class: e.isShow ? "active" : "",
                style: "background-image: url(" + e.homeData[6].imageUrl + ")"
            }) : e._e(), "desktop" === e.device ? t("div", {
                staticClass: "content"
            }, [e._l(e.barList, function(n, a) {
                return t("ul", {
                    key: a,
                    staticClass: "link-group"
                }, [t("li", {
                    staticClass: "link-item"
                }, [t("h1", [e._v(e._s(n.nodeName))]), t("ul", [e._l(n.childs, function(n, a) {
                    return [1 === n.isShow ? t("li", {
                        key: a
                    }, [t("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(t) {
                                return e.go(n)
                            }
                        }
                    }, [e._v("\n                -  " + e._s(n.nodeName) + "\n              ")])]) : e._e()]
                })], 2)])])
            }), t("div", {
                staticClass: "friend"
            }, [t("ul", e._l(e.Link, function(n, a) {
                return t("li", {
                    key: a
                }, [t("a", {
                    attrs: {
                        href: n.linkUrl,
                        title: n.title,
                        target: "_blank"
                    }
                }, [e._v("\n            " + e._s(n.title) + " "), t("i", {
                    staticClass: "iconfont icon-link"
                })])])
            }), 0)])], 2) : e._e(), t("div", {
                staticClass: "subscribe"
            }, [e._v("\n    订阅：\n    "), t("ul", e._l(e.bottomsubscribe, function(n, a) {
                return t("li", {
                    key: a
                }, [t("a", {
                    attrs: {
                        href: "javascript:void(0)",
                        title: n.title
                    },
                    on: {
                        click: function(t) {
                            return e.goHelp(n)
                        }
                    }
                }, [t("img", {
                    attrs: {
                        src: n.imageUrl
                    }
                })])])
            }), 0)]), t("footer", [e._l(e.supplementary, function(n, a) {
                return t("a", {
                    key: a,
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(t) {
                            return e.goHelp(n)
                        }
                    }
                }, [e._v(e._s(n.title))])
            }), t("router-link", {
                attrs: {
                    to: {
                        name: "InvestContact"
                    },
                    title: "中国宝武"
                }
            }, [e._v("\n      联系我们\n    ")]), t("hr"), t("div", {
                domProps: {
                    innerHTML: e._s(e.Record.content)
                }
            })], 2)])
        }
          , re = []
          , ue = t("f121");
        function le(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    se(e, n, t[n])
                })
            }
            return e
        }
        function se(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var de = {
            name: "PageFooter",
            components: {},
            props: {
                isShow: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    Link: [],
                    bottomsubscribe: [],
                    supplementary: [],
                    Record: {}
                }
            },
            computed: le({}, Object(p["b"])(["device", "barList", "homeData"])),
            created: function() {
                this.getLink(1198),
                this.getBottomsubscribe(1197),
                this.getSupplementary(579),
                this.getRecord(1196),
                this.GetHomeData(ue["a"].homeNodeId)
            },
            methods: {
                go: function(e) {
                    e.linkUrl ? window.open(e.linkUrl, "_blank") : this.$router.push({
                        name: e.path
                    })
                },
                getLink: function(e) {
                    var n = this;
                    Object(C["d"])(0, 10, e).then(function(e) {
                        n.Link = e.data
                    })
                },
                getBottomsubscribe: function(e) {
                    var n = this;
                    Object(C["d"])(0, 10, e).then(function(e) {
                        n.bottomsubscribe = e.data
                    })
                },
                getSupplementary: function(e) {
                    var n = this;
                    Object(C["d"])(0, 10, e).then(function(e) {
                        n.supplementary = e.data
                    })
                },
                getRecord: function(e) {
                    var n = this;
                    Object(C["b"])(e).then(function(e) {
                        n.Record = e
                    })
                },
                goHelp: function(e) {
                    e.linkUrl ? window.open(e.linkUrl, "_blank") : this.$router.push({
                        name: "helpDeatil",
                        params: {
                            id: e.id
                        }
                    })
                },
                GetHomeData: function(e) {
                    var n = this;
                    this.homeData.length < 1 && Object(C["b"])(e).then(function(e) {
                        n.$store.dispatch("setHomeData", e.childs)
                    })
                }
            }
        }
          , fe = de
          , he = (t("b64f"),
        Object(d["a"])(fe, ie, re, !1, null, "032b6808", null))
          , be = he.exports
          , me = t("4360")
          , pe = document
          , ke = pe.body
          , ve = 1242
          , ge = {
            beforeMount: function() {
                window.addEventListener("resize", this.resizeHandler)
            },
            created: function() {
                var e = this.isMobile();
                e && me["a"].dispatch("toggleDevice", "mobile")
            },
            methods: {
                isMobile: function() {
                    var e = ke.getBoundingClientRect();
                    return e.width <= ve
                },
                resizeHandler: function() {
                    if (!document.hidden) {
                        var e = this.isMobile();
                        me["a"].dispatch("toggleDevice", e ? "mobile" : "desktop")
                    }
                }
            }
        };
        function Ie(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                  , a = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                a.forEach(function(n) {
                    ye(e, n, t[n])
                })
            }
            return e
        }
        function ye(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        var je = {
            name: "Layout",
            components: {
                Navbar: oe,
                AppMain: h,
                PageFooter: be
            },
            mixins: [ge],
            computed: Ie({}, Object(p["b"])(["barList", "nodeMap"]), {
                isFooterShow: function() {
                    return "/home" !== this.$route.path
                }
            })
        }
          , Se = je
          , Pe = (t("fcfd"),
        Object(d["a"])(Se, o, i, !1, null, "d355af3a", null))
          , _e = Pe.exports;
        t.d(n, "b", function() {
            return Oe
        }),
        a["default"].use(c["a"]);
        var Oe = [{
            path: "/",
            name: "layout",
            component: _e,
            redirect: "home",
            meta: {},
            children: [{
                path: "home",
                component: function() {
                    return t.e("chunk-12601796").then(t.bind(null, "7abe"))
                },
                name: "Home",
                meta: {
                    title: "首页",
                    nodeId: 417
                }
            }, {
                path: "help/:id",
                component: function() {
                    return t.e("chunk-4b50dc09").then(t.bind(null, "741b"))
                },
                name: "help",
                meta: {
                    title: "首页-帮助信息"
                }
            }, {
                path: "helpDeatil/:id",
                component: function() {
                    return t.e("chunk-20b0c586").then(t.bind(null, "1089"))
                },
                name: "helpDeatil",
                meta: {
                    title: "首页-帮助信息-详细"
                }
            }, {
                path: "/Join",
                name: "joinUs",
                meta: {
                    title: "加入我们",
                    nodeId: 2585
                },
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-daa6f252")]).then(t.bind(null, "fc12"))
                }
            }, {
                path: "/job",
                name: "Job",
                meta: {
                    title: "简历投递",
                    nodeId: 2606
                },
                component: function() {
                    return Promise.all([t.e("baosteel.regenerator-runtime"), t.e("baosteel.element-ui"), t.e("baosteel.core-js"), t.e("baosteel.async-validator"), t.e("chunk-8a38ecb0")]).then(t.bind(null, "fac5"))
                }
            }, {
                path: "/ecoSupervision",
                name: "ecoSupervision",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-34653310")]).then(t.bind(null, "987e"))
                },
                meta: {
                    title: "中央生态环境保护督察",
                    nodeId: 5038,
                    detailName: "ecoSupervisionDetail"
                }
            }, {
                path: "/ecoSupervisionDetail/:id/:nodeId",
                name: "ecoSupervisionDetail",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-087ac05b")]).then(t.bind(null, "0abf"))
                },
                meta: {
                    title: "中央生态环境保护督察-详细"
                }
            }]
        }, {
            path: "/media",
            name: "media",
            component: _e,
            redirect: "/media/news",
            meta: {
                nodeId: 419
            },
            children: [{
                path: "list",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-3c6bf500")]).then(t.bind(null, "7eab"))
                },
                name: "MediaList",
                meta: {
                    title: "媒体中心-行业资讯",
                    nodeId: 439,
                    detailName: "MediaDetail"
                }
            }, {
                path: "news",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-e65958d2")]).then(t.bind(null, "f833"))
                },
                name: "MediaNews",
                meta: {
                    title: "媒体中心-公司新闻",
                    nodeId: 436,
                    detailName: "MediaDetail"
                }
            }, {
                path: "summary",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-b5d291a0")]).then(t.bind(null, "0382"))
                },
                name: "MediaSummary",
                meta: {
                    title: "媒体中心-传媒摘要",
                    nodeId: 437,
                    detailName: "MediaDetail"
                }
            }, {
                path: "sasac",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-60e3720e")]).then(t.bind(null, "eb09"))
                },
                name: "Mediasasac",
                meta: {
                    title: "媒体中心-国资要闻",
                    nodeId: 438,
                    detailName: "MediaDetail"
                }
            }, {
                path: "detail/:id/:nodeId",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-621b1556")]).then(t.bind(null, "4f51"))
                },
                name: "MediaDetail",
                meta: {
                    title: "媒体中心-行业资讯-详情"
                }
            }, {
                path: "corporate",
                name: "MediaCorporate",
                redirect: "/media/Annual",
                meta: {
                    title: "媒体中心-公司出版物",
                    nodeId: 440
                }
            }, {
                path: "report",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-dc9e3a22")]).then(t.bind(null, "6526"))
                },
                name: "MediaReport",
                meta: {
                    title: "媒体中心-公司出版物-可持续发展报告",
                    nodeId: 470
                }
            }, {
                path: "Annual",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-b71968a8")]).then(t.bind(null, "ddc4"))
                },
                name: "MediaAnnual",
                meta: {
                    title: "媒体中心-公司出版物-公司年度报告",
                    nodeId: 469
                }
            }, {
                path: "Fact",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-2a056f74")]).then(t.bind(null, "bc90"))
                },
                name: "MediaFact",
                meta: {
                    title: "媒体中心-公司出版物-公司实录",
                    nodeId: 471
                }
            }, {
                path: "CorporateVideo",
                name: "MediaCorporateVideo",
                redirect: "/media/film",
                meta: {
                    title: "媒体中心-公司影片",
                    nodeId: 441
                }
            }, {
                path: "film",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-ef65da46")]).then(t.bind(null, "7924"))
                },
                name: "MediaFilm",
                meta: {
                    title: "媒体中心-公司形象片",
                    nodeId: 474
                }
            }, {
                path: "Product",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-53595737")]).then(t.bind(null, "92cc"))
                },
                name: "MediaProduct",
                meta: {
                    title: "媒体中心-产品形象片",
                    nodeId: 475
                }
            }, {
                path: "Feature",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-53595737")]).then(t.bind(null, "92cc"))
                },
                name: "MediaFeature",
                meta: {
                    title: "媒体中心-专题片",
                    nodeId: 1593
                }
            }, {
                path: "film-detail",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-0767c0eb")]).then(t.bind(null, "783c"))
                },
                name: "MediaFilmDetail",
                meta: {
                    title: "媒体中心-公司形象片-详情"
                }
            }, {
                path: "vi",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-17f36c82")]).then(t.bind(null, "bc6b"))
                },
                name: "MediaVi",
                meta: {
                    title: "媒体中心-VI",
                    nodeId: 432
                }
            }, {
                path: "Hello",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-6fe0ef84")]).then(t.bind(null, "0f7f"))
                },
                name: "MediaHello",
                meta: {
                    title: "媒体中心-你好宝钢",
                    nodeId: 443
                }
            }, {
                path: "Search/:text",
                component: function() {
                    return t.e("chunk-36e2aa4b").then(t.bind(null, "6192"))
                },
                name: "MediaSearch",
                meta: {
                    title: "搜索"
                }
            }]
        }, {
            path: "/invest",
            name: "invest",
            component: _e,
            redirect: "/invest/index",
            meta: {
                nodeId: 421
            },
            children: [{
                path: "index",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-273518f9")]).then(t.bind(null, "a339"))
                },
                name: "indexInvest",
                meta: {
                    title: "投资者关系",
                    nodeId: 421
                }
            }, {
                path: "notice",
                name: "Notice",
                redirect: "/invest/stock",
                meta: {
                    title: "投资者关系-资本市场",
                    nodeId: 514
                }
            }, {
                path: "stock",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-53105efc")]).then(t.bind(null, "2232"))
                },
                name: "InvestStock",
                meta: {
                    title: "投资者关系-资本市场-股价信息",
                    nodeId: 543
                }
            }, {
                path: "major",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-75113b9a")]).then(t.bind(null, "b45a"))
                },
                name: "investMajor",
                meta: {
                    title: "投资者关系-资本市场-重大事项",
                    nodeId: 522
                }
            }, {
                path: "govern",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-78cf29e4")]).then(t.bind(null, "b8be"))
                },
                name: "InvestGovern",
                meta: {
                    title: "投资者关系-公司治理",
                    nodeId: 515
                }
            }, {
                path: "detail/:nodeId/",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-159c2c30")]).then(t.bind(null, "7de9"))
                },
                name: "InvestGovernDetail",
                meta: {
                    title: "投资者关系-公司治理-详情"
                }
            }, {
                path: "detail/article/:id",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-159c2c30")]).then(t.bind(null, "7de9"))
                },
                name: "InvestGovernArticleDetail",
                meta: {
                    title: "投资者关系-公司治理-详情"
                }
            }, {
                path: "framework",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-1ec999f4")]).then(t.bind(null, "b8df"))
                },
                name: "InvestFramework",
                meta: {
                    title: "投资者关系-公司治理-治理架构图",
                    nodeId: 1182
                }
            }, {
                path: "temporary",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-644739be")]).then(t.bind(null, "c948"))
                },
                name: "InvestTemporary",
                meta: {
                    title: "投资者关系-公司公告-公告板",
                    nodeId: 521
                }
            }, {
                path: "finance",
                name: "Finance",
                redirect: "/invest/equity",
                meta: {
                    title: "投资者关系-财务信息",
                    nodeId: 516
                }
            }, {
                path: "equity",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-5b41f7d6")]).then(t.bind(null, "5de7"))
                },
                name: "InvestEquity",
                meta: {
                    title: "投资者关系-财务信息-信用评级",
                    nodeId: 545
                }
            }, {
                path: "performance",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-a1be8d18")]).then(t.bind(null, "4ca5"))
                },
                name: "InvestPerformance",
                meta: {
                    title: "投资者关系-财务信息-经营业绩",
                    nodeId: 542
                }
            }, {
                path: "statement",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-701203d4")]).then(t.bind(null, "90cd"))
                },
                name: "InvestStatement",
                meta: {
                    title: "投资者关系-财务信息-经营概要",
                    nodeId: 541
                }
            }, {
                path: "policy",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-a22e67b6")]).then(t.bind(null, "c5b6"))
                },
                name: "InvestPolicy",
                meta: {
                    title: "投资者关系-财务信息-股利政策",
                    nodeId: 544
                }
            }, {
                path: "securities",
                name: "Securities",
                redirect: "/invest/Stock",
                meta: {
                    title: "投资者关系-证券信息",
                    nodeId: 517
                }
            }, {
                path: "Historical",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-2aedf43e")]).then(t.bind(null, "c04b"))
                },
                name: "InvestHistorical",
                meta: {
                    title: "投资者关系-证券信息-历史查询",
                    nodeId: 546
                }
            }, {
                path: "service",
                name: "Service",
                redirect: "/invest/statement",
                meta: {
                    title: "投资者关系-投资者服务",
                    nodeId: 519
                }
            }, {
                path: "analysts",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-90d69d14")]).then(t.bind(null, "1a4d"))
                },
                name: "InvestAnalysts",
                meta: {
                    title: "投资者关系-投资者服务-分析师",
                    nodeId: 553
                }
            }, {
                path: "subscribe",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-f6ba85fc")]).then(t.bind(null, "6ece"))
                },
                name: "InvestSubscribe",
                meta: {
                    title: "投资者关系-投资者服务-订阅",
                    nodeId: 554
                }
            }, {
                path: "contactUs",
                name: "InvestContactUs",
                redirect: "/invest/contact",
                meta: {
                    title: "投资者关系-联系我们",
                    nodeId: 520
                }
            }, {
                path: "contact",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-af7742f8")]).then(t.bind(null, "d2d9"))
                },
                name: "InvestContact",
                meta: {
                    title: "投资者关系-联系我们-联系方式",
                    nodeId: 557
                }
            }, {
                path: "issue",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-4db384ee")]).then(t.bind(null, "ffd0"))
                },
                name: "InvestIssue",
                meta: {
                    title: "投资者关系-联系我们-常见问题",
                    nodeId: 556
                }
            }, {
                path: "Documen",
                redirect: "/invest/Documents",
                name: "InvestDocumen",
                meta: {
                    title: "投资者关系-投资者关系文档",
                    nodeId: 518
                }
            }, {
                path: "Documents",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-0c88acb0")]).then(t.bind(null, "1e59"))
                },
                name: "InvestDocuments",
                meta: {
                    title: "投资者关系-投资者关系文档-公司年报",
                    nodeId: 547
                }
            }, {
                path: "Book",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-40e0d3c2")]).then(t.bind(null, "6ca5"))
                },
                name: "InvestBook",
                meta: {
                    title: "投资者关系-投资者关系文档-公司实录",
                    nodeId: 548
                }
            }, {
                path: "Promotion",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-084d7775")]).then(t.bind(null, "b8ba"))
                },
                name: "InvestPromotion",
                meta: {
                    title: "投资者关系-投资者关系文档-投资者关系推介",
                    nodeId: 549
                }
            }, {
                path: "Presentation",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-08632aa1")]).then(t.bind(null, "45a6"))
                },
                name: "InvestPresentation",
                meta: {
                    title: "投资者关系-投资者服务-业务发布会回放",
                    nodeId: 550
                }
            }, {
                path: "Roadshow",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-3292274a")]).then(t.bind(null, "5d85"))
                },
                name: "InvestRoadshow",
                meta: {
                    title: "投资者关系-投资者服务-网上路演回放",
                    nodeId: 552
                }
            }, {
                path: "Calendar",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-72fab4a8")]).then(t.bind(null, "0970"))
                },
                name: "InvestCalendar",
                meta: {
                    title: "投资者关系-投资者服务-投资者关系日历",
                    nodeId: 551
                }
            }, {
                path: "Tools",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-2ed6ef5a")]).then(t.bind(null, "dc68"))
                },
                name: "InvestTools",
                meta: {
                    title: "投资者关系-投资者服务-IR工具",
                    nodeId: 555
                }
            }]
        }, {
            path: "/about",
            name: "about",
            component: _e,
            redirect: "/about/recom",
            meta: {
                nodeId: 418
            },
            children: [{
                path: "recom",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-ca72283e")]).then(t.bind(null, "0322"))
                },
                name: "AboutRecom",
                meta: {
                    title: "关于我们-公司介绍-公司介绍",
                    nodeId: 427
                }
            }, {
                path: "Organization",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-7c289b82")]).then(t.bind(null, "5791"))
                },
                name: "AboutOrganization",
                meta: {
                    title: "关于我们-公司介绍-组织架构",
                    nodeId: 428
                }
            }, {
                path: "history",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-a30246c2")]).then(t.bind(null, "8c0c"))
                },
                name: "AboutHistory",
                meta: {
                    title: "关于我们-公司介绍-公司历史",
                    nodeId: 434
                }
            }, {
                path: "Strategy",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-08df5186")]).then(t.bind(null, "38f2"))
                },
                name: "AboutStrategy",
                meta: {
                    title: "关于我们-公司介绍-公司战略",
                    nodeId: 431
                }
            }, {
                path: "manager",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-17a469ab")]).then(t.bind(null, "a1e6"))
                },
                name: "AboutManager",
                meta: {
                    title: "关于我们-高管人员",
                    nodeId: 429
                }
            }, {
                path: "policy",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-bed7ba2a")]).then(t.bind(null, "deed"))
                },
                name: "AboutConduct",
                meta: {
                    title: "关于我们-公司行为准则",
                    nodeId: 2605
                }
            }, {
                path: "policy/detail/:id/:nodeId",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-4cd9ae00")]).then(t.bind(null, "7e43"))
                },
                name: "ConductDetail",
                meta: {
                    title: "关于我们-公司行为准则-详情"
                }
            }, {
                path: "product",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-179fa765")]).then(t.bind(null, "8eb7"))
                },
                name: "AboutProduct",
                meta: {
                    title: "关于我们-生产基地",
                    nodeId: 433
                }
            }, {
                path: "Honor",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-196419cc")]).then(t.bind(null, "f285"))
                },
                name: "AboutHonor",
                meta: {
                    title: "关于我们-公司荣誉",
                    nodeId: 435
                }
            }, {
                path: "developmentHistory",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-ef680bba")]).then(t.bind(null, "ed0f"))
                },
                name: "DevelopmentHistory",
                meta: {
                    title: "关于我们-发展历程",
                    nodeId: 3680
                }
            }]
        }, {
            path: "/contact",
            name: "contact",
            component: _e,
            redirect: "/contact/Location",
            meta: {
                nodeId: 424
            },
            children: [{
                path: "index",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-42cbf744")]).then(t.bind(null, "0648"))
                },
                name: "indexContact",
                meta: {
                    title: "联系我们-联系方式",
                    nodeId: 577
                }
            }, {
                path: "Location",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-4a26fcca")]).then(t.bind(null, "3b83"))
                },
                name: "indexLocation",
                meta: {
                    title: "联系我们-我们在哪",
                    nodeId: 576
                }
            }]
        }, {
            path: "/product",
            name: "product",
            component: _e,
            redirect: "/product/show",
            meta: {
                nodeId: 420
            },
            children: [{
                path: "show",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-0232907b")]).then(t.bind(null, "d174"))
                },
                name: "ProductShow",
                meta: {
                    title: "产品展示-产品展示专区",
                    nodeId: 495
                }
            }, {
                path: "Network",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-9138e300")]).then(t.bind(null, "25df"))
                },
                name: "ProductNetwork",
                meta: {
                    title: "产品展示-营销网络",
                    nodeId: 498
                }
            }, {
                path: "Certificate",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-c50e208e")]).then(t.bind(null, "085f"))
                },
                name: "ProductCertificate",
                meta: {
                    title: "产品展示-质量保证及体系证书",
                    nodeId: 499
                }
            }, {
                path: "Subscription",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-7c36a501")]).then(t.bind(null, "2f13"))
                },
                name: "Subscription",
                meta: {
                    title: "订阅分享",
                    nodeId: 578
                }
            }]
        }, {
            path: "/develop",
            name: "develop",
            component: _e,
            redirect: "/develop/Operating",
            meta: {
                nodeId: 422
            },
            children: [{
                path: "Green",
                redirect: "/develop/product",
                name: "DevelopGreen",
                meta: {
                    title: "可持续发展-绿色钢铁",
                    nodeId: 560
                }
            }, {
                path: "product",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-d9b2e108")]).then(t.bind(null, "13cf"))
                },
                name: "DevelopProduct",
                meta: {
                    title: "可持续发展-绿色钢铁-绿色产品",
                    nodeId: 569
                }
            }, {
                path: "Act",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-5f4b5251")]).then(t.bind(null, "0dd8"))
                },
                name: "developAct",
                meta: {
                    title: "可持续发展-我们在行动",
                    nodeId: 558
                }
            }, {
                path: "Operating",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-d4f51f38")]).then(t.bind(null, "c99c"))
                },
                name: "developOperating",
                meta: {
                    title: "可持续发展-可持续发展管理",
                    nodeId: 564
                }
            }, {
                path: "Manufacturing",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-6c675123")]).then(t.bind(null, "c202"))
                },
                name: "developManufacturing",
                meta: {
                    title: "可持续发展-绿色钢铁-绿色制造",
                    nodeId: 570
                }
            }, {
                path: "Chain",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-0a87e440")]).then(t.bind(null, "0755"))
                },
                name: "developChain",
                meta: {
                    title: "可持续发展-绿色钢铁-绿色供应链",
                    nodeId: 571
                }
            }, {
                path: "Monitoring",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-15cc0053")]).then(t.bind(null, "0b5e"))
                },
                name: "developMonitoring",
                meta: {
                    title: "可持续发展-绿色钢铁-环境检测",
                    nodeId: 572
                }
            }, {
                path: "Competitive",
                redirect: "/develop/Actions",
                name: "developCompetitive",
                meta: {
                    title: "可持续发展-顺时而动",
                    nodeId: 559
                }
            }, {
                path: "Actions",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-50f9b3e8")]).then(t.bind(null, "49e1"))
                },
                name: "developActions",
                meta: {
                    title: "可持续发展-顺时而动-主要行动",
                    nodeId: 565
                }
            }, {
                path: "Competitiveness",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-39ce61dc")]).then(t.bind(null, "ee04"))
                },
                name: "developCompetitiveness",
                meta: {
                    title: "可持续发展-顺时而动-成绩",
                    nodeId: 566
                }
            }, {
                path: "Allocated",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-dbc5f3f4")]).then(t.bind(null, "28a1"))
                },
                name: "developAllocated",
                meta: {
                    title: "可持续发展-顺时而动-企业竞争力",
                    nodeId: 567
                }
            }, {
                path: "Relations",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-38e45747")]).then(t.bind(null, "52f5"))
                },
                name: "developRelations",
                meta: {
                    title: "可持续发展-顺时而动-投资者关系",
                    nodeId: 568
                }
            }, {
                path: "Responsible",
                redirect: "/develop/Staff",
                name: "developResponsible",
                meta: {
                    title: "可持续发展-以人为宝",
                    nodeId: 561
                }
            }, {
                path: "Staff",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-96f435b2")]).then(t.bind(null, "b085"))
                },
                name: "developStaff",
                meta: {
                    title: "可持续发展-以人为宝-员工为宝",
                    nodeId: 573
                }
            }, {
                path: "Treasure",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-a38b74ae")]).then(t.bind(null, "1a58"))
                },
                name: "developTreasure",
                meta: {
                    title: "可持续发展-以人为宝-社区为宝",
                    nodeId: 575
                }
            }, {
                path: "Shareholders",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-61081776")]).then(t.bind(null, "a030"))
                },
                name: "developShareholders",
                meta: {
                    title: "可持续发展-以人为宝-股东为宝",
                    nodeId: 574
                }
            }, {
                path: "Mill",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("baosteel.better-scroll"), t.e("chunk-3a2e2ef7"), t.e("chunk-02d9a221")]).then(t.bind(null, "1366"))
                },
                name: "developMill",
                meta: {
                    title: "可持续发展-城市钢厂",
                    nodeId: 562
                }
            }, {
                path: "Sustainability",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-3f7cf150")]).then(t.bind(null, "aeae"))
                },
                name: "developSustainability",
                meta: {
                    title: "可持续发展-可持续发展报告",
                    nodeId: 563
                }
            }, {
                path: "ClimateAction",
                component: function() {
                    return Promise.all([t.e("baosteel.print-js"), t.e("chunk-3a2e2ef7"), t.e("chunk-3f7cf150")]).then(t.bind(null, "aeae"))
                },
                name: "climateAction",
                meta: {
                    title: "可持续发展-气候行动报告",
                    nodeId: 2948
                }
            }]
        }, {
            path: "/appNews",
            name: "appNews",
            component: function() {
                return Promise.all([t.e("baosteel.regenerator-runtime"), t.e("baosteel.mescroll.js"), t.e("chunk-4c773119")]).then(t.bind(null, "afe4"))
            },
            meta: {
                title: "新闻列表",
                keepAlive: !0,
                noScroll: !0
            }
        }, {
            path: "/appNewsDeatil/:id",
            name: "appNewsDeatil",
            component: function() {
                return t.e("chunk-6013bc44").then(t.bind(null, "b422"))
            },
            meta: {
                title: "新闻详细"
            }
        }];
        n["a"] = new c["a"]({
            mode: "history",
            base: "/",
            routes: Oe
        })
    },
    a417: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return c
        }),
        t.d(n, "d", function() {
            return o
        }),
        t.d(n, "c", function() {
            return i
        }),
        t.d(n, "b", function() {
            return r
        }),
        t.d(n, "e", function() {
            return u
        }),
        t.d(n, "f", function() {
            return l
        });
        var a = t("b775");
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
            return Object(a["a"])({
                url: "/v1/web/api/node/list?domainId=".concat(e),
                method: "get"
            })
        }
        function o(e, n, t) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 12;
            return Object(a["a"])({
                url: "/v1/web/api/content/list?domainId=".concat(c),
                method: "post",
                data: {
                    pageNo: e,
                    pageSize: n,
                    condition: {
                        nodeId: t
                    }
                }
            })
        }
        function i(e) {
            return Object(a["a"])({
                url: "/v1/web/api/content/".concat(e),
                method: "get"
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "/v1/web/api/node/".concat(e, "/listAll?domainId=12"),
                method: "get"
            })
        }
        function u(e, n, t) {
            return Object(a["a"])({
                url: "/v1/web/api/content/search?domainId=12",
                method: "post",
                data: {
                    pageNo: e,
                    pageSize: n,
                    condition: {
                        keyword: t
                    }
                }
            })
        }
        function l() {
            return Object(a["a"])({
                url: "/v1/api/shareTick",
                method: "get"
            })
        }
    },
    b20f: function(e, n, t) {},
    b64f: function(e, n, t) {
        "use strict";
        var a = t("5011")
          , c = t.n(a);
        c.a
    },
    b775: function(e, n, t) {
        "use strict";
        t("0fb7"),
        t("450d");
        var a = t("f529")
          , c = t.n(a)
          , o = t("bc3a")
          , i = t.n(o)
          , r = t("3452")
          , u = i.a.create({
            baseURL: "https://cmsauth.baowugroup.com",
            timeout: 2e4
        });
        function l(e) {
            for (var n = [], t = Array.of("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"), a = 0; a < e; a++) {
                var c = Math.floor(10 * Math.random());
                n[a] = t[c]
            }
            return n.join("")
        }
        function s() {
            return parseInt((new Date).getTime() / 1e3)
        }
        u.interceptors.request.use(function(e) {
            var n = l(10)
              , t = s()
              , a = r.MD5(JSON.stringify(e.data ? e.data : "")).toString(r.enc.Hex)
              , c = ""
              , o = "0/56f5cff3cad14853a44782c2c689ab2a"
              , i = "13ade1de1eff43ffb821735f352a4148";
            e.headers["x-user"] = o,
            e.headers["x-nonce"] = n,
            e.headers["x-date"] = t,
            e.headers["Content-Md5"] = a,
            c = "".concat(e.method.toUpperCase(), "\n").concat(e.url.replace(e.baseURL, ""), "\nx-user:").concat(o, "\nx-nonce:").concat(n, "\nx-date:").concat(t, "\nContent-Md5:").concat(a, "\n");
            var u = r.HmacSHA1(c, i).toString().toUpperCase();
            return e.headers["x-signature"] = u,
            e
        }),
        u.interceptors.response.use(function(e) {
            var n = e.data;
            return 1e3 !== n.code ? (c.a.error(n.desc || "加载失败"),
            Promise.reject(new Error("error"))) : n.data
        }, function(e) {
            return Promise.reject(e)
        }),
        n["a"] = u
    },
    c000: function(e, n, t) {},
    c961: function(e, n, t) {},
    ce9a: function(e, n, t) {},
    d078: function(e, n, t) {},
    f121: function(e, n, t) {
        "use strict";
        n["a"] = {
            homeNodeId: 956
        }
    },
    f581: function(e, n, t) {},
    fcfd: function(e, n, t) {
        "use strict";
        var a = t("701a")
          , c = t.n(a);
        c.a
    }
});


 function l(e) {
            for (var n = [], t = Array.of("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"), a = 0; a < e; a++) {
                var c = Math.floor(10 * Math.random());
                n[a] = t[c]
            }
            return n.join("")
        }

function s() {
            return parseInt((new Date).getTime() / 1e3)
        }

function get_headers(data) {
    const r = window.xxx("3452");
    var n = l(10)
        , t = s()
        , a = r.MD5(JSON.stringify(data ? data : "")).toString(r.enc.Hex)
        , c = ""
        , o = "0/56f5cff3cad14853a44782c2c689ab2a"
        , i = "13ade1de1eff43ffb821735f352a4148";
    headers = {};
    headers["x-user"] = o,
    headers["x-nonce"] = n,
    headers["x-date"] = String(t),
    headers["Content-Md5"] = a,
    c = "".concat("post".toUpperCase(), "\n").concat("/v1/web/api/content/list?domainId=12".replace("https://cmsauth.baowugroup.com", ""), "\nx-user:").concat(o, "\nx-nonce:").concat(n, "\nx-date:").concat(t, "\nContent-Md5:").concat(a, "\n");
    var u = r.HmacSHA1(c, i).toString().toUpperCase();
    headers["x-signature"] = u,
    console.log(headers);
    return headers;
}

get_headers({
    'pageNo': 0,
    'pageSize': 10,
    'condition': {
        'nodeId': 1198,
    },
})