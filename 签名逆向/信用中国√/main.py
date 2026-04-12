import execjs
import requests

# 请求头
headers = {
    'sec-ch-ua-platform': '"Windows"',
    'Referer': 'https://credit.hd.gov.cn/xyxxgs/',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'application/json, text/plain, */*',
    'x-gateway-body': 'blob',
    'C-GATEWAY-QUERY-ENCRYPT': '1',
}

# 1. 加载你的参数生成 JS
with open('a.js', encoding='utf-8') as f:
    ctx_params = execjs.compile(f.read())
params = ctx_params.call('get_Params')

# 2. 获取加密二进制数据
response = requests.get(
    'https://credit.hd.gov.cn/zx_website/website/sgs/xzxkfr',
    headers=headers,
    params=params
)
