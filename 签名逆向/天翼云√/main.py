from pprint import pprint
import execjs
import requests

with open("h.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
h = ctx.call("get_headers")
pprint(h)

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://m.ctyun.cn',
    'Referer': 'https://m.ctyun.cn/wap/main/auth/login',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'Hm_lvt_4b4ce93f1c92033213556e55cb65769f=1773121051; sid1=1773293293900-3EDBB6684A103DBDE46A9AA204B46F23; sid2=1773293293900-3EDBB6684A103DBDE46A9AA204B46F23; pvid=1',
}

headers.update(h)


params = {
    "referrer": "wap"
}

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call("get_params", params)


# params = {
#     'referrer': 'wap',
#     'mainVersion': '300031500',
#     'comParam_curTime': '1773293305211',
#     'comParam_seqCode': '6721A2CFBBBE7F2F011067594B7F44A7',
#     'comParam_signature': '9df64249488d8361367b44b91b17d378',
#     'isCheck': 'true',
#     'locale': 'zh-cn',
# }

data = {
    'userName': 'szgdgzdfhs@163.com',
    'password': 'e/j0f/1iqG2oTnZtJgTRUA==',
}

response = requests.post('https://m.ctyun.cn/account/login', params=params, headers=headers, data=data)
pprint(response.json())