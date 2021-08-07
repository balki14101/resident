import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

import UpcomingVisits from './UpcomingVisits';
import PastVisits from './PastVisits';
import {useNavigation} from '@react-navigation/native';

import mainstyles from './styles';
import BGImage from '../../../assets/images/bg.png';
import {Width, Height} from '../../../Helpers/Dimensions';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const VisitationHome = () => {
  const navigation = useNavigation();

  const gotoBookVisitation = () => {
    navigation.navigate('Book Visitation');
  };
  return (
    <View>
      <ScrollView>
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
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
          <TouchableOpacity
            style={mainstyles.button1}
            onPress={gotoBookVisitation}>
            <Text style={mainstyles.buttonText}>Book Visitation</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 15, marginTop: 15}}>
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
              tabStyle: {height: 40},
              style: {
                marginBottom: 20,
              },
            }}>
            <Tab.Screen name="Upcoming Visits" component={UpcomingVisits} />
            <Tab.Screen name="Past Visits" component={PastVisits} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};
export default VisitationHome;
