import { color } from "framer-motion";
import {
  mobile,
  creator,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Shopping,
  Weather,
  password,
  Dev,
  Studynotion
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];



const projects = [
  {
    name: "StudyNotion Ed-tech App",
    description:
      "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. It works well on different devices and responds quickly,",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color:"yellow-text-gradient"
      }
    ],
    image: Studynotion,
    source_code_link: "https://github.com/AjayManjhi09/StudyNotionApp.git",
  },
  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Front-end design using React/Redux. It is website contains multiple items on its Home page and we can add them to our cart. In the cart, we can see our selected items and also the total items with the total amount. It is fully responsive and Designing is done using Tailwind CSS",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Shopping,
    source_code_link: "https://github.com/AjayManjhi09/Shopping-Cart.git",
  },
  {
    name: "Password Generator",
    description:
      "Password Generator is a website that generates a random password. we can also copy the password on our clipboard and paste it wherever we want. It generates the password based on the selection given by the user. It also tells the strength of the password generated.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/AjayManjhi09/Password_Generator.git",
  },
  {
    name: "Dev Detective",
    description:
      "Dev Detective is a website in which we can find information about the developer by searching the username of the developer on GitHub.When we search for the username it gives shows the GitHub profile information. It also has the feature of changing into dark mode and light mode.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image:Dev ,
    source_code_link: "https://github.com/AjayManjhi09/Dev_Detective_Project.git",
  },
  {
    name: "Weather App",
    description:
      "Weather App is a website which tells about the weather of current location of the user, as well as user, can also search the city for which user wants to find out the weather The app is designed to be easy to use with a search bar where you can type the location you want to know about. ",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/AjayManjhi09/Weather_App.git",
  },
];

export { services, technologies, projects  };