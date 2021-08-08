import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button,
  BackHandler,
  Alert,
} from 'react-native';
// import CompanyList from './companyList'
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import HTML from 'react-native-render-html';
import {decode} from 'html-entities';
import BGImage from '../../../assets/images/bg.png';
import Profile from '../../../assets/images/profile.png';
import rec1 from '../../../assets/images/recommended1.png';
import rec2 from '../../../assets/images/recommended2.png';
import Like from '../../../assets/images/svg/like.svg';
import Share from '../../../assets/images/svg/share.svg';
import Gallery from '../../../assets/images/svg/gallery.svg';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {borderColor, marginTop, textAlign} from 'styled-system';
import Icon from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import {Circle} from 'react-native-animated-spinkit';

export default function Home(props) {
  const navigation = useNavigation();

  const [isLoading, setLoading] = React.useState(false);
  const [photo, setPhoto] = useState('');
  const [userData, setUserData] = useState(null);
  const [social, setSocial] = useState(null);
  const [sticky, setSticky] = useState(null);

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const uploadPic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setPhoto(image.path);
    });
  };

  const backAction = () => {
    if (props.navigation.isFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = JSON.parse(await AsyncStorage.getItem('user'));
        setUserData(userData);
        setLoading(true);
        const {
          data,
        } = await axios.get(
          'https://residentnow-backend.trikaradev.xyz/api/get-social-feed-posts',
          {headers: {Authorization: `Bearer ${userData.token}`}},
        );
        console.log('social', data.socialFeedPosts[0]);
        setSocial(data.socialFeedPosts);
        const {
          data: sticky,
        } = await axios.get(
          'https://residentnow-backend.trikaradev.xyz/api/get-sticky-post',
          {headers: {Authorization: `Bearer ${userData.token}`}},
        );
        // console.log(sticky)
        setSticky(sticky.stickyPost);
        setLoading(false);
      } catch (error) {
        console.log(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        );
        setLoading(false);
      }
    };
    fetchData();

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <View style={{height: '100%'}}>
      <Image
        source={BGImage}
        style={{
          width: '100%',
          height: '35%',
          alignItems: 'center',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}></Image>
      <ScrollView style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View style={{paddingStart: 13, paddingEnd: 13, marginBottom: 50}}>
          <View style={styles.welcomeContainer}>
            {userData && (
              <Text style={styles.welcomeTxt}>
                Hello Mr{' '}
                {userData.user.first_name + ' ' + userData.user.last_name} ,
              </Text>
            )}
            <Collapse>
              <CollapseHeader>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <TextInput
                    placeholder="Whats on your mind ?"
                    style={styles.mind}></TextInput>
                  <Icon
                    name="plus"
                    style={{color: '#9D9D9D', marginTop: 15}}
                    size={20}></Icon>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View>
                  {!photo ? (
                    <TouchableOpacity
                      onPress={uploadPic}
                      style={styles.gallery}>
                      <Gallery size={30}></Gallery>
                      <Text style={styles.addTxt}>Add Image/ Video</Text>
                    </TouchableOpacity>
                  ) : (
                    <Image source={{uri: photo}} style={styles.gallery}></Image>
                  )}
                  <View style={styles.mindPost}>
                    <TouchableOpacity style={styles.cancel}>
                      <Text style={styles.btnTxt}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.post}>
                      <Text style={styles.btnTxt}>Post</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
          {isLoading && (
            <ShimmerPlaceHolder
              style={{
                width: '100%',
                height: 100,
                marginTop: 50,
                borderRadius: 8,
              }}
              LinearGradient={LinearGradient}
            />
          )}
          {!isLoading && sticky && (
            <View style={styles.communityContainer}>
              <Text style={styles.communityHead}>
                {sticky.provider.business_name} Community
              </Text>
              <Text style={styles.communityTime}>Today 11.30 AM</Text>
              <Text style={styles.communityBold}>{sticky.heading}</Text>
              <View style={styles.bookingContainer}>
                <Text style={styles.bookingTxt}>{sticky.content}</Text>
              </View>
            </View>
          )}
          {isLoading && (
            <ShimmerPlaceHolder
              style={{
                width: '100%',
                height: 120,
                marginTop: 50,
                borderRadius: 8,
              }}
              LinearGradient={LinearGradient}
            />
          )}
          {!isLoading &&
            social &&
            social.map((item) => (
              <View style={styles.welcomeContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.resident.user.profile_picture_url}}
                    style={styles.profilePic}></Image>
                  <View style={{marginTop: 3}}>
                    <Text style={styles.communityHead}>
                      {item.resident.user.first_name +
                        ' ' +
                        item.resident.user.last_name}
                    </Text>
                    <Text style={styles.communityTime}>Today 11.30 AM</Text>
                  </View>
                </View>
                <View style={styles.line}></View>
                <Text
                  style={[styles.communityHead, {fontSize: 16, marginTop: 10}]}>
                  {item.post_text}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  {item.images.map((img) => (
                    <Image
                      source={{uri: img.image_url}}
                      style={[styles.gallery, {marginRight: 10}]}></Image>
                  ))}
                  {/* <Image source={rec2} style={[styles.gallery, { marginRight: 10 }]}></Image> */}
                </View>
                <View style={[styles.line, {marginBottom: 10}]}></View>
                {item.comments.map((comment) => (
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri: comment.commenting_user.profile_picture_url,
                        }}
                        style={styles.profilePicSmall}></Image>
                      <View style={{marginTop: 3}}>
                        <Text style={[styles.communityHead, {fontSize: 14}]}>
                          {comment.commenting_user.first_name +
                            ' ' +
                            comment.commenting_user.last_name}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.desc}>{comment.comment_text}</Text>
                    <View style={styles.line}></View>
                  </View>
                ))}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}>
                  <TextInput
                    placeholder="Write Comment"
                    style={styles.mind2}></TextInput>
                  <TouchableOpacity
                    style={[styles.post, {width: 70, marginTop: 18}]}>
                    <Text style={[styles.btnTxt, {fontSize: 13}]}>Submit</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <Text
                    style={[
                      styles.communityHead,
                      {color: '#B96D05', fontSize: 14, marginTop: 6},
                    ]}>
                    {item.comments.length} Comments
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={[
                        styles.communityHead,
                        {color: '#616D2F', marginRight: 8, marginTop: 6},
                      ]}>
                      {item.likes.length}
                    </Text>
                    <Like size={20} style={{marginRight: 20}}></Like>
                    <Share size={20}></Share>
                  </View>
                </View>
              </View>
            ))}
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
  welcomeTxt: {
    fontFamily: 'proxima-nova-semiBold',
    color: '#3B3A3A',
    fontSize: 21,
  },
  desc: {
    fontSize: 15,
    fontFamily: 'proxima-nova-light',
    color: '#3B3A3A',
    marginTop: 8,
  },
  line: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 0.5,
    marginTop: 12,
  },
  welcomeContainer: {
    paddingHorizontal: 13,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 12,
    width: '100%',
    elevation: 2,
  },
  communityContainer: {
    paddingHorizontal: 13,
    paddingVertical: 13,
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 12,
    width: '100%',
    borderColor: '#D3AB03',
    borderWidth: 3,
  },
  communityHead: {
    fontSize: 17,
    color: '#3B3A3A',
    fontFamily: 'proxima-nova-regular',
  },
  communityTime: {
    color: '#767676',
    fontSize: 12,
    fontFamily: 'proxima-nova-light',
    marginTop: 5,
  },
  communityBold: {
    color: '#3B3A3A',
    fontSize: 18,
    fontFamily: 'proxima-nova-bold',
    marginTop: 10,
    textAlign: 'center',
  },
  bookingContainer: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    width: '100%',
  },
  bookingTxt: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 19,
    fontFamily: 'proxima-nova-regular',
    textAlign: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  profilePicSmall: {
    width: 22,
    height: 22,
    borderRadius: 100,
    marginRight: 10,
  },
  underlineTxt: {
    textDecorationLine: 'underline',
    color: '#616D2F',
  },
  gallery: {
    height: 80,
    width: 80,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTxt: {
    fontSize: 12,
    fontFamily: 'proxima-nova-regular',
    marginTop: 8,
    color: '#3B3A3A',
    textAlign: 'center',
  },
  mindPost: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 15,
    flexDirection: 'row',
  },
  cancel: {
    backgroundColor: '#9D9D9D',
    borderRadius: 5,
    width: 100,
    height: 30,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    backgroundColor: '#F57E4A',
    borderRadius: 5,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'proxima-nova-regular',
  },
  bgimage: {
    width: '100%',
    height: 209,
    borderRadius: 10,
  },
  mind: {
    color: '#9D9D9D',
    fontSize: 16,
    fontFamily: 'proxima-nova-light',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 0.5,
    width: '90%',
  },
  mind2: {
    color: '#9D9D9D',
    fontSize: 16,
    fontFamily: 'proxima-nova-light',
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    paddingBottom: 0,
    width: '70%',
  },
});
