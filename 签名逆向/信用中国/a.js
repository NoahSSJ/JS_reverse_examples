const sm2 = require('sm-crypto').sm2;
const CryptoJS = require('crypto-js');
const { BigInteger } = require('jsbn');
const sm4 = require('sm-crypto').sm4; // 直接用库自带的 SM4


function Xi(t) {
    return new BigInteger(t, 10).toString(16);
}

function Yi(t) {
    return new BigInteger(t, 16).toString(10);
}

function $i(t) {
    if (t.length >= 64) return t;
    return "0".repeat(64 - t.length) + t;
}

// 真实 Zi 函数
function Zi(t) {
    var e = t.indexOf(",");
    if (e > -1) {
        var r = Xi(t.slice(0, e));
        var n = Xi(t.slice(e + 1));
        return $i(r) + $i(n);
    }
    return Yi(t.slice(0, t.length / 2)) + "," + Yi(t.slice(t.length / 2));
}





const uuid = function () {
    return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
};

const timeStamp = function () {
    return new Date().getTime();
};


// 对象转 queryString（网页 H.getQueryString 逻辑）
function getQueryString(obj) {
    if (!obj) return '';
    return Object.keys(obj)
        .filter(key => obj[key] !== '' && obj[key] != null)
        .map(key => `${key}=${obj[key]}`)
        .join('&');
}

const O = function (t) {
    let e = '';
    for (const r in t) {
        const n = t[r];
        if (n !== '' && n != null) {
            e += `${r}=${n}&`;
        }
    }
    if (e.length > 0) e = e.slice(0, -1);
    return e;
};

const getSortString = function (t) {
    const sortedKeys = Object.keys(t).sort();
    const sortedObj = {};
    sortedKeys.forEach(key => { sortedObj[key] = t[key]; });
    return O(sortedObj);
};

function gmSm2Signature(content, privateKey, publicKey, userId) {
    return sm2.doSignature(content, privateKey, {
        userId: userId,
        hash: true
    });
}



// ======================
// 你的配置
// ======================
let t = {
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "adapter": [
        "xhr",
        "http"
    ],
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 10000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {},
    "headers": {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/octet-stream",
        "C-GATEWAY-QUERY-ENCRYPT": "1",
        "x-gateway-body": "blob"
    },
    "baseURL": "https://credit.hd.gov.cn/",
    "url": "/zx_website/website/sgs/xzxkfr",
    "method": "get",
    "params": {
        "param": "",
        "page": 15,
        "size": 10
    },
    "responseType": "arraybuffer"
};

let e = {
    "appId": "27IGtFrNFDc",
    "signType": "SM2",
    "encryptType": "SM4",
    "appSignPrivateKey": "7faa61bb9051707ad9d9d2c417d61e038a3af871a61c8da534a9061ac1e51c32",
    "appSignPublicKey": "040f5940c99c46ee9e438487c6a41d880b93f0804ea0e5ef53a062bb08203fc2a675b3d2b7a9aeb1862bb1b8fa5d17a40e300cbbe9a470ee3bf89b4ccb1c899719",
    "encryptKey": "dbb78b8b64d640bb130255c69e959973",
    "platformPublicKey": "0475ed079f423c14c6cc2fec93ce296cefc96c4be11af343c3f654f99140f8d6861589308929156ae62a74955c8bb2f4af540a45c7d1208f2ca61b264b4f383e27"
};

function get_queryString(params) {
    return `param=${params.param}&page=${params.page}&size=${params.size}`
}

// ======================
// 主函数（已补全 SM4 加密）
// ======================
const uo = function (t, e) {
    const r = { ...t };
    console.log("原始请求参数：", r);
    const n = {
        version: '1.0',
        appId: '27IGtFrNFDc',
        signType: 'SM2',
        encryptType: 'SM4',
        nonceStr: uuid(),
        timestamp: timeStamp(),
    };

    
    console.log(r.params);
    
    let i = get_queryString(r.params);
    console.log("原始 query：", i);


    i = sm4.encrypt(i, e.encryptKey);
    console.log("SM4 加密后：", i);

    n.queryContent = i;

    // 签名逻辑
    const a = getSortString(n);
    let o = gmSm2Signature(a, e.appSignPrivateKey, e.appSignPublicKey, e.appId);
    console.log("签名原始输出：", o);

    o = Zi(o);
    console.log("经过 Zi 处理后：", o);

    n.sign = o;
    r.params = n;

    return r;
};



function get_Params() {
    const result = uo(t, e);
    console.log("\n最终请求参数：", result);
    return result.params;
}

get_Params()