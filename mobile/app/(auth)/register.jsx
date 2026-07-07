import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/authStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import useDimensions from '../../hooks/useDimension';
const RegisterScreen = () => {
    const { width, height } = useDimensions();
    const styles = authStyles['register'];
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", color: "#000", fontSize: 15, marginBottom: 10 }}>Sign up with</Text>
            <View style={styles.socialRegister}>
                {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                <AntDesign name='google' size={30} color={"red"} style={styles.socialIcon} />
                {/* </BlurView> */}
                {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                <AntDesign name='github' size={30} color={"red"} style={styles.socialIcon} />
                {/* </BlurView> */}
                {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                <Entypo name='facebook' size={30} color={"red"} style={styles.socialIcon} />
                {/* </BlurView> */}
            </View>
            <Text style={{ textAlign: "center", color: "#000", fontSize: 12.5, marginBottom: 10, marginTop: 20 }}>or continue with email</Text>
            <View style={[styles.loginCard, { width: width - 50 }]}>

            </View>
        </View>
    )
}

export default RegisterScreen