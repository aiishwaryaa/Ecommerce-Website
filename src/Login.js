// LoginForm.js
import React, { useState } from 'react';
import './App.css';
import { json } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({});
  const [allData, setallData] = useState([]);


  const changeHandle=(e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   let getData = JSON.parse(localStorage.getItem("addData"))||[];
   console.log("getData", getData);
   
  };

  return (
    <div className="form-container">
      {/* Benefits Card */}
      <div className="benefits-card">
        <img src="/images/login1.jpg" alt="Gift Box" />
        <p>On your first order get <span className="discount">₹500 off</span></p>
        <p>And other benefits</p>
        <div className="benefits-icons">
          <span>Loyalty Rewards</span>
          <span>Unlock wishlist</span>
          <span>Personalized shopping</span>
          <span>Early Access to New Collections</span>
        </div>
      </div>
      
      {/* Login Card */}
      <div className="login-card">
      <h2>Swagat Hai Aapka Ratnam Mein!</h2>
      <p className='mt-3 text-center'>Login karke khas Ratnam ke suvidhaayein ka anand lein</p>
        <form onSubmit={handleSubmit}>
          {/* Email Input Field */}
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={changeHandle}
              required
            />
          </div>
          
          {/* Password Input Field */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={changeHandle}
              required
            />
          </div>
          
          {/* Login Button */}
          <button className="mt-5" type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <p className="terms">
          By continuing, I agree to <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
