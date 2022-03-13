import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Landing/index.js'; 
import HomeScreen from './Home/index.js';
import LogIn from './LogIn/index.js';
import SignUp from './SignUp/index.js';
// import Amplify from 'aws-amplify';
// import awsConfig from './src/aws-exports';

// Amplify.configure(awsConfig);

// import { withAuthenticator } from 'aws-amplify-react-native';


const RootStack = createStackNavigator();

const App = () => {
    return ( 
    <NavigationContainer> 
        <RootStack.Navigator>
            <RootStack.Screen name="Landing" component={LandingScreen} />
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="LogIn" component={LogIn} />
            <RootStack.Screen name="SignUp" component={SignUp} />
        </RootStack.Navigator>
    </NavigationContainer>
    );
};
export default App;
// export default withAuthenticator(App);
