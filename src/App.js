import React, { useRef, useState } from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);

  // State for theme (light/dark mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <ul>
            <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
            <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
          </ul>
        </div>
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="section">
        <Intro />
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="section">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="section">
        <h2>Experience</h2>
        <p>This is the experience section. List your work experience here.</p>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section">
        <h2>Projects</h2>
        <p>This is the projects section. Showcase your projects here.</p>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section">
        <h2>Skills</h2>
        <p>This is the skills section. Highlight your skills here.</p>
      </section>

      {/* Resume Section */}
      <section ref={resumeRef} className="section">
        <h2>Resume</h2>
        <p>This is the resume section. Provide a link to your resume or embed it here.</p>
      </section>
    </div>
  );
}

export default App;