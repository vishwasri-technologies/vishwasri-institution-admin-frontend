// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const tiles = [
  'Student Management', 'Faculty Management', 'Timetable Management',
  'Attendance Monitoring', 'Fee & Payments', 'Exam & Results',
  'Announcements', 'Feedback & Complaints', 'Academic Calendar'
];

const colors = ['#d4c2f4', '#c6c3f9', '#98c9f0', '#a6ecfa', '#c7f4e4', '#c4f5bd', '#f0f3b3', '#f9d2c0', '#f3b3b5'];

const HomeScreen = () => (
  <View style={styles.container}>
    {tiles.map((tile, index) => (
      <View key={index} style={[styles.tile, { backgroundColor: colors[index] }]}>
        <Text style={styles.text}>{tile}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, flexWrap: 'wrap', flexDirection: 'row', padding: 20 },
  tile: {
    width: '30%', height: 100, margin: '1.5%',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 10, elevation: 3
  },
  text: { fontSize: 16, fontWeight: 'bold' }
});

export default HomeScreen;