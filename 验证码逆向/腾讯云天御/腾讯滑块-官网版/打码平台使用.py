import requests
from PIL import Image
from io import BytesIO
import base64
 
    # PIL图片保存为base64编码
def PIL_base64(img, coding='utf-8'):
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
def parse_verify():
    url = "https://bq1gpmr8.xiaomy.net//openapi/verify_code_identify/"
    header = {"Content-Type": "application/json"}
    data = {
        # 用户的key
        "key": 'FFfyemkmudsptX87Gtg9',
        # 验证码类型
        "verify_idf_id": '6',
        # 样例图片                           滑块图片路径
        "img_base64": PIL_base64(Image.open('./bg.jpg')),
    }
    # 发送请求调用接口
    response = requests.post(url=url, json=data, headers=header)
    # 获取响应数据，识别结果
    return response.text

print(parse_verify())