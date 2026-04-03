from pprint import pprint
import time
import requests
import execjs



def get_nums():
    global num
    num = 0
    page = 1
    while True:
        if page > 20:
            print(num)
            break
        params = {
            "page": f"{page}",
        }

        headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://www.mashangpa.com/problem-detail/6/',
            'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
            'cookie': 'sessionid=03znztu07kxsrknbojhzdnz5ipp9a9uy',
        }
        with open("a.js", "r") as f:
            js = f.read()
        ctx = execjs.compile(js)
        s = ctx.call("s")
        pprint(s)
        headers.update(s)
        response = requests.get('https://www.mashangpa.com/api/problem-detail/6/data/', params=params, headers=headers)
        pprint(response.json())
        with open("a.js", "r") as f:
            js = f.read()
        ctx = execjs.compile(js)
        json_dict = ctx.call("decrypt", response.json()['t'])
        # pprint(response.json())
        for i in json_dict["current_array"]:
            num += i
        page += 1

get_nums()
