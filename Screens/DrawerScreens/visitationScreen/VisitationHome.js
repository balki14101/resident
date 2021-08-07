import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';
import UpcomingVisits from './UpcomingVisits';
import PastVisits from './PastVisits';
import Mainstyles from './styles';

// import card from '../../../Helpers/Constants';
import image1 from '../../../assets/images/pic1.png';
import image2 from '../../../assets/images/Pic2.png';
import image3 from '../../../assets/images/Pic3.png';
import image4 from '../../../assets/images/Pic4.png';

const Tab = createMaterialTopTabNavigator();

const card = [
  {
    Name: 'John O Corner',
    image: image1,
    relation: 'Son',
    time: '3:00 PM',
    day: 'Monday',
    date: 'April 5th 2021',
  },
  {
    Name: 'Michael Samseal',
    image: image2,
    relation: 'GrandSon',
    time: '4:00 PM',
    day: 'Tuesday',
    date: 'April 6th 2021',
  },
  {
    Name: 'Patrica O Connor',
    image: image3,
    relation: 'Daughter',
    time: '3:00 PM',
    day: 'Wednesday',
    date: 'April 7th 2021',
  },
  {
    Name: 'Emily O Connor',
    image: image4,
    relation: 'GrandDaughter',
    time: '6:00 PM',
    day: 'Thursday',
    date: 'April 15th 2021',
  },
];

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function VisitationHome(props) {
  const navigation = useNavigation();

  const gotoBookVisitation = () => {
    navigation.navigate('Book Visitation');
  };

  return (
    <View style={{paddingHorizontal: 8}}>
      {/* <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 4.75,
          alignItems: 'center',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          position: 'absolute',
        }}
      />
      <View style={{marginTop: 10}}>
        <TouchableOpacity style={styles.button} onPress={gotoBookVisitation}>
          <Text style={styles.buttonText}>Book Visitation</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity style={[styles.button, {width: Width / 2.25}]}>
          <Text style={styles.buttonText}>Upcoming Visits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {width: Width / 2.25}]}>
          <Text style={styles.buttonText}>Past Visits</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={{marginTop: 15}}>
        {card.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Visitation Details', {item});
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
                <Text>{`${item.day}, ${item.time}`}</Text>
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
      </View> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    // width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 19,
    fontFamily: 'proxima-nova-regular',
    textAlign: 'center',
  },
});
export default VisitationHome;
