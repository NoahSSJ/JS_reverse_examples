(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-15d87280"], {
    "0686": function(e, t, a) {
        a.d(t, "a", (function() {
            return i
        }
        ));
        var n = a("57ba");
        function i(e) {
            return Object(n.a)({
                url: "/land/webEncoder/bidder/bidSection/list",
                method: "post",
                data: e
            })
        }
    },
    "0b6d": function(e, t, a) {},
    "25ec": function(e, t, a) {
        a("ac1f"),
        a("466d");
        var n = {
            model: {
                prop: "inputValue",
                event: "change"
            },
            props: {
                inputValue: {
                    type: String,
                    default: ""
                },
                align: {
                    type: String,
                    default: "left"
                },
                placeholder: {
                    type: String,
                    default: "请输入"
                },
                type: {
                    type: String,
                    default: "text"
                }
            },
            data: function() {
                return {
                    nativeInput: this.$attrs.value
                }
            },
            computed: {
                isMobile: function() {
                    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                }
            },
            methods: {
                onChange: function(e) {
                    this.$emit("change", e.target.value)
                }
            }
        };
        a("36a7"),
        a = a("2877"),
        a = Object(a.a)(n, (function() {
            var e = this
              , t = e.$createElement;
            return (t = e._self._c || t)("div", {
                staticClass: "search-box"
            }, [t("div", {
                staticClass: "start"
            }, [e._t("start")], 2), t("div", {
                staticClass: "search"
            }, [e._t("before"), e._t("default", [t("div", {
                staticClass: "search__inner"
            }, [t("input", {
                attrs: {
                    type: e.type,
                    placeholder: e.placeholder
                },
                domProps: {
                    value: e.inputValue
                },
                on: {
                    input: function(t) {
                        return e.onChange(t)
                    },
                    blur: function(t) {
                        return e.$emit("blur")
                    },
                    focus: function(t) {
                        return e.$emit("focus")
                    },
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("search")
                    }
                }
            }), t("el-button", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-search"
                },
                on: {
                    click: function(t) {
                        return e.$emit("search")
                    }
                }
            })], 1)]), e._t("after")], 2)])
        }
        ), [], !1, null, "230416c9", null);
        t.a = a.exports
    },
    2625: function(e, t, a) {
        a("caee")
    },
    "283d": function(e, t, a) {
        a.d(t, "a", (function() {
            return i
        }
        )),
        a.d(t, "f", (function() {
            return r
        }
        )),
        a.d(t, "c", (function() {
            return s
        }
        )),
        a.d(t, "e", (function() {
            return l
        }
        )),
        a.d(t, "d", (function() {
            return o
        }
        )),
        a.d(t, "b", (function() {
            return c
        }
        ));
        var n = a("57ba");
        function i(e) {
            return Object(n.a)({
                url: "/construction/webEncoder/bidder/bidSection/list",
                method: "post",
                data: e
            })
        }
        function r() {
            return Object(n.a)({
                url: "/construction/webEncoder/bidder/bidSection/listTradingCenter",
                method: "post"
            })
        }
        function s(e) {
            return Object(n.a)({
                url: "/construction/webEncoder/tenderFileAnno/websiteList",
                method: "post",
                data: e
            })
        }
        function l(e) {
            return Object(n.a)({
                url: "/construction/webEncoder/agency/tenderPlan/websiteList",
                method: "post",
                data: e
            })
        }
        function o(e) {
            return Object(n.a)({
                url: "/construction/webEncoder/agency/tenderPlan/getTenderPlan",
                method: "post",
                data: {
                    tenderPlanId: e
                }
            })
        }
        function c(e) {
            return Object(n.a)({
                url: "/construction/webEncoder/tenderFileAnno/website/get",
                method: "post",
                data: {
                    id: e
                }
            })
        }
    },
    "307e": function(e, t, a) {
        a("eb9b")
    },
    "33a7": function(e, t, a) {
        a("5537")
    },
    "36a7": function(e, t, a) {
        a("db9a")
    },
    5537: function(e, t, a) {},
    "5abc": function(e, t, a) {
        a.r(t);
        var n = a("c7eb")
          , i = a("1da1")
          , r = (a("99af"),
        a("7db0"),
        a("d81d"),
        a("13d5"),
        a("d3b7"),
        a("ac1f"),
        a("466d"),
        a("841c"),
        a("0643"),
        a("fffc"),
        a("4e3e"),
        a("a573"),
        a("9d4a"),
        a("159b"),
        a("fca0"))
          , s = a("25ec")
          , l = a("2e7b")
          , o = [{
            name: "招标计划",
            children: [],
            value: "ZBJH",
            componentName: "ZBJH"
        }, {
            name: "招标文件预公示",
            children: [],
            value: "ZBWJ",
            componentName: "ZBWJ"
        }, {
            name: "市政、房建工程",
            value: "SZFJ",
            componentName: "SZFJ",
            children: [{
                label: "信息类型",
                type: "informationType",
                children: [{
                    label: "预审/后审公告",
                    value: "ANNOUNCEMENT",
                    type: "ZBGG"
                }, {
                    label: "变更公告",
                    value: "ANNOUNCEMENT_CHANGE",
                    type: "ZBGG"
                }, {
                    label: "投标邀请书",
                    value: "ANNOUNCEMENT_TBYQS",
                    type: "TBYQS"
                }, {
                    label: "中标候选人公示",
                    value: "ANNOUNCEMENT_CANDIDATE",
                    type: "ZBHXRGS"
                }, {
                    label: "中标公示",
                    value: "ANNOUNCEMENT_WIN",
                    type: "ZBGS"
                }]
            }, {
                label: "发布时间",
                type: "releaseTime",
                children: [{
                    label: "不限",
                    value: ""
                }, {
                    label: "当天",
                    value: "THE_DAY"
                }, {
                    label: "近三天",
                    value: "LAST_THREE_DAYS"
                }, {
                    label: "近一周",
                    value: "NEARLY_A_WEEK"
                }, {
                    label: "近一月",
                    value: "NEARLY_A_MONTH"
                }]
            }]
        }, {
            name: "政府采购",
            value: "ZFCG",
            componentName: "ZFCG",
            children: [{
                label: "信息类型",
                type: "informationType",
                children: [{
                    label: "采购公告",
                    value: "ANNOUNCEMENT",
                    type: "CGGG"
                }, {
                    label: "变更公告",
                    value: "ANNOUNCEMENT_CHANGE",
                    type: "CGGG"
                }, {
                    label: "中标/成交公告",
                    value: "ANNOUNCEMENT_WIN",
                    type: "CGGS"
                }]
            }, {
                label: "发布时间",
                type: "releaseTime",
                children: [{
                    label: "不限",
                    value: ""
                }, {
                    label: "当天",
                    value: "THE_DAY"
                }, {
                    label: "近三天",
                    value: "LAST_THREE_DAYS"
                }, {
                    label: "近一周",
                    value: "NEARLY_A_WEEK"
                }, {
                    label: "近一月",
                    value: "NEARLY_A_MONTH"
                }]
            }]
        }, {
            name: "交通、水利及其他工程",
            value: "QT",
            componentName: "SZFJ",
            children: [{
                label: "信息类型",
                type: "informationType",
                children: [{
                    label: "资审/后审公告",
                    value: "ANNOUNCEMENT",
                    type: "ZBGG"
                }, {
                    label: "变更公告",
                    value: "ANNOUNCEMENT_CHANGE",
                    type: "ZBGG"
                }, {
                    label: "投标邀请书",
                    value: "ANNOUNCEMENT_TBYQS",
                    type: "TBYQS"
                }, {
                    label: "中标候选人公示",
                    value: "ANNOUNCEMENT_CANDIDATE",
                    type: "ZBHXRGS"
                }, {
                    label: "中标公示",
                    value: "ANNOUNCEMENT_WIN",
                    type: "ZBGS"
                }]
            }, {
                label: "发布时间",
                type: "releaseTime",
                children: [{
                    label: "不限",
                    value: ""
                }, {
                    label: "当天",
                    value: "THE_DAY"
                }, {
                    label: "近三天",
                    value: "LAST_THREE_DAYS"
                }, {
                    label: "近一周",
                    value: "NEARLY_A_WEEK"
                }, {
                    label: "近一月",
                    value: "NEARLY_A_MONTH"
                }]
            }]
        }, {
            name: "国土、矿权、产权",
            value: "GTGC",
            children: [{
                label: "信息类型",
                type: "informationType",
                children: [{
                    label: "出让公告",
                    value: "ANNOUNCEMENT",
                    type: "CRGG"
                }, {
                    label: "变更公告",
                    value: "ANNOUNCEMENT_CHANGE",
                    type: "CRGG"
                }, {
                    label: "中标公示",
                    value: "ANNOUNCEMENT_WIN",
                    type: "ZBGS"
                }]
            }, {
                label: "发布时间",
                type: "releaseTime",
                children: [{
                    label: "不限",
                    value: ""
                }, {
                    label: "当天",
                    value: "THE_DAY"
                }, {
                    label: "近三天",
                    value: "LAST_THREE_DAYS"
                }, {
                    label: "近一周",
                    value: "NEARLY_A_WEEK"
                }, {
                    label: "近一月",
                    value: "NEARLY_A_MONTH"
                }]
            }],
            componentName: "GTGC"
        }, {
            name: "工业项目",
            children: [{
                label: "信息类型",
                type: "informationType",
                children: [{
                    label: "资审/后审公告",
                    value: "ANNOUNCEMENT",
                    type: "ZBGG"
                }, {
                    label: "变更公告",
                    value: "ANNOUNCEMENT_CHANGE",
                    type: "ZBGG"
                }, {
                    label: "中标候选人公示",
                    value: "ANNOUNCEMENT_CANDIDATE",
                    type: "ZBHXRGS"
                }, {
                    label: "中标公示",
                    value: "ANNOUNCEMENT_WIN",
                    type: "ZBGS"
                }]
            }, {
                label: "发布时间",
                type: "releaseTime",
                children: [{
                    label: "不限",
                    value: ""
                }, {
                    label: "当天",
                    value: "THE_DAY"
                }, {
                    label: "近三天",
                    value: "LAST_THREE_DAYS"
                }, {
                    label: "近一周",
                    value: "NEARLY_A_WEEK"
                }, {
                    label: "近一月",
                    value: "NEARLY_A_MONTH"
                }]
            }],
            value: "GYXM",
            componentName: "SZFJ"
        }, {
            name: "阳光采购",
            children: [],
            value: "YGCG",
            componentName: "NEWS"
        }, {
            name: "金川集团公司交易信息",
            children: [],
            value: "JYXX",
            componentName: "NEWS"
        }, {
            name: "权益类项目",
            children: [],
            value: "QYXM",
            componentName: "QYXM"
        }]
          , c = a("283d")
          , u = a("b243")
          , d = a("5ab3");
        s = {
            components: {
                BaseSearch: s.a,
                BaseScrollbar: l.a,
                BaseEmpty: r.a
            },
            props: {
                params: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                isBid: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    centerApiNames: {
                        construction: c.f,
                        procurement: u.c
                    },
                    isOpenOptions: !0,
                    optionsHeight: "0",
                    options: o,
                    transactionFlag: !0,
                    queryPramas: {
                        searchValue: ""
                    },
                    verfiyPop: !1
                }
            },
            computed: {
                children: function() {
                    var e = this;
                    return this.options.find((function(t) {
                        return t.value === e.params.projectType
                    }
                    )).children || []
                },
                isMobile: function() {
                    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                }
            },
            watch: {
                "params.projectType": {
                    handler: function(e) {
                        var t = this.options.find((function(t) {
                            return t.value === e
                        }
                        ));
                        this.$emit("checkedName", t ? t.componentName : ""),
                        "ZFCG" !== e && "SZFJ" !== e && "GTGC" !== e || (this.params.pageNum = 1,
                        this.params.pageSize = 20,
                        this.params.releaseTime = "",
                        this.params.search = "",
                        this.params.informationType = "ANNOUNCEMENT",
                        this.params.departmentId = "",
                        this.getCenterList("ZFCG" === e ? "procurement" : "construction"))
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            mounted: function() {},
            methods: {
                getCenterList: function(e) {
                    var t = this;
                    return Object(i.a)(Object(n.a)().mark((function a() {
                        var i;
                        return Object(n.a)().wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.centerApiNames[e]();
                                case 2:
                                    i = a.sent,
                                    t.options.forEach((function(e) {
                                        e.children && e.children.length && e.children.forEach((function(e) {
                                            var a, n;
                                            "departmentId" === e.type && (a = i.data.map((function(e) {
                                                return {
                                                    label: e.deptName,
                                                    value: e.deptId
                                                }
                                            }
                                            )),
                                            n = e.children,
                                            e.children = t.mergeArray(n, a))
                                        }
                                        ))
                                    }
                                    )),
                                    t.$nextTick((function() {
                                        t.optionsHeight = t.$refs.options.scrollHeight + "px"
                                    }
                                    ));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                mergeArray: function(e, t) {
                    e = e.concat(t);
                    var a = {};
                    return e.reduce((function(e, t) {
                        return a[t.label] || (a[t.label] = !0,
                        e.push(t)),
                        e
                    }
                    ), [])
                },
                clickInput: function() {
                    this.$emit("searchInput", "INPUT")
                },
                toggleModel: function(e) {
                    this.params.projectType !== e.value && (this.params.projectType = e.value,
                    this.params.pageNum = 1,
                    this.$emit("search", "MODEL", e),
                    0 < e.children.length) && (this.params.informationName = e.children[0].children[0].type)
                },
                chooseValue: function(e, t) {
                    this.params[e.type] !== t.value && (this.params.pageNum = 1,
                    this.params.informationName = t.type,
                    this.params[e.type] = t.value,
                    this.$emit("search", "CONDITAION", t, e))
                },
                onSearchVerify: function() {
                    var e = this;
                    this.queryPramas.searchValue ? Object(d.a)().then((function() {
                        e.params.search = e.queryPramas.searchValue,
                        e.params.pageNum = 1
                    }
                    )).catch((function(e) {}
                    )) : (this.params.search = this.queryPramas.searchValue,
                    this.params.pageNum = 1)
                }
            }
        },
        a("307e"),
        l = a("2877"),
        r = Object(l.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "index-options"
            }, [a("div", {
                staticClass: "index-options_left"
            }, [e._m(0), a("div", {
                staticClass: "index-option-list"
            }, e._l(e.options, (function(t) {
                return a("div", {
                    key: t.value,
                    class: ["left-item", e.params.projectType === t.value && "checked-item"],
                    on: {
                        click: function(a) {
                            return e.toggleModel(t)
                        }
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.params.projectType === t.value,
                        expression: "params.projectType === option.value"
                    }],
                    staticClass: "select"
                }), e._v(" " + e._s(t.name) + " ")])
            }
            )), 0)]), e.children.length ? a("div", {
                staticClass: "index-options_right"
            }, [a("div", {
                staticClass: "header"
            }, [a("div", {
                ref: "options",
                staticClass: "options",
                style: {
                    height: e.isOpenOptions ? e.optionsHeight : "0"
                }
            }, e._l(e.children, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "index-options_item"
                }, [a("span", {
                    staticClass: "item-label"
                }, [e._v(e._s(t.label) + ":")]), a("div", {
                    staticClass: "item-types"
                }, e._l(t.children, (function(n, i) {
                    return a("div", {
                        key: n.value + i,
                        class: ["item-types_type", n.value === e.params[t.type] && "checked-item"],
                        on: {
                            click: function(a) {
                                return e.chooseValue(t, n)
                            }
                        }
                    }, [e._v(" " + e._s(n.label) + " ")])
                }
                )), 0)])
            }
            )), 0), a("div", {
                staticClass: "search"
            }, [a("el-input", {
                attrs: {
                    placeholder: "请输入公告标题/项目名称/项目编号"
                },
                model: {
                    value: e.queryPramas.searchValue,
                    callback: function(t) {
                        e.$set(e.queryPramas, "searchValue", t)
                    },
                    expression: "queryPramas.searchValue"
                }
            }), a("div", {
                staticClass: "icons",
                on: {
                    click: function(t) {
                        return e.onSearchVerify()
                    }
                }
            }, [a("i", {
                staticClass: "el-icon-search"
            })])], 1)]), e._t("default")], 2) : a("div", {
                staticClass: "index-options_right"
            }, [e._t("default")], 2), a("el-dialog", {
                attrs: {
                    visible: e.verfiyPop,
                    title: "安全验证",
                    width: "540px"
                },
                on: {
                    "update:visible": function(t) {
                        e.verfiyPop = t
                    }
                }
            }, [e.verfiyPop ? a("SlideVerify", {
                ref: "slideblock",
                on: {
                    success: e.sendSmsCode
                }
            }) : e._e()], 1)], 1)
        }
        ), [function() {
            var e = this.$createElement;
            return (e = this._self._c || e)("div", {
                staticClass: "transation"
            }, [e("span", {
                staticClass: "big"
            }, [this._v("交易信息")]), e("span", {
                staticClass: "small"
            }, [this._v("Trading Information")])])
        }
        ], !1, null, "41f9699f", null);
        t.default = r.exports
    },
    ae56: function(e, t, a) {
        a("0b6d")
    },
    aea9: function(e, t, a) {
        a.r(t);
        var n = a("c7eb")
          , i = a("1da1")
          , r = (a("caad"),
        a("a9e3"),
        a("2532"),
        a("b243"))
          , s = {
            props: {
                queryParams: {
                    type: Object,
                    default: function() {}
                },
                userId: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    value: !1,
                    showDialog: !1,
                    tableData: [],
                    bidSectionTable: [],
                    bidSectionId: [],
                    showSwitch: !0,
                    myFocusBO: {
                        projectId: null
                    },
                    allowFollow: !0,
                    showBidStatus: !0,
                    bidWay: [],
                    bidContent: [],
                    qualificationWay: [],
                    referenceFlag: !0,
                    total: 0,
                    informationArr: ["ANNOUNCEMENT_YS", "ANNOUNCEMENT_CANDIDATE", "ANNOUNCEMENT_WIN"]
                }
            },
            computed: {
                isCanBid: {
                    get: function() {
                        return "YES" === this.queryParams.onlyCanBidSectionFlag
                    },
                    set: function() {
                        this.queryParams.onlyCanBidSectionFlag = "NO" === this.queryParams.onlyCanBidSectionFlag ? "YES" : "NO"
                    }
                }
            },
            watch: {
                queryParams: {
                    handler: function() {
                        this.informationArr.includes(this.queryParams.informationType) && (this.queryParams.onlyCanBidSectionFlag = "NO"),
                        this.getList()
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                getDaySub: function(e) {
                    var t, a = (t = new Date).getFullYear(), n = t.getMonth() + 1;
                    return n < 10 && (n = "0" + n),
                    (t = t.getDate()) < 10 && (t = "0" + t),
                    (Date.parse(a + "-" + n + "-" + t) - Date.parse(e)) / 864e5
                },
                getList: function() {
                    var e = this;
                    return Object(i.a)(Object(n.a)().mark((function t() {
                        var a, i;
                        return Object(n.a)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(r.a)(e.queryParams);
                                case 2:
                                    if (0 < (a = t.sent).rows.length)
                                        for (i = 0; i < a.rows.length; i++)
                                            e.getDaySub(a.rows[i].releaseTime) <= 3 && (a.rows[i].isNew = !0);
                                    e.total = a.total || 0,
                                    e.tableData = a.rows || [],
                                    e.msg = a.msg;
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        };
        a("33a7"),
        a = a("2877"),
        a = Object(a.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "construction"
            }, [a("div", {
                staticClass: "list"
            }, e._l(e.tableData, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "list-item",
                    on: {
                        click: function(a) {
                            return e.$emit("clickRow", t)
                        }
                    }
                }, [a("div", {
                    staticClass: "list-item_text"
                }, [a("div", {
                    staticClass: "tags"
                }), a("div", {
                    staticClass: "cons"
                }, [e._v(" " + e._s(t.content) + " "), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "变更公告" == t.informationType,
                        expression: "item.informationType == '变更公告'"
                    }],
                    attrs: {
                        type: "warning"
                    }
                }, [e._v(" " + e._s(t.informationType) + " ")]), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNew,
                        expression: "item.isNew"
                    }]
                }, [e._v("NEW")])], 1)]), a("div", {
                    staticClass: "list-item_time"
                }, [e._v(e._s(t.releaseTime))])])
            }
            )), 0), a("div", {
                staticClass: "page"
            }, [a("pagination", {
                attrs: {
                    total: e.total,
                    page: e.queryParams.pageNum,
                    limit: e.queryParams.pageSize
                },
                on: {
                    "update:page": function(t) {
                        return e.$set(e.queryParams, "pageNum", t)
                    },
                    "update:limit": function(t) {
                        return e.$set(e.queryParams, "pageSize", t)
                    }
                }
            })], 1)])
        }
        ), [], !1, null, "7682db52", null);
        t.default = a.exports
    },
    b243: function(e, t, a) {
        a.d(t, "a", (function() {
            return i
        }
        )),
        a.d(t, "b", (function() {
            return r
        }
        )),
        a.d(t, "c", (function() {
            return s
        }
        ));
        var n = a("57ba");
        function i(e) {
            return Object(n.a)({
                url: "/procurement/webEncoder/bidder/bidSection/list",
                method: "post",
                data: e
            })
        }
        function r(e) {
            return Object(n.a)({
                url: "/procurement/webEncoder/bidder/bidSection/list",
                method: "post",
                data: e
            })
        }
        function s() {
            return Object(n.a)({
                url: "/procurement/webEncoder/bidder/bidSection/listTradingCenter",
                method: "post"
            })
        }
    },
    c8f7: function(e, t, a) {
        a.r(t);
        var n = a("c7eb")
          , i = a("1da1")
          , r = (a("caad"),
        a("a9e3"),
        a("2532"),
        a("283d"))
          , s = {
            props: {
                queryParams: {
                    type: Object,
                    default: function() {}
                },
                userId: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    value: !1,
                    showDialog: !1,
                    tableData: [],
                    bidSectionTable: [],
                    bidSectionId: [],
                    showSwitch: !0,
                    myFocusBO: {
                        projectId: null
                    },
                    allowFollow: !0,
                    showBidStatus: !0,
                    bidWay: [],
                    bidContent: [],
                    qualificationWay: [],
                    referenceFlag: !0,
                    total: 0,
                    informationArr: ["ANNOUNCEMENT_YS", "ANNOUNCEMENT_CANDIDATE", "ANNOUNCEMENT_WIN"]
                }
            },
            computed: {
                isCanBid: {
                    get: function() {
                        return "YES" === this.queryParams.onlyCanBidSectionFlag
                    },
                    set: function() {
                        this.queryParams.onlyCanBidSectionFlag = "NO" === this.queryParams.onlyCanBidSectionFlag ? "YES" : "NO"
                    }
                }
            },
            watch: {
                queryParams: {
                    handler: function() {
                        this.informationArr.includes(this.queryParams.informationType) && (this.queryParams.onlyCanBidSectionFlag = "NO"),
                        this.getList()
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                getDaySub: function(e) {
                    var t, a = (t = new Date).getFullYear(), n = t.getMonth() + 1;
                    return n < 10 && (n = "0" + n),
                    (t = t.getDate()) < 10 && (t = "0" + t),
                    (Date.parse(a + "-" + n + "-" + t) - Date.parse(e)) / 864e5
                },
                getList: function() {
                    var e = this;
                    return Object(i.a)(Object(n.a)().mark((function t() {
                        var a, i;
                        return Object(n.a)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(r.a)(e.queryParams);
                                case 2:
                                    if (0 < (a = t.sent).rows.length)
                                        for (i = 0; i < a.rows.length; i++)
                                            e.getDaySub(a.rows[i].releaseTime) <= 3 && (a.rows[i].isNew = !0);
                                    e.total = a.total || 0,
                                    e.tableData = a.rows || [],
                                    e.msg = a.msg;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        };
        a("ae56"),
        a = a("2877"),
        a = Object(a.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "construction"
            }, [a("div", {
                staticClass: "list"
            }, e._l(e.tableData, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "list-item",
                    on: {
                        click: function(a) {
                            return e.$emit("clickRow", t)
                        }
                    }
                }, [a("div", {
                    staticClass: "list-item_text"
                }, [a("div", {
                    staticClass: "tags"
                }), a("div", {
                    staticClass: "cons"
                }, [e._v(" " + e._s(t.content) + " "), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "变更公告" == t.informationType,
                        expression: "item.informationType == '变更公告'"
                    }],
                    attrs: {
                        type: "warning"
                    }
                }, [e._v(" " + e._s(t.informationType) + " ")]), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNew,
                        expression: "item.isNew"
                    }]
                }, [e._v("NEW")])], 1)]), a("div", {
                    staticClass: "list-item_time"
                }, [e._v(e._s(t.releaseTime))])])
            }
            )), 0), a("div", {
                staticClass: "page"
            }, [a("pagination", {
                attrs: {
                    total: e.total,
                    page: e.queryParams.pageNum,
                    limit: e.queryParams.pageSize
                },
                on: {
                    "update:page": function(t) {
                        return e.$set(e.queryParams, "pageNum", t)
                    },
                    "update:limit": function(t) {
                        return e.$set(e.queryParams, "pageSize", t)
                    }
                }
            })], 1)])
        }
        ), [], !1, null, "374adb84", null);
        t.default = a.exports
    },
    caee: function(e, t, a) {},
    d27a: function(e, t, a) {
        a.r(t);
        var n = a("c7eb")
          , i = a("1da1")
          , r = (a("caad"),
        a("a9e3"),
        a("2532"),
        a("0686"))
          , s = {
            props: {
                queryParams: {
                    type: Object,
                    default: function() {}
                },
                userId: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    value: !1,
                    showDialog: !1,
                    tableData: [],
                    bidSectionTable: [],
                    bidSectionId: [],
                    showSwitch: !0,
                    myFocusBO: {
                        projectId: null
                    },
                    allowFollow: !0,
                    showBidStatus: !0,
                    bidWay: [],
                    bidContent: [],
                    qualificationWay: [],
                    referenceFlag: !0,
                    total: 0,
                    informationArr: ["ANNOUNCEMENT_YS", "ANNOUNCEMENT_CANDIDATE", "ANNOUNCEMENT_WIN"]
                }
            },
            computed: {
                isCanBid: {
                    get: function() {
                        return "YES" === this.queryParams.onlyCanBidSectionFlag
                    },
                    set: function() {
                        this.queryParams.onlyCanBidSectionFlag = "NO" === this.queryParams.onlyCanBidSectionFlag ? "YES" : "NO"
                    }
                }
            },
            watch: {
                queryParams: {
                    handler: function() {
                        this.informationArr.includes(this.queryParams.informationType) && (this.queryParams.onlyCanBidSectionFlag = "NO"),
                        this.getList()
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                getDaySub: function(e) {
                    var t, a = (t = new Date).getFullYear(), n = t.getMonth() + 1;
                    return n < 10 && (n = "0" + n),
                    (t = t.getDate()) < 10 && (t = "0" + t),
                    (Date.parse(a + "-" + n + "-" + t) - Date.parse(e)) / 864e5
                },
                getList: function() {
                    var e = this;
                    return Object(i.a)(Object(n.a)().mark((function t() {
                        var a, i;
                        return Object(n.a)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(r.a)(e.queryParams);
                                case 2:
                                    if (0 < (a = t.sent).rows.length)
                                        for (i = 0; i < a.rows.length; i++)
                                            e.getDaySub(a.rows[i].releaseTime) <= 3 && (a.rows[i].isNew = !0);
                                    e.total = a.total || 0,
                                    e.tableData = a.rows || [],
                                    e.msg = a.msg;
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        };
        a("2625"),
        a = a("2877"),
        a = Object(a.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "construction"
            }, [a("div", {
                staticClass: "list"
            }, e._l(e.tableData, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "list-item",
                    on: {
                        click: function(a) {
                            return e.$emit("clickRow", t)
                        }
                    }
                }, [a("div", {
                    staticClass: "list-item_text"
                }, [a("div", {
                    staticClass: "tags"
                }), a("div", {
                    staticClass: "cons"
                }, [e._v(" " + e._s(t.content) + " "), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "变更公告" == t.informationType,
                        expression: "item.informationType == '变更公告'"
                    }],
                    attrs: {
                        type: "warning"
                    }
                }, [e._v(" " + e._s(t.informationType) + " ")]), a("el-tag", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNew,
                        expression: "item.isNew"
                    }]
                }, [e._v("NEW")])], 1)]), a("div", {
                    staticClass: "list-item_time"
                }, [e._v(e._s(t.releaseTime))])])
            }
            )), 0), a("div", {
                staticClass: "page"
            }, [a("pagination", {
                attrs: {
                    total: e.total,
                    page: e.queryParams.pageNum,
                    limit: e.queryParams.pageSize
                },
                on: {
                    "update:page": function(t) {
                        return e.$set(e.queryParams, "pageNum", t)
                    },
                    "update:limit": function(t) {
                        return e.$set(e.queryParams, "pageSize", t)
                    }
                }
            })], 1)])
        }
        ), [], !1, null, "1a1b3610", null);
        t.default = a.exports
    },
    db9a: function(e, t, a) {},
    eb9b: function(e, t, a) {}
}]);
