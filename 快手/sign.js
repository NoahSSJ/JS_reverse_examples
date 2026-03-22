
function hn(t) {
    return String.fromCharCode.apply(null, function(t) {
        var e = [];
        for (let n = 0; n < t.length; ++n)
            e.push(t.charCodeAt(n));
        return e
    }(t).map((function(t) {
        return 14 ^ t
    }
    )))
}

function hn(t) {
    return String.fromCharCode.apply(null, function(t) {
        var e = [];
        for (let n = 0; n < t.length; ++n)
            e.push(t.charCodeAt(n));
        return e
    }(t).map((function(t) {
        return 14 ^ t
    }
    )))
}

function encode(t) {
    try {
        for (; ; )
            throw new Error
    } catch (v) {
        var e, n;
        (40 ^ hn("<:")) % 23 < 3 && (e = v.stack.length),
        (67 ^ hn("<<")) % 31 > 21 && (n = hn("aldkmz") === (hn("{`jkhg`kj") == typeof window ? hn("{`jkhg`kj") : fn(window)) ? window : global),
        n && (n.SECS = {
            s: e > 100 ? v.stack.substr(e - 100, 100) : v.stack,
            c: this.cnt
        })
    }
    try {
        var r, i, o, a, s, u, c, l, h, f, d, p;
        for (r = Date.now(),
        i = "",
        u = function(t) {
            for (var e = Un(t), n = e.length % 4 == 0 ? 0 : 4 - e.length % 4, r = new Int8Array(e.length + n), i = 0; i < e.length; ++i)
                r[i] = e[i];
            var o = new Array(r.length / 4);
            for (i = 0; i < r.length; i += 4)
                o[i / 4] = new Int32Array(r.slice(i, i + 4).buffer)[0];
            return o
        }((o = pn(t)) + (s = (a = hn("aldkmz") === fn(this.guard) && this.guard.collectDeviceInfo() || "") && hn("F[J\\Q") + a || "")),
        c = Un(function(t) {
            var e = "";
            return t.forEach((function(t) {
                var n = (t >>> 0).toString(16)
                  , r = 8 - n.length;
                e += r > 0 ? "0" * r + n : n
            }
            )),
            e
        }(this.encoder.b2sFn(u))),
        l = Bn(Ln(Dn(Bn(this.encrypter.tmsFn(c)).substr(0, 8)), [45, 211, 69, 192])),
        i += hn(":L;:"); ; ) {
            i += Rn(43469, 0, 2);
            break
        }
        if (i += hn("ol"),
        h = this.startupRandom || 100,
        f = this.cnt++,
        i += Rn(h, 0, 6),
        i += Rn(Math.floor(0xffffffffffff * Math.random()), 0, 6),
        i += hn(">?>>>>>>>>"),
        i += Rn(3131873467 ^ f, 0, 4),
        i += l,
        (20 ^ hn("<6")) % 33 > 4 && (i += Rn(function(t, e) {
            var n = t.toString(2)
              , r = e.toString(2)
              , i = Math.max(n.length, r.length)
              , o = ("0".repeat(i - n.length) + n).split("")
              , a = ("0".repeat(i - r.length) + r).split("")
              , s = o.map((function(t, e) {
                return "0" === t && "0" === a[e] ? "0" : "0" === t && "1" === a[e] || "1" === t && "0" === a[e] ? "1" : "0"
            }
            )).join("");
            return parseInt(s, 2)
        }(Date.now(), 3360347992), 0, 6)),
        d = Bn(Ln(Dn(hn("k>>>>>>>>>>>>>")), [123, 86, 62, 218])),
        (54 ^ hn("<8")) % 19 > 4 && (i += d),
        p = s + hn("*FKQ") + (i = function(t, e) {
            for (var n = Dn(t + e), r = n.length, i = new Int8Array(r), o = n[r - 1], a = 0; a < r - 1; a++)
                i[a] = 255 & (n[a] ^ o);
            return i[a] = o,
            Bn(i)
        }(i += jn(d), jn(i))),
        (53 ^ hn("<9")) % 19 > 3)
            return {
                signRes: p,
                signInput: o,
                error: "",
                report: {
                    projectInfo: t.projectInfo || {},
                    name: hn("fvhQkxk`z"),
                    duration: Date.now() - r,
                    value: {
                        init: this.initCost,
                        input: o,
                        res: p
                    },
                    log: {
                        url: t.url || "",
                        caver: this.caver,
                        sdkver: this.sdkver,
                        kpn: t.projectInfo ? t.projectInfo.kpn : "",
                        kpf: t.projectInfo ? t.projectInfo.kpf : ""
                    }
                }
            }
    } catch (y) {
        for (var g; (37 ^ hn("<?")) % 6 > -3; ) {
            g = {
                projectInfo: t.projectInfo,
                name: hn("k||Qkxk`z"),
                value: {
                    msg: y && y.message
                }
            };
            break
        }
        for (; ; )
            return {
                signRes: "",
                signInput: "",
                error: y.message,
                report: g
            }
    }
}

function p(t, e, n, r) {
    return new (n || (n = Promise))((function(i, o) {
        function a(t) {
            try {
                u(r.next(t))
            } catch (e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(r.throw(t))
            } catch (e) {
                o(e)
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value,
            e instanceof n ? e : new n((function(t) {
                t(e)
            }
            ))).then(a, s)
        }
        u((r = r.apply(t, e || [])).next())
    }
    ))
}


function g(t, e) {
    var n, r, i, o = {
        label: 0,
        sent: function() {
            if (1 & i[0])
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = s(0),
    a.throw = s(1),
    a.return = s(2),
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }
    ),
    a;
    function s(s) {
        return function(u) {
            return function(s) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; a && (a = 0,
                s[0] && (o = 0)),
                o; )
                    try {
                        if (n = 1,
                        r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, s[1])).done)
                            return i;
                        switch (r = 0,
                        i && (s = [2 & s[0], i.value]),
                        s[0]) {
                        case 0:
                        case 1:
                            i = s;
                            break;
                        case 4:
                            return o.label++,
                            {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            o.label++,
                            r = s[1],
                            s = [0];
                            continue;
                        case 7:
                            s = o.ops.pop(),
                            o.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                o.label = s[1];
                                break
                            }
                            if (6 === s[0] && o.label < i[1]) {
                                o.label = i[1],
                                i = s;
                                break
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2],
                                o.ops.push(s);
                                break
                            }
                            i[2] && o.ops.pop(),
                            o.trys.pop();
                            continue
                        }
                        s = e.call(t, o)
                    } catch (u) {
                        s = [6, u],
                        r = 0
                    } finally {
                        n = i = 0
                    }
                if (5 & s[0])
                    throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }([s, u])
        }
    }
}


function Kn(t) {
    return p(this, void 0, void 0, (function() {
        return g(this, (function(e) {
            return [2, new Promise((function(e, n) {
                encode([t, {
                    suc: function(t, n) {
                        "staging" === un().env && console.log("sig4 suc", {
                            signResult: t,
                            signInput: n
                        }),
                        sn({
                            name: "sig4 suc",
                            extra_info: {
                                signResult: t,
                                signInput: n
                            }
                        }),
                        e({
                            signResult: t,
                            signInput: n
                        })
                    },
                    err: function(t) {
                        sn({
                            name: "sig4 err",
                            extra_info: {
                                error: t
                            }
                        }),
                        n(t)
                    }
                }])
            }
            ))]
        }
        ))
    }
    ))
}

(async () => {
    const t = {
        url: "/rest/c/infra/ks/qr/scanResult",
        query: { caver: 2 },
        form: {
            qrLoginToken: "mg-oc4Zhx1vonlWs",
            qrLoginSignature: "Zq5GaVVzcc",
            channelType: "UNKNOWN",
            isWebSig4: true
        },
        requestBody: {},
        projectInfo: {
            appKey: "q5yq4bjUut",
            radarId: "0abb8037ac"
        }
    };

    const result = await Kn(t);
    console.log(result);
    // 或者更清晰：
    console.log("签名结果:", result.signResult);
    console.log("输入参数:", result.signInput);
})();