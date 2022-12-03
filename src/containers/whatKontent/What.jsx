import React from 'react';
import { Feature } from '../../components';
import './what.css';
 const What = () => {
  return (
    <dic className="Horizon__what section_" id="What-Is-Horizon">
      <div className="Horizon__what-feature">
        <Feature title="What is Horizon" text="explanation "/>
      </div>
      <div className="Horizon__what-heading">
        <h1 className='gradient__text'>Game beyond the limits</h1>
        <p>Explore the library</p>
      </div>
      <div className='Horizon__what-container'>
      <Feature title="feature-1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      <Feature title="featute-2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      <Feature title="feature-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </div>
    </dic>
  )
}
export default What