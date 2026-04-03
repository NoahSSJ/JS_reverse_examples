from pprint import pprint
import execjs
import json
from curl_cffi import requests

url = "https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query"

json_data = {
    "keyword": "南京大学",
    "provinceNames": [],
    "natureTypes": [],
    "eduLevel": "",
    "categories": [],
    "features": [],
    "pageIndex": 1,
    "pageSize": 20,
    "sort": 11
}

# 读取 sign 计算 JS
with open("loader.js", "r", encoding="utf-8") as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
sign = ctx.call("get_sign", json_data)
print("sign:", sign)



headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "uwf7de983aad7a717eb.youzy.cn",
    "Origin": "https://pv4y-pc.youzy.cn",
    "Referer": "https://pv4y-pc.youzy.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0",
    "agent": "objectId:;provinceId:;provinceCode:;userPermissionId:;score:0;",
    "deviceId": "4c0205282b29805cf1dbb39b22df2f69",
    "sec-ch-ua": '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "u-sign": f"{sign}",
    "u-token": ""
}

pprint(headers)

# 关键：浏览器 TLS 指纹
response = requests.post(
    url,
    headers=headers,
    json=json_data,
    impersonate="chrome124"   # 关键
)

pprint(response.json())