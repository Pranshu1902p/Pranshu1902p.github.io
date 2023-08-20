import { useEffect, useState } from "react";
import Switch from "react-switch";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import codeLogo from "../code.png";
import { linkType, projectType } from "../Types/DataType";

// import figma images
import privagram from "../Images/figma/privagram.png";

// Import project images
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
      name: "Web-Verse",
      description:
        "Web-Verse is the complete back-end for an online university management system with features like hostel, course, faculty, etc. A group project built with @Kushagra102 and @Geoffrey-Anto under Android Club.",
      githubLink:
        "https://github.com/Android-Club-VITC/webverse/tree/main/server",
      image: [web_verse],
      tech: [{ name: "ExpressJs" }, { name: "NodeJs" }, { name: "Prisma" }],
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

  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "Blogs", active: false, link: "/blogs" },
    { title: "Projects", active: true, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
  ];

  const displayProject: any = (projects: projectType[]) => {
    return (
      <div className="flex flex-col gap-36">
        {projects.map((project: projectType, index) => {
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
                <p className="text-4xl text-[#66fcf1] font-bold pb-4">
                  {project.name}
                </p>
                <p className="text-xl pb-4 bg-[#112240] rounded-lg p-4 shadow-lg">
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

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Projects | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      <Header filters={filters} />
      <div className="w-full p-4 fadeIn mt-20 md:mt-12 pb-36 md:p-24 flex flex-col gap-4">
        <div className="flex md:flex-row flex-col justify-between md:gap-2 pb-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row pt-6 justify-start items-center">
              <img
                src={codeLogo}
                alt="code logo"
                className="bg-transparent w-1/6 flex"
              />
              <h1 className="text-[#66fcf1] font-bold flex text-5xl md:text-7xl">
                Projects
              </h1>
            </div>
            <div
              className="text-3xl flex justify-start pl-12"
              style={{ paddingBottom: "15%" }}
            >
              Some things I've built
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            {/* <button
              className="text-[#66fcf1]"
              onClick={() => setShowGithubProject(!showGithubProject)}
            >
              Toggle
            </button> */}
            <i className="text-2xl md:text-5xl fa-brands fa-figma"></i>
            <Switch
              onColor="#01d293"
              offColor="#13BDFE"
              handleDiameter={20}
              uncheckedIcon={<></>}
              checkedIcon={<></>}
              checked={showGithubProject}
              onChange={() => {
                setShowGithubProject(!showGithubProject);
              }}
            />
            <i className="text-2xl md:text-5xl fa fa-github"></i>
          </div>
        </div>
        {/* Projects List */}
        {showGithubProject
          ? displayProject(githubProjects)
          : displayProject(figmaProjects)}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
