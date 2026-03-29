import requests
import execjs
from pprint import pprint

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
enc_key = ctx.call("getResCode")
print(enc_key)

headers = {
    'Accept': '*/*',
    'Accept-EncKey': enc_key,
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://webapi.cninfo.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://webapi.cninfo.com.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'MALLSSID=3434595267756975694330657A5251514F767837636D57376F51577A4C444A5168517A5A484F596A7A6E3276796B503351466A3272796638624349556D797131',
}
pprint(headers)


data = {
    'tdate': '2026-03-26',
    'market': 'SZE',
}

response = requests.post('https://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007', headers=headers, data=data)
pprint(response.json())