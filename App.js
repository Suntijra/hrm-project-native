/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useEffect, useState } from 'react';
import LoginScreen from './src/screen/loginScreen';
import IntroScreen from './src/screen/IntroScreen';
import RePassword from './src/screen/RePassword';
import HomeMenu from './src/screen/HomeMenu';
import { StoreProvider, useStoreApp } from './src/assets/Auth/Store'


// navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
 function NavigatePage() {
  const {getStore , StoreDispatch} = useStoreApp();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={getStore.usePage} screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RePassword" component={RePassword} />
        <Stack.Screen name="HomeMenu" component={HomeMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <StoreProvider >
      <NavigatePage />
    </StoreProvider>

  );
};

export default App;
