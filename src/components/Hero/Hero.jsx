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
      I am a Front-End Developer
      </h1>
       <span>📘 Every failure is a learning opportunity</span> 
        <span>✨ Kaizen (改善, かいぜん): Continuous improvment</span>
      <span>🌴 Be 1% better than yesterday</span>
      <a href='/assets/Tom-Resume.pdf' download='Tom-Resume'>
        <button className='button'>Resume</button>
      </a>
    </motion.main>
  );
};

export default Hero;
