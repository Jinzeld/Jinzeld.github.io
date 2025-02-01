import React, { useRef } from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to redirect to the resume link
  const redirectToResume = () => {
    window.location.href = "https://jinzeld.github.io/public/pdf/Resume.pdf";
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
          <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={redirectToResume}>Resume</li> {/* Redirect to resume link */}
        </ul>
      </nav>

      {/* Intro Section */}
      <Intro />

      {/* About Me Section */}
      <section ref={aboutRef} className="section">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="section">

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
      
    </div>
  );
}

export default App; 