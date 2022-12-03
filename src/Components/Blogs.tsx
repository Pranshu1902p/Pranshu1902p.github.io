import { useEffect } from "react";
import { linkType } from "../Types/DataType";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import data from "./blog.json";

// import { PythonProvider } from "react-py";

// https://www.npmjs.com/package/react-py
// https://www.youtube.com/watch?v=VFLeF5Pu34A

export default function Blogs() {
  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "About", active: false, link: "/about" },
    { title: "Blogs", active: true, link: "/blogs" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
  ];

  useEffect(() => {
    document.title = "Blogs | Pranshu Aggarwal";
  });

  // web scrapper python code
  // const pythonCode = `
  // print("data fetching started")
  // import requests, bs4, json
  // res = requests.get("https://medium.com/@pranshu1902")
  // noStarchSoup = bs4.BeautifulSoup(res.content, 'html.parser')
  // images = noStarchSoup.select("a > div > img")
  // blogs = []
  // n = 3
  // end = n*2-1
  // intros = noStarchSoup.select("a > div > p")
  // data = noStarchSoup.select("a > div > img")

  // for blog in range(0,end,2):
  //     blogs.append({"title": data[blog].get("alt"), "image": data[blog].get("src"), "url": "https://medium.com"+data[blog].parent.parent.get("href"), "intro": intros[blog].text})

  // with open("blog.json", "w") as f:
  //     f.write("[")
  //     for i in blogs:
  //         f.write(json.dumps(i))
  //         f.write(",")
  //     f.write("]")
  // `;

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      {/* <PythonProvider pythonCode={pythonCode}></PythonProvider> */}
      <Header filters={filters} />
      <div className="pt-6 pb-24 p-4 md:p-24 flex flex-col gap-4 w-full">
        <div style={{ paddingBottom: "3%" }} className="flex flex-row pt-6">
          <h1 className="text-[#66fcf1] font-bold flex text-5xl md:text-8xl">
            Blogs
          </h1>
        </div>
        <div
          className="text-3xl"
          style={{ paddingBottom: "15%" }}
        >
          Some of my latest blogs
        </div>
        <div className="flex flex-col gap-12">
          {data.map((blog) => (
            <div className="bg-[#112240] rounded-lg p-3 shadow-lg hover:shadow-2xl transition duration-300">
              <a
                className="flex flex-col md:flex-row gap-2"
                href={blog.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-2xl font-medium text-[#66fcf1]">
                    {blog.title}
                  </p>
                  <p className="pt-6">{blog.intro}</p>
                </div>
              </a>
            </div>
          ))}
          <a
            href="https://medium.com/@pranshu1902"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <button className="px-8 hover:bg-[#112240] transition duration-300 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg">
              Read More
            </button>
          </a>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
