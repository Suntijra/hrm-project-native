import React from 'react';
// import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity, Image, Button, TextInput, PixelRatio
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
    return (
        <View style={{ flexDirection: 'column', height: "100%", backgroundColor: 'white' }}>
            <View style={{ flex: 1, width: '100%', marginTop: 40, alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 90 }} >Sign In</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 10, marginBottom: 30 }} >Welcome to my app </Text>

                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <Text style={{ marginTop: 10, alignSelf: "flex-end", marginRight: 40, fontWeight: '600', color: '#6B6F80', textDecorationLine: 'underline' }}>Forget Password?</Text>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", borderWidth: 1, width: '90%', position: 'absolute', bottom: 50, height: 60, borderRadius: 16, borderColor: '#C7C9D9' }}>
                    <Text style={{ fontWeight: "700", fontSize: 14 }}>Sign in</Text>
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
    }
})

export default LoginScreen