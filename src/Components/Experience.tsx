import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import experienceLogo from "../experience.png";
import { experienceType, linkType } from "../Types/DataType";
import egov from "../Images/experience/egov.png";
import unilink from "../Images/experience/unilink.png";
import gdsc from "../Images/experience/gdsc.png";
import pupilfirst from "../Images/experience/pupilfirst.png";
import MIC from "../Images/experience/mic.png";
import Ecell from "../Images/experience/ecell.png";
import Android from "../Images/experience/android.png";
import Gdc from "../Images/experience/gdc.png";
import Vitrendz from "../Images/experience/vitrendz.png";
import Biosphere from "../Images/experience/biosphere.png";

export default function Experience() {
  const experiences: experienceType[] = [
    {
      name: "eGov Foundation",
      image: egov,
      description:
        "Part of a team building the CARE software deployed in multiple states of India in hospitals.",
      position: "SDE Intern",
      tech: ["Django", "React"],
      startDate: "Nov 2022",
      endDate: "Present",
    },
    {
      name: "Google Developer Student Club",
      image: gdsc,
      description:
        "Working with a great community working in fields like Open-source, Data Science, Blockchain.",
      position: "Web Developer",
      tech: ["MERN", "Tailwind"],
      startDate: "Oct 2022",
      endDate: "Present",
    },
    {
      name: "Uni-Link",
      image: unilink,
      description:
        "Unilink helps connect college students in a professional way ensuring that they have an enriching experience at college.",
      position: "Co-Founder",
      tech: ["Entrepreneurship", "Leadership", "Web Dev"],
      startDate: "Oct 2022",
      endDate: "Present",
    },

    {
      name: "Pupilfirst",
      image: pupilfirst,
      description:
        "Teaching Assistant of web development courses on Pupilfirst LMS, helping 3000+ students.",
      position: "Teaching Assistant",
      tech: ["Web development", "Teaching", "Leadership"],
      startDate: "Sept 2022",
      endDate: "Present",
    },
    {
      name: "Microsoft Innovations Club",
      image: MIC,
      description: "Member of a club, an official initiative of Microsoft.",
      position: "Member of Tech Team",
      tech: ["React", "Django", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "Present",
    },
    {
      name: "E-cell",
      image: Ecell,
      description:
        "Entrepreneurship club working to create great websites on entrepreneurships.",
      position: "Member of Tech Team",
      tech: ["React", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "Present",
    },
    {
      name: "Android Club",
      image: Android,
      description:
        "Member of a team working to create great websites and android apps.",
      position: "Member of Tech Team",
      tech: ["React", "React Native", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jul 2022",
      endDate: "Present",
    },
    {
      name: "VITrendz",
      image: Vitrendz,
      description:
        "Member of a team working on a project to make a lost and found website for VIT students.",
      position: "Front-End Developer",
      tech: ["React", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jun 2022",
      endDate: "Aug 2022",
    },
    {
      name: "GDC Internship",
      description:
        "Interning with Coronasafe and Pupilfirst in collaboration with AICTE.",
      position: "Full Stack Developer",
      image: Gdc,
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "May 2022",
      endDate: "Nov 2022",
    },
    {
      name: "Biosphere Club, VIT",
      description:
        "Member of the website team of a club raising awareness regarding climate change and its impact.",
      position: "Full Stack Developer",
      image: Biosphere,
      tech: ["Javascript", "Tailwind"],
      startDate: "Feb 2022",
      endDate: "Jul 2022",
    },
    {
      name: "GDC Fellowship",
      description:
        "One of the 40 out of 48k applicant students selected for GDC fellowship with AICTE for a training + internship programme.",
      position: "Full Stack Developer",
      image: Gdc,
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "Jan 2022",
      endDate: "May 2022",
    },
  ];

  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "Blogs", active: false, link: "/blogs" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: true, link: "/experience" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Experience | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />
      <div className="p-4 md:p-24 fadeIn mt-20 md:mt-12 flex flex-col gap-4 justify-start">
        {/* Intro */}
        <div className="flex flex-row gap-2 md:pb-12 w-full items-center">
          <div className="flex justify-center items-center w-1/3 md:w-1/5">
            <img className="bg-transparent" src={experienceLogo} alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-5xl md:text-7xl">
              Experience
            </h1>
          </div>
        </div>

        {/* Experiene */}
        <div className="h-full w-full flex justify-center items-center pb-36">
          <div className="flex flex-col gap-12 w-screen">
            {experiences.map((experience: experienceType, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="left-0 flex flex-row gap-4 justify-start items-center">
                    <div className="flex flex-col md:flex-row md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <div className="flex justify-center items-center w-1/4">
                        <img
                          src={experience.image}
                          alt={experience.name + " logo"}
                          className="rounded-full w-5/6"
                        />
                      </div>
                      <div className="flex flex-col md:w-3/4">
                        <p className="text-2xl font-bold text-[#66fcf1]">
                          {experience.name}
                        </p>
                        <p className="text-xl pt-2 text-[#01d293]">
                          {experience.position}
                        </p>
                        <p>{experience.description}</p>
                        <p className="flex flex-row flex-wrap gap-2 font-bold">
                          {experience.tech.map((tech: string) => {
                            return <p className="truncate">{tech}</p>;
                          })}
                        </p>
                        <p className="pt-4">
                          {experience.startDate} - {experience.endDate}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="p-2 bg-[#66fcf1] rounded-full"></p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="right-0 flex flex-row gap-4 justify-end items-center">
                    <div>
                      <p className="p-2 bg-[#66fcf1] rounded-full"></p>
                    </div>
                    <div className="flex flex-col md:flex-row md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <div className="flex justify-center items-center w-1/4">
                        <img
                          src={experience.image}
                          alt={experience.name + " logo"}
                          className="rounded-full w-5/6"
                        />
                      </div>
                      <div className="flex flex-col md:w-3/4">
                        <p className="text-2xl font-bold text-[#66fcf1]">
                          {experience.name}
                        </p>
                        <p className="text-xl pt-2 text-[#01d293]">
                          {experience.position}
                        </p>
                        <p>{experience.description}</p>
                        <p className="flex flex-row flex-wrap gap-2 font-bold">
                          {experience.tech.map((tech: string) => {
                            return <p className="truncate">{tech}</p>;
                          })}
                        </p>
                        <p className="pt-4">
                          {experience.startDate} - {experience.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
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
