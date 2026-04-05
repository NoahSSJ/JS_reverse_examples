import execjs
import requests

headers = {
    'sec-ch-ua-platform': '"Windows"',
    'Referer': 'https://credit.hd.gov.cn/xyxxgs/',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'Accept': 'application/json, text/plain, */*',
    'x-gateway-body': 'blob',
    'C-GATEWAY-QUERY-ENCRYPT': '1',
}

with open('a.js', encoding='utf-8') as f:
    ctx = execjs.compile(f.read())

params = ctx.call('get_Params')

response = requests.get(
    'https://credit.hd.gov.cn/zx_website/website/sgs/xzxkfr',
    headers=headers,
    params=params
)

