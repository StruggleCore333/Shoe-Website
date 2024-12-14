import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About HyperStep</h1>
        <p>Your Ultimate Destination for Sports Shoes</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At HyperStep, we are passionate about sports and providing athletes, runners, and active individuals with the best footwear. Our mission is to bring top-quality sports shoes that cater to every sport, style, and budget. Whether you're looking for running shoes, basketball sneakers, or casual athletic wear, we've got something for everyone.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Values</h2>
          <p>
            We believe in quality, comfort, and performance. Our team works tirelessly to offer products from the leading brands in sports footwear, ensuring that every step you take is supported by the best. We are committed to delivering excellent customer service and making your shopping experience seamless and enjoyable.
          </p>
        </div>

        <div className="about-text">
          <h2>Why Choose HyperStep?</h2>
          <ul>
            <li>Wide Range of Sports Footwear</li>
            <li>Quality and Durability</li>
            <li>Affordable Prices</li>
            <li>Fast Shipping & Easy Returns</li>
            <li>Customer Satisfaction Guarantee</li>
          </ul>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our History</h2>
          <p>
            HyperStep was founded in 2015 with the goal of bringing high-quality sports footwear to athletes of all levels. From humble beginnings, we have grown into one of the leading online destinations for athletic shoes. Our team is dedicated to bringing you the best in style, performance, and innovation.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide athletes and active individuals with the best sports shoes that deliver on performance, comfort, and style. At HyperStep, we are driven by our passion for sport and our desire to help you perform at your best.
          </p>
        </div>

        <div className="about-text">
          <h2>Meet The Team</h2>
          <p>
            HyperStep is built by a team of sports enthusiasts, industry experts, and passionate individuals who believe in the power of great footwear. Our team is dedicated to sourcing the best brands, providing stellar customer support, and ensuring a seamless shopping experience for our customers.
          </p>
        </div>
      </section>

      <section className="about-content">

        <div className="about-text">
          <h2>Our Commitment to Sustainability</h2>
          <p>
            At HyperStep, we believe in giving back to the planet. That's why we are committed to sustainability by offering eco-friendly shoe options, reducing packaging waste, and partnering with brands that prioritize environmental responsibility.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Join us and step into a world of performance, comfort, and style at HyperStep!</p>
      </footer>
    </div>
  );
};

export default AboutUs;