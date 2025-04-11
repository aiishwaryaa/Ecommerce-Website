// Footer.js
import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="wavy-footer">
      <div className="footer-content">
        {/* Brand Description */}
      <div className='footer'>  
        <span><img className='fborder1' src="/images/b.png" alt="" /><img className='footer-logo' src='/images/logo.png'/>
        <img  className='fborder2' src="/images/b.png" alt="" /></span>
        </div>
        <h4 className='hindides mt-1'>"Rत्नम" – जहाँ रत्न और कला का संगम! हमारा हर आभूषण शुद्धता, परंपरा, और सौंदर्य का अद्वितीय मिश्रण है। 
  प्रत्येक रचना मानो ऋचाओं के समान पवित्र और कालातीत है, जो आपके व्यक्तित्व को अद्वितीय आभा प्रदान करती है।
  आइए, इस यात्रा में हमारे साथ मिलें और अनुभव करें – ‘शुद्ध सौंदर्य का स्पर्श’। ✨</h4>
        <br />
        <br />

        {/* Footer Sections */}
        <div className="footer-sections">
          {/* Social Media Links */}
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
            </div>
          </div>

          {/* Important Links */}
          <div className="footer-section important-links">
            <h3>Important Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/collections">Our Collections</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="footer-section contact-form">
            <h3>Contact Us</h3>
            <p>Have questions? Send us a message, and we'll get back to you soon!</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <p>&copy; 2024 Rत्नम. All rights reserved. Designed by Aishwarya.</p>
      </div>
    </footer>
  );
};

export default Footer;
