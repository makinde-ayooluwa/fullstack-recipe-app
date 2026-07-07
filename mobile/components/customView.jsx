import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ safe = false, style, children, ...restProps }) => {
    return safe ? (
        <SafeAreaView style={[styles.container, style]} {...restProps}>
            {children}
        </SafeAreaView>
    ) : (
        <View style={style} {...restProps}>
            {children}
        </View>
    )
}

export default CustomView

const styles = StyleSheet.create({
    container: {
        flex: 1, // Common practice for SafeAreaView to fill the screen
    },
})