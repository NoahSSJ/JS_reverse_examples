const JSEncrypt = require("jsencrypt");
function encryptFn(e) {
    var o = new JSEncrypt;
    return o.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA5Zq6ZdH/RMSvC8WKhp5gj6Ue4Lqjo0Q2PnyGbSkTlYku0HtVzbh3S9F9oHbxeO55E8tEEQ5wj/+52VMLavcuwkDypG66N6c1z0Fo2HgxV3e0tqt1wyNtmbwg7ruIYmFM+dErIpTiLRDvOy+0vgPcBVDfSUHwUSgUtIkyC47UNQIDAQAB"),
    o.encrypt(e)
}

const pwd = "eyrrty";
const data = "1773671292235"
const password = encryptFn(pwd + '' + data)
console.log(password);
