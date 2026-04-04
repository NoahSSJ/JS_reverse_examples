import execjs
import requests
from pprint import pprint

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiIxMDAwIiwiaXNzIjoia2FvZ3VqaWEuY29tIiwianRpIjoiOTFjYWI5OTgyN2U2NGU1ZDhmMWY3OGJjMjI1MGQxY2MiLCJzaWQiOjg5MjU0ODEsImlhdCI6MTc3NDc3ODk1NSwiZXhwIjoxNzc1MzgzNzU1LCJid2UiOjAsInR5cCI6MSwicF9id2UiOjB9.IL3tw4PfhZu6ifoSnQkYLESpt9VF3DoykDq70NhQiKaxYkAkUCXtP6sIn9WkZfjuSlVuid2JyTcmkSZfu0OBbg',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://www.kaogujia.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.kaogujia.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'version_code': '3.1',
    'x-common': 'x-device=36b3fd3d6ce1d76c6108747f3cea494b',
}

params = {
    'limit': '50',
    'page': '1',
    'sort_field': 'gmv',
    'sort': '0',
}

json_data = {
    'keyword': '',
    'author_type': 0,
}

response = requests.post('https://service.kaogujia.com/api/author/search', params=params, headers=headers, json=json_data)
# pprint(response.json())
data = response.json()['data']
with open('a.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
res = ctx.call('decrypt', '/api/author/search', data)
pprint(res)
