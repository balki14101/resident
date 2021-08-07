import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BGImage from '../../../assets/images/bg.png';
import {Width, Height} from '../../../Helpers/Dimensions';
import colors from '../../../Helpers/Colors';
import Group from '../../../assets/images/svg/Group 453.svg';

const BookVisitation = () => {
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');

  const navigation = useNavigation();

  const gotoVisitationHome = () => {
    navigation.navigate('Visitations');
  };
  return (
    <View style={{paddingHorizontal: 10}}>
      <Image
        source={BGImage}
        style={{
          width: Width,
          height: Height / 4.75,
          alignItems: 'center',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          position: 'absolute',
        }}
      />
      <View
        style={{
          height: Height / 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.text, {color: colors.white}]}>Choose</Text>
        <Text style={[styles.text, {color: colors.white}]}>
          Mode of Payment
        </Text>
      </View>
      <View style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <View style={styles.height}>
          <Text style={styles.textTertiary}>Name of Visiting Person</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Name"
              style={[styles.input]}
              onChangeText={onChangeText1}
              value={text1}
            />
            <Text>d</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.textTertiary}> Date of Visition</Text>
            <TextInput
              placeholder="Name"
              style={[styles.input]}
              onChangeText={onChangeText1}
              value={text1}
            />
          </View>
          <View>
            <Text style={styles.textTertiary}>Time of Visition</Text>
            <TextInput
              placeholder="Name"
              style={[styles.input]}
              onChangeText={onChangeText1}
              value={text1}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTertiary}>Relationship</Text>
          <TextInput
            placeholder="Name"
            style={[styles.input]}
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View>
          <Text style={styles.textTertiary}>Purpose of Visitation</Text>
          <TextInput
            placeholder="Name"
            style={[styles.input]}
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={styles.button} onPress={gotoVisitationHome}>
            <Text style={styles.buttonText}>Book Visitation</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    // width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 19,
    fontFamily: 'proxima-nova-regular',
    textAlign: 'center',
  },
  input: {
    height: Height / 20,
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 4,
    padding: 10,
  },
  height: {height: 75},
  textPrimary: {
    fontSize: 22,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  textSecondary: {
    color: '#767676',
    fontSize: 14,
    fontFamily: 'proxima-nova-light',
  },
  textTertiary: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'proxima-nova-regular',
  },
});

export default BookVisitation;
