import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "J-query","React.js"],
    description: "Skills focused on UI/UX development for modern applications.",
  },
  {
    category: "Backend",
    skills: ["Node.js", "MongoDB", "SQL", "Python","php"],
    description: "Server-side programming and database management skills.",
  },
  {
    category: "AI/ML",
    skills: ["Machine Learning", "Web Scrapping", "Analytics"],
    description: "Advanced AI tools and technologies for development workflows.",
  },
  {
    category: "Tools",
    skills: ["Google Cloud/Firebase", "Git", "canva", "postman" ],
    description: "Advanced tools and technologies for development workflows.",
  },
  {
    category: "programming",
    skills: ["C Programming", "Python", ],
    description: "Advanced tools and technologies for development workflows.",
  },
  {
    category: "Analytics",
    skills: ["Python","Excel","Tableau","SQL","ML" ],
    description: "Advanced tools and technologies for development workflows.",
  },
];

const Skills = () => {
  return (
    <section className="skills-page">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <div className="skills-header">
              <h2>{category.category}</h2>
            </div>
            <p className="skills-description">{category.description}</p>
            <div className="skills-icons">
              {category.skills.map((skill, idx) => (
                <div className="skill-icon" key={idx}>
                  <span className="icon-placeholder">💻</span>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
