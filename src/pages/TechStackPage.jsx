import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const mainStack = [
    { name: "React", icon: "⚛️", level: 90, desc: "Building interactive UIs" },
    { name: "JavaScript", icon: "🟨", level: 85, desc: "Core language for web" },
    { name: "Python", icon: "🐍", level: 80, desc: "Backend & automation" },
    { name: "Node.js", icon: "🟢", level: 75, desc: "Server-side JavaScript" },
    { name: "MongoDB", icon: "🍃", level: 70, desc: "NoSQL database" },
    { name: "Docker", icon: "🐳", level: 65, desc: "Containerization" },
  ];

  const otherTech = [
    "TypeScript", "Java", "C", "HTML/CSS", "Tailwind", "Express", 
    "Flask", "MySQL", "PostgreSQL", "Git", "Linux", "AWS", 
    "CI/CD", "REST API", "Redux", "Webpack", "Vite", "Jest",
    "Selenium", "Postman", "Nginx", "Redis", "GraphQL", "WebSockets"
  ];

  return (
    <div className="min-h-screen px-6 py-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-base text-gray-500 flex items-center gap-1 cursor-pointer hover:text-gray-700 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span>Back</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tech Stack</h1>
          <p className="text-lg text-gray-500">Technologies I work with daily.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Stack */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Core Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainStack.map((tech) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="bg-white/40 backdrop-blur-sm border border-gray-300 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-400"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{tech.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{tech.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{tech.desc}</p>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 transition-all duration-700"
                          style={{ width: hoveredTech === tech.name ? `${tech.level}%` : '0%' }}
                        />
                      </div>
                      {hoveredTech === tech.name && (
                        <span className="text-xs text-gray-600 mt-1 block">{tech.level}% proficiency</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Other Technologies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Also Familiar With</h2>
            <div className="bg-white/40 backdrop-blur-sm border border-gray-300 rounded-xl p-6">
              <div className="flex flex-wrap gap-2">
                {otherTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 hover:border-gray-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
