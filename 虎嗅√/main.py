import requests

cookies = {
    'huxiu_analyzer_wcy_id': '2zyzjsdllop0whzy3i4',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.huxiu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.huxiu.com/',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    # 'cookie': 'huxiu_analyzer_wcy_id=2zyzjsdllop0whzy3i4',
}

data = {
    'platform': 'pc',
    's': '苹果',
    'page': '1',
    'pagesize': '20',
    'sort': '',
    'appid': 'hx_search_202303',
    'timestamp': '1775056863',
    'nonce': 'zYhvNtgF9XpVHpbd',
    'signature': 'ab6c507ac554b9ed18eb67a2d726cf622ddbd8fd',
}

response = requests.post('https://api-search.huxiu.com/api/article', cookies=cookies, headers=headers, data=data)