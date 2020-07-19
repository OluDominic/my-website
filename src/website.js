import React from 'react';
import {Link,NavLink,withRouter } from 'react-router-dom';



class Website extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return(
        <nav>
            <div>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
              <div>
                <h4><span>Hello, </span> World.</h4>
                <h3>I,m Dominic Oludare </h3>
                <p>| Front-end Developer | Digital Marketer</p>
              </div>
              <div>
                <button>
                  Hire me
                </button>
              </div>
            </div>
        </nav>
    );
  }
}


export default withRouter(Website)