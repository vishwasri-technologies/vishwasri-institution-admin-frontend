import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Navbar = () => (
  <View style={styles.navbar}>
       <Image
             source={require('../assets/crop-logo.jpg')}
             style={styles.logo}
             resizeMode="contain"
           />

  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    elevation: 4,
    // color:'black',
  },
  logo: {
   height:190,
   width:180,
  },
});

export default Navbar;
