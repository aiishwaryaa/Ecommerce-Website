import React, { useState, useEffect } from 'react';

// Sample JSON data for cart items (Jewelry)
const sampleCartData = [
  {
    id: 1,
    name: 'Gold Necklace',
    price: 1799, // Price in INR
    quantity: 1,
    imgSrc: '/images/h1.jpg'
  },
  {
    id: 2,
    name: ' Gold Bangles',
    price: 999, // Price in INR
    quantity: 1,
    imgSrc: '/images/h4.jpg'
  }
];

const CartPage = () => {
  // State to manage cart items fetched from the JSON data
  const [cartItems, setCartItems] = useState([]);

  // Simulate fetching data from an external source (JSON or API)
  useEffect(() => {
    // For demo purposes, we directly assign the sample data
    // In a real-world scenario, use an API call to fetch the cart data
    setCartItems(sampleCartData);
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total price 
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Fixed shipping amount
  const shippingAmount = 50; // Set shipping amount (example INR 50)

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cartItems.length} items</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item) => (
                  <div key={item.id} className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={item.imgSrc} className="w-100" alt={item.name} />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{item.name}</strong></p>
                      <button type="button" className="btn delete btn-sm me-1 mb-2">
                        <i className="fas fa-trash"></i>
                      </button>
                      <button type="button" className="btn btn-danger btn-sm mb-2">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                        <button
                          className="btn checkout btn-sm px-3 me-2"
                          onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <div className="form-outline">
                          <input
                            id={`quantity-${item.id}`}
                            min="1"
                            name="quantity"
                            value={item.quantity}
                            type="number"
                            className="form-control"
                            readOnly
                          />
                          <label className="form-label" htmlFor={`quantity-${item.id}`}></label>
                        </div>
                        <button
                          className="btn checkout btn-sm px-3 ms-2"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>₹{item.price.toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p><strong>We accept</strong></p>
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img className="me-2" width="45px" src="/images/paypal.jpg" alt="PayPal acceptance mark" />
                <img className="me-2" width="45px" src="/images/paytm.jpg"/>
                <img className="me-2" width="45px" src="/images/phonepay.jpg" alt="PayPal acceptance mark" /> 
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products <span>₹{calculateTotal().toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping <span>₹{shippingAmount}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong><p className="mb-0">(including VAT)</p></strong>
                    </div>
                    <span><strong>₹{(calculateTotal() + shippingAmount).toFixed(2)}</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn  checkout btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
