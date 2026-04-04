window = global;
require("./mod1.js");
require("./mod2.js")
!function(c) {
    function e(e) {
        for (var t, r, n = e[0], o = e[1], u = e[2], a = 0, i = []; a < n.length; a++)
            r = n[a],
            d[r] && i.push(d[r][0]),
            d[r] = 0;
        for (t in o)
            Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]);
        for (h && h(e); i.length; )
            i.shift()();
        return s.push.apply(s, u || []),
        l()
    }
    function l() {
        for (var e, t = 0; t < s.length; t++) {
            for (var r = s[t], n = !0, o = 1; o < r.length; o++) {
                var u = r[o];
                0 !== d[u] && (n = !1)
            }
            n && (s.splice(t--, 1),
            e = p(p.s = r[0]))
        }
        return e
    }
    var r = {}
      , f = {
        95: 0
    }
      , d = {
        95: 0
    }
      , s = [];
    function p(e) {
        var t;
        return (r[e] || (t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        console.log("加载的模块为:", e),
        c[e].call(t.exports, t, t.exports, p),
        t.l = !0,
        t)).exports
    }
    window.xxx = p;
    p.e = function(s) {
        var e, t, o, u, r = [], n = (f[s] ? r.push(f[s]) : 0 !== f[s] && {
            68: 1
        }[s] && r.push(f[s] = new Promise(function(e, r) {
            for (var t = "static/css/" + ({}[s] || s) + ".chunk." + {
                68: "b0b3c5ed"
            }[s] + ".css", n = p.p + t, o = document.getElementsByTagName("link"), u = 0; u < o.length; u++) {
                var a = (i = o[u]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (a === t || a === n))
                    return e()
            }
            for (var i, c = document.getElementsByTagName("style"), u = 0; u < c.length; u++)
                if ((a = (i = c[u]).getAttribute("data-href")) === t || a === n)
                    return e();
            var l = document.createElement("link");
            l.rel = "stylesheet",
            l.type = "text/css",
            l.onload = e,
            l.onerror = function(e) {
                var e = e && e.target && e.target.src || n
                  , t = new Error("Loading CSS chunk " + s + " failed.\n(" + e + ")");
                t.request = e,
                delete f[s],
                l.parentNode.removeChild(l),
                r(t)
            }
            ,
            l.href = n,
            document.getElementsByTagName("head")[0].appendChild(l)
        }
        ).then(function() {
            f[s] = 0
        })),
        d[s]);
        return 0 !== n && (n ? r.push(n[2]) : (t = new Promise(function(e, t) {
            n = d[s] = [e, t]
        }
        ),
        r.push(n[2] = t),
        t = document.getElementsByTagName("head")[0],
        (o = document.createElement("script")).charset = "utf-8",
        o.timeout = 120,
        p.nc && o.setAttribute("nonce", p.nc),
        o.src = p.p + "static/js/" + ({}[s] || s) + ".chunk." + {
            68: "a65b5583"
        }[s] + ".js",
        e = function(e) {
            o.onerror = o.onload = null,
            clearTimeout(u);
            var t, r, n = d[s];
            0 !== n && (n && (t = e && ("load" === e.type ? "missing" : e.type),
            e = e && e.target && e.target.src,
            (r = new Error("Loading chunk " + s + " failed.\n(" + t + ": " + e + ")")).type = t,
            r.request = e,
            n[1](r)),
            d[s] = void 0)
        }
        ,
        u = setTimeout(function() {
            e({
                type: "timeout",
                target: o
            })
        }, 12e4),
        o.onerror = o.onload = e,
        t.appendChild(o))),
        Promise.all(r)
    }
    ,
    p.m = c,
    p.c = r,
    p.d = function(e, t, r) {
        p.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
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
    p.t = function(t, e) {
        if (1 & e && (t = p(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (p.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                p.d(r, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return r
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
        return p.d(t, "a", t),
        t
    }
    ,
    p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    p.p = "//static.zkh360.com/file/resource/official/",
    p.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var t = (n = window.webpackJsonp = window.webpackJsonp || []).push.bind(n);
    n.push = e;
    for (var n = n.slice(), o = 0; o < n.length; o++)
        e(n[o]);
    var h = t;
    l()
}([]);



const y = window.xxx(2);
// function get_zkhs() {
//     n = Object(y.Hb)(8, !0)
//     r = Object(y.A)("ukey")
//     c = JSON.stringify(Object(y.Qb)(Object(y.Bb)(o))),
//     i = "body=".concat(a, "&params=").concat(c, "&sign_token=").concat(r),
//     l = w()(i, r),
//     t.headers.zkhs = l,
//     t.headers.zkhst = r

// }