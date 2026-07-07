import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/authStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import useDimensions from '../../hooks/useDimension';
import CustomInput from '../../components/customInput';
const RegisterScreen = () => {
    const { width, height } = useDimensions();
    const styles = authStyles['register'];
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={{ textAlign: "center", color: "#000", fontSize: 15, marginBottom: 10 }}>Sign up with</Text>
                    <View style={styles.socialRegister}>
                        {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                        <AntDesign name='google' size={30} color={"red"} style={styles.socialIcon} />
                        {/* </BlurView> */}
                        {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                        <AntDesign name='github' size={30} color={"black"} style={styles.socialIcon} />
                        {/* </BlurView> */}
                        {/* <BlurView intensity={50} tint="light" style={styles.socialIcon}> */}
                        <Entypo name='facebook' size={30} color={"blue"} style={styles.socialIcon} />
                        {/* </BlurView> */}
                    </View>
                    <Text style={{ textAlign: "center", color: "#000", fontSize: 12.5, marginBottom: 10, marginTop: 20 }}>or continue with email</Text>
                    <View style={[styles.loginCard, { width: width - 50 }]}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Fullname</Text>
                            <CustomInput style={[styles.input, { width: width - 50 }]} placeholder="John Doe" />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Email address</Text>
                            <CustomInput style={[styles.input, { width: width - 50 }]}
                                placeholder="johndoe@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false} />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <CustomInput style={[styles.input, { width: width - 50 }]} placeholder="***********" secureEntry />
                        </View>
                        <View style={styles.inputGroup}>
                            <Pressable style={[styles.submit, { width: width - 50 }]}>
                                <Text style={{ textAlign: "center", color:"#fff", fontSize: 20 }}>Register</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen