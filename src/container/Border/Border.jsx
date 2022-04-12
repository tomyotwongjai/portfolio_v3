import React from 'react';
import './Border.scss';

function Heading({ title, section }) {
  return (
    <div className='border'>
      <div className='border__title'>
        <span>{section}</span>
        {title}
        <div className='border__line--hr'></div>
      </div>
    </div>
  );
}

export default Heading;
