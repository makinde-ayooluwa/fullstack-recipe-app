import { ActivityIndicator, Alert, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { authStyles } from '../../styles/authStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import useDimensions from '../../hooks/useDimension';
import CustomInput from '../../components/customInput';
import { offlineBackendUri } from '../../constants/backendUri';
import { UserContext } from "../../contexts/UserContext"
import { router } from 'expo-router';
const RegisterScreen = () => {
    const { user, setUser } = useContext(UserContext);
    const { width, height } = useDimensions();
    const styles = authStyles['register'];
    const [isLoading, setIsLoading] = useState(false);
    const [registerData, setRegisterData] = useState({
        fullname: "",
        email: "",
        password: ""
    })
    const handleSubmit = async () => {
        setIsLoading(true);
        if (registerData.fullname.trim() === "") {
            Alert.alert("Register Error", "Full name is required");
            setIsLoading(false);
            return;
        }

        if (registerData.email.trim() === "") {
            Alert.alert("Register Error", "Email is required");
            setIsLoading(false);
            return;
        }

        if (registerData.password.trim() === "") {
            Alert.alert("Register Error", "Password is required");
            setIsLoading(false);
            return;
        }
        try {
            const response = await fetch(`${offlineBackendUri}/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            });
            console.log("Status:", response.status);

            const data = await response.json();
            if (data.status == "success") {
                // console.log("DATA >>>>",data);
                Alert.alert("Success", "Registration successful!");
                setIsLoading(false);
                // router.replace("/chats");
                setUser(JSON.stringify(data.data._id))
                console.log("Signed up as ", user);
            } else {
                console.log("DATA >>>>", data)
                Alert.alert("Error", "Registration error!" + JSON.stringify(data));
                setIsLoading(false);
            }
            // console.log(user);
        } catch (err) {
            console.log("TEMP ERR",err);
            setIsLoading(false);
            Alert.alert("Error", "Registration error!");
        }
        // ;
        // setIsLoading(false);
        // Continue with registration...
    };

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
                            <CustomInput
                                style={[styles.input, { width: width - 50 }]}
                                placeholder="John Doe"
                                onChangeText={(text) => setRegisterData({ ...registerData, fullname: text })}
                                value={registerData.fullname}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Email address</Text>
                            <CustomInput style={[styles.input, { width: width - 50 }]}
                                placeholder="johndoe@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(text) => setRegisterData({ ...registerData, email: text })}
                                value={registerData.email}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <CustomInput
                                style={[styles.input, { width: width - 50 }]}
                                placeholder="***********"
                                secureEntry
                                onChangeText={(text) => setRegisterData({ ...registerData, password: text })}
                                value={registerData.password}
                            />
                        </View>
                        <View style={styles.inputGroup}>
                            <Pressable onPress={() => !isLoading ? handleSubmit() : console.log("Can't click")} style={({ pressed }) => [styles.submit, isLoading && { backgroundColor: "gray" }, { width: width - 50 }]}>
                                {isLoading ? <ActivityIndicator color={"white"} /> : <Text
                                    style={{
                                        textAlign: "center",
                                        color: "#fff",
                                        fontSize: 20
                                    }}>Register</Text>}
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen