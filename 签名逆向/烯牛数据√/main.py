from pprint import pprint
import execjs
import requests

cookies = {
    'satoken': '4b60a7ee-a10e-4d31-a96d-35a54530c7ac',
    'username': 'MNB',
}

headers = {
    'accept': '*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://vip.xiniudata.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://vip.xiniudata.com/lib2/investor?p_menu=340',
    'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    # 'cookie': 'satoken=4b60a7ee-a10e-4d31-a96d-35a54530c7ac; username=MNB',
}

n = "腾讯"

with open('main.js', mode='r', encoding='utf-8') as f:
    js_code =  f.read()
ctx = execjs.compile(js_code)
json_data = ctx.call("get_params", n)
print(json_data)
response = requests.post(
    'https://vip.xiniudata.com/api/vip/library/v3/list_data',
    cookies=cookies,
    headers=headers,
    json=json_data,
)

# print(response.text)


# pprint(response.json())
with open('main.js', mode='r', encoding='utf-8') as f:
    js_code =  f.read()
ctx = execjs.compile(js_code)
decrypt_text = ctx.call("decrypt", response.json()['d'])
pprint(decrypt_text)
