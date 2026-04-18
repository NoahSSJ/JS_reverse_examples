(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    0: function(t, e, n) {
        "use strict";
        n.d(e, "e", (function() {
            return r
        }
        )),
        n.d(e, "f", (function() {
            return a
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        )),
        n.d(e, "d", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "b", (function() {
            return s
        }
        )),
        n.d(e, "g", (function() {
            return u
        }
        )),
        n.d(e, "h", (function() {
            return l
        }
        )),
        n.d(e, "k", (function() {
            return f
        }
        )),
        n.d(e, "j", (function() {
            return p
        }
        )),
        n.d(e, "i", (function() {
            return d
        }
        ));
        n(202);
        var r = Object.freeze({
            GT_ALL: 0,
            GT_DOTA: 1,
            GT_LOL: 2,
            GT_CSGO: 3,
            GT_KOG: 4,
            GT_BASKETBALL: 5,
            GT_FOOTBALL: 6
        })
          , a = Object.freeze({
            WAIT: 0,
            START: 1,
            END: 2,
            DELAY: 3,
            DELETE: 4
        })
          , i = Object.freeze({
            WAIT: 1,
            START: 2,
            END: 3,
            DELAY: 4,
            DELETE: 5
        })
          , o = Object.freeze({
            WAIT: 0,
            FINISH: -1,
            FIRST_HALF: 1,
            MIDFIELD: 2,
            SECOND_HALF: 3,
            OVERTIME: 4,
            PENALTY: 5,
            DELAY: -10,
            PENDING: -11,
            CUT_HALF: -12,
            INTERRUPT: -13,
            POSTPONE: -14
        })
          , c = Object.freeze({
            WAIT: 0,
            FINISH: -1,
            PENDING: -2,
            CANCEL: -3,
            INTERRUPT: -4,
            CUT_HALF: -5,
            FIRST: 1,
            SECOND: 2,
            THIRD: 3,
            FOURTH: 4,
            OVERTIME: 5,
            HALF_TIME: 50
        })
          , s = Object.freeze({
            1: "一",
            2: "二",
            3: "三",
            4: "四",
            5: "五",
            6: "六"
        })
          , u = Object.freeze({
            TS_DEFAULT: 0,
            TS_BLUE: 1,
            TS_RED: 2
        })
          , l = {
            DATA_SOURCE: 0,
            STUDIO: 1,
            ANCHOR: 2
        }
          , f = {
            DEF: 0,
            RATE: 1,
            TIME: 2,
            FIXED: 3,
            INTEGER: 4,
            PERCENT: 5,
            INTEGER_PERCENT: 6
        }
          , p = Object.freeze({
            CREATED: 0,
            SCAN_SUCCESS: 1,
            LOGIN_SUCCESS: 2,
            SCAN_FAIL: 3,
            EXPIRE: 4
        })
          , d = Object.freeze({
            BLACK_THEME: 1,
            WHITE_THEME: 2
        })
    },
    120: function(t, e, n) {},
    121: function(t, e, n) {},
    122: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }
        )),
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return o
        }
        ));
        n(68);
        var r = n(66)
          , a = function(t) {
            if (!t)
                return !1;
            var e = {};
            return t.split(";").forEach((function(t) {
                var n = t.split("=");
                e[n[0].trim()] = n[1]
            }
            )),
            e
        }
          , i = function() {
            var t, e, n, a = null === (t = window) || void 0 === t || null === (e = t.localStorage) || void 0 === e || null === (n = e.getItem) || void 0 === n ? void 0 : n.call(e, "IM_UUID");
            return a || (a = Object(r.a)(16, 16),
            window.localStorage.setItem("IM_UUID", a)),
            a
        }
          , o = function() {
            var t = Object(r.a)(16, 16);
            window.localStorage.setItem("IM_UUID", t)
        }
    },
    123: function(t, e, n) {},
    124: function(t, e, n) {},
    125: function(t, e, n) {},
    126: function(t, e, n) {},
    127: function(t, e, n) {},
    128: function(t, e, n) {},
    129: function(t, e, n) {},
    130: function(t, e, n) {},
    131: function(t, e, n) {},
    132: function(t, e, n) {},
    133: function(t, e, n) {},
    134: function(t, e, n) {},
    135: function(t, e, n) {},
    136: function(t, e, n) {},
    137: function(t, e, n) {},
    138: function(t, e, n) {},
    139: function(t, e, n) {},
    140: function(t, e, n) {},
    141: function(t, e, n) {},
    142: function(t, e, n) {},
    143: function(t, e, n) {},
    146: function(t, e, n) {
        var r = n(391)
          , a = n(392);
        t.exports = function(t) {
            var e = r(t);
            return encodeURIComponent(a.stringify(e))
        }
    },
    148: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return a
        }
        )),
        n.d(e, "d", (function() {
            return i
        }
        )),
        n.d(e, "e", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return c
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "b", (function() {
            return u
        }
        ));
        var r = n(3);
        function a() {
            return r.a.post("/pay/rechargeList").then((function(t) {
                return t.data
            }
            ))
        }
        function i(t) {
            return r.a.$singlePost("payPreScan", "/pay/payPreScan", t).then((function(t) {
                return t.data
            }
            ))
        }
        function o(t) {
            return r.a.post("/pay/payScanStatus", {
                serialNumber: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function c() {
            return r.a.post("/pay/getGiftList").then((function(t) {
                return t.data
            }
            ))
        }
        function s(t) {
            return r.a.post("/pay/giftReward", t).then((function(t) {
                return t.data
            }
            ))
        }
        function u(t) {
            return r.a.post("/pay/getPlanNum", t).then((function(t) {
                return t.data
            }
            ))
        }
    },
    151: function(t, e, n) {
        "use strict";
        n(10),
        n(74),
        n(19),
        n(69),
        n(73),
        n(29),
        n(58),
        n(8),
        n(22),
        n(24);
        var r = n(4);
        function a(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return i(t, e)
                }(t))) {
                    var e = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a, o = !0, c = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return o = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    a = t
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw a
                    }
                }
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        var o = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout((function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }
            ), 1)
        }
          , c = window.cancelIdleCallback || function(t) {
            clearTimeout(t)
        }
          , s = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
            t.forEach((function(t) {
                var e = t.intersectionRatio
                  , n = t.target;
                e <= 0 || n.__prefetch()
            }
            ))
        }
        ));
        e.a = {
            name: "NuxtLink",
            extends: r.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                c(this.handleId),
                this.__observed && (s.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    s && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    s.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    }
                    )).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        s.unobserve(this.$el);
                        var t, e = a(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var n = t.value
                                  , r = n();
                                r instanceof Promise && r.catch((function() {}
                                )),
                                n.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    },
    154: function(t, e, n) {
        "use strict";
        n.d(e, "e", (function() {
            return o
        }
        )),
        n.d(e, "b", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return u
        }
        )),
        n.d(e, "c", (function() {
            return l
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        ));
        var r = n(57)
          , a = (n(68),
        n(22),
        n(24),
        n(17))
          , i = n(0)
          , o = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7
              , a = document.domain
              , i = window.location.host
              , o = i.includes(":") ? i : a.split(".").slice(-2).join(".")
              , c = "object" === Object(r.a)(e) ? JSON.stringify(e) : e
              , s = new Date;
            s.setDate(s.getDate() + n);
            var u = "".concat(t, "=").concat(escape(c)).concat(null == n ? "" : ";expires=".concat(s.toGMTString()), ";path=/;");
            document.cookie = o.includes(":") ? u : "".concat(u, ";domain=").concat(o)
        }
          , c = function(t) {
            return "".concat("https://www.fnscore.cn").concat(t)
        }
          , s = function(t) {
            var e = a.ROUTER_GAME_TYPE_STR_MAPPER[t];
            return c("/league-".concat(e, ".html"))
        }
          , u = function(t) {
            var e = t.gameType
              , n = t.leagueId
              , r = a.ROUTER_GAME_TYPE_STR_MAPPER[e];
            return c("/league/".concat(r, "-").concat(n, ".html"))
        }
          , l = function(t) {
            var e = t.gameType
              , n = t.matchId
              , r = t.leagueId
              , o = void 0 === r ? 0 : r
              , s = a.ROUTER_GAME_TYPE_STR_MAPPER[e]
              , u = "";
            return u = e === i.e.GT_FOOTBALL || e === i.e.GT_BASKETBALL ? "/score/".concat(s, "-").concat(n, ".html") : "/score/".concat(s, "-").concat(o, "-").concat(n, ".html"),
            c(u)
        }
          , f = function(t) {
            var e = a.ROUTER_GAME_TYPE_STR_MAPPER[t];
            return c("/score-".concat(e, ".html"))
        }
    },
    155: function(t, e, n) {
        "use strict";
        n.d(e, "d", (function() {
            return i
        }
        )),
        n.d(e, "c", (function() {
            return o
        }
        )),
        n.d(e, "b", (function() {
            return c
        }
        )),
        n.d(e, "a", (function() {
            return s
        }
        ));
        n(10),
        n(8),
        n(14),
        n(248),
        n(99),
        n(67),
        n(435);
        var r = n(4)
          , a = n(17);
        function i(t, e, n) {
            return a[e][t] || n
        }
        function o(t) {
            return Number.parseInt(t) ? s(new Date(Number(t)).getTime(), "yyyy-MM-dd") : t
        }
        function c(t) {
            return Number.parseInt(t) || (t = (new Date).getTime()),
            s(new Date(t).getTime(), "yyyy-MM-dd")
        }
        function s(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd HH:mm:ss";
            if (!Number.parseInt(t))
                return t;
            var n = Number(t);
            10 === t.length && (n *= 1e3);
            var r = new Date(n);
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length)));
            var a = {
                "M+": r.getMonth() + 1,
                "d+": r.getDate(),
                "H+": r.getHours(),
                "m+": r.getMinutes(),
                "s+": r.getSeconds(),
                "f+": r.getMilliseconds()
            };
            for (var i in a)
                if (new RegExp("(".concat(i, ")")).test(e)) {
                    var o = a[i] + "";
                    e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o : u(o))
                }
            return e
        }
        function u(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return ("00" + t).slice(-e)
        }
        var l = {
            toText: i,
            toMatchDate: function(t) {
                return Number.parseInt(t) ? s(new Date(Number(t)), "yyyy-MM-dd HH:mm") : t
            },
            toMatchEndTime: function(t) {
                var e = new Date(Number(t))
                  , n = (new Date).getTime() - e.getTime();
                return n < 864e5 ? s(t, "HH:mm") : n < 1728e5 ? "昨天" : n < 2592e5 ? "前天" : s(t, "MM-dd")
            },
            formatDate: s,
            formatDuration: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "′"
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "″";
                return t ? "".concat(("00" + Number.parseInt(t / 60)).slice(-2)).concat(e).concat(t % 60 < 10 ? "0" + Number.parseInt(t % 60) : Number.parseInt(t % 60 + "")).concat(n) : "00".concat(e, "00").concat(n)
            },
            formatMinDuration: function(t) {
                if (!t)
                    return 0;
                var e = t > 60 ? t : 60;
                return Number.parseInt(e / 60)
            },
            formatSecDuration: function(t) {
                if (!t)
                    return 0;
                var e = t > 60 ? t : 60;
                return "".concat(Number.parseInt(e / 60), ":").concat(Number.parseInt(e % 60))
            },
            articleTime: function(t) {
                var e = new Date(Number(t))
                  , n = Math.abs((new Date).getTime() - e.getTime());
                if (n < 864e5) {
                    var r = Math.abs(n / 36e5).toFixed(0);
                    return "".concat(r, "小时前")
                }
                if (n < 1728e5)
                    return "1天前";
                if (n <= 6048e5) {
                    var a = Math.abs(n / 864e5).toFixed(0);
                    return "".concat(a, "天前")
                }
                return e.getFullYear() === (new Date).getFullYear() ? s(t, "MM-dd") : s(t, "yyyy-MM-dd")
            },
            teamName: function(t) {
                return "待定" !== t ? t : "TDB"
            },
            getTeamName: function(t) {
                if (t) {
                    var e = t.teamName
                      , n = t.teamNameEn
                      , r = t.teamNameZh;
                    return e || n || r || "TDB"
                }
                return "TDB"
            },
            moneyText: function(t) {
                return t ? "".concat((Number(t) / 1e3).toFixed(2), "k") : "0k"
            }
        };
        Object.keys(l).forEach((function(t) {
            r.default.filter(t, l[t])
        }
        ))
    },
    159: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return a
        }
        )),
        n.d(e, "e", (function() {
            return i
        }
        )),
        n.d(e, "h", (function() {
            return o
        }
        )),
        n.d(e, "g", (function() {
            return c
        }
        )),
        n.d(e, "d", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return u
        }
        )),
        n.d(e, "b", (function() {
            return l
        }
        )),
        n.d(e, "c", (function() {
            return f
        }
        ));
        var r = n(3);
        function a(t) {
            return r.a.$singlePost("commonGetMatchList", "/common/getMatchLives", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function i() {
            return r.a.$singlePost("matchGetListEnd", "/common/getMatchListEnd").then((function(t) {
                return t.data
            }
            ))
        }
        function o(t) {
            return r.a.$singlePost("matchGetListWait", "/common/getMatchListWait", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function c(t) {
            return r.a.$singlePost("matchGetListLiveBattle", "/common/getMatchLiveBattle", {
                battles: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function s(t) {
            return r.a.post("/common/linkList", {
                query: t
            }).then((function(t) {
                return t && t.data || {}
            }
            ))
        }
        function u() {
            return r.a.post("/common/getConfig").then((function(t) {
                return t.data
            }
            ))
        }
        function l() {
            return r.a.post("/common/getNoticeList").then((function(t) {
                return t.data
            }
            ))
        }
        function f() {
            return r.a.$getApi("configPopTime", "config/login/pop/time").then((function(t) {
                return t.data
            }
            ))
        }
    },
    161: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "a", (function() {
            return o
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        ));
        n(10),
        n(8),
        n(14),
        n(22),
        n(24);
        var r = n(4)
          , a = n(17)
          , i = "https://qn.tianqifengyun.cn"
          , o = "/pcweb/"
          , c = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = t.includes("http")
              , r = n ? t : "".concat(i).concat(t)
              , a = e ? "?imageView2/2/w/".concat(e, "/h/").concat(e) : "";
            return "".concat(r).concat(a)
        }
          , s = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t ? c("".concat(o).concat(t), e) : ""
        }
          , u = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return c(t, e)
        }
          , l = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = t.includes("http")
              , a = r ? t : "".concat(i).concat(t)
              , o = e ? "/w/".concat(e) : ""
              , c = e ? "/h/".concat(n) : ""
              , s = o || c ? "?imageView2/2" : "";
            return "".concat(a).concat(s).concat(o).concat(c)
        }
          , f = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , r = n ? a.GAME_TYPE_DEF_ICON[t] : a.GAME_TYPE_ICON[t];
            return s(r, e)
        }
          , p = {
            PC_HOST: "https://www.fnscore.cn",
            QINIU_URL: i,
            BASE_PATH: o,
            qiniuSizeImg: c,
            httpImg: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (t) {
                    var n = null == t ? void 0 : t.includes("http")
                      , r = n ? t : "".concat(i).concat(o).concat(t);
                    return l(r, e, e)
                }
                return t
            },
            iconImg: s,
            getGameTypeIcon: f,
            newGameTypeIcon: function(t) {
                return s(a.NEW_GAME_TYPE_ICON[t])
            },
            iconImgError: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default_dota_icon.png"
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                t.target.src = u(e, n)
            },
            gameIconError: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                t.target.src = f(e, n, r)
            },
            gameIconErrorShadow: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , n = a.GAME_TYPE_DEF_SHADOW_ICON[e];
                t.target.src = s(n)
            }
        };
        r.default.use({
            install: function(t) {
                Object.keys(p).map((function(e) {
                    t.prototype[e] = p[e]
                }
                ))
            }
        })
    },
    17: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "GAME_TYPE", (function() {
            return T
        }
        )),
        n.d(e, "NEW_GAME_TYPE_ICON", (function() {
            return O
        }
        )),
        n.d(e, "GAME_TYPE_DEF_ICON", (function() {
            return w
        }
        )),
        n.d(e, "GAME_TYPE_DEF_SHADOW_ICON", (function() {
            return E
        }
        )),
        n.d(e, "GAME_TYPE_ICON", (function() {
            return S
        }
        )),
        n.d(e, "GAME_TYPE_EN", (function() {
            return C
        }
        )),
        n.d(e, "MATCH_STATUS_TYPE_TEXT", (function() {
            return L
        }
        )),
        n.d(e, "FOOTBALL_MATCH_STATUS_TYPE_TEXT", (function() {
            return j
        }
        )),
        n.d(e, "BASKETBALL_MATCH_STATUS_TYPE_TEXT", (function() {
            return A
        }
        )),
        n.d(e, "MATCH_STATUS_TYPE", (function() {
            return P
        }
        )),
        n.d(e, "MATCH_GAME_TYPE_COLOR", (function() {
            return x
        }
        )),
        n.d(e, "ROUTER_GAME_TYPE_MAPPER", (function() {
            return I
        }
        )),
        n.d(e, "ROUTER_GAME_TYPE_STR_MAPPER", (function() {
            return R
        }
        )),
        n.d(e, "ROUTER_GAME_TYPE_MAPPER_CONFIG", (function() {
            return k
        }
        )),
        n.d(e, "getGameExpandName", (function() {
            return D
        }
        )),
        n.d(e, "mobGameEventIcons", (function() {
            return N
        }
        )),
        n.d(e, "liveGameEventIcons", (function() {
            return B
        }
        )),
        n.d(e, "gameTeamSideName", (function() {
            return G
        }
        )),
        n.d(e, "FOOTBALL_EVENT_ICON", (function() {
            return M
        }
        )),
        n.d(e, "FOOTBALL_SHOW_EVENT_ICON", (function() {
            return $
        }
        )),
        n.d(e, "FOOTBALL_RATING_COLOR_LIST", (function() {
            return U
        }
        ));
        var r, a, i, o, c, s, u, l, f, p, d, h, m, g, v, _, b = n(1), y = (n(202),
        n(0)), T = Object.freeze((r = {},
        Object(b.a)(r, y.e.GT_ALL, "全部游戏"),
        Object(b.a)(r, y.e.GT_DOTA, "DOTA2"),
        Object(b.a)(r, y.e.GT_CSGO, "CSGO"),
        Object(b.a)(r, y.e.GT_LOL, "英雄联盟"),
        Object(b.a)(r, y.e.GT_KOG, "王者荣耀"),
        Object(b.a)(r, y.e.GT_BASKETBALL, "篮球"),
        Object(b.a)(r, y.e.GT_FOOTBALL, "足球"),
        r)), O = Object.freeze((a = {},
        Object(b.a)(a, y.e.GT_LOL, "icon_game_type_new_lol.png"),
        Object(b.a)(a, y.e.GT_DOTA, "icon_game_type_new_dota.png"),
        Object(b.a)(a, y.e.GT_CSGO, "icon_game_type_new_csgo.png"),
        Object(b.a)(a, y.e.GT_KOG, "icon_game_type_new_kog.png"),
        Object(b.a)(a, y.e.GT_BASKETBALL, "icon_game_type_new_bb.png"),
        Object(b.a)(a, y.e.GT_FOOTBALL, "icon_game_type_new_fb.png"),
        a)), w = Object.freeze((i = {},
        Object(b.a)(i, y.e.GT_LOL, "icon_game_lol_def.png"),
        Object(b.a)(i, y.e.GT_CSGO, "icom_game_csgo_def.png"),
        Object(b.a)(i, y.e.GT_DOTA, "icon_game_dota_def.png"),
        Object(b.a)(i, y.e.GT_KOG, "icon_game_wz_def.png"),
        Object(b.a)(i, y.e.GT_BASKETBALL, "icon_game_bb_def_002.png"),
        Object(b.a)(i, y.e.GT_FOOTBALL, "icon_game_fb_def_002.png"),
        i)), E = Object.freeze((o = {},
        Object(b.a)(o, y.e.GT_LOL, "icon_lol_shadow.png"),
        Object(b.a)(o, y.e.GT_CSGO, "icom_game_csgo_def.png"),
        Object(b.a)(o, y.e.GT_DOTA, "icon_dota_shadow-002.png"),
        Object(b.a)(o, y.e.GT_KOG, "icon_kog_shadow.png"),
        o)), S = Object.freeze((c = {},
        Object(b.a)(c, y.e.GT_LOL, "lol_sel_icon.png"),
        Object(b.a)(c, y.e.GT_CSGO, "csgo_sel_icon.png"),
        Object(b.a)(c, y.e.GT_DOTA, "dota_sel_icon.png"),
        Object(b.a)(c, y.e.GT_KOG, "kog_sel_icon.png"),
        Object(b.a)(c, y.e.GT_BASKETBALL, "icon_game_bb_def.png"),
        Object(b.a)(c, y.e.GT_FOOTBALL, "icon_game_fb_def.png"),
        c)), C = (s = {},
        Object(b.a)(s, y.e.GT_ALL, "Default"),
        Object(b.a)(s, y.e.GT_LOL, "LOL"),
        Object(b.a)(s, y.e.GT_DOTA, "DOTA"),
        Object(b.a)(s, y.e.GT_CSGO, "CSGO"),
        Object(b.a)(s, y.e.GT_KOG, "KOG"),
        Object(b.a)(s, y.e.GT_BASKETBALL, "篮球"),
        Object(b.a)(s, y.e.GT_FOOTBALL, "足球"),
        s), L = Object.freeze((u = {},
        Object(b.a)(u, y.e.GT_ALL, "未开始"),
        Object(b.a)(u, 1, "进行中"),
        Object(b.a)(u, 2, "已结束"),
        Object(b.a)(u, 3, "延迟"),
        Object(b.a)(u, 4, "已取消"),
        u)), j = Object.freeze((l = {},
        Object(b.a)(l, y.d.WAIT, "未开始"),
        Object(b.a)(l, y.d.FIRST_HALF, "上半场"),
        Object(b.a)(l, y.d.MIDFIELD, "中场"),
        Object(b.a)(l, y.d.SECOND_HALF, "下半场"),
        Object(b.a)(l, y.d.FINISH, "完场"),
        Object(b.a)(l, y.d.OVERTIME, "加时"),
        Object(b.a)(l, y.d.PENALTY, "点球"),
        Object(b.a)(l, y.d.DELAY, "延期"),
        l)), A = Object.freeze((f = {},
        Object(b.a)(f, y.c.WAIT, "未开始"),
        Object(b.a)(f, y.c.FINISH, "完场"),
        Object(b.a)(f, y.c.FIRST, "第一节"),
        Object(b.a)(f, y.c.SECOND, "第二节"),
        Object(b.a)(f, y.c.THIRD, "第三节"),
        Object(b.a)(f, y.c.FOURTH, "第四节"),
        Object(b.a)(f, y.c.OVERTIME, "加时赛"),
        Object(b.a)(f, y.c.HALF_TIME, "中场"),
        Object(b.a)(f, y.c.PENDING, "待定"),
        Object(b.a)(f, y.c.CANCEL, "取消"),
        f)), P = Object.freeze({
            WAIT: 0,
            START: 1,
            END: 2,
            MS_DELAY: 3,
            DELETE: 4
        }), x = Object.freeze((v = {},
        Object(b.a)(v, y.e.GT_LOL, (p = {},
        Object(b.a)(p, y.g.TS_RED, "#E67381"),
        Object(b.a)(p, y.g.TS_BLUE, "#4FAAEB"),
        p)),
        Object(b.a)(v, y.e.GT_DOTA, (d = {},
        Object(b.a)(d, y.g.TS_RED, "#E67381"),
        Object(b.a)(d, y.g.TS_BLUE, "#59B685"),
        d)),
        Object(b.a)(v, y.e.GT_KOG, (h = {},
        Object(b.a)(h, y.g.TS_RED, "#E67381"),
        Object(b.a)(h, y.g.TS_BLUE, "#4FAAEB"),
        h)),
        Object(b.a)(v, y.e.GT_BASKETBALL, (m = {},
        Object(b.a)(m, y.g.TS_BLUE, "#E42125"),
        Object(b.a)(m, y.g.TS_RED, "#00BDFF"),
        Object(b.a)(m, y.g.TS_DEFAULT, "#CCCCCC"),
        m)),
        Object(b.a)(v, y.e.GT_FOOTBALL, (g = {},
        Object(b.a)(g, y.g.TS_BLUE, "#E42125"),
        Object(b.a)(g, y.g.TS_RED, "#00BDFF"),
        Object(b.a)(g, y.g.TS_DEFAULT, "#CCCCCC"),
        g)),
        v)), I = Object.freeze({
            kog: y.e.GT_KOG,
            dota2: y.e.GT_DOTA,
            csgo: y.e.GT_CSGO,
            lol: y.e.GT_LOL,
            football: y.e.GT_FOOTBALL,
            basketball: y.e.GT_BASKETBALL
        }), R = Object.freeze((_ = {},
        Object(b.a)(_, y.e.GT_KOG, "kog"),
        Object(b.a)(_, y.e.GT_DOTA, "dota2"),
        Object(b.a)(_, y.e.GT_CSGO, "csgo"),
        Object(b.a)(_, y.e.GT_LOL, "lol"),
        Object(b.a)(_, y.e.GT_BASKETBALL, "basketball"),
        Object(b.a)(_, y.e.GT_FOOTBALL, "football"),
        _)), k = Object.freeze({
            csgo: {
                tag: "CSGO",
                type: y.e.GT_CSGO
            },
            dota2: {
                tag: "DOTA2",
                type: y.e.GT_DOTA
            },
            lol: {
                tag: "英雄联盟",
                type: y.e.GT_LOL
            },
            kog: {
                tag: "王者荣耀",
                type: y.e.GT_KOG
            },
            basketball: {
                tag: "篮球",
                type: y.e.GT_BASKETBALL
            },
            football: {
                tag: "足球",
                type: y.e.GT_FOOTBALL
            }
        });
        function D(t) {
            var e;
            return (e = {},
            Object(b.a)(e, y.e.GT_KOG, "kogExpand"),
            Object(b.a)(e, y.e.GT_LOL, "lolExpand"),
            Object(b.a)(e, y.e.GT_CSGO, "csgoExpand"),
            Object(b.a)(e, y.e.GT_DOTA, "dotaExpand"),
            e)[t]
        }
        function N(t) {
            var e;
            return (e = {},
            Object(b.a)(e, y.e.GT_LOL, [{
                key: "firstBlood",
                icon: "first-bool-icon-001.png"
            }, {
                key: "fiveKills",
                icon: "five-kill-icon-001.png"
            }, {
                key: "tenKills",
                icon: "ten-kill-icon-001.png"
            }, {
                key: "firstBigDragon",
                icon: "big-dragon-icon-0010.png"
            }, {
                key: "firstSmallDragon",
                icon: "small-dragon-icon-0010.png"
            }, {
                key: "firstTower",
                icon: "first-tower-icon-001.png"
            }]),
            Object(b.a)(e, y.e.GT_KOG, [{
                key: "firstBlood",
                icon: "first-bool-icon-001.png"
            }, {
                key: "fiveKills",
                icon: "five-kill-icon-001.png"
            }, {
                key: "tenKills",
                icon: "ten-kill-icon-001.png"
            }, {
                key: "firstTower",
                icon: "first-tower-icon-001.png"
            }, {
                key: "firstTyrants",
                icon: "small-dragon-icon-0010.png"
            }, {
                key: "firstDominates",
                icon: "big-dragon-icon-0010.png"
            }]),
            Object(b.a)(e, y.e.GT_DOTA, [{
                key: "firstBlood",
                icon: "first-bool-icon-001.png"
            }, {
                key: "fiveKills",
                icon: "five-kill-icon-001.png"
            }, {
                key: "tenKills",
                icon: "ten-kill-icon-001.png"
            }, {
                key: "firstRoushan",
                icon: "big-dragon-icon-0010.png"
            }, {
                key: "firstTower",
                icon: "first-tower-icon-001.png"
            }]),
            Object(b.a)(e, y.e.GT_CSGO, [{
                key: "winFirstRound",
                icon: "w_csgo_gun1.png"
            }, {
                key: "firstWinFiveRounds",
                icon: "csgo_wusheng.png"
            }, {
                key: "winSixteenRound",
                icon: "w_csgo_gun16.png"
            }]),
            e)[t]
        }
        function B(t) {
            var e;
            return (e = {},
            Object(b.a)(e, y.e.GT_LOL, [{
                key: "firstBlood",
                icon: "yixue_icon_001.png"
            }, {
                key: "tenKills",
                icon: "shisha_icon_001.png"
            }]),
            Object(b.a)(e, y.e.GT_KOG, [{
                key: "firstBlood",
                icon: "yixue_icon_001.png"
            }, {
                key: "tenKills",
                icon: "shisha_icon_001.png"
            }]),
            Object(b.a)(e, y.e.GT_DOTA, [{
                key: "firstBlood",
                icon: "yixue_icon_001.png"
            }, {
                key: "tenKills",
                icon: "shisha_icon_001.png"
            }]),
            Object(b.a)(e, y.e.GT_CSGO, [{
                key: "winFirstRound",
                icon: "w_csgo_gun1.png"
            }, {
                key: "firstWinFiveRounds",
                icon: "csgo_wusheng.png"
            }, {
                key: "winSixteenRound",
                icon: "w_csgo_gun16.png"
            }]),
            e)[t]
        }
        function G() {
            var t, e, n, r, a, i, o, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "--", l = (o = {},
            Object(b.a)(o, y.e.GT_LOL, (t = {},
            Object(b.a)(t, y.g.TS_BLUE, "蓝方"),
            Object(b.a)(t, y.g.TS_RED, "红方"),
            t)),
            Object(b.a)(o, y.e.GT_DOTA, (e = {},
            Object(b.a)(e, y.g.TS_BLUE, "天辉"),
            Object(b.a)(e, y.g.TS_RED, "夜魇"),
            e)),
            Object(b.a)(o, y.e.GT_KOG, (n = {},
            Object(b.a)(n, y.g.TS_BLUE, "蓝方"),
            Object(b.a)(n, y.g.TS_RED, "红方"),
            n)),
            Object(b.a)(o, y.e.GT_CSGO, (r = {},
            Object(b.a)(r, y.g.TS_BLUE, "T"),
            Object(b.a)(r, y.g.TS_RED, "CT"),
            r)),
            Object(b.a)(o, y.e.GT_FOOTBALL, (a = {},
            Object(b.a)(a, y.g.TS_BLUE, "主队"),
            Object(b.a)(a, y.g.TS_RED, "客队"),
            a)),
            Object(b.a)(o, y.e.GT_BASKETBALL, (i = {},
            Object(b.a)(i, y.g.TS_BLUE, "主队"),
            Object(b.a)(i, y.g.TS_RED, "客队"),
            i)),
            o);
            if (s) {
                var f = l[c][s];
                return f || u
            }
            return u
        }
        var M = Object.freeze([{
            text: "进球",
            value: "football-event-icon-001.png",
            type: 1
        }, {
            text: "点球",
            value: "football-event-icon-006.png",
            type: 2
        }, {
            text: "点球未进",
            value: "football-event-icon-007.png",
            type: 3
        }, {
            text: "乌龙球",
            value: "football-event-icon-008.png",
            type: 4
        }, {
            text: "助攻",
            value: "football-event-icon-009.png",
            type: 5
        }, {
            text: "黄牌",
            value: "football-event-icon-002.png",
            type: 6
        }, {
            text: "红牌",
            value: "football-event-icon-005.png",
            type: 7
        }, {
            text: "两黄一红",
            value: "football-event-icon-011.png",
            type: 8
        }, {
            text: "换上",
            value: "football-event-icon-004.png",
            type: 9
        }, {
            text: "换下",
            value: "football-event-icon-003.png",
            type: 10
        }, {
            text: "全场最佳",
            value: "football-event-icon-013.png",
            type: 11
        }, {
            text: "VAR",
            value: "football-event-icon-014.png",
            type: 12
        }, {
            text: "队长",
            value: "football-event-icon-010.png",
            type: 13
        }, {
            text: "换人",
            value: "football-event-icon-012.png",
            type: 14
        }])
          , $ = Object.freeze([{
            text: "进球",
            value: "football-event-icon-001.png",
            type: 1
        }, {
            text: "点球",
            value: "football-event-icon-006.png",
            type: 2
        }, {
            text: "点球未进",
            value: "football-event-icon-007.png",
            type: 3
        }, {
            text: "乌龙球",
            value: "football-event-icon-008.png",
            type: 4
        }, {
            text: "助攻",
            value: "football-event-icon-009.png",
            type: 5
        }, {
            text: "黄牌",
            value: "football-event-icon-002.png",
            type: 6
        }, {
            text: "红牌",
            value: "football-event-icon-005.png",
            type: 7
        }, {
            text: "两黄一红",
            value: "football-event-icon-011.png",
            type: 8
        }, {
            text: "换人",
            value: "football-event-icon-012.png",
            type: 14
        }, {
            text: "全场最佳",
            value: "football-event-icon-013.png",
            type: 11
        }, {
            text: "VAR",
            value: "football-event-icon-014.png",
            type: 12
        }, {
            text: "队长",
            value: "football-event-icon-010.png",
            type: 13
        }])
          , U = ["#9A9E62", "#B1B936", "#DBB200", "#D8AF5B", "#F9A905", "#F77417", "#F61906", "#C40038", "#B30083", "#A50000"]
    },
    188: function(t, e, n) {
        "use strict";
        var r = {};
        r.axiosMiddle = n(358),
        r.axiosMiddle = r.axiosMiddle.default || r.axiosMiddle,
        r.redirect = n(377),
        r.redirect = r.redirect.default || r.redirect,
        e.a = r
    },
    193: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return s
        }
        ));
        n(22),
        n(24);
        var r = n(0)
          , a = n(17)
          , i = function(t) {
            return [r.e.GT_BASKETBALL, r.e.GT_FOOTBALL].includes(t)
        }
          , o = function(t, e) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!n)
                return r.a.START === e;
            if (r.e.GT_BASKETBALL === t) {
                var a = [r.c.FIRST, r.c.SECOND, r.c.THIRD, r.c.FOURTH, r.c.OVERTIME, r.c.HALF_TIME];
                return a.includes(e)
            }
            if (r.e.GT_FOOTBALL === t) {
                var i = [r.d.FIRST_HALF, r.d.MIDFIELD, r.d.SECOND_HALF, r.d.OVERTIME, r.d.PENALTY];
                return i.includes(e)
            }
            return r.f.START === e
        }
          , c = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.e.GT_LOL;
            return a.MATCH_GAME_TYPE_COLOR[t]
        }
          , s = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.e.GT_LOL
              , e = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#8B93A6"
              , a = c(t);
            return a && a[e] ? a[e] : n
        }
    },
    201: function(t, e, n) {
        "use strict";
        n(67);
        var r = {
            name: "LineProgress",
            props: {
                totalSize: {
                    type: Number,
                    default: 0
                },
                linkColor: {
                    type: String,
                    default: "#FFBD34"
                },
                bgColor: {
                    type: String,
                    default: "#E6E6E6"
                },
                radiusSize: {
                    type: Number,
                    default: 2
                }
            }
        }
          , a = (n(440),
        n(7))
          , i = Object(a.a)(r, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "link-panel",
                style: "background-color: " + this.bgColor + "; border-radius: " + this.radiusSize + "px;"
            }, [e("p", {
                staticClass: "link-bg",
                style: "width: " + this.totalSize + "%; background-color: " + this.linkColor
            })])
        }
        ), [], !1, null, "3c0f1084", null);
        e.a = i.exports
    },
    209: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return a
        }
        )),
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "d", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return c
        }
        ));
        var r = n(3);
        function a(t) {
            return r.a.post("/score/getLiveBetList", {
                battles: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function i(t) {
            var e = {
                gameType: t
            };
            return r.a.get("/score/getEndBetList", {
                params: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function o(t) {
            var e = {
                gameType: t
            };
            return r.a.get("/score/getWaitBetList", {
                params: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function c(t, e) {
            return t.token = e,
            r.a.get("/score/getListByDate", {
                params: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
    },
    217: function(t, e, n) {
        "use strict";
        var r = {
            name: "EmptyData",
            props: {
                title: {
                    type: String,
                    default: "当前暂无赛事安排哦 !"
                },
                desc: {
                    type: String,
                    default: "你可以去看看其他游戏赛事哦"
                },
                descColor: {
                    type: String,
                    default: "#666"
                },
                errIcon: {
                    type: String,
                    default: "error_001.png"
                },
                icon: {
                    type: String
                },
                isWhiteTheme: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , a = (n(442),
        n(7))
          , i = Object(a.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: ["empty-data-wrapper", {
                    "white-theme": t.isWhiteTheme
                }]
            }, [t.icon ? n("img", {
                attrs: {
                    src: t.icon,
                    alt: "empty-icon"
                }
            }) : n("img", {
                attrs: {
                    src: t.iconImg(t.errIcon),
                    alt: "empty-icon"
                }
            }), n("p", [t._v(t._s(t.title))]), n("p", {
                staticClass: "desc",
                style: "color: " + t.descColor + ";"
            }, [t._v(t._s(t.desc))])])
        }
        ), [], !1, null, "04d043df", null);
        e.a = i.exports
    },
    253: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        ));
        var r = n(44)
          , a = n.n(r)
          , i = function(t) {
            return a.a.get(t)
        }
          , o = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7;
            a.a.set(t, e, {
                expires: n
            })
        }
    },
    296: function(t, e, n) {
        "use strict";
        n(8),
        n(28);
        var r = n(6)
          , a = n(4)
          , i = n(5)
          , o = window.__NUXT__;
        function c() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function s() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0,
                this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
                var e = o.fetch[this._fetchKey];
                if (e && e._error)
                    this.$fetchState.error = e._error;
                else
                    for (var n in e)
                        a.default.set(this.$data, n, e[n])
            }
        }
        function u() {
            return l.apply(this, arguments)
        }
        function l() {
            return (l = Object(r.a)(regeneratorRuntime.mark((function t() {
                var e, n, r, a = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            e = null,
                            n = Date.now(),
                            t.prev = 6,
                            t.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            t.next = 14;
                            break;
                        case 11:
                            t.prev = 11,
                            t.t0 = t.catch(6),
                            e = Object(i.o)(t.t0);
                        case 14:
                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                t.next = 18;
                                break
                            }
                            return t.next = 18,
                            new Promise((function(t) {
                                return setTimeout(t, r)
                            }
                            ));
                        case 18:
                            this.$fetchState.error = e,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return a.$nuxt.nbFetching--
                            }
                            ));
                        case 22:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(i.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                a.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = u.bind(this),
                Object(i.a)(this, "created", s),
                Object(i.a)(this, "beforeMount", c))
            }
        }
    },
    3: function(t, e, n) {
        "use strict";
        n(8),
        n(29);
        var r = n(39)
          , a = n.n(r)
          , i = n(146)
          , o = n.n(i)
          , c = n(147)
          , s = n.n(c)
          , u = n(44)
          , l = n.n(u)
          , f = n(49)
          , p = ["KHVh", "eWluZ1", "8zZWNy", "ZXRf", "YXBB"].join("")
          , d = {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            baseURL: "/api",
            timeout: 3e4,
            retries: 2,
            retryDelay: 2e3
        };
        var h = a.a.create(d);
        h.isCancel = a.a.isCancel;
        var m = h.CancelToken = a.a.CancelToken
          , g = []
          , v = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            g.forEach((function(n, r) {
                n.n !== t && n.n !== e.name || (n.f(),
                g.splice(r, 1))
            }
            ))
        };
        h.$cancelRequest = v,
        h.$singlePost = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return v(t),
            r.name = t,
            h.post(e, n, r)
        }
        ,
        h.$postApi = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return v(t),
            r.name = t,
            r.baseURL = "/apiJson/",
            h.post("".concat(e), JSON.stringify(n), r)
        }
        ,
        h.$getApi = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            v(t),
            r.name = t,
            r.baseURL = "/apiJson/";
            var a = n ? s.a.stringify(n) : ""
              , i = (new Date).getTime()
              , o = a ? "".concat(e, "?").concat(a, "&time=").concat(i) : "".concat(e, "?time=").concat(i);
            return h.get(o, r)
        }
        ,
        h.interceptors.request.use((function(t) {
            var e = (new Date).getTime()
              , n = "timestamp=".concat(e, "&secret=").concat(p)
              , r = o()(n);
            if (t.CancelToken = new m((function(e) {
                t.name && g.push({
                    n: t.name,
                    u: "".concat(t.name, "&").concat(t.method),
                    f: e
                })
            }
            )),
            "/apiJson/" !== t.baseURL)
                t.params = Object.assign({}, t.params, {
                    timestamp: e,
                    sign: r
                });
            else {
                var a = function() {
                    var t = l.a.get("jwt")
                      , e = t ? Object(f.a)(t) : "";
                    return e && e.accessToken
                }();
                a && (t.headers.Authorization = "Bearer ".concat(a)),
                t.headers["Content-Type"] = "application/json"
            }
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        h.interceptors.response.use((function(t) {
            return v("", t.config),
            t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        e.a = h
    },
    340: function(t, e, n) {
        t.exports = n(341)
    },
    341: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n(74),
            n(19),
            n(73),
            n(58),
            n(69);
            var e = n(57)
              , r = (n(28),
            n(192),
            n(6))
              , a = (n(22),
            n(24),
            n(10),
            n(8),
            n(14),
            n(29),
            n(235),
            n(350),
            n(355),
            n(357),
            n(4))
              , i = n(287)
              , o = n(188)
              , c = n(5)
              , s = n(45)
              , u = n(296)
              , l = n(151);
            function f(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                        if (!t)
                            return;
                        if ("string" == typeof t)
                            return p(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return p(t, e)
                    }(t))) {
                        var e = 0
                          , n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return e >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[e++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, a, i = !0, o = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done,
                        t
                    },
                    e: function(t) {
                        o = !0,
                        a = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                }
            }
            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            a.default.__nuxt__fetch__mixin__ || (a.default.mixin(u.a),
            a.default.__nuxt__fetch__mixin__ = !0),
            a.default.component(l.a.name, l.a),
            a.default.component("NLink", l.a),
            t.fetch || (t.fetch = i.a);
            var d, h, m = [], g = window.__NUXT__ || {};
            Object.assign(a.default.config, {
                silent: !0,
                performance: !1
            });
            var v = a.default.config.errorHandler || console.error;
            function _(t, e, n) {
                for (var r = function(t) {
                    var r = function(t, e) {
                        if (!t || !t.options || !t.options[e])
                            return {};
                        var n = t.options[e];
                        if ("function" == typeof n) {
                            for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
                                a[i - 2] = arguments[i];
                            return n.apply(void 0, a)
                        }
                        return n
                    }(t, "transition", e, n) || {};
                    return "string" == typeof r ? {
                        name: r
                    } : r
                }, a = n ? Object(c.g)(n) : [], i = Math.max(t.length, a.length), o = [], s = function(e) {
                    var n = Object.assign({}, r(t[e]))
                      , i = Object.assign({}, r(a[e]));
                    Object.keys(n).filter((function(t) {
                        return void 0 !== n[t] && !t.toLowerCase().includes("leave")
                    }
                    )).forEach((function(t) {
                        i[t] = n[t]
                    }
                    )),
                    o.push(i)
                }, u = 0; u < i; u++)
                    s(u);
                return o
            }
            function b(t, e, n) {
                return y.apply(this, arguments)
            }
            function y() {
                return (y = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                    var a, i, o, s, u = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._routeChanged = Boolean(d.nuxt.err) || n.name !== e.name,
                                this._paramChanged = !this._routeChanged && n.path !== e.path,
                                this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath,
                                this._diffQuery = this._queryChanged ? Object(c.i)(e.query, n.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                t.prev = 5,
                                !this._queryChanged) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 9,
                                Object(c.q)(e, (function(t, e) {
                                    return {
                                        Component: t,
                                        instance: e
                                    }
                                }
                                ));
                            case 9:
                                a = t.sent,
                                a.some((function(t) {
                                    var r = t.Component
                                      , a = t.instance
                                      , i = r.options.watchQuery;
                                    return !0 === i || (Array.isArray(i) ? i.some((function(t) {
                                        return u._diffQuery[t]
                                    }
                                    )) : "function" == typeof i && i.apply(a, [e.query, n.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                r(),
                                t.next = 26;
                                break;
                            case 15:
                                if (t.prev = 15,
                                t.t0 = t.catch(5),
                                i = t.t0 || {},
                                o = i.statusCode || i.status || i.response && i.response.status || 500,
                                s = i.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(s)) {
                                    t.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                t.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: o,
                                    message: s
                                }),
                                this.$nuxt.$emit("routeChanged", e, n, i),
                                r();
                            case 26:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function T(t, e) {
                return g.serverRendered && e && Object(c.b)(t, e),
                t._Ctor = t,
                t
            }
            function O(t) {
                var e = Object(c.f)(t.options.base, t.options.mode);
                return Object(c.d)(t.match(e), function() {
                    var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, a, i) {
                        var o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof e || e.options) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3,
                                    e();
                                case 3:
                                    e = t.sent;
                                case 4:
                                    return o = T(Object(c.r)(e), g.data ? g.data[i] : null),
                                    r.components[a] = o,
                                    t.abrupt("return", o);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n, r, a, i) {
                        return t.apply(this, arguments)
                    }
                }())
            }
            function w(t, e, n) {
                var r = this
                  , a = []
                  , i = !1;
                if (void 0 !== n && (a = [],
                (n = Object(c.r)(n)).options.middleware && (a = a.concat(n.options.middleware)),
                t.forEach((function(t) {
                    t.options.middleware && (a = a.concat(t.options.middleware))
                }
                ))),
                a = a.map((function(t) {
                    return "function" == typeof t ? t : ("function" != typeof o.a[t] && (i = !0,
                    r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                    })),
                    o.a[t])
                }
                )),
                !i)
                    return Object(c.n)(a, e)
            }
            function E(t, e, n) {
                return S.apply(this, arguments)
            }
            function S() {
                return (S = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                    var a, i, o, u, l, p, h, g, v, b, y, T, O, E, S, C = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", r());
                            case 2:
                                return e === n ? m = [] : (a = [],
                                m = Object(c.g)(n, a).map((function(t, e) {
                                    return Object(c.c)(n.matched[a[e]].path)(n.params)
                                }
                                ))),
                                i = !1,
                                o = function(t) {
                                    n.path === t.path && C.$loading.finish && C.$loading.finish(),
                                    n.path !== t.path && C.$loading.pause && C.$loading.pause(),
                                    i || (i = !0,
                                    r(t))
                                }
                                ,
                                t.next = 7,
                                Object(c.s)(d, {
                                    route: e,
                                    from: n,
                                    next: o.bind(this)
                                });
                            case 7:
                                if (this._dateLastError = d.nuxt.dateErr,
                                this._hadError = Boolean(d.nuxt.err),
                                u = [],
                                (l = Object(c.g)(e, u)).length) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 14,
                                w.call(this, l, d.context);
                            case 14:
                                if (!i) {
                                    t.next = 16;
                                    break
                                }
                                return t.abrupt("return");
                            case 16:
                                return p = (s.a.options || s.a).layout,
                                t.next = 19,
                                this.loadLayout("function" == typeof p ? p.call(s.a, d.context) : p);
                            case 19:
                                return h = t.sent,
                                t.next = 22,
                                w.call(this, l, d.context, h);
                            case 22:
                                if (!i) {
                                    t.next = 24;
                                    break
                                }
                                return t.abrupt("return");
                            case 24:
                                return d.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", r());
                            case 26:
                                return l.forEach((function(t) {
                                    t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData,
                                    t.options.fetch = t._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(_(l, e, n)),
                                t.prev = 28,
                                t.next = 31,
                                w.call(this, l, d.context);
                            case 31:
                                if (!i) {
                                    t.next = 33;
                                    break
                                }
                                return t.abrupt("return");
                            case 33:
                                if (!d.context._errored) {
                                    t.next = 35;
                                    break
                                }
                                return t.abrupt("return", r());
                            case 35:
                                return "function" == typeof (g = l[0].options.layout) && (g = g(d.context)),
                                t.next = 39,
                                this.loadLayout(g);
                            case 39:
                                return g = t.sent,
                                t.next = 42,
                                w.call(this, l, d.context, g);
                            case 42:
                                if (!i) {
                                    t.next = 44;
                                    break
                                }
                                return t.abrupt("return");
                            case 44:
                                if (!d.context._errored) {
                                    t.next = 46;
                                    break
                                }
                                return t.abrupt("return", r());
                            case 46:
                                v = !0,
                                t.prev = 47,
                                b = f(l),
                                t.prev = 49,
                                b.s();
                            case 51:
                                if ((y = b.n()).done) {
                                    t.next = 62;
                                    break
                                }
                                if ("function" == typeof (T = y.value).options.validate) {
                                    t.next = 55;
                                    break
                                }
                                return t.abrupt("continue", 60);
                            case 55:
                                return t.next = 57,
                                T.options.validate(d.context);
                            case 57:
                                if (v = t.sent) {
                                    t.next = 60;
                                    break
                                }
                                return t.abrupt("break", 62);
                            case 60:
                                t.next = 51;
                                break;
                            case 62:
                                t.next = 67;
                                break;
                            case 64:
                                t.prev = 64,
                                t.t0 = t.catch(49),
                                b.e(t.t0);
                            case 67:
                                return t.prev = 67,
                                b.f(),
                                t.finish(67);
                            case 70:
                                t.next = 76;
                                break;
                            case 72:
                                return t.prev = 72,
                                t.t1 = t.catch(47),
                                this.error({
                                    statusCode: t.t1.statusCode || "500",
                                    message: t.t1.message
                                }),
                                t.abrupt("return", r());
                            case 76:
                                if (v) {
                                    t.next = 79;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", r());
                            case 79:
                                return t.next = 81,
                                Promise.all(l.map((function(t, r) {
                                    t._path = Object(c.c)(e.matched[u[r]].path)(e.params),
                                    t._dataRefresh = !1;
                                    var a = t._path !== m[r];
                                    if (C._routeChanged && a)
                                        t._dataRefresh = !0;
                                    else if (C._paramChanged && a) {
                                        var i = t.options.watchParam;
                                        t._dataRefresh = !1 !== i
                                    } else if (C._queryChanged) {
                                        var o = t.options.watchQuery;
                                        !0 === o ? t._dataRefresh = !0 : Array.isArray(o) ? t._dataRefresh = o.some((function(t) {
                                            return C._diffQuery[t]
                                        }
                                        )) : "function" == typeof o && (O || (O = Object(c.h)(e)),
                                        t._dataRefresh = o.apply(O[r], [e.query, n.query]))
                                    }
                                    if (C._hadError || !C._isMounted || t._dataRefresh) {
                                        var s = []
                                          , l = t.options.asyncData && "function" == typeof t.options.asyncData
                                          , f = Boolean(t.options.fetch) && t.options.fetch.length
                                          , p = l && f ? 30 : 45;
                                        if (l) {
                                            var h = Object(c.p)(t.options.asyncData, d.context).then((function(e) {
                                                Object(c.b)(t, e),
                                                C.$loading.increase && C.$loading.increase(p)
                                            }
                                            ));
                                            s.push(h)
                                        }
                                        if (C.$loading.manual = !1 === t.options.loading,
                                        f) {
                                            var g = t.options.fetch(d.context);
                                            g && (g instanceof Promise || "function" == typeof g.then) || (g = Promise.resolve(g)),
                                            g.then((function(t) {
                                                C.$loading.increase && C.$loading.increase(p)
                                            }
                                            )),
                                            s.push(g)
                                        }
                                        return Promise.all(s)
                                    }
                                }
                                )));
                            case 81:
                                i || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                r()),
                                t.next = 98;
                                break;
                            case 84:
                                if (t.prev = 84,
                                t.t2 = t.catch(28),
                                "ERR_REDIRECT" !== (E = t.t2 || {}).message) {
                                    t.next = 89;
                                    break
                                }
                                return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, E));
                            case 89:
                                return m = [],
                                Object(c.k)(E),
                                "function" == typeof (S = (s.a.options || s.a).layout) && (S = S(d.context)),
                                t.next = 95,
                                this.loadLayout(S);
                            case 95:
                                this.error(E),
                                this.$nuxt.$emit("routeChanged", e, n, E),
                                r();
                            case 98:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[28, 84], [47, 72], [49, 64, 67, 70]])
                }
                )))).apply(this, arguments)
            }
            function C(t, n) {
                Object(c.d)(t, (function(t, n, r, i) {
                    return "object" !== Object(e.a)(t) || t.options || ((t = a.default.extend(t))._Ctor = t,
                    r.components[i] = t),
                    t
                }
                ))
            }
            function L(t) {
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                var e = this.$options.nuxt.err ? (s.a.options || s.a).layout : t.matched[0].components.default.options.layout;
                "function" == typeof e && (e = e(d.context)),
                this.setLayout(e)
            }
            function j(t, e) {
                var n = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var r = Object(c.h)(t)
                      , i = Object(c.g)(t);
                    a.default.nextTick((function() {
                        r.forEach((function(t, e) {
                            if (t && !t._isDestroyed && t.constructor._dataRefresh && i[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                var n = t.constructor.options.data.call(t);
                                for (var r in n)
                                    a.default.set(t.$data, r, n[r]);
                                window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                }
                                ))
                            }
                        }
                        )),
                        L.call(n, t)
                    }
                    ))
                }
            }
            function A(t) {
                window.onNuxtReadyCbs.forEach((function(e) {
                    "function" == typeof e && e(t)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
                h.afterEach((function(e, n) {
                    a.default.nextTick((function() {
                        return t.$nuxt.$emit("routeChanged", e, n)
                    }
                    ))
                }
                ))
            }
            function P() {
                return (P = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, i, o, s;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return d = e.app,
                                h = e.router,
                                e.store,
                                n = new a.default(d),
                                r = g.layout || "default",
                                t.next = 7,
                                n.loadLayout(r);
                            case 7:
                                return n.setLayout(r),
                                i = function() {
                                    n.$mount("#__nuxt"),
                                    h.afterEach(C),
                                    h.afterEach(j.bind(n)),
                                    a.default.nextTick((function() {
                                        A(n)
                                    }
                                    ))
                                }
                                ,
                                t.next = 11,
                                Promise.all(O(h));
                            case 11:
                                if (o = t.sent,
                                n.setTransitions = n.$options.nuxt.setTransitions.bind(n),
                                o.length && (n.setTransitions(_(o, h.currentRoute)),
                                m = h.currentRoute.matched.map((function(t) {
                                    return Object(c.c)(t.path)(h.currentRoute.params)
                                }
                                ))),
                                n.$loading = {},
                                g.error && n.error(g.error),
                                h.beforeEach(b.bind(n)),
                                h.beforeEach(E.bind(n)),
                                !g.serverRendered || g.routePath !== n.context.route.path) {
                                    t.next = 21;
                                    break
                                }
                                return i(),
                                t.abrupt("return");
                            case 21:
                                s = function() {
                                    C(h.currentRoute, h.currentRoute),
                                    L.call(n, h.currentRoute),
                                    i()
                                }
                                ,
                                E.call(n, h.currentRoute, h.currentRoute, (function(t) {
                                    if (t) {
                                        var e = h.afterEach((function(t, n) {
                                            e(),
                                            s()
                                        }
                                        ));
                                        h.push(t, void 0, (function(t) {
                                            t && v(t)
                                        }
                                        ))
                                    } else
                                        s()
                                }
                                ));
                            case 23:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).apply(this, arguments)
            }
            Object(s.b)().then((function(t) {
                return P.apply(this, arguments)
            }
            )).catch(v)
        }
        .call(this, n(51))
    },
    358: function(t, e, n) {
        "use strict";
        n.r(e);
        n(68);
        var r = n(39)
          , a = n.n(r)
          , i = n(49);
        e.default = function(t) {
            var e = t.req;
            t.res;
            if (void 0 !== e.headers) {
                var n = function(t, e) {
                    if (!t)
                        return "";
                    for (var n = t.split(";"), r = 0; r < n.length; r++) {
                        var a = n[r] && n[r].split("=") || [""];
                        if (a[0].trim() === e) {
                            var o = a[1]
                              , c = o ? Object(i.a)(o) : "";
                            return c && c.accessToken
                        }
                    }
                    return ""
                }(e.headers.cookie, "jwt");
                n && (a.a.defaults.headers.Authorization = "Bearer ".concat(n),
                a.a.defaults.withCredentials = !0)
            }
        }
    },
    377: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = function(t) {
            t && t.req && (-1 !== t.req.path.indexOf("//") || -1 !== t.req.path.indexOf("%22;")) && t.redirect(301, "/")
        }
    },
    387: function(t, e, n) {
        "use strict";
        var r = n(120);
        n.n(r).a
    },
    388: function(t, e, n) {
        "use strict";
        var r = n(121);
        n.n(r).a
    },
    389: function(t, e, n) {},
    402: function(t, e) {},
    404: function(t, e, n) {
        "use strict";
        var r = n(123);
        n.n(r).a
    },
    405: function(t, e, n) {
        "use strict";
        var r = n(124);
        n.n(r).a
    },
    406: function(t, e, n) {
        "use strict";
        var r = n(125);
        n.n(r).a
    },
    407: function(t, e, n) {
        "use strict";
        var r = n(126);
        n.n(r).a
    },
    408: function(t, e, n) {
        "use strict";
        var r = n(127);
        n.n(r).a
    },
    409: function(t, e, n) {
        "use strict";
        var r = n(128);
        n.n(r).a
    },
    410: function(t, e, n) {
        "use strict";
        var r = n(129);
        n.n(r).a
    },
    411: function(t, e, n) {
        "use strict";
        var r = n(130);
        n.n(r).a
    },
    412: function(t, e, n) {
        "use strict";
        var r = n(131);
        n.n(r).a
    },
    413: function(t, e, n) {
        "use strict";
        var r = n(132);
        n.n(r).a
    },
    414: function(t, e, n) {
        "use strict";
        var r = n(133);
        n.n(r).a
    },
    415: function(t, e, n) {
        "use strict";
        var r = n(134);
        n.n(r).a
    },
    416: function(t, e, n) {
        "use strict";
        var r = n(135);
        n.n(r).a
    },
    417: function(t, e, n) {
        "use strict";
        var r = n(136);
        n.n(r).a
    },
    418: function(t, e, n) {
        "use strict";
        var r = n(137);
        n.n(r).a
    },
    419: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "strict", (function() {
            return l
        }
        )),
        n.d(e, "state", (function() {
            return f
        }
        )),
        n.d(e, "getters", (function() {
            return p
        }
        )),
        n.d(e, "mutations", (function() {
            return d
        }
        )),
        n.d(e, "actions", (function() {
            return h
        }
        ));
        n(31),
        n(19),
        n(10),
        n(8),
        n(14);
        var r = n(1)
          , a = n(36)
          , i = (n(28),
        n(6))
          , o = (n(22),
        n(24),
        n(159));
        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function(e) {
                    Object(r.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var u = function(t, e) {
            var n = e && e.headers
              , r = n.origin
              , a = void 0 === r ? "" : r
              , i = n.host
              , o = void 0 === i ? "" : i
              , c = e.hostname
              , s = void 0 === c ? "" : c;
            return a.includes(t) || o.includes(t) || s.includes(t) || "https://www.fnscore.cn".includes(t)
        }
          , l = !1
          , f = function() {
            return {
                friendLinks: [],
                isFnScoreCN: !0,
                isLoaded: !1,
                showBanner: !1,
                showActivityPanel: !0,
                configs: {},
                videoConfig: {
                    mute: !0,
                    volume: .5
                }
            }
        }
          , p = {
            isShowBanner: function(t) {
                return t.showBanner
            },
            isMuteVideo: function(t) {
                return t.videoConfig.mute
            },
            videoVolume: function(t) {
                return t.videoConfig.volume
            },
            showActivityPanel: function(t) {
                return t.showActivityPanel
            }
        }
          , d = {
            SET_FRIEND_LINKS: function(t, e) {
                t.friendLinks = e
            },
            SET_LOADING: function(t) {
                t.isLoaded = !0
            },
            SET_IS_FNSCORE_CN: function(t, e) {
                t.isFnScoreCN = e
            },
            SET_SYSTEM_CONFIG: function(t, e) {
                t.configs = e
            },
            SET_VIDEO_VOLUME: function(t, e) {
                t.videoConfig = {
                    mute: 0 === e,
                    volume: e
                }
            },
            SET_ACTIVITY_PANEL: function(t, e) {
                t.showActivityPanel = e
            }
        }
          , h = {
            setHostHandle: function(t, e) {
                return Object(i.a)(regeneratorRuntime.mark((function n() {
                    var r, i, o, c, l;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = t.commit,
                                i = u("fnscore.com", e),
                                o = u("fnscore.cn", e),
                                c = u("fengniao88.com", e),
                                ((l = [{
                                    key: "isFnscoreCNHost",
                                    value: o,
                                    hostSite: ["www.fnscore.cn"]
                                }, {
                                    key: "isFnscoreComHost",
                                    value: i,
                                    hostSite: ["www.fnscore.com"]
                                }, {
                                    key: "isFnscoreCOMHost",
                                    value: c,
                                    hostSite: ["www.fengniao88.com"]
                                }]).map((function(t) {
                                    return t.value && t
                                }
                                )).filter(Boolean) || Object(a.a)(l[0])).map((function(t) {
                                    var n = t.key
                                      , a = t.value
                                      , i = t.hostSite;
                                    return r("common/setCurrhost", {
                                        key: n,
                                        value: a
                                    }),
                                    r("common/setCurrHostSite", i),
                                    s(s({}, t), {}, {
                                        originHost: e.hostname
                                    })
                                }
                                )),
                                r("SET_IS_FNSCORE_CN", o);
                            case 8:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            initFriendLinks: function(t) {
                return Object(i.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                e.prev = 1,
                                e.next = 4,
                                Object(o.d)({
                                    orderType: 1
                                });
                            case 4:
                                r = e.sent,
                                a = r.links,
                                n("SET_FRIEND_LINKS", a.map((function(t) {
                                    return {
                                        url: t.url,
                                        webName: t.webName
                                    }
                                }
                                ))),
                                n("SET_LOADING"),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 10]])
                }
                )))()
            },
            initSystemConfig: function(t) {
                return Object(i.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                e.prev = 1,
                                e.next = 4,
                                Object(o.a)();
                            case 4:
                                r = e.sent,
                                a = r.configs,
                                n("SET_SYSTEM_CONFIG", a),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(1);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 9]])
                }
                )))()
            },
            nuxtServerInit: function(t, e) {
                return Object(i.a)(regeneratorRuntime.mark((function n() {
                    var r, a, i, o, c, s;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.dispatch,
                                a = t.state,
                                i = t.commit,
                                o = e.req,
                                c = e.error,
                                n.prev = 2,
                                n.next = 5,
                                r("setHostHandle", o);
                            case 5:
                                if (a.friendLinks && 0 !== a.friendLinks.length) {
                                    n.next = 8;
                                    break
                                }
                                return n.next = 8,
                                r("initFriendLinks");
                            case 8:
                                return n.next = 10,
                                r("user/restoreUser", o);
                            case 10:
                                return n.next = 12,
                                r("user/restoreUUID", o);
                            case 12:
                                s = o.cookies && o.cookies.SHOW_ACTIVITY_PANEL,
                                i("SET_ACTIVITY_PANEL", "false" !== s),
                                n.next = 19;
                                break;
                            case 16:
                                n.prev = 16,
                                n.t0 = n.catch(2),
                                c(n.t0);
                            case 19:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[2, 16]])
                }
                )))()
            }
        }
    },
    420: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return r
        }
        )),
        n.d(e, "mutations", (function() {
            return a
        }
        ));
        var r = function() {
            return {
                isFnscoreComHost: !1,
                isFnscoreCNHost: !1,
                isFnscoreCOMHost: !1,
                currHostSite: ["www.fnscore.cn"],
                banner: {
                    home_left: !1,
                    home_wait: !0,
                    home_index: !0
                }
            }
        }
          , a = {
            setCurrhost: function(t, e) {
                var n = e.key
                  , r = e.value;
                t[n] = r
            },
            setCurrHostSite: function(t, e) {
                t.currHostSite = e
            }
        }
    },
    421: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return l
        }
        )),
        n.d(e, "mutations", (function() {
            return f
        }
        )),
        n.d(e, "getters", (function() {
            return p
        }
        )),
        n.d(e, "actions", (function() {
            return d
        }
        ));
        n(31),
        n(19),
        n(10),
        n(8),
        n(14);
        var r = n(1)
          , a = (n(28),
        n(6))
          , i = (n(22),
        n(24),
        n(0))
          , o = n(43);
        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function(e) {
                    Object(r.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var u = 2
          , l = function() {
            return {
                baseQuery: {},
                matchList: [],
                stageList: [],
                gameType: i.e.GT_FOOTBALL,
                queryData: {
                    pageIndex: 1,
                    pageSize: 24
                },
                totalSize: 0,
                categoryId: 1,
                categoryList: [{
                    id: 1,
                    name: "全部"
                }, {
                    id: 2,
                    name: "国际赛事"
                }, {
                    id: 3,
                    name: "其他赛事"
                }, {
                    id: 4,
                    name: "五大联赛"
                }, {
                    id: 5,
                    name: "欧洲联赛"
                }, {
                    id: 6,
                    name: "亚洲联赛"
                }, {
                    id: 7,
                    name: "怪物圈联赛"
                }],
                hotLeagueList: [],
                focusLeagueList: [],
                tournamentList: []
            }
        }
          , f = {
            SET_BASE_QUERY: function(t, e) {
                t.baseQuery = e
            },
            SET_MATCH_LIST: function(t, e) {
                t.matchList = e
            },
            SET_STAGE_LIST: function(t, e) {
                t.stageList = e
            },
            SET_GAME_TYPE: function(t, e) {
                t.gameType = e
            },
            SET_QUERY_DATA: function(t, e) {
                t.queryData = Object.assign({}, t.queryData, e)
            },
            SET_CATEGORY_ID: function(t, e) {
                t.categoryId = e
            },
            SET_CATEGORY_LIST: function(t, e) {
                t.categoryList = e
            },
            SET_FOCUS_LEAGUE_LIST: function(t, e) {
                t.focusLeagueList = e
            },
            SET_HOT_LEAGUE_LIST: function(t, e) {
                t.hotLeagueList = e
            },
            SET_TOURNAMENT_LIST: function(t, e) {
                t.tournamentList = e
            },
            SET_PAGE_TOTAL_SIZE: function(t, e) {
                t.totalSize = e
            }
        }
          , p = {
            baseQuery: function(t) {
                return t.baseQuery
            },
            matchList: function(t) {
                return t.matchList
            },
            stageList: function(t) {
                return t.stageList
            },
            hasRankStageList: function(t) {
                return t.stageList && t.stageList.filter((function(t) {
                    return 1 === t.hasRank
                }
                ))
            },
            pvpStageList: function(t) {
                return t.stageList && t.stageList.filter((function(t) {
                    return t.leagueType === u
                }
                ))
            },
            gameType: function(t) {
                return t.gameType
            },
            queryData: function(t) {
                return t.queryData
            },
            isFootBall: function(t) {
                return t.gameType === i.e.GT_FOOTBALL
            },
            isBasketball: function(t) {
                return t.gameType === i.e.GT_BASKETBALL
            },
            isSportGame: function(t) {
                return [i.e.GT_FOOTBALL, i.e.GT_BASKETBALL].includes(t.gameType)
            },
            totalSize: function(t) {
                return t.totalSize
            },
            categoryId: function(t) {
                return t.categoryId
            },
            categoryList: function(t) {
                return t.categoryList
            },
            hotLeagueList: function(t) {
                return t.hotLeagueList
            },
            focusLeagueList: function(t) {
                return t.focusLeagueList
            },
            tournamentList: function(t) {
                return t.tournamentList
            }
        }
          , d = {
            changeGameTypeAction: function(t, e) {
                return Object(a.a)(regeneratorRuntime.mark((function n() {
                    var r, a;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = t.commit,
                                a = t.dispatch,
                                r("SET_GAME_TYPE", 0 !== e ? e : i.e.GT_FOOTBALL),
                                a("refreshCategoryList"),
                                a("refreshPageLeftData"),
                                a("refreshHotList");
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            refreshCategoryList: function(t) {
                return Object(a.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a, i, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                a = t.dispatch,
                                e.next = 3,
                                Object(o.c)(r.gameType);
                            case 3:
                                i = e.sent,
                                n("SET_CATEGORY_LIST", i.data),
                                i.data && i.data.length > 0 && (c = i.data[0],
                                a("changeCategoryAction", c.id));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            refreshHotList: function(t) {
                return Object(a.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                e.next = 3,
                                Object(o.b)(r.gameType);
                            case 3:
                                a = e.sent,
                                n("SET_HOT_LEAGUE_LIST", a.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            changeCategoryAction: function(t, e) {
                var n = t.commit
                  , r = t.dispatch;
                n("SET_CATEGORY_ID", e),
                n("SET_TOURNAMENT_LIST", []),
                r("refreshPageData"),
                r("refreshLeagueList")
            },
            refreshPageData: function(t) {
                var e = t.commit;
                e("SET_QUERY_DATA", {
                    pageIndex: 1,
                    pageSize: 24
                }),
                e("SET_PAGE_TOTAL_SIZE", 0)
            },
            refreshPageLeftData: function(t) {
                var e = t.commit;
                e("SET_FOCUS_LEAGUE_LIST", []),
                e("SET_HOT_LEAGUE_LIST", [])
            },
            changeLeagueListPageAction: function(t, e) {
                var n = t.commit
                  , r = t.dispatch;
                n("SET_QUERY_DATA", {
                    pageIndex: e
                }),
                r("refreshLeagueList")
            },
            refreshLeagueList: function(t) {
                return Object(a.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a, i, c, u, l, f, p, d, h, m;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                a = t.getters,
                                i = s({
                                    gameType: r.gameType,
                                    categoryId: r.categoryId
                                }, r.queryData),
                                e.next = 4,
                                Object(o.g)(i);
                            case 4:
                                c = e.sent,
                                u = c.data[0],
                                l = u.total,
                                f = void 0 === l ? 0 : l,
                                p = u.tournaments,
                                d = void 0 === p ? [] : p,
                                h = u.focus,
                                m = void 0 === h ? [] : h,
                                a.isSportGame ? (n("SET_FOCUS_LEAGUE_LIST", m),
                                n("SET_TOURNAMENT_LIST", c.data)) : (n("SET_FOCUS_LEAGUE_LIST", m),
                                n("SET_TOURNAMENT_LIST", d),
                                n("SET_PAGE_TOTAL_SIZE", f));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            InitPageData: function(t, e) {
                return Object(a.a)(regeneratorRuntime.mark((function n() {
                    var r, a, c, s, u;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.commit,
                                a = t.state,
                                c = t.dispatch,
                                r("SET_GAME_TYPE", 0 !== e ? e : i.e.GT_FOOTBALL),
                                n.next = 4,
                                Object(o.c)(a.gameType);
                            case 4:
                                s = n.sent,
                                r("SET_CATEGORY_LIST", s.data),
                                s.data && s.data.length > 0 && (u = s.data[0],
                                r("SET_CATEGORY_ID", u.id),
                                c("refreshLeagueList"));
                            case 7:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            }
        }
    },
    422: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return c
        }
        )),
        n.d(e, "getters", (function() {
            return s
        }
        )),
        n.d(e, "mutations", (function() {
            return u
        }
        )),
        n.d(e, "actions", (function() {
            return l
        }
        ));
        n(28);
        var r = n(6)
          , a = n(0)
          , i = n(43)
          , o = 2
          , c = function() {
            return {
                pageTag: {
                    tag: "",
                    type: 1
                },
                baseQuery: {},
                leagueDetails: {},
                isFocus: !1,
                activeSeason: {},
                matchList: [],
                stageList: [],
                rankList: [],
                standList: []
            }
        }
          , s = {
            pageTag: function(t) {
                return t.pageTag
            },
            gameType: function(t) {
                return t.pageTag.type
            },
            baseQuery: function(t) {
                return t.baseQuery
            },
            isFocus: function(t) {
                return t.isFocus
            },
            isSportGame: function(t) {
                return t.pageTag.type === a.e.GT_FOOTBALL || t.pageTag.type === a.e.GT_BASKETBALL
            },
            isFootBall: function(t) {
                return t.pageTag.type === a.e.GT_FOOTBALL
            },
            leagueDetails: function(t) {
                return t.leagueDetails
            },
            isCupKindType: function(t) {
                return 2 === t.leagueDetails.kind
            },
            activeSeason: function(t) {
                return t.activeSeason
            },
            matchList: function(t) {
                return t.matchList
            },
            stageList: function(t) {
                return t.stageList
            },
            rankList: function(t) {
                return t.rankList
            },
            standList: function(t) {
                return t.standList
            },
            hasRankStageList: function(t) {
                return t.stageList && t.stageList.filter((function(t) {
                    return 1 === t.hasRank
                }
                ))
            },
            pvpStageList: function(t) {
                return t.stageList && t.stageList.filter((function(t) {
                    return t.leagueType === o
                }
                ))
            }
        }
          , u = {
            SET_PAGE_TAG: function(t, e) {
                t.pageTag = e
            },
            SET_BASE_QUERY: function(t, e) {
                t.baseQuery = e
            },
            SET_IS_FOCUS: function(t, e) {
                t.isFocus = e
            },
            SET_MATCH_LIST: function(t, e) {
                t.matchList = e
            },
            SET_STAGE_LIST: function(t, e) {
                t.stageList = e
            },
            SET_LEAGUE_DETAILS: function(t, e) {
                t.leagueDetails = e,
                e && e.seasons && (t.activeSeason = e.seasons[0]),
                t.isFocus = e.isFocus
            },
            UPDATE_LEAGUE_FOCUS_STATUS: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.leagueDetails && (t.leagueDetails.isFocus = e)
            },
            SET_ACTIVE_SEASON: function(t, e) {
                t.activeSeason = e
            },
            SET_STAND_LIST: function(t, e) {
                t.standList = e
            },
            SET_RANK_LIST: function(t, e) {
                t.rankList = e
            }
        }
          , l = {
            refreshLeagueDetails: function(t) {
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a, o, c, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                a = r.baseQuery,
                                o = a.gameType,
                                c = a.leagueId,
                                e.next = 4,
                                Object(i.d)(o, c);
                            case 4:
                                s = e.sent,
                                n("SET_LEAGUE_DETAILS", s.data);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            updateSeasonAction: function(t, e) {
                var n = t.commit
                  , r = t.dispatch;
                n("SET_ACTIVE_SEASON", e),
                r("refreshSportsMatchList"),
                r("refreshSportsScoreList")
            },
            refreshSportsMatchList: function(t) {
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a, o, c, s, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                a = {
                                    gameType: r.baseQuery.gameType,
                                    tournamentId: r.baseQuery.leagueId,
                                    seasonId: r.activeSeason ? r.activeSeason.id : 0
                                },
                                e.next = 4,
                                Object(i.e)(a);
                            case 4:
                                (o = e.sent).success && o.data ? (c = o.data,
                                s = c.matches,
                                u = c.stages,
                                n("SET_MATCH_LIST", s),
                                n("SET_STAGE_LIST", u)) : (n("SET_MATCH_LIST", []),
                                n("SET_STAGE_LIST", []));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            refreshSportsScoreList: function(t) {
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a, o, c, s, u, l, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit,
                                r = t.state,
                                a = t.getters,
                                o = {
                                    gameType: r.baseQuery.gameType,
                                    tournamentId: r.baseQuery.leagueId,
                                    seasonId: r.activeSeason.id
                                },
                                e.next = 4,
                                Object(i.f)(o);
                            case 4:
                                (c = e.sent).success && c.data ? (s = c.data,
                                u = s.standList,
                                l = s.footballList,
                                f = s.basketballList,
                                n("SET_RANK_LIST", a.isFootBall ? l : f),
                                n("SET_STAND_LIST", u)) : (n("SET_RANK_LIST", []),
                                n("SET_STAND_LIST", []));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
        }
    },
    423: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return a
        }
        )),
        n.d(e, "getters", (function() {
            return i
        }
        )),
        n.d(e, "mutations", (function() {
            return o
        }
        )),
        n.d(e, "actions", (function() {
            return c
        }
        ));
        n(194),
        n(10),
        n(8),
        n(14),
        n(298);
        var r = n(59)
          , a = function() {
            return {
                pageData: {}
            }
        }
          , i = {
            existCoordinate: function(t) {
                var e;
                return null === (e = t.pageData) || void 0 === e ? void 0 : e.existCoordinate
            },
            homeFirst: function(t) {
                var e;
                return null === (e = t.pageData) || void 0 === e ? void 0 : e.homeFirst
            },
            homeCaptain: function(t, e) {
                var n;
                return null === (n = e.homeFirst) || void 0 === n ? void 0 : n.find((function(t) {
                    return t.isCoach
                }
                ))
            },
            homePlayerList: function(t, e) {
                var n;
                return null === (n = e.homeFirst) || void 0 === n ? void 0 : n.filter((function(t) {
                    return !t.isCoach
                }
                ))
            },
            homeBench: function(t) {
                var e;
                return null === (e = t.pageData) || void 0 === e ? void 0 : e.homeBench
            },
            awayFirst: function(t) {
                var e;
                return null === (e = t.pageData) || void 0 === e ? void 0 : e.awayFirst
            },
            awayBench: function(t) {
                var e;
                return null === (e = t.pageData) || void 0 === e ? void 0 : e.awayBench
            },
            awayCaptain: function(t, e) {
                var n;
                return null === (n = e.awayFirst) || void 0 === n ? void 0 : n.find((function(t) {
                    return t.isCoach
                }
                ))
            },
            awayPlayerList: function(t, e) {
                var n;
                return null === (n = e.awayFirst) || void 0 === n ? void 0 : n.filter((function(t) {
                    return !t.isCoach
                }
                ))
            },
            awayTeam: function(t) {
                var e = t.pageData;
                return {
                    logo: e.awayLogo,
                    teamName: e.awayName,
                    coachName: e.awayCoachName,
                    averageAge: e.awayAverageAge,
                    averageWorth: e.awayAverageWorth,
                    formation: e.awayFormation
                }
            },
            homeTeam: function(t) {
                var e = t.pageData
                  , n = e.homeLogo
                  , r = e.homeName
                  , a = e.homeAverageAge;
                return {
                    logo: n,
                    teamName: r,
                    averageWorth: e.homeAverageWorth,
                    averageAge: a,
                    coachName: e.homeCoachName,
                    formation: e.homeFormation
                }
            },
            matchInfo: function(t) {
                var e = t.pageData;
                return {
                    refereeName: e.refereeName,
                    matchId: e.matchId,
                    venueName: e.venueName
                }
            }
        }
          , o = {
            SET_LINE_UP_DATA: function(t, e) {
                t.pageData = e
            },
            UPDATE_LINE_INFO: function(t, e) {
                0 !== Object.keys(t.pageData).length && e && e.length > 0 && e.forEach((function(e) {
                    if (e.isHome)
                        if (e.isFirst) {
                            var n, r, a, i = null === (n = t.pageData) || void 0 === n || null === (r = n.homeFirst) || void 0 === r ? void 0 : r.findIndex((function(t) {
                                return t.playerId === e.playerId
                            }
                            )), o = null === (a = t.pageData) || void 0 === a ? void 0 : a.homeFirst[i], c = Object.assign({}, o, {
                                isMvp: e.isMvp,
                                majors: e.majors,
                                rating: e.rating,
                                incident: e.incident
                            });
                            t.pageData.homeFirst.splice(i, 1, c)
                        } else {
                            var s, u, l, f = null === (s = t.pageData) || void 0 === s || null === (u = s.homeBench) || void 0 === u ? void 0 : u.findIndex((function(t) {
                                return t.playerId === e.playerId
                            }
                            )), p = null === (l = t.pageData) || void 0 === l ? void 0 : l.homeBench[f], d = Object.assign({}, p, {
                                isMvp: e.isMvp,
                                majors: e.majors,
                                rating: e.rating,
                                incident: e.incident
                            });
                            t.pageData.homeBench.splice(f, 1, d)
                        }
                    else if (e.isFirst) {
                        var h, m, g, v = null === (h = t.pageData) || void 0 === h || null === (m = h.awayFirst) || void 0 === m ? void 0 : m.findIndex((function(t) {
                            return t.playerId === e.playerId
                        }
                        )), _ = null === (g = t.pageData) || void 0 === g ? void 0 : g.awayFirst[v], b = Object.assign({}, _, {
                            isMvp: e.isMvp,
                            majors: e.majors,
                            rating: e.rating,
                            incident: e.incident
                        });
                        t.pageData.awayFirst.splice(v, 1, b)
                    } else {
                        var y, T, O, w = null === (y = t.pageData) || void 0 === y || null === (T = y.awayBench) || void 0 === T ? void 0 : T.findIndex((function(t) {
                            return t.playerId === e.playerId
                        }
                        )), E = null === (O = t.pageData) || void 0 === O ? void 0 : O.awayBench[w], S = Object.assign({}, E, {
                            isMvp: e.isMvp,
                            majors: e.majors,
                            rating: e.rating,
                            incident: e.incident
                        });
                        t.pageData.awayBench.splice(w, 1, S)
                    }
                }
                ))
            },
            UPDATE_LINE_INFO_PLUS: function(t, e) {
                if (0 !== Object.keys(t.pageData).length) {
                    var n = "homeFirst";
                    e && e.length > 0 && e.forEach((function(e) {
                        n = e.isHome ? e.isFirst ? "homeFirst" : "homeBench" : e.isFirst ? "awayFirst" : "awayBench";
                        var r = t.pageData[n].findIndex((function(t) {
                            return t.playerId === e.playerId
                        }
                        ))
                          , a = t.pageData[n][r]
                          , i = Object.assign({}, a, {
                            isMvp: e.isMvp,
                            majors: e.majors,
                            rating: e.rating,
                            incident: e.incident
                        });
                        t.pageData[n].splice(r, 1, i)
                    }
                    ))
                }
            }
        }
          , c = {
            initLineUpData: function(t) {
                var e = t.rootGetters
                  , n = t.commit
                  , a = e["match/baseQuery"]
                  , i = a.matchId
                  , o = a.gameType;
                Object(r.v)(o, i).then((function(t) {
                    n("SET_LINE_UP_DATA", t.data)
                }
                ))
            }
        }
    },
    426: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return h
        }
        )),
        n.d(e, "mutations", (function() {
            return m
        }
        )),
        n.d(e, "actions", (function() {
            return y
        }
        )),
        n.d(e, "getters", (function() {
            return T
        }
        ));
        n(28);
        var r = n(6)
          , a = (n(194),
        n(36))
          , i = (n(22),
        n(24),
        n(0))
          , o = n(17)
          , c = n(70)
          , s = n(209)
          , u = n(149)
          , l = n.n(u)
          , f = function(t, e) {
            return i.e.GT_FOOTBALL === t ? [i.d.FIRST_HALF, i.d.MIDFIELD, i.d.SECOND_HALF, i.d.OVERTIME, i.d.PENALTY].includes(e) : i.e.GT_BASKETBALL === t ? [i.c.FIRST, i.c.SECOND, i.c.THIRD, i.c.FOURTH, i.c.OVERTIME, i.c.HALF_TIME].includes(e) : e === o.MATCH_STATUS_TYPE.START
        }
          , p = function(t, e) {
            return i.e.GT_FOOTBALL === t ? e === i.d.FINISH : i.e.GT_BASKETBALL === t ? e === i.c.FINISH || e === i.c.CANCEL : e === o.MATCH_STATUS_TYPE.END || e === o.MATCH_STATUS_TYPE.DELETE
        }
          , d = function(t) {
            return 0 === t ? l()().subtract(1, "day").format("YYYY-MM-DD") : 1 === t ? l()().format("YYYY-MM-DD") : 2 === t ? l()().add(1, "day").format("YYYY-MM-DD") : void 0
        }
          , h = function() {
            return {
                selectedGameType: i.e.GT_FOOTBALL,
                timeType: 1,
                matchStatus: 0,
                leagueIds: [],
                lotteryList: [],
                loading: !1,
                ordinaries: [],
                hots: [],
                lotteryType: 0,
                matches: [],
                totalSize: [0, 0, 0],
                count: 0
            }
        }
          , m = {
            UPDATE_MATCH_LIST: function(t, e) {
                for (var n = Object(a.a)(t.matches), r = function(t) {
                    var r = n[t]
                      , a = e.findIndex((function(t) {
                        return t.matchId + "" == r.matchId + "" && t.gameType === r.gameType
                    }
                    ));
                    -1 !== a && (n[t].awayScore = e[a].awayScore,
                    n[t].homeScore = e[a].homeScore,
                    n[t].time = e[a].time)
                }, i = 0; i < n.length; i++)
                    r(i);
                t.matches = n
            },
            SET_TOTAL_SIZE: function(t, e) {
                t.totalSize = e
            },
            SET_MATCH_LIST_RESPONSE: function(t, e) {
                var n = e.matches
                  , r = e.hots
                  , a = e.ordinaries;
                t.matches = n,
                t.hots = r,
                t.ordinaries = a
            },
            SET_SELECTED_GAME_TYPE: function(t, e) {
                t.selectedGameType = e
            },
            SET_TIME_TYPE: function(t, e) {
                t.timeType = e
            },
            SET_MATCH_STATUS: function(t, e) {
                t.matchStatus = e
            },
            SET_LEAGUE_IDS: function(t, e) {
                t.leagueIds = e
            },
            SET_LOTTERY_LIST: function(t, e) {
                t.lotteryList = e
            },
            SET_ORDINARIES: function(t, e) {
                t.ordinaries = e
            },
            SET_HOTS: function(t, e) {
                t.hots = e
            },
            SET_LOTTERY_TYPE: function(t, e) {
                t.lotteryType = e
            },
            SET_SHOW_LIVE_MATCH: function(t, e) {
                t.showLiveMatch = e
            },
            SET_SHOW_WAIT_MATCH: function(t, e) {
                t.showWaitMatch = e
            },
            SET_SHOW_FINISH_MATCH: function(t, e) {
                t.showFinishMatch = e
            },
            SET_LOADING: function(t, e) {
                t.loading = e
            },
            SET_COUNT: function(t, e) {
                t.count = e
            },
            RESET_STATE: function(t) {
                t.leagueIds = [],
                t.lotteryList = [],
                t.ordinaries = [],
                t.hots = [],
                t.lotteryType = 0,
                t.matches = []
            }
        }
          , g = function() {
            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                var a, i;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return a = {
                                gameType: e,
                                date: d(n),
                                hot: !1,
                                anchor: !1
                            },
                            t.next = 3,
                            Object(s.a)(a, r);
                        case 3:
                            return i = t.sent,
                            t.abrupt("return", {
                                matches: (null == i ? void 0 : i.matches) || [],
                                hots: (null == i ? void 0 : i.hots) || [],
                                ordinaries: (null == i ? void 0 : i.ordinaries) || []
                            });
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, n, r) {
                return t.apply(this, arguments)
            }
        }()
          , v = function() {
            var t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                var n;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Object(c.g)(e);
                        case 2:
                            return n = t.sent,
                            t.abrupt("return", n);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , _ = function(t, e) {
            var n = [];
            return 0 === e ? n = t.filter((function(t) {
                return f(t.gameType, t.status)
            }
            )) : 1 === e ? n = t.filter((function(t) {
                return p(t.gameType, t.status)
            }
            )) : 2 === e && (n = t.filter((function(t) {
                return t.hasLive
            }
            ))),
            n
        }
          , b = function(t, e) {
            return t.filter((function(t) {
                var n;
                return e.includes(null == t || null === (n = t.league) || void 0 === n ? void 0 : n.leagueId)
            }
            ))
        }
          , y = {
            refreshMatches: function(t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, i, o, s, u, l, p, d, h;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (r = t.commit,
                                i = t.state,
                                r("SET_COUNT", i.count + 1),
                                i.count % 4 != 0) {
                                    n.next = 11;
                                    break
                                }
                                return n.next = 5,
                                g(i.selectedGameType, i.timeType, e);
                            case 5:
                                return o = n.sent,
                                s = o.matches,
                                u = o.hots,
                                l = o.ordinaries,
                                r("SET_MATCH_LIST_RESPONSE", {
                                    matches: s,
                                    hots: u,
                                    ordinaries: l
                                }),
                                n.abrupt("return");
                            case 11:
                                return p = _(i.matches, i.matchStatus).filter((function(t) {
                                    return f(i.selectedGameType, t.status)
                                }
                                )),
                                d = Object(a.a)(p.map((function(t) {
                                    return {
                                        matchId: t.matchId,
                                        gameType: t.gameType
                                    }
                                }
                                ))),
                                n.next = 15,
                                Object(c.i)(d);
                            case 15:
                                (h = n.sent).data && h.data.length > 0 && r("UPDATE_MATCH_LIST", h.data);
                            case 17:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            initData: function(t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, i, o, s, u, l, f;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.commit,
                                i = t.state,
                                r("RESET_STATE"),
                                r("SET_LOADING", !0),
                                n.next = 5,
                                v(i.selectedGameType).then((function(t) {
                                    r("SET_TOTAL_SIZE", (null == t ? void 0 : t.data) || [0, 0, 0])
                                }
                                ));
                            case 5:
                                return n.next = 7,
                                g(i.selectedGameType, i.timeType, e);
                            case 7:
                                return o = n.sent,
                                s = o.matches,
                                u = o.hots,
                                l = o.ordinaries,
                                n.next = 13,
                                Object(c.e)(i.selectedGameType).then((function(t) {
                                    var e, n;
                                    return (null == t || null === (e = t.data) || void 0 === e || null === (n = e[0]) || void 0 === n ? void 0 : n.lotteryList) || []
                                }
                                ));
                            case 13:
                                f = n.sent,
                                r("SET_MATCH_LIST_RESPONSE", {
                                    matches: s,
                                    hots: u,
                                    ordinaries: l
                                }),
                                r("SET_LEAGUE_IDS", [].concat(Object(a.a)(null == u ? void 0 : u.map((function(t) {
                                    return t.leagueId
                                }
                                ))), Object(a.a)(null == l ? void 0 : l.map((function(t) {
                                    return t.leagueId
                                }
                                ))))),
                                r("SET_LOTTERY_LIST", f),
                                r("SET_LOADING", !1);
                            case 18:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            refreshData: function(t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, i, o, s, u, l, f;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.commit,
                                i = t.state,
                                n.next = 3,
                                v(i.selectedGameType).then((function(t) {
                                    r("SET_TOTAL_SIZE", (null == t ? void 0 : t.data) || [0, 0, 0])
                                }
                                ));
                            case 3:
                                return n.next = 5,
                                g(i.selectedGameType, i.timeType, e);
                            case 5:
                                return o = n.sent,
                                s = o.matches,
                                u = o.hots,
                                l = o.ordinaries,
                                n.next = 11,
                                Object(c.e)(i.selectedGameType).then((function(t) {
                                    var e, n;
                                    return (null == t || null === (e = t.data) || void 0 === e || null === (n = e[0]) || void 0 === n ? void 0 : n.lotteryList) || []
                                }
                                ));
                            case 11:
                                f = n.sent,
                                r("SET_MATCH_LIST_RESPONSE", {
                                    matches: s,
                                    hots: u,
                                    ordinaries: l
                                }),
                                r("SET_LEAGUE_IDS", [].concat(Object(a.a)(null == u ? void 0 : u.map((function(t) {
                                    return t.leagueId
                                }
                                ))), Object(a.a)(null == l ? void 0 : l.map((function(t) {
                                    return t.leagueId
                                }
                                ))))),
                                r("SET_LOTTERY_LIST", f);
                            case 15:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            queryData: function(t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, i, o, s, u, l, f, p, d, h, m;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.commit,
                                i = t.state,
                                o = e.gameType,
                                s = e.timeType,
                                u = e.userToken,
                                r("RESET_STATE"),
                                r("SET_LOADING", !0),
                                l = {
                                    gameType: i.selectedGameType,
                                    timeType: i.timeType
                                },
                                void 0 !== o && (r("SET_SELECTED_GAME_TYPE", o),
                                l.gameType = o),
                                void 0 !== s && (r("SET_TIME_TYPE", s),
                                l.timeType = s),
                                n.next = 9,
                                v(l.gameType);
                            case 9:
                                return n.next = 11,
                                g(l.gameType, l.timeType, u);
                            case 11:
                                return f = n.sent,
                                p = f.matches,
                                d = f.hots,
                                h = f.ordinaries,
                                n.next = 17,
                                Object(c.e)(l.gameType).then((function(t) {
                                    var e, n;
                                    return (null == t || null === (e = t.data) || void 0 === e || null === (n = e[0]) || void 0 === n ? void 0 : n.lotteryList) || []
                                }
                                ));
                            case 17:
                                m = n.sent,
                                r("SET_MATCH_LIST_RESPONSE", {
                                    matches: p,
                                    hots: d,
                                    ordinaries: h
                                }),
                                r("SET_LEAGUE_IDS", [].concat(Object(a.a)(null == d ? void 0 : d.map((function(t) {
                                    return t.leagueId
                                }
                                ))), Object(a.a)(null == h ? void 0 : h.map((function(t) {
                                    return t.leagueId
                                }
                                ))))),
                                r("SET_LOTTERY_LIST", m),
                                r("SET_LOADING", !1);
                            case 22:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            setEnableSelectObj: function(t, e) {
                var n = t.commit
                  , r = (t.state,
                e.leagueIds)
                  , a = void 0 === r ? [] : r
                  , i = e.lotteryType
                  , o = void 0 === i ? 0 : i;
                n("SET_LEAGUE_IDS", a),
                n("SET_LOTTERY_TYPE", o)
            }
        }
          , T = {
            loading: function(t) {
                return t.loading
            },
            selectedGameType: function(t) {
                return t.selectedGameType
            },
            timeType: function(t) {
                return t.timeType
            },
            matchStatus: function(t) {
                return t.matchStatus
            },
            lotteryList: function(t) {
                return t.lotteryList
            },
            leagueIds: function(t) {
                return t.leagueIds
            },
            ordinaries: function(t) {
                return t.ordinaries
            },
            hots: function(t) {
                return t.hots
            },
            lotteryType: function(t) {
                return t.lotteryType
            },
            waitMatches: function(t) {
                return b(_(t.matches, t.matchStatus), t.leagueIds).filter((function(t) {
                    return e = t.gameType,
                    n = t.status,
                    !f(e, n) && !p(e, n);
                    var e, n
                }
                ))
            },
            runningMatches: function(t) {
                return b(_(t.matches, t.matchStatus), t.leagueIds).filter((function(t) {
                    return f(t.gameType, t.status)
                }
                ))
            },
            finishMatches: function(t) {
                return b(_(t.matches, t.matchStatus), t.leagueIds).filter((function(t) {
                    return p(t.gameType, t.status)
                }
                ))
            },
            totalSize: function(t) {
                var e = Object(a.a)(t.totalSize)
                  , n = b(_(t.matches, t.matchStatus), t.leagueIds);
                return e[t.timeType] = n.length,
                e
            }
        }
    },
    427: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return c
        }
        )),
        n.d(e, "getters", (function() {
            return s
        }
        )),
        n.d(e, "mutations", (function() {
            return u
        }
        )),
        n.d(e, "actions", (function() {
            return l
        }
        ));
        n(28);
        var r = n(6)
          , a = (n(22),
        n(24),
        n(192),
        n(0))
          , i = n(59)
          , o = n(193)
          , c = function() {
            return {
                match: {},
                anchorId: 0,
                league: {},
                bets: {},
                liveData: {},
                matchTech: {},
                gameType: 0,
                query: {
                    matchId: 0,
                    gameType: 0
                },
                battleDetail: {
                    bet: {},
                    battles: []
                },
                matchTrend: {
                    trendList: [],
                    timeline: []
                },
                chatTips: "点击参与聊天，主播水友等您来撩！",
                unChatTips: "扫码登录聊天，主播水友等您来撩！"
            }
        }
          , s = {
            match: function(t) {
                return t.match
            },
            league: function(t) {
                return t.league
            },
            baseQuery: function(t) {
                return t.query
            },
            hasBets: function(t) {
                return t.bets && t.bets.length > 0
            },
            bets: function(t) {
                return t.bets
            },
            liveData: function(t) {
                return t.liveData
            },
            matchTech: function(t) {
                return t.matchTech
            },
            matchVideos: function(t, e) {
                var n = t.match.video;
                return n && n.liveVideos && !e.isLiveMatch && (n.liveVideos = []),
                n
            },
            chatTips: function(t) {
                return t.chatTips
            },
            unChatTips: function(t) {
                return t.unChatTips
            },
            gameType: function(t) {
                return t.gameType
            },
            isFootBall: function(t) {
                return t.gameType === a.e.GT_FOOTBALL
            },
            isBasketball: function(t) {
                return t.gameType === a.e.GT_BASKETBALL
            },
            isKog: function(t) {
                return t.gameType === a.e.GT_KOG
            },
            isCsgo: function(t) {
                return t.gameType === a.e.GT_CSGO
            },
            isSportGame: function(t) {
                return [a.e.GT_FOOTBALL, a.e.GT_BASKETBALL].includes(t.gameType)
            },
            isMobGame: function(t) {
                return [a.e.GT_KOG, a.e.GT_LOL, a.e.GT_DOTA].includes(t.gameType)
            },
            isOverTime: function(t) {
                return t.match.status === a.c.OVERTIME
            },
            isWaitMatch: function(t) {
                return t.match.status === a.f.WAIT
            },
            isLiveMatch: function(t) {
                return Object(o.b)(t.gameType, t.match.status, !0)
            },
            battleDetail: function(t) {
                return t.battleDetail
            },
            battleBet: function(t) {
                return t.battleDetail.bet
            },
            battles: function(t) {
                return t.battleDetail.battles
            },
            lastBattle: function(t, e) {
                var n = e.battles && e.battles.length;
                return e.battles && n > 0 && e.battles[n - 1]
            },
            awayLogo: function(t) {
                var e, n;
                return null === (e = t.match) || void 0 === e || null === (n = e.away) || void 0 === n ? void 0 : n.logo
            },
            homeLogo: function(t) {
                var e, n;
                return null === (e = t.match) || void 0 === e || null === (n = e.home) || void 0 === n ? void 0 : n.logo
            },
            awayName: function(t) {
                var e, n, r, a;
                return (null === (e = t.match) || void 0 === e || null === (n = e.away) || void 0 === n ? void 0 : n.teamName) || (null === (r = t.match) || void 0 === r || null === (a = r.away) || void 0 === a ? void 0 : a.teamNameZh)
            },
            homeName: function(t) {
                var e, n, r;
                return (null === (e = t.match) || void 0 === e ? void 0 : e.home.teamName) || (null === (n = t.match) || void 0 === n || null === (r = n.home) || void 0 === r ? void 0 : r.teamNameZh)
            },
            homeInfo: function(t, e) {
                return {
                    name: e.homeName,
                    logo: e.homeLogo
                }
            },
            awayInfo: function(t, e) {
                return {
                    name: e.awayName,
                    logo: e.awayLogo
                }
            },
            isLineUp: function(t) {
                var e;
                return null === (e = t.match) || void 0 === e ? void 0 : e.lineUp
            },
            matchTrend: function(t) {
                return t.matchTrend
            }
        }
          , u = {
            SET_MATCH: function(t, e) {
                t.match = e
            },
            SET_GAME_TYPE: function(t, e) {
                t.gameType = e
            },
            SET_QUERY: function(t, e) {
                t.query = e,
                t.gameType = e.gameType
            },
            SET_LIVE_DATA: function(t, e) {
                t.liveData = e
            },
            SET_MATCH_DETAIL: function(t, e) {
                var n = e.match
                  , r = e.bets
                  , a = e.live
                  , i = e.chatTips
                  , o = e.unChatTips;
                t.match = n,
                t.liveData = a,
                t.bets = r,
                t.league = n && n.league,
                i && (t.chatTips = i),
                o && (t.unChatTips = o)
            },
            SET_MATCH_TECH: function(t, e) {
                t.matchTech = e
            },
            SET_BATTLE_DETAIL: function(t, e) {
                t.battleDetail = e
            },
            SET_MATCH_BETS: function(t, e) {
                t.bets = e
            },
            SET_MATCH_TREND: function(t, e) {
                t.matchTrend = e
            },
            SET_MATCH_TREND_EVENT: function(t, e) {
                t.matchTrend.trendList = e.trendList,
                t.matchTrend.timeline = e.timeline
            }
        }
          , l = {
            updateMatchDetail: function(t, e) {
                (0,
                t.commit)("SET_MATCH_DETAIL", e)
            },
            updateMatch: function(t, e) {
                (0,
                t.commit)("SET_MATCH", e)
            },
            updateLiveData: function(t, e) {
                (0,
                t.commit)("SET_LIVE_DATA", e)
            },
            updateBattleDetail: function(t, e) {
                (0,
                t.commit)("SET_BATTLE_DETAIL", e)
            },
            updateMatchTech: function(t, e) {
                (0,
                t.commit)("SET_MATCH_TECH", e)
            },
            refreshMatchDetail: function(t, e) {
                var n = t.commit;
                Object(i.p)(e.param, e.token).then((function(t) {
                    n("SET_MATCH_DETAIL", t)
                }
                ))
            },
            loadMatchTrend: function(t) {
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n, r, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.state,
                                r = t.commit,
                                e.next = 3,
                                Object(i.w)(n.query);
                            case 3:
                                a = e.sent,
                                r("SET_MATCH_TREND", a.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
        }
    },
    428: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return a
        }
        )),
        n.d(e, "mutations", (function() {
            return i
        }
        )),
        n.d(e, "getters", (function() {
            return o
        }
        )),
        n.d(e, "actions", (function() {
            return c
        }
        ));
        n(22),
        n(24);
        var r = n(0)
          , a = function() {
            return {
                gameType: r.e.GT_FOOTBALL
            }
        }
          , i = {
            SET_GAME_TYPE: function(t, e) {
                t.gameType = e
            }
        }
          , o = {
            gameType: function(t) {
                return t.gameType
            },
            isFootBall: function(t) {
                return t.gameType === r.e.GT_FOOTBALL
            },
            isBasketball: function(t) {
                return t.gameType === r.e.GT_BASKETBALL
            },
            isSportGame: function(t) {
                return [r.e.GT_FOOTBALL, r.e.GT_BASKETBALL].includes(t.gameType)
            }
        }
          , c = {}
    },
    429: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return i
        }
        )),
        n.d(e, "getters", (function() {
            return o
        }
        )),
        n.d(e, "mutations", (function() {
            return c
        }
        )),
        n.d(e, "actions", (function() {
            return s
        }
        ));
        n(22),
        n(24);
        var r = n(59)
          , a = [{
            title: "整体概览",
            value: 1
        }, {
            title: "进球分析",
            value: 2
        }, {
            title: "历史交锋",
            value: 4
        }, {
            title: "近期战绩",
            value: 5
        }, {
            title: "联赛表现",
            value: 3
        }, {
            title: "未来赛程",
            value: 6
        }, {
            title: "总积分",
            value: 7
        }]
          , i = function() {
            return {
                param: {
                    year: 5,
                    number: 20
                },
                analysisData: {
                    tableList: [1, 2, 4, 5, 3, 6]
                }
            }
        }
          , o = {
            tableList: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.tableList
            },
            tableListText: function(t, e) {
                return a.filter((function(t) {
                    var n;
                    return null === (n = e.tableList) || void 0 === n ? void 0 : n.includes(t.value)
                }
                ))
            },
            overview: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.overview
            },
            goalStat: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.goalStat
            },
            historyMatch: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.historyMatch
            },
            latelyMatch: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.latelyMatch
            },
            integralStat: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.integralStat
            },
            futureMatch: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.futureMatch
            },
            leagueStat: function(t) {
                var e;
                return null === (e = t.analysisData) || void 0 === e ? void 0 : e.leagueStat
            }
        }
          , c = {
            SET_ANALYTICS_DATA: function(t, e) {
                t.analysisData = e
            }
        }
          , s = {
            initSportAnalysisData: function(t) {
                var e = t.rootGetters
                  , n = t.commit
                  , a = t.state
                  , i = Object.assign({}, e["match/baseQuery"], a.param);
                Object(r.u)(i).then((function(t) {
                    n("SET_ANALYTICS_DATA", t.data)
                }
                ))
            }
        }
    },
    43: function(t, e, n) {
        "use strict";
        n.d(e, "h", (function() {
            return a
        }
        )),
        n.d(e, "j", (function() {
            return i
        }
        )),
        n.d(e, "i", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "g", (function() {
            return s
        }
        )),
        n.d(e, "b", (function() {
            return u
        }
        )),
        n.d(e, "a", (function() {
            return l
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        )),
        n.d(e, "e", (function() {
            return p
        }
        )),
        n.d(e, "f", (function() {
            return d
        }
        ));
        var r = n(3);
        function a(t) {
            return r.a.post("/league/leagueStageList", t).then((function(t) {
                return t.data
            }
            ))
        }
        function i(t) {
            return r.a.post("/league/leagueStatePvpList", t).then((function(t) {
                return t.data
            }
            ))
        }
        function o(t) {
            return r.a.post("/league/leagueStageRankList", t).then((function(t) {
                return t.data
            }
            ))
        }
        function c(t) {
            return r.a.$getApi("LeagueLeagueCategory", "tournament/".concat(t, "/category")).then((function(t) {
                return t.data
            }
            ))
        }
        function s(t) {
            var e = t.gameType
              , n = t.categoryId
              , a = t.pageIndex
              , i = void 0 === a ? 0 : a
              , o = t.pageSize
              , c = void 0 === o ? 20 : o;
            return r.a.$getApi("LeagueMatchListByCategory", "tournament/".concat(e, "/category/").concat(n, "/list"), {
                page: i,
                size: c
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function u(t) {
            return r.a.$getApi("LeagueHotMatchList", "tournament/".concat(t, "/hot/list")).then((function(t) {
                return t.data
            }
            ))
        }
        function l(t, e) {
            var n = {
                gameType: t,
                focusId: e,
                type: 4
            };
            return r.a.$postApi("FocusLeagueAction", "user/focus/match", n)
        }
        function f(t, e) {
            return r.a.$getApi("LeagueHotMatchList", "tournament/".concat(t, "/detail/").concat(e)).then((function(t) {
                return t.data
            }
            ))
        }
        function p(t) {
            var e = t.gameType
              , n = t.tournamentId
              , a = t.seasonId
              , i = void 0 === a ? 0 : a;
            return r.a.$getApi("LeagueSeasonMatchList", "tournament/".concat(e, "/match/").concat(n, "/season/").concat(i, "/list")).then((function(t) {
                return t.data
            }
            ))
        }
        function d(t) {
            var e = t.gameType;
            return r.a.$getApi("LeagueSeasonMatchList", "tournament/".concat(e, "/integral/list"), t).then((function(t) {
                return t.data
            }
            ))
        }
    },
    430: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return c
        }
        )),
        n.d(e, "getters", (function() {
            return s
        }
        )),
        n.d(e, "mutations", (function() {
            return u
        }
        )),
        n.d(e, "actions", (function() {
            return l
        }
        ));
        n(28);
        var r = n(6)
          , a = n(49)
          , i = n(122)
          , o = n(66)
          , c = function() {
            return {
                userInfo: {
                    id: "-1"
                },
                accessToken: null,
                uuIdToken: ""
            }
        }
          , s = {
            currentUser: function(t) {
                return t.userInfo || {}
            },
            userAccessToken: function(t) {
                return t.accessToken
            },
            isLogined: function(t) {
                return !!t.accessToken
            },
            userId: function(t) {
                return t.userInfo && t.userInfo.id || ""
            },
            uuIdToken: function(t) {
                return t.uuIdToken
            }
        }
          , u = {
            UPDATE_USER: function(t, e) {
                var n = e.user
                  , r = void 0 === n ? {} : n
                  , a = e.accessToken
                  , i = void 0 === a ? "" : a;
                t.userInfo = r,
                t.accessToken = i
            },
            UPDATE_USER_INFO: function(t, e) {
                t.userInfo = e
            },
            UPDATE_USER_TOKEN: function(t, e) {
                t.accessToken = e
            },
            UPDATE_UUID_TOKEN: function(t, e) {
                t.uuIdToken = e
            }
        }
          , l = {
            fetchUserDetail: function(t) {
                var e = this;
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, a;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.commit,
                                n.next = 3,
                                e.$axios.$post("/user/getUserInfo");
                            case 3:
                                (a = n.sent) && a.nickname ? r("UPDATE_USER_INFO", a) : r("UPDATE_USER_INFO", {});
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            restoreUser: function(t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r, o, c, s, u, l;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (r = t.commit,
                                o = t.dispatch,
                                (c = Object(i.a)(e.headers.cookie)).jwt) {
                                    n.next = 5;
                                    break
                                }
                                return r("UPDATE_USER", {}),
                                n.abrupt("return");
                            case 5:
                                try {
                                    (s = Object(a.a)(c.jwt)) && s.accessToken && (u = s.nickname,
                                    l = s.avatar,
                                    r("UPDATE_USER", {
                                        user: {
                                            nickname: u,
                                            avatar: l
                                        },
                                        accessToken: s.accessToken
                                    }),
                                    o("fetchUserDetail"))
                                } catch (t) {
                                    r("UPDATE_USER", {})
                                }
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            restoreUUID: function(t) {
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                n = t.commit,
                                t.state.uuIdToken || n("UPDATE_UUID_TOKEN", Object(o.a)(16, 16));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
        }
    },
    439: function(t, e, n) {
        "use strict";
        var r = n(138);
        n.n(r).a
    },
    440: function(t, e, n) {
        "use strict";
        var r = n(139);
        n.n(r).a
    },
    441: function(t, e, n) {
        "use strict";
        var r = n(140);
        n.n(r).a
    },
    442: function(t, e, n) {
        "use strict";
        var r = n(141);
        n.n(r).a
    },
    443: function(t, e, n) {
        "use strict";
        var r = n(142);
        n.n(r).a
    },
    445: function(t, e, n) {
        "use strict";
        var r = n(143);
        n.n(r).a
    },
    45: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return Ie
        }
        )),
        n.d(e, "a", (function() {
            return N
        }
        ));
        n(28),
        n(31),
        n(19),
        n(10),
        n(8),
        n(14);
        var r = n(6)
          , a = n(1)
          , i = (n(29),
        n(4))
          , o = n(288)
          , c = n(189)
          , s = n.n(c)
          , u = n(79)
          , l = n.n(u)
          , f = n(98)
          , p = n(5)
          , d = function() {
            return Object(p.m)(Promise.all([n.e(1), n.e(9)]).then(n.bind(null, 1243)))
        }
          , h = function() {
            return Object(p.m)(n.e(12).then(n.bind(null, 1244)))
        }
          , m = function() {
            return Object(p.m)(n.e(13).then(n.bind(null, 1245)))
        }
          , g = function() {
            return Object(p.m)(n.e(14).then(n.bind(null, 1246)))
        }
          , v = function() {
            return Object(p.m)(n.e(17).then(n.bind(null, 1241)))
        }
          , _ = function() {
            return Object(p.m)(n.e(20).then(n.bind(null, 1236)))
        }
          , b = function() {
            return Object(p.m)(Promise.all([n.e(6), n.e(21)]).then(n.bind(null, 1238)))
        }
          , y = function() {
            return Object(p.m)(Promise.all([n.e(6), n.e(24)]).then(n.bind(null, 1239)))
        }
          , T = function() {
            return Object(p.m)(Promise.all([n.e(3), n.e(26)]).then(n.bind(null, 1249)))
        }
          , O = function() {
            return Object(p.m)(Promise.all([n.e(1), n.e(16)]).then(n.bind(null, 1252)))
        }
          , w = function() {
            return Object(p.m)(n.e(10).then(n.bind(null, 1235)))
        }
          , E = function() {
            return Object(p.m)(Promise.all([n.e(0), n.e(2), n.e(3), n.e(11)]).then(n.bind(null, 1233)))
        }
          , S = function() {
            return Object(p.m)(Promise.all([n.e(31), n.e(0), n.e(2), n.e(22)]).then(n.bind(null, 1240)))
        }
          , C = function() {
            return Object(p.m)(n.e(27).then(n.bind(null, 1234)))
        }
          , L = function() {}
          , j = f.a.prototype.push;
        f.a.prototype.push = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return j.call(this, t, e, n)
        }
        ,
        i.default.use(f.a);
        var A = {
            mode: "history",
            base: decodeURI("/"),
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, n) {
                return {
                    x: 0,
                    y: 0
                }
            },
            routes: [{
                path: "/article",
                component: d,
                name: "article"
            }, {
                path: "/event",
                component: h,
                name: "event"
            }, {
                path: "/expert",
                component: m,
                name: "expert"
            }, {
                path: "/huyalol",
                component: g,
                name: "huyalol"
            }, {
                path: "/information",
                component: v,
                name: "information"
            }, {
                path: "/inset",
                component: function() {
                    return Object(p.m)(n.e(18).then(n.bind(null, 1247)))
                },
                name: "inset"
            }, {
                path: "/league",
                component: _,
                name: "league"
            }, {
                path: "/live",
                component: b,
                name: "live"
            }, {
                path: "/old",
                component: function() {
                    return Object(p.m)(Promise.all([n.e(4), n.e(23)]).then(n.bind(null, 1242)))
                },
                name: "old"
            }, {
                path: "/schedule",
                component: y,
                name: "schedule"
            }, {
                path: "/score",
                component: function() {
                    return Object(p.m)(Promise.all([n.e(5), n.e(25)]).then(n.bind(null, 1248)))
                },
                name: "score"
            }, {
                path: "/statistics",
                component: T,
                name: "statistics"
            }, {
                path: "/test",
                component: function() {
                    return Object(p.m)(Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 1250)))
                },
                name: "test"
            }, {
                path: "/inset/share",
                component: function() {
                    return Object(p.m)(Promise.all([n.e(5), n.e(19)]).then(n.bind(null, 1251)))
                },
                name: "inset-share"
            }, {
                path: "/information/detail/:id?",
                component: O,
                name: "information-detail-id"
            }, {
                path: "/detail/league/:gameType?/:id?",
                component: w,
                name: "detail-league-gameType-id"
            }, {
                path: "/detail/match/:gameType?/:id?",
                component: E,
                name: "detail-match-gameType-id"
            }, {
                path: "/match/:gameType?/:id?",
                component: S,
                name: "match-gameType-id"
            }, {
                path: "/team/:gameStr?/:id?",
                component: C,
                name: "team-gameStr-id"
            }, {
                path: "/",
                component: function() {
                    return Object(p.m)(Promise.all([n.e(4), n.e(15)]).then(n.bind(null, 1237)))
                },
                name: "index"
            }, {
                path: "/score.html",
                component: y,
                name: "score"
            }, {
                path: "/score-:gameStr.html",
                component: y,
                name: "score-gameType"
            }, {
                path: "/live.html",
                component: b,
                name: "live"
            }, {
                path: "/league.html",
                component: _,
                name: "league-gameType"
            }, {
                path: "/league-:gameStr.html",
                component: _,
                name: "league-gameTypeStr"
            }, {
                path: "/league-:gameStr-:statusStr.html",
                component: _,
                name: "league-gameTypeStr-statusStr"
            }, {
                path: "/league/:gameType-:id.html",
                component: w,
                name: "league-detail-gameType-id"
            }, {
                path: "/statistics.html",
                component: T,
                name: "statistics"
            }, {
                path: "/statistics-:gameStr.html",
                component: T,
                name: "statistics-gameType"
            }, {
                path: "/team/:gameStr-:id.html",
                component: C,
                name: "teamStatistics-gameStr-id"
            }, {
                path: "/information.html",
                component: v,
                name: "information"
            }, {
                path: "/information/dota.html",
                component: v,
                name: "information-dota"
            }, {
                path: "/information/csgo.html",
                component: v,
                name: "information-csgo"
            }, {
                path: "/information/kog.html",
                component: v,
                name: "information-kog"
            }, {
                path: "/information/lol.html",
                component: v,
                name: "information-lol"
            }, {
                path: "/information/others.html",
                component: v,
                name: "information-others"
            }, {
                path: "/information/:id.html",
                component: O,
                name: "information-detail"
            }, {
                path: "/tipsters.html",
                component: m,
                name: "expert"
            }, {
                path: "/score/:gameType-:leagueId-:id.html",
                component: E,
                name: "match-detail"
            }, {
                path: "/:gameType-:id.html",
                component: S,
                name: "sport-match-detail"
            }, {
                path: "/score/:gameType-:id.html",
                component: S,
                name: "sport-score-match-detail"
            }, {
                path: "/event.html",
                component: h,
                name: "app-event"
            }, {
                path: "/appxxl",
                component: h,
                name: "appxxl-page"
            }, {
                path: "/appxxl.html",
                component: h,
                name: "appxxl-html"
            }, {
                path: "/qd1.html",
                component: h,
                name: "qd1-html"
            }, {
                path: "/qd2.html",
                component: h,
                name: "qd2-html"
            }, {
                path: "/qd3.html",
                component: h,
                name: "qd3-html"
            }, {
                path: "/huyadota",
                component: g,
                name: "huyadota"
            }, {
                path: "/article/userRule.html",
                component: d,
                name: "userRule"
            }, {
                path: "/article/privacy.html",
                component: d,
                name: "privateHtml"
            }, {
                path: "/article/payRule.html",
                component: d,
                name: "payRule"
            }, {
                path: "/article/cooperationRule.html",
                component: d,
                name: "cooperationRule"
            }, {
                path: "/article/serviceRule.html",
                component: d,
                name: "serviceRule"
            }, {
                path: "/article/:id.html",
                component: d,
                name: "serviceRouteId"
            }],
            fallback: !1
        };
        function P() {
            return new f.a(A)
        }
        var x = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(t, e) {
                var n = e.parent
                  , r = e.data
                  , a = e.props
                  , i = n.$createElement;
                r.nuxtChild = !0;
                for (var o = n, c = n.$nuxt.nuxt.transitions, s = n.$nuxt.nuxt.defaultTransition, u = 0; n; )
                    n.$vnode && n.$vnode.data.nuxtChild && u++,
                    n = n.$parent;
                r.nuxtChildDepth = u;
                var l = c[u] || s
                  , f = {};
                I.forEach((function(t) {
                    void 0 !== l[t] && (f[t] = l[t])
                }
                ));
                var p = {};
                R.forEach((function(t) {
                    "function" == typeof l[t] && (p[t] = l[t].bind(o))
                }
                ));
                var d = p.beforeEnter;
                if (p.beforeEnter = function(t) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    d)
                        return d.call(o, t)
                }
                ,
                !1 === l.css) {
                    var h = p.leave;
                    (!h || h.length < 2) && (p.leave = function(t, e) {
                        h && h.call(o, t),
                        o.$nextTick(e)
                    }
                    )
                }
                var m = i("routerView", r);
                return a.keepAlive && (m = i("keep-alive", {
                    props: a.keepAliveProps
                }, [m])),
                i("transition", {
                    props: f,
                    on: p
                }, [m])
            }
        }
          , I = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , R = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , k = {
            props: ["error"],
            name: "error",
            data: function() {
                return {
                    refreshCount: 0,
                    timer: null,
                    errorTimer: null
                }
            },
            computed: {
                isServerErr: function() {
                    return 500 === this.error.statusCode
                },
                getImg: function() {
                    return this.isServerErr,
                    "error_001.png"
                },
                getTitle: function() {
                    return this.isServerErr ? "下载APP看更多赛事数据" : "sorry，你访问的页面飞走了！"
                }
            },
            mounted: function() {
                this.isServerErr || (this.countDown(),
                this.initInterval())
            },
            methods: {
                countDown: function() {
                    var t = this;
                    this.refreshCount = 3,
                    this.timer = setInterval((function() {
                        t.refreshCount--,
                        t.refreshCount <= 0 && (clearInterval(t.timer),
                        t.goHome())
                    }
                    ), 1e3)
                },
                initInterval: function() {
                    var t = this;
                    this.errorTimer = setInterval((function() {
                        !t.$route.name && t.refreshCount <= 0 && (clearInterval(t.errorTimer),
                        t.goHome())
                    }
                    ), 1e3)
                },
                goHome: function() {
                    this.$router.push("/")
                },
                clickDownload: function() {
                    window.open("https://at.umtrack.com/onelink/eO9X1n")
                }
            },
            beforeDestroy: function() {
                this.timer && clearInterval(this.timer),
                this.errorTimer && clearInterval(this.errorTimer)
            }
        }
          , D = (n(387),
        n(7))
          , N = Object(D.a)(k, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "err-wrapper"
            }, [n("div", {
                staticClass: "err-content"
            }, [n("img", {
                staticClass: "err-content-img",
                attrs: {
                    src: t.iconImg(t.getImg),
                    alt: "error icon"
                }
            }), n("div", {
                staticClass: "err-content-panel"
            }, [n("h2", [t._v(t._s(t.getTitle))]), t.isServerErr ? n("button", {
                staticClass: "jump-home download-btn",
                on: {
                    click: t.clickDownload
                }
            }, [t._v("点击下载")]) : n("button", {
                staticClass: "jump-home",
                on: {
                    click: function(e) {
                        return t.goHome()
                    }
                }
            }, [t._v(t._s(t.refreshCount) + "s 返回首页")])])])])
        }
        ), [], !1, null, "e05f2cd6", null).exports
          , B = (n(58),
        n(99),
        n(83))
          , G = {
            name: "Nuxt",
            components: {
                NuxtChild: x,
                NuxtError: N
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(t) {
                this.displayingNuxtError && (this.errorFromNuxtError = t,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(p.c)(this.$route.matched[0].path)(this.$route.params);
                    var t = Object(B.a)(this.$route.matched, 1)[0];
                    if (!t)
                        return this.$route.path;
                    var e = t.components.default;
                    if (e && e.options) {
                        var n = e.options;
                        if (n.key)
                            return "function" == typeof n.key ? n.key(this.$route) : n.key
                    }
                    return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                i.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(t) {
                var e = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return e.errorFromNuxtError = !1
                }
                )),
                t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return e.displayingNuxtError = !1
                }
                )),
                t(N, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        }
          , M = (n(74),
        n(73),
        n(69),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    this._timer = null
                },
                start: function() {
                    var t = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return t.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(t) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(t))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(t) {
                    return this.percent = Math.min(100, Math.floor(this.percent + t)),
                    this
                },
                decrease: function(t) {
                    return this.percent = Math.max(0, Math.floor(this.percent - t)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var t = this;
                    return this.clear(),
                    setTimeout((function() {
                        t.show = !1,
                        t.$nextTick((function() {
                            t.percent = 0,
                            t.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(t) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var t = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1,
                        t.reversed = !t.reversed))
                    }
                    ), 100)
                }
            },
            render: function(t) {
                var e = t(!1);
                return this.show && (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                e
            }
        })
          , $ = (n(388),
        Object(D.a)(M, void 0, void 0, !1, null, null, null).exports)
          , U = (n(389),
        n(390),
        n(77))
          , H = n(78)
          , F = n(20)
          , q = n(76);
        function Y(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var K = {
            components: {
                HgNavbar: U.a,
                HgFooter: H.a
            },
            data: function() {
                return {
                    redirectTime: 2e3,
                    _pageTimer: null,
                    isShowGoTop: !1,
                    isShowBanner: !0,
                    platformList: [{
                        title: "知乎",
                        imgUrl: "/zhihu_icon.png",
                        link: "https://www.zhihu.com/people/fnscore"
                    }, {
                        title: "B站",
                        imgUrl: "/bilibili_icon.png",
                        link: "https://space.bilibili.com/1815303951"
                    }, {
                        title: "头条",
                        imgUrl: "/toutiao_icon.png",
                        link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAem8NlAOcd_I-T2r5gsj9GBH20MzrYneCb3vdEiw4RLZ92EljHhMXTD_KdnnNH-P5/"
                    }],
                    weiBoList: [{
                        title: "蜂鸟电竞APP",
                        link: "https://weibo.com/7491474179"
                    }, {
                        title: "蜂鸟电竞LOL",
                        link: "https://weibo.com/7491410918"
                    }, {
                        title: "蜂鸟电竞王者荣耀",
                        link: "https://weibo.com/fn007"
                    }]
                }
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, Object(F.c)("common", ["isSouGoAdHost", "isShenMaAdHost"])),
            mounted: function() {
                window.addEventListener("scroll", this.scrollHandle, !1),
                this.initBanner()
            },
            beforeDestroy: function() {
                this._pageTimer && clearInterval(this._pageTimer),
                window.removeEventListener("scroll", this.scrollHandle, !1)
            },
            methods: {
                initBanner: function() {
                    var t = this.$route.query
                      , e = t.huyaLink
                      , n = t.iframeTag;
                    (e && "true" === e || n && "true" === n) && (this.isShowBanner = !1)
                },
                handleRedirectMain: function() {
                    var t = window.location.pathname
                      , e = "https://www.fnscore.cn";
                    "/" !== t && (e = "".concat(e).concat(t)),
                    setTimeout((function() {
                        window.location.href = "".concat(e)
                    }
                    ), this.redirectTime)
                },
                redirectPageTimer: function() {
                    var t = this;
                    this._pageTimer = setInterval((function() {
                        t.handleRedirectMain()
                    }
                    ), 1e4)
                },
                scrollHandle: function(t) {
                    var e = t.srcElement.scrollingElement.scrollTop;
                    this.isShowGoTop = e >= 300
                },
                goTop: function() {
                    Object(q.a)(".body", {
                        duration: 800,
                        offset: 0
                    })
                }
            }
        }
          , z = (n(411),
        n(412),
        Object(D.a)(K, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "body"
            }, [e("hg-navbar"), e("nuxt", {
                staticClass: "default-continer"
            }), e("hg-footer"), this.isShowBanner ? e("div", {
                staticClass: "app-download"
            }) : this._e()], 1)
        }
        ), [], !1, null, "66f17112", null).exports);
        function W(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var Q = {
            components: {
                HgNavbar: U.a,
                HgFooter: H.a
            },
            data: function() {
                return {
                    redirectTime: 2e3,
                    _pageTimer: null,
                    isShowGoTop: !1,
                    isShowBanner: !0,
                    isShowApp: !1,
                    isShowWeiBo: !1,
                    platformList: [{
                        title: "知乎",
                        imgUrl: "/zhihu_icon.png",
                        link: "https://www.zhihu.com/people/fnscore"
                    }, {
                        title: "B站",
                        imgUrl: "/bilibili_icon.png",
                        link: "https://space.bilibili.com/1815303951"
                    }, {
                        title: "头条",
                        imgUrl: "/toutiao_icon.png",
                        link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAem8NlAOcd_I-T2r5gsj9GBH20MzrYneCb3vdEiw4RLZ92EljHhMXTD_KdnnNH-P5/"
                    }],
                    weiBoList: [{
                        title: "蜂鸟电竞APP",
                        link: "https://weibo.com/7491474179"
                    }, {
                        title: "蜂鸟电竞LOL",
                        link: "https://weibo.com/7491410918"
                    }, {
                        title: "蜂鸟电竞王者荣耀",
                        link: "https://weibo.com/fn007"
                    }]
                }
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? W(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, Object(F.c)("common", ["isSouGoAdHost", "isShenMaAdHost"])),
            mounted: function() {
                window.addEventListener("scroll", this.scrollHandle, !1),
                this.initBanner()
            },
            beforeDestroy: function() {
                this._pageTimer && clearInterval(this._pageTimer),
                window.removeEventListener("scroll", this.scrollHandle, !1)
            },
            methods: {
                initBanner: function() {
                    var t = this.$route.query
                      , e = t.huyaLink
                      , n = t.iframeTag;
                    (e && "true" === e || n && "true" === n) && (this.isShowBanner = !1)
                },
                handleRedirectMain: function() {
                    var t = window.location.pathname
                      , e = "https://www.fnscore.cn";
                    "/" !== t && (e = "".concat(e).concat(t)),
                    setTimeout((function() {
                        window.location.href = "".concat(e)
                    }
                    ), this.redirectTime)
                },
                redirectPageTimer: function() {
                    var t = this;
                    this._pageTimer = setInterval((function() {
                        t.handleRedirectMain()
                    }
                    ), 1e4)
                },
                scrollHandle: function(t) {
                    var e = t.srcElement.scrollingElement.scrollTop;
                    this.isShowGoTop = e >= 300
                },
                goTop: function() {
                    Object(q.a)(".body", {
                        duration: 800,
                        offset: 0
                    })
                }
            }
        }
          , V = (n(413),
        n(414),
        Object(D.a)(Q, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "body"
            }, [n("hg-navbar"), n("nuxt", {
                staticClass: "default-continer"
            }), n("hg-footer"), t.isShowBanner ? n("div", {
                staticClass: "app-download"
            }, [n("div", {
                staticClass: "panel-content fn-flex-col"
            }, [n("a", {
                staticClass: "panel-content-item fn-flex-col",
                on: {
                    mouseenter: function(e) {
                        t.isShowApp = !0
                    },
                    mouseleave: function(e) {
                        t.isShowApp = !1
                    }
                }
            }, [n("img", {
                staticClass: "def-status",
                attrs: {
                    src: t.iconImg("backBar_icon_app.png"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "hover-status",
                attrs: {
                    src: t.iconImg("backBar_icon_app_active.png"),
                    alt: ""
                }
            }), n("p", [t._v("APP")])]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowApp,
                    expression: "isShowApp"
                }],
                staticClass: "panel-appCode fn-flex-col"
            }, [n("p", [t._v("扫码下载APP")]), n("img", {
                attrs: {
                    src: t.iconImg("fnscore_right_app_qrcode.png"),
                    alt: ""
                }
            }), n("div", {
                staticClass: "panel-appCode-tail"
            })]), n("a", {
                staticClass: "panel-content-item fn-flex-col",
                attrs: {
                    href: "https://www.fnscore.cn/tipsters.html",
                    target: "_blank"
                }
            }, [n("img", {
                staticClass: "def-status",
                attrs: {
                    src: t.iconImg("backBar_icon_score.png"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "hover-status",
                attrs: {
                    src: t.iconImg("backBar_icon_score_active.png"),
                    alt: ""
                }
            }), n("p", [t._v("专家")]), n("div", {
                staticClass: "show_tip hover-status"
            }, [t._v("点击跳转专家页")])]), n("a", {
                staticClass: "panel-content-item fn-flex-col",
                attrs: {
                    href: "https://weibo.com/fnapp",
                    target: "_black"
                }
            }, [n("img", {
                staticClass: "def-status",
                attrs: {
                    src: t.iconImg("backBar_icon_weibo.png"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "hover-status",
                attrs: {
                    src: t.iconImg("backBar_icon_weibo_active.png"),
                    alt: ""
                }
            }), n("p", [t._v("微博")]), n("div", {
                staticClass: "show_tip hover-status"
            }, [t._v("点击关注微博")])]), n("a", {
                staticClass: "panel-content-item fn-flex-col",
                attrs: {
                    href: t.platformList[0].link
                }
            }, [n("img", {
                staticClass: "def-status",
                attrs: {
                    src: t.iconImg("backBar_icon_zhihu.png"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "hover-status",
                attrs: {
                    src: t.iconImg("backBar_icon_zhihu_active.png"),
                    alt: ""
                }
            }), n("p", [t._v("知乎")]), n("div", {
                staticClass: "show_tip hover-status"
            }, [t._v("点击跳转知乎")])]), n("div", {
                staticClass: "panel-content-item fn-flex-col",
                staticStyle: {
                    "margin-bottom": "0px"
                },
                on: {
                    click: t.goTop
                }
            }, [n("img", {
                staticClass: "def-status",
                attrs: {
                    src: t.iconImg("backBar_icon_goTop.png"),
                    alt: ""
                }
            }), n("img", {
                staticClass: "hover-status",
                attrs: {
                    src: t.iconImg("backBar_icon_goTop_active.png"),
                    alt: ""
                }
            }), n("p", [t._v("回到顶部")])])])]) : t._e()], 1)
        }
        ), [], !1, null, "6c7c53b6", null).exports)
          , X = {
            methods: {}
        }
          , Z = (n(415),
        Object(D.a)(X, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "body"
            }, [e("nuxt", {
                staticClass: "default-continer"
            })], 1)
        }
        ), [], !1, null, "46600f23", null).exports)
          , J = {}
          , tt = (n(416),
        Object(D.a)(J, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "body"
            }, [e("nuxt", {
                staticClass: "default-continer"
            })], 1)
        }
        ), [], !1, null, "0e6b3e8c", null).exports)
          , et = n(0);
        function nt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var rt = {
            components: {
                HgNavbar: U.a,
                HgFooter: H.a
            },
            data: function() {
                return {
                    THEME_TYPE: et.i,
                    redirectTime: 2e3,
                    _pageTimer: null,
                    isShowGoTop: !1,
                    isShowBanner: !0,
                    isShowApp: !1,
                    isShowWeiBo: !1,
                    platformList: [{
                        title: "知乎",
                        imgUrl: "/zhihu_icon.png",
                        link: "https://www.zhihu.com/people/fnscore"
                    }, {
                        title: "B站",
                        imgUrl: "/bilibili_icon.png",
                        link: "https://space.bilibili.com/1815303951"
                    }, {
                        title: "头条",
                        imgUrl: "/toutiao_icon.png",
                        link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAem8NlAOcd_I-T2r5gsj9GBH20MzrYneCb3vdEiw4RLZ92EljHhMXTD_KdnnNH-P5/"
                    }],
                    weiBoList: [{
                        title: "蜂鸟电竞APP",
                        link: "https://weibo.com/7491474179"
                    }, {
                        title: "蜂鸟电竞LOL",
                        link: "https://weibo.com/7491410918"
                    }, {
                        title: "蜂鸟电竞王者荣耀",
                        link: "https://weibo.com/fn007"
                    }]
                }
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nt(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, Object(F.c)("common", ["isSouGoAdHost", "isShenMaAdHost"])),
            mounted: function() {
                window.addEventListener("scroll", this.scrollHandle, !1),
                this.initBanner()
            },
            beforeDestroy: function() {
                this._pageTimer && clearInterval(this._pageTimer),
                window.removeEventListener("scroll", this.scrollHandle, !1)
            },
            methods: {
                initBanner: function() {
                    var t = this.$route.query
                      , e = t.huyaLink
                      , n = t.iframeTag;
                    (e && "true" === e || n && "true" === n) && (this.isShowBanner = !1)
                },
                handleRedirectMain: function() {
                    var t = window.location.pathname
                      , e = "https://www.fnscore.cn";
                    "/" !== t && (e = "".concat(e).concat(t)),
                    setTimeout((function() {
                        window.location.href = "".concat(e)
                    }
                    ), this.redirectTime)
                },
                redirectPageTimer: function() {
                    var t = this;
                    this._pageTimer = setInterval((function() {
                        t.handleRedirectMain()
                    }
                    ), 1e4)
                },
                scrollHandle: function(t) {
                    var e = t.srcElement.scrollingElement.scrollTop;
                    this.isShowGoTop = e >= 300
                },
                goTop: function() {
                    Object(q.a)(".body", {
                        duration: 800,
                        offset: 0
                    })
                }
            }
        };
        n(417),
        n(418);
        function at(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return it(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return it(t, e)
                }(t))) {
                    var e = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a, i = !0, o = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return i = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    a = t
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        function it(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        var ot = {
            "_default-copy": z,
            _default: V,
            _empty: Z,
            _iframe: tt,
            _whiteLayout: Object(D.a)(rt, (function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "body"
                }, [n("hg-navbar", {
                    staticClass: "white-theme",
                    attrs: {
                        "theme-type": t.THEME_TYPE.WHITE_THEME
                    }
                }), n("nuxt", {
                    staticClass: "default-container"
                }), n("hg-footer", {
                    staticClass: "white-theme",
                    attrs: {
                        "theme-type": t.THEME_TYPE.WHITE_THEME
                    }
                }), t.isShowBanner ? n("div", {
                    staticClass: "app-download"
                }, [n("div", {
                    staticClass: "panel-content fn-flex-col"
                }, [n("a", {
                    staticClass: "panel-content-item fn-flex-col",
                    on: {
                        mouseenter: function(e) {
                            t.isShowApp = !0
                        },
                        mouseleave: function(e) {
                            t.isShowApp = !1
                        }
                    }
                }, [n("img", {
                    staticClass: "def-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_app.png"),
                        alt: ""
                    }
                }), n("img", {
                    staticClass: "hover-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_app_active.png"),
                        alt: ""
                    }
                }), n("p", [t._v("APP")])]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowApp,
                        expression: "isShowApp"
                    }],
                    staticClass: "panel-appCode fn-flex-col"
                }, [n("p", [t._v("扫码下载APP")]), n("img", {
                    attrs: {
                        src: t.iconImg("fnscore_right_app_qrcode.png"),
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "panel-appCode-tail"
                })]), n("a", {
                    staticClass: "panel-content-item fn-flex-col",
                    attrs: {
                        href: "https://www.fnscore.cn/tipsters.html",
                        target: "_blank"
                    }
                }, [n("img", {
                    staticClass: "def-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_score.png"),
                        alt: ""
                    }
                }), n("img", {
                    staticClass: "hover-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_score_active.png"),
                        alt: ""
                    }
                }), n("p", [t._v("专家")]), n("div", {
                    staticClass: "show_tip hover-status"
                }, [t._v("点击跳转专家页")])]), n("a", {
                    staticClass: "panel-content-item fn-flex-col",
                    attrs: {
                        href: "https://weibo.com/fnapp",
                        target: "_black"
                    }
                }, [n("img", {
                    staticClass: "def-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_weibo.png"),
                        alt: ""
                    }
                }), n("img", {
                    staticClass: "hover-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_weibo_active.png"),
                        alt: ""
                    }
                }), n("p", [t._v("微博")]), n("div", {
                    staticClass: "show_tip hover-status"
                }, [t._v("点击关注微博")])]), n("a", {
                    staticClass: "panel-content-item fn-flex-col",
                    attrs: {
                        href: t.platformList[0].link,
                        target: "_blank"
                    }
                }, [n("img", {
                    staticClass: "def-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_zhihu.png"),
                        alt: ""
                    }
                }), n("img", {
                    staticClass: "hover-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_zhihu_active.png"),
                        alt: ""
                    }
                }), n("p", [t._v("知乎")]), n("div", {
                    staticClass: "show_tip hover-status"
                }, [t._v("点击跳转知乎")])]), n("div", {
                    staticClass: "panel-content-item fn-flex-col",
                    staticStyle: {
                        "margin-bottom": "0px"
                    },
                    on: {
                        click: t.goTop
                    }
                }, [n("img", {
                    staticClass: "def-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_goTop.png"),
                        alt: ""
                    }
                }), n("img", {
                    staticClass: "hover-status",
                    attrs: {
                        src: t.iconImg("backBar_icon_goTop_active.png"),
                        alt: ""
                    }
                }), n("p", [t._v("回到顶部")])])])]) : t._e()], 1)
            }
            ), [], !1, null, "344f5050", null).exports
        }
          , ct = {
            render: function(t, e) {
                var n = t("NuxtLoading", {
                    ref: "loading"
                });
                if (this.nuxt.err && N) {
                    var r = (N.options || N).layout;
                    r && this.setLayout("function" == typeof r ? r.call(N, this.context) : r)
                }
                var a = t(this.layout || "nuxt")
                  , i = t("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [a])
                  , o = t("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(t) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [i]);
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, o])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                i.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                i.default.prototype.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                this.$loading = this.$refs.loading
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((n = Object(p.h)(t.$route)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return t.$loading.start(),
                                    r = n.map((function(e) {
                                        var n = [];
                                        if (e.$options.fetch && e.$options.fetch.length && n.push(Object(p.p)(e.$options.fetch, t.context)),
                                        e.$fetch)
                                            n.push(e.$fetch());
                                        else {
                                            var r, a = at(Object(p.e)(e.$vnode.componentInstance));
                                            try {
                                                for (a.s(); !(r = a.n()).done; ) {
                                                    var o = r.value;
                                                    n.push(o.$fetch())
                                                }
                                            } catch (t) {
                                                a.e(t)
                                            } finally {
                                                a.f()
                                            }
                                        }
                                        return e.$options.asyncData && n.push(Object(p.p)(e.$options.asyncData, t.context).then((function(t) {
                                            for (var n in t)
                                                i.default.set(e.$data, n, t[n])
                                        }
                                        ))),
                                        Promise.all(n)
                                    }
                                    )),
                                    e.prev = 5,
                                    e.next = 8,
                                    Promise.all(r);
                                case 8:
                                    e.next = 15;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(5),
                                    t.$loading.fail(e.t0),
                                    Object(p.k)(e.t0),
                                    t.error(e.t0);
                                case 15:
                                    t.$loading.finish();
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                    this.$loading.finish && this.$loading.finish())
                },
                setLayout: function(t) {
                    return t && ot["_" + t] || (t = "default"),
                    this.layoutName = t,
                    this.layout = ot["_" + t],
                    this.layout
                },
                loadLayout: function(t) {
                    return t && ot["_" + t] || (t = "default"),
                    Promise.resolve(ot["_" + t])
                }
            },
            components: {
                NuxtLoading: $
            }
        };
        n(22),
        n(68);
        function st(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ut(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ut(t, e)
                }(t))) {
                    var e = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a, i = !0, o = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return i = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    a = t
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        function ut(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        i.default.use(F.a);
        var lt = ["state", "getters", "actions", "mutations"]
          , ft = {};
        (ft = function(t, e) {
            if ((t = t.default || t).commit)
                throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = Object.assign({}, t)),
            dt(t, e)
        }(n(419), "store/index.js")).modules = ft.modules || {},
        ht(n(420), "common.js"),
        ht(n(421), "league.js"),
        ht(n(422), "leagueDetail.js"),
        ht(n(423), "lineUp.js"),
        ht(n(426), "live.js"),
        ht(n(427), "match.js"),
        ht(n(428), "score.js"),
        ht(n(429), "sportsStatist.js"),
        ht(n(430), "user.js");
        var pt = ft instanceof Function ? ft : function() {
            return new F.a.Store(Object.assign({
                strict: !1
            }, ft))
        }
        ;
        function dt(t, e) {
            if (t.state && "function" != typeof t.state) {
                var n = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: function() {
                        return n
                    }
                })
            }
            return t
        }
        function ht(t, e) {
            t = t.default || t;
            var n = e.replace(/\.(js|mjs)$/, "").split("/")
              , r = n[n.length - 1];
            "store/".concat(e);
            if (t = "state" === r ? function(t, e) {
                if ("function" != typeof t) {
                    var n = Object.assign({}, t);
                    return function() {
                        return n
                    }
                }
                return dt(t)
            }(t) : dt(t),
            lt.includes(r)) {
                var a = r;
                gt(mt(ft, n, {
                    isProperty: !0
                }), t, a)
            } else {
                "index" === r && (n.pop(),
                r = n[n.length - 1]);
                var i, o = mt(ft, n), c = st(lt);
                try {
                    for (c.s(); !(i = c.n()).done; ) {
                        var s = i.value;
                        gt(o, t[s], s)
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
                !1 === t.namespaced && delete o.namespaced
            }
        }
        function mt(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.isProperty
              , a = void 0 !== r && r;
            if (!e.length || a && 1 === e.length)
                return t;
            var i = e.shift();
            return t.modules[i] = t.modules[i] || {},
            t.modules[i].namespaced = !0,
            t.modules[i].modules = t.modules[i].modules || {},
            mt(t.modules[i], e, {
                isProperty: a
            })
        }
        function gt(t, e, n) {
            e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
        }
        var vt = n(290)
          , _t = n.n(vt);
        i.default.use(_t.a, {
            isEnabled: !1,
            logLevel: "debug",
            stringifyArguments: !1,
            showLogLevel: !1,
            showMethodName: !0,
            separator: "|",
            showConsoleColors: !0
        });
        var bt = n(291)
          , yt = n.n(bt);
        i.default.use(yt.a, {
            position: "top-center",
            theme: "bubble",
            duration: 3e3
        });
        var Tt = void 0;
        Tt && Tt.forEach((function(t) {
            i.default.toasted.register(t.name, t.message, t.options)
        }
        ));
        var Ot = function(t, e) {
            e("toast", i.default.toasted)
        }
          , wt = n(39)
          , Et = n.n(wt)
          , St = n(292)
          , Ct = n.n(St);
        function Lt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function jt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Lt(Object(n), !0).forEach((function(e) {
                    Object(a.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function At(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Pt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Pt(t, e)
                }(t))) {
                    var e = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a, i = !0, o = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return i = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    a = t
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        function Pt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        for (var xt = {
            setBaseURL: function(t) {
                this.defaults.baseURL = t
            },
            setHeader: function(t, e) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common", a = At(Array.isArray(r) ? r : [r]);
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var i = n.value;
                        e ? this.defaults.headers[i][t] = e : delete this.defaults.headers[i][t]
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
            },
            setToken: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
                  , r = t ? (e ? e + " " : "") + t : null;
                this.setHeader("Authorization", r, n)
            },
            onRequest: function(t) {
                this.interceptors.request.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onResponse: function(t) {
                this.interceptors.response.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onRequestError: function(t) {
                this.interceptors.request.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onResponseError: function(t) {
                this.interceptors.response.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onError: function(t) {
                this.onRequestError(t),
                this.onResponseError(t)
            },
            create: function(t) {
                return Dt(Ct()(t, this.defaults))
            }
        }, It = function() {
            var t = kt[Rt];
            xt["$" + t] = function() {
                return this[t].apply(this, arguments).then((function(t) {
                    return t && t.data
                }
                ))
            }
        }, Rt = 0, kt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Rt < kt.length; Rt++)
            It();
        var Dt = function(t) {
            var e = Et.a.create(t);
            return e.CancelToken = Et.a.CancelToken,
            e.isCancel = Et.a.isCancel,
            function(t) {
                for (var e in xt)
                    t[e] = xt[e].bind(t)
            }(e),
            e.onRequest((function(t) {
                t.headers = jt(jt({}, e.defaults.headers.common), t.headers)
            }
            )),
            Nt(e),
            e
        }
          , Nt = function(t) {
            var e = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
            }
              , n = function() {
                var t = "undefined" != typeof window && window.$nuxt;
                return t && t.$loading && t.$loading.set ? t.$loading : e
            }
              , r = 0;
            t.onRequest((function(t) {
                t && !1 === t.progress || r++
            }
            )),
            t.onResponse((function(t) {
                t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0,
                n().finish())
            }
            )),
            t.onError((function(t) {
                t && t.config && !1 === t.config.progress || (r--,
                Et.a.isCancel(t) ? r <= 0 && (r = 0,
                n().finish()) : (n().fail(),
                n().finish()))
            }
            ));
            var a = function(t) {
                if (r && t.total) {
                    var e = 100 * t.loaded / (t.total * r);
                    n().set(Math.min(100, e))
                }
            };
            t.defaults.onUploadProgress = a,
            t.defaults.onDownloadProgress = a
        }
          , Bt = function(t, e) {
            var n = t.$config && t.$config.axios || {}
              , r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
            var a = Dt({
                baseURL: r,
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            });
            t.$axios = a,
            e("axios", a)
        }
          , Gt = (n(24),
        n(297))
          , Mt = n(147)
          , $t = n.n(Mt)
          , Ut = n(146)
          , Ht = n.n(Ut)
          , Ft = n(66);
        function qt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var Yt = function() {
            if (window.sessionStorage) {
                var t = Kt();
                return t || (t = Object(Ft.a)(16, 16),
                window.sessionStorage.setItem("user_identity_key", t),
                t)
            }
        }
          , Kt = function() {
            if (window.sessionStorage)
                return window.sessionStorage.getItem("user_identity_key")
        }
          , zt = function(t) {
            var e = t.$axios;
            t.redirect,
            t.app,
            t.error,
            t.env;
            e.setBaseURL("/api"),
            e.defaults.timeout = 25e3,
            e.defaults.headers["X-Requested-With"] = "XMLHttpRequest",
            e.setHeader("Content-Type", "application/x-www-form-urlencoded", ["post"]),
            e.onRequest((function(t) {
                var e = (new Date).getTime()
                  , n = "timestamp=".concat(e, "&secret=").concat("KHVheWluZ18zZWNyZXRfYXBB")
                  , r = Ht()(n);
                return "post" !== t.method && (t.data = $t.a.stringify(t.data, {
                    allowDots: !0
                })),
                t.params = Object.assign({}, t.params, {
                    timestamp: e,
                    sign: r,
                    deviceId: Yt()
                }),
                t
            }
            )),
            e.onResponse((function(t) {
                return Promise.resolve(t)
            }
            )),
            e.onError((function(t) {
                if (!e.isCancel(t)) {
                    var n = ""
                      , r = t.response
                      , i = parseInt(r && r.status) || "";
                    switch (i) {
                    case 404:
                        n = "Interface 404";
                        break;
                    case 500:
                        n = r && r.data;
                        break;
                    default:
                        n = ""
                    }
                    var o = Object.assign({}, r, {
                        request: r && r.request || ""
                    })
                      , c = (o.request,
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? qt(Object(n), !0).forEach((function(e) {
                                Object(a.a)(t, e, n[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                            ))
                        }
                        return t
                    }({
                        statusCode: i,
                        message: n
                    }, Object(Gt.a)(o, ["request"])));
                    return "" === n ? Promise.reject(t) : Promise.reject(c)
                }
            }
            ));
            var n = function(t, e) {
                var n = t.config || {}
                  , r = (n.url,
                n.params,
                n.method,
                n.baseURL,
                t.response || {});
                r.data,
                r.statusText,
                r.status;
                return Promise.reject(t)
            };
            e.onRequestError((function(t) {
                return n(t)
            }
            )),
            e.onResponseError((function(t) {
                if (!e.isCancel(t))
                    return n(t)
            }
            ));
            var r = function(t) {
                return new Promise((function(n, r) {
                    t.then((function(t) {
                        return n(t)
                    }
                    )).catch((function(t) {
                        e.isCancel(t) || r(t)
                    }
                    ))
                }
                ))
            }
              , i = e.CancelToken;
            e._cancelMap = {};
            var o = function(t, n, r, a, o) {
                if (!t)
                    throw new Error("_singleHandler: singleKey cannot be null!");
                var c = e._cancelMap[t];
                c && c("cancel request with singleKey['".concat(t, "']"));
                var s = {
                    cancelToken: new i((function(n) {
                        e._cancelMap[t] = n
                    }
                    ))
                };
                if (n.toLowerCase().includes("post"))
                    return e[n](r, a, Object.assign(s, o));
                var u = Object.assign({}, a, s);
                return e[n](r, u)
            };
            e.$singleGet = function(t, e, n) {
                return r(o(t, "$get", e, n))
            }
            ,
            e.$singlePost = function(t, e, n, a) {
                return r(o(t, "$post", e, n, a))
            }
        }
          , Wt = n(155)
          , Qt = function(t, e) {
            t.$errorHandler = function(e) {
                try {
                    var n = e.response && e.response.data || e;
                    n ? t.error({
                        statusCode: 500,
                        message: n.resultInfo
                    }) : t.error({
                        statusCode: 500,
                        message: "服务器开小差了~"
                    })
                } catch (e) {
                    t.error({
                        statusCode: 500,
                        message: "服务器开小差了~"
                    })
                }
            }
        }
          , Vt = function() {}
          , Xt = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return function() {
                var r = this;
                return setTimeout((function() {
                    t.call(n || r)
                }
                ), e)
            }
        }
          , Zt = function(t) {
            var e = Jt[t];
            e && e()
        }
          , Jt = {
            1004: Xt(void 0, 100),
            1005: Xt(void 0, 100)
        }
          , te = function(t) {
            var e, n;
            return t && t.response ? (e = t.response.data.msg,
            n = t.response.status) : t && t.data && (e = t.data.resultInfo,
            n = t.data.resultCode),
            e || (e = t.message || "Unknown Error"),
            n || (n = t.statusCode),
            {
                message: e,
                errCode: n
            }
        };
        i.default.mixin({
            methods: {
                $error: function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var e = te(t)
                      , n = e.errCode;
                    e.message;
                    Zt(n)
                }
            }
        });
        n(437);
        var ee, ne = {
            title: "蜂鸟竞技",
            aHref: "https://www.fnscore.cn",
            imgUrl: "https://qn.tianqifengyun.cn/pcweb/fnscore-logo-001.png",
            imgAlt: "fnscore logo icon"
        }, re = {
            name: "SeoPanel",
            props: {
                titleInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                _titleInfo: function() {
                    return Object.assign({}, ne, this.titleInfo)
                }
            }
        }, ae = (n(439),
        Object(D.a)(re, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "title-panel"
            }, [e("h1", [this._v(this._s(this._titleInfo.title)), e("a", {
                ref: "noopener",
                attrs: {
                    href: this._titleInfo.aHref
                }
            }, [e("img", {
                attrs: {
                    src: this._titleInfo.imgUrl,
                    alt: this._titleInfo.imgAlt
                }
            })])])])
        }
        ), [], !1, null, null, null).exports), ie = n(201), oe = (n(67),
        {
            name: "LineRightProgress",
            props: {
                totalSize: {
                    type: Number,
                    default: 0
                },
                linkColor: {
                    type: String,
                    default: "#FFBD34"
                },
                bgColor: {
                    type: String,
                    default: "#E6E6E6"
                },
                radiusSize: {
                    type: Number,
                    default: 2
                }
            }
        }), ce = (n(441),
        Object(D.a)(oe, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "link-panel",
                style: "background-color: " + this.bgColor + "; border-radius: " + this.radiusSize + "px;"
            }, [e("p", {
                staticClass: "link-bg",
                style: "width: " + this.totalSize + "%; background-color: " + this.linkColor
            })])
        }
        ), [], !1, null, "7b788543", null).exports), se = n(217), ue = {
            name: "LoadingPanel",
            props: {
                loading: {
                    type: Boolean,
                    default: !1
                }
            }
        }, le = (n(443),
        Object(D.a)(ue, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.loading,
                    expression: "loading"
                }],
                staticClass: "loading-panel"
            }, [e("img", {
                staticClass: "loading-icon",
                attrs: {
                    src: this.iconImg("loading_icon_001.gif"),
                    alt: "loading"
                }
            })])
        }
        ), [], !1, null, "388bee72", null).exports), fe = (n(299),
        {
            name: "AnchorIcon",
            props: {
                anchor: {
                    type: Object,
                    default: function() {
                        return {
                            logo: "",
                            nickname: "A"
                        }
                    }
                },
                fontSize: {
                    type: Number,
                    default: 16
                },
                showPopOver: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                anchorName: function() {
                    var t, e = null === (t = this.anchor) || void 0 === t ? void 0 : t.nickName;
                    return e ? e.charAt(0) : ""
                }
            }
        }), pe = (n(445),
        Object(D.a)(fe, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "anchor-icon-panel"
            }, [t.anchor.logo ? n("img", {
                staticClass: "icon",
                attrs: {
                    src: t.httpImg(t.anchor.logo, 50)
                }
            }) : n("p", {
                staticClass: "icon txt",
                style: "font-size: " + t.fontSize + "px;"
            }, [t._v(t._s(t.anchorName))]), t.showPopOver ? n("div", {
                staticClass: "name-pop-over-panel"
            }, [n("div", {
                staticClass: "pop-over-container"
            }, [n("div", {
                staticClass: "tir"
            }), n("p", {
                staticClass: "txt"
            }, [t._v(t._s(t.anchor.nickname || t.anchor.nickName))])])]) : t._e()])
        }
        ), [], !1, null, "a575f682", null).exports), de = {
            SeoPanel: ae,
            LineProgress: ie.a,
            LineRightProgress: ce,
            EmptyData: se.a,
            LoadingPanel: le,
            AnchorIcon: pe
        };
        ee = i.default,
        Object.values(de).forEach((function(t) {
            ee.component(t.name, t)
        }
        ));
        var he = n(161)
          , me = function(t) {
            t.app.router,
            t.store;
            i.default.prototype.isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator && navigator.userAgent)
        };
        function ge() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefind"
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-"
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-"
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "-"
              , a = window._hmt || [];
            a.push(["_trackEvent", t, e, n, r])
        }
        var ve = {
            install: function(t) {
                t.prototype.$trackEvent = ge
            }
        };
        i.default.use(ve);
        var _e = n(190)
          , be = n.n(_e)
          , ye = n(191)
          , Te = n.n(ye);
        i.default.component(be.a.name, be.a),
        i.default.component(Te.a.name, Te.a);
        i.default.directive("visibility", (function(t, e) {
            t.style.visibility = e.value ? "visible" : "hidden"
        }
        ));
        var Oe = n(293)
          , we = n.n(Oe);
        i.default.use(we.a),
        i.default.prototype.$verifyDomain = function(t, e, n) {
            var r = !n
              , a = t && t.domain;
            if (a && e) {
                var i = "".concat("w").concat("w", "w.")
                  , o = [".", "c", "o", "m"].join("")
                  , c = i + ["f", "n"].join("") + ["s", "c"].join("") + ["o", "r", "e"].join("") + o
                  , s = i + ["5", "4"].join("") + ["l", "o", "l"].join("") + o
                  , u = "local" + ["h", "o", "s", "t"].join("");
                r && ![c, s, u].includes(a) && (e.location.href = ["h", "tt", "ps", ":", "//"].join("") + c)
            }
        }
        ;
        var Ee = n(294);
        i.default.prototype.LeaderLine = Ee.a;
        var Se = n(150);
        i.default.prototype.SVGADownloader = Se.Downloader,
        i.default.prototype.SVGAParser = Se.Parser,
        i.default.prototype.SVGAPlayer = Se.Player;
        var Ce = {
            install: function(t) {
                t.prototype.$bus = new t
            }
        };
        i.default.use(Ce);
        var Le = n(295)
          , je = n.n(Le);
        function Ae(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Pe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ae(Object(n), !0).forEach((function(e) {
                    Object(a.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        i.default.use(je.a),
        i.default.component(s.a.name, s.a),
        i.default.component(l.a.name, Pe(Pe({}, l.a), {}, {
            render: function(t, e) {
                return l.a._warned || (l.a._warned = !0),
                l.a.render(t, e)
            }
        })),
        i.default.component(x.name, x),
        i.default.component("NChild", x),
        i.default.component(G.name, G),
        i.default.use(o.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var xe = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };
        function Ie(t) {
            return Re.apply(this, arguments)
        }
        function Re() {
            return (Re = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                var n, r, a, o, c, s, u, l;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            P();
                        case 2:
                            return n = t.sent,
                            (r = pt(e)).$router = n,
                            a = r.registerModule,
                            r.registerModule = function(t, e, n) {
                                return a.call(r, t, e, Object.assign({
                                    preserveState: !0
                                }, n))
                            }
                            ,
                            o = Pe({
                                head: {
                                    htmlAttrs: {
                                        lang: "zh-cn"
                                    },
                                    title: "fn-pc-web",
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        "http-equiv": "X-UA-Compatible",
                                        content: "IE=edge"
                                    }, {
                                        name: "renderer",
                                        content: "webkit|ie-comp|ie-stand"
                                    }, {
                                        name: "apple-mobile-web-app-capable",
                                        content: "yes"
                                    }, {
                                        name: "format-detection",
                                        content: "telephone=no"
                                    }, {
                                        name: "applicable-device",
                                        content: "pc,mobile"
                                    }, {
                                        name: "google-site-verification",
                                        content: "xADCJ2zeR-Ut_QCCfPk3l88r1eowRNRLE_zW2hrH6Q4"
                                    }, {
                                        name: "viewport",
                                        content: "width=1200px, initial-scale=0, maximum-scale=1, user-scalable=yes, shrink-to-fit=no"
                                    }, {
                                        name: "baidu-site-verification",
                                        content: "code-XLzTMRCTIR"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "https://qn.tianqifengyun.cn/favicon.ico"
                                    }],
                                    style: [],
                                    script: []
                                },
                                store: r,
                                router: n,
                                nuxt: {
                                    defaultTransition: xe,
                                    transitions: [xe],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]),
                                        t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, xe, {
                                                name: t
                                            }) : Object.assign({}, xe, t) : xe
                                        }
                                        )),
                                        this.$options.nuxt.transitions = t,
                                        t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null,
                                        o.context._errored = Boolean(t),
                                        t = t ? Object(p.o)(t) : null;
                                        var n = o.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt),
                                        n.dateErr = Date.now(),
                                        n.err = t,
                                        e && (e.nuxt.error = t),
                                        t
                                    }
                                }
                            }, ct),
                            r.app = o,
                            c = e ? e.next : function(t) {
                                return o.router.push(t)
                            }
                            ,
                            e ? s = n.resolve(e.url).route : (u = Object(p.f)(n.options.base, n.options.mode),
                            s = n.resolve(u).route),
                            t.next = 13,
                            Object(p.s)(o, {
                                store: r,
                                route: s,
                                next: c,
                                error: o.nuxt.error.bind(o),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                ssrContext: e
                            });
                        case 13:
                            l = function(t, e) {
                                if (!t)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e)
                                    throw new Error("inject('".concat(t, "', value) has no value provided"));
                                o[t = "$" + t] = e,
                                r[t] = o[t];
                                var n = "__nuxt_" + t + "_installed__";
                                i.default[n] || (i.default[n] = !0,
                                i.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(i.default, t) || Object.defineProperty(i.default.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state),
                            t.next = 18;
                            break;
                        case 18:
                            return t.next = 21,
                            Ot(o.context, l);
                        case 21:
                            return t.next = 24,
                            Bt(o.context, l);
                        case 24:
                            return t.next = 27,
                            zt(o.context);
                        case 27:
                            if ("function" != typeof Wt.a) {
                                t.next = 30;
                                break
                            }
                            return t.next = 30,
                            Object(Wt.a)(o.context, l);
                        case 30:
                            return t.next = 33,
                            Qt(o.context);
                        case 33:
                            t.next = 36;
                            break;
                        case 36:
                            t.next = 39;
                            break;
                        case 39:
                            if ("function" != typeof he.default) {
                                t.next = 42;
                                break
                            }
                            return t.next = 42,
                            Object(he.default)(o.context, l);
                        case 42:
                            return t.next = 45,
                            me(o.context);
                        case 45:
                            t.next = 48;
                            break;
                        case 48:
                            t.next = 51;
                            break;
                        case 51:
                            t.next = 54;
                            break;
                        case 54:
                            t.next = 57;
                            break;
                        case 57:
                            t.next = 60;
                            break;
                        case 60:
                            t.next = 63;
                            break;
                        case 63:
                            t.next = 66;
                            break;
                        case 66:
                            t.next = 69;
                            break;
                        case 69:
                            t.next = 72;
                            break;
                        case 72:
                            t.next = 75;
                            break;
                        case 75:
                            return t.abrupt("return", {
                                store: r,
                                app: o,
                                router: n
                            });
                        case 76:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
    },
    5: function(t, e, n) {
        "use strict";
        n.d(e, "k", (function() {
            return p
        }
        )),
        n.d(e, "m", (function() {
            return d
        }
        )),
        n.d(e, "l", (function() {
            return h
        }
        )),
        n.d(e, "e", (function() {
            return m
        }
        )),
        n.d(e, "b", (function() {
            return g
        }
        )),
        n.d(e, "r", (function() {
            return v
        }
        )),
        n.d(e, "g", (function() {
            return _
        }
        )),
        n.d(e, "h", (function() {
            return b
        }
        )),
        n.d(e, "d", (function() {
            return y
        }
        )),
        n.d(e, "q", (function() {
            return T
        }
        )),
        n.d(e, "j", (function() {
            return O
        }
        )),
        n.d(e, "s", (function() {
            return E
        }
        )),
        n.d(e, "n", (function() {
            return C
        }
        )),
        n.d(e, "p", (function() {
            return L
        }
        )),
        n.d(e, "f", (function() {
            return j
        }
        )),
        n.d(e, "c", (function() {
            return A
        }
        )),
        n.d(e, "i", (function() {
            return P
        }
        )),
        n.d(e, "o", (function() {
            return x
        }
        )),
        n.d(e, "a", (function() {
            return G
        }
        ));
        n(31),
        n(74),
        n(19),
        n(73);
        var r = n(83)
          , a = (n(68),
        n(379),
        n(380),
        n(57))
          , i = (n(58),
        n(248),
        n(383),
        n(99),
        n(28),
        n(6))
          , o = (n(69),
        n(10),
        n(8),
        n(14),
        n(29),
        n(1))
          , c = n(4);
        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach((function(e) {
                    Object(o.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function l(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return f(t, e)
                }(t))) {
                    var e = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a, i = !0, o = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return i = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    a = t
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function p(t) {
            c.default.config.errorHandler && c.default.config.errorHandler(t)
        }
        function d(t) {
            return t.then((function(t) {
                return t.default || t
            }
            ))
        }
        function h(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }
        function m(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = t.$children || [], a = l(r);
            try {
                for (a.s(); !(e = a.n()).done; ) {
                    var i = e.value;
                    i.$fetch ? n.push(i) : i.$children && m(i, n)
                }
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
            return n
        }
        function g(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var n = t.options._originDataFn || t.options.data || function() {
                    return {}
                }
                ;
                t.options._originDataFn = n,
                t.options.data = function() {
                    var r = n.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                    u(u({}, r), e)
                }
                ,
                t.options.__hasNuxtData = !0,
                t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }
        function v(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t,
            t.extendOptions = t.options) : (t = c.default.extend(t))._Ctor = t,
            !t.options.name && t.options.__file && (t.options.name = t.options.__file)),
            t
        }
        function _(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                return Object.keys(t[n]).map((function(a) {
                    return e && e.push(r),
                    t[n][a]
                }
                ))
            }
            )))
        }
        function b(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return _(t, e, "instances")
        }
        function y(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t.components).reduce((function(r, a) {
                    return t.components[a] ? r.push(e(t.components[a], t.instances[a], t, a, n)) : delete t.components[a],
                    r
                }
                ), [])
            }
            )))
        }
        function T(t, e) {
            return Promise.all(y(t, function() {
                var t = Object(i.a)(regeneratorRuntime.mark((function t(n, r, a, i) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3,
                                n();
                            case 3:
                                n = t.sent;
                            case 4:
                                return a.components[i] = n = v(n),
                                t.abrupt("return", "function" == typeof e ? e(n, r, a, i) : n);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, n, r, a) {
                    return t.apply(this, arguments)
                }
            }()))
        }
        function O(t) {
            return w.apply(this, arguments)
        }
        function w() {
            return (w = Object(i.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4,
                            T(e);
                        case 4:
                            return t.abrupt("return", u(u({}, e), {}, {
                                meta: _(e).map((function(t, n) {
                                    return u(u({}, t.options.meta), (e.matched[n] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function E(t, e) {
            return S.apply(this, arguments)
        }
        function S() {
            return (S = Object(i.a)(regeneratorRuntime.mark((function t(e, n) {
                var i, o, c, s;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: n.payload,
                                error: n.error,
                                base: "/",
                                env: {
                                    APIURI: "http://127.0.0.1:6081/api",
                                    API_URL_BROWSER: "/",
                                    API_SECRET: "KHVheWluZ18zZWNyZXRfYXBB",
                                    NODE_ENV: "production",
                                    QINIU_URL: "https://qn.tianqifengyun.cn",
                                    PORT: "6677",
                                    HOST: "0.0.0.0",
                                    API_PREFIX: "/api",
                                    HOST_NAME: "fnscore",
                                    MAIN_PC_HOST: "https://www.fnscore.cn",
                                    JWT_PUBLIC_KEY: "b0d6c080e21f2b17ac595d355bb4497a",
                                    RONG_APP_KEY: "e0x9wycfepzlq",
                                    BAIDU_APP_KEY: "cadcf695428f7859d9d5e5d7bd270572"
                                }
                            },
                            n.req && (e.context.req = n.req),
                            n.res && (e.context.res = n.res),
                            n.ssrContext && (e.context.ssrContext = n.ssrContext),
                            e.context.redirect = function(t, n, r) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var i = Object(a.a)(n);
                                    if ("number" == typeof t || "undefined" !== i && "object" !== i || (r = n || {},
                                    n = t,
                                    i = Object(a.a)(n),
                                    t = 302),
                                    "object" === i && (n = e.router.resolve(n).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))
                                        throw n = B(n, r),
                                        window.location.replace(n),
                                        new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: n,
                                        query: r,
                                        status: t
                                    })
                                }
                            }
                            ,
                            e.context.nuxtState = window.__NUXT__),
                            t.next = 3,
                            Promise.all([O(n.route), O(n.from)]);
                        case 3:
                            i = t.sent,
                            o = Object(r.a)(i, 2),
                            c = o[0],
                            s = o[1],
                            n.route && (e.context.route = c),
                            n.from && (e.context.from = s),
                            e.context.next = n.next,
                            e.context._redirected = !1,
                            e.context._errored = !1,
                            e.context.isHMR = !1,
                            e.context.params = e.context.route.params || {},
                            e.context.query = e.context.route.query || {};
                        case 15:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function C(t, e) {
            return !t.length || e._redirected || e._errored ? Promise.resolve() : L(t[0], e).then((function() {
                return C(t.slice(1), e)
            }
            ))
        }
        function L(t, e) {
            var n;
            return (n = 2 === t.length ? new Promise((function(n) {
                t(e, (function(t, r) {
                    t && e.error(t),
                    n(r = r || {})
                }
                ))
            }
            )) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }
        function j(t, e) {
            var n = decodeURI(window.location.pathname);
            return "hash" === e ? window.location.hash.replace(/^#\//, "") : (t && 0 === n.indexOf(t) && (n = n.slice(t.length)),
            (n || "/") + window.location.search + window.location.hash)
        }
        function A(t, e) {
            return function(t, e) {
                for (var n = new Array(t.length), r = 0; r < t.length; r++)
                    "object" === Object(a.a)(t[r]) && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$",N(e)));
                return function(e, r) {
                    for (var a = "", i = e || {}, o = (r || {}).pretty ? R : encodeURIComponent, c = 0; c < t.length; c++) {
                        var s = t[c];
                        if ("string" != typeof s) {
                            var u = i[s.name || "pathMatch"]
                              , l = void 0;
                            if (null == u) {
                                if (s.optional) {
                                    s.partial && (a += s.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + s.name + '" to be defined')
                            }
                            if (Array.isArray(u)) {
                                if (!s.repeat)
                                    throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(u) + "`");
                                if (0 === u.length) {
                                    if (s.optional)
                                        continue;
                                    throw new TypeError('Expected "' + s.name + '" to not be empty')
                                }
                                for (var f = 0; f < u.length; f++) {
                                    if (l = o(u[f]),
                                    !n[c].test(l))
                                        throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    a += (0 === f ? s.prefix : s.delimiter) + l
                                }
                            } else {
                                if (l = s.asterisk ? R(u, !0) : o(u),
                                !n[c].test(l))
                                    throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + l + '"');
                                a += s.prefix + l
                            }
                        } else
                            a += s
                    }
                    return a
                }
            }(function(t, e) {
                var n, r = [], a = 0, i = 0, o = "", c = e && e.delimiter || "/";
                for (; null != (n = I.exec(t)); ) {
                    var s = n[0]
                      , u = n[1]
                      , l = n.index;
                    if (o += t.slice(i, l),
                    i = l + s.length,
                    u)
                        o += u[1];
                    else {
                        var f = t[i]
                          , p = n[2]
                          , d = n[3]
                          , h = n[4]
                          , m = n[5]
                          , g = n[6]
                          , v = n[7];
                        o && (r.push(o),
                        o = "");
                        var _ = null != p && null != f && f !== p
                          , b = "+" === g || "*" === g
                          , y = "?" === g || "*" === g
                          , T = n[2] || c
                          , O = h || m;
                        r.push({
                            name: d || a++,
                            prefix: p || "",
                            delimiter: T,
                            optional: y,
                            repeat: b,
                            partial: _,
                            asterisk: Boolean(v),
                            pattern: O ? D(O) : v ? ".*" : "[^" + k(T) + "]+?"
                        })
                    }
                }
                i < t.length && (o += t.substr(i));
                o && r.push(o);
                return r
            }(t, e), e)
        }
        function P(t, e) {
            var n = {}
              , r = u(u({}, t), e);
            for (var a in r)
                String(t[a]) !== String(e[a]) && (n[a] = !0);
            return n
        }
        function x(t) {
            var e;
            if (t.message || "string" == typeof t)
                e = t.message || t;
            else
                try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
            return u(u({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        }
        ;
        var I = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function R(t, e) {
            var n = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(n, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function k(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function D(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }
        function N(t) {
            return t && t.sensitive ? "" : "i"
        }
        function B(t, e) {
            var n, a = t.indexOf("://");
            -1 !== a ? (n = t.substring(0, a),
            t = t.substring(a + 3)) : t.startsWith("//") && (t = t.substring(2));
            var i, o = t.split("/"), c = (n ? n + "://" : "//") + o.shift(), s = o.filter(Boolean).join("/");
            if (2 === (o = s.split("#")).length) {
                var u = o
                  , l = Object(r.a)(u, 2);
                s = l[0],
                i = l[1]
            }
            return c += s ? "/" + s : "",
            e && "{}" !== JSON.stringify(e) && (c += (2 === t.split("?").length ? "&" : "?") + function(t) {
                return Object.keys(t).sort().map((function(e) {
                    var n = t[e];
                    return null == n ? "" : Array.isArray(n) ? n.slice().map((function(t) {
                        return [e, "=", t].join("")
                    }
                    )).join("&") : e + "=" + n
                }
                )).filter(Boolean).join("&")
            }(e)),
            c += i ? "#" + i : ""
        }
        function G(t, e, n) {
            t.$options[e] || (t.$options[e] = []),
            t.$options[e].push(n)
        }
    },
    59: function(t, e, n) {
        "use strict";
        n.d(e, "p", (function() {
            return a
        }
        )),
        n.d(e, "o", (function() {
            return i
        }
        )),
        n.d(e, "l", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "e", (function() {
            return s
        }
        )),
        n.d(e, "d", (function() {
            return u
        }
        )),
        n.d(e, "f", (function() {
            return l
        }
        )),
        n.d(e, "h", (function() {
            return f
        }
        )),
        n.d(e, "k", (function() {
            return p
        }
        )),
        n.d(e, "j", (function() {
            return d
        }
        )),
        n.d(e, "i", (function() {
            return h
        }
        )),
        n.d(e, "b", (function() {
            return m
        }
        )),
        n.d(e, "a", (function() {
            return g
        }
        )),
        n.d(e, "g", (function() {
            return v
        }
        )),
        n.d(e, "m", (function() {
            return _
        }
        )),
        n.d(e, "r", (function() {
            return b
        }
        )),
        n.d(e, "q", (function() {
            return y
        }
        )),
        n.d(e, "n", (function() {
            return T
        }
        )),
        n.d(e, "t", (function() {
            return O
        }
        )),
        n.d(e, "s", (function() {
            return w
        }
        )),
        n.d(e, "u", (function() {
            return E
        }
        )),
        n.d(e, "v", (function() {
            return S
        }
        )),
        n.d(e, "w", (function() {
            return C
        }
        ));
        var r = n(3);
        function a(t, e) {
            return r.a.post("/match/getMatchDetail", {
                query: t,
                accessToken: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function i(t) {
            return r.a.$singlePost("matchBattleDetail", "/match/getMatchBattleDetail", {
                query: t
            }).then((function(t) {
                return t && t.data
            }
            ))
        }
        function o(t) {
            return r.a.$singlePost("matchAnalysisGetById", "/match/matchAnalysisGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function c(t) {
            return r.a.$singlePost("getCsgoAnalysis", "/match/getCsgoAnalysis", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function s(t) {
            return r.a.post("/match/getCsgoMap", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function u(t) {
            return r.a.$singlePost("getCsgoLog", "/match/getCsgoLog", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function l(t) {
            return r.a.$singlePost("getDotaRankLog", "/match/getDotaRankLog", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function f(t) {
            return r.a.$singlePost("getLoLLog", "/match/getLoLLog", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function p(t, e) {
            return r.a.post("/match/getLolTeamList", {
                gameType: t,
                leagueId: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function d(t, e) {
            return r.a.post("/match/getLolPlayerList", {
                gameType: t,
                leagueId: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function h(t, e) {
            return r.a.post("/match/getHeroList", {
                gameType: t,
                leagueId: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function m(t, e) {
            return r.a.post("/match/getDotaTeamList", {
                gameType: t,
                leagueId: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function g(t, e) {
            return r.a.post("/match/getDotaPlayerList", {
                gameType: t,
                leagueId: e
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function v(t) {
            return r.a.post("/match/getLeagueList", {
                gameType: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function _(t) {
            return r.a.post("/match/matchAnalysisPlayerMatchUpGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function b(t) {
            return r.a.post("/match/matchHeroStatsGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function y(t) {
            return r.a.post("/match/matchHeroPositionStatsGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function T() {
            return r.a.post("/match/matchBannerRecommendList").then((function(t) {
                return t.data
            }
            ))
        }
        function O(t) {
            return r.a.post("/match/matchLiveTextGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function w(t) {
            return r.a.post("/match/matchLiveTechGetById", {
                query: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function E(t) {
            return r.a.$getApi("sportsMatchAnalysis", "match/analysis", t).then((function(t) {
                return t.data
            }
            ))
        }
        function S(t, e) {
            return r.a.$getApi("sportsMatchLineUp", "match/lineup/".concat(t, "/").concat(e)).then((function(t) {
                return t.data
            }
            ))
        }
        function C(t) {
            return r.a.$getApi("sportsTrendData", "match/trend", t).then((function(t) {
                return t.data
            }
            ))
        }
    },
    66: function(t, e, n) {
        "use strict";
        n(68);
        e.a = function(t, e) {
            var n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = [], i = 0;
            if (e = e || r.length,
            t)
                for (i = 0; i < t; i++)
                    a[i] = r[0 | Math.random() * e];
            else
                for (a[8] = a[13] = a[18] = a[23] = "-",
                a[14] = "4",
                i = 0; i < 36; i++)
                    a[i] || (n = 0 | 16 * Math.random(),
                    a[i] = r[19 === i ? 3 & n | 8 : n]);
            return a.join("")
        }
    },
    70: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "g", (function() {
            return i
        }
        )),
        n.d(e, "a", (function() {
            return o
        }
        )),
        n.d(e, "c", (function() {
            return c
        }
        )),
        n.d(e, "f", (function() {
            return s
        }
        )),
        n.d(e, "i", (function() {
            return u
        }
        )),
        n.d(e, "h", (function() {
            return l
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        )),
        n.d(e, "j", (function() {
            return p
        }
        )),
        n.d(e, "e", (function() {
            return d
        }
        ));
        var r = n(3);
        function a() {
            return r.a.$getApi("getAnchorHotListJson", "match/anchor/hot/list").then((function(t) {
                return t.data
            }
            ))
        }
        function i(t) {
            return r.a.$getApi("getMatchTotalSize", "match/index/".concat(t, "/num")).then((function(t) {
                return t.data
            }
            ))
        }
        function o(t) {
            var e = {
                gameType: t.gameType,
                focusId: t.matchId,
                type: 1
            };
            return r.a.$postApi("focusMatch-".concat(t.gameType, "-").concat(t.matchId), "user/focus/match", e).then((function(t) {
                return t.data
            }
            ))
        }
        function c() {
            return r.a.$getApi("getGameTypeList", "match/game/type/list").then((function(t) {
                return t.data
            }
            ))
        }
        function s(t) {
            var e = t.gameType
              , n = void 0 === e ? 99 : e
              , a = t.timeType
              , i = void 0 === a ? 0 : a;
            return r.a.$getApi("getMatchListJson", "match/index/".concat(n, "/list/").concat(i)).then((function(t) {
                return t.data
            }
            ))
        }
        function u(t) {
            return r.a.$postApi("getStartMatchList", "match/battle/ids", t).then((function(t) {
                return t.data
            }
            ))
        }
        function l(t, e) {
            return r.a.$getApi("getRankListJson", "team/rank/".concat(t, "/list/").concat(e)).then((function(t) {
                return t.data
            }
            ))
        }
        function f() {
            return r.a.$getApi("getHotAnchorsList", "anchor/recommend/list").then((function(t) {
                return t.data
            }
            ))
        }
        function p(t) {
            return r.a.$postApi("subscribeAnchor", "anchor/subscribe", {
                userId: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function d(t) {
            return r.a.$getApi("getLotteryListApi", "match/game/type/search/list", {
                gameType: t
            }).then((function(t) {
                return t && t.data || {}
            }
            ))
        }
    },
    77: function(t, e, n) {
        "use strict";
        n(31),
        n(19),
        n(10),
        n(8),
        n(14),
        n(28);
        var r = n(6)
          , a = (n(29),
        n(1))
          , i = (n(67),
        n(22),
        n(24),
        n(145))
          , o = n.n(i)
          , c = n(0)
          , s = n(97)
          , u = n(122)
          , l = {
            MOBILE: 0,
            QRCODE: 1
        }
          , f = {
            name: "LoginPanel",
            components: {
                VueQr: o.a
            },
            props: {
                themeType: {
                    type: Number,
                    default: c.i.BLACK_THEME
                }
            },
            data: function() {
                return {
                    PATH_RULE_URL: "https://www.fnscore.cn",
                    LOGIN_TYPE: l,
                    LoginPanelList: [{
                        title: "验证码登录",
                        index: l.MOBILE,
                        key: "phone"
                    }, {
                        title: "扫码登录",
                        index: l.QRCODE,
                        key: "qrcode"
                    }],
                    activePanelIndex: l.MOBILE,
                    showLoginPanel: !1,
                    USER_LOGIN_STATUS: c.j,
                    loginSuccess: !1,
                    loginPanelTxt: "打开蜂鸟竞技APP，在【我的】 扫码登录",
                    privateRead: !1,
                    isScrollVerify: !1,
                    inputLoginParam: {
                        phone: "",
                        code: "",
                        clientType: 1
                    },
                    sendCodeBtnInterval: null,
                    closeRefreshObj: null,
                    refreshTime: null,
                    refreshSize: 3,
                    qrcodeObj: {
                        showAppBtn: !0,
                        showStatusPanel: !1,
                        status: c.j.CREATED,
                        guessTxt: "二维码过期，点击刷新"
                    },
                    successObj: {
                        infoText: "登录成功，3s后弹窗自动关闭",
                        avatar: "def_user_atvter.png"
                    },
                    loginStatus: c.j.CREATED,
                    loginObj: {
                        url: "www.fnscore.cn",
                        uuid: ""
                    },
                    inputPhone: "",
                    inputPhoneError: !1,
                    inputCode: "",
                    inputCodeError: !1,
                    sendCodeBtn: "获取验证码",
                    sendCodeEnable: !0,
                    isRefreshPage: !1,
                    shumeiRid: "",
                    smCaptchaInstance: null
                }
            },
            computed: {
                isWhiteTheme: function() {
                    return this.themeType === c.i.WHITE_THEME
                }
            },
            mounted: function() {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$bus.$on("showLoginPanel", (function(e) {
                                    var n = e.value
                                      , r = e.descTxt
                                      , a = e.isRefreshPage
                                      , i = void 0 !== a && a;
                                    t.isRefreshPage = i,
                                    n && n !== t.showLoginPanel && (t.lockPageScroll(),
                                    t.initPanelObj(),
                                    t.refreshQrcode(!1),
                                    t.loginPanelTxt = r || "打开蜂鸟竞技APP，在【我的】 扫码登录",
                                    setTimeout((function() {
                                        t.showLoginPanel = n
                                    }
                                    ), 300))
                                }
                                )),
                                t.loadShumeiScript();
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            methods: {
                lockPageScroll: function() {
                    window && window.document && (document.body.style = "overflow: hidden; height: 100%;")
                },
                unlockPageScroll: function() {
                    window && window.document && (document.body.style = "")
                },
                refreshResultStatus: function() {
                    var t = this;
                    if (this.loginObj.uuid) {
                        var e = this.loginObj.uuid;
                        Object(s.c)({
                            uuid: e
                        }).then((function(e) {
                            var n = e.scanStatus;
                            t.nextAction(n, e)
                        }
                        )).catch((function(e) {
                            t.nextAction(t.loginStatus)
                        }
                        ))
                    }
                },
                nextAction: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.cleanRefreshTime(),
                    this.loginStatus = t,
                    t === c.j.CREATED ? this.refreshTime = setTimeout((function() {
                        return e.refreshResultStatus()
                    }
                    ), 1500) : t === c.j.SCAN_SUCCESS ? (this.qrcodeObj.guessTxt = "扫码成功",
                    this.refreshTime = setTimeout((function() {
                        return e.refreshResultStatus()
                    }
                    ), 1500)) : t === c.j.LOGIN_SUCCESS ? (this.loginSuccess = !0,
                    this.handlerLogin(n)) : t === c.j.SCAN_FAIL ? this.qrcodeObj.guessTxt = "登录失败，请重新扫码" : t === c.j.EXPIRE && (this.qrcodeObj.guessTxt = "二维码过期，点击刷新")
                },
                handlerLogin: function(t) {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function n() {
                        var r, a;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return r = t.accessToken,
                                    (a = t.user) && a.avatar && (e.successObj.avatar = a.avatar),
                                    n.next = 5,
                                    e.$store.commit("user/UPDATE_USER", {
                                        user: a,
                                        accessToken: r
                                    });
                                case 5:
                                    if (Object(u.c)(),
                                    e.intervalClose(),
                                    !location.href.includes("/score/")) {
                                        n.next = 10;
                                        break
                                    }
                                    return window.location.reload(),
                                    n.abrupt("return");
                                case 10:
                                    e.isRefreshPage ? window.location.reload() : e.$bus.$emit("loginCallBackAction");
                                case 11:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                intervalClose: function() {
                    var t = this;
                    this.refreshSize = 3,
                    this.closeRefreshObj = setInterval((function() {
                        t.refreshSize <= 0 ? t.closeProp() : t.refreshSize--
                    }
                    ), 1e3)
                },
                closeProp: function() {
                    this.unlockPageScroll(),
                    this.cleanRefreshTime(),
                    clearInterval(this.closeRefreshObj),
                    this.showLoginPanel = !1,
                    this.$bus.$emit("hideLoginPanel", this.showLoginPanel)
                },
                cleanRefreshTime: function() {
                    this.refreshTime = clearTimeout(this.refreshTime)
                },
                refreshQrcode: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e && this.loginStatus !== c.j.SCAN_FAIL && this.loginStatus !== c.j.EXPIRE || Object(s.d)().then((function(e) {
                        t.loginObj = Object.assign({}, t.loginObj, e),
                        t.loginStatus = c.j.CREATED,
                        t.refreshResultStatus()
                    }
                    )).catch((function(t) {}
                    ))
                },
                initPanelObj: function() {
                    this.qrcodeObj = {
                        showAppBtn: !0,
                        showStatusPanel: !1,
                        status: c.j.CREATED,
                        guessTxt: "二维码过期，点击刷新"
                    },
                    this.loginSuccess = !1
                },
                getPhoneCode: function() {
                    this.checkPhoneInput(),
                    this.inputPhoneError || this.isScrollVerify || (this.smCaptchaInstance ? this.smCaptchaInstance.verify() : this.initShumei(!0))
                },
                doSendPhoneCode: function() {
                    var t = this
                      , e = {
                        phone: this.inputPhone,
                        rid: this.shumeiRid,
                        expectedMode: "slide"
                    };
                    Object(s.f)(e).then((function(e) {
                        var n = e.code
                          , r = void 0 === n ? 0 : n
                          , a = e.message;
                        r ? t.showErrorMessage(e, a) : (t.refreshSendCodeBtn(),
                        t.inputLoginParam.phone = t.inputPhone)
                    }
                    )).catch((function(e) {
                        t.$toast.show(e.message)
                    }
                    ))
                },
                checkPhoneInput: function() {
                    return this.inputPhoneError = !(this.inputPhone && /^1[3456789]\d{9}$/.test(this.inputPhone)),
                    this.inputPhoneError
                },
                refreshSendCodeBtn: function() {
                    var t = this
                      , e = 120;
                    this.sendCodeBtnInterval = setInterval((function() {
                        0 === --e ? (clearInterval(t.sendCodeBtnInterval),
                        t.sendCodeBtn = "重新发送",
                        t.sendCodeEnable = !0) : (t.sendCodeBtn = "已经发送(".concat(e, "s)"),
                        t.sendCodeEnable = !1)
                    }
                    ), 1e3)
                },
                toLoginAction: function() {
                    var t = this;
                    this.checkPhoneInput() ? this.$toast.show("请先填写正确的手机号码") : this.isScrollVerify ? this.privateRead ? this.inputPhoneError ? this.$toast.error("请先获取手机验证码, 再登录") : this.inputCode && 4 === this.inputCode.length ? (this.inputCodeError = !1,
                    this.inputLoginParam.code = this.inputCode,
                    this.inputLoginParam.phone = this.inputPhone,
                    Object(s.e)(this.inputLoginParam).then((function(e) {
                        var n = e.code;
                        (void 0 === n ? 0 : n) ? t.showErrorMessage(e, "登录失败") : (t.loginSuccess = !0,
                        t.handlerLogin(e))
                    }
                    ))) : this.inputCodeError = !0 : this.$toast.show("请同意用户协议与隐私条款") : this.$toast.show("请先完成滑动再进行登录")
                },
                showErrorMessage: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "验证码发送失败"
                      , n = t && t.response && t.response.resultInfo || e;
                    this.$toast.show(n)
                },
                loadShumeiScript: function() {
                    var t = this;
                    if (window.initSMCaptcha)
                        this.initShumei();
                    else {
                        var e = document.createElement("script");
                        e.src = "https://castatic.fengkongcloud.cn/pr/v1.0.4/smcp.min.js",
                        e.onload = function() {
                            t.initShumei()
                        }
                        ,
                        document.body.appendChild(e)
                    }
                },
                initShumei: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    window.initSMCaptcha && window.initSMCaptcha({
                        organization: "oSM9uhkWpKf17myQ03nE",
                        appId: "default",
                        product: "popup",
                        width: 300,
                        mode: "slide",
                        https: !0
                    }, (function(n) {
                        t.smCaptchaInstance = n,
                        e && n.verify(),
                        n.onSuccess((function(e) {
                            t.shumeiRid = e.rid,
                            t.isScrollVerify = e.pass,
                            e.pass && t.doSendPhoneCode()
                        }
                        )),
                        n.onError((function(e, n) {
                            t.isScrollVerify = !1
                        }
                        ))
                    }
                    ))
                },
                refreshInputStatus: function() {
                    this.inputPhone = "",
                    this.inputPhoneError = !1,
                    this.inputCode = "",
                    this.inputCodeError = !1,
                    this.privateRead = !1,
                    clearInterval(this.sendCodeBtnInterval),
                    this.sendCodeBtn = "获取验证码",
                    this.sendCodeEnable = !0,
                    this.isScrollVerify = !1,
                    this.shumeiRid = "",
                    this.smCaptchaInstance = null,
                    this.cleanRefreshTime()
                }
            },
            beforeDestroy: function() {
                this.cleanRefreshTime()
            },
            watch: {
                showLoginPanel: {
                    handler: function(t, e) {
                        t || (this.closeProp(),
                        this.refreshInputStatus())
                    }
                }
            }
        }
          , p = (n(404),
        n(405),
        n(406),
        n(7))
          , d = Object(p.a)(f, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showLoginPanel,
                    expression: "showLoginPanel"
                }],
                class: ["login-panel", {
                    "white-theme": t.isWhiteTheme
                }]
            }, [n("div", {
                staticClass: "login-panel-bg"
            }), n("div", {
                staticClass: "login-container"
            }, [n("div", {
                staticClass: "header-panel"
            }, t._l(t.LoginPanelList, (function(e) {
                return n("div", {
                    key: e.index,
                    class: ["login-title-panel", {
                        "active-title-panel": e.index === t.activePanelIndex
                    }],
                    on: {
                        click: function(n) {
                            t.activePanelIndex = e.index
                        }
                    }
                }, [n("p", {
                    staticClass: "title-text"
                }, [t._v(t._s(e.title))]), n("div", {
                    staticClass: "line"
                })])
            }
            )), 0), t.loginSuccess ? n("div", {
                staticClass: "success-panel"
            }, [n("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: t.httpImg(t.successObj.avatar || "def_user_atvter.png"),
                    alt: "用户头像"
                }
            }), n("p", {
                staticClass: "status-txt"
            }, [t._v("登录成功，" + t._s(t.refreshSize) + "s后弹窗自动关闭")])]) : n("div", {
                staticClass: "container"
            }, [t.activePanelIndex === t.LOGIN_TYPE.MOBILE ? n("div", {
                staticClass: "phone-login-panel"
            }, [n("div", {
                staticClass: "input-panel"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.inputPhone,
                    expression: "inputPhone"
                }],
                staticClass: "input-tag phone",
                class: {
                    "err-panel": t.inputPhoneError
                },
                attrs: {
                    type: "number",
                    onkeyup: "value=value.replace(/^(0+)|[^\\d]+/g,'')",
                    placeholder: "请输入手机号码"
                },
                domProps: {
                    value: t.inputPhone
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.inputPhone = e.target.value)
                    }
                }
            }), n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.inputPhone,
                    expression: "inputPhone"
                }],
                staticClass: "clean-icon",
                attrs: {
                    src: t.iconImg("input_clean_icon_001.png")
                },
                on: {
                    click: function(e) {
                        t.inputPhone = ""
                    }
                }
            }), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.inputPhoneError,
                    expression: "inputPhoneError"
                }],
                staticClass: "err-txt"
            }, [t._v("请输入正确的手机号码")])]), n("div", {
                staticClass: "input-panel",
                staticStyle: {
                    "margin-top": "24px"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.inputCode,
                    expression: "inputCode"
                }],
                staticClass: "input-tag send-code",
                class: {
                    "err-panel": t.inputCodeError
                },
                attrs: {
                    type: "number",
                    placeholder: "请输验证码",
                    onkeyup: "value=value.replace(/^[^\\d]+/g,'')"
                },
                domProps: {
                    value: t.inputCode
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.inputCode = e.target.value)
                    }
                }
            }), n("button", {
                staticClass: "send-code-btn",
                attrs: {
                    disabled: !t.sendCodeEnable
                },
                on: {
                    click: t.getPhoneCode
                }
            }, [t._v(t._s(t.sendCodeBtn))]), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.inputCodeError,
                    expression: "inputCodeError"
                }],
                staticClass: "err-txt"
            }, [t._v("请输入正确的验证码")])]), n("div", {
                staticClass: "agreement-panel",
                staticStyle: {
                    "margin-top": "12px"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.privateRead,
                    expression: "privateRead"
                }],
                attrs: {
                    type: "checkbox",
                    id: "privateRead",
                    name: "check"
                },
                domProps: {
                    checked: Array.isArray(t.privateRead) ? t._i(t.privateRead, null) > -1 : t.privateRead
                },
                on: {
                    change: function(e) {
                        var n = t.privateRead
                          , r = e.target
                          , a = !!r.checked;
                        if (Array.isArray(n)) {
                            var i = t._i(n, null);
                            r.checked ? i < 0 && (t.privateRead = n.concat([null])) : i > -1 && (t.privateRead = n.slice(0, i).concat(n.slice(i + 1)))
                        } else
                            t.privateRead = a
                    }
                }
            }), n("label", {
                attrs: {
                    form: "privateRead"
                },
                on: {
                    click: function(e) {
                        t.privateRead = !t.privateRead
                    }
                }
            }), n("p", [t._v("已阅读并同意"), n("a", {
                attrs: {
                    href: t.PATH_RULE_URL + "/article/privacy.html",
                    target: "_blank"
                }
            }, [t._v("《隐私政策》")]), t._v("与"), n("a", {
                attrs: {
                    href: t.PATH_RULE_URL + "/article/userRule.html",
                    target: "_blank"
                }
            }, [t._v("《用户协议》")])])]), n("div", {
                staticClass: "login-btn-panel",
                staticStyle: {
                    "margin-top": "24px"
                }
            }, [n("button", {
                staticClass: "login-btn",
                on: {
                    click: t.toLoginAction
                }
            }, [t._v("登录")])])]) : t._e(), t.activePanelIndex === t.LOGIN_TYPE.QRCODE ? n("div", {
                staticClass: "qrcode-login-panel"
            }, [n("div", {
                staticClass: "qrcode-panel"
            }, [n("vue-qr", {
                staticClass: "qrcode-icon",
                attrs: {
                    size: 160,
                    correctLevel: 3,
                    margin: 10,
                    text: t.loginObj.url,
                    backgroundColor: "#f5f6fa",
                    alt: "download qrcode",
                    dotScale: .5
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loginStatus !== t.USER_LOGIN_STATUS.CREATED,
                    expression: "loginStatus !== USER_LOGIN_STATUS.CREATED"
                }],
                staticClass: "qrcode-gauss-bg",
                on: {
                    click: function(e) {
                        return t.refreshQrcode(!0)
                    }
                }
            }, [n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loginStatus === t.USER_LOGIN_STATUS.SCAN_SUCCESS,
                    expression: "loginStatus === USER_LOGIN_STATUS.SCAN_SUCCESS"
                }],
                staticClass: "icon",
                attrs: {
                    src: t.iconImg("login_success_icon.png"),
                    alt: "success"
                }
            }), n("p", [t._v(t._s(t.qrcodeObj.guessTxt))])]), n("div", {
                staticClass: "panel-footer"
            }, [n("p", {
                staticClass: "desc-txt"
            }, [t._v(t._s(t.loginPanelTxt))]), n("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loginStatus === t.USER_LOGIN_STATUS.CREATED,
                    expression: "loginStatus === USER_LOGIN_STATUS.CREATED"
                }],
                staticClass: "download-app-btn",
                attrs: {
                    href: "https://app.fnscore.cn",
                    target: "_blank"
                }
            }, [t._v("下载APP")])])], 1)]) : t._e()])]), n("img", {
                staticClass: "close-icon",
                attrs: {
                    src: t.iconImg("login_panel_close_icon.png"),
                    alt: "login icon"
                },
                on: {
                    click: t.closeProp
                }
            })])
        }
        ), [], !1, null, "65300226", null).exports
          , h = n(20)
          , m = n(148);
        function g(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? g(Object(n), !0).forEach((function(e) {
                    Object(a.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var _ = {
            WEIXI: 1,
            ALLIPAY: 2
        }
          , b = {
            UN_CONFIRM: 0,
            PAY_SUCCESS: 1,
            PAY_FAILED: 2,
            REFUND: 3
        }
          , y = {
            name: "PayPopPanel",
            data: function() {
                return {
                    PATH_PC_URL: "https://www.fnscore.cn",
                    PAY_STATUS: b,
                    PAY_WAY: _,
                    recharges: {},
                    payTypes: [],
                    showPanel: !1,
                    activeIndex: 0,
                    diamondNum: "",
                    payActiveIndex: 0,
                    privateRuleRead: !0,
                    selectRechargeObj: {},
                    selectPayObj: {},
                    payPreScanObj: {
                        payWay: _.WEIXI,
                        scanContent: "",
                        serialNumber: "",
                        messageText: "支付成功"
                    },
                    aliPayPanel: null,
                    showEnablePrivateRead: !1,
                    inputTimer: null,
                    payStatusTimer: null,
                    showPayQrCodePanel: !0
                }
            },
            components: {
                VueQr: o.a
            },
            computed: v(v({}, Object(h.b)("user", ["currentUser"])), {}, {
                customerPrice: function() {
                    return 1 * this.diamondNum
                },
                payTypeList: function() {
                    var t = this;
                    return [{
                        payType: _.WEIXI,
                        name: "微信支付",
                        icon: "weix_pay_icon.png"
                    }, {
                        payType: _.ALLIPAY,
                        name: "支付宝",
                        icon: "zhifu_pay_icon.png"
                    }].filter((function(e) {
                        return t.payTypes.includes(e.payType)
                    }
                    ))
                },
                showPrice: function() {
                    return this.activeIndex >= 0 ? this.selectRechargeObj && this.selectRechargeObj.price / 100 : 1 * this.diamondNum || ""
                }
            }),
            mounted: function() {
                var t = this;
                this.$bus.$on("showPayPanel", (function() {
                    t.showPanel = !0
                }
                ))
            },
            methods: {
                initRechargeList: function() {
                    var t = this;
                    Object(m.f)().then((function(e) {
                        t.recharges = e.recharges,
                        t.payTypes = e.types,
                        t.changePayRecharge(0, !0),
                        t.changePayType(0, !0),
                        t.refreshPayQrcode()
                    }
                    ))
                },
                initPayTypeWay: function() {
                    this.payTypeList && this.payTypeList[0] && (this.payPreScanObj.payWay = this.payTypeList[0].payType)
                },
                refreshUserInfo: function() {
                    this.$store.dispatch("user/fetchUserDetail")
                },
                changePayRecharge: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.activeIndex = t,
                    t >= 0 ? (this.selectRechargeObj = this.recharges[t],
                    this.showPayQrCodePanel = !0,
                    this.refreshPayQrcode(e),
                    this.diamondNum = "") : this.showPayQrCodePanel = this.diamondNum
                },
                changePayType: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.payActiveIndex = t,
                    this.selectPayObj = this.payTypeList[t],
                    this.refreshPayQrcode(e)
                },
                hidePanel: function() {
                    this.showPanel = !1,
                    this.closeRefreshPayStatus(!0)
                },
                refreshPayQrcode: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!e && this.showPayQrCodePanel) {
                        if (!this.showPrice || 0 === this.showPrice)
                            return this.$toast.show("充值价格不能为空或0"),
                            void (this.showPayQrCodePanel = !1);
                        if (!this.privateRuleRead)
                            return this.showEnablePrivateRead = !0,
                            void this.$toast.show("需同意服务协议后才能继续");
                        var n = this.activeIndex >= 0 ? this.selectRechargeObj.id : 999
                          , r = this.activeIndex >= 0 ? this.selectRechargeObj.diamond : this.showPrice
                          , a = {
                            rechargeId: n,
                            rechargePrice: 100 * this.showPrice,
                            rechargeDiamond: r,
                            payWay: this.selectPayObj.payType
                        };
                        Object(m.d)(a).then((function(e) {
                            if (e.status) {
                                var n = e.response;
                                t.$toast.show(n.resultInfo),
                                t.showPayQrCodePanel = !1
                            } else
                                t.payPreScanObj = e,
                                t.payPreScanObj.payWay === _.ALLIPAY && t.urlLoadPayQrCode(),
                                t.startRefreshPayStatus()
                        }
                        ))
                    }
                },
                refreshShowPayQrCode: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.privateRuleRead) {
                                        e.next = 6;
                                        break
                                    }
                                    return t.showPayQrCodePanel = !0,
                                    e.next = 4,
                                    t.refreshPayQrcode();
                                case 4:
                                    e.next = 8;
                                    break;
                                case 6:
                                    t.showEnablePrivateRead = !0,
                                    t.$toast.show("需同意服务协议后才能继续");
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                startRefreshPayStatus: function() {
                    var t = this;
                    this.closeRefreshPayStatus(),
                    this.payStatusTimer = setInterval((function() {
                        t.showPanel && t.showPayQrCodePanel && t.refreshPayStatus()
                    }
                    ), 1e3)
                },
                closeRefreshPayStatus: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.payStatusTimer && (clearInterval(this.payStatusTimer),
                    this.payStatusTimer = null),
                    t && (this.showPayQrCodePanel = !0,
                    this.payPreScanObj.payWay === _.ALLIPAY && this.urlLoadPayQrCode())
                },
                urlLoadPayQrCode: function() {
                    document.getElementById("aliPayPanel").src = "data:text/html;charset=utf-8, ".concat(encodeURI(this.payPreScanObj.scanContent))
                },
                checkBoxEnable: function() {
                    this.privateRuleRead ? (this.showEnablePrivateRead = !1,
                    this.showPayQrCodePanel = !0,
                    this.refreshPayQrcode()) : this.showPayQrCodePanel = !1
                },
                updateCheckBoxValue: function() {
                    this.privateRuleRead = !this.privateRuleRead,
                    this.checkBoxEnable()
                },
                refreshPayStatus: function() {
                    var t = this;
                    if (this.payPreScanObj && this.payPreScanObj.serialNumber) {
                        var e = this.payPreScanObj.serialNumber;
                        Object(m.e)(e).then((function(e) {
                            var n = e.orderStatus;
                            n === b.PAY_SUCCESS ? (t.refreshUserInfo(),
                            t.$toast.success(t.payPreScanObj.messageText),
                            t.closeRefreshPayStatus(!0),
                            t.refreshPayQrcode()) : n === b.PAY_FAILED && (t.initRechargeList(),
                            t.$toast.show("支付失败,请重试"),
                            t.closeRefreshPayStatus(!0),
                            t.refreshPayQrcode())
                        }
                        ))
                    }
                },
                checkInputValue: function() {
                    this.diamondNum > 1500 ? this.diamondNum = 1500 : this.diamondNum <= 0 ? this.diamondNum = "" : this.diamondNum = Math.round(this.diamondNum)
                },
                resetPageData: function() {
                    this.diamondNum = ""
                }
            },
            watch: {
                diamondNum: function(t) {
                    var e = this;
                    this.inputTimer ? (clearTimeout(this.inputTimer),
                    this.inputTimer = setTimeout((function() {
                        e.refreshPayQrcode()
                    }
                    ), 1e3)) : this.inputTimer = setTimeout((function() {
                        e.refreshPayQrcode()
                    }
                    ), 1e3)
                },
                showPanel: function(t) {
                    t ? (this.initRechargeList(),
                    this.resetPageData()) : this.closeRefreshPayStatus()
                }
            }
        }
          , T = (n(407),
        Object(p.a)(y, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPanel,
                    expression: "showPanel"
                }],
                staticClass: "pay-bg-panel",
                on: {
                    click: function(e) {
                        if (e.target !== e.currentTarget)
                            return null;
                        t.showPanel = !1
                    }
                }
            }, [n("div", {
                staticClass: "pay-pop-wrapper"
            }, [n("div", {
                staticClass: "head-panel"
            }, [n("p", {
                staticClass: "title-text"
            }, [t._v("充值")]), n("img", {
                staticClass: "pay-close-icon",
                attrs: {
                    src: t.iconImg("login_panel_close_icon.png"),
                    alt: "close icon"
                },
                on: {
                    click: t.hidePanel
                }
            })]), n("div", {
                staticClass: "pay-container"
            }, [n("div", {
                staticClass: "item-panel user-info"
            }, [n("p", {
                staticClass: "title"
            }, [t._v("充值用户")]), n("div", {
                staticClass: "user-info-panel"
            }, [n("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: t.httpImg(t.currentUser.avatar || "def_user_atvter.png")
                }
            }), n("div", {
                staticClass: "desc-info"
            }, [n("p", {
                staticClass: "name"
            }, [t._v(t._s(t.currentUser.nickname))]), n("p", {
                staticClass: "phone"
            }, [t._v("登录手机: " + t._s(t.currentUser.phone))])]), n("div", {
                staticClass: "account-panel"
            }, [n("p", {
                staticClass: "diamond"
            }, [t._v("当前余额 "), n("img", {
                staticClass: "icon",
                attrs: {
                    src: t.iconImg("diamonds-icon.png")
                }
            }), t._v(" "), n("span", {
                staticClass: "number"
            }, [t._v(t._s(t.currentUser.diamond))])]), n("p", {
                staticClass: "tag-txt"
            }, [t._v("明细记录请使用APP查看")])])])]), n("div", {
                staticClass: "link"
            }), n("div", {
                staticClass: "item-panel recharge-panel"
            }, [n("p", {
                staticClass: "title"
            }, [t._v("选择充值包")]), n("div", {
                staticClass: "recharge-list"
            }, [t._l(t.recharges, (function(e, r) {
                return n("div", {
                    key: e.id,
                    class: ["item-panel", {
                        "active-panel": t.activeIndex === r
                    }],
                    on: {
                        click: function(e) {
                            return t.changePayRecharge(r)
                        }
                    }
                }, [n("p", {
                    staticClass: "diamond"
                }, [t._v(t._s(e.diamond) + "钻石")]), n("p", {
                    staticClass: "price"
                }, [t._v("¥ " + t._s(e.price / 100))]), e.giveDiamond ? n("p", {
                    staticClass: "give"
                }, [t._v("赠" + t._s(e.giveDiamond) + "钻")]) : t._e()])
            }
            )), n("div", {
                class: ["item-panel", {
                    "active-panel": -1 === t.activeIndex
                }],
                on: {
                    click: function(e) {
                        return t.changePayRecharge(-1)
                    }
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.diamondNum,
                    expression: "diamondNum"
                }],
                staticClass: "diamond input-type",
                attrs: {
                    type: "number",
                    min: "0",
                    max: "1500",
                    placeholder: "请输入正整数",
                    onKeypress: "return (/[\\d]/.test(String.fromCharCode(event.keyCode)))"
                },
                domProps: {
                    value: t.diamondNum
                },
                on: {
                    blur: t.checkInputValue,
                    input: function(e) {
                        e.target.composing || (t.diamondNum = e.target.value)
                    }
                }
            }), n("p", {
                staticClass: "price"
            }, [t._v("¥ " + t._s(t.customerPrice || "--"))])])], 2)]), n("div", {
                staticClass: "item-panel pay-type-panel"
            }, [n("p", {
                staticClass: "title"
            }, [t._v("支付方式")]), t._l(t.payTypeList, (function(e, r) {
                return n("div", {
                    key: e.payType,
                    class: ["pay-item", {
                        "active-pay-item": t.payActiveIndex == r
                    }],
                    on: {
                        click: function(e) {
                            return t.changePayType(r)
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.iconImg(e.icon)
                    }
                }), n("p", {
                    staticClass: "txt"
                }, [t._v(t._s(e.name))])])
            }
            ))], 2), n("div", {
                staticClass: "link"
            }), n("div", {
                staticClass: "item-panel pay-panel"
            }, [n("p", {
                staticClass: "title"
            }, [t._v("支付金额")]), n("div", {
                staticClass: "pay-panel-container"
            }, [n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrice,
                    expression: "showPrice"
                }],
                staticClass: "pay-price"
            }, [t._v("¥ " + t._s(t.showPrice))]), n("div", {
                staticClass: "qrcode-panel"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPayQrCodePanel && t.payPreScanObj.payWay === t.PAY_WAY.WEIXI,
                    expression: "showPayQrCodePanel && payPreScanObj.payWay === PAY_WAY.WEIXI"
                }],
                staticClass: "qrcode-img"
            }, [n("vue-qr", {
                staticClass: "qrcode-icon",
                attrs: {
                    size: 140,
                    correctLevel: 3,
                    margin: 4,
                    text: t.payPreScanObj.scanContent,
                    backgroundColor: "#FFF",
                    alt: "download qrcode",
                    dotScale: .8
                }
            })], 1), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPayQrCodePanel && t.payPreScanObj.payWay === t.PAY_WAY.ALLIPAY,
                    expression: "showPayQrCodePanel && payPreScanObj.payWay === PAY_WAY.ALLIPAY"
                }],
                staticClass: "qrcode-img"
            }, [n("iframe", {
                attrs: {
                    id: "aliPayPanel",
                    width: "155px",
                    height: "158px"
                }
            })]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showPayQrCodePanel,
                    expression: "!showPayQrCodePanel"
                }],
                staticClass: "qrcode-img pay-btn-panel"
            }, [n("button", {
                staticClass: "show-pay-btn",
                on: {
                    click: t.refreshShowPayQrCode
                }
            }, [t._v("立即支付")])]), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPayQrCodePanel,
                    expression: "showPayQrCodePanel"
                }],
                staticClass: "pay-txt"
            }, [t._v("使用 "), n("img", {
                staticClass: "icon",
                attrs: {
                    src: t.iconImg(t.selectPayObj.icon)
                }
            }), t._v(" " + t._s(t.selectPayObj.name) + " 扫码支付")]), n("div", {
                staticClass: "private"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.privateRuleRead,
                    expression: "privateRuleRead"
                }],
                attrs: {
                    type: "checkbox",
                    id: "privateRuleRead",
                    name: "check"
                },
                domProps: {
                    checked: Array.isArray(t.privateRuleRead) ? t._i(t.privateRuleRead, null) > -1 : t.privateRuleRead
                },
                on: {
                    change: function(e) {
                        var n = t.privateRuleRead
                          , r = e.target
                          , a = !!r.checked;
                        if (Array.isArray(n)) {
                            var i = t._i(n, null);
                            r.checked ? i < 0 && (t.privateRuleRead = n.concat([null])) : i > -1 && (t.privateRuleRead = n.slice(0, i).concat(n.slice(i + 1)))
                        } else
                            t.privateRuleRead = a
                    }
                }
            }), n("label", {
                attrs: {
                    form: "privateRuleRead"
                },
                on: {
                    click: t.updateCheckBoxValue
                }
            }), n("a", {
                attrs: {
                    href: t.PATH_PC_URL + "/article/payRule.html",
                    target: "_black"
                }
            }, [t._v("阅读并同意《充值服务协议》")]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showEnablePrivateRead,
                    expression: "showEnablePrivateRead"
                }],
                staticClass: "private-read-enable"
            }, [n("div", {
                staticClass: "tri-tag"
            }), n("p", {
                staticClass: "txt"
            }, [t._v("需同意服务协议")])])])])])])])])])
        }
        ), [], !1, null, "55ad8f74", null).exports)
          , O = n(44)
          , w = n.n(O)
          , E = (n(49),
        function() {
            w.a.remove("jwt")
        }
        );
        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach((function(e) {
                    Object(a.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var L = {
            name: "HgNavbar",
            components: {
                LoginPanel: d,
                PayPopPanel: T
            },
            props: {
                themeType: {
                    type: Number,
                    default: c.i.BLACK_THEME
                }
            },
            data: function() {
                return {
                    navLinkList: [{
                        title: "首页",
                        hoverStatus: !1,
                        url: "/",
                        name: "index",
                        target: "_self"
                    }, {
                        title: "赛事直播",
                        hoverStatus: !1,
                        url: "/live.html",
                        name: "live",
                        target: "_self"
                    }, {
                        title: "赛程",
                        hoverStatus: !1,
                        url: "/score.html",
                        name: "score",
                        target: "_self"
                    }, {
                        title: "赛事库",
                        hoverStatus: !1,
                        url: "/league.html",
                        name: "league-gameType",
                        target: "_self"
                    }, {
                        title: "资讯",
                        hoverStatus: !1,
                        url: "/information.html",
                        name: "information",
                        target: "_self"
                    }]
                }
            },
            computed: C(C({}, Object(h.b)("user", ["isLogined", "currentUser"])), {}, {
                isWhiteTheme: function() {
                    return this.themeType === c.i.WHITE_THEME
                }
            }),
            methods: {
                jumpHome: function() {
                    window.open("/", "_self")
                },
                isActiveRoute: function(t) {
                    return this.$route.name && -1 !== this.$route.name.indexOf(t)
                },
                getLinkClass: function(t) {
                    return {
                        isActive: this.isActiveRoute(t)
                    }
                },
                setTrack: function(t) {
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t.hoverStatus = !0;
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                handleFavorite: function() {
                    var t = window.location.origin
                      , e = document.title;
                    this.addFavorite(t, e)
                },
                addFavorite: function(t, e) {
                    try {
                        window.external.addFavorite(t, e)
                    } catch (r) {
                        try {
                            window.sidebar.addPanel(e, t, "")
                        } catch (t) {
                            var n = -1 !== (navigator && navigator.userAgent).toLowerCase().indexOf("mac") ? "Command" : "Ctrl";
                            window.alert("加入收藏失败，请使用".concat(n, " + D进行添加"))
                        }
                    }
                },
                showLoginPanel: function() {
                    this.$bus.$emit("showLoginPanel", {
                        value: !0
                    })
                },
                loginOut: function() {
                    E(),
                    this.$store.commit("user/UPDATE_USER", {}),
                    window && window.location && window.location.reload()
                },
                openAppDownload: function() {
                    window.open("https://app.fnscore.cn", "_blank")
                },
                openPayPanel: function() {
                    this.isLogined ? this.$bus.$emit("showPayPanel") : this.showLoginPanel()
                }
            }
        }
          , j = (n(408),
        Object(p.a)(L, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: ["navbar", {
                    "white-theme": t.isWhiteTheme
                }]
            }, [n("div", {
                staticClass: "navbar-container"
            }, [n("img", {
                staticClass: "icon_logo",
                attrs: {
                    src: t.iconImg(t.isWhiteTheme ? "header_white_logo_002.png" : "new_header_logo_icon_010.png"),
                    alt: "logo"
                },
                on: {
                    click: t.jumpHome
                }
            }), n("div", {
                staticClass: "nav-panel"
            }, [t._l(t.navLinkList, (function(e, r) {
                return [e.hasIcon ? n("img", {
                    key: r,
                    staticClass: "nav-panel-icon",
                    attrs: {
                        src: t.iconImg("pc_phone_icon.png"),
                        alt: "pc_phone_icon"
                    }
                }) : t._e(), n("a", {
                    key: r,
                    ref: "noopener",
                    refInFor: !0,
                    class: t.getLinkClass(e.name),
                    attrs: {
                        href: e.url,
                        target: e.target
                    },
                    on: {
                        mouseleave: function(t) {
                            e.hoverStatus = !1
                        },
                        mouseenter: function(t) {
                            e.hoverStatus = !0
                        },
                        click: function(n) {
                            return t.setTrack(e)
                        }
                    }
                }, [t._v(t._s(e.title))]), n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: r !== t.navLinkList.length - 1,
                        expression: "index !== navLinkList.length - 1"
                    }],
                    key: "p-" + r,
                    staticClass: "link"
                })]
            }
            )), [n("p", {
                staticClass: "link"
            }), n("span", {
                staticClass: "drop-item-hover app-download-txt",
                on: {
                    click: t.openPayPanel
                }
            }, [t._v("充值")])], [n("p", {
                staticClass: "link"
            }), n("img", {
                staticClass: "nav-panel-icon drop-item-hover",
                attrs: {
                    src: t.iconImg("pc_phone_icon.png"),
                    alt: "drop item icon"
                },
                on: {
                    click: t.openAppDownload
                }
            }), n("span", {
                staticClass: "drop-item-hover app-download-txt",
                on: {
                    click: t.openAppDownload
                }
            }, [t._v("APP下载")])]], 2), n("div", {
                staticClass: "collection-panel",
                on: {
                    click: t.handleFavorite
                }
            }, [n("img", {
                attrs: {
                    src: t.iconImg("icon_favorite.png"),
                    alt: "favorite icon"
                }
            }), n("p", [t._v("收藏本站")])]), t.isLogined ? n("div", {
                staticClass: "logout-panel"
            }, [n("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: t.httpImg(t.currentUser.avatar || "def_user_atvter.png"),
                    alt: "user avatar"
                }
            }), n("div", {
                staticClass: "logout-pop-panel"
            }, [t._m(0), n("div", {
                staticClass: "logout-container",
                on: {
                    click: t.loginOut
                }
            }, [n("img", {
                attrs: {
                    src: t.iconImg("icon_out_login.png"),
                    alt: "login out"
                }
            }), n("p", [t._v("退出登录")])])])]) : n("div", {
                class: ["login-icon", {
                    "white-icon": t.isWhiteTheme
                }],
                on: {
                    click: t.showLoginPanel
                }
            }), n("login-panel", {
                attrs: {
                    themeType: t.themeType
                }
            }), n("pay-pop-panel")], 1)])
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "logout-line"
            }, [e("div", {
                staticClass: "triangle"
            })])
        }
        ], !1, null, "a5dd2470", null));
        e.a = j.exports
    },
    78: function(t, e, n) {
        "use strict";
        n(31),
        n(19),
        n(10),
        n(8),
        n(14),
        n(29);
        var r = n(1)
          , a = n(253)
          , i = n(20);
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var c = {
            name: "BottomPanel",
            data: function() {
                return {
                    showBgPanel: !0,
                    showCloseIcon: !1
                }
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, Object(i.b)(["showActivityPanel"])),
            created: function() {
                this.showActivityPanel || (this.showBgPanel = !1,
                this.showCloseIcon = !0)
            },
            methods: {
                hideAction: function() {
                    var t = this;
                    this.showBgPanel = !1,
                    setTimeout((function() {
                        t.showCloseIcon = !0
                    }
                    ), 800),
                    Object(a.b)("SHOW_ACTIVITY_PANEL", !1, 1)
                },
                showAction: function() {
                    this.showBgPanel = !0,
                    this.showCloseIcon = !1
                }
            }
        }
          , s = (n(409),
        n(7))
          , u = Object(s.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "bottom-panel-bg",
                style: "width: " + (t.showBgPanel ? "100%" : "auto") + ";"
            }, [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showBgPanel,
                    expression: "showBgPanel"
                }],
                staticClass: "bg-img",
                attrs: {
                    src: t.iconImg("activity_context_icon_003.png"),
                    alt: "fade-icon"
                },
                on: {
                    click: t.hideAction
                }
            })]), n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                staticClass: "bg-close",
                attrs: {
                    src: t.iconImg("app_download_panel_close.png"),
                    alt: "bg-icon"
                }
            }), n("transition", {
                attrs: {
                    name: "tag"
                }
            }, [n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showCloseIcon,
                    expression: "showCloseIcon"
                }],
                staticClass: "bg-icon",
                attrs: {
                    src: t.iconImg("activity_close_icon_001.png"),
                    alt: "bg-icon"
                },
                on: {
                    click: t.showAction
                }
            })])], 1)
        }
        ), [], !1, null, "12fb9e73", null).exports
          , l = n(154);
        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach((function(e) {
                    Object(r.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var d = {
            name: "djFooter",
            components: {
                BottomPanel: u
            },
            data: function() {
                return {
                    PATH_RULE_URL: "https://www.fnscore.cn",
                    companyName: "",
                    govContext: "",
                    recordNum: "",
                    recordHref: "",
                    contactItems: [{
                        value: "邮箱：fnscoredev@163.com",
                        url: "mailto:fnscoredev@163.com",
                        target: "_blank",
                        cls: "first-qq"
                    }],
                    isShowBanner: !0
                }
            },
            computed: p(p({}, Object(i.c)("common", ["isFnscoreComHost", "isFnscoreCOMHost"])), {}, {
                isShowBenAn: function() {
                    return !this.isFnscoreComHost
                },
                isFnscore88Com: function() {
                    return this.isFnscoreCOMHost
                },
                isShowH5Back: function() {
                    return this.isMobile || !1
                },
                mapItems: function() {
                    return [{
                        title: "首页",
                        url: this.PC_HOST,
                        name: "index"
                    }, {
                        title: "赛程",
                        url: "".concat(this.PC_HOST, "/schedule.html"),
                        name: "schedule"
                    }, {
                        title: "资讯",
                        url: "".concat(this.PC_HOST, "/information.html"),
                        name: "information"
                    }, {
                        title: "赛事",
                        url: "".concat(this.PC_HOST, "/league.html"),
                        name: "league"
                    }]
                },
                copyRight: function() {
                    return "Copyright © 2019-2025 蜂鸟电竞版权所有  经营许可证：鄂B2-20200353  鄂网文(2020)3090-128号"
                },
                friendLinks: function() {
                    return this.$store.state.friendLinks
                }
            }),
            mounted: function() {
                this.initBanner()
            },
            methods: {
                initBanner: function() {
                    var t = this.$route.query
                      , e = t.huyaLink
                      , n = t.iframeTag;
                    (e && "true" === e || n && "true" === n) && (this.isShowBanner = !1)
                },
                getHttpUrl: function(t) {
                    return -1 === t.indexOf("http") ? "http://".concat(t) : t
                },
                isActiveRoute: function(t) {
                    return this.$route.name === t
                },
                isBlank: function(t) {
                    return this.isActiveRoute(t) ? "_self" : "_blank"
                },
                _openLink: function(t) {
                    window && window.open(t)
                },
                downloadGoogleStore: function() {
                    this._openLink("https://play.google.com/store/apps/details?id=com.fnscore.app")
                },
                downloadIosStore: function() {
                    this._openLink("https://apps.apple.com/cn/app/id1537504237")
                },
                switchToH5: function() {
                    Object(l.e)("switchFrom", window.location.host),
                    Object(l.e)("switchTo", "h5"),
                    location.reload()
                }
            }
        }
          , h = (n(410),
        Object(s.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "footer"
            }, [n("div", {
                staticClass: "container"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowH5Back,
                    expression: "isShowH5Back"
                }],
                staticClass: "switch_btn",
                on: {
                    click: t.switchToH5
                }
            }, [n("p", {
                staticClass: "switch-btn-text"
            }, [t._v("返回手机端 >")])]), n("div", {
                staticClass: "footer-container"
            }, [n("div", {
                staticClass: "map-content-panel"
            }, [n("div", {
                staticClass: "footer-container--title"
            }, [n("img", {
                staticClass: "icon-tag",
                attrs: {
                    src: t.iconImg("icon_map_tag.png"),
                    alt: "tag-icon"
                }
            }), n("span", {
                staticClass: "icon--txt"
            }, [t._v("网站地图")])]), n("div", {
                staticClass: "map-context-panel-item txt-item"
            }, t._l(t.mapItems, (function(e, r) {
                return n("a", {
                    key: r,
                    class: [r > 2 ? "m-top-10" : ""],
                    attrs: {
                        href: e.url,
                        target: t.isBlank(e.name),
                        rel: "noopener noreferrer"
                    }
                }, [n("span", {
                    staticStyle: {
                        color: "#E59900"
                    }
                }, [t._v("|")]), t._v(" " + t._s(e.title) + " ")])
            }
            )), 0)]), n("span", {
                staticClass: "link---panel"
            }), n("div", {
                staticClass: "app-download-panel"
            }, [n("div", {
                staticClass: "app-download-panel--store"
            }, [n("div", {
                staticClass: "footer-container--title"
            }, [n("img", {
                staticClass: "icon-tag",
                attrs: {
                    src: t.iconImg("app_donwload_tag.png"),
                    alt: "tag-icon"
                }
            }), n("span", {
                staticClass: "icon--txt"
            }, [t._v("应用下载")])]), n("div", {
                staticClass: "store-panel"
            }, [n("div", {
                staticClass: "bg-icon white-google-store--icon",
                on: {
                    click: t.downloadGoogleStore
                }
            }), n("div", {
                staticClass: "bg-icon white-ios-store--icon",
                on: {
                    click: t.downloadIosStore
                }
            })])]), n("div", {
                staticClass: "app-download-panel--qrcode"
            }, [n("img", {
                staticClass: "qrcode--img",
                attrs: {
                    src: t.iconImg("fnscore_footer_download_qrcode.png"),
                    alt: "app downlod qrcode"
                }
            }), n("p", {
                staticClass: "qrcode--txt"
            }, [t._v("扫码下载移动端")])])]), n("span", {
                staticClass: "link---panel"
            }), n("div", {
                staticClass: "contact-us-panel"
            }, [n("div", {
                staticClass: "footer-container--title"
            }, [n("img", {
                staticClass: "icon-tag",
                attrs: {
                    src: t.iconImg("icon_contact_tag.png"),
                    alt: "tag-icon"
                }
            }), n("span", {
                staticClass: "icon--txt"
            }, [t._v("联系我们")])]), n("div", {
                staticClass: "contact-us-panel-item txt-item"
            }, t._l(t.contactItems, (function(e, r) {
                return n("a", {
                    key: r,
                    ref: "noopener noreferrer",
                    refInFor: !0,
                    class: e.cls,
                    attrs: {
                        href: e.url,
                        target: e.target
                    }
                }, [t._v(" " + t._s(e.value) + " ")])
            }
            )), 0)])]), n("div", {
                staticClass: "friend-links"
            }, [n("div", {
                staticClass: "links-wrapper"
            }, [t._l(t.friendLinks, (function(e, r) {
                return n("a", {
                    key: r,
                    ref: "noopener",
                    refInFor: !0,
                    staticClass: "friend-links-item",
                    attrs: {
                        href: e.url,
                        target: "_blank"
                    }
                }, [t._v(" " + t._s(e.webName) + " ")])
            }
            )), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                staticClass: "friend-links-item"
            }, [t._v("友链申请QQ：1583391927")])], 2)]), n("div", {
                staticClass: "cooperation-panel-div"
            }, [n("div", {
                staticClass: "cooperation-panel"
            }, [n("p", [t._v("合作伙伴:")]), n("img", {
                staticClass: "cooperation-icon",
                attrs: {
                    src: t.iconImg("cooperation_douyu_white_icon.png")
                }
            }), n("img", {
                staticClass: "cooperation-icon",
                attrs: {
                    src: t.iconImg("cooperation_huya_white_icon.png")
                }
            }), n("img", {
                staticClass: "cooperation-icon",
                attrs: {
                    src: t.iconImg("bilibili_logo_001.png")
                }
            }), n("div", {
                staticClass: "right-panel"
            }, [n("img", {
                staticClass: "cooperation-icon",
                attrs: {
                    src: t.iconImg("Dingtalk_20220831142907.jpg")
                }
            })])])])]), t.isFnscore88Com ? n("div", {
                staticClass: "copy-right"
            }, [n("p", [t._v("声明：本电竞体育数据产品严格遵守国家法律相关规定，支持国家公益体彩，提供体育赛事统计数据，资讯分析等相关信息仅供体育爱好者浏览参考之用，禁止任何人非法滥用，否则责任自负，与本网站无关。")]), t._m(1), t.isShowBanner ? n("bottom-panel") : t._e()], 1) : n("div", {
                staticClass: "copy-right"
            }, [t._m(0), t.isShowBenAn ? n("p", [t._v("Copyright © 2019-2025 蜂鸟竞技版权所有 | "), n("span", {
                attrs: {
                    href: "https://qn.tianqifengyun.cn/web/20220916114937318.png",
                    target: "_blank"
                }
            }, [t._v("增值电信业务经营许可证：鄂B2-20200353")]), t._v(" | "), n("span", {
                attrs: {
                    href: "https://qn.tianqifengyun.cn/web/20220916114952337.jpg",
                    target: "_blank"
                }
            }, [t._v("鄂网文(2023)2453-268号")]), t._v(" | "), t.isShowBenAn ? n("a", {
                attrs: {
                    href: "https://beian.miit.gov.cn",
                    target: "_black"
                }
            }, [t._v("鄂ICP备20014859号-8")]) : t._e(), t._v(" | "), n("a", {
                attrs: {
                    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010602004984",
                    target: "_black"
                }
            }, [n("img", {
                staticStyle: {
                    "max-height": "17px",
                    "max-width": "17px",
                    "margin-right": "4px",
                    position: "relative",
                    top: "-1px"
                },
                attrs: {
                    src: t.iconImg("bei-an-icon-001.png")
                }
            }), t._v("鄂公网安备 42010602004984号")])]) : t._e(), n("p", [n("a", {
                attrs: {
                    href: t.PATH_RULE_URL + "/article/privacy.html",
                    target: "_black"
                }
            }, [t._v("隐私政策")]), t._v("| "), n("a", {
                attrs: {
                    href: t.PATH_RULE_URL + "/article/userRule.html",
                    target: "_black"
                }
            }, [t._v("用户协议")]), t._v("| "), n("a", {
                attrs: {
                    href: t.PATH_RULE_URL + "/article/cooperationRule.html",
                    target: "_black"
                }
            }, [t._v("主播专家合作协议")])]), t.isShowBanner ? n("bottom-panel") : t._e()], 1)])
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("p", [this._v("声明：本电竞体育数据产品严格遵守国家法律相关规定，支持国家公益体彩，提供体育赛事统计数据，资讯分析等相关信息仅供体育爱好者浏览参考之用，禁止任何人非法滥用，否则责任自负，与本网站无关。"), e("br"), this._v("请认准蜂鸟竞技官方域名：www.fnscore.cn，其他冒用“蜂鸟竞技”品牌的站点均与本网站无任何关系，我们将保留追诉的权利。"), e("br"), this._v("本站视频源来自热心网友自发补充，如有侵犯您的权益，请联系我们删除。")])
        }
        , function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("p", [e("span", {
                attrs: {
                    href: "https://beian.miit.gov.cn",
                    target: "_black"
                }
            }, [this._v("粤ICP备2023097833号-1")])])
        }
        ], !1, null, "14cac24e", null));
        e.a = h.exports
    },
    97: function(t, e, n) {
        "use strict";
        n.d(e, "d", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return i
        }
        )),
        n.d(e, "f", (function() {
            return o
        }
        )),
        n.d(e, "e", (function() {
            return c
        }
        )),
        n.d(e, "b", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return u
        }
        ));
        var r = n(3);
        function a() {
            return r.a.post("/user/getLoginUUID").then((function(t) {
                return t ? t.data : {}
            }
            ))
        }
        function i(t) {
            return r.a.$singlePost("getLoginScanResult", "/user/getLoginScanResult", t, {
                timeout: 6e4
            }).then((function(t) {
                return t ? t.data : {}
            }
            ))
        }
        function o(t) {
            return r.a.$postApi("sendPhoneCodeV2", "/login/code/verify", t).then((function(t) {
                return t ? t.data : {}
            }
            ))
        }
        function c(t) {
            return r.a.post("/user/loginByPhoneCode", t).then((function(t) {
                return t ? t.data : {}
            }
            ))
        }
        function s(t) {
            return r.a.post("/user/getExpertList", {
                userToken: t
            }).then((function(t) {
                return t.data
            }
            ))
        }
        function u(t) {
            return r.a.post("/user/expertSubscribe", t).then((function(t) {
                return t.data
            }
            ))
        }
    }
}, [[340, 29, 8, 30]]]);
