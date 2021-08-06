import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Screens/splashScreen';
import AuthStackScreen from './routes/userAuthScreens';
import AppScreensStack from './routes/appScreens';
import {ThemeProvider} from 'styled-components';
import {ToastProvider} from 'react-native-styled-toast';
import StackScreens from './Screens/DrawerScreens/Documentscreen/StackScreens';

const Stack = createStackNavigator();

const theme = {
  main: 'mediumseagreen',
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#E2E8F0',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FC0021',
    info: '#00FFFF',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="loading" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthStackScreen} />
            <Stack.Screen name="App" component={AppScreensStack} />
            <Stack.Screen name="Documents" component={StackScreens} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </ThemeProvider>
  );
}
