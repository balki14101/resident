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
import Addbutton from './addButton'


export default function AlaCarte() {


    const [isLoading, setIsLoading] = useState(false);

   

    const route = useRoute();
    const navigation = useNavigation();






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
                        <View style={{ alignItems: 'center', width: '100%', height: '100%' }}>

                            <Text style={styles.dateHead}>Monday</Text>
                            <Text style={styles.dateSubHead}>March 08 2021</Text>

                            <View style={{ width: '100%', paddingHorizontal: 10, marginTop: '8%', marginBottom: 15 }}>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, alignItems: 'center', height: 'auto' }]}>
                                    <Text style={styles.categoryHead}>Appetizer</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Butterscotch Squash Ravioli</Text>
                                        <Addbutton ></Addbutton>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Squash Mix</Text>
                                        <Addbutton ></Addbutton>
                                    </View>



                                </View>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, alignItems: 'center', height: 'auto' }]}>
                                    <Text style={styles.categoryHead}>Salad</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Butterscotch Squash Ravioli</Text>
                                        <Addbutton ></Addbutton>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Squash Mix</Text>
                                        <Addbutton ></Addbutton>
                                    </View>

                                </View>
                                <View style={[styles.welcomeContainer, { paddingVertical: 14, alignItems: 'center', height: 'auto' }]}>
                                    <Text style={styles.categoryHead}>Main Course</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Butterscotch Squash Ravioli</Text>
                                        <Addbutton ></Addbutton>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%',marginTop:10 }}>
                                        <Text style={styles.itemTxt}>Squash Mix</Text>
                                        <Addbutton ></Addbutton>
                                    </View>
                                </View>


                            </View>
                            <TouchableOpacity style={[styles.loginBtn, { width: 240 }]} onPress={() => navigation.navigate('placeOrder')}>
                                <Text style={styles.btnText}>Proceed</Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                </View>

            }

        </View>
    )
}
