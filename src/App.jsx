import React, { Suspense, lazy, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import CinematicLoader from "./components/cinematic/CinematicLoader";
import CinematicHome from "./components/cinematic/CinematicHome";

const ProjectsPage      = lazy(() => import("./pages/ProjectsPage"));
const MiniProjectsPage  = lazy(() => import("./pages/MiniProjectsPage"));
const BlogsPage         = lazy(() => import("./pages/BlogsPage"));
const BlogPostPage      = lazy(() => import("./pages/BlogPostPage"));
// TechStackPage route is disabled (see commented <Route> below). Not lazy-imported
// so it doesn't emit an unused chunk; re-add the import when re-enabling the route.
const FreelancePortfolio = lazy(() => import("./pages/FreelancePortfolio"));

function AppRoutes() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"             element={<CinematicHome />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/miniprojects" element={<MiniProjectsPage />} />
          <Route path="/blogs"        element={<BlogsPage />} />
          <Route path="/blogs/:id"    element={<BlogPostPage />} />
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
    // reducedMotion="user" makes every Framer Motion animation honor the OS
    // "reduce motion" setting (incl. JS-driven loops like the freelance rings
    // that the global CSS reduced-motion net can't reach).
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  );
}

export default App;
