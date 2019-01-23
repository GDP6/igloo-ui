import urllib.request
import json
import requests

url = "http://iglooboiler.appspot.com/readings"

def get_test2():
    r = requests.post(url, data={})
    print(r.text[:300] + '...')


def get_test():
    item  = json.load(urllib.request.urlopen("http://iglooboiler.appspot.com/jakestank"))
    return item

print(get_test()[0])