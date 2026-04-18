from pprint import pprint
import execjs
import requests

cookies = {
    'cna': 'b333a0b5831a4b2f978c6cde813bfc5f',
    'SHOW_ACTIVITY_PANEL': 'false',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.fnscore.cn/score.html',
    'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'cna=b333a0b5831a4b2f978c6cde813bfc5f; SHOW_ACTIVITY_PANEL=false',
}

with open("main.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call("get_params")
pprint(params)
response = requests.get('https://www.fnscore.cn/api/score/getListByDate', params=params, cookies=cookies, headers=headers)
pprint(response.json())