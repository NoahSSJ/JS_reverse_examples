// 安装命令：npm install crypto-js
const CryptoJS = require('crypto-js');


/**
 * 生成 HMAC 签名密钥
 * @param {string} path - 请求路径
 * @returns {string} 生成的密钥
 */
function get_n(path = "/") {
    const a = {
        "n": 20,
        "codes": {
            "0": "W",
            "1": "l",
            "2": "k",
            "3": "B",
            "4": "Q",
            "5": "g",
            "6": "f",
            "7": "i",
            "8": "i",
            "9": "r",
            "10": "v",
            "11": "6",
            "12": "A",
            "13": "K",
            "14": "N",
            "15": "k",
            "16": "4",
            "17": "L",
            "18": "1",
            "19": "8"
        }
    };
    
    const lowerPath = path.toLowerCase();
    const doubledPath = lowerPath + lowerPath;
    let result = "";
    
    for (let i = 0; i < doubledPath.length; ++i) {
        const charCode = doubledPath[i].charCodeAt();
        const mod = charCode % a.n;
        result += a.codes[mod.toString()];
    }
    
    return result;
}

/**
 * 生成 HMAC 签名
 * @param {string} data - 待签名的数据
 * @param {string} key - HMAC 密钥
 * @returns {string} 签名结果
 */
function get_sign(data, key) {
    // 使用 SHA512 算法生成 HMAC（128 个十六进制字符）
    var hmac = CryptoJS.HmacSHA512(data, key);
    // 转换为十六进制字符串
    var signature = hmac.toString(CryptoJS.enc.Hex);
    // 确保签名是 128 个十六进制字符（512 位）
    return signature;
}

function get_e(arguments) {
    
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
        , n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
        , i = JSON.stringify(e).toLowerCase();
    return n + "pathString" + i + t
               
}


function get_i(arguments) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
            , n = JSON.stringify(e).toLowerCase();
        return (0,
        get_sign)(t + n, (0,
        get_n)(t)).toLowerCase().substr(8, 20)
    }

function get_params(url, data) {
    const params = {
    "url": url,
    "method": "post",
    "data": data,
    "headers": {
        "common": {
            "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "put": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "patch": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "X-Requested-With": "XMLHttpRequest",
        "x-pid": "ca8cc2d3f873fff39e7e2750309833f7"
    },
    "baseURL": "https://www.qcc.com",
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
    "maxBodyLength": -1,
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "withCredentials": true
}

return params
}



// 测试示例


function get_final(url, data) {
    const params = get_params(url, data) ;
    const tid = '47adb2f0c3b0fdbe6fd522fcd07e7dec'
    const arr = [url, params.data, tid]

    const n = get_n(url);
    const e = get_e(arr)
    console.log(e);
    
    // console.log(arr);
    // console.log(arr.slice(0, -1));


    const i = get_i(arr.slice(0, -1))

    const signature = get_sign(e, n);
    console.log(i);

    console.log(n);
    console.log(signature);
    console.log(signature.length);

    const pid = '5b98214c5358fca7c416b72cda6df1a1'
        return {
        "x-pid": pid,
        "i": signature
    }
}


url = "/api/user/getUserCompanyInfo"
data = {
    "keynos": [
        "96cf9fc67cfa99ddb0605d60a0909242",
        "bb89812f5c794ae1f91dd86436c9232d",
        "ad8d90addce346fa91425891e0419807",
        "9e9987d71ae6ebe649c7d4ee7a95044e",
        "05f6e21a96837830f476439cf0cd0801",
        "df40c53f8f32167a993a54a3ebbe3d06",
        "a84e9378b26cc51d83d5d89138df22f7",
        "17e8c8c99514f431107f9e35f31313cd",
        "e7c502e4dea2c85842954b0aaf6eacbe",
        "2e9108b393963450766c28d4744ba077",
        "ea2903d021320c37ece385752591f93e",
        "87269b0313b3d226bbf980a013205af6",
        "ae371bcb03ce8e96375aadf9a3b74ed9",
        "4f8d83e52bc00d66ef5b43e6e3efb67f",
        "43bfc0ecdfaedf14ee396092f53adce2",
        "5d8620c6518174c26a4b20cd60b47f3c",
        "3d516ed3a17f7a92541704549a722e46",
        "84f0984261998d8414e78e03e681b405",
        "c34bd2aa34e8ff3a21263936eb070c25",
        "28b7a02ec8364ba13da6698424e55828"
    ]
}
let res = get_final(url, data)
console.log(res);


