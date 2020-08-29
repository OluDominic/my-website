import React from 'react';
import './portfolio.css'
import Pic1 from './abstract-art-black-background-blur-1040499 (1) (1).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';



class Portfolio extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="flex-body">
            <h1 className="header">My Projects</h1>
            <div className="portfolio">
                <div className="project">
                    <span className="icons">
                    <Link to="https://github.com/OluDominic/siwes/tree/master/src">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="white"/>
                        </Link>
                    </span>
                    <p className="siwes">E-Siwes <br/> Portfolio.</p>
                    <p className="languages">HTML/CSS REACT</p>
                </div>
                <div className="project2">
                    <span className="icons">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </span>
                    <p className="siwes">My Music <br/> App.</p>
                    <p className="languages">API HTML/CSS REACT</p>
                </div>
                <div className="project3">
                    <span className="icons">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </span>
                    <p className="siwes">My Weather <br/> API.</p>
                    <p className="languages">API HTML/CSS REACT</p>
            </div>
            </div>
            </div>
        );
    }
}

export default Portfolio;