import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homePage";
import Product from "./product";
import Cart from "./cart";
import AboutUs from "./aboutUs";
import Users from "./user";

const Rout = ({addtocart, cartItem, setcartItem}) => {
    return (
        <>
        <Routes>
            <Route path="/product" element={<Product addtocart={addtocart}/>}/>
            <Route path="/cart" element={<Cart addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem}/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/user" element={<Users/>}/>
        </Routes>
        </>
    )
}

export default Rout