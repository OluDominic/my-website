import React from 'react';
import './portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClone, faLink } from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';




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

    handleClickFour=()=> {
        this.props.history.push('/salary')
    }

    handleClickFive=()=> {
        this.props.history.push('/buttery')
    }

    render() {
        return (
            <div className="flex-body">
                
               <Helmet>
                  <title>Dominic Oludare | Works</title>
               </Helmet>

            <h1 className="header">My Projects</h1>
            <div className="portfolio">

                <div className="project2">
                <span className="icons">
                    <Link to={{pathname: "https://github.com/OluDominic/tac-pay"}} target="_blank" className="icons">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" className="ecommerce"/>
                    </Link>
                </span>
                <span>
                    <Link to={{pathname: "https://poketmoni.herokuapp.com/"}} target="_blank">
                        <FontAwesomeIcon icon={faLink} size="2x" color="gray" />
                    </Link>
                </span>
                    <p className="siwes">Poketmoni <br/> App.</p>
                    <p className="languages">REACT/SCSS?REDUX/Node JS/</p>
                </div>

                <div className="project3">
                    <span className="icons">
                    <Link to={{pathname: "https://github.com/OluDominic/tas-salary-system"}} target="_blank">
                        <span>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
                        </span>
                        </Link>
                    </span>
                    
                    <span className="icons">
                        <Link to={{pathname: "https://hr-management-app1.herokuapp.com/"}} target="_blank">
                        <FontAwesomeIcon icon={faLink} size="2x" color="gray" />
                        </Link>
                        </span>
                    <p className="siwes">HR Management <br/> App.</p>
                    <p className="languages">REACT/SASS/NODEJS/MYSql</p>
                </div>

                <div className="projectFive">
                    <span className="icons">
                    <Link to={{pathname: "https://github.com/OluDominic/frontend-onboarding"}} target="_blank">
                        <span>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
                        </span>
                        </Link>
                    </span>
                    
                    <span className="icons">
                        <Link to={{pathname: "https://shielded-citadel-81661.herokuapp.com/"}} target="_blank">
                        <FontAwesomeIcon icon={faLink} size="2x" color="gray" />
                        </Link>
                        </span>
                    <p className="siwes">Food Order <br/> App.</p>
                    <p className="languages">REACT/SASS</p>
                </div>

                <div className="project">
                    <span className="icons">
                    <Link to={{pathname: "https://github.com/OluDominic/siwes/tree/master/src"}} target="_blank">
                        <span>
                        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
                        </span>
                        </Link>
                    </span>
                    
                    <span className="icons">
                        <Link to={{pathname: "https://siwes-tech.herokuapp.com/"}} target="_blank">
                        <FontAwesomeIcon icon={faLink} size="2x" color="gray" />
                        </Link>
                        </span>
                    <p className="siwes">E-Siwes <br/> App.</p>
                    <p className="languages">HTML/CSS/REACT</p>
                </div>

                {/* <div className="project3">
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
            </div> */}
            
            </div>
            </div>
        );
    }
}

export default Portfolio;