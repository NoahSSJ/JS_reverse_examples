const CryptoJS = require('crypto-js');

// 随机字符串
function ht(len = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = "";
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return res;
}

// 生成 signature
function Tt(o) {
  const timestamp = o.time || Math.floor(Date.now() / 1000).toString();
  const appSecret = o.appSecret;
  const nonce = ht(16);

  // 三个字符串按字典序排序后拼接
  const arr = [appSecret, nonce, timestamp].sort();
  const str = arr[0] + arr[1] + arr[2];

  // SHA1 转十六进制（和你网站逻辑一致）
  const signature = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);

  return {
    timestamp,
    nonce,
    signature
  };
}

// 使用
const time = Math.floor(Date.now() / 1000).toString();
const params = {
  appSecret: "hUzaABtNfDE-6UiyaYhfsmjW-8dnoyVc",
  time: time
};

console.log(Tt(params));