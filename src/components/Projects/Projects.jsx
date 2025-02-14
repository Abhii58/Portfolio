import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Online Quiz site',
    technologyUsed: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    languages: [
      { name: 'PHP', percentage: 60 },
      { name: 'JavaScript', percentage: 30 },
      { name: 'HTML/CSS', percentage: 10 },
    ],
    title: 'Online Quiz site',
    description: 'An interactive web application developed using PHP and MySQL, designed to create and manage quizzes for educational or training purposes. The platform allows users to register, log in, and take quizzes on various topics. Administrators can easily add, update, or delete quiz questions, manage users, and analyze quiz results through a user-friendly dashboard.',
    link: '#'
  },
  {
    title: 'Personal blogging site',
    technologyUsed: ['React', 'MongoDB', 'Node.js', 'HTML/CSS'],
    languages: [
      { name: 'React.js', percentage: 40 },
      { name: 'Node.js', percentage: 30 },
      { name: 'MongoDB', percentage: 20 },
      { name: 'HTML/CSS', percentage: 10 },
    ],
    description: 'Developed a fully functional personal blog web application with a content management system (CMS) using the MERN stack. Established a clean and intuitive user interface featuring post creation, categorization, and search functionality. Built a secure backend with REST API integration and deployed the site for public access.',
    link: '#'
  },
  {
    title: 'Dynamic Event Calendar',
    technologyUsed: ['React.js', 'Context API', 'LocalStorage', 'Netlify'],
    languages: [
      { name: 'React.js', percentage: 50 },
      { name: 'JavaScript', percentage: 30 },
      { name: 'CSS', percentage: 20 },
    ],
    description: 'Created a React.js application with features like event management, calendar navigation, and local Storage data persistence using React.js, Context API, local-Storage, Netlify.Implemented a clean UI - components and deployed on Netlify.Enabled adding, editing, and deleting events with detailed forms.',
    link: 'https://calendar-ab.netlify.app'
  },
  {
    title: 'Stock Price Predictor',
    technologyUsed: ['Python', 'Machine Learning', 'LSTM', 'Random Forest'],
    languages: [
      { name: 'Python', percentage: 70 },
      { name: 'ML Algorithms', percentage: 30 },
    ],
    description: 'Built a machine learning model to predict stock prices using historical market data.Implemented data preprocessing, feature engineering, and model training with algorithms like LSTM and Random Forest.Integrated real-time data fetching through APIs and visualized prediction results using interactive dashboards.',
    link: '#'
  },
  {
    title: 'Fake News Detector',
    technologyUsed: ['Python', 'Machine Learning', 'NLP', 'Flask'],
    languages: [
      { name: 'Python', percentage: 60 },
      { name: 'NLP', percentage: 30 },
      { name: 'Flask', percentage: 10 },
    ],
    description: 'A web-based application that utilizes machine learning algorithms to detect and classify news articles as real or fake. The project involves NLP techniques to analyze the content and metadata of news articles, extracting key features to train models like Logistic Regression, Naive Bayes, or Random Forest. Users can input news headlines or articles, and the system provides a credibility score or label based on the trained model.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className='projects-title'>PROJECTS</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card-container">
              <div className="project-card">
                <div className="front">
                  <h3>{project.title}</h3>
                  <div className="technologies">
                    {project.technologyUsed.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="languages">
                    {project.languages.map((lang, i) => (
                      <div key={i} className="language-progress">
                        <div className="progress-circle">
                          <div 
                            className="progress" 
                            style={{ '--percentage': lang.percentage }}
                          ></div>
                          <div className="inner">{lang.percentage}%</div>
                        </div>
                        <span>{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="back">
                  <p className='description'>{project.description}</p>
                  <a 
                    href={project.link} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
