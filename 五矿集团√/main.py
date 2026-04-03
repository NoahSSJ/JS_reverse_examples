import requests
import execjs


session = requests.Session()
session.headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://ec.minmetals.com.cn',
    'Referer': 'https://ec.minmetals.com.cn/supplier-info',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'SUNWAY-ESCM-COOKIE=fe436edb-f7c5-4866-a5cc-3a6e57500868; __jsluid_s=fa497bd362dcdc0008785be17cb5a761; JSESSIONID=2F3FB04D6D079CE75D870DD8F1A45FDA',
}
resp1 =session.post('https://ec.minmetals.com.cn/open/homepage/public')
print(resp1.text)
params = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZBGG",
    "dwmc": "",
    "pageIndex": 2
}

with open("encrypt.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('encrypt', params, resp1.text)
print(params)

json_data = {
    'param': f'{params}',
}

resp2 = session.post('https://ec.minmetals.com.cn/open/homepage/gys-ml-page', json=json_data)
print(resp2.text)
# print(resp2.text)