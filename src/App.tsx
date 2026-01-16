import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Slideshow } from "./components/Slideshow";
import { LandingPage } from "./components/LandingPage";
import {
  Q1Slide,
  Q2Slide,
  Q3Slide,
  SprintSlide,
} from "./components/Slides";
import { fetchSprints, type Sprint } from "./lib/supabase";

function RoadmapSlideshow() {
  return (
    <Slideshow>
      <Q1Slide />
      <Q2Slide />
      <Q3Slide />
    </Slideshow>
  );
}

function SprintsSlideshow() {
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSprints()
      .then((data) => {
        console.log("Sprints loaded:", data);
        setSprints(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sprints:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "var(--font-body)",
          color: "var(--pe-gray-500)",
        }}
      >
        Loading sprints...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "var(--font-body)",
          color: "var(--pe-error)",
          gap: "1rem",
        }}
      >
        <p>Error loading sprints: {error}</p>
      </div>
    );
  }

  if (sprints.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "var(--font-body)",
          color: "var(--pe-gray-500)",
        }}
      >
        No sprints found.
      </div>
    );
  }

  return (
    <Slideshow>
      {sprints.map((sprint) => (
        <SprintSlide key={sprint.id} sprint={sprint} />
      ))}
    </Slideshow>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmap" element={<RoadmapSlideshow />} />
        <Route path="/sprints" element={<SprintsSlideshow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
