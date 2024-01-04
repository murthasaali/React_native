import React, { useState ,useEffect} from 'react';
import {StatusBar} from 'expo-status-bar'
import {  StyleSheet, Text, View,Dimensions, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import GeonerCard from '../components/GeonerCard';
import ItemSep from '../components/ItemSep';
import Moviecard from '../components/moviecard';
import { getNowPlaying,getPoster } from '../service/MovieService';
const geners=["all","action","comedy","hagsgh"]
export default function Home() {
    const [state,setstate]=useState("all")
    const [nowPlaying,setnowPlaying]=useState({})
    useEffect(() => {
      getNowPlaying().then((movieRes)=>setnowPlaying(movieRes.data))
     
    }, [])
    
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

            <FlatList
              showsHorizontalScrollIndicator={false} 
            horizontal
             data={geners} 
             ItemSeparatorComponent={()=><ItemSep width={10} />}
             ListHeaderComponent={()=><ItemSep width={5}/>}
             ListFooterComponent={()=><ItemSep width={10}/>}
             keyExtractor={item=>item}
              style={{padding:10}}
               renderItem={({item})=>
               <GeonerCard names={item}
            active={item===state?true:false} 
              onPress={(names)=>setstate(names)} />}
            />

        </View>
        <View style={{padding:10}} >

            <FlatList
              showsHorizontalScrollIndicator={false} 
            horizontal
             data={nowPlaying.results} 
             ItemSeparatorComponent={()=><ItemSep width={10} />}
             ListHeaderComponent={()=><ItemSep width={5}/>}
             ListFooterComponent={()=><ItemSep width={10}/>}
             keyExtractor={item=>item.id.toString()}
              style={{padding:10}}
               renderItem={({item})=><Moviecard
               title={item.title}
               language={item.original_language}
               voteAverage={item.vote_average}

               voteCount={item.vote_count}
               poster={item.poster_path}
               />}
            />

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
    backgroundColor: "white",
    color:"white"
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
