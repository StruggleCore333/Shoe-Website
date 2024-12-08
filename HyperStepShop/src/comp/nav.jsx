import React from "react";
import { Link } from "react-router-dom"; 
import './style.css';
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2>HyperStep</h2>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/" className="link">Home</Link> 
                        </li>
                        <li>
                            <Link to="/product" className="link">Product</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="link">Cart</Link> 
                        </li>
                        <li>
                            <Link to="/aboutus" className="link">About</Link>
                        </li>
                        <li>
                            <Link to="/user" className="link1"><FaUserCircle /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;
