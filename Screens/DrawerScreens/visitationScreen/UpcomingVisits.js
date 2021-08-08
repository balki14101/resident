import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Mainstyles from './styles';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';

import {useNavigation} from '@react-navigation/native';

import image1 from '../../../assets/images/pic1.png';
import image2 from '../../../assets/images/Pic2.png';
import image3 from '../../../assets/images/Pic3.png';
import image4 from '../../../assets/images/Pic4.png';

const card = [
  {
    Name: 'John O Corner',
    image: image1,
    relation: 'Son',
    time: 'Monday,3:00PM',
    date: 'April 5th 2021',
  },
  {
    Name: 'Michael Samseal',
    image: image2,
    relation: 'GrandSon',
    time: 'Tuesday,4:00PM',
    date: 'April 6th 2021',
  },
  {
    Name: 'Patrica O Connor',
    image: image3,
    relation: 'Daughter',
    time: 'Wednesday,3:00PM',
    date: 'April 7th 2021',
  },
  {
    Name: 'Emily O Connor',
    image: image4,
    relation: 'GrandDaughter',
    time: 'Thursday,6:00PM',
    date: 'April 15th 2021',
  },
];

const UpcomingVisits = () => {
  const Navigation = useNavigation();

  return (
    <View>
      {card.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate('Visitation Details', {item});
            }}
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <View>
              <Text style={Mainstyles.textPrimary}>{item.Name}</Text>
              <Text style={Mainstyles.textSecondary}>{item.relation}</Text>
              <Text>{item.time}</Text>
              <Text>{item.date}</Text>
            </View>
            <View>
              <Image
                source={item.image}
                style={{height: Height / 8, width: Width / 4}}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default UpcomingVisits;
