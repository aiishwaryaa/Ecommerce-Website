import React from 'react';
import { Link } from 'react-router-dom';  // If you're using React Router for navigation
import './App.css';

const Wishlist = () => {
  
 

  return (
    <div className="wishlist-page">
      <h1 className="text-center mt-5 mb-5">Your Wishlist</h1>
      <div className="wishlist-products">
       
          <div  className="wishlist-product-card">
            <div className="wishlist-product-image-container">
              <img src="image" alt="" className="wishlist-product-image" />
            </div>
            <div className="wishlist-product-info">
              <h4 className="wishlist-product-title">name</h4>
              <p className="wishlist-product-description">description</p>
              <p className="wishlist-product-price">price</p>
              <button
                className="remove-from-wishlist-btn"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
       
      </div>
      <Link to="/store" className="go-back-to-store">Go back to Store</Link>
      
    </div>

    
  );
};

export default Wishlist;
