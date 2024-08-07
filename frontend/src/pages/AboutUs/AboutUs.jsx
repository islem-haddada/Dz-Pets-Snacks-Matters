import React, { useRef } from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  const scrollRef = useRef(null);

  const handleKeyDown = (e) => {
    if (scrollRef.current) {
      if (e.key === 'ArrowLeft') {
        scrollRef.current.scrollBy({ left: -725, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        scrollRef.current.scrollBy({ left: 725, behavior: 'smooth' });
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
          Dz Pets Snacks Matters is dedicated to providing the best quality pet snacks made from natural ingredients. Our mission is to offer high-quality, nutritious snacks that pets love. We believe in using only natural ingredients to create products that are both tasty and healthy for pets.

          Founded in 2024, Dz Pets Snacks Matters has grown from a small startup to a leading provider of pet snacks in the industry. We pride ourselves on our commitment to quality and customer satisfaction. Our company is equipped with multiple high-capacity machines and a large inventory, allowing us to meet the growing demand and maintain our high standards.
          </p>
          

        <div className="about-us-right about-us-scroll" ref={scrollRef}>
          <img src={assets.machine} alt="About Us Image" />
          <img src={assets.machine_1} alt="Additional Image 1" />
          <img src={assets.machine_2} alt="Additional Image 2" />
        </div>
      </div>

      <div className="about-us-video">
            <video src={assets.video_about} autoPlay loop muted></video>
          </div>
        </div>

      <div className="about-us-section">
        <h2>Our Team</h2>
        <p>
        At Dz Pets Snacks Matters, we are proud to have a team of dedicated professionals who are deeply passionate about pet well-being. Our diverse team includes veterinarians, nutritionists, and industry experts, all working collaboratively to ensure the highest standards in pet nutrition and care. Each member brings a wealth of expertise and a shared commitment to innovation, continuously striving to enhance and refine our product offerings. Our goal is to provide pets with the best quality snacks while supporting their overall health and happiness.
        </p>
        <div className="about-us-image">
          <img src={assets.team_1} alt="Our Team Image" />
          <img src={assets.team_2} alt="Our Team Image" />
          <img src={assets.team_3} alt="Our Team Image" />
          <img src={assets.team_4} alt="Our Team Image" />
        </div>
      </div>

      <div className="about-us-section">
        <h2>Our Products</h2>
        <p>
        At Dz Pets Snacks Matters, we pride ourselves on offering an extensive selection of pet snacks designed to meet diverse dietary needs and preferences. Each of our products is meticulously crafted using high-quality, natural ingredients to ensure optimal nutrition and irresistible taste. Our commitment to excellence means that every snack not only satisfies your pet's cravings but also supports their health and well-being. Explore our range to find the perfect treat that combines both flavor and nutrition for your beloved pet.
        </p>
        <div className="about-us-image">
          <img src={assets.produit_1} alt="Our Products Image" />
          <img src={assets.produit_2} alt="Our Products Image" />
          <img src={assets.produit_3} alt="Our Products Image" />
          <img src={assets.produit_4} alt="Our Products Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
