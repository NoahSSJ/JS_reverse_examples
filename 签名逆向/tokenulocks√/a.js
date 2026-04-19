const CryptoJS = require('crypto-js');

// 完全还原你的解密函数
function decryptData(base64CipherText) {
  return new Promise(async (resolve) => {
    try {
      const KEY = 'e0PIaKMRUJioUY55RWu6vzhuYR6hzI67';
      if (!base64CipherText || !KEY) return resolve(null);

      const cipherWordArray = CryptoJS.enc.Base64.parse(base64CipherText);
      
      const ivWords = cipherWordArray.clone();
      ivWords.sigBytes = 16;
      
      const cipherTextWords = cipherWordArray.clone();
      cipherTextWords.words = cipherTextWords.words.slice(4);
      cipherTextWords.sigBytes = cipherWordArray.sigBytes - 16;

      const keyWords = CryptoJS.enc.Utf8.parse(KEY);
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: cipherTextWords },
        keyWords,
        {
          iv: ivWords,
          mode: CryptoJS.mode.CFB,
          padding: CryptoJS.pad.NoPadding,
        }
      );

      const decryptedStr = CryptoJS.enc.Utf8.stringify(decrypted);
      resolve(JSON.parse(decryptedStr));
    } catch (err) {
      console.error('解密失败：', err);
      resolve(null);
    }
  })
}

// 你的加密字符串
const encrypted = "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";

// 直接运行解密
(async () => {
  const result = await decryptData(encrypted);
  console.log("✅ 解密成功：");
  console.log(result);
})();