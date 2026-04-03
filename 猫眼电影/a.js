const CryptoJS = require('crypto-js');

// ===================== 核心工具函数：生成签名 =====================
function getQueryKey(_ref) {
  var _ref$query = _ref.query,
      t = _ref$query === void 0 ? {} : _ref$query,
      _ref$headers = _ref.headers,
      e = _ref$headers === void 0 ? {} : _ref$headers,
      _ref$method = _ref.method,
      r = _ref$method === void 0 ? 'GET' : _ref$method,
      n = _ref.channelId,
      i = _ref.timeStamp;

  // 固定 UA（Node 环境替代 window.btoa）
  const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0";
  const base64UA = Buffer.from(UA).toString('base64'); // Node 替代 btoa

  var o = {
    method: r,
    timeStamp: i || +new Date(),
    'User-Agent': base64UA,
    index: Math.floor(1e3 * Math.random() + 1),
    channelId: n,
    sVersion: 2,
    key: 'A013F70DB97834C0A5492378BD76C53A'
  };

  var d = Object.keys(o).reduce(function (t, e) {
    return o[e] === 0 || o[e] ? "".concat(t, "&").concat(e, "=").concat(o[e]) : "".concat(t, "&").concat(e, "=''");
  }, '').slice(1);

  // 使用 crypto-js 生成 MD5
  var s = CryptoJS.MD5(d.replace(/\s+/g, ' ')).toString();

  // 删除不需要的字段
  delete o.method;
  delete o.key;

  // 合并参数
  const finalQuery = { ...t, ...o };
  const finalHeaders = { ...e, signKey: s };

  return {
    finalQuery: finalQuery,
    finalHeaders: finalHeaders,
    signKey: s
  };
}

// ===================== 获取最终请求参数 =====================
var getFinalQuery = function getFinalQuery(showDate) {
  var today = 20260402;
  var currentDate = "2026-04-02";

  var query = {
    showDate: showDate,
    startTime: '00:00',
    endTime: '24:00',
    categories: undefined,
    limite: undefined,
    uuid: "19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8"
  };

  var _mdQuery$getQueryKey = getQueryKey({
    query: query,
    timeStamp: Date.now(),
    channelId: 40009
  });

  return _mdQuery$getQueryKey.finalQuery;
};

// ===================== 测试调用 =====================
console.log("===== 猫眼接口最终参数 =====");
const result = getFinalQuery(20260402);
console.log(result);