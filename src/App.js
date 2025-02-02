import React, { useRef } from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Project from "./components/project"; 
import Skills from "./components/skills";
import Experience from "./components/experiences";
import "./App.css";


function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to redirect to the resume link
  const redirectToResume = () => {
    window.location.href = "https://jinzeld.github.io/public/pdf/Jinhui_resume_2025.pdf";
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
          <li onClick={redirectToResume}>Resume</li> {/* Redirect to resume link */}
        </ul>
      </nav>

      {/* Intro Section */}
      <Intro />

      {/* About Me Section */}
      <section ref={aboutRef} className="section">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section">
        <Project />
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section">
        <Skills />
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="section">
      <Experience />
      </section>
      
    </div>
  );
}

export default App; 