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

    const handleAddToCart = (e) => {
        e.stopPropagation();  // Prevent modal from opening
        e.preventDefault();   // Prevent any default touch/click behavior
        addToCart(id);
    };

    const handleRemoveFromCart = (e) => {
        e.stopPropagation();  // Prevent modal from opening
        e.preventDefault();   // Prevent any default touch/click behavior
        removeFromCart(id);
    };

    // Fallback if cartItems is undefined or item not found
    const itemCount = cartItems?.[id] || 0;

    return (
        <div className={`food-item ${isModalOpen ? 'no-hover' : ''}`}>
            <div
                className='food-item-img-container'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={openModal}  // This will only trigger if the add/remove buttons are not clicked
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
                        onClick={handleAddToCart}  // Properly handle the add-to-cart action
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={handleRemoveFromCart}  // Properly handle the remove-from-cart action
                            alt=""
                        />
                        <p>{itemCount}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={handleAddToCart}  // Properly handle the add-to-cart action
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
