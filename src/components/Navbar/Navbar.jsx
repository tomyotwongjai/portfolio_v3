import React from 'react';
import './Navbar.scss';
import { navLinks } from '../../libs/data';
import Scroll from 'react-scroll';
import { motion } from 'framer-motion';

const ScrollLink = Scroll.Link;

const navbar = () => {
  return (
    <main className='header' id='home'>
      <header className='header__logo'>
        <h1 className='line_1 anim_type '>
          <span>T</span> Y
        </h1>
      </header>
      <motion.nav
        className='nav__links'
        initial={{ y: -100 }}
        animate={{
          y: 0,
          transition: {
            delay: 1,
            duration: 0.6,
            ease: 'easeInOut',
          },
        }}
      >
        {navLinks &&
          navLinks.map(({ name, url }, i) => (
            <ScrollLink
              key={i}
              to={url}
              spy={true}
              smooth={true}
              duration={500}
              className='nav__link'
            >
              {name}
            </ScrollLink>
          ))}
      </motion.nav>
    </main>
  );
};

export default navbar;
