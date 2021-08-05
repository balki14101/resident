import React, { useEffect, useState } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, BackHandler, Alert } from 'react-native'
import styles from './culinaryStyles'
import logo from '../../../assets/images/appLogo.png'
import BGImage from '../../../assets/images/bg.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-styled-toast'
import { Wave } from 'react-native-animated-spinkit'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'


export default function OrderHistory() {


    const [isLoading, setIsLoading] = useState(false);

    console.log('mertt')
    const configError = {
        toastStyles: {
            bg: 'red',
            borderRadius: 16
        },
        color: 'white',
        iconColor: 'white',
        iconFamily: 'Entypo',
        iconName: 'info',
        closeButtonStyles: {
            px: 4,
            bg: 'white',
            borderRadius: 16
        },
        closeIconColor: 'red',
        hideAccent: true
    };

    const configSuccess = {
        toastStyles: {
            bg: 'green',
            borderRadius: 16
        },
        color: 'white',
        iconColor: 'white',
        iconFamily: 'Entypo',
        iconName: 'info',
        closeButtonStyles: {
            px: 4,
            bg: 'darkgrey',
            borderRadius: 16
        },
        closeIconColor: 'white',
        hideAccent: true
    };

    const route = useRoute();
    const navigation = useNavigation();
    const { toast } = useToast()


    useEffect((async) => {

        (async () => {


        })();

    }, []);






    return (

        <View>

            {isLoading &&
                <View style={{ height: '100%', width: '100%' }}>
                    <Wave size={100} color="#2CBB55" style={{ marginLeft: '35%', marginTop: '70%' }} />
                </View>
            }


            {!isLoading &&
                <View style={{ height: '100%' }}>

                    <Image source={BGImage} style={{ width: '100%', height: 120, alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    </Image>
                    <ScrollView style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <View style={{ alignItems: 'flex-start', width: '100%', height: '100%', paddingHorizontal: 15 }}>

                            <Text style={[styles.dateHead, { fontSize: 24, marginTop: 25 }]}>Order History</Text>


                            <View style={{ width: '100%', marginTop: 10, marginBottom: 15 }}>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, paddingHorizontal: 15, height: 'auto' }]}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.historyHead}>Order Id : 123765</Text>
                                        <Text style={[styles.itemTxt]}>Date : 12-7-2021</Text>
                                    </View>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Payment status : Paid</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Rosemary Browned Butter - 2 Nos</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5, fontSize: 16, color: 'black' }]}>Order Total : $ 120</Text>
                                </View>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, paddingHorizontal: 15, height: 'auto' }]}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.historyHead}>Order Id : 123765</Text>
                                        <Text style={[styles.itemTxt]}>Date : 12-7-2021</Text>
                                    </View>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Payment status : Paid</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Rosemary Browned Butter - 2 Nos</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5, fontSize: 16, color: 'black' }]}>Order Total : $ 120</Text>
                                </View>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, paddingHorizontal: 15, height: 'auto' }]}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.historyHead}>Order Id : 123765</Text>
                                        <Text style={[styles.itemTxt]}>Date : 12-7-2021</Text>
                                    </View>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Payment status : Paid</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5 }]}>Rosemary Browned Butter - 2 Nos</Text>
                                    <Text style={[styles.itemTxt, { marginTop: 5, fontSize: 16, color: 'black' }]}>Order Total : $ 120</Text>
                                </View>


                            </View>

                        </View>

                    </ScrollView>

                </View>

            }

        </View>
    )
}
