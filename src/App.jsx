import React, { Suspense, lazy, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CinematicLoader from "./components/cinematic/CinematicLoader";
import CinematicHome from "./components/cinematic/CinematicHome";

const ProjectsPage      = lazy(() => import("./pages/ProjectsPage"));
const MiniProjectsPage  = lazy(() => import("./pages/MiniProjectsPage"));
const TechStackPage     = lazy(() => import("./pages/TechStackPage"));
const FreelancePortfolio = lazy(() => import("./pages/FreelancePortfolio"));

function AppRoutes() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"             element={<CinematicHome />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/miniprojects" element={<MiniProjectsPage />} />
          {/* <Route path="/techstack" element={<TechStackPage />} /> */}
          <Route path="/freelance"    element={<FreelancePortfolio />} />
          <Route path="*"             element={<CinematicHome />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showContent]);

  return (
    <div className="min-h-screen relative font-medium">
      <CinematicLoader 
        onReveal={() => setShowContent(true)}
        onComplete={() => setIsBooted(true)} 
      />
      <div className={showContent ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.8s ease-out" }}>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
