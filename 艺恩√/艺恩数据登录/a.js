window = global;
const CryptoJS = require("crypto-js");
require("./mod1")
const mobile = "13987561341";
const password = "1424345234Asdf";

!function(e) {
    function t(t) {
        for (var a, n, c = t[0], o = t[1], b = t[2], u = 0, l = []; u < c.length; u++)
            n = c[u],
            f[n] && l.push(f[n][0]),
            f[n] = 0;
        for (a in o)
            Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        for (i && i(t); l.length; )
            l.shift()();
        return d.push.apply(d, b || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < d.length; t++) {
            for (var r = d[t], a = !0, n = 1; n < r.length; n++) {
                var o = r[n];
                0 !== f[o] && (a = !1)
            }
            a && (d.splice(t--, 1),
            e = c(c.s = r[0]))
        }
        return e
    }
    var a = {}
      , n = {
        3: 0
    }
      , f = {
        3: 0
    }
      , d = [];
    function c(t) {
        if (a[t])
            return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        console.log("加载的模块为:", t);
        return e[t].call(r.exports, r, r.exports, c),
        r.l = !0,
        r.exports
    }
    window.xxx = c;
    c.e = function(e) {
        var t = [];
        n[e] ? t.push(n[e]) : 0 !== n[e] && {
            0: 1,
            5: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            13: 1,
            14: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            21: 1,
            22: 1,
            24: 1,
            25: 1,
            26: 1,
            29: 1,
            30: 1,
            31: 1,
            32: 1,
            33: 1,
            35: 1,
            37: 1,
            39: 1,
            40: 1,
            41: 1,
            42: 1,
            43: 1,
            44: 1,
            47: 1,
            48: 1,
            51: 1
        }[e] && t.push(n[e] = new Promise(function(t, r) {
            for (var a = "2603121744/css/" + e + ".b9b5048098bbf8d751fc.css", f = c.p + a, d = document.getElementsByTagName("link"), o = 0; o < d.length; o++) {
                var b = (i = d[o]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (b === a || b === f))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (o = 0; o < u.length; o++) {
                var i;
                if ((b = (i = u[o]).getAttribute("data-href")) === a || b === f)
                    return t()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet",
            l.type = "text/css",
            l.onload = t,
            l.onerror = function(t) {
                var a = t && t.target && t.target.src || f
                  , d = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED",
                d.request = a,
                delete n[e],
                l.parentNode.removeChild(l),
                r(d)
            }
            ,
            l.href = f,
            document.getElementsByTagName("head")[0].appendChild(l)
        }
        ).then(function() {
            n[e] = 0
        }));
        var r = f[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var a = new Promise(function(t, a) {
                    r = f[e] = [t, a]
                }
                );
                t.push(r[2] = a);
                var d, o = document.createElement("script");
                o.charset = "utf-8",
                o.timeout = 120,
                c.nc && o.setAttribute("nonce", c.nc),
                o.src = function(e) {
                    return c.p + "2603121744/js/" + ({
                        0: "common"
                    }[e] || e) + "." + {
                        0: "74e006a3c196c9a92af9",
                        5: "75b2c2240da01902b3f8",
                        6: "5bf3d578f4d3ce0eac68",
                        7: "bb711a260716c49cf33d",
                        8: "30cbb7a31796d03aac5f",
                        9: "12f3b7aacc74def56f56",
                        10: "22ad550c1be305735ce8",
                        11: "0558773b95fe350b2313",
                        12: "e6f028a0a2c811c06830",
                        13: "6c7947a1484cba07978f",
                        14: "637d5564543d7800977a",
                        15: "4e253c361d55313980f4",
                        16: "f78a77ed507057d2b92e",
                        17: "a72db97685bb529bf21c",
                        18: "99af51b9b89e82a2098f",
                        19: "a023b8a42091bc4f0e49",
                        20: "e61b88de15af7fc5c5e8",
                        21: "999b1d0e852a269777e0",
                        22: "35807f20479cb08a8176",
                        23: "1ae857a1826a2a365b3c",
                        24: "1bde111ac29e4fa98310",
                        25: "89bf87cf0f739300f9db",
                        26: "46466b09dae9d97c561f",
                        27: "b8800e4d48d474943d61",
                        28: "ec487e8bec2d5d60d9a4",
                        29: "c256623a8dd8deb2ca2f",
                        30: "0831248eaf8ead15e54c",
                        31: "824beaadc1b8f931525d",
                        32: "1bda94eb3eb1d0dafdb4",
                        33: "94094abd5d65b5b98ed8",
                        34: "2c95a4a5db951e85886e",
                        35: "ee517e99b0f74d8ac14b",
                        36: "6db6e885277597b3d5bb",
                        37: "a01f5627b3e064bf6901",
                        38: "c6ff234403cb5d51e34f",
                        39: "13866f6bed4dfe47f2f5",
                        40: "7a503733d2173787f7f6",
                        41: "189731f42e90987d53f2",
                        42: "d6d6924143518ee61d82",
                        43: "e3675d2ae9d681f785f4",
                        44: "0f3bc644b330a412e4e7",
                        45: "16f1f931b4ee124f0e07",
                        46: "1e715d178512a3ea1b7f",
                        47: "46b2a6d007565383cc24",
                        48: "bfa03b19c7eb9ec49194",
                        49: "ccd3e7f75a7818507166",
                        50: "c50600da84a2f70755fd",
                        51: "7c0d642905b3eebbe58a",
                        52: "1612f44cd6d60cbf7013",
                        53: "709bd14636f1e4f6e099",
                        54: "0be272b24d5e8ab8e6d3",
                        55: "8109e3482de54a7a76d5",
                        56: "eb73e106751d36afd205",
                        57: "63f0891c6cd3516dd474"
                    }[e] + ".chunk.js"
                }(e),
                d = function(t) {
                    o.onerror = o.onload = null,
                    clearTimeout(b);
                    var r = f[e];
                    if (0 !== r) {
                        if (r) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                              , n = t && t.target && t.target.src
                              , d = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + n + ")");
                            d.type = a,
                            d.request = n,
                            r[1](d)
                        }
                        f[e] = void 0
                    }
                }
                ;
                var b = setTimeout(function() {
                    d({
                        type: "timeout",
                        target: o
                    })
                }, 12e4);
                o.onerror = o.onload = d,
                document.head.appendChild(o)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = a,
    c.d = function(e, t, r) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (c.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                c.d(r, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return r
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/_fxbg/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var o = window.webpackJsonp = window.webpackJsonp || []
      , b = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var u = 0; u < o.length; u++)
        t(o[u]);
    var i = b;
    r()
}([]);

const r = window.xxx("5528abce7df04bca3ae1");
const o = window.xxx("b0e2c11e7167c0d6c9ee").utf8;
const a = window.xxx("c0796af954cf2478a450");
const i = window.xxx("b0e2c11e7167c0d6c9ee").bin;
function ednGetter() {
    window.D = 1;
    return "number" !== typeof window.D ? +String(Date.now()).substr(0, 10) : +String(Date.now()).substr(0, 10) + window.D
}

function ne(n, e) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(n), CryptoJS.enc.Utf8.parse(e.substr(0, 32)), {
        iv: CryptoJS.enc.Utf8.parse(e.substr(-16)),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString().toUpperCase()
}
function cc(e, t) {

    e.constructor == String ? e = t && "binary" === t.encoding ? i.stringToBytes(e) : o.stringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    for (var n = r.bytesToWords(e), l = 8 * e.length, u = 1732584193, s = -271733879, f = -1732584194, d = 271733878, b = 0; b < n.length; b++)
        n[b] = 16711935 & (n[b] << 8 | n[b] >>> 24) | 4278255360 & (n[b] << 24 | n[b] >>> 8);
    n[l >>> 5] |= 128 << l % 32,
    n[14 + (l + 64 >>> 9 << 4)] = l;
    var p = c._ff
        , m = c._gg
        , v = c._hh
        , h = c._ii;
    for (b = 0; b < n.length; b += 16) {
        var g = u
            , y = s
            , O = f
            , j = d;
        u = p(u, s, f, d, n[b + 0], 7, -680876936),
        d = p(d, u, s, f, n[b + 1], 12, -389564586),
        f = p(f, d, u, s, n[b + 2], 17, 606105819),
        s = p(s, f, d, u, n[b + 3], 22, -1044525330),
        u = p(u, s, f, d, n[b + 4], 7, -176418897),
        d = p(d, u, s, f, n[b + 5], 12, 1200080426),
        f = p(f, d, u, s, n[b + 6], 17, -1473231341),
        s = p(s, f, d, u, n[b + 7], 22, -45705983),
        u = p(u, s, f, d, n[b + 8], 7, 1770035416),
        d = p(d, u, s, f, n[b + 9], 12, -1958414417),
        f = p(f, d, u, s, n[b + 10], 17, -42063),
        s = p(s, f, d, u, n[b + 11], 22, -1990404162),
        u = p(u, s, f, d, n[b + 12], 7, 1804603682),
        d = p(d, u, s, f, n[b + 13], 12, -40341101),
        f = p(f, d, u, s, n[b + 14], 17, -1502002290),
        u = m(u, s = p(s, f, d, u, n[b + 15], 22, 1236535329), f, d, n[b + 1], 5, -165796510),
        d = m(d, u, s, f, n[b + 6], 9, -1069501632),
        f = m(f, d, u, s, n[b + 11], 14, 643717713),
        s = m(s, f, d, u, n[b + 0], 20, -373897302),
        u = m(u, s, f, d, n[b + 5], 5, -701558691),
        d = m(d, u, s, f, n[b + 10], 9, 38016083),
        f = m(f, d, u, s, n[b + 15], 14, -660478335),
        s = m(s, f, d, u, n[b + 4], 20, -405537848),
        u = m(u, s, f, d, n[b + 9], 5, 568446438),
        d = m(d, u, s, f, n[b + 14], 9, -1019803690),
        f = m(f, d, u, s, n[b + 3], 14, -187363961),
        s = m(s, f, d, u, n[b + 8], 20, 1163531501),
        u = m(u, s, f, d, n[b + 13], 5, -1444681467),
        d = m(d, u, s, f, n[b + 2], 9, -51403784),
        f = m(f, d, u, s, n[b + 7], 14, 1735328473),
        u = v(u, s = m(s, f, d, u, n[b + 12], 20, -1926607734), f, d, n[b + 5], 4, -378558),
        d = v(d, u, s, f, n[b + 8], 11, -2022574463),
        f = v(f, d, u, s, n[b + 11], 16, 1839030562),
        s = v(s, f, d, u, n[b + 14], 23, -35309556),
        u = v(u, s, f, d, n[b + 1], 4, -1530992060),
        d = v(d, u, s, f, n[b + 4], 11, 1272893353),
        f = v(f, d, u, s, n[b + 7], 16, -155497632),
        s = v(s, f, d, u, n[b + 10], 23, -1094730640),
        u = v(u, s, f, d, n[b + 13], 4, 681279174),
        d = v(d, u, s, f, n[b + 0], 11, -358537222),
        f = v(f, d, u, s, n[b + 3], 16, -722521979),
        s = v(s, f, d, u, n[b + 6], 23, 76029189),
        u = v(u, s, f, d, n[b + 9], 4, -640364487),
        d = v(d, u, s, f, n[b + 12], 11, -421815835),
        f = v(f, d, u, s, n[b + 15], 16, 530742520),
        u = h(u, s = v(s, f, d, u, n[b + 2], 23, -995338651), f, d, n[b + 0], 6, -198630844),
        d = h(d, u, s, f, n[b + 7], 10, 1126891415),
        f = h(f, d, u, s, n[b + 14], 15, -1416354905),
        s = h(s, f, d, u, n[b + 5], 21, -57434055),
        u = h(u, s, f, d, n[b + 12], 6, 1700485571),
        d = h(d, u, s, f, n[b + 3], 10, -1894986606),
        f = h(f, d, u, s, n[b + 10], 15, -1051523),
        s = h(s, f, d, u, n[b + 1], 21, -2054922799),
        u = h(u, s, f, d, n[b + 8], 6, 1873313359),
        d = h(d, u, s, f, n[b + 15], 10, -30611744),
        f = h(f, d, u, s, n[b + 6], 15, -1560198380),
        s = h(s, f, d, u, n[b + 13], 21, 1309151649),
        u = h(u, s, f, d, n[b + 4], 6, -145523070),
        d = h(d, u, s, f, n[b + 11], 10, -1120210379),
        f = h(f, d, u, s, n[b + 2], 15, 718787259),
        s = h(s, f, d, u, n[b + 9], 21, -343485551),
        u = u + g >>> 0,
        s = s + y >>> 0,
        f = f + O >>> 0,
        d = d + j >>> 0
    }
    return r.endian([u, s, f, d])
}
function f(e, t) {
            // if (void 0 === e || null === e)
            //     throw new Error("Illegal argument " + e);
            var n = r.wordsToBytes(cc(e, t));
            return t && t.asBytes ? n : t && t.asString ? i.bytesToString(n) : r.bytesToHex(n)
        }


const l = ne("".concat(ednGetter()).concat(password), f()("".concat(mobile.slice(3)).concat(ednGetter())));
console.log(l);
