import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen name="movie" component={Movie} 
                options={{headerShown:false}}
                />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
