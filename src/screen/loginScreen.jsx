import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useStoreApp } from "../assets/Auth/Store";
const Stack = createNativeStackNavigator();
//Image
import HidePwd from "../assets/imgs/pwd_close.png";
import ShowPwd from "../assets/imgs/pwd_open.png";

function LoginScreen({ navigation }) {
  const { getStore, StoreDispatch } = useStoreApp();
  let [email, setEmail] = useState("");
  let [pwd, setPwd] = useState("");
  let [swap, setSwap] = useState(true);
  let [borderBlue, setBorderBlue] = useState(styles.input);
  let [borderBluePwd, setBorderBluePwd] = useState(styles.input);
  const swap_hide_show = () => {
    setSwap(!swap);
  };
  const sign_in = async (email, pwd) => {
    console.log("clickLogin", email, pwd);
    try {
      StoreDispatch({ type: 'setLoading', payload: { isLogin: true } })
      let response = await fetch(
        "https://hrm-api-uat.unit.co.th/mobile/login",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pwd,
          }),
        }
      );
      let data = await response.json();
      console.log("check ", data);
      let { msg } = data
      if (msg === "success") {
        await StoreDispatch({ type: "LoginSuccess", payload: data });
        let login = getStore.isLogin
        if (login) {
          navigation.navigate('HomeMenu')
        } else {
          Alert.alert(
            'Something wen wrong !! Login',
            'Alert Message',
            [
              {
                text: 'OK',      // Button text
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );
        }
      } else {
        Alert.alert(
          'not found your email and password',
          'Alert Message',
          [
            {
              text: 'OK',      // Button text
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false } // Make the alert non-cancelable by tapping outside of it
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View
      style={{
        flexDirection: "column",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      {
      getStore.isLoading ?  <ActivityIndicator style={{width : '100%' , height : "100%"}} size="large" color="#0000ff" /> :
        <View
          style={{
            flex: 1,
            width: "100%",
            marginTop: 40,
            alignItems: "center",
            position: "relative",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 90 }}>
            Sign In
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Welcome to my app
          </Text>

          <TextInput
            onChangeText={(val) => {
              setEmail(val);
              setBorderBlue(styles.inputBlue);
            }}
            onBlur={() => setBorderBlue(styles.input)}
            style={borderBlue}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(val) => {
              setPwd(val);
              setBorderBluePwd(styles.inputBlue);
            }}
            onBlur={() => setBorderBluePwd(styles.input)}
            secureTextEntry={swap}
            style={borderBluePwd}
            placeholder="Password"
          />
          <Text style={styles.forgotPwd}>Forget Password?</Text>
          <View style={{ width: 100 }}>
            {swap ? (
              <TouchableOpacity onPress={swap_hide_show}>
                <Image style={styles.hideInput} source={HidePwd}></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={swap_hide_show}>
                <Image style={styles.showInput} source={ShowPwd}></Image>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => sign_in(email, pwd)}
            style={styles.btn_sign_up}
          >
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Sign in</Text>
          </TouchableOpacity>
        </View>}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "#F5F8FF",
    marginTop: 25,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputBlue: {
    width: "80%",
    backgroundColor: "#F5F8FF",
    marginTop: 25,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#2960EC",
    borderWidth: 1,
  },
  hideInput: {
    position: "absolute",
    top: -60,
    right: -120,
    height: 23,
    resizeMode: "contain",
  },
  showInput: {
    position: "absolute",
    top: -60,
    right: -120,
    height: 20,
    resizeMode: "contain",
  },
  forgotPwd: {
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 40,
    fontWeight: "600",
    color: "#6B6F80",
    textDecorationLine: "underline",
  },
  btn_sign_up: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: "90%",
    height: 60,
    marginTop: 250,
    borderRadius: 16,
    borderColor: "#C7C9D9",
  },
});

export default LoginScreen;
