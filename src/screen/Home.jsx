import { useEffect, useState  } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  ImageBackground,
  Platform,
  Alert,
  Button
  ,RefreshControl
} from "react-native";
import { Icon, Skeleton } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";
import { useStoreApp } from "../assets/Auth/Store";
import LoadingFullScreen from "./components/LoadingFullScreen";
function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
function HomeTab({ navigation }) {
  let { getStore, StoreDispatch } = useStoreApp();
  let [fname, setFname] = useState("");
  let [imgprofile, setImgProfile] = useState("");
  let date = formatDate(new Date());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Simulate a refresh by adding a delay using setTimeout.
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // 2 seconds
  };
  const FetchEmployeeData = async () => {
    let req = await fetch(
      "https://hrm-api-uat.unit.co.th/mobile/GET-EMPLOYEE",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: getStore.token,
        }),
      }
    );
    let result = await req.json();
    StoreDispatch({
      type: "SetLoading",
      payload: {
        isLoading: false,
      },
    });
    let msg = result.msg;
    let data = result.data;
    let emp = data.emp;
    if (msg === "good") {
      setImgProfile(emp.img_profile);
      setFname(emp.fname);
    } else {
      StoreDispatch({ type: "LoginFail" });
      Alert.alert("Error", "SomeThing went wrong on get EMP", [
        {
          text: "OK",
          onPress: () => navigation.navigate("LoginScreen"),
        },
      ]);
    }
  };
  useEffect(() => {
    const token = getStore.token;
    if (token) {
      FetchEmployeeData();
    } else {
      navigation.navigate("LoginScreen");
    }
  }, []);

  useEffect(() => {
    console.log("rerender by arr");
  }, [fname, imgprofile]);


  return getStore.isLoading ? (
    <LoadingFullScreen />
  ) : (
    <ImageBackground source={require("../assets/imgs/Background.png")}>
      {/* <Button onPress={handleRefresh} title={'isRefreshing'} /> */}
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#007AFF" // Color of the refresh indicator
            title="Pull to refresh"
            titleColor="#007AFF" // Color of the title text
          />
        }
        style={sl.sv}
         
        >
          <StatusBar style="auto" />
          <View style={sl.a1}>
            <View>
              <Text style={sl.a2}>LOGO</Text>
            </View>
            <View style={sl.profile_border}>
              {!getStore.isLoading ? (
                <Image
                  style={sl.profile}
                  source={
                    imgprofile
                      ? { uri: imgprofile }
                      : require("../assets/imgs/lufy.png")
                  }
                ></Image>
              ) : (
                <Skeleton circle width={60} height={60} />
              )}
            </View>
          </View>
          <View>
            <Text style={sl.textWelcome}>Hi, {fname} 😄</Text>
          </View>
          <LinearGradient
            colors={["#03398A", "#064BF9"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={sl.card}
          >
            <View style={{ height: "10%" }}>
              <Text style={{ color: "white", fontSize: 16 }}>{date}</Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                marginTop: 10,
                borderColor: "#608DFF",
              }}
            ></View>
          </LinearGradient>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#28293D", fontWeight: "500", fontSize: 16 }}>
              Menu
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const sl = StyleSheet.create({
  textWelcome: {
    marginTop: 20,
    color: "#28293D",
    fontSize: 18,
    fontWeight: "500",
  },
  a2: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: "800",
    color: "#064BF9",
  },
  a1: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  card: {
    marginTop: 20,
    // borderWidth: 1,
    height: 230,
    borderRadius: 32,
    padding: 20,
  },
  sv: {
    padding: 10,
  },
  profile: {
    borderRadius: 50,
    width: 60,
    height: 60,
    borderColor: "white",
    borderWidth: 3,
    ...Platform.select({
      ios: {
        // iOS-specific styles
        shadowColor: "rgba(0, 0, 0, 0.10)",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        // Android-specific styles
        elevation: 5,
      },
    }),
  },
});

export default HomeTab;
