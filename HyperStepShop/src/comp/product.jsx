import React, { useState } from "react";
import './style.css';
import Detail from "./productdetail";
import axios from 'axios';



const Product = ({ addtocart }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartItem, setcartItem] = useState([]); 

    // Function to handle adding to cart
    const handleAddToCart = async (product) => {
        const userId = parseInt(localStorage.getItem('userId'), 10); // Retrieve user ID from local storage
        console.log("User  ID being sent:", userId); // Log the user ID to check its value
    
        if (!userId) {
            alert("You need to log in to add products to the cart.");
            return; // Exit the function if user ID is not available
        }
    
        const exists = cartItem.find((x) => x.id === product.id);
        if (exists) {
            alert("This Product is already added");
        } else {
            setcartItem([...cartItem, { ...product, quantity: 1 }]);
            alert("Product Added to Cart");
    
            const productToAdd = {
                user_id: userId, // Use the retrieved user ID
                product_id: product.id,
                quantity: 1,
                title: product.Title,
                price: product.Price,
                img: product.Img,
                cate: product.Cate
            };
    
            // Send the product to the backend
            try {
                const response = await axios.post('http://localhost:8081/api/cart', productToAdd);
                console.log("Product added to cart:", response.data); // Log the response for debugging
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