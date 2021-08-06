import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventsTitle} from '../../../routes/headerTitles';
import eventsHome from './Home';

const Stack = createStackNavigator();

const EventStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={eventsHome}
        options={{
          headerTitle: (props) => <EventsTitle {...props} />,
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

export default EventStackScreens;
