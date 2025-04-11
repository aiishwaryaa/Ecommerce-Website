// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';  // Home component import
import Cart from './Cart';  // Cart component import
import Footer from './Footer';
import Login from './Login';
import Store from './Store';
import Signup from './Signup';
import ProductDetail from './ProductDetail';
import WishlistPage from './wishlistPage';

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/store" element={<Store />} />  {/* store route */}
        <Route path="/Login" element={<Login />} />  {/* login route */}
        <Route path="/Signup" element={<Signup />} />  {/* signup route */}
        <Route path='/Product/:id' element={<ProductDetail/>}/>
        <Route path='/wishlistPage' element={<WishlistPage/>}/>

        <Route path="/cart" element={<Cart />} />  {/* Cart route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
