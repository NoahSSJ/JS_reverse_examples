import base64
import json
from pprint import pprint
import execjs
import requests
import subprocess
from functools import partial
from prettytable import PrettyTable

# subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
# cookies = {
#     
# }

# headers = {
#     'accept': 'application/octet-stream',
#     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
#     'content-type': 'text/plain',
#     'origin': 'https://y.qq.com',
#     'priority': 'u=1, i',
#     'referer': 'https://y.qq.com/',
#     'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
#     'sec-ch-ua-mobile': '?0',
#     'sec-ch-ua-platform': '"Windows"',
#     'sec-fetch-dest': 'empty',
#     'sec-fetch-mode': 'cors',
#     'sec-fetch-site': 'same-site',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0',
# }

# def getsign(form):
#     form = json.dumps(form)
#     cmd = ["node", "sign.js", form]
#     text = subprocess.check_output(cmd).strip()
#     sign = text.split('\n')[0]
#     key = text.split('\n')[1]
#     return sign ,key

# def get_audio(songMID,songID,albumMid):
#     audio_data={"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921505341343322","g_tk_new_20200303":814268477,"g_tk":814268477},"req_1":{"module":"music.musichallSong.PlayLyricInfo","method":"GetPlayLyricInfo","param":{"songMID":songMID,"songID":songID}},"req_2":{"method":"GetCommentCount","module":"music.globalComment.GlobalCommentRead","param":{"request_list":[{"biz_type":1,"biz_id":f"{songID}","biz_sub_type":0}]}},"req_3":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":albumMid}},"req_4":{"module":"music.vkey.GetEVkey","method":"GetUrl","param":{"guid":"225418138","songmid":[songMID],"songtype":[0],"uin":"1152921505341343322","loginflag":1,"platform":"20","xcdn":1,"qdesc":"lq96kOgg"}}}
#     linksign,linkkey=getsign(audio_data)
#     link="https://u6.y.qq.com/cgi-bin/musics.fcg"
#     link_params = {
#         "_": "int(time.time() * 1000)",
#         "encoding": "ag-1",
#         "sign": linksign
#     }
#     response = requests.post(link, headers=headers, cookies=cookies, params=link_params, data=linkkey)
#     content = list(response.content)
#     with open('base64.js', 'r', encoding='utf-8') as f:
#         js_code = f.read()
#     ctx = execjs.compile(js_code)
#     result = ctx.call('encrypt', content)
#     # print( result)
#     audio_url=result['req_4']['data']['midurlinfo'][0]['xcdnurl']
#     print(audio_url)
#     return audio_url

# def search_songs(keyword,pagenum):
#     form = {"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921505341343322","g_tk_new_20200303":814268477,"g_tk":814268477},"req_1":{"method":"DoSearchForQQMusicDesktop","module":"music.search.SearchCgiService","param":{"remoteplace":"txt.yqq.center","searchid":"70113558754813304","search_type":0,"query":keyword,"page_num":pagenum,"num_per_page":10}}}
#     sign, key = getsign(form=form)
#     # print(sign, key)
#     params = {
#         '_': 'int(time.time() * 1000)',
#         'encoding': 'ag-1',
#         'sign': sign,
#     }
#     url = "https://u6.y.qq.com/cgi-bin/musics.fcg"
#     response = requests.post(url, headers=headers, cookies=cookies, params=params, data=key)
#     content = list(response.content)
#     # print(content)
#     with open('base64.js', 'r', encoding='utf-8') as f:
#         js_code = f.read()
#     ctx = execjs.compile(js_code)
#     result = ctx.call('encrypt', content)
#     # pprint(result)
#     song_list=result['req_1']['data']['body']['song']['list']
#     tb=PrettyTable()
#     num=0
#     tb.field_names = ["歌曲编号", "歌曲名称", "歌手名称"]
#     info=[]
#     for index in song_list[1:]:
#         songMID=index['mid']
#         songID=index['id']
#         albumMid=index['album']['mid']
#         title=index['title']
#         name=index['singer'][0]['name']
#         dit={"songMID":songMID,"songID":songID,"albumMid":albumMid,"title":title,"name":name}
#         info.append(dit)
#         tb.add_row([num,title,name])
#         num+=1
#         print(dit)
#         get_audio(songMID=songMID, songID=songID, albumMid=albumMid)
#         break
#     print(tb)
#     return info

# search_songs("张杰", 1)



