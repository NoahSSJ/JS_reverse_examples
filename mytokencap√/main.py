from pprint import pprint
import execjs
import requests

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'origin': 'https://www.mytokencap.com',
    'priority': 'u=1, i',
    'referer': 'https://www.mytokencap.com/',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
}

with open('loader.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('get_params')
print(params)
params.update({
    'last_id': '0',
    'size': '3',
    'language': 'en_US',
    'mytoken': '',
})
pprint(params)
response = requests.get('https://api.mytoken.info/newsflash/list', params=params, headers=headers)
pprint(response.json())