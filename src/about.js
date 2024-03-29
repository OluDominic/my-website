import React from 'react'
import { Helmet } from 'react-helmet'
import './about.css'

class About extends React.Component {
    render (){
        return (
            <div className="about">
               <Helmet>
                  <title>Dominic Oludare | About</title>
               </Helmet>
                <div style={{marginLeft: '0px'}}>
                    <p className="render-inline">render()<span>&#123;</span></p>
                    <p className="render-inline">return(</p>
                    <p className="render-inline"><span>&lt;</span>h1<span>&gt;</span></p>
                    <h2 className="about-me-ani">About me</h2>
                    <p className="render-inline"><span>&lt;</span>/h1<span>&gt;</span></p>
                </div>
                
                
                <div className="lang">
                    <div className="react">ReactJS</div>
                    <div className="html">HTML</div>
                    <div className="node">NodeJS</div>
                    <div className="css">CSS</div>
                    <div className="js">JavaScript</div>
                    <div className="mysql">MySql</div>
                    <div className="word">WordPress</div>
                    <div className="git">Git</div>
                    <div className="npm">NPM</div>
                    <div className="sass">SASS</div>
                </div>
                
                <div className="about-me">
                    <p>Web developer professionally connected with the web development industry.</p>
                    <p>Front-End Developer (ReactJS, JavaScript, HTML, CSS) Back-end (Node)</p>
                    <p>Well-organised person, problem solver, independent employee with high attention to detail.
                        Love watching football, playing video games at my leisure time.
                    </p>
                    <p>Interested in the entire frontend spectrum and working on ambitious projects 
                        with positive minded developers.
                    </p>
                </div>


                <div className="skills">
                    <h3 className="title">Skills</h3>
                    <p>My main area of expertise is front end development (client side)</p>
                    <p>HTML, CSS, JavaScript, <span style={{color: 'cyan'}}>ReactJS</span>, building small and media web apps 
                        and coding interactive layouts with React specifically. 
                    </p>
                </div>
                <div>

                </div>
                <div style={{marginLeft: '0px'}}>
                    <p className="render-inline">&#41;;</p>
                    <p className="render-inline">&#125;</p>
                </div>
            </div>
        );
    }
}

export default About;