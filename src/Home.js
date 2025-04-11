// src/components/Home.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';
import ProductSlider from './ProductSlider';
import { Link } from 'react-router-dom';




function Home() {
  return (
    
    <div className="home">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/c1.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h3 className='caption'>Get the best deals on our products!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/c2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            
            <h3 className='caption'>Don't miss our exclusive discounts!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/c3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <h3 className='caption'>Shop now and save big on selected items!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* Khaas Nageene */}
      <div className="special-items-section">
        <h1 className="section-title mb-5">Khaas Nageene</h1>
        <div className="special-items">
          <div className="item-card">
          <Link to={`/product/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/images/h1.jpg"/>
            <h4>Beautiful peacock Necklace</h4>
            <p>₹15,499</p>
            </Link>
          </div>
          <div className="item-card">
            <img src="/images/h2.jpg" alt="Item 2" />
            <h4>Eagle Designed Necklace</h4>
            <p>₹35,499</p>
          </div>
          <div className="item-card">
            <img src="/images/h3.jpg" alt="Item 3" />
            <h4>Blue-Gold Butterfly Necklace</h4>
            <p>₹45,499</p>
          </div>
        </div>
      </div>

{/* Aapke Liye Hamaari Khaas Peshkash */}
<div className="product-cards-section">
  <h1 className="text-center mb-5">Aapke Liye Hamaari Khaas Peshkash</h1>
  <div className="product-cards">
    <div className="product-card">
      <img
        src="/images/h4.jpg"
        alt="Heavy Gold Bangle"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Royal Gold Bangle</h4>
        <p className="product-description">Exquisite bangle with intricate gold detailing, perfect for special occasions.</p>
        <p className="product-price">₹7,500.00</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="product-card">
      <img
        src="/images/h5.jpg"
        alt="Traditional Gold Bangle"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Traditional Gold Bangle</h4>
        <p className="product-description">Heavy gold bangle with classic patterns, ideal for traditional wear.</p>
        <p className="product-price">₹6,200.00</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="product-card">
      <img
        src="/images/h6.jpg"
        alt="Elegant Gold Bangle"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Elegant Gold Bangle</h4>
        <p className="product-description">Delicately designed gold bangle for a subtle yet classy look.</p>
        <p className="product-price">₹8,000.00</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
{/* /poster sale */}
<div className="jewelry-poster-container">
      <img 
        src="/images/poster.png" 
        alt="Jewelry Sale" 
        className="jewelry-poster-image"
      />
    </div>





      

     {/*Aapki khaasiyat ke hisaab se chune gaye item!  */}
     
<div className="handpicked-cards-section">
  <h1 className='text-center mb-5 mt-5'>Aapki khaasiyat ke hisaab se chune gaye item!</h1>
  
  <div className="handpicked-product-cards">
    {/* Necklace Card */}
  
    <div className="handpicked-product-card">
      <img
        src="/images/h9.jpg"
        alt="Necklace"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Elegant Gold Necklace</h4>
        <p className="product-description">A stunning gold-plated necklace with intricate details, perfect for special occasions.</p>
        <p className="product-price">₹5,499</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>

    
    {/* Earrings Card */}
    <div className="handpicked-product-card">
      <img
        src="/images/h10.jpg"
        alt="Earrings"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Classic Gold Earrings</h4>
        <p className="product-description">Elegant earrings with a touch of traditional charm, suitable for any festive look.</p>
        <p className="product-price">₹1,999</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>

    {/* Anklet Card */}
    <div className="handpicked-product-card">
      <img
        src="/images/h11.jpg"
        alt="Anklet"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Gold-Plated Anklets</h4>
        <p className="product-description">Delicate gold anklets with a modern twist, ideal for enhancing your ethnic style.</p>
        <p className="product-price">₹2,499</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>

    {/* Ring Card */}
    <div className="handpicked-product-card">
      <img
        src="/images/h12.jpg"
        alt="Ring"
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-title">Royal Gold Ring</h4>
        <p className="product-description">A beautifully crafted ring with a timeless design, perfect for any jewelry collection.</p>
        <p className="product-price">₹1,299</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<div className="container  gallery mt-5">
<h2 className='mt-4 fs-1'>Chamakti Dharohar</h2>
<p className='fs-5 mt-3 '>Presenting a layout with a stunning image of our upper and lower jewelry collections displayed side by side, giving you a closer look at the intricate designs and craftsmanship.</p>

  <div className="row">
    {/* Left Image Column */}
    <div className="col-lg-4 image-column">
      <img src="/images/g3.jpg" alt="Upper Image" className="fixed-image img-fluid" />
    </div>

    {/* Right Image Column */}
    <div className="col-lg-4 image-column">
      <img src="/images/g6.jpg" alt="Lower Image" className="fixed-image img-fluid" />
    </div>
     {/* Right Image Column */}
     <div className="col-lg-4 image-column">
      <img src="/images/g9.jpg" alt="Lower Image" className="fixed-image img-fluid" />
    </div>
  </div>
  
  
</div>

<br /><br />


<ProductSlider/>
<br /><br /><br /><br />


{/* vedeo section */}

<div className="video-section-container">
  <h2 className="section-heading">Ratnam ke Saath Anubhav Karen Shringar ki Shiddat</h2>
  <div className="video-section mt-5">
  <img className='b1' src="/images/b1.png" alt="" />
    <video autoPlay loop muted className="video-bg">
      <source src="/images/vd.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  <img  className="b2" src="/images/b2.png" alt="" />

  </div>
</div>


<div className="about-ratnam-section">
  <h2 className="text-center ">Ratnam Jewellery Ke Baare Mein Janiye</h2>
  <p className='mt-5'>
    <strong>Ratnam Jewellery</strong> ki shuruaat 2010 mein hui thi, ek simple soch ke saath – premium quality jewellery ko affordable prices par offer karna. Dheere-dheere, Ratnam Jewellery India ke top 25 online jewellery retailers mein shamil ho gaya hai, apne exquisite designs aur customer satisfaction ke liye jaana jaane laga. Aaj ke time mein, 150+ stores ke saath aur online presence ke sath, Ratnam Jewellery ab ek trusted name ban gaya hai jewellery industry mein.
  </p>

  <p>
    2018 se, Ratnam Jewellery ne leading brands ke saath haath milaya hai, apni reach ko aur aage badhane aur customers ke liye naye innovative jewellery solutions lane ke liye. Yeh collaboration humare mission ko aur mazbooti deta hai – har occasion ke liye luxurious aur affordable jewellery dena.
  </p>

  <div className="shopping-at-ratnam">
    <h3>Shopping Ka Naya Experience Ratnam Jewellery Ke Saath</h3>
    <p>
      Customer satisfaction aur security ko pehle rakhte hue, Ratnam Jewellery har ek transaction ko safe aur secure banata hai. Hamari site strict transparency policies follow karti hai taaki customers ko ek smooth aur reliable shopping experience mile.
    </p>

    <p>
      Peace of mind ke liye, Ratnam Jewellery ke sare products certified hain international laboratories se. Hum 30-day hassle-free return policy bhi offer karte hain – no questions asked. Hamare paas sirf fine jewellery nahi, balki certified 22k (916) aur 24k (995) gold coins bhi hain. Customers humari range mein rings, earrings, pendants, necklaces, chains, bangles, bracelets, mangalsutra, aur nose pins bhi explore kar sakte hain.
    </p>
  </div>

  <div className="vision-section">
    <h3>Ratnam Jewellery Ka Vision</h3>
    <p>
      Humara vision hai ki hum aapko beautifully crafted jewellery provide karen, jo sirf competitive hi nahi, balki fair prices par bhi ho. Hum supply chain mein inefficiencies ko reduce karke yeh savings directly aap tak pahunchate hain. Ratnam Jewellery mein, aap 30% tak ki bachat kar sakte hain traditional market prices ke comparison mein.
    </p>

    <p>
      Customer experience ko aur enhance karne ke liye, hamare app mein <strong>Virtual Try-On</strong> feature hai, jisse users thousands of earrings aur jewellery pieces virtually try on kar sakte hain. Yeh feature digital aur physical shopping experience ke beech ka gap bridge karta hai, aapke liye perfect piece choose karna aur asaan banaata hai.
    </p>

    <p>
      Hazaron satisfied customers ke saath, Ratnam Jewellery ka app ab jewellery industry mein ek of the most loved apps ban chuka hai.
    </p>
  </div>

</div>
</div>




  );
}

export default Home;
