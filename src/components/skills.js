import React from "react";
import "./skills.css";

const Skills = () => {
  // Skills data
  const skills = {
    languages: ["HTML/CSS", "PHP", "JavaScript", "SQL", "Python", "C/C++", "Java", "LaTeX"],
    frameworks: ["React", "Node.js", "Ember.js", "WordPress"],
    developerTools: ["Git", "Docker", "VS Code", "Visual Studio"],
    languagesSpoken: ["English", "Chinese (Mandarin)", "Chinese (Cantonese)"],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            {skills.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>

        <div className="skills-category">
          <h3>Frameworks</h3>
          <ul>
            {skills.frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </div>

        <div className="skills-category">
          <h3>Developer Tools</h3>
          <ul>
            {skills.developerTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="skills-category">
          <h3>Languages Spoken</h3>
          <ul>
            {skills.languagesSpoken.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;