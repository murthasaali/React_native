import React from 'react'
import {  StyleSheet, Text,Dimensions, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
const {height,width}=Dimensions.get("screen")
const setWidth=(w)=>width/100*w
function GeonerCard({names,active,onPress}) {
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor:active?"blue" :"white"}} activeOpacity={0.5}>
        <Text style={{color:"white"}}>{names}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({

    container:{
    
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"black",
        opacity:0.8,
        
        paddingVertical:8,
        marginVertical:2,
        gap:5,
        elevation:3,
        width:setWidth(25),
        
        marginLeft:10,
        margin:10

    }
})
export default GeonerCard