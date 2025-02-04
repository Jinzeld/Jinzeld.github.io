import React from "react";
import gd_clone from "./images/gd_clone.png"
import sql_img from "./images/sql.png"
import fidelity_Cli from "./images/fidelity_Cli.png"
import wumpus_gme from "./images/wumpus_gme.png"
import "./project.css";

const Projects = () => {
  // Project data from your resume
  const projects = [
    {
      id: 1,
      title: "Google Drive Clone",
      description:
        "Developed a cloud-based file storage application using React for the frontend, enabling a responsive and user-friendly interface for file uploads, downloads, and organization.",
      Languages: ["React", "Supabase", "Javascript", "SQL", "HTML", "CSS"],
      code: "https://github.com/Jinzeld/google-drive-clone.git",
      image: gd_clone, 
    },
    {
      id: 2,
      title: "Automated Trading/Money Transferring Bot",
      description:
        "Developed an automated trading bot using Python and Playwright to interact with the Fidelity website, facilitating buying and selling of stocks based on user-defined parameters. Built features to streamline account management, including automated user account creation, fund transfers between accounts, and account verification processes.",
      Languages: ["Python", "API", "Playwright"],
      code: "https://github.com/Jinzeld/Fidelity-trading-bot",
      image: fidelity_Cli   , 
    },
    {
      id: 3,
      title: "Full Stack Web Developer",
      description:
        "Designed a relational database schema for a gym management system, including 4 different tables to efficiently manage various aspects of gym operations. Developed SQL triggers to automate business rules, such as dynamically updating class capacities on member enrollments and drops, improving system efficiency.",
      Languages: ["PHP", "SQL", "HTML", "CSS"],
      code: "https://github.com/Jinzeld/Gym-Managment-System",
      image: sql_img,
    },
    {
      id: 4,
      title: "Hunt The Wumpus",
      description:
        "Developed a CLI-based adventure survival game where users navigate through various environments and encounter dynamic obstacles such as falling stalactites and the Wumpus, enhancing user engagement. Designed a simple but interactive UI with responsive controls, improving accessibility and user immersion.",
      Languages: ["C++"],
      code: "https://github.com/Jinzeld/Wumpus-game",
      image: wumpus_gme,    
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Project Details */}
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="Languages">
              <strong>Languages:</strong> {project.Languages.join(", ")}
            </div>
            <div className="links">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="code-link"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;