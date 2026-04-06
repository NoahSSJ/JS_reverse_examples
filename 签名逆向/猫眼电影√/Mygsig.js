const CryptoJS = require('crypto-js');
const _0x2ee1f9 = {
    "WuKongReady": "h5",
    "signKey": "3c8be7ca138b259cd898da6fbb5e1b21",
    "sVersion": "2",
    "channelId": "40009",
    "index": "929",
    "User-Agent": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzE0Ni4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xNDYuMC4wLjA=",
    "timeStamp": "1775483427979",
    "uuid": "19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8",
    "orderType": "0",
    "path": "/i/api/dashboard-ajax"
};

// 核心函数（已经包含所有逻辑：前缀+拼接+时间戳）
function generateSignStr(params) {
    const sorted = Object.entries(params).sort((a, b) => a[0].localeCompare(b[0]));
    const valueStr = sorted.map(item => item[1]).join('_');
    return `581409236#${valueStr}$${Date.now()}`;
}


function get_mygsig(params) {
    var _0x555600 = new Date()['getTime']();
    const _0x405958 = generateSignStr(params);
    var _0x3fa226 = CryptoJS.MD5(_0x405958).toString(CryptoJS.enc.Hex);
    var _0x3b5281 = 1775482113084;
    var _0x2e02ce = {};
    _0x2e02ce['m1'] = "0.0.3",
        _0x2e02ce['m2'] = 0,
        _0x2e02ce['m3'] = '0.0.67_tool',
        _0x2e02ce['ms1'] = _0x3fa226,
        _0x2e02ce['ts'] = _0x555600,
        _0x2e02ce['ts1'] = _0x3b5281;
    var _0x2b79f5 = _0x2e02ce
        , _0x35443f = JSON.stringify(_0x2b79f5);
    console.log(_0x35443f);
    return _0x35443f;
}

get_mygsig(_0x2ee1f9);