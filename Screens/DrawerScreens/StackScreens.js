import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Documents from './Documents';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Documents" component={Documents} />
    </Stack.Navigator>
  );
};

export default StackScreens;
