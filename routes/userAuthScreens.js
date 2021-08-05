import React,{useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/Auth Screens/login'
import Register from '../Screens/Auth Screens/register'
import VerifyOTP from '../Screens/Auth Screens/enterResidencePIN'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthStack = createStackNavigator()

export default function AuthStackScreen() {

    const navigation = useNavigation();
    
    useEffect(() => {

        const fetchData = async()=>{
            const data = JSON.parse(await AsyncStorage.getItem('user'))
            if (data) {
                navigation.navigate('App')
            }
        }
        fetchData();
        
    }, []);
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="login" component={LoginScreen} options={{ title: '', headerLeft: null }}/>
            <AuthStack.Screen name="verifyOTP" component={VerifyOTP} options={{ title: '', headerLeft: null }}/>
        </AuthStack.Navigator>
    );
}