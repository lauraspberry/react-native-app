import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red',
    },
    h1: {
        color:'red',
    },
    title: {
        margin: 16,
        padding: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

const LandingScreen = ({ navigation }) => {
    return ( 
    <View style={styles.container}>
        <Text style={styles.title}>Public Landing Screen</Text>
        {/* <Button
            title = "go home"
            onPress = {() => navigation.navigate('Home')}
        /> */}
        <Button
            title = "log in"
            onPress = {() => navigation.navigate('LogIn')}
        />
        <Button
            title = "sign up"
            onPress = {() => navigation.navigate('SignUp')}
        />
    </View>
    );
};

export default LandingScreen;