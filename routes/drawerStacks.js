import React, {useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/App Screens/socialTabScreens/home';
import CulinaryHome from '../Screens/App Screens/foodMenuScreens/home';
import Bell from '../assets/images/svg/bell.svg';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MenuIcon from '../assets/images/svg/menuicon.svg';
import {View, TouchableOpacity} from 'react-native';
import {
  HomeTitle,
  ProfileTitle,
  ShoppingTitle,
  CalendarTitle,
  NotificationTitle,
  StockInfoTitle,
  SearchTitle,
  ComplianceTitle,
  TermsTitle,
  TechTitle,
  SubcriptionTitle,
  BankingTitle,
  PeersTitle,
} from './headerTitles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyMenu from '../Screens/App Screens/foodMenuScreens/dailyMenu';
import PlaceOrder from '../Screens/App Screens/foodMenuScreens/placeOrder';
import AlaCarte from '../Screens/App Screens/foodMenuScreens/alaCarte';
import OrderHistory from '../Screens/App Screens/foodMenuScreens/orderHistory';
import ShoppingHome from '../Screens/App Screens/shoppingTabScreens/home';
import CategoryScreen from '../Screens/App Screens/shoppingTabScreens/CategoryScreen';
import CalendarHome from '../Screens/App Screens/calendarTabScreens/home';
import EventDetails from '../Screens/App Screens/calendarTabScreens/eventDetails';
import EnrollEvent from '../Screens/App Screens/calendarTabScreens/enrollEvent';

const DashBoardStack = createStackNavigator();

const DashboardStackScreen = ({navigation}) => {
  return (
    <DashBoardStack.Navigator initialRouteName="home">
      <DashBoardStack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: (props) => <HomeTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
    </DashBoardStack.Navigator>
  );
};

const CulinaryStack = createStackNavigator();

const CulinaryStackScreen = ({navigation}) => {
  const [currentSectorName, setCurrentSectorName] = useState('');

  return (
    <CulinaryStack.Navigator initialRouteName="home">
      <CulinaryStack.Screen
        name="culinaryhome"
        component={CulinaryHome}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <CulinaryStack.Screen
        name="dailyMenu"
        component={DailyMenu}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <CulinaryStack.Screen
        name="placeOrder"
        component={PlaceOrder}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <CulinaryStack.Screen
        name="alaCarte"
        component={AlaCarte}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />

      <CulinaryStack.Screen
        name="orderHistory"
        component={OrderHistory}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
    </CulinaryStack.Navigator>
  );
};

const ShoppingStack = createStackNavigator();

const ShoppingStackScreen = ({navigation}) => {
  return (
    <ShoppingStack.Navigator initialRouteName="home">
      <ShoppingStack.Screen
        name="home"
        component={ShoppingHome}
        options={{
          headerTitle: (props) => <ShoppingTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <ShoppingStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerTitle: (props) => <ShoppingTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="envelope"
                // onPress={() => navigation.openDrawer()}
                style={{color: 'white', marginRight: 25, marginTop: -1}}
                size={24}
              />
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
    </ShoppingStack.Navigator>
  );
};
const CalendarStack = createStackNavigator();

const CalendarStackScreen = ({navigation}) => {
  return (
    <CalendarStack.Navigator initialRouteName="home">
      <CalendarStack.Screen
        name="home"
        component={CalendarHome}
        options={{
          headerTitle: (props) => <CalendarTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <CalendarStack.Screen
        name="details"
        component={EventDetails}
        options={{
          headerTitle: (props) => <CalendarTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
      <CalendarStack.Screen
        name="enroll"
        component={EnrollEvent}
        options={{
          headerTitle: (props) => <CalendarTitle {...props} />,
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
          headerTintColor: '#707070',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Bell
                onPress={() => navigation.navigate('profile')}
                style={{color: 'white', marginRight: 12}}
                size={25}
              />
            </View>
          ),
          headerLeft: () => (
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
              style={{color: 'white', marginLeft: 12}}
              size={25}
            />
          ),
        }}
      />
    </CalendarStack.Navigator>
  );
};

export {
  DashboardStackScreen,
  CulinaryStackScreen,
  ShoppingStackScreen,
  CalendarStackScreen,
};
