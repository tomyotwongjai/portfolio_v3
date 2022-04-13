import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <main className='hero'>
      <span>Aloha! I am Tom</span>
      <h1 className='hero__subtitle'>
        I am a life long learner that like to build things on the web and try
        different technologies.
      </h1>
      <p>
        I am React lover that like to try implement new things on the web.
        Sometime I fail sometime I succeeded, but at the end of the day I'm
        always learning. I like to design website with minimalistic feel, yet
        engage in user experience.
      </p>
      <a href='/assets/Tom-Resume.pdf' download='Tom-Resume'>
        <button className='button'>Resume</button>
      </a>
    </main>
  );
};

export default Hero;
