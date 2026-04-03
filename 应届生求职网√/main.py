import time
import execjs
import requests
from urllib.parse import urlencode





params = {
    'version': '2.3.5',
    'api_key': 'xy',
    'timestamp': f'{int(time.time())}',
    'keyword_type': '0',
}

print(urlencode(params))

with open('sign.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
sign = ctx.call('get_sign', urlencode(params))
print(sign)
headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'account-id': '',
    'from-domain': 'yjs_web',
    'origin': 'https://q.yingjiesheng.com',
    'partner': '',
    'priority': 'u=1, i',
    'property': '%7B%22partner%22%3A%22%22%2C%22webId%22%3A6%2C%22fromdomain%22%3A%22yjs_web%22%2C%22frompageUrl%22%3A%22https%3A%2F%2Fwww.yingjiesheng.com%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fq.yingjiesheng.com%2Fjobs%2Fsearch%2F%22%2C%22isLogin%22%3A%22%E5%90%A6%22%2C%22accountid%22%3A%22%22%7D',
    'referer': 'https://q.yingjiesheng.com/',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sign': f'{sign}',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'user-token': '',
    'uuid': '4c5256a57ca37a042bf8ab5fa50a3d10',
}
response = requests.get('https://youngapi.yingjiesheng.com/job/search_discovery', params=params, headers=headers)
print(response.text)