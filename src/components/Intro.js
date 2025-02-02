import React from "react";
import introImage from "./images/intro-image.jpeg"; // Adjust the path to your image
import "./intro.css";

const Intro = () => {

    // Function to redirect to the resume link
    const redirectToResume = () => {
    window.location.href = "https://jinzeld.github.io/public/pdf/Jinhui_resume_2025.pdf";
};
  return (
    <section id="intro" className="intro-section">
      {/* Image on the left */}
      <div className="intro-image">
        <img src={introImage} alt="Intro" />
      </div>

      {/* Intro text on the right */}
      <div className="intro-text">
        <h1>Hello! I am Jin</h1>
        <p>
          I'm Studying CS @ Oregon State University intrested in web designing 
          and software Developing. I like create my own fun and intresting projects 
          on my free time.
        </p>

        <button className="resumeButton" onClick={redirectToResume}>Resume</button>
      </div>

    </section>
  );
};

export default Intro;