import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Naija Bank Finder',
      description: 'A comprehensive web application for finding Nigerian banks and their branch information. Users can search for banks by state and get detailed branch addresses and contact information.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
      category: 'Frontend',
      githubUrl: 'https://github.com/OluDominic/bank-finder',
      liveUrl: 'https://naija-bank-finder.vercel.app/',
      features: ['Bank Search', 'Branch Locator', 'State-wise Filtering', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Swop - Mobile Wallet',
      description: 'A mobile wallet application where users can generate account numbers, make bank transfers, purchase airtime/data, and pay bills. Complete financial management solution.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Mobile Development', 'Payment Integration', 'API'],
      category: 'Mobile',
      githubUrl: '#',
      liveUrl: '#',
      features: ['Account Generation', 'Bank Transfers', 'Airtime/Data Purchase', 'Bill Payments']
    },
    {
      id: 3,
      title: 'Kontekture Constructions',
      description: 'A comprehensive construction management platform built with React and Firebase. Features real-time project tracking, client management, and resource allocation.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Context API', 'CSS3'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/OluDominic/Kontekture',
      liveUrl: 'https://66c4b16c70e0d60b49966dc8--kontekture.netlify.app/',
      features: ['Project Management', 'Real-time Updates', 'Client Portal', 'Resource Tracking']
    },
    {
      id: 4,
      title: 'Ethereum Blockchain App',
      description: 'A decentralized application (DApp) for cryptocurrency transactions and smart contract interactions. Built with React and Solidity.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Solidity', 'SASS', 'Web3.js'],
      category: 'Blockchain',
      githubUrl: 'https://github.com/OluDominic/Kryptommerce',
      liveUrl: 'https://66c4b7b459e31b188bdcac88--astonishing-faun-2581eb.netlify.app/',
      features: ['Smart Contracts', 'Crypto Transactions', 'Wallet Integration', 'DApp Interface']
    },
    {
      id: 5,
      title: 'Food Order App',
      description: 'A modern food delivery application with menu management, order tracking, and payment integration. Features responsive design and user-friendly interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'SASS', 'Node.js', 'Express'],
      category: 'Full Stack',
      githubUrl: 'https://transcendent-churros-ce07a2.netlify.app/',
      liveUrl: 'https://shielded-citadel-81661.herokuapp.com/',
      features: ['Menu Management', 'Order Tracking', 'Payment Integration', 'Responsive Design']
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information and forecasts. Integrates with weather APIs for accurate data.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API Integration', 'HTML5', 'CSS3'],
      category: 'Frontend',
      githubUrl: 'https://github.com/OluDominic/weather-app',
      liveUrl: 'https://dom-weather.netlify.app/',
      features: ['Real-time Weather', 'Location-based Data', 'Forecast Display', 'API Integration']
    }
  ];

  const categories = ['All', 'Frontend', 'Mobile', 'Full Stack', 'Blockchain'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and technical expertise
        </p>
      </div>

      <div className="projects-content">
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live project"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <span>{project.title}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 