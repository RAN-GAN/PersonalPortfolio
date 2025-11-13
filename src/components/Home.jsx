import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import Header from "./Header";
import LinkGrid from "./LinkGrid";
import ContentToggle from "./ContentToggle";
import AboutSection from "./AboutSection";
import profileImg from "../assets/profile.jpg";

const PROFILE_IMAGE_SRC = profileImg;

const PERSONAL_DATA = {
  name: "Pradeep Chandran M",
  tagline: "Driven by Curiosity | Learning by Breaking and Building",
  links: [
    { text: "email", color: "rgb(16, 162, 245)" },
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
      href: "/PradeepChandranM-11-13-2025.pdf",
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
  const [showLongContent, setShowLongContent] = useState(false);

  const handleContentToggle = (view) => {
    setShowLongContent(view === "long");
  };

  return (
    <main className="max-w-2xl mx-auto min-h-screen px-4 sm:px-6 pt-6 sm:pt-12 pb-16 flex flex-col items-center gap-6 sm:gap-8 font-medium">
      <div className="flex flex-col items-center gap-4 sm:gap-6 text-center mt-4 sm:mt-0">
        <ProfileImage src={PROFILE_IMAGE_SRC} alt={PERSONAL_DATA.name} />
        <Header name={PERSONAL_DATA.name} tagline={PERSONAL_DATA.tagline} />
      </div>

      <LinkGrid links={PERSONAL_DATA.links} />

      <ContentToggle onToggle={handleContentToggle} />

      <AboutSection
        content={PERSONAL_DATA.content}
        showLong={showLongContent}
      />
    </main>
  );
}

export default Home;
