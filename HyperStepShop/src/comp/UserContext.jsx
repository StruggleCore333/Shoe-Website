import React, { createContext, useContext, useState } from 'react';

// Create a User Context
const UserContext = createContext();

// UserProvider component to wrap around your application
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null); // Initially set to null

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser  = () => {
    return useContext(UserContext);
};