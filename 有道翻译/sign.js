window = global;
self = global;

require("./mod");
(function() {
    var e = {
        48559: function(e, t, o) {
            o(44114),
            o(27495),
            o(25440),
            o(13611);
            (function(e, t, o, a, n) {
                if (!e.__rl_event) {
                    var i = navigator.userAgent.toLowerCase()
                      , r = /(mobile|iphone|ipod|blackberry)/.test(i)
                      , l = !1
                      , s = "@VERSION@"
                      , c = ""
                      , d = 0
                      , u = ""
                      , p = ""
                      , m = 0
                      , g = "NULL"
                      , h = "NULL"
                      , f = "NULL"
                      , b = ""
                      , v = ""
                      , y = $()
                      , A = ($(!0),
                    O() + "//rlogs.youdao.com")
                      , T = R()
                      , _ = {
                        _default: T
                    }
                      , k = {}
                      , S = e._rlog
                      , w = e._rlog = {};
                    w.push = function(e) {
                        var t = e[0].split(".")
                          , o = t.pop();
                        t = t.join("_"),
                        t || (t = "_default"),
                        T = _[t] || (_[t] = R());
                        var a = k[o];
                        a && a.apply(this, e.slice(1))
                    }
                    ,
                    k._setAccount = function(e) {
                        e && (T.pid = e)
                    }
                    ,
                    k._setAutoPageview = function(e) {
                        T.autopv = e
                    }
                    ,
                    k._setAutoUserId = function(e) {
                        T.autouid = e
                    }
                    ,
                    k._addPost = function(e, t) {
                        k._removePost(e),
                        T.post.push([e, t])
                    }
                    ,
                    k._onPageViewFinished = function(e) {
                        T.pvcb.push(e)
                    }
                    ,
                    k._trackCustom = function(e, t, o) {
                        var n;
                        T.pid && (T.cat = e,
                        n = D(t) ? B(t) : "_nhrf=" + a(t),
                        C(n, o))
                    }
                    ,
                    k._trackEvent = function(e, t) {
                        k._trackCustom("event", e, t)
                    }
                    ,
                    k._trackPageview = function(e) {
                        if (!T.ispvt || "ido" === e) {
                            var t = T;
                            I((function() {
                                var e;
                                while (e = t.pvcb.shift())
                                    try {
                                        e()
                                    } catch (o) {}
                                t.ispvt = 2
                            }
                            ), D(e) && e.length ? "&" + B(e) : "")
                        }
                    }
                    ,
                    k._removePost = function(e) {
                        if (e) {
                            for (var t = T.post, o = 0, a = t.length; o < a; o++)
                                if (t[o] && t[o][0] == e)
                                    return t.splice(o, 1),
                                    o
                        } else
                            T.post = []
                    }
                    ,
                    k._trackUserId = function() {
                        var e = !1
                          , t = K("DICT_LOGIN");
                        if (-1 == t || /^[0|8]\w*/.test(t))
                            N("DICT_USR", "-1");
                        else {
                            if (-1 != K("DICT_USR")) {
                                var o = K("DICT_USR").split("~");
                                2 == o.length ? (__rl_nuid = o[1],
                                t != o[0] && (e = !0)) : e = !0
                            } else
                                e = !0;
                            e && _rl_network.ajax({
                                url: location.protocol + "//dict.youdao.com/login/acc/co/cq?product=DICT&cf=1",
                                success: function(e) {
                                    e.login ? (t = K("DICT_LOGIN"),
                                    N("DICT_USR", t + "~" + e.userid),
                                    __rl_nuid = e.userid) : __rl_nuid = "unknown"
                                },
                                fail: function() {
                                    __rl_nuid = "unknown"
                                }
                            })
                        }
                    }
                    ,
                    e.__rl_event = function(e, t) {
                        w.push(["_trackCustom", "event", e, t])
                    }
                    ,
                    T.pid = e.__rl_npid || "",
                    T.post = e.__rl_post || [],
                    T.autopv = "undefined" == typeof __rl_pageview || !!e.__rl_pageview;
                    var E = function() {
                        var e, t = o.search.replace(/^\?/, "").split("&"), a = {}, i = 0;
                        for (i = 0; i < t.length; i++)
                            e = t[i],
                            e && (e = e.split("="),
                            a[e[0]] = void 0 === e[1] ? null : n(e[1]));
                        return a
                    }();
                    E.vendor && k._addPost("vendor", E.vendor),
                    E.keyfrom && k._addPost("keyfrom", E.keyfrom),
                    function() {
                        var e = o.hash;
                        if (e) {
                            var t, a, i;
                            e = e.replace(/^#/, "").split("&");
                            for (a = 0,
                            i = e.length; a < i; a++)
                                t = e[a],
                                t && (t = t.split("="),
                                k._addPost(t[0], n(t[1] || "NULL")))
                        }
                    }(),
                    function() {
                        try {
                            if (!S)
                                return;
                            for (var e = 1, t = S.length; e < t; e++)
                                if (/_setAccount$/.test(S[e][0])) {
                                    var o = S[e];
                                    S.splice(e, 1),
                                    S.splice(0, 0, o)
                                }
                            for (e = 0,
                            t = S.length; e < t; e++)
                                console.log("Execute: ", S[e]),
                                w.push(S[e]);
                            S = null
                        } catch (a) {}
                    }(),
                    H(_, (function(e, t) {
                        t.autopv && w.push([e + "._trackPageview"]),
                        t.autouid && w.push([e + "._trackUserId"])
                    }
                    )),
                    V("mousedown", x),
                    function() {
                        var e = function(t) {
                            w.push(["_trackEvent", "first-touch"]),
                            U("touchstart", e)
                        };
                        V("touchstart", e)
                    }(),
                    e.__rl_click && V("click", L)
                }
                function I(e, t) {
                    T.pid && 1 != T.ispvt && (T.ispvt = 1,
                    T.cat = "pageview",
                    C(F() + t, e))
                }
                function C(e, t) {
                    console.trace("[" + T.cat + "]", "send ", e);
                    var o = ["_npid=" + T.pid, "_ncat=" + T.cat, M(), e];
                    T.post.length && o.push(B(T.post));
                    var a = A + "/rlog.php?" + o.join("&");
                    P(a, t)
                }
                function P(e, t) {
                    if (l)
                        navigator.sendBeacon(e),
                        t && t();
                    else {
                        var o = new Image;
                        o.onload = o.onerror = function() {
                            t && t()
                        }
                        ,
                        o.src = e,
                        o = null
                    }
                }
                function L(t) {
                    var o = t || e.event
                      , a = o.target || o.srcElement;
                    a.href && w.push(["_trackCustom", "click", a.href])
                }
                function x(o) {
                    o = o || e.event;
                    for (var a = o.target ? o.target : o.srcElement, n = t.body; a != n; a = a.parentNode || n)
                        if (1 === a.nodeType && !0 !== a.disabled) {
                            var i = a.getAttribute("data-rlog");
                            i && w.push(["_trackEvent", i])
                        }
                }
                function R() {
                    return {
                        pid: "",
                        cat: "",
                        post: [],
                        ispvt: 0,
                        pvcb: [],
                        autopv: !0,
                        autouid: !1
                    }
                }
                function D(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                function H(e, t) {
                    var o;
                    for (o in e)
                        e.hasOwnProperty(o) && t(o, e[o])
                }
                function O() {
                    return "https:" == o.protocol ? "https:" : "http:"
                }
                function V(e, o) {
                    r && "mousedown" == e ? t.addEventListener("touchstart", o, !1) : t.addEventListener ? t.addEventListener(e, o, !1) : t.attachEvent("on" + e, o)
                }
                function U(e, o) {
                    r && "mousedown" == e ? t.removeEventListener("touchstart", o, !1) : t.removeEventListener ? t.removeEventListener(e, o, !1) : t.detachEvent("on" + e, o)
                }
                function N(e, t) {
                    var o = new Date;
                    o.setTime(o.getTime() + 63072e6),
                    document.cookie = e + "=" + t + ";expires=" + o.toGMTString() + ";path=/;domain=" + y
                }
                function K(e) {
                    var t = document.cookie
                      , o = e + "="
                      , a = t.length
                      , n = 0;
                    while (n < a) {
                        var i = n + o.length;
                        if (t.substring(n, i) == o) {
                            var r = t.indexOf(";", i);
                            return -1 == r && (r = a),
                            unescape(t.substring(i, r))
                        }
                        if (n = t.indexOf(" ", n) + 1,
                        0 == n)
                            break
                    }
                    return -1
                }
                function B(e) {
                    D(e) || (e = []);
                    var t, o, n, i = [];
                    for (t = 0,
                    o = e.length; t < o; ++t)
                        n = e[t],
                        D(n) && i.push(n[0] + "=" + a(n[1]));
                    return i.join("&")
                }
                function M() {
                    var e = (new Date).getTime()
                      , o = [];
                    return t.cookie = "___rl__test__cookies=" + e,
                    f = K("OUTFOX_SEARCH_USER_ID_NCOO"),
                    -1 == f && K("___rl__test__cookies") == e && (f = 2147483647 * Math.random(),
                    N("OUTFOX_SEARCH_USER_ID_NCOO", f)),
                    g = K("P_INFO"),
                    g = -1 == g ? "NULL" : g.substr(0, g.indexOf("|")),
                    h = K("DICT_UT"),
                    -1 == h && (h = "NULL"),
                    o = ["_ncoo=" + f, "_nssn=" + g, "_nver=" + s, "_ntms=" + e, "_dict_ut=" + h],
                    T.autouid && o.push("_rl_nuid=" + __rl_nuid),
                    o.join("&")
                }
                function F() {
                    if (p = "-",
                    self.screen)
                        p = screen.width + "x" + screen.height;
                    else if (self.java) {
                        var n = java.awt.Toolkit.getDefaultToolkit()
                          , i = n.getScreenSize();
                        p = i.width + "x" + i.height
                    }
                    var r = new Date(t.lastModified);
                    m = r.getTime() / 1e3;
                    var l = e.navigator;
                    d = l && l.javaEnabled() ? 1 : 0,
                    c = t.characterSet || t.charset || "-",
                    c = c.toLowerCase(),
                    u = a(t.referrer),
                    v = a(o.href),
                    b = o.hash ? a(o.hash.substring(1)) : "";
                    l = ["_nref=" + u, "_nurl=" + v, "_nres=" + p, "_nlmf=" + m, "_njve=" + d, "_nchr=" + c, "_nfrg=" + b];
                    return l.join("&")
                }
                function $(e) {
                    var a = e ? 4 : 3
                      , n = "res:" === o.protocol ? "" : t.domain
                      , i = n.split(".")
                      , r = i.length
                      , l = /^\d+$/g;
                    if (l.test(i[r - 1]))
                        return n;
                    if (i.length < a)
                        return "." + n;
                    var s, c = ["com", "net", "org", "gov", "co"], d = !1;
                    for (s = 0; s < c.length; s++)
                        i[r - 2] == c[s] && (d = !0);
                    var u = d ? a : a - 1
                      , p = [];
                    while (u)
                        p.push(i[r - u]),
                        u--;
                    return "." + p.join(".")
                }
            }
            )(window, document, location, encodeURIComponent, decodeURIComponent)
        },
        399: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return m
                }
            });
            var a = o(6301);
            o(62953);
            const n = {
                class: "inner-content"
            }
              , i = {
                class: "title color_text_1"
            }
              , r = {
                class: "btn-ara"
            };
            function l(e, t, o, l, s, c) {
                return l.visible && o.config.text ? ((0,
                a.uX)(),
                (0,
                a.CE)("div", {
                    key: 0,
                    class: "pop-up-comp mask",
                    onClick: t[3] || (t[3] = (...e) => l.handleClickBgMask && l.handleClickBgMask(...e))
                }, [(0,
                a.Lk)("div", n, [l.showIconClose ? ((0,
                a.uX)(),
                (0,
                a.CE)("i", {
                    key: 0,
                    class: "icon-close",
                    onClick: t[0] || (t[0] = (...e) => l.cancel && l.cancel(...e))
                })) : (0,
                a.Q3)("", !0), (0,
                a.Lk)("div", i, (0,
                a.v_)(o.config.text), 1), (0,
                a.Lk)("div", r, [(0,
                a.Lk)("div", {
                    class: "cancel btn",
                    onClick: t[1] || (t[1] = (...e) => l.cancel && l.cancel(...e))
                }, (0,
                a.v_)(o.config.cancelButtonText || "取消"), 1), (0,
                a.Lk)("div", {
                    class: "confirm btn",
                    onClick: t[2] || (t[2] = (...e) => l.confirm && l.confirm(...e))
                }, (0,
                a.v_)(o.config.confirmButtonText || "确认"), 1)])])])) : (0,
                a.Q3)("", !0)
            }
            var s = {
                name: "PopUp",
                props: {
                    config: {
                        type: Object,
                        clear: Function
                    }
                },
                setup(e) {
                    const t = (0,
                    a.KR)(!0)
                      , o = (0,
                    a.EW)(( () => {
                        var t, o;
                        return !1 !== (null === (t = e.config) || void 0 === t ? void 0 : t.showIconClose) || (null === (o = e.config) || void 0 === o ? void 0 : o.showIconClose)
                    }
                    ))
                      , n = () => {
                        e.config.cancel(),
                        t.value = !1,
                        e.config.clear()
                    }
                      , i = () => {
                        e.config.confirm(),
                        t.value = !1,
                        e.config.clear()
                    }
                      , r = () => {
                        e.config.clickMask && n()
                    }
                    ;
                    return {
                        visible: t,
                        showIconClose: o,
                        cancel: n,
                        confirm: i,
                        handleClickBgMask: r
                    }
                }
            }
              , c = o(66262);
            const d = (0,
            c.A)(s, [["render", l], ["__scopeId", "data-v-24da5108"]]);
            var u = d;
            const p = document.createElement("div");
            p.setAttribute("class", "popup"),
            document.body.appendChild(p);
            var m = e => {
                const t = () => {
                    (0,
                    a.XX)(null, p)
                }
                ;
                e.clear = t;
                const o = (0,
                a.bF)(u, {
                    config: e
                });
                (0,
                a.XX)(o, p)
            }
        },
        93493: function(e, t, o) {
            "use strict";
            o.d(t, {
                l: function() {
                    return i
                }
            });
            o(16280);
            var a = o(6301)
              , n = o(59018);
            const i = (e, t, o="取消", i="立即开通") => new Promise(( (r, l) => {
                e && !t && (t = e,
                e = "");
                const s = () => {
                    l(new Error("取消删除"))
                }
                  , c = () => {
                    r({
                        code: 0,
                        msg: "success"
                    })
                }
                  , d = () => {
                    (0,
                    a.XX)(null, document.body)
                }
                  , u = (0,
                a.h)(n.A, {
                    title: e,
                    content: t,
                    cancelText: o,
                    confirmText: i,
                    cancelHandler: s,
                    confirmHandler: c,
                    close: d
                });
                console.log(u),
                (0,
                a.XX)(u, document.body)
            }
            ))
        },
        3745: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return u
                }
            });
            var a = o(6301);
            function n(e, t, o, n, i, r) {
                return (0,
                a.uX)(),
                (0,
                a.Wv)(a.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    a.k6)(( () => [(0,
                    a.bo)((0,
                    a.Lk)("div", {
                        class: "toasts"
                    }, (0,
                    a.v_)(o.text), 513), [[a.aG, n.visible]])])),
                    _: 1
                })
            }
            var i = {
                name: "toast",
                props: {
                    text: {
                        type: String,
                        default: ""
                    }
                },
                setup() {
                    const e = (0,
                    a.KR)(!1);
                    return (0,
                    a.sV)(( () => {
                        e.value = !0
                    }
                    )),
                    {
                        visible: e
                    }
                }
            }
              , r = o(66262);
            const l = (0,
            r.A)(i, [["render", n], ["__scopeId", "data-v-ebee6bee"]]);
            var s = l;
            const c = document.createElement("div");
            c.setAttribute("class", "toast"),
            document.body.appendChild(c);
            let d = null;
            var u = (e, t=1500) => {
                const o = (0,
                a.bF)(s, {
                    text: e
                });
                (0,
                a.XX)(o, c),
                clearTimeout(d),
                d = setTimeout(( () => {
                    (0,
                    a.XX)(null, c)
                }
                ), t)
            }
        },
        97504: function(e, t) {
            "use strict";
            t.A = [{
                str: "0",
                msg: "通用场景"
            }, {
                str: "2",
                msg: "医学"
            }, {
                str: "1",
                msg: "计算机"
            }, {
                str: "3",
                msg: "金融经济"
            }]
        },
        37062: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return u
                }
            });
            var a = [{
                code: "zh-CHS2en",
                label: "中文-英文",
                vip: !1,
                svip: !1
            }, {
                code: "en2zh-CHS",
                label: "英文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "ko2zh-CHS",
                label: "韩文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "zh-CHS2ko",
                label: "中文-韩文",
                vip: !1,
                svip: !1
            }, {
                code: "ja2zh-CHS",
                label: "日文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "zh-CHS2ja",
                label: "中文-日文",
                vip: !1,
                svip: !1
            }, {
                code: "de2zh-CHS",
                label: "德文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2de",
                label: "中文-德文",
                vip: !0,
                svip: !0
            }, {
                code: "ru2zh-CHS",
                label: "俄文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2ru",
                label: "中文-俄文",
                vip: !0,
                svip: !0
            }, {
                code: "fr2zh-CHS",
                label: "法文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2fr",
                label: "中文-法文",
                vip: !0,
                svip: !0
            }, {
                code: "es2zh-CHS",
                label: "西班牙文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2es",
                label: "中文-西班牙文",
                vip: !0,
                svip: !0
            }, {
                code: "pt2zh-CHS",
                label: "葡萄牙文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2pt",
                label: "中文-葡萄牙文",
                vip: !0,
                svip: !0
            }]
              , n = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , i = [{
                label: "阿拉伯文",
                code: "ar",
                alphabet: "A"
            }, {
                label: "阿塞拜疆文",
                code: "az",
                alphabet: "A"
            }, {
                label: "爱沙尼亚文",
                code: "et",
                alphabet: "A"
            }, {
                label: "爱尔兰文",
                code: "ga",
                alphabet: "A"
            }, {
                label: "阿尔巴尼亚文",
                code: "sq",
                alphabet: "A"
            }, {
                label: "阿萨姆文",
                code: "as",
                alphabet: "A"
            }, {
                label: "巴斯克文",
                code: "eu",
                alphabet: "B"
            }, {
                label: "白俄罗斯文",
                code: "be",
                alphabet: "B"
            }, {
                label: "波斯尼亚文",
                code: "bs",
                alphabet: "B"
            }, {
                label: "保加利亚文",
                code: "bg",
                alphabet: "B"
            }, {
                label: "冰岛文",
                code: "is",
                alphabet: "B"
            }, {
                label: "波兰文",
                code: "pl",
                alphabet: "B"
            }, {
                label: "白苗文",
                code: "hmn",
                alphabet: "B"
            }, {
                label: "波斯文",
                code: "fa",
                alphabet: "B"
            }, {
                label: "德文",
                code: "de",
                alphabet: "D"
            }, {
                label: "丹麦文",
                code: "da",
                alphabet: "D"
            }, {
                label: "俄文",
                code: "ru",
                alphabet: "E"
            }, {
                label: "法文",
                code: "fr",
                alphabet: "F"
            }, {
                label: "芬兰文",
                code: "fi",
                alphabet: "F"
            }, {
                label: "弗里西文",
                code: "fy",
                alphabet: "F"
            }, {
                label: "菲律宾文",
                code: "tl",
                alphabet: "F"
            }, {
                label: "格鲁吉亚文",
                code: "ka",
                alphabet: "G"
            }, {
                label: "高棉文",
                code: "km",
                alphabet: "G"
            }, {
                label: "古吉拉特文",
                code: "gu",
                alphabet: "G"
            }, {
                label: "韩文",
                code: "ko",
                alphabet: "H"
            }, {
                label: "荷兰文",
                code: "nl",
                alphabet: "H"
            }, {
                label: "海地克里奥尔文",
                code: "ht",
                alphabet: "H"
            }, {
                label: "豪萨文",
                code: "ha",
                alphabet: "H"
            }, {
                label: "哈萨克文",
                code: "kk",
                alphabet: "H"
            }, {
                label: "加泰隆文",
                code: "ca",
                alphabet: "J"
            }, {
                label: "捷克文",
                code: "cs",
                alphabet: "J"
            }, {
                label: "加利西亚文",
                code: "gl",
                alphabet: "J"
            }, {
                label: "科西嘉文",
                code: "co",
                alphabet: "K"
            }, {
                label: "克罗地亚文",
                code: "hr",
                alphabet: "K"
            }, {
                label: "库尔德文",
                code: "ku",
                alphabet: "K"
            }, {
                label: "卡纳达文",
                code: "kn",
                alphabet: "K"
            }, {
                label: "拉丁文",
                code: "la",
                alphabet: "L"
            }, {
                label: "卢森堡文",
                code: "lb",
                alphabet: "L"
            }, {
                label: "立陶宛文",
                code: "lt",
                alphabet: "L"
            }, {
                label: "拉脱维亚文",
                code: "lv",
                alphabet: "L"
            }, {
                label: "罗马尼亚文",
                code: "ro",
                alphabet: "L"
            }, {
                label: "马其顿文",
                code: "mk",
                alphabet: "M"
            }, {
                label: "马尔加什文",
                code: "mg",
                alphabet: "M"
            }, {
                label: "马来文",
                code: "ms",
                alphabet: "M"
            }, {
                label: "马耳他文",
                code: "mt",
                alphabet: "M"
            }, {
                label: "毛利文",
                code: "mi",
                alphabet: "M"
            }, {
                label: "马拉地文",
                code: "mr",
                alphabet: "M"
            }, {
                label: "蒙古文",
                code: "mn",
                alphabet: "M"
            }, {
                label: "孟加拉文",
                code: "bn",
                alphabet: "M"
            }, {
                label: "马拉雅拉姆文",
                code: "ml",
                alphabet: "M"
            }, {
                label: "缅甸文",
                code: "my",
                alphabet: "M"
            }, {
                label: "尼泊尔文",
                code: "ne",
                alphabet: "N"
            }, {
                label: "挪威文",
                code: "no",
                alphabet: "N"
            }, {
                label: "南非荷兰文",
                code: "af",
                alphabet: "N"
            }, {
                label: "葡萄牙文",
                code: "pt",
                alphabet: "P"
            }, {
                label: "普什图文",
                code: "ps",
                alphabet: "P"
            }, {
                label: "旁遮普文",
                code: "pa",
                alphabet: "P"
            }, {
                label: "齐切瓦文",
                code: "ny",
                alphabet: "Q"
            }, {
                label: "日文",
                code: "ja",
                alphabet: "R"
            }, {
                label: "瑞典文",
                code: "sv",
                alphabet: "R"
            }, {
                label: "世界文",
                code: "eo",
                alphabet: "S"
            }, {
                label: "斯洛伐克文",
                code: "sk",
                alphabet: "S"
            }, {
                label: "斯洛文尼亚文",
                code: "sl",
                alphabet: "S"
            }, {
                label: "萨摩亚文",
                code: "sm",
                alphabet: "S"
            }, {
                label: "塞索托文",
                code: "st",
                alphabet: "S"
            }, {
                label: "斯瓦希里文",
                code: "sw",
                alphabet: "S"
            }, {
                label: "僧伽罗文",
                code: "si",
                alphabet: "S"
            }, {
                label: "塞尔维亚文(西里尔文)",
                code: "sr-Cyrl",
                alphabet: "S"
            }, {
                label: "塞尔维亚文(拉丁文)",
                code: "sr-Latn",
                alphabet: "S"
            }, {
                label: "索马里文",
                code: "so",
                alphabet: "S"
            }, {
                label: "塔吉克文",
                code: "tg",
                alphabet: "T"
            }, {
                label: "土耳其文",
                code: "tr",
                alphabet: "T"
            }, {
                label: "泰米尔文",
                code: "ta",
                alphabet: "T"
            }, {
                label: "泰卢固文",
                code: "te",
                alphabet: "T"
            }, {
                label: "威尔士文",
                code: "cy",
                alphabet: "W"
            }, {
                label: "乌克兰文",
                code: "uk",
                alphabet: "W"
            }, {
                label: "乌兹别克文",
                code: "uz",
                alphabet: "W"
            }, {
                label: "乌尔都文",
                code: "ur",
                alphabet: "W"
            }, {
                label: "西班牙文",
                code: "es",
                alphabet: "X"
            }, {
                label: "宿务文",
                code: "ceb",
                alphabet: "X"
            }, {
                label: "希腊文",
                code: "el",
                alphabet: "X"
            }, {
                label: "夏威夷文",
                code: "haw",
                alphabet: "X"
            }, {
                label: "匈牙利文",
                code: "hu",
                alphabet: "X"
            }, {
                label: "修纳文",
                code: "sn",
                alphabet: "X"
            }, {
                label: "希伯来文",
                code: "he",
                alphabet: "X"
            }, {
                label: "信德文",
                code: "sd",
                alphabet: "X"
            }, {
                label: "巽他文",
                code: "su",
                alphabet: "X"
            }, {
                label: "英文",
                code: "en",
                alphabet: "Y"
            }, {
                label: "越南文",
                code: "vi",
                alphabet: "Y"
            }, {
                label: "印地文",
                code: "hi",
                alphabet: "Y"
            }, {
                label: "印尼文",
                code: "id",
                alphabet: "Y"
            }, {
                label: "伊博文",
                code: "ig",
                alphabet: "Y"
            }, {
                label: "意大利文",
                code: "it",
                alphabet: "Y"
            }, {
                label: "约鲁巴文",
                code: "yo",
                alphabet: "Y"
            }, {
                label: "中文",
                code: "zh-CHS",
                alphabet: "Z"
            }, {
                label: "中文繁体",
                code: "zh-CHT",
                alphabet: "Z"
            }, {
                label: "爪哇文",
                code: "jw",
                alphabet: "Z"
            }, {
                label: "自动识别",
                code: "auto",
                alphabet: "Z"
            }]
              , r = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , l = [{
                code: "ar",
                label: "阿拉伯语",
                alphabet: "A"
            }, {
                code: "de",
                label: "德语",
                alphabet: "D"
            }, {
                code: "ru",
                label: "俄语",
                alphabet: "E"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "nl",
                label: "荷兰语",
                alphabet: "H"
            }, {
                code: "pt",
                label: "葡萄牙语",
                alphabet: "P"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "th",
                label: "泰语",
                alphabet: "T"
            }, {
                code: "es",
                label: "西班牙语",
                alphabet: "X"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "it",
                label: "意大利语",
                alphabet: "Y"
            }, {
                code: "vi",
                label: "越南语",
                alphabet: "Y"
            }, {
                code: "id",
                label: "印度尼西亚语",
                alphabet: "Y"
            }, {
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }]
              , s = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , c = [{
                code: "ar",
                label: "阿拉伯语",
                alphabet: "A"
            }, {
                code: "de",
                label: "德语",
                alphabet: "D"
            }, {
                code: "ru",
                label: "俄语",
                alphabet: "E"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "nl",
                label: "荷兰语",
                alphabet: "H"
            }, {
                code: "pt",
                label: "葡萄牙语",
                alphabet: "P"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "th",
                label: "泰语",
                alphabet: "T"
            }, {
                code: "es",
                label: "西班牙语",
                alphabet: "X"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "it",
                label: "意大利语",
                alphabet: "Y"
            }, {
                code: "vi",
                label: "越南语",
                alphabet: "Y"
            }, {
                code: "id",
                label: "印度尼西亚语",
                alphabet: "Y"
            }, {
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }]
              , d = [{
                code: "en2zh-CHS",
                label: "英语 - 中文"
            }, {
                code: "zh-CHS2en",
                label: "中文 - 英语"
            }, {
                code: "ko2zh-CHS",
                label: "韩语 - 中文"
            }, {
                code: "ja2zh-CHS",
                label: "日语 - 中文"
            }]
              , u = {
                textTranslate: {
                    interfaceType: "complex",
                    common: r,
                    specify: l
                },
                aiTranslate: {
                    interfaceType: "complex",
                    common: s,
                    specify: c
                },
                documentTranslate: {
                    interfaceType: "combine",
                    common: [],
                    specify: a
                },
                imageTranslate: {
                    interfaceType: "complex",
                    common: n,
                    specify: i
                },
                term: {
                    interfaceType: "combine",
                    common: [],
                    specify: d
                }
            }
        },
        27950: function(e, t) {
            "use strict";
            t.A = {
                product: "webfanyi",
                signSecretKey: "LqMQV3ZdE2X6DYYyc6TNsVbHgCGk7XzG",
                keyId: "ai-translate-llm",
                keyIdPre: "ai-translate-llm-pre",
                keyfrom: "fanyi.web",
                needSignUrl: ["/translate_llm/userinfo"],
                errorMap: {
                    500: "服务器错误",
                    602: "输出错误",
                    607: "服务异常",
                    603: "对不起，正在学习中"
                }
            }
        },
        42699: function(e, t, o) {
            "use strict";
            o.d(t, {
                K: function() {
                    return a
                }
            });
            const a = {
                beforeMount(e, t, o) {
                    function a(o) {
                        if (e.contains(o.target))
                            return !1;
                        t.value && t.value(o)
                    }
                    e.__vueClickOutside__ = a,
                    document.addEventListener("mousedown", a)
                },
                unmounted(e, t) {
                    document.removeEventListener("mousedown", e.__vueClickOutside__),
                    delete e.__vueClickOutside__
                }
            }
        },
        34792: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return r
                }
            });
            o(33110);
            var a = o(75220)
              , n = o(66278)
              , i = o(37282);
            function r() {
                const e = (0,
                a.lq)()
                  , t = (0,
                n.Pj)()
                  , o = () => {
                    i.A.$emit("saveTextTranslateContentToLS")
                }
                  , r = () => {
                    "/AITranslate" === e.path && localStorage.setItem("afterProcessHistory", JSON.stringify(t.state.text.historyList))
                }
                ;
                return {
                    saveTextTranslateContentToLS: o,
                    saveAITranslateHistoryList: r
                }
            }
        },
        96365: function(e, t, o) {
            "use strict";
            o(23792),
            o(3362),
            o(9391),
            o(38462),
            o(39653);
            var a = o(86964)
              , n = o.n(a)
              , i = o(37691)
              , r = o(81659)
              , l = o.n(r)
              , s = o(6301)
              , c = o(54727)
              , d = (o(12153),
            o(3745))
              , u = o(399);
            const p = {
                class: "account-error"
            };
            function m(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", p, [a.showAbnormalAlert ? ((0,
                s.uX)(),
                (0,
                s.Wv)(a["AbnormalAlert"], {
                    key: 0,
                    config: a.alertConfig,
                    onOpenPhoneModal: a.openPhoneModal
                })) : (0,
                s.Q3)("", !0), a.showPhoneModal ? ((0,
                s.uX)(),
                (0,
                s.Wv)(a["PhoneInputModalVue"], {
                    key: 1,
                    bindPhone: a.bindPhone,
                    onChangePhoneNumberInput: a.changePhoneNumberInput,
                    onVerifyResult: a.verifyResult,
                    onLogout: a.logout
                }, null, 8, ["bindPhone"])) : (0,
                s.Q3)("", !0), a.showFailModal ? ((0,
                s.uX)(),
                (0,
                s.Wv)(a["VerifyFailModalVue"], {
                    key: 2,
                    onReVerify: a.openPhoneModal,
                    onLogout: a.logout
                })) : (0,
                s.Q3)("", !0)])
            }
            o(44114);
            var g = o(37282);
            o(62953);
            const h = e => ((0,
            s.Qi)("data-v-7f116a90"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , f = {
                class: "pop-up-comp"
            }
              , b = {
                class: "inner-content"
            }
              , v = h(( () => (0,
            s.Lk)("div", {
                class: "title color_text_1"
            }, "账号风险提示", -1)))
              , y = {
                class: "content color_text_1"
            }
              , A = {
                class: "btn-ara"
            };
            function T(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", f, [(0,
                s.Lk)("div", b, [v, (0,
                s.Lk)("div", y, (0,
                s.v_)(o.config.content), 1), (0,
                s.Lk)("div", A, [(0,
                s.Lk)("div", {
                    class: "cancel btn",
                    onClick: t[0] || (t[0] = (...e) => a.cancel && a.cancel(...e))
                }, (0,
                s.v_)(o.config.cancelButtonText), 1), (0,
                s.Lk)("div", {
                    class: "confirm btn",
                    onClick: t[1] || (t[1] = (...e) => a.confirm && a.confirm(...e))
                }, (0,
                s.v_)(o.config.confirmButtonText), 1)])])])
            }
            var _ = {
                name: "AbnormalPopUp",
                props: {
                    config: {
                        type: Object
                    }
                },
                setup(e) {
                    const t = () => {
                        e.config.cancel()
                    }
                      , o = () => {
                        e.config.confirm()
                    }
                    ;
                    return {
                        cancel: t,
                        confirm: o
                    }
                }
            }
              , k = o(66262);
            const S = (0,
            k.A)(_, [["render", T], ["__scopeId", "data-v-7f116a90"]]);
            var w = S
              , E = (o(27495),
            o(25440),
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARASURBVHgBxZhLTxRBEMdrYVVQI6tRQY2yHtTExOjFxFciXj0oH8AEOfsNvChevBkvGk8KfgExxosxwsZ48oEkHowYWHwgMRpQMBpe6//PVDE9zT6BHSr5UzOzNdU/qnu6eyYhS7RcLpeCO6I6DDVAv6CORCKR1ZhaepzPSlyGRk9Dz6CxXGhzju/RuCRUB23kP6N+nVRoiXIDCQZ3U4KKzV9ycuRcT0P8GhxTrGLS8bQJhPyRMixZKgANpeHuQme8nwzIjs0/xD0J7xpVo2Kb2xHzF/4HQGdkqYBI0gp3D0q5l73GeT4MZaF+6GpQwNycB1bjwW6C2O3fEf+7EEOiCNwVNiaLq2SQGagL6kYD4wVyEITdXAetl/xdzhhCjpYN6MAZjDvOOiWo0rBUYHxoJOiJlAdnfhQ5v5YE1G594F7SuCzUjiS9sgxDflZyF1SvoCZCfkD+nwUB9YHgNJGW6Fh7C7VWWrUikGvh9knQ9dbd1ktv0M4/i63x7mXXNks47mhZ6MxKwdGQawruPTQlYQWTCnzQjV0AxH/VBndRok/okMKNywqbri4D0IxEx+RWsGxZBCjhE+t27TVbtqph2pUDCufqQARQV4m0hPMUITuRoFOqbGhjDI4PRq0D2AimrQuAsHb/PgmnmThsUEI4G5Np/mCA55xgVq93JR+KUoa2uAsaV8A16vfMA2r3bnbjJVgh4rZRiVawHmyNrOARJ8imlx6J30YkrJ75LfyT1gCDG4+ze83Q5qRuMNw9YwMB91qM+n5ZPeO0s0GPyVNHwAYnwObB1TJO2rYFJGAq6QGVvcOuktn4M6ZaXhiW6JYqJatnNhca4DRPOP+462+zrJ7tlKCCc3o+yWkm6wVt1m1XrIY2m+A2SnTJmyBgxmKc+FaJ3whoYDYPfq7B/MPNqLudIuh5id+OSgjHKvLVdNTW4i4HjuOwBSVvkZgMbXGp3S/Rpe4TfzPAbvUJB/SKxGdnZfGesE8MUF+EMt5NrGLVuxptHIc7IdEXqGEwDS4AqnXYPRJWshMJqjbt6KaURfCr98RiFgC1it0SXU04afdUY9pRuMtQo0TH3iuwfFwEqMadddZyqNIrDYlc2yTYsTdJ+E5Mz9nksRsbAdS3t3YJu9mq2ayQbbJ8uGMSfCVrkvDLgul20Rd3J8lFCT4azZ96cRwG/PRR0bYMOfmR84IE77185ZxxPJe2O8j53L+v2MejNoXMF8OET6H7UD8SvyuQYwccXylOQoegaQ/Ojm8hRyZfjqLbKzTA1wF+p2mW6Bw56zQ2rY1w3hrTaxz49So/zgX8Bl0H3FAhhpL7P304rkJtEj44bkPWsHvsXvNl972AbpT60lrJJ+AWCVaXUxJ2T77q+Nf866+hrnLHcMU7aB3slyQYVzs92HyVojg7PIIyAOuTCmxZW3zAcuDvluDJJOycinBfVC8BNSJLtP/9A8MVKVsNUAAAAABJRU5ErkJggg==");
            const I = e => ((0,
            s.Qi)("data-v-46de4805"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , C = {
                class: "pop-up-components"
            }
              , P = {
                class: "inner-content"
            }
              , L = {
                class: "phone-inner-content"
            }
              , x = I(( () => (0,
            s.Lk)("div", {
                class: "title color_text_1"
            }, "安全验证", -1)))
              , R = I(( () => (0,
            s.Lk)("div", {
                class: "content color_text_1"
            }, "检测到异常登录，为保障账户安全，请使用已绑定手机号，完成身份验证。", -1)))
              , D = {
                class: "phone-show"
            }
              , H = {
                class: "btn-area"
            }
              , O = {
                key: 1,
                class: "confirm btn"
            }
              , V = I(( () => (0,
            s.Lk)("img", {
                class: "loading-spinner",
                src: E,
                alt: "loading"
            }, null, -1)))
              , U = [V]
              , N = {
                class: "code-inner-content"
            }
              , K = I(( () => (0,
            s.Lk)("div", {
                class: "title color_text_1"
            }, "输入6位验证码", -1)))
              , B = {
                class: "content color_text_1"
            }
              , M = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , F = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , $ = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , j = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , W = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , X = I(( () => (0,
            s.Lk)("input", {
                class: "code-input-box",
                type: "text",
                maxlength: "1",
                inputmode: "numeric",
                autocomplete: "one-time-code"
            }, null, -1)))
              , G = [M, F, $, j, W, X]
              , J = {
                class: "btn-area"
            };
            function Q(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", C, [(0,
                s.Lk)("div", P, [(0,
                s.bo)((0,
                s.Lk)("div", L, [x, R, (0,
                s.Lk)("div", D, (0,
                s.v_)(o.bindPhone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")), 1), (0,
                s.Lk)("div", H, [a.isGettingCode ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", O, U)) : ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: "confirm btn",
                    onClick: a.confirm
                }, "发送短信验证码"))])], 512), [[s.aG, "phone" === a.activeTab]]), (0,
                s.bo)((0,
                s.Lk)("div", N, [K, (0,
                s.Lk)("div", B, "验证码已发至 " + (0,
                s.v_)(a.phone), 1), (0,
                s.Lk)("div", {
                    class: "code-input",
                    onClick: a.focusCodeInputs
                }, G), (0,
                s.Lk)("div", J, [(0,
                s.Lk)("div", {
                    class: (0,
                    s.C4)(["confirm resend-btn btn", {
                        "resend-btn-disabled": a.countdown > 0
                    }]),
                    onClick: a.confirm
                }, (0,
                s.v_)(a.resendBtn), 3)])], 512), [[s.aG, "code" === a.activeTab]])])])
            }
            var Y = o(86477)
              , q = o(52307)
              , z = {
                __name: "PhoneInputModal",
                props: {
                    bindPhone: {
                        type: String
                    }
                },
                emits: ["verifyResult", "logout"],
                setup(e, {expose: t, emit: o}) {
                    t();
                    const a = o
                      , n = e
                      , i = (0,
                    s.KR)("phone")
                      , r = (0,
                    s.KR)(n.bindPhone);
                    let l = [];
                    const c = (0,
                    s.KR)(0)
                      , u = (0,
                    s.KR)(!1)
                      , p = () => {
                        c.value > 0 || (u.value = !0,
                        Y.A.getFoundationCode({
                            product: "dictWeb",
                            phoneNumber: r.value,
                            length: 6
                        }).then((e => {
                            u.value = !1,
                            0 === e.code ? (i.value = "code",
                            h(),
                            (0,
                            s.dY)(( () => {
                                l = document.querySelectorAll(".code-input-box"),
                                setTimeout(( () => {
                                    l[0].focus()
                                }
                                ), 500)
                            }
                            ))) : (0,
                            d.A)(e.message || "验证码获取失败，请重试")
                        }
                        )).catch((e => {
                            (0,
                            d.A)(e.message || "验证码获取失败，请重试")
                        }
                        )))
                    }
                      , m = (0,
                    s.EW)(( () => c.value > 0 ? `${c.value}秒后重发` : "重新发送"));
                    let g = null;
                    const h = () => {
                        c.value = 59,
                        g = setInterval(( () => {
                            c.value > 0 ? c.value -= 1 : (clearInterval(g),
                            g = null)
                        }
                        ), 1e3)
                    }
                      , f = async () => {
                        try {
                            const e = await Y.A.removeIndustry();
                            0 === e.code ? ((0,
                            d.A)("安全验证已完成，账号可正常使用", 3e3),
                            a("verifyResult", !0)) : a("verifyResult", !1)
                        } catch (e) {
                            a("verifyResult", !1)
                        }
                    }
                      , b = () => Array.from(l).map((e => e.value)).join("")
                      , v = () => {
                        Y.A.verifyFoundationCode({
                            product: "dictWeb",
                            phoneNumber: r.value,
                            verifyCode: b()
                        }).then((e => {
                            console.log("验证码res", e),
                            0 === e.code ? f() : 103 === e.code ? ((0,
                            d.A)("验证码多次验证失败，已退出当前账号。如有疑问，请前往微信公众号「有道翻译」联系人工客服", 4e3),
                            setTimeout(( () => {
                                a("logout")
                            }
                            ), 4e3)) : ((0,
                            d.A)(e.message || "短信验证码错误，请重新输入", 3e3),
                            setTimeout(( () => {
                                _()
                            }
                            ), 500))
                        }
                        )).catch((e => {
                            a("verifyResult", !1)
                        }
                        ))
                    }
                      , y = () => {
                        l = document.querySelectorAll(".code-input-box"),
                        l.forEach(( (e, t) => {
                            e.addEventListener("input", (e => {
                                const {value: o} = e.target;
                                /^\d$/.test(o) || "" === o ? o && (t < l.length - 1 ? l[t + 1].focus() : (l[t].blur(),
                                v())) : e.target.value = ""
                            }
                            )),
                            e.addEventListener("keydown", (o => {
                                "Backspace" !== o.key || e.value || t > 0 && l[t - 1].focus()
                            }
                            ))
                        }
                        )),
                        setTimeout(( () => {
                            _()
                        }
                        ), 500)
                    }
                      , A = e => {
                        if (!e || "visibilitychange" !== e.type || "visible" === document.visibilityState) {
                            e.stopPropagation();
                            for (let e = 0; e < l.length; e += 1)
                                if (!l[e].value) {
                                    l[e].focus();
                                    break
                                }
                        }
                    }
                      , T = () => {
                        l.forEach((e => {
                            e.value = ""
                        }
                        ))
                    }
                      , _ = () => {
                        T(),
                        l[0].focus()
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        y(),
                        document.addEventListener("visibilitychange", A),
                        window.addEventListener("click", A)
                    }
                    )),
                    (0,
                    s.hi)(( () => {
                        clearInterval(g),
                        document.removeEventListener("visibilitychange", A),
                        window.removeEventListener("click", A)
                    }
                    ));
                    const k = {
                        emit: a,
                        props: n,
                        activeTab: i,
                        phone: r,
                        get inputs() {
                            return l
                        },
                        set inputs(e) {
                            l = e
                        },
                        countdown: c,
                        isGettingCode: u,
                        confirm: p,
                        resendBtn: m,
                        get countdownTimer() {
                            return g
                        },
                        set countdownTimer(e) {
                            g = e
                        },
                        startCountdown: h,
                        removeIndustry: f,
                        getVerifyCode: b,
                        verify: v,
                        initCodeInputs: y,
                        focusCodeInputs: A,
                        clearCodeInputs: T,
                        clearAndFocus: _,
                        computed: s.EW,
                        ref: s.KR,
                        get toast() {
                            return d.A
                        },
                        get loginService() {
                            return Y.A
                        },
                        get set() {
                            return q.hZ
                        }
                    };
                    return Object.defineProperty(k, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    k
                }
            };
            const Z = (0,
            k.A)(z, [["render", Q], ["__scopeId", "data-v-46de4805"]]);
            var ee = Z;
            const te = e => ((0,
            s.Qi)("data-v-4e5c617e"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , oe = {
                class: "pop-up-comp"
            }
              , ae = {
                class: "inner-content"
            }
              , ne = te(( () => (0,
            s.Lk)("div", {
                class: "title color_text_1"
            }, "安全验证失败", -1)))
              , ie = {
                class: "btn-ara"
            };
            function re(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", oe, [(0,
                s.Lk)("div", ae, [ne, (0,
                s.Lk)("div", {
                    class: "content color_text_1"
                }, (0,
                s.v_)(a.failTips)), (0,
                s.Lk)("div", ie, [(0,
                s.Lk)("div", {
                    class: "cancel btn",
                    onClick: t[0] || (t[0] = e => a.emit("logout"))
                }, "直接退出登录"), (0,
                s.Lk)("div", {
                    class: "confirm btn",
                    onClick: t[1] || (t[1] = e => a.emit("reVerify"))
                }, "重新验证")])])])
            }
            const le = "很抱歉，当前安全验证遇到异常（可能网络不佳导致），您可重新尝试验证，或请前往微信公众号有道翻译联系人工客服。";
            var se = {
                __name: "VerifyFailModal",
                emits: ["reVerify", "logout"],
                setup(e, {expose: t, emit: o}) {
                    t();
                    const a = o
                      , n = {
                        emit: a,
                        failTips: le,
                        ref: s.KR
                    };
                    return Object.defineProperty(n, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    n
                }
            };
            const ce = (0,
            k.A)(se, [["render", re], ["__scopeId", "data-v-4e5c617e"]]);
            var de = ce
              , ue = {
                __name: "index",
                props: {
                    config: {
                        type: Object,
                        clear: Function
                    }
                },
                setup(e, {expose: t}) {
                    t();
                    const o = e
                      , a = (0,
                    s.KR)(o.config.phone || "")
                      , n = (0,
                    s.KR)(a.value);
                    (0,
                    s.Gt)("bindPhone", a);
                    const i = {
                        confirmButtonText: a.value ? "去验证" : "联系人工客服",
                        cancelButtonText: a.value ? "取消" : "直接退出登录",
                        content: a.value ? "当前账号存在安全风险，请先完成手机号验证" : "当前账号存在安全风险，暂无法正常使用",
                        showIconClose: !1,
                        confirm: () => {
                            if (!a.value)
                                return console.log("打开客服页面"),
                                void window.open("https://h5.youdao.com/ydrgkf2511", "_blank");
                            window._rlog.push(["_trackCustom", "event", [["action", "security_popup_bound_verify"]]]),
                            u()
                        }
                        ,
                        cancel: () => {
                            a.value && window._rlog.push(["_trackCustom", "event", [["action", "security_popup_bound_cancel"]]]),
                            r()
                        }
                    }
                      , r = () => {
                        o.config.clear();
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=${e}&t=${(new Date).getTime()}`
                    }
                      , l = (0,
                    s.KR)(!0)
                      , c = (0,
                    s.KR)(!1)
                      , d = (0,
                    s.KR)(!1)
                      , u = () => {
                        l.value = !1,
                        d.value = !1,
                        c.value = !0
                    }
                      , p = () => {
                        c.value = !1,
                        d.value = !0,
                        window._rlog.push(["_trackCustom", "event", [["show", "security_verify_fail"]]])
                    }
                      , m = e => {
                        n.value = e
                    }
                      , h = e => {
                        e ? (window._rlog.push(["_trackCustom", "event", [["show", "security_verify_success"]]]),
                        g.A.$emit("buyVipSuccessFromVipCenter"),
                        o.config.clear()) : p()
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        a.value ? window._rlog.push(["_trackCustom", "event", [["show", "security_popup_bound"], ["vip", o.config.vipRlog]]]) : window._rlog.push(["_trackCustom", "event", [["show", "security_popup_unbound"], ["vip", o.config.vipRlog]]])
                    }
                    ));
                    const f = {
                        props: o,
                        bindPhone: a,
                        phoneNumberInput: n,
                        alertConfig: i,
                        logout: r,
                        showAbnormalAlert: l,
                        showPhoneModal: c,
                        showFailModal: d,
                        openPhoneModal: u,
                        openFailModal: p,
                        changePhoneNumberInput: m,
                        verifyResult: h,
                        ref: s.KR,
                        provide: s.Gt,
                        onMounted: s.sV,
                        computed: s.EW,
                        get eventBus() {
                            return g.A
                        },
                        AbnormalAlert: w,
                        PhoneInputModalVue: ee,
                        VerifyFailModalVue: de
                    };
                    return Object.defineProperty(f, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    f
                }
            };
            const pe = (0,
            k.A)(ue, [["render", m], ["__scopeId", "data-v-345c5782"]]);
            var me = pe;
            const ge = document.createElement("div");
            ge.setAttribute("class", "popup"),
            document.body.appendChild(ge);
            var he = e => {
                const t = () => {
                    (0,
                    s.XX)(null, ge)
                }
                ;
                e.clear = t;
                const o = (0,
                s.bF)(me, {
                    config: e
                });
                (0,
                s.XX)(o, ge)
            }
            ;
            function fe(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(s.eB, {
                    name: "blankTooltip"
                }, {
                    default: (0,
                    s.k6)(( () => [(0,
                    s.eW)((0,
                    s.v_)(a.text), 1)])),
                    _: 1
                })
            }
            var be = {
                setup() {
                    const e = (0,
                    s.KR)();
                    return {
                        text: e
                    }
                }
            };
            const ve = (0,
            k.A)(be, [["render", fe], ["__scopeId", "data-v-13c25996"]]);
            var ye = ve;
            const Ae = {
                beforeMount: function(e, t) {
                    var o, a = "yd-tooltip", n = "", i = null, r = "bottom", l = "blank", c = !1;
                    const d = () => {
                        if (t.value && "function" === typeof t.value) {
                            var d = t.value();
                            const {component: e, data: a} = d;
                            o = (0,
                            s.Ef)(e, a),
                            c = !0,
                            l = "custom"
                        } else
                            !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (n = e.dataset.tooltip) : n = t.value;
                        if (e.dataset["tooltipStyle"] && (l = e.dataset["tooltipStyle"]),
                        (c || "" != n.trim()) && (!c || o)) {
                            Object.keys(t.modifiers)[0] && (r = Object.keys(t.modifiers)[0]),
                            i = document.createElement("div");
                            var u = [a, l];
                            if (i.setAttribute("class", u.join(" ")),
                            i.style.zIndex = 100,
                            c) {
                                var p = document.body.appendChild(i);
                                o.mount(p)
                            } else {
                                p = document.body.appendChild(i);
                                var m = (0,
                                s.Ef)(ye)
                                  , g = m.mount(p);
                                g.text = n
                            }
                            var h = e.getBoundingClientRect();
                            (0,
                            s.dY)(( () => {
                                var e = 0
                                  , t = 0
                                  , o = 8
                                  , a = 8;
                                switch (r) {
                                case "top":
                                    e = h.left - i.offsetWidth / 2 + h.width / 2,
                                    t = h.top - i.offsetHeight - o;
                                    break;
                                case "left":
                                    e = h.left - i.offsetWidth - a,
                                    t = h.top + h.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "right":
                                    e = h.left + h.width + a,
                                    t = h.top + h.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "bottom":
                                    e = h.left - i.offsetWidth / 2 + h.width / 2,
                                    t = h.top + h.height + o;
                                    break;
                                case "left-bottom":
                                    e = h.left - i.offsetWidth - a,
                                    t = h.bottom - i.offsetHeight;
                                    break;
                                case "left-top":
                                    e = h.left - i.offsetWidth - a,
                                    t = h.top;
                                    break;
                                case "right-top":
                                    e = h.left + h.width + a,
                                    t = h.top;
                                    break;
                                case "right-bottom":
                                    e = h.left + h.width + a,
                                    t = h.bottom - i.offsetHeight;
                                    break;
                                case "top-left":
                                    e = h.left,
                                    t = h.top - i.offsetHeight - o;
                                    break;
                                case "top-right":
                                    e = h.left + h.width - i.offsetWidth,
                                    t = h.top - i.offsetHeight - o;
                                    break;
                                case "bottom-left":
                                    e = h.left,
                                    t = h.bottom + o;
                                    break;
                                case "bottom-right":
                                    e = h.left + h.width - i.offsetWidth,
                                    t = h.bottom + o;
                                    break
                                }
                                var n = 20;
                                e < 0 && (e = 0 + n),
                                e + i.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - i.offsetWidth - n),
                                t < 0 && (t = 0 + n),
                                t + i.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - i.offsetHeight - n),
                                i.style.left = e + "px",
                                i.style.top = t + "px",
                                i.style.visibility = "visible"
                            }
                            ))
                        }
                    }
                      , u = () => {
                        i && i.parentNode && i.parentNode.removeChild(i),
                        o = null,
                        n = "",
                        c = !1,
                        i = null
                    }
                    ;
                    e.addEventListener("mouseenter", d),
                    e.addEventListener("mouseleave", u)
                },
                updated(e, {value: t}) {
                    e.$value = t
                },
                unmounted(e) {
                    e.removeEventListener("mouseenter", e.mouseenterHandler),
                    e.removeEventListener("mouseleave", e.mouseleaveHandler)
                }
            };
            var Te = Ae;
            const _e = {
                tooltip: Te
            };
            var ke = {
                install(e) {
                    Object.keys(_e).forEach((t => {
                        e.directive(t, _e[t])
                    }
                    ))
                }
            }
              , Se = ke
              , we = o(74387)
              , Ee = o(86956)
              , Ie = o(74466)
              , Ce = o(18415)
              , Pe = o(42699);
            const Le = {
                class: "sticky-sidebar"
            }
              , xe = {
                key: 1,
                class: "test-mode-version-container"
            };
            function Re(e, t, o, a, n, i) {
                const r = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)(s.FK, null, [a.show ? ((0,
                s.uX)(),
                (0,
                s.Wv)(r, {
                    key: 0,
                    class: (0,
                    s.C4)(["os_" + a.currentOS])
                }, null, 8, ["class"])) : (0,
                s.Q3)("", !0), (0,
                s.Lk)("div", Le, [(0,
                s.bF)(a["BackToTop"])]), a.testMode && a.version ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", xe, (0,
                s.v_)(`当前版本号：${a.version}`), 1)) : (0,
                s.Q3)("", !0)], 64)
            }
            function De(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "backToTopButton",
                    style: (0,
                    s.Tr)({
                        display: a.showButton ? "block" : "none"
                    }),
                    onClick: a.scrollToTop
                }, null, 4)
            }
            var He = {
                __name: "BackToTop",
                setup(e, {expose: t}) {
                    t();
                    const o = (0,
                    s.KR)(!1)
                      , a = window.innerHeight || document.body.clientHeight
                      , n = () => {
                        const e = document.documentElement.scrollTop || document.body.scrollTop;
                        o.value = e >= a
                    }
                    ;
                    window.addEventListener("scroll", n),
                    (0,
                    s.xo)(( () => {
                        window.removeEventListener("scroll", n)
                    }
                    ));
                    const i = () => {
                        document.documentElement.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                      , r = {
                        showButton: o,
                        winHeight: a,
                        srollListener: n,
                        scrollToTop: i
                    };
                    return Object.defineProperty(r, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    r
                }
            };
            const Oe = (0,
            k.A)(He, [["render", De], ["__scopeId", "data-v-e6a8c40e"]]);
            var Ve = Oe
              , Ue = o(18908)
              , Ne = o(96091)
              , Ke = o(66278)
              , Be = o(83503)
              , Me = o.n(Be)
              , Fe = o(45358)
              , $e = o(93493)
              , je = {
                __name: "App",
                setup(e, {expose: t}) {
                    t();
                    const o = !1
                      , a = "0.8.4"
                      , n = (0,
                    s.KR)(!0);
                    (0,
                    s.Gt)("showTopBanner", n);
                    const i = (0,
                    Ke.Pj)()
                      , r = (0,
                    s.KR)(!1);
                    (0,
                    s.sV)((async () => {
                        i.dispatch("initTextTranslateSettingStore"),
                        g.A.$on("changeStickySidebarPosition", ( () => {
                            console.log("11")
                        }
                        )),
                        await (0,
                        Ne.A)(),
                        await i.dispatch("fetchAITranslateSecretKey"),
                        r.value = !0,
                        g.A.$on("buyVipSuccessFromVipCenter", ( () => {
                            _()
                        }
                        ))
                    }
                    ));
                    const l = (0,
                    s.nI)()
                      , c = l.appContext.config.globalProperties
                      , d = (0,
                    s.KR)("")
                      , u = (0,
                    s.KR)("")
                      , p = (0,
                    s.KR)("")
                      , m = (0,
                    s.KR)("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
                      , h = (0,
                    s.KR)("")
                      , f = (0,
                    s.KR)("init")
                      , b = () => {
                        const e = {
                            VUE_APP_DICT_URL: "https://dict.youdao.com",
                            VUE_APP_FEEDBCAK: "https://lunafeedback.youdao.com/feedback",
                            VUE_APP_LANG_URL: "https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langTypeWeb",
                            VUE_APP_OVERMIND_URL: "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod",
                            VUE_APP_VIP_URL: "https://dict.youdao.com/vip",
                            VUE_APP_DOMAIN_DATA_API: "https://doctrans-service.youdao.com/common/enums/list?key=domain",
                            VUE_APP_TEXT_TRANSLATE_URL: "https://dict.youdao.com",
                            VUE_APP_KEYWORD_SERVER_URL: "https://dict.youdao.com",
                            VUE_APP_DOCSERVICE_URL: "https://doctrans-service.youdao.com",
                            VUE_APP_DOCUMENT_REANDER_WEB_URL: "https://c.youdao.com/dict_document_web/#/doctrans",
                            VUE_APP_MODE: "prod",
                            VUE_APP_VIP_BUY_URL: "https://cidian.youdao.com/vip.html#/?buyVip=true",
                            VUE_APP_FEEDBACK_URL: "https://shared.youdao.com/dict/market/common-feedback/#/",
                            VUE_APP_VIP_ADD_URL: "https://cidian.youdao.com/vip.html#/privilege?buyMore=true",
                            VUE_APP_PERSON: "https://fanyi.youdao.com/index.html#/person/docHistory",
                            VUE_APP_TEXT_TRANSLATE_M_URL: "https://fanyi.youdao.com",
                            VUE_APP_AIGC_SERVICE_URL: " https://dict-subsidiary.youdao.com",
                            VUE_APP_FANYI_DOWNLOAD_URL: "https://fanyi.youdao.com/",
                            VUE_APP_FANYI_URL: "https://fanyi.youdao.com/feedback",
                            VUE_APP_DOCTRANS_TIP_URL: "https://doctrans-service.youdao.com/doctrans/constant/copyWriting",
                            VUE_APP_DOCTRANS_ENUMS_API: "https://doctrans-service.youdao.com/common/enums/list",
                            VUE_APP_SERVICE_URL: "https://backendmarket.youdao.com",
                            VUE_APP_EDUCATION_CERTIFICATE_URL: "https://education-certification.youdao.com/education/pub/get",
                            VUE_APP_PACKAGE_URL: "https://shared.youdao.com/dict/market/professional-translation/#/recharge",
                            VUE_APP_AI_SERVICE_URL: "https://luna-ai.youdao.com",
                            VUE_APP_DEVICE_URL: "https://fanyi.youdao.com/device.html#/deviceManager",
                            VUE_APP_LOGIN_URL: "https://c.youdao.com/common-login-web/index.html",
                            VUE_APP_CHECK_URL: "https://dict.youdao.com/login/acc",
                            VUE_APP_LX_LOGIN_URL: "https://c.youdao.com/Lenovo-login-web/index.html",
                            VUE_APP_PUBLIC_PATH: "https://shared.ydstatic.com/dict/translation-website/",
                            VUE_APP_PDF2WORD: "https://dict-fileconvert.youdao.com",
                            VUE_APP_FOUNDATION_URL: "https://foundation.youdao.com",
                            VUE_APP_TRANS_URL: "https://dict-trans.youdao.com",
                            VUE_APP_JSON_API_URL: "https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4",
                            VUE_APP_JSON_API_SIGN_SECRET_KEY: "t2he2k4m2g6QKRigK0KAmSpXKgAezywG",
                            VUE_APP_CHECK_TEXT_TRANS_LANG_KEY_ID: "ai-translate-direction",
                            VUE_APP_CHECK_TEXT_TRANS_LANG_SECRET_KEY: "I5WacgKEZaloWBiDnE1fThnzxYWN30PH",
                            VUE_APP_VERSION: "0.8.4",
                            NODE_ENV: "production",
                            BASE_URL: ""
                        }.VUE_APP_OLDVERSION_URL;
                        i.set("canGoNewVersion", !0),
                        window.open(e, "_self")
                    }
                      , v = e => {
                        const t = {
                            userid: e
                        };
                        Y.A.getBatchUrl(t).then((e => {
                            u.value = e.values.nickname,
                            i.dispatch("login/setNickName", u.value)
                        }
                        ))
                    }
                      , y = () => {
                        Y.A.getVipStatus().then((e => {
                            console.log("vipInfo@@@", e),
                            i.dispatch("login/setSvip", e.svip),
                            i.dispatch("login/setVip", e.vip),
                            i.dispatch("login/setVipStatusLoaded")
                        }
                        ))
                    }
                      , A = () => {
                        const e = "education-certification"
                          , t = "cf41bbc6c60a46ff"
                          , o = +new Date
                          , a = "keyid,mysticTime,product"
                          , n = "webfanyi"
                          , r = Me()(`keyid=${e}&mysticTime=${o}&product=${n}&key=${t}`).toString();
                        Y.A.getStudentStatus({
                            keyid: e,
                            mysticTime: o,
                            pointParam: a,
                            product: n,
                            sign: r
                        }).then((e => {
                            0 === e.code && i.dispatch("login/setIsStudent", !(!e.data.educationType || e.data.isGraduate))
                        }
                        ))
                    }
                      , T = e => {
                        const t = "true" === window.localStorage.getItem("FanYiWebLoginStatus");
                        t !== e && e && (window.uet_report_conversion(Fe.A.getParameter("keyfrom") || ""),
                        console.log("发送bing log")),
                        window.localStorage.setItem("FanYiWebLoginStatus", e)
                    }
                      , _ = async () => {
                        Y.A.getAccountInfos().then((e => {
                            const t = e.data;
                            0 === e.code ? (i.dispatch("login/setLogin", !0),
                            d.value = t.yduserid,
                            p.value = m.value,
                            i.dispatch("login/setOptionAvatar", p.value),
                            v(d.value),
                            setTimeout(( () => {
                                v(d.value)
                            }
                            ), 1e3),
                            y(),
                            A(),
                            T(!0),
                            e.data.third_part_info && e.data.third_part_info.find((e => "ursphone" === e.platform && e.username)) ? f.value = e.data.third_part_info.find((e => "ursphone" === e.platform)).username : f.value = "") : (i.dispatch("login/setVipStatusLoaded"),
                            i.dispatch("login/setLogin", !1),
                            T(!1))
                        }
                        ))
                    }
                    ;
                    _();
                    const k = () => {
                        const e = navigator.userAgent.toLowerCase()
                          , t = /macintosh|mac os x/i.test(e);
                        h.value = t ? "Mac" : "Windows"
                    }
                    ;
                    k();
                    const S = (0,
                    s.EW)(( () => i.state.login.isSvip))
                      , w = (0,
                    s.EW)(( () => i.state.login.isVip))
                      , E = async () => {
                        let e = 0;
                        S.value ? e = 2 : w.value && (e = 1),
                        console.log("弹出账号风险提示弹窗", window.$AccountError),
                        "init" === f.value ? (await _(),
                        window.$AccountError({
                            phone: f.value,
                            vipRlog: e
                        })) : window.$AccountError({
                            phone: f.value,
                            vipRlog: e
                        })
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        g.A.$on("buyVipSuccessFromVipCenter", y),
                        g.A.$on("deviceOverErrorFromFrame", E)
                    }
                    )),
                    (0,
                    s.hi)(( () => {
                        g.A.$off("buyVipSuccessFromVipCenter", y),
                        g.A.$off("deviceOverErrorFromFrame", E)
                    }
                    ));
                    const I = {
                        testMode: o,
                        version: a,
                        showTopBanner: n,
                        store: i,
                        show: r,
                        internalInstance: l,
                        internalData: c,
                        yduserid: d,
                        nickname: u,
                        optionAvatar: p,
                        avatar: m,
                        currentOS: h,
                        bindPhone: f,
                        goBack: b,
                        getBatchData: v,
                        getVipInfo: y,
                        getStudentInfo: A,
                        pushBingLog: T,
                        getAccountInfo: _,
                        getOS: k,
                        isSvip: S,
                        isVip: w,
                        popupAccountDengarWindow: E,
                        BackToTop: Ve,
                        get service() {
                            return Y.A
                        },
                        get serviceAI() {
                            return Ue.A
                        },
                        get getVisitorId() {
                            return Ne.A
                        },
                        get useStore() {
                            return Ke.Pj
                        },
                        get md5() {
                            return Me()
                        },
                        ref: s.KR,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        provide: s.Gt,
                        get eventBus() {
                            return g.A
                        },
                        get util() {
                            return Fe.A
                        },
                        get ConfirmPopup() {
                            return $e["default"]
                        }
                    };
                    return Object.defineProperty(I, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    I
                }
            };
            const We = (0,
            k.A)(je, [["render", Re]]);
            var Xe = We
              , Ge = o(75220);
            function Je(e, t, o, a, n, i) {
                const r = (0,
                s.g2)("WebTopBanner")
                  , l = (0,
                s.g2)("dictWebsiteFooter")
                  , c = (0,
                s.g2)("TranslationWebsiteFrame")
                  , d = (0,
                s.g2)("VipCenter");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["index", [{
                        isPrerender: a.isPrerender,
                        aiBorder: "AITranslate" === e.$route.name
                    }]])
                }, [(0,
                s.bF)(c, {
                    testMode: a.testMode,
                    canRouterJump: !0,
                    currentRouteName: "AITranslate" === e.$route.name ? "TextTranslate" : e.$route.name,
                    sidebarTransition: a.canTransition,
                    contentBgClassName: a.contentBgClassName,
                    topNavFixedDis: 16,
                    onSaveTextTranslateContentToLS: a.saveTextTranslateContentToLS,
                    onSaveAITranslateHistoryList: a.saveAITranslateHistoryList,
                    onCollapseChange: a.collapseChange,
                    onDeviceOverError: a.deviceOverError,
                    isFullContent: "/AITranslate" == e.$route.path,
                    needBaiduCallback: !0,
                    showCollapseTip: a.showCollapseTip,
                    minViewWidth: a.minViewWidth,
                    isSvip: a.isSvip,
                    showTipForceList: a.leftSlideTipForceList
                }, (0,
                s.eX)({
                    footer: (0,
                    s.k6)(( () => ["/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(l, {
                        key: 0
                    })) : (0,
                    s.Q3)("", !0)])),
                    default: (0,
                    s.k6)(( () => [(0,
                    s.bF)(a["TabHeaderLeft"]), (0,
                    s.bF)(a["TranslateTab"], {
                        class: (0,
                        s.C4)({
                            "ctrl-icon-nav": "/AITranslate" == e.$route.path
                        })
                    }, null, 8, ["class"]), "/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.CE)("div", {
                        key: 0,
                        class: "banner-outer-container",
                        style: (0,
                        s.Tr)({
                            width: "calc(100% - " + a.animationAllocation + "px)"
                        })
                    }, [(0,
                    s.bF)(a["Banner"])], 4)) : (0,
                    s.Q3)("", !0), "TextTranslate" === e.$route.name ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(a["TextTranslateHistoryPanel"], {
                        key: 1
                    })) : (0,
                    s.Q3)("", !0), "/AITranslate" !== e.$route.path || a.isPrerender ? (0,
                    s.Q3)("", !0) : ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(a["AdPopUp"], {
                        key: 2
                    }))])),
                    _: 2
                }, [!a.isPrerender && a.showTopBanner ? {
                    name: "topBanner",
                    fn: (0,
                    s.k6)(( () => [(0,
                    s.bF)(r, {
                        isSvip: !a.vipStatusLoaded || a.isSvip,
                        onCloseTopBanner: t[0] || (t[0] = e => a.showTopBanner = !1)
                    }, null, 8, ["isSvip"])])),
                    key: "0"
                } : void 0]), 1032, ["testMode", "currentRouteName", "sidebarTransition", "contentBgClassName", "onSaveTextTranslateContentToLS", "onSaveAITranslateHistoryList", "isFullContent", "showCollapseTip", "minViewWidth", "isSvip", "showTipForceList"]), (0,
                s.bF)(d, {
                    debug: a.testMode,
                    isShow: a.isShowVipCenter,
                    onBuyVipSuccess: a.buyVipSuccess,
                    onCloseVipCenter: a.closeVipCenter,
                    onDeviceOverError: a.deviceOverError,
                    routeQuery: a.vipRouteQuery
                }, null, 8, ["debug", "isShow", "routeQuery"])], 2)
            }
            var Qe = o(41034)
              , Ye = (o(33110),
            o(66582))
              , qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII=";
            const ze = ["src"];
            function Ze(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(a["Overlay"], {
                    visible: a.showAd,
                    modalClosable: !0
                }, {
                    content: (0,
                    s.k6)(( () => [(0,
                    s.Lk)("img", {
                        class: "ad",
                        src: a.picture,
                        onClick: a.goAd
                    }, null, 8, ze), (0,
                    s.Lk)("img", {
                        class: "close",
                        src: qe,
                        onClick: a.closeAd
                    })])),
                    _: 1
                }, 8, ["visible"])
            }
            var et = o(94922)
              , tt = o(76393)
              , ot = {
                __name: "AdPopUp",
                setup(e, {expose: t}) {
                    t();
                    const o = (0,
                    s.KR)(!1)
                      , a = (0,
                    s.KR)("")
                      , n = (0,
                    s.KR)("")
                      , i = (0,
                    s.nI)()
                      , r = i.appContext.config.globalProperties
                      , l = () => {
                        o.value = !1
                    }
                      , c = () => {
                        window.open(a.value, "_self"),
                        window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        tt.A.getPopUpInfos().then((e => {
                            if (0 !== Object.keys(e.data.bannerList).length) {
                                const t = e.data.bannerList[0];
                                a.value = t.url,
                                n.value = t.picture,
                                Fe.A.isDuringDate(t.effectiveTime, t.expirationTime) && null === r.$cookies.get("adcookie") ? (o.value = !0,
                                window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                                r.$cookies.set("adcookie", !0, 86400)) : o.value = !1
                            }
                        }
                        ))
                    }
                    ));
                    const d = {
                        showAd: o,
                        url: a,
                        picture: n,
                        internalInstance: i,
                        internalData: r,
                        closeAd: l,
                        goAd: c,
                        ref: s.KR,
                        onMounted: s.sV,
                        getCurrentInstance: s.nI,
                        Overlay: et.A,
                        get service() {
                            return tt.A
                        },
                        get util() {
                            return Fe.A
                        }
                    };
                    return Object.defineProperty(d, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    d
                }
            };
            const at = (0,
            k.A)(ot, [["render", Ze], ["__scopeId", "data-v-f1081c76"]]);
            var nt = at
              , it = o(34792)
              , rt = o(42348)
              , lt = o(36519);
            const st = e => ((0,
            s.Qi)("data-v-5917a646"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , ct = {
                class: "text-translate-history-panel-header-container"
            }
              , dt = st(( () => (0,
            s.Lk)("div", {
                class: "text-translate-history-panel-title"
            }, [(0,
            s.Lk)("i", {
                class: "icon_history_panel_title"
            }), (0,
            s.Lk)("span", null, "历史记录")], -1)))
              , ut = {
                class: "right-btns-container"
            }
              , pt = {
                key: 0,
                class: "history-content-container"
            }
              , mt = ["onClick"]
              , gt = {
                class: "history-item-lang"
            }
              , ht = {
                class: "history-item-text history-item-origin"
            }
              , ft = {
                class: "history-item-text history-item-target"
            }
              , bt = ["onClick"]
              , vt = {
                key: 1,
                class: "history-no-content"
            }
              , yt = st(( () => (0,
            s.Lk)("img", {
                src: lt
            }, null, -1)))
              , At = [yt];
            function Tt(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "text-translate-history-panel-container",
                    style: (0,
                    s.Tr)({
                        transform: "translateX(" + (200 - a.animationAllocation) + "px)",
                        display: 0 === a.animationAllocation ? "none" : "block",
                        opacity: a.animationAllocation / 200
                    })
                }, [(0,
                s.Lk)("div", ct, [dt, (0,
                s.Lk)("div", ut, [a.historyList.length ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: "clear-btn",
                    onClick: a.clearAllHistoryHandler
                }, "清空")) : (0,
                s.Q3)("", !0), (0,
                s.Lk)("i", {
                    class: "icon-close-text-translate-history-panel",
                    onClick: a.closeHistoryPanelHandler
                })])]), a.historyList.length ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", pt, [((0,
                s.uX)(!0),
                (0,
                s.CE)(s.FK, null, (0,
                s.pI)(a.historyList, ( (e, t) => ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "history-item",
                    key: t,
                    onClick: o => a.updateTextTranslateContentHandler(e, t)
                }, [(0,
                s.Lk)("div", gt, (0,
                s.v_)(a.getLangShowLabel(e)), 1), (0,
                s.Lk)("div", ht, (0,
                s.v_)(a.getOriginText(e)), 1), (0,
                s.Lk)("div", ft, (0,
                s.v_)(e.targetText), 1), (0,
                s.Lk)("i", {
                    class: "icon_history_item_delete",
                    onClick: (0,
                    s.D$)((e => a.deleteHistoryItemHandler(t)), ["stop"])
                }, null, 8, bt)], 8, mt)))), 128))])) : ((0,
                s.uX)(),
                (0,
                s.CE)("div", vt, At))], 4)
            }
            o(13609);
            var _t = o(37062);
            const kt = 100;
            var St = {
                __name: "TextTranslateHistoryPanel",
                setup(e, {expose: t}) {
                    t();
                    const o = (0,
                    Ke.Pj)()
                      , a = (0,
                    s.WQ)("showTextTranslateHistoryPanel")
                      , n = (0,
                    s.WQ)("animationAllocation")
                      , i = (0,
                    s.EW)(( () => {
                        var e;
                        const t = {};
                        return ((null === (e = o.state.language.languageMap.textTranslate) || void 0 === e ? void 0 : e.specify) || []).forEach((e => {
                            t[e.code] = e.label
                        }
                        )),
                        t
                    }
                    ))
                      , r = (0,
                    s.KR)([])
                      , l = e => e.source.init.keyword.replace(/\n/g, " ")
                      , c = e => "selfInnovate" === e.domainType ? p(e.data.result.originTranslateResult, "tgt") : e.data.result.aigcResp
                      , d = e => {
                        h();
                        const t = {
                            source: JSON.parse(JSON.stringify(e.source)),
                            domainType: e.domainType,
                            domain: e.domain,
                            targetText: c(e),
                            languageFromUserSelectedWhenAuto: e.languageFromUserSelectedWhenAuto
                        }
                          , o = r.value[0];
                        if (o) {
                            const a = e.source.init.keyword.replace(/\n/)
                              , n = o.source.init.keyword.replace(/\n/);
                            if (o.source.init.from === e.source.init.from && o.source.init.to === e.source.init.to && (0 === a.indexOf(n) || 0 === n.indexOf(a)))
                                return r.value[0] = t,
                                void localStorage.setItem("textTranslateHistoryList", JSON.stringify(r.value))
                        }
                        const a = r.value.findIndex((t => t.source.init.keyword === e.source.init.keyword && t.source.init.from === e.source.init.from && t.source.init.to === e.source.init.to));
                        a > -1 && r.value.splice(a, 1),
                        r.value.length >= kt && r.value.pop(),
                        r.value.unshift(t),
                        localStorage.setItem("textTranslateHistoryList", JSON.stringify(r.value))
                    }
                      , u = e => {
                        var t, o;
                        let a = ""
                          , n = null === (t = e.source) || void 0 === t || null === (t = t.init) || void 0 === t ? void 0 : t.from
                          , r = null === (o = e.source) || void 0 === o || null === (o = o.init) || void 0 === o ? void 0 : o.to;
                        if (e.languageFromUserSelectedWhenAuto) {
                            a += "检测到";
                            const t = e.languageFromUserSelectedWhenAuto.split("2");
                            n = t[0] || "",
                            r = t[1] || ""
                        }
                        return a += `${i.value[n]} - ${i.value[r]}`,
                        a
                    }
                      , p = (e, t) => {
                        if (console.log("合并文本", e),
                        !e)
                            return "";
                        let o = "";
                        return e.forEach((e => {
                            let a = "";
                            e.forEach((e => {
                                a += e[t]
                            }
                            )),
                            o += a
                        }
                        )),
                        o.replace(/\n/g, " ")
                    }
                      , m = (e, t) => {
                        r.value.splice(t, 1),
                        r.value.unshift(e),
                        g.A.$emit("updateTextTranslateContent", JSON.parse(JSON.stringify(e)))
                    }
                      , h = () => {
                        const e = localStorage.getItem("textTranslateHistoryList");
                        e && (r.value = JSON.parse(e))
                    }
                      , f = () => {
                        window.$CPopup({
                            text: "清空后无法恢复，确定全部清空么？",
                            confirmButtonText: "确定",
                            confirm: () => {
                                r.value = [],
                                localStorage.removeItem("textTranslateHistoryList")
                            }
                            ,
                            cancel: () => {}
                        })
                    }
                      , b = () => {
                        a.value = !1
                    }
                      , v = e => {
                        r.value.splice(e, 1),
                        localStorage.setItem("textTranslateHistoryList", JSON.stringify(r.value))
                    }
                      , y = e => {
                        const t = r.value.findIndex((t => t.source.init.keyword === e.keyword && t.source.init.from === e.from && t.source.init.to === e.to));
                        if (t > -1) {
                            const o = r.value[t];
                            o.source.init.keyword = e.newKeyword,
                            r.value.splice(t, 1),
                            r.value.unshift(o),
                            localStorage.setItem("textTranslateHistoryList", JSON.stringify(r.value))
                        }
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        h(),
                        g.A.$on("updateHistoryList", d),
                        g.A.$on("replaceTextTranslateHistoryItemByContent", y)
                    }
                    )),
                    (0,
                    s.hi)(( () => {
                        g.A.$off("updateHistoryList", d),
                        g.A.$off("replaceTextTranslateHistoryItemByContent", y)
                    }
                    ));
                    const A = {
                        store: o,
                        showTextTranslateHistoryPanel: a,
                        animationAllocation: n,
                        maxHistoryItemLength: kt,
                        languageMap: i,
                        historyList: r,
                        getOriginText: l,
                        getTranslationResult: c,
                        saveHistoryList: d,
                        getLangShowLabel: u,
                        mergeText: p,
                        updateTextTranslateContentHandler: m,
                        queryHistoryList: h,
                        clearAllHistoryHandler: f,
                        closeHistoryPanelHandler: b,
                        deleteHistoryItemHandler: v,
                        replaceHistoryItemByContent: y,
                        get eventBus() {
                            return g.A
                        },
                        get defaultJson() {
                            return _t.A
                        },
                        get useStore() {
                            return Ke.Pj
                        },
                        computed: s.EW,
                        watch: s.wB
                    };
                    return Object.defineProperty(A, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    A
                }
            };
            const wt = (0,
            k.A)(St, [["render", Tt], ["__scopeId", "data-v-5917a646"]]);
            var Et = wt;
            const It = e => ((0,
            s.Qi)("data-v-52dfb285"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , Ct = {
                class: "tab-left"
            }
              , Pt = ["onClick", "onMouseenter"]
              , Lt = {
                key: 0,
                class: "tip-text"
            }
              , xt = {
                key: 1,
                class: "tab-title"
            }
              , Rt = It(( () => (0,
            s.Lk)("div", {
                class: "tab-right"
            }, null, -1)));
            function Dt(e, t, o, a, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-header", {
                        "tab-header-ai": "AITranslate" === i.routeName,
                        "tab-header-doc": "DocumentUpload" === i.routeName
                    }])
                }, [(0,
                s.Lk)("div", Ct, ["TextTranslate" === i.routeName || "AITranslate" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)(s.FK, {
                    key: 0
                }, [((0,
                s.uX)(!0),
                (0,
                s.CE)(s.FK, null, (0,
                s.pI)(n.tabList, ( (e, o) => ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-item", [e.value === n.currentTab ? "active color_text_1" : "color_text_3", "AITranslate" === e.value ? "tab-item-ai" : "", e.customStyle]]),
                    key: o,
                    onClick: t => i.tabItemClickHandler(e),
                    onMouseenter: t => i.tabItemMouseHoverHandler(e),
                    onMouseleave: t[0] || (t[0] = e => i.guideMouseHoverHandler(0))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(e.label), 1), e.tipText ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", Lt, (0,
                s.v_)(e.tipText), 1)) : (0,
                s.Q3)("", !0)], 42, Pt)))), 128)), (0,
                s.Lk)("div", {
                    class: "tab-item color_text_3",
                    onClick: t[1] || (t[1] = e => i.tabItemClickHandler(n.humanTranslateTab))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.humanTranslateTab.label), 1)]), (0,
                s.Lk)("div", {
                    class: "tab-item color_text_3",
                    onClick: t[2] || (t[2] = e => i.tabItemClickHandler(n.AIhumanTranslateTab))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.AIhumanTranslateTab.label), 1)])], 64)) : "DocumentUpload" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", xt, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.documentUploadTab.label), 1)])) : (0,
                s.Q3)("", !0)]), Rt], 2)
            }
            var Ht = o(62512)
              , Ot = o(16075)
              , Vt = {
                name: "TabHeader",
                props: {
                    showTextTranslateHistoryPanel: Boolean
                },
                data() {
                    var e;
                    return {
                        tabList: [{
                            label: "翻译",
                            value: "TextTranslate"
                        }, {
                            label: "AI 翻译",
                            value: "AITranslate",
                            params: {
                                keyfrom: "fanyiweb_tab"
                            },
                            customStyle: "gradient-item"
                        }, {
                            label: "文档翻译",
                            value: "DocumentUpload"
                        }, {
                            label: "PDF转WORD",
                            value: "Pdf2Word"
                        }],
                        humanTranslateTab: {
                            label: "人工翻译",
                            url: "https://f.youdao.com/?vendor=fanyibanner",
                            log: "human_translation"
                        },
                        AIhumanTranslateTab: {
                            label: "AI+人工翻译",
                            url: "https://f.youdao.com/?path=peOrder&vendor=fanyiweb",
                            log: "AI_human_translation"
                        },
                        documentUploadTab: {
                            label: "文档翻译",
                            value: "DocumentUpload"
                        },
                        currentTab: "",
                        showTabAiGuide: !1,
                        isHoverShowAiGuide: !1,
                        isPrerender: (null === (e = window.__PRERENDER_INJECTED) || void 0 === e ? void 0 : e.isPrerender) || !1,
                        sideBarClp: !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: Ot.A
                },
                mounted() {
                    this.checkShowTabAiGuide(),
                    window.addEventListener("click", this.clickHandler),
                    g.A.$on("sidebarCollapseChange", (e => {
                        this.sideBarClp = e
                    }
                    ))
                },
                beforeDestroy() {
                    console.log("beforeDestroy 左"),
                    window.removeEventListener("click", this.clickHandler),
                    g.A.$off("sidebarCollapseChange")
                },
                methods: {
                    clickTabAIGuide() {
                        this.$router.push({
                            name: "AITranslate",
                            query: {
                                keyfrom: "fanyiweb_tab_guide"
                            }
                        })
                    },
                    clickHandler(e) {
                        const {target: t} = e;
                        "pop-up-comp mask" !== t.className && "close" !== t.className && (this.showTabAiGuide = !1,
                        window.removeEventListener("click", this.clickHandler))
                    },
                    checkShowTabAiGuide() {
                        const e = this.getLocalStorage("isShowTabAiGuide");
                        if (void 0 === e) {
                            const e = new Date
                              , t = `${e.getMonth() + 1}-${e.getDate()}`;
                            this.setLocalStorage("isShowTabAiGuide", t),
                            this.showTabAiGuide = !0
                        } else {
                            const t = new Date
                              , o = `${t.getMonth() + 1}-${t.getDate()}`;
                            e !== o ? (this.setLocalStorage("isShowTabAiGuide", o),
                            setTimeout(( () => {
                                this.showTabAiGuide = !0
                            }
                            ), 500)) : this.showTabAiGuide = !1
                        }
                    },
                    getLocalStorage(e) {
                        return Ht.A.get(e)
                    },
                    setLocalStorage(e, t) {
                        Ht.A.set(e, t)
                    },
                    guideMouseHoverHandler(e) {
                        this.isHoverShowAiGuide = Boolean(e)
                    },
                    tabItemMouseHoverHandler(e) {
                        "AITranslate" === e.value && (this.isHoverShowAiGuide = !0)
                    },
                    HumanTranslateHoverTip() {
                        return {
                            component: HumanTranslateHoverTip
                        }
                    },
                    tabItemClickHandler(e) {
                        g.A.$emit("stopTransition"),
                        e.value ? ("Pdf2Word" === e.value && window._rlog.push(["_trackCustom", "event", [["action", "fanyiweb_ formatconvert_entry_click"], ["from", "top"]]]),
                        this.$router.push({
                            name: `${e.value}`,
                            query: e && e.params || {}
                        })) : (e.log && window._rlog.push(["_trackCustom", "event", [["action", e.log]]]),
                        window.open(e.url, "_blank"))
                    }
                },
                watch: {
                    $route: {
                        handler() {
                            this.currentTab = decodeURIComponent(this.$route.name)
                        },
                        immediate: !0
                    }
                }
            };
            (0,
            s.KR)(!0);
            const Ut = (0,
            k.A)(Vt, [["render", Dt], ["__scopeId", "data-v-52dfb285"]]);
            var Nt = Ut;
            const Kt = e => ((0,
            s.Qi)("data-v-e96cb4ec"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , Bt = {
                class: "tab-right"
            }
              , Mt = ["data-tooltip"]
              , Ft = Kt(( () => (0,
            s.Lk)("i", {
                class: "icon ic_text_translate_setting"
            }, null, -1)))
              , $t = Kt(( () => (0,
            s.Lk)("i", {
                class: "icon ic_text_translate_history"
            }, null, -1)))
              , jt = [$t]
              , Wt = Kt(( () => (0,
            s.Lk)("i", {
                class: "icon ic_leftbar_document_normal"
            }, null, -1)))
              , Xt = Kt(( () => (0,
            s.Lk)("span", {
                class: "color_text_1"
            }, "文档翻译记录", -1)))
              , Gt = [Wt, Xt];
            function Jt(e, t, o, a, n, i) {
                const r = Ot.A
                  , l = (0,
                s.gN)("tooltip");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-header", {
                        "tab-header-ai": "AITranslate" === i.routeName,
                        "tab-header-doc": "DocumentUpload" === i.routeName
                    }])
                }, [(0,
                s.Lk)("div", Bt, ["TextTranslate" === i.routeName ? (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: (0,
                    s.C4)(["only-icon-tool-button", [{
                        active: n.textTranslateSettingDialogVisible
                    }]]),
                    onClick: t[0] || (t[0] = (...e) => i.textTranslateSettingButtonClickHander && i.textTranslateSettingButtonClickHander(...e)),
                    "data-tooltip": n.textTranslateSettingDialogVisible ? "" : "设置"
                }, [Ft, (0,
                s.bF)(r, {
                    top: 40,
                    showTextTranslateHistoryPanel: o.showTextTranslateHistoryPanel,
                    dialogVisible: n.textTranslateSettingDialogVisible,
                    onCloseDialog: i.textTranslateSettingCloseCallbackHandler
                }, null, 8, ["showTextTranslateHistoryPanel", "dialogVisible", "onCloseDialog"])], 10, Mt)), [[l, void 0, void 0, {
                    bottom: !0
                }]]) : (0,
                s.Q3)("", !0), "TextTranslate" !== i.routeName || o.showTextTranslateHistoryPanel ? (0,
                s.Q3)("", !0) : (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 1,
                    class: "only-icon-tool-button",
                    onClick: t[1] || (t[1] = (...e) => i.textTranslateHistoryButtonClickHander && i.textTranslateHistoryButtonClickHander(...e)),
                    "data-tooltip": "历史记录"
                }, jt)), [[l, void 0, void 0, {
                    bottom: !0
                }]]), "DocumentUpload" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 2,
                    class: "tool-button",
                    onClick: t[2] || (t[2] = (...e) => i.docHistoryEntryClickHandler && i.docHistoryEntryClickHandler(...e))
                }, Gt)) : (0,
                s.Q3)("", !0)])], 2)
            }
            var Qt = {
                name: "TabHeader",
                props: {
                    showTextTranslateHistoryPanel: Boolean
                },
                data() {
                    var e;
                    return {
                        textTranslateSettingDialogVisible: !1,
                        showTabAiGuide: !1,
                        isHoverShowAiGuide: !1,
                        isPrerender: (null === (e = window.__PRERENDER_INJECTED) || void 0 === e ? void 0 : e.isPrerender) || !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: Ot.A
                },
                mounted() {},
                methods: {
                    textTranslateSettingButtonClickHander() {
                        this.textTranslateSettingDialogVisible = !0
                    },
                    textTranslateSettingCloseCallbackHandler() {
                        this.textTranslateSettingDialogVisible = !1
                    },
                    textTranslateHistoryButtonClickHander() {
                        window._rlog.push(["_trackCustom", "event", [["action", "text_translation_history"]]]),
                        this.$emit("openTextTranslateHistoryPanel", !this.showTextTranslateHistoryPanel),
                        this.$nextTick(( () => {
                            const e = document.querySelector(".yd-tooltip");
                            e && e.remove()
                        }
                        ))
                    },
                    docHistoryEntryClickHandler() {
                        if (this.isLogin) {
                            const e = this.$router.resolve({
                                path: "/person/docHistory"
                            });
                            window.open(e.href, "_blank")
                        } else {
                            const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
                            window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${encodeURIComponent(e)}&t=${(new Date).getTime()}`
                        }
                    }
                },
                watch: {
                    textTranslateSettingDialogVisible: {
                        handler(e) {
                            e && this.$nextTick(( () => {
                                const e = document.querySelector(".yd-tooltip");
                                e && e.remove()
                            }
                            ))
                        }
                    }
                }
            };
            const Yt = (0,
            k.A)(Qt, [["render", Jt], ["__scopeId", "data-v-e96cb4ec"]]);
            var qt = Yt;
            const zt = {
                class: "tab-body color_bg_3"
            };
            function Zt(e, t, o, a, n, i) {
                const r = qt
                  , l = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["translate-tab-container", {
                        "ai-content": "/AITranslate" === a.route.path,
                        "ai-content ai-content-small-process": "/AITranslateSmallProcess" === a.route.path,
                        changeHeight: "/AITranslate" === a.route.path && a.changeHeight,
                        "ai-content-sidebar-unfold": a.sideBarUnfold
                    }]),
                    ref: "AIContent",
                    onScroll: a.handleScroll,
                    style: (0,
                    s.Tr)({
                        width: "calc(100% - " + a.animationAllocation + "px)"
                    })
                }, [(0,
                s.bF)(r, {
                    showTextTranslateHistoryPanel: a.showTextTranslateHistoryPanel,
                    onOpenTextTranslateHistoryPanel: a.openTextTranslateHistoryPanel
                }, null, 8, ["showTextTranslateHistoryPanel"]), (0,
                s.Lk)("div", zt, [(0,
                s.bF)(l, null, {
                    default: (0,
                    s.k6)(( ({Component: e}) => [((0,
                    s.uX)(),
                    (0,
                    s.Wv)(s.PR, null, [((0,
                    s.uX)(),
                    (0,
                    s.Wv)((0,
                    s.$y)(e)))], 1024))])),
                    _: 1
                })])], 38)
            }
            var eo = o(34917)
              , to = {
                __name: "index",
                setup(e, {expose: t}) {
                    t();
                    const o = (0,
                    Ge.lq)()
                      , a = (0,
                    s.nI)()
                      , n = a.appContext.config.globalProperties
                      , i = (0,
                    Ke.Pj)()
                      , r = (0,
                    s.KR)(null)
                      , l = (0,
                    s.KR)(0)
                      , c = (0,
                    s.KR)(0)
                      , d = (0,
                    s.KR)(!1)
                      , u = (0,
                    s.WQ)("showTextTranslateHistoryPanel")
                      , p = (0,
                    s.WQ)("animationAllocation")
                      , m = (0,
                    s.KR)(!0)
                      , h = e => {
                        const t = e.target.scrollHeight - e.target.clientHeight
                          , o = e.target.scrollTop < 0 ? 0 : e.target.scrollTop <= t ? e.target.scrollTop : t;
                        o > c.value && t > 90 && t - o > 90 && (g.A.$emit("AITranslateResultScroll", 1),
                        l.value = 1),
                        o < c.value && (g.A.$emit("AITranslateResultScroll", 0),
                        l.value = 0),
                        c.value = o
                    }
                      , f = e => {
                        u.value = e
                    }
                    ;
                    (0,
                    s.KC)(( () => {
                        i.dispatch("fetchLanguageData"),
                        i.dispatch("fetchDomainData");
                        const e = {
                            keyid: "minor-search-server"
                        }
                          , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
                        eo.A.getAigcEntrance(e, t).then((o => {
                            i.commit("SET_ISALLOWAIGC", o.data.isAllow),
                            !o.data.isAllow && i.state.login.isLogin || eo.A.getAigcStyle(e, t).then((e => {
                                i.commit("SET_AIGCDOMAINMAP", e.data.styleList),
                                null !== n.$cookies.get("participation-aigc-invitation") && i.dispatch("updateDomainMap")
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    (0,
                    s.sV)(( () => {
                        g.A.$on("AITranslateResultScroll", (e => {
                            d.value = !!e
                        }
                        )),
                        g.A.$on("sidebarCollapseChange", (e => {
                            m.value = !e
                        }
                        ))
                    }
                    )),
                    (0,
                    s.xo)(( () => {
                        g.A.$off("sidebarCollapseChange")
                    }
                    ));
                    const b = {
                        route: o,
                        internalInstance: a,
                        internalData: n,
                        store: i,
                        AIContent: r,
                        toggleTopBarStatus: l,
                        lastScrollTop: c,
                        changeHeight: d,
                        showTextTranslateHistoryPanel: u,
                        animationAllocation: p,
                        sideBarUnfold: m,
                        handleScroll: h,
                        openTextTranslateHistoryPanel: f,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        get useRoute() {
                            return Ge.lq
                        },
                        get useStore() {
                            return Ke.Pj
                        },
                        get eventBus() {
                            return g.A
                        },
                        get service() {
                            return eo.A
                        }
                    };
                    return Object.defineProperty(b, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    b
                }
            };
            const oo = (0,
            k.A)(to, [["render", Zt], ["__scopeId", "data-v-d74f9006"]]);
            var ao = oo
              , no = {
                __name: "Home",
                setup(e, {expose: t}) {
                    var o;
                    t();
                    const a = (0,
                    Ge.lq)()
                      , {saveTextTranslateContentToLS: n, saveAITranslateHistoryList: i} = (0,
                    it.A)()
                      , r = (0,
                    s.KR)(!0)
                      , l = (0,
                    s.KR)(!1)
                      , c = (0,
                    s.KR)(!1);
                    (0,
                    s.Gt)("showCollapseTip", c);
                    const d = (0,
                    Ke.Pj)()
                      , u = (0,
                    s.EW)(( () => d.state.login.isSvip))
                      , p = (0,
                    s.EW)(( () => d.state.login.vipStatusLoaded))
                      , m = (0,
                    s.KR)(1280)
                      , h = (0,
                    s.WQ)("showTopBanner")
                      , f = (0,
                    s.KR)(!1);
                    (0,
                    s.Gt)("showTextTranslateHistoryPanel", f);
                    const b = (0,
                    s.KR)([]);
                    (0,
                    s.Gt)("leftSlideTipForceList", b);
                    const v = (e, t) => {
                        console.log("updateLeftSlideTipForceList", e);
                        const o = JSON.parse(localStorage.getItem("fanyiweb_left_slide_tip_force"));
                        console.log("updateLeftSlideTipForceList timeInfo", o);
                        const {time: a, count: n} = o || {};
                        if (console.log("updateLeftSlideTipForceList 当天展示情况", new Date(Number(a)).toDateString() === (new Date).toDateString()),
                        new Date(Number(a)).toDateString() === (new Date).toDateString())
                            return;
                        if (console.log("updateLeftSlideTipForceList 当月展示情况", new Date(Number(a)).getMonth() === (new Date).getMonth(), n),
                        new Date(Number(a)).getMonth() === (new Date).getMonth() && n >= 3)
                            return;
                        b.value = e;
                        let i = 1;
                        console.log("localCount", n),
                        n ? (console.log("localCount 1", n),
                        n < 3 && new Date(Number(a)).getMonth() === (new Date).getMonth() ? (console.log("localCount 2", n),
                        i = n + 1) : (console.log("localCount 3", n),
                        i = 1)) : (console.log("localCount 4", n),
                        i = 1),
                        localStorage.setItem("fanyiweb_left_slide_tip_force", JSON.stringify({
                            time: (new Date).getTime(),
                            count: i
                        }));
                        const r = setTimeout(( () => {
                            b.value = [],
                            clearTimeout(r)
                        }
                        ), 5e3);
                        window._rlog.push(["_trackCustom", "event", [["show", "fanyiweb_sidebar_xueshucha_reminder"], ["from", t]]])
                    }
                    ;
                    (0,
                    s.Gt)("updateLeftSlideTipForceList", v);
                    const y = (0,
                    s.KR)(0);
                    (0,
                    s.Gt)("animationAllocation", y),
                    (0,
                    s.wB)(f, ( () => {
                        if (f.value && !l.value) {
                            const e = document.querySelector(".collapsed-btn .icon-collapsed");
                            e && e.click()
                        }
                        (0,
                        rt.i)({
                            duration: 600,
                            timing: rt.r,
                            draw(e) {
                                f.value ? y.value = 200 * e : y.value = 200 - 200 * e
                            }
                        })
                    }
                    )),
                    (0,
                    s.wB)(( () => a.path), ( () => {
                        (0,
                        s.dY)(( () => {
                            const e = document.querySelector(".web-frame-content");
                            "/AITranslate" === a.path ? (e.classList.add("web-frame-content-ai"),
                            m.value = 1080) : (e.classList.remove("web-frame-content-ai"),
                            m.value = 1280)
                        }
                        ))
                    }
                    ), {
                        immediate: !0
                    });
                    const A = Fe.A.getParameter("keyfrom")
                      , T = (0,
                    s.EW)(( () => !1))
                      , _ = (0,
                    s.KR)(!1)
                      , k = (0,
                    s.KR)({});
                    let S = null;
                    const w = (e, t) => {
                        console.log("openVipCenter", e, t, A),
                        k.value = (0,
                        Qe.A)((0,
                        Qe.A)({}, e), {}, {
                            keyfrom: A
                        }),
                        _.value = !0,
                        S = t
                    }
                      , E = () => {
                        _.value = !1
                    }
                      , I = () => {
                        g.A.$emit("buyVipSuccessFromVipCenter"),
                        S && S()
                    }
                    ;
                    (0,
                    s.Gt)("openVipCenter", w);
                    const C = (null === (o = window.__PRERENDER_INJECTED) || void 0 === o ? void 0 : o.isPrerender) || !1
                      , P = (0,
                    s.EW)(( () => "AITranslate" === a.name ? "ai-bg" : "index-bg"));
                    (0,
                    s.sV)(( () => {
                        document.dispatchEvent(new Event("render-event"))
                    }
                    ));
                    const L = e => {
                        l.value = e,
                        g.A.$emit("sidebarCollapseChange", e)
                    }
                      , x = () => {
                        g.A.$emit("deviceOverErrorFromFrame")
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        g.A.$on("stopTransition", ( () => {
                            r.value = !1,
                            setTimeout(( () => {
                                r.value = !0
                            }
                            ), 200)
                        }
                        ))
                    }
                    ));
                    const R = {
                        route: a,
                        saveTextTranslateContentToLS: n,
                        saveAITranslateHistoryList: i,
                        canTransition: r,
                        collapsed: l,
                        showCollapseTip: c,
                        store: d,
                        isSvip: u,
                        vipStatusLoaded: p,
                        minViewWidth: m,
                        showTopBanner: h,
                        showTextTranslateHistoryPanel: f,
                        leftSlideTipForceList: b,
                        updateLeftSlideTipForceList: v,
                        animationAllocation: y,
                        keyfrom: A,
                        testMode: T,
                        isShowVipCenter: _,
                        vipRouteQuery: k,
                        get buyVipSuccessCallback() {
                            return S
                        },
                        set buyVipSuccessCallback(e) {
                            S = e
                        },
                        openVipCenter: w,
                        closeVipCenter: E,
                        buyVipSuccess: I,
                        isPrerender: C,
                        contentBgClassName: P,
                        collapseChange: L,
                        deviceOverError: x,
                        inject: s.WQ,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        get useRoute() {
                            return Ge.lq
                        },
                        get useStore() {
                            return Ke.Pj
                        },
                        get util() {
                            return Fe.A
                        },
                        get eventBus() {
                            return g.A
                        },
                        Banner: Ye.A,
                        AdPopUp: nt,
                        get useTranslationWebsiteFrame() {
                            return it.A
                        },
                        get animate() {
                            return rt.i
                        },
                        get timingEaseOut() {
                            return rt.r
                        },
                        TextTranslateHistoryPanel: Et,
                        TabHeaderLeft: Nt,
                        TranslateTab: ao
                    };
                    return Object.defineProperty(R, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    R
                }
            };
            const io = (0,
            k.A)(no, [["render", Je], ["__scopeId", "data-v-b6b0630e"]]);
            var ro = io
              , lo = o(25507);
            const so = [{
                path: "/",
                name: "Home",
                component: ro,
                children: [{
                    path: "",
                    redirect: {
                        name: "AITranslate"
                    }
                }, {
                    path: "TextTranslate",
                    name: "TextTranslate",
                    component: () => Promise.all([o.e(853), o.e(99), o.e(85), o.e(348)]).then(o.bind(o, 89517))
                }, {
                    path: "documentUpload",
                    name: "DocumentUpload",
                    component: () => Promise.all([o.e(99), o.e(296), o.e(85), o.e(551)]).then(o.bind(o, 30156))
                }, {
                    path: "AITranslate",
                    name: "AITranslate",
                    component: () => Promise.all([o.e(853), o.e(99), o.e(829), o.e(873)]).then(o.bind(o, 92324))
                }]
            }, {
                path: "/paraphraser",
                name: "Paraphraser",
                component: () => Promise.all([o.e(853), o.e(108)]).then(o.bind(o, 84303))
            }, {
                path: "/fileFormat",
                name: "FileFormat",
                component: () => o.e(508).then(o.bind(o, 65704)),
                children: [{
                    path: "",
                    redirect: {
                        name: "Pdf2Word"
                    }
                }, {
                    path: "",
                    name: "FunctionList",
                    component: () => o.e(487).then(o.bind(o, 45424))
                }, {
                    path: "pdf2word",
                    name: "Pdf2Word",
                    component: () => Promise.all([o.e(95), o.e(296), o.e(829), o.e(151)]).then(o.bind(o, 10499))
                }, {
                    path: "pdf2pic",
                    name: "Pdf2Pic",
                    component: () => o.e(393).then(o.bind(o, 37717))
                }, {
                    path: "pic2pdf",
                    name: "Pic2Pdf",
                    component: () => o.e(761).then(o.bind(o, 30877))
                }, {
                    path: "pdfConcat",
                    name: "PdfConcat",
                    component: () => o.e(271).then(o.bind(o, 14174))
                }, {
                    path: "pdfSplit",
                    name: "PdfSplit",
                    component: () => o.e(17).then(o.bind(o, 92369))
                }]
            }, {
                path: "/person",
                name: "person",
                component: () => o.e(688).then(o.bind(o, 1292)),
                beforeEnter(e, t, o) {
                    console.log(lo.A.state.login.isLogin);
                    const {isLogin: a} = lo.A.state.login;
                    a ? o() : o({
                        name: "Home"
                    })
                },
                children: [{
                    path: "docHistory",
                    name: "docHistory",
                    component: () => Promise.all([o.e(95), o.e(768), o.e(637)]).then(o.bind(o, 18793))
                }, {
                    path: "termBank",
                    name: "termBank",
                    component: () => Promise.all([o.e(95), o.e(296), o.e(768), o.e(471)]).then(o.bind(o, 63093))
                }]
            }, {
                path: "/login/:redirectUrl?",
                name: "NoLogin",
                component: () => o.e(333).then(o.bind(o, 50126))
            }, {
                path: "/AITranslateSmallProcess",
                name: "/AITranslateSmallProcess",
                component: () => Promise.all([o.e(853), o.e(99), o.e(829), o.e(873)]).then(o.bind(o, 52033))
            }]
              , co = (0,
            Ge.aE)({
                history: (0,
                Ge.Bt)(),
                routes: so
            });
            co.beforeEach(( (e, t, o) => {
                document.body.scrollTop = 0,
                document.documentElement.scrollTop = 0,
                o()
            }
            ));
            var uo, po, mo = co;
            o(48559);
            o(86964).polyfill(),
            n().polyfill();
            null === (uo = window.__PRERENDER_INJECTED) || void 0 === uo || uo.isPrerender,
            window.location.host.indexOf("pre");
            const go = null !== (po = window.__PRERENDER_INJECTED) && void 0 !== po && po.isPrerender ? (0,
            s.Ef)(Xe) : (0,
            s.m1)(Xe);
            go.config.globalProperties.$cookies = l(),
            go.config.globalProperties.$toast = d.A,
            window.$CPopup = u.A,
            window.$AccountError = he,
            go.use(lo.A).use(lo.A).use(mo).use(l()).use(Se).use(c.A).use(we.A).use(Ee.A).use(Ce.A).use(Ie.A).use(i.Ay).directive("clickoutside", Pe.K).mount("#app"),
            i.Ay.setDefaults({
                inline: !1,
                button: !0,
                navbar: !1,
                title: !1,
                toolbar: !1,
                tooltip: !1,
                movable: !0,
                zoomable: !0,
                rotatable: !1,
                scalable: !1,
                transition: !0,
                fullscreen: !1,
                keyboard: !0,
                url: "data-src"
            })
        },
        38462: function(e, t, o) {
            let a = "https://shared.ydstatic.com/dict/translation-website/0.8.4/";
            window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.isPrerender && (a = ""),
            o.p = a
        },
        18908: function(e, t, o) {
            "use strict";
            var a = o(41034)
              , n = o(25507)
              , i = o(97815)
              , r = o(27950)
              , l = o(14914)
              , s = o(95457);
            const c = "https://luna-ai.youdao.com"
              , {product: d, keyId: u, keyfrom: p, keyIdPre: m} = r.A
              , g = localStorage.getItem("yduuid")
              , h = async (e, t, o) => {
                const a = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                console.log("fetchSSEMethod params", e),
                (0,
                l.a)(`${c}/translate_llm/trans`, e, a, t, o)
            }
              , f = async (e, t, o) => {
                const a = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                (0,
                l.a)(`${c}/translate_llm/afterProcess`, e, a, t, o)
            }
              , b = e => (0,
            s.bE)(`${c}/translate_llm/v2/isLike`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , v = e => (0,
            s.bE)(`${c}/translate_llm/v3/isLike`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , y = e => (0,
            s.bE)(`${c}/translate_llm/v3/history/round/del`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , A = () => (0,
            s.Jt)(`${c}/translate_llm/functionList`, i.A.genParamV3({}, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , T = (e, t) => {
                const o = "https://lunafeedback.youdao.com/feedback";
                return (0,
                s.T3)(`${o}/add?${e}`, t)
            }
              , _ = e => (0,
            s.bE)(`${c}/translate_llm/modelfeedback`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , k = e => (0,
            s.bE)(`${c}/translate_llm/modify`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , S = e => (0,
            s.bE)(`${c}/translate_llm/del`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , w = e => (0,
            s.Jt)(`${c}/translate_llm/IntentionRec`, i.A.genParamV3((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, g))
              , E = e => (0,
            s.Jt)(`${c}/translate_llm/example`, i.A.genParamV3((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, g))
              , I = () => (0,
            s.Jt)(`${c}/translate_llm/guideInfo`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , C = async (e, t, o) => {
                const a = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.token = localStorage.getItem("ydtoken"),
                e.yduuid = localStorage.getItem("yduuid"),
                console.log("getChatV2"),
                (0,
                l.a)(`${c}/translate_llm/v2/chat`, e, a, t, o)
            }
              , P = async (e, t, o) => {
                const a = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: "webfanyi",
                    client: "webaitrans",
                    keyfrom: "webfanyi.webaitrans"
                };
                return e.token = localStorage.getItem("ydtoken"),
                e.yduuid = localStorage.getItem("yduuid"),
                e.appVersion = "12.0.0",
                e.product = "webfanyi",
                e.client = e.source = "webaitrans",
                e.keyfrom = "webfanyi.webaitrans",
                console.log("getChat"),
                (0,
                l.a)(`${c}/translate_llm/v3/chat`, e, a, t, o)
            }
              , L = () => (0,
            s.Jt)(`${c}/translate_llm/v2/history/list`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , x = () => (0,
            s.Jt)(`${c}/translate_llm/v3/history/list`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , R = e => (0,
            s.bE)(`${c}/translate_llm/v3/history/del`, i.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , D = e => (0,
            s.bE)(`${c}/translate_llm/v2/history/del`, i.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , H = () => (0,
            s.Jt)(`${c}/translate_llm/v2/init`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , O = () => (0,
            s.Jt)(`${c}/translate_llm/v3/init`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , V = e => (0,
            s.Jt)(`${c}/translate_llm/v2/suggest`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                functionEnglishName: e
            }, n.A.state.text.secretAIKey, u, d, p, g))
              , U = () => (0,
            s.Jt)(`${c}/translate_llm/userinfo`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , N = e => (0,
            s.Jt)(`${c}/translate_llm/v2/history/details`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , K = e => (0,
            s.Jt)(`${c}/translate_llm/v3/history/details`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid"), "12.0.0"))
              , B = e => (0,
            s.bE)(`${c}/translate_llm/v3/mod`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, g))
              , M = async (e, t, o, r, l) => {
                const m = await (0,
                s.Vh)(`${c}/translate_llm/v3/upload`, i.A.genParamV3FormDataWithNormalParam(e, (0,
                a.A)({
                    token: localStorage.getItem("ydtoken")
                }, t), n.A.state.text.secretAIKey, u, d, p, g), l);
                o({
                    id: r,
                    res: m
                })
            }
              , F = e => (0,
            s.Jt)(`${c}/translate_llm/v3/refer/info`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                fileKey: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , $ = e => new Promise(( (t, o) => {
                (0,
                s.Jt)(`${c}/translate_llm/v3/uuid/generate`, i.A.genParamV3((0,
                a.A)({
                    token: localStorage.getItem("ydtoken")
                }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid"))).then((e => {
                    t(e.data.id)
                }
                ))
            }
            ))
              , j = e => (0,
            s.bE)(`${c}/translate_llm/v3/translateDirection`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, g));
            t.A = {
                fetchSSEMethod: h,
                getUserRemainTime: U,
                translatellmlike: v,
                getMenu: A,
                fetchAfterProcessSSE: f,
                feedback: T,
                compareModel: _,
                modifyAfterProcess: k,
                delAfterProcess: S,
                getIntentionRec: w,
                getLargeModelGuideExample: E,
                getLargeModelGuideInfo: I,
                getChat: P,
                getDialogList: x,
                delDialog: R,
                getInit: O,
                getProcess: V,
                recoverDialogs: K,
                modifyDialog: B,
                delHistoryRound: y,
                uploadFile: M,
                getGroupTaskId: $,
                getReferFileInfo: F,
                checkoutLanguage: j,
                getDialogListV2: L,
                getInitV2: H,
                getChatV2: C,
                recoverDialogsV2: N,
                delDialogV2: D,
                translatellmlikeV2: b
            }
        },
        76393: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return m
                }
            });
            var a = o(41034)
              , n = o(97815)
              , i = o(95457)
              , r = {
                product: "webfanyi",
                signSecretKey: "PDdE4DR40ACSVW0KBIc3P1jgD31tbihD",
                keyId: "dict-vip",
                keyfrom: "fanyi.web"
            };
            const l = "https://dict.youdao.com/vip"
              , {product: s, signSecretKey: c, keyId: d} = r
              , u = () => {
                const e = {
                    bannerType: "fanyiBottom"
                };
                return (0,
                i.Jt)(`${l}/privilege/show/V2`, (0,
                a.A)({}, n.A.genParamV3(e, c, d, s)))
            }
              , p = () => {
                const e = {
                    bannerType: "fanyiPagePopup"
                };
                return (0,
                i.Jt)(`${l}/privilege/show/V2`, (0,
                a.A)({}, n.A.genParamV3(e, c, d, s)))
            }
            ;
            var m = {
                getBannerInfos: u,
                getPopUpInfos: p
            }
        },
        95457: function(e, t, o) {
            "use strict";
            o.d(t, {
                H: function() {
                    return p
                },
                Jt: function() {
                    return s
                },
                T3: function() {
                    return u
                },
                Vh: function() {
                    return d
                },
                bE: function() {
                    return c
                }
            });
            var a = o(41034)
              , n = o(91250)
              , i = (o(6301),
            o(3745))
              , r = o(399)
              , l = o(37282);
            function s(e, t, o={}) {
                return new Promise(( (i, r) => {
                    n.A.get(e, (0,
                    a.A)({
                        params: t
                    }, o)).then((e => {
                        i(e.data)
                    }
                    )).catch((e => {
                        r(e)
                    }
                    ))
                }
                ))
            }
            function c(e, t, o) {
                return new Promise((a => {
                    o ? n.A.post(e, t, {
                        timeout: o
                    }).then((e => {
                        a(e.data)
                    }
                    )).catch((e => {
                        a(e)
                    }
                    )) : n.A.post(e, t).then((e => {
                        a(e.data)
                    }
                    )).catch((e => {
                        a(e)
                    }
                    ))
                }
                ))
            }
            function d(e, t, o) {
                return new Promise((a => {
                    n.A.post(e, t, {
                        signal: o
                    }).then((e => {
                        a(e.data)
                    }
                    )).catch((e => {
                        a(e)
                    }
                    ))
                }
                ))
            }
            function u(e, t, o) {
                const a = t
                  , i = new FormData;
                return Object.keys(a).forEach((e => {
                    i.append(e, a[e])
                }
                )),
                new Promise(( (t, a) => {
                    const r = {};
                    o && (r.timeout = o),
                    n.A.post(e, i, r).then((e => {
                        t(e.data)
                    }
                    )).catch((e => {
                        a(e)
                    }
                    ))
                }
                ))
            }
            function p(e, t, o) {
                return new Promise(( (a, i) => {
                    n.A.post(e, t, o).then((e => {
                        a(e.data)
                    }
                    )).catch((e => {
                        i(e)
                    }
                    ))
                }
                ))
            }
            n.A.defaults.withCredentials = !0,
            n.A.defaults.timeout = 6e4,
            n.A.interceptors.response.use((e => {
                console.log("axios.interceptors.response:---", e);
                const {headers: t} = e
                  , o = Object.keys(e.headers).find((e => "exceedmaxdevicecnt" === e.toLowerCase()));
                return t && "true" === t[o] ? (0,
                r.A)({
                    confirmButtonText: "重新登录",
                    text: "您同时登录的设备数过多，已被挤下线，登录新账号，可继续使用~",
                    confirm: () => {
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${e}&t=${(new Date).getTime()}`
                    }
                    ,
                    cancel: () => {
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=${e}&t=${(new Date).getTime()}`
                    }
                }) : -1 !== e.request.responseURL.indexOf("/user/status_s") && [2110, 2111].includes(e.data.errorCode) && (console.error("账号异常"),
                l.A.$emit("deviceOverErrorFromFrame")),
                e
            }
            ), (e => (console.error("ryn检查网络error", e),
            e.code && "ERR_CANCELED" === e.code ? Promise.reject(e) : (console.error("ryn检查网络error2", e.msg),
            e.msg ? ((0,
            i.A)(e.msg),
            Promise.reject(e)) : ((0,
            i.A)("网络异常，请检查网络"),
            Promise.reject(e))))))
        },
        86477: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return I
                }
            });
            var a = o(41034)
              , n = (o(33110),
            o(95457))
              , i = o(97815)
              , r = (o(25507),
            {
                product: "webfanyi",
                signSecretKey: "yehAzpwGBe7YFHStfrKwVJsKOLSi6qXq",
                keyId: "dict_web_dictvip",
                keyfrom: "fanyi.web"
            });
            const {product: l, keyId: s, keyfrom: c, signSecretKey: d} = r
              , u = "https://dict.youdao.com"
              , p = "https://dict.youdao.com/vip"
              , m = "https://dict.youdao.com/login/acc"
              , g = "https://foundation.youdao.com"
              , h = ["option_avatar", "nickname"]
              , f = "https://backendmarket.youdao.com"
              , b = "https://education-certification.youdao.com/education/pub/get"
              , v = e => (0,
            n.bE)(`${p}/user/status_s`, i.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), d, s, l, c, localStorage.getItem("yduuid")))
              , y = () => (0,
            n.Jt)(`${u}/login/acc/query/accountinfo`)
              , A = e => (0,
            n.Jt)(`${u}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(h))}`, e)
              , T = e => (0,
            n.bE)(`${f}/collect/docreport`, e)
              , _ = e => (0,
            n.Jt)(`${m}/device/check`, e)
              , k = ({keyid: e, mysticTime: t, product1: o, pointParam: a, sign: i}) => (0,
            n.Jt)(`${b}?keyid=${e}&mysticTime=${t}&product=${o}&pointParam=${a}&sign=${i}`, {})
              , S = e => (0,
            n.Jt)(`${g}/phone/fetchcode`, e)
              , w = e => (0,
            n.T3)(`${g}/phone/verify`, e)
              , E = () => (0,
            n.bE)(`${p}/user/grey/industry/remove`, i.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken")
            }, d, s, l, c, localStorage.getItem("yduuid")));
            var I = {
                getAccountInfos: y,
                getBatchUrl: A,
                getVipStatus: v,
                baiduCallback: T,
                checkLogin: _,
                getStudentStatus: k,
                getFoundationCode: S,
                verifyFoundationCode: w,
                removeIndustry: E
            }
        },
        34917: function(e, t, o) {
            "use strict";
            var a = o(41034)
              , n = (o(55792),
            o(91565))
              , i = o(91250)
              , r = o(95457)
              , l = o(97815)
              , s = o(55373)
              , c = o.n(s)
              , d = o(14914)
              , u = o(48287)["Buffer"];
            const {CancelToken: p} = i.A;
            let m;
            const g = "fanyideskweb"
              , h = "webfanyi"
              , f = "client,mysticTime,product"
              , b = "12.0.0"
              , v = "web"
              , y = "fanyi.web"
              , A = 1
              , T = 1
              , _ = 1
              , k = "wifi"
              , S = 0;
            function w(e) {
                return n.createHash("md5").update(e).digest()
            }
            function E(e) {
                return n.createHash("md5").update(e.toString()).digest("hex")
            }
            function I(e, t) {
                return E(`client=${g}&mysticTime=${e}&product=${h}&key=${t}`)
            }
            function C(e, t) {
                const o = (new Date).getTime();
                return {
                    sign: I(o, e),
                    client: g,
                    product: h,
                    appVersion: b,
                    vendor: v,
                    pointParam: f,
                    mysticTime: o,
                    keyfrom: y,
                    mid: A,
                    screen: T,
                    model: _,
                    network: k,
                    abtest: S,
                    yduuid: t || "abcdefg"
                }
            }
            const P = "https://luna-ai.youdao.com"
              , L = (e, t) => (0,
            r.Jt)("https://dict.youdao.com/webtranslate/key", (0,
            a.A)((0,
            a.A)({}, e), C(t)))
              , x = (e, t, o) => (0,
            r.Jt)(`${P}/translate_llm/secret`, (0,
            a.A)((0,
            a.A)({}, e), C(t, o)))
              , R = (e, t) => (0,
            r.H)("https://dict.youdao.com/webtranslate", (0,
            a.A)((0,
            a.A)({}, e), C(t)), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
              , D = () => {
                m && m()
            }
              , H = e => (0,
            r.T3)("https://dict.youdao.com/keyword/key", e)
              , O = (e, t) => (0,
            r.Jt)(" https://dict-subsidiary.youdao.com/aigc/entrance", (0,
            a.A)((0,
            a.A)({}, e), C(t)))
              , V = (e, t) => (0,
            r.Jt)(" https://dict-subsidiary.youdao.com/aigc/style", (0,
            a.A)((0,
            a.A)({}, e), C(t)))
              , U = (e, t) => (0,
            r.Jt)(" https://dict-subsidiary.youdao.com/aigc/tran", (0,
            a.A)((0,
            a.A)({}, e), C(t)), {
                cancelToken: new p((e => {
                    m = e
                }
                ))
            })
              , N = e => (0,
            r.T3)("https://fanyi.youdao.com/feedback", e)
              , K = (e, t, o) => {
                if (!e)
                    return null;
                const a = u.alloc(16, w(t))
                  , i = u.alloc(16, w(o))
                  , r = n.createDecipheriv("aes-128-cbc", a, i);
                let l = r.update(e, "base64", "utf-8");
                return l += r.final("utf-8"),
                l
            }
              , B = "https://lunafeedback.youdao.com/feedback"
              , M = e => {
                const t = {
                    comments: e
                };
                return (0,
                r.T3)(`${B}/add?product=deskdict_contentCorrection&client=fanyiweb&appVersion=12.0.0`, t)
            }
              , F = "https://dict-trans.youdao.com"
              , $ = () => (0,
            r.Jt)(`${F}/translate/config`, {
                product: "webfanyi",
                client: "webmain",
                yduuid: "1"
            })
              , j = async (e, t, o) => {
                const a = {
                    keyid: e,
                    targetKeyid: t
                };
                localStorage.getItem("text-ydtoken") && (a.token = localStorage.getItem("text-ydtoken"));
                const n = l.A.genParamV3(a, o, a.keyid, "webfanyi", "webfanyi.webmain", localStorage.getItem("yduuid"), void 0, "webmain");
                let i = `${F}/translate/key`;
                return Object.keys(n).forEach(( (e, t) => {
                    i += 0 === t ? `?${e}=${n[e]}` : `&${e}=${n[e]}`
                }
                )),
                (0,
                r.bE)(i)
            }
              , W = async (e, t, o) => {
                const n = await j("translate-webmain-key-getter", "translate-webfanyi-webmain", "kSy5gtKA4yRUxAVPJPrdYKZ0jBKyd3t1");
                if (0 === n.code) {
                    const {token: i, secretKey: r} = n.data;
                    localStorage.setItem("text-ydtoken", i);
                    const l = {
                        signSecretKey: r,
                        keyId: "translate-webfanyi-webmain",
                        product: "webfanyi",
                        keyfrom: "webfanyi.webmain",
                        client: "webmain",
                        token: i,
                        source: "webmain"
                    };
                    return e.i = encodeURIComponent(e.i),
                    console.log("translateSSE params", l),
                    (0,
                    d.a)(`${F}/webtranslate/sse`, (0,
                    a.A)((0,
                    a.A)({}, e), l), l, t, o)
                }
            }
              , X = async e => {
                const t = await j("translate-webmain-key-getter", "translate-webfanyi-webmain", "kSy5gtKA4yRUxAVPJPrdYKZ0jBKyd3t1");
                if (0 === t.code) {
                    const {token: o, secretKey: n} = t.data
                      , i = {
                        signSecretKey: n,
                        keyId: "translate-webfanyi-webmain",
                        product: "webfanyi",
                        keyfrom: "webfanyi.webmain",
                        client: "webmain",
                        token: o,
                        source: "webmain"
                    }
                      , s = l.A.genParamV3(i, n, i.keyId, "webfanyi", "webfanyi.webmain", localStorage.getItem("yduuid"), void 0, "webmain");
                    return (0,
                    r.T3)(`${F}/translate/enhance`, (0,
                    a.A)((0,
                    a.A)({}, e), s))
                }
            }
              , G = (e, t) => {
                const o = "webfanyi.webmain"
                  , a = "webmain"
                  , n = `${e.q}${o}`.length % 10
                  , i = `${Date.now()}${n}`
                  , r = E(`${e.q}${o}`)
                  , l = `${a}${e.q}${i}${t}${r}`
                  , s = E(l)
                  , c = {
                    sign: s,
                    t: i,
                    clientT: a,
                    keyfromM: o
                };
                return c
            }
              , J = e => {
                console.log("getDictTranslateResult params", e);
                const {sign: t, t: o, clientT: n, keyfromM: i} = G(e, "t2he2k4m2g6QKRigK0KAmSpXKgAezywG")
                  , l = (0,
                a.A)((0,
                a.A)({}, e), {}, {
                    t: o,
                    client: n,
                    sign: t,
                    keyfrom: i
                });
                return (0,
                r.bE)("https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4", c().stringify(l))
            }
              , Q = e => (0,
            r.bE)(`${P}/translate_llm/v3/translateDirection`, l.A.genParamV3FormData((0,
            a.A)({
                token: localStorage.getItem("ydtoken")
            }, e), "I5WacgKEZaloWBiDnE1fThnzxYWN30PH", "ai-translate-direction", h, y, localStorage.getItem("yduuid")));
            t.A = {
                getTextTranslateSecretKey: L,
                getTextTranslateResult: R,
                getTextTranslateKeyword: H,
                decodeData: K,
                feedback: M,
                getAigcEntrance: O,
                getAigcStyle: V,
                getAigcTran: U,
                fanyiFeedback: N,
                getAITranslateSecretKey: x,
                cancelLastGpt: D,
                getLlmLanConfig: $,
                translateSSE: W,
                translateEnhance: X,
                getDictTranslateResult: J,
                checkoutLanguageTextTrans: Q
            }
        },
        25507: function(e, t, o) {
            "use strict";
            o(44114),
            o(72712),
            o(27495),
            o(25440),
            o(62953);
            var a = o(66278);
            const n = []
              , i = o(84870)
              , r = i.keys().reduce(( (e, t) => {
                const o = t.replace(/^\.\/(.*)\.\w+$/, "$1");
                n.push(o);
                const a = i(t);
                return e[o] = a.default,
                e
            }
            ), {});
            t.A = (0,
            a.y$)({
                modules: r
            })
        },
        57185: function(e, t, o) {
            "use strict";
            o.r(t);
            o(44114),
            o(33110);
            var a = o(91250)
              , n = o(97504)
              , i = o(62512);
            const r = "DOMAIN"
              , l = "DOMAIN_MAP"
              , s = "TEXTDOMAIN_MAP"
              , c = {
                domainMap: n.A,
                allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
                isAllowAigc: !1,
                textTransDomainMap: n.A,
                aigcDomainMap: []
            }
              , d = {
                [l](e, t) {
                    e.domainMap = t
                },
                [s](e, t) {
                    e.textTransDomainMap = JSON.parse(JSON.stringify(t))
                },
                SET_ISALLOWAIGC(e, t) {
                    e.isAllowAigc = t
                },
                SET_AIGCDOMAINMAP(e, t) {
                    e.aigcDomainMap = t
                }
            }
              , u = {
                initDictDomainFromLS({commit: e, state: t}, o) {
                    var a = i.A.get(`${o}`);
                    e(r, null !== a ? a : "0")
                },
                async fetchDomainData({commit: e, state: t}, o) {
                    var n = await a.A.get("https://doctrans-service.youdao.com/common/enums/list?key=domain&_=" + +new Date);
                    n.data.data && (e(l, n.data.data),
                    e(s, n.data.data))
                },
                updateDomainMap({commit: e, state: t}) {
                    if (0 !== t.aigcDomainMap.length) {
                        const e = t.textTransDomainMap.length;
                        t.aigcDomainMap.forEach(( (o, a) => {
                            t.textTransDomainMap.push({
                                str: String(e + a),
                                msg: o,
                                from: "aigc"
                            })
                        }
                        ))
                    }
                }
            }
              , p = {
                getDomainLabelByValue: e => t => {
                    let o = "";
                    for (var a = 0; a < e.domainMap.length; a += 1)
                        if (t === e.domainMap[a].str) {
                            o = e.domainMap[a].msg;
                            break
                        }
                    return o
                }
                ,
                getTextDomainLabelByValue: e => t => {
                    let o = "";
                    for (var a = 0; a < e.textTransDomainMap.length; a += 1)
                        if (t === e.textTransDomainMap[a].str) {
                            o = e.textTransDomainMap[a].msg;
                            break
                        }
                    return o
                }
            };
            t["default"] = {
                state: c,
                mutations: d,
                actions: u,
                getters: p
            }
        },
        36032: function(e, t, o) {
            "use strict";
            o.r(t),
            o.d(t, {
                default: function() {
                    return u
                }
            });
            var a = o(95457)
              , n = o(37282);
            const i = "UPDATE_LANGUAGE_MAP";
            var r = {
                UPDATE_LANGUAGE_MAP: i
            };
            const l = {
                languageMap: {},
                rtlLanguageList: ["ar"]
            }
              , s = {
                [r.UPDATE_LANGUAGE_MAP](e, t) {
                    e.languageMap = t
                }
            }
              , c = {
                async fetchLanguageData({commit: e, state: t}, o) {
                    const i = await (0,
                    a.Jt)("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langTypeWeb");
                    i.data.value && (e(r.UPDATE_LANGUAGE_MAP, i.data.value),
                    n.A.$emit("languageMapUpdated"))
                }
            }
              , d = {
                termSpecifyData(e) {
                    return e.languageMap.term ? e.languageMap.term.specify : []
                },
                isTermLanguageSupport(e, t, o) {
                    const a = `${o.transInfo.lanFrom}2${o.transInfo.lanTo}`;
                    return !!t.termSpecifyData.find((e => e.code === a))
                }
            };
            var u = {
                state: l,
                mutations: s,
                actions: c,
                getters: d
            }
        },
        37180: function(e, t, o) {
            "use strict";
            o.r(t);
            const a = {
                isLogin: !0,
                isSvip: !1,
                isVip: !1,
                vipStatusLoaded: !1,
                optionAvatar: "",
                nickname: "",
                isStudent: !1
            }
              , n = {
                isLogin: e => e.isLogin,
                optionAvatar: e => e.optionAvatar,
                nickname: e => e.nickname,
                isSvip: e => e.isSvip,
                isVip: e => e.isVip,
                vipStatusLoaded: e => e.vipStatusLoaded,
                isStudent: e => e.isStudent
            }
              , i = {
                setOptionAvatar: ({commit: e}, t) => {
                    e("SET_OPTIONAVATAR", t)
                }
                ,
                setNickName: ({commit: e}, t) => {
                    e("SET_NICKNAME", t)
                }
                ,
                setLogin: ({commit: e}, t) => {
                    e("SET_LOGIN", t)
                }
                ,
                setSvip: ({commit: e}, t) => {
                    e("SET_SVIP", t)
                }
                ,
                setVipStatusLoaded: ({commit: e}) => {
                    e("SET_VIP_STATUS_LOADED", !0)
                }
                ,
                setVip: ({commit: e}, t) => {
                    e("SET_VIP", t)
                }
                ,
                setIsStudent: ({commit: e}, t) => {
                    e("SET_IS_STUDENT", t)
                }
            }
              , r = {
                SET_OPTIONAVATAR(e, t) {
                    e.optionAvatar = t
                },
                SET_NICKNAME(e, t) {
                    e.nickname = t
                },
                SET_LOGIN(e, t) {
                    e.isLogin = t
                },
                SET_SVIP(e, t) {
                    e.isSvip = t
                },
                SET_VIP(e, t) {
                    e.isVip = t
                },
                SET_VIP_STATUS_LOADED(e, t) {
                    e.vipStatusLoaded = t
                },
                SET_IS_STUDENT(e, t) {
                    e.isStudent = t
                }
            };
            t["default"] = {
                namespaced: !0,
                state: a,
                getters: n,
                mutations: r,
                actions: i
            }
        },
        87087: function(e, t, o) {
            "use strict";
            o.r(t),
            o.d(t, {
                default: function() {
                    return d
                }
            });
            o(44114);
            var a = o(34917)
              , n = o(62512);
            function i(e) {
                window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
            }
            const r = {
                secretKey: "",
                secretAIKey: "",
                dictResult: {},
                decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
                decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
                allowStroke: !1,
                showPjm: !1,
                showRomanPronunciation: !1,
                showWordsNumber: !0,
                playbackRate: "1",
                voiceType: "1",
                originResultId: "",
                originResultText: "",
                sourceText: "",
                selectedSourceText: "",
                historyList: [],
                isAfterProcessLoadng: !1,
                keyfrom: "",
                producting: !1,
                guideFreeTimes: 0,
                isInsertFromPaste: !1,
                firstTwoOriginText: "",
                isENandZH: !1,
                homeOriginText: "",
                dialogs: [],
                dialogInfo: {},
                suggPrompts: "",
                guideFromOther: {},
                remainTime: 0
            }
              , l = {
                secretKey: e => e.secretKey,
                secretAIKey: e => e.secretAIKey,
                dictResult: e => e.dictResult,
                suggPrompts: e => e.suggPrompts,
                originResultId: e => e.originResultId,
                originResultText: e => e.originResultText,
                sourceText: e => e.sourceText,
                guideFreeTimes: e => e.guideFreeTimes,
                historyList: e => e.historyList,
                isAfterProcessLoadng: e => e.isAfterProcessLoadng,
                selectedSourceText: e => e.selectedSourceText,
                producting: e => e.producting,
                isInsertFromPaste: e => e.isInsertFromPaste,
                firstTwoOriginText: e => e.firstTwoOriginText,
                homeOriginText: e => e.homeOriginText,
                isENandZH: e => e.isENandZH
            }
              , s = {
                fetchAITranslateSecretKey: async ({commit: e}, t) => {
                    const o = "ai-translate-llm-pre"
                      , n = "EZAmCfVOH2CrBGMtPrtIPUzyv3bheLdk"
                      , i = localStorage.getItem("yduuid")
                      , r = localStorage.getItem("ydtoken") || void 0;
                    return new Promise((t => {
                        a.A.getAITranslateSecretKey({
                            keyid: o,
                            token: r
                        }, n, i).then((o => {
                            0 === o.code && (e("UPDATE_SECRET_AI_KEY", o.data.secretKey),
                            o.data.token && localStorage.setItem("ydtoken", o.data.token),
                            t(o.data.secretKey))
                        }
                        )).catch((e => {}
                        ))
                    }
                    ))
                }
                ,
                fetchTextTranslateSecretKey: async ({commit: e}, t) => {
                    const o = "webfanyi-key-getter-2025"
                      , n = "yU5nT5dK3eZ1pI4j";
                    return new Promise((t => {
                        a.A.getTextTranslateSecretKey({
                            keyid: o
                        }, n).then((o => {
                            0 === o.code && o.data.secretKey && (e("UPDATE_SECRET_KEY", o.data.secretKey),
                            e("UPDATE_DECODE_KEY", o.data.aesKey),
                            e("UPDATE_DECODE_IV", o.data.aesIv),
                            t(o.data.secretKey))
                        }
                        )).catch((e => {}
                        ))
                    }
                    ))
                }
                ,
                setDictResult: ({commit: e}, t) => {
                    e("SET_DICTRESULT", t)
                }
                ,
                initTextTranslateSettingStore: ({commit: e}, t) => {
                    const o = n.A.get("allowStroke")
                      , a = n.A.get("showPjm")
                      , i = n.A.get("showRomanPronunciation")
                      , r = n.A.get("showWordsNumber")
                      , l = n.A.get("playbackRate")
                      , s = n.A.get("voiceType");
                    e("SET_ALLOW_STROKE", null !== o && o),
                    e("SET_SHOW_PJM", null !== a && a),
                    e("SET_SHOW_ROMAN_PRONUNCICATION", null !== i && i),
                    e("SET_SHOW_WORDS_NUMBER", null === r || r),
                    e("SET_PLAYBACKRATE", null === l ? "1" : l),
                    e("SET_VOICETYPE", null === s ? "1" : s)
                }
                ,
                setOriginResultId: ({commit: e}, t) => {
                    e("UPDATE_ORIGIN_ID", t)
                }
                ,
                setSource: ({commit: e}, t) => {
                    e("UPDATE_SOURCE", t)
                }
                ,
                setOriginResultText: ({commit: e}, t) => {
                    e("UPDATE_ORIGIN_TEXT", t)
                }
                ,
                addHistoryItem: ({commit: e}, t) => {
                    e("ADD_HISTORY_ITEM", t)
                }
                ,
                delHistoryItem: ({commit: e}, t) => {
                    e("DEL_HISTORY_ITEM", t)
                }
                ,
                removeHistoryList: ({commit: e}) => {
                    e("REMOVE_HISTORY_LIST")
                }
                ,
                updateHistoryList: ({commit: e}, t) => {
                    e("UPDATA_HISTORY_LIST", t)
                }
                ,
                updateDialogs: ({commit: e}, t) => {
                    e("UPDATA_DIALOGS", t)
                }
            }
              , c = {
                ISWNANDZH(e, t) {
                    e.isENandZH = t
                },
                HOMEORIGINTEXT(e, t) {
                    e.homeOriginText = t
                },
                FIRSTTWOORIGINTEXT(e, t) {
                    e.firstTwoOriginText = t
                },
                ISPASTE_ORIGIN_TEXT(e, t) {
                    e.isInsertFromPaste = t
                },
                UPDATE_SECRET_KEY(e, t) {
                    e.secretKey = t
                },
                UPDATE_DECODE_KEY(e, t) {
                    e.decodeKey = t
                },
                UPDATE_DECODE_IV(e, t) {
                    e.decodeIv = t
                },
                UPDATE_SECRET_AI_KEY(e, t) {
                    e.secretAIKey = t
                },
                SET_DICTRESULT(e, t) {
                    e.dictResult = t
                },
                SET_ALLOW_STROKE(e, t) {
                    e.allowStroke = t,
                    n.A.set("allowStroke", t),
                    i(t)
                },
                SET_SHOW_PJM(e, t) {
                    e.showPjm = t,
                    n.A.set("showPjm", t)
                },
                SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
                    e.showRomanPronunciation = t,
                    n.A.set("showRomanPronunciation", t)
                },
                SET_SHOW_WORDS_NUMBER(e, t) {
                    e.showWordsNumber = t,
                    n.A.set("showWordsNumber", t)
                },
                SET_PLAYBACKRATE(e, t) {
                    e.playbackRate = t,
                    n.A.set("playbackRate", t)
                },
                SET_VOICETYPE(e, t) {
                    e.voiceType = t,
                    n.A.set("voiceType", t)
                },
                UPDATE_SUGG_PROMPTS(e, t) {
                    e.suggPrompts = t,
                    n.A.set("suggPrompts", t)
                },
                UPDATE_ORIGIN_ID(e, t) {
                    e.originResultId = t
                },
                UPDATE_SOURCE(e, t) {
                    e.sourceText = t
                },
                UPDATE_ORIGIN_TEXT(e, t) {
                    e.originResultText = t
                },
                UPDATE_GUIDEFREETIMES(e, t) {
                    e.guideFreeTimes = t
                },
                ADD_HISTORY_ITEM(e, t) {
                    e.historyList.push(t)
                },
                ADD_HISTORY(e, t) {
                    e.historyList = t
                },
                DEL_HISTORY_ITEM(e, t) {
                    const o = e.historyList.findIndex((e => e.id == t));
                    -1 !== o && e.historyList.splice(o, 1)
                },
                REMOVE_HISTORY_LIST(e) {
                    e.historyList = []
                },
                UPDATA_HISTORY_LIST(e, t) {
                    const o = e.historyList.findIndex((e => e.id === t.id));
                    -1 !== o && e.historyList.splice(o, 1, t)
                },
                UPDATE_ISAFTERPROCESS_LOADING(e, t) {
                    e.isAfterProcessLoadng = t
                },
                UPDATA_SELECTED_SOURCE_TEXT(e, t) {
                    e.selectedSourceText = t
                },
                UPDATE_KEYFROM(e, t) {
                    e.keyfrom = t
                },
                UPDATE_PRODUCTING(e, t) {
                    e.producting = t
                },
                UPDATA_DIALOGS(e, t) {
                    const o = e.dialogs.findIndex((e => e.roundId === t.roundId));
                    -1 !== o && e.dialogs.splice(o, 1, t)
                },
                ADD_DIALOGS(e, t) {
                    e.dialogs.push(t)
                },
                RESET_DIALOGS(e) {
                    e.dialogs = []
                },
                RECOVER_DIALOGS(e, t) {
                    e.dialogs = t
                },
                UPDATA_DIALOGINFO(e, t) {
                    0 !== Object.keys(t).length ? (t.id && (e.dialogInfo.id = t.id),
                    t.functionEnglishName && (e.dialogInfo.functionEnglishName = t.functionEnglishName)) : e.dialogInfo = t
                },
                UPDATA_GUIDEFROMOTHER(e, t) {
                    e.guideFromOther = t
                },
                SET_REMAIN_TIME(e, t) {
                    e.remainTime = t
                }
            };
            var d = {
                state: r,
                getters: l,
                mutations: c,
                actions: s
            }
        },
        42348: function(e, t, o) {
            "use strict";
            o.d(t, {
                i: function() {
                    return a
                },
                r: function() {
                    return i
                }
            });
            const a = ({draw: e, timing: t, duration: o}) => {
                let a = performance.now();
                requestAnimationFrame((function n(i) {
                    let r = (i - a) / o;
                    r > 1 && (r = 1);
                    let l = t(r);
                    e(l),
                    r < 1 && requestAnimationFrame(n)
                }
                ))
            }
              , n = (e, t=2) => Math.pow(e, t)
              , i = e => 1 - n(1 - e, 6)
        },
        37282: function(e, t, o) {
            "use strict";
            var a = o(27380);
            const n = {}
              , i = (0,
            a.A)();
            n.$on = i.on,
            n.$off = i.off,
            n.$emit = i.emit,
            t.A = n
        },
        45358: function(e, t, o) {
            "use strict";
            o.d(t, {
                n: function() {
                    return l
                }
            });
            o(84864),
            o(57465),
            o(27495),
            o(25440);
            var a = o(86477);
            const n = () => {
                a.A.baiduCallback({
                    loginUrl: window.location.href,
                    type: 49
                })
            }
              , i = (e, t) => {
                const o = new Date
                  , a = new Date(e)
                  , n = new Date(t);
                return o >= a && o <= n
            }
              , r = (e, t, o) => {
                let a;
                return function() {
                    let n = this
                      , i = arguments;
                    if (a && clearTimeout(a),
                    o) {
                        let o = !a;
                        a = setTimeout((function() {
                            a = null
                        }
                        ), t),
                        o && e.apply(n, i)
                    } else
                        a = setTimeout((function() {
                            e.apply(n, i)
                        }
                        ), t)
                }
            }
              , l = (e, t) => {
                let o, a = 0;
                return function() {
                    const n = this
                      , i = arguments
                      , r = +Date.now();
                    r - a >= t ? (clearTimeout(o),
                    e.apply(n, i),
                    a = r) : (clearTimeout(o),
                    o = setTimeout(( () => {
                        e.apply(n, i)
                    }
                    ), t))
                }
            }
              , s = (e, t) => {
                const o = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "H+": t.getHours(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substr(4 - RegExp.$1.length)));
                for (const a in o)
                    new RegExp(`(${a})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[a] : `00${o[a]}`.substr(`${o[a]}`.length)));
                return e
            }
              , c = () => /macintosh|mac os x/i.test(navigator.userAgent)
              , d = (e, t="") => {
                const o = document.createElement("a");
                o.download = t,
                o.style.display = "none",
                o.href = e,
                document.body.appendChild(o),
                o.click(),
                document.body.removeChild(o)
            }
              , u = e => {
                var t = e.split("?")[1]
                  , o = {};
                if (!t)
                    return o;
                t = t.split("&");
                for (var a = 0, n = t.length; a < n; a++) {
                    var i = t[a].split("=");
                    o[i[0]] = decodeURIComponent(i[1])
                }
                return o
            }
              , p = e => {
                if (navigator.clipboard)
                    navigator.clipboard.writeText(e);
                else {
                    var t = document.createElement("textarea");
                    document.body.appendChild(t),
                    t.style.position = "fixed",
                    t.style.clip = "rect(0 0 0 0)",
                    t.style.top = "10px",
                    t.value = e,
                    t.select(),
                    document.execCommand("copy", !0),
                    document.body.removeChild(t)
                }
            }
              , m = function(e, t) {
                if (!Object.keys(t).length)
                    return e;
                e += "?";
                for (let o in t)
                    e += `${encodeURIComponent(o)}=${encodeURIComponent(t[o])}&`;
                return e.substring(0, e.length - 1)
            }
              , g = e => {
                const t = new RegExp(`(\\?|#|&)${e}=([^&#]*)(&|#|$)`)
                  , o = window.location.href.match(t);
                return decodeURIComponent(o ? o[2] : "")
            }
            ;
            t.A = {
                isDuringDate: i,
                debounce: r,
                throttle: l,
                dateFormat: s,
                isMac: c,
                downloadFile: d,
                getUrlParams: u,
                getParameter: g,
                baiduCallback: n,
                genUrl: m,
                copy: p
            }
        },
        62512: function(e, t, o) {
            "use strict";
            o(33110);
            let a;
            const n = "fanyiweb"
              , i = window.localStorage;
            function r(e) {
                return `${n}-${e}`
            }
            a = "undefined" !== typeof localStorage && null !== localStorage && {
                set: function(e, t) {
                    var o = JSON.stringify(t);
                    e = r(e);
                    try {
                        return i.setItem(e, o)
                    } catch (a) {
                        "QuotaExceededError" === a.name && (i.clear(),
                        i.setItem(e, o))
                    }
                },
                get: function(e) {
                    var t = JSON.parse(i.getItem(r(e)));
                    return t
                },
                remove: function(e) {
                    i.removeItem(r(e))
                }
            },
            t.A = a
        },
        96091: function(e, t, o) {
            "use strict";
            var a = o(8661);
            function n() {
                return new Promise((e => {
                    a.Ay.load().then((t => {
                        t.get().then((t => {
                            localStorage.setItem("yduuid", t.visitorId),
                            e(t.visitorId)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            t.A = n
        },
        97815: function(e, t, o) {
            "use strict";
            var a = o(41034)
              , n = (o(44114),
            o(26910),
            o(62953),
            o(21396))
              , i = o.n(n);
            const r = "key"
              , l = (e={}, t) => {
                const o = (0,
                a.A)({}, e);
                Object.keys(o).forEach((e => {
                    "" === o[e] && delete o[e]
                }
                ));
                const n = Object.keys(o).sort().filter((e => !(void 0 === o[e])));
                n.push(r),
                o[r] = t;
                const l = `${n.map((e => `${e}=${o[e]}`)).join("&")}`;
                return [i().MD5(l).toString(i().enc.Hex), n.join(",")]
            }
              , s = (e, t, o, n, i, r, s, c) => {
                const d = (0,
                a.A)({
                    product: n,
                    appVersion: s || "12.0.0",
                    client: c || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: i || "fanyi.web",
                    keyid: o,
                    mysticTime: Date.now(),
                    yduuid: r || "abcdefg",
                    abtest: 0
                }, e)
                  , [u,p] = l(d, t);
                return Object.assign(d, {
                    sign: u,
                    pointParam: p
                }),
                d
            }
              , c = (e, t, o, n, i, r, s, c) => {
                const d = (0,
                a.A)({
                    product: n,
                    appVersion: s || "12.0.0",
                    client: c || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: i || "fanyi.web",
                    keyid: o,
                    mysticTime: Date.now(),
                    yduuid: r || "abcdefg",
                    abtest: 0
                }, e)
                  , [u,p] = l(d, t);
                Object.assign(d, {
                    sign: u,
                    pointParam: p
                });
                const m = new FormData
                  , g = Object.keys(d);
                return g.forEach((e => {
                    m.append(e, d[e])
                }
                )),
                console.log("requestData", m),
                m
            }
              , d = (e, t, o, n, i, r, s, c, d) => {
                const u = (0,
                a.A)({
                    product: i,
                    appVersion: c || "12.0.0",
                    client: d || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: r || "fanyi.web",
                    keyid: n,
                    mysticTime: Date.now(),
                    yduuid: s || "abcdefg",
                    abtest: 0
                }, t)
                  , [p,m] = l(u, o);
                Object.assign(u, (0,
                a.A)({
                    sign: p,
                    pointParam: m
                }, e));
                const g = new FormData
                  , h = Object.keys(u);
                return h.forEach((e => {
                    g.append(e, u[e])
                }
                )),
                console.log("requestData", g),
                g
            }
            ;
            t.A = {
                genSign: l,
                genParamV3: s,
                genParamV3FormData: c,
                genParamV3FormDataWithNormalParam: d
            }
        },
        66582: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return m
                }
            });
            var a = o(6301)
              , n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII=";
            const i = ["src"]
              , r = {
                key: 1,
                class: "banner-default"
            };
            function l(e, t, o, l, s, c) {
                return l.showBanner ? ((0,
                a.uX)(),
                (0,
                a.CE)("div", {
                    key: 0,
                    class: "banner",
                    onClick: l.goBanner
                }, [(0,
                a.Lk)("img", {
                    class: "banner-img",
                    src: l.picture
                }, null, 8, i), (0,
                a.Lk)("img", {
                    class: "close",
                    src: n,
                    onClick: (0,
                    a.D$)(l.closeBanner, ["stop"])
                })])) : ((0,
                a.uX)(),
                (0,
                a.CE)("div", r))
            }
            var s = o(76393)
              , c = o(45358)
              , d = {
                __name: "Banner",
                setup(e, {expose: t}) {
                    t();
                    const o = (0,
                    a.KR)("")
                      , n = (0,
                    a.KR)("")
                      , i = (0,
                    a.KR)(!0)
                      , r = (0,
                    a.nI)()
                      , l = r.appContext.config.globalProperties;
                    (0,
                    a.sV)(( () => {
                        s.A.getBannerInfos().then((e => {
                            const t = e.data.bannerList[0] || {};
                            o.value = t.url,
                            n.value = t.picture,
                            c.A.isDuringDate(t.effectiveTime, t.expirationTime) && null === l.$cookies.get("bannercookie") ? i.value = !0 : i.value = !1
                        }
                        ))
                    }
                    ));
                    const d = () => {
                        l.$cookies.set("bannercookie", !0, 86400),
                        i.value = !1
                    }
                      , u = () => {
                        window.open(o.value)
                    }
                      , p = {
                        url: o,
                        picture: n,
                        showBanner: i,
                        internalInstance: r,
                        internalData: l,
                        closeBanner: d,
                        goBanner: u,
                        get service() {
                            return s.A
                        },
                        get util() {
                            return c.A
                        }
                    };
                    return Object.defineProperty(p, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    p
                }
            }
              , u = o(66262);
            const p = (0,
            u.A)(d, [["render", l], ["__scopeId", "data-v-5d2b230c"]]);
            var m = p
        },
        59018: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return v
                }
            });
            var a = o(6301);
            const n = e => ((0,
            a.Qi)("data-v-2c89add7"),
            e = e(),
            (0,
            a.jt)(),
            e)
              , i = {
                class: "confirm"
            }
              , r = {
                key: 0,
                class: "mask"
            }
              , l = {
                key: 0,
                class: "main"
            }
              , s = n(( () => (0,
            a.Lk)("div", {
                class: "bg"
            }, null, -1)))
              , c = {
                class: "context"
            }
              , d = {
                class: "title"
            }
              , u = {
                class: "content"
            }
              , p = {
                class: "footer"
            };
            function m(e, t, o, n, m, g) {
                return (0,
                a.uX)(),
                (0,
                a.CE)("div", i, [(0,
                a.bF)(a.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    a.k6)(( () => [n.visiable ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r)) : (0,
                    a.Q3)("", !0)])),
                    _: 1
                }), (0,
                a.bF)(a.eB, {
                    name: "up"
                }, {
                    default: (0,
                    a.k6)(( () => [n.visiable ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", l, [s, (0,
                    a.Lk)("div", c, [(0,
                    a.Lk)("div", d, (0,
                    a.v_)(o.title), 1), (0,
                    a.Lk)("div", u, (0,
                    a.v_)(o.content), 1), (0,
                    a.Lk)("div", p, [(0,
                    a.Lk)("button", {
                        class: "cancel",
                        onClick: n.onCancelClick
                    }, (0,
                    a.v_)(o.cancelText), 1), (0,
                    a.Lk)("button", {
                        class: "confirm",
                        onClick: n.onConfirmClick
                    }, (0,
                    a.v_)(o.confirmText), 1)])])])) : (0,
                    a.Q3)("", !0)])),
                    _: 1
                })])
            }
            o(27495),
            o(25440);
            const g = "0.5s";
            var h = {
                __name: "index",
                props: {
                    title: {
                        type: String
                    },
                    content: {
                        type: String,
                        required: !0
                    },
                    cancelText: {
                        type: String,
                        default: "取消"
                    },
                    confirmText: {
                        type: String,
                        default: "立即开通"
                    },
                    cancelHandler: {
                        type: Function
                    },
                    confirmHandler: {
                        type: Function
                    },
                    close: {
                        type: Function
                    },
                    duration: {
                        type: String,
                        default: "0.5s"
                    },
                    isLeavePoP: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(e, {expose: t}) {
                    t(),
                    (0,
                    a.$9)((e => ({
                        b67ca51c: g
                    })));
                    const o = e
                      , n = (0,
                    a.KR)(!1)
                      , i = () => {
                        n.value = !0
                    }
                    ;
                    (0,
                    a.sV)(( () => {
                        console.log("show confirm"),
                        i()
                    }
                    ));
                    const r = () => {
                        n.value = !1,
                        setTimeout(( () => {
                            o.close && o.close()
                        }
                        ), 100 * parseInt(g.replace("0.", "").replace("s", ""), 10))
                    }
                      , l = () => {
                        o.confirmHandler && o.confirmHandler(),
                        r()
                    }
                      , s = () => {
                        o.cancelHandler && o.cancelHandler(),
                        r()
                    }
                      , c = {
                        props: o,
                        visiable: n,
                        show: i,
                        duration: g,
                        close: r,
                        onConfirmClick: l,
                        onCancelClick: s
                    };
                    return Object.defineProperty(c, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    c
                }
            }
              , f = o(66262);
            const b = (0,
            f.A)(h, [["render", m], ["__scopeId", "data-v-2c89add7"]]);
            var v = b
        },
        94922: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return c
                }
            });
            o(62953);
            var a = o(6301);
            const n = {
                class: "inner-content"
            };
            function i(e, t, o, i, r, l) {
                const s = (0,
                a.gN)("fixed");
                return (0,
                a.uX)(),
                (0,
                a.Wv)(a.Im, {
                    to: "body"
                }, [o.visible ? (0,
                a.bo)(((0,
                a.uX)(),
                (0,
                a.CE)("div", {
                    key: 0,
                    class: "pop-up-comp mask",
                    onClick: t[0] || (t[0] = (0,
                    a.D$)(( (...e) => i.close && i.close(...e)), ["self"]))
                }, [(0,
                a.Lk)("div", n, [(0,
                a.RG)(e.$slots, "content", {}, void 0, !0)])])), [[s]]) : (0,
                a.Q3)("", !0)])
            }
            var r = {
                name: "PopUp",
                props: {
                    visible: Boolean,
                    modalClosable: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup(e, t) {
                    function o() {
                        e.modalClosable && t.emit("update:visible", !1)
                    }
                    return {
                        close: o
                    }
                },
                directives: {
                    fixed: {
                        mounted() {
                            const e = document.body.scrollTop || document.documentElement.scrollTop;
                            document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
                        },
                        unmounted() {
                            const {body: e} = document;
                            e.style.position = "static";
                            const {top: t} = e.style;
                            document.body.scrollTop = -parseInt(t, 10),
                            document.documentElement.scrollTop = -parseInt(t, 10),
                            e.style.top = ""
                        }
                    }
                }
            }
              , l = o(66262);
            const s = (0,
            l.A)(r, [["render", i], ["__scopeId", "data-v-489bbfa3"]]);
            var c = s
        },
        35105: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return d
                }
            });
            var a = o(6301);
            const n = {
                key: 0,
                class: "interfaceDialogMask"
            }
              , i = {
                class: "interfaceDialog-body"
            };
            function r(e, t, o, r, l, s) {
                return o.dialogVisible ? ((0,
                a.uX)(),
                (0,
                a.CE)("div", n, [(0,
                a.Lk)("div", {
                    class: (0,
                    a.C4)(["interfaceDialog", {
                        "interfaceDialog-default-style": o.withDialogStyle
                    }, {
                        isCenter: o.isCenter
                    }]),
                    style: (0,
                    a.Tr)({
                        width: s.pxStyle(o.width),
                        height: s.pxStyle(o.height),
                        top: s.pxStyle(o.top),
                        left: s.pxStyle(o.left),
                        right: s.pxStyle(o.right)
                    }),
                    ref: "interfaceDialog"
                }, [(0,
                a.Lk)("div", i, [(0,
                a.RG)(e.$slots, "default", {}, void 0, !0)])], 6)])) : (0,
                a.Q3)("", !0)
            }
            var l = {
                name: "InterfaceDialog",
                components: {},
                props: {
                    dialogVisible: {
                        type: Boolean,
                        required: !0,
                        default: !1
                    },
                    width: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    height: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    top: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    left: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    right: {
                        type: [Number, String],
                        required: !1,
                        default: 0
                    },
                    withDialogStyle: {
                        type: Boolean,
                        default: !0
                    },
                    isCenter: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        promiseStatus: {}
                    }
                },
                methods: {
                    pxStyle(e) {
                        return this.isString(e) ? e : e + "px"
                    },
                    isString(e) {
                        return "string" === typeof e
                    },
                    isNumber(e) {
                        return "number" === typeof e
                    },
                    closeinterfaceDialog() {
                        this.$emit("closeDialog")
                    },
                    modalClickEventHandler(e) {
                        this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
                    }
                },
                watch: {
                    dialogVisible: {
                        handler: function(e) {
                            e ? this.$nextTick(( () => {
                                setTimeout(( () => {
                                    document.body.addEventListener("click", this.modalClickEventHandler, !0)
                                }
                                ), 10)
                            }
                            )) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                        }
                    }
                }
            }
              , s = o(66262);
            const c = (0,
            s.A)(l, [["render", r], ["__scopeId", "data-v-71fec0f6"]]);
            var d = c
        },
        16075: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return P
                }
            });
            var a = o(6301);
            const n = e => ((0,
            a.Qi)("data-v-54064fd2"),
            e = e(),
            (0,
            a.jt)(),
            e)
              , i = {
                class: "TextTranslateSetting yd-form-container"
            }
              , r = {
                class: "checkbox"
            }
              , l = n(( () => (0,
            a.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语假名（仅译文）", -1)))
              , s = {
                class: "checkbox"
            }
              , c = n(( () => (0,
            a.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语罗马音（仅译文）", -1)))
              , d = {
                class: "checkbox"
            }
              , u = n(( () => (0,
            a.Lk)("span", {
                class: "color_text_1 label-text"
            }, "显示原文字数", -1)))
              , p = n(( () => (0,
            a.Lk)("div", {
                class: "line"
            }, null, -1)))
              , m = {
                class: "pronounce-label"
            }
              , g = {
                class: "pronounce-setting-content"
            }
              , h = ["onClick"]
              , f = {
                class: "radio-label"
            };
            function b(e, t, o, n, b, v) {
                return (0,
                a.uX)(),
                (0,
                a.Wv)(n["InterfaceDialog"], {
                    dialogVisible: !0,
                    width: "auto",
                    height: "auto",
                    top: o.top,
                    right: 0,
                    left: null,
                    onCloseDialog: n.closeDialog
                }, {
                    default: (0,
                    a.k6)(( () => [(0,
                    a.Lk)("div", i, [(0,
                    a.bF)(n["StrokeSwitch"]), "TextTranslate" === o.from ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)(a.FK, {
                        key: 0
                    }, [(0,
                    a.Lk)("label", r, [(0,
                    a.bo)((0,
                    a.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[0] || (t[0] = e => n.showPjm = e)
                    }, null, 512), [[a.lH, n.showPjm]]), l]), (0,
                    a.Lk)("label", s, [(0,
                    a.bo)((0,
                    a.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[1] || (t[1] = e => n.showRomanPronunciation = e)
                    }, null, 512), [[a.lH, n.showRomanPronunciation]]), c]), (0,
                    a.Lk)("label", d, [(0,
                    a.bo)((0,
                    a.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[2] || (t[2] = e => n.showWordsNumber = e)
                    }, null, 512), [[a.lH, n.showWordsNumber]]), u])], 64)) : (0,
                    a.Q3)("", !0), p, ((0,
                    a.uX)(),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(n.pronounceSettingList, ( (e, t) => (0,
                    a.Lk)("div", {
                        class: "pronounce-item-container",
                        key: t
                    }, [(0,
                    a.Lk)("div", m, (0,
                    a.v_)(e.label), 1), (0,
                    a.Lk)("div", g, [((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(e.content, (t => ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: "radio-container",
                        key: t.value,
                        onClick: o => n.pronounceSetting[e.key] = t.value
                    }, [(0,
                    a.Lk)("div", {
                        class: (0,
                        a.C4)(["radio", [{
                            selected: n.pronounceSetting[e.key] == t.value
                        }]])
                    }, null, 2), (0,
                    a.Lk)("div", f, (0,
                    a.v_)(t.label), 1)], 8, h)))), 128))])]))), 64))])])),
                    _: 1
                }, 8, ["top"])
            }
            var v = o(66278)
              , y = o(35105);
            o(62953);
            const A = {
                class: "stroke-switch yd-form-container"
            }
              , T = {
                class: "checkbox"
            };
            function _(e, t, o, n, i, r) {
                return (0,
                a.uX)(),
                (0,
                a.CE)("div", A, [(0,
                a.Lk)("label", T, [(0,
                a.Lk)("span", {
                    class: "color_text_1 label-text",
                    onClick: t[0] || (t[0] = (...e) => n.downloadChrome && n.downloadChrome(...e))
                }, "下载划词插件")])])
            }
            var k = {
                name: "StrokeSwitch",
                setup(e, t) {
                    const o = () => {
                        window.open("https://chrome.google.com/webstore/detail/%E7%BD%91%E6%98%93%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91/eopjamdnofihpioajgfdikhhbobonhbb?hl=en&authuser=1")
                    }
                    ;
                    return {
                        downloadChrome: o
                    }
                }
            }
              , S = o(66262);
            const w = (0,
            S.A)(k, [["render", _], ["__scopeId", "data-v-8d65aa18"]]);
            var E = w
              , I = {
                __name: "TextTranslateSetting",
                props: {
                    showTextTranslateHistoryPanel: Boolean,
                    from: {
                        type: String,
                        default: "TextTranslate"
                    },
                    top: {
                        type: Number,
                        default: 32
                    }
                },
                emits: ["closeDialog"],
                setup(e, {expose: t, emit: o}) {
                    t();
                    const n = (0,
                    v.Pj)()
                      , i = e
                      , r = o
                      , l = (0,
                    a.KR)(!1)
                      , s = (0,
                    a.KR)(!1)
                      , c = (0,
                    a.KR)(!0)
                      , d = (0,
                    a.KR)({})
                      , u = [{
                        label: "发音速度（全局）",
                        key: "playbackRate",
                        content: [{
                            label: "0.5x",
                            value: "0.5"
                        }, {
                            label: "1x",
                            value: "1"
                        }, {
                            label: "1.5x",
                            value: "1.5"
                        }]
                    }, {
                        label: "默认发音",
                        key: "voiceType",
                        content: [{
                            label: "英音",
                            value: "1"
                        }, {
                            label: "美音",
                            value: "2"
                        }]
                    }];
                    (0,
                    a.KC)(( () => {
                        l.value = n.state.text.showPjm,
                        s.value = n.state.text.showRomanPronunciation,
                        c.value = n.state.text.showWordsNumber,
                        d.value.playbackRate = n.state.text.playbackRate,
                        d.value.voiceType = n.state.text.voiceType
                    }
                    )),
                    (0,
                    a.wB)(l, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_PJM", e)
                    }
                    )),
                    (0,
                    a.wB)(s, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
                    }
                    )),
                    (0,
                    a.wB)(c, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_WORDS_NUMBER", e)
                    }
                    )),
                    (0,
                    a.wB)(d, ( (e, t) => {
                        n.commit("SET_PLAYBACKRATE", e.playbackRate),
                        n.commit("SET_VOICETYPE", e.voiceType)
                    }
                    ), {
                        deep: !0
                    });
                    const p = () => {
                        r("closeDialog")
                    }
                      , m = {
                        store: n,
                        props: i,
                        emit: r,
                        showPjm: l,
                        showRomanPronunciation: s,
                        showWordsNumber: c,
                        pronounceSetting: d,
                        pronounceSettingList: u,
                        closeDialog: p,
                        get useStore() {
                            return v.Pj
                        },
                        InterfaceDialog: y.A,
                        StrokeSwitch: E
                    };
                    return Object.defineProperty(m, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    m
                }
            };
            const C = (0,
            S.A)(I, [["render", b], ["__scopeId", "data-v-54064fd2"]]);
            var P = C
        },
        84870: function(e, t, o) {
            var a = {
                "./domain.js": 57185,
                "./language.js": 36032,
                "./login.js": 37180,
                "./text.js": 87087
            };
            function n(e) {
                var t = i(e);
                return o(t)
            }
            function i(e) {
                if (!o.o(a, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return a[e]
            }
            n.keys = function() {
                return Object.keys(a)
            }
            ,
            n.resolve = i,
            e.exports = n,
            n.id = 84870
        },
        36519: function(e, t, o) {
            "use strict";
            e.exports = o.p + "img/null-list.8c012df2.png"
        },
        78982: function() {},
        47790: function() {},
        73776: function() {},
        77965: function() {},
        50477: function() {},
        66089: function() {},
        79368: function() {},
        64688: function() {},
        42634: function() {},
        51069: function() {},
        15340: function() {},
        79838: function() {}
    }
      , t = {};
    function o(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var i = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        console.log("加载的模块为:", a);
        return e[a].call(i.exports, i, i.exports, o),
        i.loaded = !0,
        i.exports
    }
    window.xxx = o;
    o.m = e,
    function() {
        var e = [];
        o.O = function(t, a, n, i) {
            if (!a) {
                var r = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    a = e[d][0],
                    n = e[d][1],
                    i = e[d][2];
                    for (var l = !0, s = 0; s < a.length; s++)
                        (!1 & i || r >= i) && Object.keys(o.O).every((function(e) {
                            return o.O[e](a[s])
                        }
                        )) ? a.splice(s--, 1) : (l = !1,
                        i < r && (r = i));
                    if (l) {
                        e.splice(d--, 1);
                        var c = n();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--)
                e[d] = e[d - 1];
            e[d] = [a, n, i]
        }
    }(),
    function() {
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return o.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        o.d = function(e, t) {
            for (var a in t)
                o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
    }(),
    function() {
        o.f = {},
        o.e = function(e) {
            return Promise.all(Object.keys(o.f).reduce((function(t, a) {
                return o.f[a](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        o.u = function(e) {
            return "js/" + ({
                17: "PdfSplit",
                108: "paraphraser",
                151: "Pdf2Word",
                271: "PdfConcat",
                333: "NoLogin",
                348: "textTranslate",
                393: "Pdf2Pic",
                471: "termBank",
                487: "FunctionList",
                508: "FileFormat",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                761: "Pic2Pdf",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                17: "9155cf5a",
                85: "110e3651",
                95: "0f4f600b",
                99: "7bc79a75",
                108: "0e3d62b8",
                151: "a600fde5",
                271: "b55b9e03",
                296: "48ab61af",
                333: "0f87299c",
                348: "68cfeac5",
                393: "6612e334",
                471: "fa6c3be7",
                487: "46c52481",
                508: "a71ac7f5",
                551: "f85798a8",
                637: "95304f34",
                688: "6860b091",
                761: "19e9d78c",
                768: "a2fa5968",
                829: "f24a2dd5",
                853: "26583a59",
                873: "05e5fa4c"
            }[e] + ".js"
        }
    }(),
    function() {
        o.miniCssF = function(e) {
            return "css/" + ({
                108: "paraphraser",
                151: "Pdf2Word",
                333: "NoLogin",
                348: "textTranslate",
                471: "termBank",
                508: "FileFormat",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                85: "c186dda0",
                95: "c0846d11",
                99: "6f8009fc",
                108: "7d2a718c",
                151: "b040fbb8",
                333: "fb6db096",
                348: "95b17840",
                471: "4dd8ff0b",
                508: "c1879000",
                551: "9d4f34c4",
                637: "839b13c4",
                688: "9e0104a9",
                853: "481de091",
                873: "588819ab"
            }[e] + ".css"
        }
    }(),
    function() {
        o.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "translation-website:";
        o.l = function(a, n, i, r) {
            if (e[a])
                e[a].push(n);
            else {
                var l, s;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                        var u = c[d];
                        if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == t + i) {
                            l = u;
                            break
                        }
                    }
                l || (s = !0,
                l = document.createElement("script"),
                l.charset = "utf-8",
                l.timeout = 120,
                o.nc && l.setAttribute("nonce", o.nc),
                l.setAttribute("data-webpack", t + i),
                l.src = a),
                e[a] = [n];
                var p = function(t, o) {
                    l.onerror = l.onload = null,
                    clearTimeout(m);
                    var n = e[a];
                    if (delete e[a],
                    l.parentNode && l.parentNode.removeChild(l),
                    n && n.forEach((function(e) {
                        return e(o)
                    }
                    )),
                    t)
                        return t(o)
                }
                  , m = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
                l.onerror = p.bind(null, l.onerror),
                l.onload = p.bind(null, l.onload),
                s && document.head.appendChild(l)
            }
        }
    }(),
    function() {
        o.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        o.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        o.p = ""
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, t, o, a, n) {
                var i = document.createElement("link");
                i.rel = "stylesheet",
                i.type = "text/css";
                var r = function(o) {
                    if (i.onerror = i.onload = null,
                    "load" === o.type)
                        a();
                    else {
                        var r = o && o.type
                          , l = o && o.target && o.target.href || t
                          , s = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + l + ")");
                        s.name = "ChunkLoadError",
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                        s.type = r,
                        s.request = l,
                        i.parentNode && i.parentNode.removeChild(i),
                        n(s)
                    }
                };
                return i.onerror = i.onload = r,
                i.href = t,
                o ? o.parentNode.insertBefore(i, o.nextSibling) : document.head.appendChild(i),
                i
            }
              , t = function(e, t) {
                for (var o = document.getElementsByTagName("link"), a = 0; a < o.length; a++) {
                    var n = o[a]
                      , i = n.getAttribute("data-href") || n.getAttribute("href");
                    if ("stylesheet" === n.rel && (i === e || i === t))
                        return n
                }
                var r = document.getElementsByTagName("style");
                for (a = 0; a < r.length; a++) {
                    n = r[a],
                    i = n.getAttribute("data-href");
                    if (i === e || i === t)
                        return n
                }
            }
              , a = function(a) {
                return new Promise((function(n, i) {
                    var r = o.miniCssF(a)
                      , l = o.p + r;
                    if (t(r, l))
                        return n();
                    e(a, l, null, n, i)
                }
                ))
            }
              , n = {
                524: 0
            };
            o.f.miniCss = function(e, t) {
                var o = {
                    85: 1,
                    95: 1,
                    99: 1,
                    108: 1,
                    151: 1,
                    333: 1,
                    348: 1,
                    471: 1,
                    508: 1,
                    551: 1,
                    637: 1,
                    688: 1,
                    853: 1,
                    873: 1
                };
                n[e] ? t.push(n[e]) : 0 !== n[e] && o[e] && t.push(n[e] = a(e).then((function() {
                    n[e] = 0
                }
                ), (function(t) {
                    throw delete n[e],
                    t
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            524: 0
        };
        o.f.j = function(t, a) {
            var n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    a.push(n[2]);
                else if (95 != t) {
                    var i = new Promise((function(o, a) {
                        n = e[t] = [o, a]
                    }
                    ));
                    a.push(n[2] = i);
                    var r = o.p + o.u(t)
                      , l = new Error
                      , s = function(a) {
                        if (o.o(e, t) && (n = e[t],
                        0 !== n && (e[t] = void 0),
                        n)) {
                            var i = a && ("load" === a.type ? "missing" : a.type)
                              , r = a && a.target && a.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = r,
                            n[1](l)
                        }
                    };
                    o.l(r, s, "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        o.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, a) {
            var n, i, r = a[0], l = a[1], s = a[2], c = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (n in l)
                    o.o(l, n) && (o.m[n] = l[n]);
                if (s)
                    var d = s(o)
            }
            for (t && t(a); c < r.length; c++)
                i = r[c],
                o.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return o.O(d)
        }
          , a = self["webpackChunktranslation_website"] = self["webpackChunktranslation_website"] || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }();
    // var a = o.O(void 0, [504], (function() {
    //     return o(96365)
    // }
    // ));
    // a = o.O(a)
}
)();

const l = window.xxx(97815)
const {token: o, secretKey: n} = {
    "secretKey": "BdCYRtHAJxO7yNm9RHwU2JiFISIk62Ts",
    "token": "e1c90180b12b4bbbaf4083b8bcccd04f"
}
const i = {
    "signSecretKey": n,
    "keyId": "translate-webfanyi-webmain",
    "product": "webfanyi",
    "keyfrom": "webfanyi.webmain",
    "client": "webmain",
    "token": o,
    "source": "webmain"
}
const s = l.A.genParamV3(i, n, i.keyId, "webfanyi", "webfanyi.webmain", 'f4ecceee2e00c7476a33fda2d73a5bdb', void 0, "webmain");
console.log(s);
