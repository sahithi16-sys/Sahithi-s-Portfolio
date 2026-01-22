import Profile from "./Profile";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Community from "./Community";
import PingMe from "./PingMe";
import Header from "./Header";
import Particles from "../Particles";

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
      }
    ],

    cp: [
      {
        platform: "CodeChef",
        level: "1 Star",
        rating: 1330,
        className: "devicon-codechef-plain colored",
      },
      {
        platform: "Codeforces",
        rating: 592,
        className: "devicon-codeforces-plain colored",
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
      images: ["/eduQuest_01.png","/eduQuest_02.png","/eduQuest_03.png","/eduQuest_04.png","/eduQuest_05.png"]
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
      images: ["/ena_01.png","/ena_02.png","/ena_03.png","/ena_04.png","ena_05.png","/ena_06.png","/ena_07.png"]
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
      images:["/apt_01.png","/apt_02.png","/apt_03.png","/apt_04.png","/apt_05.png"]
    },
  ];

  const community = [
    {
      name: "ISTE VNRVJIET",
      logo: "/iste_logo.png",
      role: "Volunteer",
      description: "Volunteer involved in Technical and Design Domain",
    },
    {
      name: "Turing Hut",
      logo: "/th_logo.png",
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
                    <Education education={education}/>
                    </div>
                    <div className="col">
                    <Projects projects={projects}/>
                    </div>
                    <div className="col">
                    <Community community={community}/>
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
