import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  VisitationsTitle,
  BookVisitationsTitle,
} from '../../../routes/headerTitles';
import VisitationHome from './VisitationHome';
import BookVisitation from './BookVisitation';

const Stack = createStackNavigator();

const VisitationStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Visitations"
        component={VisitationHome}
        options={{
          headerTitle: (props) => <VisitationsTitle />,
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
      <Stack.Screen
        name="Book Visitation"
        component={BookVisitation}
        options={{
          headerTitle: (props) => <BookVisitationsTitle {...props} />,
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
