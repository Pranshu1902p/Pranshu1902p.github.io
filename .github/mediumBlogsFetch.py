# web scrapping pranshu's blogs from medium
import requests, bs4, json

res = requests.get("https://medium.com/@pranshu1902")
noStarchSoup = bs4.BeautifulSoup(res.content, 'html.parser')

images = noStarchSoup.select("a > div > img")

blogs = []
n = 3
end = n*2-1

intros = noStarchSoup.select("a > div > p")
data = noStarchSoup.select("a > div > img")

for blog in range(0,end,2):
    blogs.append({"title": data[blog].get("alt"), "image": data[blog].get("src"), "url": "https://medium.com"+data[blog].parent.parent.get("href"), "intro": intros[blog].text})

with open("./src/Components/blog.json", "w") as f:
    f.write("[")
    for i in range(2):
        f.write(json.dumps(blogs[i]))
        f.write(",")
    f.write(json.dumps(blogs[2]))
    f.write("]")

print("Blog data fetched!")
