const data = {
    "pageNum": 1,
    "pageSize": 10,
    "publicMatterType": "0101",
    "status": "1"
}

function Qu() {
    const e = ["BgvUz3rO", "ChjVDg90ExbL", "ndy3n2jYuvrUtG", "nLfmEhfcuq", "qJyQndaUmL9dosnLncrfmW", "zw5J", "CMv0DxjUicHMDw5JDgLVBIGPia", "A2v5", "zwnI", "runc", "Aw5MBW", "ndy4Evres0Dm", "C200", "CgfYC2u", "Dg9tDhjPBMC", "mvb1C2Tizq", "zw5JCNLWDa", "Bw9Kzq", "x19WCM90B19F", "mtG1mJm4mMj0sNrWta", "mtuYodq3mfvnEMnMCG", "y2LWAgvYvhLWzq", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "mJy1odG3mLjLtwzcBa", "yMLUza", "mtqYmZiXme5oAxHXEq", "y2LWAgvYDgv4Da", "yxbWBhK", "mZC3nZK0quHIrLjp", "mti5mJi5mdbUquHNDNG", "DgfIBgu", "Dg9vChbLCKnHC2u", "DhjHy2u", "vxrMoa", "yMfZzty0", "y29UC29Szq", "y29UC3rYDwn0B3i", "ugTJCZC"];
    return Qu = function() {
        return e
    }
    ,
    Qu()
}

zo = function(o, r) {
    const n = Qu();
        o = o - 211;
        let s = n[o];
        if (zo.PTXmCP === void 0) {
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
            zo.WCLuvJ = a,
            e = arguments,
            zo.PTXmCP = !![]
        }
        const l = n[0]
          , i = o + l
          , c = e[i];
        return c ? s = c : (s = zo.WCLuvJ(s),
        e[i] = s),
        s
    }


bke = function constructor(t) {
        let n = Nr.stringToArrayBufferInUtf8(t.key);
        if (n.length !== 16)
            throw new Error("key should be a 16 bytes string");
        this.key = n;
        let o = new Uint8Array(0);
        if (t.iv !== void 0 && t.iv !== null && (o = Nr.stringToArrayBufferInUtf8(t.iv),
        o.length !== 16))
            throw new Error("iv should be a 16 bytes string");
        this.iv = o,
        this.mode = "cbc",
        ["cbc", "ecb"].indexOf(t.mode) >= 0 && (this.mode = t.mode),
        this.cipherType = "base64",
        ["base64", "text"].indexOf(t.outType) >= 0 && (this.cipherType = t.outType),
        this.encryptRoundKeys = new Uint32Array(32),
        this.spawnEncryptRoundKeys(),
        this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys),
        this.decryptRoundKeys.reverse()
    }

function _ke() {
    const e = zo
      , t = {};
    t[e(222)] = e(219),
    t.mode = e(223),
    t[e(236)] = e(211);
    const n = t
      , o = bke[e(227)];
    return new o(n)
}

const a = _ke().encrypt(JSON.stringify({
                _data: data,
                _requestTime: new Date().getTime()
            }))
             
const params = Ske(a)
           

