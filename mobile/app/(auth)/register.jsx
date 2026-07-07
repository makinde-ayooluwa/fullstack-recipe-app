import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/authStyles'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
const RegisterScreen = () => {
    const styles = authStyles['register'];
    return (
        <View style={styles.container}>
            <View style={styles.socialRegister}>
                <AntDesign name='google' size={30} color={"red"} style={styles.socialIcon} />
            </View>
        </View>
    )
}

export default RegisterScreen