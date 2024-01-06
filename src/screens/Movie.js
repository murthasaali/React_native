import React, { useEffect, useState } from 'react';
import {  StyleSheet, Text, View, Image, ScrollView, Linking,TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { getMovie ,getPoster, getVideo} from '../service/MovieService';
import { StatusBar } from "expo-status-bar";
import ItemSep from '../components/ItemSep';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { APPEND_YO_RESPONSE  } from '../constants/urls';
const { height, width } = Dimensions.get('screen');
const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

export default function Movie({ route, navigation }) {
  const { movieId } = route.params; 
  const [movie,setMovie]=useState({})      // Corrected destructuring of route.params
  useEffect(() => {
    getMovie(
      movieId,
      `${APPEND_YO_RESPONSE.VIDEOS}`
    ).then((response) => setMovie(response.data))
  }, []);
  console.log(movie)


  return (
    <ScrollView style={styles.container} >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.9)", "rgba(217, 217, 217, 0)"]}
        start={[0, 0.3]}
        style={styles.linearGradient}
      />
           <StatusBar style="light" />

      <View  style={styles.moviePosterImageContainer}> 
    <Image style={styles.moviePosterImage} resizeMode='cover' source={{uri:getPoster(movie.backdrop_path)}}/>
      
      
      </View>
      <View style={styles.headercontaner} >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Feather name="chevron-left" size={45} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.play}         onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}
 >
        <Feather name="play-circle" size={70} color="white" />
                </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name="share" size={30} color="white" />
        </TouchableOpacity>
      </View>
     <ItemSep height={setHeight(37)}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: 'black',
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linearGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: "absolute",
    top: 0,
    elevation: 9,
  },
  headercontaner:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:20,
    position:"absolute",
    right:0,
    top:50,
    left:0,
    elevation:20


  },
  headerText:{
    color:"white",
    fontSize:20

  },
  play:{
    position:"absolute",
    top:110,
    left:setWidth(50)-70/2


  }
});
