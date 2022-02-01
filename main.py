import requests
from json import loads
URL = "https://api.nasa.gov/planetary/apod?api_key=9IVcc1x36D2bJyhWrd9Qqd83DhsThAJCr1UGBZN0"
res = requests.get(URL)

# print(res.status_code)
json_data = res.json()

# dict_data = loads(json_data)
print(json_data.get("title"))
print(json_data.get("explanation"))

