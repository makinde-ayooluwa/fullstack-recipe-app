import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/authStyles'
import { AntDesign } from '@expo/vector-icons';
const RegisterScreen = () => {
    const styles = authStyles['register'];
    return (
        <View style={styles.container}>
            <View style={styles.socialRegister}>
                <BlurView intensity={50} tint="light" style={styles.socialIcon}>
                    <AntDesign name='google' size={30} color={"red"} />
                </BlurView>
            </View>
        </View>
    )
}

export default RegisterScreen