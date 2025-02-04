import React from "react";

import {SiEmberdotjs} from "react-icons/si"; 
import "./skills.css";

const Skills = () => {
  // Skills with icons
  const skills = {
    languages: [
      { name: "Python", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width="24" /> },
      { name: "C/C++", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" width="24" /> },
      { name: "HTML", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width="24" /> },
      { name: "CSS", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" width="24" /> },
      { name: "JavaScript", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="24" /> },
      { name: "SQL", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" width="24" /> },
      { name: "Java", icon: <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" width="24" /> },
      { name: "PHP", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" width="24" /> },
      { name: "LaTeX", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="LaTeX" width="24" /> },
    ],  
    frameworks: [
      { name: "React", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="24" /> },
      { name: "Node.js", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="24" /> },
      { name: "Ember.js", icon: <SiEmberdotjs style={{ color: "#E04E39" }}/> },
      { name: "WordPress", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" width="24" /> },
      { name: "Selenium", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" alt="Selenium" width="24" /> },
      { name: "Playwright", icon: <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" width="24" /> },
    ],
    developerTools: [
      { name: "Git", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" width="24" /> },
      { name: "Docker", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" width="24" /> },
      { name: "Visual Studio Code", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" width="24" /> },
     
    ],
    languagesSpoken: [
      { name: "English", icon: <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" width="24" /> },
      { name: "Chinese (Mandarin)", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="Mandarin" width="24" /> },
      { name: "Chinese (Cantonese)", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" alt="Cantonese" width="24" /> },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        
        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Languages</h3>
          <ul className="skills-list">
            {skills.languages.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill.icon} <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="skills-category">
          <h3>Frameworks</h3>
          <ul className="skills-list">
            {skills.frameworks.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill.icon} <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Tools */}
        <div className="skills-category">
          <h3>Developer Tools</h3>
          <ul className="skills-list">
            {skills.developerTools.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill.icon} <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Spoken */}
        <div className="skills-category">
          <h3>Languages Spoken</h3>
          <ul className="skills-list">
            {skills.languagesSpoken.map((language, index) => (
              <li key={index} className="skill-item">
                {language.icon} <span>{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
