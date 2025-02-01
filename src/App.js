import React, { useRef } from "react";
import "./App.css";

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
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
          <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
        </ul>
      </nav>

      {/* Sections */}
      <section ref={aboutRef} className="section">
        <h2>About Me</h2>
        <p>This is the about me section. Add your personal details here.</p>
      </section>

      <section ref={experienceRef} className="section">
        <h2>Experience</h2>
        <p>This is the experience section. List your work experience here.</p>
      </section>

      <section ref={projectsRef} className="section">
        <h2>Projects</h2>
        <p>This is the projects section. Showcase your projects here.</p>
      </section>

      <section ref={skillsRef} className="section">
        <h2>Skills</h2>
        <p>This is the skills section. Highlight your skills here.</p>
      </section>

      <section ref={resumeRef} className="section">
        <h2>Resume</h2>
        <p>This is the resume section. Provide a link to your resume or embed it here.</p>
      </section>
    </div>
  );
}

export default App;