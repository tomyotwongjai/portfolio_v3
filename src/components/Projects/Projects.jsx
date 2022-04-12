import React, { useState } from 'react';
import './Projects.scss';
import { Card } from '../../container';
import { projects } from '../../libs/data';
import { Border } from '../../container';

const Projects = () => {
  const [value, setValue] = useState(3);
  const [showProject, setShowProject] = useState(false);

  const handleShowProjects = () => {
    setShowProject(!showProject);
    showProject ? setValue(3) : setValue(projects.length);
  };

  return (
    <>
      <div className='project__container' id='projects'>
        <Border title='All Projects' />
        <div className='project__section'>
          <ul className='project__grid'>
            {projects.map(
              (project, index) =>
                index < value && <Card {...project} key={index} />
            )}
          </ul>

          <button className='show__button' onClick={handleShowProjects}>
            {showProject ? 'Show less' : 'Show More'}
          </button>
        </div>
      </div>
    </>

    // </SectionContainer>
  );
};

export default Projects;
