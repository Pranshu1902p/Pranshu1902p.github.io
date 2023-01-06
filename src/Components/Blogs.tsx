import { useEffect } from "react";
import { linkType } from "../Types/DataType";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import data from "./blog.json";
import logo from "../blog.png";

export default function Blogs() {
  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "Blogs", active: true, link: "/blogs" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Blogs | Pranshu Aggarwal";
  });

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />
      <div className="pt-6 mt-20 md:mt-12 pb-24 fadeIn p-4 md:p-24 flex flex-col gap-4 w-full">
        <div style={{ paddingBottom: "3%" }} className="flex flex-row pt-6">
          <img
            src={logo}
            alt="blog logo"
            className="bg-transparent w-1/6 flex"
          />
          <h1 className="text-[#66fcf1] font-bold flex text-5xl md:text-7xl items-center">
            Blogs
          </h1>
        </div>
        <div className="text-3xl" style={{ paddingBottom: "15%" }}>
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
