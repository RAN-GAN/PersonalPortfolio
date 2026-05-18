import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const achievements = [
    {
      text: "Built a system that automatically detects result releases and instantly sends them to users via email.",
      link: null,
      color: "yellow",
      label: "Automated Result Notifications",
    },
    {
      text: "Worked with a professional team to simulate high traffic and uncover performance bottlenecks in college systems.",
      link: "https://www.linkedin.com/in/pradeepchandranm/",
      color: "green",
      label: "Infrastructure Load Testing",
    },
    {
      text: "Discovered and responsibly disclosed security flaws including access control and privilege escalation issues.",
      link: "https://www.linkedin.com/in/pradeepchandranm/",
      color: "pink",
      label: "Security Research",
    },
  ];

  const projects = [
    {
      title: "Automated Result Notifier",
      link: null,
      color: "pink",
      desc: "Monitors result portals in real-time and instantly notifies users when results are published.",
    },
    {
      title: "Code Sync",
      link: null,
      color: "green",
      desc: "Aggregates coding activity from multiple platforms into a single dashboard for unified tracking.",
    },
    {
      title: "Morphide",
      link: null,
      color: "yellow",
      desc: "An IoT IDE with device fingerprinting and firmware inspection for smarter embedded development.",
    },
    {
      title: "SGPA Calculator",
      link: "https://ran-gan.github.io/SKCET-CGPA/",
      color: "pink",
      desc: "A fast, minimal GPA calculator used for thousands of computations with top search ranking.",
    },
  ];
  const underlineStyle = {
    pink: "underline decoration-pink-500 decoration-2 underline-offset-2 hover:text-pink-400",
    yellow:
      "underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-yellow-300",
    green:
      "underline decoration-green-500 decoration-2 underline-offset-2 hover:text-green-400",
  };

  return (
    <div
      className="max-w-2xl mx-auto flex flex-col items-center  px-4 sm:px-6 py-6 
text-gray-800 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200"
    >
      <div className="w-full">
        {/* Back Button */}
        <Link
          to="/"
          className="text-base text-gray-500 flex items-center gap-1 cursor-pointer hover:text-gray-700 mb-4"
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
          <h1 className="text-2xl font-semibold">Artifacts</h1>
          <p className="text-base text-gray-500">
            Here are things I’m proud of.
          </p>
        </div>
        <hr className="m-0.5" />
        <hr className="m-0.5" />
        <br />
        {/* Achievements */}
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Achievements</h2>
          <ul className="space-y-1.5">
            {achievements.map((a, idx) => (
              <React.Fragment key={idx}>
                <li className="flex text-base">
                  <span className="mr-2 text-gray-400">–</span>
                  <div>
                    {a.text}{" "}
                    {a.link ? (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${underlineStyle[a.color]}`}
                      >
                        {a.label}
                      </a>
                    ) : (
                      <span className={`${underlineStyle[a.color]}`}>{a.label}</span>
                    )}
                  </div>
                </li>
                <br />
              </React.Fragment>
            ))}
          </ul>
        </section>
        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Projects</h2>
          <ul className="space-y-1.5">
            {projects.map((p, idx) => (
              <React.Fragment key={idx}>
                <li className="flex text-base">
                  <span className="mr-2 text-gray-400">–</span>
                  <div>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${underlineStyle[p.color]}`}
                      >
                        {p.title}
                      </a>
                    ) : (
                      <span className={`${underlineStyle[p.color]}`}>{p.title}</span>
                    )}
                    : {p.desc}
                  </div>
                </li>
                <br />
              </React.Fragment>
            ))}
          </ul>
        </section>
        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          For more projects and scripts, visit{" "}
          <a
            href="https://github.com/RAN-GAN"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-yellow-400 decoration-2 underline-offset-2 hover:text-yellow-300"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
