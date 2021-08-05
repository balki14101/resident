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

const categories = [
  {title: 'plumber', icon: 'filter', bgColor: '#54C5F7'},
  {title: 'Mechanic', icon: 'tool', bgColor: '#FF6B6B'},
  {title: 'Painter', icon: 'form', bgColor: '#1CD1A1'},
  {title: 'Construction', icon: 'home', bgColor: '#5ED1C9'},
  {title: 'Carpenter', icon: 'pushpino', bgColor: '#9BC9F7'},
  {title: 'Electrician', icon: 'disconnect', bgColor: '#FC9483'},
];

const CategoryCard = (props) => {
  const {key, data} = props;
  const {icon, bgColor, title} = data;

  return (
    // <TouchableOpacity
    //   onPress={() => alert(`You clicked ${title} card`)}
    //   style={{
    //     marginVertical: 4,
    //     width: Width / 3.5,
    //     height: Height / 6.5,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 8,
    //     backgroundColor: bgColor,
    //   }}>
    // <Icon name={icon} size={80} color="#808080" />

    // </TouchableOpacity>
    <View>
      <Text style={styles.cardName}>{title}</Text>
    </View>
  );
};
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
          {/* <Image source={BGImage} style={{ width: '100%', height: '30%', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}/>
                    <ScrollView style={{  position: 'absolute',width: '100%', height: '100%' }}>
                        <View style={{ alignItems: 'center', width: '100%',height:'100%' }}>

                           
                            <View style={{ width: '100%', paddingHorizontal: 10, marginTop: '6%' }}>
                                <TouchableOpacity onPress={()=>navigation.navigate('dailyMenu')} style={styles.welcomeContainer}>
                                    <ImageBackground source={{ uri: 'https://dukeofyorksquare.com/wp-content/uploads/2017/02/Pancakes-2.jpg' }} style={{ height: 170, borderRadius: 10, overflow: 'hidden' }} >
                                        <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,.3)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.cardTxt}>Daily Meal {'\n'}Features</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                                
                               

                            </View>
                             <View style={styles.communityContainer}>
                                <Text style={styles.communityHead}>Shopping </Text>
                                <View style={styles.bookingContainer}>
                                    <Text style={styles.bookingTxt}>* Your remaining credits in Units  is <Text style={{ fontFamily: 'proxima-nova-bold' }}>30</Text> </Text>

                                </View>
                            </View>
                        </View>

                    </ScrollView> */}

          <ImageBackground
            source={{
              uri:
                'https://dukeofyorksquare.com/wp-content/uploads/2017/02/Pancakes-2.jpg',
            }}
            style={{height: 170, borderRadius: 10, overflow: 'hidden'}}
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
                      onPress={() => alert(`You clicked ${item.title} card`)}
                      style={{
                        // marginVertical: 4,
                        width: Width / 3.5,
                        height: Height / 10,
                        //     justifyContent: 'center',
                        alignItems: 'center',
                        //     borderRadius: 8,
                        backgroundColor: 'red',
                      }}>
                      <Icon name={item.icon} size={40} color="#808080" />
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <Text>Brought to you be DelManor</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              {categories.map((item) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => alert(`You clicked ${item.title} card`)}
                      style={{
                        // marginVertical: 4,
                        width: Width / 3.5,
                        height: Height / 10,
                        //     justifyContent: 'center',
                        alignItems: 'center',
                        // borderRadius: 8,
                        backgroundColor: 'red',
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://dukeofyorksquare.com/wp-content/uploads/2017/02/Pancakes-2.jpg',
                        }}
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 10,
                          overflow: 'hidden',
                        }}
                      />
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <Text>Be part of the DelManor family</Text>
          <Text>Everyday Living Essentials</Text>
        </ScrollView>
      )}
    </View>
  );
}
