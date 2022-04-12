import React from 'react';
import './App.scss';

import { Navbar, Hero, About, Projects, Contact, Footer } from './components';
import { Sidebar } from './container';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
