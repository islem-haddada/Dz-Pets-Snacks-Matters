import React, { useContext, useRef } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        imageRef.current.style.transform = 'scale(2.3)'; // Augmentez la valeur du scale
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transformOrigin = 'center center';
        imageRef.current.style.transform = 'scale(1)';
    };

    return (
        <div className='food-item'>
            <div
                className='food-item-img-container'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    ref={imageRef}
                    className='food-item-image'
                    src={`${url}/images/${image}`}
                    alt=""
                />
                {!cartItems[id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => removeFromCart(id)}
                            alt=""
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => addToCart(id)}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
