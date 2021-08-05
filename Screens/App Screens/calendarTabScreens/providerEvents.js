
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


export default function Provider() {

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
                <View style={{ height: '100%', width: '100%' }}>


                    <ScrollView style={{ width: '100%' }}>
                        <View style={styles.eventsConatiner}>
                            <Text style={styles.eventHead}>Fitness Session</Text>
                            <Text style={styles.eventSubHead}>Lesile Retirement Community</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='time' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>11:30 PM</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='calendar' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>14 December 2020</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('details')} style={styles.detailsBtn}>
                                <Text style={styles.detailsBtnTxt}>View Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rsvpBtn}>
                                <Text style={styles.detailsBtnTxt}>RSVP</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.eventsConatiner}>
                            <Text style={styles.eventHead}>Fitness Session</Text>
                            <Text style={styles.eventSubHead}>Lesile Retirement Community</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='time' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>11:30 PM</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='calendar' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>14 December 2020</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('details')} style={styles.detailsBtn}>
                                <Text style={styles.detailsBtnTxt}>View Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rsvpBtn}>
                                <Text style={styles.detailsBtnTxt}>RSVP</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.eventsConatiner}>
                            <Text style={styles.eventHead}>Fitness Session</Text>
                            <Text style={styles.eventSubHead}>Lesile Retirement Community</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='time' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>11:30 PM</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='calendar' size={15} style={{ color: '#00000029', marginTop: 5, marginRight: 4 }}></Icon>
                                    <Text style={[styles.eventHead, { fontSize: 17 }]}>14 December 2020</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('details')} style={styles.detailsBtn}>
                                <Text style={styles.detailsBtnTxt}>View Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rsvpBtn}>
                                <Text style={styles.detailsBtnTxt}>RSVP</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>

                </View>

            }

        </View>
    )
}
