import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      description: "Developing and maintaining responsive web applications using React, HTML, CSS, and JavaScript. Collaborated with designers and backend developers to create user-friendly interfaces."
    },
    {
      role: "Web Developer Intern",
      company: "Creative Web Studios",
      duration: "Jun 2022 - Dec 2022",
      description: "Assisted in building and optimizing websites for various clients. Gained experience in WordPress, HTML/CSS, and basic SEO practices."
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
