import React, { useState, useEffect, forwardRef } from 'react';
import './ImageGrid.css';
import { assets } from '../../assets/assets';

// Define the images used
const images = [
  assets.image_1,
  assets.image_2,
  assets.image_3,
  assets.image_4,
  assets.image_5,
  assets.image_6,
  assets.image_7,
  assets.image_8,
];

const ImageGrid = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveIndex(null);
    };

    const handleKeyDown = (event) => {
      if (activeIndex !== null) {
        if (event.key === 'ArrowRight') {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (event.key === 'ArrowLeft') {
          setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
      }
    };

    if (activeIndex !== null) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const handleItemClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
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
