import execjs
import requests
import time

cookies = {
    't': '92cdb986e4246152100be5b5b484cd36',
    'xlly_s': '1',
    'tracknick': 'tb174314465',
    'unb': '2209215586035',
    'cna': '9SgWIiirVgACAQAAAACv1/N7',
    'cookie2': '2d412f3caea5b3b78b783b1d26f993da',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': '2881b6670f304a48ef66102bb207966f_1771003781166',
    '_m_h5_tk_enc': '2fd33a4a84ce882d83a14fdae8f6767e',
    '_samesite_flag_': 'true',
    '_tb_token_': 'fd6bf66b87b9d',
    'sgcookie': 'E100w4nT39pV25YuD3%2FQdjSsNSPEPc6%2FyqhJtctXzbmPEn99ddL1%2Fw3PIY%2Bugi8l%2BauqnrwY0HbktM79PkHiu7QVUEM%2FSTUipkZd%2FQxdpWmrexTR1hV9yaOdLXbXA7w2smo6',
    'csg': '37205e61',
    'havana_lgc2_77': 'eyJoaWQiOjIyMDkyMTU1ODYwMzUsInNnIjoiYzYyNDY2ZTQ4NjI0NDkxNmUyODc2NGRjM2FiNWM4YTAiLCJzaXRlIjo3NywidG9rZW4iOiIxenpKWFpiRnVTZndGX1V2OHFobkVJUSJ9',
    '_hvn_lgc_': '77',
    'havana_lgc_exp': '1773586581943',
    'sdkSilent': '1771080989103',
    'tfstk': 'gVKi37mx4F7_owVEqSSsRUGAyt0d1GsfJIEAMiCq865Q65E93SADTQpTXnpViIAdOlLt5ZC0nGtpWoCt1iv2wic-w0nJCd1f0bh-sWuxwG60grr4M6SFCiXaOELiHdsf0XeL04nkCCnIbg5N0vjFnT2N0Or2LvXAElSV_ZPU8T5FgiRV_wJFBtEaQlWN8vXfTsSV7okhY66c0sRV0vvELGwNNn82YbxKa4B1vUKhINfyK4Z4mRXaw_vZSoq2xej1alf30o-hCKl9-srok_856aQHTDEGmpWD66dr4kjFrU9AnCmgbGLeRhs9vb25SIfhzH_nYWXHxLLPdp0oKpxcsa-N--E9CGX2gZYIZuBGXebkjFMbTdRRsUS6H8c9KaYhP97UnPS9yLKfzhogN6Q5nCCpa0rhYZSPvyzrZcZfLxKUlr_Nd9fJhllBI6jBaGknKzUf796lwvD3lr_Nd9f-Kv45GNWCE_C..',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.goofish.com',
    'priority': 'u=1, i',
    'referer': 'https://www.goofish.com/',
    'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0',
    # 'cookie': 't=92cdb986e4246152100be5b5b484cd36; xlly_s=1; tracknick=tb174314465; unb=2209215586035; cna=9SgWIiirVgACAQAAAACv1/N7; cookie2=2d412f3caea5b3b78b783b1d26f993da; mtop_partitioned_detect=1; _m_h5_tk=2881b6670f304a48ef66102bb207966f_1771003781166; _m_h5_tk_enc=2fd33a4a84ce882d83a14fdae8f6767e; _samesite_flag_=true; _tb_token_=fd6bf66b87b9d; sgcookie=E100w4nT39pV25YuD3%2FQdjSsNSPEPc6%2FyqhJtctXzbmPEn99ddL1%2Fw3PIY%2Bugi8l%2BauqnrwY0HbktM79PkHiu7QVUEM%2FSTUipkZd%2FQxdpWmrexTR1hV9yaOdLXbXA7w2smo6; csg=37205e61; havana_lgc2_77=eyJoaWQiOjIyMDkyMTU1ODYwMzUsInNnIjoiYzYyNDY2ZTQ4NjI0NDkxNmUyODc2NGRjM2FiNWM4YTAiLCJzaXRlIjo3NywidG9rZW4iOiIxenpKWFpiRnVTZndGX1V2OHFobkVJUSJ9; _hvn_lgc_=77; havana_lgc_exp=1773586581943; sdkSilent=1771080989103; tfstk=gVKi37mx4F7_owVEqSSsRUGAyt0d1GsfJIEAMiCq865Q65E93SADTQpTXnpViIAdOlLt5ZC0nGtpWoCt1iv2wic-w0nJCd1f0bh-sWuxwG60grr4M6SFCiXaOELiHdsf0XeL04nkCCnIbg5N0vjFnT2N0Or2LvXAElSV_ZPU8T5FgiRV_wJFBtEaQlWN8vXfTsSV7okhY66c0sRV0vvELGwNNn82YbxKa4B1vUKhINfyK4Z4mRXaw_vZSoq2xej1alf30o-hCKl9-srok_856aQHTDEGmpWD66dr4kjFrU9AnCmgbGLeRhs9vb25SIfhzH_nYWXHxLLPdp0oKpxcsa-N--E9CGX2gZYIZuBGXebkjFMbTdRRsUS6H8c9KaYhP97UnPS9yLKfzhogN6Q5nCCpa0rhYZSPvyzrZcZfLxKUlr_Nd9fJhllBI6jBaGknKzUf796lwvD3lr_Nd9f-Kv45GNWCE_C..',
}

data = {
    'data': '{"pageNumber":1,"keyword":"手机","fromFilter":false,"rowsPerPage":30,"sortValue":"","sortField":"","customDistance":"","gps":"","propValueStr":{},"customGps":"","searchReqFromPage":"pcSearch","extraFilterValue":"{}","userPositionJson":"{}"}',
}

t = int (time.time() * 1000)
token = cookies['_m_h5_tk'].split('_')[0]
pinjie = token + "&" + str(t) + "&" + '34839810' + "&" + data['data']
with open("sign.js", mode='r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
sign = ctx.call('i', pinjie)
print(sign)
params = {
    'jsv': '2.7.2',
    'appKey': '34839810',
    't': t,
    'sign': f'{sign}',
    'v': '1.0',
    'type': 'originaljson',
    'accountSite': 'xianyu',
    'dataType': 'json',
    'timeout': '20000',
    'api': 'mtop.taobao.idlemtopsearch.pc.search',
    'sessionOption': 'AutoLoginOnly',
    'spm_cnt': 'a21ybx.search.0.0',
    'spm_pre': 'a21ybx.search.searchInput.0',
}



response = requests.post(
    'https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)

print(response.text)