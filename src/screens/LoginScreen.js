import React,  { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';


const LoginScreen = ({navigation }) => {
   const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleLogin = async () => {
    if (!emailOrPhone || !password) {
      return Alert.alert('Error', 'All fields are required');
    }

    if (!validateEmailOrPhone(emailOrPhone)) {
      return Alert.alert('Error', 'Enter a valid email or 10-digit phone number');
    }

    try {
      const response = await fetch('http://192.168.29.58:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      Alert.alert('Success', data.message);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={styles.mm}>
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightPanel}>
        <Text style={styles.header}>Log in</Text>
        <Text style={{color:'black',textAlign:'center',fontSize: 15,  marginBottom: 25,}}>Login to your account </Text>

        <Text style={styles.label}>Email/Phone</Text>
        <TextInput style={styles.input} placeholder="Enter your Email/Phone"  placeholderTextColor="#000" 
        value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            keyboardType="email-address"/>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"  placeholderTextColor="#000"
          secureTextEntry value={password}
          onChangeText={setPassword}
        />


<TouchableOpacity style={styles.forgotPasswordButton} onPress={()=> navigation.navigate('Forgot')}>
  <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>

        </TouchableOpacity>
             <Text style={{color:'black',textAlign:'center',paddingTop:20,fontSize: 15}}>Don't have an account?<Text style={{color:'#006BFF'}} onPress={()=> navigation.navigate('Signup')}> SignUp Here </Text></Text>
      </View>
    </View>
    </View>
  );
};

export default LoginScreen;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#1d7a8c',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
    container: {
    flexDirection: 'row',
    width: screenWidth,
    height: '97%',
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
    paddingLeft:50,
    paddingRight:50,
    paddingbottom:70,

  },
  leftPanel: {
    width: '40%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  logo: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },

  techText: {
    fontSize: 18,
    color: '#333',
  },
  rightPanel: {
    width: '60%',
    padding: 40,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1d7a8c',
    marginBottom:7,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    color:'black',
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1d7a8c',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#117091',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
