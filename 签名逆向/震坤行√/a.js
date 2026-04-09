const CryptoJS = require("crypto-js");
const JSEncrypt = require('jsencrypt');

window = global;
document = { cookie: `_c_WBKFRo=YKuWyQtxZx4PYgMaHfpWl37ciX37wrQlWsdG3Fk7; anonymous_id=19d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8; _bl_uid=z5m2zn4eiX3y2qvpL9b759ja47UX; unique_user_id=by2f1tpyuk9lu2-5e201fad-19d41cfb87f-qmy30re1z; AGL_USER_ID=43d3e783-46c3-4fe8-8b02-d343977f668a; CART_SESSION=1360331709; hadskfhjayuasdhjk=%4067d0897870-jnjkghyg-990767!hjkh()%2F.kdj; area_ok=true; webSource=https%3A%2F%2Fcn.bing.com%2F; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlkNTNhMTE4NGYyMGJjLTA3ZWI2YmYyY2JkMTE1Yy00YzY1N2I1OC0yNjIxNDQwLTE5ZDUzYTExODUwMmRmOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8%22%7D; sensorsdata2015session=%7B%7D; ipCityCode=310100; citycode=%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22districtCode%22%3A310101%2C%22districtName%22%3A%22%E9%BB%84%E6%B5%A6%E5%8C%BA%22%7D; p_pub_key=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvKJMKF0xLff2s5SFAUpqumjuiP6xxfsxiKA5Px17wgeQHFsSlb0vt8RyYDfBrlPwIX1lBwMnqp214rx496SsJrEsm8HSPYgoHYbWH5X0tydOc2+0IJLGGrjcJ46dB6fNUnRheG1uNudMzPshOlos5S/SfuENtwI94OJdGHauT5QIDAQAB; p_pub_gr=1775728812779; page_request_id=0d7000bc-da77-41f2-a0a3-ddff2bbbcd77; zaf_ukey=8b42399807f04858adfbad8cc5115bf2; ssxmod_itna=1-YqfxuD0DBiG=64eKYKitDRtnERQDzxC5iOD_xQyP08D6QDB_2Me0=HscnenK=Dnl054iTBGqDsTYlxGzDiwPGhDBn5F/WGDHq8YYACbRxnfQguDe7PvZY=8hdt2yrenN_FZmx3KCN642l0U_SxvNDB3DbqDylBq5xYAEDBYD74G_DDeDiO3Dj4GmDGYiheDFRlurd=uo5xDwDB=DmqG2KoTDm4DfDDLQPfLQLQ4DGqDS_6BFxD3Df_TeDDNefzYP8DxDboTrTC9rfZ7qe6AQx0UTDBd4W5hQdzZ9rDaroXY6N8R7wPGuDG=CxfPaLH0oar3YE65c55EpZlx4meq0h3YmzBwulGxjvoGGeGwnBqpAG3ADqOKuAPIPbunGNApr/RZgXDIExF0NCRzCmtCeqC5SlY8QGjgDPiIuiqCBI1nq8BwxBw37GYFh3lq_bDil03lxxD; ssxmod_itna2=1-YqfxuD0DBiG=64eKYKitDRtnERQDzxC5iOD_xQyP08D6QDB_2Me0=HscnenK=Dnl054iTBlxDWs8WhG0N58D7p8eKea2esafDGNLF10ciWerZE0dgAagR_umAjYWrSDPqlgTja8rZ0144Gu5B/qAEQDt1bCG9KDhR7OoV8WbE72DPAj6dMMXYo7uYclNg_k4E3ZRj9mp3tcvF57Qy_6Wl_wn3w6Qhek31Z39g9jh2IYh=Xk3_VMhE0ZXeXfjVY=cK6buozmL72CTmwMcV4lnfkeURIDxZC=3jkLYBk=WPLm94LQWHQqh9Ac73cyn5DaTEGwkFwxmyt_uCSaPBrHSpOiuS4yWeaWjRsBTB/_vRKCCBsY0SjuIAxC4mYgRN_4=CoUf2I/_VBbO49SYHwFytv4SDna9n7_pXUEXC2osANS7qiaHmRhQDxeu2lhv8Gyt9lmI9e7SQ8xZW0Ya04a31K09mZe3KquSzdrVe5u7OArwSwiPHVlBy4dGnes64sdwicW5TvqBYdkHHCrOYyeCnL4cDNCLCSx2HsQP4Zj6fmSjAxZLNwq798mWCtNPp/5d/IaW3VKWjgHLxv46ipzp45BLZ050bqf4t3TTtIt_a2OulW/W7zQEQMFqfmth4SO34GYo9Lh9H4GbtTqssWiPYe8GUgErFwo4/05msZV0DAxtmgtS2M2TPQDSTDqiiDxeD'` };

let headers = {
    "common": { "Accept": "application/json, text/plain, */*" },
    "delete": {}, "get": {}, "head": {},
    "post": { "Content-Type": "application/x-www-form-urlencoded" },
    "put": { "Content-Type": "application/x-www-form-urlencoded" },
    "patch": { "Content-Type": "application/x-www-form-urlencoded" },
    "zkhs": { words: [159181441,-429631429,1800002571,1427152058,-927285325], sigBytes: 20 }
};

// 参数格式化函数
function Fe(e) { if(e) { for(var t in e) e[t] = e[t] + ""; return e } }
function _(e) { return typeof e === 'object' && Object.prototype.toString.call(e).toLowerCase() === "[object object]" && !e.length }
function I(e) {
    var t = "", n = Object.keys(e).sort(), r = Object.create(null);
    for(var a = 0; a < n.length; a++) {
        var o = n[a], c = e[o];
        if(Array.isArray(c)) r[o] = c.map(e => _(e) ? I(e) : e);
        else r[o] = c;
    }
    return r;
}

// 解码函数
function D(e) { if(!e) return e; try { return decodeURIComponent(e) } catch(e) { return e } }

// 读取cookie
function getCookie(e) {
    const match = document.cookie.match(new RegExp(`(^| )${e}=([^;]*)(;|$)`));
    return match ? D(match[2]) : null;
}

// UUID生成
const uuid = ()=>[8,4,4,4,12].map(n=>[...Array(n)].map(()=>Math.random().toString(16)[2]).join('')).join('-');

// ===================== 核心业务 =====================
const o = { skuNo: "AA6242291", traceId: "421225411775735290626" };
const r = getCookie("zaf_ukey");
const s = getCookie("p_pub_key");  // RSA公钥
const u = getCookie("p_pub_gr");   // x-rgn

// 1. 生成 zkhs 签名
const c = JSON.stringify(Fe(I(o)));
const i = `body=&params=${c}&sign_token=${r}`;
const l = CryptoJS.HmacSHA1(i, r);

// 2. 生成 x-akc (RSA 加密 timestamp)
const encrypt = new JSEncrypt();
encrypt.setPublicKey(s);
const f = encrypt.encrypt(String(Date.now())); // 加密时间戳

// 3. 组装最终请求头
headers["zkhs"] = l.toString(CryptoJS.enc.Hex); // 转16进制字符串
headers["zkhst"] = r;
headers["x-sc-anonymous-id"] = uuid();
headers["x-akc"] = f;  // RSA加密结果
headers["x-rgn"] = u;  // 分组ID
let data = {
    "requests": [
        {
            "number": 1,
            "sku": "AA6242298"
        },
        {
            "number": 1,
            "sku": "AF0900183"
        },
        {
            "number": 1,
            "sku": "AF4140781"
        },
        {
            "number": 1,
            "sku": "AF0900177"
        },
        {
            "number": 1,
            "sku": "AA6242291"
        }
    ]
}
const T = {
    "words": [
        825702197,
        926103092,
        909522738,
        858863415,
        892810038,
        875968055,
        842215735,
        926234419
    ],
    "sigBytes": 32
};
data = {
    cipher: CryptoJS.AES.encrypt(
        JSON.stringify(data), 
        T, 
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }
    ).toString()
};


// 输出最终结果
console.log("\n===== 最终请求头 =====");
console.log("zkhs    =", headers.zkhs);
console.log("zkhst   =", headers.zkhst);
console.log("x-akc   =", headers["x-akc"]);
console.log("x-rgn   =", headers["x-rgn"]);
console.log("x-sc-anonymous-id =", headers["x-sc-anonymous-id"]);
// 输出最终加密后的 data
console.log("\n===== 最终加密 data =====");
console.log(JSON.stringify(data));

const e = {
    "data": "B8nzxmOMpAL5dgcnsMaYyw7jFV/sHdAN3w7Anu22bxJ4EAt6DHCKIQB5Z7ufB2vbbpRr0tySPTbYy1vSEGUupDveAWh1THbS+couaNwmxoB6ItG7WXprpdgOFWnrwReMtrFm93z3nXxCrbeY2J2LQZKSbsBnlvhHgApPLcsOiLLKCcZRFtxIhGwKfk6c0hjO3QCtXGzF5M5Yhc62hFMP++n1UfGfkVJzCnTC6oM/IW3cjfhW6JTfg3b4QCqb0zSNV0g4a8DGKnzERczkUEnsOoHptdos/hngv6ctlFEsfbc8rVHRuu5eCYifT8yX+H1z6KkeJJDrF3qYsYVD28C1271IWTlZb5extYtk+8zAubeqds4/5g9HxUele1DW2gFLVD7oKV7q+L7gcTGSoyLW/DlV8ZLNvdS0MZNVDOOuuFR1EaS8Auv0GlE7N9RG+AIeHnp/ntDJSV0TFnrvLolepDsYg7OH8zf7sUtz86/ebpsKItU7VwDzdQLHq49wTTcxnI1BDnshzhYwEfnLdFl/poi9d5Vp7+DuC2eVU9bTpfnbvEUJteqr6aT++R88vKgpLuLhatz1xi+mfHLvINQySNFY4OYUHZSWN3H28Z/xpym+bV52pQRsZoq6tiQV+8FGBz8Jr5LLvNwrdU8BYLnVkJAwwmIruE4PvDbYeugRIZwg5IgMk614ghQxu8b5XxIpKdUZSaTwgBvaEYvZxsCr8E4unlp33yiAdll8aWf0HSs4v3aIbPIprWUYqU0y/7JOQQ6hN7wM4SuT24yF+NL1Nya7FQQx3y7gCwftRNHtvhoz28PhEN7j4aBxbOVPwheHXrOCLK8X5NzwsOaWIn206OtMIXB7iYAKPD7vcgyO+WWzdleqX2KynDhxN59bGDk7dmmQAmhivvfdBoaXycIcTPHXtS0jzfvwHYG9Q0fiON2HgO5s5m2kFYprOkvzQ6ycpBEqSrxuBxE3mYEiup+uBVd+VQ0VP5GjT34Oxx0eVesMgCUqayv4ZdbFmWJBDAozFGCPyhRYs9uevFgW5qx+HAJS/2EXILSDt9NUHgjxQsSKJZlljIr/8ToVid7+Bz5fwqmv1bvPOg7TpnaFJU+qWDYQxMuNl4dACxSwVjSkZou1KJrYhJBoRbtwqaRfW433W54tjDHyorYVtSiUFyqSasDd7VzP4mrYYbaMYsFvr55BqSo159Ce1H7GyAhQqf10ijIzpxEODynFGmSfuDKBlx0Qy1kpxfO73ariftFUZwdEYQkiioQju9g1cOhNt9Yoe33vCZYip52xDte9rwYl7kQEJqcQCQv78iEklAQRiVvDRyGjishgWKvfVdLHWd2XDNptFoRT1BhxGi3E8w7+3bdcwRsn2cG24E7LP/4XP2jDCCaZvXJHHVMHuKwKL+XYXSapG460AjUEeHS5wZEYODNLvj6oX0MhNuRQc/zwlzpLXN5uNCiQ8xEIMeBfY+GPrM8UdFKXqXsGZj5JOFWgh3+VnI36T0UdjW5O3HWZtRLHplXfhp2pmC2U2xl8d/l7DIAlKmsr+GXWxZliQQwKMxRgj8oUWLPbnrxYFuasfhwCUv9hFyC0g7fTVB4I8ULEubi4ldETLa1e6WY+Q43DjFkViwVWOUpEvyJiMngTv/4bRcAadmJgpZ7EyyuMMOB9qEeCUSdAbrYRIWAgryA4tc7GpYgVcByZ7MKcbb3cYneOFH7lctcMrZTDMbTa+7lxFJRnK+NeOOjg9lz/1XD7PnRkcgWkqD98EDULtVR0Vq4XyIJ08nQ4dtIc/j72Hl28FGCPyhRYs9uevFgW5qx+HAJS/2EXILSDt9NUHgjxQsS5uLiV0RMtrV7pZj5DjcOMlWFiSf/jfO1pOb8K6TlRRKzPFHRSl6l7BmY+SThVoIdZwk2hgF87WbFikVMihha0maRNCMProo1Z5+k7QVERYw==",
    "status": 200,
    "statusText": "",
    "headers": {
        "accept-ranges": "bytes",
        "age": "0",
        "cache-control": "must-revalidate, no-cache, no-store, max-age=0",
        "content-length": "1944",
        "content-type": "application/json;charset=UTF-8",
        "date": "Thu, 09 Apr 2026 13:13:40 GMT",
        "eagleeye-traceid": "b08e67b6cc2c27f8005f93731d308515",
        "expires": "0",
        "pragma": "no-cache",
        "server": "istio-envoy",
        "x-cache-lookup": "Cache Miss, Hit From Upstream Cluster, Cache Miss",
        "x-content-type-options": "nosniff",
        "x-envoy-upstream-service-time": "423",
        "x-nws-log-uuid": "12642388588334932894",
        "x-xss-protection": "1; mode=block"
    },
    "config": {
        "url": "/servezkhApi/delivery/ab/encrypt?traceId=818256621775740419386",
        "method": "post",
        "params": {},
        "data": "{\"cipher\":\"3ckj80lPMgBl5djNDRJ04iOsdrJ8jXETMp46Q4TQWzjEBe6v5ir1VzvijyAJgB4NEZo9i4z4/KAH8zGJcJ5oweQZrnf4Lvo4IL2D9ytav6o=\"}",
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "x-akc": "M3VILisBCmkGbkQBqNuwLpsCCeDc4WvvQ1PnpgaxLIGK185XfWSUfMal0wiDJg8IZ3sxJfyb5SK2T+jTJ+IFnn0cL6+DrVJ+0a9Yd7RUuOp1QBDkBUICNydZSbMtaAA41YlZrDzAG+utB2/H+VT09IWCcJFkAasyhPk2TdqRIdQ=",
            "x-rgn": "1775736012610",
            "platform_type": "JavaScript",
            "x-sc-anonymous-id": "19d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "encryptApi": true
    },
    "request": {
        "ori_event": {
            "readystatechange": [
                [
                    null,
                    null
                ],
                [
                    null,
                    null
                ]
            ],
            "abort": [
                [
                    null,
                    null
                ]
            ],
            "error": [
                [
                    null,
                    null
                ]
            ],
            "timeout": [
                [
                    null,
                    null
                ]
            ]
        },
        "__send_headers": {
            "uber-trace-id": "18702e2817757404194011001f115812:18702e2817757404:0:1",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "x-akc": "M3VILisBCmkGbkQBqNuwLpsCCeDc4WvvQ1PnpgaxLIGK185XfWSUfMal0wiDJg8IZ3sxJfyb5SK2T+jTJ+IFnn0cL6+DrVJ+0a9Yd7RUuOp1QBDkBUICNydZSbMtaAA41YlZrDzAG+utB2/H+VT09IWCcJFkAasyhPk2TdqRIdQ=",
            "x-rgn": "1775736012610",
            "platform_type": "JavaScript",
            "x-sc-anonymous-id": "19d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8"
        },
        "openArgs": {
            "0": "POST",
            "1": "https://www.zkh.com/servezkhApi/delivery/ab/encrypt?traceId=818256621775740419386&md5__1101=n4%2Bx0DyDuDcDRBDnAQD%2Fjee%2Bh%2BIYxitzeae4D",
            "2": true
        },
        "Q": {},
        "sendBody": "{\"cipher\":\"3ckj80lPMgBl5djNDRJ04iOsdrJ8jXETMp46Q4TQWzjEBe6v5ir1VzvijyAJgB4NEZo9i4z4/KAH8zGJcJ5oweQZrnf4Lvo4IL2D9ytav6o=\"}"
    }
}
console.log("\n===== 最终解密 data =====");

const T2 = {
    "words": [
        825702197,
        926167092,
        825831992,
        825308983,
        892810288,
        875641138,
        942747959,
        926234420
    ],
    "sigBytes": 32
}

function decrypt(e) {
    // 只有开启 encryptApi 并且有数据，才解密
    if (e.config?.encryptApi && e.data) {
        // AES 解密
        const n = CryptoJS.AES.decrypt(
            e.data,        // 接口返回的加密字符串
            T2,            // 你给的新密钥 T2
            {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        
        // 转 UTF8 → 转 JSON
        e.data = JSON.parse(n.toString(CryptoJS.enc.Utf8));
    }
    return e;
}
console.log(decrypt(e));
