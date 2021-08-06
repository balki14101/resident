import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {PaymentsTitle} from '../../../routes/headerTitles';
import RentPaymentHome from './RentPaymentHome';
const Stack = createStackNavigator();

const RentPaymentStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rent"
        component={RentPaymentHome}
        options={{
          headerTitle: (props) => <PaymentsTitle {...props} />,
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

export default RentPaymentStackScreens;
