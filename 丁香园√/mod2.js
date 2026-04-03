try {
    !function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
          , a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[a] = "6a2aa607-bb53-4320-abb4-f8be1ad28213",
        e._sentryDebugIdIdentifier = "sentry-dbid-6a2aa607-bb53-4320-abb4-f8be1ad28213")
    }()
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8903], {
    81957: function(e) {
        e.exports = function(e, a, t) {
            var s = -1
              , n = e.length;
            a < 0 && (a = -a > n ? 0 : n + a),
            (t = t > n ? n : t) < 0 && (t += n),
            n = a > t ? 0 : t - a >>> 0,
            a >>>= 0;
            for (var i = Array(n); ++s < n; )
                i[s] = e[s + a];
            return i
        }
    },
    49039: function(e, a, t) {
        var s = t(81957)
          , n = t(91212);
        e.exports = function(e, a, t) {
            var i = null == e ? 0 : e.length;
            return i ? s(e, (a = t || void 0 === a ? 1 : n(a)) < 0 ? 0 : a, i) : []
        }
    },
    69006: function(e, a, t) {
        var s = t(81957)
          , n = t(91212);
        e.exports = function(e, a, t) {
            var i = null == e ? 0 : e.length;
            return i ? s(e, 0, (a = i - (a = t || void 0 === a ? 1 : n(a))) < 0 ? 0 : a) : []
        }
    },
    39109: function(e) {
        e.exports = function(e) {
            var a = null == e ? 0 : e.length;
            return a ? e[a - 1] : void 0
        }
    },
    81249: function(e, a, t) {
        var s = t(27993)
          , n = 1 / 0;
        e.exports = function(e) {
            return e ? (e = s(e)) === n || e === -n ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    91212: function(e, a, t) {
        var s = t(81249);
        e.exports = function(e) {
            var a = s(e)
              , t = a % 1;
            return a == a ? t ? a - t : a : 0
        }
    },
    30201: function(e, a, t) {
        "use strict";
        var s = t(57437);
        t(2265);
        var n = t(16147)
          , i = t.n(n)
          , r = t(48968)
          , o = t(25795)
          , l = t(83883)
          , c = t(17633)
          , d = t(67660)
          , u = t.n(d);
        a.Z = e => {
            var a, t;
            let {userInfo: n={}, className: d, size: m="xSmall"} = e;
            return (0,
            s.jsxs)("div", {
                className: i()(u().avatarLine, d),
                "data-sentry-component": "AvatarLine",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                s.jsx)(l.ZP, {
                    showVIcon: !1,
                    simpleMode: !0,
                    triggerCard: !0,
                    size: m,
                    userInfo: n,
                    "data-sentry-element": "Avatar",
                    "data-sentry-source-file": "index.tsx"
                }), (0,
                s.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow",
                    href: (0,
                    c.Gh)(String(n.userId || "")),
                    onClick: e => {
                        e.stopPropagation(),
                        n.userId || o.Z.info("已对匿名用户开启隐私保护")
                    }
                    ,
                    children: n.nickname || "匿名"
                }), (0,
                s.jsx)(r.Z, {
                    className: u().vicon,
                    userInfo: n,
                    triggerTip: !1,
                    size: "default",
                    "data-sentry-element": "VIcon",
                    "data-sentry-source-file": "index.tsx"
                }), (0,
                s.jsx)("span", {
                    className: u().userTitle,
                    children: null == n ? void 0 : null === (t = n.userTitle) || void 0 === t ? void 0 : null === (a = t.titles) || void 0 === a ? void 0 : a[0]
                })]
            })
        }
    },
    37046: function(e, a, t) {
        "use strict";
        var s = t(57437);
        t(2265);
        var n = t(62748)
          , i = t.n(n)
          , r = t(16147)
          , o = t.n(r);
        a.Z = e => {
            let {tips: a, type: t, buttonList: n=null, className: r=""} = e;
            return (0,
            s.jsxs)("div", {
                className: "".concat(i().wrapper, " ").concat(r),
                "data-sentry-component": "BBSEmptyModule",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                s.jsx)("div", {
                    className: o()(i().commonImage, i()[t + "Image"])
                }), (0,
                s.jsx)("p", {
                    className: i().tips,
                    children: a
                }), (0,
                s.jsx)("div", {
                    className: i().buttonWrapper,
                    children: n
                })]
            })
        }
    },
    46578: function(e, a, t) {
        "use strict";
        var s = t(57437)
          , n = t(2265)
          , i = t(33112)
          , r = t(25608)
          , o = t(16147)
          , l = t.n(o)
          , c = t(56668)
          , d = t.n(c);
        let u = e => {
            let a = null == e ? void 0 : e.tagType;
            return a ? [(0,
            s.jsx)(s.Fragment, {}), (0,
            s.jsx)("img", {
                alt: "tag",
                src: "https://img1.dxycdn.com/t/s7/2025/0320/171/0029756424032062091.png",
                className: d().imgTag
            }, "1"), (0,
            s.jsx)("span", {
                children: (0,
                s.jsx)(r.Z, {})
            }, "2"), (0,
            s.jsxs)("span", {
                className: d().scoreTag,
                children: [(0,
                s.jsx)(i.Z, {
                    href: "icon-dxy_star"
                }), (0,
                s.jsx)("span", {
                    children: null == e ? void 0 : e.tagName
                })]
            }, "3"), (0,
            s.jsx)("span", {
                className: d().customTag,
                children: null == e ? void 0 : e.tagName
            }, "4"), (0,
            s.jsx)("span", {
                className: d().customTag,
                children: null == e ? void 0 : e.tagName
            }, "5"), (0,
            s.jsx)("span", {
                className: d().customTag,
                children: null == e ? void 0 : e.tagName
            }, "6"), (0,
            s.jsx)("span", {
                className: d().customTag,
                children: null == e ? void 0 : e.tagName
            }, "7"), (0,
            s.jsx)("span", {
                className: d().recommendTag,
                children: null == e ? void 0 : e.tagName
            }, "8"), (0,
            s.jsx)("span", {
                className: d().customTag,
                children: null == e ? void 0 : e.tagName
            }, "9"), (0,
            s.jsx)("span", {
                className: d().recommendTag,
                children: null == e ? void 0 : e.tagName
            }, "10")][a] : null
        }
        ;
        a.Z = e => {
            let {tagInfos: a=[], className: t, otherTag: i=""} = e
              , r = (0,
            n.useRef)(null)
              , [o,c] = (0,
            n.useState)(3);
            (0,
            n.useLayoutEffect)( () => {
                let e = r.current;
                if (!e || a.length <= 2)
                    return;
                let t = Array.from(e.children);
                t[0].offsetTop !== t[t.length - 1].offsetTop && (console.log("标签超出容器高度，将只显示第一个标签", a),
                c(2))
            }
            , [a]);
            let m = a.slice(0, Math.min(3, o));
            return (0,
            s.jsxs)("div", {
                className: l()(d().tagsLine, t),
                ref: r,
                "data-sentry-component": "CardTags",
                "data-sentry-source-file": "index.tsx",
                children: [null == m ? void 0 : m.map(e => u(e)), i]
            })
        }
    },
    25608: function(e, a, t) {
        "use strict";
        var s = t(57437);
        t(2265);
        var n = t(33112)
          , i = t(3594)
          , r = t.n(i);
        a.Z = e => {
            let {className: a, ...t} = e;
            return (0,
            s.jsxs)("div", {
                className: "".concat(r().caseTag, " ").concat(a),
                ...t,
                "data-sentry-component": "CaseTag",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                s.jsx)(n.Z, {
                    href: "icon-dui_dxycase",
                    className: r().caseIcon,
                    "data-sentry-element": "Icon",
                    "data-sentry-source-file": "index.tsx"
                }), "病例库"]
            })
        }
    },
    8903: function(e, a, t) {
        "use strict";
        t.d(a, {
            default: function() {
                return k
            }
        });
        var s = t(57437)
          , n = t(2265)
          , i = t(75550)
          , r = t(39109)
          , o = t.n(r)
          , l = t(69006)
          , c = t.n(l)
          , d = t(49039)
          , u = t.n(d)
          , m = t(43079)
          , v = t(33112)
          , _ = t(37046)
          , p = t(51050)
          , g = t(16147)
          , f = t.n(g)
          , x = t(99485)
          , h = t(30201)
          , y = t(73906)
          , I = t(91504)
          , j = t(39409)
          , N = t(1077)
          , T = t.n(N)
          , b = t(46578)
          , C = e => {
            var a, t, i, r, o, l, c;
            let {postInfo: d={}, daData: u={}} = e
              , m = (0,
            n.useRef)(null);
            return (0,
            y.Z)( () => {
                (0,
                I.track)({
                    action: "expose_casepost",
                    ext: {
                        ...u,
                        post_id: d.id
                    }
                })
            }
            , m),
            (0,
            s.jsxs)(x.default, {
                className: T().item,
                href: "/post/".concat(d.id),
                onClick: () => {
                    (0,
                    I.track)({
                        action: "click_casepost",
                        ext: {
                            ...u,
                            post_id: d.id
                        }
                    })
                }
                ,
                prefetch: !1,
                target: "_blank",
                ref: m,
                "data-sentry-element": "Link",
                "data-sentry-component": "CaseItem",
                "data-sentry-source-file": "CaseItem.tsx",
                children: [(0,
                s.jsx)("div", {
                    className: f()("singleRowEllipsis", T().title),
                    children: d.title
                }), (0,
                s.jsxs)("div", {
                    className: T().itemContent,
                    children: [(0,
                    s.jsxs)("div", {
                        style: (null === (a = d.coverInfo) || void 0 === a ? void 0 : a.coverPic.length) ? {
                            width: "calc(100% - 144px - 12px)"
                        } : {
                            width: "100%"
                        },
                        children: [(0,
                        s.jsx)(h.Z, {
                            className: T().avatarInfo,
                            userInfo: d.postUser,
                            "data-sentry-element": "AvatarLine",
                            "data-sentry-source-file": "CaseItem.tsx"
                        }), (0,
                        s.jsx)("div", {
                            className: f()("multiRowEllipsis", T().text),
                            children: d.simpleBody
                        })]
                    }), (null === (i = d.coverInfo) || void 0 === i ? void 0 : null === (t = i.coverPic) || void 0 === t ? void 0 : t.length) ? (0,
                    s.jsxs)("div", {
                        className: T().videoContent,
                        children: [(0,
                        s.jsx)("div", {
                            className: f()(T().video, {
                                [T().isFilter]: null === (r = d.coverInfo) || void 0 === r ? void 0 : r.isCoverBlur
                            }),
                            style: {
                                backgroundImage: "url(".concat(null === (o = d.coverInfo) || void 0 === o ? void 0 : o.coverPic[0], ")")
                            }
                        }), (null === (l = d.coverInfo) || void 0 === l ? void 0 : l.isVideoCover) && (0,
                        s.jsx)("img", {
                            src: "https://img1.dxycdn.com/p/s2/2025/0916/684/2110146580018977691.png?v=1757994601",
                            alt: ""
                        })]
                    }) : null]
                }), !!(null === (c = d.newTagInfos) || void 0 === c ? void 0 : c.length) && (0,
                s.jsx)(b.Z, {
                    className: T().tagsLine,
                    tagInfos: d.newTagInfos
                }), (0,
                s.jsxs)("div", {
                    className: T().browse,
                    children: [d.reads ? "".concat((0,
                    j.dZ)(d.reads), "浏览") : "", d.praiseCount ? " \xb7 ".concat((0,
                    j.dZ)(d.praiseCount), "点赞") : "", d.replies ? " \xb7 ".concat((0,
                    j.dZ)(d.replies), "讨论") : ""]
                })]
            })
        }
          , L = t(63664)
          , Z = t.n(L)
          , w = t(18673);
        async function B(e, a) {
            return await (0,
            w.Z)({
                url: "/pc/case-bank/post/page",
                apiMockUrl: "62060555115a191200a823e7/pc/case-bank/post/page",
                method: "get",
                parameters: e,
                ...a
            })
        }
        var k = e => {
            var a, t, r, l;
            let {info: d, pageQuery: g={
                source: 1
            }, daData: f={}} = e
              , x = (null == d ? void 0 : null === (t = d.data) || void 0 === t ? void 0 : null === (a = t.result) || void 0 === a ? void 0 : a.length) ? null == d ? void 0 : null === (r = d.data) || void 0 === r ? void 0 : r.result : []
              , [h,y] = (0,
            n.useState)((0,
            i.ZW)(x))
              , I = (0,
            n.useRef)(null == d ? void 0 : null === (l = d.data) || void 0 === l ? void 0 : l.cursor)
              , [j,N] = (0,
            n.useState)(!1)
              , [T,b] = (0,
            n.useState)(d.isLastPage);
            (0,
            n.useEffect)( () => {
                var e, a, t, s;
                y((0,
                i.ZW)((null == d ? void 0 : null === (a = d.data) || void 0 === a ? void 0 : null === (e = a.result) || void 0 === e ? void 0 : e.length) ? null == d ? void 0 : null === (t = d.data) || void 0 === t ? void 0 : t.result : [])),
                I.current = null == d ? void 0 : null === (s = d.data) || void 0 === s ? void 0 : s.cursor,
                b(d.isLastPage)
            }
            , [d]);
            let L = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                N(!0);
                try {
                    let l = await B({
                        ...e,
                        ...g,
                        pageSize: 10
                    });
                    if ((null == l ? void 0 : l.code) === "success" && (null == l ? void 0 : l.data)) {
                        var a, t, s, n, r;
                        let e = (null == l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : null === (a = t.result) || void 0 === a ? void 0 : a.length) ? (0,
                        i.ZW)(null == l ? void 0 : null === (s = l.data) || void 0 === s ? void 0 : s.result) : [];
                        if (e.length) {
                            let a = o()(h);
                            if ((null == a ? void 0 : a.storeTimeStr) === e[0].storeTimeStr) {
                                let t = [...c()(h), {
                                    ...a,
                                    items: [...a.items, ...null === (r = e[0]) || void 0 === r ? void 0 : r.items]
                                }, ...u()(e)];
                                y(t)
                            } else
                                y([...h, ...e]);
                            I.current = null == l ? void 0 : null === (n = l.data) || void 0 === n ? void 0 : n.cursor
                        } else
                            b(!0)
                    } else
                        m.ZP.error("获取数据失败，请稍后再试")
                } catch (e) {}
                N(!1)
            };
            return h.length ? (0,
            s.jsxs)(s.Fragment, {
                children: [h.map(e => {
                    var a, t;
                    return (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("div", {
                            className: Z().fr,
                            children: (0,
                            i.mr)(null === (t = e.items) || void 0 === t ? void 0 : null === (a = t[0]) || void 0 === a ? void 0 : a.storeTime, "MM月DD日")
                        }), (0,
                        s.jsx)("div", {
                            className: Z().caseList,
                            children: e.items.map(e => (0,
                            s.jsx)(C, {
                                postInfo: e,
                                daData: f
                            }, e.id))
                        })]
                    }, e.storeTimeStr)
                }
                ), T ? (0,
                s.jsx)("div", {
                    className: Z().noMore,
                    children: "没有更多了"
                }) : (0,
                s.jsx)("div", {
                    className: Z().loadMore,
                    onClick: () => {
                        j || L({
                            cursor: I.current
                        })
                    }
                    ,
                    children: j ? "数据加载中" : (0,
                    s.jsxs)(s.Fragment, {
                        children: ["查看更多", (0,
                        s.jsx)(v.Z, {
                            href: "icon-dui_page_arrow",
                            className: Z().arrowIcon
                        })]
                    })
                })]
            }) : d.isError ? (0,
            s.jsx)(_.Z, {
                tips: "加载失败，请重新加载",
                type: "empty",
                className: Z().emptyBox,
                buttonList: (0,
                s.jsx)(p.Z, {
                    type: "primary",
                    onClick: () => {
                        L()
                    }
                    ,
                    children: "重新加载"
                })
            }) : (0,
            s.jsx)(_.Z, {
                tips: "暂无内容",
                type: "empty",
                buttonList: null,
                className: Z().emptyBox
            })
        }
    },
    67660: function(e) {
        e.exports = {
            avatarLine: "AvatarLine_avatarLine__CS39R",
            img: "AvatarLine_img__PK3le",
            visible: "AvatarLine_visible__8w8JB",
            userTitle: "AvatarLine_userTitle__ZX0cY",
            card: "AvatarLine_card__Xb4LR"
        }
    },
    62748: function(e) {
        e.exports = {
            wrapper: "BBSEmptyModule_wrapper__5HUlf",
            commonImage: "BBSEmptyModule_commonImage__c_dAE",
            unloginImage: "BBSEmptyModule_unloginImage__RlUMs",
            emptyImage: "BBSEmptyModule_emptyImage__YZHQq",
            tips: "BBSEmptyModule_tips__O6_4f",
            buttonWrapper: "BBSEmptyModule_buttonWrapper__cQoUJ"
        }
    },
    56668: function(e) {
        e.exports = {
            tagsLine: "CardTags_tagsLine__IAq64",
            imgTag: "CardTags_imgTag__x2rxp",
            customTag: "CardTags_customTag__jAY26",
            scoreTag: "CardTags_scoreTag__PAyGX",
            recommendTag: "CardTags_recommendTag__jPiZj"
        }
    },
    3594: function(e) {
        e.exports = {
            caseTag: "CaseTag_caseTag__6BPWD",
            caseIcon: "CaseTag_caseIcon__y_aYY"
        }
    },
    1077: function(e) {
        e.exports = {
            item: "caseItem_item__W0mOJ",
            title: "caseItem_title__BxnDa",
            itemContent: "caseItem_itemContent__UkV4_",
            avatarInfo: "caseItem_avatarInfo__C_ixp",
            videoContent: "caseItem_videoContent__z5n6G",
            video: "caseItem_video__G_DWA",
            isFilter: "caseItem_isFilter__IkUcr",
            text: "caseItem_text__spCUE",
            tagsLine: "caseItem_tagsLine__94eFD",
            browse: "caseItem_browse__pWbjh",
            rate: "caseItem_rate__4WNMS",
            rateNum: "caseItem_rateNum__SpwRd",
            payTag: "caseItem_payTag__Z4PTI"
        }
    },
    63664: function(e) {
        e.exports = {
            caseList: "CaseList_caseList__cNo1J",
            fr: "CaseList_fr__VM9pc",
            loadMore: "CaseList_loadMore__XahbZ",
            noMore: "CaseList_noMore__05tkd",
            emptyBox: "CaseList_emptyBox__KsPBP"
        }
    }
}]);
