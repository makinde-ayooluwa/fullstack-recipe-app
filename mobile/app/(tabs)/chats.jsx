import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {Link} from "expo-router"
import CustomView from "../../components/customView";
import { UserContext } from '../../contexts/UserContext';
import { Header } from '@react-navigation/elements';
const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <CustomView safe>
        <Header >
          <Text>Header</Text>
        </Header>
    </CustomView>
  )
}

export default HomePage

const styles = StyleSheet.create({})