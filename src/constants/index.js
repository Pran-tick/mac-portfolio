const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "About", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "EJS"],
  },
  {
    category: "Others",
    items: ["Blender3D", "Adobe Premier Pro", "Figma"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend and Languages",
    items: ["Node.js", "Express", "JavaScript", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Pran-tick",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Pran_Tick",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/prantik-verma/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Zentry Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[2vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Zentry Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a fully responsive modern UI/UX website using React.js, GSAP and Tailwind CSS, ensuring a seamless user experience across all devices.",
          ],
        },
        {
          id: 2,
          name: "zentry.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://zentry-landing-page-sigma.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "zentry.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ZENTRY3.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 right-80",
      windowPosition: "top-[80vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://resume-analyzer-pi-ruddy.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Mojito Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-90",
      windowPosition: "top-[63vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a visually stunning landing page using GSAP for animations, ensuring a smooth and engaging user experience.",
          ],
        },
        {
          id: 2,
          name: "mojito-landing-page.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://landing-page-gsap-rosy.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "mojito-landing-page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/MOJITO2.png",
        },
      ],
    },
    // ▶ Project 4
{
  id: 8,
  name: "Saas Landing Page",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-40 left-40",
  windowPosition: "top-[15vh] left-30",
  children: [
    {
      id: 1,
      name: "Chat App Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Developed a modern SaaS landing page using Next.js and TypeScript, ensuring high performance and scalability",
      ],
    },
    {
      id: 2,
      name: "saas-landing-page.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://landingpage-azure-five.vercel.app/",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "saas-landing-page.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/MICROSAAS1.png",
    },
  ],
},

// ▶ Project 5
{
  id: 9,
  name: "Mood2Anime",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-50 left-10",
  windowPosition: "top-[35vh] left-12",
  children: [
    {
      id: 1,
      name: "Mood2Anime Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Built a mood-based anime trailer recommendation platform, improving content discovery and achieving 100+ trailer displays per session on average.",
      ],
    },
    {
      id: 2,
      name: "mood2anime.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://mood2anime-swart.vercel.app/",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "mood2anime.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/MOOD2.png",
    },
  ],
},

// ▶ Project 6
{
  id: 10,
  name: "Gaming PC Builder Course",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-20 right-40",
  windowPosition: "top-[10vh] right-10",
  children: [
    {
      id: 1,
      name: "Gaming PC Builder Course.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "This course is targeted towards anyone who wishes to save endless hours of researching and confusion about steps to building a PC. Whether you have a technical background or not, if you just want to get started and build, then you have found the very thing you were looking for.(I am the editor of this course.)",
      ],
    },
    {
      id: 2,
      name: "gaming-pc-builder.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.udemy.com/course/build-a-gaming-pc-from-scratch/",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "gaming-pc-builder.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/udemy 1.png",
    },
  ],
},

// ▶ Project 7
{
  id: 11,
  name: "Hilink Landing Page",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-70 right-20",
  windowPosition: "top-[30vh] right-10",
  children: [
    {
      id: 1,
      name: "Hilink Landing Page Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Developed a fully responsive modern UI/UX website using React.js, Next.js, and Tailwind CSS, ensuring a seamless user experience across all devices.",
      ],
    },
    {
      id: 2,
      name: "hilink-landing-page.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://hilink-landingpage.vercel.app/",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "hilink-landing-page.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/HILINK2.png",
    },
  ],
},
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/prantikprof.jpeg",
      description: [
  `I am Prantik Verma, a developer with a knack for creating magic on and off the screen. I am passionate, proactive, and creative, actively seeking opportunities in dynamic projects. With an insatiable appetite for innovation, I bring a unique blend of vision.

Also, I am an undergraduate student pursuing my bachelor’s in Computer Science and Engineering. When I’m not thinking in languages and frameworks, I’m editing videos, playing the ukulele, or finding perspective in the mountains while listening to '80s bolly music.`,
],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };