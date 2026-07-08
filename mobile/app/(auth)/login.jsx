import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { router } from 'expo-router';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (user !== null) {
            router.replace("/chats");
        }
    }, [user]);
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})