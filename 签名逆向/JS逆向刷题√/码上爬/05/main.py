from pprint import pprint
import requests
import execjs

cookies = {
    'sessionid': '03znztu07kxsrknbojhzdnz5ipp9a9uy',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://www.mashangpa.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.mashangpa.com/problem-detail/5/',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    # 'cookie': 'sessionid=03znztu07kxsrknbojhzdnz5ipp9a9uy',
}

json_data = {
    'xl': 'f81e027047aae3f99858f19e1d8045c1de01166bcc0255ab7e3f34c911174607',
}

response = requests.post('https://www.mashangpa.com/api/problem-detail/5/data/', cookies=cookies, headers=headers, json=json_data)
def get_nums():
    global num
    num = 0
    page = 1
    while True:
        if page > 20:
            print(num)
            break
        with open("a.js", "r") as f:
            js = f.read()
        ctx = execjs.compile(js)
        params = ctx.call("loadPage", page)
        response = requests.get('https://www.mashangpa.com/api/problem-detail/4/data/', params=params, cookies=cookies, headers=headers)
        # pprint(response.json())
        for i in response.json()["current_array"]:
            num += i
        page += 1

get_nums()
