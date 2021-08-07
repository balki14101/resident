import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventsTitle} from '../../../routes/headerTitles';
import eventsHome from './Home';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Bell from '../../../assets/images/svg/bell.svg';

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
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Bell style={{color: 'white', marginRight: 12}} size={25} />
            </View>
          ),
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
