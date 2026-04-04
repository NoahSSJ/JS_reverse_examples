function get_zkhs() {
    n = Object(y.Hb)(8, !0)
    r = Object(y.A)("ukey")
    c = JSON.stringify(Object(y.Qb)(Object(y.Bb)(o))),
    i = "body=".concat(a, "&params=").concat(c, "&sign_token=").concat(r),
    l = w()(i, r),
    t.headers.zkhs = l,
    t.headers.zkhst = r

}