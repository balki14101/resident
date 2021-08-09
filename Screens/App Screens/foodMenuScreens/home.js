import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import styles from './culinaryStyles';
import logo from '../../../assets/images/appLogo.png';
import BGImage from '../../../assets/images/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useToast} from 'react-native-styled-toast';
import {Wave} from 'react-native-animated-spinkit';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isDeterminingLogin, setIsDeterminingLogin] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const {toast} = useToast();

  useEffect((async) => {
    (async () => {})();
  }, []);

  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };

  return (
    <View>
      {isLoading && (
        <View style={{height: '100%', width: '100%'}}>
          <Wave
            size={100}
            color="#2CBB55"
            style={{marginLeft: '35%', marginTop: '70%'}}
          />
        </View>
      )}

      {isDeterminingLogin && (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
          }}></View>
      )}

      {!isLoading && !isDeterminingLogin && (
        <View style={{height: '100%'}}>
          <Image
            source={BGImage}
            style={{
              width: '100%',
              height: '35%',
              alignItems: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}></Image>
          <ScrollView
            style={{position: 'absolute', width: '100%', height: '100%'}}>
            <View style={{alignItems: 'center', width: '100%', height: '100%'}}>
              <View
                style={{width: '100%', paddingHorizontal: 10, marginTop: '6%'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('dailyMenu')}
                  style={styles.welcomeContainer}>
                  <ImageBackground
                    source={{
                      uri:
                        'https://dukeofyorksquare.com/wp-content/uploads/2017/02/Pancakes-2.jpg',
                    }}
                    style={{height: 120, borderRadius: 10, overflow: 'hidden'}}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,.3)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.cardTxt}>
                        Daily Meal {'\n'}Features
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('alaCarte')}
                  style={styles.welcomeContainer}>
                  <ImageBackground
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-8dTbiLNTKc-gfdRRUpW0QTSQ5VN_eBjocMy3XswZt2LMeQKQe6VJtTvAp5K0Ewg-tY&usqp=CAU',
                    }}
                    style={{height: 120, borderRadius: 10, overflow: 'hidden'}}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,.3)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.cardTxt}>A La{'\n'}Carte Menu</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('orderHistory')}
                  style={styles.welcomeContainer}>
                  <ImageBackground
                    source={{
                      uri:
                        'https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7-510x541.jpg?resize=600%2C636',
                    }}
                    style={{height: 120, borderRadius: 10, overflow: 'hidden'}}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,.3)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.cardTxt}>Order History</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.communityContainer}>
                <Text style={styles.communityHead}>Credit Details </Text>
                {/* <Text style={styles.communityBold}>COVID Visitation hours have been extended this week</Text> */}
                <View style={styles.bookingContainer}>
                  <Text style={styles.bookingTxt}>
                    * Your remaining credits in Units is{' '}
                    <Text style={{fontFamily: 'proxima-nova-bold'}}>30</Text>{' '}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
