import React from 'react';
import './Sidebar.scss';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { GoPrimitiveDot } from 'react-icons/go';

const Sidebar = () => {
  return (
    <>
      <section className='sidebar__left'>
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: -10 }}
          transition={{ delay: 5, type: 'spring', stiffness: 120 }}
          className='sidebar__icons'
        >
          <a href='https://github.com/tomyotwongjai'>
            <AiOutlineGithub />
          </a>
          <a href='https://twitter.com/tom_yotwongjai'>
            <AiOutlineTwitter />
          </a>
          <a href='https://www.linkedin.com/in/tomyotwongjai/'>
            <AiOutlineLinkedin />
          </a>
        </motion.div>
      </section>
      <section className='sidebar__right'>
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ delay: 5, type: 'spring', stiffness: 120 }}
          className='sidebar__links'
        >
          {['home', 'about', 'projects', 'contact'].map((item, index) => (
            <a
              href={`#${item}`}
              key={item + index}
              className='app__navigation_dot'
            >
              <li>
                <GoPrimitiveDot />
              </li>
            </a>
          ))}
        </motion.div>
      </section>
    </>
  );
};
export default Sidebar;
