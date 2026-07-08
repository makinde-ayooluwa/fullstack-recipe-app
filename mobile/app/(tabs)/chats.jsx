import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Link } from "expo-router"
import CustomView from "../../components/customView";
import { UserContext } from '../../contexts/UserContext';
import { Header } from '@react-navigation/elements';
const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <CustomView safe scroll>
      <View style={styles.header}>
        <Text>User ID: {user}</Text>
        <Link href={"/"}>
        <Text>Home</Text></Link>
      </View>
    </CustomView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  header: {

  }
})