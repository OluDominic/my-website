import React, { Component } from 'react';
import { BrowserRouter, Routes, NavLink, Route, Link } from "react-router-dom";
import Notfound from './notfound'
import Home from './home';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import './website.css';
import Logo from './cover.png';
import Slider from './slider'
import Slidertwo from './sliderTwo'
import Sliderthree from './sliderThree';
import SliderFour from './sliderFour';
import SliderFive from './sliderFive';
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
        <BrowserRouter>
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
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Home </NavLink>
            </li>
            <li className="link">
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
            </li>
            <li className="link">
                <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
            </li>
          </ul>
          <i onClick={this.onBar} className={this.state.open ? 'fas fa-times' : 'fas fa-bars bars'}></i>
          </nav>
          </div>
          <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/slider' element={<Slider />} />
                <Route path='/slidertwo' element={<Slidertwo />} />
                <Route path='/salary' element={<SliderFour />} />
                <Route path='/buttery' element={<SliderFive />} />
                <Route path='/weather' element={<Sliderthree />} />
                <Route path='*' element={<Notfound />} />
          </Routes>
        
        </div>
        </BrowserRouter>
    );
  }
}

export default App;