import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';
import Google from '../../../assets/images/svg/google.svg';
import Share from '../../../assets/images/svg/share.svg';

const payment = [
  {
    type: 'Credit/Debit card',
    image:
      'https://www.kindpng.com/picc/m/13-130306_credit-card-debit-card-computer-icons-credit-card.png',
  },
  {
    type: 'Bank Account',
    image: 'https://www.freeiconspng.com/thumbs/bank-icon/bank-icon-23.jpg',
  },
];

const PaymentMethod = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
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
      <View
        style={{
          height: Height / 4.75,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.text, {color: colors.white}]}>Choose</Text>
        <Text style={[styles.text, {color: colors.white}]}>
          Mode of Payment
        </Text>
      </View>
      <View>
        {payment.map((payment) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: colors.white,
                marginTop: 10,
                borderRadius: 8,
                paddingHorizontal: 8,
              }}>
              <View style={{width: Width / 2.5}}>
                <Text style={styles.text}>{payment.type}</Text>
              </View>
              <Image
                source={{uri: payment.image}}
                style={{height: 100, width: 100, borderRadius: 8}}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
});

export default PaymentMethod;
