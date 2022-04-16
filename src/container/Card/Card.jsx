import React from 'react';
import './Card.scss';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../libs/variants';

const Card = ({
  name,
  descriptions,
  image,
  deployed_url,
  github_url,
  key_techs,
}) => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <motion.div variants={fadeIn('up')} className='project__inner'>
      {/* <img
        alt={name}
        src={image}
        quality={100}
        className='project__image'
        objectfit='contain'
        placeholder='blur'
      /> */}
      <div className='project__icon'>
        <span>
          <FiGithub onClick={() => openLink(github_url)} />
        </span>
        <span>
          <FiExternalLink onClick={() => openLink(deployed_url)} />
        </span>
      </div>

      <h3 className='title'>{name}</h3>

      <div className='project__detail'>
        {descriptions && descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
      </div>

      {key_techs?.map((tech) => (
        <span className='tech' key={tech}>
          <small>{tech}</small>
        </span>
      ))}
    </motion.div>

    // <div className='p'>
    //   <div className='project__icons'>
    //     <span>
    //       <FiGithub onClick={() => openLink(github_url)} />
    //     </span>

    //     <span>
    //       <FiExternalLink onClick={() => openLink(deployed_url)} />
    //     </span>
    //   </div>
    //   <h3 className='project__title'>{name}</h3>
    //   <p className='project__detail'>
    //     {descriptions && descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
    //   </p>
    //   {key_techs?.map((tech) => (
    //     <span className='tech' key={tech}>
    //       <small>{tech}</small>
    //     </span>
    //   ))}
    // </div>
  );
};

export default Card;
