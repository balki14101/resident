import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerContent from './drawerContents'
import SocialStackScreens from './social';
import CulinaryStack from './culinary';
import LinearGradient from 'react-native-linear-gradient';
// import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import AdvisoryIcon from '../assets/images/svg/advisory.svg';
import Home from '../assets/images/svg/home.svg';
import Games from '../assets/images/svg/card-game.svg';
import StocksIcon from '../assets/images/svg/stockIcon.svg';
import FeedIcon from '../assets/images/svg/feed.svg';
import ShoppingStack from './shopping';
import CalendarStack from './calendar';
import GamesStack from './games';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#616D2F',
        inactiveBackgroundColor: 'white',
        inactiveTintColor: '#727171',
        inactiveBackgroundColor: 'white',
        labelStyle: {
          fontSize: 11,
          fontFamily: 'poppins_regular',
        },
        style: {
          height: 65,
          paddingBottom: 2,
          paddingTop: 14,
        },
        // tabStyle: {
        //     borderRightColor: 'lightgrey',
        //     borderRightWidth: 1,
        // }
      }}>
      <Tab.Screen
        name="Social"
        component={SocialStackScreens}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Social',
          tabBarIcon: ({color, size}) => (
            <Home width="25px" height="25px" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={CalendarStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color, size}) => (
            <Icon2
              name="calendar"
              style={{marginTop: 4}}
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Culinary"
        component={CulinaryStack}
        // component={SocialStackScreens}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Culinary',
          tabBarIcon: ({color, size}) => (
            <Icon name="restaurant-outline" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Shopping',
          tabBarIcon: ({color, size}) => (
            <Icon2 name="cart" style={{marginTop: 4}} size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Games',
          tabBarIcon: ({color, size}) => (
            <Games width="25px" height="25px" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();

export default function AppScreensStack() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="App" component={HomeTabs} />
    </AuthStack.Navigator>
  );
}
