import requests
from json import loads
from dotenv import load_dotenv
from os import environ
load_dotenv()
URL = f"https://api.nasa.gov/planetary/apod?api_key={environ.get('NASA_API_KEY')}"
res = requests.get(URL)

print(res.status_code)
json_data = res.json()
for item in json_data:
    print(f"{item}: \"{json_data[item]}\"")