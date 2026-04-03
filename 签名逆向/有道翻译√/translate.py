import time
import requests

cookies = {
    'OUTFOX_SEARCH_USER_ID': '-1571578205@2409:8938:4d1a:cef0:44eb:ac6a:e3ec:9ab9',
    'OUTFOX_SEARCH_USER_ID_NCOO': '1875456335.9307241',
    'DICT_DOCTRANS_SESSION_ID': 'Y2IwYTg2M2MtZjc4ZS00OTgwLWI4MmUtNGYwMzJkMTUxOTQz',
    '_uetsid': 'be6bc5301a0411f1bf136fb682f4cf52',
    '_uetvid': '462c9d6008f211f1a0ad4fe8c8e2e341',
    '_uetmsclkid': '_uet3a9ae6ed0e2912d0a2f98f46e55d3e8a',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryFK77bzxtJ2nP5Gb2',
    'Origin': 'https://fanyi.youdao.com',
    'Referer': 'https://fanyi.youdao.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Microsoft Edge";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'OUTFOX_SEARCH_USER_ID=-1571578205@2409:8938:4d1a:cef0:44eb:ac6a:e3ec:9ab9; OUTFOX_SEARCH_USER_ID_NCOO=1875456335.9307241; DICT_DOCTRANS_SESSION_ID=Y2IwYTg2M2MtZjc4ZS00OTgwLWI4MmUtNGYwMzJkMTUxOTQz; _uetsid=be6bc5301a0411f1bf136fb682f4cf52; _uetvid=462c9d6008f211f1a0ad4fe8c8e2e341; _uetmsclkid=_uet3a9ae6ed0e2912d0a2f98f46e55d3e8a',
}

files = {
    'srcArticle': (None, '%E8%8B%B9%E6%9E%9C1234567890123'),
    'tgtArticle': (None, '1234567890123'),
    'from': (None, 'zh-CHS'),
    'to': (None, 'en'),
    'product': (None, 'webfanyi'),
    'appVersion': (None, '12.0.0'),
    'client': (None, 'webmain'),
    'mid': (None, '1'),
    'vendor': (None, 'web'),
    'screen': (None, '1'),
    'model': (None, '1'),
    'imei': (None, '1'),
    'network': (None, 'wifi'),
    'keyfrom': (None, 'webfanyi.webmain'),
    'keyid': (None, 'translate-webfanyi-webmain'),
    'mysticTime': (None, f'{int(time.time() * 1000)}'),
    'yduuid': (None, 'f4ecceee2e00c7476a33fda2d73a5bdb'),
    'abtest': (None, '0'),
    'signSecretKey': (None, 'BdCYRtHAJxO7yNm9RHwU2JiFISIk62Ts'),
    'keyId': (None, 'translate-webfanyi-webmain'),
    'token': (None, 'e1c90180b12b4bbbaf4083b8bcccd04f'),
    'source': (None, 'webmain'),
    'sign': (None, '1f10be6610a639f09192e242ddb6d897'),
    'pointParam': (None, 'abtest,appVersion,client,imei,keyId,keyfrom,keyid,mid,model,mysticTime,network,product,screen,signSecretKey,source,token,vendor,yduuid,key'),
}

response = requests.post('https://dict-trans.youdao.com/translate/enhance', cookies=cookies, headers=headers, files=files)
print(response.text)