import React from 'react';
import { Border } from '../../container';
import { motion } from 'framer-motion';
import { AnimateWhenVisible } from '../../container';
import { fadeIn } from '../../libs/variants';
import { textContainer } from '../../libs/variants';

import { skills } from '../../libs/data';
import './About.scss';

const About = () => {
  return (
    <main className='about__container ' id='about'>
      <AnimateWhenVisible variants={textContainer}>
        <Border title='About Me' />
        <motion.div variants={fadeIn('up')} className='inner'>
          <motion.div className='text__container'>
            <p>
              Life is a journey, not a race. I believe it also go well with Web development.
              I started my journey in 2017. But along the way new path is shown, new hurdles to climb,
              deep holes that arise without warning. I was lost for a moment.
            </p>
            <p>
              Now I have just one path, I climb the hurdles and filled the holes. I am on the right track and I enjoy
              learning and sharpen my skills, and continue my goal to be a better developer.
            </p>
          </motion.div>
          <motion.div variants={fadeIn('up')} className='skill__list'>
            <h2 className='skill__title'>
              Technologies I'm currently using
            </h2>
            <ul>
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </motion.div>
        </motion.div>
      </AnimateWhenVisible>
    </main>
  );
};

export default About;
