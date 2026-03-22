from pprint import pprint
import execjs
import requests

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Referer': 'https://spa2.scrape.center/page/1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}


with open('loader.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
token = ctx.call('get_token', 10)
print(token)


params = {
    'limit': '10',
    'offset': '10',
    'token': f'{token}',
}
pprint(params)
response = requests.get('https://spa2.scrape.center/api/movie/', params=params, headers=headers)
print(response.status_code)
print(response.text)