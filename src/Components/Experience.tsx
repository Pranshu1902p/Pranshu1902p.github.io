import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experienceLogo from "../experience.png";
import { experienceType } from "../Types/DataType";
import attack_capital from "../Images/experience/attack_capital.jpeg";
import samsung from "../Images/experience/samsung.jpg";
import vit from "../Images/experience/vit.png";
import gssoc from "../Images/experience/gssoc.png";
import microsoft from "../Images/experience/microsoft.png";
import egov from "../Images/experience/egov.png";
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
      name: "Attack Capital",
      image: attack_capital,
      description:
        "Part of a YC funded, NY based startup. Led the frontend side of the OpenMic.Ai project. Also involved in the backend.",
      position: "Freelancer",
      tech: ["NextJs", "Prisma", "LLM"],
      startDate: "Oct 2023",
      endDate: "Nov 2023",
    },
    {
      name: "Samsung",
      image: samsung,
      description:
        "Part of the Samsung PRISM research program to work with professionals from Samsung",
      position: "PRISM Developer",
      tech: ["Research"],
      startDate: "Sept 2023",
      endDate: "Present",
    },
    {
      name: "VIT Chennai",
      image: vit,
      description:
        "Developed the application for the IPROPEL (Intelligent Programming Portal for Enhanced Learning) using Next.js and Django REST Framework under Professor Janaki Meena",
      position: "Project Intern",
      tech: ["NextJs", "Django"],
      startDate: "Aug 2023",
      endDate: "Dec 2023",
    },
    {
      name: "GirlScript Summer of Code",
      image: gssoc,
      description:
        "Mentor for the open source contributions team for duration of 3 months. Mentored the project: CrazyCoder",
      position: "Mentor",
      tech: ["Leadership", "Team Management", "Open Source"],
      startDate: "May 2023",
      endDate: "Aug 2023",
    },
    {
      name: "Android Club",
      image: Android,
      description: "Leaded a team of developers to build great products and conduct large scale events.",
      position: "Technical Lead",
      tech: ["Leadership", "Team Management", "React Native"],
      startDate: "May 2023",
      endDate: "Mar 2024",
    },
    {
      name: "Microsoft",
      image: microsoft,
      description:
        "Part of the amazing community from all around the world and exploring Microsoft Products.",
      position: "Microsoft Learn Student Ambassador",
      tech: ["Microsoft Learn", "Teamwork"],
      startDate: "Apr 2023",
      endDate: "Present",
    },
    {
      name: "eGov Foundation",
      image: egov,
      description:
        "Part of a team building the CARE software deployed in multiple states of India in hospitals.",
      position: "SDE Intern",
      tech: ["Django", "React"],
      startDate: "Nov 2022",
      endDate: "Apr 2024",
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
      name: "Pupilfirst",
      image: pupilfirst,
      description:
        "Teaching Assistant of web development courses on Pupilfirst LMS, helping 3000+ students.",
      position: "Teaching Assistant",
      tech: ["Web development", "Teaching", "Leadership"],
      startDate: "Sept 2022",
      endDate: "Aug 2023",
    },
    {
      name: "Microsoft Innovations Club",
      image: MIC,
      description: "Member of a club, an official initiative of Microsoft.",
      position: "Member of Tech Team",
      tech: ["React", "Django", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "July 2023",
    },
    {
      name: "E-cell",
      image: Ecell,
      description:
        "Entrepreneurship club working to create great websites on entrepreneurships.",
      position: "Member of Tech Team",
      tech: ["React", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "July 2023",
    },
    {
      name: "Android Club",
      image: Android,
      description:
        "Member of a team working to create great websites and android apps.",
      position: "Member of Tech Team",
      tech: ["React", "React Native", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jul 2022",
      endDate: "May 2023",
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
      position: "National Software Fellow",
      image: Gdc,
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "Jan 2022",
      endDate: "May 2022",
    },
  ];

  const [limit, setLimit] = useState(5);

  const displayExperience = () => {
    return (
      <VerticalTimeline lineColor="#c5c6c7">
        {experiences.slice(0, limit).map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#112240",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #66fcf1",
            }}
            date={experience.startDate + " - " + experience.endDate}
            iconStyle={{ background: "#112240", color: "#c5c6c7" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  className="rounded-full"
                  src={experience.image}
                  alt="test"
                />
              </div>
            }
          >
            <h3 className="text-2xl vertical-timeline-element-title text-[#01d293]">
              {experience.position}
            </h3>
            <h4 className="text-xl vertical-timeline-element-subtitle text-[#66FCF1]">
              {experience.name}
            </h4>
            <div className="flex flex-wrap gap-2 font-bold">
              <p>{experience.description}</p>
              {experience.tech.map((tech) => (
                <p>{tech}</p>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  };

  return (
    <div id="Experience">
      <div className="pt-12 p-4 md:p-24 flex flex-col justify-start">
        {/* Intro */}
        <div className="flex flex-row gap-2 w-full items-center">
          <div className="flex justify-center items-center w-1/6 md:w-1/12">
            <img className="bg-transparent" src={experienceLogo} alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-3xl md:text-5xl">
              Experience
            </h1>
          </div>
        </div>
        <hr />
        {/* Experiene */}
        <div className="h-full w-full flex justify-center items-center pb-36 mt-6">
          <div className="flex flex-col gap-12 w-screen">
            {displayExperience()}
            {limit < experiences.length && (
              <div className="flex justify-center items-center">
                <button
                  className="px-8 hover:bg-[#112240] transition duration-300 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg"
                  onClick={() => setLimit(limit + 5)}
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
