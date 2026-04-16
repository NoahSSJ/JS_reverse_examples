const CryptoJS = require('crypto-js');
window = globalThis;
window.document = {
    getElementsByTagName: function(t) {
        return [];
    }
};


const qccrkeys = [
    "0",
    "7E9963739DB05E87EA1C760FBE457FF8",
    "4",
    "123456",
    "0",
    "OKLGjpWXdJCPEkqzv\"-M;y3FGZS\\dGUEDqG!u}miCiHEGxUXdP8vJ\\mb@\"y5d|TU~Yb-,OKjF|K [c%x9RG:Z!`G2\\rPrNlPwG'LFk7frrS^%mYixElm#x8>UNEvZ8BputOkJhjZBwfrPn[pQtBp>tVNM}`=p.eIFkpm1p}d41OPo={A9}(RyHe]NxGA6>JvrZ^Vfk+zq7oM5j^lu_-fYPG4#].nCiPFGJSY+_CK{Lm`G&2wUO<7GBu.>>23\\xSN]eu8lekhY?a1huxzHit@we/Zxst^LS!dnnFig;xMo09Qqm:mp9\\#iMFIs\\oVGE[_l;]55|eeupz\\[Gi9{Z;:IpnKkzQyWHPv3i\\Ba`41kt3HY;9{\\mDXRzprV_mPlHrz9t~'VrULDJ~rd&p?wSMFGW``w7qozG;mv+ki;L:PpM}%;UcvDRVyUGoRqLz[:PyIxujCfGHZD{.SRWpi!jfF8OOWV78J\"io5jZ5K[zh\":i2ETUI8ex0~ttwt;Mf0nLH5mPNlU^mir7{jqz$n{O68y\\p=c{%9nYSw]ZsK=GDSEEQ#al\\jjV}hgk\",X;q{g47RxaqrCmDf_a?^6tp\\TV!$y(iMpjEzQB\\J6\\ZQ26K]>N2ggEWr!^t(XW|TWn;}dnnURXsjJv|Ado:gg/|qRbWsE77;ipROdqGCwkZn|HmSUrY]R=!\"91lvD6]S@Oqmt7X{lzVE(gdqqO_sC-<NghuWs=|X5rw4VS|A$\\u]spR:QJ\"d4lZS\\XVXGgmGS6DFV@Wn/7D9W5K!fF:LKGTqkn)}6Z45:HRPvJ7wlxuFwS\"pk}wet{pU^zk^pchHjyso2SwW|sGja((qU|UnJZKS",
    "OKJjSJ>]fYsIVMh<RghHCSXEG=UddJEDlUQKugflTcHHrLtj)yIu7F1l`OWLNoEMt|YA}Hu;eXhpg_l8VhIzxSdwo|ciw/ZU$y5gPoEQLz_IvrF8rHi~xn(`6-:8VNwkx;9zm;9<_FttnWHNn UAxXi85fJ`a*Z|4:M8hYA1:Qf3.ogbxI=SVY{TH4#[y<ZHnT|opo9O1fpu^WfpzWKFDUGK",
    "1"
]


const _0x487903 = {
    "cateid": "50010158",
    "spm": "1.1.4-20.22",
    "page": 2,
    "IsGetShopOviewInfo": "1",
    "ProductSearchType": 3,
    "IsGetVipPrice": 0,
    "BanSupplier": "1",
    "PageSize": "83"
};


const KEY_WORDS = [1649890414, 1144607557, 1950772279, 2034521191, 1433617987, 1129598057, 1936078937, 1951291223];
const IV_WORDS = [1702048312, 1162560371, 961701173, 860449636];
const KEY = CryptoJS.lib.WordArray.create(KEY_WORDS, 32);
const IV = CryptoJS.lib.WordArray.create(IV_WORDS, 16);

/**
 * RSA 私钥（jsrsasign 库专用格式）
 */
const RSA_PRIVATE_KEY = {
    n: {
        "0": 246704353, "1": 164973315, "2": 64308623, "3": 160731098,
        "4": 222834083, "5": 169172165, "6": 246399469, "7": 226617591,
        "8": 122404950, "9": 230412192, "10": 132320663, "11": 262185178,
        "12": 34482594, "13": 126283780, "14": 80422694, "15": 81894631,
        "16": 106292522, "17": 236587603, "18": 35247952, "19": 26502962,
        "20": 7032830, "21": 196592779, "22": 134733237, "23": 111172107,
        "24": 194388231, "25": 5300961, "26": 130452311, "27": 94689801,
        "28": 251950493, "29": 248450980, "30": 254854827, "31": 34648338,
        "32": 82805890, "33": 54594639, "34": 172326767, "35": 26706317,
        "36": 40621, "t": 37, "s": 0
    },
    e: 65537,
    d: {
        "0": 109264313, "1": 378405, "2": 165565577, "3": 50193574,
        "4": 38374490, "5": 260973000, "6": 100685114, "7": 79100399,
        "8": 243973379, "9": 131369383, "10": 57528805, "11": 168414721,
        "12": 175703674, "13": 159630209, "14": 157034292, "15": 149185477,
        "16": 108396229, "17": 267487485, "18": 91786487, "19": 21367914,
        "20": 42943333, "21": 145368302, "22": 180579115, "23": 17696635,
        "24": 77253930, "25": 199928209, "26": 193521939, "27": 252780191,
        "28": 78844555, "29": 210097338, "30": 149190285, "31": 103624771,
        "32": 13618485, "33": 124796291, "34": 166349007, "35": 125923176,
        "36": 2244, "t": 37, "s": 0
    },
    p: {
        "0": 107265485, "1": 131622186, "2": 19070853, "3": 79157259,
        "4": 78938900, "5": 166517343, "6": 147602761, "7": 33885854,
        "8": 42483824, "9": 235311989, "10": 195075094, "11": 244430124,
        "12": 112001235, "13": 60980238, "14": 77515660, "15": 141368783,
        "16": 113258077, "17": 76871074, "18": 212, "t": 19, "s": 0
    },
    q: {
        "0": 143434597, "1": 52917460, "2": 187623322, "3": 63821467,
        "4": 157244805, "5": 4205348, "6": 164102224, "7": 247828603,
        "8": 112694627, "9": 126846238, "10": 210647741, "11": 153794933,
        "12": 212311135, "13": 230786853, "14": 24612017, "15": 56566405,
        "16": 247163364, "17": 94082842, "18": 191, "t": 19, "s": 0
    },
    dmp1: {
        "0": 192020733, "1": 39893475, "2": 199298238, "3": 49407870,
        "4": 241827330, "5": 64333296, "6": 223703694, "7": 219472870,
        "8": 132834572, "9": 38698196, "10": 63560312, "11": 267784509,
        "12": 145577422, "13": 116571447, "14": 21405200, "15": 30357802,
        "16": 242866497, "17": 102225018, "18": 27, "t": 19, "s": 0
    },
    dmq1: {
        "0": 20172533, "1": 174021894, "2": 170396429, "3": 90875707,
        "4": 201111636, "5": 96167054, "6": 193577386, "7": 127905065,
        "8": 65469511, "9": 243911266, "10": 33519014, "11": 156436458,
        "12": 198402223, "13": 3561629, "14": 79423725, "15": 92469422,
        "16": 38554261, "17": 5106166, "18": 182, "t": 19, "s": 0
    },
    coeff: {
        "0": 187982605, "1": 78280260, "2": 80379930, "3": 160025785,
        "4": 126056087, "5": 220035546, "6": 185125693, "7": 32553418,
        "8": 27826969, "9": 44625836, "10": 46565259, "11": 64716483,
        "12": 166518957, "13": 33833575, "14": 6245317, "15": 129299731,
        "16": 35099472, "17": 134222843, "18": 67, "t": 19, "s": 0
    },
    isPrivate: true,
    isPublic: false
};


function transformString(a1, str, offset, len, start) {
    offset = parseInt(offset);
    len = parseInt(len);
    start = parseInt(start);
    let result = str.split('');
    for (let i = 0; i < len; i++) {
        const idx = (start + i) % result.length;
        const charCode = result[idx].charCodeAt(0);
        result[idx] = String.fromCharCode(charCode + offset);
    }
    return result.join('');
}





function aesEncrypt(data) {
    const plainText = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(plainText, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}


function signData(aesCiphertext) {
    // 初始化 RSA 签名
    const sig = new jsrsasign.KJUR.crypto.Signature({ alg: 'SHA256withRSA' });
    
    // 直接使用你提供的私钥对象
    sig.init(rsaPrivateKey);
    sig.updateString(aesCiphertext);
    
    // 生成签名并转 base64
    let signBase64 = jsrsasign.hextob64(sig.sign());

    // 网站自定义混淆（用你给的 qccrkeys）
    const _0x329762 = true;
    const _0x903ee5 = qccrkeys[7];
    const _0xa199bb = qccrkeys[5];

    if (_0x329762 && parseInt(_0x903ee5) === 0) {
        const offset = parseInt(qccrkeys[2]);
        const seed = qccrkeys[3];
        const length = parseInt(qccrkeys[4]);
        signBase64 = transformString(_0xa199bb, signBase64, offset, length, seed);
    }

    return signBase64;
}



function rrKQE(_0x16d42f, _0x721656) {
    return _0x16d42f(_0x721656);
}


_0x247919 = rrKQE(aesEncrypt, JSON.stringify(_0x487903));
console.log(_0x247919);


function _0x4a0b(_0x398d91, _0x4251b6) {
    var _0x326346 = _0x3263();
    return _0x4a0b = function(_0x4a0b6e, _0x4bb167) {
        _0x4a0b6e = _0x4a0b6e - 115;
        var _0x6f4a10 = _0x326346[_0x4a0b6e];
        if (_0x4a0b.XxCGmO === undefined) {
            var _0x11a47b = function(_0xf244c8) {
                var _0xfc773e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                var _0x1ad6fe = ""
                  , _0x3da4a3 = "";
                for (var _0x38424e = 0, _0x158505, _0x393c9b, _0x5a3f20 = 0; _0x393c9b = _0xf244c8.charAt(_0x5a3f20++); ~_0x393c9b && (_0x158505 = _0x38424e % 4 ? _0x158505 * 64 + _0x393c9b : _0x393c9b,
                _0x38424e++ % 4) ? _0x1ad6fe += String.fromCharCode(255 & _0x158505 >> (-2 * _0x38424e & 6)) : 0) {
                    _0x393c9b = _0xfc773e.indexOf(_0x393c9b);
                }
                for (var _0x5b79a7 = 0, _0x59924a = _0x1ad6fe.length; _0x5b79a7 < _0x59924a; _0x5b79a7++) {
                    _0x3da4a3 += "%" + ("00" + _0x1ad6fe.charCodeAt(_0x5b79a7)["toString"](16))["slice"](-2);
                }
                return decodeURIComponent(_0x3da4a3);
            };
            var _0x3dfa1d = function(_0x38d44e, _0x306f64) {
                var _0x35575d = [], _0x51b0f3 = 0, _0x59f77d, _0x3961ca = "";
                _0x38d44e = _0x11a47b(_0x38d44e);
                var _0x9937b2;
                for (_0x9937b2 = 0; _0x9937b2 < 256; _0x9937b2++) {
                    _0x35575d[_0x9937b2] = _0x9937b2;
                }
                for (_0x9937b2 = 0; _0x9937b2 < 256; _0x9937b2++) {
                    _0x51b0f3 = (_0x51b0f3 + _0x35575d[_0x9937b2] + _0x306f64.charCodeAt(_0x9937b2 % _0x306f64.length)) % 256,
                    _0x59f77d = _0x35575d[_0x9937b2],
                    _0x35575d[_0x9937b2] = _0x35575d[_0x51b0f3],
                    _0x35575d[_0x51b0f3] = _0x59f77d;
                }
                _0x9937b2 = 0,
                _0x51b0f3 = 0;
                for (var _0x35f706 = 0; _0x35f706 < _0x38d44e.length; _0x35f706++) {
                    _0x9937b2 = (_0x9937b2 + 1) % 256,
                    _0x51b0f3 = (_0x51b0f3 + _0x35575d[_0x9937b2]) % 256,
                    _0x59f77d = _0x35575d[_0x9937b2],
                    _0x35575d[_0x9937b2] = _0x35575d[_0x51b0f3],
                    _0x35575d[_0x51b0f3] = _0x59f77d,
                    _0x3961ca += String.fromCharCode(_0x38d44e.charCodeAt(_0x35f706) ^ _0x35575d[(_0x35575d[_0x9937b2] + _0x35575d[_0x51b0f3]) % 256]);
                }
                return _0x3961ca;
            };
            _0x4a0b.kOJOdz = _0x3dfa1d,
            _0x398d91 = arguments,
            _0x4a0b.XxCGmO = !![];
        }
        var _0x46b12a = _0x326346[0]
          , _0x31973c = _0x4a0b6e + _0x46b12a
          , _0x45a5b7 = _0x398d91[_0x31973c];
        return !_0x45a5b7 ? (_0x4a0b.ofcNuj === undefined && (_0x4a0b.ofcNuj = !![]),
        _0x6f4a10 = _0x4a0b.kOJOdz(_0x6f4a10, _0x4bb167),
        _0x398d91[_0x31973c] = _0x6f4a10) : _0x6f4a10 = _0x45a5b7,
        _0x6f4a10;
    }
    ,
    _0x4a0b(_0x398d91, _0x4251b6);
}





/**
 * 核心函数：对输入字符串进行 SHA1withRSA 签名
 * @param {string} content - 需要签名的原始字符串
 * @returns {string} Base64 格式的签名结果
 */
function rsaSign(content) {
    // 初始化签名算法：SHA1withRSA
    const signer = new KJUR.crypto.Signature({ alg: 'SHA1withRSA' });
    
    // 载入私钥
    signer.init(RSA_PRIVATE_KEY);
    
    // 更新待签名数据
    signer.updateString(content);
    
    // 执行签名，并将十六进制结果转为 Base64
    const signature = hextob64(signer.sign());

    // 原代码末尾全是混淆干扰，直接返回真实签名即可
    return signature;
}



var _0x21c377 = rsaSign(_0x247919);
const _0x265ee2 = qccrkeys[1]
const _0x2be963 = {
    KM: _0x265ee2,
    Ver: '1',
    Content: _0x247919,
    Sign: signData(_0x247919),
    RsaPubAes: _0x41dbfb,
    IV: "fkMqFffepT1rGEeR",
    TimesTamp: "BC08A3520A026A1E7EC8B287B35F3039"

};