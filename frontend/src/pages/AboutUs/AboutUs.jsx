import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            non mattis risus. Integer pretium fermentum justo, vel feugiat
            dolor mattis ac.
          </p>
          <p>
            Nulla facilisi. Nulla in mi nec libero maximus euismod. Nam
            consequat dui eget ligula aliquam interdum.
          </p>
          <p>
            Fusce vitae velit sed ante ultrices efficitur. Quisque eu ligula
            nec orci vestibulum semper ac ac odio.
          </p>
        </div>
        <div className="about-us-right">
          <img src={assets.header_img} alt="About Us Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
