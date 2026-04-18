// main.js  Python 可直接调用版（同步执行）
window = globalThis;
require("./loader.js");
require("./mod1.js");
require("./mod2.js");

function S(e) {
    return e && e.__esModule ? e : { default: e }
}

const c = S(window.xxx(27));
const l = S(window.xxx(53));
const o = S(window.xxx(166));
const r = S(window.xxx(40));
const f = S(window.xxx(431));

function toBase36(e) {
    var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9, b = e, n = ""; 0 != b; ) {
        var o = b % 36, l = b / 36;
        n = r.charAt(o) + n;
        b = Math.round(Math.floor(l));
    }
    return ("0000000000000000" + n).substr(-t);
}

const randomInt = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
};

const newUUID = function(e) {
    var t = new Date().getTime();
    return (e ? "xxxxxxxxxxxxxyxxxxyxxxxxxxxxxxxx" : "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxx").replace(/[xy]/g, (function(e) {
        var n = (t + 16 * Math.random()) % 16 | 0;
        t = Math.floor(t / 16);
        return ("x" == e ? n : 3 & n | 8).toString(16);
    }));
};

const y = {
    "X-CLIENT-ID": function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    "X-CLIENT-SID": function(t, e) {
        return "S_0MO2SM8UNEX3XOHA";
    },
    "X-CLIENT-APPID": function(t, e) {
        return '4';
    },
    "X-B3-TRACEID": function(t, e) {
        return toBase36(e.getTime(), 9) + toBase36(randomInt(0, 78364164095), 7);
    },
    "X-CLIENT-TIME": function(t, e) {
        return String(e.getTime());
    },
    "X-CLIENT-PAGE": function(t, e) {
        return '/purchase/';
    },
    "X-HN-JOB": "If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html",
    "X-CLIENT-NONCE": function() {
        return newUUID(!0);
    },
    "X-CLIENT-ENVIRONMENT": function() {
        return "pro";
    }
};

const e = {
    $env: {
        UA: "mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/147.0.0.0 safari/537.36 edg/147.0.0.0",
        barHeight: 90, inApp: false, inAppAndroid: false, inAppIOS: false,
        inBrowser: true, inDesktop: true, inWeex: false, isAndroid: false,
        isChrome: true, isEdge: false, isIE: false, isIE9: false, isIOS: false,
        isPhantomJS: false, weexPlatform: false
    },
    env: { platform: "pc" },
    config: { env: "pro", platform: "pc" },
    classes: {},
    filterManager: { filters: [] },
    installManager: { $auth: { get: () => Promise.resolve({ ticket: "" }) } }
};

// ============================
// 核心：Python 可直接调用的同步函数
// ============================
function getFinalHeaders() {
    const t = new Date();
    const m = [];
    const v = [{}, {}];
    let header = {};

    function x(e) {
        var header = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var t = arguments[2];
        return c.default.isObject(e) && c.default.isFunction(e.then) ? m.push({ promise: e, field: t }) : header = _(header, e, t), header;
    }

    function _(source, e, t) {
        return c.default.isObject(e) ? source = (0, l.default)(e, source) : t && (source[t] = e), source;
    }

    v.forEach(filter => { header = x(header); });
    (0, o.default)(y).forEach(n => {
        var val = y[n];
        header = x(c.default.isFunction(val) ? val(e, t) : val, header, n);
    });
    console.log(header);
    console.log("_________");
    
    var finalHeaders = f.default(e, header);

    if (finalHeaders["X-CLIENT-SIGN"] && finalHeaders["X-CLIENT-SIGN"].words) {
        finalHeaders["X-CLIENT-SIGN"] = finalHeaders["X-CLIENT-SIGN"].toString();
    }
    console.log(JSON.stringify(finalHeaders));
    
    return JSON.stringify(finalHeaders);
}

getFinalHeaders();
