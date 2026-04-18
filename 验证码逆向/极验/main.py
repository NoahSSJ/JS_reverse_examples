from pprint import pprint
import re
import requests




def get_load():
    headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.geetest.com/',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'captcha_v4_user=b03f13a15edc4db4935b7538f0dbe458; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%7D%2C%22%24device_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%7D; Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4=1773029117; language=zh',
    }

    params = {
        'callback': 'geetest_1776515704958',
        'captcha_id': 'ca5f707069116185f554374bba6e3b55',
        'client_type': 'web',
        'pt': '1',
        'lang': 'zho',
    }

    response = requests.get('https://gcaptcha4.geetest.com/load', params=params, headers=headers)
    print(response.text)



def verify():
    cookies = {
        'captcha_v4_user': 'b03f13a15edc4db4935b7538f0dbe458',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%7D%2C%22%24device_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%7D',
        'Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4': '1773029117',
        'language': 'zh',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
        'sec-ch-ua': '"Microsoft Edge";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'captcha_v4_user=b03f13a15edc4db4935b7538f0dbe458; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%7D%2C%22%24device_id%22%3A%2219cd0c54c4d2975-0debfbc937d5dc-4c657b58-2621440-19cd0c54c4e31ab%22%7D; Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4=1773029117; language=zh',
    }

    params = {
        'callback': 'geetest_1776516552171',
        'captcha_id': 'ca5f707069116185f554374bba6e3b55',
        'client_type': 'web',
        'lot_number': 'a568bb12e7d341bcb2d2fd8204d018b9',
        'payload': 'AgFD8gWUUuHFx-XvpP7J2bsbAtLJV397fkL4gT-R5FAxVpk0NMVs4KQPfm2bT3TY2_Wdn00Qkwgx7VKF-fAGtlcyGggVZFvfvFqnjONJbaAuWNcLd3Oei2SPXmFAqv2iegAzXCQ73uEKZeNt-fXX44lkL3692J2bW2TZfL38IfdxGIuImgDIeJAOSACOwcutOukKiq5Z1ZjMbjaYKDeg4mepVbk9RcpWHgYi_xW7N5rtM2WpkKBGZKpdFfok75utoLKZHzYtUhUksJFE8G3uaSMUCE4nHkw1LcIJBxUODyAxt_Rqatl8lhZjRNYKxY1WKLT2Nvv9xSPAoXjgO3BZlsrKTurD2EUBWHaDqMqR6AXYAEp8hNTgMl0zzgtGB811R76b4mTfV6F7pBkXyxyIrINMURGu6xW-TStNpmmZIepIS7EnB2cW-hye_jAP8gFKqdsnz2FajHqeKyb3YB57CZpKViENljiFHQNiRlALqGKevNzDtcv_8byO_fXFq_rcYwYqzES6l-tktA40OCyxJLiUK7tFpxvWsqAFnfBqLLP0yvAMC62z-JwQ63aj-DzhMlwi3jrMcCl09fRT45KjpbYM8pE-uu-Gk52MrVP59FAVSq5HAdM8by0C4TGvVX2EgY8hsMfXZj9MfBh0Yj5yqHkdXPkks1kpNmTP4Ofm8caPciV1vBg1yvQD_DpRBv4Pr13aiHoLyCvEWUv0etewbR4r6AdHSMBYoG1PnTB0_gAVCd32rO-gW5Ojo-lpAqGNsKvECHRGk9no4JmDQJtYuXv0irX8XhDwikDJYOphF3IPB1pbDC4JvWvbAs0nwKE5F1cHQGjz91PGFcJzPrSu3XQl2CwNh1KsVoiOryNdhJXqxTu3-PGvsKTfVxkaNTmh3rwtc49lFp2ozSQbLQbcAkZn7VPX-xj5uUjXnQsaotel-1GolJsRNUfl8kz3dXTHeXWNf3VdCAnxJPx6mt5-7nuDztcZ7jDi3ZPClvRoSqDsljIDp5Q4iQd-RgRyXGhadUA8Inazez8h1C4dy-PgKA==',
        'process_token': 'fe4effa5bc36f48b3a494cb3b4751800a029971631b76a680cd17c5d2bc2f0a9',
        'payload_protocol': '1',
        'pt': '1',
        'w': 'be0428a63249195f0c067fbe28a0a876a71b975f9f2457d22b5c81f1cacf54f32cac6b7ffc0def2f88468221fa43b98129d1b2cbc53b6f3088350a8450eadd25aecc1a9200d0d0b02d9f7cf051b2e38dd1344acf6deddc05e7e878ba43a589f28e948ddc1396f5fcfdf6f847296da52898169930314ea9f3fed7c7fa6cf7b3450e72259d35c4f9f0bbdde59e339d9a0a6dec57b84ef0a37e6ea9be3a3b33f7e58a911f636ec041b74a118e6839f1ef04fe4d08778603d58cec06eda5687cafc5900643cf547faa8a14409443aa32026a093392b9e758cece00d1cf4eb950a9e25d70095e94fc9083cf4fbe4892b09081a29756b74d01b83210a6251a90ee3f9e69fdc9ea908428c9c5d063232a309fdbfcaaad90261eb56a51193f414f7f42120f347064ccf291c4ee13e4540f679579ba4dbb424341eed6502ac04ddb9be36c04265242d24b13de12b6eab5a4852f0b21cbaaa3f8200255210b67eb7769b8fe0f33f88fb37a0782b9b62a069ed5139118e3b0c16243c83d93c427aa02133c45a88e060bce17c45cf683b5e801f4f983ba5b47b304be295b64ce9fb191ae80fca45522a809f7c1942c23bd096c4add19d7ac1d09c8d3be6a78b7571821b58dd89f047ac84b0e4341bf81c60d45370123c082342d093342119c02cd69bf9f3ba66166be359f3c5ea7d4437bb2b6dedba5d79869c3333cef49105742a1885e1a13cd4669a459531f9971616a0fec97cd6636c599d692479be50a8550e5da6cb5ac0cbb6a5cd923b071ac8a6758fe36042911741775f0d2964b776c0e24dccacc1699ee594704c4723980e367a6641e88e44c3e5a3a933b657f66ed725aa24b7b01',
    }

    response = requests.get('https://gcaptcha4.geetest.com/verify', params=params, cookies=cookies, headers=headers)
    print(response.text)