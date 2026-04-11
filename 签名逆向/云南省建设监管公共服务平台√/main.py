import execjs
import requests
from pprint import pprint

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.ynjzjgcx.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.ynjzjgcx.com/mohurd/info-disclosure/0101',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'appId': '84ded2cd478642b2',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

with open('a.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('getParams')


json_data = {
    'params': 'ZSBDFOtF7fYiFkkcuxtPIGZiHNNP6Cjb+LCZJL9Qt1h4HkBUTgZXFJ9SBD3YIMrO5ZaCMSRSO9lpPOZK75Y2DhFX4+CiBGebydk6Zr2qCASh6fdhx/FUdAD7dPQ1o2A74J7/1oQ1KpyRnrgC4m9ZakTXFpwo3PddkE9Q5fWsq2g=,YDVyv6XoL4GtL6ol4RWKSNJg/BbTWYzguQaf4kLZZdIsnwXQu7Q+eLnaNZfBkB/wLqyfMqTiE1CRM+Z5D6DZ9U32eID86DclXxebFCmnQpy6jN+q+wCFRvQbUvFW9HRcJgCUks+uej4k1osLPQcKoNYVJO3JPrPQQJ+n+1/RK5c=',
}

response = requests.post(
    'https://www.ynjzjgcx.com/prod-api/mohurd-pub/dataServ/notice/findCommonNoticePageForFrontend',
    headers=headers,
    json=json_data,
)


pprint(response.json())