import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./HomeTab";
const Tab = createBottomTabNavigator();
function HomeTabBottom() {
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeTab} />
      </Tab.Navigator>
    );
  }
function HomeMenu() {
   return (
    <View style={{borderWidth: 1 , width:'100%', height : '100%'}}>
        <HomeTabBottom />
    </View>
   )
}
export default HomeMenu;
