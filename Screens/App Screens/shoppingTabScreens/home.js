import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
  StyleSheet,
} from 'react-native';
import styles from './shoppingStyles';
import logo from '../../../assets/images/appLogo.png';
import BGImage from '../../../assets/images/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useToast} from 'react-native-styled-toast';
import {Wave} from 'react-native-animated-spinkit';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {Height, Width} from '../../../Helpers/Dimensions';
import {
  categories,
  scrollView1,
  scrollView2,
  scrollView3,
} from '../../../Helpers/Constants';

export default function ShoppingHome() {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isDeterminingLogin, setIsDeterminingLogin] = useState(false);
  const [search, setSearch] = useState('');

  console.log('mertt');
  const configError = {
    toastStyles: {
      bg: 'red',
      borderRadius: 16,
    },
    color: 'white',
    iconColor: 'white',
    iconFamily: 'Entypo',
    iconName: 'info',
    closeButtonStyles: {
      px: 4,
      bg: 'white',
      borderRadius: 16,
    },
    closeIconColor: 'red',
    hideAccent: true,
  };

  const configSuccess = {
    toastStyles: {
      bg: 'green',
      borderRadius: 16,
    },
    color: 'white',
    iconColor: 'white',
    iconFamily: 'Entypo',
    iconName: 'info',
    closeButtonStyles: {
      px: 4,
      bg: 'darkgrey',
      borderRadius: 16,
    },
    closeIconColor: 'white',
    hideAccent: true,
  };

  const route = useRoute();
  const navigation = useNavigation();
  const {toast} = useToast();

  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View>
      {isLoading && (
        <View style={{height: '100%', width: '100%'}}>
          <Wave
            size={100}
            color="#2CBB55"
            style={{marginLeft: '35%', marginTop: '70%'}}
          />
        </View>
      )}

      {!isLoading && !isDeterminingLogin && (
        <ScrollView style={{height: '100%'}}>
          <ImageBackground
            source={{
              uri:
                'https://i.gadgets360cdn.com/large/big-big_1563436302237.jpg',
            }}
            style={{height: 170}}
          />
          <SearchBar
            placeholder="Search"
            onChangeText={updateSearch}
            value={search}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />

          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              {categories.map((item) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('CategoryScreen', {item})
                      }
                      style={{
                        height: Height / 10,
                        width: Width / 5,
                        // justifyContent: 'center',
                        alignItems: 'center',
                        // borderRadius: 50,
                        marginHorizontal: 5,
                        // backgroundColor: 'red',
                      }}>
                      <View
                        style={{
                          borderRadius: 50,
                          backgroundColor: 'white',
                          borderWidth: 1,
                          height: 40,
                          width: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f6f6f6',
                        }}>
                        <Icon name={item.icon} size={25} color="#616D2F" />
                      </View>
                      <Text style={{textAlign: 'center'}}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <Text style={styles.text}>Brought to you be DelManor</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              {scrollView1.map((item) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => alert(`You clicked ${item.title} card`)}
                      style={{
                        marginVertical: 8,
                        marginHorizontal: 10,
                        width: Width / 3,
                        height: Height / 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        // backgroundColor: 'red',
                      }}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{
                          height: Height / 10,
                          width: Width / 3,
                          borderRadius: 8,
                          overflow: 'hidden',
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: '#DEE3CA',
                          width: Width / 3,
                          borderRadius: 8,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <Text style={styles.text}>Be part of the DelManor family</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              {scrollView2.map((item) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => alert(`You clicked ${item.title} card`)}
                      style={{
                        marginVertical: 8,
                        marginHorizontal: 10,
                        width: Width / 3,
                        height: Height / 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        // backgroundColor: 'red',
                      }}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{
                          height: Height / 10,
                          width: Width / 3,
                          borderRadius: 8,
                          overflow: 'hidden',
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: '#DEE3CA',
                          width: Width / 3,
                          borderRadius: 8,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <Text style={styles.text}>Everyday Living Essentials</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              {scrollView3.map((item) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => alert(`You clicked ${item.title} card`)}
                      style={{
                        marginVertical: 8,
                        marginHorizontal: 10,
                        width: Width / 3,
                        height: Height / 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        // backgroundColor: 'red',
                      }}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{
                          height: Height / 10,
                          width: Width / 3,
                          borderRadius: 8,
                          overflow: 'hidden',
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: '#DEE3CA',
                          width: Width / 3,
                          borderRadius: 8,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
