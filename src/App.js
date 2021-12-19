import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import AboutPage from "./pages/about_page/AboutPage";
import ProjectPage from "./pages/project_page/ProjectPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
