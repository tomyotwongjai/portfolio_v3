import React from 'react';
import './Footer.scss';
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__content'>
        <ul className='footer__icons'>
          <a
            href='https://github.com/tomyotwongjai'
            aria-label='Github'
            target='_blank'
          >
            <AiOutlineGithub />
          </a>
          <a
            href='https://twitter.com/tom_yotwongjai'
            aria-label='Twitter'
            target='_blank'
          >
            <AiOutlineTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/tomyotwongjai/'
            aria-label='Linkedin'
            target='_blank'
          >
            <AiOutlineLinkedin />
          </a>
        </ul>
        <p>🤙| Tom Yotwongjai</p>
        <span style={{ color: '#a7a9be' }}>© 2022</span>
      </div>
    </section>
  );
};

export default Footer;
