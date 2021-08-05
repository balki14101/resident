import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        paddingTop: 50,
    },
    loginContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        alignItems: 'center',
        marginTop: 30,
        paddingBottom:35
    },
    inputContainer: {
        borderColor: '#C1CB99',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 20,
        width: '90%',
        height: 39,
        padding: 6,
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: 'poppins_light',
    },
    forgotText: {
        marginTop: 14,
        alignSelf:'flex-start',
        fontSize: 15,
        color: "#181A22",
        marginLeft: '6%',
        color:'#616D2F',
        textDecorationLine:'underline',
        fontFamily: 'poppins_light',
    },
    loginBtn: {
        backgroundColor: '#F57E4A',
        borderRadius: 6,
        marginTop: 30,
        width: '50%',
        height: 44,
        marginBottom: 30

    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        padding: 9,
        fontSize: 18,
        fontFamily: 'poppins_light',
    },
    gmailBtn: {
        backgroundColor: '#5665fb',
        flexDirection: 'row',
        marginBottom: 31,
        marginTop: 16,
        borderRadius: 5
    },
    googleIconContainer: {
        backgroundColor: 'white',
        borderColor: '#5665fb',
        borderWidth: 1,
        padding: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    }


})