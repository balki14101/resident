
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
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Provider from './providerEvents'
import Member from './memberEvents'



export default function DailyMenu() {

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
                        <Image source={BGImage} style={{ width: '100%', height: 250, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        </Image>
                        <View style={{ alignItems: 'center', width: '100%', paddingTop: 15, marginTop: -250 }}>
                            <Text style={styles.helloTxt}>Hello Mr Mark,</Text>
                            <Text style={[styles.helloTxt, { fontSize: 18, fontFamily: 'proxima-nova-light' }]}>The day is<Text style={{ fontSize: 24, fontFamily: 'proxima-nova-semiBold' }}> Thursday</Text></Text>
                            <Text style={[styles.helloTxt, { fontSize: 18, fontFamily: 'proxima-nova-light' }]}>Current temperature is<Text style={{ fontSize: 24, fontFamily: 'proxima-nova-semiBold' }}> 31 °C</Text></Text>
                            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, width: '92%', marginTop: 20, elevation: 5 }}>
                                <CalendarPicker
                                    startFromMonday={true}
                                    // allowRangeSelection={true}
                                    weekdays={['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']}
                                    months={['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]}
                                    previousTitle="<"
                                    nextTitle=">"
                                    monthTitleStyle={{ fontSize: 22 }}
                                    yearTitleStyle={{ fontSize: 22 }}

                                    previousTitleStyle={{ paddingLeft: 60, fontSize: 22 }}
                                    nextTitleStyle={{ paddingRight: 60, fontSize: 22 }}
                                    todayBackgroundColor="transparent"
                                    selectedDayColor="#BEC797"
                                    todayTextStyle={{ color: '#DBA251', fontFamily: 'proxima-nova-semiBold' }}
                                    selectedDayTextColor="white"
                                    scaleFactor={400}
                                    textStyle={{
                                        fontFamily: 'proxima-nova-regular',
                                        color: '#3B3A3A',
                                    }}
                                    // onDateChange={onDateChange}
                                    // dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0, }}
                                    dayLabelsWrapper={{ color: '#DBA251', borderBottomWidth: 0, borderTopWidth: 0 }}

                                />
                                <TouchableOpacity style={styles.addEventBtn}>
                                    <Text style={styles.addEventTxt}>Add Event</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.upcomingConatiner}>
                                <Text style={styles.upcomingHead}>My Upcoming Events</Text>
                                <View style={styles.eventBox}>
                                    <Icon name="list-alt" size={30} style={{ color: '#616D2F' }}></Icon>
                                    <View style={{ paddingLeft: 10, marginLeft: 10, borderLeftColor: '#616D2F', borderLeftWidth: 1 }}>
                                        <Text style={styles.eventTime}>Today 1:00 AM</Text>
                                        <Text style={styles.eventTxt}>Meal Menu or the Day</Text>
                                    </View>
                                </View>
                                <View style={styles.eventBox}>
                                    <Icon name="list-alt" size={30} style={{ color: '#616D2F' }}></Icon>
                                    <View style={{ paddingLeft: 10, marginLeft: 10, borderLeftColor: '#616D2F', borderLeftWidth: 1 }}>
                                        <Text style={styles.eventTime}>Today 1:00 AM</Text>
                                        <Text style={styles.eventTxt}>Medical Checkup with Dr Susan</Text>
                                    </View>
                                </View>
                                <View style={styles.eventBox}>
                                    <FontAwesome5Icon name="handshake-o" size={24} style={{ color: '#616D2F', marginTop: 3 }}></FontAwesome5Icon>
                                    <View style={{ paddingLeft: 10, marginLeft: 10, borderLeftColor: '#616D2F', borderLeftWidth: 1 }}>
                                        <Text style={styles.eventTime}>Today 1:00 AM</Text>
                                        <Text style={styles.eventTxt}>Visitation by Son</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <Tab.Navigator
                                initialRouteName="Provider"
                                style={{ marginTop: 0, paddingTop: 0, height: '100%' }}
                                tabBarOptions={{
                                    indicatorStyle: { height: 4, backgroundColor: '#616D2F', borderRadius: 5 },
                                    // scrollEnabled: true,
                                    activeTintColor: '#616D2F',
                                    inactiveTintColor: '#3B3A3A',
                                    labelStyle: { fontSize: 18, fontFamily: 'proxima-nova-regular', marginTop: 0, textTransform: 'capitalize' },
                                    tabStyle: { height: 40, marginTop: 0, paddingTop: 0 },
                                    style: { height: 40, paddingTop: 0, backgroundColor: 'transparent', elevation: 0, marginBottom: 15 },

                                }}
                            >
                                <Tab.Screen
                                    name="providerEvents"
                                    component={Provider}
                                    options={{ tabBarLabel: 'Provider Events' }}
                                />
                                <Tab.Screen
                                    name="Professional"
                                    component={Member}
                                    options={{ tabBarLabel: 'Member Events' }}
                                />


                            </Tab.Navigator>

                        </View>



                    </ScrollView>

                </View>

            }

        </View>
    )
}
