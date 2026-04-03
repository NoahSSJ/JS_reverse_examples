(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5327], {
    62777: function(t, e, r) {
        "use strict";
        var s = r(67294);
        var n = "function" === typeof Object.is ? Object.is : function(t, e) {
            return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
        }
          , i = s.useState
          , u = s.useEffect
          , o = s.useLayoutEffect
          , a = s.useDebugValue;
        function c(t) {
            var e = t.getSnapshot;
            t = t.value;
            try {
                var r = e();
                return !n(t, r)
            } catch (s) {
                return !0
            }
        }
        var h = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
            return e()
        }
        : function(t, e) {
            var r = e()
              , s = i({
                inst: {
                    value: r,
                    getSnapshot: e
                }
            })
              , n = s[0].inst
              , h = s[1];
            return o((function() {
                n.value = r,
                n.getSnapshot = e,
                c(n) && h({
                    inst: n
                })
            }
            ), [t, r, e]),
            u((function() {
                return c(n) && h({
                    inst: n
                }),
                t((function() {
                    c(n) && h({
                        inst: n
                    })
                }
                ))
            }
            ), [t]),
            a(r),
            r
        }
        ;
        e.useSyncExternalStore = void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : h
    },
    55080: function(t, e, r) {
        "use strict";
        t.exports = r(62777)
    },
    83454: function(t, e, r) {
        "use strict";
        var s, n;
        t.exports = (null == (s = r.g.process) ? void 0 : s.env) && "object" === typeof (null == (n = r.g.process) ? void 0 : n.env) ? r.g.process : r(77663)
    },
    77663: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, r, s = t.exports = {};
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function i() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function u(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === n || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (s) {
                            try {
                                return e.call(null, t, 0)
                            } catch (s) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" === typeof setTimeout ? setTimeout : n
                        } catch (t) {
                            e = n
                        }
                        try {
                            r = "function" === typeof clearTimeout ? clearTimeout : i
                        } catch (t) {
                            r = i
                        }
                    }();
                    var o, a = [], c = !1, h = -1;
                    function l() {
                        c && o && (c = !1,
                        o.length ? a = o.concat(a) : h = -1,
                        a.length && f())
                    }
                    function f() {
                        if (!c) {
                            var t = u(l);
                            c = !0;
                            for (var e = a.length; e; ) {
                                for (o = a,
                                a = []; ++h < e; )
                                    o && o[h].run();
                                h = -1,
                                e = a.length
                            }
                            o = null,
                            c = !1,
                            function(t) {
                                if (r === clearTimeout)
                                    return clearTimeout(t);
                                if ((r === i || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    r(t)
                                } catch (e) {
                                    try {
                                        return r.call(null, t)
                                    } catch (e) {
                                        return r.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function d(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function p() {}
                    s.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                e[r - 1] = arguments[r];
                        a.push(new d(t,e)),
                        1 !== a.length || c || u(f)
                    }
                    ,
                    d.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    s.title = "browser",
                    s.browser = !0,
                    s.env = {},
                    s.argv = [],
                    s.version = "",
                    s.versions = {},
                    s.on = p,
                    s.addListener = p,
                    s.once = p,
                    s.off = p,
                    s.removeListener = p,
                    s.removeAllListeners = p,
                    s.emit = p,
                    s.prependListener = p,
                    s.prependOnceListener = p,
                    s.listeners = function(t) {
                        return []
                    }
                    ,
                    s.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    s.cwd = function() {
                        return "/"
                    }
                    ,
                    s.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    s.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function s(t) {
                var n = r[t];
                if (void 0 !== n)
                    return n.exports;
                var i = r[t] = {
                    exports: {}
                }
                  , u = !0;
                try {
                    e[t](i, i.exports, s),
                    u = !1
                } finally {
                    u && delete r[t]
                }
                return i.exports
            }
            s.ab = "//";
            var n = s(229);
            t.exports = n
        }()
    },
    94786: function(t, e, r) {
        "use strict";
        r.d(e, {
            V8: function() {
                return s
            }
        });
        class s {
            constructor() {
                this._dataLength = 0,
                this._bufferLength = 0,
                this._state = new Int32Array(4),
                this._buffer = new ArrayBuffer(68),
                this._buffer8 = new Uint8Array(this._buffer,0,68),
                this._buffer32 = new Uint32Array(this._buffer,0,17),
                this.start()
            }
            static hashStr(t, e=!1) {
                return this.onePassHasher.start().appendStr(t).end(e)
            }
            static hashAsciiStr(t, e=!1) {
                return this.onePassHasher.start().appendAsciiStr(t).end(e)
            }
            static _hex(t) {
                const e = s.hexChars
                  , r = s.hexOut;
                let n, i, u, o;
                for (o = 0; o < 4; o += 1)
                    for (i = 8 * o,
                    n = t[o],
                    u = 0; u < 8; u += 2)
                        r[i + 1 + u] = e.charAt(15 & n),
                        n >>>= 4,
                        r[i + 0 + u] = e.charAt(15 & n),
                        n >>>= 4;
                return r.join("")
            }
            static _md5cycle(t, e) {
                let r = t[0]
                  , s = t[1]
                  , n = t[2]
                  , i = t[3];
                r += (s & n | ~s & i) + e[0] - 680876936 | 0,
                r = (r << 7 | r >>> 25) + s | 0,
                i += (r & s | ~r & n) + e[1] - 389564586 | 0,
                i = (i << 12 | i >>> 20) + r | 0,
                n += (i & r | ~i & s) + e[2] + 606105819 | 0,
                n = (n << 17 | n >>> 15) + i | 0,
                s += (n & i | ~n & r) + e[3] - 1044525330 | 0,
                s = (s << 22 | s >>> 10) + n | 0,
                r += (s & n | ~s & i) + e[4] - 176418897 | 0,
                r = (r << 7 | r >>> 25) + s | 0,
                i += (r & s | ~r & n) + e[5] + 1200080426 | 0,
                i = (i << 12 | i >>> 20) + r | 0,
                n += (i & r | ~i & s) + e[6] - 1473231341 | 0,
                n = (n << 17 | n >>> 15) + i | 0,
                s += (n & i | ~n & r) + e[7] - 45705983 | 0,
                s = (s << 22 | s >>> 10) + n | 0,
                r += (s & n | ~s & i) + e[8] + 1770035416 | 0,
                r = (r << 7 | r >>> 25) + s | 0,
                i += (r & s | ~r & n) + e[9] - 1958414417 | 0,
                i = (i << 12 | i >>> 20) + r | 0,
                n += (i & r | ~i & s) + e[10] - 42063 | 0,
                n = (n << 17 | n >>> 15) + i | 0,
                s += (n & i | ~n & r) + e[11] - 1990404162 | 0,
                s = (s << 22 | s >>> 10) + n | 0,
                r += (s & n | ~s & i) + e[12] + 1804603682 | 0,
                r = (r << 7 | r >>> 25) + s | 0,
                i += (r & s | ~r & n) + e[13] - 40341101 | 0,
                i = (i << 12 | i >>> 20) + r | 0,
                n += (i & r | ~i & s) + e[14] - 1502002290 | 0,
                n = (n << 17 | n >>> 15) + i | 0,
                s += (n & i | ~n & r) + e[15] + 1236535329 | 0,
                s = (s << 22 | s >>> 10) + n | 0,
                r += (s & i | n & ~i) + e[1] - 165796510 | 0,
                r = (r << 5 | r >>> 27) + s | 0,
                i += (r & n | s & ~n) + e[6] - 1069501632 | 0,
                i = (i << 9 | i >>> 23) + r | 0,
                n += (i & s | r & ~s) + e[11] + 643717713 | 0,
                n = (n << 14 | n >>> 18) + i | 0,
                s += (n & r | i & ~r) + e[0] - 373897302 | 0,
                s = (s << 20 | s >>> 12) + n | 0,
                r += (s & i | n & ~i) + e[5] - 701558691 | 0,
                r = (r << 5 | r >>> 27) + s | 0,
                i += (r & n | s & ~n) + e[10] + 38016083 | 0,
                i = (i << 9 | i >>> 23) + r | 0,
                n += (i & s | r & ~s) + e[15] - 660478335 | 0,
                n = (n << 14 | n >>> 18) + i | 0,
                s += (n & r | i & ~r) + e[4] - 405537848 | 0,
                s = (s << 20 | s >>> 12) + n | 0,
                r += (s & i | n & ~i) + e[9] + 568446438 | 0,
                r = (r << 5 | r >>> 27) + s | 0,
                i += (r & n | s & ~n) + e[14] - 1019803690 | 0,
                i = (i << 9 | i >>> 23) + r | 0,
                n += (i & s | r & ~s) + e[3] - 187363961 | 0,
                n = (n << 14 | n >>> 18) + i | 0,
                s += (n & r | i & ~r) + e[8] + 1163531501 | 0,
                s = (s << 20 | s >>> 12) + n | 0,
                r += (s & i | n & ~i) + e[13] - 1444681467 | 0,
                r = (r << 5 | r >>> 27) + s | 0,
                i += (r & n | s & ~n) + e[2] - 51403784 | 0,
                i = (i << 9 | i >>> 23) + r | 0,
                n += (i & s | r & ~s) + e[7] + 1735328473 | 0,
                n = (n << 14 | n >>> 18) + i | 0,
                s += (n & r | i & ~r) + e[12] - 1926607734 | 0,
                s = (s << 20 | s >>> 12) + n | 0,
                r += (s ^ n ^ i) + e[5] - 378558 | 0,
                r = (r << 4 | r >>> 28) + s | 0,
                i += (r ^ s ^ n) + e[8] - 2022574463 | 0,
                i = (i << 11 | i >>> 21) + r | 0,
                n += (i ^ r ^ s) + e[11] + 1839030562 | 0,
                n = (n << 16 | n >>> 16) + i | 0,
                s += (n ^ i ^ r) + e[14] - 35309556 | 0,
                s = (s << 23 | s >>> 9) + n | 0,
                r += (s ^ n ^ i) + e[1] - 1530992060 | 0,
                r = (r << 4 | r >>> 28) + s | 0,
                i += (r ^ s ^ n) + e[4] + 1272893353 | 0,
                i = (i << 11 | i >>> 21) + r | 0,
                n += (i ^ r ^ s) + e[7] - 155497632 | 0,
                n = (n << 16 | n >>> 16) + i | 0,
                s += (n ^ i ^ r) + e[10] - 1094730640 | 0,
                s = (s << 23 | s >>> 9) + n | 0,
                r += (s ^ n ^ i) + e[13] + 681279174 | 0,
                r = (r << 4 | r >>> 28) + s | 0,
                i += (r ^ s ^ n) + e[0] - 358537222 | 0,
                i = (i << 11 | i >>> 21) + r | 0,
                n += (i ^ r ^ s) + e[3] - 722521979 | 0,
                n = (n << 16 | n >>> 16) + i | 0,
                s += (n ^ i ^ r) + e[6] + 76029189 | 0,
                s = (s << 23 | s >>> 9) + n | 0,
                r += (s ^ n ^ i) + e[9] - 640364487 | 0,
                r = (r << 4 | r >>> 28) + s | 0,
                i += (r ^ s ^ n) + e[12] - 421815835 | 0,
                i = (i << 11 | i >>> 21) + r | 0,
                n += (i ^ r ^ s) + e[15] + 530742520 | 0,
                n = (n << 16 | n >>> 16) + i | 0,
                s += (n ^ i ^ r) + e[2] - 995338651 | 0,
                s = (s << 23 | s >>> 9) + n | 0,
                r += (n ^ (s | ~i)) + e[0] - 198630844 | 0,
                r = (r << 6 | r >>> 26) + s | 0,
                i += (s ^ (r | ~n)) + e[7] + 1126891415 | 0,
                i = (i << 10 | i >>> 22) + r | 0,
                n += (r ^ (i | ~s)) + e[14] - 1416354905 | 0,
                n = (n << 15 | n >>> 17) + i | 0,
                s += (i ^ (n | ~r)) + e[5] - 57434055 | 0,
                s = (s << 21 | s >>> 11) + n | 0,
                r += (n ^ (s | ~i)) + e[12] + 1700485571 | 0,
                r = (r << 6 | r >>> 26) + s | 0,
                i += (s ^ (r | ~n)) + e[3] - 1894986606 | 0,
                i = (i << 10 | i >>> 22) + r | 0,
                n += (r ^ (i | ~s)) + e[10] - 1051523 | 0,
                n = (n << 15 | n >>> 17) + i | 0,
                s += (i ^ (n | ~r)) + e[1] - 2054922799 | 0,
                s = (s << 21 | s >>> 11) + n | 0,
                r += (n ^ (s | ~i)) + e[8] + 1873313359 | 0,
                r = (r << 6 | r >>> 26) + s | 0,
                i += (s ^ (r | ~n)) + e[15] - 30611744 | 0,
                i = (i << 10 | i >>> 22) + r | 0,
                n += (r ^ (i | ~s)) + e[6] - 1560198380 | 0,
                n = (n << 15 | n >>> 17) + i | 0,
                s += (i ^ (n | ~r)) + e[13] + 1309151649 | 0,
                s = (s << 21 | s >>> 11) + n | 0,
                r += (n ^ (s | ~i)) + e[4] - 145523070 | 0,
                r = (r << 6 | r >>> 26) + s | 0,
                i += (s ^ (r | ~n)) + e[11] - 1120210379 | 0,
                i = (i << 10 | i >>> 22) + r | 0,
                n += (r ^ (i | ~s)) + e[2] + 718787259 | 0,
                n = (n << 15 | n >>> 17) + i | 0,
                s += (i ^ (n | ~r)) + e[9] - 343485551 | 0,
                s = (s << 21 | s >>> 11) + n | 0,
                t[0] = r + t[0] | 0,
                t[1] = s + t[1] | 0,
                t[2] = n + t[2] | 0,
                t[3] = i + t[3] | 0
            }
            start() {
                return this._dataLength = 0,
                this._bufferLength = 0,
                this._state.set(s.stateIdentity),
                this
            }
            appendStr(t) {
                const e = this._buffer8
                  , r = this._buffer32;
                let n, i, u = this._bufferLength;
                for (i = 0; i < t.length; i += 1) {
                    if (n = t.charCodeAt(i),
                    n < 128)
                        e[u++] = n;
                    else if (n < 2048)
                        e[u++] = 192 + (n >>> 6),
                        e[u++] = 63 & n | 128;
                    else if (n < 55296 || n > 56319)
                        e[u++] = 224 + (n >>> 12),
                        e[u++] = n >>> 6 & 63 | 128,
                        e[u++] = 63 & n | 128;
                    else {
                        if (n = 1024 * (n - 55296) + (t.charCodeAt(++i) - 56320) + 65536,
                        n > 1114111)
                            throw new Error("Unicode standard supports code points up to U+10FFFF");
                        e[u++] = 240 + (n >>> 18),
                        e[u++] = n >>> 12 & 63 | 128,
                        e[u++] = n >>> 6 & 63 | 128,
                        e[u++] = 63 & n | 128
                    }
                    u >= 64 && (this._dataLength += 64,
                    s._md5cycle(this._state, r),
                    u -= 64,
                    r[0] = r[16])
                }
                return this._bufferLength = u,
                this
            }
            appendAsciiStr(t) {
                const e = this._buffer8
                  , r = this._buffer32;
                let n, i = this._bufferLength, u = 0;
                for (; ; ) {
                    for (n = Math.min(t.length - u, 64 - i); n--; )
                        e[i++] = t.charCodeAt(u++);
                    if (i < 64)
                        break;
                    this._dataLength += 64,
                    s._md5cycle(this._state, r),
                    i = 0
                }
                return this._bufferLength = i,
                this
            }
            appendByteArray(t) {
                const e = this._buffer8
                  , r = this._buffer32;
                let n, i = this._bufferLength, u = 0;
                for (; ; ) {
                    for (n = Math.min(t.length - u, 64 - i); n--; )
                        e[i++] = t[u++];
                    if (i < 64)
                        break;
                    this._dataLength += 64,
                    s._md5cycle(this._state, r),
                    i = 0
                }
                return this._bufferLength = i,
                this
            }
            getState() {
                const t = this._state;
                return {
                    buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
                    buflen: this._bufferLength,
                    length: this._dataLength,
                    state: [t[0], t[1], t[2], t[3]]
                }
            }
            setState(t) {
                const e = t.buffer
                  , r = t.state
                  , s = this._state;
                let n;
                for (this._dataLength = t.length,
                this._bufferLength = t.buflen,
                s[0] = r[0],
                s[1] = r[1],
                s[2] = r[2],
                s[3] = r[3],
                n = 0; n < e.length; n += 1)
                    this._buffer8[n] = e.charCodeAt(n)
            }
            end(t=!1) {
                const e = this._bufferLength
                  , r = this._buffer8
                  , n = this._buffer32
                  , i = 1 + (e >> 2);
                this._dataLength += e;
                const u = 8 * this._dataLength;
                if (r[e] = 128,
                r[e + 1] = r[e + 2] = r[e + 3] = 0,
                n.set(s.buffer32Identity.subarray(i), i),
                e > 55 && (s._md5cycle(this._state, n),
                n.set(s.buffer32Identity)),
                u <= 4294967295)
                    n[14] = u;
                else {
                    const t = u.toString(16).match(/(.*?)(.{0,8})$/);
                    if (null === t)
                        return;
                    const e = parseInt(t[2], 16)
                      , r = parseInt(t[1], 16) || 0;
                    n[14] = e,
                    n[15] = r
                }
                return s._md5cycle(this._state, n),
                t ? this._state : s._hex(this._state)
            }
        }
        if (s.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
        s.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        s.hexChars = "0123456789abcdef",
        s.hexOut = [],
        s.onePassHasher = new s,
        "5d41402abc4b2a76b9719d911017c592" !== s.hashStr("hello"))
            throw new Error("Md5 self test failed.")
    },
    67848: function(t, e, r) {
        "use strict";
        r.d(e, {
            a: function() {
                return S
            }
        });
        var s = r(32161)
          , n = r(30081)
          , i = r(15761)
          , u = r(33989)
          , o = r(72379);
        class a extends u.l {
            constructor(t, e) {
                super(),
                this.client = t,
                this.options = e,
                this.trackedProps = new Set,
                this.selectError = null,
                this.bindMethods(),
                this.setOptions(e)
            }
            bindMethods() {
                this.remove = this.remove.bind(this),
                this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
                1 === this.listeners.size && (this.currentQuery.addObserver(this),
                c(this.currentQuery, this.options) && this.executeFetch(),
                this.updateTimers())
            }
            onUnsubscribe() {
                this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
                return h(this.currentQuery, this.options, this.options.refetchOnReconnect)
            }
            shouldFetchOnWindowFocus() {
                return h(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
            }
            destroy() {
                this.listeners = new Set,
                this.clearStaleTimeout(),
                this.clearRefetchInterval(),
                this.currentQuery.removeObserver(this)
            }
            setOptions(t, e) {
                const r = this.options
                  , n = this.currentQuery;
                if (this.options = this.client.defaultQueryOptions(t),
                (0,
                s.VS)(r, this.options) || this.client.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.currentQuery,
                    observer: this
                }),
                "undefined" !== typeof this.options.enabled && "boolean" !== typeof this.options.enabled)
                    throw new Error("Expected enabled to be a boolean");
                this.options.queryKey || (this.options.queryKey = r.queryKey),
                this.updateQuery();
                const i = this.hasListeners();
                i && l(this.currentQuery, n, this.options, r) && this.executeFetch(),
                this.updateResult(e),
                !i || this.currentQuery === n && this.options.enabled === r.enabled && this.options.staleTime === r.staleTime || this.updateStaleTimeout();
                const u = this.computeRefetchInterval();
                !i || this.currentQuery === n && this.options.enabled === r.enabled && u === this.currentRefetchInterval || this.updateRefetchInterval(u)
            }
            getOptimisticResult(t) {
                const e = this.client.getQueryCache().build(this.client, t)
                  , r = this.createResult(e, t);
                return function(t, e, r) {
                    if (r.keepPreviousData)
                        return !1;
                    if (void 0 !== r.placeholderData)
                        return e.isPlaceholderData;
                    if (!(0,
                    s.VS)(t.getCurrentResult(), e))
                        return !0;
                    return !1
                }(this, r, t) && (this.currentResult = r,
                this.currentResultOptions = this.options,
                this.currentResultState = this.currentQuery.state),
                r
            }
            getCurrentResult() {
                return this.currentResult
            }
            trackResult(t) {
                const e = {};
                return Object.keys(t).forEach((r => {
                    Object.defineProperty(e, r, {
                        configurable: !1,
                        enumerable: !0,
                        get: () => (this.trackedProps.add(r),
                        t[r])
                    })
                }
                )),
                e
            }
            getCurrentQuery() {
                return this.currentQuery
            }
            remove() {
                this.client.getQueryCache().remove(this.currentQuery)
            }
            refetch({refetchPage: t, ...e}={}) {
                return this.fetch({
                    ...e,
                    meta: {
                        refetchPage: t
                    }
                })
            }
            fetchOptimistic(t) {
                const e = this.client.defaultQueryOptions(t)
                  , r = this.client.getQueryCache().build(this.client, e);
                return r.isFetchingOptimistic = !0,
                r.fetch().then(( () => this.createResult(r, e)))
            }
            fetch(t) {
                var e;
                return this.executeFetch({
                    ...t,
                    cancelRefetch: null == (e = t.cancelRefetch) || e
                }).then(( () => (this.updateResult(),
                this.currentResult)))
            }
            executeFetch(t) {
                this.updateQuery();
                let e = this.currentQuery.fetch(this.options, t);
                return null != t && t.throwOnError || (e = e.catch(s.ZT)),
                e
            }
            updateStaleTimeout() {
                if (this.clearStaleTimeout(),
                s.sk || this.currentResult.isStale || !(0,
                s.PN)(this.options.staleTime))
                    return;
                const t = (0,
                s.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                this.staleTimeoutId = setTimeout(( () => {
                    this.currentResult.isStale || this.updateResult()
                }
                ), t)
            }
            computeRefetchInterval() {
                var t;
                return "function" === typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
            }
            updateRefetchInterval(t) {
                this.clearRefetchInterval(),
                this.currentRefetchInterval = t,
                !s.sk && !1 !== this.options.enabled && (0,
                s.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(( () => {
                    (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.executeFetch()
                }
                ), this.currentRefetchInterval))
            }
            updateTimers() {
                this.updateStaleTimeout(),
                this.updateRefetchInterval(this.computeRefetchInterval())
            }
            clearStaleTimeout() {
                this.staleTimeoutId && (clearTimeout(this.staleTimeoutId),
                this.staleTimeoutId = void 0)
            }
            clearRefetchInterval() {
                this.refetchIntervalId && (clearInterval(this.refetchIntervalId),
                this.refetchIntervalId = void 0)
            }
            createResult(t, e) {
                const r = this.currentQuery
                  , n = this.options
                  , i = this.currentResult
                  , u = this.currentResultState
                  , a = this.currentResultOptions
                  , h = t !== r
                  , d = h ? t.state : this.currentQueryInitialState
                  , p = h ? this.currentResult : this.previousQueryResult
                  , {state: y} = t;
                let b, {dataUpdatedAt: v, error: m, errorUpdatedAt: g, fetchStatus: R, status: S} = y, _ = !1, E = !1;
                if (e._optimisticResults) {
                    const s = this.hasListeners()
                      , i = !s && c(t, e)
                      , u = s && l(t, r, e, n);
                    (i || u) && (R = (0,
                    o.Kw)(t.options.networkMode) ? "fetching" : "paused",
                    v || (S = "loading")),
                    "isRestoring" === e._optimisticResults && (R = "idle")
                }
                if (e.keepPreviousData && !y.dataUpdatedAt && null != p && p.isSuccess && "error" !== S)
                    b = p.data,
                    v = p.dataUpdatedAt,
                    S = p.status,
                    _ = !0;
                else if (e.select && "undefined" !== typeof y.data)
                    if (i && y.data === (null == u ? void 0 : u.data) && e.select === this.selectFn)
                        b = this.selectResult;
                    else
                        try {
                            this.selectFn = e.select,
                            b = e.select(y.data),
                            b = (0,
                            s.oE)(null == i ? void 0 : i.data, b, e),
                            this.selectResult = b,
                            this.selectError = null
                        } catch (C) {
                            0,
                            this.selectError = C
                        }
                else
                    b = y.data;
                if ("undefined" !== typeof e.placeholderData && "undefined" === typeof b && "loading" === S) {
                    let t;
                    if (null != i && i.isPlaceholderData && e.placeholderData === (null == a ? void 0 : a.placeholderData))
                        t = i.data;
                    else if (t = "function" === typeof e.placeholderData ? e.placeholderData() : e.placeholderData,
                    e.select && "undefined" !== typeof t)
                        try {
                            t = e.select(t),
                            this.selectError = null
                        } catch (C) {
                            0,
                            this.selectError = C
                        }
                    "undefined" !== typeof t && (S = "success",
                    b = (0,
                    s.oE)(null == i ? void 0 : i.data, t, e),
                    E = !0)
                }
                this.selectError && (m = this.selectError,
                b = this.selectResult,
                g = Date.now(),
                S = "error");
                const w = "fetching" === R
                  , I = "loading" === S
                  , T = "error" === S;
                return {
                    status: S,
                    fetchStatus: R,
                    isLoading: I,
                    isSuccess: "success" === S,
                    isError: T,
                    isInitialLoading: I && w,
                    data: b,
                    dataUpdatedAt: v,
                    error: m,
                    errorUpdatedAt: g,
                    failureCount: y.fetchFailureCount,
                    failureReason: y.fetchFailureReason,
                    errorUpdateCount: y.errorUpdateCount,
                    isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                    isFetchedAfterMount: y.dataUpdateCount > d.dataUpdateCount || y.errorUpdateCount > d.errorUpdateCount,
                    isFetching: w,
                    isRefetching: w && !I,
                    isLoadingError: T && 0 === y.dataUpdatedAt,
                    isPaused: "paused" === R,
                    isPlaceholderData: E,
                    isPreviousData: _,
                    isRefetchError: T && 0 !== y.dataUpdatedAt,
                    isStale: f(t, e),
                    refetch: this.refetch,
                    remove: this.remove
                }
            }
            updateResult(t) {
                const e = this.currentResult
                  , r = this.createResult(this.currentQuery, this.options);
                if (this.currentResultState = this.currentQuery.state,
                this.currentResultOptions = this.options,
                (0,
                s.VS)(r, e))
                    return;
                this.currentResult = r;
                const n = {
                    cache: !0
                };
                !1 !== (null == t ? void 0 : t.listeners) && ( () => {
                    if (!e)
                        return !0;
                    const {notifyOnChangeProps: t} = this.options
                      , r = "function" === typeof t ? t() : t;
                    if ("all" === r || !r && !this.trackedProps.size)
                        return !0;
                    const s = new Set(null != r ? r : this.trackedProps);
                    return this.options.useErrorBoundary && s.add("error"),
                    Object.keys(this.currentResult).some((t => {
                        const r = t;
                        return this.currentResult[r] !== e[r] && s.has(r)
                    }
                    ))
                }
                )() && (n.listeners = !0),
                this.notify({
                    ...n,
                    ...t
                })
            }
            updateQuery() {
                const t = this.client.getQueryCache().build(this.client, this.options);
                if (t === this.currentQuery)
                    return;
                const e = this.currentQuery;
                this.currentQuery = t,
                this.currentQueryInitialState = t.state,
                this.previousQueryResult = this.currentResult,
                this.hasListeners() && (null == e || e.removeObserver(this),
                t.addObserver(this))
            }
            onQueryUpdate(t) {
                const e = {};
                "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0,
                o.DV)(t.error) || (e.onError = !0),
                this.updateResult(e),
                this.hasListeners() && this.updateTimers()
            }
            notify(t) {
                n.V.batch(( () => {
                    var e, r, s, n;
                    if (t.onSuccess)
                        null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data),
                        null == (s = (n = this.options).onSettled) || s.call(n, this.currentResult.data, null);
                    else if (t.onError) {
                        var i, u, o, a;
                        null == (i = (u = this.options).onError) || i.call(u, this.currentResult.error),
                        null == (o = (a = this.options).onSettled) || o.call(a, void 0, this.currentResult.error)
                    }
                    t.listeners && this.listeners.forEach(( ({listener: t}) => {
                        t(this.currentResult)
                    }
                    )),
                    t.cache && this.client.getQueryCache().notify({
                        query: this.currentQuery,
                        type: "observerResultsUpdated"
                    })
                }
                ))
            }
        }
        function c(t, e) {
            return function(t, e) {
                return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount)
            }(t, e) || t.state.dataUpdatedAt > 0 && h(t, e, e.refetchOnMount)
        }
        function h(t, e, r) {
            if (!1 !== e.enabled) {
                const s = "function" === typeof r ? r(t) : r;
                return "always" === s || !1 !== s && f(t, e)
            }
            return !1
        }
        function l(t, e, r, s) {
            return !1 !== r.enabled && (t !== e || !1 === s.enabled) && (!r.suspense || "error" !== t.state.status) && f(t, r)
        }
        function f(t, e) {
            return t.isStaleByTime(e.staleTime)
        }
        var d = r(67294)
          , p = r(464);
        function y() {
            let t = !1;
            return {
                clearReset: () => {
                    t = !1
                }
                ,
                reset: () => {
                    t = !0
                }
                ,
                isReset: () => t
            }
        }
        const b = d.createContext(y());
        var v = r(85945);
        const m = d.createContext(!1);
        m.Provider;
        var g = r(24798);
        function R(t, e) {
            const r = (0,
            v.NL)({
                context: t.context
            })
              , s = d.useContext(m)
              , i = d.useContext(b)
              , u = r.defaultQueryOptions(t);
            u._optimisticResults = s ? "isRestoring" : "optimistic",
            u.onError && (u.onError = n.V.batchCalls(u.onError)),
            u.onSuccess && (u.onSuccess = n.V.batchCalls(u.onSuccess)),
            u.onSettled && (u.onSettled = n.V.batchCalls(u.onSettled)),
            (t => {
                t.suspense && ("number" !== typeof t.staleTime && (t.staleTime = 1e3),
                "number" === typeof t.cacheTime && (t.cacheTime = Math.max(t.cacheTime, 1e3)))
            }
            )(u),
            ( (t, e) => {
                (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1))
            }
            )(u, i),
            (t => {
                d.useEffect(( () => {
                    t.clearReset()
                }
                ), [t])
            }
            )(i);
            const [o] = d.useState(( () => new e(r,u)))
              , a = o.getOptimisticResult(u);
            if ((0,
            p.$)(d.useCallback((t => {
                const e = s ? () => {}
                : o.subscribe(n.V.batchCalls(t));
                return o.updateResult(),
                e
            }
            ), [o, s]), ( () => o.getCurrentResult()), ( () => o.getCurrentResult())),
            d.useEffect(( () => {
                o.setOptions(u, {
                    listeners: !1
                })
            }
            ), [u, o]),
            ( (t, e, r) => (null == t ? void 0 : t.suspense) && ( (t, e) => t.isLoading && t.isFetching && !e)(e, r))(u, a, s))
                throw ( (t, e, r) => e.fetchOptimistic(t).then(( ({data: e}) => {
                    null == t.onSuccess || t.onSuccess(e),
                    null == t.onSettled || t.onSettled(e, null)
                }
                )).catch((e => {
                    r.clearReset(),
                    null == t.onError || t.onError(e),
                    null == t.onSettled || t.onSettled(void 0, e)
                }
                )))(u, o, i);
            if (( ({result: t, errorResetBoundary: e, useErrorBoundary: r, query: s}) => t.isError && !e.isReset() && !t.isFetching && (0,
            g.L)(r, [t.error, s]))({
                result: a,
                errorResetBoundary: i,
                useErrorBoundary: u.useErrorBoundary,
                query: o.getCurrentQuery()
            }))
                throw a.error;
            return u.notifyOnChangeProps ? a : o.trackResult(a)
        }
        function S(t, e, r) {
            return R((0,
            s._v)(t, e, r), a)
        }
    },
    464: function(t, e, r) {
        "use strict";
        r.d(e, {
            $: function() {
                return s
            }
        });
        const s = r(55080).useSyncExternalStore
    },
    24798: function(t, e, r) {
        "use strict";
        function s(t, e) {
            return "function" === typeof t ? t(...e) : !!t
        }
        r.d(e, {
            L: function() {
                return s
            }
        })
    }
}]);
