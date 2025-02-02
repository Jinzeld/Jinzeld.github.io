import React from "react";
import experienceImage from "./images/experience.jpeg"; // Adjust the path to your image
import "./experiences.css";

const Experience = () => {
  // Experience data from your resume
  const experiences = [
    {
      id: 1,
      title: "Leadership Service Intern",
      company: "Metropolitan Family Service",
      date: "Apr. 2022 – May 2022",
      location: "Portland, OR",
      description:
        "Enhanced time management skills by balancing activity planning, lesson preparation, and hands-on guidance, ensuring all tasks were completed efficiently and on schedule. Developed strong interpersonal and networking abilities by collaborating with team members, supervisors, and parents to create a supportive and engaging learning environment.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {/* Image on the left */}
        <div className="experience-image">
          <img src={experienceImage} alt="Experience" />
        </div>

        {/* Experience details on the right */}
        <div className="experience-details">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="date-location">
                {exp.date} | {exp.location}
              </p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;