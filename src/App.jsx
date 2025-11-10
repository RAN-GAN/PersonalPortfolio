import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectsPage from "./pages/ProjectsPage";
import PixelBlast from "./components/PixelBlast";

function App() {
  return (
    <div className="min-h-screen relative font-medium">
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

      <div style={{ position: "relative", zIndex: 1 }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
