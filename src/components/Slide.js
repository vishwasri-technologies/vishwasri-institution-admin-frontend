
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const sections = [
  'Student Management',
  'Faculty Management',
  'Academic Calender',
  'Timetable Management',
  'Attendance Management',
  'Fee & Payments',
  'Exams & Results',
  'Announcements',
 'Manage Profiles',
  'Feedback & Complaints',
];

const Sidebar = ({ onSelectSection, selectedSection }) => (
  <View>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {sections.map(section => (
  <TouchableOpacity key={section} onPress={() => onSelectSection(section)}>
    <View style={selectedSection === section ? styles.selectedLink : null}>
      <Text style={styles.link}>{section}</Text>
    </View>
  </TouchableOpacity>
))}
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 10, width: 250, backgroundColor: '#02475e' },
  link: {
    color: 'white',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
  },
  
  selectedLink: {
    backgroundColor: '#91bcc4',
    width: '100%',
  },
  
});

export default Sidebar;
