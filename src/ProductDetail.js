import React, { useState } from "react";
import { Link } from 'react-router-dom';  // If you're using React Router for navigation

import "./App.css";

const ProductDetail = () => {
  const [rating, setRating] = useState(4); // Default rating

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="product-page">
      <h1 className="mt-5 mb-5 text-center ">Vistaar-e-Vivrann</h1>

      {/* Main container */}
      <div className="main-container">
        {/* Product Details Section */}
        <div className="product-details-container">
          <div className="product-image-section">
            <img
              src="/images/s1.jpg"
              alt="Diamond Necklace"
              className="main-product-image"
            />
            <div className="thumbnail-gallery">
              <img src="/images/s1.jpg" alt="Thumbnail 1" />
              <img src="/images/s1.jpg" alt="Thumbnail 2" />
              <img src="/images/s1.jpg" alt="Thumbnail 3" />
            </div>
          </div>
          <div className="product-info-section mt-5">
            <h2>Traditional Gold Necklace </h2>
            <p className="product-code">
              Product Code: <span>NKDIA11080</span>
            </p>
            <p className="availability">
              Availability: <span>Make To Order</span>
            </p>
            <h3 className="price">₹ 943,689</h3>
            <p>(Inclusive of all taxes)</p>

            <div className="product-options">
              <div>
                <label>Size:</label>
                <select>
                  <option>18 INCHES (45.72 cm)</option>
                  <option>20 INCHES (50.8 cm)</option>
                </select>
              </div>
              <div>
                <label>Gold Color:</label>
                <select>
                  <option>Rose</option>
                  <option>Yellow</option>
                </select>
              </div>
              <div>
                <label>Diamond Quality:</label>
                <select>
                  <option>SI-GH</option>
                  <option>VVS-EF</option>
                </select>
              </div>
            </div>
            <button className="buy-now-button">Add To Cart</button>
          </div>
        </div>

        

        {/* Review Section */}
        <div className="product-reviews ">
          <h1 className="mt-5 text-center">Graahak Ki Zubaan</h1>
          <div className="rating-stars text-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? "filled" : ""}`}
                onClick={() => handleRatingClick(index)}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-center">{rating} out of 5</p>
          <div className="customer-review">
            <strong>John D.</strong>
            <p>
              “Absolutely stunning! The quality and craftsmanship are
              unmatched. Highly recommended.”
            </p>
          </div>
          <div className="customer-review">
            <strong>Emma R.</strong>
            <p>
              “The necklace is even better in person! The diamonds shine
              brilliantly, and the design is timeless.”
            </p>
          </div>
          <div className="customer-review">
            <strong>Sophia P.</strong>
            <p>
              “A perfect gift for my anniversary. The packaging and service
              were also top-notch!”
            </p>
          </div>
        </div>
      </div>
      <Link to="/store" className="go-back-to-store ">Go back to Store</Link>

       {/* icons */}
       <div class="icons-section-container">
  <h1 className='text-center mt-5 mb-5'>Ratnam Promise</h1>
  <div class="icons-section mt-2">
       
    <div class="icon-card">
      <img src="/images/ICONSR/1.png" alt="Lifetime Maintenance"/>
      <p>Lifetime Maintenance</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/2.png" alt="Insurance"/>
      <p>Your Jewellery is Insured</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/3.png" alt="14 Days Return"/>
      <p>14 Days Return Policy</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/4.png" alt="Complete Transparency"/>
      <p>Complete Transparency</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/5.png" alt="Certified Diamonds"/>
      <p>Easy Exchange</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/6.png" alt="Zero Deduction"/>
      <p>Certified Diamonds</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/7.png" alt="Complete Transparency"/>
      <p>BIS916 Hallmarked</p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/8.png" alt="Certified Diamonds"/>
      <p>Zero Deduction Gold Exchange </p>
    </div>
    <div class="icon-card">
      <img src="/images/ICONSR/9.png" alt="Zero Deduction"/>
      <p>Guarenteed BuyBack</p>
    </div>
    </div>
  </div>
  



    </div>
  );
};

export default ProductDetail;
