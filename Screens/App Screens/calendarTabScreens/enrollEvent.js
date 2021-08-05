
import React, { useEffect, useState } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, BackHandler, Alert } from 'react-native'
import styles from './calendarStyles'
import logo from '../../../assets/images/appLogo.png'
import BGImage from '../../../assets/images/bg.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-styled-toast'
import { Wave } from 'react-native-animated-spinkit'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Provider from './providerEvents'
import Member from './memberEvents'
import { style } from 'styled-system'



export default function EnrollEvent() {

    const Tab = createMaterialTopTabNavigator();

    const [isLoading, setIsLoading] = useState(false);



    const route = useRoute();
    const navigation = useNavigation();
    const { toast } = useToast()



    return (

        <View>

            {isLoading &&
                <View style={{ height: '100%', width: '100%' }}>
                    <Wave size={100} color="#2CBB55" style={{ marginLeft: '35%', marginTop: '70%' }} />
                </View>
            }


            {!isLoading &&
                <View style={{ height: '100%' }}>



                    <ScrollView style={{ width: '100%', height: '100%' }}>
                        <Image source={BGImage} style={{ width: '100%', height: 150, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                        </Image>
                        <View style={{ alignItems: 'center', width: '100%', paddingTop: 15, marginTop: -150 }}>
                            <Text style={[styles.helloTxt, { fontSize: 30, fontFamily: 'proxima-nova-bold', width: '65%', textAlign: 'center', marginBottom: 10 }]}>Cultural Programs</Text>

                            <View style={[styles.upcomingConatiner, { alignItems: 'center' }]}>
                                <Text style={styles.label}>Your Name</Text>
                                <TextInput style={styles.enrollInput} placeholder="Name"></TextInput>
                                <Text style={styles.label}>Contact Number</Text>
                                <TextInput style={styles.enrollInput} placeholder="+91 - "></TextInput>
                                <Text style={styles.label}>Remarks</Text>
                                <TextInput multiline={true}
                                    numberOfLines={4} style={[styles.enrollInput,{height:80,textAlignVertical:'top'}]} placeholder="Name"></TextInput>

                                <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.enrollBtn,{backgroundColor:'#F57E4A'}]}>
                                    <Text style={[styles.detailsBtnTxt, { fontSize: 18 }]}>Enroll Event</Text>
                                </TouchableOpacity>

                            </View>
                        </View>




                    </ScrollView>

                </View>

            }

        </View>
    )
}
