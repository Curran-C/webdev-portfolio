import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  neosphere,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  freelancer,
  adityainterio,
  greencanopy,
  threejs,
  viradaproductions,
  eventsadda,
  dronemapsindia,
  fiverrclone,
  whatsapp,
  email,
  githubIcon,
  linkedin,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Neosphere",
    icon: neosphere,
    iconBg: "#383E56",
    date: "July 2020 - Jan 2022",
    points: [
      "Developing and maintaining web applications using Wordpress and Shopify",
      "Collaborating with cross-functional teams to help market the products in the company",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created Promitional material using Illustrator, After Effects and Premier Pro",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2023",
    points: [
      "Interacting with clients to find their requirements and come up with a way to maintain",
      "Developing and maintaining web applications using React.js, NodeJS, Tailwind, Redux",
      "Collaborating with designers, and other developers to create high-quality products that satisfy the client.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EventsAdda",
    description:
      "Web-based ReactJS Application for events adda to showcase their services and events and have potential customers contact them .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eventsadda,
    source_code_link: "https://eventsadda-28525.web.app/",
  },
  {
    name: "Adithya Interio",
    description:
      "A website that showcases the simple yet premium design of the interior design company Adithya Interio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: adityainterio,
    source_code_link: "https://fir-auth-b0c11.web.app/",
  },
  {
    name: "The Green Canopy",
    description:
      "A web application designed to be a way for the client to showcase and promote their business of selling plants",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: greencanopy,
    source_code_link: "https://thegreencanopy.in/",
  },
  {
    name: "Virada Productions",
    description:
      "A Landing page for potential clietns to see the values of the company and inturn contact them ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: viradaproductions,
    source_code_link: "https://viradaproductions.com/",
  },
  {
    name: "Drone Maps India",
    description:
      "A Landing page for potential clients to see the values of the company and inturn contact them ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dronemapsindia,
    source_code_link: "https://dronemaps.in/",
  },
  {
    name: "Fiverr Clone",
    description:
      "A copy of the famous freelancing website fiverr. Here you can create an account as a seller or a buyer, either post gigs or buy gigs through a working payment gateway. The seller can message the buyer and vice versa",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
    ],
    image: fiverrclone,
    source_code_link: "https://github.com/Curran-C/fiverr-react-clone",
  },
];

const contacts = [
  {
    src: whatsapp,
    alt: "Whatsapp Me",
    a: "https://wa.link/lfi1e9",
  },
  {
    src: linkedin,
    alt: "My LinkedIn",
    a: "https://www.linkedin.com/in/curran-doddabele-012976167/",
  },
  {
    src: email,
    alt: "Email Me",
    a: "mailto: currrandoddabele@gmail.com",
  },
  {
    src: githubIcon,
    alt: "Github",
    a: "https://github.com/Curran-C",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
