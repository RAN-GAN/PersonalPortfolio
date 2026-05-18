import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import ProfileImage from "./ProfileImage";
import Header from "./Header";
import LinkGrid from "./LinkGrid";
import NowPlaying from "./NowPlaying";
import ContentToggle from "./ContentToggle";
import AboutSection from "./AboutSection";
import profileImg from "../assets/profile.jpg";

const PROFILE_IMAGE_SRC = profileImg;

const PERSONAL_DATA = {
  name: "Pradeep Chandran M",
  tagline: "Driven by Curiosity | Learning by Breaking and Building",
  links: [
    { text: "email", href: "mailto:pradeepchandranm@gmail.com", color: "rgb(16, 162, 245)" },
    {
      text: "github",
      href: "https://github.com/RAN-GAN",
      color: "rgb(233, 188, 63)",
      isExternal: true,
    },
    {
      text: "linkedin",
      href: "https://www.linkedin.com/in/pradeepchandranm/",
      color: "rgb(36, 208, 90)",
      isExternal: true,
    },
    {
      text: "resume",
      href: "/PersonalPortfolio/PradeepChandranM.pdf",
      color: "rgb(236, 2, 90)",
      download: true,
    },
  ],
  content: {
    short: [
      "Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student passionate about building innovative solutions and exploring cutting-edge technologies.",
      "Check out my projects or connect with me if you'd like to collaborate or work on exciting ideas!",
    ],
    long: [
      "Hi there! My name is Pradeep Chandran M. I'm a Computer Science Engineering student with a deep passion for software development, problem-solving, and technology innovation.",
      "I'm driven by curiosity and love exploring new frameworks, programming languages, and development methodologies. Whether it's web development, devops or backend systems, I enjoy the challenge of turning complex problems into elegant solutions.",
      "When I'm not coding, you'll find me exploring new tech trends, hunting for bugs, or brainstorming ways to solve everyday problems. I enjoy learning how things work-whether it’s a line of code or the world around me.",
      "Feel free to explore my work or reach out if you'd like to discuss technology, collaborate on projects, or just have a great conversation about the future of software development!",
    ],
  },
};

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1280);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 200 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const shouldFloat = isScrolled && isDesktop;

  return (
    <div className="relative w-full">
      {/* Left Sidebar Fixed (Profile, Header) - ALWAYS MOUNTED, ONLY FADES */}
      <motion.div
        animate={{ opacity: shouldFloat ? 1 : 0, x: shouldFloat ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`hidden xl:flex fixed left-8 2xl:left-12 top-[10vh] flex-col items-start gap-4 z-40 w-64 origin-left ${
          shouldFloat ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <ProfileImage src={PROFILE_IMAGE_SRC} alt={PERSONAL_DATA.name} />
        <div className="text-left w-full">
          <Header name={PERSONAL_DATA.name} tagline={PERSONAL_DATA.tagline} />
        </div>
      </motion.div>

      {/* Right Sidebar Fixed (Now Playing, Links) - ALWAYS MOUNTED, ONLY FADES */}
      <motion.div
        animate={{ opacity: shouldFloat ? 1 : 0, x: shouldFloat ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className={`hidden xl:flex fixed right-8 2xl:right-12 top-[15vh] z-40 w-[350px] flex-col items-center gap-6 origin-right ${
          shouldFloat ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="w-full">
          <NowPlaying />
        </div>
        <div className="scale-95 origin-top w-full flex justify-center">
          <LinkGrid links={PERSONAL_DATA.links} />
        </div>
      </motion.div>

      <main className="max-w-2xl mx-auto min-h-screen px-4 sm:px-6 pt-6 sm:pt-12 pb-16 flex flex-col items-center gap-6 sm:gap-8 font-medium">
        {/* Center Layout - Fades out but perfectly retains its natural flow structure */}
        <motion.div
          animate={{ opacity: shouldFloat ? 0 : 1, y: shouldFloat ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-col items-center w-full gap-6 sm:gap-8 ${
            !shouldFloat ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center mt-4 sm:mt-0 w-full">
            <ProfileImage src={PROFILE_IMAGE_SRC} alt={PERSONAL_DATA.name} />
            <Header name={PERSONAL_DATA.name} tagline={PERSONAL_DATA.tagline} />
          </div>

          <LinkGrid links={PERSONAL_DATA.links} />

          <div className="w-full flex justify-center">
            <NowPlaying />
          </div>
        </motion.div>

        <ContentToggle />

        <AboutSection content={PERSONAL_DATA.content} />
      </main>
    </div>
  );
}

export default Home;
