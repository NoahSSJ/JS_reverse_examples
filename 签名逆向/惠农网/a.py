from pprint import pprint
from curl_cffi import requests  # 替换这里

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://www.cnhnb.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.cnhnb.com/',
    'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    'x-b3-traceid': '0MO2TDYBR7AKECVB',
    'x-client-appid': '4',
    'x-client-environment': 'pro',
    'x-client-id': '181e7bd-e985-4472-b52d-2f805f52c',
    'x-client-nonce': '0023de1f11a8d93859b225cf7e21c635',
    'x-client-page': '/purchase/',
    'x-client-sid': 'S_0MO2SM8UNEX3XOHA',
    'x-client-sign': 'b370e1444559db5354917183c36be494c11fb619396e3752fb7c72156e4781daa4c8cdbfff1270697467c487f9862be6',
    'x-client-time': '1776424678407',
    'x-hn-job': 'If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html',
}

json_data = {
    'pageNumber': 4,
    'pageSize': 10,
}

# ✅ 关键：impersonate="chrome147" 模拟浏览器 TLS 指纹
response = requests.post(
    'https://pcapi.cnhnb.com/esearch-pc/api/transform/purchase/list',
    headers=headers,
    json=json_data,
    impersonate="chrome124"  # 必须加
)

pprint(response.json())