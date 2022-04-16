import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { AnimateWhenVisible } from '../../container';
import { textContainer } from '../../libs/variants';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const transition = {
    duration: 1,
    type: 'spring',
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_qfv2h3h',
        'template_5hohr8k',
        form.current,
        'Fx9ffsop8kM-ogtTs'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setDone(false);
    }, 3000);
    e.target.reset();
  };
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
                I am currently looking for a where I can learn, grow, and be
                part of creative team and build something awesome!
              </p>
            </div>

            <button
              className='button'
              onClick={() => window.open('mailto:travel3.biz@gmail.com')}
            >
              Reach Me Here
            </button>

            <h2>Or Leave Comment Below 🙏</h2>
          </section>
        </AnimateWhenVisible>
        <AnimateWhenVisible variants={textContainer}>
          <section className='contact__form'>
            <form
              initial={{ left: '25rem' }}
              whileInView={{ left: '14rem' }}
              transition={transition}
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type='text'
                name='user_name'
                className='user'
                placeholder='Name'
                required
              />

              <input
                type='email'
                name='user_email'
                className='user'
                placeholder='Email'
                required
              />

              <textarea
                type='text'
                name='message'
                className='user'
                placeholder='Comment...'
                required
              />
              <input type='submit' value='Send' className='button' required />
              <span>{done && 'Thanks for Contacting me'}</span>
              <div
                className='blur c-blur1'
                style={{ background: 'var(--lightest-grey)' }}
              ></div>
            </form>
          </section>
        </AnimateWhenVisible>
      </main>
    </>
  );
};

export default Contact;
