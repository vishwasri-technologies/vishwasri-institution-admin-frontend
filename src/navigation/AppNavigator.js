import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/FogotPassword';
import Home from '../screens/Home';
import TimetableScreen from '../screens/TimetableScreen';
import AcademicCalender from '../screens/AcademicCalender';

import AttendancebyClass from '../screens/AttendancebyClass';

import StudentProfiles from '../screens/ManageProfiles';
import FacultyProfiles from '../screens/FacultyProfiles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotPassword}  />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="AcademicCalender" component={AcademicCalender} />
        <Stack.Screen name="TimetableScreen" component={TimetableScreen} />
        <Stack.Screen name="AttendancebyClass" component={AttendancebyClass} />
        <Stack.Screen name=" StudentProfiles" component={StudentProfiles} />
        <Stack.Screen name=" FacultyProfiles" component={FacultyProfiles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
