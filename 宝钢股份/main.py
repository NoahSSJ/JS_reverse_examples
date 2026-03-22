import json
from pprint import pprint
import execjs
import requests

json_data = {
    'pageNo': 0,
    'pageSize': 10,
    'condition': {
        'nodeId': 1198,
    },
}
body = json.dumps(json_data, separators=(',', ':'))
with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
h = ctx.call("get_headers", json_data)

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.baosteel.com',
    'Referer': 'https://www.baosteel.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
headers.update(h)
pprint(headers)

params = {
    'domainId': '12',
}



response = requests.post('https://cmsauth.baowugroup.com/v1/web/api/content/list', params=params, headers=headers, data=body)
pprint(response.json())
