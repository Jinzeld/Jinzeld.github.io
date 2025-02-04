import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaPhp, FaJs, FaDatabase, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt 
} from "react-icons/fa";
import { SiCplusplus, SiLatex, SiEmberdotjs, SiWordpress, SiDocker} from "react-icons/si";
import { MdLanguage } from "react-icons/md";
import "./skills.css";

const Skills = () => {
  // Skills with icons
  const skills = {
    languages: [
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt  /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <FaPhp  /> },
      { name: "LaTeX", icon: <SiLatex /> },
    ],
    frameworks: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Ember.js", icon: <SiEmberdotjs /> },
      { name: "WordPress", icon: <SiWordpress /> },
    ],
    developerTools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <SiDocker /> },
     
    ],
    languagesSpoken: [
      { name: "English", icon: <MdLanguage /> },
      { name: "Chinese (Mandarin)", icon: <MdLanguage /> },
      { name: "Chinese (Cantonese)", icon: <MdLanguage /> },
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
