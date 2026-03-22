window = global;
require("./mod")

!function(e) {
    function n(n) {
        for (var t, u, r = n[0], i = n[1], d = n[2], a = 0, h = []; a < r.length; a++)
            u = r[a],
            o[u] && h.push(o[u][0]),
            o[u] = 0;
        for (t in i)
            Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
        for (s && s(n); h.length; )
            h.shift()();
        return l.push.apply(l, d || []),
        c()
    }
    function c() {
        for (var e, n = 0; n < l.length; n++) {
            for (var c = l[n], t = !0, u = 1; u < c.length; u++) {
                var i = c[u];
                0 !== o[i] && (t = !1)
            }
            t && (l.splice(n--, 1),
            e = r(r.s = c[0]))
        }
        return e
    }
    var t = {}
      , u = {
        colleges: 0
    }
      , o = {
        colleges: 0
    }
      , l = [];
    function r(n) {
        if (t[n])
            return t[n].exports;
        var c = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        console.log("加载的模块为:", n);
        return e[n].call(c.exports, c, c.exports, r),
        c.l = !0,
        c.exports
    }
    window.xxx = r;
    r.e = function(e) {
        var n = [];
        u[e] ? n.push(u[e]) : 0 !== u[e] && {
            "chunk-096580b3": 1,
            "chunk-108f5cd5": 1,
            "chunk-15d7ed25": 1,
            "chunk-33de37ba": 1,
            "chunk-c7678118": 1,
            "chunk-1d6973ab": 1,
            "chunk-32ef4f7b": 1,
            "chunk-395a0bf8": 1,
            "chunk-50254282": 1,
            "chunk-55e9e5a0": 1,
            "chunk-6f2b94c7": 1,
            "chunk-799aade8": 1,
            "chunk-203e68ca": 1,
            "chunk-c21fba30": 1,
            "chunk-66525f60": 1,
            "chunk-97e4ebe2": 1,
            "chunk-b7855b90": 1,
            "chunk-52dab5e5": 1,
            "chunk-6d07927a": 1,
            "chunk-22306900": 1,
            "chunk-e046ffcc": 1,
            "chunk-7463bd14": 1
        }[e] && n.push(u[e] = new Promise(function(n, c) {
            for (var t = "static/css/" + ({}[e] || e) + "." + {
                "chunk-096580b3": "575e2380",
                "chunk-108f5cd5": "4d999e7c",
                "chunk-15d7ed25": "585f31c7",
                "chunk-2d0c2339": "31d6cfe0",
                "chunk-2d21d0c2": "31d6cfe0",
                "chunk-2d0df2e1": "31d6cfe0",
                "chunk-33de37ba": "5a1aca33",
                "chunk-c7678118": "c5ed2873",
                "chunk-1d6973ab": "644069d8",
                "chunk-32ef4f7b": "588cbff2",
                "chunk-395a0bf8": "b458d8e8",
                "chunk-50254282": "229fbfea",
                "chunk-55e9e5a0": "b7e3e9d1",
                "chunk-6f2b94c7": "47f7041d",
                "chunk-799aade8": "a428a8d7",
                "chunk-203e68ca": "a545bd37",
                "chunk-c21fba30": "ced851db",
                "chunk-66525f60": "f68fbdf7",
                "chunk-97e4ebe2": "656d01e5",
                "chunk-b7855b90": "2920c2e6",
                "chunk-52dab5e5": "75e520f7",
                "chunk-6d07927a": "cbbf6228",
                "chunk-22306900": "bf558255",
                "chunk-e046ffcc": "6f787986",
                "chunk-7463bd14": "ae1bfa49"
            }[e] + ".css", o = r.p + t, l = document.getElementsByTagName("link"), i = 0; i < l.length; i++) {
                var d = l[i]
                  , a = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (a === t || a === o))
                    return n()
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++)
                if ((a = (d = s[i]).getAttribute("data-href")) === t || a === o)
                    return n();
            var h = document.createElement("link");
            h.rel = "stylesheet",
            h.type = "text/css",
            h.onload = n,
            h.onerror = function(n) {
                var t = n && n.target && n.target.src || o
                  , l = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                l.code = "CSS_CHUNK_LOAD_FAILED",
                l.request = t,
                delete u[e],
                h.parentNode.removeChild(h),
                c(l)
            }
            ,
            h.href = o,
            document.getElementsByTagName("head")[0].appendChild(h)
        }
        ).then(function() {
            u[e] = 0
        }));
        var c = o[e];
        if (0 !== c)
            if (c)
                n.push(c[2]);
            else {
                var t = new Promise(function(n, t) {
                    c = o[e] = [n, t]
                }
                );
                n.push(c[2] = t);
                var l, i = document.createElement("script");
                i.charset = "utf-8",
                i.timeout = 120,
                r.nc && i.setAttribute("nonce", r.nc),
                i.src = function(e) {
                    return r.p + "static/js/" + ({}[e] || e) + "." + {
                        "chunk-096580b3": "7d3ea48b",
                        "chunk-108f5cd5": "866f7ef5",
                        "chunk-15d7ed25": "b15edcf0",
                        "chunk-2d0c2339": "b5ec015e",
                        "chunk-2d21d0c2": "c8f2cfb4",
                        "chunk-2d0df2e1": "f0b16f66",
                        "chunk-33de37ba": "2e6fad58",
                        "chunk-c7678118": "796fedd6",
                        "chunk-1d6973ab": "2b1a2569",
                        "chunk-32ef4f7b": "99b5cfca",
                        "chunk-395a0bf8": "977f845e",
                        "chunk-50254282": "b62c3f6d",
                        "chunk-55e9e5a0": "6b703c95",
                        "chunk-6f2b94c7": "07b88fbb",
                        "chunk-799aade8": "f9cb32ce",
                        "chunk-203e68ca": "ca0e795d",
                        "chunk-c21fba30": "ce10601c",
                        "chunk-66525f60": "75237f97",
                        "chunk-97e4ebe2": "2229c0b6",
                        "chunk-b7855b90": "35c156c3",
                        "chunk-52dab5e5": "feb41f1c",
                        "chunk-6d07927a": "756d1304",
                        "chunk-22306900": "5daee8d4",
                        "chunk-e046ffcc": "25dbc44b",
                        "chunk-7463bd14": "10280469"
                    }[e] + ".js"
                }(e),
                l = function(n) {
                    i.onerror = i.onload = null,
                    clearTimeout(d);
                    var c = o[e];
                    if (0 !== c) {
                        if (c) {
                            var t = n && ("load" === n.type ? "missing" : n.type)
                              , u = n && n.target && n.target.src
                              , l = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + u + ")");
                            l.type = t,
                            l.request = u,
                            c[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout(function() {
                    l({
                        type: "timeout",
                        target: i
                    })
                }, 12e4);
                i.onerror = i.onload = l,
                document.head.appendChild(i)
            }
        return Promise.all(n)
    }
    ,
    r.m = e,
    r.c = t,
    r.d = function(e, n, c) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: c
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, n) {
        if (1 & n && (e = r(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var c = Object.create(null);
        if (r.r(c),
        Object.defineProperty(c, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var t in e)
                r.d(c, t, function(n) {
                    return e[n]
                }
                .bind(null, t));
        return c
    }
    ,
    r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(n, "a", n),
        n
    }
    ,
    r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    r.p = "/",
    r.oe = function(e) {
        throw e
    }
    ;
    var i = window.webpackJsonp = window.webpackJsonp || []
      , d = i.push.bind(i);
    i.push = n,
    i = i.slice();
    for (var a = 0; a < i.length; a++)
        n(i[a]);
    var s = d;
    l.push([9, "chunk-commons"]),
    c()
}({
    5880: function(e, n) {
        e.exports = Vuex
    },
    "60bb": function(e, n) {
        e.exports = _
    },
    "8bbf": function(e, n) {
        e.exports = Vue
    },
    9: function(e, n, c) {
        e.exports = c("9a94")
    },
    "9a94": function(e, n, c) {
        "use strict";
        c.r(n),
        c("e260"),
        c("e6cf"),
        c("cca6"),
        c("a79d"),
        c("d3b7"),
        c("3ca3"),
        c("ddb0");
        var t = c("c1f7");
        // Vue.use(VueRouter);
        // var u = new Vue
        const o = [{
            path: "/careers",
            component: t.a,
            children: [{
                path: "/colleges/search",
                component: function() {
                    return Promise.all([c.e("chunk-6d07927a"), c.e("chunk-22306900"), c.e("chunk-e046ffcc")]).then(c.bind(null, "95fc"))
                },
                name: "CollegesSearch",
                meta: {
                    title: "院校库",
                    icon: ""
                }
            }, {
                path: "/colleges/detail",
                name: "CollegesDetail",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-2d0df2e1"), c.e("chunk-33de37ba"), c.e("chunk-c7678118")]).then(c.bind(null, "2e68"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "院校详情"
                }
            }, {
                path: "/colleges/liveList",
                name: "CollegesLiveList",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-55e9e5a0")]).then(c.bind(null, "6e40"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "院校直播页"
                }
            }, {
                path: "/colleges/scoreline",
                name: "CollegesScoreline",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-799aade8"), c.e("chunk-c21fba30"), c.e("chunk-66525f60")]).then(c.bind(null, "0be3"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "分数线"
                }
            }, {
                path: "/colleges/plan",
                name: "CollegesScoreline",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-799aade8"), c.e("chunk-096580b3"), c.e("chunk-203e68ca")]).then(c.bind(null, "4078"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "招生计划"
                }
            }, {
                path: "/colleges/introduction",
                name: "CollegesIntroduction",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-395a0bf8")]).then(c.bind(null, "9c24"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "院校介绍"
                }
            }, {
                path: "/colleges/freshman-report/detail",
                name: "CollegesFreshmanReportDetail",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-32ef4f7b")]).then(c.bind(null, "ef1d"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "新生报告详情"
                }
            }, {
                path: "/colleges/education-power/list",
                name: "CollegesPowerList",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-97e4ebe2")]).then(c.bind(null, "c0a8"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "办学实力"
                }
            }, {
                path: "/colleges/admissions-guide/list",
                name: "CollegesNewsList",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-50254282")]).then(c.bind(null, "4a63"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "招生简章"
                }
            }, {
                path: "/colleges/admissions-guide/detail",
                name: "CollegesNewsDetail",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-b7855b90")]).then(c.bind(null, "ceb6"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "招生简章"
                }
            }, {
                path: "/colleges/employmentreport/list",
                name: "CollegesEmploymentreportList",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-6f2b94c7")]).then(c.bind(null, "0bfa"))
                },
                beforeEnter: function(e, n, c) {
                    c(),
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "就业报告"
                }
            }, {
                path: "/colleges/compare",
                name: "CollegesCompare",
                component: function() {
                    return c.e("chunk-7463bd14").then(c.bind(null, "fd28"))
                },
                meta: {
                    title: "院校对比"
                }
            }, {
                path: "/colleges/image-list",
                name: "CollegesImageList",
                component: function() {
                    return Promise.all([c.e("chunk-2d21d0c2"), c.e("chunk-33de37ba"), c.e("chunk-1d6973ab")]).then(c.bind(null, "5ff8"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "院校风采"
                }
            }, {
                path: "/colleges/vr",
                name: "CollegesVR",
                component: function() {
                    return c.e("chunk-2d0c2339").then(c.bind(null, "48fe"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "院校VR"
                }
            }, {
                path: "/colleges/preFraction",
                name: "CollegesPreFraction",
                component: function() {
                    return Promise.all([c.e("chunk-096580b3"), c.e("chunk-108f5cd5")]).then(c.bind(null, "baae"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "提前批招生计划"
                }
            }, {
                path: "/colleges/preFractionScoreline",
                name: "CollegesPreFractionScoreline",
                component: function() {
                    return Promise.all([c.e("chunk-c21fba30"), c.e("chunk-108f5cd5")]).then(c.bind(null, "ca37"))
                },
                beforeEnter: function(e, n, c) {
                    !e.query.collegeCode && e.query.cid ? u.api.sdk.dms.basiclib.colleges.bynumidGet(e.query.cid).then(function(n) {
                        e.query.collegeCode = n.result.code,
                        c()
                    }) : c()
                },
                meta: {
                    title: "提前批分数线"
                }
            }, {
                path: "/colleges/compare/probability",
                name: "CollegesCompareProbability",
                component: function() {
                    return c.e("chunk-52dab5e5").then(c.bind(null, "5179"))
                },
                meta: {
                    title: "院校录取概率"
                }
            }, {
                path: "/colleges/compare/score-line",
                name: "CollegesCompareScoreLine",
                component: function() {
                    return c.e("chunk-15d7ed25").then(c.bind(null, "31fa"))
                },
                meta: {
                    title: "院校分数线"
                }
            }]
        }]
          , r = c("cf68");
        // Object(r.a)(l, Vue)
    },
    
});

const i = window.xxx("339a")
const data = {
    "keyword": "",
    "provinceNames": [],
    "natureTypes": [],
    "eduLevel": "",
    "categories": [],
    "features": [],
    "pageIndex": 1,
    "pageSize": 20,
    "sort": 11
}
function get_sign(data) {
   const sign = i("/youzy.dms.basiclib.api.college.query" , data);
   console.log(sign);
   return sign;
}

get_sign(data)