import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            Welcome to DzPetsSnacksMatters, where your pets' health and happiness are our top priority.
            We offer a variety of healthy snacks tailored for your pets' needs. Join us on our mission to 
            bring joy to your pets' lives, one snack at a time.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61563412271128" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/yourlinkedinpage" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a to="/">Home</a></li>
            <li><a to="/about">About Us</a></li>
            <li><a to="/myorders">My Orders</a></li>
            <li><a to="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+213-697-729-408</li>
            <li><a href="mailto:dz.pets.snacks.matters@gmail.com">dz.pets.snacks.matters@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © DzPetsSnacksMatters.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
