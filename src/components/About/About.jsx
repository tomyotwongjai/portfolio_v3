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
              I started my web development journey back in 2017 when I took a
              chance and went on 24 weeks coding bootcamp. I appreciate the
              experience but mentally, I was not in the right mindset. So I did
              what I had done, put my goal on the shelf and went back to do what
              I know best, manual Labor.
            </p>
            <p>
              Not until 2021 when I had tremendous urge to get back and fufill
              what I'd left back in 2017. I am now immerse myself learning and
              making it my goal to be 1% better every day not only as a
              developer but in life as well.
            </p>
          </motion.div>
          <motion.div variants={fadeIn('up')} className='skill__list'>
            <h2 className='skill__title'>
              Some of the technologies I have used recently:
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
