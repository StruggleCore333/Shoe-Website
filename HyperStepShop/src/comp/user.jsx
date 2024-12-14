import React, { useState } from 'react';
import './style.css';

const User = () => {
  const [user] = useState({
    userID: '0023',
    username: 'SuperJustin_Bryson78',
    email: 'justin@example.com',
    password: '********',
  });

  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile-page">
      <main className="user-profile">
        <div className="user-profile-card">
          <div className="user-profile-image">
            <img
              src={profilePic}
              alt="Profile"
              className="user-avatar"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
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
