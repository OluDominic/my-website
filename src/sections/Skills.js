import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faNodeJs, 
  faGitAlt, 
  faNpm,
  faSass,
  faWordpress
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: faReact,
      level: 90,
      color: '#61DAFB',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: faJs,
      level: 85,
      color: '#F7DF1E',
      category: 'Frontend'
    },
    {
      name: 'HTML5',
      icon: faHtml5,
      level: 90,
      color: '#E34F26',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: faCss3Alt,
      level: 85,
      color: '#1572B6',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: faNodeJs,
      level: 75,
      color: '#339933',
      category: 'Backend'
    },
    {
      name: 'MySQL',
      icon: faDatabase,
      level: 70,
      color: '#4479A1',
      category: 'Database'
    },
    {
      name: 'Git',
      icon: faGitAlt,
      level: 80,
      color: '#F05032',
      category: 'Tools'
    },
    {
      name: 'NPM',
      icon: faNpm,
      level: 85,
      color: '#CB3837',
      category: 'Tools'
    },
    {
      name: 'SASS',
      icon: faSass,
      level: 80,
      color: '#CC6699',
      category: 'Frontend'
    },
    {
      name: 'WordPress',
      icon: faWordpress,
      level: 75,
      color: '#21759B',
      category: 'CMS'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'CMS'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical expertise and proficiency in various technologies
        </p>
      </div>

      <div className="skills-content">
        <div className="skills-filter">
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

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
              <div className="skill-header">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
              
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color 
                    }}
                  ></div>
                </div>
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Frontend Development</h3>
            <p>
              Specialized in React ecosystem with strong foundation in HTML, CSS, and JavaScript. 
              Experienced in building responsive, accessible, and performant user interfaces.
            </p>
          </div>
          
          <div className="summary-card">
            <h3>Backend & Tools</h3>
            <p>
              Proficient in Node.js development and database management with MySQL. 
              Skilled in version control with Git and package management with NPM.
            </p>
          </div>
          
          <div className="summary-card">
            <h3>Additional Skills</h3>
            <p>
              Experience with SASS for advanced styling, WordPress for content management, 
              and various modern development tools and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 