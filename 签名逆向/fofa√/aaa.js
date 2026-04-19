const crypto = require('crypto');

// 完全复现签名函数
function _o(e, t) {
  const r = {};
  const n = {};

  // 过滤空值
  for (const o in e) {
    String(e[o]) && (r[o] = e[o]);
  }

  // 按键排序
  Object.keys(r).sort().forEach(o => {
    n[o] = r[o];
  });

  // 拼接签名字符串：key + value
  let a = '';
  Object.keys(n).forEach(o => {
    a += `${o}${n[o]}`;
  });

  // 没有私钥直接返回空
  if (!t) return '';

  try {
    // RSA-SHA256 签名
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(a, 'utf8');
    const signature = sign.sign(t, 'base64');
    return signature;
  } catch (err) {
    console.log('错误：', err)
    return '';
  }
}


function get_params() {
// 业务参数
const o = {
    "method": "GET",
    "params": {
        "qbase64": "YXBwPSJzaG9waWZ5Ig==",
        "filter_type": "last_year",
        "filter_start_time": "",
        "filter_end_time": "",
        "page": "2",
        "size": "10"
    },
    "baseURL": "https://api.fofa.info/v1/",
    "credentials": "include"
}
const v = {
    ...o.params || {}
};
v.ts = Date.now();
v.lang === void 0 && (v.lang = "zh-CN");
const d = JSON.parse(JSON.stringify(v));

// ✅ 修复：私钥必须分行写！
const s = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAv0xjefuBTF6Ox940ZqLLUFFBDtTcB9dAfDjWgyZ2A55K+VdG
c1L5LqJWuyRkhYGFTlI4K5hRiExvjXuwIEed1norp5cKdeTLJwmvPyFgaEh7Ow19
Tu9sTR5hHxThjT8ieArB2kNAdp8Xoo7O8KihmBmtbJ1umRv2XxG+mm2ByPZFlTdW
RFU38oCPkGKlrl/RzOJKRYMv10s1MWBPY6oYkRiOX/EsAUVae6zKRqNR2Q4HzJV8
gOYMPvqkau8hwN8i6r0z0jkDGCRJSW9djWk3Byi3R2oSdZ0IoS+91MFtKvWYdnNH
2Ubhlnu1P+wbeuIFdp2u7ZQOtgPX0mtQ263e5QIDAQABAoIBAD67GwfeTMkxXNr3
5/EcQ1XEP3RQoxLDKHdT4CxDyYFoQCfB0e1xcRs0ywI1be1FyuQjHB5Xpazve8lG
nTwIoB68E2KyqhB9BY14pIosNMQduKNlygi/hKFJbAnYPBqocHIy/NzJHvOHOiXp
dL0AX3VUPkWW3rTAsar9U6aqcFvorMJQ2NPjijcXA0p1MlZAZKODO2wqidfQ487h
xy0ZkriYVi419j83a1cCK0QocXiUUeQM6zRNgQv7LCmrFo2X4JEzlujEveqvsDC4
MBRgkK2lNH+AFuRwOEr4PIlk9rrpHA4O1V13P3hJpH5gxs5oLLM1CWWG9YWLL44G
zD9Tm8ECgYEA8NStMXyAmHLYmd2h0u5jpNGbegf96z9s/RnCVbNHmIqh/pbXizcv
mMeLR7a0BLs9eiCpjNf9hob/JCJTms6SmqJ5NyRMJtZghF6YJuCSO1MTxkI/6RUw
mrygQTiF8RyVUlEoNJyhZCVWqCYjctAisEDaBRnUTpNn0mLvEXgf1pUCgYEAy1kE
d0YqGh/z4c/D09crQMrR/lvTOD+LRMf9lH+SkScT0GzdNIT5yuscRwKsnE6SpC5G
ySJFVhCnCBsQqq+ohsrXt8a99G7ePTMSAGK3QtC7QS3liDmvPBk6mJiLrKiRAZos
vgPg7nTP8VuF0ZIKzkdWbGoMyNxVFZXovQ8BYxECgYBvCR9xGX4Qy6KiDlV18wNu
ElYkxVqFBBE0AJRg/u+bnQ9jWhi2zxLa1eWZgtss80c876I8lbkGNWedOVZioatm
MFLC4bFalqyZWyO7iP7i60LKvfDJfkOSlDUu3OikahFOiqyG1VBz4+M4U500alIU
AVKD14zTTZMopQSkgUXsoQKBgHd8RgiD3Qde0SJVv97BZzP6OWw5rqI1jHMNBK72
SzwpdxYYcd6DaHfYsNP0+VIbRUVdv9A95/oLbOpxZNi2wNL7a8gb6tAvOT1Cvggl
+UM0fWNuQZpLMvGgbXLu59u7bQFBA5tfkhLr5qgOvFIJe3n8JwcrRXndJc26OXil
0Y3RAoGAJOqYN2CD4vOs6CHdnQvyn7ICc41ila/H49fjsiJ70RUD1aD8nYuosOnj
wbG6+eWekyLZ1RVEw3eRF+aMOEFNaK6xKjXGMhuWj3A9xVw9Fauv8a2KBU42Vmcd
t4HRyaBPCQQsIoErdChZj8g7DdxWheuiKoN4gbfK4W1APCcuhUA=
-----END RSA PRIVATE KEY-----`;

d.sign = _o(d, s) || "";
// console.log("最终签名结果：\n", d.sign);


d.app_id = "9e9fb94330d97833acfbc041ee1a76793f1bc691";
console.log(d);
return d;
}


get_params();