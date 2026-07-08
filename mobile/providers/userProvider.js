import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { UserContext } from '../contexts/UserContext';

const UserProvider = ({ children }) => {
  const [user, setUserValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await SecureStore.getItemAsync('user');
        if (stored) {
          setUserValue(JSON.parse(stored));
        }
      } catch (err) {
        console.log('Failed to load stored user:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function setUser(newValue) {
    setUserValue(newValue);
    if (newValue) {
      await SecureStore.setItemAsync('user', JSON.stringify(newValue));
    } else {
      await SecureStore.deleteItemAsync('user');
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;