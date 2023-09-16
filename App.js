/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image, Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/screen/loginScreen';
import IntroScreen from './src/screen/IntroScreen';
import RePassword from './src/screen/RePassword';
import HomeMenu from './src/screen/HomeMenu';


// navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


function App() {
  let [firstPage, setFirstPage] = useState('HomeMenu')
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={firstPage} screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RePassword" component={RePassword} />
        <Stack.Screen name ="HomeMenu" component={HomeMenu} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
