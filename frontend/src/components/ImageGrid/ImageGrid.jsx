import React, { useState, useEffect } from 'react';
import './ImageGrid.css';
import { assets } from '../../assets/assets';

// Définir les images utilisées
const images = [
  assets.header_img,
  assets.logo,
  assets.dog1,
  assets.food_4,
  assets.chien_1,
];

const ImageGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveIndex(null);
    };

    if (activeIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeIndex]);

  const handleItemClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <div className="wrapper">
      <div className="items">
        {images.map((image, index) => (
          <div
            className={`item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            onClick={(event) => handleItemClick(index, event)}
          >
            {/* Optionnel: Contenu additionnel */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
