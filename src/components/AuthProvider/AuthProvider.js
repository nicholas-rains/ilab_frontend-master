import React, { useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

// AuthProvider is a component that provides authentication functionality to its children using the AuthContext.
function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem('isAuthenticated') === 'true'
    );

    // The login function takes a username and password as arguments and checks if they match the hardcoded values 'test' and 'test'.
    const login = (username, password) => {
        if (username === 'DevUser' && password === 'dev') {
            setIsAuthenticated(true);
            sessionStorage.setItem('isAuthenticated', 'true');
        }
    };
    // The logout function sets isAuthenticated to false and returns false.
    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isAuthenticated');
    };

    // AuthProvider useEffect hook that checks if the user is authenticated when the component is mounted.
    useEffect(() => {
        const isAuthenticatedInSessionStorage = sessionStorage.getItem('isAuthenticated');
        setIsAuthenticated(isAuthenticatedInSessionStorage === 'true');
    }, []);

    // The AuthProvider component provides the isAuthenticated, login, and logout functions to its children using the AuthContext.Provider component.
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
