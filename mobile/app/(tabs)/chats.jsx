import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
import CustomView from "../../components/customView";
const HomePage = () => {
  return (
    <CustomView safe>
        <Text>Chats Page</Text>
    </CustomView>
  )
}

export default HomePage

const styles = StyleSheet.create({})