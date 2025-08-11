import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/OluDominic', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/oludare-dominic-38708a97/', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/pato7dominic', label: 'Twitter' },
    { icon: faFacebook, url: 'https://www.facebook.com/dominicoludare', label: 'Facebook' },
    { icon: faDev, url: 'https://dev.to/oludominic', label: 'Dev.to' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <h3>Dominic Oludare</h3>
            <p>Front-end Developer passionate about creating amazing web experiences.</p>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>dominicoludare@gmail.com</p>
            <p>Nigeria</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Dominic Oludare. All rights reserved.</p>
          </div>
          
          <button 
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 