import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Auth } from "aws-amplify";

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

const LogIn = ({ navigation }) => {
    return ( 
    <View style={styles.container}>
        <Text>Log In Screen</Text>
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="type username here"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="type password here"
            keyboardType="numeric"
        />
        <Button
            title = "go home"
            onPress = {() => navigation.navigate('Home')}
        />
    </View>
    );
};

export default LogIn;