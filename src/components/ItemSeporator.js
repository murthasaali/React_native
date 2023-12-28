import React from 'react'
import {  StyleSheet, Text, View,Dimensions, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';

function ItemSeporator(width,height) {
  return (
    <View width={{width,height}}></View>
  )
}
ItemSeporator.DefaultProps={
    height:0,
    width:0
}

export default ItemSeporator