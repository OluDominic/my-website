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
                <NavLink to={'/'} className="nav-link"> Home </NavLink>
            </li>
            <li className="link">
                <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/about'} className="nav-link">About</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/portfolio'} className="nav-link">Portfolio</NavLink>
            </li>
          </ul>
          <i onClick={this.onBar} className={this.state.open ? 'fas fa-times' : 'fas fa-bars bars'}></i>
          </nav>
          </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route component = {Notfound} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;