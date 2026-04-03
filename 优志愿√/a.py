from pprint import pprint
from curl_cffi import requests

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://pv4y-pc.youzy.cn',
    'Referer': 'https://pv4y-pc.youzy.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'agent': 'objectId:;provinceId:;provinceCode:;userPermissionId:;score:0;',
    'deviceId': '4c0205282b29805cf1dbb39b22df2f69',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'u-sign': '2af5f5b9e6364fa6d6289142db2153f2',
    'u-token': '',
}

json_data = {
    'keyword': '南京大学',
    'provinceNames': [],
    'natureTypes': [],
    'eduLevel': '',
    'categories': [],
    'features': [],
    'pageIndex': 1,
    'pageSize': 20,
    'sort': 11,
}



response = requests.post(
    'https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query',
    headers=headers,
    json=json_data,
    impersonate="chrome124"
)

pprint(response.json())

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"keyword":"南京大学","provinceNames":[],"natureTypes":[],"eduLevel":"","categories":[],"features":[],"pageIndex":1,"pageSize":20,"sort":11}'.encode()
#response = requests.post('https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query', headers=headers, data=data)