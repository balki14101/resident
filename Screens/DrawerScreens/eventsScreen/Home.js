import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProviderEvents from './ProviderEvents';
import MemberEvents from './MemberEvents';
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Provider"
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
      <Tab.Screen name="Provider Events" component={ProviderEvents} />
      <Tab.Screen name="Member Events" component={MemberEvents} />
    </Tab.Navigator>
  );
};

export default Home;
