import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';
import Clock from '../../../assets/images/svg/clock.svg';
import {justifyContent} from 'styled-system';

const Transactions = () => {
  const Navigation = useNavigation();
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
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('RentTransactions');
        }}
        style={{
          //   flexDirection: 'row',
          backgroundColor: colors.white,
          //   height: Height / 5,
          // width:Width,
          justifyContent: 'space-between',
          padding: 8,
          borderRadius: 8,
          marginTop: 40,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textPrimary}>Rent</Text>
          <Text style={styles.textPrimary}>$5500</Text>
        </View>
        <View
          style={{
            height: Height / 16,
            justifyContent: 'space-evenly',
            marginVertical: 4,
          }}>
          <Text style={styles.textSecondary}>March 2021</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.textTertiary}>Credit Card</Text>
          </View>

          <Text style={styles.textSecondary}>Transaction ID: 1213456</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Width / 1.5,
          }}>
          <Text
            style={[styles.textSecondary, {color: 'gold', fontWeight: 'bold'}]}>
            Due
          </Text>
          <Text style={styles.textTertiary}>14 April 2021</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="clockcircle" size={12} color={'#808080'} />
            <Text style={styles.textSecondary}> 3:00 PM</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          //   flexDirection: 'row',
          backgroundColor: colors.white,
          //   height: Height / 5,
          // width:Width,
          justifyContent: 'space-between',
          padding: 8,
          borderRadius: 8,
          marginTop: 12,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textPrimary}>HouseKeeping Service</Text>
          <Text style={styles.textPrimary}>$100.0</Text>
        </View>
        <View
          style={{
            height: Height / 16,
            justifyContent: 'space-evenly',
            marginVertical: 4,
          }}>
          <Text style={styles.textSecondary}>Subscription Mode</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.textTertiary}>Credit Card</Text>
          </View>

          <Text style={styles.textSecondary}>Transaction ID: 258749</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Width / 1.5,
          }}>
          <Text
            style={[styles.textSecondary, {color: 'blue', fontWeight: 'bold'}]}>
            Paid
          </Text>
          <Text style={styles.textTertiary}>25 June 2021</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="clockcircle" size={12} color={'#808080'} />
            <Text style={styles.textSecondary}> 10:00 PM</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          //   flexDirection: 'row',
          backgroundColor: colors.white,
          //   height: Height / 5,
          // width:Width,
          justifyContent: 'space-between',
          padding: 8,
          borderRadius: 8,
          marginTop: 12,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textPrimary}>Guest Meal</Text>
          <Text style={styles.textPrimary}>$20.0</Text>
        </View>
        <View
          style={{
            height: Height / 16,
            justifyContent: 'space-evenly',
            marginVertical: 4,
          }}>
          <Text style={styles.textSecondary}>Special Requests</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.textTertiary}>Credit Card</Text>
          </View>

          <Text style={styles.textSecondary}>Transaction ID: 166436545</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Width / 1.5,
          }}>
          <Text
            style={[styles.textSecondary, {color: 'blue', fontWeight: 'bold'}]}>
            Paid
          </Text>
          <Text style={styles.textTertiary}>21 March 2021</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="clockcircle" size={12} color={'#808080'} />
            <Text style={styles.textSecondary}> 12:00 PM</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 22,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  textSecondary: {
    color: colors.black,
    fontSize: 14,
    fontFamily: 'proxima-nova-regular',
  },
  textTertiary: {
    color: '#767676',
    fontSize: 12,
    fontFamily: 'proxima-nova-regular',
  },
  button: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    // paddingVertical: 10,
    borderRadius: 6,
    // marginTop: 12,
    // width: '100%',
  },
});
export default Transactions;
