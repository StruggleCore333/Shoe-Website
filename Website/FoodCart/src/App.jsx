import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './comp/nav';
import Rout from './comp/rout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItem, setcartItem] = useState([]);

  const addtocart = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      toast.warn("This product is already in the cart");
    } else {
      setcartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Item added to cart!");
    }
  };

  return (
    <>
      <Router>
        <Nav />
        <Rout addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />
        <ToastContainer position="top-center" autoClose={1500} />
      </Router>
    </>
  );
};

export default App;
