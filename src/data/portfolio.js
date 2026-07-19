import profileImg from "../assets/profile.jpg";
import nowPlayingContent from "./blogs/now-playing-widget.md?raw";

export const PROFILE_IMAGE = profileImg;

export const PERSONAL = {
  name: "Pradeep Chandran M",
  tagline: "Driven by Curiosity | Learning by Breaking and Building",
  email: "mailto:pradeepchandranm@gmail.com",
  github: "https://github.com/RAN-GAN",
  linkedin: "https://www.linkedin.com/in/pradeepchandranm/",
  resume: "/PersonalPortfolio/PradeepChandranM.pdf",
};

export const LINKS = [
  { text: "email", href: PERSONAL.email, color: "rgb(16, 162, 245)" },
  { text: "github", href: PERSONAL.github, color: "rgb(233, 188, 63)", isExternal: true },
  { text: "linkedin", href: PERSONAL.linkedin, color: "rgb(36, 208, 90)", isExternal: true },
  { text: "resume", href: PERSONAL.resume, color: "rgb(236, 2, 90)", download: true },
];

export const BIO = {
  short: [
    "Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student passionate about building innovative solutions and exploring cutting-edge technologies.",
    "Check out my projects or connect with me if you'd like to collaborate or work on exciting ideas!",
  ],
  long: [
    "Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student with a deep passion for software development, problem-solving, and technology innovation.",
    "I'm driven by curiosity and love exploring new frameworks, programming languages, and development methodologies. Whether it's web development, devops or backend systems, I enjoy the challenge of turning complex problems into elegant solutions.",
    "When I'm not coding, you'll find me exploring new tech trends, hunting for bugs, or brainstorming ways to solve everyday problems. I enjoy learning how things work — whether it's a line of code or the world around me.",
    "Feel free to explore my work or reach out if you'd like to discuss technology, collaborate on projects, or just have a great conversation about the future of software development!",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Automated Result Notifier",
    desc: "Monitors result portals in real-time and instantly notifies users when results are published.",
    tags: ["Python", "Web Scraping", "Email API", "Automation"],
    link: null,
  },
  {
    id: "02",
    title: "Code Sync",
    desc: "Aggregates coding activity from multiple platforms into a single dashboard for unified tracking.",
    tags: ["React", "Node.js", "REST APIs", "Dashboard"],
    link: null,
  },
  {
    id: "03",
    title: "Morphide",
    desc: "An IoT IDE with device fingerprinting and firmware inspection for smarter embedded development.",
    tags: ["IoT", "Firmware", "Fingerprinting", "Security"],
    link: null,
  },
  {
    id: "04",
    title: "SGPA Calculator",
    desc: "A fast, minimal GPA calculator used for thousands of computations with top search ranking.",
    tags: ["React", "Vite", "Algorithm", "Open Source"],
    link: "https://ran-gan.github.io/SKCET-CGPA/",
  },
  {
    id: "05",
    title: "SMSFlare",
    desc: "A private, self-hosted SMS gateway that transforms Android devices into a secure communication pipeline using Cloudflare Workers and D1.",
    tags: ["Cloudflare Workers", "Next.js", "Kotlin", "D1", "Edge Computing"],
    link: "https://github.com/RAN-GAN/smsFlare",
  },
];

export const ACHIEVEMENTS = [
  {
    label: "Automated Result Notifications",
    text: "Built a system that automatically detects result releases and instantly sends them to users via email.",
    link: null,
  },
  {
    label: "Infrastructure Load Testing",
    text: "Worked with a professional team to simulate high traffic and uncover performance bottlenecks in college systems.",
    link: "https://www.linkedin.com/in/pradeepchandranm/",
  },
  {
    label: "Security Research",
    text: "Discovered and responsibly disclosed security flaws including access control and privilege escalation issues.",
    link: "https://www.linkedin.com/in/pradeepchandranm/",
  },
];

export const SKILLS = [
  // Frontend cluster — top left
  { id: "js", label: "JavaScript", group: "frontend", x: 120, y: 185 },
  { id: "react", label: "React", group: "frontend", x: 210, y: 118 },
  { id: "nextjs", label: "Next.js", group: "frontend", x: 342, y: 68 },
  { id: "tailwind", label: "Tailwind", group: "frontend", x: 108, y: 260 },

  // Backend cluster — center (Node.js is the top-center hub)
  { id: "node", label: "Node.js", group: "backend", x: 490, y: 68 },
  { id: "python", label: "Python", group: "backend", x: 612, y: 172 },
  { id: "api", label: "REST APIs", group: "backend", x: 488, y: 235 },

  // Database cluster — right center
  { id: "postgres", label: "PostgreSQL", group: "database", x: 718, y: 118 },
  { id: "mongodb", label: "MongoDB", group: "database", x: 802, y: 228 },

  // Cloud cluster — top right
  { id: "aws", label: "AWS", group: "cloud", x: 878, y: 88 },
  { id: "docker", label: "Docker", group: "cloud", x: 948, y: 192 },
  { id: "linux", label: "Linux", group: "cloud", x: 952, y: 305 },

  // Security cluster — bottom left
  { id: "burp", label: "Burp Suite", group: "security", x: 162, y: 342 },
  { id: "osint", label: "OSINT", group: "security", x: 318, y: 380 },
  { id: "bugbounty", label: "Bug Bounty", group: "security", x: 482, y: 362 },

  // AI cluster — bottom right
  { id: "llm", label: "LLMs", group: "ai", x: 758, y: 325 },
  { id: "agents", label: "AI Agents", group: "ai", x: 892, y: 378 },
];

export const SKILL_EDGES = [
  // JS is the language of both frontend and Node.js backend
  ["js", "react"],
  ["js", "node"],

  // React ecosystem
  ["react", "nextjs"],
  ["react", "tailwind"],

  // Next.js is a Node.js framework
  ["nextjs", "node"],
  ["nextjs", "tailwind"],

  // Node.js builds REST APIs; REST APIs talk to both databases
  ["node", "api"],
  ["node", "mongodb"],
  ["node", "postgres"],

  ["api", "postgres"],
  ["api", "mongodb"],

  // Python also builds APIs (Flask / FastAPI) and uses Postgres directly
  ["python", "api"],
  ["python", "postgres"],
  ["python", "mongodb"],

  // Postgres runs on AWS RDS; AWS hosts Docker containers
  ["postgres", "aws"],
  ["aws", "docker"],

  // Docker containerises Node.js apps and runs on Linux
  ["docker", "node"],
  ["docker", "linux"],

  // Security: Linux env → Burp Suite → OSINT → Bug Bounty
  ["linux", "burp"],
  ["burp", "osint"],
  ["osint", "bugbounty"],

  // Python scripting used for recon and automation in bug bounty
  ["python", "bugbounty"],

  // Python is the AI ecosystem language; LLMs power AI Agents
  ["python", "llm"],
  ["llm", "agents"],
];

export const MINI_PROJECTS = [
  { title: "Rewards Automator", desc: "A Python tool that automates Microsoft Bing searches to collect reward points." },
  { title: "PPT-to-Audio", desc: "A Python GUI application that extracts content from a PPT file and converts it into an audio file." },
  { title: "Birthday Lookup", desc: "A React website that displays today’s and upcoming birthdays of students in my college." },
  { title: "whatsRead", desc: "A simple webpage that lets you view WhatsApp exported chats in a clean, readable format." },
  { title: "YouTube Subtitle Extractor Extension", desc: "A browser extension that extracts the subtitles of a YouTube video and logs them in the console." },
  { title: "Autotyper", desc: "A hotkey-driven AutoTyper that types text from a saved file or injects clipboard content based on the selected trigger." },
  { title: "ChatHost", desc: "A lightweight site for sharing text or files with real-time chat built in." },
  { title: "Carbon GPT", desc: "A simple tool that estimates the carbon footprint of your ChatGPT usage." },
  { title: "Student Management Portal", desc: "A clean, feature-packed dashboard for staff to manage student information." },
  { title: "MTechDash (ongoing)", desc: "A unified dashboard designed to give students everything they need in one place." },
];

export const BLOGS = [
  {
    id: "01",
    title: `How I Built a Custom "Now Playing" Widget for My Portfolio (Without Relying on the Spotify API)`,
    desc: "An end-to-end look at capturing my phone's current song using a mobile app, Cloudflare Workers, and a React frontend.",
    date: "2026-07-19",
    tags: ["Cloudflare Workers", "Android", "React"],
    link: "#/blogs/custom-now-listing-widget",
    content: nowPlayingContent,
  }
];
