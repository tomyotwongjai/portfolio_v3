import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { AnimateWhenVisible } from '../../container';
import { textContainer } from '../../libs/variants';

const Contact = () => {
  
  return (
    <>
      <main className='contact' id='contact'>
        <AnimateWhenVisible variants={textContainer}>
          <section className='contact__section'>
            <div className='contact__title'>
              <h1>Get In Touch</h1>
            </div>
            <div className='contact__info'>
              <p>
                I am currently looking for an opportunities to learn, grow and
                part of creative team and build something awesome!
              </p>
            </div>

            <button
              className='button'
              onClick={() => window.open('mailto:tomyotwongjai@gmail.com')}
            >
              Get In Touch
            </button>

          </section>
        </AnimateWhenVisible>
      </main>
    </>
  );
};

export default Contact;
