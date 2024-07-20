import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <img src={assets.header_img} alt="Header Image" className='header-img' />
        <h2>Order your pet's favorite food here</h2>
        <p>
          Discover a wide variety of high-quality pet foods and accessories. Treat your furry friends to the best care they deserve, ensuring their health, happiness, and well-being with our trusted products and exceptional service.
        </p>
        <a href='#explore-menu'>
          <button className='view-menu-btn'>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
