window = global;
self = global;
require("./mod1")
require("./mod2")
require("./mod3")

!function() {
    "use strict";
    var e, t, n, r, o, c, f, a, i, u, d, l, s = {}, b = {};
    function p(e) {
        var t = b[e];
        if (void 0 !== t)
            return t.exports;
        var n = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
        }
          , r = !0;
        try {
            console.log("加载的模块为:", e);
            s[e].call(n.exports, n, n.exports, p),
            r = !1
        } finally {
            r && delete b[e]
        }
        return n.loaded = !0,
        n.exports
    }
    window.xxx = p;
    p.m = s,
    e = [],
    p.O = function(t, n, r, o) {
        if (n) {
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--)
                e[c] = e[c - 1];
            e[c] = [n, r, o];
            return
        }
        for (var f = 1 / 0, c = 0; c < e.length; c++) {
            for (var n = e[c][0], r = e[c][1], o = e[c][2], a = !0, i = 0; i < n.length; i++)
                f >= o && Object.keys(p.O).every(function(e) {
                    return p.O[e](n[i])
                }) ? n.splice(i--, 1) : (a = !1,
                o < f && (f = o));
            if (a) {
                e.splice(c--, 1);
                var u = r();
                void 0 !== u && (t = u)
            }
        }
        return t
    }
    ,
    p.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return p.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    p.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then))
            return e;
        var o = Object.create(null);
        p.r(o);
        var c = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var f = 2 & r && e; "object" == typeof f && !~t.indexOf(f); f = n(f))
            Object.getOwnPropertyNames(f).forEach(function(t) {
                c[t] = function() {
                    return e[t]
                }
            });
        return c.default = function() {
            return e
        }
        ,
        p.d(o, c),
        o
    }
    ,
    p.d = function(e, t) {
        for (var n in t)
            p.o(t, n) && !p.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    p.f = {},
    p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce(function(t, n) {
            return p.f[n](e, t),
            t
        }, []))
    }
    ,
    p.u = function(e) {
        return "static/chunks/" + (({
            3070: "8012d7e2",
            3592: "96d80ea8"
        })[e] || e) + "." + ({
            20: "274afe835816a2cc",
            671: "ade5ccb707d7d285",
            1061: "ab5c6da9d8765b8f",
            2016: "3eea4ed0d7acdd40",
            2296: "6f57840fddeb23c1",
            3070: "f865b56fdff33cdc",
            3267: "b4fc0a5c586b15b6",
            3466: "b7785d72fb7c4f7c",
            3592: "9dbd258e51b18b3e",
            3600: "1264a52e4b72e513",
            4405: "74881574731b6641",
            4712: "8b98b53362c46b51",
            5056: "87cab233d3fbaf07",
            5470: "09e2c720cea275a1",
            5737: "64ce05dfc4e01ea1",
            5765: "170437c0619507ad",
            5887: "944b6c5a8a54c9c0",
            6695: "6559f4b45a577d51",
            8286: "3a25ae8cbcceaf0e",
            8357: "417490a3aecb8f48",
            9325: "b2098feb37daab17",
            9337: "989ba25c75c18429",
            9494: "d5b3c11fbf2282f9",
            9714: "1850150c21e19dac"
        })[e] + ".js"
    }
    ,
    p.miniCssF = function(e) {
        return "static/css/" + ({
            20: "432a2457c56f5b53",
            3466: "2a4796991d10b89a",
            4405: "8f6cf5acd7c3648a",
            4712: "5b5a12380edc83f9",
            5056: "114398d95597f008",
            5887: "1dc7e5fc15adb712",
            8357: "748c5c16d8cbb0d0",
            9494: "4cd90dc5c7506824",
            9714: "32f98d9025dd55e6"
        })[e] + ".css"
    }
    ,
    p.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r = {},
    o = "_N_E:",
    p.l = function(e, t, n, c) {
        if (r[e]) {
            r[e].push(t);
            return
        }
        if (void 0 !== n)
            for (var f, a, i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                var d = i[u];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + n) {
                    f = d;
                    break
                }
            }
        f || (a = !0,
        (f = document.createElement("script")).charset = "utf-8",
        f.timeout = 120,
        p.nc && f.setAttribute("nonce", p.nc),
        f.setAttribute("data-webpack", o + n),
        f.src = p.tu(e)),
        r[e] = [t];
        var l = function(t, n) {
            f.onerror = f.onload = null,
            clearTimeout(s);
            var o = r[e];
            if (delete r[e],
            f.parentNode && f.parentNode.removeChild(f),
            o && o.forEach(function(e) {
                return e(n)
            }),
            t)
                return t(n)
        }
          , s = setTimeout(l.bind(null, void 0, {
            type: "timeout",
            target: f
        }), 12e4);
        f.onerror = l.bind(null, f.onerror),
        f.onload = l.bind(null, f.onload),
        a && document.head.appendChild(f)
    }
    ,
    p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    p.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    p.tt = function() {
        return void 0 === c && (c = {
            createScriptURL: function(e) {
                return e
            }
        },
        "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (c = trustedTypes.createPolicy("nextjs#bundler", c))),
        c
    }
    ,
    p.tu = function(e) {
        return p.tt().createScriptURL(e)
    }
    ,
    p.p = "https://a1.dxycdn.com/gitrepo/bbs-pc-ssr-v2/_next/",
    f = function(e, t, n, r) {
        var o = document.createElement("link");
        return o.rel = "stylesheet",
        o.type = "text/css",
        o.onerror = o.onload = function(c) {
            if (o.onerror = o.onload = null,
            "load" === c.type)
                n();
            else {
                var f = c && ("load" === c.type ? "missing" : c.type)
                  , a = c && c.target && c.target.href || t
                  , i = Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.type = f,
                i.request = a,
                o.parentNode.removeChild(o),
                r(i)
            }
        }
        ,
        o.href = t,
        document.head.appendChild(o),
        o
    }
    ,
    a = function(e, t) {
        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
            var o = n[r]
              , c = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (c === e || c === t))
                return o
        }
        for (var f = document.getElementsByTagName("style"), r = 0; r < f.length; r++) {
            var o = f[r]
              , c = o.getAttribute("data-href");
            if (c === e || c === t)
                return o
        }
    }
    ,
    i = {
        2272: 0
    },
    p.f.miniCss = function(e, t) {
        i[e] ? t.push(i[e]) : 0 !== i[e] && ({
            20: 1,
            3466: 1,
            4405: 1,
            4712: 1,
            5056: 1,
            5887: 1,
            8357: 1,
            9494: 1,
            9714: 1
        })[e] && t.push(i[e] = new Promise(function(t, n) {
            var r = p.miniCssF(e)
              , o = p.p + r;
            if (a(r, o))
                return t();
            f(e, o, t, n)
        }
        ).then(function() {
            i[e] = 0
        }, function(t) {
            throw delete i[e],
            t
        }))
    }
    ,
    u = {
        2272: 0,
        2135: 0,
        9129: 0,
        2410: 0,
        2263: 0,
        7403: 0,
        8155: 0,
        437: 0,
        2599: 0,
        1940: 0,
        7685: 0,
        7307: 0,
        1901: 0,
        578: 0,
        232: 0,
        2358: 0,
        426: 0,
        7192: 0,
        5355: 0,
        1119: 0,
        3635: 0,
        202: 0,
        5571: 0,
        9280: 0,
        874: 0,
        6132: 0,
        823: 0,
        996: 0,
        3131: 0,
        6543: 0,
        4866: 0,
        8783: 0,
        9492: 0,
        5018: 0,
        2672: 0,
        707: 0,
        3421: 0,
        4827: 0,
        2025: 0,
        4486: 0,
        9344: 0
    },
    p.f.j = function(e, t) {
        var n = p.o(u, e) ? u[e] : void 0;
        if (0 !== n) {
            if (n)
                t.push(n[2]);
            else if (/^(1(119|901|940)|2(0(|2|25)|(27|3|67)2|135|263|358|410|599)|3(131|421|466|635)|4((2|48|86)6|37|405|712|827)|5(018|056|355|571|78|887)|7((|3)07|192|403|685)|8(155|23|357|74|783)|9(49[24]|129|280|344|714|96)|6132|6543)$/.test(e))
                u[e] = 0;
            else {
                var r = new Promise(function(t, r) {
                    n = u[e] = [t, r]
                }
                );
                t.push(n[2] = r);
                var o = p.p + p.u(e)
                  , c = Error();
                p.l(o, function(t) {
                    if (p.o(u, e) && (0 !== (n = u[e]) && (u[e] = void 0),
                    n)) {
                        var r = t && ("load" === t.type ? "missing" : t.type)
                          , o = t && t.target && t.target.src;
                        c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                        c.name = "ChunkLoadError",
                        c.type = r,
                        c.request = o,
                        n[1](c)
                    }
                }, "chunk-" + e, e)
            }
        }
    }
    ,
    p.O.j = function(e) {
        return 0 === u[e]
    }
    ,
    d = function(e, t) {
        var n, r, o = t[0], c = t[1], f = t[2], a = 0;
        if (o.some(function(e) {
            return 0 !== u[e]
        })) {
            for (n in c)
                p.o(c, n) && (p.m[n] = c[n]);
            if (f)
                var i = f(p)
        }
        for (e && e(t); a < o.length; a++)
            r = o[a],
            p.o(u, r) && u[r] && u[r][0](),
            u[r] = 0;
        return p.O(i)
    }
    ,
    (l = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(d.bind(null, 0)),
    l.push = d.bind(null, l.push.bind(l))
}();




function r() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "alphabet"
              , n = ""
              , o = {
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                number: "0123456789"
            }[t];
            for (let t = 0; t < e; t++)
                n += o.charAt(Math.floor(Math.random() * o.length));
            return n
        };
function get_sign() {
            const e = {
                "cursor": "AoJ4iIPr6ZwDKDUyOTk1MTI5",
                "source": 1,
                "pageSize": 10
            }
             const t = "4bTogwpz7RzNO2VTFtW7zcfRkAE97ox6ZSgcQi7FgYdqrHqKB7aGqEZ4o7yssa2aEXoV3bQwh12FFgVNlpyYk2Yjm9d2EZGeGu3";
             const o = {
                ...e
            }
              , a = {
                appSignKey: t
            }
              , c = Date.now();
            o.timestamp = c + (-642 || 0),
            o.noncestr = r(8, "number");
            let i = Object.keys(o).filter(e => void 0 !== o[e] && "" !== o[e] || (delete o[e],
            !1)).concat("appSignKey").sort().map(e => {
                let t = a[e] || (void 0 === o[e] ? "" : o[e]);
                return "".concat(e, "=").concat(t)
            }
            ).join("&");
            console.log(i);
            
            o.sign = s()(i);
            console.log(o);
            return o;
        }

const o = window.xxx(54648)
const s = window.xxx.n(o)
// const t = window.xxx(49039)
// console.log(t);

get_sign()