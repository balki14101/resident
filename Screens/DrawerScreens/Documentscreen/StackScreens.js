import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DocumentsTitle} from '../../../routes/headerTitles';

import Documents from './Documents';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={{
          headerTitle: (props) => <DocumentsTitle {...props} />,
          headerTitleStyle: {
            alignSelf: 'center',
            color: '#ffffff',
            fontFamily: 'proxima-nova-regular',
            fontSize: 20,
            justifyContent: 'center',
          },
          headerStyle: {
            backgroundColor: '#616D2F',
          },
          headerTintColor: '#ffffff',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;
