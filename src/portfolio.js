import React from 'react';
import './portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom';




class Portfolio extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    handleClick=()=> {
        this.props.history.push('/slider')
    }

    handleClickTwo=()=> {
        this.props.history.push('/slidertwo')
    }

    handleClickThree=()=> {
        this.props.history.push('/weather')
    }

    render() {
        return (
            <div className="flex-body">
            <h1 className="header">My Projects</h1>
            <div className="portfolio">

                <div className="project">
                    <span className="icons">
                    <a href="https://github.com/OluDominic/siwes/tree/master/src">
                        <span>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
                        </span>
                        </a>
                    </span>
                    
                    <span className="icons">
                        <Link onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faClone} size="2x" color="gray" />
                        </Link>
                        </span>
                    <p className="siwes">E-Siwes <br/> App.</p>
                    <p className="languages">HTML/CSS REACT</p>
                </div>

                <div className="project2">
                <span className="icons">
                    <a href="https://github.com/OluDominic/my-music-app" className="icons">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" className="fagit"/>
                    </a>
                </span>
                <span>
                    <Link onClick={this.handleClickTwo}>
                        <FontAwesomeIcon icon={faClone} size="2x" color="gray" />
                    </Link>
                </span>
                    <p className="siwes">Doggypup <br/> E-commerce App.</p>
                    <p className="languages">API HTML/CSS REACT REDUX</p>
                </div>

                <div className="project3">
                <span className="icons">
                    <a href="https://github.com/OluDominic/weather-app" className="icons">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray"/>
                    </a>
                </span>
                <span>
                    <Link onClick={this.handleClickThree}>
                        <FontAwesomeIcon icon={faClone} size="2x" color="gray" />
                    </Link>
                </span>
                    <p className="siwes">My Weather App <br/> API.</p>
                    <p className="languages">API HTML CSS REACT</p>
            </div>
            
            </div>
            </div>
        );
    }
}

export default Portfolio;