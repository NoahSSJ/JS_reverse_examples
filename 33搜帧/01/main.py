from pprint import pprint
import time
import execjs
import requests

cookies = {
    '_gid': 'GA1.2.1434801613.1772717245',
    '_gat_gtag_UA_212737753_1': '1',
    '_ga_3N6V8CCSXF': 'GS2.1.s1772789299$o2$g1$t1772791644$j54$l0$h0',
    '_ga': 'GA1.1.1142014763.1772717245',
}

params = {
    'keyword': '火车呼啸而过',
    'page': '1',
    'limit': '12',
    '_platform': 'web',
    '_versioin': '0.2.5'
}

with open("sign.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
obj = ctx.call("get_xs", params)
print(obj['sign'])
params['_ts'] = obj['ts']
pprint(params)
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Origin': 'https://fse.agilestudio.cn',
    'Referer': 'https://fse.agilestudio.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'X-Signature': f'{obj['sign']}',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': '_gid=GA1.2.1434801613.1772717245; _gat_gtag_UA_212737753_1=1; _ga_3N6V8CCSXF=GS2.1.s1772789299$o2$g1$t1772791644$j54$l0$h0; _ga=GA1.1.1142014763.1772717245',
}


# https://fse.agilestudio.cn/search?keyword=%E7%81%AB%E8%BD%A6%E5%91%BC%E5%95%B8%E8%80%8C%E8%BF%87
response = requests.get('https://fse-api.agilestudio.cn/api/search', params=params, cookies=cookies, headers=headers)
pprint(response.json())