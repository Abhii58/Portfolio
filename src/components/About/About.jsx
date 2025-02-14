import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="profile-image-section">
        <div className="profile-image"><h1>About</h1>
          <img src="profiles.png" alt="Profile" /> <h1>Me</h1>
        </div>
      </div>
      <div className="profile-content">
        <div className="p-left-section">
          <section className="profile-summary">
            <h2></h2>
            <p>
            I'm a passionate Web Developer, Designer, and Machine Learning Enthusiast dedicated to crafting innovative and impactful digital solutions. With a strong foundation in web development, Python programming, and machine learning, I strive to bring creativity and logic together to solve real-world problems.
</p>
<p>
As a fresher, I may be at the beginning of my journey, but my enthusiasm for learning and exploring the limitless possibilities of technology drives me every day. Whether it's designing user-friendly websites or building intelligent machine learning models, I approach every project with a commitment to excellence and a keen eye for detail.
</p>
<p>
My ultimate goal is to become a leading innovator in this field, continuously pushing boundaries and making a meaningful difference through technology. I believe in growth, persistence, and turning challenges into opportunities.
</p>
<p>
Let’s create something extraordinary together!
</p>
          </section>
        </div>
        <div className="p-right-section">
          <div className="info-card">
            <h3>Languages</h3>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>others</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Hobbies</h3>
            <ul>
              <li>Cricket</li>
              <li>Chess</li>
              <li>Games- mobile/Pc</li>
              <li>football</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
