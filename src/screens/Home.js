import React, { useState ,useEffect,useCallback} from 'react';
import {StatusBar} from 'expo-status-bar'
import {  StyleSheet, Text, View,Dimensions, FlatList,  Modal,
  ScrollView, TextInput, TouchableOpacity ,  Animated,
  Button
} from 'react-native';
import Colors from '../constants/Colors';
import GeonerCard from '../components/GeonerCard';
import ItemSep from '../components/ItemSep';
import Moviecard from '../components/moviecard';
import { FontAwesome } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { getNowPlaying,getPoster,getSearchData, getUpcoming } from '../service/MovieService';
const geners=["all","action","comedy","hagsgh"]
export default function Home() {
    const [state,setstate]=useState("all")
    const [nowPlaying,setnowPlaying]=useState({})
    const [upcoming,setUpcoming]=useState({})
    const [search, setSearch] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    console.log("result",searchResults)
    useEffect(() => {
      getNowPlaying().then((movieRes) => setnowPlaying(movieRes.data));
      getUpcoming().then((movieRes) => setUpcoming(movieRes.data));
    }, []);
  
   
  const [modalAnimation] = useState(new Animated.Value(0)); // Initialize animated value

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalAnimation, {
      toValue: 1,
      duration: 200, // Adjust the duration of the animation as needed
      useNativeDriver: true,
    }).start();
  };

  const closeModal = useCallback(() => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
    setSearchResults([])

  }, [modalAnimation]);

    const handleSearch = async () => {
      searchText.trim()
        
      
      try {
        const searchData = await getSearchData(searchText);
        setSearchResults(searchData)
    console.log("result",searchData)

        console.log(searchData.results); // Array of movie results matching the query
      } 
       catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    };
  
    
  return (

    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
        style='auto'
        translucent={false}
        backgroundColor="black"
        />
        <View  style={styles.header}>

            <Text style={
                {
                    fontSize:23,
                    color:"white",
                    opacity:0.5
                }
            }>Now playing</Text>
            <Text style={{color:"white"}}>View All</Text>
            <FontAwesome name="search" size={35} color="white"  onPress={openModal}  />
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

        <View  style={styles.header}>

<Text style={
    {
      fontSize:23,
      color:"white",
      opacity:0.5
    }
}>Coming soon...</Text>
<Text style={{color:"white"}}>View All</Text>
</View>
      <View style={{padding:10}} >

          <FlatList
            showsHorizontalScrollIndicator={false} 
          horizontal
           data={upcoming.results} 
           ItemSeparatorComponent={()=><ItemSep width={10} />}
           ListHeaderComponent={()=><ItemSep width={5}/>}
           ListFooterComponent={()=><ItemSep width={10}/>}
           keyExtractor={item=>item.id.toString()}
            style={{padding:10}}
             renderItem={({item})=><Moviecard
             title={item.title}
             language={item.original_language}
             voteAverage={item.vote_average}
             size={0.5}
             voteCount={item.vote_count}
             poster={item.poster_path}
             />}
          />

      </View>

      <Modal
  animationType="fade"
  transparent={true}
  visible={modalVisible}
  onRequestClose={closeModal}
>
  <View style={styles.modalContainer}>
    <Animated.View
      style={[
        styles.modalContent,
        {
          transform: [
            {
              translateY: modalAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').height, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity onPress={closeModal}>
        <Entypo name="cross" size={35} color="white" />
      </TouchableOpacity>
      <ItemSep height={10} width={20} />
      <View style={{width:"100%",flexDirection:"row" ,justifyContent:"space-evenly"}}>

      <TextInput
        placeholder="Search..."
        style={[styles.input, { color: 'white' }]}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        />
      <FontAwesome name="search" size={35} color="white" onPress={handleSearch}/>
        </View>
      <View style={{padding:10}} >
      <ScrollView

      style={{flex:1,flexDirection:"column"}}

    >
      {searchResults.map((item) => (
        <ScrollView key={item.id} style={{ padding: 10 }}>
          <Moviecard
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            size={0.4}
            voteCount={item.vote_count}
            poster={item.poster_path}
          />
        </ScrollView>
      ))}
    </ScrollView>

</View>

    </Animated.View>
  </View>
</Modal>




    </ScrollView>
  );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    padding:"10px",
    backgroundColor: "black",
    color:"white"
  },  modalContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    position:"absolute",
    top:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: "white", // Set the text color for input text
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
  },
  searchResultsContainer: {
    marginTop: 10,
    padding: 10,
  },
  searchResultText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  }, scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  movieCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    height:"60%"
  },
});
