import requests

headers = {
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://turing.captcha.gtimg.com/',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Storage-Access': 'active',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0',
    'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Microsoft Edge";v="146"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get(
    'https://turing.captcha.qcloud.com/cap_union_new_getcapbysig?img_index=1&image=026109000010e02900000015022544704aff&sess=s04hPXRa4CHzEGok1D_OV85ARpLlakySa8yzO-Ra8HSno14AM98Y66uSa54UD2FblRtfEkmvV5Rqp3Gdj_mwc59iwp8-dvWJSTex6ZWO5SO2k2ne7kTapmPDbb6G66l37r6-5CTdEM_C0mZpWyD0QWyeOgH-o1qWDI2aH4OGAsntkRVHgnIa2Nhh3BgYkGLor0on_phoa9iDVE4de8D563Z-CyAbawUcaG8HTonoz2SNyWA1sOVZ8MD7PaUPlShzJfY9nJ61j9VnhqzIAiLAQVdHCGgE4ROge6kNExLL1jD0KEJdOZcEphyESMsoV7K-AdkAJ4FqzWn5XMpX4gOPsB4zX7r7QrfwXi_QFiWzAj0-4uIkJbd6uwCzttv6XAlyrPeqyjP2qyYrPPhCib8QglrzEeoJVXgU3ZBI7nTCv7OS0ITa8QBr8EqA**',
    headers=headers,
)