import { useEffect } from "react";
import profile from "../Images/profile.jpg";
import computerLogo from "../coding.gif";
import mongo from "../Images/tech/mongodb.png";
import Nextjs from "../Images/tech/nextjs.png";
import React from "../Images/tech/React.png";
import Django from "../Images/tech/django.png";
import Flask from "../Images/tech/flask.png";
import Nodejs from "../Images/tech/nodejs.png";
import Typescript from "../Images/tech/typescript.svg";
import Tailwind from "../Images/tech/tailwindcss.svg";
import JavaScript from "../Images/tech/js.png";
import Python from "../Images/tech/python.png";
import jQuery from "../Images/tech/jquery.png";
import threejs from "../Images/tech/threejs.png";
import blender from "../Images/tech/blender.png";
import androidStudio from "../Images/tech/androidStudio.png";
import kotlin from "../Images/tech/kotlin.png";
import express from "../Images/tech/expressjs.png";
import figma from "../Images/tech/figma.png";
import tensorflow from "../Images/tech/tensorflow.png";
import langchain from "../Images/tech/langchain.png";
import azure from "../Images/tech/azure.png";
import flutter from "../Images/tech/flutter.png";
import dart from "../Images/tech/dart.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const technologies = [
    { name: "Django", img: Django },
    { name: "MongoDb", img: mongo },
    { name: "Express.Js", img: express },
    { name: "React / React Native", img: React },
    { name: "NodeJs", img: Nodejs },
    { name: "Next.Js", img: Nextjs },
    { name: "Tailwind", img: Tailwind },
    { name: "TypeScript", img: Typescript },
    { name: "JavaScript", img: JavaScript },
    { name: "Flask", img: Flask },
    { name: "Python", img: Python },
    { name: "TensorFlow", img: tensorflow },
    { name: "LangChain", img: langchain },
    { name: "Azure", img: azure },
    { name: "jQuery", img: jQuery },
    { name: "Kotlin", img: kotlin },
    { name: "Android Studio", img: androidStudio },
    { name: "Flutter", img: flutter },
    { name: "Dart", img: dart },
    { name: "ThreeJs", img: threejs },
    { name: "Figma", img: figma },
    { name: "Blender", img: blender },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Pranshu Aggarwal";
  }, []);

  return (
    <div>
      <div className="pt-6 mt-24 p-4 fadeIn md:p-24 flex flex-col gap-4 justify-center items-center w-full">
        {/* Intro */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pb-24 justify-center items-center">
          <div className="flex flex-col gap-4 justify-start items-start">
            <p className="text-[#01d293] text-xl flex justify-start items-start">
              Hi, I am
            </p>
            <h1 className="text-[#66fcf1] font-bold text-5xl md:text-7xl">
              Pranshu Aggarwal
            </h1>
            <h1 className="text-[#01d293] font-medium text-2xl md:text-4xl">
              <TypeAnimation
                sequence={[
                  "A Self-taught programmer",
                  2000,
                  "A Tech Enthusiast",
                  3000,
                  "A Serial Chiller",
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="pt-12 w-full md:w-2/3 text-xl">
              Tech enthusiast and self-taught programmer. Started learning to
              code as a hobby rather than a career focus. Familiar with a
              variety of technology including Django, React, Python, Javascript,
              Typescript, Java, etc. <br />
              <p className="text-[#01d293] pt-2 text-2xl">Sic Parvis Magna</p>
            </p>
            <a
              href="mailto:pranshu1902@gmail.com"
              className="md:w-1/6 mt-6 flex justify-center items-center font-bold transition duration-500 bg-[#66fcf1] hover:bg-[#45a29e] text-black rounded-lg p-2"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center items-center w-3/4">
            <img
              className="bg-transparent rounded-lg"
              src={computerLogo}
              alt=""
            />
          </div>
        </div>

        {/* About me */}
        <div className="h-full">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-4 w-full h-full">
            <div className="flex flex-col gap-4 md:w-1/2 justify-center text-xl">
              <h1 className="text-3xl font-bold text-[#ccd6f6]">About Me</h1>
              <hr />
              <div className="pt-6">
                <p>
                  Hello, I'm Pranshu, a junior CS undergrad at VIT, Chennai.
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
                <p>Interested in Machine Learning.</p>
              </div>
              <div>
                <p>
                  I also write&nbsp;
                  <a
                    href="#Blogs"
                    className="text-[#64ffda] txt hover:underline transition duration-1000"
                  >
                    blogs
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src={profile}
                alt="profile"
                width={"40%"}
                className="rounded-sm border-2 border-[#64ffda] md:p-3"
              />
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-2 justify-center items-center pt-12">
          <p className="text-3xl text-[#ccd6f6] font-bold">
            Technologies I have worked with:
          </p>
          <div className="flex flex-wrap md:flex-row gap-8 p-6 justify-center">
            {technologies.map((tech) => (
              <div className="flex flex-col gap-4 justify-center items-center hover:scale-110 transition duration-300">
                <img
                  id={tech.name}
                  src={tech.img}
                  width={50}
                  height={40}
                  alt={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
