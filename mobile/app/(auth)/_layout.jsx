import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, Stack } from "expo-router";
import { UserContext } from '../../contexts/UserContext';
const AuthLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
      const {user, setUser} = useContext(UserContext);
      useEffect(()=>{
        setIsLoading(false);
      },[])
      useEffect(()=>{
        if(isLoading) return;
        if(user !== null && user !== ""){
          router.replace("/chats");
        }else{
          router.replace("/");
        }
      },[user]);
    return (
        <Stack screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "#005712ff" }, headerTintColor: "#fff", headerTitleAlign: "center", }}>
            <Stack.Screen name='login' options={{ title: "Login" }} />
            <Stack.Screen name='register' options={{ title: "Register" }} />
        </Stack>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})