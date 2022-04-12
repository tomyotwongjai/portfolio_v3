import React from 'react';
import { Border } from '../../container';
import { skills } from '../../libs/data';
import './About.scss';

const About = () => {
  return (
    <main className='about__container'>
      <Border title='About Me' />
      <div className='inner'>
        <div className='text__container'>
          <p>
            I started my web development journey back in 2017. But I think the
            timing was not right so I put my dream on the self until 2021 when I
            realy ramp up my Journey.
          </p>
          <p>
            I am now immerse myself everyday learning and make it my goal to
            become a better programmer.
          </p>
          <p> Some of the technologies I have used recently:</p>
        </div>
        <div className='skills__list'>
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </div>
      </div>
    </main>
  );
};

export default About;
