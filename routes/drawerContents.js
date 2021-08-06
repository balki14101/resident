import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Documents from '../Screens/DrawerScreens/Documents';

import AwesomeAlert from 'react-native-awesome-alerts';
import StackScreens from '../Screens/DrawerScreens/StackScreens';
import Documents from '../Screens/DrawerScreens/Documents';

export default function DrawerContent(props) {
  const [alert, setAlert] = useState(false);

  const navigation = useNavigation();

  const showAlert = () => {
    props.navigation.closeDrawer();
    setAlert(true);
  };

  const navigateAlert = async () => {
    setAlert(true);

    await AsyncStorage.clear();

    props.navigation.navigate('Auth');
    // props.navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'login' }],
    // });
  };

  const hideAlert = () => {
    setAlert(false);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="My Documents"
            labelStyle={styles.label}
            onPress={Documents}
          />
          {/* <DrawerItem
            label="kjgyhjg"
            onPress={() => {
              props.navigation.navigate('home');
            }}
          /> */}
          {/* 
          <DrawerItem
            label="Notifications"
            labelStyle={styles.label}
            onPress={() => {
              props.navigation.navigate('notification');
            }}
          />
          <DrawerItem
            label="My Documents"
            labelStyle={styles.label}
            onPress={() => {
              navigation.navigate('Documents');
            }}
          />

          <DrawerItem
            label="My Subscriptions"
            labelStyle={styles.label}
            onPress={() => {
              props.navigation.navigate('sub');
            }}
          />

          <DrawerItem
            label="Support"
            labelStyle={styles.label}
            onPress={() => {
              props.navigation.navigate('support');
            }}
          />

          <DrawerItem
            label="Terms of Use"
            labelStyle={styles.label}
            onPress={() => {
              props.navigation.navigate('terms');
            }}
          />

          <DrawerItem
            label="Logout"
            labelStyle={{fontSize: 18, fontFamily: 'poppins_regular'}}
            onPress={showAlert}
          /> */}

          {/* <DrawerItem
                        label="Free Trial expries in 15 days"
                        labelStyle={[styles.label, { borderBottomWidth: 0 }]}
                    /> */}
          {/* <Text style={styles.notiText}>Free Trial expires in 7 days</Text> */}
        </Drawer.Section>
      </DrawerContentScrollView>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, Cancel"
        confirmText="Yes, Logout"
        confirmButtonColor="#DD6B55"
        onCancelPressed={hideAlert}
        onConfirmPressed={navigateAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 0,
    // bottom: 50,
    // paddingTop: 50,
    borderWidth: 0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'poppins_regular',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    color: '#181A22',
  },
  notiText: {
    fontSize: 12,
    fontFamily: 'poppins_regular',
    paddingBottom: 10,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 18,
    lineHeight: 30,
  },
});
