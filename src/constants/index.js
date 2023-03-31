import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit, nextjs,
  tripguide,
  threejs,
  brixteam,
  devweb,
  fotobart,
  graphs,
  meeting,
  rocket,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Photography",
    title: "Photography",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: graphs,
  },
  {
    title: "UX / UI",
    icon: meeting,
  },
  {
    title: "Photography",
    icon: rocket,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Brix.team Portal",
    description:
      "In my last year of HBO ICT & Media Design I did my internship at Brix.team. I made a React Firebase application with an API connection to Teamwork where customers can log in to and see their data. Unfortunately the application is offline.",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: brixteam,
    source_code_link: "https://github.com/",
  },
  {
    name: "Webshop Passion Project",
    description:
      "During my studies I made a webshop where I can sell one of my passions; Art. This web application is made in Next.js, Strapi, Stripe and Magic.",
    tags: [
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
      {
        name: "Strapi",
        color: "orange-text-gradient",
      },
      {
        name: "Stripe",
        color: "orange-text-gradient",
      },
    ],
    image: nextjs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Customer websites",
    description:
      "During my career as a web developer I made numerous websites. These websites are all made within Wordpress, if you're interested in seeing these websites please contact me down below.",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "orange-text-gradient",
      },
      {
        name: "Wordpress",
        color: "orange-text-gradient",
      },
    ],
    image: devweb,
    source_code_link: "https://github.com/",
  },
  {
    name: "My portfolio website!",
    description:
      "This portfolio website is and will be a project in-progress. I have so much more to learn and add to this portfolio. I will be putting on more 3D art and even more smoother animations. Stay tuned!",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
    ],
    image: fotobart,
    source_code_link: "https://github.com/",
  },
];

const photography = [
  {
      image: "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/314741084_435186512128049_5519628038214561874_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=ZMluv7sPUSIAX8JhB3t&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk2NjkxMzcwOTI3NjAxNDk1Nw%3D%3D.2-ccb7-5&oh=00_AfCh2YX_ZkrI4Aw6yXE8V0G_y4H3uHVw_4zM7GYjIj6jwg&oe=642B7FE7&_nc_sid=1527a3",
    source_code_link: "https://www.instagram.com/p/CksmEyYoilt/",
  },
  {
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, photography };
