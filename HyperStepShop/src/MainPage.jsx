import React from 'react';
import './MainPage.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const MainPage = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>HyperStep</h2>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/login">
                <button className="login-button">
                  <FaUserCircle /> Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text">
        <h1>Step Into Style, Step Into Comfort.</h1>
        <h2>Step Up Your Style Game</h2>
        <h2>Shop Now at HyperStep</h2>
      </div>
    </>
  );
};

export default MainPage;
