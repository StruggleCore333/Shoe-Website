import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('jwt_token'); // Get JWT from localStorage

      if (!token) {
        setError('You are not authenticated!');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('/api/user-profile', {
          headers: {
            Authorization: `Bearer ${token}` // Send JWT token in headers
          }
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
            <p>Password: ******</p> {/* Masked for security */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
