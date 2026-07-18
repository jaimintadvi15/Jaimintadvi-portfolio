import { SkillCategory, Experience, Project, Achievement } from './types';

export const personalInfo = {
  name: "Jaimin Tadvi",
  title: "Computer Science Engineering Student",
  role: "Web Team Member",
  organization: "Code Vimarsh Club",
  university: "The Maharaja Sayajirao University of Baroda",
  degree: "B.E. Computer Science & Engineering",
  location: "Vadodara, Gujarat, India",
  currentlyLearning: "Full-Stack Web Development, System Design, Cloud Computing",
  bio: "I am a passionate 2nd-year Computer Science Engineering student with an eager interest in building functional, high-performance, and visually gorgeous web applications. As a Web Team Member at the Code Vimarsh Club, I collaborate with talented peers to maintain and enrich our club's online presence, while constantly pushing my boundaries in frontend design and backend systems.",
  tagline: "Bridging the gap between creative visual layouts and solid software architecture."
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", iconName: "Code2", color: "from-blue-500 to-indigo-600" },
      { name: "C", iconName: "Binary", color: "from-blue-400 to-blue-600" },
      { name: "Java", iconName: "Coffee", color: "from-red-500 to-orange-600" },
      { name: "Python", iconName: "FileCode", color: "from-yellow-500 to-green-600" },
      { name: "JavaScript", iconName: "FileJson", color: "from-yellow-400 to-amber-500" },
      { name: "HTML5", iconName: "Layout", color: "from-orange-500 to-red-500" },
      { name: "CSS3", iconName: "Palette", color: "from-blue-400 to-indigo-500" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", iconName: "Atom", color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", iconName: "Server", color: "from-green-500 to-emerald-600" },
      { name: "Express.js", iconName: "Cpu", color: "from-gray-400 to-gray-600" },
      { name: "Tailwind CSS", iconName: "Layers", color: "from-teal-400 to-cyan-500" },
      { name: "Bootstrap", iconName: "Grid", color: "from-purple-500 to-indigo-600" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", iconName: "GitBranch", color: "from-orange-600 to-red-600" },
      { name: "GitHub", iconName: "Github", color: "from-gray-700 to-gray-900" },
      { name: "VS Code", iconName: "Terminal", color: "from-blue-500 to-sky-600" },
      { name: "Postman", iconName: "Send", color: "from-orange-500 to-red-600" },
      { name: "Figma", iconName: "PenTool", color: "from-pink-500 to-purple-600" }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Web Team Member",
    company: "Code Vimarsh Club",
    duration: "2024 — Present",
    description: [
      "Collaborate with the tech team to build, upgrade, and maintain responsive web projects for club activities and official portals.",
      "Assist in hosting hands-on coding bootcamps, workshops, and tech hackathons, supporting 100+ participating students.",
      "Implement performance optimizations and modern glassmorphic designs to maximize engagement across digital platforms."
    ],
    tags: ["React.js", "Tailwind CSS", "UI/UX", "Git & GitHub"]
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2024 — Present",
    description: [
      "Contribute patches and documentation updates to community-focused repository hubs and web toolkits.",
      "Review merge requests, write clean modular layouts, and participate in collaborative debugging sessions."
    ],
    tags: ["Git", "Markdown", "JavaScript", "CSS Grid"]
  }
];

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio designed with a futuristic dark glassmorphism theme. Features smooth viewport entrance animations, typing subtitle carousel, interactive achievements vertical scroll tracker, and a contact form with live validation.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    githubUrl: "https://github.com/jaimintadvi",
    liveUrl: "https://jaimintadvi.dev",
    imageName: "portfolio"
  },
  {
    title: "E-Commerce UI Clone",
    description: "A gorgeous front-end e-commerce interface featuring rich product cards, category filtration, seamless shopping cart overlays, and dynamic checkout calculations driven by React Context API.",
    tech: ["React.js", "Context API", "Tailwind CSS", "Lucide Icons"],
    githubUrl: "https://github.com/jaimintadvi",
    liveUrl: "https://jaimintadvi-shop.netlify.app",
    imageName: "ecommerce"
  },
  {
    title: "Student Management System",
    description: "A secure CRUD web application enabling administrators to create, read, update, and search student profiles, manage GPA metrics, and generate digital course catalogs.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/jaimintadvi",
    liveUrl: "https://jaimintadvi-student-app.herokuapp.com",
    imageName: "students"
  },
  {
    title: "Real-Time Weather Dashboard",
    description: "An elegant, interactive weather panel that pulls coordinates and detailed forecasts from the OpenWeatherMap API, displaying key analytics such as humidity, UV index, and wind vectors with contextual atmospheric backgrounds.",
    tech: ["JavaScript", "React.js", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "https://github.com/jaimintadvi",
    liveUrl: "https://jaimintadvi-weather.netlify.app",
    imageName: "weather"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Web Team Induction",
    description: "Successfully inducted into the prestigious Code Vimarsh Club Web Team as a 1st-year student after demonstrating proficiency in responsive frontend styling and Git collaboration.",
    date: "October 2024",
    iconType: "users"
  },
  {
    title: "Hackathon Top Contributor",
    description: "Participated and excelled in the annual Inter-College Hackathon, developing a rapid prototype for decentralized resource sharing under a tight 36-hour schedule.",
    date: "March 2025",
    iconType: "trophy"
  },
  {
    title: "MSU Coding Showdown - Rank 12",
    description: "Ranked 12th out of 150+ competitors in the Maharaja Sayajirao University Algorithmic Coding Challenge, solving complex data-structure problems in C++.",
    date: "January 2025",
    iconType: "star"
  },
  {
    title: "Responsive Web Design Certification",
    description: "Completed an exhaustive hands-on certification program detailing modern layouts (Flexbox, Grid), viewport fluidity, semantic accessibility, and visual guidelines.",
    date: "December 2024",
    iconType: "certificate"
  }
];
