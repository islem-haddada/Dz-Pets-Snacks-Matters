import React, { useContext, useRef, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
    const imageRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseMove = (e) => {
        if (!isModalOpen) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`;
            imageRef.current.style.transform = 'scale(4.8)';
        }
    };

    const handleMouseLeave = () => {
        if (!isModalOpen) {
            imageRef.current.style.transformOrigin = 'center center';
            imageRef.current.style.transform = 'scale(1)';
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Fallback if cartItems is undefined or item not found
    const itemCount = cartItems?.[id] || 0;

    return (
        <div className={`food-item ${isModalOpen ? 'no-hover' : ''}`}>
            <div
                className='food-item-img-container'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={openModal}
            >
                <img
                    ref={imageRef}
                    className={`food-item-image ${isModalOpen ? 'no-transform' : ''}`}
                    src={`${url}/images/${image}`}
                    alt=""
                />
                {itemCount === 0 ? (
                    <img
                        className='add'
                        onClick={(e) => {
                            e.stopPropagation(); // Prevents modal from opening
                            addToCart(id);
                        }}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevents modal from opening
                                removeFromCart(id);
                            }}
                            alt=""
                        />
                        <p>{itemCount}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevents modal from opening
                                addToCart(id);
                            }}
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
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="modal-close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={`${url}/images/${image}`} alt="" />
                </div>
            )}
        </div>
    );
};

export default FoodItem;
