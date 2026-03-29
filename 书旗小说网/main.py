import re
import requests

cookies = {
    'EGG_SESS': '40mjvpBzsUcr2XYv9016DaDMD4qbYvpJbtjChjiH-BqnKDwGi0blHKXv9BbOyx25Xw7DTgCQw_tZievOP2jsrQ3JOvGuM_2YEh6MweSco4I=',
    'Hm_lvt_5168aa45c99343e44a3a8ed3019082e3': '1770189293',
    'HMACCOUNT': 'E3AC86B02293B941',
    '__itrace_wid': 'a2212c48-a600-43dc-28fc-b92b5393ad09',
    'cna': '7N8JIm+TzAsCAbfQazHGvzpy',
    'xlly_s': '1',
    'Hm_lpvt_5168aa45c99343e44a3a8ed3019082e3': '1770190569',
    'isg': 'BFJSCN_Yb29OPZOTvfaQssBcoxg0Y1b9RtwGtxyrXIXwL_MpBPL_DFpJn4sTX86V',
    'tfstk': 'gaXqpvVb0-e4L8zhYMvaLZYEcuvvHdzQQOT6jGjMcEYmhxgGaGbmGn1fjF7NPUK1GSUtQCvAFsM6lrpNjw9aRywQdiIvWd4QR0YUB1pHXAcm5CDoqdta2xlqXiIvB0QY7LYCDRyZAMTMINvkZH-eIVYGSYckyhKiohD04gYJrnxDjxcoZH-EmfbMIuSkyhvMmNA04gYJjdYipTWGhY82iof80uyazhA2-iYrLgBymhGAcUusST5yge0BzADGUnIgR-kZL5Th9EOBaa2S3dSkbZT5-JDyEB5dfh743xvfZ_BvhTaEvI7wzBXJa80y4TSCt3IzTuSPQERhnQoship2jNANwykB0K1yTt5YX4jcRE5HHGiUlgRFaBKkZclDh6sCBBX032LW9h7XPw2nULAG4w09qRV1Bsui_IxJ4eZz4FRltr5clMKS6fdy238QYklt6IxJ4eZz4fh9Z4KyRkrF.',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    'priority': 'u=0, i',
    'referer': 'https://www.shuqi.com/reader?bid=8528722&cid=1713878',
    'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0',
    # 'cookie': 'EGG_SESS=40mjvpBzsUcr2XYv9016DaDMD4qbYvpJbtjChjiH-BqnKDwGi0blHKXv9BbOyx25Xw7DTgCQw_tZievOP2jsrQ3JOvGuM_2YEh6MweSco4I=; Hm_lvt_5168aa45c99343e44a3a8ed3019082e3=1770189293; HMACCOUNT=E3AC86B02293B941; __itrace_wid=a2212c48-a600-43dc-28fc-b92b5393ad09; cna=7N8JIm+TzAsCAbfQazHGvzpy; xlly_s=1; Hm_lpvt_5168aa45c99343e44a3a8ed3019082e3=1770190569; isg=BFJSCN_Yb29OPZOTvfaQssBcoxg0Y1b9RtwGtxyrXIXwL_MpBPL_DFpJn4sTX86V; tfstk=gaXqpvVb0-e4L8zhYMvaLZYEcuvvHdzQQOT6jGjMcEYmhxgGaGbmGn1fjF7NPUK1GSUtQCvAFsM6lrpNjw9aRywQdiIvWd4QR0YUB1pHXAcm5CDoqdta2xlqXiIvB0QY7LYCDRyZAMTMINvkZH-eIVYGSYckyhKiohD04gYJrnxDjxcoZH-EmfbMIuSkyhvMmNA04gYJjdYipTWGhY82iof80uyazhA2-iYrLgBymhGAcUusST5yge0BzADGUnIgR-kZL5Th9EOBaa2S3dSkbZT5-JDyEB5dfh743xvfZ_BvhTaEvI7wzBXJa80y4TSCt3IzTuSPQERhnQoship2jNANwykB0K1yTt5YX4jcRE5HHGiUlgRFaBKkZclDh6sCBBX032LW9h7XPw2nULAG4w09qRV1Bsui_IxJ4eZz4FRltr5clMKS6fdy238QYklt6IxJ4eZz4fh9Z4KyRkrF.',
}

params = {
    'bid': '8528722',
    'cid': '1713878',
}

response = requests.get('https://www.shuqi.com/reader', params=params, cookies=cookies, headers=headers)


