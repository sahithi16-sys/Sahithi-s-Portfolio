import Profile from "./Profile";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Community from "./Community";
import PingMe from "./PingMe";
import Header from "./Header";
import Particles from "../Particles";

import apt01 from "../assets/apt_01.png";
import apt02 from "../assets/apt_02.png";
import apt03 from "../assets/apt_03.png";
import apt04 from "../assets/apt_04.png";
import apt05 from "../assets/apt_05.png";

import eduQuest01 from "../assets/eduQuest_01.png";
import eduQuest02 from "../assets/eduQuest_02.png";
import eduQuest03 from "../assets/eduQuest_03.png";
import eduQuest04 from "../assets/eduQuest_04.png";
import eduQuest05 from "../assets/eduQuest_05.png";

import ena01 from "../assets/ena_01.png";
import ena02 from "../assets/ena_02.png";
import ena03 from "../assets/ena_03.png";
import ena04 from "../assets/ena_04.png";
import ena05 from "../assets/ena_05.png";
import ena06 from "../assets/ena_06.png";
import ena07 from "../assets/ena_07.png";

import isteLogo from "../assets/iste_logo.png";
import thLogo from "../assets/th_logo.png";

function HomePage() {
  const skills = {
    pl: [
      {
        name: "C",
        className: "devicon-c-plain colored",
      },
      {
        name: "C++",
        className: "devicon-cplusplus-plain colored",
      },
      {
        name: "Java",
        className: "devicon-java-plain colored",
      },
      {
        name: "HTML",
        className: "devicon-html5-plain colored",
      },
      {
        name: "CSS",
        className: "devicon-css3-plain colored",
      },
      {
        name: "JavaScript",
        className: "devicon-javascript-plain colored",
      },
    ],

    db: [
      {
        name: "MySQL",
        className: "devicon-mysql-plain colored",
      },
      {
        name: "MongoDB",
        className: "devicon-mongodb-plain colored",
      },
    ],

    fw: [
      {
        name: "React",
        className: "devicon-react-original colored",
      },
      {
        name: "MERN Stack",
        className: "devicon-nodejs-plain colored",
        stack: [
          "devicon-mongodb-plain colored",
          "devicon-express-original",
          "devicon-react-original colored",
          "devicon-nodejs-plain colored",
        ],
      },
    ],

    cp: [
      {
        platform: "CodeChef",
        level: "1 Star",
        rating: 1330,
        className: "devicon-codechef-plain colored",
        profile_link: "https://www.codechef.com/users/sahithi011",
      },
      {
        platform: "Codeforces",
        rating: 592,
        className: "devicon-codeforces-plain colored",
        profile_link: "https://codeforces.com/profile/sahithi.011",
      },
    ],

    dt: [
      {
        name: "Git",
        className: "devicon-git-plain colored",
      },
      {
        name: "GitHub",
        className: "devicon-github-original",
      },
      {
        name: "VS Code",
        className: "devicon-vscode-plain colored",
      },
    ],
  };

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institute: "VNR Vignana Jyothi Institute of Engineering and Technology",
      grade: "9.05 CGPA (I Year)",
      duration: "2024 – 2028",
    },
    {
      degree: "Intermediate",
      field: "M.P.C",
      institute: "Narayana Junior College",
      grade: "96.8%",
      duration: "2022 – 2024",
    },
  ];

  const projects = [
  {
    title: "EduQuest",
    subtitle: "Gamified Learning Platform for Schools and Colleges",
    description: [
      "Designed frontend using ReactJS",
      "Prototype developed for Smart India Hackathon (SIH) 2025",
    ],
    techStack: ["ReactJS"],
    repo: "https://github.com/sahithi16-sys/SIH.git",
    images: [eduQuest01, eduQuest02, eduQuest03, eduQuest04, eduQuest05],
  },
  {
    title: "Event Networking Assistant",
    subtitle: "Desktop Application",
    description: [
      "Designed and developed complete application",
      "Implemented using Java AWT and SQLPlus",
    ],
    techStack: ["Java AWT", "SQLPlus"],
    repo: "https://github.com/sahithi16-sys/smart-attendance-permission-portal.git",
    images: [ena01, ena02, ena03, ena04, ena05, ena06, ena07],
  },
  {
    title: "Attendance Permission Tracker",
    subtitle: "College Attendance Management System",
    description: [
      "Handles student attendance permission requests",
      "Built full-stack web application",
    ],
    techStack: ["ReactJS", "Bootstrap", "ExpressJS", "NodeJS", "MongoDB"],
    repo: "https://github.com/sahithi16-sys/Event-Networking-Assistant.git",
    images: [apt01, apt02, apt03, apt04, apt05],
  },
];


  const community = [
    {
      name: "ISTE VNRVJIET",
      logo: isteLogo,
      role: "Volunteer",
      description: "Volunteer involved in Technical and Design Domain",
    },
    {
      name: "Turing Hut",
      logo: thLogo,
      role: "Mentee",
      description:
        "Currently under mentorship to improve DSA and competitive programming skills",
    },
  ];

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <Profile />
        </div>
        <div className="col-md-8">
          <div className="row mb-1">
            <Header />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
            <div className="col">
              <Skills skills={skills} />
            </div>
            <div className="col">
              <Education education={education} />
            </div>
            <div className="col">
              <Projects projects={projects} />
            </div>
            <div className="col">
              <Community community={community} />
            </div>
            <div className="col">
              <PingMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
