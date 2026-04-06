from pprint import pprint
from curl_cffi import requests
import execjs

cookies = {
    'JSESSIONID': '79A406873DC6B37D090353F264135420',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.chinawealth.com.cn',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'JSESSIONID=79A406873DC6B37D090353F264135420',
}

with open('a.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
p = ctx.call('get_params')


headers.update(p['headers'])
data = p['data']

pprint(headers)
pprint(data)

response = requests.post(
    'https://www.chinawealth.com.cn/lcw-fe-service/prod/search',
    cookies=cookies,
    headers=headers,
    json=data,
    impersonate='chrome124',
)
pprint(response.json())