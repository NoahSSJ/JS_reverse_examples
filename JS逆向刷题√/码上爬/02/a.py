import requests
from pprint import pprint


nums = 0

def get_nums():
    global nums
    page = 1
    while True:
        if page > 20:
            print(nums)
            break
        headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'priority': 'u=1, i',
            'referer': f'https://www.mashangpa.com/problem-detail/{page}/',
            'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
            'cookie': 'sessionid=03znztu07kxsrknbojhzdnz5ipp9a9uy',
        }

        params = {
            'page': f'{page}',
        }

        response = requests.get('https://www.mashangpa.com/api/problem-detail/2/data/', params=params, headers=headers)
        # pprint(response.json())
        for i in response.json()['current_array']:
            nums += i
        page += 1

get_nums()