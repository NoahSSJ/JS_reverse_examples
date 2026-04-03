from pprint import pprint
import execjs
import requests

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    # 'f2013607451f2befefc9': '69d148d2661f1b17d7a1b7e7fb88236ac44d4aee07acd808f902e41276b0714f59448342dbe718f3281482d5e9c094487113b4a0bae880a4c8dbc552a1e5d951',
    'origin': 'https://www.qcc.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.qcc.com/web/search?key=%E8%85%BE%E8%AE%AF',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    # 'x-pid': 'ca8cc2d3f873fff39e7e2750309833f7',
    'x-requested-with': 'XMLHttpRequest',
    'cookie': 'qcc_did=762b5c19-2174-4786-84c4-5d8e33adb3bc; _c_WBKFRo=eK7YPaHBDACkeN3yyHiRUZhQQcpRARcqdy9jDigP; UM_distinctid=19cb83ef08817e6-04c3ea17bc1422-4c657b58-280000-19cb83ef08935a0; CNZZDATA1254842228=1327590736-1772617659-%7C1772808353; QCCSESSID=0ec10d18764bbdb09bf9e1ec7f; acw_tc=76b20f7c17751438963436176e3e19fb1fd2e85cfe56221efe3110f1391e28',
}


json_data = {
    'keynos': [
        'f1c5372005e04ba99175d5fd3db7b8fc',
        '181e23a3c35a6fc18450f03cc13bb03b',
        'f6b2374c55c93885b68165edc1b96789',
        'b67164361bf488390fbd5ee5f3f13f9d',
        '7ecedd2a89a50b859304a7e9cce6567a',
        '9eb33b02e2d990dad4215bb67156df92',
        '9a472c1948c31d5ac22688f9b30956bc',
        'c6c37d9094ba68ad85c1b7b7f1c48812',
        'b7ceadc0cd6772eef9b9748959f40416',
        '5af25a6752673268f55a1529ceedcb24',
        '24dadb835fb99ff53ebf5fbf0c38f7f1',
        '201cb0072d97720c6da23acd4aae9115',
        'f4e7ba98f0feb7cc0d1f94402cc1fad6',
        '48ceae4432570bd0d9bd6d50a6c2dd78',
        '6bd3b077953ff9a97ea441b7e2e45a01',
        '2e9108b393963450766c28d4744ba077',
        '61d0e1372252852d376b63a1fcff9812',
        'a3c0065cb13029cda68a6107446635f8',
        'd167ad0bf8532d84a2e89754e3b1949c',
        '9d19a1b84618fb52cd11fcbffc301fc2',
    ],
}




url = "/api/user/getUserCompanyInfo"

# 其他接口也是类似思路，但是需要根据实际情况修改a.js，加密逻辑都是相同的，只不过要抓包打断点改一下少许代码。

with open('a.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)   
final = ctx.call('get_final', url, json_data)
pprint(final)
headers.update(final)



response = requests.post(url="https://www.qcc.com" + url, headers=headers, json=json_data)

pprint(response.json())