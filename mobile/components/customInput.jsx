import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({style,secureEntry, ...props}) => {
  return (
    <TextInput style={[styles.input,style]} {...props} secureTextEntry={secureEntry} />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        padding: 15,
        borderWidth: 2,
        borderColor:"gray",
        borderRadius: 25,
    }
})