from pprint import pprint
import execjs
import requests
from urllib.parse import urlencode

cookies = {
    '_xsrf': 'n9JgfyGD9yR8MxvSmsdEGbjVAo3WUvak',
    '_zap': '2b594016-3fa3-4ac3-a56e-5750653a30be',
    'd_c0': 'WlTUp1eccxuPTgPEL5WapEyJet9p1x7qKnk=|1764394971',
    '__snaker__id': 'vZ6EcBeRVmQ2plp3',
    'Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49': '1772589910,1772713079,1772719232,1772809478',
    'DATE': '1771861256462',
    'crystal': 'U2FsdGVkX19YJXyOUEKH2rcac3UJ78pLEbpSc0ujbWtd0eTotHuYKCIm0igAAXoG07h9sq1x5is670Udiq8m1TKQt4bVQ7Eqd1Dwuu4L7pdGeDoGXH11KVPT/cV2S52UytrLgL6eeUwuEFZmtbFZWDm73WhBkQ8uOOeK09kSWRyKUT0KpzcNrFY3jOL+FZd1E6LbB4BU5Yl1mRTqUAwrYAbeTYu++4tnoRUjQo0e28C4estAjvamZS2Fo9/5XPpm',
    'vmce9xdq': 'U2FsdGVkX19sdknwQfN7wYPsB8OqfgrJJT2rPOn014c15IATDJFxnt3KG54K7iOmKoVo85FEPQQOu5AR86kyvyLh1PgT3K9PRVMbXYpyjBh26Zhq/06czjbVN6V46dtvSaT14KeuwtAk1/kHuCn6xs3CuvkR+Rm+VDcBKWpXPgw=',
    'assva6': 'U2FsdGVkX19EMH2VnbHGLhUf9JBm3ZkEVINRdHOUnog=',
    'assva5': 'U2FsdGVkX18tyx5szhVZc820/0SJX61owbB1u74nG37UaYcKBo7Cq6mrf/13l6xgyIMmMvZCZ8pt4fpOa9satA==',
    'cmci9xde': 'U2FsdGVkX19AbHrKS5xjbk5lRz0boDjpNRc7SVPYPUEqiv4DjM7ubMdIUOBP9dU4QU92W0NRgTNENqcSVllb4g==',
    'pmck9xge': 'U2FsdGVkX1/P2ZezS/54aSqlmtQPguWXsKATuj/5rB8=',
    'captcha_session_v2': '2|1:0|10:1775471804|18:captcha_session_v2|88:ZmxKWU9mU2tXK0h2SksvT1Y2UVF2d05sR2s2TlBFc21FQ29aS09FR2dCcWw5N2oyd1ZBVFBpV0lPS2IyaWxwNg==|3c05870d3c40955553f14bb5eafd25724dfff133a6d4d8511c4ef5b74767ead9',
    'gdxidpyhxdE': 'Do1EERwcmBTOADfIRKV9Dn9%2Bm0OCg6STeUc%2FXB0%5CyWB1hpufOHsr0DoGuVXvyAIpUVD%5CaMjmzmpa0sD9%2F%2FsxdD6%5CaCT%5ChDxITM6KyxpWeYONAJJ8itnwrhUf%5C7IVr%2BoUv%2FeHXK4Dp6kdcCCg55tPjKQR2sialUm3%5CTZTSpXZ%2B7z0sNDE%3A1775472704050',
    'q_c1': 'f8e7e5c18c1c4cd98a64f0138f8a672f|1775471829000|1775471829000',
    '__zse_ck': '005_KuZ=27Wv32cHwzRgguUcNte=ydfrzWu7E=ciNSaimD2DRSvkFbbpEMumQGYFxXZIuxxcgifzqsACB4rspBwEmslz8bX=8E6Mz15QfTEkoLvvriiGP2BI=f90pkyLehKI-jXPayeLeOR53OqnpIaPTdR6/CUWEDu2Lnx4NrfwV8cc+XNFIBd97rI8EbrhxCoFgnZf1CiN4rTtbqLwBEOO2GXrOU3ONj168a67PDT/Vff5HN/8mnhdIBkB/wvrmkYDj',
    'SESSIONID': '1TbNEWo1PDdNM78xS9CcbE2MfQA1jVhqBeprGVtr4qH',
    'BEC': '4589376d83fd47c9203681b16177ae43',
    'z_c0': '2|1:0|10:1775475836|4:z_c0|92:Mi4xbVVZX1F3QUFBQUJhVk5TblY1eHpHeVlBQUFCZ0FsVk4xTnJBYWdBRnRKVzE5X0hGalcwRlF1eXFBcGltcXJGcGRn|9b35744041462a2a968a2c3ef0bb471988c47d32a7bcb283157ff3505a308b0f',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'origin': 'https://zhuanlan.zhihu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://zhuanlan.zhihu.com/p/2023874043997089920',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'x-requested-with': 'fetch',
    'x-zse-93': '101_3_3.0',
    # 'cookie': '_xsrf=n9JgfyGD9yR8MxvSmsdEGbjVAo3WUvak; _zap=2b594016-3fa3-4ac3-a56e-5750653a30be; d_c0=WlTUp1eccxuPTgPEL5WapEyJet9p1x7qKnk=|1764394971; __snaker__id=vZ6EcBeRVmQ2plp3; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1772589910,1772713079,1772719232,1772809478; DATE=1771861256462; crystal=U2FsdGVkX19YJXyOUEKH2rcac3UJ78pLEbpSc0ujbWtd0eTotHuYKCIm0igAAXoG07h9sq1x5is670Udiq8m1TKQt4bVQ7Eqd1Dwuu4L7pdGeDoGXH11KVPT/cV2S52UytrLgL6eeUwuEFZmtbFZWDm73WhBkQ8uOOeK09kSWRyKUT0KpzcNrFY3jOL+FZd1E6LbB4BU5Yl1mRTqUAwrYAbeTYu++4tnoRUjQo0e28C4estAjvamZS2Fo9/5XPpm; vmce9xdq=U2FsdGVkX19sdknwQfN7wYPsB8OqfgrJJT2rPOn014c15IATDJFxnt3KG54K7iOmKoVo85FEPQQOu5AR86kyvyLh1PgT3K9PRVMbXYpyjBh26Zhq/06czjbVN6V46dtvSaT14KeuwtAk1/kHuCn6xs3CuvkR+Rm+VDcBKWpXPgw=; assva6=U2FsdGVkX19EMH2VnbHGLhUf9JBm3ZkEVINRdHOUnog=; assva5=U2FsdGVkX18tyx5szhVZc820/0SJX61owbB1u74nG37UaYcKBo7Cq6mrf/13l6xgyIMmMvZCZ8pt4fpOa9satA==; cmci9xde=U2FsdGVkX19AbHrKS5xjbk5lRz0boDjpNRc7SVPYPUEqiv4DjM7ubMdIUOBP9dU4QU92W0NRgTNENqcSVllb4g==; pmck9xge=U2FsdGVkX1/P2ZezS/54aSqlmtQPguWXsKATuj/5rB8=; captcha_session_v2=2|1:0|10:1775471804|18:captcha_session_v2|88:ZmxKWU9mU2tXK0h2SksvT1Y2UVF2d05sR2s2TlBFc21FQ29aS09FR2dCcWw5N2oyd1ZBVFBpV0lPS2IyaWxwNg==|3c05870d3c40955553f14bb5eafd25724dfff133a6d4d8511c4ef5b74767ead9; gdxidpyhxdE=Do1EERwcmBTOADfIRKV9Dn9%2Bm0OCg6STeUc%2FXB0%5CyWB1hpufOHsr0DoGuVXvyAIpUVD%5CaMjmzmpa0sD9%2F%2FsxdD6%5CaCT%5ChDxITM6KyxpWeYONAJJ8itnwrhUf%5C7IVr%2BoUv%2FeHXK4Dp6kdcCCg55tPjKQR2sialUm3%5CTZTSpXZ%2B7z0sNDE%3A1775472704050; q_c1=f8e7e5c18c1c4cd98a64f0138f8a672f|1775471829000|1775471829000; __zse_ck=005_KuZ=27Wv32cHwzRgguUcNte=ydfrzWu7E=ciNSaimD2DRSvkFbbpEMumQGYFxXZIuxxcgifzqsACB4rspBwEmslz8bX=8E6Mz15QfTEkoLvvriiGP2BI=f90pkyLehKI-jXPayeLeOR53OqnpIaPTdR6/CUWEDu2Lnx4NrfwV8cc+XNFIBd97rI8EbrhxCoFgnZf1CiN4rTtbqLwBEOO2GXrOU3ONj168a67PDT/Vff5HN/8mnhdIBkB/wvrmkYDj; SESSIONID=1TbNEWo1PDdNM78xS9CcbE2MfQA1jVhqBeprGVtr4qH; BEC=4589376d83fd47c9203681b16177ae43; z_c0=2|1:0|10:1775475836|4:z_c0|92:Mi4xbVVZX1F3QUFBQUJhVk5TblY1eHpHeVlBQUFCZ0FsVk4xTnJBYWdBRnRKVzE5X0hGalcwRlF1eXFBcGltcXJGcGRn|9b35744041462a2a968a2c3ef0bb471988c47d32a7bcb283157ff3505a308b0f',
}

params = {
    'order_by': 'ts',
    'limit': '20',
    'offset': '',
}

url = 'https://www.zhihu.com/api/v4/comment_v5/comment/11454767967/child_comment'

eo = url + '?' + urlencode(params)

with open('loader.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
xzse96 = ctx.call("get_xzse96", eo)
# print(xzse96)
headers['x-zse-96'] = xzse96
pprint(headers)
response = requests.get(
    url='https://www.zhihu.com/api/v4/comment_v5/comment/11454767967/child_comment',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)