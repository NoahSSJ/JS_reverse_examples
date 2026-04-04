import execjs
import requests
from pprint import pprint

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.zkh.com',
    'platform_type': 'JavaScript',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.zkh.com/item/AA6242291.html',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'uber-trace-id': 'a27adca017752267781481001ce15812:a27adca017752267:0:1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'x-akc': 'CWx4MlFFXfFIT1KOQz+usY6xl9n0DRe5rhx2QfjK1+IdHubscl8ie1gXxc1lMbNTJOXPmsg7LYcmbIVZ/KcxrOpIE6W9cZU1S8ZcqVDS4/Uy7304poiBEcyLTbXpRbg5iPgFPcg1mJ37OLzmSrtnN3Kr+BTHgXjtV1l8I/nrEO0=',
    'x-rgn': '1775224812424',
    'x-sc-anonymous-id': '19d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8',
    'cookie': '_c_WBKFRo=YKuWyQtxZx4PYgMaHfpWl37ciX37wrQlWsdG3Fk7; _nb_ioWEgULi=; ipCityCode=310100; citycode=%7B%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22cityCode%22%3A310100%2C%22districtName%22%3A%22%E9%BB%84%E6%B5%A6%E5%8C%BA%22%2C%22districtCode%22%3A310101%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlkNTNhMTE4NGYyMGJjLTA3ZWI2YmYyY2JkMTE1Yy00YzY1N2I1OC0yNjIxNDQwLTE5ZDUzYTExODUwMmRmOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8%22%7D; sajssdk_2015_cross_new_user=1; sensorsdata2015session=%7B%7D; anonymous_id=19d53a1184f20bc-07eb6bf2cbd115c-4c657b58-2621440-19d53a118502df8; _bl_uid=z5m2zn4eiX3y2qvpL9b759ja47UX; unique_user_id=by2f1tpyuk9lu2-5e201fad-19d41cfb87f-qmy30re1z; AGL_USER_ID=43d3e783-46c3-4fe8-8b02-d343977f668a; zaf_ukey=80d2f5f748f24440a243bf7337311785; page_request_id=ef6f1af5-363b-4663-b081-7b791b88d2fe; acw_tc=2f72701f17752264611214947ed39f46256824c4885af3e660332dcf8605e5; p_pub_key=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDpuZbSY4EeCVdyY9mHOQaYF1D5v9XSEV506hnhNwM4Wv00D8OKO/TL4TceIy4aMZtxvlq1EgoU3oRnOTjsMC3uvBjTXNZtGmH6C3LPKb5YfR1NpraxKCoEBCAWAx4Ik47rEZ4fZ10ivFGcvCDqingPDkYt6464OZR2p2pNZriNVQIDAQAB; p_pub_gr=1775224812424; JSESSIONID=AED3A161FDF844AE30DE0F132321C12D; ssxmod_itna=1-YqfxuD0DBiG=64eKYKitDRtnERQDzxC5iOD_xQyP08D6QDB_2Me0=Hscneqq=ToMIGqh0oDBk4hNDnqD8jDQeDv/04D=3iGLx=eebzCRD8aetDxFmqR8mK5mTI7cY4SKNvFj_xyrLi659oIx=Gu5DCPDExGkzlhwDemWDCeDQxirDD4DAYPDFxibDieAi4DdO/gApIgmwDGrDlKDRx07wmoDbxDaDGaIFhiHOFOeDD5DnPL264DWDWPvYDDzY7=4LcD4DmbI_IBjwWdRKY8CO4G1vD0Hejt4O8QMUwDf_FzCkknm2KdDvxD90PAFW6zxvWPEGn9zesCmFFu5YDbQD5fi0Yma/iN8DNW0eii4K_ajbbWiPWGhn_inbuK_ibEF3OhByVe7IYAxVi3=0CAhxQ4igwFQD=ShHGDO9B3EhtBxHA252_eLiP8GaQSt/DeL05eD; ssxmod_itna2=1-YqfxuD0DBiG=64eKYKitDRtnERQDzxC5iOD_xQyP08D6QDB_2Me0=Hscneqq=ToMIGqhiDiZhiPmYiD7pxaQlj4D89xGN4n8tO0FqTU8AxHI=ZCpHT8TtNB86IFNTZS9oetwBfu3UXR_sPl5dkxPhyZckjic8R6vTjnKqlcmmtODx_Oge7bqCF/pIb8EsAaYvbrG4D8hpenYasR_5hbK76UP6618wjCMktcFqcgbTmrcznRp4vODAnWhGYQLWtpQAFiIqGtD4=fDaj3lstcQ86cgsqVvW=_9DCcWPsb9RB8N0GRBwMV/k2MHLubbx=r_HXE=m85ifo4uGCfoeGo9hGVh3xCDVqtYi3bfGW24NwPM0bXdQnSFeRW=rx3L=kW778r2k4Yei=TslLGnloRhaKqIXmK/_3bMo3GKWb=TBmHE4HMCdfd/4FN2DKG37aQGMQhxNmEx34tU3LvwK/Aa=M5zPiyrvcQzAM7puv=67qA=ggW8nrkablf6mnhe3zIMpetCD3X3WCbrjaAx_20Vxfe/WVAALODkcHSaTmOIE28VgDpO1YiiletzTtoGdnA5PLEC2WTpQnKubr1l6IMpIgrf6RN_FGMCr/bBKqailB6R_lcb2qkdHUTpxIj4RpD1xt=wWAdcCgys0q=D3qr_tD9RR=vX4maZBIAkrxbF1oEIe1XC532NVjHz0KCn2QYciYZeN0tDs9WxI55BmloBHPmtSGCOx3FqIea7oED305lxYiYt_zqtiqF7NC_3iTZh_AYbPsDQ_D4D',
}

params = {
    'traceId': '167610391775226778146',
    'md5__1101': 'n40xcieQqxRDnlDlxGr4+xCT9n8Dk9YUzY0eD',
}

json_data = {
    'cipher': 'PJ9ttQzzGaqSJVm5+Z0nJdQ7YTVZkLN74bT5YX5O7/q+2JSYDx0NN57Yt4IB1rjFo1yhSpvbaRoiSBc83Yg2em4VWWlRN7vUqqGcVUJUyO35S2DU+bmpeMl43bbtCRGV84TdmJF1n8nWeBnpP7smjLLdCHe5u8pQS3pIGPFlQMBWrtc3Rgve1biZ+lWKyCcqRd8FjI7otToSRA73JSCFQGBONovd6RMvC8z/CrCqU08=',
}

response = requests.post(
    'https://www.zkh.com/servezkhApi/delivery/ab/encrypt',
    params=params,
    headers=headers,
    json=json_data,
)


# print(response.text)

with open('decrypt.js', mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
res = ctx.call('decrypt', response.text)
pprint(res)
