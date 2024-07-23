import React from 'react';
import './ImageGrid.css';
import { assets } from '../../assets/assets';

// Définir les images utilisées
const images = [
  assets.header_img,
  assets.logo,
  assets.dog1,
  assets.food_4,
  assets.food_5,
];

const ImageGrid = () => {
  return (
    <div className="wrapper">
      <div className="items">
        {images.map((image, index) => (
          <div className="item" key={index} style={{ backgroundImage: `url(${image})` }}>
            {/* Optionnel: Contenu additionnel */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
