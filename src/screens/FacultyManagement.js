// import React from 'react';
// import { View, Text,   StyleSheet} from 'react-native';





// const StudentManagement = () => (
//     <View>
//         <Text    style={styles.logo1}>Hiii</Text>
//     </View>
 
// );
// const styles = StyleSheet.create({
//     logo1:{
//         color:'black',

//     }
// })


// export default StudentManagement;


import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const students = [
  { name: 'Allary Hitesh', roll: '214420862852', attendance: '85%', status: 'Paid', contact: '9638520147' },
  { name: 'Chadla Rajesh', roll: '214420862150', attendance: '72%', status: 'Pending', contact: '9638520147' },
  // ...add more dummy data
];

const FacultyManagement = () => (
  <View style={styles.container}>
    <View style={styles.filters}>
      <TextInput placeholder="Course" style={styles.input} />
      <TextInput placeholder="Department" style={styles.input} />
      <TextInput placeholder="Year" style={styles.input} />
      <TextInput placeholder="Section" style={styles.input} />
      <TextInput placeholder="Search by roll number" style={styles.search} />
    </View>
    <ScrollView horizontal>
      <View>
        <View style={styles.rowHeader}>
          <Text style={styles.cell}>Name</Text>
          <Text style={styles.cell}>Roll Number</Text>
          <Text style={styles.cell}>Course, Year, Section</Text>
          <Text style={styles.cell}>Attendance</Text>
          <Text style={styles.cell}>Fees Status</Text>
          <Text style={styles.cell}>Contact</Text>
        </View>
        {students.map((student, idx) => (
          <View style={styles.row} key={idx}>
            <Text style={styles.cell}>{student.name}</Text>
            <Text style={styles.cell}>{student.roll}</Text>
            <Text style={styles.cell}>B.Tech CSE - 3rd Yr-A</Text>
            <Text style={[styles.cell, { color: student.attendance < '75%' ? 'green' : 'green' }]}>{student.attendance}</Text>
            <Text style={[styles.cell, { color: student.status === 'Paid' ? 'green' : 'green' }]}>{student.status}</Text>
            <Text style={styles.cell}>{student.contact}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  filters: { flexDirection: 'row', marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 8,
    marginRight: 10, width: 100, borderRadius: 5
  },
  search: {
    borderWidth: 1, borderColor: '#ccc', padding: 8,
    flex: 1, borderRadius: 5
  },
  rowHeader: { flexDirection: 'row', backgroundColor: '#d8bfd8', padding: 10 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', padding: 10 },
  cell: { width: 150, color: '#000' }
});

export default FacultyManagement;