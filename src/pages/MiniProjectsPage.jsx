import React from "react";
import { Link } from "react-router-dom";
function MiniProjectsPage() {
  const miniProjects = [
    {
      title: "Rewards Automator",
      description:
        "A Python tool that automates Microsoft Bing searches to collect reward points.",
    },
    {
      title: "PPT-to-Audio",
      description:
        "A Python GUI application that extracts content from a PPT file and converts it into an audio file.",
    },
    {
      title: "Birthday Lookup",
      description:
        "A React website that displays today’s and upcoming birthdays of students in my college.",
    },
    {
      title: "whatsRead",
      description:
        "A simple webpage that lets you view WhatsApp exported chats in a clean, readable format.",
    },
    {
      title: "YouTube Subtitle Extractor Extension",
      description:
        "A browser extension that extracts the subtitles of a YouTube video and logs them in the console.",
    },
    {
      title: "Autotyper",
      description:
        "A hotkey-driven AutoTyper that types text from a saved file or injects clipboard content based on the selected trigger.",
    },
    {
      title: "ChatHost",
      description:
        "A lightweight site for sharing text or files with real-time chat built in.",
    },
    {
      title: "Carbon GPT",
      description:
        "A simple tool that estimates the carbon footprint of your ChatGPT usage.",
    },
    {
      title: "Student Management Portal",
      description:
        "A clean, feature-packed dashboard for staff to manage student information.",
    },
    {
      title: "MTechDash (ongoing)",
      description:
        "A unified dashboard designed to give students everything they need in one place.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center min-h-screen px-4 sm:px-6 py-6 text-gray-800 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200">
      <div className="w-full">
        {/* Back Button */}
        <Link
          to="/"
          className="text-base text-gray-500 flex items-center gap-1 cursor-pointer hover:text-gray-700 mb-4 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span>Back</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Mini Projects
          </h1>
          <p className="text-base text-gray-500">
            Small experiments and utilities I've built.
          </p>
        </div>
        <hr className="m-0.5 border-gray-300" />
        <hr className="m-0.5 border-gray-300" />
        <br />

        {/* Projects Grid */}
        <section className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {miniProjects.map((project, idx) => (
              <div
                key={idx}
                className="group p-4 bg-gray-50/30 border border-gray-200/60 rounded-lg hover:bg-gray-50/50 hover:shadow-md hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          For more projects and scripts, visit{" "}
          <a
            href="https://github.com/RAN-GAN"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-yellow-300 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default MiniProjectsPage;
