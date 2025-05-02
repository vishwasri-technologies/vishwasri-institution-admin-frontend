

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput,Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const students = [
  { name: 'Allary Hitesh', ID: '214420862852', attendance: '85%', contact: '9638520147' },
  { name: 'Allu Lokesh', ID: '214420862658', attendance: '90%',  contact: '9638520147' },
  { name: 'Chadla Rajesh', ID: '214420862150', attendance: '72%', contact: '9638520147' },
  { name: 'Dhis Suresh', ID: '214420862066', attendance: '77%',  contact: '9638520147' },
  { name: 'Eddy Tanesh', ID: '214420862058', attendance: '88%',  contact: '9638520147' },
  { name: 'Joss Umesh', ID: '214420862068', attendance: '95%',contact: '9638520147' },
  { name: 'Karnal Yogesh', ID: '214420862000', attendance: '60%',  contact: '9638520147' },
  { name: 'Main Ganesh', ID: '214420862456', attendance: '77%',  contact: '9638520147' },
  { name: 'Soul Jesh', ID: '214420862321', attendance: '85%', contact: '9638520147' },
  
  ];

const FacultyManagement = () => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([
    { label: 'M.Tech', value: 'M.Tech' },
    { label: 'MBBS', value: 'MBBS' },
    { label: 'B.Tech', value: 'B.Tech' },
 
  ]);

  const [deptOpen, setDeptOpen] = useState(false);
  const [department, setDepartment] = useState(null);
  const [deptItems, setDeptItems] = useState([
    { label: 'CSE', value: 'CSE' },
    { label: 'ECE', value: 'ECE' },
    { label: 'IT', value: 'IT' },
    { label: 'EEE', value: 'EEE' },
  ]);



  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <DropDownPicker
          open={courseOpen}
          value={course}
          items={courseItems}
          setOpen={setCourseOpen}
          setValue={setCourse}
          setItems={setCourseItems}
          placeholder="Course"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={5000}
        />
        <DropDownPicker
          open={deptOpen}
          value={department}
          items={deptItems}
          setOpen={setDeptOpen}
          setValue={setDepartment}
          setItems={setDeptItems}
          placeholder="Department"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={4000}
        />

<View style={styles.searchContainer}>
  <Image
    source={require('../assets/search.png')}
    style={styles.searchIconImage}
    resizeMode="contain"
  />
  <TextInput
    placeholder="Search by ID"
    placeholderTextColor="gray"
    style={styles.searchInput}
    keyboardType="numeric"
  />
</View>

      </View>

      <ScrollView vertical>
        <View>
          <View style={styles.rowHeader}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>ID</Text>
            <Text style={styles.cell}>Department</Text>
          <Text style={styles.cell}>Attendance</Text>
            <Text style={styles.cell}>Contact</Text>
          </View>
          {students.map((student, idx) => (
            <View style={styles.row} key={idx}>
              <Text style={styles.cell}>{student.name}</Text>
              <Text style={styles.cell}>{student.ID}</Text>
              <Text style={styles.cell}>CSE</Text>
              <Text style={[styles.cell, { color: student.attendance < '75%' ? 'red' : 'green' }]}>{student.attendance}</Text>
              <Text style={styles.cell}>{student.contact}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    zIndex: 9999,
  },
  dropdownContainer: {
    width: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
  },
  searchIconImage:{
    height:20,
    width:25,

  },
  rowHeader: {
    flexDirection: 'row',
    backgroundColor: '#d8bfd8',
    padding: 10,
    width:wp('90%'),

  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  cell: {
    width: 200,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    height: 50,
    width:500,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    // width: 150,
    backgroundColor: '#f5f5f5',
    color:'black',

  },
});

export default FacultyManagement;
