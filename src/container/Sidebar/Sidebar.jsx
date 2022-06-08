import React from 'react';
import './Sidebar.scss';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { GoPrimitiveDot } from 'react-icons/go';
import ScrollUp from '../../components/ScrollUp/ScrollUp';

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
          <a
            href='https://github.com/tomyotwongjai'
            aria-label='Github'
            taget='_blank'
          >
            <AiOutlineGithub name='Github'  />
          </a>
          <a
            href='https://twitter.com/tom_yotwongjai'
            aria-label='Twitter'
            taget='_blank'
          >
            <AiOutlineTwitter name='Twitter' />
          </a>
          <a
            href='https://www.linkedin.com/in/tomyotwongjai/'
            aria-label='Linkedin'
            taget='_blank'
          >
            <AiOutlineLinkedin name='Linkedin' />
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
          <ScrollUp />              
        </motion.div>
      </section>
    </>
  );
};
export default Sidebar;
