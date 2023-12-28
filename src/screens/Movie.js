import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Movie() {
  return (
    <View style={styles.container}>
      {/* Text Component */}
      <View style={styles.navbar}>

      <Text className="text-4xl">CRUNCHICK</Text>
      <Text>CRUNCHICK</Text>
      </View>

      {/* Image Component */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      {/* ScrollView Component */}
      <ScrollView style={styles.scrollView}>
        <Text>Scroll me to see more</Text>
        {/* Adding more Text components to demonstrate scrolling */}
        <Text>Line 1</Text>
        <Text>Line 2</Text>
        {/* ...more lines */}
        <Text>Last line</Text>
      </ScrollView>

      {/* TextInput Component */}
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        onChangeText={(text) => console.log(text)} // Log the text input changes
      />

      {/* TouchableOpacity Component */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      {/* StatusBar Component */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    padding:"10px",
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'thin',
    marginBottom: 20,
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
