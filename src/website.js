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
  render() {
    return (
        <BrowserRouter history={history}>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <ul className="navbar-nav mr-auto">
          <Link to={'/'}>
          <img className="my-logo" src={Logo} alt={Logo}/>
          </Link>
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
          </nav>
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