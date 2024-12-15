import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useUser  } from './UserContext.jsx';

const User = () => {
    
    const [user, setUser ] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false); // State to toggle editing
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        // Fetch user data from the backend when the component mounts
        const fetchUserData = async () => {
            const {userId} = useUser(id); // Replace with the actual user ID from your authentication logic
            try {
                const response = await axios.get(`http://localhost:8081/api/user/${userId}`); // Use userId from context
                setUser (response.data);
                setNewUsername(response.data.name);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

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

    const handleDeleteAccount = async () => {
        const userId = user.id; // Get the user ID from the state
        try {
            await axios.delete(`http://localhost:8081/api/user/${userId}`);
            alert("Account deleted successfully!");
            navigate('/'); // Redirect to login page after deletion
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    };



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
                            <>
                                <button onClick={handleUpdateUser } className="btn btn-success">Update</button>
                            </>
                        )}
                        <button onClick={handleDeleteAccount} className="btn btn-danger">Delete Account</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default User;



