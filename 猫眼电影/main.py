import time
from pprint import pprint

import execjs
import requests

cookies = {
    '_lxsdk_cuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lxsdk': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    'uuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lxsdk_s': '19d49b61f11-a2f-4e7-499%7C%7C30',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'M-APPKEY': 'fe_com.sankuai.movie.fe.ipro',
    'M-TRACEID': '-2879532326378653452',
    'Pragma': 'no-cache',
    'Referer': 'https://piaofang.maoyan.com/i/dashboard/tv-viewing',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'mygsig': '{"m1":"0.0.3","m2":0,"m3":"0.0.67_tool","ms1":"ceeeb250c9bcd23b9047908e7de5595f","ts":1775058773506,"ts1":1775058757213}',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'uid': '410614145b789cf25880d4b7742abc9b6988de70',
    # 'Cookie': '_lxsdk_cuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lxsdk=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; uuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lxsdk_s=19d49b61f11-a2f-4e7-499%7C%7C30',
}

with open("a.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('getFinalQuery', 20260402)
pprint(params)



response = requests.get('https://piaofang.maoyan.com/i/api/dashboard/getTVData', params=params, cookies=cookies, headers=headers)
print(response.status_code)
print(response.text)
pprint(response.json())