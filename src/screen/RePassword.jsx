import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Image, TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//Image
import HidePwd from '../assets/imgs/pwd_close.png'
import ShowPwd from '../assets/imgs/pwd_open.png'
import { Alert } from 'react-native';
//store
import { useStoreApp } from '../assets/Auth/Store';


function RePassword({ navigation, route }) {
    let [pwd, setPwd] = useState('');
    let [confirmPwd, setConfirmPwd] = useState('');
    let [swap, setSwap] = useState(true);
    let [swap2, setSwap2] = useState(true);
    let [borderBlue, setBorderBlue] = useState(styles.input)
    let [borderBluePwd, setBorderBluePwd] = useState(styles.input)
    const { getStore, StoreDispatch } = useStoreApp();
    console.log('get param ', route.params.old_pwd)
    const FetchRePassword = async () => {
        try {
            if (pwd === confirmPwd) {
                let headersList = {
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                }
                let token = getStore.token
                let email = getStore.email
                let old = route.params.old_pwd
                let bodyContent = JSON.stringify({
                    "token": token,
                    "new_password": pwd,
                    "old_password": old,
                    "email": email
                });

                let response = await fetch("https://hrm-api-uat.unit.co.th/mobile/login/first", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let data = await response.json();
                console.log(data);
                let msg = data.msg 
               
            } else {
                Alert.alert('Info','password and confirm password not match',
                [
                    {
                        text : "close",
                        onPress : ()=> console.log('close')
                    }
                ]
                )
            }
        } catch (error) {
            Alert.alert(
                'Error', "Something went wrong ", [
                {
                    text: 'ok',
                    onPress: () => console.log('close err fetch rePassword')
                }
            ]
            )

        }
    }

    const confirm_pwd = () => {
        FetchRePassword()
    }

    const swap_hide_show = () => {
        setSwap(!swap)
    }
    const swap_hide_show2 = () => {
        setSwap2(!swap2)
    }
    return (
        <View style={{ flexDirection: 'column', height: "100%", backgroundColor: 'white' }}>
            <View style={{ flex: 1, width: '100%', marginTop: 40, alignItems: "center", position: "relative" }}>
                <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 90 }} >Create a new account</Text>
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 10, marginBottom: 30, width: 300 }} >A strong password helps prevent unauthorized access to your account. </Text>
                </View>

                <TextInput
                    onChangeText={(val) => { setConfirmPwd(val); setBorderBlue(styles.inputBlue); }}
                    onBlur={() => setBorderBlue(styles.input)}
                    secureTextEntry={swap2}
                    style={borderBlue} placeholder="Password" />
                <TextInput
                    onChangeText={(val) => { setPwd(val); setBorderBluePwd(styles.inputBlue); }}
                    onBlur={() => setBorderBluePwd(styles.input)}
                    secureTextEntry={swap} style={borderBluePwd}
                    placeholder="Confirm Password" />
                <Text style={styles.forgotPwd}></Text>
                <View style={{ width: 100 }}>
                    {swap ? (
                        <TouchableOpacity onPress={swap_hide_show}>
                            <Image style={styles.hideInput} source={HidePwd} ></Image>
                        </TouchableOpacity>)

                        : (
                            <TouchableOpacity onPress={swap_hide_show}>
                                <Image style={styles.showInput} source={ShowPwd} ></Image>
                            </TouchableOpacity>
                        )}

                </View>
                <View style={{ width: 100 }}>
                    {swap2 ? (
                        <TouchableOpacity onPress={swap_hide_show2}>
                            <Image style={styles.hideInput2} source={HidePwd} ></Image>
                        </TouchableOpacity>)

                        : (
                            <TouchableOpacity onPress={swap_hide_show2}>
                                <Image style={styles.showInput2} source={ShowPwd} ></Image>
                            </TouchableOpacity>
                        )}

                </View>
                <TouchableOpacity onPress={() => confirm_pwd()} style={styles.btn_sign_up}>
                    <Text style={{ fontWeight: "700", fontSize: 14 }}>Confirm password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        width: '80%',
        backgroundColor: '#F5F8FF',
        marginTop: 25,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    inputBlue: {
        width: '80%',
        backgroundColor: '#F5F8FF',
        marginTop: 25,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#2960EC',
        borderWidth: 1
    },
    hideInput: {
        position: 'absolute',
        top: -60,
        right: -120,
        height: 23,
        resizeMode: "contain"
    }, showInput: {
        position: 'absolute',
        top: -60,
        right: -120,
        height: 20,
        resizeMode: "contain"
    },
    hideInput2: {
        position: 'absolute',
        top: -135,
        right: -120,
        height: 23,
        resizeMode: "contain"
    },
    showInput2: {
        position: 'absolute',
        top: -135,
        right: -120,
        height: 20,
        resizeMode: "contain"
    },
    forgotPwd: {
        marginTop: 10,
        alignSelf: "flex-end",
        marginRight: 40,
        fontWeight: '600',
        color: '#6B6F80',
        textDecorationLine: 'underline'
    }, btn_sign_up:
    {
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
        width: '90%',
        height: 60,
        marginTop: 250,
        borderRadius: 16,
        borderColor: '#C7C9D9'
    }

})

export default RePassword