import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ safe = false, scroll = false, style, children, ...restProps }) => {
    if (safe) {
        return <SafeAreaView style={[styles.container, style]} {...restProps}>
            {children}
        </SafeAreaView>
    }
    if (scroll) {
        return <ScrollView style={[styles.container, style]} {...restProps}>
            {safe ? (<>
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </>) : (
                { children }
            )}
        </ScrollView>
    }
    return (
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