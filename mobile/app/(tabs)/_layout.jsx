import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
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