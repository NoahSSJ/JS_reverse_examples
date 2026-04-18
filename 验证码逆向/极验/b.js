const CryptoJS = require('crypto-js');

function encrypt(plainText, keyStr) {
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

// ======================
// 你最新的真实数据
// ======================
const data = '{"passtime":639,"userresponse":[[7397,3422]],"device_id":"","lot_number":"8d7992469a934c41b1d9b56b80f99f91","pow_msg":"1|0|md5|2026-04-18T20:04:54.718949+08:00|ca5f707069116185f554374bba6e3b55|8d7992469a934c41b1d9b56b80f99f91||65249ff2d944930d","pow_sign":"db4759b022cd0291046bc92fa87e8138","geetest":"captcha","lang":"zh","ep":"123","biht":"1426265548","9zXN":"NYzS","80f9":{"f91a":"d7992469"},"em":{"ph":0,"cp":0,"ek":"11","wd":1,"nt":0,"si":0,"sc":0}}';

const result = encrypt(data, "2475c6c0e4fcc43b");
console.log(result);