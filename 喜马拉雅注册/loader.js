window = global;

require("./mod1");


!function(e) {
    function r(r) {
        for (var n, o, i = r[0], c = r[1], l = r[2], s = 0, f = []; s < i.length; s++)
            o = i[s],
            Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
            a[o] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (p && p(r); f.length; )
            f.shift()();
        return u.push.apply(u, l || []),
        t()
    }
    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, o = 1; o < t.length; o++) {
                var i = t[o];
                0 !== a[i] && (n = !1)
            }
            n && (u.splice(r--, 1),
            e = c(c.s = t[0]))
        }
        return e
    }
    var n = {}
        , o = {
        19: 0
    }
        , a = {
        19: 0
    }
        , u = [];
    function i(e) {
        return c.p + "scripts/" + {
            0: "2e4393",
            1: "831c15",
            2: "82d723",
            3: "884000",
            4: "34587a",
            5: "27eb82",
            6: "c5515c",
            7: "d1dd61",
            8: "4880fa",
            9: "777802",
            10: "ba0ed1",
            11: "638381",
            12: "24a2cb",
            13: "6dce55",
            14: "588ad4",
            15: "e699f5",
            16: "af37d8",
            17: "7c62b8"
        }[e] + ".js"
    }
    function c(r) {
        if (n[r])
            return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        console.log("加载的模块为:", r);
        return e[r].call(t.exports, t, t.exports, c),
        t.l = !0,
        t.exports
    }
    window.xxx = c;
    c.e = function(e) {
        var r = []
            , t = i.toString().replace("scripts", "styles").replace(/return\s(.*\.p)/, "return _p")
            , n = new Function("_p","return " + t);
        o[e] ? r.push(o[e]) : 0 !== o[e] && {
            1: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            9: 1,
            10: 1,
            16: 1
        }[e] && r.push(o[e] = new Promise((function(r, t) {
            for (var o = n(c.p)(e).replace(/\.js$/, ".css"), a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
                var i = a[u];
                if ("stylesheet" === i.rel && i.getAttribute("href") === o)
                    return r()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet",
            l.type = "text/css",
            l.onload = r,
            l.onerror = function(r) {
                var n = r && r.target && r.target.src || o
                    , a = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                a.request = n,
                t(a)
            }
            ,
            l.href = o,
            document.getElementsByTagName("head")[0].appendChild(l)
        }
        )).then((function() {
            o[e] = 0
        }
        )));
        var u = a[e];
        if (0 !== u)
            if (u)
                r.push(u[2]);
            else {
                var l = new Promise((function(r, t) {
                    u = a[e] = [r, t]
                }
                ));
                r.push(u[2] = l);
                var s, f = document.createElement("script");
                f.charset = "utf-8",
                f.timeout = 120,
                c.nc && f.setAttribute("nonce", c.nc),
                f.src = i(e);
                var p = new Error;
                s = function(r) {
                    f.onerror = f.onload = null,
                    clearTimeout(d);
                    var t = a[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                                , o = r && r.target && r.target.src;
                            p.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")",
                            p.name = "ChunkLoadError",
                            p.type = n,
                            p.request = o,
                            t[1](p)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: f
                    })
                }
                ), 12e4);
                f.onerror = f.onload = s,
                document.head.appendChild(f)
            }
        return Promise.all(r)
    }
    ,
    c.m = e,
    c.c = n,
    c.d = function(e, r, t) {
        c.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }
    ,
    c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, r) {
        if (1 & r && (e = c(e)),
        8 & r)
            return e;
        if (4 & r && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (c.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & r && "string" != typeof e)
            for (var n in e)
                c.d(t, n, function(r) {
                    return e[r]
                }
                .bind(null, n));
        return t
    }
    ,
    c.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(r, "a", r),
        r
    }
    ,
    c.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    ,
    c.p = "//award.xmcdn.com/yx/fe-passport/last/dist/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window.__award__ = window.__award__ || []
        , s = l.push.bind(l);
    l.push = r,
    l = l.slice();
    for (var f = 0; f < l.length; f++)
        r(l[f]);
    var p = s;
    t()
}([]);


function get_signature(t, email){
   
        const a = window.xxx(19);
        const encrypted = (0, a.getEncryptPwd)(email);
        const sig = (0, a.getSignature)({ email: encrypted, nonce: t });

        console.log(encrypted);
        console.log(sig);
        
        return { email: encrypted, nonce: t, signature: sig };
    
}

get_signature('0-2BB31F7F519570bddb090a4108e630a18917b8e1125c17619af3febea19fcc','aesgtsrdgf@gmail.com')