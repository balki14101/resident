import React from 'react'

import { View, Text, Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import styles from './authstyles'
import logo from '../../assets/images/appLogo.png'
import BGImage from '../../assets/images/bgStyle_1.png'



export default function EnterResidencePIN({ navigation }) {
    return (

        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        
            <TextInput
                    placeholder="Password"
                    style={[styles.inputContainer, { marginTop: 29 }]}
                    secureTextEntry={true} />
                    
            <TouchableOpacity style={[styles.loginBtn, { backgroundColor: '#3397F8', marginTop: 13 }]} 
                    // onPress={submitResidencePIN}
                    >
                <Text style={styles.btnText}>Submit Residence PIN</Text>
            </TouchableOpacity>        
            
        </View>
    )
}

