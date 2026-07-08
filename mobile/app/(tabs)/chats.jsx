import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {Link} from "expo-router"
import CustomView from "../../components/customView";
import { UserContext } from '../../contexts/UserContext';
const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <CustomView safe>
        <Text>Chats Page</Text>
        <Text>User ID: {user}</Text>
    </CustomView>
  )
}

export default HomePage

const styles = StyleSheet.create({})