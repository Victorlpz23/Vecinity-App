import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AuthContext = createContext();

const restoreUserFromLocalStorage = () => {
  const user = localStorage.getItem('current-user');
  if (user) {
    return JSON.parse(user);
  } else {
    return undefined;
  }
};

function AuthStore({ children }) {
  const [user, setUser] = useState(restoreUserFromLocalStorage());
  const navigate = useNavigate();


  // useEffect(() => {
  //   async function fetchUser() {
  //     if (user) {
  //       await reloadUser();
  //     }
  //   }
  //   fetchUser();
  // }, []);

  const handleUserChange = (user) => {
    console.log('Updating user context', user);
    if (!user) {
      localStorage.removeItem('current-user');
      localStorage.removeItem('user-access-token');
    } else {
      localStorage.setItem('user-access-token', user.token);
      localStorage.setItem('current-user', JSON.stringify(user));
    }
    setUser(user);
  };

  // async function reloadUser() {
  //   const profile = await userService.get('me');
  //   handleUserChange({ ...profile, token: user.token });
  // }



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

