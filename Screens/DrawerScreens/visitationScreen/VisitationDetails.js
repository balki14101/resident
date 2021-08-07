import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BGImage from '../../../assets/images/bg.png';
import {Width, Height} from '../../../Helpers/Dimensions';
import colors from '../../../Helpers/Colors';
import styles from './styles';
import Clock from '../../../assets/images/svg/clock.svg';

const VisitationDetails = (props) => {
  const Navigation = useNavigation();

  const data = props.route.params.item;
  console.log(data);
  return (
    <View style={{paddingHorizontal: 10}}>
      <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 4.5,
          alignItems: 'center',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          position: 'absolute',
        }}
      />
      <View
        style={{
          height: Height / 8,
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'red'
        }}>
        <Text style={[styles.textPrimary, {color: colors.white}]}>
          {data.Name}
        </Text>
        <Text style={[styles.textPrimaryWoBold, {color: colors.white}]}>
          {data.relation}
        </Text>
      </View>
      <View
        style={{
          //   backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 75,
            height: 150,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={data.image} style={{height: 140, width: 140}} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          height: Height / 3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          marginTop: 16,
        }}>
        <View
          style={{
            marginVertical: 10,
            justifyContent: 'space-between',
            height: Height / 4.5,
          }}>
          <View style={styles.center}>
            <Text
              style={{
                color: '#9D9D9D',
                fontSize: 18,
              }}>{`${data.day}, ${data.date}`}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
                width: Width / 2,
              }}>
              <Clock size={16} style={{color: '#3B3A3A'}} />
              <Text
                style={{fontSize: 32, fontWeight: 'bold', color: '#3B3A3A'}}>
                {data.time}
              </Text>
            </View>
          </View>
          <View style={styles.center}>
            <Text
              style={{
                color: '#9D9D9D',
                fontSize: 18,
              }}>
              Purpose of Visit
            </Text>
            <Text style={{fontSize: 32, fontWeight: 'bold', color: '#3B3A3A'}}>
              Get-Together
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          height: Height / 6,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Reschedule Visitation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            Navigation.navigate('Visitations');
          }}>
          <Text style={styles.buttonText}>Cancel Visitation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VisitationDetails;
