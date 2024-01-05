import React from 'react'
import {  StyleSheet, Text,Dimensions, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
const {height,width}=Dimensions.get("screen")
const setWidth=(w)=>width/100*w
function GeonerCard({names,active,onPress}) {
  return (
    <TouchableOpacity
    onPress={()=>onPress(names)}
    activeOpacity={0.5} style={{...styles.container,borderColor:"white",borderWidth: active?1:0 ,backgroundColor:active?"black" :"black"}}>
        <Text style={{color:active?"white":"white"}}>{names}</Text>
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