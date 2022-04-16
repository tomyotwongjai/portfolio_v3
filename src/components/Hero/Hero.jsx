import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.main
      className='hero'
      initial={{ y: 'down' ? -100 : 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 2,
          duration: 1,
          ease: 'easeInOut',
        },
      }}
    >
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
    </motion.main>
  );
};

export default Hero;
