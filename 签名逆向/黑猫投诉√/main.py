import json
from pprint import pprint
import requests
import execjs

cookies = {
    'SUB': '_2AkMeJSSzf8NxqwFRmv0RxGrnZIVxwg3EieKoedVoJRMyHRl-yD9kqnAGtRB6NaUKXHdZZViYv1KfXvRqzX19ZhDZDazC',
    'SUBP': '0033WrSXqPxfM72-Ws9jqgMF55529P9D9WWpTT1pu-guHhvH522Pj1KX',
    'UOR': 'www.bing.com,finance.sina.com.cn,',
    'SINAGLOBAL': '183.208.107.49_1770116312.779572',
    'HM-AMT': '%7B%22amt%22%3A33105232%2C%22amt24h%22%3A8565%2C%22v%22%3A%222.3.187%22%2C%22vPcJs%22%3A%221.6.87%22%2C%22vPcCss%22%3A%221.2.399%22%7D',
    'ULV': '1771261920389:3:3:1::1770116645254',
    'Apache': '183.208.104.234_1771261920.645024',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'priority': 'u=1, i',
    'referer': 'https://tousu.sina.com.cn/',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'SUB=_2AkMeJSSzf8NxqwFRmv0RxGrnZIVxwg3EieKoedVoJRMyHRl-yD9kqnAGtRB6NaUKXHdZZViYv1KfXvRqzX19ZhDZDazC; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WWpTT1pu-guHhvH522Pj1KX; UOR=www.bing.com,finance.sina.com.cn,; SINAGLOBAL=183.208.107.49_1770116312.779572; HM-AMT=%7B%22amt%22%3A33105232%2C%22amt24h%22%3A8565%2C%22v%22%3A%222.3.187%22%2C%22vPcJs%22%3A%221.6.87%22%2C%22vPcCss%22%3A%221.2.399%22%7D; ULV=1771261920389:3:3:1::1770116645254; Apache=183.208.104.234_1771261920.645024',
}

params = {
    # 'ts': '1771261920376',
    # 'rs': 'XOWuBjwgTC0NLJgL',
    # 'signature': '20b4055332161c711e3db7bc62c6f66aebad56817df8281d7281b2bed5e20dd2',
    'type': '1',
    'page_size': '10',
    'page': '1',
}

with open("sign.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
url = ctx.call("get_url")
response = requests.get(url=url, params=params, cookies=cookies, headers=headers)
json_str = response.text
json_dict = json.loads(json_str)
pprint(json_dict)