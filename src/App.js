import { useState, useEffect } from 'react';
import './App.scss';

import { Navbar, Hero, About, Projects, Contact, Footer } from './components';
import { Sidebar, Loading } from './container';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Sidebar />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
  
        </>
      )}
    </div>
  );
};

export default App;
