import json
import random
import time
import requests
import execjs
import requests
from PIL import Image
from io import BytesIO
import base64



class TengXun:
    def __init__(self):
        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://cloud.tencent.com/',
            'Sec-Fetch-Dest': 'script',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Storage-Access': 'active',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

    # PIL图片保存为base64编码
    def PIL_base64(self,img, coding='utf-8'):
        img_format = img.format
        if img_format == None:
            img_format = 'JPEG'
        format_str = 'JPEG'
        if 'png' == img_format.lower():
            format_str = 'PNG'
        if 'gif' == img_format.lower():
            format_str = 'gif'
        if img.mode == "P":
            img = img.convert('RGB')
        if img.mode == "RGBA":
            format_str = 'PNG'
            img_format = 'PNG'
        output_buffer = BytesIO()
        img.save(output_buffer, quality=100, format=format_str)
        byte_data = output_buffer.getvalue()
        base64_str = 'data:image/' + img_format.lower() + ';base64,' + \
                        base64.b64encode(byte_data).decode(coding)
        return base64_str

    # 验证码识别接口
    def parse_verify(self):
        url = "https://bq1gpmr8.xiaomy.net//openapi/verify_code_identify/"
        header = {"Content-Type": "application/json"}
        data = {
            # 用户的key
            "key": 'tK2kcxSXUQT1rTR3ixBP',
            # 验证码类型
            "verify_idf_id": '6',
            # 样例图片                           滑块图片路径
            "img_base64": self.PIL_base64(Image.open('./bg.jpg')),
        }
        # 发送请求调用接口
        response = requests.post(url=url, json=data, headers=header)
        # 获取响应数据，识别结果
        distance = response.json()['data']['distance']
        return distance - 20

    def get_img(self):
        params = {
            'aid': '199999861',
            'protocol': 'https',
            'accver': '1',
            'showtype': 'popup',
            'ua': 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzNC4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMzQuMC4wLjA=',
            'noheader': '1',
            'fb': '1',
            'aged': '0',
            'enableAged': '0',
            'enableDarkMode': '0',
            'grayscale': '1',
            'clientype': '2',
            'cap_cd': '',
            'uid': '',
            'lang': 'zh-cn',
            'entry_url': 'https://cloud.tencent.com/product/captcha',
            'elder_captcha': '0',
            'js': '/tcaptcha-frame.c055d939.js',
            'login_appid': '',
            'wb': '2',
            'subsid': '3',
            # 'callback': '_aq_785273',
            'sess': '',
        }
        response = requests.get('https://turing.captcha.qcloud.com/cap_union_prehandle', params=params, headers=self.headers)
        json_data = response.text.split('({', 1)[1].rsplit('})', 1)[0]
        data = json.loads('{' + json_data + '}')  # 将 JSON 字符串解析为字典
        # 请求中需要携带的sess
        self.sess = data['sess']
        # 请求混淆js代码需要用到的sid
        self.sid = data['sid']


        #获取tdc.js文件
        tdc_path_url = data["data"]["comm_captcha_cfg"]["tdc_path"]
        self.get_jscode(tdc_path_url)

        self.pow_answer, self.pow_calc_time = self.get_two_params(data)

        # 滑块背景图
        background_image_url = 'https://turing.captcha.qcloud.com' + data['data']['dyn_show_info']['bg_elem_cfg']['img_url']
        background_bytes = requests.get(background_image_url, headers=self.headers).content
        with open('bg.jpg','wb')as fp:
            fp.write(background_bytes)

        # x距离
        x_distance = self.parse_verify()  #获取验证码缺口距离
        print('x距离',x_distance)
        # y距离
        y_distance = data['data']['dyn_show_info']['fg_elem_list'][1]['init_pos'][1]
        print('y距离',y_distance)

        return x_distance, y_distance
    

    def get_jscode(self,tdc_path_url):
        headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Referer": "https://turing.captcha.gtimg.com/",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\""
        }
        # params = {
        #     'app_data': self.sid,
        #     't': '1202035288',
        # }
        url = "https://turing.captcha.qcloud.com" + tdc_path_url
        response = requests.get(url, headers=headers)
        with open('tdc.js', 'w') as fp:
            fp.write(response.text)
        return

    def get_one_parmes(self):
        with open('./get_can.js', 'r',encoding='utf-8') as f:
            js_file = f.read()
        js_code = execjs.compile(js_file)
        verify_params = js_code.call('get_params')
        self.collect = verify_params['collect']
        self.tlg = len(self.collect)
        self.eks = verify_params['eks']
        # return collect, tlg, eks

    def get_two_params(self, prehandle_json):
        prefix = prehandle_json["data"]["comm_captcha_cfg"]["pow_cfg"]["prefix"]
        md5 = prehandle_json["data"]["comm_captcha_cfg"]["pow_cfg"]["md5"]
        with open('./get_ans.js', 'r',encoding='utf-8') as f:
            js_file = f.read()
        js_code = execjs.compile(js_file)
        pow_params = js_code.call('get_pow_params', prefix, md5)
        pow_answer = prefix + str(pow_params['ans'])
        pow_calc_time = pow_params['duration']
        return pow_answer, pow_calc_time

    def get_hk(self):
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://turing.captcha.gtimg.com',
            'Pragma': 'no-cache',
            'Referer': 'https://turing.captcha.gtimg.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        data = {
            'collect': self.collect,
            'tlg': self.tlg,
            'eks': self.eks,
            'sess': self.sess,
            'ans': self.ans,
            'pow_answer': self.pow_answer,
            'pow_calc_time': self.pow_answer,
        }

        response = requests.post('https://turing.captcha.qcloud.com/cap_union_new_verify', headers=headers, data=data)
        print(response.status_code)
        print(response.text)

    def main(self):
        x_distance, y_distance = self.get_img()  #发请求获取滑块图片,并且拿到图片数据,识别x,y轴距离
        ans_json = [{"elem_id": 1, "type": "DynAnswerType_POS", "data": f"{x_distance},{y_distance}"}]
        self.ans = json.dumps(ans_json, separators=(',', ':'))
        self.get_one_parmes()
        self.get_hk()


if __name__ == '__main__':
    tengxun = TengXun()
    tengxun.main()