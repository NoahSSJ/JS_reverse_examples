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



const params = {
    "url": "/api/user/getUserCompanyInfo",
    "method": "post",
    "data": {
        "keynos": [
            "f1c5372005e04ba99175d5fd3db7b8fc",
            "181e23a3c35a6fc18450f03cc13bb03b",
            "f6b2374c55c93885b68165edc1b96789",
            "b67164361bf488390fbd5ee5f3f13f9d",
            "7ecedd2a89a50b859304a7e9cce6567a",
            "9eb33b02e2d990dad4215bb67156df92",
            "9a472c1948c31d5ac22688f9b30956bc",
            "c6c37d9094ba68ad85c1b7b7f1c48812",
            "b7ceadc0cd6772eef9b9748959f40416",
            "5af25a6752673268f55a1529ceedcb24",
            "24dadb835fb99ff53ebf5fbf0c38f7f1",
            "201cb0072d97720c6da23acd4aae9115",
            "f4e7ba98f0feb7cc0d1f94402cc1fad6",
            "48ceae4432570bd0d9bd6d50a6c2dd78",
            "6bd3b077953ff9a97ea441b7e2e45a01",
            "2e9108b393963450766c28d4744ba077",
            "61d0e1372252852d376b63a1fcff9812",
            "a3c0065cb13029cda68a6107446635f8",
            "d167ad0bf8532d84a2e89754e3b1949c",
            "9d19a1b84618fb52cd11fcbffc301fc2"
        ]
    },
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
// 测试示例
const url = params.url;
const tid = '47adb2f0c3b0fdbe6fd522fcd07e7dec'
const arr = [url, params.data, tid]

const n = get_n(url);
const e = get_e(arr)
// console.log(arr);
// console.log(arr.slice(0, -1));


const i = get_i(arr.slice(0, -1))

const signature = get_sign(e, n);
console.log(i);

console.log(n);
console.log(signature);
console.log(signature.length);

const pid = 'ca8cc2d3f873fff39e7e2750309833f7'

function get_final() {
    return {
        i: signature
    }
}




