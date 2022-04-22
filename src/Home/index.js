import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
});

const HomeScreen = ({ navigation, LogIn }) => {
    async function handleSubmit(){
        LogIn(false);
    }

    return (
        <View style={styles.container}>
            <Text>Protected Home Screen</Text>
            <Text>much protected text ! personal user dashboard wow :0</Text>
            <Button
                title = "log out"
                onPress = {handleSubmit}
            />
        </View> 
    );
};

export default HomeScreen;