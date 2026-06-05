import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import PixelBlast from "./components/PixelBlast";

const CinematicHome     = lazy(() => import("./components/cinematic/CinematicHome"));
const ProjectsPage      = lazy(() => import("./pages/ProjectsPage"));
const MiniProjectsPage  = lazy(() => import("./pages/MiniProjectsPage"));
const TechStackPage     = lazy(() => import("./pages/TechStackPage"));
const FreelancePortfolio = lazy(() => import("./pages/FreelancePortfolio"));

// Renders the PixelBlast background only on non-cinematic routes
function ConditionalBackground() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        filter: "blur(1px) opacity(0.6)",
      }}
    >
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.5}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.6}
        edgeFade={0.1}
        transparent
      />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ConditionalBackground />
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
