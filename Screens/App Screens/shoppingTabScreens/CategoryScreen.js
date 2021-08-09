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

import BGImage from '../../../assets/images/bg.png';
import colors from '../../../Helpers/Colors';
import {Width, Height} from '../../../Helpers/Dimensions';

const categoryScreen = [
  {
    image:
      'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/F6INOOMSRRL5XOOQDRPZUWPWBA.jpg',
    title: 'Apple-Logo',
    rate: '$10',
  },
  {
    image:
      'https://static.digit.in/product/284c81498a93a82db7b5db6600494c20bee4f18e.jpeg?tr=w-1200',
    title: 'Mobile',
    rate: '$100',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71AaH5W7c1L._SL1500_.jpg',
    title: 'Toys',
    rate: '$20',
  },
  {
    image:
      'https://assets.ajio.com/medias/sys_master/root/20210403/4Zeb/606863a67cdb8c1f1474dd9a/-473Wx593H-461085141-blue-MODEL.jpg',
    title: 'T-Shirt',
    rate: '$30',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71sQUYzemyL._UL1500_.jpg',
    title: 'Jersy',
    rate: '$50',
  },
  {
    image:
      'https://i2-prod.mirror.co.uk/incoming/article22083491.ece/ALTERNATES/s1200c/0_DMP_CHP__28187MaskJPG.jpg',
    title: 'Mask',
    rate: '$5',
  },
];

const CategoryScreen = (props) => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  console.log(props.route.params.item);
  const data = props.route.params.item;
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
              <TouchableOpacity>
                <View style={styles.Card}>
                  <Image source={{uri: item.image}} style={styles.itemImage} />
                  <View style={{paddingLeft: 10}}>
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
  },
  scrollview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: Height,
    marginBottom: 25,
  },
  Card: {
    // margin: 4,
    marginVertical: 12,
    width: Width / 2.5,
    height: Height / 3.5,
    justifyContent: 'space-between',
    // alignItems: 'center',
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
export default CategoryScreen;
