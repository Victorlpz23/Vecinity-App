import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthStore({ children }) {

  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleUserChange = (user) => {
    console.log('Updating user context', user);
    if (!user) {
      localStorage.removeItem('user-access-token');
    } else {
      localStorage.setItem('user-access-token', user.token);
    }
    setUser(user);
  };

  const logout = () => {
    handleUserChange();
    navigate('/login');
  };

  return (
    <>
      <AuthContext.Provider value={{ user, onUserChange: handleUserChange, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthStore as default, AuthContext }

