import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/FogotPassword';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name ="Forgot" component={ForgotPassword}/>
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




