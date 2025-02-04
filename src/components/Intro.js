import React from "react";
import introImage from "./images/intro-image.jpeg"; // Adjust the path to your image
import "./intro.css";

const Intro = () => {

    // Function to redirect to the resume link
    const redirectToResume = () => {
      window.open("https://drive.google.com/file/d/1T2zf4y7MEb5pqOefaMbm57g7YRC7vzyu/view?usp=drive_link", "_blank");
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
          I'm Studying CS @ Oregon State University with a focus in Cybersecurity. I'm intrested in web designing 
          and software Developing. I like creating my own fun and intresting projects 
          on my freetime. 
        </p>

        <button className="resumeButton" onClick={redirectToResume}>Resume</button>
      </div>

    </section>
  );
};

export default Intro;