/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity, Image, Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screen/loginScreen';

// navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function IntroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <TouchableOpacity style={styles.introbtn} onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={require('./src/assets/imgs/arrow-left-white.png')}
            style={{ width: 20, height: 16 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  introbtn: {
    backgroundColor: '#064BF9',
    padding: 15,
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: -300,
    right: -150

  }
});

export default App;
