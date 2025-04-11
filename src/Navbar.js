import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHeart, FaHome, FaStore, FaSearch } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAccountBox, setShowAccountBox] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Initialize cartCount state

  // Toggle menu visibility for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle account dropdown box visibility
  const toggleAccountBox = () => {
    setShowAccountBox(!showAccountBox);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar sticky-top">
      <div className="logo">
        <img className="navlogoimg" src="/images/logo.png" alt="" />
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for item..." />
        <FaSearch className="search-icon" />
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
          </li>
          <li>
            <Link to="/Store" onClick={closeMenu}><FaStore /> Store</Link>
          </li>
          <li>
            <Link to="/wishlistPage" onClick={closeMenu}><FaHeart /> Wishlist</Link>
          </li>
          <li className="account-dropdown">
            <button onClick={() => { toggleAccountBox(); closeMenu(); }} className="account-button">
              <FaUser />  My Account
            </button>
            {showAccountBox && (
              <div className="account-box">
                <button className="dropdown-button"><Link to="/login" onClick={closeMenu}>Login</Link></button>
                <button className="dropdown-button"><Link to="/Signup" onClick={closeMenu}>Signup</Link></button>
              </div>
            )}
          </li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              <FaShoppingCart />Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
