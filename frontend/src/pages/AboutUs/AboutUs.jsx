import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-left">
          <h2>About Dz Pets Snacks Matters</h2>
          <p>
            Dz Pets Snacks is dedicated to providing the best quality pet snacks made from natural ingredients. Our mission is to ensure your pets enjoy delicious and nutritious treats.
          </p>
          <p>
            Founded in 2020, Dz Pets Snacks has grown from a small startup to a leading provider of pet snacks in the industry. We pride ourselves on our commitment to quality and customer satisfaction.
          </p>
          <div className="about-us-video">
            <video width="320" height="240" controls>
              <source src={assets.video_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="about-us-right">
          <img src={assets.header_img} alt="About Us Image" />
          <img src={assets.header_img} alt="Additional Image 1" />
          <img src={assets.header_img} alt="Additional Image 2" />
        </div>
      </div>

      <div className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer high-quality, nutritious snacks that pets love. We believe in using only natural ingredients to create products that are both tasty and healthy for pets.
        </p>
        <div className="about-us-image">
          <img src={assets.food_4} alt="Our Mission Image" />
        </div>
      </div>

      <div className="about-us-section">
        <h2>Our Team</h2>
        <p>
          We have a dedicated team of professionals who are passionate about pets and their wellbeing. Our team works tirelessly to innovate and improve our product offerings.
        </p>
        <div className="about-us-image">
          <img src={assets.chien_1} alt="Our Team Image" />
        </div>
      </div>

      <div className="about-us-section">
        <h2>Our Products</h2>
        <p>
          We offer a wide range of pet snacks that cater to different dietary needs and preferences. Each product is carefully crafted to provide maximum nutrition and taste.
        </p>
        <div className="about-us-image">
          <img src={assets.dog1} alt="Our Products Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
