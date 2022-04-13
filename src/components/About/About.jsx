import React from 'react';
import { Border } from '../../container';

import { skills } from '../../libs/data';
import './About.scss';

const About = () => {
  return (
    <main className='about__container ' id='about'>
      <Border title='About Me' />
      <div className='inner'>
        <div className='text__container'>
          <p>
            I started my web development journey back in 2017 when I took a
            chance and went on 24 weeks coding bootcamp. I appreciate the
            experience but mentally, I was not in the right mindset. So I did
            what I had done, put my goal on the shelf and went back to do what I
            know best, manual Labor.
          </p>
          <p>
            Not until 2021 when I had tremendous urge to get back and fufill
            what I'd left back in 2017. I am now immerse myself learning and
            making it my goal to be 1% better every day not only as a developer
            but in life as well.
          </p>
        </div>
        <div className='skill__list'>
          <h2 className='skill__title'>
            Some of the technologies I have used recently:
          </h2>
          <ul>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
