// const CryptoJS = require('crypto-js');
// function E(V) {
// // const V = {
// //     "1": "1",
// //     "3": "f9cc56fdd9b3ec22bea90e298d097516f90d4306",
// //     "4": "32",
// //     "5": "2048x1280",
// //     "6": "2048x1232",
// //     "7": ",",
// //     "8": "PDF%20Viewer,Chrome%20PDF%20Viewer,Chromium%20PDF%20Viewer,Microsoft%20Edge%20PDF%20Viewer,WebKit%20built-in%20PDF",
// //     "9": "Portable%20Document%20Format,Portable%20Document%20Format",
// //     "11": "1",
// //     "12": "1",
// //     "13": "true",
// //     "14": "-480",
// //     "15": "zh-CN",
// //     "16": "",
// //     "17": "1,0,1,1,1,1",
// //     "18": "1.25",
// //     "19": "32",
// //     "20": "0",
// //     "21": "",
// //     "22": "Gecko,20030107,Google Inc.,,Mozilla,Netscape,Win32",
// //     "23": "0,0,0",
// //     "24": "1",
// //     "25": "Google Inc. (NVIDIA),ANGLE (NVIDIA, NVIDIA GeForce RTX 4070 Laptop GPU (0x00002860) Direct3D11 vs_5_0 ps_5_0, D3D11)",
// //     "27": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0",
// //     "28": "false,false",
// //     "29": "true,true,true",
// //     "30": 0,
// //     "31": 8,
// //     "32": "21",
// //     "34": "Win32",
// //     "35": "false,true",
// //     "41": true,
// //     "42": 0,
// //     "43": null,
// //     "44": 1,
// //     "60": false,
// //     "61": false,
// //     "62": false,
// //     "63": true,
// //     "64": false,
// //     "65": true,
// //     "69": 0,
// //     "70": 0,
// //     "71": "",
// //     "72": "zh-CN,en",
// //     "78": "50975fbe702b64f233c625c6086647a55bd54111_260f471548b1333dbfb08565b04210ff0678a0e48b3f94327786a8993cd36eee",
// //     "79": "0,0,0,0,0",
// //     "80": "0,0,0,0,0",
// //     "81": "0",
// //     "82": "6269160595d2e5e9426a2bc28a588f4be2b431a1",
// //     "85": "f7b1cc894f187e9008528f39eba2d1e25442d265",
// //     "101": "924d4a8251ae18584b11dfddee876645bf1643b6",
// //     "103": "1775691844869",
// //     "106": 2048,
// //     "107": "2.9.17",
// //     "108": "https://www.chinabidding.cn/zbxx/zbgg/",
// //     "109": "https://www.chinabidding.cn/zbxx/zbgg/2.html",
// //     "112": "",
// //     "113": "",
// //     "114": "",
// //     "115": "",
// //     "198": 33,
// //     "199": "",
// //     "200": "1"
// // };

// const r = "3D2C5F712980439C";
// const s = "636014d173e04409";
// const p = "c78c50b5b88b400f";

// const jsonStr = JSON.stringify(V);
// const key = CryptoJS.enc.Hex.parse(r);
// const iv = CryptoJS.enc.Hex.parse(s);

// const encrypted = CryptoJS.AES.encrypt(jsonStr, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// });

// const data = encrypted.ciphertext.toString(CryptoJS.enc.Hex);

// const inner = {
//     data: data,
//     key_id: p + ''
// };

// const jsonInner = JSON.stringify(inner);

// console.log(jsonInner);


// const E = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(jsonInner));

// console.log(E);
// return E;
// }

// const V = {
//     "1": "1",
//     "3": "f9cc56fdd9b3ec22bea90e298d097516f90d4306",
//     "4": "32",
//     "5": "2048x1280",
//     "6": "2048x1232",
//     "7": ",",
//     "8": "PDF%20Viewer,Chrome%20PDF%20Viewer,Chromium%20PDF%20Viewer,Microsoft%20Edge%20PDF%20Viewer,WebKit%20built-in%20PDF",
//     "9": "Portable%20Document%20Format,Portable%20Document%20Format",
//     "11": "1",
//     "12": "1",
//     "13": "true",
//     "14": "-480",
//     "15": "zh-CN",
//     "16": "",
//     "17": "1,0,1,1,1,1",
//     "18": "1.25",
//     "19": "32",
//     "20": "0",
//     "21": "",
//     "22": "Gecko,20030107,Google Inc.,,Mozilla,Netscape,Win32",
//     "23": "0,0,0",
//     "24": "1",
//     "25": "Google Inc. (NVIDIA),ANGLE (NVIDIA, NVIDIA GeForce RTX 4070 Laptop GPU (0x00002860) Direct3D11 vs_5_0 ps_5_0, D3D11)",
//     "27": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0",
//     "28": "false,false",
//     "29": "true,true,true",
//     "30": 0,
//     "31": 8,
//     "32": "22",
//     "34": "Win32",
//     "35": "false,true",
//     "41": true,
//     "42": 0,
//     "43": null,
//     "44": 1,
//     "60": false,
//     "61": false,
//     "62": false,
//     "63": true,
//     "64": false,
//     "65": true,
//     "69": 0,
//     "70": 0,
//     "71": "",
//     "72": "zh-CN,en",
//     "78": "db2b1710a747be840072a060e8ea0ab30cb667f5_35ffa5905471b4c96f2dafc7e51a44a871b3d63ec6270e5cfa90433861ecec6e",
//     "79": "0,0,0,0,0",
//     "80": "0,0,0,0,0",
//     "81": "0",
//     "82": "6269160595d2e5e9426a2bc28a588f4be2b431a1",
//     "85": "d73a6d92dd6864eaf0074adf6a0db3fb27cc7bcc",
//     "101": "978d73b887696d07b6cf31f85ad8a100076af29b",
//     "103": "1775693893404",
//     "106": 2048,
//     "107": "2.9.17",
//     "108": "https://www.chinabidding.cn/zbxx/zbgg/3.html",
//     "109": "https://www.chinabidding.cn/zbxx/zbgg/2.html",
//     "112": "",
//     "113": "",
//     "114": "",
//     "115": "",
//     "198": 33,
//     "199": "",
//     "200": "1"
// }
// E(V)



const CryptoJS = require('crypto-js');

function encryptEvent() {
    const h = {
        "1": "click",
        "2": "384",
        "3": "900",
        "4": "384",
        "5": "1409",
        "6": "id(\"pageZone\")/span[5]/a[1]",
        "7": "1775694606811",
        "8": "0",
        "9": "0",
        "10": "0",
        "11": "1",
        "13": "0",
        "14": "0",
        "15": "0",
        "16": "0",
        "17": "0",
        "18": "0",
        "19": "455x1114",
        "20": "713407",
        "101": "978d73b887696d07b6cf31f85ad8a100076af29b",
        "103": "1775694606811",
        "106": 2048,
        "107": "2.9.17",
        "109": "https://www.chinabidding.cn/zbxx/zbgg/2.html",
        "110": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0",
        "200": "2"
    };

    const r = "3D2C5F712980439C";
    const s = "636014d173e04409";

    const jsonStr = JSON.stringify(h);

    const encrypted = CryptoJS.AES.encrypt(jsonStr, CryptoJS.enc.Hex.parse(r), {
        iv: CryptoJS.enc.Hex.parse(s),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    const data = encrypted.ciphertext.toString(CryptoJS.enc.Hex);

    const inner = { data: data, key_id: "c78c50b5b88b400f" };
    const finalBase64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(inner)));

    console.log("data hex:", data);
    console.log("最终 E (Base64):", finalBase64);
    return finalBase64;
}

encryptEvent();