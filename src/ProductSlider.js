import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const products = [
    {
      img: "/images/s1.jpg",
      title: "Product 1",
      description: "This is a great product with amazing features.",
      rating: 4.5,
      price: 2499,
    },
    {
      img: "/images/s2.jpg",
      title: "Product 2",
      description: "An affordable and high-quality product.",
      rating: 4.0,
      price: 1999,
    },
    {
      img: "/images/s3.jpg",
      title: "Product 3",
      description: "The best choice for your everyday needs.",
      rating: 4.8,
      price: 2999,
    },
    {
      img: "/images/s4.jpg",
      title: "Product 4",
      description: "A premium product with exclusive features.",
      rating: 5.0,
      price: 3999,
    },
    {
      img: "/images/s5.jpg",
      title: "Product 5",
      description: "Sleek design and top-notch performance.",
      rating: 4.2,
      price: 1499,
    },
    {
        img: "/images/s6.jpg",
        title: "Product6 ",
        description: "Sleek design and top-notch performance.",
        rating: 4.2,
        price: 1499,
      },
      {
        img: "/images/s7.jpg",
        title: "Product 5",
        description: "Sleek design and top-notch performance.",
        rating: 4.2,
        price: 1499,
      },
      {
        img: "/images/s8.jpg",
        title: "Product 5",
        description: "Sleek design and top-notch performance.",
        rating: 4.2,
        price: 1499,
      },
      {
        img: "/images/s9.jpg",
        title: "Product 5",
        description: "Sleek design and top-notch performance.",
        rating: 4.2,
        price: 1499,
      },
      {
        img: "/images/s10.jpg",
        title: "Product 5",
        description: "Sleek design and top-notch performance.",
        rating: 4.2,
        price: 1499,
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products visible at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container mt-5">
      <h1 className="slider-heading fs-1 mb-5 ">Naye aagaman ki raunak dekhein!</h1>
    <Slider {...settings}>
      {products.map((product, index) => (

        <div key={index} className="product-card">
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="product-rating">
            <span>Rating: {product.rating} ★</span>
          </div>
          <p className="product-price">₹{product.price}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ProductSlider;
