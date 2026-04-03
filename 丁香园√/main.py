from pprint import pprint
import execjs
import requests

cookies = {
    'Hm_lvt_5fee00bcc4c092fe5331cc51446d8be2': '1773121214',
    '_ga': 'GA1.2.1429624368.1773121299',
    '_gid': 'GA1.2.465579809.1773121299',
    '_ga_C1KRQPKH2N': 'GS2.2.s1773121299$o1$g1$t1773121381$j60$l0$h0',
    'JUTE_SESSION_ID': 'e5b4e1bc-95a3-43ef-af25-02f3a8ed2031',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'origin': 'https://www.dxy.cn',
    'priority': 'u=1, i',
    'referer': 'https://www.dxy.cn/',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'web-grey-flag': '1',
    # 'cookie': 'Hm_lvt_5fee00bcc4c092fe5331cc51446d8be2=1773121214; _ga=GA1.2.1429624368.1773121299; _gid=GA1.2.465579809.1773121299; _ga_C1KRQPKH2N=GS2.2.s1773121299$o1$g1$t1773121381$j60$l0$h0; JUTE_SESSION_ID=e5b4e1bc-95a3-43ef-af25-02f3a8ed2031',
}

params = {
    'cursor': 'AoJ4iIPr6ZwDKDUyOTk1MTI5',
    'source': '1',
    'pageSize': '10',
}

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call("get_sign")
pprint(params)

response = requests.get('https://bbsapi.dxy.cn/pc/case-bank/post/page', params=params, cookies=cookies, headers=headers)
pprint(response.json())