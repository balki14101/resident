
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



export default function EventDetails() {

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
                            <Text style={[styles.helloTxt, { fontSize: 30, fontFamily: 'proxima-nova-bold', width: '65%', textAlign: 'center',marginBottom:10 }]}>Cultural Programs</Text>

                            <View style={[styles.upcomingConatiner, { alignItems: 'center' }]}>
                                <Text style={[styles.eventSubHead, { fontSize: 18 }]}>Monday 14 December 2020</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='time' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 18 }]}>11:30 AM - 4:00 PM</Text>
                                </View>
                                <Text style={[styles.eventSubHead, { fontSize: 18, marginBottom: 5 }]}>Venue</Text>
                                <Text style={[styles.eventHead, { fontSize: 20, fontFamily: 'proxima-nova-bold' }]}>Stephan Hall</Text>
                                <Text style={[styles.eventSubHead, { fontSize: 18, marginTop: 5, marginBottom: 5 }]}>Details</Text>
                                <Text style={[styles.eventSubHead, { fontSize: 18, color: '#3B3A3A', width: '70%', textAlign: 'center' }]}>This is the details of the event taking place</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('enroll')} style={styles.enrollBtn}>
                                    <Text style={[styles.detailsBtnTxt,{fontSize:18}]}>Enroll Now</Text>
                                </TouchableOpacity>

                            </View>
                        </View>




                    </ScrollView>

                </View>

            }

        </View>
    )
}
