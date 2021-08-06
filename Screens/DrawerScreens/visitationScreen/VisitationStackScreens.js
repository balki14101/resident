import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {VisitationsTitle} from '../../../routes/headerTitles';
import VisitationHome from './VisitationHome';

const Stack = createStackNavigator();

const VisitationStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={VisitationHome}
        options={{
          headerTitle: (props) => <VisitationsTitle {...props} />,
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

export default VisitationStackScreens;
