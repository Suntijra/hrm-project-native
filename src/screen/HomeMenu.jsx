import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon ,Button } from '@rneui/themed';
import HomeTab from "./HomeTab";
import CalendarMenu from "./CalendarMenu"
const Tab = createBottomTabNavigator();
function HomeTabBottom() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen options={{
     
      }} name="Home" component={HomeTab} />
      <Tab.Screen options={{
        tabBarLabel: "Calendar"
      }} name="CalendarMenu" component={CalendarMenu} />

      <Tab.Screen options={{
        tabBarLabel: "Camera"
      }} name="WorkIn-Wrokout" component={CalendarMenu} />

      <Tab.Screen options={{

      }} name="Team" component={CalendarMenu} />

      <Tab.Screen options={{}} name="Setting" component={CalendarMenu} />
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
