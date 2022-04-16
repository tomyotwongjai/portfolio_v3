import React from 'react';
import './Border.scss';
import { motion } from 'framer-motion';
import { AnimateWhenVisible } from '../../container';
import { fadeIn } from '../../libs/variants';
import { textContainer } from '../../libs/variants';

function Heading({ title, section }) {
  return (
    <AnimateWhenVisible variants={textContainer}>
      <motion.div variants={fadeIn()} className='border'>
        <div className='border__title'>
          {title}
          <div className='border__line--hr'></div>
        </div>
      </motion.div>
    </AnimateWhenVisible>
  );
}

export default Heading;
