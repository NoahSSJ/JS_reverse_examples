import requests
import execjs

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://www.36kr.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.36kr.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'Hm_lvt_1684191ccae0314c6254306a8333d090=1772858327; Hm_lvt_713123c60a0e86982326bae1a51083e1=1772858327; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219c251986821139-0355315fba5423a-4c657b58-2621440-19c251986832ce4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fcn.bing.com%2F%22%2C%22%24latest_referrer_host%22%3A%22cn.bing.com%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTljMjUxOTg2ODIxMTM5LTAzNTUzMTVmYmE1NDIzYS00YzY1N2I1OC0yNjIxNDQwLTE5YzI1MTk4NjgzMmNlNCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219c251986821139-0355315fba5423a-4c657b58-2621440-19c251986832ce4%22%7D',
}

with open("loader.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
json_data = ctx.call("get_params")



response = requests.post(
    'https://gateway.36kr.com/api/mus/login/byMobilePassword',
    headers=headers,
    json=json_data,
)

print(response.text)

