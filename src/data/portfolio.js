import profileImg from "../assets/profile.jpg";

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
  { id: "react", label: "React", group: "frontend", x: 200, y: 120 },
  { id: "nextjs", label: "Next.js", group: "frontend", x: 350, y: 80 },
  { id: "tailwind", label: "Tailwind", group: "frontend", x: 120, y: 240 },

  { id: "node", label: "Node.js", group: "backend", x: 500, y: 140 },
  { id: "python", label: "Python", group: "backend", x: 620, y: 240 },
  { id: "api", label: "REST APIs", group: "backend", x: 500, y: 300 },

  { id: "postgres", label: "PostgreSQL", group: "database", x: 720, y: 140 },
  { id: "mongodb", label: "MongoDB", group: "database", x: 820, y: 260 },

  { id: "aws", label: "AWS", group: "cloud", x: 900, y: 120 },
  { id: "docker", label: "Docker", group: "cloud", x: 1000, y: 240 },

  { id: "burp", label: "Burp Suite", group: "security", x: 220, y: 420 },
  { id: "osint", label: "OSINT", group: "security", x: 360, y: 500 },
  { id: "bugbounty", label: "Bug Hunting", group: "security", x: 520, y: 460 },

  { id: "llm", label: "LLMs", group: "ai", x: 760, y: 420 },
  { id: "agents", label: "AI Agents", group: "ai", x: 920, y: 500 },

  { id: "builder", label: "Product Builder", group: "core", x: 620, y: 40 },
];
export const SKILL_EDGES = [
  ["builder", "react"],
  ["builder", "python"],
  ["builder", "aws"],

  ["react", "nextjs"],
  ["react", "tailwind"],

  ["nextjs", "node"],
  ["node", "api"],
  ["api", "postgres"],
  ["api", "mongodb"],

  ["python", "api"],
  ["python", "llm"],

  ["llm", "agents"],

  ["aws", "docker"],
  ["aws", "postgres"],
  ["docker", "node"],

  ["burp", "osint"],
  ["osint", "bugbounty"],
  ["python", "bugbounty"],

  ["agents", "aws"],
  ["agents", "node"],
];

export const MINI_PROJECTS = [
  { title: "Rewards Automator", desc: "Python tool automating Microsoft Bing searches to collect reward points." },
  { title: "PPT-to-Audio", desc: "Python GUI app that extracts PPT content and converts it to audio." },
  { title: "Birthday Lookup", desc: "React site displaying today's and upcoming college birthdays." },
  { title: "whatsRead", desc: "Webpage for viewing WhatsApp exported chats in a clean format." },
  { title: "YouTube Subtitle Extractor", desc: "Browser extension extracting YouTube video subtitles to console." },
  { title: "Autotyper", desc: "Hotkey-driven tool that types saved text or injects clipboard content." },
  { title: "ChatHost", desc: "Lightweight site for sharing text or files with real-time chat." },
  { title: "Carbon GPT", desc: "Estimates the carbon footprint of your ChatGPT usage." },
  { title: "Student Management Portal", desc: "Feature-packed dashboard for staff to manage student information." },
  { title: "MTechDash", desc: "Unified student dashboard with everything needed in one place." },
];
