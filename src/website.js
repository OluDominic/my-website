import React, { Component } from 'react';
import { BrowserRouter, Switch, NavLink, Route, Link } from "react-router-dom";
import Notfound from './notfound'
import history from './history';
import Home from './home';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import './website.css';
import Logo from './cover.png';
import Slider from './slider'
import Slidertwo from './sliderTwo'
import Sliderthree from './sliderThree';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {Helmet} from 'react-helmet';
import Icon from './LogoMakr_1EFpPx.png';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  onBar =()=> {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
        <BrowserRouter history={history}>
        <div className="body">
          <Helmet>
            <meta charSet="UTF-8" />
            <title>Dominic Oludare - Front-end Developer | SEO</title>
            <meta name="description" content="This is where you can see my works and about my professional career in this portfolio." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href={Icon} />
          </Helmet>

          <div className="navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
          <Link to={'/'}>
          <img className="my-logo" src={Logo} alt={Logo}/>
          </Link>
          </div>
          <ul className="navbar-nav-mr-auto" 
          style={{ transform: this.state.open ? "translateX(0px)" : 
          "translateX(-300px)"}}>
          
            <li className="link">
                <NavLink to={'/'} exact activeStyle={{color: 'grey'}} className="nav-link"> Home </NavLink>
            </li>
            <li className="link">
                <NavLink to={'/contact'} exact activeStyle={{color: 'grey'}} className="nav-link">Contact</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/about'} exact activeStyle={{color: 'grey'}} className="nav-link">About</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/portfolio'} exact activeStyle={{color: 'grey'}} className="nav-link">Works</NavLink>
            </li>
          </ul>
          <i onClick={this.onBar} className={this.state.open ? 'fas fa-times' : 'fas fa-bars bars'}></i>
          </nav>
          </div>
          <Route render={({location})=> (
            <TransitionGroup>
            <CSSTransition
                timeout={500}
                classNames="fade"
              >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/slider' component={Slider} />
                <Route path='/slidertwo' component={Slidertwo} />
                <Route path='/weather' component={Sliderthree} />
                <Route component = {Notfound} />
            </Switch>
           </CSSTransition>
          </TransitionGroup>
          )} />
        
        </div>
        </BrowserRouter>
    );
  }
}

export default App;