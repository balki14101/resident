import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {width} from 'styled-system';
import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';

const card = [
  {title: 'My Transactions', icon: 'retweet', color: 'lightblue'},
  {title: 'Payment Method', icon: 'creditcard', color: 'green'},
  {title: 'Shopping Cart', icon: 'shoppingcart', color: 'gold'},
];

const RentPaymentHome = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal: 10}}>
      <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 4.75,
          alignItems: 'center',
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          position: 'absolute',
        }}
      />
      <View
        style={{
          marginTop: 25,
          height: Height / 4,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: 8,
          // padding: 10,
        }}>
        <Text style={[styles.textPrimary, {color: colors.black}]}>
          Rent Due
        </Text>
        <Text style={[styles.textSecondary, {color: colors.black}]}>
          $3,234
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Make Payment</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {/* {card.map((item) => {
          return ( */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Transactions');
          }}
          style={[
            styles.Card,
            {
              backgroundColor: colors.white,
            },
          ]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={'retweet'} size={75} color="lightblue" />
            <Text style={styles.textTertiary}>My Transactions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.Card,
            {
              backgroundColor: colors.white,
            },
          ]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={'creditcard'} size={75} color="green" />
            <Text style={styles.textTertiary}>Payment Method</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.Card,
            {
              backgroundColor: colors.white,
            },
          ]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="shoppingcart" size={75} color="red" />
            <Text style={styles.textTertiary}>Shopping Cart</Text>
          </View>
        </TouchableOpacity>
        {/* // ); */}
        {/* // } */}
        {/* )} */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 32,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  textSecondary: {
    fontSize: 24,
    fontFamily: 'proxima-nova-regular',
    // fontWeight: 'bold',
  },
  textTertiary: {
    fontSize: 20,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    width: Width / 1.5,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 19,
    fontFamily: 'proxima-nova-regular',
    textAlign: 'center',
  },
  Card: {
    // margin: 4,
    marginVertical: 12,
    width: Width / 2.2,
    height: Height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default RentPaymentHome;
