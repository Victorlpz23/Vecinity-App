import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthStore({ children }) {

  const [user, setUser] = useState();
  const navigate = useNavigate()

  const handleUserChange = (user) => {
    setUser(user);
    console.log(user)
  };

  const logout = () => {
    handleUserChange()
    navigate('/login')
  }

  return (
    <>
      <AuthContext.Provider value={{ user, onUserChange: handleUserChange, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthStore as default, AuthContext }

