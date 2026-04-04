const CryptoJS = require('crypto-js');
const elliptic = require('elliptic');
const Buffer = require('buffer').Buffer;

// ==========================
// SM2 加密（已1:1还原你的混淆代码）
// ==========================
// SM2 国密标准曲线（固定常量，你的代码内部使用）
const sm2 = new elliptic.ec('p256');
const SM2_PARAMS = {
  p: 'FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF',
  a: 'FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC',
  b: '28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93',
  n: 'FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123',
  gx: '32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7',
  gy: 'BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0',
};
sm2.curve = elliptic.curves.p256.curve;
sm2.g = sm2.curve.point(SM2_PARAMS.gx, SM2_PARAMS.gy);

// 你代码里写死的 SM2 公钥（已完整还原）
const FIXED_PUBLIC_KEY = "8A0CFD3512B53D8939042D9FDF83263243578217435082B504422180E0B97C91";

function sm2Encrypt(data, publicKey = FIXED_PUBLIC_KEY, mode = 0) {
  // 1. 转 JSON 字符串
  const plaintext = JSON.stringify(data);

  // 2. 公钥处理（原混淆代码的替换、反转逻辑）
  let processedPubKey = publicKey;
  if (mode === 1) {
    processedPubKey = processedPubKey
      .replace(/❤/g, '0')
      .replace(/★/g, '1')
      .replace(/☆/g, '2')
      .replace(/●/g, 'A')
      .replace(/○/g, 'B')
      .replace(/\*/g, 'C');

    if (processedPubKey.length > 80) {
      const part1 = processedPubKey.slice(0, 30).split('').reverse().join('');
      const part2 = processedPubKey.slice(30);
      processedPubKey = part1 + part2;
    } else {
      processedPubKey = Buffer.from(processedPubKey, 'utf8').reverse().toString('utf8');
    }
  }

  // 3. 公钥截取规则
  if (processedPubKey.length > 128) {
    processedPubKey = processedPubKey.slice(-128);
  }
  const pubX = processedPubKey.slice(0, 64);
  const pubY = processedPubKey.slice(64);

  // 4. 加载公钥点
  const publicKeyPoint = sm2.curve.point(pubX, pubY);

  // 5. 生成随机密钥 k
  const k = sm2.genKeyPair();
  const rPoint = k.getPublic();

  // 6. 计算共享密钥
  const s = publicKeyPoint.mul(k.getPrivate());
  const sXHex = s.getX().toString('hex').padStart(64, '0');

  // 7. 异或加密（原代码核心）
  const plainBytes = Buffer.from(plaintext, 'utf8');
  const xorBuffer = Buffer.from(sXHex, 'hex');
  const encryptedBytes = plainBytes.map((b, i) => b ^ xorBuffer[i % xorBuffer.length]);

  // 8. 拼接输出：04 + C1 + C2
  const c1Hex = '04' + rPoint.getX().toString('hex').padStart(64, '0') + rPoint.getY().toString('hex').padStart(64, '0');
  const c2Hex = encryptedBytes.toString('hex');

  return c1Hex + c2Hex;
}

// ==========================
// AES 解密（你已跑通的原版）
// ==========================
function aesDecrypt(x) {
  // 密钥 Key
  const key = {
    words: [1903059568, 2003268724, 1667659321, 912680823],
    sigBytes: 16
  };
  // 偏移量 IV
  const iv = {
    words: [892417073, 959592499, 960049203, 942878774],
    sigBytes: 16
  };

  // AES 解密
  const decryptResult = CryptoJS.AES.decrypt(
    decodeURIComponent(x),
    key,
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }
  );

  // 转 UTF8 字符串返回
  return decryptResult.toString(CryptoJS.enc.Utf8);
}

// ==========================
// 测试运行（你的业务数据）
// ==========================

  // ========== 1. AES 解密测试 ==========
let encryptedData = 's4TdZEg9+HXjKiJxA+ep6PVM8qa4wjxsWVenNNx8BFROzvyzLYKdfuxv+x1fGwk++hr6ekMcCzHwsQQ6aLYdoujDs1Wv3ibi4LkUAj0DJ6BN3g5BD3fU5IuCSHr7dtM0Z/SW0AYG907jhL6zlfPdbyS0qhkAD+/ROPBWGPV+SW3DrjCibvbCBJU1AuQBX7rZE5CIizw2+qiREAuDITQaZSTe8joIkszqS0Zp7EqbvnY8v0FNgDpo6s7X1Fq/+s0t6oByygFiw/Fv+tDsJs7C5YtKm/n6yBBGj8oMB7gBYq6K0JJc5PxiiZ9Fnt4ofFHR48dnYv3oec+vzn8Xa7dKjhaS3thYcrBn4cWb1G1QJAJgnoysCjdz3h8eSka1yysgCgW+tl2eGPvZDHcQXFIWwZM1kde9GAfKuartCCGLOoGeiDvsSmbQoO1qbazmDmYznRjYs1SzRYqaYm4za4WRJPdrR5wZw6Fgp8Gf63Zh45XHelbAowcuf0w0mXUVQOS6wNWOTpgcUZ6vs4lZTbEPNbsS67sy9OdmWQiluyxIcNGEAAV6jZPPOqQl2aFu/3ygRwy9FDYZ6XEcaba7sl7cfc+MhcOoo36ylg6TdpA+Q1+Qj/0Fa78GDt6LeCKmeYvIUfRG+ZpZmnx7vvlfsGVkgwc6fVNende6v1rW4Jy3hlz83UhJvxiFNkZ8Aici8hRCu3u7KOoKCoudt1Q4Y+HTxTEGm5bZMQa6K7q/Qg+5dfrYXxAMQh05hs920ZQwX6CFncukFDOaPe/vWBC4XqyQUtc1bmgioL+nMQ7xlYZ8MNXrfWoK6QPi6ge2xKyxCoUdaMnkRC03xqQnRea1w+SqfHC0WwBneGFI6qyartVGY+z1X0MHFvZieuf221hM2OKx6jy1yqXiZidOsuczeeBvc2hs5td3jEyZQoFDTpDrDwpNXiQCsl7NalXCu6p0tTu4dUv1AwmaISfLvd28xq59/r9gCZL66CjIUgcORj8tCT/DtNxG77Za7H6cQ0qNik6HPojTXrW4xNLKPPjzqPToug1NHw39thwA3nLJNuaSrAEZGgMIYPxmRS72buw1gVFLaR4EiAmPEJepagVDsg7J+ECdoRiZVNrPQ899InEaQ9jzzn0EGNuFSAbjl2t/xEpgLemOwl6aAUWDBGW7lo6wR+JCAswuv/pmmMmoq5XxGbDpTI/YX4WuqexPU1bwYERDQBafKdhp8RgWkF7Y1HeAmYYCeuiYPhe3c1DgHeLyzAM0Xn6pDJUo9ZReuFniv+oysMJ8jDvnmBqDAUsAG9Vp//5pOvuaiV6OZc8fKQbg/2rfqrQsX3SKiYwzQ3CTlkThEWBCV9tx6uYfc8ei3CGHeBH4lKxexUeX5Me0vde3Bj2ZsvZjyKrFjWdFE8SV7gK47ra+jVxRg7BVV9GFCG+WbiLKUtA1zeo75RDG2CRneZ7sCyUtjy7ounsThxgDENfee19T3l8r57HGMnA0sTQ0mHH+YEOFgTMoYBcaMbBr0nPDB8UtCCjeBXLY7Mlt3LkvyrWPJe7uDk6GD/FlNlvCVH9b3AcMR6LvNoit8zM77k4sK7sEhqpZf6c+5D1przKqLsbTiRMtHBoThzkAJRkTawRr46FlhV1pDlh07DduJc798iT/xxFPZk4euFCErQ8cdExVZ/T7ZgpCKUHl/PV/9IyPP/kZKhw/1MULQgmaA17SwXZnS6nkTKUWoObif8oP1WpESPmO1If9o2FeYEIilia/opu4j9Sr4thgSR7xcBMY8jORvBvtYqveDP5xiBf97mwVMKNqMBnDtCWDFxpVL8M104BZfVt8L76VJQDprkz3F117O+ey64nm+BotnZHCmcrqJkdnsJ06zSFaWs1yYUxYPIntVemALpujujsxrvwS7zfqIMYUuDHi6T8zd+fOXKXuM8WMJwj0tGeLAhjezz275gUjDVfoxWJWPMUOeEV0kAv6bMaSWnChPEIPCroFGTJ0KF1SKCdj7hz8eVXrY5mcDCRcDZvyC+nfh/YdYKF7fzcyn9pHzyD1V5DCQrbix1+IQtcwoMYWKNYVeOznkbITIu2xpp1maItlhOmGiH/hLfLMC32s8OGFvxd3y25MHkeMyVLul2gYtbr7+44pkyHK4XdDaFZr6eOEjFmScjwRn9ePlcIaimpOPVWMySo3RcaweFOxhldlGhGv6BPN1g==';
  
let decryptedAes = aesDecrypt(encryptedData);
console.log('✅ AES 解密结果：', decryptedAes);

// ========== 2. SM2 加密测试 ==========
const params = {
    "token": "Epoint_WebSerivce_**##0601",
    "params": {
    "categuids": "6d8c8eaa-c710-4b96-b26f-ce3dfc519b77,4bcbbec7-2428-403a-8eed-b0db5c0e01a5,",
    "titlename": "",
    "currpage": 2,
    "pagesize": 10
    }
};

let encryptedSm2 = sm2Encrypt(params);
console.log('\n✅ SM2 加密结果：');
console.log(encryptedSm2);
