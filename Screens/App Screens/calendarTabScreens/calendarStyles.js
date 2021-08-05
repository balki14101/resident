import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
    },
    calendarContainer: {
        width: '100%',
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 30,
        marginBottom: 20,
        borderRadius: 10
    },
    helloTxt: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'proxima-nova-semiBold'
    },
    addEventBtn: {
        width: 120,
        height: 30,
        backgroundColor: '#616D2F',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 5

    },
    addEventTxt: {
        color: 'white',
        fontFamily: 'proxima-nova-semiBold',
        fontSize: 16

    },
    upcomingConatiner: {
        paddingHorizontal: 12,
        paddingVertical: 13,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        width: '92%',
        marginVertical: 20

    },
    eventsConatiner: {
        paddingHorizontal: 12,
        paddingVertical: 13,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        width: '99%',
        marginBottom: 20,
        alignSelf: 'center'
    },
    upcomingHead: {
        color: '#3B3A3A',
        fontFamily: 'proxima-nova-regular',
        fontSize: 20,
        marginBottom: 10
    },
    eventHead: {
        color: '#3B3A3A',
        fontFamily: 'proxima-nova-semiBold',
        fontSize: 20,
        marginBottom: 10
    },
    eventSubHead: {
        color: '#727171',
        fontFamily: 'proxima-nova-semiBold',
        fontSize: 16,
        marginBottom: 10
    },
    eventBox: {
        paddingHorizontal: 12,
        paddingVertical: 13,
        backgroundColor: '#C1CB99',
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
        flexDirection: 'row'

    },
    eventTime: {
        color: '#616D2F',
        fontFamily: 'proxima-nova-regular',
        fontSize: 12,
        marginBottom: 2
    },
    eventTxt: {
        color: '#3B3A3A',
        fontFamily: 'proxima-nova-regular',
        fontSize: 15,
    },
    detailsBtn:{
        backgroundColor:'#F57E4A',
        height:30,
        width:'46%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:3
    },
    detailsBtnTxt:{
        color: 'white',
        fontFamily: 'proxima-nova-regular',
        fontSize: 15,
    },
    rsvpBtn:{
        backgroundColor:'#3B3A3A',
        height:30,
        width:'46%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:3
    },
    enrollBtn:{
        backgroundColor:'#616D2F',
        height:38,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:10
    },
    enrollInput: {
        borderColor: '#C1CB99',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
        marginTop:3,
        width: '100%',
        height: 39,
        padding: 6,
        paddingLeft: 10,
        fontSize: 15,
        // fontFamily: 'poppins_light',
        fontFamily: 'proxima-nova-regular',

    },
    label:{
        textAlign:'left',
        color: '#727171',
        fontFamily: 'proxima-nova-regular',
        fontSize: 16,
        alignSelf:'flex-start',
    }
    

})
