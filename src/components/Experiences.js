import React from "react";
import "./Experiences.css";

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      date: "Jan 2022 - Present",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Innovate Solutions",
      date: "Jun 2020 - Dec 2021",
      description:
        "Built responsive and user-friendly interfaces using modern web technologies. Worked closely with designers to implement UI/UX best practices.",
    },
    {
      id: 3,
      title: "Intern",
      company: "Startup Inc.",
      date: "May 2019 - Aug 2019",
      description:
        "Assisted in the development of a mobile app using React Native. Gained hands-on experience with version control and agile methodologies.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="date">{exp.date}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;