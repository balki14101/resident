import React, {useState} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

import BGImage from '../../../assets/images/bg.png';
import {Height, Width} from '../../../Helpers/Dimensions';
import colors from '../../../Helpers/Colors';
import {sortby} from '../../../Helpers/Constants';

const card = [
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
  {
    title: 'Rental Agreement',
    date: '14 December 2020',
    time: '3:00pm',
    type: '.pdf',
    size: '131kb',
  },
];

function Documents() {
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{padding: 4}}>
      <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 3,
          alignItems: 'center',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          position: 'absolute',
        }}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
            // paddingHorizontal: 10,
          }}>
          <View>
            <SearchBar
              placeholder="Search"
              onChangeText={updateSearch}
              value={search}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: Height / 20,
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{height: Height / 16, width: Width / 3}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue, itemIndex)
              }>
              {sortby.map((category) => {
                return (
                  <Picker.Item label={category.title} value={category.title} />
                );
              })}
            </Picker>
          </View>
        </View>
        <View style={{marginVertical: 8}}>
          {card.map((item) => {
            return (
              <View
                style={[
                  styles.row,
                  {
                    backgroundColor: '#ffffff',
                    height: Height / 10,
                    width: Width / 1,
                    // padding: 8,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginVertical: 8,
                  },
                ]}>
                <View style={styles.cardDetailView}>
                  <Text style={{fontSize: 24}}>{item.title}</Text>
                  <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text>{item.date}</Text>
                    <Text style={{fontWeight: 'bold'}}>{item.time}</Text>
                  </View>
                </View>
                <View style={styles.cardDetailView}>
                  <Text>{item.type}</Text>
                  <Text>{item.size}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  containerStyle: {
    borderTopColor: '#616D2F',
    borderBottomColor: '#616D2F',
    backgroundColor: '#616D2F',
  },
  inputContainerStyle: {
    borderRadius: 10,
    backgroundColor: colors.white,
    width: Width / 2,
  },
  cardDetailView: {
    // backgroundColor: 'red',
    height: Height / 11,
    justifyContent: 'space-evenly',
  },
});
export default Documents;
