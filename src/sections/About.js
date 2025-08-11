import React from 'react';
import './About.css';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Dominic Oludare' },
    { label: 'Email', value: 'dominicoludare@gmail.com' },
    { label: 'Location', value: 'Nigeria' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Availability', value: 'Open to opportunities' },
    { label: 'Interests', value: 'Football, Video Games, Tech' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better - my journey, passion, and what drives me in web development
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="about-description">
            <p>
              I'm a passionate Front-end Developer with over 3 years of experience creating 
              beautiful and functional web applications. My journey in web development started 
              with a curiosity about how websites work, which evolved into a deep passion for 
              creating user-centered digital experiences.
            </p>
            <p>
              I specialize in React development and modern web technologies, focusing on 
              building responsive, accessible, and performant applications. My approach 
              combines technical expertise with creative problem-solving to deliver 
              solutions that not only work flawlessly but also provide an excellent user experience.
            </p>
            <p>
              When I'm not coding, you'll find me watching football matches, playing video games, 
              or exploring new technologies. I believe in continuous learning and staying 
              up-to-date with the latest industry trends and best practices.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <span className="info-label">{info.label}:</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="values-card">
            <h3>What I Value</h3>
            <div className="values-list">
              <div className="value-item">
                <h4>Quality Code</h4>
                <p>Writing clean, maintainable, and well-documented code</p>
              </div>
              <div className="value-item">
                <h4>User Experience</h4>
                <p>Creating intuitive and accessible user interfaces</p>
              </div>
              <div className="value-item">
                <h4>Continuous Learning</h4>
                <p>Staying updated with latest technologies and best practices</p>
              </div>
              <div className="value-item">
                <h4>Problem Solving</h4>
                <p>Finding efficient solutions to complex challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 