window = global;
require("./mod")
!function(e) {
    function r(r) {
        for (var n, u, i = r[0], c = r[1], l = r[2], p = 0, s = []; p < i.length; p++)
            u = i[p],
            Object.prototype.hasOwnProperty.call(o, u) && o[u] && s.push(o[u][0]),
            o[u] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (f && f(r); s.length; )
            s.shift()();
        return a.push.apply(a, l || []),
        t()
    }
    function t() {
        for (var e, r = 0; r < a.length; r++) {
            for (var t = a[r], n = !0, i = 1; i < t.length; i++) {
                var c = t[i];
                0 !== o[c] && (n = !1)
            }
            n && (a.splice(r--, 1),
            e = u(u.s = t[0]))
        }
        return e
    }
    var n = {}
      , o = {
        0: 0
    }
      , a = [];
    function u(r) {
        if (n[r])
            return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        }
          , o = !0;
        try {
            console.log("加载的模块:", r);
            e[r].call(t.exports, t, t.exports, u),
            o = !1
        } finally {
            o && delete n[r]
        }
        return t.l = !0,
        t.exports
    }
    window.xxx = u;
    u.e = function(e) {
        var r = []
          , t = o[e];
        if (0 !== t)
            if (t)
                r.push(t[2]);
            else {
                var n = new Promise((function(r, n) {
                    t = o[e] = [r, n]
                }
                ));
                r.push(t[2] = n);
                var a, i = document.createElement("script");
                i.charset = "utf-8",
                i.timeout = 120,
                u.nc && i.setAttribute("nonce", u.nc),
                i.src = function(e) {
                    return u.p + "static/chunks/" + ({}[e] || e) + "." + {
                        28: "d9a127bd8cc75b98f459",
                        67: "ca7b40519aba7a1edee1",
                        68: "ddc8be9ed7a8fe02898b"
                    }[e] + ".js"
                }(e);
                var c = new Error;
                a = function(r) {
                    i.onerror = i.onload = null,
                    clearTimeout(l);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                              , a = r && r.target && r.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
                            c.name = "ChunkLoadError",
                            c.type = n,
                            c.request = a,
                            t[1](c)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: i
                    })
                }
                ), 12e4);
                i.onerror = i.onload = a,
                document.head.appendChild(i)
            }
        return Promise.all(r)
    }
    ,
    u.m = e,
    u.c = n,
    u.d = function(e, r, t) {
        u.o(e, r) || Object.defineProperty(e, r, {
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
    u.t = function(e, r) {
        if (1 & r && (e = u(e)),
        8 & r)
            return e;
        if (4 & r && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (u.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & r && "string" != typeof e)
            for (var n in e)
                u.d(t, n, function(r) {
                    return e[r]
                }
                .bind(null, n));
        return t
    }
    ,
    u.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return u.d(r, "a", r),
        r
    }
    ,
    u.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    ,
    u.p = "",
    u.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var i = window.webpackJsonp = window.webpackJsonp || []
      , c = i.push.bind(i);
    i.push = r,
    i = i.slice();
    for (var l = 0; l < i.length; l++)
        r(i[l]);
    var f = c;
    t()
}([]);

function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }

function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function(t) {
                    n(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }

function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }

const nn = {
    "rn": 20,
    "lastTime": 1772676949,
    "subscribedColumnIds": "",
    "hasFirstVipArticle": "1",
    "os": "web",
    "sv": "8.4.6",
    "app": "CailianpressWeb"
}
const p = window.xxx("W2Yj")

const sign = p(a({}, nn))
console.log(sign);
