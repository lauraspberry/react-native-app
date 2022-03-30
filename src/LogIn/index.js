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

const LogIn = ({ LogIn, navigation }) => {

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePass] = React.useState("");

    async function handleSubmit() {    
        try {
          await Auth.signIn(email, password);
          LogIn(true);
        } catch (e) {
        }
    }

    return ( 
    <View style={styles.container}>
        <Text>Log In Screen</Text>
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            // placeholder="type username here"
            // keyboardType="numeric"
            onChangeText = {onChangeEmail}
            value = {email}
            placeholder = "Enter your email."
            keyboardType = "email-address"
        />
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            // placeholder="type password here"
            // keyboardType="numeric"
            onChangeText = {onChangePass}
            value = {password}
            secureTextEntry  //blurs ur password input
            placeholder = "Enter your password."
        />
        <Button
            title = "go home"
            // onPress = {() => navigation.navigate('Home')}
            onPress = {handleSubmit}
        />
    </View>
    );
};

export default LogIn;