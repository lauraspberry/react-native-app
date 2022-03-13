import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Landing/index.js'; 
import HomeScreen from './Home/index.js';
import LogInScreen from './LogIn/index.js';
import SignUpScreen from './SignUp/index.js';
import ConfirmScreen from './Confirm/index.js';
// import Amplify from 'aws-amplify';
// import awsConfig from './src/aws-exports';

// Amplify.configure(awsConfig);

// import { withAuthenticator } from 'aws-amplify-react-native';


const RootStack = createStackNavigator();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return ( 
    <NavigationContainer> 
        <RootStack.Navigator>
            {isAuthenticated ? (
                    <RootStack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                    <RootStack.Screen name="Landing" component={LandingScreen} />
                    <RootStack.Screen name = "LogIn"> 
                        {(props) => (
                            <LogInScreen {...props} LogIn = {setIsAuthenticated} />
                        )}
                    </RootStack.Screen>
                    <RootStack.Screen name = "SignUp"> 
                        {(props) => (
                            <SignUpScreen {...props} LogIn = {setIsAuthenticated} />
                        )}
                    </RootStack.Screen>
                    <RootStack.Screen name = "Confirm"> 
                        {(props) => (
                            <ConfirmScreen {...props} LogIn = {setIsAuthenticated} />
                        )}
                    </RootStack.Screen>
                    </>
                )}
        </RootStack.Navigator>
    </NavigationContainer>
    );
};
export default App;
// export default withAuthenticator(App);
