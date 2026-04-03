window = global;
require("./mod1.js");
require("./mod2.js");
(function(e) {
    function t(t) {
        for (var r, o, i = t[0], c = t[1], s = t[2], l = 0, f = []; l < i.length; l++)
            o = i[l],
            Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
            a[o] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        d && d(t);
        while (f.length)
            f.shift()();
        return u.push.apply(u, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < u.length; t++) {
            for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
                var i = n[o];
                0 !== a[i] && (r = !1)
            }
            r && (u.splice(t--, 1),
            e = c(c.s = n[0]))
        }
        return e
    }
    var r = {}
      , o = {
        app: 0
    }
      , a = {
        app: 0
    }
      , u = [];
    function i(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-4136500c": "f3e9bb54",
            "chunk-10192a00": "243cb8b7",
            "chunk-7502f973": "428355cb"
        }[e] + ".js"
    }
    function c(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        console.log("加载的模块:", t);
        return e[t].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    window.xxx = c;
    c.e = function(e) {
        var t = []
          , n = {
            "chunk-10192a00": 1,
            "chunk-7502f973": 1
        };
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function(t, n) {
            for (var r = "css/" + ({}[e] || e) + "." + {
                "chunk-4136500c": "31d6cfe0",
                "chunk-10192a00": "65a5913c",
                "chunk-7502f973": "17571dd5"
            }[e] + ".css", a = c.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
                var s = u[i]
                  , l = s.getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (l === r || l === a))
                    return t()
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
                s = f[i],
                l = s.getAttribute("data-href");
                if (l === r || l === a)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css",
            d.onload = t,
            d.onerror = function(t) {
                var r = t && t.target && t.target.src || a
                  , u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED",
                u.request = r,
                delete o[e],
                d.parentNode.removeChild(d),
                n(u)
            }
            ,
            d.href = a;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d)
        }
        )).then((function() {
            o[e] = 0
        }
        )));
        var r = a[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var u = new Promise((function(t, n) {
                    r = a[e] = [t, n]
                }
                ));
                t.push(r[2] = u);
                var s, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                c.nc && l.setAttribute("nonce", c.nc),
                l.src = i(e);
                var f = new Error;
                s = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(d);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            f.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                            f.name = "ChunkLoadError",
                            f.type = r,
                            f.request = o,
                            n[1](f)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = s,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = r,
    c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (c.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                c.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var f = 0; f < s.length; f++)
        t(s[f]);
    var d = l;
    u.push([0, "chunk-vendors"])
    // n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function(e, t, n) {
        "use strict";
        var r = n("64a9")
          , o = n.n(r);
        o.a
    },
    2927: function(e, t, n) {},
    3667: function(e, t, n) {},
    "490d": function(e, t, n) {},
    "4a3d": function(e, t, n) {
        "use strict";
        var r = n("2927")
          , o = n.n(r);
        o.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"),
        n("551c"),
        n("f751"),
        n("097d");
        var r = n("2b0e")
          , o = n("bc3a")
          , a = n.n(o)
          , u = {}
          , i = a.a.create(u);
        i.interceptors.request.use((function(e) {
            return e
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        )),
        i.interceptors.response.use((function(e) {
            return e
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        )),
        Plugin.install = function(e, t) {
            e.axios = i,
            window.axios = i,
            Object.defineProperties(e.prototype, {
                axios: {
                    get: function() {
                        return i
                    }
                },
                $axios: {
                    get: function() {
                        return i
                    }
                }
            })
        }
        ,
        r["default"].use(Plugin);
        Plugin;
        var c = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("head-bar"), n("router-view")], 1)
        }
          , s = []
          , l = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("el-row", {
                attrs: {
                    id: "header"
                }
            }, [r("el-col", {
                staticClass: "container",
                attrs: {
                    span: 18,
                    offset: 3
                }
            }, [r("el-row", [r("el-col", {
                staticClass: "logo",
                attrs: {
                    span: 4
                }
            }, [r("router-link", {
                attrs: {
                    to: {
                        name: "index"
                    }
                }
            }, [r("img", {
                staticClass: "logo-image",
                attrs: {
                    src: n("cf05")
                }
            }), r("span", {
                staticClass: "logo-title"
            }, [e._v("Scrape")])])], 1)], 1)], 1)], 1)
        }
          , f = []
          , d = {
            name: "HeadBar"
        }
          , p = d
          , h = (n("4a3d"),
        n("2877"))
          , m = Object(h["a"])(p, l, f, !1, null, "74e8b908", null)
          , g = m.exports
          , v = {
            name: "App",
            components: {
                HeadBar: g
            },
            data: function() {
                return {}
            }
        }
          , b = v
          , y = (n("034f"),
        Object(h["a"])(b, c, s, !1, null, null, null))
          , k = y.exports
          , w = n("5c96")
          , P = n.n(w);
        r["default"].use(P.a);
        n("7d32"),
        n("78a7"),
        n("3667"),
        n("490d");
        var x = n("2f62");
        r["default"].use(x["a"]);
        var j = new x["a"].Store({
            state: {
                url: {
                    index: "/api/movie",
                    detail: "/api/movie/{key}"
                }
            },
            mutations: {},
            actions: {}
        })
          , O = n("8c4f");
        r["default"].use(O["a"]);
        var _ = new O["a"]({
            mode: "history",
            base: "/",
            routes: [{
                path: "/",
                name: "index",
                component: function() {
                    return Promise.all([n.e("chunk-4136500c"), n.e("chunk-10192a00")]).then(n.bind(null, "d504"))
                }
            }, {
                path: "/page/:page",
                name: "indexPage",
                component: function() {
                    return Promise.all([n.e("chunk-4136500c"), n.e("chunk-10192a00")]).then(n.bind(null, "d504"))
                }
            }, {
                path: "/detail/:key",
                name: "detail",
                component: function() {
                    return Promise.all([n.e("chunk-4136500c"), n.e("chunk-7502f973")]).then(n.bind(null, "c84b"))
                }
            }]
        });
        r["default"].config.productionTip = !1,
        new r["default"]({
            store: j,
            router: _,
            render: function(e) {
                return e(k)
            }
        }).$mount("#app")
    },
    "64a9": function(e, t, n) {},
    "78a7": function(e, t, n) {},
    "7d32": function(e, t, n) {},
    cf05: function(e, t, n) {
        e.exports = n.p + "img/logo.a508a8f0.png"
    }
});


const i = window.xxx("7d92");
// console.log(i);
function get_token(page) {
    const token = Object(i["a"])('/api/movie', page)
    console.log(token);
    return token;
}

get_token(10)