import {
    BlogPosts,
    DockApps,
    FolderNode,
    Gallery,
    NavIcons,
    NavLink,
    PhotosLinks,
    Socials,
    TechStack,
    WindowConfig,
    Experience,
    Education
} from "@/type";

const navLinks: NavLink[] = [
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

const navIcons:NavIcons[] = [
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

const dockApps:DockApps[] = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
        showOnMobile: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
        showOnMobile: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
        showOnMobile: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
        showOnMobile: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
        showOnMobile: false,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
        showOnMobile: false,
    },
];

const blogPosts:BlogPosts[] = [
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

const techStack:TechStack[] = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials:Socials[] = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Nathan-Mwai",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://nathanmwai.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/CodebaseJournal",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/nathan-mwaniki/",
    },
];

//TODO: Change photo links
const photosLinks:PhotosLinks[] = [
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

//TODO: Change photo links
const gallery:Gallery[] = [
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

const experience: Experience[] = [
    {
        id: 1,
        role: "GDG Organizer",
        company: "Google Developers Group on Campus, UoN",
        period: "April 2026 – Present",
        bullets: [
            "Organized and led campus technology sessions, sharing software development best practices.",
            "Empowered the student developer community through peer-to-peer training."
        ]
    },
    {
        id: 2,
        role: "Space Manager",
        company: "University of Nairobi (Skills Centre)",
        period: "September 2025 – April 2026",
        bullets: [
            "Managed facility logistics and student welfare, providing crucial front office support.",
            "Streamlined operational workflows for student-led innovation."
        ]
    },
    {
        id: 3,
        role: "Software Developer",
        company: "SitePlann",
        period: "June 2025 – August 2025",
        bullets: [
            "Contributed to the end-to-end development of SitePlann, a construction industry workflow SaaS.",
            "Engineered core SaaS infrastructure enabling scalable multi-tenant deployments.",
            "Designed database schemas for high data consistency, performance, and scalability.",
            "Integrated subscription payment portals (tiered pricing and automated billing) and RBAC."
        ]
    },
    {
        id: 4,
        role: "Software Engineer Intern",
        company: "AU Innovation LTD",
        period: "March 2024 – May 2024 & Feb 2025",
        bullets: [
            "Supported cross-departmental initiatives for seamless project execution.",
            "Assisted in deploying and customizing Microsoft ERP systems for local agencies."
        ]
    }
];

const education: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Arts, Economics",
        school: "University of Nairobi",
        period: "September 2024 – September 2028",
        skills: ["Economics", "Data Analysis"]
    },
    {
        id: 2,
        degree: "Agent Fundamentals",
        school: "Google",
        period: "Issued August 2026",
        credentialId: "26423143",
        link: "https://www.skills.google/public_profiles/25411a1f-77a3-4e57-a2b7-2c57cd744a6f/badges/26423143",
        skills: ["Agents", "AI", "Software Development"]
    },
    {
        id: 3,
        degree: "Leading transformations: Manage change",
        school: "Macquarie University",
        period: "Issued August 2026",
        credentialId: "33BXWT0CREDV",
        link: "https://www.coursera.org/account/accomplishments/verify/33BXWT0CREDV",
        skills: ["Change Management", "Leadership"]
    },
    {
        id: 4,
        degree: "Google AI Essentials V1",
        school: "Coursera",
        period: "Issued May 2026",
        link: "https://www.credly.com/badges/af7b6bf0-811e-42f1-9821-9de648aab1ee/linked_in_profile",
        skills: ["AI Essentials"]
    },
    {
        id: 5,
        degree: "Google AI Essentials",
        school: "Google",
        period: "Issued May 2026",
        credentialId: "SCMO4XEKSY6W",
        link: "https://www.coursera.org/account/accomplishments/specialization/SCMO4XEKSY6W",
        skills: ["AI Essentials"]
    },
    {
        id: 6,
        degree: "Use AI Responsibly",
        school: "Google",
        period: "Issued May 2026",
        credentialId: "4KR83R2OWMUE",
        link: "https://www.coursera.org/account/accomplishments/verify/4KR83R2OWMUE",
        skills: ["Ethics", "Responsible AI"]
    },
    {
        id: 7,
        degree: "Discover the Art of Prompting",
        school: "Google",
        period: "Issued May 2026",
        credentialId: "FELBOEGJ9ZXI",
        link: "https://www.coursera.org/account/accomplishments/verify/FELBOEGJ9ZXI",
        skills: ["Prompt Engineering"]
    },
    {
        id: 8,
        degree: "Maximize Productivity With AI Tools",
        school: "Google",
        period: "Issued May 2026",
        credentialId: "6V0NQ8AK2ICM",
        link: "https://www.coursera.org/account/accomplishments/verify/6V0NQ8AK2ICM",
        skills: ["AI Tools", "Productivity"]
    },
    {
        id: 9,
        degree: "Introduction to AI",
        school: "Google",
        period: "Issued April 2026",
        credentialId: "A4T0588V0O69",
        link: "https://www.coursera.org/account/accomplishments/verify/A4T0588V0O69",
        skills: ["AI (Artificial Intelligence)"]
    },
    {
        id: 10,
        degree: "Software Engineering",
        school: "Moringa School",
        period: "Issued November 2024",
        link: "https://www.linkedin.com/in/nathan-mwaniki/details/certifications/",
        skills: ["HTML", "CSS Flexbox", "Tailwind CSS", "JavaScript", "TypeScript", "Python", "Express.js", "Node.js", "MERN", "PERN"]
    },
    {
        id: 11,
        degree: "Design Thinking",
        school: "LinkedIn",
        period: "Issued November 2024",
        link: "https://www.linkedin.com/learning/certificates/ecc78b085b36125a506be0e4fa9c270329f069a7b724c78ffc8455e136599a66",
        skills: ["Design"]
    },
    {
        id: 12,
        degree: "Problem Solving Techniques",
        school: "LinkedIn",
        period: "Issued November 2024",
        link: "https://www.linkedin.com/learning/certificates/51bbdf1db01d495696f58255ece0994ac5c4857078cc070c5b40e19b11d80329",
        skills: ["Project Management"]
    },
    {
        id: 13,
        degree: "Leading Yourself",
        school: "LinkedIn",
        period: "Issued September 2024",
        link: "https://www.linkedin.com/learning/certificates/8088879eadd89c5a99c0e03e4fe944d5e2bc9b01430a5f6c56a1d6d8d6db8140?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BcT%2BgD7J7ROSAVCfwufR0XQ%3D%3D",
        skills: ["Leadership", "Self-Management"]
    },
    {
        id: 14,
        degree: "Responsive Web Design",
        school: "FreeCodeCamp",
        period: "Issued June 2024",
        credentialId: "nathanmwai-rwd",
        link: "https://www.freecodecamp.org/certification/nathanmwai/responsive-web-design",
        skills: ["CSS", "HTML"]
    }
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
    experience,
    education
};

//TODO: Update this as well
const WORK_LOCATION:FolderNode = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        // {
        //     id: 5,
        //     name: "Nike Ecommerce Website Application",
        //     icon: "/images/folder.png",
        //     kind: "folder",
        //     position: "top-10 left-5", // icon position inside Finder
        //     windowPosition: "top-[5vh] left-5", // optional: Finder window position
        //     children: [
        //         {
        //             id: 1,
        //             name: "Nike Project.txt",
        //             icon: "/images/txt.png",
        //             kind: "file",
        //             fileType: "txt",
        //             position: "top-5 left-10",
        //             description: [
        //                 "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
        //                 "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
        //                 "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
        //                 "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
        //             ],
        //         },
        //         {
        //             id: 2,
        //             name: "nike.com",
        //             icon: "/images/safari.png",
        //             kind: "file",
        //             fileType: "url",
        //             href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
        //             position: "top-10 right-20",
        //         },
        //         {
        //             id: 4,
        //             name: "nike.png",
        //             icon: "/images/image.png",
        //             kind: "file",
        //             fileType: "img",
        //             position: "top-52 right-80",
        //             imageUrl: "/images/project-1.png",
        //         },
        //         {
        //             id: 5,
        //             name: "Design.fig",
        //             icon: "/images/plain.png",
        //             kind: "file",
        //             fileType: "fig",
        //             href: "https://google.com",
        //             position: "top-60 right-20",
        //         },
        //     ],
        // },

        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
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
                    name: "cb-ai-resume-analyzer.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://cb-ai-resume-analyzer.vercel.app/",
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
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 left-5",
                // },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Food Delivery App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                        "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "food-delivery-app.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://nathanmwai.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/sbzVbbqOARTCDyyAPMXTLB/Food-Delivery-App--Copy-?node-id=3-310&p=f&t=ahuWUZdf1Do2IrOD-0",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

//TODO: Update this as well
const ABOUT_LOCATION:FolderNode = {
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
            imageUrl: "/images/nathan.webp",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/nathan-1.webp",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/nathan-3.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/nathan.webp",
            description: [
                "Hey! I’m Nathan 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me streaming at 2AM, binging with Anime, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

//TODO: Update this as well
const RESUME_LOCATION: FolderNode = {
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

//TODO: Update this as well
const TRASH_LOCATION: FolderNode = {
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