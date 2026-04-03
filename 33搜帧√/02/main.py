from pprint import pprint
import execjs
import requests

cookies = {
    '_ga_3N6V8CCSXF': 'GS2.1.s1772808713$o4$g1$t1772808717$j56$l0$h0',
    '_ga': 'GA1.1.1142014763.1772717245',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://clipso.agilestudio.cn',
    'Referer': 'https://clipso.agilestudio.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'X-Signature': 'f0e0a808918e4251b453c7b7633fbb8f',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': '_ga_3N6V8CCSXF=GS2.1.s1772808713$o4$g1$t1772808717$j56$l0$h0; _ga=GA1.1.1142014763.1772717245',
}

params = {
    '_platform': 'web-clipseek',
    '_versioin': '0.1',
}

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
hp = ctx.call("get_sign", params)

headers['X-Signature'] = hp['Signature']
params = hp['params']

json_data = {
    'type': 0,
    'text': '飞机',
    'page': 1,
}

response = requests.post(
    'https://clip-seek-api.agilestudio.cn/search',
    params=params,
    cookies=cookies,
    headers=headers,
    json=json_data,
)

pprint(response.json())
