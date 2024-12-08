import React, { useState } from 'react';
import './style.css';

const User = () => {
  const [user, setUser] = useState({
    userID: '0023',
    username: 'SuperJustin_Bryson78',
    email: 'justin@example.com',
    password: '********',
  });

  return (
    <div className="user-profile-page">
      <main className="user-profile">
        <div className="user-profile-card">
          <div className="user-profile-image">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="user-avatar"
            />
          </div>
          <div className="user-profile-info">
            <h2>{user.username}</h2>
            <p className="user-id">User ID: {user.userID}</p>
            <p>Email: {user.email}</p>
            <p>Password: ******</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
