from pprint import pprint
import requests
import execjs

cookies = {
    'JSESSIONID': 'JSESSIONID=79EFB2FB7B9C40C9AEB7DFF5C3533C52'
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
    # 'Cookie': 'JSESSIONID=984397D81432825AA37F81A3B695463B',
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
)
pprint(response.json())