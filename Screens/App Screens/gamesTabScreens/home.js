import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bgImage from '../../../assets/images/advisory_home.png';
import Arrow from 'react-native-vector-icons/AntDesign';
// import CompanyList from './companyList'
import {ScrollView} from 'react-native-gesture-handler';
import BGImage from '../../../assets/images/bgStyle_1.png';
import {useNavigation} from '@react-navigation/native';
import BluredSection from './bluredSection';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import HTML from 'react-native-render-html';
import {decode} from 'html-entities';

export default function Home(props) {
  const navigation = useNavigation();
  const [changeCompliant, setChangeCompliant] = React.useState(false);
  const [stocks, setStocks] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  React.useEffect(() => {
    setTimeout(() => {
      setChangeCompliant(false);
    }, 3000);
  });

  useEffect((async) => {
    (async () => {
      var theLoginToken = await AsyncStorage.getItem('@access_token');

      setLoading(true);

      fetch('https://residentNow-backend.trikaradev.xyz/v1/advisory', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + theLoginToken,
        },
      })
        .then((response) => response.json())
        .then((json) => setTheStocks(json))
        .catch((error) => console.error(json))
        .finally(() => setLoading(false));
    })();
  }, []);

  const setTheStocks = (json) => {
    setStocks(json);
  };

  return (
    <View style={styles.bgImage}>
      <ScrollView>
        <View style={{paddingStart: 9, paddingEnd: 9}}>
          {changeCompliant ? (
            <BluredSection />
          ) : (
            <View style={{flex: 1}}>
              <Text style={styles.pageTitle}>Weekly Picks</Text>

              {isLoading && (
                <ShimmerPlaceHolder
                  style={{width: '100%', height: 250, marginTop: 50}}
                  LinearGradient={LinearGradient}
                />
              )}

              {!isLoading && stocks.length > 0 && (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    height: 200,
                    borderRadius: 10,
                  }}
                  onPress={() =>
                    navigation.navigate('single', {stock: stocks[0]})
                  }>
                  <Text style={styles.imageTextBig}>{stocks[0].stockName}</Text>
                  <View style={{paddingLeft: 10}}>
                    <HTML
                      source={{
                        html: decode(
                          stocks[0].description.substr(0, 490) + '...',
                        ),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      display: 'none',
                      marginTop: 29,
                      paddingLeft: '55%',
                      marginBottom: 16,
                    }}>
                    <Text
                      style={{
                        color: '#3397F8',
                        paddingRight: 7,
                        fontSize: 15,
                        fontFamily: 'poppins_semiBold',
                      }}>
                      Tap to Explore
                    </Text>
                    <Arrow
                      name="arrowright"
                      size={20}
                      color="#3397F8"
                      style={{top: 2}}
                    />
                  </View>
                </TouchableOpacity>
              )}

              {isLoading && (
                <ShimmerPlaceHolder
                  style={{width: '100%', height: 200, marginTop: 50}}
                  LinearGradient={LinearGradient}
                />
              )}

              {!isLoading && (
                <View style={{marginBottom: 50}}>
                  <CompanyList
                    navigation={props.navigation}
                    stocks={stocks.slice(1)}
                    sectorName="Advisory"
                  />
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  pageTitle: {
    fontFamily: 'poppins_bold',
    color: 'black',
    fontSize: 18,
    marginTop: 14,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 12,
    padding: 5,
  },
  bgimage: {
    width: '100%',
    height: 209,
    borderRadius: 10,
  },
  imageText: {
    color: 'black',
    marginTop: 0,
    padding: 10,
    fontSize: 16,
    justifyContent: 'flex-start',
    fontFamily: 'poppins_medium',
  },
  imageTextBig: {
    color: 'black',
    justifyContent: 'flex-start',
    marginTop: 0,
    padding: 10,
    fontSize: 23,
    fontFamily: 'poppins_medium',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
