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
        <p>Phone: +9277019076</p>
        <p>Email: <a href="mailto:HyperStep@gmail.com">HyperStep@gmail.com</a></p>
        <p>Follow us on Facebook</p>
    </div>
    <div className="footer-section">
        <h3>Explore Sports</h3>
        <ul>
            <li>Basketball</li>
            <li>Football</li>
            <li>Running</li>
            <li>GYM & Training</li>
            <li>Tennis</li>
            <li>Golf</li>
            <li>Cycling</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Popular Brands</h3>
        <ul>
            <li>NIKE</li>
            <li>Adidas</li>
            <li>Puma</li>
            <li>Anta</li>
            <li>New Balance</li>
            <li>Under Armor</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Our Locations</h3>
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