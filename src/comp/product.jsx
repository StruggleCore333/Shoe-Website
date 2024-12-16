import React, { useState } from "react";
import './style.css';
import Detail from "./productdetail";
import axios from 'axios';

const Product = ({ addtocart }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartItem, setcartItem] = useState([]); 

    // Function to handle adding to cart
    const handleAddToCart = async (product) => {
        const userId = 1; 
        const exists = cartItem.find((x) => x.id === product.id);
        if (exists) {
            alert("This Product is already added");
        } else {
            setcartItem([...cartItem, { ...product, quantity: 1 }]);
            alert("Product Added to Cart");

            const productToAdd = {
                user_id: userId,
                product_id: product.id,
                quantity: 1,
                title: product.Title,
                price: product.Price,
                img: product.Img,
                cate: product.Cate
            };

            // Send the product to the backend
            try {
                await axios.post('http://localhost:8081/api/cart', productToAdd);
            } catch (error) {
                console.error("Error adding product to cart:", error);
            }
        }
    };

    return (
        <div className="product-container">
            <div className="searchInput_Container">
                <input 
                    id="searchInput" 
                    type="text" 
                    placeholder=" Search here..." 
                    onChange={(event) => setSearchTerm(event.target.value)} 
                />
            </div>
            
            <div className="main-product">
                {
                    Detail
                        .filter((val) => {
                            if (searchTerm === "") return val;
                            return val.Title.toLowerCase().includes(searchTerm.toLowerCase());
                        })
                        .map((curElm) => (
                            <div className="box" key={curElm.id}>
                                <div className="img-box">
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className="detail">
                                    <h4>{curElm.Cate}</h4>
                                    <div className="info">
                                        <h2>{curElm.Title}</h2>
                                        <p>${curElm.Price}</p>
                                    </div>
                                    <button 
                                        className="addtocart" 
                                        onClick={() => handleAddToCart(curElm)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Product;