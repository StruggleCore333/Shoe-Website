import React from 'react';
import Login from './LogIn';
import Signup from './Signup';

import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;







/*
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './comp/nav.jsx';
import Rout from './comp/rout.jsx';

const App = () => {
  const [cartItem, setcartItem] = useState([]);

  const addtocart = (product) =>
  {
    const exsit = cartItem.find((x) => {
      return x.id === product.id;
    })
    if(exsit)
    {
      alert("This Product is already added")
    }
    else 
    {
      setcartItem([...cartItem,{...product, quantity: 1}])
      alert("Product Added to Cart"); 
    }
    console.log(setcartItem)
  }

  return (
    <Router>
      <Nav />
      <Rout addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />
    </Router>
  );
};

export default App;
*/