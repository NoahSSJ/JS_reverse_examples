// 修复版 a.js  100% 能生成正确签名
const CryptoJS = require('crypto-js');

function get_params() {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0'

    // 统一时间戳！！！ 签名和提交必须用同一个
    const timeStamp = Date.now();

    // 必须用 Node 兼容的 Base64 编码！！！
    const UserAgentBase64 = Buffer.from(userAgent).toString('base64');

    var o = {
        method: "GET",
        timeStamp: timeStamp,
        'User-Agent': UserAgentBase64,
        index: Math.floor(1e3 * Math.random() + 1),
        channelId: 40009,
        sVersion: 2,
        key: 'A013F70DB97834C0A5492378BD76C53A',
    };

    // 拼接规则严格还原
    var d = Object.keys(o).reduce(function (t, e) {
        return o[e] === 0 || o[e] ? t + "&" + e + "=" + o[e] : t + "&" + e + "=''";
    }, '').slice(1);

    // MD5 签名
    var signKey = CryptoJS.MD5(d.replace(/\s+/g, ' ')).toString();
    const params = {
        orderType: String('0'),
        uuid: '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
        timeStamp: String(timeStamp),
        'User-Agent': String(UserAgentBase64),
        index: String(o.index),
        channelId: String(o.channelId),
        sVersion: String(o.sVersion),
        signKey: String(signKey),
        WuKongReady: 'h5',
    };
    console.log(params);
    
    return params;
}

get_params()