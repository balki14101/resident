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

// import card from '../../../Helpers/Constants';
import image1 from '../../../assets/images/pic1.png';
import image2 from '../../../assets/images/Pic2.png';
import image3 from '../../../assets/images/Pic3.png';
import image4 from '../../../assets/images/Pic4.png';

const VisitationHome = () => {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

  const gotoBookVisitation = () => {
    navigation.navigate('Book Visitation');
  };
  return (
    <View style={{paddingHorizontal: 8}}>
      <Image
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
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={[styles.button, {width: Width / 2.25}]}
          onPress={() => {
            return <View1 />;
          }}>
          <Text style={styles.buttonText}>Upcoming Visits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {width: Width / 2.25}]}
          onPress={() => {
            return <View2 />;
          }}>
          <Text style={styles.buttonText}>Past Visits</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          marginTop: 10,
        }}>
        <Tab.Navigator
          initialRouteName="Provider"
          style={{marginTop: 0, paddingTop: 0, height: '100%'}}
          tabBarOptions={{
            indicatorStyle: {
              height: 4,
              backgroundColor: '#616D2F',
              borderRadius: 5,
            },
            // scrollEnabled: true,
            activeTintColor: '#616D2F',
            inactiveTintColor: '#3B3A3A',
            labelStyle: {
              fontSize: 18,
              fontFamily: 'proxima-nova-regular',
              marginTop: 0,
              textTransform: 'capitalize',
            },
            tabStyle: {height: 40, marginTop: 0, paddingTop: 0},
            style: {
              height: 40,
              paddingTop: 0,
              backgroundColor: 'transparent',
              elevation: 0,
              marginBottom: 15,
            },
          }}>
          <Tab.Screen
            name="UpcomingVisits"
            component={UpcomingVisits}
            options={{tabBarLabel: 'UpcomingcVisits'}}
          />
          <Tab.Screen
            name="PastVisits"
            component={PastVisits}
            options={{tabBarLabel: 'Past Visits'}}
          />
        </Tab.Navigator>
        {/* {card.map((item) => {
          return (
            <View
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
            </View>
          );
        })} */}
      </View>
    </View>
  );
};

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
