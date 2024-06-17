export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/laakasen Ezra.pdf" },
];
export const Links = [
  { i: 1, logo:"/github.svg",link: "https://github.com/Eleeey" },
  { i: 2, logo:"/link.svg",link: "https://linkein.con/in/laakasen-ezra" },
];
export const ICONS = [
  { name: "/html.svg", key: "HTML", label: "HTML" },
  { name: "/css.svg", key: "CSS", label: "CSS" },
  { name: "/JS.svg", key: "JS", label: "JS" },
  { name: "/TS.svg", key: "TS", label: "TypeScript" },
  { name: "/next.svg", key: "Nextjs", label: "Nextjs" },
  { name: "/Node.js .svg", key: "Node.js", label: "Node.js" },
  { name: "/re.svg", key: "React", label: "ReactJs" },
  { name: "/tail.svg", key: "Tailwind", label: "Tailwind Css" },
  { name: "/boot.svg", key: "Bootstrap", label: "Bootstrap" },
  { name: "/figma.svg", key: "Figma", label: "Figma" },
  { name: "/git.svg", key: "git", label: "git" },
  { name: "/pstgreSql.svg", key: "pstgreSql", label: "pstgreSql" },
  { name: "/MongoDb.svg", key: "MongoDb", label: "MongoDb" },
  { name: "/Redux.svg", key: "Redux", label: "Redux" },
  // { name: "/.svg", key: "WordPress", label: "WordPress" },
  // { name: "/ChatGPT .svg", key: "ChatGPT", label: "ChatGPT" },
  // { name: "/antd.svg", key: "antd.svg", label: "Ant Design" },
  { name: "/github.svg", key: "github", label: "Github" },
  { name: "/c.svg", key: "Clerk", label: "Clerk" },
  { name: "/fm.svg", key: "Framer-Motion", label: "Framer-Motion" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize team collaborations, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Ai Email marketing chatbot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fuzzy- Workflow Automation App ",
    des: "A Workflow Automation Software-as-a-service app. Connect your Discord, Slack, Notion to your google Drive to save and schedule your workflow for tripple productivity  ",
    img: "/fuzzzy.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/pstgreSql.svg",
      "/c.svg",
    ],
    link: "https://fuzzy-lovat.vercel.app",
  },
  {
    id: 2,
    title: "Evently - Event & Ticketing Platform",
    des: "Publish, Book and purchase tickets to your favorite upcoming events onsite or online",
    img: "/evently.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "MongoDb.svg", "/c.svg"],
    link: "https://evently-lilac-beta.vercel.app",
  },

  {
    id: 3,
    title: "AI Image Editor",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "next.svg",
      "/tail.svg",
      "cloud.svg",
      "/ts.svg",
      "/MongoDb.svg",
      "/c.svg",
    ],
    link: "/ui.aiimg.com",
  },

  {
    id: 4,
    title: "Hotelier - A Hotel Website",
    des: "Hotelier is a hospitality website. ",
    img: "/hotelier.png",
    iconLists: ["/html.svg", "/boot.svg", "/JS.svg", "/boot.svg"],
    link: "/ui.apple.com",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 3,
    title: "Freelance FrontEnd Dev",
    desc: "Led the dev of Websites and several Apps for a clients, from initial concept to deployment online.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Eleeey",
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://linkedin.com/in/laakasen-ezra"
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
