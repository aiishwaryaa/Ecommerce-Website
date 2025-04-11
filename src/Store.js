import React, { useState, useEffect } from 'react';
import Data from './Data'; // Ensure the path is correct
import { Carousel } from 'react-bootstrap';
import './App.css';
import { Link } from "react-router-dom";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('Wedding Collection');
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
  const [isMobile, setIsMobile] = useState(false);  // State to track screen size

  // Dynamically filter the data based on the selected category
  const categoryData = Data.filter(item => item.category === selectedCategory);

  // Check window size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);  // If width is less than 768px, it's mobile
    };

    handleResize();  // Set initial state based on the current window size
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the listener
    };
  }, []);

  
  return (
    <div className="store-page">
      <h1 className="text-center mt-5 mb-5 storeheading">
        Abhushan ka anand yahan shuru hota hai!
      </h1>

      {/* Bottom Bar for Categories */}
      <div className={`bottom-bar ${isMobile ? 'static-position' : ''}`}>
        <ul className="category-list">
          <li><a onClick={() => setSelectedCategory('Wedding Collection')}>Wedding Collection</a></li>
          <li><a onClick={() => setSelectedCategory('Rings')}>Rings</a></li>
          <li><a onClick={() => setSelectedCategory('Bracelet')}>Bracelet</a></li>
          <li><a onClick={() => setSelectedCategory('Bangles')}>Bangles</a></li>
          <li><a onClick={() => setSelectedCategory('Necklaces')}>Necklaces</a></li>
          <li><a onClick={() => setSelectedCategory('Chain & Pendants')}>Chain & Pendants</a></li>
          <li><a onClick={() => setSelectedCategory('Diamond Collection')}>Diamond Collection</a></li>
        </ul>
      </div>
      <br />

      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img className="d-block w-100" src='/images/storec1.png' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/storec2.png" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/storec3.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="store-section">
        <h1 className="text-center mb-5 mt-5">
          " Kala aur excellence ka milan, hamari collection ki shuruaat hai "

        </h1>
        <div className="handpicked-product-cards mt-5">
          {categoryData.map((item) => (
            <div key={item.id} className="handpicked-product-card">
              <div className="product-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                {/* Wishlist Button */}
                <button className="wishlist-btn">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
              <div className="product-info">
                <h4 className="product-title">{item.name}</h4>
                <p className="product-description">{item.description}</p>
                <p className="product-price">₹{item.price}</p>
                <div className="product-actions">
                  <Link to={`/product/${item.id}`}>
                  <button className="add-to-cart-btn-animated">
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Store;
