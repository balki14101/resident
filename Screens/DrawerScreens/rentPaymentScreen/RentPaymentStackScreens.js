import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  PaymentsTitle,
  RentPaymentTitle,
  TransactionsTitle,
  PaymentMethodTitle,
} from '../../../routes/headerTitles';

import RentPaymentHome from './RentPaymentHome';
import Transactions from './Transactions';
import RentTransactions from './RentTransactions';
import PaymentMethod from './PaymentMethod';
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
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{
          headerTitle: (props) => <TransactionsTitle {...props} />,
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
        name="RentTransactions"
        component={RentTransactions}
        options={{
          headerTitle: (props) => <RentPaymentTitle {...props} />,
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
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          headerTitle: (props) => <PaymentMethodTitle {...props} />,
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
