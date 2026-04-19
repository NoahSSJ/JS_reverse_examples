import requests
from pprint import pprint
import execjs


headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://fofa.info',
    'Pragma': 'no-cache',
    'Referer': 'https://fofa.info/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    'authorization': 'eyJhbGciOiJIUzUxMiIsImtpZCI6Ik5XWTVZakF4TVRkalltSTJNRFZsWXpRM05EWXdaakF3TURVMlkyWTNZemd3TUdRd1pUTmpZUT09IiwidHlwIjoiSldUIn0.eyJpZCI6MTIwOTk3MywibWlkIjoxMDA3OTU3MzgsInVzZXJuYW1lIjoic3l1QSIsInBhcmVudF9pZCI6MCwiZXhwIjoxNzc3MjE4NzYxfQ.9-nApjQ55wEa20KwHLp3xLWZNuvv2hxr8xgQycRu56ElAUyAttDPbp1FGgcQzLVxdnu029XFV4RIvbrFSF9SXg',
    'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': '填写自己的cookie',
}
a = {
    "qbase64": "5rOo5YaM",
    "filter_type": "last_year"
}
# 传给 JS 的基础参数（不需要传 page、size、app_id、ts）
with open("aaa.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('get_params')
pprint(params)


response = requests.get(
    'https://api.fofa.info/v1/search',
    params=params,
    headers=headers,
)

pprint(response.json())