import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  BackHandler,
  Alert,
  StyleSheet,
} from 'react-native';
import styles from './culinaryStyles';
import logo from '../../../assets/images/appLogo.png';
import BGImage from '../../../assets/images/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useToast} from 'react-native-styled-toast';
import {Wave} from 'react-native-animated-spinkit';
import {useNavigation} from '@react-navigation/native';
import Addbutton from './addButton';

const card = [
  {
    title: 'Appetizer',
    itemimage1:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190725-delish-butternut-squash-ravioli-ehg-vertical-1-1565301914.png?crop=1.00xw:0.667xh;0,0.108xh&resize=480:*',
    itemname1: 'Butterscotch Squash Ravioli',
    itemimage2:
      'https://www.liquor.com/thmb/K6FH9cAkpEPEF3YWsQs8e2OrSA8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/butternut-squash-old-fashioned-720x720-primary-4fae50694f0546f093c450e208fd213f.jpg',
    itemname2: 'Squash Mix',
  },
  {
    title: 'Salad',
    itemimage1:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190725-delish-butternut-squash-ravioli-ehg-vertical-1-1565301914.png?crop=1.00xw:0.667xh;0,0.108xh&resize=480:*',
    itemname1: 'Butterscotch Squash Ravioli',
    itemimage2:
      'https://www.liquor.com/thmb/K6FH9cAkpEPEF3YWsQs8e2OrSA8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/butternut-squash-old-fashioned-720x720-primary-4fae50694f0546f093c450e208fd213f.jpg',
    itemname2: 'Squash Mix',
  },
  {
    title: 'Main Course',
    itemimage1:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190725-delish-butternut-squash-ravioli-ehg-vertical-1-1565301914.png?crop=1.00xw:0.667xh;0,0.108xh&resize=480:*',
    itemname1: 'Butterscotch Squash Ravioli',
    itemimage2:
      'https://www.liquor.com/thmb/K6FH9cAkpEPEF3YWsQs8e2OrSA8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/butternut-squash-old-fashioned-720x720-primary-4fae50694f0546f093c450e208fd213f.jpg',
    itemname2: 'Squash Mix',
  },
];

export default function DailyMenu() {
  const [isLoading, setIsLoading] = useState(false);

  console.log('mertt');
  const configError = {
    toastStyles: {
      bg: 'red',
      borderRadius: 16,
    },
    color: 'white',
    iconColor: 'white',
    iconFamily: 'Entypo',
    iconName: 'info',
    closeButtonStyles: {
      px: 4,
      bg: 'white',
      borderRadius: 16,
    },
    closeIconColor: 'red',
    hideAccent: true,
  };

  const configSuccess = {
    toastStyles: {
      bg: 'green',
      borderRadius: 16,
    },
    color: 'white',
    iconColor: 'white',
    iconFamily: 'Entypo',
    iconName: 'info',
    closeButtonStyles: {
      px: 4,
      bg: 'darkgrey',
      borderRadius: 16,
    },
    closeIconColor: 'white',
    hideAccent: true,
  };

  const route = useRoute();
  const navigation = useNavigation();
  const {toast} = useToast();

  useEffect((async) => {
    (async () => {})();
  }, []);

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

      {!isLoading && (
        <View style={{height: '100%'}}>
          <Image
            source={BGImage}
            style={{
              width: '100%',
              height: 120,
              alignItems: 'center',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}></Image>
          <ScrollView
            style={{position: 'absolute', width: '100%', height: '100%'}}>
            <View style={{alignItems: 'center', width: '100%', height: '100%'}}>
              <Text style={styles.dateHead}>Monday</Text>
              <Text style={styles.dateSubHead}>March 08 2021</Text>

              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 10,
                  marginTop: 32,
                  marginBottom: 15,
                }}>
                {card.map((item) => {
                  return (
                    <View
                      style={[
                        styles.welcomeContainer,
                        {paddingVertical: 14, alignItems: 'center'},
                      ]}>
                      <Text style={styles.categoryHead}>{item.title}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          width: '90%',
                          marginTop: 10,
                          // backgroundColor: 'red',
                        }}>
                        <Image
                          source={{uri: item.itemimage1}}
                          style={styles.itemImage}
                        />
                        <View style={styles.itemTxtView}>
                          <Text style={styles.itemTxt}>{item.itemname1}</Text>
                        </View>
                        <Addbutton />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          width: '90%',
                          marginTop: 10,
                        }}>
                        <Image
                          source={{uri: item.itemimage2}}
                          style={styles.itemImage}
                        />
                        <View style={styles.itemTxtView}>
                          <Text style={styles.itemTxt}>{item.itemname2}</Text>
                        </View>
                        <Addbutton />
                      </View>
                    </View>
                  );
                })}
              </View>
              <TouchableOpacity
                style={[styles.loginBtn, {width: 240}]}
                onPress={() => navigation.navigate('placeOrder')}>
                <Text style={styles.btnText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
