// ==============================================
// 1. 你找到的所有核心常量（已全部补齐）
// ==============================================
const NodeRSA = require('node-rsa');

const Tc = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72])
const vke = Uint32Array.from([462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257])
const Bc = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404])

// 你的真实 KEY（已还原）
const REAL_KEY = new Uint8Array([66,54,42,52,48,46,50,95,67,57,35,101,52,36,69,51]);

// ==============================================
// 2. 工具类 Nr（完全还原）
// ==============================================
class Nr {
  static stringToArrayBufferInUtf8(t) {
    return new TextEncoder().encode(t);
  }
  static utf8ArrayBufferToString(t) {
    return new TextDecoder("utf-8").decode(t);
  }
  static arrayBufferToBase64(bytes) {
    return btoa(String.fromCharCode(...bytes));
  }
  static base64ToArrayBuffer(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
}

const uo = 16;

// ==============================================
// 3. 完整原版加密类 mke（一字未改）
// ==============================================
class mke {
  constructor() {
    this.key = REAL_KEY;
    this.iv = new Uint8Array(0); // 你没有 IV
    this.mode = "ecb";          // 固定 ECB 模式
    this.cipherType = "base64";
    this.encryptRoundKeys = new Uint32Array(32);
    this.spawnEncryptRoundKeys();
  }

  doBlockCrypt(t, n) {
    let o = new Uint32Array(36);
    o.set(t, 0);
    for (let s = 0; s < 32; s++)
      o[s + 4] = o[s] ^ this.tTransform1(o[s + 1] ^ o[s + 2] ^ o[s + 3] ^ n[s]);
    let r = new Uint32Array(4);
    r[0] = o[35], r[1] = o[34], r[2] = o[33], r[3] = o[32];
    return r;
  }

  spawnEncryptRoundKeys() {
    let t = new Uint32Array(4);
    t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3];
    t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7];
    t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11];
    t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
    let n = new Uint32Array(36);
    n[0] = t[0] ^ Bc[0], n[1] = t[1] ^ Bc[1], n[2] = t[2] ^ Bc[2], n[3] = t[3] ^ Bc[3];
    for (let o = 0; o < 32; o++) {
      n[o + 4] = n[o] ^ this.tTransform2(n[o + 1] ^ n[o + 2] ^ n[o + 3] ^ vke[o]);
      this.encryptRoundKeys[o] = n[o + 4];
    }
  }

  rotateLeft(t, n) { return t << n | t >>> 32 - n; }
  linearTransform1(t) { return t ^ this.rotateLeft(t,2)^this.rotateLeft(t,10)^this.rotateLeft(t,18)^this.rotateLeft(t,24); }
  linearTransform2(t) { return t ^ this.rotateLeft(t,13)^this.rotateLeft(t,23); }
  tauTransform(t) { return Tc[t>>>24&255]<<24 | Tc[t>>>16&255]<<16 | Tc[t>>>8&255]<<8 | Tc[t&255]; }
  tTransform1(t) { return this.linearTransform1(this.tauTransform(t)); }
  tTransform2(t) { return this.linearTransform2(this.tauTransform(t)); }

  padding(t) {
    let n = uo - t.length % uo, o = new Uint8Array(t.length + n);
    o.set(t), o.fill(n, t.length); return o;
  }

  uint8ToUint32Block(t, n=0) {
    let o = new Uint32Array(4);
    o[0] = t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3];
    o[1] = t[n+4]<<24|t[n+5]<<16|t[n+6]<<8|t[n+7];
    o[2] = t[n+8]<<24|t[n+9]<<16|t[n+10]<<8|t[n+11];
    o[3] = t[n+12]<<24|t[n+13]<<16|t[n+14]<<8|t[n+15];
    return o;
  }

  encrypt(t) {
    let n = Nr.stringToArrayBufferInUtf8(t), o = this.padding(n), r = o.length/uo, s = new Uint8Array(o.length);
    for (let a=0;a<r;a++) {
      let l = a*uo, i = this.uint8ToUint32Block(o,l), c = this.doBlockCrypt(i,this.encryptRoundKeys);
      for (let u=0;u<uo;u++) s[l+u] = c[parseInt(u/4)] >> ((3-u)%4)*8 & 255;
    }
    return Nr.arrayBufferToBase64(s);
  }
}

// ==============================================
// 4. 网页原版 _ke() 调用
// ==============================================
function _ke() {
  return new mke();
}

// ==============================================
// 5. 你的业务数据（固定时间戳）
// ==============================================
const e = {
  data: {
    "pageNum": 3,
    "pageSize": 10,
    "publicMatterType": "0101",
    "status": "1"
  }
};

// 【固定成你网站的真实时间戳】
const FIXED_TIMESTAMP = 1775900709340; // 改成你抓包的时间戳

// 加密（和网页完全一样）
const a = _ke().encrypt(
  JSON.stringify({
    _data: e.data,
    _requestTime: FIXED_TIMESTAMP
  })
);

console.log("加密结果：");
console.log(a);

function Ju() {
    const e = ["BgvUz3rO", "Dg9tDhjPBMC", "y29UC3rYDwn0B3i", "nZmZnduZD2zsCKrJ", "mwLdA05owq", "n050k1bYz3j4A2LbntbLzK9szeK1vtvSC1C3ou1TrM51C1vbmZu1B2ftwgnmAhu1EhHcmZHttvn5udjlDNvltGO", "nJy3nZKXtwH6AuXM", "vva4AvDPmvf3mfK9", "mZK1mtiXnM5nqxPpsa", "tuLjqLzbsujbrefoqMDRCwHRAuC5DZbcqvffrKfbu0nbvdr3z2DfnKfNrufbA0vbCwHiEvPMu3nzB3vYtNHHwqO", "yMLUza", "mtK4nZyWng5iEMDyCW", "C2v0uhjPDMf0zuTLEq", "ChvZAa", "DgfIBgu", "CMv0DxjUicHMDw5JDgLVBIGPia", "zgvJCNLWDa", "C2v0uhvIBgLJs2v5", "Bg9N", "ChjVDg90ExbL", "uhvim293surbuufcqwTbzM9PthLmk1O0Bgy0txL4AZz4vurNtgfxr3HPBwOYmenvzIS1qKTlBMXYsYTfzdHNqqO", "zw5JCNLWDa", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "rffjz0LKAerusxfemMPMwwPqvfK4sMOZrurhugjimKHiDwzMDMzSrun0m0vRnJbdsvfdrLjSq2TiCgK3AhrOAaO", "oeT4EuPUwG", "DhjHy2u", "A00WshfVvhqYvvP3qtvfmK16uZrfstjNAMzrAhO1wdi4Dxf4qwLfqtn3tKz4zNjdwMXtwKHImgDUmNPeCfDVDWO", "tuLhzK1bmeDdu3fhu0LIm0rrrujbuvvbqtrhtKfeq0jPuuTcz1fdmJLTAuyXv3a5wgXOq0vdBYTgwxbdsgfKmwLWru1Nwgy0swrNwwPnsvf3y3P6BZLhwgrJwJrLzvyRowXRAdyRyvrXENPvodqZCMrRtxqWDNjtBNvQvsTht3veueXMytvmwJztzMfUqw95C2K2EhHuwdaYwgL6yJnRk1OXvvnjEM05uuf3rsTtuJfbutC4CKDuuKziv0z1n09hugTwtMvgk3zYwdnPBLfuAwf3surbuufc", "ota2otK4BxvqDxrc", "x19WCM90B19F", "nZm1mdm3mgXZqNHRzq", "wwHVDNLSB1jzC00Rsvm5Ac8WqNPSruf1tZbRDe1rswDtufqZyuzbz0PzD0TWCvjzs2XmrfzJzMXArKnlwtD1mWO", "y2vPBa", "y29UC29Szq", "mtj0zMnns2u", "mti2mJm1DhbOzM53", "AM9PBG", "zxHJzxb0Aw9U", "C3bSAxq"];
    return Ju = function() {
        return e
    }
    ,
    Ju()
}

function pr(e, t) {
    const n = Ju();
    return Wo = function(o, r) {
        o = o - 449;
        let s = n[o];
        if (Wo.cSdtGG === void 0) {
            var a = function(u) {
                const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let d = ""
                  , p = "";
                for (let h = 0, y, v, x = 0; v = u.charAt(x++); ~v && (y = h % 4 ? y * 64 + v : v,
                h++ % 4) ? d += String.fromCharCode(255 & y >> (-2 * h & 6)) : 0)
                    v = f.indexOf(v);
                for (let h = 0, y = d.length; h < y; h++)
                    p += "%" + ("00" + d.charCodeAt(h).toString(16)).slice(-2);
                return decodeURIComponent(p)
            };
            Wo.hKOHzi = a,
            e = arguments,
            Wo.cSdtGG = !![]
        }
        const l = n[0]
          , i = o + l
          , c = e[i];
        return c ? s = c : (s = Wo.hKOHzi(s),
        e[i] = s),
        s
    }
    ,
    Wo(e, t)
}


function wke(b) {
                        b === void 0 && (b = {}),
                        b = b || {},
                        this.default_key_size = b.default_key_size ? parseInt(b.default_key_size, 10) : 1024,
                        this.default_public_exponent = b.default_public_exponent || "010001",
                        this.log = b.log || !1,
                        this.key = null
                    }

// const Cke = pr(455);
// console.log(Cke);
const Cke = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB"
function Ske(e) {
    const encrypt = new NodeRSA();
    encrypt.importKey(Cke, 'public');
    encrypt.setOptions({ encryptionScheme: 'pkcs1' });

    const MAX_CHUNK = 117; // RSA 1024 分段大小
    const len = e.length;
    const chunks = Math.ceil(len / MAX_CHUNK);
    let result = [];

    for (let i = 0; i < chunks; i++) {
        const chunk = e.slice(i * MAX_CHUNK, (i + 1) * MAX_CHUNK);
        const enc = encrypt.encrypt(chunk, 'base64');
        result.push(enc);
    }

    return result.join(',');
}

const l = {
    params: Ske(a)
};
e.data = l

console.log(e.data);


function getParams() {
    return l.params;
}
