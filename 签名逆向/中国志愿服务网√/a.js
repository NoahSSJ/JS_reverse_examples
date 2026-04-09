// ==============================================
// 直接复制你网站原版的 SM4 算法（完整可运行）
// ==============================================
const b = {
    stringToArrayBufferInUtf8: function(s) {
        return new TextEncoder().encode(s);
    },
    toGbkBytes: function(str) {
        const iconv = require('iconv-lite');
        return iconv.encode(str, 'gbk');
    },
    arrayBufferToBase64: function(buf) {
        return Buffer.from(buf).toString('base64');
    },
    base64ToArrayBuffer: function(base64) {
        return Buffer.from(base64, 'base64');
    },
    utf8ArrayBufferToString: function(buf) {
        return new TextDecoder().decode(buf);
    }
};

const m = Uint8Array.from([214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72]);
const v = Uint32Array.from([462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257]);
const y = Uint32Array.from([2746333894,1453994832,1736282519,2993693404]);

class SM4 {
    constructor(keyStr) {
        const key = b.stringToArrayBufferInUtf8(keyStr);
        if (key.length !== 16) throw new Error("key invalid");
        this.key = key;
        this.iv = b.stringToArrayBufferInUtf8("longrise12345678");
        this.mode = "cbc";
        this.cipherType = "base64";
        this.encryptRoundKeys = new Uint32Array(32);
        this.spawnEncryptRoundKeys();
    }

    doBlockCrypt(data, rk) {
        const n = new Uint32Array(36);
        n.set(data, 0);
        for (let r = 0; r < 32; r++) {
            n[r + 4] = n[r] ^ this.tTransform1(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ rk[r]);
        }
        return new Uint32Array([n[35], n[34], n[33], n[32]]);
    }

    spawnEncryptRoundKeys() {
        const e = new Uint32Array(4);
        e[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3];
        e[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7];
        e[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11];
        e[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
        const t = new Uint32Array(36);
        t[0] = e[0] ^ y[0];
        t[1] = e[1] ^ y[1];
        t[2] = e[2] ^ y[2];
        t[3] = e[3] ^ y[3];
        for (let n = 0; n < 32; n++) {
            t[n + 4] = t[n] ^ this.tTransform2(t[n + 1] ^ t[n + 2] ^ t[n + 3] ^ v[n]);
            this.encryptRoundKeys[n] = t[n + 4];
        }
    }

    rotateLeft(e, t) { return e << t | e >>> 32 - t; }
    linearTransform1(e) { return e ^ this.rotateLeft(e, 2) ^ this.rotateLeft(e, 10) ^ this.rotateLeft(e, 18) ^ this.rotateLeft(e, 24); }
    linearTransform2(e) { return e ^ this.rotateLeft(e, 13) ^ this.rotateLeft(e, 23); }
    tauTransform(e) { return m[e >>> 24 & 255] << 24 | m[e >>> 16 & 255] << 16 | m[e >>> 8 & 255] << 8 | m[255 & e]; }
    tTransform1(e) { return this.linearTransform1(this.tauTransform(e)); }
    tTransform2(e) { return this.linearTransform2(this.tauTransform(e)); }

    padding(e) {
        const t = 16 - e.length % 16;
        const n = new Uint8Array(e.length + t);
        n.set(e, 0);
        n.fill(t, e.length);
        return n;
    }

    uint8ToUint32Block(e, t = 0) {
        const n = new Uint32Array(4);
        n[0] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
        n[1] = e[t + 4] << 24 | e[t + 5] << 16 | e[t + 6] << 8 | e[t + 7];
        n[2] = e[t + 8] << 24 | e[t + 9] << 16 | e[t + 10] << 8 | e[t + 11];
        n[3] = e[t + 12] << 24 | e[t + 13] << 16 | e[t + 14] << 8 | e[t + 15];
        return n;
    }

    encrypt(dataStr) {
        let data = b.toGbkBytes(dataStr);
        data = this.padding(data);
        const blocks = data.length / 16;
        const out = new Uint8Array(data.length);
        let ivBlock = this.uint8ToUint32Block(this.iv);

        for (let i = 0; i < blocks; i++) {
            const offset = i * 16;
            let block = this.uint8ToUint32Block(data, offset);
            block[0] ^= ivBlock[0];
            block[1] ^= ivBlock[1];
            block[2] ^= ivBlock[2];
            block[3] ^= ivBlock[3];
            const enc = this.doBlockCrypt(block, this.encryptRoundKeys);
            ivBlock = enc;
            for (let j = 0; j < 16; j++) {
                out[offset + j] = enc[Math.floor(j / 4)] >> (24 - (j % 4) * 8) & 0xff;
            }
        }
        return b.arrayBufferToBase64(out);
    }
}

function get_data(t) {
//   const t = {
//     "pageNum": 3,
//     "pageSize": 12,
//     "itemtag": "",
//     "itemcategory": "",
//     "albx0072": "4",
//     "albx0072A": null,
//     "albx0024": "",
//     "albx0004": "",
//     "albx0005": "",
//     "albx0013": "",
//     "albx0021": "000000000000000000",
//     "albx0014": "",
//     "albx0002": "",
//     "albx0009": "",
//     "code": "4"
// };

  const sm4 = new SM4("p6fl4gN1brNfflKK");
  const jsonStr = JSON.stringify(t);
  const encryData = sm4.encrypt(jsonStr);
  const r = { bean: JSON.stringify({ encryData }) };

  console.log("\n========== 最终结果 ==========\n");
  console.log(JSON.stringify(r, null, 2));
  return r;
}
