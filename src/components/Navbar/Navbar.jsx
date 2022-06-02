import {useState} from 'react';
import './Navbar.scss';
import { navLinks } from '../../libs/data';
import menu from 'react-useanimations/lib/menu';
import UseAnimations from 'react-useanimations';
import Scroll from 'react-scroll';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const ScrollLink = Scroll.Link;

const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <main className='header' >
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
          <button className="nav-btn" onClick={handleClick}>
              <UseAnimations speed={1.3} animation={menu} size={38} strokeColor="white" />
          </button>
         {navLinks &&
          navLinks.map(({ name, url }, i) => (
            <ul className={`${show ? "items-show" : "items"}`} key={i}>
              <ScrollLink
                  name={url}
                  to={url}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='nav__link'
                >
                  {name}
                </ScrollLink>
            </ul>
          ))} 
      </motion.nav>
    </main>
  );
};

export default Navbar;
