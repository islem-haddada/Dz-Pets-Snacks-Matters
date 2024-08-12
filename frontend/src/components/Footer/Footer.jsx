import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { assets } from '../../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            Welcome to Dz Pets Snacks Matters, where your pets' health and happiness are our top priority.
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
          <h2>Company</h2>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/myorders" onClick={scrollToTop}>My Orders</Link></li>
            <li><Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
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
