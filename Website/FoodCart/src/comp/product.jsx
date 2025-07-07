import React, { useState } from 'react';
import Detail from './productdetail';
import './style.css';

const Product = ({ addtocart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Main Dish', 'Dessert', 'Soup', 'Snacks', 'Drinks'];

  const filteredProducts = Detail.filter((item) => {
    const matchesSearch = item.Title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.Cate === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="product-container">

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search food by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="main-product">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((curlElm) => (
            <div className="box" key={curlElm.id}>
              <div className="img-box">
                <img src={curlElm.Img} alt={curlElm.Title} />
              </div>
              <div className="detail">
                <h4>{curlElm.Cate}</h4>
                <div className="info">
                  <h2>{curlElm.Title}</h2>
                  <p>$ {curlElm.Price}</p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addtocart(curlElm)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
