import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left section */}
      <div className="left-section">
        <h1 className="brand">HyperStep</h1>
        <p className="tagline">SNEAKERS AND ATHLETIC SHOES</p>
      </div>

      {/* Right section */}
      <div className="right-section">
        <h2 className="heading">Login</h2>
        <form className="form">
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <p className="sign-up-text">
            Don’t have an account? <a href="#" className="sign-up-link">Sign up</a>
          </p>
        </form>
        <div className="or-separator">or</div>
        <div className="social-buttons">
          <button className="social-button">Continue with Google</button>
          <button className="social-button">Continue with Facebook</button>
          <button className="social-button">Continue with Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
