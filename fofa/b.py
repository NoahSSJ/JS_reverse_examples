from pprint import pprint

import requests

cookies = {
    '_ga': 'GA1.1.1701234347.1772360796',
    'Hm_cv_4275507ba9b9ea6b942c7a3f7c66da90': '1*uid*100795738!1*level*11',
    'Hm_lvt_4275507ba9b9ea6b942c7a3f7c66da90': '1772511711,1772587713,1772632653,1772634035',
    '_ga_9GWBD260K9': 'GS2.1.s1772632653$o19$g1$t1772634314$j32$l0$h0',
    '__fcd': 'BKLDMAEKKQNFWZWV7BEAE9AE2581002D',
    'acw_tc': '2760820c17747911380546973e5ab7f3ef9bf6013881ca99b8e8d3ab96fab7',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://fofa.info',
    'Pragma': 'no-cache',
    'Referer': 'https://fofa.info/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'authorization': 'eyJhbGciOiJIUzUxMiIsImtpZCI6Ik5XWTVZakF4TVRkalltSTJNRFZsWXpRM05EWXdaakF3TURVMlkyWTNZemd3TUdRd1pUTmpZUT09IiwidHlwIjoiSldUIn0.eyJpZCI6MTIwOTk3MywibWlkIjoxMDA3OTU3MzgsInVzZXJuYW1lIjoic3l1QSIsInBhcmVudF9pZCI6MCwiZXhwIjoxNzc0OTIxMTE3fQ.oxkb4LVvedAOQhAFzYjA-RYiiUMzfL93L7Qi-7MaOjeYJOSeAI57Ak2tVsXy-CRC36lxmQR1jKAbAObZnzA0cg',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': '_ga=GA1.1.1701234347.1772360796; Hm_cv_4275507ba9b9ea6b942c7a3f7c66da90=1*uid*100795738!1*level*11; Hm_lvt_4275507ba9b9ea6b942c7a3f7c66da90=1772511711,1772587713,1772632653,1772634035; _ga_9GWBD260K9=GS2.1.s1772632653$o19$g1$t1772634314$j32$l0$h0; __fcd=BKLDMAEKKQNFWZWV7BEAE9AE2581002D; acw_tc=2760820c17747911380546973e5ab7f3ef9bf6013881ca99b8e8d3ab96fab7',
}

params = {
'app_id': '9e9fb94330d97833acfbc041ee1a76793f1bc691',
 'filter_type': 'last_year',
 'lang': 'zh-CN',
 'page': 2,
 'qbase64': '5rOo5YaM',
 'sign': 'SMTsY22aQvRF95iKMDcL3wPuNucG7ojaB3Z0TnrCTmtyfdf3hVvkgoO6MBvwDjrbZgSjcrfqVscBAFErkTXDNiNbG9G4Ue9mEjx/0eplz7O1aO3NY1eM1p7E5tTxIlvF9g8QNmDij8WPtCIxTf9pvmKJb8ZHwJL9tGzWuWezwDDl1id0enzeBzKafIEQhYZh5tm6QwXuweDO7jcMhEt025dY0aXmnAcV7dC25zllNBC9ZDB4rXWqbRSm20QF3FbtC2E5prsfEMa3KDncZ0nab4oYtVoWOD+gnOoasqXcdqI14FQjvsuSqn2Y1YYLbpik9e5qwN3hZgLXLcLBMq5eyQ==',
 'size': 10,
 'ts': 1774792730604
}

response = requests.get(
    'https://api.fofa.info/v1/search',
   params=params,
    headers=headers,
)

pprint(response.json())