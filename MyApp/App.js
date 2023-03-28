/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState } from 'react';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: "100%" }}>
      <View style={{ position: 'absolute', zIndex: 10 }}>
        <TouchableOpacity style={styles.introbtn} onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={require('./src/assets/imgs/arrow-left-white.png')}
            style={{ width: 20, height: 16 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgintro3}>
        <Image style={styles.img3} source={require('./src/assets/imgs/bg_center.png')}></Image>
        <Text style={styles.titile}>Lorem ipsum dolor sit amet consect.</Text>
        <Text style={styles.para}>Lorem ipsum dolor sit amet consect.</Text>
        <Text style={styles.para}>Lorem ipsum dolor sit amet consectconsect.</Text>
      </View>
      <View style={styles.imgintro1}>
        <Image style={styles.img1} source={require('./src/assets/imgs/introbg1.png')}></Image>
      </View>
      <View style={styles.imgintro2}>
        <Image style={styles.img2} source={require('./src/assets/imgs/introbg2.png')} ></Image>
      </View>
    </View>
  );
}

function App() {
  let [firstPage , setFirstPage] = useState('intro')
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
    bottom: -330,
    right: -180,
  },
  imgintro1: {
    zIndex: 1,
    width: 300,
    height: 300
  },
  imgintro2: {
    zIndex: 2,
    width: 300,
    height: 300
  },
  imgintro3: {
    zIndex: 3,
    width: 300,
    height: 300
  },
  img1: {
    height: 500,
    resizeMode: "contain",
    zIndex: 1,
    bottom: -200,
    left: -500
  },
  img2: {
    height: 1000,
    bottom: 700,
    left: -600,
    zIndex: 2,
    resizeMode: "contain",
  },
  img3: {
    height: 300,
    bottom: -180,
    left: -500,
    zIndex: 5,
    resizeMode: "contain",
  },
  titile: {
    marginTop: 200,
    textAlign: 'center',
    fontWeight : "500",
    fontSize : 20
  },
  para : {
    textAlign: 'center',
    fontWeight : "400",
    fontSize : 16,
    marginTop : 10,
    width : '100%'
  }
});

export default App;
