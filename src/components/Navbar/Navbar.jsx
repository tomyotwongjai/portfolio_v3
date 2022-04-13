import React from 'react';
import './Navbar.scss';
import { navLinks } from '../../libs/data';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

const navbar = () => {
  return (
    <main className='header' id='home'>
      <header className='header__logo'>
        <h1 className='line_1 anim_type '>
          <span>T</span> Y
        </h1>
      </header>
      <nav className='nav__links'>
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
      </nav>
    </main>
  );
};

export default navbar;
