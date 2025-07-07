import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = ({ cartItem, setcartItem }) => {
  const increaseQty = (item) => {
    const updatedCart = cartItem.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setcartItem(updatedCart);
  };

  const decreaseQty = (item) => {
    const updatedCart = cartItem.map((product) =>
      product.id === item.id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setcartItem(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItem.filter((product) => product.id !== item.id);
    setcartItem(updatedCart);
    toast.error(`${item.Title} removed from cart`, {
      position: 'top-center',
      autoClose: 1500,
    });
  };

  const total = cartItem.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );

  return (
    <>
      {cartItem.length === 0 ? (
        <>
          <h2 className='empty_cart'>Cart is empty, please select a product</h2>
            <Link to='/product' className='cart_shop'>
              Order Now
            </Link>
        </>
      ) : (
        <div className='cart_container'>
          <div className='cart_product'>
            {cartItem.map((item) => (
              <div className='cart_box' key={item.id}>
                <div className='cart_product_container'>
                  <div className='cart_img_box'>
                    <img src={item.Img} alt={item.Title} />
                  </div>

                  <div className='cart_item_detail'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                    <div className='cart_quantity'>
                      <button className='quantity_dec' onClick={() => decreaseQty(item)}>-</button>
                      <input type='text' readOnly value={item.quantity} />
                      <button className='quantity_inc' onClick={() => increaseQty(item)}>+</button>
                    </div>
                  </div>

                  <div className='cart_price_area'>
                    <span className='cart_price'>${item.Price.toFixed(2)}</span>
                    <span className='subtotal'>Subtotal: ${(item.Price * item.quantity).toFixed(2)}</span>
                    <button className='remove_cart' onClick={() => removeFromCart(item)}>X</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className='checkout'>Order</button>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </>
  );
};

export default Cart;
