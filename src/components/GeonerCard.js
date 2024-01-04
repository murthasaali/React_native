import React from 'react'
import {  StyleSheet, Text,Dimensions, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
const {height,width}=Dimensions.get("screen")
const setWidth=(w)=>width/100*w
function GeonerCard({names,active,onPress}) {
  return (
    <TouchableOpacity
    onPress={()=>onPress(names)}
    activeOpacity={0.5} style={{...styles.container,backgroundColor:active?"black" :"white"}}>
        <Text style={{color:active?"white":"black"}}>{names}</Text>
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
        gap:5,
        elevation:3,
        width:setWidth(20),
        
        margin:10

    }
})
export default GeonerCard