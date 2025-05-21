
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const ForgotPassword = ({ navigation }) => {
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
        <TextInput style={styles.input} placeholder="Enter your Email"  placeholderTextColor="#000" />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your New Password"  placeholderTextColor="#000"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Confirm Password"  placeholderTextColor="#000"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}  >
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

