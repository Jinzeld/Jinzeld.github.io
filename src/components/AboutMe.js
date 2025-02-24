import React from "react";
import profileImage from "./images/profile.jpeg"; 
import "./aboutMe.css"; 

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
                I'm a passionate developer with experience in building web 
                applications using React, JavaScript, and other front-end projects. 
                I also specialize in Cybersecurity, where I am learning the 
                fundamentals of secure coding practices, threat detection, and data 
                protection. I am passionate about understanding how to build secure 
                systems and protect user data, and I am actively exploring tools and 
                techniques to strengthen my knowledge in this field.
                I love solving problems and creating user-friendly
                interfaces. In my free time, I enjoy hiking, photography, and
                exploring new technologies.
          </p>
          <div className="social-links">
            <a href="https://github.com/Jinzeld" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jinhui-zhen" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;