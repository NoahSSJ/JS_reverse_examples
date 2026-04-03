import execjs
import requests
from pprint import pprint

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'cccllpptttgt': '613341e851243e3d9c1cae570aa9084f',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://www.aigei.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.aigei.com/sound/class/',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'x-requested-etag': '+wpJ9Q6o0LV5upZFPKx6lu74U1/KQL24S2tsIiNKBk7Ps5ScWo376cKDkvWxfLlZRituj9/YO8fLQBwtcjCuEG7RFdbLho71nWaZdcc/xkgembA3sjyQAmMlMOMNllf3VR/9bs62/b8=',
    'x-requested-with': 'XMLHttpRequest',
    'cookie': 'gei_d_u=6e3ffcd701c545f2adbe6f3f492b2274; oOO0OO0oOO00oo0o=true; Hm_lvt_0e0ebfc9c3bdbfdcaa48ccbc43e864f9=1768729482; OooOO000oOOO00o=3e724cc2cf96448d91d1ca820beafa94; gei_d_1=d9e38d327d1093e89873f295c41e92a588a99e49071acb043d4a1849d0387f66d0d413351a6ceec59eafcfe84d61af8ea6c8f6589cc077911e803d6241de9c38; hhhssi1ill1i=45ebf95cee5601f6815b5e59ea5c63f1; wueiornjk234kj=60b7bdc0af7a497cbf2c8167fbecd547; SESSION=b18ad446-b187-4d76-abdf-0a93235d5de6; SERVERID=8e6d20fd2c760c1a50e8e9f62a2811e6|1774764217|1774758651',
}

data = {
    'v': 'WMZ0h+I5D+BDGNGSjYO4OeYV3KERp+WD1Z7KZzvwXRBhAkpTPLfq12045e67doJEgfn+Y6P0ocdruoCiPbO8cjzfo1LOaFQNYdOhQbQZkT2u9CxeEZ9laImN5Vw+44X3zbNqkQX6W7skG/CArxSc0eluZK7Fn1L3xpYskf1KlDsG0iFaP5v6MVW1MBkVlM2Po8nbIpXO0ZqcnvC16yIZYz2mW3GR62K2c+3FWiYj4WndJ+V1LtKDk9Ktz+7cCIBxBvd+Vr3KuOn5CX64u9Zs9Yk0kRZGffznvEKqTfTTpoEmYwFBNgDDEtNrdgsBYBuYn/D2O9cIIAbV9DzceYsVhUuJ2qGTYMMhB',
}

with open("etag.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
l = ctx.call('get_etag_and_v')
etag = l[0]
v = l[1]
headers['x-requested-etag'] = etag
data['v'] = v




response = requests.post('https://www.aigei.com/f/d', headers=headers, data=data)
pprint(response.text)