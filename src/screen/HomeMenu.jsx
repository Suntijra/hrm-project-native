import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import TeamScreen from "./TeamScreen";
import CalendarMenu from "./CalendarMenu"
const Tab = createBottomTabNavigator();
// import Icon from 'react-native-vector-icons/FontAwesome';

// svg 
// import SvgUri from 'react-native-svg-uri';
import { Icon } from '@rneui/themed';
function HomeTabBottom() {
  const IconCamera = ({ color, size }) => (
    <View className="bg-[#608DFF] rounded-full w-24 h-24 absolute top-[-30] flex justify-center items-center">
      <Image
        style={{ width: 60, height: 60, tintColor: 'white' }}
        source={require('../assets/icon/camera.png')}
      />
    </View>
  )
  return (
    <Tab.Navigator initialRouteName="Home"
    keyboardShouldPersistTaps="handled" 
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 80, paddingBottom: 10 }, // Set background color
        tabBarLabelStyle: { fontSize: 16 }, // Optional: Set label text style
        headerStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0)', // Make the background transparent
        },
        headerShadowVisible : false
      }}>

      <Tab.Screen
        options={{
        }} name="Home" component={Home} />
      <Tab.Screen
        options={{
          tabBarLabel: "Calendar"
        }} name="CalendarMenu" component={CalendarMenu} />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: IconCamera
        }} name="WorkIn-WrokOut" component={CalendarMenu} />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: 'Choose People',
          headerTitleAlign: 'center',
        }} name="Team" component={TeamScreen} />
      <Tab.Screen
        options={{}} name="Setting" component={CalendarMenu} />
    </Tab.Navigator>
  );
}
function HomeMenu() {
  return (
    <View style={{ borderWidth: 1, width: '100%', height: '100%' }}>
      <HomeTabBottom />
    </View>
  )
}
export default HomeMenu;
