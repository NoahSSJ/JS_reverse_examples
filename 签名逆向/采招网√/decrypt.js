const CryptoJS = require("crypto-js");
// https://search.bidcenter.com.cn/
function AESDecrypt (str) {
        var variate = {
        input: '',//input对象
        prevVal: '',//搜索框上次按键值
        currVal: '',//搜索框此次按键值
        isTiming: false,//是否正在倒计时
        searchCd: null,//搜索框按键定时监测
        key: { "words": [863652730, 2036741733, 1164342596, 1782662963], "sigBytes": 16 },
        aceIV: { "words": [1719227713, 1314533489, 1397643880, 1749959510], "sigBytes": 16 },
        interfaceArray: [{ url: "/JsonHandler/interfaceError/CrossDomainErrorHandler.aspx", params: { from: 6137, guid: '6CDEF39B-8F5A-15DA-4168-D3A2645251AC', location: 6138, token: '' }, type: 0 },
                        { url: "/search/GetSearchProHandler.ashx", params: { from: 6137, guid: '6CDEF39B-8F5A-15DA-4168-D3A2645251AC', location: 6138, token: '' } },
                        { url: "/search/IndexStatisticalChartHandler.ashx", params: { from: 6137, guid: '6CDEF39B-8F5A-15DA-4168-D3A2645251AC', location: 6138, token: '' } },
                        { url: "/search/IndexLiveSearchHandler.ashx", params: { from: 6137, guid: '6CDEF39B-8F5A-15DA-4168-D3A2645251AC', location: 6138, token: '' } }],
        currentKwd: "",
        tourl: "/search?keywords="
    }
        var nContent = CryptoJS.AES.decrypt(str, variate.key, {
            iv: variate.aceIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })
        if (nContent && nContent != null) {
            try {
                var constr = CryptoJS.enc.Utf8.stringify(nContent)
                if (constr != "") {
                    var data = JSON.parse(constr);
                    return data;
                }
                else
                    return null;
            }
            catch (err) {
                return null;
            }

        } else
            return null;
    }

function bindSearchPro(res, interfaceItem) {
        if (res) {
            var data = AESDecrypt(res);
            console.log(data)
            
            }
        
    }

console.log(AESDecrypt("c5k4assk4I/VDW+UuydxKwiUqMnM4lw5EDxwsy5gYMpDi3ZU+2zvXulChOTKex+20qk7lwUDAt1p/y7M5WGn+CLhJntZP5VVIl0y8GBxDf1XUixUhHYTNyyMfKfFDY2pW0RRzv85/hQQ56IBysEz9BxJaYErRztBExn5fE2HEuM3vbQbLPH4eJ9CyWgvK9HqT4j23ajn4fWr0Sjfg0Z7Ziq088AkqLIiEfpn5Igt+s6SzfzU/6wMcSMqFKDwjKqz0j38atCbsGNMpO+YBQP4T3Mm3Bk+XAadTC/SdyJWYEkP4ZGyZ6lNkn2YVYkiRM7IAedWLYBptfP9opj/fyyrLdSlBBNiN4ps58aXJl0BblkInkgEvccuf1dh3b8xa6FgMh4Gc9INXUVgBZQic1XWsMPCZc79tSWb6n1A59dpV/O6mL1D4uS+lRS8aUia1pWZgRwVRSAfJv8Zj1xSTT2x2Gii5R6oi+x2kaQuu/xmaB/VFoHGS54YvbGeui3VuSe5MxvG3Br+FBEfgHr/IeFLGysPlG1kL8d+Tdl892CjH6HguCiqLjjX5c2rzt3SGv0boacGgoMNsSG+j9bnYluuIkz465R3Ymw6xcY+QmHw2Os8dxsJ/UUYvqJH5vcYwu0zIxjUYuA31KW0GzbqVrA1emP+IbrnrEHqP/NkUymm3NIYBJl6a3g2/LlNcjVNMEvc1l5PDha3NpTSLWFUakZXxcdb462yGuuLfXp2+ggJUaciDg8jQgR615kTpUMI2ERcISDgrTIZbOkRaewa45CZzkzh9vNFSU4guRmnKx87n6nNeqYcYe1BgMyyRCf23HGrWcsB6t/8ZZYSmJTWrw/CkPcYIsh2HVxV2tImNEna/B//3o0EDhrhNlco6LY5vmUhZigkEblBr9fvhkh2QgMmaeH4gSragMkcfT74gaSXa4BIA4mclRRC28aRMy8yaS4iXUVpfy2DE0aDfU57xlr0Qh7mojgNoCKPd07ofzMUoig4bEPwjKztZTYhKuTc2cZL2Ih9BkOxD1KXY2oa3L64GJ9AAy1EByorbO17uxGZMGe7Etb0H1fggN0iWlbHwQny1MAga8TeOyH5Iad+7i0AEmYKA6z7Ts3e7crEj1qUE4s="))

