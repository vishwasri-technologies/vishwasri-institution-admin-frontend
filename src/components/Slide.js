// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const items = [
//   'Student Management',
//   'Faculty Management',
//   'Academic Calendar',
//   'Timetable Management',
//   'Attendance Monitoring',
//   'Fee Payments',
//   'Exam Results',
//   'Announcements',
//   'Feedback Complaints',
// ];

// const Sidebar = ({ setSelectedScreen }) => (
//   <View style={styles.sidebar}>
//     {items.map((item) => (
//       <TouchableOpacity key={item} onPress={() => setSelectedScreen(item.replace(/\s/g, ''))}>
//         <Text style={styles.item}>{item}</Text>
//       </TouchableOpacity>
//     ))}
//   </View>
// );

// const styles = StyleSheet.create({
//   sidebar: {
//     width: 220,
//     backgroundColor: '#1D7071',
//     padding: 10,
//   },
//   item: {
//     color: 'white',
//     fontSize: 16,
//     marginVertical: 10,
//   },
// });

// export default Sidebar;




import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';


const sections = [
  'Student Management',
  'Faculty Management',
  'Academic Calender',
  'Timetable Management',
  'Attendance Management',
  'Fee & Payments',
  'Exams & Results',
  'Announcements',
  'Feedback & Complaints',
];

const Sidebar = ({ onSelectSection }) => (
  
  <View>
  <View style={styles.container}>
  <ScrollView>
    {sections.map(section => (
      <TouchableOpacity key={section} onPress={() => onSelectSection(section)}>
        <Text style={styles.link}>{section}</Text>
      </TouchableOpacity>
    ))}
    </ScrollView>

  </View>

  </View>

);

const styles = StyleSheet.create({
  container: { padding: 10, width:250,backgroundColor:'#02475e',  },
  link: {
    color: 'white',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
 
  },
});

export default Sidebar;
