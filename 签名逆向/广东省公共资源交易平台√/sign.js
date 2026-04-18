const CryptoJS = require("crypto-js")
function xre(e, t) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * e + 1, 10);
    case 2:
        return parseInt(Math.random() * (t - e + 1) + e, 10);
    default:
        return 0
    }
}
const GF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM"
  , kre = GF + "-@#$%^&*+!";
function an(e=[]) {
    return e.map(t => kre[t]).join("")
}
function Ore(e) {
    return [...Array(e)].map( () => GF[xre(0, 61)]).join("")
}
function qF(e) {
    let t = "";
    return typeof e == "object" ? t = Object.keys(e).map(n => `${n}=${e[n]}`).sort().join("&") : typeof e == "string" && (t = e.split("&").sort().join("&")),
    t
}


function D1(e={}) {
    const {p: t, t: n, n: u, k: o} = e
      , r = qF(t);
    return CryptoJS.SHA256(u + o + decodeURIComponent(r) + n).toString()
}

 Kq = function(t) {
     const _s = {
         "default": "RFC3986",
         "formatters": {},
         "RFC1738": "RFC1738",
         "RFC3986": "RFC3986"
     };
     const _t = {
    "addQueryPrefix": false,
    "allowDots": false,
    "charset": "utf-8",
    "charsetSentinel": false,
    "delimiter": "&",
    "encode": true,
    "encodeValuesOnly": false,
    "format": "RFC3986",
    "indices": false,
    "skipNulls": false,
    "strictNullHandling": false
};
    if (!t)
        return _t;
    var u = _s.default;
    var n = t.charset || _t.charset;
    var o = _s.formatters[u]
      , r = undefined;
    return (typeof t.filter == "function" || Array.isArray(t.filter)) && (r = t.filter),
    {
        addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : _t.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? _t.allowDots : !!t.allowDots,
        charset: n,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : _t.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? _t.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : _t.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : _t.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : _t.encodeValuesOnly,
        filter: r,
        format: u,
        formatter: o,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : _t.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : _t.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : _t.strictNullHandling
    }
}

const jg = {
    brackets: function(t) {
        return t + "[]"
    },
    comma: "comma",
    indices: function(t, n) {
        return t + "[" + n + "]"
    },
    repeat: function(t) {
        return t
    }
};
// dp = function(t, n) {
//     if (typeof t != "string" || t.length === 0)
//         throw new eo("intrinsic name must be a non-empty string");
//     if (arguments.length > 1 && typeof n != "boolean")
//         throw new eo('"allowMissing" argument must be a boolean');
//     if (IG(/^%?[^%]*%?$/, t) === null)
//         throw new Eo("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
//     var u = LG(t)
//       , o = u.length > 0 ? u[0] : ""
//       , r = NG("%" + o + "%", n)
//       , s = r.name
//       , i = r.value
//       , a = !1
//       , l = r.alias;
//     l && (o = l[0],
//     PG(u, TG([0, 1], l)));
//     for (var c = 1, d = !0; c < u.length; c += 1) {
//         var f = u[c]
//           , p = yl(f, 0, 1)
//           , h = yl(f, -1);
//         if ((p === '"' || p === "'" || p === "`" || h === '"' || h === "'" || h === "`") && p !== h)
//             throw new Eo("property names with quotes must have matching quotes");
//         if ((f === "constructor" || !d) && (a = !0),
//         o += "." + f,
//         s = "%" + o + "%",
//         El(mr, s))
//             i = mr[s];
//         else if (i != null) {
//             if (!(f in i)) {
//                 if (!n)
//                     throw new eo("base intrinsic for " + t + " exists, but the property is not available.");
//                 return
//             }
//             if (pr && c + 1 >= u.length) {
//                 var m = pr(i, f);
//                 d = !!m,
//                 d && "get"in m && !("originalValue"in m.get) ? i = m.get : i = i[f]
//             } else
//                 d = El(i, f),
//                 i = i[f];
//             d && !a && (mr[s] = i)
//         }
//     }
//     return i
// }

const HC = function() {
    const fa = new WeakMap();
    var t, n, u, o = {
        assert: function(r) {
            if (!o.has(r))
                throw new yq("Side channel does not contain " + Eq(r))
        },
        get: function(r) {
            if (fa && r && (typeof r == "object" || typeof r == "function")) {
                if (t)
                    return Cq(t, r)
            } else if (ha) {
                if (n)
                    return Bq(n, r)
            } else if (u)
                return Dq(u, r)
        },
        has: function(r) {
            if (fa && r && (typeof r == "object" || typeof r == "function")) {
                if (t)
                    return Aq(t, r)
            } else if (ha) {
                if (n)
                    return wq(n, r)
            } else if (u)
                return _q(u, r);
            return !1
        },
        set: function(r, s) {
            fa && r && (typeof r == "object" || typeof r == "function") ? (t || (t = new fa),
            Fq(t, r, s)) : ha ? (n || (n = new ha),
            bq(n, r, s)) : (u || (u = {
                key: {},
                next: null
            }),
            Sq(u, r, s))
        }
    };
    return o
}

zC = function(obj, arr) {
    Array.apply(obj, Array.isArray(arr) ? arr : [arr])
}
const ef = {};
 Gq = function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
}
qq = function e(t, n, u, o, r, s, i, a, l, c, d, f, p, h, m, F) {
    for (var g = t, E = F, y = 0, v = !1; (E = E.get(ef)) !== void 0 && !v; ) {
        var b = E.get(t);
        if (y += 1,
        typeof b < "u") {
            if (b === y)
                throw new RangeError("Cyclic object value");
            v = !0
        }
        typeof E.get(ef) > "u" && (y = 0)
    }
    if (typeof a == "function" ? g = a(n, g) : g instanceof Date ? g = d(g) : u === "comma" && tu(g) && (g = Va.maybeMap(g, function(M) {
        return M instanceof Date ? d(M) : M
    })),
    g === null) {
        if (r)
            return i && !h ? i(n, _t.encoder, m, "key", f) : n;
        g = ""
    }
    if (Gq(g) || Va.isBuffer(g)) {
        if (i) {
            var B = h ? n : i(n, _t.encoder, m, "key", f);
            return [String(B) + "=" + String(i(g, _t.encoder, m, "value", f))]
        }
        return [String(n) + "=" + String(String(g))]
    }
    var x = [];
    if (typeof g > "u")
        return x;
    var k;
    if (u === "comma" && tu(g))
        h && i && (g = Va.maybeMap(g, i)),
        k = [{
            value: g.length > 0 ? g.join(",") || null : void 0
        }];
    else if (tu(a))
        k = a;
    else {
        var I = Object.keys(g);
        k = l ? I.sort(l) : I
    }
    for (var L = o && tu(g) && g.length === 1 ? n + "[]" : n, $ = 0; $ < k.length; ++$) {
        var j = k[$]
          , U = typeof j == "object" && typeof j.value < "u" ? j.value : g[j];
        if (!(s && U === null)) {
            var q = tu(g) ? typeof u == "function" ? u(L, j) : L : L + (c ? "." + j : "[" + j + "]");
            F.set(t, y);
            var N = HC();
            N.set(ef, F),
            zC(x, e(U, q, u, o, r, s, u === "comma" && h && tu(g) ? null : i, a, l, c, d, f, p, h, m, N))
        }
    }
    return x
}

ss = function(e, t) {
    var n = e, u = Kq(t), o, r;
    typeof u.filter == "function" ? (r = u.filter,
    n = r("", n)) : Array.isArray(u.filter) && (r = u.filter,
    o = r);
    var s = [];
    if (typeof n != "object" || n === null)
        return "";
    var i;
    t && t.arrayFormat in jg ? i = t.arrayFormat : t && "indices"in t ? i = t.indices ? "indices" : "repeat" : i = "indices";
    var a = jg[i];
    if (t && "commaRoundTrip"in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = a === "comma" && t && t.commaRoundTrip;
    o || (o = Object.keys(n)),
    u.sort && o.sort(u.sort);
    for (var c = HC(), d = 0; d < o.length; ++d) {
        var f = o[d];
        u.skipNulls && n[f] === null || zC(s, qq(n[f], f, a, l, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, c))
    }
    var p = s.join(u.delimiter)
      , h = u.addQueryPrefix === !0 ? "?" : "";
    return u.charsetSentinel && (u.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"),
    p.length > 0 ? h + p : ""
}
function get_sign(data) {
const o = {
    data: data
}
const a = Date.now();
const l = Ore(16);
const c = an([8, 28, 20, 42, 21, 53, 65, 6]);

const p = D1({
    p: ss(o.data, {
        allowDots: !0
    }),
    t: a,
    n: l,
    k: c
});

return p;
}
// console.log(p);
