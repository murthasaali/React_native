import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar'
import {  StyleSheet, Text, View,Dimensions, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import GeonerCard from '../components/GeonerCard';
import ItemSeporator from '../components/itemSeporator';

const geners=["all","action","comedy","hagsgh"]
export default function Home() {
    const [activeg,setActiveg]=useState("all")
  return (

    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.BASIC_COLOR}/>
        <View  style={styles.header}>

            <Text style={
                {
                    fontSize:23,
                    color:"black",
                    opacity:0.5
                }
            }>Now playing</Text>
            <Text>View All</Text>
        </View>

        <View style={{padding:10}} >

            <FlatList ListHeaderComponent={()=>ItemSeporator(10)} showsHorizontalScrollIndicator={false} ItemSeparatorComponent={()=><ItemSeporator width={50}/>} 
            horizontal data={geners} keyExtractor={item=>item} style={{gap:10}} renderItem={({item,index})=><GeonerCard names={item}
            active={item===activeg?true:false}/>}  onPress={(names)=>setActiveg(names)}/>

        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    padding:"10px",
    backgroundColor: Colors.BASIC_COLOR,
  },
  header: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    paddingVertica:10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
    maxHeight: 200,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  navbar:{
    display:"flex",
    flexDirection:"row",
    padding:"10px",
    width:"100%",
    justifyContent:"space-between"
  }
});
