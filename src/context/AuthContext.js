import React from 'react';

// The AuthContext is created using the createContext function from React.
const AuthContext = React.createContext({
  isAuthenticated: true,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
