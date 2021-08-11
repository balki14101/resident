import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import BGImage from '../../assets/images/bg.png';
import colors from '../../Helpers/Colors';
import {Width, Height} from '../../Helpers/Dimensions';

const categoryScreen = [
  {
    image:
      'https://play-lh.googleusercontent.com/1cKXhvK3BoENxSvU4IxX965iM0aAIkdLxPcDo-IvZGSYVT75nPLoK-EWvfU1onp7BUw',
    title: 'Dots',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/915/741/png-transparent-patience-game-apple-solitaire-king-ipod-touch-apple-game-text-logo.png',
    title: 'Solitaire',
  },
  {
    image:
      'https://pageflows.imgix.net/media/logos/candycrush.jpg?auto=compress&ixlib=python-1.1.2&s=0cc13eb77c79e6dbd389096a7da5712b',
    title: 'Candy Crush',
  },
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71cg%2BfcdDdL.png',
    title: 'Sudoku',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
    title: 'Among Us',
  },
  {
    image:
      'https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg',
    title: 'Minecraft',
  },
];

const Home = () => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{padding: 10}}>
      <Image source={BGImage} style={styles.bgImage} />
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <ScrollView>
        <View style={styles.scrollview}>
          {categoryScreen.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('WebView');
                }}>
                <View style={styles.Card}>
                  <Image source={{uri: item.image}} style={styles.itemImage} />
                  <View
                    style={{
                      //   backgroundColor: 'red',
                      width: Width / 2.2,
                      //   height: Height / 16,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.rate}>{item.rate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderTopColor: '#616D2F',
    borderBottomColor: '#616D2F',
    backgroundColor: '#616D2F',
  },
  inputContainerStyle: {
    borderRadius: 10,
    backgroundColor: colors.white,
    // width: Width,
  },
  bgImage: {
    width: Width,
    height: Height / 4.75,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    position: 'absolute',
  },
  itemImage: {
    height: Height / 5,
    width: Width / 2.5,
    borderRadius: 8,
    marginTop: 4,
  },
  scrollview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: Height,
    // marginBottom: 25,
  },
  Card: {
    // marginTop: 4,
    marginVertical: 12,
    width: Width / 2.2,
    height: Height / 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Home;
