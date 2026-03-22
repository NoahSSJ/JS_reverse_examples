window = global;
self = global;
require("./mod1");
!function() {
    "use strict";
    var e = {}
      , t = {};
    function c(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var f = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        }
          , d = !0;
        try {
            console.log("加载的模块为:", n);
            e[n].call(f.exports, f, f.exports, c),
            d = !1
        } finally {
            d && delete t[n]
        }
        return f.loaded = !0,
        f.exports
    }
    window.xxx = c;
    c.m = e,
    c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }
    ,
    c.amdO = {},
    function() {
        var e = [];
        c.O = function(t, n, a, f) {
            if (!n) {
                var d = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    n = e[s][0],
                    a = e[s][1],
                    f = e[s][2];
                    for (var r = !0, u = 0; u < n.length; u++)
                        (!1 & f || d >= f) && Object.keys(c.O).every((function(e) {
                            return c.O[e](n[u])
                        }
                        )) ? n.splice(u--, 1) : (r = !1,
                        f < d && (d = f));
                    if (r) {
                        e.splice(s--, 1);
                        var i = a();
                        void 0 !== i && (t = i)
                    }
                }
                return t
            }
            f = f || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > f; s--)
                e[s] = e[s - 1];
            e[s] = [n, a, f]
        }
    }(),
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(t, {
            a: t
        }),
        t
    }
    ,
    function() {
        var e, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        }
        : function(e) {
            return e.__proto__
        }
        ;
        c.t = function(n, a) {
            if (1 & a && (n = this(n)),
            8 & a)
                return n;
            if ("object" === typeof n && n) {
                if (4 & a && n.__esModule)
                    return n;
                if (16 & a && "function" === typeof n.then)
                    return n
            }
            var f = Object.create(null);
            c.r(f);
            var d = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var r = 2 & a && n; "object" == typeof r && !~e.indexOf(r); r = t(r))
                Object.getOwnPropertyNames(r).forEach((function(e) {
                    d[e] = function() {
                        return n[e]
                    }
                }
                ));
            return d.default = function() {
                return n
            }
            ,
            c.d(f, d),
            f
        }
    }(),
    c.d = function(e, t) {
        for (var n in t)
            c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    c.f = {},
    c.e = function(e) {
        return Promise.all(Object.keys(c.f).reduce((function(t, n) {
            return c.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    c.u = function(e) {
        return 7409 === e ? "static/chunks/ee9ce975-ee00b8f1a2e9f65e.js" : 2446 === e ? "static/chunks/2446-8d158c8a22961d04.js" : 8241 === e ? "static/chunks/8241-c3040b87dfd730e0.js" : 945 === e ? "static/chunks/945-a0e8600be4465686.js" : 2727 === e ? "static/chunks/2727-42575d86bfef8089.js" : 5068 === e ? "static/chunks/5068-ac84e064d11c37ca.js" : 5083 === e ? "static/chunks/5083-1e9e4fd463584b7b.js" : 5307 === e ? "static/chunks/5307-15c585eb82d17c1a.js" : 6880 === e ? "static/chunks/6880-183eec4f08f3025c.js" : 769 === e ? "static/chunks/769-c1969eb6a68761ea.js" : 3186 === e ? "static/chunks/3186-30fce26a90caf4f7.js" : 1102 === e ? "static/chunks/1102-821f2a4efce16012.js" : 1641 === e ? "static/chunks/1641-ba10c83f0399dd5e.js" : 9110 === e ? "static/chunks/9110-a8a8afcd452a4aff.js" : 7199 === e ? "static/chunks/7199-6a534a9088234a8e.js" : 8388 === e ? "static/chunks/8388-8d4c0f9f0feada81.js" : 5458 === e ? "static/chunks/5458-3da4f1be82ade139.js" : 954 === e ? "static/chunks/954-5f4d156ab03984e1.js" : 9009 === e ? "static/chunks/9009-bd6b13781ef8edbd.js" : 4726 === e ? "static/chunks/4726-5a48b83f44a8e969.js" : 6149 === e ? "static/chunks/6149-12a490a15525baa3.js" : 5443 === e ? "static/chunks/ad7f724d-c783309ff8720dc6.js" : 486 === e ? "static/chunks/486-4a8b96f3fa55f120.js" : 3541 === e ? "static/chunks/3541-ca58c52d2fe22a35.js" : 2077 === e ? "static/chunks/2077-23d50d95610daceb.js" : 4094 === e ? "static/chunks/4094-1854b8ed709273a6.js" : 4013 === e ? "static/chunks/07920d6a-50498ce5b77ac427.js" : 1076 === e ? "static/chunks/1076-b2f810cc5ad02f3f.js" : "static/chunks/" + e + "." + {
            81: "02cf1f4c199deea5",
            196: "2a192dbf449d512f",
            214: "42ac4c60717b5c8a",
            598: "c3f0578f3567af6c",
            810: "3fe88204ed0dcc16",
            911: "7d0de4b28c26d8df",
            1525: "9a8a6f72e5b1b4af",
            1545: "3a1e391f7f125640",
            1568: "696700bee1275dfe",
            1583: "da8d6719e87c2f0d",
            1592: "60a88e3fe158ccb0",
            1990: "acf30c65cd71b453",
            2366: "a746941ae8e5df72",
            3001: "04e0a3b821d8d19a",
            3110: "938a0b75126b6064",
            3119: "55a3688a3482289e",
            3183: "28a74616652afc93",
            3286: "2f6530eac82768ff",
            3331: "8a83881e79121850",
            3991: "b56dd66c464f1ed4",
            4610: "410f9f0a40fc9bd7",
            4909: "87e2a2d319f08e1e",
            5244: "0c17a9ede3858179",
            5675: "490adf3f7bdbcac3",
            5876: "4b5fb9c236b11122",
            5878: "ea3c113391aeb98c",
            6017: "25b11eb8592fa445",
            6033: "e8df4408436c2ea1",
            6540: "2024dc039dc8a68d",
            6719: "a8bf2273c954ac71",
            6767: "7e35df95fc2a3eb7",
            6850: "31efadbf28fbfe2f",
            7043: "596dfc29a40a339b",
            7169: "7d64aa3809bd816d",
            7245: "3a3795510114d43e",
            7477: "14eb7c1b476ea5f4",
            7546: "67186ca476ef9fe7",
            7588: "c9ab7f976e157e6a",
            7619: "912153b141e3ad7f",
            7787: "0b860870a182a8e9",
            8100: "686e59d2e444725d",
            8106: "74b3dfd3d04f96f1",
            8573: "8baadc56a7962492",
            8847: "0ef5ba27db0016ab",
            9053: "0e19166130304ecd",
            9121: "90b87fd808cf11c1",
            9325: "5b1b09434536f3e2",
            9376: "90968be48d88a0cc",
            9406: "a14864a971a508b7",
            9421: "5eb16abf9ff87776",
            9598: "b78b9657f50e7eb1",
            9689: "8529be5908ee9fc1",
            9898: "a137e9e3bd1e6183",
            9962: "964aaabc51281145",
            9981: "1d7180bf86a40c5e"
        }[e] + ".js"
    }
    ,
    c.miniCssF = function(e) {
        return "static/css/" + {
            447: "bb0b0acfd6c49984",
            685: "beb9af01e6c7d8fa",
            855: "1f5d46bcdc22b0d1",
            1495: "d6a2b263910aa41e",
            2139: "8bf2f8d3a906d142",
            2277: "fe6bca2f5ade2fb9",
            2429: "85d3376812bccaca",
            2663: "278a8a74f65389f1",
            2888: "078c7221fdbc162c",
            2983: "85d3376812bccaca",
            3313: "30c86dbaaa19171e",
            3795: "10001ea7d278e7b1",
            3921: "8873807cc5fffc08",
            4122: "338d01010eb42bb4",
            4674: "0fa169adeb65261f",
            4892: "da46d18dbe527c2e",
            5276: "858e93123ee40ddf",
            5297: "3f23a23f7b4bc4be",
            5802: "df5c51e0b8ba33f5",
            6909: "8c4cd4af22197dd2",
            7104: "54e64fddb6026d57",
            7401: "09efa924f184d12d",
            7980: "ecfeb94e378e4211",
            8361: "df5c51e0b8ba33f5",
            8900: "48015dc0add08b40",
            8963: "b6f481c985d3a7d5",
            9610: "12a604d16231d1d9"
        }[e] + ".css"
    }
    ,
    c.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        var e = {}
          , t = "_N_E:";
        c.l = function(n, a, f, d) {
            if (e[n])
                e[n].push(a);
            else {
                var r, u;
                if (void 0 !== f)
                    for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                        var o = i[s];
                        if (o.getAttribute("src") == n || o.getAttribute("data-webpack") == t + f) {
                            r = o;
                            break
                        }
                    }
                r || (u = !0,
                (r = document.createElement("script")).charset = "utf-8",
                r.timeout = 120,
                c.nc && r.setAttribute("nonce", c.nc),
                r.setAttribute("data-webpack", t + f),
                r.src = c.tu(n)),
                e[n] = [a];
                var b = function(t, c) {
                    r.onerror = r.onload = null,
                    clearTimeout(l);
                    var a = e[n];
                    if (delete e[n],
                    r.parentNode && r.parentNode.removeChild(r),
                    a && a.forEach((function(e) {
                        return e(c)
                    }
                    )),
                    t)
                        return t(c)
                }
                  , l = setTimeout(b.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
                r.onerror = b.bind(null, r.onerror),
                r.onload = b.bind(null, r.onload),
                u && document.head.appendChild(r)
            }
        }
    }(),
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    function() {
        var e;
        c.tt = function() {
            return void 0 === e && (e = {
                createScriptURL: function(e) {
                    return e
                }
            },
            "undefined" !== typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))),
            e
        }
    }(),
    c.tu = function(e) {
        return c.tt().createScriptURL(e)
    }
    ,
    c.p = "https://cdn.mytoken.org/_next/",
    function() {
        var e = {
            2272: 0
        };
        c.f.j = function(t, n) {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    n.push(a[2]);
                else if (2272 != t) {
                    var f = new Promise((function(c, n) {
                        a = e[t] = [c, n]
                    }
                    ));
                    n.push(a[2] = f);
                    var d = c.p + c.u(t)
                      , r = new Error;
                    c.l(d, (function(n) {
                        if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var f = n && ("load" === n.type ? "missing" : n.type)
                              , d = n && n.target && n.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + f + ": " + d + ")",
                            r.name = "ChunkLoadError",
                            r.type = f,
                            r.request = d,
                            a[1](r)
                        }
                    }
                    ), "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        c.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var a, f, d = n[0], r = n[1], u = n[2], i = 0;
            if (d.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (a in r)
                    c.o(r, a) && (c.m[a] = r[a]);
                if (u)
                    var s = u(c)
            }
            for (t && t(n); i < d.length; i++)
                f = d[i],
                c.o(e, f) && e[f] && e[f][0](),
                e[f] = 0;
            return c.O(s)
        }
          , n = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    c.nc = void 0
}();

function get_params() {
    const v = window.xxx(94786);
    const p = Date.now().toString();
    const d = {
        timestamp: p,
        code: v.V8.hashStr(p + "9527" + p.substring(0, 6)),
        platform: "web_pc",
        v: "0.1.0"
    }
    console.log(d);
    return d;
}

