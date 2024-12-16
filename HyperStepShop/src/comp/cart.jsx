import React, { useEffect } from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';

const Cart = ({ cartItem, setcartItem }) => {

    useEffect(() => {
        const fetchCartItems = async () => {
            const userId = parseInt(localStorage.getItem('userId'), 10);    
            try {
                const response = await axios.get(`http://localhost:8081/api/cart/${userId}`);
                setcartItem(response.data); 
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }   
        };

        fetchCartItems();
    }, [setcartItem]);

    const inc = (product) => {
        const existingItem = cartItem.find((x) => x.id === product.id);
        setcartItem(cartItem.map((item) => {
            return item.id === product.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item;
        }));
    };

    const dec = (product) => {
        const existingItem = cartItem.find((x) => x.id === product.id);
        if (existingItem.quantity > 1) {
            setcartItem(cartItem.map((item) => {
                return item.id === product.id ? { ...existingItem, quantity: existingItem.quantity - 1 } : item;
            }));
        }
    };

    const removecart = async (product) => {
        try {
            await axios.delete(`http://localhost:8081/api/cart/${product.id}`);
            setcartItem(cartItem.filter((x) => x.id !== product.id));
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    };

    const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <>
            {cartItem.length === 0 ? (
                <>
                    <h2 className="empty_cart">Cart Is Empty Please Select a Product</h2>
                    <Link to="/product">
                        <button className="cart_shop">Shop Now</button>
                    </Link>
                </>
            ) : (
                <div className="cart_container">
                    <div className="cart_product">
                        {cartItem.map((item) => (
                            <div className="cart_box" key={item.id}>
                                <div className="cart_product_container">
                                    <div className="cart_img_box">
                                        <img src={item.img} alt={item.title}></img>
                                    </div>
                                    <div className="cart_item_detail">
                                        <h2>{item.title}</h2>
                                        <h3>${item.price}</h3>
                                        <button className="quantity_dec" onClick={() => dec(item)}>-</button>
                                        <input type="text" value={item.quantity} readOnly></input>
                                        <button className="quantity_inc" onClick={() => inc(item)}>+</button>
                                        <h3>Sub Total: ${item.quantity * item.price}</h3>
                                        <button className="remove_cart" onClick={() => removecart(item)}>
                                            <FaRegTrashAlt /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total_price">
                        <h2>Total Price: ${TotalPrice}</h2>
                        <button className="checkout">Checkout</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;