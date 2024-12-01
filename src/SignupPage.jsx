import React from 'react';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      {/* Left section */}
      <div className="left-section">
        <h1 className="brand">HyperStep</h1>
        <p className="tagline">SNEAKERS AND ATHLETIC SHOES</p>
      </div>

      {/* Right section */}
      <div className="right-section">
        <h2 className="heading">Sign Up</h2>
        <form className="form">
          <input type="text" placeholder="Username" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input type="password" placeholder="Confirm Password" className="input" />
          <button type="submit" className="join-button">Join Now</button>
        </form>
        <div className="or-separator">or</div>
        <div className="social-buttons">
          <button className="social-button">Continue with Google</button>
          <button className="social-button">Continue with Facebook</button>
          <button className="social-button">Continue with Twitter</button>
        </div>
        <p className="login-text">
          Already a user? <a href="#" className="login-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
