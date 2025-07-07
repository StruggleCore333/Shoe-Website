import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTiktok, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="subtext">
                <p>FLAVOR UP YOUR DAY | ENJOY FOOD FEST</p>
                <Link to="/product">
                    ORDER NOW
                </Link>
            </div>

            <div className='box1'>
                <div className='inBox1-1 food-banner-1'></div>
                <div className='inBox1-2 food-banner-2'></div>
                <div className='inBox1-3 food-banner-3'></div>
            </div>
 
            <div className='categories'>
                <h1>Explore by Category</h1>
                <div className='box2'>
                    <div className='inBox2 dessert-category'>
                    </div>
                    <div className='inBox2 drinks-category'>
                    </div>
                    <div className='inBox2 snacks-category'>
                    </div>
                    <div className='inBox2 soup-category'>
                    </div>
                </div>
            </div>

            <div className='promo1'>
                <h1>DEALS THAT SIZZLE</h1>
                <p>Fresh, Fast, and Full of Flavor</p>
            </div>

            <div className='featured'>
                <h1>Chef's Choice</h1>
                <div className='box3'>
                    <div className='inBox3-1 featured-food-1'></div>
                    <div className='inBox3-2 featured-food-2'></div>
                </div>
            </div>

            <div className='bestseller'>
                <h1>Customer Favorites</h1>
                <div className='box4 bestseller-food'></div>
            </div>

            <div className='promo2'>
                <h1>TASTE THE DIFFERENCE WITH EVERY BITE</h1>
                <h1>ONLY AT FOODIE HAVEN | 2024</h1>
            </div>

            <footer className="footer">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Phone: +9277019076</p>
                    <p>Email: <a href="mailto:NCFood@gmail.com">NCFood@gmail.com</a></p>
                    <p>Follow us on Facebook</p>
                </div>
                <div className="footer-section">
                    <h3>Popular Dishes</h3>
                    <ul>
                        <li>Liempo</li>
                        <li>Pork BBQ</li>
                        <li>Bulalo</li>
                        <li>Chicken Inasal</li>
                        <li>Halo Halo</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Top Cuisines</h3>
                    <ul>
                        <li>Luzon Dish</li>
                        <li>Visayas Dish</li>
                        <li>Mindanao Dish</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Our Branches</h3>
                    <ul>
                        <li>Mandaue City</li>
                        <li>Cebu City</li>
                        <li>Lapu-Lapu City</li>
                        <li>Talisay City</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
