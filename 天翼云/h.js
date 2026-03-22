require("./loader")




const be = window.xxx("3779")
const ve = (window.xxx("4917"),
        window.xxx("3b2b"),
        window.xxx("9c29"),
        window.xxx("34ef"),
        Uint8Array)
const params = {
    "referrer": "wap"
}

let qe = 1;
ke = Uint32Array
we = Math.pow
ye = new ke(8)
Ie = []
De = new ke(64);
        function Ce(e) {
            return (e - (0 | e)) * we(2, 32) | 0
        }
        var xe = 2
          , Pe = 0;
        while (Pe < 64) {
            for (var Oe = !0, Re = 2; Re <= xe / 2; Re++)
                xe % Re === 0 && (Oe = !1);
            Oe && (Pe < 8 && (ye[Pe] = Ce(we(xe, .5))),
            Ie[Pe] = Ce(we(xe, 1 / 3)),
            Pe++),
            xe++
        }
        var Se = !!new ve(new ke([1]).buffer)[0];
        function Ae(e) {
            return Se ? e >>> 24 | (e >>> 16 & 255) << 8 | (65280 & e) << 8 | e << 24 : e
        }
        function je(e, n) {
            return e >>> n | e << 32 - n
        }
        function Be(e) {
            var n, t = ye.slice(), r = e.length, a = 8 * r, o = 512 - (a + 64) % 512 - 1 + a + 65, i = new ve(o / 8), c = new ke(i.buffer);
            i.set(e, 0),
            i[r] = 128,
            c[c.length - 1] = Ae(a);
            for (var u = 0; u < o / 32; u += 16) {
                var d = t.slice();
                for (n = 0; n < 64; n++) {
                    var s;
                    if (n < 16)
                        s = Ae(c[u + n]);
                    else {
                        var l = De[n - 15]
                          , p = De[n - 2];
                        s = De[n - 7] + De[n - 16] + (je(l, 7) ^ je(l, 18) ^ l >>> 3) + (je(p, 17) ^ je(p, 19) ^ p >>> 10)
                    }
                    De[n] = s |= 0;
                    for (var f = (je(d[4], 6) ^ je(d[4], 11) ^ je(d[4], 25)) + (d[4] & d[5] ^ ~d[4] & d[6]) + d[7] + s + Ie[n], h = (je(d[0], 2) ^ je(d[0], 13) ^ je(d[0], 22)) + (d[0] & d[1] ^ d[2] & (d[0] ^ d[1])), m = 7; m > 0; m--)
                        d[m] = d[m - 1];
                    d[0] = f + h | 0,
                    d[4] = d[4] + f | 0
                }
                for (n = 0; n < 8; n++)
                    t[n] = t[n] + d[n] | 0
            }
            return new ve(new ke(t.map((function(e) {
                return Ae(e)
            }
            ))).buffer)
        }
        function Le(e, n) {
            if (e.length > 64 && (e = Be(e)),
            e.length < 64) {
                var t = new Uint8Array(64);
                t.set(e, 0),
                e = t
            }
            for (var r = new Uint8Array(64), a = new Uint8Array(64), o = 0; o < 64; o++)
                r[o] = 54 ^ e[o],
                a[o] = 92 ^ e[o];
            var i = new Uint8Array(n.length + 64);
            i.set(r, 0),
            i.set(n, 64);
            var c = new Uint8Array(96);
            return c.set(a, 0),
            c.set(Be(i), 64),
            Be(c)
        }
var Ee = new TextEncoder("utf-8");
function Le(e, n) {
            if (e.length > 64 && (e = Be(e)),
            e.length < 64) {
                var t = new Uint8Array(64);
                t.set(e, 0),
                e = t
            }
            for (var r = new Uint8Array(64), a = new Uint8Array(64), o = 0; o < 64; o++)
                r[o] = 54 ^ e[o],
                a[o] = 92 ^ e[o];
            var i = new Uint8Array(n.length + 64);
            i.set(r, 0),
            i.set(n, 64);
            var c = new Uint8Array(96);
            return c.set(a, 0),
            c.set(Be(i), 64),
            Be(c)
        }
function Te(e, n) {
            var t = "string" === typeof e ? Ee.encode(e) : e
              , r = "string" === typeof n ? Ee.encode(n) : n;
            return Le(t, r)
        }
        function Me(e) {
            return e.reduce((function(e, n) {
                return e + ("00" + n.toString(16)).substr(-2)
            }
            ), "")
        }

var _e = {
            sign: Te,
            hex: Me
        }

function Fe(e, n) {
            var t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)");
            n = n || ("object" === ("undefined" === typeof document ? "undefined" : Object(c["a"])(document)) && document.cookie || "");
            var r = n.match(t);
            return r && r[2] ? unescape(r[2]) : ""
        }
function He(e) {
            var n = (new Date).getTimezoneOffset()
              , t = (new Date).getTime()
              , r = new Date(t + 60 * n * 1e3 + 60 * e * 60 * 1e3)
              , a = r.getTime();
            return a
        }

function Ue(e) {
    var n = He(8)
        , t = Fe("ct_ss")
        , r = "";
    if (e) {
        if ("?" === e.charAt(e.length - 1)) {
            var a = /\/([^\\/?]+)(?=\?|$)/
                , o = e.match(a);
            if (!(o && o.length > 1))
                return console.log("所传的URL不符合规范" + "url: ".concat(e)),
                {
                    sign: "errorUrl",
                    time: n
                };
            r = o[1]
        } else {
            var i = /\/([^\\/?]+)(\?[\s\S]*)?$/
                , c = e.match(i);
            if (!(c && c.length > 1))
                return console.log("所传的URL不符合规范" + "url: ".concat(e)),
                {
                    sign: "errorUrl",
                    time: n
                };
            r = c[1] + (c[2] ? c[2] : "")
        }
        r = decodeURI(r).replace(/\s/g, "");
        var u = "".concat(r, ":").concat(n, ":").concat(t)
            , d = _e.hex(_e.sign(t, u));
        return {
            sign: d,
            time: n
        }
    }
    console.log("未传url参数")
}
function get_headers(params) {

    const n = "wap";

    // 假设 headers 是函数内要返回/修改的对象
    const headers = {};   // ← 如果原来没有定义，就在这里创建

    params = Object.assign(params || {}, {
        referrer: n
    });

    headers["x-riskdevicesign"] = "da03b9140102db21261cb4df0cf9d28f";

    try {
        var t = Ue("account/login");
        headers["Csm"] = t.sign;
        headers["Cst"] = String(t.time);
    } catch (r) {
        console.info("sign error", r);
    }

    seq = qe,
        //    be["a"].observerCgi("beforeSend", e),
    qe++,
    console.log(headers);
    return headers;
}


get_headers()