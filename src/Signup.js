// SignupForm.js
import React, { useState } from 'react';
import './App.css';

const Signup = () => {
  const [form , setForm] = useState({});
  const [allData, setAllData] = useState([]);
  

  const changeHandle=(e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Signed up with email: ${form.email}`);
  };

  return (
    <div className="signup-form-container">
      {/* Signup Benefits Card */}
      <div className="signup-benefits-card">
        <img className='signupimg' src="/images/signup1.jpg" alt="Exclusive Jewelry" />
        <p>Become a part of Ratnam Family and enjoy <span className="discount">exclusive privileges</span>!</p>
        <p>Benefits you'll receive:</p>
        <div className="signup-benefits-icons">
          <span>*₹500 Welcome Credit      </span>
          <span>*Personalized Jewelry Recommendations      </span>
          <span>*Early Access to New Collections      </span>
          <span>*Exclusive Member Discounts</span>
        </div>
      </div>

      {/* Signup Card */}
      <div className="signup-card">
        <h2>Swagat Hai Ratnam Par!</h2>
        <p className="mt-3 text-center">Signup karke Ratnam ki khaas suvidhaayein paayein</p>
        <form onSubmit={handleSubmit}>
          {/* Name Input Field */}
          <div className="signup-input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={changeHandle}
              required
            />
          </div>

          {/* Email Input Field */}
          <div className="signup-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={changeHandle}
              required
            />
          </div>

          {/* Password Input Field */}
          <div className="signup-input-group">
            <input
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={changeHandle}
              required
            />
          </div>

          <div className="signup-input-group">
            <input
              type="password"
              placeholder="Confirm password"
              value={form.password}
              onChange={changeHandle}
              required
            />
          </div>

          {/* Signup Button */}
          <button className="signup-submit-btn mt-5" type="submit">Sign Up</button>
        </form>
        <p className="signup-terms">
          By continuing, I agree to <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
    

  );
};

export default Signup;
