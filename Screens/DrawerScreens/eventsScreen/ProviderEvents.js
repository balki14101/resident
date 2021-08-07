import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import BGImage from '../../../assets/images/bg.png';
import {Height, Width} from '../../../Helpers/Dimensions';

const card = [
  {
    Title: 'International Womens Day',
    Place: 'Dining Hall',
    time: '3:00 PM',
    date: '8 March 2021',
  },
  {
    Title: 'Karaoke Night',
    Place: 'Party Hall',
    time: '4:00 PM',
    date: '9 April 2021',
  },
  {
    Title: 'Jazz Band',
    Place: 'Dining Hall',
    time: '3:00 PM',
    date: '8 May 2021',
  },
  {
    Title: 'BirthDay Party',
    Place: 'Party Hall',
    time: '6:00 PM',
    date: '15 June 2021',
  },
];

const ProviderEvents = () => {
  return (
    <View style={{paddingHorizontal: 8}}>
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
      <ScrollView>
        <View>
          {card.map((item) => {
            return (
              <View style={styles.eventsConatiner}>
                <Text style={styles.eventHead}>{item.Title}</Text>
                <Text style={styles.eventSubHead}>{item.Place}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="time"
                      size={15}
                      style={{
                        color: '#00000029',
                        marginTop: 5,
                        marginRight: 4,
                      }}></Icon>
                    <Text style={[styles.eventHead, {fontSize: 17}]}>
                      {item.time}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="calendar"
                      size={15}
                      style={{
                        color: '#00000029',
                        marginTop: 5,
                        marginRight: 4,
                      }}></Icon>
                    <Text style={[styles.eventHead, {fontSize: 17}]}>
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('details')}
                    style={styles.button}>
                    <Text style={styles.detailsBtnTxt}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProviderEvents;
