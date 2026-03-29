from pprint import pprint
import requests
import execjs

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.swguancha.com',
    'Referer': 'https://www.swguancha.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0',
    'deviceType': '1',
    'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'size': 6,
    'current': 1,
    'propertyCode': [
        'DISTRICT_PROP_GJ025_RJDQSCZZ',
        'DISTRICT_PROP_GJ117_NMSYGGQDCYYCLS',
        'DISTRICT_PROP_GJ001_NMHJRK',
    ],
    'dimensionTime': '2019',
    'levelType': 2,
}

response = requests.post('https://app.swguancha.com/client/v1/cPublic/consumer/baseInfo', headers=headers, json=json_data)

# print(response.text)
with open('sign.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
result = ctx.call('decrypt', response.text)
pprint(result)