from pprint import pprint
import execjs
import requests

cookies = {
    '__jsluid_s': 'c45e8bc71d2ae80a7e3b9d28886c2907',
    'language': 'zh-CN',
    'randomMac': '66:9E:27:20:DC:E4',
    'deviceId': '383d60ee-321f-4270-8876-4313dfa6de46',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://liuyan.people.com.cn',
    'Referer': 'https://liuyan.people.com.cn/threads/list?fid=5050',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'token': '',
    # 'Cookie': '__jsluid_s=c45e8bc71d2ae80a7e3b9d28886c2907; language=zh-CN; randomMac=66:9E:27:20:DC:E4; deviceId=383d60ee-321f-4270-8876-4313dfa6de46',
}

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call("get_sign")
pprint(params)

json_data = params

response = requests.post('https://liuyan.people.com.cn/v1/threads/list/bw', cookies=cookies, headers=headers, json=json_data)
pprint(response.json())