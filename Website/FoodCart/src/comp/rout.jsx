import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';
import Cart from './cart';
import About from './about';

const Rout = ({ addtocart, cartItem, setcartItem }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product addtocart={addtocart} />} />
      <Route path="/cart" element={<Cart addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Rout;
