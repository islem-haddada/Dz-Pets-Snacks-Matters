import React, { useState, useEffect, forwardRef } from 'react';
import './ImageGrid.css';
import { assets } from '../../assets/assets';

// Define the images used
const images = [
  assets.header_img,
  assets.logo,
  assets.dog1,
  assets.food_4,
  assets.chien_1,
];

const ImageGrid = forwardRef((props, ref) => {
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
    <div className="wrapper" ref={ref}>
      <div className="items">
        {images.map((image, index) => (
          <div
            className={`item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            onClick={(event) => handleItemClick(index, event)}
          >
            {/* Optional: Additional content */}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ImageGrid;
