import time
import requests
from pprint import pprint
import execjs
headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://passport.ximalaya.com/page/web/register',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'cookie': 'wfp=ACM4ODZhNTMwNDMxNDQyNmFkfFGk0gX3Y1d4bXdlYl93d3c; _xmLog=h5&8addb4f4-e6f2-4352-be05-1abb8a8605e1&2.4.24; xm-page-viewid=ximalaya-web; trackType=web; x_xmly_traffic=utm_source%3A%26utm_medium%3A%26utm_campaign%3A%26utm_content%3A%26utm_term%3A%26utm_from%3A; impl=passport.ximalaya.com.web; s&e=1f5a6f32c00a225168fb8aa59807a108; s&a=K%01Z%02T%09LU%1D[_%02XUNR@S%05%05V%02%1AVCS_X%0FRK[VZCT_OJOL[[SBRJRN',
}

response = requests = requests.get(
    f'https://passport.ximalaya.com/web/nonce/{int(time.time() * 1000)}?fromUri=https://m.ximalaya.com',
    headers=headers,
)
nonce = response.json()['nonce']
print(nonce)
with open('loader.js', mode='r', encoding='utf-8') as f:
    loader = f.read()
ctx = execjs.compile(loader)
signature = ctx.call('get_signature', nonce, r'aesgtsrdgf@gmail.com')
pprint(signature)

