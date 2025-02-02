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
        <h1>Hi I'm Jin</h1>
        <p>
          Hi, I'm Jin! I'm a passionate developer who loves building amazing
          things with code. Scroll down to learn more about me and my work.
        </p>
      </div>
    </section>
  );
};

export default Intro;