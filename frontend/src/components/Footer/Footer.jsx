import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
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
            <li>
                <a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/delivery">Delivery</a></li>
                <li><a href="/privacy">Privacy policy</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
