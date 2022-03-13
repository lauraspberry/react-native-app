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

const ConfirmScreen = ({ LogIn, route }) => {
    const [confirm, onChangeConfirm] = React.useState("");
    // read in the param keys from signup.js
    const fields = route.params.paramKey; 

    async function handleConfirmSubmit() {
        try {
            // see if we've confirmed it 
            await Auth.confirmSignUp(fields.email, confirm);
            // do our sign in . pass in email and pw 
            await Auth.signIn(fields.email, fields.password);

            // in our app.js, we pass in set is authenticated . 
            // set our isauthenticated to true so user can access home screen 
            LogIn(true);
        } catch (e) {

        }
    }

    return (
        <View style= {styles.container}>
            <Text> Check your email for the verification code. </Text>
            <TextInput
            style={styles.input}
            onChangeText = {onChangeConfirm}
            value = {confirm}
            placeholder = "enter verification code"
            />

            <Button
                title = "Verify and sign in"
                onPess = {handleConfirmSubmit}
            />
        </View>
    )
}

export default ConfirmScreen;