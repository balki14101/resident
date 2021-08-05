import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
// import CompanyList from './companyList'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import HTML from "react-native-render-html";
import { decode } from 'html-entities';
import BGImage from '../../../assets/images/bg.png'
import Profile from '../../../assets/images/profile.png'
import rec1 from '../../../assets/images/recommended1.png'
import rec2 from '../../../assets/images/recommended2.png'
import Like from '../../../assets/images/svg/like.svg'
import Share from '../../../assets/images/svg/share.svg'





import Gallery from '../../../assets/images/svg/gallery.svg'

import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { borderColor, marginTop, textAlign } from 'styled-system';
import Icon from 'react-native-vector-icons/EvilIcons'

export default function Home(props) {

    const navigation = useNavigation();
    const [changeCompliant, setChangeCompliant] = React.useState(false)
    const [stocks, setStocks] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)
    const [photo, setPhoto] = useState('')

    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

    const uploadPic = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setPhoto(image.path)
        });
    }


    // useEffect((async) => {

    //     (async () => {


    //         var theLoginToken = await AsyncStorage.getItem('@access_token');

    //         setLoading(true);

    //         fetch('https://residentNow-backend.trikaradev.xyz/v1/advisory', {
    //             method: "GET",
    //             headers: {
    //                 'Authorization': 'Bearer ' + theLoginToken
    //             }
    //         })
    //             .then((response) => response.json())
    //             .then((json) => setTheStocks(json))
    //             .catch((error) => console.error(json))
    //             .finally(() => setLoading(false));


    //     })();

    // }, []);


    // const setTheStocks = (json) => {
    //     setStocks(json);
    // }



    return (
        <ImageBackground source={BGImage} style={styles.bgImage}>
            <ScrollView>
                <View style={{ paddingStart: 13, paddingEnd: 13,marginBottom:50 }}>
                    {/* {isLoading &&
                        <ShimmerPlaceHolder
                            style={{ width: '100%', height: '100%', marginTop: 50 }}
                            LinearGradient={LinearGradient}
                        />
                    } */}

                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeTxt}>Hello Mr Mark,</Text>
                        <Collapse>
                            <CollapseHeader>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
                                    <TextInput placeholder="Whats on your mind ?" style={styles.mind}></TextInput>
                                    <Icon name="plus" style={{ color: '#9D9D9D', marginTop: 15 }} size={20}></Icon>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>

                                <View>
                                    {!photo ?
                                        <TouchableOpacity onPress={uploadPic} style={styles.gallery}>
                                            <Gallery size={30}></Gallery>
                                            <Text style={styles.addTxt}>Add Image/ Video</Text>
                                        </TouchableOpacity>
                                        :
                                        <Image source={{ uri: photo }} style={styles.gallery}>
                                        </Image>

                                    }
                                    <View style={styles.mindPost}>
                                        <TouchableOpacity style={styles.cancel}><Text style={styles.btnTxt}>Cancel</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.post}><Text style={styles.btnTxt}>Post</Text></TouchableOpacity>

                                    </View>
                                </View>


                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={styles.communityContainer}>
                        <Text style={styles.communityHead}>Leslie retirement community</Text>
                        <Text style={styles.communityTime}>Today 11.30 AM</Text>
                        <Text style={styles.communityBold}>COVID Visitation hours have been extended this week</Text>
                        <View style={styles.bookingContainer}>
                            <Text style={styles.bookingTxt}>Please book your visitation appointments with your loved ones today</Text>
                        </View>
                    </View>
                    <View style={styles.welcomeContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePic}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={styles.communityHead}>Michael Smith</Text>
                                <Text style={styles.communityTime}>Today 11.30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={[styles.communityHead, { fontSize: 16, marginTop: 10 }]}>Best recommended books by my friend<Text style={styles.underlineTxt}> @JohnsonSamuel</Text> to read</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={rec1} style={[styles.gallery, { marginRight: 10 }]}></Image>
                            <Image source={rec2} style={[styles.gallery, { marginRight: 10 }]}></Image>
                        </View>
                        <View style={[styles.line, { marginBottom: 10 }]}></View>

                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePicSmall}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={[styles.communityHead, { fontSize: 14 }]}>Michael Smith</Text>
                            </View>
                        </View>
                        <Text style={styles.desc}>This is so great I love these Books</Text>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, }}>
                            <TextInput placeholder="Write Comment" style={styles.mind2}></TextInput>
                            <TouchableOpacity style={[styles.post, { width: 70, marginTop: 18 }]}><Text style={[styles.btnTxt, { fontSize: 13 }]}>Submit</Text></TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection:'row', justifyContent: 'space-between',paddingTop:10 }}>
                            <Text style={[styles.communityHead, { color: '#B96D05', fontSize: 14,marginTop:6 }]}>12 Comments</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.communityHead, { color: '#616D2F', marginRight: 8,marginTop:6 }]}>2</Text>
                                <Like size={20} style={{ marginRight: 20 }}></Like>
                                <Share size={20}></Share>

                            </View>
                        </View>
                    </View>
                    <View style={styles.welcomeContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePic}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={styles.communityHead}>Michael Smith</Text>
                                <Text style={styles.communityTime}>Today 11.30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={[styles.communityHead, { fontSize: 16, marginTop: 10 }]}>Best recommended books by my friend<Text style={styles.underlineTxt}> @JohnsonSamuel</Text> to read</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={rec1} style={[styles.gallery, { marginRight: 10 }]}></Image>
                            <Image source={rec2} style={[styles.gallery, { marginRight: 10 }]}></Image>
                        </View>
                        <View style={[styles.line, { marginBottom: 10 }]}></View>

                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePicSmall}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={[styles.communityHead, { fontSize: 14 }]}>Michael Smith</Text>
                            </View>
                        </View>
                        <Text style={styles.desc}>This is so great I love these Books</Text>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, }}>
                            <TextInput placeholder="Write Comment" style={styles.mind2}></TextInput>
                            <TouchableOpacity style={[styles.post, { width: 70, marginTop: 18 }]}><Text style={[styles.btnTxt, { fontSize: 13 }]}>Submit</Text></TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection:'row', justifyContent: 'space-between',paddingTop:10 }}>
                            <Text style={[styles.communityHead, { color: '#B96D05', fontSize: 14,marginTop:6 }]}>12 Comments</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.communityHead, { color: '#616D2F', marginRight: 8,marginTop:6 }]}>2</Text>
                                <Like size={20} style={{ marginRight: 20 }}></Like>
                                <Share size={20}></Share>

                            </View>
                        </View>
                    </View>
                    <View style={styles.welcomeContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePic}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={styles.communityHead}>Michael Smith</Text>
                                <Text style={styles.communityTime}>Today 11.30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={[styles.communityHead, { fontSize: 16, marginTop: 10 }]}>Best recommended books by my friend<Text style={styles.underlineTxt}> @JohnsonSamuel</Text> to read</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={rec1} style={[styles.gallery, { marginRight: 10 }]}></Image>
                            <Image source={rec2} style={[styles.gallery, { marginRight: 10 }]}></Image>
                        </View>
                        <View style={[styles.line, { marginBottom: 10 }]}></View>

                        <View style={{ flexDirection: "row" }}>
                            <Image source={Profile} style={styles.profilePicSmall}></Image>
                            <View style={{ marginTop: 3 }}>
                                <Text style={[styles.communityHead, { fontSize: 14 }]}>Michael Smith</Text>
                            </View>
                        </View>
                        <Text style={styles.desc}>This is so great I love these Books</Text>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, }}>
                            <TextInput placeholder="Write Comment" style={styles.mind2}></TextInput>
                            <TouchableOpacity style={[styles.post, { width: 70, marginTop: 18 }]}><Text style={[styles.btnTxt, { fontSize: 13 }]}>Submit</Text></TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection:'row', justifyContent: 'space-between',paddingTop:10 }}>
                            <Text style={[styles.communityHead, { color: '#B96D05', fontSize: 14,marginTop:6 }]}>12 Comments</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.communityHead, { color: '#616D2F', marginRight: 8,marginTop:6 }]}>2</Text>
                                <Like size={20} style={{ marginRight: 20 }}></Like>
                                <Share size={20}></Share>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )

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
        marginTop: 8
    },
    line: {
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: .5,
        marginTop: 12
    },
    welcomeContainer: {
        paddingHorizontal: 13,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 12,
        width: '100%'
    },
    communityContainer: {
        paddingHorizontal: 13,
        paddingVertical: 13,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 12,
        width: '100%',
        borderColor: '#D3AB03',
        borderWidth: 1,
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
        marginTop: 5

    },
    communityBold: {
        color: '#3B3A3A',
        fontSize: 18,
        fontFamily: 'proxima-nova-bold',
        marginTop: 10,
        textAlign: 'center'
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
        textAlign: 'center'
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    profilePicSmall: {
        width: 22,
        height: 22,
        borderRadius: 100,
        marginRight: 10
    },
    underlineTxt: {
        textDecorationLine: 'underline',
        color: '#616D2F'
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
        textAlign: 'center'

    },
    mindPost: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 15,
        flexDirection: 'row'

    },
    cancel: {
        backgroundColor: '#9D9D9D',
        borderRadius: 5,
        width: 100,
        height: 30,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    post: {
        backgroundColor: '#F57E4A',
        borderRadius: 5,
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'

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
        borderBottomWidth: .5,
        width: '90%'
    },
    mind2: {
        color: '#9D9D9D',
        fontSize: 16,
        fontFamily: 'proxima-nova-light',
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 1,
        paddingBottom: 0,
        width: '70%'
    },


})
