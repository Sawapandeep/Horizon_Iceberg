import React, { useState } from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='Horizon__navbar'>
      <div className='Horizon__navbar-links'>
        <div className='Horizon__navbar-links_logo'>
          <img src={logo} alt="Horizon__logo"/>
        </div>
        <div className='Horizon__navbar-links_container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#brand'>Library</a></p>
  <p><a href='#What-Is-Horizon'>What is Horizon</a></p>
  
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Sources</a></p>
        </div>
      </div>
      <div className='Horizon__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='Horizon__navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="Horizon__navbar-menu_container scale-up-center">
            <div className='Horizon__navbar-menu_container-links'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#What-Is-Horizon'>What is Horizon</a></p>
            {/* <p><a href='#hpossibility'>Library</a></p> */}
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Sources</a></p>
            </div>
            <div className='Horizon__navbar-menu_container-links-sign'>
              <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) 
};
export default Navbar