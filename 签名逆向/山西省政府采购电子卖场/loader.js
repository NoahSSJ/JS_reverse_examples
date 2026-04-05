


function f(t, i) {
    const n = [
    "mJC1mtaWm3PctNjxBG",
    "y29Uy2f0",
    "nZG4mJq2wLzJA1Pw",
    "mtHxEuLwyLK",
    "B3bXCNn0Dxz3Ea",
    "mdy4mtzHyMeZzq",
    "mZK5mte2mfLMu2vfDG",
    "ExOWmtiZndu2nW",
    "zwzNAgLQA2XTBG",
    "nZa3mJK3ng16rKHbua",
    "zNjVBunOyxjdBW",
    "nMm5y2qWzdG5za",
    "mte2ndqZmJv0rwDNEvy",
    "BgvUz3rO",
    "ytK5otnLmZy0nW",
    "odKRlW",
    "s0XntK9quvjtva",
    "qujdrevg",
    "ywjJzgvM",
    "mdeYmZq1nJC4oq",
    "qujdrevgr0HjsG",
    "mJq3nJGWnuzbAwDxsG",
    "mteYntK4mZjiuMXRzxq",
    "ywjJ",
    "mJu3mtC4ntbJmG",
    "mujTBgjmCW",
    "y2HHCKnVzgvbDa",
    "ngrmBurxsa",
    "y2HHCKf0",
    "vvzxwfLAywjJza"
]
    var r = n[t -= 154];
    void 0 === f.NsReJA && (f.WJgeSN = function (e) {
        for (var t, n, i = "", r = "", o = 0, a = 0; n = e.charAt(a++); ~n && (t = o % 4 ? 64 * t + n : n,
            o++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * o & 6)) : 0)
            n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);
        for (var s = 0, l = i.length; s < l; s++)
            r += "%" + ("00" + i.charCodeAt(s).toString(16)).slice(-2);
        return decodeURIComponent(r)
    }
        ,
        e = arguments,
        f.NsReJA = !0);
    var o = t + n[0]
        , a = e[o];
    return a ? r = a : (r = f.WJgeSN(r),
        e[o] = r),
        r
}

function a() {
    var e = ["y29Uy2f0", "nZG4mJq2wLzJA1Pw", "mtHxEuLwyLK", "B3bXCNn0Dxz3Ea", "mdy4mtzHyMeZzq", "mZK5mte2mfLMu2vfDG", "ExOWmtiZndu2nW", "zwzNAgLQA2XTBG", "nZa3mJK3ng16rKHbua", "zNjVBunOyxjdBW", "nMm5y2qWzdG5za", "mte2ndqZmJv0rwDNEvy", "BgvUz3rO", "ytK5otnLmZy0nW", "odKRlW", "s0XntK9quvjtva", "qujdrevg", "ywjJzgvM", "mdeYmZq1nJC4oq", "qujdrevgr0HjsG", "mJq3nJGWnuzbAwDxsG", "mteYntK4mZjiuMXRzxq", "ywjJ", "mJu3mtC4ntbJmG", "mujTBgjmCW", "y2HHCKnVzgvbDa", "ngrmBurxsa", "y2HHCKf0", "vvzxwfLAywjJza", "mJC1mtaWm3PctNjxBG"];
    return (a = function () {
        return e
    }
    )()
}
function s(e, t) {
    var n = f;
    e[t >> 5] |= 128 << 24 - t % 32,
        e[15 + (t + 64 >> 9 << 4)] = t;
    for (var i, r = Array(80), o = 1732584193, a = -271733879, s = -1732584194, d = 271733878, h = -1009589776, p = 0; p < e[n(167)]; p += 16) {
        for (var m = o, v = a, g = s, y = d, b = h, _ = 0; _ < 80; _++) {
            r[_] = _ < 16 ? e[p + _] : u(r[_ - 3] ^ r[_ - 8] ^ r[_ - 14] ^ r[_ - 16], 1);
            var w = c(c(u(o, 5), l(_, a, s, d)), c(c(h, r[_]), (i = _) < 20 ? 1518500249 : i < 40 ? 1859775393 : i < 60 ? -1894007588 : -899497514));
            h = d,
                d = s,
                s = u(a, 30),
                a = o,
                o = w
        }
        o = c(o, m),
            a = c(a, v),
            s = c(s, g),
            d = c(d, y),
            h = c(h, b)
    }
    return Array(o, a, s, d, h)
}
function l(e, t, n, i) {
    return e < 20 ? t & n | ~t & i : e < 40 ? t ^ n ^ i : e < 60 ? t & n | t & i | n & i : t ^ n ^ i
}
function c(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function u(e, t) {
    return e << t | e >>> 32 - t
}
function d(e) {
    for (var t = f, n = Array(), i = (1 << r) - 1, o = 0; o < e[t(167)] * r; o += r)
        n[o >> 5] |= (e[t(180)](o / r) & i) << 24 - o % 32;
    return n
}
function h(e) {
    for (var t = f, n = i ? t(173) + t(171) : t(173) + t(172), r = "", o = 0; o < 4 * e[t(167)]; o++)
        r += n[t(182)](e[o >> 2] >> 8 * (3 - o % 4) + 4 & 15) + n[t(182)](e[o >> 2] >> 8 * (3 - o % 4) & 15);
    return r
}

function w(e, t) {
    const n = _();
    return w = function (t, i) {
        let r = n[t -= 161];
        void 0 === w.hEWvPs && (w.LvEbrJ = function (e) {
            let t = ""
                , n = "";
            for (let i, r, o = 0, a = 0; r = e.charAt(a++); ~r && (i = o % 4 ? 64 * i + r : r,
                o++ % 4) ? t += String.fromCharCode(255 & i >> (-2 * o & 6)) : 0)
                r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
            for (let i = 0, r = t.length; i < r; i++)
                n += "%" + ("00" + t.charCodeAt(i).toString(16)).slice(-2);
            return decodeURIComponent(n)
        }
            ,
            e = arguments,
            w.hEWvPs = !0);
        const o = t + n[0]
            , a = e[o];
        return a ? r = a : (r = w.LvEbrJ(r),
            e[o] = r),
            r
    }
        ,
        w(e, t)
}
function sconfigTokenSign(e, t) {
    const x = e => v()(y.a[b(166)](e));
                        const n = b
                          , i = (new Date)['getTime']()
                          , r = x(p(i + "_" + String(e)['split']("?")[0] + ('_bosssoft_' +'platform_0' + '95285')))
                          , o = {};
                        if (o['time'] = i,
                        o['url'] = String(e)['split']("?")[0],
                        o['sign'] = r,
                        null != t && "" !== t) {
                            const r = x(p("" + t + String(e)['split']("?")[0] + i));
                            o['tokensign'] = r
                        }
                        return o
                    }






function get_sign() {
        let t = {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 300000,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "common": {
                "Accept": "application/json, text/plain, */*"
            },
            "delete": {},
            "get": {},
            "head": {},
            "post": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "put": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "patch": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "form-token": "9d0205c4201bf15687b089d84ba727d1",
            "webapp": "1",
            "sitecode": "sxzfcg",
            "siteguid": "6883226032309207040",
            "regioncode": "140001000",
            "regionguid": "140001"
        },
        "withCredentials": true,
        "url": "/gateway/gpmall-bpoc/notice/v1/ignore/getNoticeList",
        "method": "post",
        "data": {
            "regionGuid": "232",
            "regionCode": "140000000",
            "webApp": "1",
            "pageSize": 10,
            "pageNum": 3,
            "noticeType": "0"
        }
    }

    var v, g, y, b = (new Date).getTime(), _ = null !== (v = t.url) && void 0 !== v && v.includes('https://shanxisheng-zfcgdzmcgov.cn') ? t.url.replace('https://shanxisheng-zfcgdzmcgov.cn', "") : t.url;
    _ = (null === (y = _ = null !== (g = _) && void 0 !== g && g.includes("?") ? _.split("?")[0] : _) || void 0 === y ? void 0 : y.trim().substring(0, 100)) || "";
    var w = Object(c.h)("".concat(_, "$$").concat(b)) || "";
    t.headers = W(W({}, t.headers), {}, {
        nsssjss: w,
        timestamp: b.toString()
    }, s.configTokenSign(t.url || "", t.headers.access_token || ""))

}

get_sign()
