import uuid
import requests
import execjs
from urllib.parse import urlencode

def traceid():
    try:
        e = uuid.uuid1().hex
        t = e[:16]
        r = e[16:]
        n = []
        for i in range(16):
            t_char = t[15 - i]
            r_char = r[15 - i]
            xor_val = int(t_char, 16) ^ int(r_char, 16)
            n.append(hex(xor_val)[2:])
        n = "".join(n)
        return str(int(n, 16))
    except Exception:
        return ""

# ==========================
# 请求头
# ==========================
headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'm-appkey': 'fe_com.sankuai.movie.fe.ipro',
    'm-traceid': traceid(),
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
    "cookie": '_lxsdk_cuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; uuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lxsdk=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lx_utm=utm_source%3Dbing%26utm_medium%3Dorganic; _lxsdk_s=19d62fb02c9-aef-420-3a1%7C%7C2'
}

# ==========================
# 1. 获取参数
# ==========================
with open("sign.js", encoding='utf-8') as f:
    ctx = execjs.compile(f.read())
params = ctx.call('get_params')

# ==========================
# 2. 【关键】所有参数转字符串（你之前是数字，必403）
# ==========================
params = {k: str(v) for k, v in params.items()}

# ==========================
# 3. 生成 mygsig：需要加 path
# ==========================
params['path'] = "/i/api/dashboard-ajax"

with open("Mygsig.js", encoding='utf-8') as f:
    ctx = execjs.compile(f.read())
mygsig = ctx.call('get_mygsig', params)
headers['mygsig'] = mygsig

# ==========================
# 4. 发请求前：删掉 path
# ==========================
del params['path']

# ==========================
# 5. 【超级关键】禁止 requests 自动排序！
# ==========================
url = 'https://piaofang.maoyan.com/i/api/dashboard-ajax?' + urlencode(params)

# ==========================
# 发送请求
# ==========================
response = requests.get(url, headers=headers)

print("状态码:", response.status_code)
print(response.text)