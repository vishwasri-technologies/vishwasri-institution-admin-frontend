import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimeTableGrid from '../components/TimeTableGrid';

export default function FacultyTimeTable() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Timetable</Text>
      <TimeTableGrid mode="faculty" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});
