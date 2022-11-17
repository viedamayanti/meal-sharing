import React from 'react';
import image2 from '../images/background-4.png';

function ContentTop() {
  return (
    <div className='content-top'>
      <div className='greeting-text'>
        <span>Share your food, don't waste it!!</span>
      </div>
      <div className='picture'>
        <img src={image2} alt='content' width='500px' />
      </div>
    </div>
  );
}

export default ContentTop;
