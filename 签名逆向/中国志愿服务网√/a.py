from pprint import pprint
import execjs
import requests

cookies = {
    'SF_cookie_135': '42503913',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://chinavolunteer.mca.gov.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://chinavolunteer.mca.gov.cn/site/project',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'ip': '39.144.169.172',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'token': '',
    # 'Cookie': 'SF_cookie_135=42503913',
}

t = {
    "pageNum": 7,
    "pageSize": 12,
    "itemtag": "",
    "itemcategory": "",
    "albx0072": "4",
    "albx0072A": None,
    "albx0024": "",
    "albx0004": "",
    "albx0005": "",
    "albx0013": "",
    "albx0021": "000000000000000000",
    "albx0014": "",
    "albx0002": "",
    "albx0009": "",
    "code": "4"
}

with open('a.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
data = ctx.call('get_data', t)
pprint(data)
# data = {
#     'bean': '{"encryData":"OcHFYXejyLiV0lEXIUxT5Y02gcZVV10PPHc7Bt+2IKn9vj4loJroIIO1G1KNY0+LG8ZXkdsy3w4h/pbxrRm5XLOhzSHWGB0AbcEbVlySjMkPcLqxcNjKeAYEUn5yEF5FNtHG9hm7FdrJJuDOc/SIRueOzXJU3kE3Ohc0xX1Z5auhpPkoPsmmrE8B6ldocnASkr16IX4Zw8kbqsZxC+Wm2p+LL9E2ex/2/GaWVeMSr89iC+8RrG8GVNSGFR+YzkpGAJeGJw9JZLEvKN9hPdRJtHHob0so4HHjCU1yuJZ5yA6DMQSoBvWLS3BHFaWvTkSI"}',
# }

response = requests.post(
    'https://chinavolunteer.mca.gov.cn/nvsidfapis/NVSIDF/restservices/webapi/listProjectsFortisWeb/query',
    cookies=cookies,
    headers=headers,
    data=data,
)
print(response.text)