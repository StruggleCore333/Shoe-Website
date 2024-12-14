import React, { useState } from "react";
import './style.css';
import Detail from "./productdetail";

const Product = ({ addtocart }) => {
    const [searchTerm, setSearchTerm] = useState("");

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
                                        onClick={() => addtocart(curElm)}>
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
