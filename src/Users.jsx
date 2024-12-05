import React, { useState } from 'react';
import './Users.css';

const App = () => {
  const [user, setUser] = useState({
    userID: '0023',
    username: 'SuperJustin_Bryson78',
    email: 'justin@example.com',
    password: '********',
  });

  return (
    <div className="user-page">
      <div className="navbar">
        <div className="logo">HyperStep</div>

        <nav>
          <ul>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/kids">Kids</a>
            </li>
            <li>
              <a href="/brands">Brands</a>
            </li>
            <li>
              <a href="/sales">Sales</a>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <input type="text" placeholder="Search" />
          <span className="icon">&#x2764;</span>
          <span className="icon">&#128722;</span>
          <span className="inventory">LOGOUT</span>
        </div>
      </div>

      <main className="profile">
        <div className="profile-card">
          <div className="profile-image">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="avatar"
            />
          </div>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p className="user-id">User ID: {user.userID}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
