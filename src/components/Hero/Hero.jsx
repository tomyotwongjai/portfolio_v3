import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <main className='hero'>
      <span>Aloha! I am Tom</span>
      <h1 className='hero__subtitle'>
        I like to build website and try different technologies.
      </h1>
      <p>
        I am a software developer, occational traveller that like to try and
        fail in things. I like to design website with minimalistic feel, yet
        engage in user experience.
      </p>
      <a href='/assets/Tom-Resume.pdf' download='Tom-Resume'>
        <button className='button'>Resume</button>
      </a>
    </main>
  );
};

export default Hero;
