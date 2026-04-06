from pprint import pprint
import execjs
import requests
from urllib.parse import urlencode



headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'origin': 'https://zhuanlan.zhihu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://zhuanlan.zhihu.com/p/2023874043997089920',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'x-requested-with': 'fetch',
    'x-zse-93': '101_3_3.0',
    'cookie': '填ck',
}

params = {
    'order_by': 'ts',
    'limit': '20',
    'offset': '',
}

url = 'https://www.zhihu.com/api/v4/comment_v5/comment/11454767967/child_comment'

eo = url + '?' + urlencode(params)

with open('loader.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
xzse96 = ctx.call("get_xzse96", eo)
# print(xzse96)
headers['x-zse-96'] = xzse96
pprint(headers)
response = requests.get(
    url='https://www.zhihu.com/api/v4/comment_v5/comment/11454767967/child_comment',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)