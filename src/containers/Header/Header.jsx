import React from 'react';
import {useRef} from 'react';
import people from './../../assets/people.png';
import controller from './../../assets/controller.png';
import './header.css';
import emailjs from '@emailjs/browser';


 const Header = () => {
  const form =useRef()
  
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_p6hjafb', 'template_kb1di69', form.current, '7k_s6BcQDssC3JMDF')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

  return (
    <div className='Horizon__header ' id='home'>
      <div className='Horizon__header-content'>
        <h1 className='gradient__text'>Game ONN</h1>
          <p>Lets make finding games EASY!!</p>
        
        <form
        ref={form} onSubmit={sendEmail}
         className='Horizon__header-content_input --form-control--card'>
          <input name='user_email' type="email" placeholder="Your Email Address" required/>
          <button type="submit">Dive In</button>
        </form>

        <div className='Horizon__header-content_people'>
          <img src={people} alt="ppl"/>
          <p>1,600 people requested aaccess a visit in last 24 hours</p>
          </div>
         </div>  
         
          <div className='Horizon__header-image'>
            <img src={controller} alt='controller'/>
          </div>
        </div>
  )
};
export default Header;