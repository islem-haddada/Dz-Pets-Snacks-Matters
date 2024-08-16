import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className='welcome-message'>
        <h1>Hello, sir</h1>
      </div>
      <img className='profile' src={assets.logo} alt="Profile" />
    </div>
  );
};

export default Navbar;
