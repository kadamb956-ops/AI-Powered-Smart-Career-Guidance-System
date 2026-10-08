import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Careers from "./pages/Careers";
import Certifications from "./pages/Certifications";
import RoadmapPage from "./pages/RoadmapPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/assessment" element={<Assessment />} />

        <Route path="/careers" element={<Careers />} />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route
          path="/roadmap"
          element={<RoadmapPage />}
        />

        <Route
          path="/resume"
          element={<ResumePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

