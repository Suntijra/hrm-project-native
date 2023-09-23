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
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

function HomeTab() {
  return (
    <ImageBackground source={require("../assets/imgs/Background.png")}>
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView style={sl.sv}>
          <StatusBar style="auto" />
          <View style={sl.a1} >
            <View>
              <Text
                style={sl.a2}
              >
                LOGO
              </Text>
            </View>
            <View style={sl.profile_border}>
              <Image
                style={sl.profile}
                source={require("../assets/imgs/lufy.png")}
              ></Image>
            </View>
          </View>
          <View>
            <Text
              style={sl.textWelcome}
            >
              Hi, Dom 😄
            </Text>
          </View>
          <LinearGradient
            colors={["#03398A", "#064BF9"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={sl.card}
          >
            <View style={{ height: '10%' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>17 Aug 2021</Text>
            </View>
            <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#608DFF' }}></View>
          </LinearGradient>
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
    padding: 20
  },
  sv: {
    padding: 10,
  },
  profile: {
    borderRadius: 50,
    width: 55,
    height: 55,
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
