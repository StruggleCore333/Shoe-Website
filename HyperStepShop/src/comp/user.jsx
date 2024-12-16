import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [user, setUser ] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('userId'); // Get user ID from local storage
            if (!userId) {
                navigate('/'); // Redirect to login if not logged in
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8081/api/user/${userId}`);
                setUser (response.data);
                setNewUsername(response.data.name);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        fetchUserData();
    }, [navigate]);

    const handleUpdateUser  = async () => {
        const userId = user.id; // Get the user ID from the state
        try {
            await axios.put(`http://localhost:8081/api/user/${userId}`, {
                name: newUsername,
                password: newPassword
            });
            alert("User  information updated successfully!");
            setUser (prev => ({ ...prev, name: newUsername, password: newPassword }));
            setIsEditing(false); // Stop editing after update
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    // New logout function
    const handleLogout = () => {
        // Clear user session (this could involve clearing tokens, user data, etc.)
        localStorage.removeItem('userId'); // Adjust based on your authentication method
        alert("You have been logged out.");
        navigate('/'); // Redirect to login page
    };

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

    const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');

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
                        <h2>User Profile</h2>
                        <label>Email: {user.email}</label>
                        <div>
                            <label>Username:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                />
                            ) : (
                                <span>{user.name}</span>
                            )}
                        </div>
                        <div>
                            <label>Password:</label>
                            {isEditing ? (
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            ) : (
                                <span>******</span>
                            )}
                        </div>
                        <button onClick={() => setIsEditing(!isEditing)} className="btn btn-primary">
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                        {isEditing && (
                            <button onClick={handleUpdateUser } className="btn btn-success">Update</button>
                        )}
                        {/* Change here: from Delete Account to Logout */}
                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default User;