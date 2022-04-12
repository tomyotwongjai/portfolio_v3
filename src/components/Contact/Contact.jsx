import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

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
      <div className='contact' id='contact'>
        <div className='contact__left'>
          <div className='contact__title'>
            <h1>Get In Touch</h1>
          </div>
          <div className='contact__info'>
            <p>
              I am currently looking for a where I can learn, grow, and be part
              of creative team and build something awesome!
            </p>
          </div>

          <button
            className='button'
            onClick={() => window.open('mailto:travel3.biz@gmail.com')}
          >
            Reach Me Here
          </button>

          <h3>Or Leave Comment Below!</h3>
        </div>

        <div className='contact__form'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='user_name'
              className='user'
              placeholder='Name'
            />

            <input
              type='email'
              name='user_email'
              className='user'
              placeholder='Email'
            />

            <textarea
              type='text'
              name='message'
              className='user'
              placeholder='Comments...'
            />
            <input type='submit' value='Send' className='button' />
            <span>{done && 'Thanks for Contacting me'}</span>
            <div
              className='blur c-blur1'
              style={{ background: 'var(--lightest-grey)' }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
