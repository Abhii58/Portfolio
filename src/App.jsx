import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './components/About/About';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Skills from './components/Skills/Skills';

const App = () => {
  const [currentSection, setCurrentSection] = useState('Home');

  return (
    <div className="App">
      
      <main>
        <div id="home"><HomePage /></div>
        <div id="about"><AboutPage /></div>
        <div id="projects"><ProjectsPage /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><ContactPage /></div>
     
      </main>
      <Footer />
    </div>
  );
};

export default App;