import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="Logo" /></Link>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/" 
            onClick={() => {
              setMenu("home");
              if (isMenuOpen) toggleMenu(); // Close menu if open
            }} 
            className={`${menu === "home" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/menu" 
            onClick={() => {
              setMenu("menu");
              if (isMenuOpen) toggleMenu(); // Close menu if open
            }} 
            className={`${menu === "menu" ? "active" : ""}`}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link 
            to="/mobile-app" 
            onClick={() => {
              setMenu("mob-app");
               
            }} 
            className={`${menu === "mob-app" ? "active" : ""}`}
          >
            Mobile App
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            onClick={() => {
              setMenu("contact");
              if (isMenuOpen) toggleMenu(); 
            }} 
            className={`${menu === "contact" ? "active" : ""}`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Basket" />
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
