// import axios from 'axios';    
    function i(a) {
        function b(a, b) {
            return a << b | a >>> 32 - b
        }
        function c(a, b) {
            var c, d, e, f, g;
            return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }
        function d(a, b, c) {
            return a & b | ~a & c
        }
        function e(a, b, c) {
            return a & c | b & ~c
        }
        function f(a, b, c) {
            return a ^ b ^ c
        }
        function g(a, b, c) {
            return b ^ (a | ~c)
        }
        function h(a, e, f, g, h, i, j) {
            return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
        }
        function i(a, d, f, g, h, i, j) {
            return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
        }
        function j(a, d, e, g, h, i, j) {
            return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
        }
        function k(a, d, e, f, h, i, j) {
            return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
        }
        function l(a) {
            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i; )
                b = (i - i % 4) / 4,
                h = i % 4 * 8,
                g[b] = g[b] | a.charCodeAt(i) << h,
                i++;
            return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
        }
        function m(a) {
            var b, c, d = "", e = "";
            for (c = 0; 3 >= c; c++)
                b = a >>> 8 * c & 255,
                e = "0" + b.toString(16),
                d += e.substr(e.length - 2, 2);
            return d
        }
        function n(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128),
                b += String.fromCharCode(63 & d | 128))
            }
            return b
        }
        var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21;
        for (a = n(a),
        x = l(a),
        t = 1732584193,
        u = 4023233417,
        v = 2562383102,
        w = 271733878,
        o = 0; o < x.length; o += 16)
            p = t,
            q = u,
            r = v,
            s = w,
            t = h(t, u, v, w, x[o + 0], y, 3614090360),
            w = h(w, t, u, v, x[o + 1], z, 3905402710),
            v = h(v, w, t, u, x[o + 2], A, 606105819),
            u = h(u, v, w, t, x[o + 3], B, 3250441966),
            t = h(t, u, v, w, x[o + 4], y, 4118548399),
            w = h(w, t, u, v, x[o + 5], z, 1200080426),
            v = h(v, w, t, u, x[o + 6], A, 2821735955),
            u = h(u, v, w, t, x[o + 7], B, 4249261313),
            t = h(t, u, v, w, x[o + 8], y, 1770035416),
            w = h(w, t, u, v, x[o + 9], z, 2336552879),
            v = h(v, w, t, u, x[o + 10], A, 4294925233),
            u = h(u, v, w, t, x[o + 11], B, 2304563134),
            t = h(t, u, v, w, x[o + 12], y, 1804603682),
            w = h(w, t, u, v, x[o + 13], z, 4254626195),
            v = h(v, w, t, u, x[o + 14], A, 2792965006),
            u = h(u, v, w, t, x[o + 15], B, 1236535329),
            t = i(t, u, v, w, x[o + 1], C, 4129170786),
            w = i(w, t, u, v, x[o + 6], D, 3225465664),
            v = i(v, w, t, u, x[o + 11], E, 643717713),
            u = i(u, v, w, t, x[o + 0], F, 3921069994),
            t = i(t, u, v, w, x[o + 5], C, 3593408605),
            w = i(w, t, u, v, x[o + 10], D, 38016083),
            v = i(v, w, t, u, x[o + 15], E, 3634488961),
            u = i(u, v, w, t, x[o + 4], F, 3889429448),
            t = i(t, u, v, w, x[o + 9], C, 568446438),
            w = i(w, t, u, v, x[o + 14], D, 3275163606),
            v = i(v, w, t, u, x[o + 3], E, 4107603335),
            u = i(u, v, w, t, x[o + 8], F, 1163531501),
            t = i(t, u, v, w, x[o + 13], C, 2850285829),
            w = i(w, t, u, v, x[o + 2], D, 4243563512),
            v = i(v, w, t, u, x[o + 7], E, 1735328473),
            u = i(u, v, w, t, x[o + 12], F, 2368359562),
            t = j(t, u, v, w, x[o + 5], G, 4294588738),
            w = j(w, t, u, v, x[o + 8], H, 2272392833),
            v = j(v, w, t, u, x[o + 11], I, 1839030562),
            u = j(u, v, w, t, x[o + 14], J, 4259657740),
            t = j(t, u, v, w, x[o + 1], G, 2763975236),
            w = j(w, t, u, v, x[o + 4], H, 1272893353),
            v = j(v, w, t, u, x[o + 7], I, 4139469664),
            u = j(u, v, w, t, x[o + 10], J, 3200236656),
            t = j(t, u, v, w, x[o + 13], G, 681279174),
            w = j(w, t, u, v, x[o + 0], H, 3936430074),
            v = j(v, w, t, u, x[o + 3], I, 3572445317),
            u = j(u, v, w, t, x[o + 6], J, 76029189),
            t = j(t, u, v, w, x[o + 9], G, 3654602809),
            w = j(w, t, u, v, x[o + 12], H, 3873151461),
            v = j(v, w, t, u, x[o + 15], I, 530742520),
            u = j(u, v, w, t, x[o + 2], J, 3299628645),
            t = k(t, u, v, w, x[o + 0], K, 4096336452),
            w = k(w, t, u, v, x[o + 7], L, 1126891415),
            v = k(v, w, t, u, x[o + 14], M, 2878612391),
            u = k(u, v, w, t, x[o + 5], N, 4237533241),
            t = k(t, u, v, w, x[o + 12], K, 1700485571),
            w = k(w, t, u, v, x[o + 3], L, 2399980690),
            v = k(v, w, t, u, x[o + 10], M, 4293915773),
            u = k(u, v, w, t, x[o + 1], N, 2240044497),
            t = k(t, u, v, w, x[o + 8], K, 1873313359),
            w = k(w, t, u, v, x[o + 15], L, 4264355552),
            v = k(v, w, t, u, x[o + 6], M, 2734768916),
            u = k(u, v, w, t, x[o + 13], N, 1309151649),
            t = k(t, u, v, w, x[o + 4], K, 4149444226),
            w = k(w, t, u, v, x[o + 11], L, 3174756917),
            v = k(v, w, t, u, x[o + 2], M, 718787259),
            u = k(u, v, w, t, x[o + 9], N, 3951481745),
            t = c(t, p),
            u = c(u, q),
            v = c(v, r),
            w = c(w, s);
        var O = m(t) + m(u) + m(v) + m(w);
        return O.toLowerCase()
    }


// function getSign(token, t, appKey, data) {
//     return i(`${token}&${t}&${appKey}&${data}`);
// }

// const appKey = "34839810";
// const token = "4eeba0e25142eb2ca4573c6ff9f026e6";

// const dataObj = {
//     pageNumber: 2,
//     keyword: "手机",
//     fromFilter: false,
//     rowsPerPage: 30,
//     sortValue: "",
//     sortField: "",
//     customDistance: "",
//     gps: "",
//     propValueStr: {},
//     customGps: "",
//     searchReqFromPage: "pcSearch",
//     extraFilterValue: "{}",
//     userPositionJson: "{}"
// };

// const dataStr = JSON.stringify(dataObj);
// const t = Date.now();
// const sign = getSign(token, t, appKey, dataStr);
// console.log(t,sign, dataObj, sign.length)
// console.log(t)
// async function run() {
//     const response = await axios.post(
//         "https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/",
//         new URLSearchParams({
//             data: dataStr
//         }),
//         {
//             params: {
//                 jsv: "2.7.2",
//                 appKey: appKey,
//                 t: t,
//                 sign: sign,
//                 v: "1.0",
//                 type: "originaljson",
//                 accountSite: "xianyu",
//                 dataType: "json",
//                 timeout: "20000",
//                 api: "mtop.taobao.idlemtopsearch.pc.search",
//                 sessionOption: "AutoLoginOnly",
//                 spm_cnt: "a21ybx.search.0.0",
//                 spm_pre: "a21ybx.home.categories.1.4c053da6ofYrwn",
//                 log_id: "4c053da6ofYrwn"
//             },
//             headers: {
//                 accept: "application/json",
//                 "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
//                 origin: "https://www.goofish.com",
//                 priority: "u=1, i",
//                 referer: "https://www.goofish.com/",
//                 "sec-ch-ua":
//                     '"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
//                 "sec-ch-ua-mobile": "?0",
//                 "sec-ch-ua-platform": '"Windows"',
//                 "sec-fetch-dest": "empty",
//                 "sec-fetch-mode": "cors",
//                 "sec-fetch-site": "same-site",
//                 "user-agent":
//                     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0",
//                 cookie:
//                     "cookie2=1fab02e93d046518315fdc304cb1ce2c; mtop_partitioned_detect=1; _m_h5_tk=4eeba0e25142eb2ca4573c6ff9f026e6_1770932281285; _m_h5_tk_enc=98015a97c112b9b4360d18a4368e164a; _samesite_flag_=true; t=92cdb986e4246152100be5b5b484cd36; _tb_token_=8967f953a0f9; xlly_s=1; sgcookie=E100diSN7iBpHQsPWIDBp7jDXjGIrIsRM4%2BWWSfu1yQx6w16pTBRoRpLFoTFR7Nmoz3pKQyEKyd0kvl4U0mmE78u%2F43QTiAb%2F%2Fpsxqf4zU8bW4k%3D; tracknick=tb174314465; csg=eae2a541; unb=2209215586035; x5sec=7b22733b32223a2265303332616162653534326562376131222c22617365727665723b33223a22307c4350624c754d7747454c4b6c6a72722f2f2f2f2f2f774561447a49794d446b794d5455314f4459774d7a55374d53494659327870593273777674623867662f2f2f2f2f2f41513d3d227d; tfstk=gFoinVtv4Vzszn1eqsr6RqifQIYL5lZbJjIYMoF28WPC61It3scmTbHOXmH4ijcLOG395rFcnliKWiF91oDqwoAJw3K-CANb0Qd-4p0ReuyfgG5A0kSUD-fIHVfoCAZfd9C2y2k6mHV8aGrqgkzUeRq4QGS2KkyzUoSauG7FTWw40oPa7wPUeR5N_RywKvPQ3oSVbjreK-VUgorqgvkjXOPS0qoeZchqmlm2x0egS7ka_AHtYt4C5AF3jkmQIvqsQqsV0D2g5DX8bMjaWqk7PcnwmMZtE2rUeAtGxukaEfFKa3S3YvHEMzgBGgUItm4qbPB2LWoitcZZ6ESoZlc0zczh3iHuA5q3L0JAPWn36jog8LIukko8zlupRCUYj8cqffXc0bkKecaImQfUGVe7Y8H6jMqrQ-SrOw7yZhsbLKnFlZaadJV-hGRIIWqIalJHKaQb7Jwuwpvhl1aadJsJKpb7KPyQQf5.."
//             }
//         }
//     );

//     console.log(response.data);
// }

// run();
