const CryptoJS = require("crypto-js");
const pako = require("pako");  // npm install pako

// Yt 直接返回 CryptoJS（网站里就是这个）
function Yt() {
    return CryptoJS;
}

// 路径 base64 前16位
const api = "/api/futures/home/statistics";
let s = Buffer.from(api).toString("base64");
s = s.substring(0, 16);

// IccPO 原样保留
function IccPO(t, e, n) {
    return t(e, n);
}

// ne、Xt 原样保留（虽然没用到，但保持你的结构）
function ne() {
    var t = ["W5afWQu", "e8kIW6pcPmkJ", /* ... 你的超长数组 ... */];
    return (ne = function() {
        return t;
    })();
}

function Xt(t, e) {
    var n = ne();
    return Kt = function(e, r) {
        var i = n[e -= 359];
        if (void 0 === Kt.BULyjP) {
            Kt.mNMYQe = function(t, e) {
                var n, r, i = [], o = 0, a = "";
                for (t = function(t) {
                    for (var e, n, r = "", i = "", o = 0, a = 0; n = t.charAt(a++); ~n && (e = o % 4 ? 64 * e + n : n,
                    o++ % 4) ? r += String.fromCharCode(255 & e >> (-2 * o & 6)) : 0)
                        n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);
                    for (var s = 0, u = r.length; s < u; s++)
                        i += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
                    return decodeURIComponent(i);
                }(t), r = 0; r < 256; r++)
                    i[r] = r;
                for (r = 0; r < 256; r++)
                    o = (o + i[r] + e.charCodeAt(r % e.length)) % 256,
                    n = i[r],
                    i[r] = i[o],
                    i[o] = n;
                r = 0, o = 0;
                for (var s = 0; s < t.length; s++)
                    o = (o + i[r = (r + 1) % 256]) % 256,
                    n = i[r],
                    i[r] = i[o],
                    i[o] = n,
                    a += String.fromCharCode(t.charCodeAt(s) ^ i[(i[r] + i[o]) % 256]);
                return a;
            },
            t = arguments,
            Kt.BULyjP = !0;
        }
        var o = e + n[0],
            a = t[o];
        return a ? i = a : (void 0 === Kt.aBSVME && (Kt.aBSVME = !0),
        i = Kt.mNMYQe(i, r),
        t[o] = i),
        i;
    },
    Kt(t, e);
}

// Jt 函数（必须有，因为 Qt 里调用了它）
function Jt(t) {
    if (typeof t !== 'string') return t;
    let a = t;
    if (a.charAt(0) === '"') {
        a = a.substring(1);
    }
    if (a.charAt(a.length - 1) === '"') {
        a = a.substring(0, a.length - 1);
    }
    return a;
}

// Qt 函数完全按照你原版（只改了 Yt 调用方式）
function Qt(t, e) {
    for (var n = Xt, r = {
        QkOfM: "4|0|3|1|2",
        NZgfO: function(t, e) {
            return Jt(e);
        },
        jSHfm: function(t, e) {
            return t - e;
        }
    }, i = r['QkOfM'].split("|"), o = 0; ; ) {
        switch (i[o++]) {
        case "0":
            var a = r.NZgfO(Jt, s);
            continue;
        case "1":
            '"' == a.charAt(r['jSHfm'](a.length, 1)) && (a = a['substring'](0, r.jSHfm(a['length'], 1)));
            continue;
        case "2":
            return a;
        case "3":
            '"' == a['charAt'](0) && (a = a['substring'](1, a[n(444, "y0L[")]));
            continue;
        case "4":
            var s = Yt()['AES'].decrypt(t, Yt().enc['Utf8']['parse'](e), {
                mode: Yt()['mode']['ECB'],
                padding: Yt()['pad']['Pkcs7']
            })['toString'](Yt()['enc']['Hex']);
            continue;
        }
        break;
    }
}

// 执行第一层：解密 user → 得到 gzip hex
const user = "kZwCAaBV9FedmhTGXg0TPt5eCPrVekGFZbtSR4etg8JLK9oxcEc3WXj2P0qTm+BU";
s = IccPO(Qt, user, s);
console.log("第一层解密结果（gzip hex）:", s);

// 解 gzip → 得到真实 key
const gzipBytes = Buffer.from(s, 'hex');
const realKey = pako.ungzip(gzipBytes, { to: 'string' });
console.log("真实密钥:", realKey);

// 执行第二层：用真实 key 解密 data → 得到第二层 hex
const data = "TNwhr7nC0val2HZgU9PINwGX2O0dvnbLxXFnfgwA4fMVfap9R5Kbga7Jmt4e6YSrgGF3Unbu1NlvDCiid3MukmyOK/QReb095sKtSuvkBwwDXcLSDrIb0jMyjhYEgkL6jBRrmPkKy0Jk1XHRQT0ATrQsl2n9QEqGsbV/S09A92+bxGTBDC7SaCSKtOvlr99lErTvguCwbnFEhMzuXzidBanZS9I4ZieqFdbcRB5Fwbw=";
const o = Qt(data, realKey);
console.log("第二层解密结果（hex）:", o);

// 解第二层 gzip → 得到最终明文
const finalBytes = Buffer.from(o, 'hex');
const finalPlain = pako.ungzip(finalBytes, { to: 'string' });
console.log("\n最终明文（前 500 字符）：");
console.log(finalPlain.slice(0, 500));

// 尝试解析 JSON
const json = JSON.parse(finalPlain);
console.log("\nJSON 解析成功！键名：", Object.keys(json));