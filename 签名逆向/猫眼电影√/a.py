import requests

cookies = {
    '_lxsdk_cuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    'uuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lxsdk': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    '_lx_utm': 'utm_source%3Dbing%26utm_medium%3Dorganic',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'M-APPKEY': 'fe_com.sankuai.movie.fe.ipro',
    'M-TRACEID': '131485815578951914',
    'Pragma': 'no-cache',
    'Referer': 'https://piaofang.maoyan.com/dashboard',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'mygsig': '{"m1":"0.0.3","m2":0,"m3":"0.0.67_tool","ms1":"4433aa4d10af16c0bd5c9ea87d02c214","ts":1775485195443,"ts1":1775482113084}',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'uid': '410614145b789cf25880d4b7742abc9b6988de70',
    # 'Cookie': '_lxsdk_cuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; uuid=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lxsdk=19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8; _lx_utm=utm_source%3Dbing%26utm_medium%3Dorganic',
}

params = {
    'orderType': '0',
    'uuid': '19d49b61f10c8-0918b2735d039d-4c657b58-280000-19d49b61f10c8',
    'timeStamp': '1775484997070',
    'User-Agent': 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzE0Ni4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xNDYuMC4wLjA=',
    'index': '681',
    'channelId': '40009',
    'sVersion': '2',
    'signKey': '7154d6e49ce115c10805dfd34ca16de9',
    'WuKongReady': 'h5',
}

response = requests.get('https://piaofang.maoyan.com/i/api/dashboard-ajax', params=params, cookies=cookies, headers=headers)
print(response.text)