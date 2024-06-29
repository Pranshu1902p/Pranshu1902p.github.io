import { useState } from "react";
import Switch from "react-switch";
import codeLogo from "../code.png";
import { projectType } from "../Types/DataType";

// import figma images
import booksworld from "../Images/figma/booksworld.png";
import privagram from "../Images/figma/privagram.png";

// Import project images
import jobpulse1 from "../Images/projects/jobpulse1.png";
import jobpulse2 from "../Images/projects/jobpulse2.png";
import jobpulse3 from "../Images/projects/jobpulse3.png";
import jobpulse4 from "../Images/projects/jobpulse4.png";
import jobpulse5 from "../Images/projects/jobpulse5.png";
import gem1 from "../Images/projects/gem1.png";
import gem2 from "../Images/projects/gem2.png";
import gem3 from "../Images/projects/gem3.png";
import ayushma1 from "../Images/projects/ayushma1.png";
import ayushma2 from "../Images/projects/ayushma2.png";
import ayushma3 from "../Images/projects/ayushma3.png";
import vibrance1 from "../Images/projects/vibrance1.png";
import vibrance2 from "../Images/projects/vibrance2.png";
import web_verse from "../Images/projects/web-verse.png";
import voting1 from "../Images/projects/voting1.png";
import voting2 from "../Images/projects/voting2.png";
import voting3 from "../Images/projects/voting3.png";
import voting4 from "../Images/projects/voting4.png";
import voting5 from "../Images/projects/voting5.png";
import care from "../Images/projects/care.png";
import unilink1 from "../Images/projects/unilink1.png";
import unilink2 from "../Images/projects/unilink2.png";
import unilink3 from "../Images/projects/unilink3.png";
import gladdenProject from "../Images/projects/thegladdenproject.png";
import BizzCard from "../Images/projects/bizzcard.png";
import BizzCard1 from "../Images/projects/bizzcard1.png";
import BizzCard2 from "../Images/projects/bizzcard2.png";
import BooksWorld from "../Images/projects/books_world.png";
import BooksWorld1 from "../Images/projects/books_world1.png";
import BooksWorld2 from "../Images/projects/books_world2.png";
import BooksWorld3 from "../Images/projects/books_world3.png";
import MoneyManager from "../Images/projects/money_manager.png";
import MoneyManager1 from "../Images/projects/money_manager1.png";
import MoneyManager2 from "../Images/projects/money_manager2.png";
import PChat from "../Images/projects/p_chat.png";
import TheGladdenProject from "../Images/projects/gladdenproject.png";
import MartialArts from "../Images/projects/martial arts.png";
import Jarvis from "../Images/projects/jarvis.png";
import Breakout from "../Images/projects/breakout.png";
import MazeSolver from "../Images/projects/maze.png";
import Carousal from "./Common/Carousal";

export default function Projects() {
  const figmaProjects: projectType[] = [
    {
      name: "Book's World",
      description:
        "One place to manage all the books you ever read. This is the mobile UI/UX design for my web dev project: Book's World.",
      figmaLink:
        "https://www.figma.com/file/4HcTbjhdY9yGU5xvo3t2CE/Books-World?type=design&node-id=0%3A1&mode=design&t=oPxmyLxL2RqVDtBg-1",
      image: [booksworld],
      tech: [{ name: "Figma" }],
    },
    {
      name: "Privagram",
      description:
        "Just your gallery app but with the touch of Instagram. This is a figma design of the app.",
      figmaLink:
        "https://www.figma.com/file/SS3RM7j5q2WX03Fuft9KQ4/Privagram-(Copy)?type=design&node-id=0%3A1&mode=design&t=ReEZiUzeI62ejPnr-1",
      image: [privagram],
      tech: [{ name: "Figma" }],
    },
  ];

  const githubProjects: projectType[] = [
    {
      name: "JobPulse",
      description:
        "JobPulse simplifies your job application process by keeping all your applications organized in one place. Track your progress and manage deadlines, ensuring you never miss an opportunity. With an intuitive interface and easy-to-use features, JobPulse helps you stay on top of your job search with ease.",
      githubLink: "https://github.com/Pranshu1902/JobPulse-fe",
      link: "https://jobpulse-fe.vercel.app/",
      image: [jobpulse1, jobpulse2, jobpulse3, jobpulse4, jobpulse5],
      tech: [
        { name: "Next.Js" },
        { name: "Django" },
        { name: "PostgreSQL" },
      ],
    },
    {
      name: "GeM WatchDogs",
      description:
        "A groundbreaking solution aimed at revolutionizing the online shopping experience on the Government e-Marketplace (GeM) platform. A group project built with @Shubhamm69, @Kushagra102, @Geoffrey-Anto, @Chiranjeev13, and @Ekta-1-9 under SIH'23.",
      githubLink: "https://github.com/Geoffrey-Anto/sih-2023",
      image: [gem1, gem2, gem3],
      tech: [
        { name: "Chrome Extension" },
        { name: "Puppeteer" },
        { name: "React.Js" },
      ],
    },
    {
      name: "Ayushma",
      description:
        "Ayushma is a digital AI health and nursing assistant to help Nurses and Doctors in the most remote parts of the world. It is a part of the Open Health Care Network",
      githubLink: "https://github.com/coronasafe/ayushma/",
      link: "https://ayushma.ohc.network/",
      image: [ayushma1, ayushma2, ayushma3],
      tech: [{ name: "Django" }, { name: "Next.Js" }, { name: "TypeScript" }],
    },
    {
      name: "Web-Verse",
      description:
        "Web-Verse is the complete back-end for an online university management system with features like hostel, course, faculty, etc. A group project built with @Kushagra102 and @Geoffrey-Anto under Android Club.",
      githubLink:
        "https://github.com/Android-Club-VITC/webverse/tree/main/server",
      image: [web_verse],
      tech: [{ name: "ExpressJs" }, { name: "NodeJs" }, { name: "Prisma" }],
    },
    {
      name: "Vibrance App",
      description:
        "A mobile app for the cultural fest: Vibrance 2023 at VIT Chennai. Developed under Android Club VITC. Lists the events during the fest along with merchandise.",
      githubLink: "https://github.com/Android-Club-VITC/Vibrance-2023",
      image: [vibrance1, vibrance2],
      tech: [{ name: "React Native" }],
    },
    {
      name: "Online Voting",
      description:
        "One shot platform to host elections and view results. Manage your voters, view live results, get result graphs and much more.",
      link: "https://online-voting-pranshu1902.onrender.com/",
      githubLink: "https://github.com/Pranshu1902/Online-Voting",
      image: [voting1, voting2, voting3, voting4, voting5],
      tech: [
        { name: "ExpressJs" },
        { name: "NodeJs" },
        { name: "EJS" },
        { name: "Postgres" },
      ],
    },
    {
      name: "Care",
      description:
        "Care is an integrated tele-triage+bed allocation+patient shifting tool for implementing a decentralised Covid19 management strategy.",
      link: "https://care.coronasafe.in/",
      githubLink: "https://github.com/coronasafe/care_fe/",
      image: [care],
      tech: [
        { name: "Django" },
        { name: "React" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Uni-Link",
      description:
        "There are numerous universities with thousands of clubs gathered inside but they are not connected. Every club has a different website and some of the clubs have no website at all. Hence our platform helps in linking them together, helping students save time and effort. Uni-Link provides features like club email subscriptions, public forums, etc. This project was built by team: United Developers under HackVSIT Hackathon.",
      link: "https://uni-link-fe.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/UniLink_fe/",
      image: [unilink1, unilink2, unilink3],
      tech: [
        { name: "MongoDb" },
        { name: "Express.js" },
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "The Gladden Project",
      description:
        "People are not comfortable in sharing their personal life with stranger over the phone, that's why we created this amazing chatbot which offers you the same experience without having you to worry about your confidentiality.",
      link: "https://the-gladden-project.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/The-Gladden-Project-fe/",
      image: [gladdenProject],
      tech: [
        { name: "Machine Learning" },
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Bizz Card",
      description:
        "Create your digital identity today by using our simple and easy to use website to leave an amazing first impression. Created this project as a team for a hackathon.",
      link: "https://bizz-card.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Bizz-Card-fe/",
      image: [BizzCard, BizzCard1, BizzCard2],
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Books World",
      description:
        "One place to manage all the books you ever read. Get detailed analysis on the book you read, all comments on your books to track your records.",
      link: "https://books-world-pranshu1902.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Books-World-fe/",
      image: [BooksWorld, BooksWorld1, BooksWorld2, BooksWorld3],
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Money Manager",
      description:
        "Ever felt like spending a lot of money without keeping any track? Use our site to manage all your money and know exactly where it is going.",
      link: "https://money-manager-pranshu1902.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Money-Manager-fe",
      image: [MoneyManager, MoneyManager1, MoneyManager2],
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "P-Chat",
      description:
        "Chat like never before. A free and open-source chatting site to connect with your friends. Built using Django. Fast, secure, reliable, easy to use.",
      link: "http://p-chat-pranshu1902.herokuapp.com/",
      githubLink: "https://github.com/Pranshu1902/P-Chat/",
      image: [PChat],
      tech: [{ name: "Django" }, { name: "Tailwind" }],
    },
    {
      name: "The Gladden Project",
      description:
        "Feel like you want some personalized advice for your mental stress but are afraid to share you personal info with stranger? Then use your platform where you can get personalized guidance from our bot without worrying about privacy.",
      link: "http://pranshu1902.github.io/TheGladdenProject/",
      githubLink: "https://github.com/Pranshu1902/TheGladdenProject/",
      image: [TheGladdenProject],
      tech: [{ name: "JavaScript" }],
    },
    {
      name: "Martial Arts Simulator",
      description:
        "This is an online game where I have simulted a martial artist with some commands like kick, punch, block, etc.",
      link: "https://pranshu1902.github.io/Martial%20arts/index.html",
      githubLink:
        "https://github.com/Pranshu1902/pranshu1902.github.io/tree/master/Martial arts",
      image: [MartialArts],
      tech: [{ name: "JavaScript" }],
    },
    {
      name: "Jarvis: Meeting Manager",
      description:
        "Automatically joins meetings for me based on the time table without any commands. Also, it acts as a virtual assistant and helps me with day-to-day tasks.",
      link: "https://drive.google.com/u/0/uc?id=1ewjKZQvJko5kxUpUTeKQ5z1BGsah-34l&export=download",
      githubLink: "https://github.com/Pranshu1902/Voice-Assistant-Jarvis",
      image: [Jarvis],
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
    {
      name: "Breakout: Sixth Sense",
      description:
        "Forget keyboards, use your hand gestures to play the game of breakout.",
      link: "https://pranshu1902.itch.io/breakout-sixth-sense-game",
      githubLink: "https://github.com/Pranshu1902/Breakout-Sixth-sense-version",
      image: [Breakout],
      tech: [{ name: "Python" }, { name: "PyGame" }, { name: "OpenCV" }],
    },
    {
      name: "Maze Solver AI",
      description:
        "This AI solves the maze using Depth-First Search and Breadth-First Search and returns an image comparing both algorithms. I have also made a GUI for this.",
      githubLink: "https://github.com/Pranshu1902/Maze-Solver",
      image: [MazeSolver],
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
  ];

  const [showGithubProject, setShowGithubProject] = useState(true);

  const [limit, setLimit] = useState(3);

  const displayProject: any = (projects: projectType[]) => {
    return (
      <div className="flex flex-col gap-8">
        {projects.slice(0, limit).map((project: projectType, index) => {
          const styleClass: string =
            index % 2 === 0
              ? "flex flex-col lg:flex-row"
              : "flex flex-col lg:flex-row-reverse";
          return (
            <div className={styleClass + " gap-12"}>
              {/* Image */}
              <div className="w-full lg:w-1/2 shadow-lg">
                {project.image.length === 1 ? (
                  <img className="rounded-lg" src={project.image[0]} alt="" />
                ) : (
                  <Carousal image={project.image} />
                )}
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center h-full w-full lg:w-1/2">
                <p className="text-2xl md:text-4xl text-[#66fcf1] font-bold pb-4">
                  {project.name}
                </p>
                <p className="text-lg pb-4 bg-[#112240] rounded-lg p-4 shadow-lg">
                  {project.description}
                </p>
                <p className="flex flex-wrap gap-4 pb-4 text-xl">
                  {project.tech.map((tech) => (
                    <div className="font-bold">{tech.name}</div>
                  ))}
                </p>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  )}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                    >
                      <i className="fa-brands fa-figma"></i>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                    >
                      <i className="fa fa-external-link"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="Projects">
      <div className="w-full pt-12 p-4 md:p-24 flex flex-col gap-4">
        <div className="flex md:flex-row flex-col justify-between md:gap-2">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row pt-6 justify-start items-center">
              <img
                src={codeLogo}
                alt="code logo"
                className="bg-transparent w-1/12 flex"
              />
              <h1 className="text-[#66fcf1] font-bold flex text-3xl md:text-5xl">
                Projects
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <i className="text-2xl md:text-3xl fa-brands fa-figma"></i>
            <Switch
              onColor="#01d293"
              offColor="#13BDFE"
              handleDiameter={20}
              uncheckedIcon={<></>}
              checkedIcon={<></>}
              checked={showGithubProject}
              onChange={() => {
                setLimit(3);
                setShowGithubProject(!showGithubProject);
              }}
            />
            <i className="text-2xl md:text-3xl fa fa-github"></i>
          </div>
        </div>
        <hr />

        {/* Projects List */}
        {showGithubProject
          ? displayProject(githubProjects)
          : displayProject(figmaProjects)}

        {/* Load More */}
        {((showGithubProject && limit < githubProjects.length) ||
          (!showGithubProject && limit < figmaProjects.length)) && (
          <div className="flex justify-center items-center mt-6">
            <button
              className="px-8 hover:bg-[#112240] transition duration-300 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg"
              onClick={() => setLimit(limit + 3)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
