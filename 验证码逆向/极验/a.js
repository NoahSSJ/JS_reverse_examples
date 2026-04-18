// https://www.geetest.com/Register

const NodeRSA = require('node-rsa');
const CryptoJS = require('crypto-js');
function aaa() {
    return e() + e() + e() + e()
}

function e() {
    return (65536 * (1 + Math['random']()) | 0)['toString'](16)['substring'](1);
}

function rsa() {
    const publicKey = new NodeRSA({
        n: 'c39b488b762a8d718224638af527877526ca923e04743e317d3527414e2422d26274182226ca923e04743e317d3527414e2422d26274182226ca923e04743e317d3527414e2422d26274182226ca923e04743e317d3527414e2422d26274182226ca923e04743e317d3527414e2422d2',
        e: 65537
    }, {
        signingScheme: 'pkcs1-sha256',
        encryptionScheme: 'pkcs1' // 必须用 pkcs1 才能和你网站一致
    });

    // ====================== 你的输入 ======================
    const input = "1049243350cb23ca";

    // ====================== 执行加密 ======================
    const result = publicKey.encrypt(input, 'hex');
    return result;
    // ====================== 输出结果 ======================
    // console.log("加密结果：");
    // console.log(result);
}




function aes(plainText, keyStr) {
    // ==========================
    // 【正确】密钥解析：Utf8
    // ==========================
    const key = CryptoJS.enc.Utf8.parse(keyStr);

    // ==========================
    // IV 固定不变（正确）
    // ==========================
    const iv = CryptoJS.lib.WordArray.create(
        [808464432, 808464432, 808464432, 808464432], 16
    );

    // ==========================
    // AES 加密
    // ==========================
    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // ==========================
    // 转字节数组
    // ==========================
    const words = encrypted.ciphertext.words;
    const sigBytes = encrypted.ciphertext.sigBytes;
    const o = [];
    for (let a = 0; a < sigBytes; a++) {
        const byte = words[a >>> 2] >>> (24 - (a % 4) * 8) & 0xff;
        o.push(byte);
    }

    return o;
}

function bytesToHex(bytes) {
    return bytes.map(b => b.toString(16).padStart(2, '0')).join('');
}

function m() {
    // const n = (0, aaa());
    const n = "8a5ad968bf8a9f4b";
    const _ᖁᖆᖈᖚ = '{"passtime":554,"userresponse":[[4467,3971]],"device_id":"","lot_number":"15e73a0752974eeca513d2c874eb2acf","pow_msg":"1|0|md5|2026-04-18T20:12:13.597167+08:00|ca5f707069116185f554374bba6e3b55|15e73a0752974eeca513d2c874eb2acf||b9ae61d908dfc017","pow_sign":"0586b6404b28776dc9bed9e17e1528d4","geetest":"captcha","lang":"zh","ep":"123","biht":"1426265548","9zXN":"NYzS","74eb":{"abc2":"5e73a075"},"em":{"ph":0,"cp":0,"ek":"11","wd":1,"nt":0,"si":0,"sc":0}}'
    // const n = "1049243350cb23ca";
    // console.log(n);
    
    const _ = rsa(n);
    // console.log(_);
    
    var u = aes(_ᖁᖆᖈᖚ, n);
    // console.log(u);
    // console.log(bytesToHex(u));
    console.log((0, bytesToHex)(u) + _);
    
    return (0, bytesToHex)(u) + _;
}

const a = {
    "passtime": 1244,
    "userresponse": [
        [
            3202,
            5568
        ]
    ],
    "device_id": "",
    "lot_number": "6796d8444249456f8f85a584baea9337",
    "pow_msg": "1|0|md5|2026-04-18T16:37:38.252890+08:00|ca5f707069116185f554374bba6e3b55|6796d8444249456f8f85a584baea9337||e79453ef7d9bf3e0",
    "pow_sign": "5ecd1339c3870183dfb61b9f0454427e",
    "geetest": "captcha",
    "lang": "zh",
    "ep": "123",
    "biht": "1426265548",
    "9zXN": "NYzS",
    "baea": {
        "3af2": "796d8444"
    },
    "em": {
        "ph": 0,
        "cp": 0,
        "ek": "11",
        "wd": 1,
        "nt": 0,
        "si": 0,
        "sc": 0
    }
};
m();
// const b = 
// var _ᖗᖙᖗᖚ = (0, m)(n(a));
// const w = _ᖗᖙᖗᖚ



