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
      <main className='project__container' id='projects'>
        <Border title='All Projects' />
        <section className='project__section'>
          <div className='project__grid'>
            {projects.map(
              (project, index) =>
                index < value && <Card {...project} key={index} />
            )}
          </div>

          <button className='show__button' onClick={handleShowProjects}>
            {showProject ? 'Show less' : 'Show More'}
          </button>
        </section>
      </main>
    </>

    // </SectionContainer>
  );
};

export default Projects;
