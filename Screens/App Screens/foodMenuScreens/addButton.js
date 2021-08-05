import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function Addbutton(props) {
  
    const [itemCount,setItemCount]= useState(0)

    if(itemCount < 0){
        setItemCount(0)
    }
    return (
        <View style={{ flexDirection: "row", marginTop: 0, borderRadius: 2, overflow: 'hidden', backgroundColor: '#EAEAEA', height: 18 }}>
            <TouchableOpacity style={{ width: 22, backgroundColor: '#F57E4A', justifyContent: 'center', alignItems: 'center', marginRight: 5 }} onPress={() => { setItemCount(itemCount - 1) }}>
                <Icon name="minus" size={8} style={{ color: 'white' }}></Icon>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'proxima-nova-light', color: '#115067', marginTop: 3 }}>{itemCount}</Text>
            <TouchableOpacity style={{ width: 22, backgroundColor: '#F57E4A', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }} onPress={() => { setItemCount(itemCount + 1) }}>
                <Icon name="plus" size={8} style={{ color: 'white' }}></Icon>
            </TouchableOpacity>
        </View>
    )

}
