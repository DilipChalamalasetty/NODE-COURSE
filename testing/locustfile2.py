# -*- coding: utf-8 -*-
"""
Created on Thu Nov 14 08:47:54 2019

@author: KMTRAINEE105
"""

import requests as r
headers=headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}

response=r.get('https://www.radissonhotels.com',headers=headers)
print(response.text)
print("hello")