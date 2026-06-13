import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const CinematicHome     = lazy(() => import("./components/cinematic/CinematicHome"));
const ProjectsPage      = lazy(() => import("./pages/ProjectsPage"));
const MiniProjectsPage  = lazy(() => import("./pages/MiniProjectsPage"));
const TechStackPage     = lazy(() => import("./pages/TechStackPage"));
const FreelancePortfolio = lazy(() => import("./pages/FreelancePortfolio"));

function AppRoutes() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              fontFamily: '"DM Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(28,25,23,0.4)",
              background: "#fafaf9",
            }}
          >
            Loading...
          </div>
        }
      >
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
  return (
    <div className="min-h-screen relative font-medium">
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
