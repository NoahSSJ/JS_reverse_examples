
function xo(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const ye = {}
  , Sn = []
  , Ot = () => {}
  , ba = () => !1
  , _r = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , ko = e => e.startsWith("onUpdate:")
  , qe = Object.assign
  , $o = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Ku = Object.prototype.hasOwnProperty
  , me = (e, t) => Ku.call(e, t)
  , ne = Array.isArray
  , Ln = e => gr(e) === "[object Map]"
  , rs = e => gr(e) === "[object Set]"
  , vi = e => gr(e) === "[object Date]"
  , le = e => typeof e == "function"
  , ke = e => typeof e == "string"
  , vt = e => typeof e == "symbol"
  , Te = e => e !== null && typeof e == "object"
  , Ea = e => (Te(e) || le(e)) && le(e.then) && le(e.catch)
  , Ta = Object.prototype.toString
  , gr = e => Ta.call(e)
  , Gu = e => gr(e).slice(8, -1)
  , Ca = e => gr(e) === "[object Object]"
  , Mo = e => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , On = xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , ss = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Yu = /-\w/g
  , ht = ss(e => e.replace(Yu, t => t.slice(1).toUpperCase()))
  , Xu = /\B([A-Z])/g
  , nn = ss(e => e.replace(Xu, "-$1").toLowerCase())
  , os = ss(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Os = ss(e => e ? `on${os(e)}` : "")
  , Jt = (e, t) => !Object.is(e, t)
  , kr = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Sa = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Hr = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let yi;
const is = () => yi || (yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nr(e) {
    if (ne(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = ke(r) ? Zu(r) : nr(r);
            if (s)
                for (const o in s)
                    t[o] = s[o]
        }
        return t
    } else if (ke(e) || Te(e))
        return e
}
const Ju = /;(?![^(]*\))/g
  , Qu = /:([^]+)/
  , zu = /\/\*[^]*?\*\//g;
function Zu(e) {
    const t = {};
    return e.replace(zu, "").split(Ju).forEach(n => {
        if (n) {
            const r = n.split(Qu);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function An(e) {
    let t = "";
    if (ke(e))
        t = e;
    else if (ne(e))
        for (let n = 0; n < e.length; n++) {
            const r = An(e[n]);
            r && (t += r + " ")
        }
    else if (Te(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const ef = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , tf = xo(ef);
function La(e) {
    return !!e || e === ""
}
function nf(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = ls(e[r], t[r]);
    return n
}
function ls(e, t) {
    if (e === t)
        return !0;
    let n = vi(e)
      , r = vi(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = vt(e),
    r = vt(t),
    n || r)
        return e === t;
    if (n = ne(e),
    r = ne(t),
    n || r)
        return n && r ? nf(e, t) : !1;
    if (n = Te(e),
    r = Te(t),
    n || r) {
        if (!n || !r)
            return !1;
        const s = Object.keys(e).length
          , o = Object.keys(t).length;
        if (s !== o)
            return !1;
        for (const i in e) {
            const l = e.hasOwnProperty(i)
              , a = t.hasOwnProperty(i);
            if (l && !a || !l && a || !ls(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function rf(e, t) {
    return e.findIndex(n => ls(n, t))
}
const Oa = e => !!(e && e.__v_isRef === !0)
  , se = e => ke(e) ? e : e == null ? "" : ne(e) || Te(e) && (e.toString === Ta || !le(e.toString)) ? Oa(e) ? se(e.value) : JSON.stringify(e, Ia, 2) : String(e)
  , Ia = (e, t) => Oa(t) ? Ia(e, t.value) : Ln(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,s], o) => (n[Is(r, o) + " =>"] = s,
    n), {})
} : rs(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Is(n))
} : vt(t) ? Is(t) : Te(t) && !ne(t) && !Ca(t) ? String(t) : t
  , Is = (e, t="") => {
    var n;
    return vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ze;
class wa {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = ze,
        !t && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = ze;
            try {
                return ze = this,
                t()
            } finally {
                ze = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = ze,
        ze = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (ze = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Ra(e) {
    return new wa(e)
}
function sf() {
    return ze
}
let be;
const ws = new WeakSet;
class Na {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        ze && ze.active && ze.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        ws.has(this) && (ws.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pa(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        bi(this),
        xa(this);
        const t = be
          , n = gt;
        be = this,
        gt = !0;
        try {
            return this.fn()
        } finally {
            ka(this),
            be = t,
            gt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Uo(t);
            this.deps = this.depsTail = void 0,
            bi(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        io(this) && this.run()
    }
    get dirty() {
        return io(this)
    }
}
let Aa = 0, Xn, Jn;
function Pa(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Jn,
        Jn = e;
        return
    }
    e.next = Xn,
    Xn = e
}
function Do() {
    Aa++
}
function Fo() {
    if (--Aa > 0)
        return;
    if (Jn) {
        let t = Jn;
        for (Jn = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; Xn; ) {
        let t = Xn;
        for (Xn = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function xa(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function ka(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s),
        Uo(r),
        of(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = s
    }
    e.deps = t,
    e.depsTail = n
}
function io(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && ($a(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function $a(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === rr) || (e.globalVersion = rr,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !io(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = be
      , r = gt;
    be = e,
    gt = !0;
    try {
        xa(e);
        const s = e.fn(e._value);
        (t.version === 0 || Jt(s, e._value)) && (e.flags |= 128,
        e._value = s,
        t.version++)
    } catch (s) {
        throw t.version++,
        s
    } finally {
        be = n,
        gt = r,
        ka(e),
        e.flags &= -3
    }
}
function Uo(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: s} = e;
    if (r && (r.nextSub = s,
    e.prevSub = void 0),
    s && (s.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            Uo(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function of(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let gt = !0;
const Ma = [];
function Vt() {
    Ma.push(gt),
    gt = !1
}
function Wt() {
    const e = Ma.pop();
    gt = e === void 0 ? !0 : e
}
function bi(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = be;
        be = void 0;
        try {
            t()
        } finally {
            be = n
        }
    }
}
let rr = 0;
class lf {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Ho {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!be || !gt || be === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== be)
            n = this.activeLink = new lf(be,this),
            be.deps ? (n.prevDep = be.depsTail,
            be.depsTail.nextDep = n,
            be.depsTail = n) : be.deps = be.depsTail = n,
            Da(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = be.depsTail,
            n.nextDep = void 0,
            be.depsTail.nextDep = n,
            be.depsTail = n,
            be.deps === n && (be.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        rr++,
        this.notify(t)
    }
    notify(t) {
        Do();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Fo()
        }
    }
}
function Da(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Da(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Vr = new WeakMap
  , dn = Symbol("")
  , lo = Symbol("")
  , sr = Symbol("");
function je(e, t, n) {
    if (gt && be) {
        let r = Vr.get(e);
        r || Vr.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new Ho),
        s.map = r,
        s.key = n),
        s.track()
    }
}
function Dt(e, t, n, r, s, o) {
    const i = Vr.get(e);
    if (!i) {
        rr++;
        return
    }
    const l = a => {
        a && a.trigger()
    }
    ;
    if (Do(),
    t === "clear")
        i.forEach(l);
    else {
        const a = ne(e)
          , u = a && Mo(n);
        if (a && n === "length") {
            const c = Number(r);
            i.forEach( (f, d) => {
                (d === "length" || d === sr || !vt(d) && d >= c) && l(f)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
            u && l(i.get(sr)),
            t) {
            case "add":
                a ? u && l(i.get("length")) : (l(i.get(dn)),
                Ln(e) && l(i.get(lo)));
                break;
            case "delete":
                a || (l(i.get(dn)),
                Ln(e) && l(i.get(lo)));
                break;
            case "set":
                Ln(e) && l(i.get(dn));
                break
            }
    }
    Fo()
}
function af(e, t) {
    const n = Vr.get(e);
    return n && n.get(t)
}
function _n(e) {
    const t = de(e);
    return t === e ? t : (je(t, "iterate", sr),
    ut(e) ? t : t.map(He))
}
function as(e) {
    return je(e = de(e), "iterate", sr),
    e
}
const cf = {
    __proto__: null,
    [Symbol.iterator]() {
        return Rs(this, Symbol.iterator, He)
    },
    concat(...e) {
        return _n(this).concat(...e.map(t => ne(t) ? _n(t) : t))
    },
    entries() {
        return Rs(this, "entries", e => (e[1] = He(e[1]),
        e))
    },
    every(e, t) {
        return Pt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Pt(this, "filter", e, t, n => n.map(He), arguments)
    },
    find(e, t) {
        return Pt(this, "find", e, t, He, arguments)
    },
    findIndex(e, t) {
        return Pt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Pt(this, "findLast", e, t, He, arguments)
    },
    findLastIndex(e, t) {
        return Pt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Pt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ns(this, "includes", e)
    },
    indexOf(...e) {
        return Ns(this, "indexOf", e)
    },
    join(e) {
        return _n(this).join(e)
    },
    lastIndexOf(...e) {
        return Ns(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Pt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Bn(this, "pop")
    },
    push(...e) {
        return Bn(this, "push", e)
    },
    reduce(e, ...t) {
        return Ei(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Ei(this, "reduceRight", e, t)
    },
    shift() {
        return Bn(this, "shift")
    },
    some(e, t) {
        return Pt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Bn(this, "splice", e)
    },
    toReversed() {
        return _n(this).toReversed()
    },
    toSorted(e) {
        return _n(this).toSorted(e)
    },
    toSpliced(...e) {
        return _n(this).toSpliced(...e)
    },
    unshift(...e) {
        return Bn(this, "unshift", e)
    },
    values() {
        return Rs(this, "values", He)
    }
};
function Rs(e, t, n) {
    const r = as(e)
      , s = r[t]();
    return r !== e && !ut(e) && (s._next = s.next,
    s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)),
        o
    }
    ),
    s
}
const uf = Array.prototype;
function Pt(e, t, n, r, s, o) {
    const i = as(e)
      , l = i !== e && !ut(e)
      , a = i[t];
    if (a !== uf[t]) {
        const f = a.apply(e, o);
        return l ? He(f) : f
    }
    let u = n;
    i !== e && (l ? u = function(f, d) {
        return n.call(this, He(f), d, e)
    }
    : n.length > 2 && (u = function(f, d) {
        return n.call(this, f, d, e)
    }
    ));
    const c = a.call(i, u, r);
    return l && s ? s(c) : c
}
function Ei(e, t, n, r) {
    const s = as(e);
    let o = n;
    return s !== e && (ut(e) ? n.length > 3 && (o = function(i, l, a) {
        return n.call(this, i, l, a, e)
    }
    ) : o = function(i, l, a) {
        return n.call(this, i, He(l), a, e)
    }
    ),
    s[t](o, ...r)
}
function Ns(e, t, n) {
    const r = de(e);
    je(r, "iterate", sr);
    const s = r[t](...n);
    return (s === -1 || s === !1) && jo(n[0]) ? (n[0] = de(n[0]),
    r[t](...n)) : s
}
function Bn(e, t, n=[]) {
    Vt(),
    Do();
    const r = de(e)[t].apply(e, n);
    return Fo(),
    Wt(),
    r
}
const ff = xo("__proto__,__v_isRef,__isVue")
  , Fa = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(vt));
function df(e) {
    vt(e) || (e = String(e));
    const t = de(this);
    return je(t, "has", e),
    t.hasOwnProperty(e)
}
class Ua {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const s = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (s ? o ? Tf : ja : o ? Wa : Va).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = ne(t);
        if (!s) {
            let a;
            if (i && (a = cf[n]))
                return a;
            if (n === "hasOwnProperty")
                return df
        }
        const l = Reflect.get(t, n, Fe(t) ? t : r);
        return (vt(n) ? Fa.has(n) : ff(n)) || (s || je(t, "get", n),
        o) ? l : Fe(l) ? i && Mo(n) ? l : l.value : Te(l) ? s ? qa(l) : cs(l) : l
    }
}
class Ha extends Ua {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (!this._isShallow) {
            const a = Zt(o);
            if (!ut(r) && !Zt(r) && (o = de(o),
            r = de(r)),
            !ne(t) && Fe(o) && !Fe(r))
                return a || (o.value = r),
                !0
        }
        const i = ne(t) && Mo(n) ? Number(n) < t.length : me(t, n)
          , l = Reflect.set(t, n, r, Fe(t) ? t : s);
        return t === de(s) && (i ? Jt(r, o) && Dt(t, "set", n, r) : Dt(t, "add", n, r)),
        l
    }
    deleteProperty(t, n) {
        const r = me(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Dt(t, "delete", n, void 0),
        s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!vt(n) || !Fa.has(n)) && je(t, "has", n),
        r
    }
    ownKeys(t) {
        return je(t, "iterate", ne(t) ? "length" : dn),
        Reflect.ownKeys(t)
    }
}
class hf extends Ua {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const pf = new Ha
  , mf = new hf
  , _f = new Ha(!0);
const ao = e => e
  , Lr = e => Reflect.getPrototypeOf(e);
function gf(e, t, n) {
    return function(...r) {
        const s = this.__v_raw
          , o = de(s)
          , i = Ln(o)
          , l = e === "entries" || e === Symbol.iterator && i
          , a = e === "keys" && i
          , u = s[e](...r)
          , c = n ? ao : t ? Wr : He;
        return !t && je(o, "iterate", a ? lo : dn),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: l ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Or(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function vf(e, t) {
    const n = {
        get(s) {
            const o = this.__v_raw
              , i = de(o)
              , l = de(s);
            e || (Jt(s, l) && je(i, "get", s),
            je(i, "get", l));
            const {has: a} = Lr(i)
              , u = t ? ao : e ? Wr : He;
            if (a.call(i, s))
                return u(o.get(s));
            if (a.call(i, l))
                return u(o.get(l));
            o !== i && o.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && je(de(s), "iterate", dn),
            s.size
        },
        has(s) {
            const o = this.__v_raw
              , i = de(o)
              , l = de(s);
            return e || (Jt(s, l) && je(i, "has", s),
            je(i, "has", l)),
            s === l ? o.has(s) : o.has(s) || o.has(l)
        },
        forEach(s, o) {
            const i = this
              , l = i.__v_raw
              , a = de(l)
              , u = t ? ao : e ? Wr : He;
            return !e && je(a, "iterate", dn),
            l.forEach( (c, f) => s.call(o, u(c), u(f), i))
        }
    };
    return qe(n, e ? {
        add: Or("add"),
        set: Or("set"),
        delete: Or("delete"),
        clear: Or("clear")
    } : {
        add(s) {
            !t && !ut(s) && !Zt(s) && (s = de(s));
            const o = de(this);
            return Lr(o).has.call(o, s) || (o.add(s),
            Dt(o, "add", s, s)),
            this
        },
        set(s, o) {
            !t && !ut(o) && !Zt(o) && (o = de(o));
            const i = de(this)
              , {has: l, get: a} = Lr(i);
            let u = l.call(i, s);
            u || (s = de(s),
            u = l.call(i, s));
            const c = a.call(i, s);
            return i.set(s, o),
            u ? Jt(o, c) && Dt(i, "set", s, o) : Dt(i, "add", s, o),
            this
        },
        delete(s) {
            const o = de(this)
              , {has: i, get: l} = Lr(o);
            let a = i.call(o, s);
            a || (s = de(s),
            a = i.call(o, s)),
            l && l.call(o, s);
            const u = o.delete(s);
            return a && Dt(o, "delete", s, void 0),
            u
        },
        clear() {
            const s = de(this)
              , o = s.size !== 0
              , i = s.clear();
            return o && Dt(s, "clear", void 0, void 0),
            i
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = gf(s, e, t)
    }
    ),
    n
}
function Vo(e, t) {
    const n = vf(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(me(n, s) && s in r ? n : r, s, o)
}
const yf = {
    get: Vo(!1, !1)
}
  , bf = {
    get: Vo(!1, !0)
}
  , Ef = {
    get: Vo(!0, !1)
};
const Va = new WeakMap
  , Wa = new WeakMap
  , ja = new WeakMap
  , Tf = new WeakMap;
function Cf(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Sf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Cf(Gu(e))
}
function cs(e) {
    return Zt(e) ? e : Wo(e, !1, pf, yf, Va)
}
function Ba(e) {
    return Wo(e, !1, _f, bf, Wa)
}
function qa(e) {
    return Wo(e, !0, mf, Ef, ja)
}
function Wo(e, t, n, r, s) {
    if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = Sf(e);
    if (o === 0)
        return e;
    const i = s.get(e);
    if (i)
        return i;
    const l = new Proxy(e,o === 2 ? r : n);
    return s.set(e, l),
    l
}
function hn(e) {
    return Zt(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Zt(e) {
    return !!(e && e.__v_isReadonly)
}
function ut(e) {
    return !!(e && e.__v_isShallow)
}
function jo(e) {
    return e ? !!e.__v_raw : !1
}
function de(e) {
    const t = e && e.__v_raw;
    return t ? de(t) : e
}
function Ka(e) {
    return !me(e, "__v_skip") && Object.isExtensible(e) && Sa(e, "__v_skip", !0),
    e
}
const He = e => Te(e) ? cs(e) : e
  , Wr = e => Te(e) ? qa(e) : e;
function Fe(e) {
    return e ? e.__v_isRef === !0 : !1
}
function _e(e) {
    return Ga(e, !1)
}
function Bo(e) {
    return Ga(e, !0)
}
function Ga(e, t) {
    return Fe(e) ? e : new Lf(e,t)
}
class Lf {
    constructor(t, n) {
        this.dep = new Ho,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : de(t),
        this._value = n ? t : He(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || ut(t) || Zt(t);
        t = r ? t : de(t),
        Jt(t, n) && (this._rawValue = t,
        this._value = r ? t : He(t),
        this.dep.trigger())
    }
}
function Qt(e) {
    return Fe(e) ? e.value : e
}
const Of = {
    get: (e, t, n) => t === "__v_raw" ? e : Qt(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Fe(s) && !Fe(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Ya(e) {
    return hn(e) ? e : new Proxy(e,Of)
}
function If(e) {
    const t = ne(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Rf(e, n);
    return t
}
class wf {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return af(de(this._object), this._key)
    }
}
function Rf(e, t, n) {
    const r = e[t];
    return Fe(r) ? r : new wf(e,t,n)
}
class Nf {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Ho(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = rr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && be !== this)
            return Pa(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return $a(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Af(e, t, n=!1) {
    let r, s;
    return le(e) ? r = e : (r = e.get,
    s = e.set),
    new Nf(r,s,n)
}
const Ir = {}
  , jr = new WeakMap;
let un;
function Pf(e, t=!1, n=un) {
    if (n) {
        let r = jr.get(n);
        r || jr.set(n, r = []),
        r.push(e)
    }
}
function xf(e, t, n=ye) {
    const {immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: a} = n
      , u = y => s ? y : ut(y) || s === !1 || s === 0 ? Ft(y, 1) : Ft(y);
    let c, f, d, h, E = !1, S = !1;
    if (Fe(e) ? (f = () => e.value,
    E = ut(e)) : hn(e) ? (f = () => u(e),
    E = !0) : ne(e) ? (S = !0,
    E = e.some(y => hn(y) || ut(y)),
    f = () => e.map(y => {
        if (Fe(y))
            return y.value;
        if (hn(y))
            return u(y);
        if (le(y))
            return a ? a(y, 2) : y()
    }
    )) : le(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
        if (d) {
            Vt();
            try {
                d()
            } finally {
                Wt()
            }
        }
        const y = un;
        un = c;
        try {
            return a ? a(e, 3, [h]) : e(h)
        } finally {
            un = y
        }
    }
    : f = Ot,
    t && s) {
        const y = f
          , T = s === !0 ? 1 / 0 : s;
        f = () => Ft(y(), T)
    }
    const I = sf()
      , w = () => {
        c.stop(),
        I && I.active && $o(I.effects, c)
    }
    ;
    if (o && t) {
        const y = t;
        t = (...T) => {
            y(...T),
            w()
        }
    }
    let $ = S ? new Array(e.length).fill(Ir) : Ir;
    const _ = y => {
        if (!(!(c.flags & 1) || !c.dirty && !y))
            if (t) {
                const T = c.run();
                if (s || E || (S ? T.some( (O, N) => Jt(O, $[N])) : Jt(T, $))) {
                    d && d();
                    const O = un;
                    un = c;
                    try {
                        const N = [T, $ === Ir ? void 0 : S && $[0] === Ir ? [] : $, h];
                        $ = T,
                        a ? a(t, 3, N) : t(...N)
                    } finally {
                        un = O
                    }
                }
            } else
                c.run()
    }
    ;
    return l && l(_),
    c = new Na(f),
    c.scheduler = i ? () => i(_, !1) : _,
    h = y => Pf(y, !1, c),
    d = c.onStop = () => {
        const y = jr.get(c);
        if (y) {
            if (a)
                a(y, 4);
            else
                for (const T of y)
                    T();
            jr.delete(c)
        }
    }
    ,
    t ? r ? _(!0) : $ = c.run() : i ? i(_.bind(null, !0), !0) : c.run(),
    w.pause = c.pause.bind(c),
    w.resume = c.resume.bind(c),
    w.stop = w,
    w
}
function Ft(e, t=1 / 0, n) {
    if (t <= 0 || !Te(e) || e.__v_skip || (n = n || new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    Fe(e))
        Ft(e.value, t, n);
    else if (ne(e))
        for (let r = 0; r < e.length; r++)
            Ft(e[r], t, n);
    else if (rs(e) || Ln(e))
        e.forEach(r => {
            Ft(r, t, n)
        }
        );
    else if (Ca(e)) {
        for (const r in e)
            Ft(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        us(s, t, n)
    }
}
function wt(e, t, n, r) {
    if (le(e)) {
        const s = vr(e, t, n, r);
        return s && Ea(s) && s.catch(o => {
            us(o, t, n)
        }
        ),
        s
    }
    if (ne(e)) {
        const s = [];
        for (let o = 0; o < e.length; o++)
            s.push(wt(e[o], t, n, r));
        return s
    }
}
function us(e, t, n, r=!0) {
    const s = t ? t.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: i} = t && t.appContext.config || ye;
    if (t) {
        let l = t.parent;
        const a = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const c = l.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, a, u) === !1)
                        return
            }
            l = l.parent
        }
        if (o) {
            Vt(),
            vr(o, null, 10, [e, a, u]),
            Wt();
            return
        }
    }
    kf(e, n, s, r, i)
}
function kf(e, t, n, r=!0, s=!1) {
    if (s)
        throw e;
    console.error(e)
}
const Xe = [];
let Ct = -1;
const In = [];
let Gt = null
  , yn = 0;
const Xa = Promise.resolve();
let Br = null;
function yr(e) {
    const t = Br || Xa;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function $f(e) {
    let t = Ct + 1
      , n = Xe.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , s = Xe[r]
          , o = or(s);
        o < e || o === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function qo(e) {
    if (!(e.flags & 1)) {
        const t = or(e)
          , n = Xe[Xe.length - 1];
        !n || !(e.flags & 2) && t >= or(n) ? Xe.push(e) : Xe.splice($f(t), 0, e),
        e.flags |= 1,
        Ja()
    }
}
function Ja() {
    Br || (Br = Xa.then(Qa))
}
function Mf(e) {
    ne(e) ? In.push(...e) : Gt && e.id === -1 ? Gt.splice(yn + 1, 0, e) : e.flags & 1 || (In.push(e),
    e.flags |= 1),
    Ja()
}
function Ti(e, t, n=Ct + 1) {
    for (; n < Xe.length; n++) {
        const r = Xe[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            Xe.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function qr(e) {
    if (In.length) {
        const t = [...new Set(In)].sort( (n, r) => or(n) - or(r));
        if (In.length = 0,
        Gt) {
            Gt.push(...t);
            return
        }
        for (Gt = t,
        yn = 0; yn < Gt.length; yn++) {
            const n = Gt[yn];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        Gt = null,
        yn = 0
    }
}
const or = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qa(e) {
    try {
        for (Ct = 0; Ct < Xe.length; Ct++) {
            const t = Xe[Ct];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            vr(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Ct < Xe.length; Ct++) {
            const t = Xe[Ct];
            t && (t.flags &= -2)
        }
        Ct = -1,
        Xe.length = 0,
        qr(),
        Br = null,
        (Xe.length || In.length) && Qa()
    }
}
let Ve = null
  , za = null;
function Kr(e) {
    const t = Ve;
    return Ve = e,
    za = e && e.type.__scopeId || null,
    t
}
function fs(e, t=Ve, n) {
    if (!t || e._n)
        return e;
    const r = (...s) => {
        r._d && Jr(-1);
        const o = Kr(t);
        let i;
        try {
            i = e(...s)
        } finally {
            Kr(o),
            r._d && Jr(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function ir(e, t) {
    if (Ve === null)
        return e;
    const n = ms(Ve)
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[o,i,l,a=ye] = t[s];
        o && (le(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Ft(i),
        r.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }))
    }
    return e
}
function St(e, t, n, r) {
    const s = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const l = s[i];
        o && (l.oldValue = o[i].value);
        let a = l.dir[r];
        a && (Vt(),
        wt(a, n, 8, [e.el, l, e, t]),
        Wt())
    }
}
const Df = Symbol("_vte")
  , Ff = e => e.__isTeleport
  , Uf = Symbol("_leaveCb");
function Ko(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Ko(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Un(e, t) {
    return le(e) ? qe({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function Za(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const Gr = new WeakMap;
function wn(e, t, n, r, s=!1) {
    if (ne(e)) {
        e.forEach( (E, S) => wn(E, t && (ne(t) ? t[S] : t), n, r, s));
        return
    }
    if (pn(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && wn(e, t, n, r.component.subTree);
        return
    }
    const o = r.shapeFlag & 4 ? ms(r.component) : r.el
      , i = s ? null : o
      , {i: l, r: a} = e
      , u = t && t.r
      , c = l.refs === ye ? l.refs = {} : l.refs
      , f = l.setupState
      , d = de(f)
      , h = f === ye ? ba : E => me(d, E);
    if (u != null && u !== a) {
        if (Ci(t),
        ke(u))
            c[u] = null,
            h(u) && (f[u] = null);
        else if (Fe(u)) {
            u.value = null;
            const E = t;
            E.k && (c[E.k] = null)
        }
    }
    if (le(a))
        vr(a, l, 12, [i, c]);
    else {
        const E = ke(a)
          , S = Fe(a);
        if (E || S) {
            const I = () => {
                if (e.f) {
                    const w = E ? h(a) ? f[a] : c[a] : a.value;
                    if (s)
                        ne(w) && $o(w, o);
                    else if (ne(w))
                        w.includes(o) || w.push(o);
                    else if (E)
                        c[a] = [o],
                        h(a) && (f[a] = c[a]);
                    else {
                        const $ = [o];
                        a.value = $,
                        e.k && (c[e.k] = $)
                    }
                } else
                    E ? (c[a] = i,
                    h(a) && (f[a] = i)) : S && (a.value = i,
                    e.k && (c[e.k] = i))
            }
            ;
            if (i) {
                const w = () => {
                    I(),
                    Gr.delete(e)
                }
                ;
                w.id = -1,
                Gr.set(e, w),
                nt(w, n)
            } else
                Ci(e),
                I()
        }
    }
}
function Ci(e) {
    const t = Gr.get(e);
    t && (t.flags |= 8,
    Gr.delete(e))
}
let Si = !1;
const gn = () => {
    Si || (console.error("Hydration completed but contains mismatches."),
    Si = !0)
}
  , Hf = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , Vf = e => e.namespaceURI.includes("MathML")
  , wr = e => {
    if (e.nodeType === 1) {
        if (Hf(e))
            return "svg";
        if (Vf(e))
            return "mathml"
    }
}
  , Rr = e => e.nodeType === 8;
function Wf(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: s, nextSibling: o, parentNode: i, remove: l, insert: a, createComment: u}} = e
      , c = (_, y) => {
        if (!y.hasChildNodes()) {
            n(null, _, y),
            qr(),
            y._vnode = _;
            return
        }
        f(y.firstChild, _, null, null, null),
        qr(),
        y._vnode = _
    }
      , f = (_, y, T, O, N, U=!1) => {
        U = U || !!y.dynamicChildren;
        const P = Rr(_) && _.data === "["
          , W = () => S(_, y, T, O, N, P)
          , {type: Q, ref: G, shapeFlag: Z, patchFlag: Oe} = y;
        let Se = _.nodeType;
        y.el = _,
        Oe === -2 && (U = !1,
        y.dynamicChildren = null);
        let J = null;
        switch (Q) {
        case zt:
            Se !== 3 ? y.children === "" ? (a(y.el = s(""), i(_), _),
            J = _) : J = W() : (_.data !== y.children && (gn(),
            _.data = y.children),
            J = o(_));
            break;
        case Rt:
            $(_) ? (J = o(_),
            w(y.el = _.content.firstChild, _, T)) : Se !== 8 || P ? J = W() : J = o(_);
            break;
        case zn:
            if (P && (_ = o(_),
            Se = _.nodeType),
            Se === 1 || Se === 3) {
                J = _;
                const oe = !y.children.length;
                for (let Y = 0; Y < y.staticCount; Y++)
                    oe && (y.children += J.nodeType === 1 ? J.outerHTML : J.data),
                    Y === y.staticCount - 1 && (y.anchor = J),
                    J = o(J);
                return P ? o(J) : J
            } else
                W();
            break;
        case Ne:
            P ? J = E(_, y, T, O, N, U) : J = W();
            break;
        default:
            if (Z & 1)
                (Se !== 1 || y.type.toLowerCase() !== _.tagName.toLowerCase()) && !$(_) ? J = W() : J = d(_, y, T, O, N, U);
            else if (Z & 6) {
                y.slotScopeIds = N;
                const oe = i(_);
                if (P ? J = I(_) : Rr(_) && _.data === "teleport start" ? J = I(_, _.data, "teleport end") : J = o(_),
                t(y, oe, null, T, O, wr(oe), U),
                pn(y) && !y.type.__asyncResolved) {
                    let Y;
                    P ? (Y = Le(Ne),
                    Y.anchor = J ? J.previousSibling : oe.lastChild) : Y = _.nodeType === 3 ? Tr("") : Le("div"),
                    Y.el = _,
                    y.component.subTree = Y
                }
            } else
                Z & 64 ? Se !== 8 ? J = W() : J = y.type.hydrate(_, y, T, O, N, U, e, h) : Z & 128 && (J = y.type.hydrate(_, y, T, O, wr(i(_)), N, U, e, f))
        }
        return G != null && wn(G, null, O, y),
        J
    }
      , d = (_, y, T, O, N, U) => {
        U = U || !!y.dynamicChildren;
        const {type: P, props: W, patchFlag: Q, shapeFlag: G, dirs: Z, transition: Oe} = y
          , Se = P === "input" || P === "option";
        if (Se || Q !== -1) {
            Z && St(y, null, T, "created");
            let J = !1;
            if ($(_)) {
                J = _c(null, Oe) && T && T.vnode.props && T.vnode.props.appear;
                const Y = _.content.firstChild;
                if (J) {
                    const ge = Y.getAttribute("class");
                    ge && (Y.$cls = ge),
                    Oe.beforeEnter(Y)
                }
                w(Y, _, T),
                y.el = _ = Y
            }
            if (G & 16 && !(W && (W.innerHTML || W.textContent))) {
                let Y = h(_.firstChild, y, _, T, O, N, U);
                for (; Y; ) {
                    Nr(_, 1) || gn();
                    const ge = Y;
                    Y = Y.nextSibling,
                    l(ge)
                }
            } else if (G & 8) {
                let Y = y.children;
                Y[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (Y = Y.slice(1)),
                _.textContent !== Y && (Nr(_, 0) || gn(),
                _.textContent = y.children)
            }
            if (W) {
                if (Se || !U || Q & 48) {
                    const Y = _.tagName.includes("-");
                    for (const ge in W)
                        (Se && (ge.endsWith("value") || ge === "indeterminate") || _r(ge) && !On(ge) || ge[0] === "." || Y) && r(_, ge, null, W[ge], void 0, T)
                } else if (W.onClick)
                    r(_, "onClick", null, W.onClick, void 0, T);
                else if (Q & 4 && hn(W.style))
                    for (const Y in W.style)
                        W.style[Y]
            }
            let oe;
            (oe = W && W.onVnodeBeforeMount) && it(oe, T, y),
            Z && St(y, null, T, "beforeMount"),
            ((oe = W && W.onVnodeMounted) || Z || J) && Sc( () => {
                oe && it(oe, T, y),
                J && Oe.enter(_),
                Z && St(y, null, T, "mounted")
            }
            , O)
        }
        return _.nextSibling
    }
      , h = (_, y, T, O, N, U, P) => {
        P = P || !!y.dynamicChildren;
        const W = y.children
          , Q = W.length;
        for (let G = 0; G < Q; G++) {
            const Z = P ? W[G] : W[G] = lt(W[G])
              , Oe = Z.type === zt;
            _ ? (Oe && !P && G + 1 < Q && lt(W[G + 1]).type === zt && (a(s(_.data.slice(Z.children.length)), T, o(_)),
            _.data = Z.children),
            _ = f(_, Z, O, N, U, P)) : Oe && !Z.children ? a(Z.el = s(""), T) : (Nr(T, 1) || gn(),
            n(null, Z, T, null, O, N, wr(T), U))
        }
        return _
    }
      , E = (_, y, T, O, N, U) => {
        const {slotScopeIds: P} = y;
        P && (N = N ? N.concat(P) : P);
        const W = i(_)
          , Q = h(o(_), y, W, T, O, N, U);
        return Q && Rr(Q) && Q.data === "]" ? o(y.anchor = Q) : (gn(),
        a(y.anchor = u("]"), W, Q),
        Q)
    }
      , S = (_, y, T, O, N, U) => {
        if (Nr(_.parentElement, 1) || gn(),
        y.el = null,
        U) {
            const Q = I(_);
            for (; ; ) {
                const G = o(_);
                if (G && G !== Q)
                    l(G);
                else
                    break
            }
        }
        const P = o(_)
          , W = i(_);
        return l(_),
        n(null, y, W, P, T, O, wr(W), N),
        T && (T.vnode.el = y.el,
        Tc(T, y.el)),
        P
    }
      , I = (_, y="[", T="]") => {
        let O = 0;
        for (; _; )
            if (_ = o(_),
            _ && Rr(_) && (_.data === y && O++,
            _.data === T)) {
                if (O === 0)
                    return o(_);
                O--
            }
        return _
    }
      , w = (_, y, T) => {
        const O = y.parentNode;
        O && O.replaceChild(_, y);
        let N = T;
        for (; N; )
            N.vnode.el === y && (N.vnode.el = N.subTree.el = _),
            N = N.parent
    }
      , $ = _ => _.nodeType === 1 && _.tagName === "TEMPLATE";
    return [c, f]
}
const Li = "data-allow-mismatch"
  , jf = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function Nr(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Li); )
            e = e.parentElement;
    const n = e && e.getAttribute(Li);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(jf[t])
    }
}
is().requestIdleCallback;
is().cancelIdleCallback;
const pn = e => !!e.type.__asyncLoader
  , ec = e => e.type.__isKeepAlive;
function Bf(e, t) {
    tc(e, "a", t)
}
function qf(e, t) {
    tc(e, "da", t)
}
function tc(e, t, n=Be) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (ds(t, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            ec(s.parent.vnode) && Kf(r, t, n, s),
            s = s.parent
    }
}
function Kf(e, t, n, r) {
    const s = ds(t, e, r, !0);
    Go( () => {
        $o(r[t], s)
    }
    , n)
}
function ds(e, t, n=Be, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i) => {
            Vt();
            const l = Cr(n)
              , a = wt(t, n, e, i);
            return l(),
            Wt(),
            a
        }
        );
        return r ? s.unshift(o) : s.push(o),
        o
    }
}
const jt = e => (t, n=Be) => {
    (!cr || e === "sp") && ds(e, (...r) => t(...r), n)
}
  , nc = jt("bm")
  , At = jt("m")
  , Gf = jt("bu")
  , Yf = jt("u")
  , rc = jt("bum")
  , Go = jt("um")
  , br = jt("sp")
  , Xf = jt("rtg")
  , Jf = jt("rtc");
function Qf(e, t=Be) {
    ds("ec", e, t)
}
const zf = "components";
function hs(e, t) {
    return ed(zf, e, !0, t) || e
}
const Zf = Symbol.for("v-ndc");
function ed(e, t, n=!0, r=!1) {
    const s = Ve || Be;
    if (s) {
        const o = s.type;
        {
            const l = Ud(o, !1);
            if (l && (l === t || l === ht(t) || l === os(ht(t))))
                return o
        }
        const i = Oi(s[e] || o[e], t) || Oi(s.appContext[e], t);
        return !i && r ? o : i
    }
}
function Oi(e, t) {
    return e && (e[t] || e[ht(t)] || e[os(ht(t))])
}
function Yr(e, t, n, r) {
    let s;
    const o = n
      , i = ne(e);
    if (i || ke(e)) {
        const l = i && hn(e);
        let a = !1
          , u = !1;
        l && (a = !ut(e),
        u = Zt(e),
        e = as(e)),
        s = new Array(e.length);
        for (let c = 0, f = e.length; c < f; c++)
            s[c] = t(a ? u ? Wr(He(e[c])) : He(e[c]) : e[c], c, void 0, o)
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++)
            s[l] = t(l + 1, l, void 0, o)
    } else if (Te(e))
        if (e[Symbol.iterator])
            s = Array.from(e, (l, a) => t(l, a, void 0, o));
        else {
            const l = Object.keys(e);
            s = new Array(l.length);
            for (let a = 0, u = l.length; a < u; a++) {
                const c = l[a];
                s[a] = t(e[c], c, a, o)
            }
        }
    else
        s = [];
    return s
}
function td(e, t, n={}, r, s) {
    if (Ve.ce || Ve.parent && pn(Ve.parent) && Ve.parent.ce)
        return re(),
        dt(Ne, null, [Le("slot", n, r && r())], 64);
    let o = e[t];
    o && o._c && (o._d = !1),
    re();
    const i = o && sc(o(n))
      , l = n.key || i && i.key
      , a = dt(Ne, {
        key: (l && !vt(l) ? l : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function sc(e) {
    return e.some(t => ar(t) ? !(t.type === Rt || t.type === Ne && !sc(t.children)) : !0) ? e : null
}
const co = e => e ? Ic(e) ? ms(e) : co(e.parent) : null
  , Qn = qe(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => co(e.parent),
    $root: e => co(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => ic(e),
    $forceUpdate: e => e.f || (e.f = () => {
        qo(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = yr.bind(e.proxy)),
    $watch: e => bd.bind(e)
})
  , As = (e, t) => e !== ye && !e.__isScriptSetup && me(e, t)
  , nd = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: a} = e;
        let u;
        if (t[0] !== "$") {
            const h = i[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (As(r, t))
                    return i[t] = 1,
                    r[t];
                if (s !== ye && me(s, t))
                    return i[t] = 2,
                    s[t];
                if ((u = e.propsOptions[0]) && me(u, t))
                    return i[t] = 3,
                    o[t];
                if (n !== ye && me(n, t))
                    return i[t] = 4,
                    n[t];
                uo && (i[t] = 0)
            }
        }
        const c = Qn[t];
        let f, d;
        if (c)
            return t === "$attrs" && je(e.attrs, "get", ""),
            c(e);
        if ((f = l.__cssModules) && (f = f[t]))
            return f;
        if (n !== ye && me(n, t))
            return i[t] = 4,
            n[t];
        if (d = a.config.globalProperties,
        me(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return As(s, t) ? (s[t] = n,
        !0) : r !== ye && me(r, t) ? (r[t] = n,
        !0) : me(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o, type: i}}, l) {
        let a, u;
        return !!(n[l] || e !== ye && l[0] !== "$" && me(e, l) || As(t, l) || (a = o[0]) && me(a, l) || me(r, l) || me(Qn, l) || me(s.config.globalProperties, l) || (u = i.__cssModules) && u[l])
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Ii(e) {
    return ne(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let uo = !0;
function rd(e) {
    const t = ic(e)
      , n = e.proxy
      , r = e.ctx;
    uo = !1,
    t.beforeCreate && wi(t.beforeCreate, e, "bc");
    const {data: s, computed: o, methods: i, watch: l, provide: a, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: E, activated: S, deactivated: I, beforeDestroy: w, beforeUnmount: $, destroyed: _, unmounted: y, render: T, renderTracked: O, renderTriggered: N, errorCaptured: U, serverPrefetch: P, expose: W, inheritAttrs: Q, components: G, directives: Z, filters: Oe} = t;
    if (u && sd(u, r, null),
    i)
        for (const oe in i) {
            const Y = i[oe];
            le(Y) && (r[oe] = Y.bind(n))
        }
    if (s) {
        const oe = s.call(n, n);
        Te(oe) && (e.data = cs(oe))
    }
    if (uo = !0,
    o)
        for (const oe in o) {
            const Y = o[oe]
              , ge = le(Y) ? Y.bind(n, n) : le(Y.get) ? Y.get.bind(n, n) : Ot
              , Je = !le(Y) && le(Y.set) ? Y.set.bind(n) : Ot
              , we = Pe({
                get: ge,
                set: Je
            });
            Object.defineProperty(r, oe, {
                enumerable: !0,
                configurable: !0,
                get: () => we.value,
                set: Re => we.value = Re
            })
        }
    if (l)
        for (const oe in l)
            oc(l[oe], r, n, oe);
    if (a) {
        const oe = le(a) ? a.call(n) : a;
        Reflect.ownKeys(oe).forEach(Y => {
            $r(Y, oe[Y])
        }
        )
    }
    c && wi(c, e, "c");
    function J(oe, Y) {
        ne(Y) ? Y.forEach(ge => oe(ge.bind(n))) : Y && oe(Y.bind(n))
    }
    if (J(nc, f),
    J(At, d),
    J(Gf, h),
    J(Yf, E),
    J(Bf, S),
    J(qf, I),
    J(Qf, U),
    J(Jf, O),
    J(Xf, N),
    J(rc, $),
    J(Go, y),
    J(br, P),
    ne(W))
        if (W.length) {
            const oe = e.exposed || (e.exposed = {});
            W.forEach(Y => {
                Object.defineProperty(oe, Y, {
                    get: () => n[Y],
                    set: ge => n[Y] = ge,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    T && e.render === Ot && (e.render = T),
    Q != null && (e.inheritAttrs = Q),
    G && (e.components = G),
    Z && (e.directives = Z),
    P && Za(e)
}
function sd(e, t, n=Ot) {
    ne(e) && (e = fo(e));
    for (const r in e) {
        const s = e[r];
        let o;
        Te(s) ? "default"in s ? o = ft(s.from || r, s.default, !0) : o = ft(s.from || r) : o = ft(s),
        Fe(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[r] = o
    }
}
function wi(e, t, n) {
    wt(ne(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function oc(e, t, n, r) {
    let s = r.includes(".") ? bc(n, r) : () => n[r];
    if (ke(e)) {
        const o = t[e];
        le(o) && Ht(s, o)
    } else if (le(e))
        Ht(s, e.bind(n));
    else if (Te(e))
        if (ne(e))
            e.forEach(o => oc(o, t, n, r));
        else {
            const o = le(e.handler) ? e.handler.bind(n) : t[e.handler];
            le(o) && Ht(s, o, e)
        }
}
function ic(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: s, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , l = o.get(t);
    let a;
    return l ? a = l : !s.length && !n && !r ? a = t : (a = {},
    s.length && s.forEach(u => Xr(a, u, i, !0)),
    Xr(a, t, i)),
    Te(t) && o.set(t, a),
    a
}
function Xr(e, t, n, r=!1) {
    const {mixins: s, extends: o} = t;
    o && Xr(e, o, n, !0),
    s && s.forEach(i => Xr(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const l = od[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i]
        }
    return e
}
const od = {
    data: Ri,
    props: Ni,
    emits: Ni,
    methods: Yn,
    computed: Yn,
    beforeCreate: Ge,
    created: Ge,
    beforeMount: Ge,
    mounted: Ge,
    beforeUpdate: Ge,
    updated: Ge,
    beforeDestroy: Ge,
    beforeUnmount: Ge,
    destroyed: Ge,
    unmounted: Ge,
    activated: Ge,
    deactivated: Ge,
    errorCaptured: Ge,
    serverPrefetch: Ge,
    components: Yn,
    directives: Yn,
    watch: ld,
    provide: Ri,
    inject: id
};
function Ri(e, t) {
    return t ? e ? function() {
        return qe(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t)
    }
    : t : e
}
function id(e, t) {
    return Yn(fo(e), fo(t))
}
function fo(e) {
    if (ne(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Ge(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Yn(e, t) {
    return e ? qe(Object.create(null), e, t) : t
}
function Ni(e, t) {
    return e ? ne(e) && ne(t) ? [...new Set([...e, ...t])] : qe(Object.create(null), Ii(e), Ii(t ?? {})) : t
}
function ld(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = qe(Object.create(null), e);
    for (const r in t)
        n[r] = Ge(e[r], t[r]);
    return n
}
function lc() {
    return {
        app: null,
        config: {
            isNativeTag: ba,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let ad = 0;
function cd(e, t) {
    return function(r, s=null) {
        le(r) || (r = qe({}, r)),
        s != null && !Te(s) && (s = null);
        const o = lc()
          , i = new WeakSet
          , l = [];
        let a = !1;
        const u = o.app = {
            _uid: ad++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Vd,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...f) {
                return i.has(c) || (c && le(c.install) ? (i.add(c),
                c.install(u, ...f)) : le(c) && (i.add(c),
                c(u, ...f))),
                u
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c),
                u
            },
            component(c, f) {
                return f ? (o.components[c] = f,
                u) : o.components[c]
            },
            directive(c, f) {
                return f ? (o.directives[c] = f,
                u) : o.directives[c]
            },
            mount(c, f, d) {
                if (!a) {
                    const h = u._ceVNode || Le(r, s);
                    return h.appContext = o,
                    d === !0 ? d = "svg" : d === !1 && (d = void 0),
                    f && t ? t(h, c) : e(h, c, d),
                    a = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    ms(h.component)
                }
            },
            onUnmount(c) {
                l.push(c)
            },
            unmount() {
                a && (wt(l, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, f) {
                return o.provides[c] = f,
                u
            },
            runWithContext(c) {
                const f = Rn;
                Rn = u;
                try {
                    return c()
                } finally {
                    Rn = f
                }
            }
        };
        return u
    }
}
let Rn = null;
function $r(e, t) {
    if (Be) {
        let n = Be.provides;
        const r = Be.parent && Be.parent.provides;
        r === n && (n = Be.provides = Object.create(r)),
        n[e] = t
    }
}
function ft(e, t, n=!1) {
    const r = xn();
    if (r || Rn) {
        let s = Rn ? Rn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && le(t) ? t.call(r && r.proxy) : t
    }
}
const ac = {}
  , cc = () => Object.create(ac)
  , uc = e => Object.getPrototypeOf(e) === ac;
function ud(e, t, n, r=!1) {
    const s = {}
      , o = cc();
    e.propsDefaults = Object.create(null),
    fc(e, t, s, o);
    for (const i in e.propsOptions[0])
        i in s || (s[i] = void 0);
    n ? e.props = r ? s : Ba(s) : e.type.props ? e.props = s : e.props = o,
    e.attrs = o
}
function fd(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: i}} = e
      , l = de(s)
      , [a] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (ps(e.emitsOptions, d))
                    continue;
                const h = t[d];
                if (a)
                    if (me(o, d))
                        h !== o[d] && (o[d] = h,
                        u = !0);
                    else {
                        const E = ht(d);
                        s[E] = ho(a, l, E, h, e, !1)
                    }
                else
                    h !== o[d] && (o[d] = h,
                    u = !0)
            }
        }
    } else {
        fc(e, t, s, o) && (u = !0);
        let c;
        for (const f in l)
            (!t || !me(t, f) && ((c = nn(f)) === f || !me(t, c))) && (a ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = ho(a, l, f, void 0, e, !0)) : delete s[f]);
        if (o !== l)
            for (const f in o)
                (!t || !me(t, f)) && (delete o[f],
                u = !0)
    }
    u && Dt(e.attrs, "set", "")
}
function fc(e, t, n, r) {
    const [s,o] = e.propsOptions;
    let i = !1, l;
    if (t)
        for (let a in t) {
            if (On(a))
                continue;
            const u = t[a];
            let c;
            s && me(s, c = ht(a)) ? !o || !o.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : ps(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u,
            i = !0)
        }
    if (o) {
        const a = de(n)
          , u = l || ye;
        for (let c = 0; c < o.length; c++) {
            const f = o[c];
            n[f] = ho(s, a, f, u[f], e, !me(u, f))
        }
    }
    return i
}
function ho(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const l = me(i, "default");
        if (l && r === void 0) {
            const a = i.default;
            if (i.type !== Function && !i.skipFactory && le(a)) {
                const {propsDefaults: u} = s;
                if (n in u)
                    r = u[n];
                else {
                    const c = Cr(s);
                    r = u[n] = a.call(null, t),
                    c()
                }
            } else
                r = a;
            s.ce && s.ce._setProp(n, r)
        }
        i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === nn(n)) && (r = !0))
    }
    return r
}
const dd = new WeakMap;
function dc(e, t, n=!1) {
    const r = n ? dd : t.propsCache
      , s = r.get(e);
    if (s)
        return s;
    const o = e.props
      , i = {}
      , l = [];
    let a = !1;
    if (!le(e)) {
        const c = f => {
            a = !0;
            const [d,h] = dc(f, t, !0);
            qe(i, d),
            h && l.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !a)
        return Te(e) && r.set(e, Sn),
        Sn;
    if (ne(o))
        for (let c = 0; c < o.length; c++) {
            const f = ht(o[c]);
            Ai(f) && (i[f] = ye)
        }
    else if (o)
        for (const c in o) {
            const f = ht(c);
            if (Ai(f)) {
                const d = o[c]
                  , h = i[f] = ne(d) || le(d) ? {
                    type: d
                } : qe({}, d)
                  , E = h.type;
                let S = !1
                  , I = !0;
                if (ne(E))
                    for (let w = 0; w < E.length; ++w) {
                        const $ = E[w]
                          , _ = le($) && $.name;
                        if (_ === "Boolean") {
                            S = !0;
                            break
                        } else
                            _ === "String" && (I = !1)
                    }
                else
                    S = le(E) && E.name === "Boolean";
                h[0] = S,
                h[1] = I,
                (S || me(h, "default")) && l.push(f)
            }
        }
    const u = [i, l];
    return Te(e) && r.set(e, u),
    u
}
function Ai(e) {
    return e[0] !== "$" && !On(e)
}
const Yo = e => e === "_" || e === "_ctx" || e === "$stable"
  , Xo = e => ne(e) ? e.map(lt) : [lt(e)]
  , hd = (e, t, n) => {
    if (t._n)
        return t;
    const r = fs( (...s) => Xo(t(...s)), n);
    return r._c = !1,
    r
}
  , hc = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (Yo(s))
            continue;
        const o = e[s];
        if (le(o))
            t[s] = hd(s, o, r);
        else if (o != null) {
            const i = Xo(o);
            t[s] = () => i
        }
    }
}
  , pc = (e, t) => {
    const n = Xo(t);
    e.slots.default = () => n
}
  , mc = (e, t, n) => {
    for (const r in t)
        (n || !Yo(r)) && (e[r] = t[r])
}
  , pd = (e, t, n) => {
    const r = e.slots = cc();
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (mc(r, t, n),
        n && Sa(r, "_", s, !0)) : hc(t, r)
    } else
        t && pc(e, t)
}
  , md = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let o = !0
      , i = ye;
    if (r.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : mc(s, t, n) : (o = !t.$stable,
        hc(t, s)),
        i = t
    } else
        t && (pc(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const l in s)
            !Yo(l) && i[l] == null && delete s[l]
}
  , nt = Sc;
function _d(e) {
    return gd(e, Wf)
}
function gd(e, t) {
    const n = is();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: o, createElement: i, createText: l, createComment: a, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h=Ot, insertStaticContent: E} = e
      , S = (v, p, C, D=null, x=null, F=null, B=void 0, m=null, g=!!p.dynamicChildren) => {
        if (v === p)
            return;
        v && !qn(v, p) && (D = k(v),
        Re(v, x, F, !0),
        v = null),
        p.patchFlag === -2 && (g = !1,
        p.dynamicChildren = null);
        const {type: b, ref: M, shapeFlag: V} = p;
        switch (b) {
        case zt:
            I(v, p, C, D);
            break;
        case Rt:
            w(v, p, C, D);
            break;
        case zn:
            v == null && $(p, C, D, B);
            break;
        case Ne:
            G(v, p, C, D, x, F, B, m, g);
            break;
        default:
            V & 1 ? T(v, p, C, D, x, F, B, m, g) : V & 6 ? Z(v, p, C, D, x, F, B, m, g) : (V & 64 || V & 128) && b.process(v, p, C, D, x, F, B, m, g, X)
        }
        M != null && x ? wn(M, v && v.ref, F, p || v, !p) : M == null && v && v.ref != null && wn(v.ref, null, F, v, !0)
    }
      , I = (v, p, C, D) => {
        if (v == null)
            r(p.el = l(p.children), C, D);
        else {
            const x = p.el = v.el;
            p.children !== v.children && u(x, p.children)
        }
    }
      , w = (v, p, C, D) => {
        v == null ? r(p.el = a(p.children || ""), C, D) : p.el = v.el
    }
      , $ = (v, p, C, D) => {
        [v.el,v.anchor] = E(v.children, p, C, D, v.el, v.anchor)
    }
      , _ = ({el: v, anchor: p}, C, D) => {
        let x;
        for (; v && v !== p; )
            x = d(v),
            r(v, C, D),
            v = x;
        r(p, C, D)
    }
      , y = ({el: v, anchor: p}) => {
        let C;
        for (; v && v !== p; )
            C = d(v),
            s(v),
            v = C;
        s(p)
    }
      , T = (v, p, C, D, x, F, B, m, g) => {
        p.type === "svg" ? B = "svg" : p.type === "math" && (B = "mathml"),
        v == null ? O(p, C, D, x, F, B, m, g) : P(v, p, x, F, B, m, g)
    }
      , O = (v, p, C, D, x, F, B, m) => {
        let g, b;
        const {props: M, shapeFlag: V, transition: H, dirs: L} = v;
        if (g = v.el = i(v.type, F, M && M.is, M),
        V & 8 ? c(g, v.children) : V & 16 && U(v.children, g, null, D, x, Ps(v, F), B, m),
        L && St(v, null, D, "created"),
        N(g, v, v.scopeId, B, D),
        M) {
            for (const z in M)
                z !== "value" && !On(z) && o(g, z, null, M[z], F, D);
            "value"in M && o(g, "value", null, M.value, F),
            (b = M.onVnodeBeforeMount) && it(b, D, v)
        }
        L && St(v, null, D, "beforeMount");
        const A = _c(x, H);
        A && H.beforeEnter(g),
        r(g, p, C),
        ((b = M && M.onVnodeMounted) || A || L) && nt( () => {
            b && it(b, D, v),
            A && H.enter(g),
            L && St(v, null, D, "mounted")
        }
        , x)
    }
      , N = (v, p, C, D, x) => {
        if (C && h(v, C),
        D)
            for (let F = 0; F < D.length; F++)
                h(v, D[F]);
        if (x) {
            let F = x.subTree;
            if (p === F || Cc(F.type) && (F.ssContent === p || F.ssFallback === p)) {
                const B = x.vnode;
                N(v, B, B.scopeId, B.slotScopeIds, x.parent)
            }
        }
    }
      , U = (v, p, C, D, x, F, B, m, g=0) => {
        for (let b = g; b < v.length; b++) {
            const M = v[b] = m ? Yt(v[b]) : lt(v[b]);
            S(null, M, p, C, D, x, F, B, m)
        }
    }
      , P = (v, p, C, D, x, F, B) => {
        const m = p.el = v.el;
        let {patchFlag: g, dynamicChildren: b, dirs: M} = p;
        g |= v.patchFlag & 16;
        const V = v.props || ye
          , H = p.props || ye;
        let L;
        if (C && ln(C, !1),
        (L = H.onVnodeBeforeUpdate) && it(L, C, p, v),
        M && St(p, v, C, "beforeUpdate"),
        C && ln(C, !0),
        (V.innerHTML && H.innerHTML == null || V.textContent && H.textContent == null) && c(m, ""),
        b ? W(v.dynamicChildren, b, m, C, D, Ps(p, x), F) : B || Y(v, p, m, null, C, D, Ps(p, x), F, !1),
        g > 0) {
            if (g & 16)
                Q(m, V, H, C, x);
            else if (g & 2 && V.class !== H.class && o(m, "class", null, H.class, x),
            g & 4 && o(m, "style", V.style, H.style, x),
            g & 8) {
                const A = p.dynamicProps;
                for (let z = 0; z < A.length; z++) {
                    const ee = A[z]
                      , Ie = V[ee]
                      , Ae = H[ee];
                    (Ae !== Ie || ee === "value") && o(m, ee, Ie, Ae, x, C)
                }
            }
            g & 1 && v.children !== p.children && c(m, p.children)
        } else
            !B && b == null && Q(m, V, H, C, x);
        ((L = H.onVnodeUpdated) || M) && nt( () => {
            L && it(L, C, p, v),
            M && St(p, v, C, "updated")
        }
        , D)
    }
      , W = (v, p, C, D, x, F, B) => {
        for (let m = 0; m < p.length; m++) {
            const g = v[m]
              , b = p[m]
              , M = g.el && (g.type === Ne || !qn(g, b) || g.shapeFlag & 198) ? f(g.el) : C;
            S(g, b, M, null, D, x, F, B, !0)
        }
    }
      , Q = (v, p, C, D, x) => {
        if (p !== C) {
            if (p !== ye)
                for (const F in p)
                    !On(F) && !(F in C) && o(v, F, p[F], null, x, D);
            for (const F in C) {
                if (On(F))
                    continue;
                const B = C[F]
                  , m = p[F];
                B !== m && F !== "value" && o(v, F, m, B, x, D)
            }
            "value"in C && o(v, "value", p.value, C.value, x)
        }
    }
      , G = (v, p, C, D, x, F, B, m, g) => {
        const b = p.el = v ? v.el : l("")
          , M = p.anchor = v ? v.anchor : l("");
        let {patchFlag: V, dynamicChildren: H, slotScopeIds: L} = p;
        L && (m = m ? m.concat(L) : L),
        v == null ? (r(b, C, D),
        r(M, C, D),
        U(p.children || [], C, M, x, F, B, m, g)) : V > 0 && V & 64 && H && v.dynamicChildren ? (W(v.dynamicChildren, H, C, x, F, B, m),
        (p.key != null || x && p === x.subTree) && gc(v, p, !0)) : Y(v, p, C, M, x, F, B, m, g)
    }
      , Z = (v, p, C, D, x, F, B, m, g) => {
        p.slotScopeIds = m,
        v == null ? p.shapeFlag & 512 ? x.ctx.activate(p, C, D, B, g) : Oe(p, C, D, x, F, B, g) : Se(v, p, g)
    }
      , Oe = (v, p, C, D, x, F, B) => {
        const m = v.component = kd(v, D, x);
        if (ec(v) && (m.ctx.renderer = X),
        $d(m, !1, B),
        m.asyncDep) {
            if (x && x.registerDep(m, J, B),
            !v.el) {
                const g = m.subTree = Le(Rt);
                w(null, g, p, C),
                v.placeholder = g.el
            }
        } else
            J(m, v, p, C, x, F, B)
    }
      , Se = (v, p, C) => {
        const D = p.component = v.component;
        if (Od(v, p, C))
            if (D.asyncDep && !D.asyncResolved) {
                oe(D, p, C);
                return
            } else
                D.next = p,
                D.update();
        else
            p.el = v.el,
            D.vnode = p
    }
      , J = (v, p, C, D, x, F, B) => {
        const m = () => {
            if (v.isMounted) {
                let {next: V, bu: H, u: L, parent: A, vnode: z} = v;
                {
                    const Ke = vc(v);
                    if (Ke) {
                        V && (V.el = z.el,
                        oe(v, V, B)),
                        Ke.asyncDep.then( () => {
                            v.isUnmounted || m()
                        }
                        );
                        return
                    }
                }
                let ee = V, Ie;
                ln(v, !1),
                V ? (V.el = z.el,
                oe(v, V, B)) : V = z,
                H && kr(H),
                (Ie = V.props && V.props.onVnodeBeforeUpdate) && it(Ie, A, V, z),
                ln(v, !0);
                const Ae = xs(v)
                  , De = v.subTree;
                v.subTree = Ae,
                S(De, Ae, f(De.el), k(De), v, x, F),
                V.el = Ae.el,
                ee === null && Tc(v, Ae.el),
                L && nt(L, x),
                (Ie = V.props && V.props.onVnodeUpdated) && nt( () => it(Ie, A, V, z), x)
            } else {
                let V;
                const {el: H, props: L} = p
                  , {bm: A, m: z, parent: ee, root: Ie, type: Ae} = v
                  , De = pn(p);
                if (ln(v, !1),
                A && kr(A),
                !De && (V = L && L.onVnodeBeforeMount) && it(V, ee, p),
                ln(v, !0),
                H && he) {
                    const Ke = () => {
                        v.subTree = xs(v),
                        he(H, v.subTree, v, x, null)
                    }
                    ;
                    De && Ae.__asyncHydrate ? Ae.__asyncHydrate(H, v, Ke) : Ke()
                } else {
                    Ie.ce && Ie.ce._def.shadowRoot !== !1 && Ie.ce._injectChildStyle(Ae);
                    const Ke = v.subTree = xs(v);
                    S(null, Ke, C, D, v, x, F),
                    p.el = Ke.el
                }
                if (z && nt(z, x),
                !De && (V = L && L.onVnodeMounted)) {
                    const Ke = p;
                    nt( () => it(V, ee, Ke), x)
                }
                (p.shapeFlag & 256 || ee && pn(ee.vnode) && ee.vnode.shapeFlag & 256) && v.a && nt(v.a, x),
                v.isMounted = !0,
                p = C = D = null
            }
        }
        ;
        v.scope.on();
        const g = v.effect = new Na(m);
        v.scope.off();
        const b = v.update = g.run.bind(g)
          , M = v.job = g.runIfDirty.bind(g);
        M.i = v,
        M.id = v.uid,
        g.scheduler = () => qo(M),
        ln(v, !0),
        b()
    }
      , oe = (v, p, C) => {
        p.component = v;
        const D = v.vnode.props;
        v.vnode = p,
        v.next = null,
        fd(v, p.props, D, C),
        md(v, p.children, C),
        Vt(),
        Ti(v),
        Wt()
    }
      , Y = (v, p, C, D, x, F, B, m, g=!1) => {
        const b = v && v.children
          , M = v ? v.shapeFlag : 0
          , V = p.children
          , {patchFlag: H, shapeFlag: L} = p;
        if (H > 0) {
            if (H & 128) {
                Je(b, V, C, D, x, F, B, m, g);
                return
            } else if (H & 256) {
                ge(b, V, C, D, x, F, B, m, g);
                return
            }
        }
        L & 8 ? (M & 16 && Me(b, x, F),
        V !== b && c(C, V)) : M & 16 ? L & 16 ? Je(b, V, C, D, x, F, B, m, g) : Me(b, x, F, !0) : (M & 8 && c(C, ""),
        L & 16 && U(V, C, D, x, F, B, m, g))
    }
      , ge = (v, p, C, D, x, F, B, m, g) => {
        v = v || Sn,
        p = p || Sn;
        const b = v.length
          , M = p.length
          , V = Math.min(b, M);
        let H;
        for (H = 0; H < V; H++) {
            const L = p[H] = g ? Yt(p[H]) : lt(p[H]);
            S(v[H], L, C, null, x, F, B, m, g)
        }
        b > M ? Me(v, x, F, !0, !1, V) : U(p, C, D, x, F, B, m, g, V)
    }
      , Je = (v, p, C, D, x, F, B, m, g) => {
        let b = 0;
        const M = p.length;
        let V = v.length - 1
          , H = M - 1;
        for (; b <= V && b <= H; ) {
            const L = v[b]
              , A = p[b] = g ? Yt(p[b]) : lt(p[b]);
            if (qn(L, A))
                S(L, A, C, null, x, F, B, m, g);
            else
                break;
            b++
        }
        for (; b <= V && b <= H; ) {
            const L = v[V]
              , A = p[H] = g ? Yt(p[H]) : lt(p[H]);
            if (qn(L, A))
                S(L, A, C, null, x, F, B, m, g);
            else
                break;
            V--,
            H--
        }
        if (b > V) {
            if (b <= H) {
                const L = H + 1
                  , A = L < M ? p[L].el : D;
                for (; b <= H; )
                    S(null, p[b] = g ? Yt(p[b]) : lt(p[b]), C, A, x, F, B, m, g),
                    b++
            }
        } else if (b > H)
            for (; b <= V; )
                Re(v[b], x, F, !0),
                b++;
        else {
            const L = b
              , A = b
              , z = new Map;
            for (b = A; b <= H; b++) {
                const tt = p[b] = g ? Yt(p[b]) : lt(p[b]);
                tt.key != null && z.set(tt.key, b)
            }
            let ee, Ie = 0;
            const Ae = H - A + 1;
            let De = !1
              , Ke = 0;
            const mn = new Array(Ae);
            for (b = 0; b < Ae; b++)
                mn[b] = 0;
            for (b = L; b <= V; b++) {
                const tt = v[b];
                if (Ie >= Ae) {
                    Re(tt, x, F, !0);
                    continue
                }
                let Tt;
                if (tt.key != null)
                    Tt = z.get(tt.key);
                else
                    for (ee = A; ee <= H; ee++)
                        if (mn[ee - A] === 0 && qn(tt, p[ee])) {
                            Tt = ee;
                            break
                        }
                Tt === void 0 ? Re(tt, x, F, !0) : (mn[Tt - A] = b + 1,
                Tt >= Ke ? Ke = Tt : De = !0,
                S(tt, p[Tt], C, null, x, F, B, m, g),
                Ie++)
            }
            const mi = De ? vd(mn) : Sn;
            for (ee = mi.length - 1,
            b = Ae - 1; b >= 0; b--) {
                const tt = A + b
                  , Tt = p[tt]
                  , _i = p[tt + 1]
                  , gi = tt + 1 < M ? _i.el || _i.placeholder : D;
                mn[b] === 0 ? S(null, Tt, C, gi, x, F, B, m, g) : De && (ee < 0 || b !== mi[ee] ? we(Tt, C, gi, 2) : ee--)
            }
        }
    }
      , we = (v, p, C, D, x=null) => {
        const {el: F, type: B, transition: m, children: g, shapeFlag: b} = v;
        if (b & 6) {
            we(v.component.subTree, p, C, D);
            return
        }
        if (b & 128) {
            v.suspense.move(p, C, D);
            return
        }
        if (b & 64) {
            B.move(v, p, C, X);
            return
        }
        if (B === Ne) {
            r(F, p, C);
            for (let V = 0; V < g.length; V++)
                we(g[V], p, C, D);
            r(v.anchor, p, C);
            return
        }
        if (B === zn) {
            _(v, p, C);
            return
        }
        if (D !== 2 && b & 1 && m)
            if (D === 0)
                m.beforeEnter(F),
                r(F, p, C),
                nt( () => m.enter(F), x);
            else {
                const {leave: V, delayLeave: H, afterLeave: L} = m
                  , A = () => {
                    v.ctx.isUnmounted ? s(F) : r(F, p, C)
                }
                  , z = () => {
                    F._isLeaving && F[Uf](!0),
                    V(F, () => {
                        A(),
                        L && L()
                    }
                    )
                }
                ;
                H ? H(F, A, z) : z()
            }
        else
            r(F, p, C)
    }
      , Re = (v, p, C, D=!1, x=!1) => {
        const {type: F, props: B, ref: m, children: g, dynamicChildren: b, shapeFlag: M, patchFlag: V, dirs: H, cacheIndex: L} = v;
        if (V === -2 && (x = !1),
        m != null && (Vt(),
        wn(m, null, C, v, !0),
        Wt()),
        L != null && (p.renderCache[L] = void 0),
        M & 256) {
            p.ctx.deactivate(v);
            return
        }
        const A = M & 1 && H
          , z = !pn(v);
        let ee;
        if (z && (ee = B && B.onVnodeBeforeUnmount) && it(ee, p, v),
        M & 6)
            Et(v.component, C, D);
        else {
            if (M & 128) {
                v.suspense.unmount(C, D);
                return
            }
            A && St(v, null, p, "beforeUnmount"),
            M & 64 ? v.type.remove(v, p, C, X, D) : b && !b.hasOnce && (F !== Ne || V > 0 && V & 64) ? Me(b, p, C, !1, !0) : (F === Ne && V & 384 || !x && M & 16) && Me(g, p, C),
            D && ot(v)
        }
        (z && (ee = B && B.onVnodeUnmounted) || A) && nt( () => {
            ee && it(ee, p, v),
            A && St(v, null, p, "unmounted")
        }
        , C)
    }
      , ot = v => {
        const {type: p, el: C, anchor: D, transition: x} = v;
        if (p === Ne) {
            et(C, D);
            return
        }
        if (p === zn) {
            y(v);
            return
        }
        const F = () => {
            s(C),
            x && !x.persisted && x.afterLeave && x.afterLeave()
        }
        ;
        if (v.shapeFlag & 1 && x && !x.persisted) {
            const {leave: B, delayLeave: m} = x
              , g = () => B(C, F);
            m ? m(v.el, F, g) : g()
        } else
            F()
    }
      , et = (v, p) => {
        let C;
        for (; v !== p; )
            C = d(v),
            s(v),
            v = C;
        s(p)
    }
      , Et = (v, p, C) => {
        const {bum: D, scope: x, job: F, subTree: B, um: m, m: g, a: b} = v;
        Pi(g),
        Pi(b),
        D && kr(D),
        x.stop(),
        F && (F.flags |= 8,
        Re(B, v, p, C)),
        m && nt(m, p),
        nt( () => {
            v.isUnmounted = !0
        }
        , p)
    }
      , Me = (v, p, C, D=!1, x=!1, F=0) => {
        for (let B = F; B < v.length; B++)
            Re(v[B], p, C, D, x)
    }
      , k = v => {
        if (v.shapeFlag & 6)
            return k(v.component.subTree);
        if (v.shapeFlag & 128)
            return v.suspense.next();
        const p = d(v.anchor || v.el)
          , C = p && p[Df];
        return C ? d(C) : p
    }
    ;
    let K = !1;
    const j = (v, p, C) => {
        v == null ? p._vnode && Re(p._vnode, null, null, !0) : S(p._vnode || null, v, p, null, null, null, C),
        p._vnode = v,
        K || (K = !0,
        Ti(),
        qr(),
        K = !1)
    }
      , X = {
        p: S,
        um: Re,
        m: we,
        r: ot,
        mt: Oe,
        mc: U,
        pc: Y,
        pbc: W,
        n: k,
        o: e
    };
    let ce, he;
    return t && ([ce,he] = t(X)),
    {
        render: j,
        hydrate: ce,
        createApp: cd(j, ce)
    }
}
function Ps({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function ln({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function _c(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function gc(e, t, n=!1) {
    const r = e.children
      , s = t.children;
    if (ne(r) && ne(s))
        for (let o = 0; o < r.length; o++) {
            const i = r[o];
            let l = s[o];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = Yt(s[o]),
            l.el = i.el),
            !n && l.patchFlag !== -2 && gc(i, l)),
            l.type === zt && l.patchFlag !== -1 && (l.el = i.el),
            l.type === Rt && !l.el && (l.el = i.el)
        }
}
function vd(e) {
    const t = e.slice()
      , n = [0];
    let r, s, o, i, l;
    const a = e.length;
    for (r = 0; r < a; r++) {
        const u = e[r];
        if (u !== 0) {
            if (s = n[n.length - 1],
            e[s] < u) {
                t[r] = s,
                n.push(r);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                l = o + i >> 1,
                e[n[l]] < u ? o = l + 1 : i = l;
            u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
function vc(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : vc(t)
}
function Pi(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const yd = Symbol.for("v-scx")
  , Er = () => ft(yd);
function Ht(e, t, n) {
    return yc(e, t, n)
}
function yc(e, t, n=ye) {
    const {immediate: r, deep: s, flush: o, once: i} = n
      , l = qe({}, n)
      , a = t && r || !t && o !== "post";
    let u;
    if (cr) {
        if (o === "sync") {
            const h = Er();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!a) {
            const h = () => {}
            ;
            return h.stop = Ot,
            h.resume = Ot,
            h.pause = Ot,
            h
        }
    }
    const c = Be;
    l.call = (h, E, S) => wt(h, c, E, S);
    let f = !1;
    o === "post" ? l.scheduler = h => {
        nt(h, c && c.suspense)
    }
    : o !== "sync" && (f = !0,
    l.scheduler = (h, E) => {
        E ? h() : qo(h)
    }
    ),
    l.augmentJob = h => {
        t && (h.flags |= 4),
        f && (h.flags |= 2,
        c && (h.id = c.uid,
        h.i = c))
    }
    ;
    const d = xf(e, t, l);
    return cr && (u ? u.push(d) : a && d()),
    d
}
function bd(e, t, n) {
    const r = this.proxy
      , s = ke(e) ? e.includes(".") ? bc(r, e) : () => r[e] : e.bind(r, r);
    let o;
    le(t) ? o = t : (o = t.handler,
    n = t);
    const i = Cr(this)
      , l = yc(s, o.bind(r), n);
    return i(),
    l
}
function bc(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
const Ed = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ht(t)}Modifiers`] || e[`${nn(t)}Modifiers`];
function Td(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || ye;
    let s = n;
    const o = t.startsWith("update:")
      , i = o && Ed(r, t.slice(7));
    i && (i.trim && (s = n.map(c => ke(c) ? c.trim() : c)),
    i.number && (s = n.map(Hr)));
    let l, a = r[l = Os(t)] || r[l = Os(ht(t))];
    !a && o && (a = r[l = Os(nn(t))]),
    a && wt(a, e, 6, s);
    const u = r[l + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        wt(u, e, 6, s)
    }
}
const Cd = new WeakMap;
function Ec(e, t, n=!1) {
    const r = n ? Cd : t.emitsCache
      , s = r.get(e);
    if (s !== void 0)
        return s;
    const o = e.emits;
    let i = {}
      , l = !1;
    if (!le(e)) {
        const a = u => {
            const c = Ec(u, t, !0);
            c && (l = !0,
            qe(i, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(a),
        e.extends && a(e.extends),
        e.mixins && e.mixins.forEach(a)
    }
    return !o && !l ? (Te(e) && r.set(e, null),
    null) : (ne(o) ? o.forEach(a => i[a] = null) : qe(i, o),
    Te(e) && r.set(e, i),
    i)
}
function ps(e, t) {
    return !e || !_r(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    me(e, t[0].toLowerCase() + t.slice(1)) || me(e, nn(t)) || me(e, t))
}
function xs(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: i, attrs: l, emit: a, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: E, inheritAttrs: S} = e
      , I = Kr(e);
    let w, $;
    try {
        if (n.shapeFlag & 4) {
            const y = s || r
              , T = y;
            w = lt(u.call(T, y, c, f, h, d, E)),
            $ = l
        } else {
            const y = t;
            w = lt(y.length > 1 ? y(f, {
                attrs: l,
                slots: i,
                emit: a
            }) : y(f, null)),
            $ = t.props ? l : Sd(l)
        }
    } catch (y) {
        Zn.length = 0,
        us(y, e, 1),
        w = Le(Rt)
    }
    let _ = w;
    if ($ && S !== !1) {
        const y = Object.keys($)
          , {shapeFlag: T} = _;
        y.length && T & 7 && (o && y.some(ko) && ($ = Ld($, o)),
        _ = Pn(_, $, !1, !0))
    }
    return n.dirs && (_ = Pn(_, null, !1, !0),
    _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs),
    n.transition && Ko(_, n.transition),
    w = _,
    Kr(I),
    w
}
const Sd = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || _r(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , Ld = (e, t) => {
    const n = {};
    for (const r in e)
        (!ko(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function Od(e, t, n) {
    const {props: r, children: s, component: o} = e
      , {props: i, children: l, patchFlag: a} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && a >= 0) {
        if (a & 1024)
            return !0;
        if (a & 16)
            return r ? xi(r, i, u) : !!i;
        if (a & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (i[d] !== r[d] && !ps(u, d))
                    return !0
            }
        }
    } else
        return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? xi(r, i, u) : !0 : !!i;
    return !1
}
function xi(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !ps(n, o))
            return !0
    }
    return !1
}
function Tc({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Cc = e => e.__isSuspense;
function Sc(e, t) {
    t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Mf(e)
}
const Ne = Symbol.for("v-fgt")
  , zt = Symbol.for("v-txt")
  , Rt = Symbol.for("v-cmt")
  , zn = Symbol.for("v-stc")
  , Zn = [];
let rt = null;
function re(e=!1) {
    Zn.push(rt = e ? null : [])
}
function Id() {
    Zn.pop(),
    rt = Zn[Zn.length - 1] || null
}
let lr = 1;
function Jr(e, t=!1) {
    lr += e,
    e < 0 && rt && t && (rt.hasOnce = !0)
}
function Lc(e) {
    return e.dynamicChildren = lr > 0 ? rt || Sn : null,
    Id(),
    lr > 0 && rt && rt.push(e),
    e
}
function ue(e, t, n, r, s, o) {
    return Lc(R(e, t, n, r, s, o, !0))
}
function dt(e, t, n, r, s) {
    return Lc(Le(e, t, n, r, s, !0))
}
function ar(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function qn(e, t) {
    return e.type === t.type && e.key === t.key
}
const Oc = ({key: e}) => e ?? null
  , Mr = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? ke(e) || Fe(e) || le(e) ? {
    i: Ve,
    r: e,
    k: t,
    f: !!n
} : e : null);
function R(e, t=null, n=null, r=0, s=null, o=e === Ne ? 0 : 1, i=!1, l=!1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Oc(t),
        ref: t && Mr(t),
        scopeId: za,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: Ve
    };
    return l ? (Jo(a, n),
    o & 128 && e.normalize(a)) : n && (a.shapeFlag |= ke(n) ? 8 : 16),
    lr > 0 && !i && rt && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && rt.push(a),
    a
}
const Le = wd;
function wd(e, t=null, n=null, r=0, s=null, o=!1) {
    if ((!e || e === Zf) && (e = Rt),
    ar(e)) {
        const l = Pn(e, t, !0);
        return n && Jo(l, n),
        lr > 0 && !o && rt && (l.shapeFlag & 6 ? rt[rt.indexOf(e)] = l : rt.push(l)),
        l.patchFlag = -2,
        l
    }
    if (Hd(e) && (e = e.__vccOpts),
    t) {
        t = Rd(t);
        let {class: l, style: a} = t;
        l && !ke(l) && (t.class = An(l)),
        Te(a) && (jo(a) && !ne(a) && (a = qe({}, a)),
        t.style = nr(a))
    }
    const i = ke(e) ? 1 : Cc(e) ? 128 : Ff(e) ? 64 : Te(e) ? 4 : le(e) ? 2 : 0;
    return R(e, t, n, r, s, i, o, !0)
}
function Rd(e) {
    return e ? jo(e) || uc(e) ? qe({}, e) : e : null
}
function Pn(e, t, n=!1, r=!1) {
    const {props: s, ref: o, patchFlag: i, children: l, transition: a} = e
      , u = t ? Ad(s || {}, t) : s
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Oc(u),
        ref: t && t.ref ? n && o ? ne(o) ? o.concat(Mr(t)) : [o, Mr(t)] : Mr(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ne ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: a,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Pn(e.ssContent),
        ssFallback: e.ssFallback && Pn(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return a && r && Ko(c, a.clone(c)),
    c
}
function Tr(e=" ", t=0) {
    return Le(zt, null, e, t)
}
function Nd(e, t) {
    const n = Le(zn, null, e);
    return n.staticCount = t,
    n
}
function yt(e="", t=!1) {
    return t ? (re(),
    dt(Rt, null, e)) : Le(Rt, null, e)
}
function lt(e) {
    return e == null || typeof e == "boolean" ? Le(Rt) : ne(e) ? Le(Ne, null, e.slice()) : ar(e) ? Yt(e) : Le(zt, null, String(e))
}
function Yt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pn(e)
}
function Jo(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (ne(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            Jo(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !uc(t) ? t._ctx = Ve : s === 3 && Ve && (Ve.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        le(t) ? (t = {
            default: t,
            _ctx: Ve
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Tr(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ad(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = An([t.class, r.class]));
            else if (s === "style")
                t.style = nr([t.style, r.style]);
            else if (_r(s)) {
                const o = t[s]
                  , i = r[s];
                i && o !== i && !(ne(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
            } else
                s !== "" && (t[s] = r[s])
    }
    return t
}
function it(e, t, n, r=null) {
    wt(e, t, 7, [n, r])
}
const Pd = lc();
let xd = 0;
function kd(e, t, n) {
    const r = e.type
      , s = (t ? t.appContext : e.appContext) || Pd
      , o = {
        uid: xd++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new wa(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: dc(r, s),
        emitsOptions: Ec(r, s),
        emit: null,
        emitted: null,
        propsDefaults: ye,
        inheritAttrs: r.inheritAttrs,
        ctx: ye,
        data: ye,
        props: ye,
        attrs: ye,
        slots: ye,
        refs: ye,
        setupState: ye,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = Td.bind(null, o),
    e.ce && e.ce(o),
    o
}
let Be = null;
const xn = () => Be || Ve;
let Qr, po;
{
    const e = is()
      , t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []),
        s.push(r),
        o => {
            s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
        }
    }
    ;
    Qr = t("__VUE_INSTANCE_SETTERS__", n => Be = n),
    po = t("__VUE_SSR_SETTERS__", n => cr = n)
}
const Cr = e => {
    const t = Be;
    return Qr(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Qr(t)
    }
}
  , ki = () => {
    Be && Be.scope.off(),
    Qr(null)
}
;
function Ic(e) {
    return e.vnode.shapeFlag & 4
}
let cr = !1;
function $d(e, t=!1, n=!1) {
    t && po(t);
    const {props: r, children: s} = e.vnode
      , o = Ic(e);
    ud(e, r, o, t),
    pd(e, s, n || t);
    const i = o ? Md(e, t) : void 0;
    return t && po(!1),
    i
}
function Md(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,nd);
    const {setup: r} = n;
    if (r) {
        Vt();
        const s = e.setupContext = r.length > 1 ? Fd(e) : null
          , o = Cr(e)
          , i = vr(r, e, 0, [e.props, s])
          , l = Ea(i);
        if (Wt(),
        o(),
        (l || e.sp) && !pn(e) && Za(e),
        l) {
            if (i.then(ki, ki),
            t)
                return i.then(a => {
                    $i(e, a)
                }
                ).catch(a => {
                    us(a, e, 0)
                }
                );
            e.asyncDep = i
        } else
            $i(e, i)
    } else
        wc(e)
}
function $i(e, t, n) {
    le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Ya(t)),
    wc(e)
}
function wc(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Ot);
    {
        const s = Cr(e);
        Vt();
        try {
            rd(e)
        } finally {
            Wt(),
            s()
        }
    }
}
const Dd = {
    get(e, t) {
        return je(e, "get", ""),
        e[t]
    }
};
function Fd(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Dd),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ms(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ya(Ka(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Qn)
                return Qn[n](e)
        },
        has(t, n) {
            return n in t || n in Qn
        }
    })) : e.proxy
}
function Ud(e, t=!0) {
    return le(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Hd(e) {
    return le(e) && "__vccOpts"in e
}
const Pe = (e, t) => Af(e, t, cr);
function _s(e, t, n) {
    const r = (o, i, l) => {
        Jr(-1);
        try {
            return Le(o, i, l)
        } finally {
            Jr(1)
        }
    }
      , s = arguments.length;
    return s === 2 ? Te(t) && !ne(t) ? ar(t) ? r(e, null, [t]) : r(e, t) : r(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ar(n) && (n = [n]),
    r(e, t, n))
}
const Vd = "3.5.21";
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mo;
const Mi = typeof window < "u" && window.trustedTypes;
if (Mi)
    try {
        mo = Mi.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Rc = mo ? e => mo.createHTML(e) : e => e
  , Wd = "http://www.w3.org/2000/svg"
  , jd = "http://www.w3.org/1998/Math/MathML"
  , Mt = typeof document < "u" ? document : null
  , Di = Mt && Mt.createElement("template")
  , Bd = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? Mt.createElementNS(Wd, e) : t === "mathml" ? Mt.createElementNS(jd, e) : n ? Mt.createElement(e, {
            is: n
        }) : Mt.createElement(e);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => Mt.createTextNode(e),
    createComment: e => Mt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Mt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (s && (s === o || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling)); )
                ;
        else {
            Di.innerHTML = Rc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const l = Di.content;
            if (r === "svg" || r === "mathml") {
                const a = l.firstChild;
                for (; a.firstChild; )
                    l.appendChild(a.firstChild);
                l.removeChild(a)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , qd = Symbol("_vtc");
function Kd(e, t, n) {
    const r = e[qd];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Fi = Symbol("_vod")
  , Gd = Symbol("_vsh")
  , Yd = Symbol("")
  , Xd = /(?:^|;)\s*display\s*:/;
function Jd(e, t, n) {
    const r = e.style
      , s = ke(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (ke(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && Dr(r, l, "")
                }
            else
                for (const i in t)
                    n[i] == null && Dr(r, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            Dr(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            const i = r[Yd];
            i && (n += ";" + i),
            r.cssText = n,
            o = Xd.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Fi in e && (e[Fi] = o ? r.display : "",
    e[Gd] && (r.display = "none"))
}
const Ui = /\s*!important$/;
function Dr(e, t, n) {
    if (ne(n))
        n.forEach(r => Dr(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Qd(e, t);
        Ui.test(n) ? e.setProperty(nn(r), n.replace(Ui, ""), "important") : e[r] = n
    }
}
const Hi = ["Webkit", "Moz", "ms"]
  , ks = {};
function Qd(e, t) {
    const n = ks[t];
    if (n)
        return n;
    let r = ht(t);
    if (r !== "filter" && r in e)
        return ks[t] = r;
    r = os(r);
    for (let s = 0; s < Hi.length; s++) {
        const o = Hi[s] + r;
        if (o in e)
            return ks[t] = o
    }
    return t
}
const Vi = "http://www.w3.org/1999/xlink";
function Wi(e, t, n, r, s, o=tf(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vi, t.slice(6, t.length)) : e.setAttributeNS(Vi, t, n) : n == null || o && !La(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : vt(n) ? String(n) : n)
}
function ji(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Rc(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== a || !("_value"in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = La(n) : n == null && l === "string" ? (n = "",
        i = !0) : l === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(s || t)
}
function fn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function zd(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Bi = Symbol("_vei");
function Zd(e, t, n, r, s=null) {
    const o = e[Bi] || (e[Bi] = {})
      , i = o[t];
    if (r && i)
        i.value = r;
    else {
        const [l,a] = eh(t);
        if (r) {
            const u = o[t] = rh(r, s);
            fn(e, l, u, a)
        } else
            i && (zd(e, l, i, a),
            o[t] = void 0)
    }
}
const qi = /(?:Once|Passive|Capture)$/;
function eh(e) {
    let t;
    if (qi.test(e)) {
        t = {};
        let r;
        for (; r = e.match(qi); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : nn(e.slice(2)), t]
}
let $s = 0;
const th = Promise.resolve()
  , nh = () => $s || (th.then( () => $s = 0),
$s = Date.now());
function rh(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        wt(sh(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = nh(),
    n
}
function sh(e, t) {
    if (ne(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const Ki = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , oh = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class" ? Kd(e, r, i) : t === "style" ? Jd(e, n, r) : _r(t) ? ko(t) || Zd(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : ih(e, t, r, i)) ? (ji(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wi(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ke(r)) ? ji(e, ht(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Wi(e, t, r, i))
}
;
function ih(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Ki(t) && le(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return Ki(t) && ke(n) ? !1 : t in e
}
const zr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ne(t) ? n => kr(t, n) : t
}
;
function lh(e) {
    e.target.composing = !0
}
function Gi(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Nn = Symbol("_assign")
  , Qo = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[Nn] = zr(s);
        const o = r || s.props && s.props.type === "number";
        fn(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            o && (l = Hr(l)),
            e[Nn](l)
        }
        ),
        n && fn(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (fn(e, "compositionstart", lh),
        fn(e, "compositionend", Gi),
        fn(e, "change", Gi))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: s, number: o}}, i) {
        if (e[Nn] = zr(i),
        e.composing)
            return;
        const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value
          , a = t ?? "";
        l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === a) || (e.value = a))
    }
}
  , Nc = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const s = rs(t);
        fn(e, "change", () => {
            const o = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? Hr(Zr(i)) : Zr(i));
            e[Nn](e.multiple ? s ? new Set(o) : o : o[0]),
            e._assigning = !0,
            yr( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Nn] = zr(r)
    },
    mounted(e, {value: t}) {
        Yi(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Nn] = zr(n)
    },
    updated(e, {value: t}) {
        e._assigning || Yi(e, t)
    }
};
function Yi(e, t) {
    const n = e.multiple
      , r = ne(t);
    if (!(n && !r && !rs(t))) {
        for (let s = 0, o = e.options.length; s < o; s++) {
            const i = e.options[s]
              , l = Zr(i);
            if (n)
                if (r) {
                    const a = typeof l;
                    a === "string" || a === "number" ? i.selected = t.some(u => String(u) === String(l)) : i.selected = rf(t, l) > -1
                } else
                    i.selected = t.has(l);
            else if (ls(Zr(i), t)) {
                e.selectedIndex !== s && (e.selectedIndex = s);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Zr(e) {
    return "_value"in e ? e._value : e.value
}
const ah = ["ctrl", "shift", "alt", "meta"]
  , ch = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => ah.some(n => e[`${n}Key`] && !t.includes(n))
}
  , ur = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const l = ch[t[i]];
            if (l && l(s, t))
                return
        }
        return e(s, ...o)
    }
    )
}
  , uh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , zo = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = s => {
        if (!("key"in s))
            return;
        const o = nn(s.key);
        if (t.some(i => i === o || uh[i] === o))
            return e(s)
    }
    )
}
  , fh = qe({
    patchProp: oh
}, Bd);
let Ms, Xi = !1;
function dh() {
    return Ms = Xi ? Ms : _d(fh),
    Xi = !0,
    Ms
}
const hh = (...e) => {
    const t = dh().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = mh(r);
        if (s)
            return n(s, !0, ph(s))
    }
    ,
    t
}
;
function ph(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function mh(e) {
    return ke(e) ? document.querySelector(e) : e
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const _h = Symbol();
var Ji;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Ji || (Ji = {}));
function gh() {
    const e = Ra(!0)
      , t = e.run( () => _e({}));
    let n = []
      , r = [];
    const s = Ka({
        install(o) {
            s._a = o,
            o.provide(_h, s),
            o.config.globalProperties.$pinia = s,
            r.forEach(i => n.push(i)),
            r = []
        },
        use(o) {
            return this._a ? n.push(o) : r.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const bn = typeof document < "u";
function Ac(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function vh(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ac(e.default)
}
const pe = Object.assign;
function Ds(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = bt(s) ? s.map(e) : e(s)
    }
    return n
}
const er = () => {}
  , bt = Array.isArray
  , Pc = /#/g
  , yh = /&/g
  , bh = /\//g
  , Eh = /=/g
  , Th = /\?/g
  , xc = /\+/g
  , Ch = /%5B/g
  , Sh = /%5D/g
  , kc = /%5E/g
  , Lh = /%60/g
  , $c = /%7B/g
  , Oh = /%7C/g
  , Mc = /%7D/g
  , Ih = /%20/g;
function Zo(e) {
    return encodeURI("" + e).replace(Oh, "|").replace(Ch, "[").replace(Sh, "]")
}
function wh(e) {
    return Zo(e).replace($c, "{").replace(Mc, "}").replace(kc, "^")
}
function _o(e) {
    return Zo(e).replace(xc, "%2B").replace(Ih, "+").replace(Pc, "%23").replace(yh, "%26").replace(Lh, "`").replace($c, "{").replace(Mc, "}").replace(kc, "^")
}
function Rh(e) {
    return _o(e).replace(Eh, "%3D")
}
function Nh(e) {
    return Zo(e).replace(Pc, "%23").replace(Th, "%3F")
}
function Ah(e) {
    return e == null ? "" : Nh(e).replace(bh, "%2F")
}
function fr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Ph = /\/$/
  , xh = e => e.replace(Ph, "");
function Fs(e, t, n="/") {
    let r, s = {}, o = "", i = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return l < a && l >= 0 && (a = -1),
    a > -1 && (r = t.slice(0, a),
    o = t.slice(a + 1, l > -1 ? l : t.length),
    s = e(o)),
    l > -1 && (r = r || t.slice(0, l),
    i = t.slice(l, t.length)),
    r = Dh(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + i,
        path: r,
        query: s,
        hash: fr(i)
    }
}
function kh(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Qi(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function $h(e, t, n) {
    const r = t.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && kn(t.matched[r], n.matched[s]) && Dc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function kn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Dc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Mh(e[n], t[n]))
            return !1;
    return !0
}
function Mh(e, t) {
    return bt(e) ? zi(e, t) : bt(t) ? zi(t, e) : e === t
}
function zi(e, t) {
    return bt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function Dh(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1, i, l;
    for (i = 0; i < r.length; i++)
        if (l = r[i],
        l !== ".")
            if (l === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
const Bt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var dr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(dr || (dr = {}));
var tr;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(tr || (tr = {}));
function Fh(e) {
    if (!e)
        if (bn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    xh(e)
}
const Uh = /^[^#]+#/;
function Hh(e, t) {
    return e.replace(Uh, "#") + t
}
function Vh(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const gs = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Wh(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        t = Vh(s, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Zi(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const go = new Map;
function jh(e, t) {
    go.set(e, t)
}
function Bh(e) {
    const t = go.get(e);
    return go.delete(e),
    t
}
let qh = () => location.protocol + "//" + location.host;
function Fc(e, t) {
    const {pathname: n, search: r, hash: s} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let l = s.includes(e.slice(o)) ? e.slice(o).length : 1
          , a = s.slice(l);
        return a[0] !== "/" && (a = "/" + a),
        Qi(a, "")
    }
    return Qi(n, e) + r + s
}
function Kh(e, t, n, r) {
    let s = []
      , o = []
      , i = null;
    const l = ({state: d}) => {
        const h = Fc(e, location)
          , E = n.value
          , S = t.value;
        let I = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            i && i === E) {
                i = null;
                return
            }
            I = S ? d.position - S.position : 0
        } else
            r(h);
        s.forEach(w => {
            w(n.value, E, {
                delta: I,
                type: dr.pop,
                direction: I ? I > 0 ? tr.forward : tr.back : tr.unknown
            })
        }
        )
    }
    ;
    function a() {
        i = n.value
    }
    function u(d) {
        s.push(d);
        const h = () => {
            const E = s.indexOf(d);
            E > -1 && s.splice(E, 1)
        }
        ;
        return o.push(h),
        h
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(pe({}, d.state, {
            scroll: gs()
        }), "")
    }
    function f() {
        for (const d of o)
            d();
        o = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: a,
        listen: u,
        destroy: f
    }
}
function el(e, t, n, r=!1, s=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? gs() : null
    }
}
function Gh(e) {
    const {history: t, location: n} = window
      , r = {
        value: Fc(e, n)
    }
      , s = {
        value: t.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(a, u, c) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : qh() + e + a;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            s.value = u
        } catch (h) {
            console.error(h),
            n[c ? "replace" : "assign"](d)
        }
    }
    function i(a, u) {
        const c = pe({}, t.state, el(s.value.back, a, s.value.forward, !0), u, {
            position: s.value.position
        });
        o(a, c, !0),
        r.value = a
    }
    function l(a, u) {
        const c = pe({}, s.value, t.state, {
            forward: a,
            scroll: gs()
        });
        o(c.current, c, !0);
        const f = pe({}, el(r.value, a, null), {
            position: c.position + 1
        }, u);
        o(a, f, !1),
        r.value = a
    }
    return {
        location: r,
        state: s,
        push: l,
        replace: i
    }
}
function Yh(e) {
    e = Fh(e);
    const t = Gh(e)
      , n = Kh(e, t.state, t.location, t.replace);
    function r(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const s = pe({
        location: "",
        base: e,
        go: r,
        createHref: Hh.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    s
}
function Xh(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Uc(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Hc = Symbol("");
var tl;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(tl || (tl = {}));
function $n(e, t) {
    return pe(new Error, {
        type: e,
        [Hc]: !0
    }, t)
}
function xt(e, t) {
    return e instanceof Error && Hc in e && (t == null || !!(e.type & t))
}
const nl = "[^/]+?"
  , Jh = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Qh = /[.+*?^${}()[\]/\\]/g;
function zh(e, t) {
    const n = pe({}, Jh, t)
      , r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (s += "/"),
                s += d.value.replace(Qh, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: E, repeatable: S, optional: I, regexp: w} = d;
                o.push({
                    name: E,
                    repeatable: S,
                    optional: I
                });
                const $ = w || nl;
                if ($ !== nl) {
                    h += 10;
                    try {
                        new RegExp(`(${$})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${E}" (${$}): ` + y.message)
                    }
                }
                let _ = S ? `((?:${$})(?:/(?:${$}))*)` : `(${$})`;
                f || (_ = I && u.length < 2 ? `(?:/${_})` : "/" + _),
                I && (_ += "?"),
                s += _,
                h += 20,
                I && (h += -8),
                S && (h += -20),
                $ === ".*" && (h += -50)
            }
            c.push(h)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const i = new RegExp(s,n.sensitive ? "" : "i");
    function l(u) {
        const c = u.match(i)
          , f = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || ""
              , E = o[d - 1];
            f[E.name] = h && E.repeatable ? h.split("/") : h
        }
        return f
    }
    function a(u) {
        let c = ""
          , f = !1;
        for (const d of e) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    c += h.value;
                else if (h.type === 1) {
                    const {value: E, repeatable: S, optional: I} = h
                      , w = E in u ? u[E] : "";
                    if (bt(w) && !S)
                        throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
                    const $ = bt(w) ? w.join("/") : w;
                    if (!$)
                        if (I)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${E}"`);
                    c += $
                }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: o,
        parse: l,
        stringify: a
    }
}
function Zh(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function Vc(e, t) {
    let n = 0;
    const r = e.score
      , s = t.score;
    for (; n < r.length && n < s.length; ) {
        const o = Zh(r[n], s[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (rl(r))
            return 1;
        if (rl(s))
            return -1
    }
    return s.length - r.length
}
function rl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const ep = {
    type: 0,
    value: ""
}
  , tp = /[a-zA-Z0-9_]/;
function np(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[ep]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${u}": ${h}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let o;
    function i() {
        o && s.push(o),
        o = []
    }
    let l = 0, a, u = "", c = "";
    function f() {
        u && (n === 0 ? o.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += a
    }
    for (; l < e.length; ) {
        if (a = e[l++],
        a === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            a === "/" ? (u && f(),
            i()) : a === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            a === "(" ? n = 2 : tp.test(a) ? d() : (f(),
            n = 0,
            a !== "*" && a !== "?" && a !== "+" && l--);
            break;
        case 2:
            a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = 3 : c += a;
            break;
        case 3:
            f(),
            n = 0,
            a !== "*" && a !== "?" && a !== "+" && l--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    s
}
function rp(e, t, n) {
    const r = zh(np(e.path), n)
      , s = pe(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
    s
}
function sp(e, t) {
    const n = []
      , r = new Map;
    t = ll({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function s(f) {
        return r.get(f)
    }
    function o(f, d, h) {
        const E = !h
          , S = ol(f);
        S.aliasOf = h && h.record;
        const I = ll(t, f)
          , w = [S];
        if ("alias"in f) {
            const y = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const T of y)
                w.push(ol(pe({}, S, {
                    components: h ? h.record.components : S.components,
                    path: T,
                    aliasOf: h ? h.record : S
                })))
        }
        let $, _;
        for (const y of w) {
            const {path: T} = y;
            if (d && T[0] !== "/") {
                const O = d.record.path
                  , N = O[O.length - 1] === "/" ? "" : "/";
                y.path = d.record.path + (T && N + T)
            }
            if ($ = rp(y, d, I),
            h ? h.alias.push($) : (_ = _ || $,
            _ !== $ && _.alias.push($),
            E && f.name && !il($) && i(f.name)),
            Wc($) && a($),
            S.children) {
                const O = S.children;
                for (let N = 0; N < O.length; N++)
                    o(O[N], $, h && h.children[N])
            }
            h = h || $
        }
        return _ ? () => {
            i(_)
        }
        : er
    }
    function i(f) {
        if (Uc(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(i),
            d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(i),
            f.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function a(f) {
        const d = lp(f, n);
        n.splice(d, 0, f),
        f.record.name && !il(f) && r.set(f.record.name, f)
    }
    function u(f, d) {
        let h, E = {}, S, I;
        if ("name"in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw $n(1, {
                    location: f
                });
            I = h.record.name,
            E = pe(sl(d.params, h.keys.filter(_ => !_.optional).concat(h.parent ? h.parent.keys.filter(_ => _.optional) : []).map(_ => _.name)), f.params && sl(f.params, h.keys.map(_ => _.name))),
            S = h.stringify(E)
        } else if (f.path != null)
            S = f.path,
            h = n.find(_ => _.re.test(S)),
            h && (E = h.parse(S),
            I = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(_ => _.re.test(d.path)),
            !h)
                throw $n(1, {
                    location: f,
                    currentLocation: d
                });
            I = h.record.name,
            E = pe({}, d.params, f.params),
            S = h.stringify(E)
        }
        const w = [];
        let $ = h;
        for (; $; )
            w.unshift($.record),
            $ = $.parent;
        return {
            name: I,
            path: S,
            params: E,
            matched: w,
            meta: ip(w)
        }
    }
    e.forEach(f => o(f));
    function c() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: o,
        resolve: u,
        removeRoute: i,
        clearRoutes: c,
        getRoutes: l,
        getRecordMatcher: s
    }
}
function sl(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function ol(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: op(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function op(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function il(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function ip(e) {
    return e.reduce( (t, n) => pe(t, n.meta), {})
}
function ll(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function lp(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const o = n + r >> 1;
        Vc(e, t[o]) < 0 ? r = o : n = o + 1
    }
    const s = ap(e);
    return s && (r = t.lastIndexOf(s, r - 1)),
    r
}
function ap(e) {
    let t = e;
    for (; t = t.parent; )
        if (Wc(t) && Vc(e, t) === 0)
            return t
}
function Wc({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function cp(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(xc, " ")
          , i = o.indexOf("=")
          , l = fr(i < 0 ? o : o.slice(0, i))
          , a = i < 0 ? null : fr(o.slice(i + 1));
        if (l in t) {
            let u = t[l];
            bt(u) || (u = t[l] = [u]),
            u.push(a)
        } else
            t[l] = a
    }
    return t
}
function al(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Rh(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (bt(r) ? r.map(o => o && _o(o)) : [r && _o(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function up(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = bt(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const fp = Symbol("")
  , cl = Symbol("")
  , vs = Symbol("")
  , ei = Symbol("")
  , vo = Symbol("");
function Kn() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function Xt(e, t, n, r, s, o=i => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (l, a) => {
        const u = d => {
            d === !1 ? a($n(4, {
                from: n,
                to: t
            })) : d instanceof Error ? a(d) : Xh(d) ? a($n(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d),
            l())
        }
          , c = o( () => e.call(r && r.instances[s], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)),
        f.catch(d => a(d))
    }
    )
}
function Us(e, t, n, r, s=o => o()) {
    const o = [];
    for (const i of e)
        for (const l in i.components) {
            let a = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (Ac(a)) {
                    const c = (a.__vccOpts || a)[t];
                    c && o.push(Xt(c, n, r, i, l, s))
                } else {
                    let u = a();
                    o.push( () => u.then(c => {
                        if (!c)
                            throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
                        const f = vh(c) ? c.default : c;
                        i.mods[l] = c,
                        i.components[l] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && Xt(h, n, r, i, l, s)()
                    }
                    ))
                }
        }
    return o
}
function ul(e) {
    const t = ft(vs)
      , n = ft(ei)
      , r = Pe( () => {
        const a = Qt(e.to);
        return t.resolve(a)
    }
    )
      , s = Pe( () => {
        const {matched: a} = r.value
          , {length: u} = a
          , c = a[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(kn.bind(null, c));
        if (d > -1)
            return d;
        const h = fl(a[u - 2]);
        return u > 1 && fl(c) === h && f[f.length - 1].path !== h ? f.findIndex(kn.bind(null, a[u - 2])) : d
    }
    )
      , o = Pe( () => s.value > -1 && _p(n.params, r.value.params))
      , i = Pe( () => s.value > -1 && s.value === n.matched.length - 1 && Dc(n.params, r.value.params));
    function l(a={}) {
        if (mp(a)) {
            const u = t[Qt(e.replace) ? "replace" : "push"](Qt(e.to)).catch(er);
            return e.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => u),
            u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: Pe( () => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l
    }
}
function dp(e) {
    return e.length === 1 ? e[0] : e
}
const hp = Un({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: ul,
    setup(e, {slots: t}) {
        const n = cs(ul(e))
          , {options: r} = ft(vs)
          , s = Pe( () => ({
            [dl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [dl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && dp(t.default(n));
            return e.custom ? o : _s("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, o)
        }
    }
})
  , pp = hp;
function mp(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function _p(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!bt(s) || s.length !== r.length || r.some( (o, i) => o !== s[i]))
            return !1
    }
    return !0
}
function fl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const dl = (e, t, n) => e ?? t ?? n
  , gp = Un({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = ft(vo)
          , s = Pe( () => e.route || r.value)
          , o = ft(cl, 0)
          , i = Pe( () => {
            let u = Qt(o);
            const {matched: c} = s.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , l = Pe( () => s.value.matched[i.value]);
        $r(cl, Pe( () => i.value + 1)),
        $r(fp, l),
        $r(vo, s);
        const a = _e();
        return Ht( () => [a.value, l.value, e.name], ([u,c,f], [d,h,E]) => {
            c && (c.instances[f] = u,
            h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
            c.updateGuards.size || (c.updateGuards = h.updateGuards))),
            u && c && (!h || !kn(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(S => S(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = s.value
              , c = e.name
              , f = l.value
              , d = f && f.components[c];
            if (!d)
                return hl(n.default, {
                    Component: d,
                    route: u
                });
            const h = f.props[c]
              , E = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null
              , I = _s(d, pe({}, E, t, {
                onVnodeUnmounted: w => {
                    w.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: a
            }));
            return hl(n.default, {
                Component: I,
                route: u
            }) || I
        }
    }
});
function hl(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const vp = gp;
function yp(e) {
    const t = sp(e.routes, e)
      , n = e.parseQuery || cp
      , r = e.stringifyQuery || al
      , s = e.history
      , o = Kn()
      , i = Kn()
      , l = Kn()
      , a = Bo(Bt);
    let u = Bt;
    bn && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = Ds.bind(null, k => "" + k)
      , f = Ds.bind(null, Ah)
      , d = Ds.bind(null, fr);
    function h(k, K) {
        let j, X;
        return Uc(k) ? (j = t.getRecordMatcher(k),
        X = K) : X = k,
        t.addRoute(X, j)
    }
    function E(k) {
        const K = t.getRecordMatcher(k);
        K && t.removeRoute(K)
    }
    function S() {
        return t.getRoutes().map(k => k.record)
    }
    function I(k) {
        return !!t.getRecordMatcher(k)
    }
    function w(k, K) {
        if (K = pe({}, K || a.value),
        typeof k == "string") {
            const p = Fs(n, k, K.path)
              , C = t.resolve({
                path: p.path
            }, K)
              , D = s.createHref(p.fullPath);
            return pe(p, C, {
                params: d(C.params),
                hash: fr(p.hash),
                redirectedFrom: void 0,
                href: D
            })
        }
        let j;
        if (k.path != null)
            j = pe({}, k, {
                path: Fs(n, k.path, K.path).path
            });
        else {
            const p = pe({}, k.params);
            for (const C in p)
                p[C] == null && delete p[C];
            j = pe({}, k, {
                params: f(p)
            }),
            K.params = f(K.params)
        }
        const X = t.resolve(j, K)
          , ce = k.hash || "";
        X.params = c(d(X.params));
        const he = kh(r, pe({}, k, {
            hash: wh(ce),
            path: X.path
        }))
          , v = s.createHref(he);
        return pe({
            fullPath: he,
            hash: ce,
            query: r === al ? up(k.query) : k.query || {}
        }, X, {
            redirectedFrom: void 0,
            href: v
        })
    }
    function $(k) {
        return typeof k == "string" ? Fs(n, k, a.value.path) : pe({}, k)
    }
    function _(k, K) {
        if (u !== k)
            return $n(8, {
                from: K,
                to: k
            })
    }
    function y(k) {
        return N(k)
    }
    function T(k) {
        return y(pe($(k), {
            replace: !0
        }))
    }
    function O(k) {
        const K = k.matched[k.matched.length - 1];
        if (K && K.redirect) {
            const {redirect: j} = K;
            let X = typeof j == "function" ? j(k) : j;
            return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = $(X) : {
                path: X
            },
            X.params = {}),
            pe({
                query: k.query,
                hash: k.hash,
                params: X.path != null ? {} : k.params
            }, X)
        }
    }
    function N(k, K) {
        const j = u = w(k)
          , X = a.value
          , ce = k.state
          , he = k.force
          , v = k.replace === !0
          , p = O(j);
        if (p)
            return N(pe($(p), {
                state: typeof p == "object" ? pe({}, ce, p.state) : ce,
                force: he,
                replace: v
            }), K || j);
        const C = j;
        C.redirectedFrom = K;
        let D;
        return !he && $h(r, X, j) && (D = $n(16, {
            to: C,
            from: X
        }),
        we(X, X, !0, !1)),
        (D ? Promise.resolve(D) : W(C, X)).catch(x => xt(x) ? xt(x, 2) ? x : Je(x) : Y(x, C, X)).then(x => {
            if (x) {
                if (xt(x, 2))
                    return N(pe({
                        replace: v
                    }, $(x.to), {
                        state: typeof x.to == "object" ? pe({}, ce, x.to.state) : ce,
                        force: he
                    }), K || C)
            } else
                x = G(C, X, !0, v, ce);
            return Q(C, X, x),
            x
        }
        )
    }
    function U(k, K) {
        const j = _(k, K);
        return j ? Promise.reject(j) : Promise.resolve()
    }
    function P(k) {
        const K = et.values().next().value;
        return K && typeof K.runWithContext == "function" ? K.runWithContext(k) : k()
    }
    function W(k, K) {
        let j;
        const [X,ce,he] = bp(k, K);
        j = Us(X.reverse(), "beforeRouteLeave", k, K);
        for (const p of X)
            p.leaveGuards.forEach(C => {
                j.push(Xt(C, k, K))
            }
            );
        const v = U.bind(null, k, K);
        return j.push(v),
        Me(j).then( () => {
            j = [];
            for (const p of o.list())
                j.push(Xt(p, k, K));
            return j.push(v),
            Me(j)
        }
        ).then( () => {
            j = Us(ce, "beforeRouteUpdate", k, K);
            for (const p of ce)
                p.updateGuards.forEach(C => {
                    j.push(Xt(C, k, K))
                }
                );
            return j.push(v),
            Me(j)
        }
        ).then( () => {
            j = [];
            for (const p of he)
                if (p.beforeEnter)
                    if (bt(p.beforeEnter))
                        for (const C of p.beforeEnter)
                            j.push(Xt(C, k, K));
                    else
                        j.push(Xt(p.beforeEnter, k, K));
            return j.push(v),
            Me(j)
        }
        ).then( () => (k.matched.forEach(p => p.enterCallbacks = {}),
        j = Us(he, "beforeRouteEnter", k, K, P),
        j.push(v),
        Me(j))).then( () => {
            j = [];
            for (const p of i.list())
                j.push(Xt(p, k, K));
            return j.push(v),
            Me(j)
        }
        ).catch(p => xt(p, 8) ? p : Promise.reject(p))
    }
    function Q(k, K, j) {
        l.list().forEach(X => P( () => X(k, K, j)))
    }
    function G(k, K, j, X, ce) {
        const he = _(k, K);
        if (he)
            return he;
        const v = K === Bt
          , p = bn ? history.state : {};
        j && (X || v ? s.replace(k.fullPath, pe({
            scroll: v && p && p.scroll
        }, ce)) : s.push(k.fullPath, ce)),
        a.value = k,
        we(k, K, j, v),
        Je()
    }
    let Z;
    function Oe() {
        Z || (Z = s.listen( (k, K, j) => {
            if (!Et.listening)
                return;
            const X = w(k)
              , ce = O(X);
            if (ce) {
                N(pe(ce, {
                    replace: !0,
                    force: !0
                }), X).catch(er);
                return
            }
            u = X;
            const he = a.value;
            bn && jh(Zi(he.fullPath, j.delta), gs()),
            W(X, he).catch(v => xt(v, 12) ? v : xt(v, 2) ? (N(pe($(v.to), {
                force: !0
            }), X).then(p => {
                xt(p, 20) && !j.delta && j.type === dr.pop && s.go(-1, !1)
            }
            ).catch(er),
            Promise.reject()) : (j.delta && s.go(-j.delta, !1),
            Y(v, X, he))).then(v => {
                v = v || G(X, he, !1),
                v && (j.delta && !xt(v, 8) ? s.go(-j.delta, !1) : j.type === dr.pop && xt(v, 20) && s.go(-1, !1)),
                Q(X, he, v)
            }
            ).catch(er)
        }
        ))
    }
    let Se = Kn(), J = Kn(), oe;
    function Y(k, K, j) {
        Je(k);
        const X = J.list();
        return X.length ? X.forEach(ce => ce(k, K, j)) : console.error(k),
        Promise.reject(k)
    }
    function ge() {
        return oe && a.value !== Bt ? Promise.resolve() : new Promise( (k, K) => {
            Se.add([k, K])
        }
        )
    }
    function Je(k) {
        return oe || (oe = !k,
        Oe(),
        Se.list().forEach( ([K,j]) => k ? j(k) : K()),
        Se.reset()),
        k
    }
    function we(k, K, j, X) {
        const {scrollBehavior: ce} = e;
        if (!bn || !ce)
            return Promise.resolve();
        const he = !j && Bh(Zi(k.fullPath, 0)) || (X || !j) && history.state && history.state.scroll || null;
        return yr().then( () => ce(k, K, he)).then(v => v && Wh(v)).catch(v => Y(v, k, K))
    }
    const Re = k => s.go(k);
    let ot;
    const et = new Set
      , Et = {
        currentRoute: a,
        listening: !0,
        addRoute: h,
        removeRoute: E,
        clearRoutes: t.clearRoutes,
        hasRoute: I,
        getRoutes: S,
        resolve: w,
        options: e,
        push: y,
        replace: T,
        go: Re,
        back: () => Re(-1),
        forward: () => Re(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: J.add,
        isReady: ge,
        install(k) {
            const K = this;
            k.component("RouterLink", pp),
            k.component("RouterView", vp),
            k.config.globalProperties.$router = K,
            Object.defineProperty(k.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Qt(a)
            }),
            bn && !ot && a.value === Bt && (ot = !0,
            y(s.location).catch(ce => {}
            ));
            const j = {};
            for (const ce in Bt)
                Object.defineProperty(j, ce, {
                    get: () => a.value[ce],
                    enumerable: !0
                });
            k.provide(vs, K),
            k.provide(ei, Ba(j)),
            k.provide(vo, a);
            const X = k.unmount;
            et.add(k),
            k.unmount = function() {
                et.delete(k),
                et.size < 1 && (u = Bt,
                Z && Z(),
                Z = null,
                a.value = Bt,
                ot = !1,
                oe = !1),
                X()
            }
        }
    };
    function Me(k) {
        return k.reduce( (K, j) => K.then( () => P(j)), Promise.resolve())
    }
    return Et
}
function bp(e, t) {
    const n = []
      , r = []
      , s = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find(u => kn(u, l)) ? r.push(l) : n.push(l));
        const a = e.matched[i];
        a && (t.matched.find(u => kn(u, a)) || s.push(a))
    }
    return [n, r, s]
}
function ti() {
    return ft(vs)
}
function Hn(e) {
    return ft(ei)
}
const Ep = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
};
function Tp(e, t) {
    return re(),
    ue("svg", Ep, [...t[0] || (t[0] = [R("path", {
        fill: "currentColor",
        d: "m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
    }, null, -1)])])
}
const ni = {
    name: "material-symbols-search",
    render: Tp
}
  , Cp = "/assets/online-media-BPPSgf6b.svg"
  , Sp = "/assets/firmware-Bj5BQRu2.svg";
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Lp(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const es = typeof window < "u"
  , rn = (e, t=!1) => t ? Symbol.for(e) : Symbol(e)
  , Op = (e, t, n) => Ip({
    l: e,
    k: t,
    s: n
})
  , Ip = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , xe = e => typeof e == "number" && isFinite(e)
  , wp = e => Bc(e) === "[object Date]"
  , en = e => Bc(e) === "[object RegExp]"
  , ys = e => ie(e) && Object.keys(e).length === 0
  , We = Object.assign
  , Rp = Object.create
  , ve = (e=null) => Rp(e);
let pl;
const Ut = () => pl || (pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ve());
function ml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;")
}
function _l(e) {
    return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function Np(e) {
    return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, o) => `${s}="${_l(o)}"`),
    e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, o) => `${s}='${_l(o)}'`),
    /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")),
    [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r => {
        e = e.replace(r, "$1javascript&#58;")
    }
    ),
    e
}
const Ap = Object.prototype.hasOwnProperty;
function mt(e, t) {
    return Ap.call(e, t)
}
const Ce = Array.isArray
  , Ee = e => typeof e == "function"
  , q = e => typeof e == "string"
  , ae = e => typeof e == "boolean"
  , fe = e => e !== null && typeof e == "object"
  , Pp = e => fe(e) && Ee(e.then) && Ee(e.catch)
  , jc = Object.prototype.toString
  , Bc = e => jc.call(e)
  , ie = e => {
    if (!fe(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , xp = e => e == null ? "" : Ce(e) || ie(e) && e.toString === jc ? JSON.stringify(e, null, 2) : String(e);
function kp(e, t="") {
    return e.reduce( (n, r, s) => s === 0 ? n + r : n + t + r, "")
}
function bs(e) {
    let t = e;
    return () => ++t
}
const Ar = e => !fe(e) || Ce(e);
function Fr(e, t) {
    if (Ar(e) || Ar(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: s} = n.pop();
        Object.keys(r).forEach(o => {
            o !== "__proto__" && (fe(r[o]) && !fe(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : ve()),
            Ar(s[o]) || Ar(r[o]) ? s[o] = r[o] : n.push({
                src: r[o],
                des: s[o]
            }))
        }
        )
    }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function $p(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function ts(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Mp = /\{([0-9a-zA-Z]+)\}/g;
function qc(e, ...t) {
    return t.length === 1 && Dp(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(Mp, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}
const Kc = Object.assign
  , gl = e => typeof e == "string"
  , Dp = e => e !== null && typeof e == "object";
function Gc(e, t="") {
    return e.reduce( (n, r, s) => s === 0 ? n + r : n + t + r, "")
}
const ri = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
}
  , Fp = {
    [ri.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Up(e, t, ...n) {
    const r = qc(Fp[e], ...n || [])
      , s = {
        message: String(r),
        code: e
    };
    return t && (s.location = t),
    s
}
const te = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}
  , Hp = {
    [te.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [te.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [te.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [te.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [te.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [te.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [te.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [te.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [te.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [te.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [te.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [te.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [te.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [te.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [te.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [te.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Vn(e, t, n={}) {
    const {domain: r, messages: s, args: o} = n
      , i = qc((s || Hp)[e] || "", ...o || [])
      , l = new SyntaxError(String(i));
    return l.code = e,
    t && (l.location = t),
    l.domain = r,
    l
}
function Vp(e) {
    throw e
}
const kt = " "
  , Wp = "\r"
  , Ye = `
`
  , jp = "\u2028"
  , Bp = "\u2029";
function qp(e) {
    const t = e;
    let n = 0
      , r = 1
      , s = 1
      , o = 0;
    const i = N => t[N] === Wp && t[N + 1] === Ye
      , l = N => t[N] === Ye
      , a = N => t[N] === Bp
      , u = N => t[N] === jp
      , c = N => i(N) || l(N) || a(N) || u(N)
      , f = () => n
      , d = () => r
      , h = () => s
      , E = () => o
      , S = N => i(N) || a(N) || u(N) ? Ye : t[N]
      , I = () => S(n)
      , w = () => S(n + o);
    function $() {
        return o = 0,
        c(n) && (r++,
        s = 0),
        i(n) && n++,
        n++,
        s++,
        t[n]
    }
    function _() {
        return i(n + o) && o++,
        o++,
        t[n + o]
    }
    function y() {
        n = 0,
        r = 1,
        s = 1,
        o = 0
    }
    function T(N=0) {
        o = N
    }
    function O() {
        const N = n + o;
        for (; N !== n; )
            $();
        o = 0
    }
    return {
        index: f,
        line: d,
        column: h,
        peekOffset: E,
        charAt: S,
        currentChar: I,
        currentPeek: w,
        next: $,
        peek: _,
        reset: y,
        resetPeek: T,
        skipToPeek: O
    }
}
const qt = void 0
  , Kp = "."
  , vl = "'"
  , Gp = "tokenizer";
function Yp(e, t={}) {
    const n = t.location !== !1
      , r = qp(e)
      , s = () => r.index()
      , o = () => $p(r.line(), r.column(), r.index())
      , i = o()
      , l = s()
      , a = {
        currentType: 14,
        offset: l,
        startLoc: i,
        endLoc: i,
        lastType: 14,
        lastOffset: l,
        lastStartLoc: i,
        lastEndLoc: i,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , u = () => a
      , {onError: c} = t;
    function f(m, g, b, ...M) {
        const V = u();
        if (g.column += b,
        g.offset += b,
        c) {
            const H = n ? ts(V.startLoc, g) : null
              , L = Vn(m, H, {
                domain: Gp,
                args: M
            });
            c(L)
        }
    }
    function d(m, g, b) {
        m.endLoc = o(),
        m.currentType = g;
        const M = {
            type: g
        };
        return n && (M.loc = ts(m.startLoc, m.endLoc)),
        b != null && (M.value = b),
        M
    }
    const h = m => d(m, 14);
    function E(m, g) {
        return m.currentChar() === g ? (m.next(),
        g) : (f(te.EXPECTED_TOKEN, o(), 0, g),
        "")
    }
    function S(m) {
        let g = "";
        for (; m.currentPeek() === kt || m.currentPeek() === Ye; )
            g += m.currentPeek(),
            m.peek();
        return g
    }
    function I(m) {
        const g = S(m);
        return m.skipToPeek(),
        g
    }
    function w(m) {
        if (m === qt)
            return !1;
        const g = m.charCodeAt(0);
        return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g === 95
    }
    function $(m) {
        if (m === qt)
            return !1;
        const g = m.charCodeAt(0);
        return g >= 48 && g <= 57
    }
    function _(m, g) {
        const {currentType: b} = g;
        if (b !== 2)
            return !1;
        S(m);
        const M = w(m.currentPeek());
        return m.resetPeek(),
        M
    }
    function y(m, g) {
        const {currentType: b} = g;
        if (b !== 2)
            return !1;
        S(m);
        const M = m.currentPeek() === "-" ? m.peek() : m.currentPeek()
          , V = $(M);
        return m.resetPeek(),
        V
    }
    function T(m, g) {
        const {currentType: b} = g;
        if (b !== 2)
            return !1;
        S(m);
        const M = m.currentPeek() === vl;
        return m.resetPeek(),
        M
    }
    function O(m, g) {
        const {currentType: b} = g;
        if (b !== 8)
            return !1;
        S(m);
        const M = m.currentPeek() === ".";
        return m.resetPeek(),
        M
    }
    function N(m, g) {
        const {currentType: b} = g;
        if (b !== 9)
            return !1;
        S(m);
        const M = w(m.currentPeek());
        return m.resetPeek(),
        M
    }
    function U(m, g) {
        const {currentType: b} = g;
        if (!(b === 8 || b === 12))
            return !1;
        S(m);
        const M = m.currentPeek() === ":";
        return m.resetPeek(),
        M
    }
    function P(m, g) {
        const {currentType: b} = g;
        if (b !== 10)
            return !1;
        const M = () => {
            const H = m.currentPeek();
            return H === "{" ? w(m.peek()) : H === "@" || H === "%" || H === "|" || H === ":" || H === "." || H === kt || !H ? !1 : H === Ye ? (m.peek(),
            M()) : G(m, !1)
        }
          , V = M();
        return m.resetPeek(),
        V
    }
    function W(m) {
        S(m);
        const g = m.currentPeek() === "|";
        return m.resetPeek(),
        g
    }
    function Q(m) {
        const g = S(m)
          , b = m.currentPeek() === "%" && m.peek() === "{";
        return m.resetPeek(),
        {
            isModulo: b,
            hasSpace: g.length > 0
        }
    }
    function G(m, g=!0) {
        const b = (V=!1, H="", L=!1) => {
            const A = m.currentPeek();
            return A === "{" ? H === "%" ? !1 : V : A === "@" || !A ? H === "%" ? !0 : V : A === "%" ? (m.peek(),
            b(V, "%", !0)) : A === "|" ? H === "%" || L ? !0 : !(H === kt || H === Ye) : A === kt ? (m.peek(),
            b(!0, kt, L)) : A === Ye ? (m.peek(),
            b(!0, Ye, L)) : !0
        }
          , M = b();
        return g && m.resetPeek(),
        M
    }
    function Z(m, g) {
        const b = m.currentChar();
        return b === qt ? qt : g(b) ? (m.next(),
        b) : null
    }
    function Oe(m) {
        const g = m.charCodeAt(0);
        return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g >= 48 && g <= 57 || g === 95 || g === 36
    }
    function Se(m) {
        return Z(m, Oe)
    }
    function J(m) {
        const g = m.charCodeAt(0);
        return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g >= 48 && g <= 57 || g === 95 || g === 36 || g === 45
    }
    function oe(m) {
        return Z(m, J)
    }
    function Y(m) {
        const g = m.charCodeAt(0);
        return g >= 48 && g <= 57
    }
    function ge(m) {
        return Z(m, Y)
    }
    function Je(m) {
        const g = m.charCodeAt(0);
        return g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102
    }
    function we(m) {
        return Z(m, Je)
    }
    function Re(m) {
        let g = ""
          , b = "";
        for (; g = ge(m); )
            b += g;
        return b
    }
    function ot(m) {
        I(m);
        const g = m.currentChar();
        return g !== "%" && f(te.EXPECTED_TOKEN, o(), 0, g),
        m.next(),
        "%"
    }
    function et(m) {
        let g = "";
        for (; ; ) {
            const b = m.currentChar();
            if (b === "{" || b === "}" || b === "@" || b === "|" || !b)
                break;
            if (b === "%")
                if (G(m))
                    g += b,
                    m.next();
                else
                    break;
            else if (b === kt || b === Ye)
                if (G(m))
                    g += b,
                    m.next();
                else {
                    if (W(m))
                        break;
                    g += b,
                    m.next()
                }
            else
                g += b,
                m.next()
        }
        return g
    }
    function Et(m) {
        I(m);
        let g = ""
          , b = "";
        for (; g = oe(m); )
            b += g;
        return m.currentChar() === qt && f(te.UNTERMINATED_CLOSING_BRACE, o(), 0),
        b
    }
    function Me(m) {
        I(m);
        let g = "";
        return m.currentChar() === "-" ? (m.next(),
        g += `-${Re(m)}`) : g += Re(m),
        m.currentChar() === qt && f(te.UNTERMINATED_CLOSING_BRACE, o(), 0),
        g
    }
    function k(m) {
        return m !== vl && m !== Ye
    }
    function K(m) {
        I(m),
        E(m, "'");
        let g = ""
          , b = "";
        for (; g = Z(m, k); )
            g === "\\" ? b += j(m) : b += g;
        const M = m.currentChar();
        return M === Ye || M === qt ? (f(te.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        M === Ye && (m.next(),
        E(m, "'")),
        b) : (E(m, "'"),
        b)
    }
    function j(m) {
        const g = m.currentChar();
        switch (g) {
        case "\\":
        case "'":
            return m.next(),
            `\\${g}`;
        case "u":
            return X(m, g, 4);
        case "U":
            return X(m, g, 6);
        default:
            return f(te.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, g),
            ""
        }
    }
    function X(m, g, b) {
        E(m, g);
        let M = "";
        for (let V = 0; V < b; V++) {
            const H = we(m);
            if (!H) {
                f(te.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${g}${M}${m.currentChar()}`);
                break
            }
            M += H
        }
        return `\\${g}${M}`
    }
    function ce(m) {
        return m !== "{" && m !== "}" && m !== kt && m !== Ye
    }
    function he(m) {
        I(m);
        let g = ""
          , b = "";
        for (; g = Z(m, ce); )
            b += g;
        return b
    }
    function v(m) {
        let g = ""
          , b = "";
        for (; g = Se(m); )
            b += g;
        return b
    }
    function p(m) {
        const g = b => {
            const M = m.currentChar();
            return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === kt ? b : (b += M,
            m.next(),
            g(b))
        }
        ;
        return g("")
    }
    function C(m) {
        I(m);
        const g = E(m, "|");
        return I(m),
        g
    }
    function D(m, g) {
        let b = null;
        switch (m.currentChar()) {
        case "{":
            return g.braceNest >= 1 && f(te.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            m.next(),
            b = d(g, 2, "{"),
            I(m),
            g.braceNest++,
            b;
        case "}":
            return g.braceNest > 0 && g.currentType === 2 && f(te.EMPTY_PLACEHOLDER, o(), 0),
            m.next(),
            b = d(g, 3, "}"),
            g.braceNest--,
            g.braceNest > 0 && I(m),
            g.inLinked && g.braceNest === 0 && (g.inLinked = !1),
            b;
        case "@":
            return g.braceNest > 0 && f(te.UNTERMINATED_CLOSING_BRACE, o(), 0),
            b = x(m, g) || h(g),
            g.braceNest = 0,
            b;
        default:
            {
                let V = !0
                  , H = !0
                  , L = !0;
                if (W(m))
                    return g.braceNest > 0 && f(te.UNTERMINATED_CLOSING_BRACE, o(), 0),
                    b = d(g, 1, C(m)),
                    g.braceNest = 0,
                    g.inLinked = !1,
                    b;
                if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7))
                    return f(te.UNTERMINATED_CLOSING_BRACE, o(), 0),
                    g.braceNest = 0,
                    F(m, g);
                if (V = _(m, g))
                    return b = d(g, 5, Et(m)),
                    I(m),
                    b;
                if (H = y(m, g))
                    return b = d(g, 6, Me(m)),
                    I(m),
                    b;
                if (L = T(m, g))
                    return b = d(g, 7, K(m)),
                    I(m),
                    b;
                if (!V && !H && !L)
                    return b = d(g, 13, he(m)),
                    f(te.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, b.value),
                    I(m),
                    b;
                break
            }
        }
        return b
    }
    function x(m, g) {
        const {currentType: b} = g;
        let M = null;
        const V = m.currentChar();
        switch ((b === 8 || b === 9 || b === 12 || b === 10) && (V === Ye || V === kt) && f(te.INVALID_LINKED_FORMAT, o(), 0),
        V) {
        case "@":
            return m.next(),
            M = d(g, 8, "@"),
            g.inLinked = !0,
            M;
        case ".":
            return I(m),
            m.next(),
            d(g, 9, ".");
        case ":":
            return I(m),
            m.next(),
            d(g, 10, ":");
        default:
            return W(m) ? (M = d(g, 1, C(m)),
            g.braceNest = 0,
            g.inLinked = !1,
            M) : O(m, g) || U(m, g) ? (I(m),
            x(m, g)) : N(m, g) ? (I(m),
            d(g, 12, v(m))) : P(m, g) ? (I(m),
            V === "{" ? D(m, g) || M : d(g, 11, p(m))) : (b === 8 && f(te.INVALID_LINKED_FORMAT, o(), 0),
            g.braceNest = 0,
            g.inLinked = !1,
            F(m, g))
        }
    }
    function F(m, g) {
        let b = {
            type: 14
        };
        if (g.braceNest > 0)
            return D(m, g) || h(g);
        if (g.inLinked)
            return x(m, g) || h(g);
        switch (m.currentChar()) {
        case "{":
            return D(m, g) || h(g);
        case "}":
            return f(te.UNBALANCED_CLOSING_BRACE, o(), 0),
            m.next(),
            d(g, 3, "}");
        case "@":
            return x(m, g) || h(g);
        default:
            {
                if (W(m))
                    return b = d(g, 1, C(m)),
                    g.braceNest = 0,
                    g.inLinked = !1,
                    b;
                const {isModulo: V, hasSpace: H} = Q(m);
                if (V)
                    return H ? d(g, 0, et(m)) : d(g, 4, ot(m));
                if (G(m))
                    return d(g, 0, et(m));
                break
            }
        }
        return b
    }
    function B() {
        const {currentType: m, offset: g, startLoc: b, endLoc: M} = a;
        return a.lastType = m,
        a.lastOffset = g,
        a.lastStartLoc = b,
        a.lastEndLoc = M,
        a.offset = s(),
        a.startLoc = o(),
        r.currentChar() === qt ? d(a, 14) : F(r, a)
    }
    return {
        nextToken: B,
        currentOffset: s,
        currentPosition: o,
        context: u
    }
}
const Xp = "parser"
  , Jp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Qp(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}
function zp(e={}) {
    const t = e.location !== !1
      , {onError: n, onWarn: r} = e;
    function s(_, y, T, O, ...N) {
        const U = _.currentPosition();
        if (U.offset += O,
        U.column += O,
        n) {
            const P = t ? ts(T, U) : null
              , W = Vn(y, P, {
                domain: Xp,
                args: N
            });
            n(W)
        }
    }
    function o(_, y, T, O, ...N) {
        const U = _.currentPosition();
        if (U.offset += O,
        U.column += O,
        r) {
            const P = t ? ts(T, U) : null;
            r(Up(y, P, N))
        }
    }
    function i(_, y, T) {
        const O = {
            type: _
        };
        return t && (O.start = y,
        O.end = y,
        O.loc = {
            start: T,
            end: T
        }),
        O
    }
    function l(_, y, T, O) {
        t && (_.end = y,
        _.loc && (_.loc.end = T))
    }
    function a(_, y) {
        const T = _.context()
          , O = i(3, T.offset, T.startLoc);
        return O.value = y,
        l(O, _.currentOffset(), _.currentPosition()),
        O
    }
    function u(_, y) {
        const T = _.context()
          , {lastOffset: O, lastStartLoc: N} = T
          , U = i(5, O, N);
        return U.index = parseInt(y, 10),
        _.nextToken(),
        l(U, _.currentOffset(), _.currentPosition()),
        U
    }
    function c(_, y, T) {
        const O = _.context()
          , {lastOffset: N, lastStartLoc: U} = O
          , P = i(4, N, U);
        return P.key = y,
        T === !0 && (P.modulo = !0),
        _.nextToken(),
        l(P, _.currentOffset(), _.currentPosition()),
        P
    }
    function f(_, y) {
        const T = _.context()
          , {lastOffset: O, lastStartLoc: N} = T
          , U = i(9, O, N);
        return U.value = y.replace(Jp, Qp),
        _.nextToken(),
        l(U, _.currentOffset(), _.currentPosition()),
        U
    }
    function d(_) {
        const y = _.nextToken()
          , T = _.context()
          , {lastOffset: O, lastStartLoc: N} = T
          , U = i(8, O, N);
        return y.type !== 12 ? (s(_, te.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0),
        U.value = "",
        l(U, O, N),
        {
            nextConsumeToken: y,
            node: U
        }) : (y.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(y)),
        U.value = y.value || "",
        l(U, _.currentOffset(), _.currentPosition()),
        {
            node: U
        })
    }
    function h(_, y) {
        const T = _.context()
          , O = i(7, T.offset, T.startLoc);
        return O.value = y,
        l(O, _.currentOffset(), _.currentPosition()),
        O
    }
    function E(_) {
        const y = _.context()
          , T = i(6, y.offset, y.startLoc);
        let O = _.nextToken();
        if (O.type === 9) {
            const N = d(_);
            T.modifier = N.node,
            O = N.nextConsumeToken || _.nextToken()
        }
        switch (O.type !== 10 && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(O)),
        O = _.nextToken(),
        O.type === 2 && (O = _.nextToken()),
        O.type) {
        case 11:
            O.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(O)),
            T.key = h(_, O.value || "");
            break;
        case 5:
            O.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(O)),
            T.key = c(_, O.value || "");
            break;
        case 6:
            O.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(O)),
            T.key = u(_, O.value || "");
            break;
        case 7:
            O.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(O)),
            T.key = f(_, O.value || "");
            break;
        default:
            {
                s(_, te.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
                const N = _.context()
                  , U = i(7, N.offset, N.startLoc);
                return U.value = "",
                l(U, N.offset, N.startLoc),
                T.key = U,
                l(T, N.offset, N.startLoc),
                {
                    nextConsumeToken: O,
                    node: T
                }
            }
        }
        return l(T, _.currentOffset(), _.currentPosition()),
        {
            node: T
        }
    }
    function S(_) {
        const y = _.context()
          , T = y.currentType === 1 ? _.currentOffset() : y.offset
          , O = y.currentType === 1 ? y.endLoc : y.startLoc
          , N = i(2, T, O);
        N.items = [];
        let U = null
          , P = null;
        do {
            const G = U || _.nextToken();
            switch (U = null,
            G.type) {
            case 0:
                G.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(G)),
                N.items.push(a(_, G.value || ""));
                break;
            case 6:
                G.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(G)),
                N.items.push(u(_, G.value || ""));
                break;
            case 4:
                P = !0;
                break;
            case 5:
                G.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(G)),
                N.items.push(c(_, G.value || "", !!P)),
                P && (o(_, ri.USE_MODULO_SYNTAX, y.lastStartLoc, 0, pt(G)),
                P = null);
                break;
            case 7:
                G.value == null && s(_, te.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, pt(G)),
                N.items.push(f(_, G.value || ""));
                break;
            case 8:
                {
                    const Z = E(_);
                    N.items.push(Z.node),
                    U = Z.nextConsumeToken || null;
                    break
                }
            }
        } while (y.currentType !== 14 && y.currentType !== 1);
        const W = y.currentType === 1 ? y.lastOffset : _.currentOffset()
          , Q = y.currentType === 1 ? y.lastEndLoc : _.currentPosition();
        return l(N, W, Q),
        N
    }
    function I(_, y, T, O) {
        const N = _.context();
        let U = O.items.length === 0;
        const P = i(1, y, T);
        P.cases = [],
        P.cases.push(O);
        do {
            const W = S(_);
            U || (U = W.items.length === 0),
            P.cases.push(W)
        } while (N.currentType !== 14);
        return U && s(_, te.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0),
        l(P, _.currentOffset(), _.currentPosition()),
        P
    }
    function w(_) {
        const y = _.context()
          , {offset: T, startLoc: O} = y
          , N = S(_);
        return y.currentType === 14 ? N : I(_, T, O, N)
    }
    function $(_) {
        const y = Yp(_, Kc({}, e))
          , T = y.context()
          , O = i(0, T.offset, T.startLoc);
        return t && O.loc && (O.loc.source = _),
        O.body = w(y),
        e.onCacheKey && (O.cacheKey = e.onCacheKey(_)),
        T.currentType !== 14 && s(y, te.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, _[T.offset] || ""),
        l(O, y.currentOffset(), y.currentPosition()),
        O
    }
    return {
        parse: $
    }
}
function pt(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function Zp(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: o => (n.helpers.add(o),
        o)
    }
}
function yl(e, t) {
    for (let n = 0; n < e.length; n++)
        si(e[n], t)
}
function si(e, t) {
    switch (e.type) {
    case 1:
        yl(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        yl(e.items, t);
        break;
    case 6:
        {
            si(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function em(e, t={}) {
    const n = Zp(e);
    n.helper("normalize"),
    e.body && si(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function tm(e) {
    const t = e.body;
    return t.type === 2 ? bl(t) : t.cases.forEach(n => bl(n)),
    e
}
function bl(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null)
                break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = Gc(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
const nm = "minifier";
function En(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            En(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , n = t.cases;
            for (let r = 0; r < n.length; r++)
                En(n[r]);
            t.c = n,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , n = t.items;
            for (let r = 0; r < n.length; r++)
                En(n[r]);
            t.i = n,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            En(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (En(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    default:
        throw Vn(te.UNHANDLED_MINIFIER_NODE_TYPE, null, {
            domain: nm,
            args: [e.type]
        })
    }
    delete e.type
}
const rm = "parser";
function sm(e, t) {
    const {filename: n, breakLineCode: r, needIndent: s} = t
      , o = t.location !== !1
      , i = {
        filename: n,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: r,
        needIndent: s,
        indentLevel: 0
    };
    o && e.loc && (i.source = e.loc.source);
    const l = () => i;
    function a(S, I) {
        i.code += S
    }
    function u(S, I=!0) {
        const w = I ? r : "";
        a(s ? w + "  ".repeat(S) : w)
    }
    function c(S=!0) {
        const I = ++i.indentLevel;
        S && u(I)
    }
    function f(S=!0) {
        const I = --i.indentLevel;
        S && u(I)
    }
    function d() {
        u(i.indentLevel)
    }
    return {
        context: l,
        push: a,
        indent: c,
        deindent: f,
        newline: d,
        helper: S => `_${S}`,
        needIndent: () => i.needIndent
    }
}
function om(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Mn(e, t.key),
    t.modifier ? (e.push(", "),
    Mn(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function im(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const s = t.items.length;
    for (let o = 0; o < s && (Mn(e, t.items[o]),
    o !== s - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function lm(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const s = t.cases.length;
        for (let o = 0; o < s && (Mn(e, t.cases[o]),
        o !== s - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function am(e, t) {
    t.body ? Mn(e, t.body) : e.push("null")
}
function Mn(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        am(e, t);
        break;
    case 1:
        lm(e, t);
        break;
    case 2:
        im(e, t);
        break;
    case 6:
        om(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    default:
        throw Vn(te.UNHANDLED_CODEGEN_NODE_TYPE, null, {
            domain: rm,
            args: [t.type]
        })
    }
}
const cm = (e, t={}) => {
    const n = gl(t.mode) ? t.mode : "normal"
      , r = gl(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , o = t.needIndent ? t.needIndent : n !== "arrow"
      , i = e.helpers || []
      , l = sm(e, {
        filename: r,
        breakLineCode: s,
        needIndent: o
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(o),
    i.length > 0 && (l.push(`const { ${Gc(i.map(c => `${c}: _${c}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Mn(l, e),
    l.deindent(o),
    l.push("}"),
    delete e.helpers;
    const {code: a, map: u} = l.context();
    return {
        ast: e,
        code: a,
        map: u ? u.toJSON() : void 0
    }
}
;
function um(e, t={}) {
    const n = Kc({}, t)
      , r = !!n.jit
      , s = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , l = zp(n).parse(e);
    return r ? (o && tm(l),
    s && En(l),
    {
        ast: l,
        code: ""
    }) : (em(l, n),
    cm(l, n))
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fm() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ut().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ut().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ut().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
function It(e) {
    return fe(e) && oi(e) === 0 && (mt(e, "b") || mt(e, "body"))
}
const Yc = ["b", "body"];
function dm(e) {
    return sn(e, Yc)
}
const Xc = ["c", "cases"];
function hm(e) {
    return sn(e, Xc, [])
}
const Jc = ["s", "static"];
function pm(e) {
    return sn(e, Jc)
}
const Qc = ["i", "items"];
function mm(e) {
    return sn(e, Qc, [])
}
const zc = ["t", "type"];
function oi(e) {
    return sn(e, zc)
}
const Zc = ["v", "value"];
function Pr(e, t) {
    const n = sn(e, Zc);
    if (n != null)
        return n;
    throw hr(t)
}
const eu = ["m", "modifier"];
function _m(e) {
    return sn(e, eu)
}
const tu = ["k", "key"];
function gm(e) {
    const t = sn(e, tu);
    if (t)
        return t;
    throw hr(6)
}
function sn(e, t, n) {
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        if (mt(e, s) && e[s] != null)
            return e[s]
    }
    return n
}
const nu = [...Yc, ...Xc, ...Jc, ...Qc, ...tu, ...eu, ...Zc, ...zc];
function hr(e) {
    return new Error(`unhandled node type: ${e}`)
}
const on = [];
on[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
on[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
on[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
on[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
on[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
on[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
on[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const vm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ym(e) {
    return vm.test(e)
}
function bm(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Em(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function Tm(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ym(t) ? bm(t) : "*" + t
}
function Cm(e) {
    const t = [];
    let n = -1, r = 0, s = 0, o, i, l, a, u, c, f;
    const d = [];
    d[0] = () => {
        i === void 0 ? i = l : i += l
    }
    ,
    d[1] = () => {
        i !== void 0 && (t.push(i),
        i = void 0)
    }
    ,
    d[2] = () => {
        d[0](),
        s++
    }
    ,
    d[3] = () => {
        if (s > 0)
            s--,
            r = 4,
            d[0]();
        else {
            if (s = 0,
            i === void 0 || (i = Tm(i),
            i === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function h() {
        const E = e[n + 1];
        if (r === 5 && E === "'" || r === 6 && E === '"')
            return n++,
            l = "\\" + E,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        o = e[n],
        !(o === "\\" && h())) {
            if (a = Em(o),
            f = on[r],
            u = f[a] || f.l || 8,
            u === 8 || (r = u[0],
            u[1] !== void 0 && (c = d[u[1]],
            c && (l = o,
            c() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const El = new Map;
function Sm(e, t) {
    return fe(e) ? e[t] : null
}
function Lm(e, t) {
    if (!fe(e))
        return null;
    let n = El.get(t);
    if (n || (n = Cm(t),
    n && El.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let s = e
      , o = 0;
    for (; o < r; ) {
        const i = n[o];
        if (nu.includes(i) && It(s))
            return null;
        const l = s[i];
        if (l === void 0 || Ee(s))
            return null;
        s = l,
        o++
    }
    return s
}
const Om = e => e
  , Im = e => ""
  , wm = "text"
  , Rm = e => e.length === 0 ? "" : kp(e)
  , Nm = xp;
function Tl(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Am(e) {
    const t = xe(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (xe(e.named.count) || xe(e.named.n)) ? xe(e.named.count) ? e.named.count : xe(e.named.n) ? e.named.n : t : t
}
function Pm(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function xm(e={}) {
    const t = e.locale
      , n = Am(e)
      , r = fe(e.pluralRules) && q(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : Tl
      , s = fe(e.pluralRules) && q(t) && Ee(e.pluralRules[t]) ? Tl : void 0
      , o = w => w[r(n, w.length, s)]
      , i = e.list || []
      , l = w => i[w]
      , a = e.named || ve();
    xe(e.pluralIndex) && Pm(n, a);
    const u = w => a[w];
    function c(w) {
        const $ = Ee(e.messages) ? e.messages(w) : fe(e.messages) ? e.messages[w] : !1;
        return $ || (e.parent ? e.parent.message(w) : Im)
    }
    const f = w => e.modifiers ? e.modifiers[w] : Om
      , d = ie(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : Rm
      , h = ie(e.processor) && Ee(e.processor.interpolate) ? e.processor.interpolate : Nm
      , E = ie(e.processor) && q(e.processor.type) ? e.processor.type : wm
      , I = {
        list: l,
        named: u,
        plural: o,
        linked: (w, ...$) => {
            const [_,y] = $;
            let T = "text"
              , O = "";
            $.length === 1 ? fe(_) ? (O = _.modifier || O,
            T = _.type || T) : q(_) && (O = _ || O) : $.length === 2 && (q(_) && (O = _ || O),
            q(y) && (T = y || T));
            const N = c(w)(I)
              , U = T === "vnode" && Ce(N) && O ? N[0] : N;
            return O ? f(O)(U, T) : U
        }
        ,
        message: c,
        type: E,
        interpolate: h,
        normalize: d,
        values: We(ve(), i, a)
    };
    return I
}
let pr = null;
function km(e) {
    pr = e
}
function $m(e, t, n) {
    pr && pr.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const Mm = Dm("function:translate");
function Dm(e) {
    return t => pr && pr.emit(e, t)
}
const Fm = ri.__EXTEND_POINT__
  , an = bs(Fm)
  , Um = {
    FALLBACK_TO_TRANSLATE: an(),
    CANNOT_FORMAT_NUMBER: an(),
    FALLBACK_TO_NUMBER_FORMAT: an(),
    CANNOT_FORMAT_DATE: an(),
    FALLBACK_TO_DATE_FORMAT: an(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: an(),
    __EXTEND_POINT__: an()
}
  , ru = te.__EXTEND_POINT__
  , cn = bs(ru)
  , _t = {
    INVALID_ARGUMENT: ru,
    INVALID_DATE_ARGUMENT: cn(),
    INVALID_ISO_DATE_ARGUMENT: cn(),
    NOT_SUPPORT_NON_STRING_MESSAGE: cn(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: cn(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: cn(),
    NOT_SUPPORT_LOCALE_TYPE: cn(),
    __EXTEND_POINT__: cn()
};
function Lt(e) {
    return Vn(e, null, void 0)
}
function ii(e, t) {
    return t.locale != null ? Cl(t.locale) : Cl(e.locale)
}
let Hs;
function Cl(e) {
    if (q(e))
        return e;
    if (Ee(e)) {
        if (e.resolvedOnce && Hs != null)
            return Hs;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Pp(t))
                throw Lt(_t.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Hs = t
        } else
            throw Lt(_t.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Lt(_t.NOT_SUPPORT_LOCALE_TYPE)
}
function Hm(e, t, n) {
    return [...new Set([n, ...Ce(t) ? t : fe(t) ? Object.keys(t) : q(t) ? [t] : [n]])]
}
function su(e, t, n) {
    const r = q(n) ? n : Dn
      , s = e;
    s.__localeChainCache || (s.__localeChainCache = new Map);
    let o = s.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let i = [n];
        for (; Ce(i); )
            i = Sl(o, i, t);
        const l = Ce(t) || !ie(t) ? t : t.default ? t.default : null;
        i = q(l) ? [l] : l,
        Ce(i) && Sl(o, i, !1),
        s.__localeChainCache.set(r, o)
    }
    return o
}
function Sl(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && ae(r); s++) {
        const o = t[s];
        q(o) && (r = Vm(e, t[s], n))
    }
    return r
}
function Vm(e, t, n) {
    let r;
    const s = t.split("-");
    do {
        const o = s.join("-");
        r = Wm(e, o, n),
        s.splice(-1, 1)
    } while (s.length && r === !0);
    return r
}
function Wm(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const s = t.replace(/!/g, "");
        e.push(s),
        (Ce(n) || ie(n)) && n[s] && (r = n[s])
    }
    return r
}
const jm = "9.14.5"
  , Es = -1
  , Dn = "en-US"
  , Ll = ""
  , Ol = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Bm() {
    return {
        upper: (e, t) => t === "text" && q(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && q(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && q(e) ? Ol(e) : t === "vnode" && fe(e) && "__v_isVNode"in e ? Ol(e.children) : e
    }
}
let ou;
function Il(e) {
    ou = e
}
let iu;
function qm(e) {
    iu = e
}
let lu;
function Km(e) {
    lu = e
}
let au = null;
const Gm = e => {
    au = e
}
  , Ym = () => au;
let cu = null;
const wl = e => {
    cu = e
}
  , Xm = () => cu;
let Rl = 0;
function Jm(e={}) {
    const t = Ee(e.onWarn) ? e.onWarn : Lp
      , n = q(e.version) ? e.version : jm
      , r = q(e.locale) || Ee(e.locale) ? e.locale : Dn
      , s = Ee(r) ? Dn : r
      , o = Ce(e.fallbackLocale) || ie(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s
      , i = ie(e.messages) ? e.messages : Vs(s)
      , l = ie(e.datetimeFormats) ? e.datetimeFormats : Vs(s)
      , a = ie(e.numberFormats) ? e.numberFormats : Vs(s)
      , u = We(ve(), e.modifiers, Bm())
      , c = e.pluralRules || ve()
      , f = Ee(e.missing) ? e.missing : null
      , d = ae(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0
      , h = ae(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0
      , E = !!e.fallbackFormat
      , S = !!e.unresolving
      , I = Ee(e.postTranslation) ? e.postTranslation : null
      , w = ie(e.processor) ? e.processor : null
      , $ = ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , _ = !!e.escapeParameter
      , y = Ee(e.messageCompiler) ? e.messageCompiler : ou
      , T = Ee(e.messageResolver) ? e.messageResolver : iu || Sm
      , O = Ee(e.localeFallbacker) ? e.localeFallbacker : lu || Hm
      , N = fe(e.fallbackContext) ? e.fallbackContext : void 0
      , U = e
      , P = fe(U.__datetimeFormatters) ? U.__datetimeFormatters : new Map
      , W = fe(U.__numberFormatters) ? U.__numberFormatters : new Map
      , Q = fe(U.__meta) ? U.__meta : {};
    Rl++;
    const G = {
        version: n,
        cid: Rl,
        locale: r,
        fallbackLocale: o,
        messages: i,
        modifiers: u,
        pluralRules: c,
        missing: f,
        missingWarn: d,
        fallbackWarn: h,
        fallbackFormat: E,
        unresolving: S,
        postTranslation: I,
        processor: w,
        warnHtmlMessage: $,
        escapeParameter: _,
        messageCompiler: y,
        messageResolver: T,
        localeFallbacker: O,
        fallbackContext: N,
        onWarn: t,
        __meta: Q
    };
    return G.datetimeFormats = l,
    G.numberFormats = a,
    G.__datetimeFormatters = P,
    G.__numberFormatters = W,
    __INTLIFY_PROD_DEVTOOLS__ && $m(G, n, Q),
    G
}
const Vs = e => ({
    [e]: ve()
});
function li(e, t, n, r, s) {
    const {missing: o, onWarn: i} = e;
    if (o !== null) {
        const l = o(e, n, t, s);
        return q(l) ? l : t
    } else
        return t
}
function Gn(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Qm(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}
function zm(e, t) {
    const n = t.indexOf(e);
    if (n === -1)
        return !1;
    for (let r = n + 1; r < t.length; r++)
        if (Qm(e, t[r]))
            return !0;
    return !1
}
function Ws(e) {
    return n => Zm(n, e)
}
function Zm(e, t) {
    const n = dm(t);
    if (n == null)
        throw hr(0);
    if (oi(n) === 1) {
        const o = hm(n);
        return e.plural(o.reduce( (i, l) => [...i, Nl(e, l)], []))
    } else
        return Nl(e, n)
}
function Nl(e, t) {
    const n = pm(t);
    if (n != null)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = mm(t).reduce( (s, o) => [...s, yo(e, o)], []);
        return e.normalize(r)
    }
}
function yo(e, t) {
    const n = oi(t);
    switch (n) {
    case 3:
        return Pr(t, n);
    case 9:
        return Pr(t, n);
    case 4:
        {
            const r = t;
            if (mt(r, "k") && r.k)
                return e.interpolate(e.named(r.k));
            if (mt(r, "key") && r.key)
                return e.interpolate(e.named(r.key));
            throw hr(n)
        }
    case 5:
        {
            const r = t;
            if (mt(r, "i") && xe(r.i))
                return e.interpolate(e.list(r.i));
            if (mt(r, "index") && xe(r.index))
                return e.interpolate(e.list(r.index));
            throw hr(n)
        }
    case 6:
        {
            const r = t
              , s = _m(r)
              , o = gm(r);
            return e.linked(yo(e, o), s ? yo(e, s) : void 0, e.type)
        }
    case 7:
        return Pr(t, n);
    case 8:
        return Pr(t, n);
    default:
        throw new Error(`unhandled node on format message part: ${n}`)
    }
}
const uu = e => e;
let Tn = ve();
function fu(e, t={}) {
    let n = !1;
    const r = t.onError || Vp;
    return t.onError = s => {
        n = !0,
        r(s)
    }
    ,
    {
        ...um(e, t),
        detectError: n
    }
}
const e_ = (e, t) => {
    if (!q(e))
        throw Lt(_t.NOT_SUPPORT_NON_STRING_MESSAGE);
    {
        ae(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || uu)(e)
          , s = Tn[r];
        if (s)
            return s;
        const {code: o, detectError: i} = fu(e, t)
          , l = new Function(`return ${o}`)();
        return i ? l : Tn[r] = l
    }
}
;
function t_(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && q(e)) {
        ae(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || uu)(e)
          , s = Tn[r];
        if (s)
            return s;
        const {ast: o, detectError: i} = fu(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , l = Ws(o);
        return i ? l : Tn[r] = l
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Tn[n];
            return r || (Tn[n] = Ws(e))
        } else
            return Ws(e)
    }
}
const Al = () => ""
  , at = e => Ee(e);
function Pl(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: o, fallbackLocale: i, messages: l} = e
      , [a,u] = bo(...t)
      , c = ae(u.missingWarn) ? u.missingWarn : e.missingWarn
      , f = ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
      , d = ae(u.escapeParameter) ? u.escapeParameter : e.escapeParameter
      , h = !!u.resolvedMessage
      , E = q(u.default) || ae(u.default) ? ae(u.default) ? o ? a : () => a : u.default : n ? o ? a : () => a : ""
      , S = n || E !== ""
      , I = ii(e, u);
    d && n_(u);
    let[w,$,_] = h ? [a, I, l[I] || ve()] : du(e, a, I, i, f, c)
      , y = w
      , T = a;
    if (!h && !(q(y) || It(y) || at(y)) && S && (y = E,
    T = y),
    !h && (!(q(y) || It(y) || at(y)) || !q($)))
        return s ? Es : a;
    let O = !1;
    const N = () => {
        O = !0
    }
      , U = at(y) ? y : hu(e, a, $, y, T, N);
    if (O)
        return y;
    const P = o_(e, $, _, u)
      , W = xm(P)
      , Q = r_(e, U, W);
    let G = r ? r(Q, a) : Q;
    if (d && q(G) && (G = Np(G)),
    __INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: q(a) ? a : at(y) ? y.key : "",
            locale: $ || (at(y) ? y.locale : ""),
            format: q(y) ? y : at(y) ? y.source : "",
            message: G
        };
        Z.meta = We({}, e.__meta, Ym() || {}),
        Mm(Z)
    }
    return G
}
function n_(e) {
    Ce(e.list) ? e.list = e.list.map(t => q(t) ? ml(t) : t) : fe(e.named) && Object.keys(e.named).forEach(t => {
        q(e.named[t]) && (e.named[t] = ml(e.named[t]))
    }
    )
}
function du(e, t, n, r, s, o) {
    const {messages: i, onWarn: l, messageResolver: a, localeFallbacker: u} = e
      , c = u(e, r, n);
    let f = ve(), d, h = null;
    const E = "translate";
    for (let S = 0; S < c.length && (d = c[S],
    f = i[d] || ve(),
    (h = a(f, t)) === null && (h = f[t]),
    !(q(h) || It(h) || at(h))); S++)
        if (!zm(d, c)) {
            const I = li(e, t, d, o, E);
            I !== t && (h = I)
        }
    return [h, d, f]
}
function hu(e, t, n, r, s, o) {
    const {messageCompiler: i, warnHtmlMessage: l} = e;
    if (at(r)) {
        const u = r;
        return u.locale = u.locale || n,
        u.key = u.key || t,
        u
    }
    if (i == null) {
        const u = () => r;
        return u.locale = n,
        u.key = t,
        u
    }
    const a = i(r, s_(e, n, s, r, l, o));
    return a.locale = n,
    a.key = t,
    a.source = r,
    a
}
function r_(e, t, n) {
    return t(n)
}
function bo(...e) {
    const [t,n,r] = e
      , s = ve();
    if (!q(t) && !xe(t) && !at(t) && !It(t))
        throw Lt(_t.INVALID_ARGUMENT);
    const o = xe(t) ? String(t) : (at(t),
    t);
    return xe(n) ? s.plural = n : q(n) ? s.default = n : ie(n) && !ys(n) ? s.named = n : Ce(n) && (s.list = n),
    xe(r) ? s.plural = r : q(r) ? s.default = r : ie(r) && We(s, r),
    [o, s]
}
function s_(e, t, n, r, s, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: s,
        onError: i => {
            throw o && o(i),
            i
        }
        ,
        onCacheKey: i => Op(t, n, i)
    }
}
function o_(e, t, n, r) {
    const {modifiers: s, pluralRules: o, messageResolver: i, fallbackLocale: l, fallbackWarn: a, missingWarn: u, fallbackContext: c} = e
      , d = {
        locale: t,
        modifiers: s,
        pluralRules: o,
        messages: h => {
            let E = i(n, h);
            if (E == null && c) {
                const [,,S] = du(c, h, t, l, a, u);
                E = i(S, h)
            }
            if (q(E) || It(E)) {
                let S = !1;
                const w = hu(e, h, t, E, h, () => {
                    S = !0
                }
                );
                return S ? Al : w
            } else
                return at(E) ? E : Al
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    xe(r.plural) && (d.pluralIndex = r.plural),
    d
}
function xl(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i} = e
      , {__datetimeFormatters: l} = e
      , [a,u,c,f] = Eo(...t)
      , d = ae(c.missingWarn) ? c.missingWarn : e.missingWarn;
    ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const h = !!c.part
      , E = ii(e, c)
      , S = i(e, s, E);
    if (!q(a) || a === "")
        return new Intl.DateTimeFormat(E,f).format(u);
    let I = {}, w, $ = null;
    const _ = "datetime format";
    for (let O = 0; O < S.length && (w = S[O],
    I = n[w] || {},
    $ = I[a],
    !ie($)); O++)
        li(e, a, w, d, _);
    if (!ie($) || !q(w))
        return r ? Es : a;
    let y = `${w}__${a}`;
    ys(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = l.get(y);
    return T || (T = new Intl.DateTimeFormat(w,We({}, $, f)),
    l.set(y, T)),
    h ? T.formatToParts(u) : T.format(u)
}
const pu = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function Eo(...e) {
    const [t,n,r,s] = e
      , o = ve();
    let i = ve(), l;
    if (q(t)) {
        const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!a)
            throw Lt(_t.INVALID_ISO_DATE_ARGUMENT);
        const u = a[3] ? a[3].trim().startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
        l = new Date(u);
        try {
            l.toISOString()
        } catch {
            throw Lt(_t.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (wp(t)) {
        if (isNaN(t.getTime()))
            throw Lt(_t.INVALID_DATE_ARGUMENT);
        l = t
    } else if (xe(t))
        l = t;
    else
        throw Lt(_t.INVALID_ARGUMENT);
    return q(n) ? o.key = n : ie(n) && Object.keys(n).forEach(a => {
        pu.includes(a) ? i[a] = n[a] : o[a] = n[a]
    }
    ),
    q(r) ? o.locale = r : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || "", l, o, i]
}
function kl(e, t, n) {
    const r = e;
    for (const s in n) {
        const o = `${t}__${s}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function $l(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i} = e
      , {__numberFormatters: l} = e
      , [a,u,c,f] = To(...t)
      , d = ae(c.missingWarn) ? c.missingWarn : e.missingWarn;
    ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const h = !!c.part
      , E = ii(e, c)
      , S = i(e, s, E);
    if (!q(a) || a === "")
        return new Intl.NumberFormat(E,f).format(u);
    let I = {}, w, $ = null;
    const _ = "number format";
    for (let O = 0; O < S.length && (w = S[O],
    I = n[w] || {},
    $ = I[a],
    !ie($)); O++)
        li(e, a, w, d, _);
    if (!ie($) || !q(w))
        return r ? Es : a;
    let y = `${w}__${a}`;
    ys(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = l.get(y);
    return T || (T = new Intl.NumberFormat(w,We({}, $, f)),
    l.set(y, T)),
    h ? T.formatToParts(u) : T.format(u)
}
const mu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function To(...e) {
    const [t,n,r,s] = e
      , o = ve();
    let i = ve();
    if (!xe(t))
        throw Lt(_t.INVALID_ARGUMENT);
    const l = t;
    return q(n) ? o.key = n : ie(n) && Object.keys(n).forEach(a => {
        mu.includes(a) ? i[a] = n[a] : o[a] = n[a]
    }
    ),
    q(r) ? o.locale = r : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || "", l, o, i]
}
function Ml(e, t, n) {
    const r = e;
    for (const s in n) {
        const o = `${t}__${s}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
fm();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const i_ = "9.14.5";
function l_() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ut().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ut().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ut().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ut().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ut().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const a_ = Um.__EXTEND_POINT__
  , $t = bs(a_);
$t(),
$t(),
$t(),
$t(),
$t(),
$t(),
$t(),
$t(),
$t();
const _u = _t.__EXTEND_POINT__
  , Qe = bs(_u)
  , $e = {
    UNEXPECTED_RETURN_TYPE: _u,
    INVALID_ARGUMENT: Qe(),
    MUST_BE_CALL_SETUP_TOP: Qe(),
    NOT_INSTALLED: Qe(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Qe(),
    REQUIRED_VALUE: Qe(),
    INVALID_VALUE: Qe(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Qe(),
    NOT_INSTALLED_WITH_PROVIDE: Qe(),
    UNEXPECTED_ERROR: Qe(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Qe(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Qe(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Qe(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Qe(),
    __EXTEND_POINT__: Qe()
};
function Ue(e, ...t) {
    return Vn(e, null, void 0)
}
const Co = rn("__translateVNode")
  , So = rn("__datetimeParts")
  , Lo = rn("__numberParts")
  , gu = rn("__setPluralRules")
  , vu = rn("__injectWithOption")
  , Oo = rn("__dispose");
function mr(e) {
    if (!fe(e) || It(e))
        return e;
    for (const t in e)
        if (mt(e, t))
            if (!t.includes("."))
                fe(e[t]) && mr(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let s = e
                  , o = !1;
                for (let i = 0; i < r; i++) {
                    if (n[i] === "__proto__")
                        throw new Error(`unsafe key: ${n[i]}`);
                    if (n[i]in s || (s[n[i]] = ve()),
                    !fe(s[n[i]])) {
                        o = !0;
                        break
                    }
                    s = s[n[i]]
                }
                if (o || (It(s) ? nu.includes(n[r]) || delete e[t] : (s[n[r]] = e[t],
                delete e[t])),
                !It(s)) {
                    const i = s[n[r]];
                    fe(i) && mr(i)
                }
            }
    return e
}
function Ts(e, t) {
    const {messages: n, __i18n: r, messageResolver: s, flatJson: o} = t
      , i = ie(n) ? n : Ce(r) ? ve() : {
        [e]: ve()
    };
    if (Ce(r) && r.forEach(l => {
        if ("locale"in l && "resource"in l) {
            const {locale: a, resource: u} = l;
            a ? (i[a] = i[a] || ve(),
            Fr(u, i[a])) : Fr(u, i)
        } else
            q(l) && Fr(JSON.parse(l), i)
    }
    ),
    s == null && o)
        for (const l in i)
            mt(i, l) && mr(i[l]);
    return i
}
function yu(e) {
    return e.type
}
function bu(e, t, n) {
    let r = fe(t.messages) ? t.messages : ve();
    "__i18nGlobal"in n && (r = Ts(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const s = Object.keys(r);
    s.length && s.forEach(o => {
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (fe(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(i => {
                e.mergeDateTimeFormat(i, t.datetimeFormats[i])
            }
            )
        }
        if (fe(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(i => {
                e.mergeNumberFormat(i, t.numberFormats[i])
            }
            )
        }
    }
}
function Dl(e) {
    return Le(zt, null, e, 0)
}
const Fl = "__INTLIFY_META__"
  , Ul = () => []
  , c_ = () => !1;
let Hl = 0;
function Vl(e) {
    return (t, n, r, s) => e(n, r, xn() || void 0, s)
}
const u_ = () => {
    const e = xn();
    let t = null;
    return e && (t = yu(e)[Fl]) ? {
        [Fl]: t
    } : null
}
;
function ai(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , s = n === void 0
      , o = e.flatJson
      , i = es ? _e : Bo
      , l = !!e.translateExistCompatible;
    let a = ae(e.inheritLocale) ? e.inheritLocale : !0;
    const u = i(n && a ? n.locale.value : q(e.locale) ? e.locale : Dn)
      , c = i(n && a ? n.fallbackLocale.value : q(e.fallbackLocale) || Ce(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value)
      , f = i(Ts(u.value, e))
      , d = i(ie(e.datetimeFormats) ? e.datetimeFormats : {
        [u.value]: {}
    })
      , h = i(ie(e.numberFormats) ? e.numberFormats : {
        [u.value]: {}
    });
    let E = n ? n.missingWarn : ae(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0
      , S = n ? n.fallbackWarn : ae(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0
      , I = n ? n.fallbackRoot : ae(e.fallbackRoot) ? e.fallbackRoot : !0
      , w = !!e.fallbackFormat
      , $ = Ee(e.missing) ? e.missing : null
      , _ = Ee(e.missing) ? Vl(e.missing) : null
      , y = Ee(e.postTranslation) ? e.postTranslation : null
      , T = n ? n.warnHtmlMessage : ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , O = !!e.escapeParameter;
    const N = n ? n.modifiers : ie(e.modifiers) ? e.modifiers : {};
    let U = e.pluralRules || n && n.pluralRules, P;
    P = ( () => {
        s && wl(null);
        const L = {
            version: i_,
            locale: u.value,
            fallbackLocale: c.value,
            messages: f.value,
            modifiers: N,
            pluralRules: U,
            missing: _ === null ? void 0 : _,
            missingWarn: E,
            fallbackWarn: S,
            fallbackFormat: w,
            unresolving: !0,
            postTranslation: y === null ? void 0 : y,
            warnHtmlMessage: T,
            escapeParameter: O,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        L.datetimeFormats = d.value,
        L.numberFormats = h.value,
        L.__datetimeFormatters = ie(P) ? P.__datetimeFormatters : void 0,
        L.__numberFormatters = ie(P) ? P.__numberFormatters : void 0;
        const A = Jm(L);
        return s && wl(A),
        A
    }
    )(),
    Gn(P, u.value, c.value);
    function Q() {
        return [u.value, c.value, f.value, d.value, h.value]
    }
    const G = Pe({
        get: () => u.value,
        set: L => {
            u.value = L,
            P.locale = u.value
        }
    })
      , Z = Pe({
        get: () => c.value,
        set: L => {
            c.value = L,
            P.fallbackLocale = c.value,
            Gn(P, u.value, L)
        }
    })
      , Oe = Pe( () => f.value)
      , Se = Pe( () => d.value)
      , J = Pe( () => h.value);
    function oe() {
        return Ee(y) ? y : null
    }
    function Y(L) {
        y = L,
        P.postTranslation = L
    }
    function ge() {
        return $
    }
    function Je(L) {
        L !== null && (_ = Vl(L)),
        $ = L,
        P.missing = _
    }
    const we = (L, A, z, ee, Ie, Ae) => {
        Q();
        let De;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            s || (P.fallbackContext = n ? Xm() : void 0),
            De = L(P)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            s || (P.fallbackContext = void 0)
        }
        if (z !== "translate exists" && xe(De) && De === Es || z === "translate exists" && !De) {
            const [Ke,mn] = A();
            return n && I ? ee(n) : Ie(Ke)
        } else {
            if (Ae(De))
                return De;
            throw Ue($e.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function Re(...L) {
        return we(A => Reflect.apply(Pl, null, [A, ...L]), () => bo(...L), "translate", A => Reflect.apply(A.t, A, [...L]), A => A, A => q(A))
    }
    function ot(...L) {
        const [A,z,ee] = L;
        if (ee && !fe(ee))
            throw Ue($e.INVALID_ARGUMENT);
        return Re(A, z, We({
            resolvedMessage: !0
        }, ee || {}))
    }
    function et(...L) {
        return we(A => Reflect.apply(xl, null, [A, ...L]), () => Eo(...L), "datetime format", A => Reflect.apply(A.d, A, [...L]), () => Ll, A => q(A))
    }
    function Et(...L) {
        return we(A => Reflect.apply($l, null, [A, ...L]), () => To(...L), "number format", A => Reflect.apply(A.n, A, [...L]), () => Ll, A => q(A))
    }
    function Me(L) {
        return L.map(A => q(A) || xe(A) || ae(A) ? Dl(String(A)) : A)
    }
    const K = {
        normalize: Me,
        interpolate: L => L,
        type: "vnode"
    };
    function j(...L) {
        return we(A => {
            let z;
            const ee = A;
            try {
                ee.processor = K,
                z = Reflect.apply(Pl, null, [ee, ...L])
            } finally {
                ee.processor = null
            }
            return z
        }
        , () => bo(...L), "translate", A => A[Co](...L), A => [Dl(A)], A => Ce(A))
    }
    function X(...L) {
        return we(A => Reflect.apply($l, null, [A, ...L]), () => To(...L), "number format", A => A[Lo](...L), Ul, A => q(A) || Ce(A))
    }
    function ce(...L) {
        return we(A => Reflect.apply(xl, null, [A, ...L]), () => Eo(...L), "datetime format", A => A[So](...L), Ul, A => q(A) || Ce(A))
    }
    function he(L) {
        U = L,
        P.pluralRules = U
    }
    function v(L, A) {
        return we( () => {
            if (!L)
                return !1;
            const z = q(A) ? A : u.value
              , ee = D(z)
              , Ie = P.messageResolver(ee, L);
            return l ? Ie != null : It(Ie) || at(Ie) || q(Ie)
        }
        , () => [L], "translate exists", z => Reflect.apply(z.te, z, [L, A]), c_, z => ae(z))
    }
    function p(L) {
        let A = null;
        const z = su(P, c.value, u.value);
        for (let ee = 0; ee < z.length; ee++) {
            const Ie = f.value[z[ee]] || {}
              , Ae = P.messageResolver(Ie, L);
            if (Ae != null) {
                A = Ae;
                break
            }
        }
        return A
    }
    function C(L) {
        const A = p(L);
        return A ?? (n ? n.tm(L) || {} : {})
    }
    function D(L) {
        return f.value[L] || {}
    }
    function x(L, A) {
        if (o) {
            const z = {
                [L]: A
            };
            for (const ee in z)
                mt(z, ee) && mr(z[ee]);
            A = z[L]
        }
        f.value[L] = A,
        P.messages = f.value
    }
    function F(L, A) {
        f.value[L] = f.value[L] || {};
        const z = {
            [L]: A
        };
        if (o)
            for (const ee in z)
                mt(z, ee) && mr(z[ee]);
        A = z[L],
        Fr(A, f.value[L]),
        P.messages = f.value
    }
    function B(L) {
        return d.value[L] || {}
    }
    function m(L, A) {
        d.value[L] = A,
        P.datetimeFormats = d.value,
        kl(P, L, A)
    }
    function g(L, A) {
        d.value[L] = We(d.value[L] || {}, A),
        P.datetimeFormats = d.value,
        kl(P, L, A)
    }
    function b(L) {
        return h.value[L] || {}
    }
    function M(L, A) {
        h.value[L] = A,
        P.numberFormats = h.value,
        Ml(P, L, A)
    }
    function V(L, A) {
        h.value[L] = We(h.value[L] || {}, A),
        P.numberFormats = h.value,
        Ml(P, L, A)
    }
    Hl++,
    n && es && (Ht(n.locale, L => {
        a && (u.value = L,
        P.locale = L,
        Gn(P, u.value, c.value))
    }
    ),
    Ht(n.fallbackLocale, L => {
        a && (c.value = L,
        P.fallbackLocale = L,
        Gn(P, u.value, c.value))
    }
    ));
    const H = {
        id: Hl,
        locale: G,
        fallbackLocale: Z,
        get inheritLocale() {
            return a
        },
        set inheritLocale(L) {
            a = L,
            L && n && (u.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            Gn(P, u.value, c.value))
        },
        get availableLocales() {
            return Object.keys(f.value).sort()
        },
        messages: Oe,
        get modifiers() {
            return N
        },
        get pluralRules() {
            return U || {}
        },
        get isGlobal() {
            return s
        },
        get missingWarn() {
            return E
        },
        set missingWarn(L) {
            E = L,
            P.missingWarn = E
        },
        get fallbackWarn() {
            return S
        },
        set fallbackWarn(L) {
            S = L,
            P.fallbackWarn = S
        },
        get fallbackRoot() {
            return I
        },
        set fallbackRoot(L) {
            I = L
        },
        get fallbackFormat() {
            return w
        },
        set fallbackFormat(L) {
            w = L,
            P.fallbackFormat = w
        },
        get warnHtmlMessage() {
            return T
        },
        set warnHtmlMessage(L) {
            T = L,
            P.warnHtmlMessage = L
        },
        get escapeParameter() {
            return O
        },
        set escapeParameter(L) {
            O = L,
            P.escapeParameter = L
        },
        t: Re,
        getLocaleMessage: D,
        setLocaleMessage: x,
        mergeLocaleMessage: F,
        getPostTranslationHandler: oe,
        setPostTranslationHandler: Y,
        getMissingHandler: ge,
        setMissingHandler: Je,
        [gu]: he
    };
    return H.datetimeFormats = Se,
    H.numberFormats = J,
    H.rt = ot,
    H.te = v,
    H.tm = C,
    H.d = et,
    H.n = Et,
    H.getDateTimeFormat = B,
    H.setDateTimeFormat = m,
    H.mergeDateTimeFormat = g,
    H.getNumberFormat = b,
    H.setNumberFormat = M,
    H.mergeNumberFormat = V,
    H[vu] = r,
    H[Co] = j,
    H[So] = ce,
    H[Lo] = X,
    H
}
function f_(e) {
    const t = q(e.locale) ? e.locale : Dn
      , n = q(e.fallbackLocale) || Ce(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t
      , r = Ee(e.missing) ? e.missing : void 0
      , s = ae(e.silentTranslationWarn) || en(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0
      , o = ae(e.silentFallbackWarn) || en(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0
      , i = ae(e.fallbackRoot) ? e.fallbackRoot : !0
      , l = !!e.formatFallbackMessages
      , a = ie(e.modifiers) ? e.modifiers : {}
      , u = e.pluralizationRules
      , c = Ee(e.postTranslation) ? e.postTranslation : void 0
      , f = q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0
      , d = !!e.escapeParameterHtml
      , h = ae(e.sync) ? e.sync : !0;
    let E = e.messages;
    if (ie(e.sharedMessages)) {
        const O = e.sharedMessages;
        E = Object.keys(O).reduce( (U, P) => {
            const W = U[P] || (U[P] = {});
            return We(W, O[P]),
            U
        }
        , E || {})
    }
    const {__i18n: S, __root: I, __injectWithOption: w} = e
      , $ = e.datetimeFormats
      , _ = e.numberFormats
      , y = e.flatJson
      , T = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: E,
        flatJson: y,
        datetimeFormats: $,
        numberFormats: _,
        missing: r,
        missingWarn: s,
        fallbackWarn: o,
        fallbackRoot: i,
        fallbackFormat: l,
        modifiers: a,
        pluralRules: u,
        postTranslation: c,
        warnHtmlMessage: f,
        escapeParameter: d,
        messageResolver: e.messageResolver,
        inheritLocale: h,
        translateExistCompatible: T,
        __i18n: S,
        __root: I,
        __injectWithOption: w
    }
}
function Io(e={}, t) {
    {
        const n = ai(f_(e))
          , {__extender: r} = e
          , s = {
            id: n.id,
            get locale() {
                return n.locale.value
            },
            set locale(o) {
                n.locale.value = o
            },
            get fallbackLocale() {
                return n.fallbackLocale.value
            },
            set fallbackLocale(o) {
                n.fallbackLocale.value = o
            },
            get messages() {
                return n.messages.value
            },
            get datetimeFormats() {
                return n.datetimeFormats.value
            },
            get numberFormats() {
                return n.numberFormats.value
            },
            get availableLocales() {
                return n.availableLocales
            },
            get formatter() {
                return {
                    interpolate() {
                        return []
                    }
                }
            },
            set formatter(o) {},
            get missing() {
                return n.getMissingHandler()
            },
            set missing(o) {
                n.setMissingHandler(o)
            },
            get silentTranslationWarn() {
                return ae(n.missingWarn) ? !n.missingWarn : n.missingWarn
            },
            set silentTranslationWarn(o) {
                n.missingWarn = ae(o) ? !o : o
            },
            get silentFallbackWarn() {
                return ae(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            },
            set silentFallbackWarn(o) {
                n.fallbackWarn = ae(o) ? !o : o
            },
            get modifiers() {
                return n.modifiers
            },
            get formatFallbackMessages() {
                return n.fallbackFormat
            },
            set formatFallbackMessages(o) {
                n.fallbackFormat = o
            },
            get postTranslation() {
                return n.getPostTranslationHandler()
            },
            set postTranslation(o) {
                n.setPostTranslationHandler(o)
            },
            get sync() {
                return n.inheritLocale
            },
            set sync(o) {
                n.inheritLocale = o
            },
            get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            },
            set warnHtmlInMessage(o) {
                n.warnHtmlMessage = o !== "off"
            },
            get escapeParameterHtml() {
                return n.escapeParameter
            },
            set escapeParameterHtml(o) {
                n.escapeParameter = o
            },
            get preserveDirectiveContent() {
                return !0
            },
            set preserveDirectiveContent(o) {},
            get pluralizationRules() {
                return n.pluralRules || {}
            },
            __composer: n,
            t(...o) {
                const [i,l,a] = o
                  , u = {};
                let c = null
                  , f = null;
                if (!q(i))
                    throw Ue($e.INVALID_ARGUMENT);
                const d = i;
                return q(l) ? u.locale = l : Ce(l) ? c = l : ie(l) && (f = l),
                Ce(a) ? c = a : ie(a) && (f = a),
                Reflect.apply(n.t, n, [d, c || f || {}, u])
            },
            rt(...o) {
                return Reflect.apply(n.rt, n, [...o])
            },
            tc(...o) {
                const [i,l,a] = o
                  , u = {
                    plural: 1
                };
                let c = null
                  , f = null;
                if (!q(i))
                    throw Ue($e.INVALID_ARGUMENT);
                const d = i;
                return q(l) ? u.locale = l : xe(l) ? u.plural = l : Ce(l) ? c = l : ie(l) && (f = l),
                q(a) ? u.locale = a : Ce(a) ? c = a : ie(a) && (f = a),
                Reflect.apply(n.t, n, [d, c || f || {}, u])
            },
            te(o, i) {
                return n.te(o, i)
            },
            tm(o) {
                return n.tm(o)
            },
            getLocaleMessage(o) {
                return n.getLocaleMessage(o)
            },
            setLocaleMessage(o, i) {
                n.setLocaleMessage(o, i)
            },
            mergeLocaleMessage(o, i) {
                n.mergeLocaleMessage(o, i)
            },
            d(...o) {
                return Reflect.apply(n.d, n, [...o])
            },
            getDateTimeFormat(o) {
                return n.getDateTimeFormat(o)
            },
            setDateTimeFormat(o, i) {
                n.setDateTimeFormat(o, i)
            },
            mergeDateTimeFormat(o, i) {
                n.mergeDateTimeFormat(o, i)
            },
            n(...o) {
                return Reflect.apply(n.n, n, [...o])
            },
            getNumberFormat(o) {
                return n.getNumberFormat(o)
            },
            setNumberFormat(o, i) {
                n.setNumberFormat(o, i)
            },
            mergeNumberFormat(o, i) {
                n.mergeNumberFormat(o, i)
            },
            getChoiceIndex(o, i) {
                return -1
            }
        };
        return s.__extender = r,
        s
    }
}
const ci = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function d_({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (r, s) => [...r, ...s.type === Ne ? s.children : [s]], []) : t.reduce( (n, r) => {
        const s = e[r];
        return s && (n[r] = s()),
        n
    }
    , ve())
}
function Eu(e) {
    return Ne
}
const h_ = Un({
    name: "i18n-t",
    props: We({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => xe(e) || !isNaN(e)
        }
    }, ci),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , s = e.i18n || ui({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const o = Object.keys(n).filter(f => f !== "_")
              , i = ve();
            e.locale && (i.locale = e.locale),
            e.plural !== void 0 && (i.plural = q(e.plural) ? +e.plural : e.plural);
            const l = d_(t, o)
              , a = s[Co](e.keypath, l, i)
              , u = We(ve(), r)
              , c = q(e.tag) || fe(e.tag) ? e.tag : Eu();
            return _s(c, u, a)
        }
    }
})
  , Wl = h_;
function p_(e) {
    return Ce(e) && !q(e[0])
}
function Tu(e, t, n, r) {
    const {slots: s, attrs: o} = t;
    return () => {
        const i = {
            part: !0
        };
        let l = ve();
        e.locale && (i.locale = e.locale),
        q(e.format) ? i.key = e.format : fe(e.format) && (q(e.format.key) && (i.key = e.format.key),
        l = Object.keys(e.format).reduce( (d, h) => n.includes(h) ? We(ve(), d, {
            [h]: e.format[h]
        }) : d, ve()));
        const a = r(e.value, i, l);
        let u = [i.key];
        Ce(a) ? u = a.map( (d, h) => {
            const E = s[d.type]
              , S = E ? E({
                [d.type]: d.value,
                index: h,
                parts: a
            }) : [d.value];
            return p_(S) && (S[0].key = `${d.type}-${h}`),
            S
        }
        ) : q(a) && (u = [a]);
        const c = We(ve(), o)
          , f = q(e.tag) || fe(e.tag) ? e.tag : Eu();
        return _s(f, c, u)
    }
}
const m_ = Un({
    name: "i18n-n",
    props: We({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ci),
    setup(e, t) {
        const n = e.i18n || ui({
            useScope: e.scope,
            __useComponent: !0
        });
        return Tu(e, t, mu, (...r) => n[Lo](...r))
    }
})
  , jl = m_
  , __ = Un({
    name: "i18n-d",
    props: We({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ci),
    setup(e, t) {
        const n = e.i18n || ui({
            useScope: e.scope,
            __useComponent: !0
        });
        return Tu(e, t, pu, (...r) => n[So](...r))
    }
})
  , Bl = __;
function g_(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function v_(e) {
    const t = i => {
        const {instance: l, modifiers: a, value: u} = i;
        if (!l || !l.$)
            throw Ue($e.UNEXPECTED_ERROR);
        const c = g_(e, l.$)
          , f = ql(u);
        return [Reflect.apply(c.t, c, [...Kl(f)]), c]
    }
    ;
    return {
        created: (i, l) => {
            const [a,u] = t(l);
            es && e.global === u && (i.__i18nWatcher = Ht(u.locale, () => {
                l.instance && l.instance.$forceUpdate()
            }
            )),
            i.__composer = u,
            i.textContent = a
        }
        ,
        unmounted: i => {
            es && i.__i18nWatcher && (i.__i18nWatcher(),
            i.__i18nWatcher = void 0,
            delete i.__i18nWatcher),
            i.__composer && (i.__composer = void 0,
            delete i.__composer)
        }
        ,
        beforeUpdate: (i, {value: l}) => {
            if (i.__composer) {
                const a = i.__composer
                  , u = ql(l);
                i.textContent = Reflect.apply(a.t, a, [...Kl(u)])
            }
        }
        ,
        getSSRProps: i => {
            const [l] = t(i);
            return {
                textContent: l
            }
        }
    }
}
function ql(e) {
    if (q(e))
        return {
            path: e
        };
    if (ie(e)) {
        if (!("path"in e))
            throw Ue($e.REQUIRED_VALUE, "path");
        return e
    } else
        throw Ue($e.INVALID_VALUE)
}
function Kl(e) {
    const {path: t, locale: n, args: r, choice: s, plural: o} = e
      , i = {}
      , l = r || {};
    return q(n) && (i.locale = n),
    xe(s) && (i.plural = s),
    xe(o) && (i.plural = o),
    [t, l, i]
}
function y_(e, t, ...n) {
    const r = ie(n[0]) ? n[0] : {}
      , s = !!r.useI18nComponentName;
    (ae(r.globalInstall) ? r.globalInstall : !0) && ([s ? "i18n" : Wl.name, "I18nT"].forEach(i => e.component(i, Wl)),
    [jl.name, "I18nN"].forEach(i => e.component(i, jl)),
    [Bl.name, "I18nD"].forEach(i => e.component(i, Bl))),
    e.directive("t", v_(t))
}
function b_(e, t, n) {
    return {
        beforeCreate() {
            const r = xn();
            if (!r)
                throw Ue($e.UNEXPECTED_ERROR);
            const s = this.$options;
            if (s.i18n) {
                const o = s.i18n;
                if (s.__i18n && (o.__i18n = s.__i18n),
                o.__root = t,
                this === this.$root)
                    this.$i18n = Gl(e, o);
                else {
                    o.__injectWithOption = !0,
                    o.__extender = n.__vueI18nExtend,
                    this.$i18n = Io(o);
                    const i = this.$i18n;
                    i.__extender && (i.__disposer = i.__extender(this.$i18n))
                }
            } else if (s.__i18n)
                if (this === this.$root)
                    this.$i18n = Gl(e, s);
                else {
                    this.$i18n = Io({
                        __i18n: s.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const o = this.$i18n;
                    o.__extender && (o.__disposer = o.__extender(this.$i18n))
                }
            else
                this.$i18n = e;
            s.__i18nGlobal && bu(t, s, s),
            this.$t = (...o) => this.$i18n.t(...o),
            this.$rt = (...o) => this.$i18n.rt(...o),
            this.$tc = (...o) => this.$i18n.tc(...o),
            this.$te = (o, i) => this.$i18n.te(o, i),
            this.$d = (...o) => this.$i18n.d(...o),
            this.$n = (...o) => this.$i18n.n(...o),
            this.$tm = o => this.$i18n.tm(o),
            n.__setInstance(r, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const r = xn();
            if (!r)
                throw Ue($e.UNEXPECTED_ERROR);
            const s = this.$i18n;
            delete this.$t,
            delete this.$rt,
            delete this.$tc,
            delete this.$te,
            delete this.$d,
            delete this.$n,
            delete this.$tm,
            s.__disposer && (s.__disposer(),
            delete s.__disposer,
            delete s.__extender),
            n.__deleteInstance(r),
            delete this.$i18n
        }
    }
}
function Gl(e, t) {
    e.locale = t.locale || e.locale,
    e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
    e.missing = t.missing || e.missing,
    e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
    e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
    e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
    e.postTranslation = t.postTranslation || e.postTranslation,
    e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
    e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
    e.sync = t.sync || e.sync,
    e.__composer[gu](t.pluralizationRules || e.pluralizationRules);
    const n = Ts(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])),
    t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])),
    e
}
const E_ = rn("global-vue-i18n");
function T_(e={}, t) {
    const n = __VUE_I18N_LEGACY_API__ && ae(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__
      , r = ae(e.globalInjection) ? e.globalInjection : !0
      , s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0
      , o = new Map
      , [i,l] = C_(e, n)
      , a = rn("");
    function u(d) {
        return o.get(d) || null
    }
    function c(d, h) {
        o.set(d, h)
    }
    function f(d) {
        o.delete(d)
    }
    {
        const d = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return s
            },
            async install(h, ...E) {
                if (h.__VUE_I18N_SYMBOL__ = a,
                h.provide(h.__VUE_I18N_SYMBOL__, d),
                ie(E[0])) {
                    const w = E[0];
                    d.__composerExtend = w.__composerExtend,
                    d.__vueI18nExtend = w.__vueI18nExtend
                }
                let S = null;
                !n && r && (S = P_(h, d.global)),
                __VUE_I18N_FULL_INSTALL__ && y_(h, d, ...E),
                __VUE_I18N_LEGACY_API__ && n && h.mixin(b_(l, l.__composer, d));
                const I = h.unmount;
                h.unmount = () => {
                    S && S(),
                    d.dispose(),
                    I()
                }
            },
            get global() {
                return l
            },
            dispose() {
                i.stop()
            },
            __instances: o,
            __getInstance: u,
            __setInstance: c,
            __deleteInstance: f
        };
        return d
    }
}
function ui(e={}) {
    const t = xn();
    if (t == null)
        throw Ue($e.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Ue($e.NOT_INSTALLED);
    const n = S_(t)
      , r = O_(n)
      , s = yu(t)
      , o = L_(e, s);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition)
            throw Ue($e.NOT_AVAILABLE_IN_LEGACY_MODE);
        return N_(t, o, r, e)
    }
    if (o === "global")
        return bu(r, e, s),
        r;
    if (o === "parent") {
        let a = I_(n, t, e.__useComponent);
        return a == null && (a = r),
        a
    }
    const i = n;
    let l = i.__getInstance(t);
    if (l == null) {
        const a = We({}, e);
        "__i18n"in s && (a.__i18n = s.__i18n),
        r && (a.__root = r),
        l = ai(a),
        i.__composerExtend && (l[Oo] = i.__composerExtend(l)),
        R_(i, t, l),
        i.__setInstance(t, l)
    }
    return l
}
function C_(e, t, n) {
    const r = Ra();
    {
        const s = __VUE_I18N_LEGACY_API__ && t ? r.run( () => Io(e)) : r.run( () => ai(e));
        if (s == null)
            throw Ue($e.UNEXPECTED_ERROR);
        return [r, s]
    }
}
function S_(e) {
    {
        const t = ft(e.isCE ? E_ : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Ue(e.isCE ? $e.NOT_INSTALLED_WITH_PROVIDE : $e.UNEXPECTED_ERROR);
        return t
    }
}
function L_(e, t) {
    return ys(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function O_(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function I_(e, t, n=!1) {
    let r = null;
    const s = t.root;
    let o = w_(t, n);
    for (; o != null; ) {
        const i = e;
        if (e.mode === "composition")
            r = i.__getInstance(o);
        else if (__VUE_I18N_LEGACY_API__) {
            const l = i.__getInstance(o);
            l != null && (r = l.__composer,
            n && r && !r[vu] && (r = null))
        }
        if (r != null || s === o)
            break;
        o = o.parent
    }
    return r
}
function w_(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function R_(e, t, n) {
    At( () => {}
    , t),
    Go( () => {
        const r = n;
        e.__deleteInstance(t);
        const s = r[Oo];
        s && (s(),
        delete r[Oo])
    }
    , t)
}
function N_(e, t, n, r={}) {
    const s = t === "local"
      , o = Bo(null);
    if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
        throw Ue($e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const i = ae(r.inheritLocale) ? r.inheritLocale : !q(r.locale)
      , l = _e(!s || i ? n.locale.value : q(r.locale) ? r.locale : Dn)
      , a = _e(!s || i ? n.fallbackLocale.value : q(r.fallbackLocale) || Ce(r.fallbackLocale) || ie(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : l.value)
      , u = _e(Ts(l.value, r))
      , c = _e(ie(r.datetimeFormats) ? r.datetimeFormats : {
        [l.value]: {}
    })
      , f = _e(ie(r.numberFormats) ? r.numberFormats : {
        [l.value]: {}
    })
      , d = s ? n.missingWarn : ae(r.missingWarn) || en(r.missingWarn) ? r.missingWarn : !0
      , h = s ? n.fallbackWarn : ae(r.fallbackWarn) || en(r.fallbackWarn) ? r.fallbackWarn : !0
      , E = s ? n.fallbackRoot : ae(r.fallbackRoot) ? r.fallbackRoot : !0
      , S = !!r.fallbackFormat
      , I = Ee(r.missing) ? r.missing : null
      , w = Ee(r.postTranslation) ? r.postTranslation : null
      , $ = s ? n.warnHtmlMessage : ae(r.warnHtmlMessage) ? r.warnHtmlMessage : !0
      , _ = !!r.escapeParameter
      , y = s ? n.modifiers : ie(r.modifiers) ? r.modifiers : {}
      , T = r.pluralRules || s && n.pluralRules;
    function O() {
        return [l.value, a.value, u.value, c.value, f.value]
    }
    const N = Pe({
        get: () => o.value ? o.value.locale.value : l.value,
        set: p => {
            o.value && (o.value.locale.value = p),
            l.value = p
        }
    })
      , U = Pe({
        get: () => o.value ? o.value.fallbackLocale.value : a.value,
        set: p => {
            o.value && (o.value.fallbackLocale.value = p),
            a.value = p
        }
    })
      , P = Pe( () => o.value ? o.value.messages.value : u.value)
      , W = Pe( () => c.value)
      , Q = Pe( () => f.value);
    function G() {
        return o.value ? o.value.getPostTranslationHandler() : w
    }
    function Z(p) {
        o.value && o.value.setPostTranslationHandler(p)
    }
    function Oe() {
        return o.value ? o.value.getMissingHandler() : I
    }
    function Se(p) {
        o.value && o.value.setMissingHandler(p)
    }
    function J(p) {
        return O(),
        p()
    }
    function oe(...p) {
        return o.value ? J( () => Reflect.apply(o.value.t, null, [...p])) : J( () => "")
    }
    function Y(...p) {
        return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
    }
    function ge(...p) {
        return o.value ? J( () => Reflect.apply(o.value.d, null, [...p])) : J( () => "")
    }
    function Je(...p) {
        return o.value ? J( () => Reflect.apply(o.value.n, null, [...p])) : J( () => "")
    }
    function we(p) {
        return o.value ? o.value.tm(p) : {}
    }
    function Re(p, C) {
        return o.value ? o.value.te(p, C) : !1
    }
    function ot(p) {
        return o.value ? o.value.getLocaleMessage(p) : {}
    }
    function et(p, C) {
        o.value && (o.value.setLocaleMessage(p, C),
        u.value[p] = C)
    }
    function Et(p, C) {
        o.value && o.value.mergeLocaleMessage(p, C)
    }
    function Me(p) {
        return o.value ? o.value.getDateTimeFormat(p) : {}
    }
    function k(p, C) {
        o.value && (o.value.setDateTimeFormat(p, C),
        c.value[p] = C)
    }
    function K(p, C) {
        o.value && o.value.mergeDateTimeFormat(p, C)
    }
    function j(p) {
        return o.value ? o.value.getNumberFormat(p) : {}
    }
    function X(p, C) {
        o.value && (o.value.setNumberFormat(p, C),
        f.value[p] = C)
    }
    function ce(p, C) {
        o.value && o.value.mergeNumberFormat(p, C)
    }
    const he = {
        get id() {
            return o.value ? o.value.id : -1
        },
        locale: N,
        fallbackLocale: U,
        messages: P,
        datetimeFormats: W,
        numberFormats: Q,
        get inheritLocale() {
            return o.value ? o.value.inheritLocale : i
        },
        set inheritLocale(p) {
            o.value && (o.value.inheritLocale = p)
        },
        get availableLocales() {
            return o.value ? o.value.availableLocales : Object.keys(u.value)
        },
        get modifiers() {
            return o.value ? o.value.modifiers : y
        },
        get pluralRules() {
            return o.value ? o.value.pluralRules : T
        },
        get isGlobal() {
            return o.value ? o.value.isGlobal : !1
        },
        get missingWarn() {
            return o.value ? o.value.missingWarn : d
        },
        set missingWarn(p) {
            o.value && (o.value.missingWarn = p)
        },
        get fallbackWarn() {
            return o.value ? o.value.fallbackWarn : h
        },
        set fallbackWarn(p) {
            o.value && (o.value.missingWarn = p)
        },
        get fallbackRoot() {
            return o.value ? o.value.fallbackRoot : E
        },
        set fallbackRoot(p) {
            o.value && (o.value.fallbackRoot = p)
        },
        get fallbackFormat() {
            return o.value ? o.value.fallbackFormat : S
        },
        set fallbackFormat(p) {
            o.value && (o.value.fallbackFormat = p)
        },
        get warnHtmlMessage() {
            return o.value ? o.value.warnHtmlMessage : $
        },
        set warnHtmlMessage(p) {
            o.value && (o.value.warnHtmlMessage = p)
        },
        get escapeParameter() {
            return o.value ? o.value.escapeParameter : _
        },
        set escapeParameter(p) {
            o.value && (o.value.escapeParameter = p)
        },
        t: oe,
        getPostTranslationHandler: G,
        setPostTranslationHandler: Z,
        getMissingHandler: Oe,
        setMissingHandler: Se,
        rt: Y,
        d: ge,
        n: Je,
        tm: we,
        te: Re,
        getLocaleMessage: ot,
        setLocaleMessage: et,
        mergeLocaleMessage: Et,
        getDateTimeFormat: Me,
        setDateTimeFormat: k,
        mergeDateTimeFormat: K,
        getNumberFormat: j,
        setNumberFormat: X,
        mergeNumberFormat: ce
    };
    function v(p) {
        p.locale.value = l.value,
        p.fallbackLocale.value = a.value,
        Object.keys(u.value).forEach(C => {
            p.mergeLocaleMessage(C, u.value[C])
        }
        ),
        Object.keys(c.value).forEach(C => {
            p.mergeDateTimeFormat(C, c.value[C])
        }
        ),
        Object.keys(f.value).forEach(C => {
            p.mergeNumberFormat(C, f.value[C])
        }
        ),
        p.escapeParameter = _,
        p.fallbackFormat = S,
        p.fallbackRoot = E,
        p.fallbackWarn = h,
        p.missingWarn = d,
        p.warnHtmlMessage = $
    }
    return nc( () => {
        if (e.proxy == null || e.proxy.$i18n == null)
            throw Ue($e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const p = o.value = e.proxy.$i18n.__composer;
        t === "global" ? (l.value = p.locale.value,
        a.value = p.fallbackLocale.value,
        u.value = p.messages.value,
        c.value = p.datetimeFormats.value,
        f.value = p.numberFormats.value) : s && v(p)
    }
    ),
    he
}
const A_ = ["locale", "fallbackLocale", "availableLocales"]
  , Yl = ["t", "rt", "d", "n", "tm", "te"];
function P_(e, t) {
    const n = Object.create(null);
    return A_.forEach(s => {
        const o = Object.getOwnPropertyDescriptor(t, s);
        if (!o)
            throw Ue($e.UNEXPECTED_ERROR);
        const i = Fe(o.value) ? {
            get() {
                return o.value.value
            },
            set(l) {
                o.value.value = l
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, s, i)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Yl.forEach(s => {
        const o = Object.getOwnPropertyDescriptor(t, s);
        if (!o || !o.value)
            throw Ue($e.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, o)
    }
    ),
    () => {
        delete e.config.globalProperties.$i18n,
        Yl.forEach(s => {
            delete e.config.globalProperties[`$${s}`]
        }
        )
    }
}
l_();
__INTLIFY_JIT_COMPILATION__ ? Il(t_) : Il(e_);
qm(Lm);
Km(su);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = Ut();
    e.__INTLIFY__ = !0,
    km(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const x_ = {
    app_name: "素材SoSo",
    app_desc: '只收录<b class="text-error">免费无版权</b>视频图片素材，让你创作无忧😃。',
    app_slogan: "素材SoSo是一个AI智能素材搜索引擎，快速找到免版权视频和图片素材，让你创作无忧😃。",
    search: "搜索",
    video: "视频",
    photo: "照片",
    illustruction: "插画",
    search_input_tip: "输入文字描述搜索相关画面",
    load_more: "加载更多",
    loading: "加载中...",
    seo_home_title: "素材SoSo-免版权素材智能搜索引擎",
    seo_home_desc: "素材SoSo是一个AI智能素材搜索引擎，能帮助内容创作者快速找到免版权视频和图片素材。",
    footer_copy_right: "Copyright © 2025 大侠Luffy出品",
    feedback: "反馈",
    similar_clip: "相似素材",
    download: "去下载",
    blog: "博客",
    article_list: "文章列表",
    support: "支持",
    tutorial: "教程",
    about: "关于",
    more: "更多",
    collection: "素材",
    more_resource: "更多素材",
    collection_list: "素材集合列表",
    collection_count: "数量 {count} +",
    photo_collection_title: "{count}+{tag}免版权图片素材",
    video_collection_title: "{count}+{tag}免版权视频素材",
    photo_collection_seo_description: "素材SoSo聚合全网无版权素材资源，基于先进AI图像搜索技术，智能理解图片内容与场景，让您快速找到最匹配的创作素材，告别版权风险！设计师、自媒体、营销人员的必备素材搜索工具！",
    video_collection_seo_description: "素材SoSo聚合全网无版权素材资源，基于先进AI视频搜索技术，让您快速找到最匹配的视频素材，告别版权风险！自媒体、视频创作者，剪辑师的必备素材搜索工具！",
    intro_title_1: "海量免费素材，满足你所需",
    intro_desc_1: "素材SoSo采集了全网数百万可用免版权素材，一站式搜索创作素材，降低成本，极大提升创作效率！",
    intro_title_2: "AI驱动搜索，找素材更精准",
    intro_desc_2: "素材SoSo基于先进的文本图像AI模型来构建索引，具备精准理解图像包含信息的能力，让你找起素材来更轻松！"
}
  , k_ = {
    app_name: "ClipSoSo",
    app_desc: "ClipSoSo is an intelligent material search engine that helps content creators quickly find royalty-free videos and image materials.",
    search: "Search",
    video: "Video",
    photo: "Photo",
    illustruction: "Illustruction",
    search_input_tip: "Enter text description to search for relevant visuals",
    load_more: "Load More",
    loading: "Loading...",
    seo_home_title: "ClipSoSo - Intelligent Search Engine for Royalty-Free Materials",
    seo_home_desc: "ClipSoSo is an AI-powered material search engine that helps content creators quickly find royalty-free video and image materials."
}
  , Cu = T_({
    locale: "zh-CN",
    messages: {
        "zh-CN": x_,
        en: k_
    }
})
  , $_ = Cu.global.t;
function ct(e, t) {
    return $_(e, t)
}
const js = ct("app_name");
function Wn(e) {
    const t = Po.currentRoute.value.meta;
    e.title ? e.title.indexOf(js) === -1 ? t.title = e.title + "-" + js : t.title = e.title : t.title = js,
    t.description = e.description ? e.description : ""
}
const fi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
  , M_ = {
    class: "main"
}
  , D_ = {
    class: "hero min-h-screen bg-base-200 px-4"
}
  , F_ = {
    class: "hero-content flex-col head-content"
}
  , U_ = {
    class: "text-center text-4xl md:text-5xl lg:text-6xl font-bold"
}
  , H_ = ["innerHTML"]
  , V_ = {
    class: "search-container w-full mx-auto pt-5"
}
  , W_ = {
    class: "input input-xl validator flex-1 w-full"
}
  , j_ = {
    value: 0
}
  , B_ = {
    value: 1
}
  , q_ = {
    value: 2
}
  , K_ = ["placeholder"]
  , G_ = {
    class: "mt-4 text-center"
}
  , Y_ = {
    class: "flex justify-center gap-2 mt-4 text-sm text-gray-500"
}
  , X_ = {
    class: "container px-2 py-40 mx-auto"
}
  , J_ = {
    class: "flex flex-col md:flex-row gap-4"
}
  , Q_ = {
    class: "w-full md:w-8/12 flex items-center justify-center"
}
  , z_ = {
    class: "text-5xl font-bold"
}
  , Z_ = {
    class: "py-6 text-xl text-gray-500"
}
  , eg = {
    class: "container px-2 pb-40 mx-auto"
}
  , tg = {
    class: "flex flex-col md:flex-row gap-4"
}
  , ng = {
    class: "w-full md:w-8/12 flex items-center justify-center"
}
  , rg = {
    class: "text-5xl font-bold"
}
  , sg = {
    class: "py-6 text-xl text-gray-500"
}
  , og = {
    class: "footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"
}
  , ig = {
    class: "text-gray-500"
}
  , lg = {
    __name: "Home",
    setup(e) {
        const t = ti();
        Hn(),
        Wn({
            title: ct("seo_home_title"),
            description: ct("seo_home_desc")
        });
        const n = _e("")
          , r = _e(0)
          , s = () => {
            n.value != "" && t.push(`/search?text=${n.value}&type=${r.value}`)
        }
          , o = i => {
            n.value = i,
            s()
        }
        ;
        return At( () => {}
        ),
        (i, l) => {
            const a = ni;
            return re(),
            ue("div", M_, [R("div", D_, [R("div", F_, [R("h1", U_, se(i.$t("app_name")), 1), R("div", {
                class: "text-lg md:text-2xl mx-auto text-gray-500 text-center max-w-2xl",
                innerHTML: i.$t("app_desc")
            }, null, 8, H_), R("div", V_, [R("label", W_, [ir(R("select", {
                class: "select select-ghost w-20 font-bold",
                "onUpdate:modelValue": l[0] || (l[0] = u => r.value = u)
            }, [R("option", j_, se(i.$t("video")), 1), R("option", B_, se(i.$t("photo")), 1), R("option", q_, se(i.$t("illustruction")), 1)], 512), [[Nc, r.value]]), ir(R("input", {
                onKeyup: zo(s, ["enter"]),
                "onUpdate:modelValue": l[1] || (l[1] = u => n.value = u),
                type: "search",
                placeholder: i.$t("search_input_tip"),
                required: ""
            }, null, 40, K_), [[Qo, n.value]]), Le(a)]), R("div", G_, [R("button", {
                class: "btn btn-soft btn-neutral btn-wide",
                onClick: s
            }, se(i.$t("search")), 1)]), R("div", Y_, [R("span", {
                class: "mr-2 cursor-pointer hover:underline",
                onClick: l[2] || (l[2] = u => o("穿白色裙子的女孩在湖里划船"))
            }, "穿白色裙子的女孩在湖里划船"), R("span", {
                class: "mr-2 cursor-pointer hover:underline",
                onClick: l[3] || (l[3] = u => o("夕阳下火车穿过城市"))
            }, "夕阳下火车穿过城市"), R("span", {
                class: "cursor-pointer hover:underline",
                onClick: l[4] || (l[4] = u => o("两只小狗在雪地奔跑"))
            }, "两只小狗在雪地奔跑")])]), l[5] || (l[5] = Nd('<div class="mt-20 text-center text-lg font-bold" data-v-26b6bece>开发者应用推荐</div><div class="w-full flex justify-center" data-v-26b6bece><a href="https://vidlingo.ai/rdcode-list?channel=clipso" target="_blank" rel="noopener" class="w-full md:w-auto" data-v-26b6bece><div class="card bg-base-100 shadow-md border border-base-200 max-w-xl mx-auto hover:shadow-lg transition-shadow" data-v-26b6bece><div class="card-body py-4 px-4 flex flex-col md:flex-row items-center gap-3" data-v-26b6bece><div class="badge badge-soft badge-secondary text-sm" data-v-26b6bece> 邀请码 </div><div class="flex-1 w-full text-left" data-v-26b6bece><div class="font-semibold text-sm md:text-base" data-v-26b6bece> 新一代AI视频翻译神器 - VidLingo </div><div class="text-xs md:text-sm text-gray-500 mt-1" data-v-26b6bece> 用AI一键加字幕、翻译，配音，无缝触达全球观众。 </div></div></div></div></a></div>', 2))])]), R("div", X_, [R("div", J_, [l[6] || (l[6] = R("div", {
                class: "p-10 md:p-20"
            }, [R("img", {
                src: Cp,
                class: "w-full"
            })], -1)), R("div", Q_, [R("div", null, [R("h1", z_, se(i.$t("intro_title_1")), 1), R("p", Z_, se(i.$t("intro_desc_1")), 1)])])])]), R("div", eg, [R("div", tg, [R("div", ng, [R("div", null, [R("h1", rg, se(i.$t("intro_title_2")), 1), R("p", sg, se(i.$t("intro_desc_2")), 1)])]), l[7] || (l[7] = R("div", {
                class: "p-10 md:p-20"
            }, [R("img", {
                src: Sp,
                class: "w-full"
            })], -1))])]), R("footer", og, [R("aside", null, [R("p", ig, se(i.$t("footer_copy_right")), 1)])])])
        }
    }
}
  , ag = fi(lg, [["__scopeId", "data-v-26b6bece"]])
  , cg = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
};
function ug(e, t) {
    return re(),
    ue("svg", cg, [...t[0] || (t[0] = [R("path", {
        fill: "currentColor",
        d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5zm3.5-9q.625 0 1.063-.437T10 8.5t-.437-1.062T8.5 7t-1.062.438T7 8.5t.438 1.063T8.5 10"
    }, null, -1)])])
}
const di = {
    name: "material-symbols-imagesmode-outline",
    render: ug
}
  , fg = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
};
function dg(e, t) {
    return re(),
    ue("svg", fg, [...t[0] || (t[0] = [R("path", {
        fill: "currentColor",
        d: "M7 16h6q.425 0 .713-.288T14 15v-2.2l2.775 2.225q.375.3.8.1T18 14.45v-4.9q0-.475-.425-.675t-.8.1L14 11.2V9q0-.425-.288-.712T13 8H7q-.425 0-.712.288T6 9v6q0 .425.288.713T7 16m-3 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zM4 6v12z"
    }, null, -1)])])
}
const hi = {
    name: "material-symbols-hangout-video-outline-rounded",
    render: dg
};
function Su(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pi = {
    exports: {}
}
  , Lu = function(t, n) {
    return function() {
        for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
            s[o] = arguments[o];
        return t.apply(n, s)
    }
}
  , hg = Lu
  , jn = Object.prototype.toString;
function Ou(e) {
    return jn.call(e) === "[object Array]"
}
function wo(e) {
    return typeof e > "u"
}
function pg(e) {
    return e !== null && !wo(e) && e.constructor !== null && !wo(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
function mg(e) {
    return jn.call(e) === "[object ArrayBuffer]"
}
function _g(e) {
    return typeof FormData < "u" && e instanceof FormData
}
function gg(e) {
    var t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer,
    t
}
function vg(e) {
    return typeof e == "string"
}
function yg(e) {
    return typeof e == "number"
}
function Iu(e) {
    return e !== null && typeof e == "object"
}
function bg(e) {
    return jn.call(e) === "[object Date]"
}
function Eg(e) {
    return jn.call(e) === "[object File]"
}
function Tg(e) {
    return jn.call(e) === "[object Blob]"
}
function wu(e) {
    return jn.call(e) === "[object Function]"
}
function Cg(e) {
    return Iu(e) && wu(e.pipe)
}
function Sg(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}
function Lg(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "")
}
function Og() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
function Cs(e, t) {
    if (!(e === null || typeof e > "u"))
        if (typeof e != "object" && (e = [e]),
        Ou(e))
            for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
        else
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
}
function Ru() {
    var e = {};
    function t(s, o) {
        typeof e[o] == "object" && typeof s == "object" ? e[o] = Ru(e[o], s) : e[o] = s
    }
    for (var n = 0, r = arguments.length; n < r; n++)
        Cs(arguments[n], t);
    return e
}
function Ro() {
    var e = {};
    function t(s, o) {
        typeof e[o] == "object" && typeof s == "object" ? e[o] = Ro(e[o], s) : typeof s == "object" ? e[o] = Ro({}, s) : e[o] = s
    }
    for (var n = 0, r = arguments.length; n < r; n++)
        Cs(arguments[n], t);
    return e
}
function Ig(e, t, n) {
    return Cs(t, function(s, o) {
        n && typeof s == "function" ? e[o] = hg(s, n) : e[o] = s
    }),
    e
}
var st = {
    isArray: Ou,
    isArrayBuffer: mg,
    isBuffer: pg,
    isFormData: _g,
    isArrayBufferView: gg,
    isString: vg,
    isNumber: yg,
    isObject: Iu,
    isUndefined: wo,
    isDate: bg,
    isFile: Eg,
    isBlob: Tg,
    isFunction: wu,
    isStream: Cg,
    isURLSearchParams: Sg,
    isStandardBrowserEnv: Og,
    forEach: Cs,
    merge: Ru,
    deepMerge: Ro,
    extend: Ig,
    trim: Lg
}
  , vn = st;
function Xl(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var Nu = function(t, n, r) {
    if (!n)
        return t;
    var s;
    if (r)
        s = r(n);
    else if (vn.isURLSearchParams(n))
        s = n.toString();
    else {
        var o = [];
        vn.forEach(n, function(a, u) {
            a === null || typeof a > "u" || (vn.isArray(a) ? u = u + "[]" : a = [a],
            vn.forEach(a, function(f) {
                vn.isDate(f) ? f = f.toISOString() : vn.isObject(f) && (f = JSON.stringify(f)),
                o.push(Xl(u) + "=" + Xl(f))
            }))
        }),
        s = o.join("&")
    }
    if (s) {
        var i = t.indexOf("#");
        i !== -1 && (t = t.slice(0, i)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + s
    }
    return t
}
  , wg = st;
function Ss() {
    this.handlers = []
}
Ss.prototype.use = function(t, n) {
    return this.handlers.push({
        fulfilled: t,
        rejected: n
    }),
    this.handlers.length - 1
}
;
Ss.prototype.eject = function(t) {
    this.handlers[t] && (this.handlers[t] = null)
}
;
Ss.prototype.forEach = function(t) {
    wg.forEach(this.handlers, function(r) {
        r !== null && t(r)
    })
}
;
var Rg = Ss, Ng = st, Ag = function(t, n, r) {
    return Ng.forEach(r, function(o) {
        t = o(t, n)
    }),
    t
}, Bs, Jl;
function Au() {
    return Jl || (Jl = 1,
    Bs = function(t) {
        return !!(t && t.__CANCEL__)
    }
    ),
    Bs
}
var Pg = st, xg = function(t, n) {
    Pg.forEach(t, function(s, o) {
        o !== n && o.toUpperCase() === n.toUpperCase() && (t[n] = s,
        delete t[o])
    })
}, qs, Ql;
function kg() {
    return Ql || (Ql = 1,
    qs = function(t, n, r, s, o) {
        return t.config = n,
        r && (t.code = r),
        t.request = s,
        t.response = o,
        t.isAxiosError = !0,
        t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }
        ,
        t
    }
    ),
    qs
}
var Ks, zl;
function Pu() {
    if (zl)
        return Ks;
    zl = 1;
    var e = kg();
    return Ks = function(n, r, s, o, i) {
        var l = new Error(n);
        return e(l, r, s, o, i)
    }
    ,
    Ks
}
var Gs, Zl;
function $g() {
    if (Zl)
        return Gs;
    Zl = 1;
    var e = Pu();
    return Gs = function(n, r, s) {
        var o = s.config.validateStatus;
        !o || o(s.status) ? n(s) : r(e("Request failed with status code " + s.status, s.config, null, s.request, s))
    }
    ,
    Gs
}
var Ys, ea;
function Mg() {
    return ea || (ea = 1,
    Ys = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
    ),
    Ys
}
var Xs, ta;
function Dg() {
    return ta || (ta = 1,
    Xs = function(t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }
    ),
    Xs
}
var Js, na;
function Fg() {
    if (na)
        return Js;
    na = 1;
    var e = Mg()
      , t = Dg();
    return Js = function(r, s) {
        return r && !e(s) ? t(r, s) : s
    }
    ,
    Js
}
var Qs, ra;
function Ug() {
    if (ra)
        return Qs;
    ra = 1;
    var e = st
      , t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return Qs = function(r) {
        var s = {}, o, i, l;
        return r && e.forEach(r.split(`
`), function(u) {
            if (l = u.indexOf(":"),
            o = e.trim(u.substr(0, l)).toLowerCase(),
            i = e.trim(u.substr(l + 1)),
            o) {
                if (s[o] && t.indexOf(o) >= 0)
                    return;
                o === "set-cookie" ? s[o] = (s[o] ? s[o] : []).concat([i]) : s[o] = s[o] ? s[o] + ", " + i : i
            }
        }),
        s
    }
    ,
    Qs
}
var zs, sa;
function Hg() {
    if (sa)
        return zs;
    sa = 1;
    var e = st;
    return zs = e.isStandardBrowserEnv() ? function() {
        var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), s;
        function o(i) {
            var l = i;
            return n && (r.setAttribute("href", l),
            l = r.href),
            r.setAttribute("href", l),
            {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }
        return s = o(window.location.href),
        function(l) {
            var a = e.isString(l) ? o(l) : l;
            return a.protocol === s.protocol && a.host === s.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }(),
    zs
}
var Zs, oa;
function Vg() {
    if (oa)
        return Zs;
    oa = 1;
    var e = st;
    return Zs = e.isStandardBrowserEnv() ? function() {
        return {
            write: function(r, s, o, i, l, a) {
                var u = [];
                u.push(r + "=" + encodeURIComponent(s)),
                e.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()),
                e.isString(i) && u.push("path=" + i),
                e.isString(l) && u.push("domain=" + l),
                a === !0 && u.push("secure"),
                document.cookie = u.join("; ")
            },
            read: function(r) {
                var s = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return s ? decodeURIComponent(s[3]) : null
            },
            remove: function(r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }(),
    Zs
}
var eo, ia;
function la() {
    if (ia)
        return eo;
    ia = 1;
    var e = st
      , t = $g()
      , n = Nu
      , r = Fg()
      , s = Ug()
      , o = Hg()
      , i = Pu();
    return eo = function(a) {
        return new Promise(function(c, f) {
            var d = a.data
              , h = a.headers;
            e.isFormData(d) && delete h["Content-Type"];
            var E = new XMLHttpRequest;
            if (a.auth) {
                var S = a.auth.username || ""
                  , I = a.auth.password || "";
                h.Authorization = "Basic " + btoa(S + ":" + I)
            }
            var w = r(a.baseURL, a.url);
            if (E.open(a.method.toUpperCase(), n(w, a.params, a.paramsSerializer), !0),
            E.timeout = a.timeout,
            E.onreadystatechange = function() {
                if (!(!E || E.readyState !== 4) && !(E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0))) {
                    var T = "getAllResponseHeaders"in E ? s(E.getAllResponseHeaders()) : null
                      , O = !a.responseType || a.responseType === "text" ? E.responseText : E.response
                      , N = {
                        data: O,
                        status: E.status,
                        statusText: E.statusText,
                        headers: T,
                        config: a,
                        request: E
                    };
                    t(c, f, N),
                    E = null
                }
            }
            ,
            E.onabort = function() {
                E && (f(i("Request aborted", a, "ECONNABORTED", E)),
                E = null)
            }
            ,
            E.onerror = function() {
                f(i("Network Error", a, null, E)),
                E = null
            }
            ,
            E.ontimeout = function() {
                var T = "timeout of " + a.timeout + "ms exceeded";
                a.timeoutErrorMessage && (T = a.timeoutErrorMessage),
                f(i(T, a, "ECONNABORTED", E)),
                E = null
            }
            ,
            e.isStandardBrowserEnv()) {
                var $ = Vg()
                  , _ = (a.withCredentials || o(w)) && a.xsrfCookieName ? $.read(a.xsrfCookieName) : void 0;
                _ && (h[a.xsrfHeaderName] = _)
            }
            if ("setRequestHeader"in E && e.forEach(h, function(T, O) {
                typeof d > "u" && O.toLowerCase() === "content-type" ? delete h[O] : E.setRequestHeader(O, T)
            }),
            e.isUndefined(a.withCredentials) || (E.withCredentials = !!a.withCredentials),
            a.responseType)
                try {
                    E.responseType = a.responseType
                } catch (y) {
                    if (a.responseType !== "json")
                        throw y
                }
            typeof a.onDownloadProgress == "function" && E.addEventListener("progress", a.onDownloadProgress),
            typeof a.onUploadProgress == "function" && E.upload && E.upload.addEventListener("progress", a.onUploadProgress),
            a.cancelToken && a.cancelToken.promise.then(function(T) {
                E && (E.abort(),
                f(T),
                E = null)
            }),
            d === void 0 && (d = null),
            E.send(d)
        }
        )
    }
    ,
    eo
}
var Ze = st
  , aa = xg
  , Wg = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function ca(e, t) {
    !Ze.isUndefined(e) && Ze.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}
function jg() {
    var e;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = la()),
    e
}
var Ls = {
    adapter: jg(),
    transformRequest: [function(t, n) {
        return aa(n, "Accept"),
        aa(n, "Content-Type"),
        Ze.isFormData(t) || Ze.isArrayBuffer(t) || Ze.isBuffer(t) || Ze.isStream(t) || Ze.isFile(t) || Ze.isBlob(t) ? t : Ze.isArrayBufferView(t) ? t.buffer : Ze.isURLSearchParams(t) ? (ca(n, "application/x-www-form-urlencoded;charset=utf-8"),
        t.toString()) : Ze.isObject(t) ? (ca(n, "application/json;charset=utf-8"),
        JSON.stringify(t)) : t
    }
    ],
    transformResponse: [function(t) {
        if (typeof t == "string")
            try {
                t = JSON.parse(t)
            } catch {}
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function(t) {
        return t >= 200 && t < 300
    }
};
Ls.headers = {
    common: {
        Accept: "application/json, text/plain, */*"
    }
};
Ze.forEach(["delete", "get", "head"], function(t) {
    Ls.headers[t] = {}
});
Ze.forEach(["post", "put", "patch"], function(t) {
    Ls.headers[t] = Ze.merge(Wg)
});
var xu = Ls
  , ua = st
  , to = Ag
  , Bg = Au()
  , qg = xu;
function no(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
}
var Kg = function(t) {
    no(t),
    t.headers = t.headers || {},
    t.data = to(t.data, t.headers, t.transformRequest),
    t.headers = ua.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),
    ua.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(s) {
        delete t.headers[s]
    });
    var n = t.adapter || qg.adapter;
    return n(t).then(function(s) {
        return no(t),
        s.data = to(s.data, s.headers, t.transformResponse),
        s
    }, function(s) {
        return Bg(s) || (no(t),
        s && s.response && (s.response.data = to(s.response.data, s.response.headers, t.transformResponse))),
        Promise.reject(s)
    })
}
  , Kt = st
  , ku = function(t, n) {
    n = n || {};
    var r = {}
      , s = ["url", "method", "params", "data"]
      , o = ["headers", "auth", "proxy"]
      , i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
    Kt.forEach(s, function(c) {
        typeof n[c] < "u" && (r[c] = n[c])
    }),
    Kt.forEach(o, function(c) {
        Kt.isObject(n[c]) ? r[c] = Kt.deepMerge(t[c], n[c]) : typeof n[c] < "u" ? r[c] = n[c] : Kt.isObject(t[c]) ? r[c] = Kt.deepMerge(t[c]) : typeof t[c] < "u" && (r[c] = t[c])
    }),
    Kt.forEach(i, function(c) {
        typeof n[c] < "u" ? r[c] = n[c] : typeof t[c] < "u" && (r[c] = t[c])
    });
    var l = s.concat(o).concat(i)
      , a = Object.keys(n).filter(function(c) {
        return l.indexOf(c) === -1
    });
    return Kt.forEach(a, function(c) {
        typeof n[c] < "u" ? r[c] = n[c] : typeof t[c] < "u" && (r[c] = t[c])
    }),
    r
}
  , ns = st
  , Gg = Nu
  , fa = Rg
  , Yg = Kg
  , $u = ku;
function Sr(e) {
    this.defaults = e,
    this.interceptors = {
        request: new fa,
        response: new fa
    }
}
Sr.prototype.request = function(t) {
    typeof t == "string" ? (t = arguments[1] || {},
    t.url = arguments[0]) : t = t || {},
    t = $u(this.defaults, t),
    t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var n = [Yg, void 0]
      , r = Promise.resolve(t);
    for (this.interceptors.request.forEach(function(o) {
        n.unshift(o.fulfilled, o.rejected)
    }),
    this.interceptors.response.forEach(function(o) {
        n.push(o.fulfilled, o.rejected)
    }); n.length; )
        r = r.then(n.shift(), n.shift());
    return r
}
;
Sr.prototype.getUri = function(t) {
    return t = $u(this.defaults, t),
    Gg(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
}
;
ns.forEach(["delete", "get", "head", "options"], function(t) {
    Sr.prototype[t] = function(n, r) {
        return this.request(ns.merge(r || {}, {
            method: t,
            url: n
        }))
    }
});
ns.forEach(["post", "put", "patch"], function(t) {
    Sr.prototype[t] = function(n, r, s) {
        return this.request(ns.merge(s || {}, {
            method: t,
            url: n,
            data: r
        }))
    }
});
var Xg = Sr, ro, da;
function Mu() {
    if (da)
        return ro;
    da = 1;
    function e(t) {
        this.message = t
    }
    return e.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    e.prototype.__CANCEL__ = !0,
    ro = e,
    ro
}
var so, ha;
function Jg() {
    if (ha)
        return so;
    ha = 1;
    var e = Mu();
    function t(n) {
        if (typeof n != "function")
            throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function(i) {
            r = i
        }
        );
        var s = this;
        n(function(i) {
            s.reason || (s.reason = new e(i),
            r(s.reason))
        })
    }
    return t.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    t.source = function() {
        var r, s = new t(function(i) {
            r = i
        }
        );
        return {
            token: s,
            cancel: r
        }
    }
    ,
    so = t,
    so
}
var oo, pa;
function Qg() {
    return pa || (pa = 1,
    oo = function(t) {
        return function(r) {
            return t.apply(null, r)
        }
    }
    ),
    oo
}
var ma = st
  , zg = Lu
  , Ur = Xg
  , Zg = ku
  , ev = xu;
function Du(e) {
    var t = new Ur(e)
      , n = zg(Ur.prototype.request, t);
    return ma.extend(n, Ur.prototype, t),
    ma.extend(n, t),
    n
}
var Nt = Du(ev);
Nt.Axios = Ur;
Nt.create = function(t) {
    return Du(Zg(Nt.defaults, t))
}
;
Nt.Cancel = Mu();
Nt.CancelToken = Jg();
Nt.isCancel = Au();
Nt.all = function(t) {
    return Promise.all(t)
}
;
Nt.spread = Qg();
pi.exports = Nt;
pi.exports.default = Nt;
var tv = pi.exports
  , nv = tv;
const Fu = Su(nv);
var Uu = {
    exports: {}
}
  , Hu = {
    exports: {}
};
(function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , t = {
        rotl: function(n, r) {
            return n << r | n >>> 32 - r
        },
        rotr: function(n, r) {
            return n << 32 - r | n >>> r
        },
        endian: function(n) {
            if (n.constructor == Number)
                return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
            for (var r = 0; r < n.length; r++)
                n[r] = t.endian(n[r]);
            return n
        },
        randomBytes: function(n) {
            for (var r = []; n > 0; n--)
                r.push(Math.floor(Math.random() * 256));
            return r
        },
        bytesToWords: function(n) {
            for (var r = [], s = 0, o = 0; s < n.length; s++,
            o += 8)
                r[o >>> 5] |= n[s] << 24 - o % 32;
            return r
        },
        wordsToBytes: function(n) {
            for (var r = [], s = 0; s < n.length * 32; s += 8)
                r.push(n[s >>> 5] >>> 24 - s % 32 & 255);
            return r
        },
        bytesToHex: function(n) {
            for (var r = [], s = 0; s < n.length; s++)
                r.push((n[s] >>> 4).toString(16)),
                r.push((n[s] & 15).toString(16));
            return r.join("")
        },
        hexToBytes: function(n) {
            for (var r = [], s = 0; s < n.length; s += 2)
                r.push(parseInt(n.substr(s, 2), 16));
            return r
        },
        bytesToBase64: function(n) {
            for (var r = [], s = 0; s < n.length; s += 3)
                for (var o = n[s] << 16 | n[s + 1] << 8 | n[s + 2], i = 0; i < 4; i++)
                    s * 8 + i * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
            return r.join("")
        },
        base64ToBytes: function(n) {
            n = n.replace(/[^A-Z0-9+\/]/ig, "");
            for (var r = [], s = 0, o = 0; s < n.length; o = ++s % 4)
                o != 0 && r.push((e.indexOf(n.charAt(s - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(s)) >>> 6 - o * 2);
            return r
        }
    };
    Hu.exports = t
}
)();
var rv = Hu.exports
  , No = {
    utf8: {
        stringToBytes: function(e) {
            return No.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(No.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(e.charCodeAt(n) & 255);
            return t
        },
        bytesToString: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(String.fromCharCode(e[n]));
            return t.join("")
        }
    }
}
  , _a = No;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var sv = function(e) {
    return e != null && (Vu(e) || ov(e) || !!e._isBuffer)
};
function Vu(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
function ov(e) {
    return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Vu(e.slice(0, 0))
}
(function() {
    var e = rv
      , t = _a.utf8
      , n = sv
      , r = _a.bin
      , s = function(o, i) {
        o.constructor == String ? i && i.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
        for (var l = e.bytesToWords(o), a = o.length * 8, u = 1732584193, c = -271733879, f = -1732584194, d = 271733878, h = 0; h < l.length; h++)
            l[h] = (l[h] << 8 | l[h] >>> 24) & 16711935 | (l[h] << 24 | l[h] >>> 8) & 4278255360;
        l[a >>> 5] |= 128 << a % 32,
        l[(a + 64 >>> 9 << 4) + 14] = a;
        for (var E = s._ff, S = s._gg, I = s._hh, w = s._ii, h = 0; h < l.length; h += 16) {
            var $ = u
              , _ = c
              , y = f
              , T = d;
            u = E(u, c, f, d, l[h + 0], 7, -680876936),
            d = E(d, u, c, f, l[h + 1], 12, -389564586),
            f = E(f, d, u, c, l[h + 2], 17, 606105819),
            c = E(c, f, d, u, l[h + 3], 22, -1044525330),
            u = E(u, c, f, d, l[h + 4], 7, -176418897),
            d = E(d, u, c, f, l[h + 5], 12, 1200080426),
            f = E(f, d, u, c, l[h + 6], 17, -1473231341),
            c = E(c, f, d, u, l[h + 7], 22, -45705983),
            u = E(u, c, f, d, l[h + 8], 7, 1770035416),
            d = E(d, u, c, f, l[h + 9], 12, -1958414417),
            f = E(f, d, u, c, l[h + 10], 17, -42063),
            c = E(c, f, d, u, l[h + 11], 22, -1990404162),
            u = E(u, c, f, d, l[h + 12], 7, 1804603682),
            d = E(d, u, c, f, l[h + 13], 12, -40341101),
            f = E(f, d, u, c, l[h + 14], 17, -1502002290),
            c = E(c, f, d, u, l[h + 15], 22, 1236535329),
            u = S(u, c, f, d, l[h + 1], 5, -165796510),
            d = S(d, u, c, f, l[h + 6], 9, -1069501632),
            f = S(f, d, u, c, l[h + 11], 14, 643717713),
            c = S(c, f, d, u, l[h + 0], 20, -373897302),
            u = S(u, c, f, d, l[h + 5], 5, -701558691),
            d = S(d, u, c, f, l[h + 10], 9, 38016083),
            f = S(f, d, u, c, l[h + 15], 14, -660478335),
            c = S(c, f, d, u, l[h + 4], 20, -405537848),
            u = S(u, c, f, d, l[h + 9], 5, 568446438),
            d = S(d, u, c, f, l[h + 14], 9, -1019803690),
            f = S(f, d, u, c, l[h + 3], 14, -187363961),
            c = S(c, f, d, u, l[h + 8], 20, 1163531501),
            u = S(u, c, f, d, l[h + 13], 5, -1444681467),
            d = S(d, u, c, f, l[h + 2], 9, -51403784),
            f = S(f, d, u, c, l[h + 7], 14, 1735328473),
            c = S(c, f, d, u, l[h + 12], 20, -1926607734),
            u = I(u, c, f, d, l[h + 5], 4, -378558),
            d = I(d, u, c, f, l[h + 8], 11, -2022574463),
            f = I(f, d, u, c, l[h + 11], 16, 1839030562),
            c = I(c, f, d, u, l[h + 14], 23, -35309556),
            u = I(u, c, f, d, l[h + 1], 4, -1530992060),
            d = I(d, u, c, f, l[h + 4], 11, 1272893353),
            f = I(f, d, u, c, l[h + 7], 16, -155497632),
            c = I(c, f, d, u, l[h + 10], 23, -1094730640),
            u = I(u, c, f, d, l[h + 13], 4, 681279174),
            d = I(d, u, c, f, l[h + 0], 11, -358537222),
            f = I(f, d, u, c, l[h + 3], 16, -722521979),
            c = I(c, f, d, u, l[h + 6], 23, 76029189),
            u = I(u, c, f, d, l[h + 9], 4, -640364487),
            d = I(d, u, c, f, l[h + 12], 11, -421815835),
            f = I(f, d, u, c, l[h + 15], 16, 530742520),
            c = I(c, f, d, u, l[h + 2], 23, -995338651),
            u = w(u, c, f, d, l[h + 0], 6, -198630844),
            d = w(d, u, c, f, l[h + 7], 10, 1126891415),
            f = w(f, d, u, c, l[h + 14], 15, -1416354905),
            c = w(c, f, d, u, l[h + 5], 21, -57434055),
            u = w(u, c, f, d, l[h + 12], 6, 1700485571),
            d = w(d, u, c, f, l[h + 3], 10, -1894986606),
            f = w(f, d, u, c, l[h + 10], 15, -1051523),
            c = w(c, f, d, u, l[h + 1], 21, -2054922799),
            u = w(u, c, f, d, l[h + 8], 6, 1873313359),
            d = w(d, u, c, f, l[h + 15], 10, -30611744),
            f = w(f, d, u, c, l[h + 6], 15, -1560198380),
            c = w(c, f, d, u, l[h + 13], 21, 1309151649),
            u = w(u, c, f, d, l[h + 4], 6, -145523070),
            d = w(d, u, c, f, l[h + 11], 10, -1120210379),
            f = w(f, d, u, c, l[h + 2], 15, 718787259),
            c = w(c, f, d, u, l[h + 9], 21, -343485551),
            u = u + $ >>> 0,
            c = c + _ >>> 0,
            f = f + y >>> 0,
            d = d + T >>> 0
        }
        return e.endian([u, c, f, d])
    };
    s._ff = function(o, i, l, a, u, c, f) {
        var d = o + (i & l | ~i & a) + (u >>> 0) + f;
        return (d << c | d >>> 32 - c) + i
    }
    ,
    s._gg = function(o, i, l, a, u, c, f) {
        var d = o + (i & a | l & ~a) + (u >>> 0) + f;
        return (d << c | d >>> 32 - c) + i
    }
    ,
    s._hh = function(o, i, l, a, u, c, f) {
        var d = o + (i ^ l ^ a) + (u >>> 0) + f;
        return (d << c | d >>> 32 - c) + i
    }
    ,
    s._ii = function(o, i, l, a, u, c, f) {
        var d = o + (l ^ (i | ~a)) + (u >>> 0) + f;
        return (d << c | d >>> 32 - c) + i
    }
    ,
    s._blocksize = 16,
    s._digestsize = 16,
    Uu.exports = function(o, i) {
        if (o == null)
            throw new Error("Illegal argument " + o);
        var l = e.wordsToBytes(s(o, i));
        return i && i.asBytes ? l : i && i.asString ? r.bytesToString(l) : e.bytesToHex(l)
    }
}
)();
var iv = Uu.exports;
const lv = Su(iv)
  , av = function(e) {
    e._ts = new Date().getTime() - 9999;
    const t = Object.keys(e);
    let n = "";
    for (const r of t.sort())
        e[r] !== void 0 && e[r] !== null && (n += `${r}=${e[r]},`);
    return lv(n)
}
  , cv = {
    success(e) {},
    info(e) {},
    warn(e) {},
    error(e) {}
};
var uv = {
    VITE_API_HOST: "https://clip-seek-api.agilestudio.cn"
};
Fu.defaults.withCredentials = !0;
const Fn = Fu.create({
    baseURL: uv.VITE_API_HOST,
    timeout: 2e4
});

let params = {
    "_platform": "web-clipseek",
    "_versioin": "0.1",
}

function get_sign(params) {
    const Signature = av(params);
    console.log(Signature, params);
    return {Signature, params};
}

get_sign(params)


