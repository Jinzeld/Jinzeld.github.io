import React from "react";
import introImage from "./images/intro-image.jpeg"; //intro image
import "./Intro.css"; // Optional: For styling

const Intro = () => {
    return (
      <section id="intro" className="intro-section">
        <div className="intro-container">
          {/* Image on the left */}
          <div className="intro-image">
            <img src={introImage} alt="Intro" />
          </div>
  
          {/* Intro text on the right */}
          <div className="intro-text">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I'm Jin! I'm a passionate developer who loves building amazing
              things with code. Scroll down to learn more about me and my work.
            </p>
          </div>
        </div>
      </section>
    );
  };

export default Intro;