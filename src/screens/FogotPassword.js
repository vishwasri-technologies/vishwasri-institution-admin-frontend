
import React, { useState }  from 'react';
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

const ForgotPassword = ({ navigation }) => {
 const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSavePassword = async () => {
     const trimmedEmail = email.trim();
    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    console.log({ trimmedEmail, trimmedNewPassword, trimmedConfirmPassword }); // Debug - remove later

    if (!trimmedEmail || !trimmedNewPassword || !trimmedConfirmPassword) {
      return Alert.alert('Error', 'All fields are required');
    }

    if (!validateEmail(trimmedEmail)) {
      return Alert.alert('Error', 'Please enter a valid email');
    }

    if (trimmedNewPassword.length < 6) {
      return Alert.alert('Error', 'Password must be at least 6 characters');
    }

    if (trimmedNewPassword !== trimmedConfirmPassword) {
      return Alert.alert('Error', 'Passwords do not match');
    }

    try {
      const response = await fetch('http://192.168.29.58:5000/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: trimmedEmail,
          newPassword: trimmedNewPassword,
          confirmPassword: trimmedConfirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Password reset failed');
      }

       Alert.alert('Success', data.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
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
        <Text style={styles.header}>Create new password</Text>


        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your Email" 
         placeholderTextColor="#000" 
         value={email}
         onChangeText={setEmail}
         autoCapitalize="none"
          keyboardType="email-address"
         />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your New Password"  placeholderTextColor="#000"
          secureTextEntry value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Confirm Password"  placeholderTextColor="#000"
          secureTextEntry value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

         <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
            <Text style={styles.buttonText}>Save Password</Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default ForgotPassword;

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

