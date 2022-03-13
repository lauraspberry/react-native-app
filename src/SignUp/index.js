import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import { Auth } from "aws-amplify";

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

const SignUp = ({ navigation }) => {
    
    // create our states 
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [confirmPass, onChangeConfirm] = React.useState("");

    function validateForm() {
        return (
            email.length > 0 && 
            password.length > 0 && 
            password == confirmPass
        )
    }

    // async function handleSubmit() {
    //     if(validateForm())
    // }

    // instead of view, use SafeAreaView ? 
    return (  
    <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Sign Up Screen</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter your email"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter your password" 
            // no keyboard type bc they can be anything 
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeConfirm}
            value={confirmPass}
            placeholder="Enter your password again"
        />
        <Button
            title = "Sign Up"
            onPress = {() => navigation.navigate('Home')}
            // onPress = {handleSubmit}
        />
    </View>
    );
};

export default SignUp;