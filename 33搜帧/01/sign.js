window = global;
require("./mod1");
require("./mod2");
// window.Buffer = Buffer;
// window.Window = function Window() { }
// Object.setPrototypeOf(window, window.Window.prototype)
// window.Document = function Document() { }



(function(e) {
    function n(n) {
        for (var t, r, f = n[0], o = n[1], h = n[2], d = 0, i = []; d < f.length; d++)
            r = f[d],
            Object.prototype.hasOwnProperty.call(u, r) && u[r] && i.push(u[r][0]),
            u[r] = 0;
        for (t in o)
            Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
        k && k(n);
        while (i.length)
            i.shift()();
        return a.push.apply(a, h || []),
        c()
    }
    function c() {
        for (var e, n = 0; n < a.length; n++) {
            for (var c = a[n], t = !0, r = 1; r < c.length; r++) {
                var f = c[r];
                0 !== u[f] && (t = !1)
            }
            t && (a.splice(n--, 1),
            e = o(o.s = c[0]))
        }
        return e
    }
    var t = {}
        , r = {
        runtime: 0
    }
        , u = {
        runtime: 0
    }
        , a = [];
    function f(e) {
        return o.p + "static/js/" + ({}[e] || e) + "." + {
            "chunk-01217a92": "e30d074d",
            "chunk-043569a5": "15d25c3e",
            "chunk-086804fe": "bc032066",
            "chunk-1fc4b1c2": "12eb7699",
            "chunk-2a46fe25": "0107232b",
            "chunk-2d0ac96a": "88b9330b",
            "chunk-2d0be662": "b1425a3a",
            "chunk-2d0e184c": "1f1d923c",
            "chunk-4a5f46a6": "735c7b50",
            "chunk-1faebb7f": "13f55742",
            "chunk-22190e2c": "364d1c3c",
            "chunk-51d13d7c": "0c406a00",
            "chunk-5e689978": "f904b1f5",
            "chunk-61b8a884": "d06f58c3",
            "chunk-6666c538": "9a1b3fa8",
            "chunk-73b3c95f": "31521433",
            "chunk-74926972": "1a19d822",
            "chunk-18962b75": "95dda092",
            "chunk-348892da": "570d8879",
            "chunk-8ed97a6a": "73274ca9",
            "chunk-9cf32520": "2f2554fa",
            "chunk-a1f38ec6": "f3abef6e",
            "chunk-d33fe6f8": "8d1d53bc",
            "chunk-d3a1f364": "8113d509"
        }[e] + ".js"
    }
    function o(n) {
        if (t[n])
            return t[n].exports;
        var c = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        // console.log("加载的模块为:", n);
        return e[n].call(c.exports, c, c.exports, o),
        c.l = !0,
        c.exports
    }
    window.xxx = o;
    o.e = function(e) {
        var n = []
            , c = {
            "chunk-043569a5": 1,
            "chunk-086804fe": 1,
            "chunk-1fc4b1c2": 1,
            "chunk-2a46fe25": 1,
            "chunk-1faebb7f": 1,
            "chunk-22190e2c": 1,
            "chunk-51d13d7c": 1,
            "chunk-5e689978": 1,
            "chunk-6666c538": 1,
            "chunk-73b3c95f": 1,
            "chunk-18962b75": 1,
            "chunk-348892da": 1,
            "chunk-8ed97a6a": 1,
            "chunk-9cf32520": 1,
            "chunk-a1f38ec6": 1,
            "chunk-d33fe6f8": 1,
            "chunk-d3a1f364": 1
        };
        r[e] ? n.push(r[e]) : 0 !== r[e] && c[e] && n.push(r[e] = new Promise((function(n, c) {
            for (var t = "static/css/" + ({}[e] || e) + "." + {
                "chunk-01217a92": "31d6cfe0",
                "chunk-043569a5": "9302d25a",
                "chunk-086804fe": "8a54229f",
                "chunk-1fc4b1c2": "3a0fda01",
                "chunk-2a46fe25": "9b8fe2e6",
                "chunk-2d0ac96a": "31d6cfe0",
                "chunk-2d0be662": "31d6cfe0",
                "chunk-2d0e184c": "31d6cfe0",
                "chunk-4a5f46a6": "31d6cfe0",
                "chunk-1faebb7f": "73b71fc6",
                "chunk-22190e2c": "607c78d8",
                "chunk-51d13d7c": "a692d790",
                "chunk-5e689978": "5e8e78f5",
                "chunk-61b8a884": "31d6cfe0",
                "chunk-6666c538": "26625f06",
                "chunk-73b3c95f": "f61ef51f",
                "chunk-74926972": "31d6cfe0",
                "chunk-18962b75": "6fc0d07a",
                "chunk-348892da": "8773a71b",
                "chunk-8ed97a6a": "aca4ba30",
                "chunk-9cf32520": "24cbecff",
                "chunk-a1f38ec6": "068107bc",
                "chunk-d33fe6f8": "89ab7a0f",
                "chunk-d3a1f364": "85f36bb8"
            }[e] + ".css", u = o.p + t, a = document.getElementsByTagName("link"), f = 0; f < a.length; f++) {
                var h = a[f]
                    , d = h.getAttribute("data-href") || h.getAttribute("href");
                if ("stylesheet" === h.rel && (d === t || d === u))
                    return n()
            }
            var i = document.getElementsByTagName("style");
            for (f = 0; f < i.length; f++) {
                h = i[f],
                d = h.getAttribute("data-href");
                if (d === t || d === u)
                    return n()
            }
            var k = document.createElement("link");
            k.rel = "stylesheet",
            k.type = "text/css",
            k.onload = n,
            k.onerror = function(n) {
                var t = n && n.target && n.target.src || u
                    , a = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED",
                a.request = t,
                delete r[e],
                k.parentNode.removeChild(k),
                c(a)
            }
            ,
            k.href = u;
            var l = document.getElementsByTagName("head")[0];
            l.appendChild(k)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var t = u[e];
        if (0 !== t)
            if (t)
                n.push(t[2]);
            else {
                var a = new Promise((function(n, c) {
                    t = u[e] = [n, c]
                }
                ));
                n.push(t[2] = a);
                var h, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                o.nc && d.setAttribute("nonce", o.nc),
                d.src = f(e);
                var i = new Error;
                h = function(n) {
                    d.onerror = d.onload = null,
                    clearTimeout(k);
                    var c = u[e];
                    if (0 !== c) {
                        if (c) {
                            var t = n && ("load" === n.type ? "missing" : n.type)
                                , r = n && n.target && n.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + t + ": " + r + ")",
                            i.name = "ChunkLoadError",
                            i.type = t,
                            i.request = r,
                            c[1](i)
                        }
                        u[e] = void 0
                    }
                }
                ;
                var k = setTimeout((function() {
                    h({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = h,
                document.head.appendChild(d)
            }
        return Promise.all(n)
    }
    ,
    o.m = e,
    o.c = t,
    o.d = function(e, n, c) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: c
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, n) {
        if (1 & n && (e = o(e)),
        8 & n)
            return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)
            return e;
        var c = Object.create(null);
        if (o.r(c),
        Object.defineProperty(c, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var t in e)
                o.d(c, t, function(n) {
                    return e[n]
                }
                .bind(null, t));
        return c
    }
    ,
    o.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(n, "a", n),
        n
    }
    ,
    o.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    o.p = "/",
    o.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var h = window["webpackJsonp"] = window["webpackJsonp"] || []
        , d = h.push.bind(h);
    h.push = n,
    h = h.slice();
    for (var i = 0; i < h.length; i++)
        n(h[i]);
    var k = d;
    c()
}
)([]);



const s = window.xxx("b85c");
const o = window.xxx("bc3a");
const u = window.xxx("6821");
const d = window.xxx.n(u);

const params = {
    "keyword": "火车呼啸而过",
    "page": 1,
    "limit": 12,
    "_platform": "web",
    "_versioin": "0.2.5"
}

function l(e) {
    e._ts = (new Date).getTime() - 9999;
    var t, n = Object.keys(e), o = "", a = Object(s["a"])(n.sort());
    try {
        for (a.s(); !(t = a.n()).done; ) {
            var i = t.value;
            void 0 !== e[i] && null !== e[i] && (o += "".concat(i, "=").concat(e[i], ","))
        }
    } catch (r) {
        a.e(r)
    } finally {
        a.f()
    }
    // return console.log("signature:", o),
    // return o,
    // d()(o)
    return {
        sign: d()(o),
        ts: e._ts
    }
}

function get_xs() {
    const X_Signature = l(params);
    console.log(X_Signature);
    return X_Signature;
}

    

get_xs(params)