import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from "@/assets/images/favicon.png";
import { router } from 'expo-router';
import useDimensions from "../hooks/useDimension";
const { width, height } = useDimensions();
const Index = () => {
  return (
    <View style={styles.index}>
      {/* LOGO */}
      <View>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.title}>Chat App</Text>
      </View>
      {/* LOGO */}
      <View style={styles.links}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
          onPress={()=>router.push("/register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
          styles.button,
          { backgroundColor: "transparent" },
          pressed && styles.pressed,
        ]}
        onPress={()=>router.push("/login")}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  image: {
    alignSelf: "center",
    marginBottom: 10
  },
  title: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30
  },
  links: {
    position: "absolute",
    bottom: 100,
    display: "flex"
  },
  button: {
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    width: width - 100,
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  pressed: {
    backgroundColor: "gray"
  }
})