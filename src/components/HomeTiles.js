// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const tiles = [
//   { label: 'Student Management', bg: '#d8b4fe' },
//   { label: 'Faculty Management', bg: '#a5b4fc' },
//   { label: 'Academic Calendar', bg: '#fca5a5' },
//   { label: 'Timetable Management', bg: '#93c5fd' },
//   { label: 'Attendance Monitoring', bg: '#a5f3fc' },
//   { label: 'Fee & Payments', bg: '#bbf7d0' },
//   { label: 'Exam & Results', bg: '#fcd5ce' },
//   { label: 'Announcements', bg: '#fef9c3' },
//   { label: 'Feedback & Complaints', bg: '#d9f99d' },
// ];

// const HomeTiles = () => {
//   return (
//     <View style={styles.container}>
//       {tiles.map((tile, index) => (
//         <TouchableOpacity key={index} style={[styles.tile, { backgroundColor: tile.bg }]}>
//           <Text style={styles.text}>{tile.label}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
//   tile: {
//     width: 150,
//     height: 100,
//     borderRadius: 10,
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//   },
//   text: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default HomeTiles;
