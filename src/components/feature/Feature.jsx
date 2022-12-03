import React from 'react';
import './feature.css';
export const Feature = ({title, text,video}) => {
  return (
    <div className='Horizon__features-container__feature'>
      <div className='Horizon__features-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='Horizon__features-container__feature-text'>
        <p>{text}</p>
      </div>
      {/* <div className='Horizon__features-container__feature-vids'>
        <video>{video}</video>
      </div> */}
    </div>
  ) 
}
export default Feature