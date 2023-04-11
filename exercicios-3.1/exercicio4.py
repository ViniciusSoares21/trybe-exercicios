import requests
from parsel import Selector


URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")

selector = Selector(response.text)

title = selector.css("h1::text").get()
price = selector.css("p.price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

url_img = URL_BASE + selector.css("#product_gallery img::attr(src)").get()
availability = selector.css(".product_main .availability::text").re_first(
    r"\d"
)

print(f"{title}, {price}, {description}, {url_img}, {availability}")
