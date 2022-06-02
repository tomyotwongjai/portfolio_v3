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

      <h1 className='hero__subtitle' id="hero">
      <span>I'm a passionate</span> Frontend Developer
      </h1>
       <span>📘 I am currently teaching myself everything about front end design.</span> 
        <span>✨ I have continuous stream of motivation to advance my skills. I love what I do.  </span>
      <span>🌴 I am a self-motivated person who is always willing to learn new things. </span>
      <a href='/assets/Tom-Resume.pdf' download='Tom-Resume'>
        <button className='button'>Resume</button>
      </a>
    </motion.main>
  );
};

export default Hero;
