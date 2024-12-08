import React from "react";
import Detail from "./productdetail";
import './style.css'

const Product = ({addtocart}) => {
    return (
        <>
        <div className="product-container">
            <div className="main-product">
                {
                    Detail.map((curElm) => {
                        return (
                            <>
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
                                    <button className="addtocart" onClick={()=> addtocart (curElm)}>Add to Cart</button>
                                </div>
                            </div>
                            </>
                        )
                    }) 
                }
            </div>
        </div>
        </>
    )
}

export default Product