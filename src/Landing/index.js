import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LandingScreen = ({ navigation }) => {
    return ( 
    <View style={styles.container}>
        <Text>Public Landing Screen</Text>
        <Button
            title = "go home"
            onPress = {() => navigation.navigate('Home')}
        />
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