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

// navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//จำลอง มี token
// _setToken = async () => {
//   try {
//     await AsyncStorage.setItem('token', 'token_admin');
//   } catch (error) {
//     console.log(error)
//   }
// }
// _getToken = async () => {
//   try {
//     let token = await AsyncStorage.getItem('token');
//     return token
//   } catch (error) {
//     console.log(error)
//   }
// }
// _setToken()
// console.log('testttttttt')
// console.log(_getToken())

function App() {
  let [firstPage, setFirstPage] = useState('intro')
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={firstPage} screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
