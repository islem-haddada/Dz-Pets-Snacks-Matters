import React, { useRef } from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  const scrollRef = useRef(null);

  const handleKeyDown = (e) => {
    if (scrollRef.current) {
      if (e.key === 'ArrowLeft') {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="about-us" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="about-us-header">
        <h1>About Dz Pets Snacks Matters</h1>
      </div>

      <div className="about-us-content">
        <div className="about-us-left">
          <h2>Our Story</h2>
          <p>
            Dz Pets Snacks Matters is dedicated to providing the best quality pet snacks made from natural ingredients. Our mission is to ensure your pets enjoy delicious and nutritious treats.
          </p>
          <p>
            Founded in 2020, Dz Pets Snacks Matters has grown from a small startup to a leading provider of pet snacks in the industry. We pride ourselves on our commitment to quality and customer satisfaction.
          </p>
          <div className="about-us-video">
            <video src={assets.video_1} autoPlay loop muted></video>
          </div>
        </div>

        <div className="about-us-right about-us-scroll" ref={scrollRef}>
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
          We have a dedicated team of professionals who are passionate about pets and their well-being. Our team works tirelessly to innovate and improve our product offerings.
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
