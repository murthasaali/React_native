import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Image,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import images from '../constants/images';
import { getLanguage, getPoster } from '../service/MovieService';
function Moviecard({title,poster,language,voteAverage,voteCount,size}) {
    const [liked,setLiked]=useState("false")
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: 20 }} resizeMode="cover">
      <ImageBackground imageStyle={{borderRadius:20}} style={{...styles.container,width:230*size,height:340*size}} source={{uri:getPoster(poster)}}>
       <View style={{...styles.imdbIconContainer,paddingVertical:3*size}}>
        <Image source={images.IMDB} style={{...styles.imdbImage,height:20*size,width:50*size}}/>
        <Text style={{color:"white",fontWeight:'700',marginRight:5*size,fontSize:14*size}}>{voteAverage}</Text>
       </View>
       {
        liked?
           <Ionicons name="heart-outline" size={24*size} color="white" style={{position:"absolute",bottom:10,left:10}} onPress={()=>setLiked(!liked)}/>
     :  <Ionicons name="heart" size={24} color="red" style={{position:"absolute",opacity:0.7,bottom:10,left:10}} onPress={()=>setLiked(!liked)}/>
       }
      </ImageBackground>
      <View>
        <Text numberOfLines={3} style={{ width: 230 * size,fontSize:size>1?0:15*size,color:"white"}}>{title}</Text>
        <View style={styles.movieSubtitleContainer}>
          <Text style={styles.movieSubtitle}>{getLanguage(language).english_name}</Text>
          <View style={styles.rowAndcenter}>
            <Ionicons name="ios-heart" size={20*size} style={{ marginRight: 10 }} color="red" />
            <Text style={{color:"white"}}>{voteCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
Moviecard.defaultProps={
    size:1
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 340,
    width: 230,
    elevation: 5,
    marginVertical: 2,
    borderRadius: 20,
    position: 'relative', // Ensure the container is relative for absolute positioning
  },
  content: {
    color: "white",
  },
  imdbIconContainer: {
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"flex-end",
    backgroundColor:"#FFC107",

    padding:5,
    borderBottomLeftRadius:8,
    borderTopRightRadius:20
    
  },
  movieSubtitle: {
    fontSize: 12,
    color:"white"
  },
  movieSubtitleContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  rowAndcenter: {
    flexDirection: "row",
    alignItems: 'center',
  },
  imdbImage:{
    height:20,
    width:50,
    borderBottomLeftRadius:5

  }
});

export default Moviecard;
