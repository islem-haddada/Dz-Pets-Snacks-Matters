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
              if (isMenuOpen) toggleMenu();
            }}
            className={`${menu === "home" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href='#explore-menu'
            onClick={() => {
              setMenu("menu");
              if (isMenuOpen) toggleMenu();
            }}
            className={`${menu === "menu" ? "active" : ""}`}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href='#app-download'
            onClick={() => {
              setMenu("mob-app");
              if (isMenuOpen) toggleMenu();
            }}
            className={`${menu === "mob-app" ? "active" : ""}`}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href='#footer'
            onClick={() => {
              setMenu("contact");
              if (isMenuOpen) toggleMenu();
            }}
            className={`${menu === "contact" ? "active" : ""}`}
          >
            Contact Us
          </a>
        </li>
        <li>
        <Link
            to="/About"
            onClick={() => {
              setMenu("About");
              if (isMenuOpen) toggleMenu();
            }}
            className={`${menu === "About" ? "active" : ""}`}
          >
            About Us
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
