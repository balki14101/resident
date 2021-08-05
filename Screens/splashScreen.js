import React, { useEffect } from 'react'

import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import SplashBG from '../assets/images/splashBG.png'
import appLogo from '../assets/images/appLogo.png'
import splashBG from '../assets/images/bg.png'


export default function SplashScreen({ navigation }) {


    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth')
        }, 1000);
    },[]);



    return (
        <View style={styles.container}>
            <ImageBackground source={splashBG} style={{ width: '101%', height: '100%' }}>
                <View style={{ paddingTop: '70%', alignItems: 'center' }}>
                    <Image source={appLogo} style={{height:80,width:90}}></Image>
                </View>
            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    appName: {
        fontFamily: 'poppins_medium',
        fontSize: 37,
        paddingTop: 19,
    },
    appInfo: {
        fontFamily: 'poppins_light',
        fontSize: 16,
    }
})