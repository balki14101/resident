import React, { useState,useEffect } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground,BackHandler } from 'react-native'
import styles from './authstyles'
import logo from '../../assets/images/appLogo.png'
import BGImage from '../../assets/images/bg.png'
import axios from 'axios'
import { Circle } from 'react-native-animated-spinkit'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({ navigation }) {
    const [onLoading, setOnLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    const backAction = () => {
        if (navigation.isFocused()) {
            BackHandler.exitApp()
            return true;
        }
    };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    }, []);

    const submit = async () => {
        try {
            var formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            setOnLoading(true)
            const { data } = await axios.post(`https://residentnow-backend.trikaradev.xyz/api/login`, formData)
            setOnLoading(false)
            await AsyncStorage.setItem('user', JSON.stringify(data.UserInfo))
            console.log(data)
            navigation.navigate('App')
        } catch (error) {
            setOnLoading(false)
            console.log(error.response && error.response.data.message ? error.response.data.message : error.message);

        }

    }
    return (

        <ImageBackground source={BGImage} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginTop: '25%' }}>
                <Image source={logo} style={{ width: 42, height: 35, marginRight: 20 }} />

            </View>
            <View style={styles.loginContainer}>
                <Text style={{ paddingTop: 21, fontSize: 18, fontFamily: 'poppins_light', color: '#616D2F' }}>Login</Text>
                <TextInput
                    placeholder="Email Address"
                    onChangeText={setEmail}
                    style={styles.inputContainer}
                    keyboardType="email-address" />
                <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={[styles.inputContainer, { marginTop: 29 }]}
                    secureTextEntry={true} />

            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={submit}>
                {onLoading &&
                    <View style={{ height: '100%', width: '100%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                        <Circle size={30} color="white" />
                    </View>
                }
                {!onLoading &&
                    <Text style={styles.btnText}>LOGIN</Text>
                }
            </TouchableOpacity>
            



        </ImageBackground>
    )
}

