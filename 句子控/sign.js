const CryptoJS = require("crypto-js");

function No(t) {
    var e = Object.keys(t)
        .filter(function(e) {
            return void 0 !== t[e];
        })
        .sort()
        .map(function(e) {
            var n = t[e];
            return null === n && (n = ""),
                   "".concat(e, "=").concat(n);
        });

    e.push("secret=".concat("nM26]^9{nb"));

    var str = e.join("&");
    
    // 原 Ho.hex() → 改用 crypto-js 的 SHA1
    return CryptoJS.SHA1(str).toString();   // 默认就是小写 hex，40位
    // 如果你非要显式写 enc.Hex 也可以：
    // return CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
}

function Fo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }

function sa(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }

function Bo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fo(n, !0).forEach(function(e) {
                    Object(sa)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fo(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

const params = {
    "start": 20,
    "limit": 20,
    "timestamp": 1772601651322
}

const r = {};
sign = No(Bo({}, params, {}, r))
console.log(sign);
