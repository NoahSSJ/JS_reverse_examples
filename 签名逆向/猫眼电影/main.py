import time
from pprint import pprint
import execjs
import requests

# 必须带上完整 Cookie！！！
cookies = {
    '_lxsdk_cuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lxsdk': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    'uuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lx_utm': 'utm_source=bing&utm_medium=organic',
    '_lxsdk_s': '19d58c46079-a3f-0f9-dae||5',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'm-appkey': 'fe_com.sankuai.movie.fe.ipro',
    'm-traceid': '-8104728895594131948',
    'mygsig': '{"m1":"0.0.3","m2":0,"m3":"0.0.67_tool","ms1":"b86c5dd03b2809ffabd9ff19e5c34a9b","ts":1775310877247,"ts1":1775310877212}',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://piaofang.maoyan.com/dashboard',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'uid': '410614145b789cf25880d4b7742abc9b6988de70',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
}

# 执行 JS 获取参数（已修复签名、顺序、时间戳）
with open("sign.js", encoding='utf-8') as f:
    ctx = execjs.compile(f.read())

params = ctx.call('get_params')
print("=== 生成的参数 ===")
pprint(params)

# 发送请求
response = requests.get(
    'https://piaofang.maoyan.com/i/api/dashboard-ajax',
    params=params,
    headers=headers,
    cookies=cookies
)

print("\n状态码:", response.status_code)

if response.status_code == 200:
    print("成功！返回数据：")
    pprint(response.json())
else:
    print("返回内容：")
    print(response.text)