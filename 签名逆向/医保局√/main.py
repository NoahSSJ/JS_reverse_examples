import json
import requests
import execjs
from pprint import pprint

headers = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://fuwu.nhsa.gov.cn',
    'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'X-Tingyun': 'c=B|4Nl_NnGbjwY;x=ed2accc53ee34e82',
    'channel': 'web',
    'contentType': 'application/x-www-form-urlencoded',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'x-tif-nonce': 'i0EFZU8j',
    'x-tif-paasid': 'undefined',
    'x-tif-signature': '59d28b6a6d4f3cac244c5c9ff8fdfb675a554b69667168ec61ad897f5a32f6a2',
    'x-tif-timestamp': '1772697893',
    # 'Cookie': 'yb_header_active=-1; acw_tc=3ccdc17417726970637765178e2f03a276fee8ccc9e19bfcc93768aefb92b6',
}

with open('encrypt.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('get_params')
# pprint(params)
params = json.loads(params)
# json_data = {
#     'data': {
#         'data': {
#             'encData': '3DFBCA4667B978F639BB23B95DCE4CC74CE34C33DC32F1068E9E23CA546C9EA8CCD20943B4DAE96380B41164D761DE97BBBD5DB53EA5E7154071E74EF0BE481E2BADC2FDCC843E425B4CA14CEDBC102C5CA95AF1A0B55366FBB4BF19C448C4B664DE712DF3683DE81C358841664CBE17561D0390069F11B0D412FE38BE15BA5C',
#         },
#         'appCode': 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
#         'version': '1.0.0',
#         'encType': 'SM4',
#         'signType': 'SM2',
#         'timestamp': 1772697893,
#         'signData': 'K32YyzPOzMdDG0vbdM2HTsdT9BV9m5+H5xNOizI/AvMRNe6UexFlr/o/gSGeXLfSUfhQNIv3sIDftkKZO7tq2A==',
#     },
# }

response = requests.post(
    'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryRtalPhacBInfo',
    headers=headers,
    json=params,
)

# pprint(response.json())

with open("decrypt.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
resp = ctx.call("decrypt", response.json())
pprint(resp)
