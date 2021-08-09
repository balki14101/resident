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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useToast} from 'react-native-styled-toast';
import {Wave} from 'react-native-animated-spinkit';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function PlaceOrder() {
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const {toast} = useToast();
  const [isDateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState('');
  const [orderState, setOrderState] = useState('');
  const [guest, setGuest] = useState(false);
  const [room, setRoom] = useState(false);

  const handleDateConfirm = (date) => {
    setDateVisible(false);
    setOrderState('time');
    setDate('11-12-1996');
  };
  const showDatePicker = () => {
    setDateVisible(true);
  };
  const hideDatePicker = () => {
    setDateVisible(false);
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
            }}
          />

          <ScrollView
            style={{position: 'absolute', width: '100%', height: '100%'}}>
            <View style={{alignItems: 'center', width: '100%', height: '100%'}}>
              <Text
                style={[
                  styles.dateHead,
                  {
                    fontSize: 24,
                    marginTop: 25,
                    alignSelf: 'flex-start',
                    marginLeft: 15,
                  },
                ]}>
                Order Confimation
              </Text>

              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 12,
                  marginTop: 5,
                  marginBottom: 15,
                }}>
                <View
                  style={[
                    styles.welcomeContainer,
                    {
                      paddingVertical: 14,
                      alignItems: 'center',
                      height: 'auto',
                      paddingHorizontal: 15,
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={[styles.orderHead, {width: '50%'}]}>Item</Text>
                    <Text style={styles.orderHead}>Qty</Text>
                    <Text style={styles.orderHead}>Price</Text>
                  </View>
                  <View style={styles.line}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: 5,
                    }}>
                    <Text style={[styles.orderTxt, {width: '50%'}]}>
                      Rosemary Browned Butter
                    </Text>
                    <Text style={styles.orderTxt}>1</Text>
                    <Text style={styles.orderTxt}>--</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: 5,
                    }}>
                    <Text style={[styles.orderTxt, {width: '50%'}]}>
                      Butterscotch
                    </Text>
                    <Text style={styles.orderTxt}>1</Text>
                    <Text style={styles.orderTxt}>--</Text>
                  </View>

                  <View style={styles.line}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={[styles.orderHead2, {width: '50%'}]}>
                      Total
                    </Text>
                    <Text style={styles.orderHead2}>$ 0</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => setGuest(!guest)}>
                      {guest ? (
                        <Icon
                          name="checkbox-marked"
                          size={20}
                          style={{color: '#F57E4A', marginRight: 4}}></Icon>
                      ) : (
                        <Icon
                          name="checkbox-blank-outline"
                          size={20}
                          style={{color: '#F57E4A', marginRight: 4}}></Icon>
                      )}
                    </TouchableOpacity>
                    <Text style={styles.orderTxt}>Is this guest meal ?</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => setRoom(!room)}>
                      {room ? (
                        <Icon
                          name="checkbox-marked"
                          size={20}
                          style={{color: '#F57E4A', marginRight: 4}}></Icon>
                      ) : (
                        <Icon
                          name="checkbox-blank-outline"
                          size={20}
                          style={{color: '#F57E4A', marginRight: 4}}></Icon>
                      )}
                    </TouchableOpacity>
                    <Text style={styles.orderTxt}>Room / Tray Service</Text>
                  </View>
                </View>

                {/* <View
                  style={[
                    styles.welcomeContainer,
                    {paddingVertical: 14, alignItems: 'center', height: 'auto'},
                  ]}>
                  <Text style={styles.communityHead}>
                    When would you like your order?{' '}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => setOrderState('now')}
                      style={[
                        styles.selectOrder,
                        {
                          backgroundColor:
                            orderState != 'now' ? 'transparent' : '#F57E4A',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText2,
                          {color: orderState != 'now' ? '#F57E4A' : 'white'},
                        ]}>
                        Now
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={showDatePicker}
                      style={[
                        styles.selectOrder,
                        {
                          backgroundColor:
                            orderState != 'time' ? 'transparent' : '#F57E4A',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText2,
                          {color: orderState != 'time' ? '#F57E4A' : 'white'},
                        ]}>
                        Select Time
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDateVisible}
                  mode="date"
                  maximumDate={new Date()}
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                /> */}
              </View>
              {/* {orderState == 'time' && (
                <Text style={styles.timeTxt}>
                  Your order will be be placed at {date}
                </Text>
              )} */}

              <TouchableOpacity
                style={[styles.loginBtn, {width: 240}]}
                onPress={() => navigation.navigate('orderHistory')}>
                <Text style={styles.btnText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
