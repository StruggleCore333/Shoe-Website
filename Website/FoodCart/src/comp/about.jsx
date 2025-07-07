import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About FoodExpress</h1>
        <p>Your Ultimate Destination for Flavor</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At NCFood Express, we are foodies at heart. From quick bites to gourmet feasts, we serve meals that spark joy and satisfy cravings. Whether you're a burger lover or a vegan explorer, we have something sizzling for you.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Values</h2>
          <p>
            We believe in quality, affordability, and great taste. Our chefs and partners use only the freshest ingredients to craft dishes that speak to the soul. We’re committed to delivering happiness on every plate.
          </p>
        </div>

        <div className="about-text">
          <h2>Why Choose FoodExpress?</h2>
          <ul>
            <li>Wide Variety of Dishes</li>
            <li>Fresh & Locally Sourced Ingredients</li>
            <li>Fast Delivery</li>
            <li>Customer Satisfaction First</li>
            <li>Affordable Prices</li>
          </ul>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2020, NCFoodExpress began as a small food truck and quickly became a local favorite. Now, we serve thousands of happy customers through our website, bringing delicious food straight to your doorstep.
          </p>
        </div>

        <div className="about-text">
          <h2>Meet Our Team</h2>
          <p>
            Our team includes passionate chefs, logistics experts, and customer service champs who all share one mission making you full and happy.
          </p>
        </div>

        <div className="about-text">
          <h2>Committed to Sustainability</h2>
          <p>
            We use eco-friendly packaging, partner with sustainable farms, and aim to reduce food waste across our operations.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Join us and taste the joy with NCFoodExpress!</p>
      </footer>
    </div>
  );
};

export default AboutUs;
