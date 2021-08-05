import React, { useEffect, useState } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, BackHandler, Alert } from 'react-native'
import styles from './authstyles'
import logo from '../../assets/images/appLogo.png'
import BGImage from '../../assets/images/bg.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-styled-toast'
import { Wave } from 'react-native-animated-spinkit'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'


export default function Register() {


  const [isLoading, setIsLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isDeterminingLogin, setIsDeterminingLogin] = useState(false);

 

  const route = useRoute();
  const navigation = useNavigation();
  const { toast } = useToast()


 




  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };


  return (

    <View>

      {isLoading &&
        <View style={{ height: '100%', width: '100%' }}>
          <Wave size={100} color="#2CBB55" style={{ marginLeft: '35%', marginTop: '70%' }} />
        </View>
      }

      {isDeterminingLogin &&
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>

        </View>
      }

      {!isLoading && !isDeterminingLogin &&
        <ScrollView >

          <ImageBackground source={BGImage} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginTop: '15%' }}>
              <Image source={logo} style={{ width: 42, height: 35, marginRight: 20 }} />

            </View>
            <View style={styles.loginContainer}>

              <Text style={{ paddingTop: 20, fontSize: 18, fontFamily: 'poppins_light', color: '#616D2F' }}>SIGN UP</Text>

              <TextInput
                placeholder="First Name"
                style={styles.inputContainer}
                onChangeText={text => handleFirstNameChange(text)}
              />

              <TextInput
                placeholder="Last Name"
                style={styles.inputContainer}
                onChangeText={text => handleLastNameChange(text)}
              />

              <TextInput
                placeholder="Email"
                style={styles.inputContainer}
                onChangeText={text => handleEmailChange(text)}
              />

              <TextInput
                placeholder="Contact Number"
                style={styles.inputContainer}
                onChangeText={text => handleContactNumberChange(text)}
              />
              <TextInput
                placeholder="Residence PIN"
                style={styles.inputContainer}
                onChangeText={text => handleConfirmPasswordChange(text)}
              />
              <TextInput
                placeholder="Password"
                style={styles.inputContainer}
                onChangeText={text => handlePasswordChange(text)}
              />

              <TextInput
                placeholder="Confirm Password"
                style={styles.inputContainer}
                onChangeText={text => handleConfirmPasswordChange(text)}
              />

            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('login')}>
              <Text style={styles.btnText}>SIGN UP</Text>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>

      }

    </View>
  )
}
