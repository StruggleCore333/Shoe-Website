import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import './style.css';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2>HyperStep</h2>
                </div>
                <div className={`nav ${isMobile ? "active" : ""}`}>
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
                <div className="hamburger" onClick={toggleMenu}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </>
    );
}

export default Nav;