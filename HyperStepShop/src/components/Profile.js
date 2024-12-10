import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const Profile = () => {
    const { token } = useContext(AuthContext);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Your JWT Token: {token}</p>
        </div>
    );
};

export default Profile;
