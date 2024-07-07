import html from "../assets/Tech/HTML5.png";
import css from "../assets/Tech/CSS3.png";
import javascript from "../assets/Tech/JavaScript.png";
import nodejs from "../assets/Tech/Node.js.png";
import reactjs from "../assets/Tech/React.png";
import nextjs from "../assets/Tech/Next.js.png";
import nodemon from "../assets/Tech/Nodemon.png";
import npm from "../assets/Tech/NPM.png";
import bootstrap from "../assets/Tech/Bootstrap.png";
import vercel from "../assets/Tech/Vercel.png";
import babel from "../assets/Tech/Babel.png";
import bitbucket from "../assets/Tech/BitBucket.png";
import aws from "../assets/Tech/AWS.png";
import docker from "../assets/Tech/Docker.png";
import git from "../assets/Tech/git.png";
import handlebars from "../assets/Tech/Handlebars.png";
import jira from "../assets/Tech/Jira.png";
import vite from "../assets/Tech/Vite.js.png";
import vsCode from "../assets/Tech/Visual Studio Code (VS Code).png";
import mongodb from "../assets/Tech/MongoDB.png";
import redux from "../assets/Tech/Redux.png";
import tailwindcss from "../assets/Tech/Tailwind CSS.png";
import typescript from "../assets/Tech/TypeScript.png";
import expressjs from "../assets/Tech/Express.png";
import linkedIn from "../assets/Tech/linkedIn-user.png";
import gitHub from "../assets/Tech/github-user.png";
import dressUpLandImg from "../assets/Projects/dressuplandImg.png";
import travelFreaksImg from "../assets/Projects/travelFreaks.png";
import ecommerceImg from "../assets/Projects/ecommerce.png";
import movieMojoImg from "../assets/Projects/movieMojo.png";
import liveSiteLink from "../assets/Tech/liveSiteLink.gif";
import githubLink from "../assets/Tech/githubLink.gif";

const list1 = [html, css, javascript, reactjs, nodejs, expressjs];
const list2 = [mongodb, typescript, nextjs, npm, tailwindcss, bootstrap];
const list3 = [aws, docker, git, handlebars, jira, bitbucket];
const list4 = [vite, vsCode, nodemon, redux, babel, vercel];

const stackList = [javascript, nodejs, expressjs, reactjs, mongodb];

const socialMediaList = [
  { icon: gitHub, link: "https://github.com/NithinRajuOfficial" },
  {
    icon: linkedIn,
    link: "https://www.linkedin.com/in/nithin-raju-b4a55a237/",
  },
];

const projectData = [
  {
    name: "DressUpLand",
    about:
      "Basic e-commerce website made using Nodejs and Expressjs with server side rendering and database using MongoDb",
    img: dressUpLandImg,
    liveLink: "https://dressupland.nithin.website/",
    codeLink: "https://github.com/NithinRajuOfficial/DressUpLand",
    liveSite: liveSiteLink,
    github: githubLink,
  },
  {
    name: "TravelFreaks",
    about:
      "Social media platform for travelers made using ReactJs in frontend and Nodejs, Expressjs in backend and database using MongoDb",
    img: travelFreaksImg,
    liveLink: "https://travelfreaks.nithin.website/",
    codeLink: "https://github.com/NithinRajuOfficial/Travel-Freaks",
    liveSite: liveSiteLink,
    github: githubLink,
  },
  {
    name: "OneShop",
    about:
      "Basic e-commerce website made using ReactJs with client side rendering",
    img: ecommerceImg,
    liveLink: "https://one-shop-lac.vercel.app/",
    codeLink: "https://github.com/NithinRajuOfficial/One-Shop",
    liveSite: liveSiteLink,
    github: githubLink,
  },
  {
    name: "MovieMojo",
    about:
      "Movie updates website made using ReactJs with client side rendering",
    img: movieMojoImg,
    liveLink: "https://movie-mojo-blond.vercel.app/",
    codeLink: "https://github.com/NithinRajuOfficial/MovieMojo",
    liveSite: liveSiteLink,
    github: githubLink,
  },
];

export { list1, list2, list3, list4, stackList, socialMediaList, projectData };
