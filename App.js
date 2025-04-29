import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';


export default function App() {
  return (
  <AppNavigator/>
  );
}



// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import SignupScreen from './src/screens/SignUpScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import ForgotScreen from './src/screens/FogotPassword';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <SignupScreen /> 
//       <LoginScreen/>
//       <ForgotScreen/>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6', // Light gray background
//   },
// });



// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import SignupScreen from './src/screens/SignUpScreen';
// import LoginScreen from './src/screens/LoginScreen';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('Signup');

//   const navigateTo = (screenName) => {
//     setCurrentScreen(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       {currentScreen === 'Signup' ? (
//         <SignupScreen navigateToLogin={() => navigateTo('Login')} />
//       ) : (
//         <LoginScreen navigateToSignup={() => navigateTo('Signup')} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


