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
          <button className='menu'>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;


/*.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    height: 80px;
  }
  
  .navbar-toggle {
    display: none;
    cursor: pointer;
    font-size: 1.5em;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .navbar-menu li {
    display: flex;
  }
  
  .navbar-menu a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .navbar-menu a:hover,
  .navbar-menu a.active {
    background-color: #f0f0f0;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .navbar-search-icon {
    position: relative;
  }
  
  .navbar-search-icon img {
    height: 24px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    right: -4px;
  }
  
  .navbar-profile {
    position: relative;
    cursor: pointer;
  }
  
  .navbar-profile-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
  }
  
  .navbar-profile:hover .navbar-profile-dropdown {
    display: block;
  }
  
  .navbar-profile-dropdown li {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  .navbar-profile-dropdown img {
    height: 20px;
    margin-right: 10px;
  }
  
  button {
    background-color: #FF4C24;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #e04321;
  }
  
  @media (max-width: 768px) {
    .navbar-toggle {
      display: block;
    }
    
    .navbar-menu {
      display: none;
      flex-direction: column;
      gap: 0;
    }
    
    .navbar-menu.active {
      display: flex;
    }
  }
  */