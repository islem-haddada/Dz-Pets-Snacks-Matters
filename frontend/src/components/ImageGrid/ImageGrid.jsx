import React from 'react';
import './ImageGrid.css';
import { assets } from '../../assets/assets';

const images = [
  assets.food_1,
  assets.food_2,
  assets.food_3,
  assets.food_4,
  assets.food_5,
];

const ImageGrid = () => {
  return (
    <div className="wrapper">
      <div className="items">
        {images.map((image, index) => (
          <div className="item" key={index} style={{ backgroundImage: `url(${image})` }}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
