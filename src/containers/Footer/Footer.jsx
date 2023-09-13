import React from 'react';
// import SocialFollow from "./SocialFollow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faTelegram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';
import logo from'../../assets/logo.svg';
 const Footer = () => {
  return (
    <div className="Horizon__footer section__padding">
    <div className="Horizon__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future of Gaming</h1>
    </div>
<br/>
    <div className="Horizon__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="Horizon__footer-links">
      <div className="Horizon__footer-links_logo">
        <img src={logo} alt="Horizon_logo" />
        <p>Horizon Iceberg <br /> All Rights Reserved</p>
      </div>
      <div className="Horizon__footer-links_div">
        <h4>Links</h4>
        {/* <p>Overons</p> */}
        {/* <p>Social Media</p> */}
        {/* <p>Counters</p> */}
        <p>Contact</p>
      </div>
      {/* <div className="Horizon__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="Horizon__footer-links_div">
        <h4>Get in touch</h4>
        <a href="https://www.linkedin.com/in/sawapandeep-singh-6984aa243" target="_blank"
        className="social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://t.me/Horizon_Iceberg" target="_blank"
        className="social">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="Horizon__footer-copyright">
      <p>@2023 Horizon Iceberg. All rights reserved.</p>
    </div>
  </div>
  )
}
export default Footer