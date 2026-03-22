window = global;
self = global;
require("./mod1")
!function() {
    "use strict";
    var e, t, c, n, a, r, f, d, i = {}, o = {};
    function s(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var c = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        }
          , n = !0;
        try {
            console.log("加载的模块为:", e);
            i[e].call(c.exports, c, c.exports, s),
            n = !1
        } finally {
            n && delete o[e]
        }
        return c.loaded = !0,
        c.exports
    }
    window.xxx = s;
    s.m = i,
    e = [],
    s.O = function(t, c, n, a) {
        if (!c) {
            var r = 1 / 0;
            for (o = 0; o < e.length; o++) {
                c = e[o][0],
                n = e[o][1],
                a = e[o][2];
                for (var f = !0, d = 0; d < c.length; d++)
                    (!1 & a || r >= a) && Object.keys(s.O).every((function(e) {
                        return s.O[e](c[d])
                    }
                    )) ? c.splice(d--, 1) : (f = !1,
                    a < r && (r = a));
                if (f) {
                    e.splice(o--, 1);
                    var i = n();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
        a = a || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > a; o--)
            e[o] = e[o - 1];
        e[o] = [c, n, a]
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return s.d(t, {
            a: t
        }),
        t
    }
    ,
    c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    s.t = function(e, n) {
        if (1 & n && (e = this(e)),
        8 & n)
            return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule)
                return e;
            if (16 & n && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        s.r(a);
        var r = {};
        t = t || [null, c({}), c([]), c(c)];
        for (var f = 2 & n && e; "object" == typeof f && !~t.indexOf(f); f = c(f))
            Object.getOwnPropertyNames(f).forEach((function(t) {
                r[t] = function() {
                    return e[t]
                }
            }
            ));
        return r.default = function() {
            return e
        }
        ,
        s.d(a, r),
        a
    }
    ,
    s.d = function(e, t) {
        for (var c in t)
            s.o(t, c) && !s.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: t[c]
            })
    }
    ,
    s.f = {},
    s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce((function(t, c) {
            return s.f[c](e, t),
            t
        }
        ), []))
    }
    ,
    s.u = function(e) {
        return 39226 === e ? "static/chunks/" + e + "-71b234e14d232083.js" : 5772 === e ? "static/chunks/5772-3c25c2cbf6ab7ae5.js" : 33638 === e ? "static/chunks/" + e + "-b2f137eab4511f73.js" : 74267 === e ? "static/chunks/" + e + "-5c8fab292b36814d.js" : 51698 === e ? "static/chunks/92977076-53371ea19f8f9701.js" : 1216 === e ? "static/chunks/1216-856436a3d5fe58e2.js" : 63955 === e ? "static/chunks/" + e + "-3cdbd2e01b7168a6.js" : 55187 === e ? "static/chunks/" + e + "-ae27e3ec2bb1d6e1.js" : 17190 === e ? "static/chunks/" + e + "-f78152f6eebbb5bf.js" : 64749 === e ? "static/chunks/" + e + "-61c0a54204fde758.js" : 51320 === e ? "static/chunks/" + e + "-7e67e26b8d0f5320.js" : 21116 === e ? "static/chunks/" + e + "-5dea75ea0ca9a79e.js" : 2307 === e ? "static/chunks/2307-0515e2af9669ff50.js" : 10793 === e ? "static/chunks/" + e + "-ed723cad3f317ff3.js" : 37204 === e ? "static/chunks/" + e + "-163a5bd7d1ba9e85.js" : 2062 === e ? "static/chunks/2062-1a55d32732df5be3.js" : 5798 === e ? "static/chunks/5798-0adb2a4930506bed.js" : 15584 === e ? "static/chunks/" + e + "-166ecb49800c60ae.js" : 44550 === e ? "static/chunks/" + e + "-c500ac37c1a7458b.js" : 6337 === e ? "static/chunks/6337-ff9fa219d1b5520b.js" : 53442 === e ? "static/chunks/" + e + "-4aef501a60b58f8f.js" : 55891 === e ? "static/chunks/" + e + "-5cc9111b3b439e38.js" : 2751 === e ? "static/chunks/2751-83ba1de1f47337d5.js" : 66872 === e ? "static/chunks/" + e + "-a3dc6a81621a460a.js" : 11273 === e ? "static/chunks/" + e + "-5ddd3fb9c5b13841.js" : 78213 === e ? "static/chunks/" + e + "-e701c2f25f539051.js" : 95968 === e ? "static/chunks/" + e + "-fe5733c4d4e4baf7.js" : 64220 === e ? "static/chunks/" + e + "-e0eb323bcadd0d3c.js" : "static/chunks/" + (53662 === e ? "29107295" : e) + "." + {
            316: "a960a360319c13da",
            568: "d178a587decde3e7",
            1842: "2cd44a2df2f1343e",
            5206: "cc1263912712c538",
            5734: "9d7a77b2e23fd76f",
            8468: "0cb451ec53c4c260",
            8811: "8531e183f3fc6a55",
            11765: "75ac51eaf3f6ff78",
            12263: "45ce7ee1815d89fa",
            12579: "ef1fa7f0388d9b81",
            15545: "5c24ebcdb85a8136",
            18625: "71f618b5e59e7271",
            21277: "6c224165cd481649",
            24118: "9d67ddfc13fa6052",
            24244: "2e254c902db8a928",
            24857: "4d155fdc1d5aebb3",
            28670: "7cb37e0a54bb8287",
            35494: "7cc6f84cae5717a3",
            41864: "58b23aa1c3025f40",
            42031: "2a180d236c742b39",
            43052: "90c19ae9e859f101",
            46217: "2432488b70a61e3f",
            46394: "0e035b00fceb52c3",
            47287: "d36d25d1bef97e24",
            49398: "c8f045f5996f99e3",
            49730: "38bbdbba7cb7d360",
            51089: "9e2afc76ba40ed4b",
            53092: "6b80c0f50a1a3258",
            53662: "bcfae579b988431e",
            54093: "4a0cc3385c95fc15",
            59420: "b07fb268b6f811e3",
            60606: "00aa07fe00150ef9",
            61409: "7638802c8aec618c",
            64475: "14df2a6e2828884a",
            67269: "e65614dce5278ad6",
            67493: "82ad05f601373aad",
            68292: "3378bf6d153ee3f4",
            69162: "cf3ef662b97b8039",
            74140: "f36a20d6a7ae1c63",
            75551: "f97c7bf94d762edd",
            75708: "2fcfa57a0db9d0f0",
            83961: "90913bb7334c6bf4",
            84006: "e7af1e03817becb8",
            85607: "1d2aed8453b858ab",
            88970: "ecfc653b8dcf80da",
            89973: "dc9a41d6829c0c60",
            92217: "92f8bcfa483c9bc4",
            92513: "c0b7155a8cc6d96b",
            93774: "11f7c5da584a68e3",
            94540: "bb7ef775230fbba5",
            98805: "d5606700400d5f8e",
            98977: "a626cc07de7fee76",
            99160: "80c0e324c0be2ac0"
        }[e] + ".js"
    }
    ,
    s.miniCssF = function(e) {
        return "static/css/" + {
            681: "572f85f558327f40",
            6676: "e6c127aa0f9491e1",
            18957: "572f85f558327f40",
            21575: "e6c127aa0f9491e1",
            37726: "e6c127aa0f9491e1",
            38764: "e6c127aa0f9491e1",
            42195: "e6c127aa0f9491e1",
            45891: "e6c127aa0f9491e1",
            46368: "9dbe5d236a36e7a4",
            46736: "572f85f558327f40",
            48719: "e6c127aa0f9491e1",
            52576: "e6c127aa0f9491e1",
            54814: "e6c127aa0f9491e1",
            55113: "572f85f558327f40",
            55844: "8a64004888a56b39",
            62557: "e6c127aa0f9491e1",
            62699: "e6c127aa0f9491e1",
            64393: "e6c127aa0f9491e1",
            64475: "e6c127aa0f9491e1",
            67226: "e6c127aa0f9491e1",
            68103: "e6c127aa0f9491e1",
            71776: "e6c127aa0f9491e1",
            72893: "572f85f558327f40",
            73910: "e6c127aa0f9491e1",
            75110: "e6c127aa0f9491e1",
            77113: "e6c127aa0f9491e1",
            77275: "572f85f558327f40",
            80530: "e6c127aa0f9491e1",
            81754: "e6c127aa0f9491e1",
            83937: "e6c127aa0f9491e1",
            87509: "572f85f558327f40",
            92690: "e6c127aa0f9491e1",
            92888: "225b7e96585627c6",
            95405: "e6c127aa0f9491e1",
            96277: "572f85f558327f40",
            99861: "e6c127aa0f9491e1"
        }[e] + ".css"
    }
    ,
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n = {},
    a = "_N_E:",
    s.l = function(e, t, c, r) {
        if (n[e])
            n[e].push(t);
        else {
            var f, d;
            if (void 0 !== c)
                for (var i = document.getElementsByTagName("script"), o = 0; o < i.length; o++) {
                    var u = i[o];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == a + c) {
                        f = u;
                        break
                    }
                }
            f || (d = !0,
            (f = document.createElement("script")).charset = "utf-8",
            f.timeout = 120,
            s.nc && f.setAttribute("nonce", s.nc),
            f.setAttribute("data-webpack", a + c),
            f.src = s.tu(e),
            0 !== f.src.indexOf(window.location.origin + "/") && (f.crossOrigin = "anonymous")),
            n[e] = [t];
            var b = function(t, c) {
                f.onerror = f.onload = null,
                clearTimeout(l);
                var a = n[e];
                if (delete n[e],
                f.parentNode && f.parentNode.removeChild(f),
                a && a.forEach((function(e) {
                    return e(c)
                }
                )),
                t)
                    return t(c)
            }
              , l = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: f
            }), 12e4);
            f.onerror = b.bind(null, f.onerror),
            f.onload = b.bind(null, f.onload),
            d && document.head.appendChild(f)
        }
    }
    ,
    s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    s.tt = function() {
        return void 0 === r && (r = {
            createScriptURL: function(e) {
                return e
            }
        },
        "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (r = trustedTypes.createPolicy("nextjs#bundler", r))),
        r
    }
    ,
    s.tu = function(e) {
        return s.tt().createScriptURL(e)
    }
    ,
    s.p = "https://s3.coinglass.com/v1/cg/_next/",
    f = function(e) {
        return new Promise((function(t, c) {
            var n = s.miniCssF(e)
              , a = s.p + n;
            if (function(e, t) {
                for (var c = document.getElementsByTagName("link"), n = 0; n < c.length; n++) {
                    var a = (f = c[n]).getAttribute("data-href") || f.getAttribute("href");
                    if ("stylesheet" === f.rel && (a === e || a === t))
                        return f
                }
                var r = document.getElementsByTagName("style");
                for (n = 0; n < r.length; n++) {
                    var f;
                    if ((a = (f = r[n]).getAttribute("data-href")) === e || a === t)
                        return f
                }
            }(n, a))
                return t();
            !function(e, t, c, n) {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css",
                a.onerror = a.onload = function(r) {
                    if (a.onerror = a.onload = null,
                    "load" === r.type)
                        c();
                    else {
                        var f = r && ("load" === r.type ? "missing" : r.type)
                          , d = r && r.target && r.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = f,
                        i.request = d,
                        a.parentNode.removeChild(a),
                        n(i)
                    }
                }
                ,
                a.href = t,
                0 !== a.href.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"),
                document.head.appendChild(a)
            }(e, a, t, c)
        }
        ))
    }
    ,
    d = {
        62272: 0
    },
    s.f.miniCss = function(e, t) {
        d[e] ? t.push(d[e]) : 0 !== d[e] && {
            64475: 1
        }[e] && t.push(d[e] = f(e).then((function() {
            d[e] = 0
        }
        ), (function(t) {
            throw delete d[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            62272: 0,
            55844: 0
        };
        s.f.j = function(t, c) {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    c.push(n[2]);
                else if (/^(55844|62272)$/.test(t))
                    e[t] = 0;
                else {
                    var a = new Promise((function(c, a) {
                        n = e[t] = [c, a]
                    }
                    ));
                    c.push(n[2] = a);
                    var r = s.p + s.u(t)
                      , f = new Error;
                    s.l(r, (function(c) {
                        if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var a = c && ("load" === c.type ? "missing" : c.type)
                              , r = c && c.target && c.target.src;
                            f.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")",
                            f.name = "ChunkLoadError",
                            f.type = a,
                            f.request = r,
                            n[1](f)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        s.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, c) {
            var n, a, r = c[0], f = c[1], d = c[2], i = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (n in f)
                    s.o(f, n) && (s.m[n] = f[n]);
                if (d)
                    var o = d(s)
            }
            for (t && t(c); i < r.length; i++)
                a = r[i],
                s.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return s.O(o)
        }
          , c = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        c.forEach(t.bind(null, 0)),
        c.push = t.bind(null, c.push.bind(c))
    }(),
    s.nc = void 0
}();


const F = window.xxx(30410)
console.log(F);

const t = {
    "sort": "",
    "order": "",
    "keyword": "",
    "pageNum": 1,
    "pageSize": 20,
    "ex": "all"
};
const res = (0, F.QEV)(t)
console.log(res);
