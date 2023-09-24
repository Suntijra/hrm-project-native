import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useState } from "react";

function LeaveScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
      console.log("onRefresh");
      setRefreshing(true);
      setTimeout(()=>{
        setRefreshing(false);
      },5000)
     
    };
  return (
    <View style={style.body}>
      <ScrollView
      style ={style.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#007AFF" // Color of the refresh indicator
            title="Pull to refresh"
            titleColor="#007AFF"
          />
        }
      ></ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
});
export default LeaveScreen;
