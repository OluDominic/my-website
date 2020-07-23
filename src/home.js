import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {
    render (){
        return (
            <div className="form">
                <h4 className="hello-world"><span className="hello"><span className="header">&lt;h1&gt;</span>Hello, </span> World.<span className="header">&lt;/h1&gt;</span></h4>
                <div className="gradient">
                <h3 className="name">I'm Dominic Oludare </h3>
                <p className="prof">| Front-end Developer | Digital Marketer |</p>
              </div>
              <div>
              <Link to="/contact">
                <button color="white" className="butt">
                  <span>Hire me</span>
                </button>
              </Link>
           </div>
           <div className="social-container">
             <Link className="icon">
                <FontAwesomeIcon className="facebook" icon={ faFacebook } size="2x"/>
             </Link>
             <Link className="icon">
                <FontAwesomeIcon className="twitter" icon={ faTwitter } size="2x"/>
             </Link>
             <Link className="icon">
                <FontAwesomeIcon className="github" icon={ faGithub } size="2x"/>
             </Link>
             <Link className="icon">
                <FontAwesomeIcon className="link" icon={ faLinkedin } size="2x"/>
             </Link>
             <Link className="icon">
                <FontAwesomeIcon className="dev" icon={ faDev } size="2x"/>
             </Link>
           </div>
            </div>
        );
    }
}

export default Home;