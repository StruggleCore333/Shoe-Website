import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = ({cartItem, setcartItem}) => {

function inc(product)
{
    const exsit = cartItem.find((x) => {
        return x.id === product.id ;
    })
    setcartItem(cartItem.map((item) => {
        return item.id === product.id ? {...exsit, quantity: exsit.quantity + 1}: item
    }))
}

function dec(product)
{
    const exsit = cartItem.find((x) => {
        return x.id === product.id ;
    })
    setcartItem(cartItem.map((item) => {
        return item.id === product.id ? {...exsit, quantity: exsit.quantity - 1}: item
    }))
}
function removecart(product) {
    const exsit = cartItem.find((x) => {
        return x.id === product.id ;
    })
    if(exsit.quantity > 0)
    {
        setcartItem(cartItem.filter((x) => {
            return x.id !== product.id
        }))
    }
}

const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.Price, 0);
    return (
        <>
        {cartItem.length === 0 &&
        <>
         <h2 className="empty_cart">Cart Is Empty Please Select a Product</h2>
         <Link to="/product">
         <button className="cart_shop">Shop Now</button>
         </Link>
         </>
        }
        <div className="cart_container">
            <div className="cart_product">
            {
                cartItem.map((item) => {
                    return (
                        <div className="cart_box" key={item.id}>
                        <div className="cart_product_container">
                            <div className="cart_img_box">
                                <img src={item.Img} alt={item.Title}></img>
                            </div>
                            <div className="cart_item_detail">
                                <h2>{item.Title}</h2>
                                <h3>${item.Price}</h3>
                                <button className="quantity_dec" onClick={() => dec (item)}>-</button>
                                <input type="text" value={item.quantity}></input>
                                <button className="quantity_inc" onClick={() => inc (item)}>+</button>
                                <h3>sub Total: ${item.Price * item.quantity}</h3>
                            </div>
                            <button className="remove_cart" onClick={()=>removecart(item)}><FaRegTrashAlt /></button>
                        </div>
                    </div>
                    )
                }) 
            }
            </div>
        </div>
        {cartItem.length > 0 && <>
            <p className="cart_total">Total: ${TotalPrice}</p>
            <button className="checkout">CheckOut</button>
            </>}
        </>
    )
}

export default Cart