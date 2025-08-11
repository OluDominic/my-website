import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favicon from './LogoMakr_1EFpPx.png';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Dominic Oludare - Front-end Developer</title>
        <meta name="description" content="Front-end Developer specializing in React, JavaScript, and modern web technologies. View my portfolio and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={Favicon} />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
