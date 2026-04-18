import json
from pprint import pprint
import execjs
from curl_cffi import requests

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
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    
}

with open('main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)

# 调用函数（直接返回 JSON 字符串）
result_json = ctx.call("getFinalHeaders")

# 转成字典
final_headers = json.loads(result_json)

print("✅ 获取成功！")
# pprint(final_headers)
headers.update(final_headers)
json_data = {
    'pageNumber': 2,
    'pageSize': 10,
}
pprint(headers)

response = requests.post('https://pcapi.cnhnb.com/esearch-pc/api/transform/purchase/list', headers=headers, json=json_data, impersonate="chrome124")
pprint(response.json())