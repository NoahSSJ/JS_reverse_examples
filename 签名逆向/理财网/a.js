// https://www.chinawealth.com.cn/lcweb/management/proScreen/


const CryptoJS = require('crypto-js');

const e = {
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "adapter": [
        "xhr",
        "http",
        "fetch"
    ],
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 30000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {},
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json;charset=UTF-8"
    },
    "baseURL": "/lcw-fe-service",
    "url": "/prod/search",
    "method": "post",
    "data": {
        "searchType": "",
        "quickQueryWords": "",
        "currentPage": 2,
        "pageSize": 20,
        "prodRegCode": "",
        "prodName": "",
        "orgName": "",
        "prodStatus": "02",
        "orgTypeList": [],
        "prodCollectMeth": "01,NA",
        "prodSpclAttrList": [],
        "prodOperateModeList": [],
        "prodInvestNatureList": [],
        "prodRiskLevelList": [],
        "prodTermCodeList": [],
        "collCCYList": [],
        "performanceCompareBaseCap": "",
        "performanceCompareBaseFloor": "",
        "prodSaleZone": "",
        "orderConfig": ""
    },
    "allowAbsoluteUrls": true
};

const gt = function(e, t) {
    let n = CryptoJS.enc.Base64.parse(t);
    return CryptoJS.AES.encrypt(e, n, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
};

const wt = function(e, t) {
    let n = Object.keys(e).sort();
    let o = "";
    n.forEach(function(s) {
        o += `${s}=${e[s]}&`;
    });
    o += `signKey=${t}`;
    return CryptoJS.SHA256(o).toString();
};

function get_params() {
    let t = (function(e) {
        try {
            let t = JSON.stringify(e);
            // console.log(t);
            
            let n = Date.now().toString();
            let o = Math.random().toString(36).substr(2, 10);
            let a = '868Vgv0CqdNP/89Qm5WXa8AnojGvCuVtHExZx7voSes=';
            let r = gt(t, a);
            let i = wt({
                data: r,
                timestamp: n,
                nonce: o
            }, "hold?fish:palm");
            return {
                sign: i,
                timestamp: n,
                nonce: o,
                encryptedData: r
            };
        } catch (t) {}
    })(e.data);  // ←←← 修复在这里！只传 data 部分！

    console.log(t);
    
    
    e.headers["X-Nonce"] = t.nonce;
    e.headers["X-Timestamp"] = t.timestamp;
    e.headers["X-Sign"] = t.sign;
    e.data = t.encryptedData;
    // console.log(e.data);
    return e;
    
    
}

get_params();