import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTiktok, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="subtext">
                <p>MAKE THINGS MORE HYPE | ENJOY 12.12 SALE</p>
                <Link to="/product">
                    SHOP NOW
                </Link>
            </div>

            <div className='box1'>
                <div className='inBox1-1'></div>
                <div className='inBox1-2'></div>
                <div className='inBox1-3'></div>
            </div>

            <div className='sports'>
                <h1>Shop By Sports</h1>
                <div className='box2'>
                    <div className='inBox2-1'></div>
                    <div className='inBox2-2'></div>
                    <div className='inBox2-3'></div>
                    <div className='inBox2-4'></div>
                </div>
            </div>

            <div className='promo1'>
                <h1>MAKE IT ALL HAPPEN</h1>
                <p>Kick it all and step them out</p>
            </div>

            <div className='featured'>
                <h1>Featured</h1>
                <div className='box3'>
                    <div className='inBox3-1'></div>
                    <div className='inBox3-2'></div>
                </div>
            </div>

            <div className='seller'>
                <h1>Best Seller</h1>
                <div className='box4'></div>
            </div>

            <div className='promo2'>
                <h1>RUN, KEEP IT MOVING ATHLETIC WEAR</h1>
                <h1>AT HYPER STEP | 2024</h1>
            </div>

            <footer className="footer">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>+9277019076</p>
                    <p>HyperStep@gmail.com</p>
                    <p>HyperStep in Facebook</p>
                </div>
                <div className="footer-section">
                    <h3>Sports</h3>
                    <p>Basketball</p>
                    <p>Football</p>
                    <p>Running</p>
                    <p>GYM & Training</p>
                    <p>Tennis</p>
                    <p>Golf</p>
                    <p>Cycling</p>
                </div>
                <div className="footer-section">
                    <h3>Collections</h3>
                    <p>NIKE</p>
                    <p>Adidas</p>
                    <p>Puma</p>
                    <p>Anta</p>
                    <p>New Balance</p>
                    <p>Under Armor</p>
                </div>
                <div className="footer-section">
                    <h3>Branches</h3>
                    <p>Mandaue City</p>
                    <p>Cebu City</p>
                    <p>Lapu-Lapu City</p>
                    <p>Talisay City</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaYoutube />
                        <FaTiktok />
                        <FaTwitter />
                        <FaInstagramSquare />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;