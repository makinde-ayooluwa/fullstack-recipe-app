import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { UserContext } from '../../contexts/UserContext'

const TabsLayout = () => {
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (user !== null && user !== "") {
            router.replace("/chats");
        }
    }, [user]);
    return (
        <Tabs screenOptions={
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#005712ff",
                    bottom: 12,
                    width: "95%",
                    alignSelf: "center",
                    borderRadius: 40
                },
                tabBarActiveTintColor: "#fff",
            }}>
            <Tabs.Screen name='chats' options={{
                title: "Chats",
                tabBarIcon: ({ focused }) => <Ionicons size={25} color={"#fff"} name={!focused ? 'chatbox-ellipses-outline' : "chatbox-ellipses"} />
            }} />
            <Tabs.Screen name='contacts' options={{ title: "Contacts", tabBarIcon: ({ focused }) => <Ionicons size={25} color={"#fff"} name={!focused ? 'call-outline' : "call"} /> }} />
            <Tabs.Screen name='profile' options={{ title: "Profile", tabBarIcon: ({ focused }) => <Ionicons size={25} color={"#fff"} name={!focused ? 'person-outline' : "person"} /> }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})