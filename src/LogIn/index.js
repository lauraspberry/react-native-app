import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LogIn = ({ navigation }) => {
    return ( 
    <View style={styles.container}>
        <Text>Log In Screen</Text>
        <Button
            title = "go home"
            onPress = {() => navigation.navigate('Home')}
        />
    </View>
    );
};

export default LogIn;