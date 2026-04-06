import requests

cookies = {
    'SERVERID': 'cb748dedf22e487188afbf88b41fca1a|1775492949|1775492902',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'origin': 'https://www.up678.com',
    'platformid': '1',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.up678.com/school',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'terminalid': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    # 'cookie': 'SERVERID=cb748dedf22e487188afbf88b41fca1a|1775492949|1775492902',
}

data = {
    'keywords': '',
    'provinces': '',
    'type': '',
    'properties': '',
    'times': '',
    'yxts': '',
    'pageNo': '1',
    '_t': '1775492948700',
}

response = requests.post('https://www.up678.com/dataserver/school/list', cookies=cookies, headers=headers, data=data)
print(response.text)