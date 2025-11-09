import React from "react";

export default function Projects() {
  const achievements = [
    {
      text: "Automated semester result workflows by developing a service that automatically sends results as soon as they are published staright to mail.",
      link: "#",
      color: "yellow",
      label: "",
    },
    {
      text: "Collaborated with a professional team to perform large-scale",
      link: "https://www.linkedin.com/in/pradeepchandranm/",
      color: "green",
      label: "Network Load Testing for my college",
    },
    {
      text: "Discovered and responsibly disclosed vulnerabilities in an",
      link: "https://www.linkedin.com/in/pradeepchandranm/",
      color: "pink",
      label: "EdTech Platform",
    },
  ];

  const projects = [
    {
      title: "SGPA Calculator",
      link: "https://ran-gan.github.io/SKCET-CGPA/",
      color: "pink",
      desc: "A student-friendly GPA calculator that helps compute semester grades instantly through a clean and minimal interface.",
    },
    {
      title: "Guest Management System",
      link: "#",
      color: "green",
      desc: "A hotel administration tool to manage guest check-ins, bookings, and records efficiently with role-based access control.",
    },
    {
      title: "Hotel Landing Page",
      link: "karpagamresidency.vercel.app",
      color: "yellow",
      desc: "A responsive website for a hotel that highlights amenities, nearby attractions, and contact details with a modern design.",
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
      className="max-w-2xl mx-auto flex flex-col items-center min-h-screen px-4 sm:px-6 py-6 
text-gray-800 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200"
    >
      <div className="w-full">
        {/* Back Button */}
        <a
          href="/"
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
        </a>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Artifacts</h1>
          <p className="text-base text-gray-500">
            Here are things I’m proud of.
          </p>
        </div>

        {/* Achievements */}
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Achievements</h2>
          <ul className="space-y-1.5">
            {achievements.map((a, idx) => (
              <>
                <li key={idx} className="flex text-base">
                  <span className="mr-2 text-gray-400">–</span>
                  <div>
                    {a.text}{" "}
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${underlineStyle[a.color]}`}
                    >
                      {a.label}
                    </a>
                  </div>
                </li>
                <br />
              </>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Projects</h2>
          <ul className="space-y-1.5">
            {projects.map((p, idx) => (
              <>
                {" "}
                <li key={idx} className="flex text-base">
                  <span className="mr-2 text-gray-400">–</span>
                  <div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${underlineStyle[p.color]}`}
                    >
                      {p.title}
                    </a>
                    : {p.desc}
                  </div>
                </li>
                <br />
              </>
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
