
import React, { useState } from 'react';
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

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateFullName = (name) => {
    const fullNameRegex = /^[A-Z][a-zA-Z\s]*$/;
    return fullNameRegex.test(name);
  };

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

 const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return regex.test(password);
};


  const handleSignup = async () => {
    if (!fullName || !emailOrPhone || !password || !confirmPassword) {
      return Alert.alert('Error', 'All fields are required');
    }

    if (!validateFullName(fullName)) {
      return Alert.alert('Error', 'Full Name must contain only letters and start with a capital letter');
    }

    if (!validateEmailOrPhone(emailOrPhone)) {
      return Alert.alert('Error', 'Enter a valid email or 10-digit phone number');
    }

    if (!validatePassword(password)) {
      return Alert.alert(
        'Error',
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      );
    }

    if (password !== confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match');
    }
  
    try {
      const response = await fetch('http://192.168.29.58:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          emailOrPhone,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      Alert.alert('Success', data.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      Alert.alert('Signup Error', error.message);
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
        <Text style={styles.header}>Sign up</Text>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name"  placeholderTextColor="#000" value={fullName}
            onChangeText={setFullName}/>

        <Text style={styles.label}>Email/Phone</Text>
        <TextInput style={styles.input} placeholder="Enter your Email/Phone"  placeholderTextColor="#000"  value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            keyboardType="email-address"/>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"  placeholderTextColor="#000"
          secureTextEntry value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Confirm Password"  placeholderTextColor="#000"
          secureTextEntry value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* <TouchableOpacity style={styles.button} onPress={({handleSignup})=> navigation.navigate('Login')}> */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>

          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
         <Text style={{color:'black',textAlign:'center',paddingTop:20,fontSize: 15}}>Already have an account?<Text style={{color:'#006BFF'}} onPress={()=> navigation.navigate('Login')}> Login here </Text></Text>
      </View>
    </View>
    </View>
  );
};

export default SignupScreen;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
    marginBottom: 30,
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

