import React from "react";
import introImage from "./images/intro-image.jpeg"; // Adjust the path to your image
import "./intro.css";

const Intro = () => {
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
      </div>
    </section>
  );
};

export default Intro;