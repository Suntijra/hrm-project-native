import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useStoreApp } from "../assets/Auth/Store";
import { Switch } from "@rneui/themed";

function LeaveScreen({ navigation }) {
  const { getStore, StoreDispatch } = useStoreApp();
  const [selected, setSelected] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [leaveList, setLeaveList] = useState([]);
  const [open, setOpen] = useState(false);
  const onRefresh = async () => {
    console.log("onRefresh");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };
  const RenderLeave = async () => {
    console.log("getStore", getStore.token);
    let myHeaders = {
      "Content-Type": "application/json",
    };

    let raw = JSON.stringify({
      token: getStore.token,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    let req = await fetch(
      "https://hrm-api-uat.unit.co.th/mobile/GET-LEAVE",
      requestOptions
    );
    let result = await req.json();
    let msg = result.msg;
    console.log("msg", msg);
    if (msg === "good") {
      let data = result.data;
      let new_data = [];
      await data.map((v) => {
        new_data.push({
          key: v.l_id,
          value: v.name_th,
        });
      });
      setLeaveList(new_data);
    } else {
      navigation.navigate("Home");
    }
  };
  // first load
  useEffect(() => {
    RenderLeave();
  }, []);
  //dependency
  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);
  return (
    <View style={style.body}>
      <ScrollView
        style={style.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#007AFF" // Color of the refresh indicator
            title="Pull to refresh"
            titleColor="#007AFF"
          />
        }
      >
        <SelectList
          setSelected={(val) => setSelected(val)}
          placeholder={"เลือกประเภทวันลา"}
          data={leaveList}
          save="key"
          search={false}
        />
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Switch
            style={{transform: [{ scale: 1.5 }], width: "65%" }}
            value={open}
            onValueChange={setOpen}
          />
           <Text style={{marginTop: 3, marginLeft: 60, fontSize: 16}}>All Days</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    padding: 16,
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
});
export default LeaveScreen;
