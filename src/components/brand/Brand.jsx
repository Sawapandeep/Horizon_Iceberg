import React from 'react';
import './brand.css';

import { epic, pubg ,steam, rocketleague} from './imports';

 const Brand = () => {
  return (
    <div className="Horizon__brand section__padding" id='brand'>
      <div>
        <a href='https://store.steampowered.com/'>       <img src={steam} alt="google" style={{width:'252px',height:'80px'}} /></a> 
<a href='https://store.epicgames.com/'>       <img src={epic} alt="google" style={{width:'260px',height:'110px'}} /></a> 
        {/* <video muted class="vid" loop src={rocketleague} onMouseOver={"play()"} onMouseOut={"pause()"}/>  */}
       </div> 
      <div>
        <video muted class="vid" loop src={pubg}/><img src={steam} alt="onedrive" style={{ width: '82px',height: '20px' }}/> 
        </div> 
         have to do something here nad here too XD
    </div>
   
  )
}
export default Brand;

