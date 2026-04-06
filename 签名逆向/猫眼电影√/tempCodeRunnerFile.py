import time
from pprint import pprint
import execjs
import requests


import uuid

def traceid():
    try:
        # 1. 生成 uuid v1，去掉所有 -
        e = uuid.uuid1().hex  # 直接生成32位无横线uuid

        # 2. 切成前16位 + 后16位
        t = e[:16]
        r = e[16:]

        # 3. 核心异或逻辑（倒序）
        n = []
        for i in range(16):
            # 取 t 和 r 倒数第 i+1 位
            t_char = t[15 - i]
            r_char = r[15 - i]

            # 转16进制 → 异或 → 转回16进制字符
            xor_val = int(t_char, 16) ^ int(r_char, 16)
            n.append(hex(xor_val)[2:])  # [2:] 去掉 0x 前缀

        n = "".join(n)

        # 4. 16进制字符串 → 十进制数字
        return str(int(n, 16))

    except Exception:
        return ""


headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'm-appkey': 'fe_com.sankuai.movie.fe.ipro',
    'm-traceid': traceid(),
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
    "cookie":'_lxsdk_cuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; uuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lxsdk=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lx_utm=utm_source%3Dbing%26utm_medium%3Dorganic; _lxsdk_s=19d62fb02c9-aef-420-3a1%7C%7C2'
}

# 执行 JS 获取参数（已修复签名、顺序、时间戳）
with open("sign.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
params = ctx.call('get_params')
print("=== 生成的参数 ===")
pprint(params)
params['path'] = "/i/api/dashboard-ajax"

with open("Mygsig.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
mygsig = ctx.call('get_mygsig', params)
headers['mygsig'] = mygsig
pprint(headers)
# 发送请求
response = requests.get(
    'https://piaofang.maoyan.com/i/api/dashboard-ajax',
    params=params,
    headers=headers
)

print("\n状态码:", response.status_code)

if response.status_code == 200:
    print("成功！返回数据：")
    pprint(response.json())
else:
    print("返回内容：")
    print(response.text)
