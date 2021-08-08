import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';

const Due = [{title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'}];

const Paid = [
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
  {title: 'Rent Due', date: '30 may 2020', rate: '$5500.0'},
];

const RentTransactions = () => {
  const navigation = useNavigation();

  return (
    <View style={{padding: 10}}>
      <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 4.75,
          alignItems: 'center',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          position: 'absolute',
        }}
      />
      <View>
        {Due.map((due) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                height: Height / 8,
                justifyContent: 'space-between',
                padding: 8,
                borderRadius: 8,
                marginTop: 40,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.textPrimary}>{due.title}</Text>
                <View>
                  <Text style={styles.textTertiary}>Due on</Text>
                  <Text style={styles.textTertiary}>{due.date}</Text>
                </View>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.textPrimary}>{due.rate}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('PaymentMethod')}>
                  <Text style={{color: colors.white}}>Pay Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          backgroundColor: colors.white,
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
          marginTop: 35,
          padding: 8,
        }}>
        <Text style={[styles.textPrimary, {color: '#B96D05'}]}>History</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
          borderBottomEndRadius: 8,
          paddingHorizontal: 8,
          // marginBottom: 10,
        }}>
        <View style={{backgroundColor: 'white'}}>
          {Paid.map((paid) => {
            return (
              <View
                style={{
                  justifyContent: 'space-between',
                  height: Height / 11,
                  paddingVertical: 8,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textPrimary}>{paid.title}</Text>
                  <Text style={styles.textPrimary}>{paid.rate}</Text>
                </View>
                <View>
                  <Text style={styles.textSecondary}>{paid.date}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* </ScrollView> */}
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
    color: '#767676',
    fontSize: 14,
    fontFamily: 'proxima-nova-light',
  },
  textTertiary: {
    color: '#000000',
    fontSize: 14,
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

export default RentTransactions;
