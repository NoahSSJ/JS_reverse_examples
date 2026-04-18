from pprint import pprint
import execjs
import requests

headers = {
    # 'X-Dgi-Req-Signature': 'fc63d7d0aedadb032e2a876333c77af861a1536f5358a20803d4b70c647095af',
    # 'sec-ch-ua-platform': '"Windows"',
    # 'Referer': 'https://ygp.gdzwfw.gov.cn/',
    # 'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    # 'sec-ch-ua-mobile': '?0',
    # 'X-Dgi-Req-App': 'ggzy-portal',
    # 'X-Dgi-Req-Timestamp': '1776496301808',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    # 'Accept': 'application/json, text/plain, */*',
    # 'Content-Type': 'application/json',
    # 'X-Dgi-Req-Nonce': 'Gz5FL3ViaRNGZ6Ml',
}

json_data = {
    'type': 'trading-type',
    'openConvert': False,
    'keyword': '',
    'siteCode': '44',
    'secondType': 'A',
    'tradingProcess': '',
    'thirdType': '[]',
    'projectType': '',
    'publishStartTime': '',
    'publishEndTime': '',
    'pageNo': 1000,
    'pageSize': 10,
}

# with open("sign.js", mode="r", encoding="utf-8") as f:
#     js_code = f.read()
# ctx = execjs.compile(js_code)
# sign = ctx.call("get_sign", json_data)
# headers['X-Dgi-Req-Signature'] = sign

response = requests.post('https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items', headers=headers, json=json_data)
pprint(response.json())

