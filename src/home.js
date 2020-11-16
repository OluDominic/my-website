import React from 'react'
import './home.css'
import Footer from './footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {
    render (){
        return (
            <div className="form">
                <h4 className="hello-world"><span className="hello"><span className="headers">&lt;h1&gt;</span>Hello, </span> World.<span className="headers">&lt;/h1&gt;</span></h4>
                <div className="gradient">
                <h3 className="name">I'm Dominic Oludare </h3>
                <p className="prof">| Front-end Developer | Digital Marketer |</p>
              </div>
              <div>
              <Link to="/contact" className="buttons">
                <button color="white" className="butt">
                  Hire me
                </button>
              </Link>
           </div>
           <div className="social-container">
             <a href="https://www.facebook.com/dominicoludare" className="icon">
                <FontAwesomeIcon className="facebook" icon={ faFacebook } size="3x"/>
             </a>
             <a href="https://twitter.com/pato7dominic" className="icon">
                <FontAwesomeIcon className="twitter" icon={ faTwitter } size="3x"/>
             </a>
             <a href="https://github.com/OluDominic" className="icon">
                <FontAwesomeIcon className="github" icon={ faGithub } size="3x"/>
             </a>
             <a href="https://www.linkedin.com/in/oludare-dominic-38708a97/" className="icon">
                <FontAwesomeIcon className="link" icon={ faLinkedin } size="3x"/>
             </a>
             <a href="https://dev.to/oludominic" className="icon">
                <FontAwesomeIcon className="dev" icon={ faDev } size="3x"/>
             </a>
           </div>
           
          <Footer/>
            </div>
        );
    }
}

export default Home;