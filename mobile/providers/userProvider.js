
import React, { useState } from 'react'
import { UserContext } from '../contexts/UserContext';

const UserProvider = ({ children }) => {
  const [user, setUserValue] = useState(null);
  function setUser(newValue) {
    setUserValue(newValue);
  }
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserProvider