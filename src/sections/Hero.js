import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Front-end Developer', 'React Specialist', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Dominic Oludare</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{texts[currentText]}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly web applications. 
              I specialize in React development and modern web technologies.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>DO</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Dominic Oludare</h3>
                <p>Front-end Developer</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="scroll-down"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to next section"
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </section>
  );
};

export default Hero; 