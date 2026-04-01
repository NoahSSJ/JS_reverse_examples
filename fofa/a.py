import requests
from pprint import pprint
import execjs

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://fofa.info',
    'Pragma': 'no-cache',
    'Referer': 'https://fofa.info/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'authorization': 'eyJhbGciOiJIUzUxMiIsImtpZCI6Ik5XWTVZakF4TVRkalltSTJNRFZsWXpRM05EWXdaakF3TURVMlkyWTNZemd3TUdRd1pUTmpZUT09IiwidHlwIjoiSldUIn0.eyJpZCI6MTIwOTk3MywibWlkIjoxMDA3OTU3MzgsInVzZXJuYW1lIjoic3l1QSIsInBhcmVudF9pZCI6MCwiZXhwIjoxNzc0OTIxMTE3fQ.oxkb4LVvedAOQhAFzYjA-RYiiUMzfL93L7Qi-7MaOjeYJOSeAI57Ak2tVsXy-CRC36lxmQR1jKAbAObZnzA0cg',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': '_ga=GA1.1.1701234347.1772360796; Hm_cv_4275507ba9b9ea6b942c7a3f7c66da90=1*uid*100795738!1*level*11; Hm_lvt_4275507ba9b9ea6b942c7a3f7c66da90=1772511711,1772587713,1772632653,1772634035; _ga_9GWBD260K9=GS2.1.s1772632653$o19$g1$t1772634314$j32$l0$h0; __fcd=BKLDMAEKKQNFWZWV7BEAE9AE2581002D; acw_tc=2760820c17747911380546973e5ab7f3ef9bf6013881ca99b8e8d3ab96fab7',
}
a = {
    "qbase64": "5rOo5YaM",
    "filter_type": "last_year"
}
# 传给 JS 的基础参数（不需要传 page、size、app_id、ts）
with open("a.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('To', a)
pprint(params)


response = requests.get(
    'https://api.fofa.info/v1/search',
    params=params,
    headers=headers,
)

pprint(response.json())