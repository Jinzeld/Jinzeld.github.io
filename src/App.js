import React, { useRef } from "react";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Project from "./components/project"; 
import Skills from "./components/skills";
import Experience from "./components/experiences";
import Footer from "./components/footer"
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
    window.location.href = "https://drive.google.com/file/d/1T2zf4y7MEb5pqOefaMbm57g7YRC7vzyu/view?usp=drive_link";
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
          <li onClick={redirectToResume}>Resume</li> 
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

      {/* Get in Touch Section */}
      <section className="get-in-touch">
        <h2>Get in Touch!</h2>
        <p>Feel free to reach out if you'd like to collaborate or just say hi!</p>
        <a href="jinhui.zhen21@gmail.com" className="contact-button">
          Contact Me  
        </a>
      </section>

      {/*Footer*/}
      <Footer />
      
    </div>
  );
}

export default App; 