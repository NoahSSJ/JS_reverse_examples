from pprint import pprint
import requests
import execjs

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Authorization': '',
    'Connection': 'keep-alive',
    'Origin': 'https://www.mtzh.top',
    'Referer': 'https://www.mtzh.top/mtzh_h5/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'content-type': 'application/x-www-form-urlencoded',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}


with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
sign = ctx.call("get_sign", 1)

data = {
    'sign': f'{sign}',
    'OpenID': 'mtzh_app2021',
}

response = requests.post('https://www.mtzh.top/api/all/AllProduct/PostSearch', headers=headers, data=data)
pprint(response.json())