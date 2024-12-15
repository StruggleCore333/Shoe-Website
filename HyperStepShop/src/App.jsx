import React, { useState } from 'react';
import Login from './LogIn';
import Signup from './Signup';
import Nav from './comp/nav.jsx';
import Rout from './comp/rout.jsx';
import Home from "./comp/homePage";
import { UserProvider } from './comp/UserContext.jsx';
import Product from "./comp/product";
import Cart from "./comp/cart";
import AboutUs from "./comp/aboutUs";
import Users from "./comp/user";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [cartItem, setcartItem] = useState([]);
  const [userId, setUserId] = useState(1); // Replace with actual user ID logic

  const addtocart = (product) => {
    const exists = cartItem.find((x) => x.id === product.id);
    if (exists) {
      alert("This Product is already added");
    } else {
      setcartItem([...cartItem, { ...product, quantity: 1 }]);
      alert("Product Added to Cart");
    }
  };

  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/homepage' element={
          <>
            <Nav />
            <Rout addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />
          </>
        }></Route>
        <Route path="/product" element={
          <>
            <Nav />
            <Product addtocart={addtocart} userId={userId} /> {/* Pass userId here */}
          </>
        }></Route>
        <Route path="/cart" element={
          <>
            <Nav />
            <Cart addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />
          </>
        }></Route>
        <Route path="/aboutus" element={
          <>
            <Nav />
            <AboutUs />
          </>
        }></Route>
        <Route path="/user" element={
          <>
            <Nav />
            <Users />
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;





// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Nav from './comp/nav.jsx';
// import Rout from './comp/rout.jsx';

// const App = () => {
//   const [cartItem, setcartItem] = useState([]);

//   const addtocart = (product) =>
//   {
//     const exsit = cartItem.find((x) => {
//       return x.id === product.id;
//     })
//     if(exsit)
//     {
//       alert("This Product is already added")
//     }
//     else 
//     {
//       setcartItem([...cartItem,{...product, quantity: 1}])
//       alert("Product Added to Cart"); 
//     }
//     console.log(setcartItem)
//   }

//   return (
//     <Router>
//       <Nav />
//       <Rout addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />
//     </Router>
//   );
// };

// export default App;
