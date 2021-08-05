import React, { useEffect } from 'react'

import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import SplashBG from '../assets/images/appBG.png'
import appLogo from '../assets/images/appLogo.png'
import splashBG from '../assets/images/splashEthica.png'


export default function SplashScreen({ navigation }) {


    React.useEffect(() => {
       
       
    });


    return (
        <View style={styles.container}>
            <ImageBackground source={appBG} style={{ width: '101%', height: '100%' }}>
                <View style={{ paddingTop: '70%', alignItems: 'center', flexDirection:'row' }}>
                     
                     <View style={{ paddingTop: '70%', alignItems: 'center' }}>
                     
                          <Text style={{ marginTop: 30, fontSize: 12,fontFamily: 'poppins_light' }}>
                             I am comfortable reading this size
                          </Text>                                           
                    
                     </View>
                     
                     
                     <View style={{ paddingTop: '70%', alignItems: 'center' }}>
                     
                         <Text style={{ marginTop: 30, fontSize: 14,fontFamily: 'poppins_light' }}>
                             I am comfortable reading this size
                          </Text>                                          
                    
                     </View>
                                           
                    
                </View>
                
                <View style={{ paddingTop: '70%', alignItems: 'center', flexDirection:'row' }}>
                     
                     <View style={{ paddingTop: '70%', alignItems: 'center' }}>
                     
                          <Text style={{ marginTop: 30, fontSize: 16,fontFamily: 'poppins_light' }}>
                             I am comfortable reading this size
                          </Text>                                           
                    
                     </View>
                     
                     
                     <View style={{ paddingTop: '70%', alignItems: 'center' }}>
                     
                         <Text style={{ marginTop: 30, fontSize: 18,fontFamily: 'poppins_light' }}>
                             I am comfortable reading this size
                          </Text>                                          
                    
                     </View>
                                           
                    
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