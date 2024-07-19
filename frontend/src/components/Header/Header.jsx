import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your pets favorite food here</h2>
        <p>Discover a wide variety of high-quality pet foods and accessories. Treat your furry friends to the best care they deserve, ensuring their health, happiness, and well-being with our trusted products and exceptional service.</p>
        <a href='#explore-menu'>
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
