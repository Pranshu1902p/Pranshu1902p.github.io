import { useEffect } from "react";
import { linkType } from "../Types/DataType";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

export default function About() {
  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "About", active: true, link: "/about" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
  ];

  useEffect(() => {
    document.title = "About | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />

      <div className="p-4 md:p-24 flex flex-col gap-4 justify-start">
        {/* Intro */}
        <div className="flex flex-row gap-6 pb-12 w-full items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-6xl">About</h1>
          </div>
        </div>

        <div className="pl-12 h-full pb-24">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-4 w-full h-full">
            <div className="flex flex-col gap-4 md:w-1/2 justify-center text-xl">
              <div className="pt-6">
                <p>
                  Hello, I'm Pranshu, a sophomore CS undergrad at VIT, Chennai.
                </p>
              </div>
              <div>
                <p>
                  I am a self-taught programmer. Started learning to code as a
                  hobby rather than a career focus. I build websites for people
                  from all walks of life. Primarily using Django, MERN stack.
                </p>
              </div>
              <div>
                <p>
                  I'm a GDC Fellow '22 and Teaching Assistant @
                  <a
                    href="https://www.pupilfirst.org/"
                    rel="noreferrer"
                    target={"_blank"}
                    className="text-[#64ffda] txt hover:underline transition duration-1000"
                  >
                    Pupilfirst
                  </a>
                  &nbsp; working with &nbsp;
                  <a
                    href="https://www.aicte-india.org/"
                    rel="noreferrer"
                    target={"_blank"}
                    className="text-[#64ffda] txt hover:underline transition duration-1000"
                  >
                    AICTE
                  </a>
                  &nbsp; as a full-stack web developer.
                </p>
                <p>Entrepreneurship and self-help books enthusiast.</p>
                <div className="pt-4">
                  <p>
                    Currently exploring Cloud Computing and App Development.
                  </p>
                </div>
                <div>
                  <p>
                    I also write blogs, find them &nbsp;
                    <a
                      href="https://medium.com/@pranshu1902"
                      rel="noreferrer"
                      target={"_blank"}
                      className="text-[#64ffda] txt hover:underline transition duration-1000"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src="https://avatars.githubusercontent.com/u/70687348?v=4"
                alt="profile"
                width={"40%"}
                className="rounded-full border-2 border-[#64ffda] md:p-3"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
