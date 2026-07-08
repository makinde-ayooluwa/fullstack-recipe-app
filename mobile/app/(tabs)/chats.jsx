import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Link, router } from "expo-router"
import CustomView from "../../components/customView";
import { UserContext } from '../../contexts/UserContext';
import { Header } from '@react-navigation/elements';
const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user !== null && user !== "") {
      router.replace("/chats");
    }
  }, [user]);
  setUser('6a4e317cea017d7213a05656');
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