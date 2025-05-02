
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput,Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const students = [
  { name: 'Allary Hitesh', roll: '214420862852', attendance: '85%', status: 'Paid', contact: '9638520147' },
  { name: 'Allu Lokesh', roll: '214420862658', attendance: '90%', status: 'Paid', contact: '9638520147' },
  { name: 'Chadla Rajesh', roll: '214420862150', attendance: '72%', status: 'Pending', contact: '9638520147' },
  { name: 'Dhis Suresh', roll: '214420862066', attendance: '77%', status: 'Paid', contact: '9638520147' },
  { name: 'Eddy Tanesh', roll: '214420862058', attendance: '88%', status: 'Paid', contact: '9638520147' },
  { name: 'Joss Umesh', roll: '214420862068', attendance: '95%', status: 'Pending', contact: '9638520147' },
  { name: 'Karnal Yogesh', roll: '214420862000', attendance: '60%', status: 'Paid', contact: '9638520147' },
  { name: 'Main Ganesh', roll: '214420862456', attendance: '77%', status: 'Paid', contact: '9638520147' },
  { name: 'Soul Jesh', roll: '214420862321', attendance: '85%', status: 'Pending', contact: '9638520147' },
  { name: 'Neel Sai', roll: '214420862377', attendance: '83%', status: 'Paid', contact: '9638520147' },
  { name: 'Tanish Ravi', roll: '214420862178', attendance: '68%', status: 'Pending', contact: '9638520147' },
  { name: 'Pavithra Devi', roll: '214420862491', attendance: '91%', status: 'Paid', contact: '9638520147' },
  { name: 'Ravindra Kishore', roll: '214420862222', attendance: '59%', status: 'Pending', contact: '9638520147' },
  { name: 'Shruthi Menon', roll: '214420862389', attendance: '80%', status: 'Paid', contact: '9638520147' },
  { name: 'Vinod Krishna', roll: '214420862777', attendance: '73%', status: 'Pending', contact: '9638520147' },
  { name: 'Gautham Roy', roll: '214420862990', attendance: '88%', status: 'Paid', contact: '9638520147' },
  ];

const StudentManagement = () => {
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

  const [yearOpen, setYearOpen] = useState(false);
  const [year, setYear] = useState(null);
  const [yearItems, setYearItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ]);

  const [sectionOpen, setSectionOpen] = useState(false);
  const [section, setSection] = useState(null);
  const [sectionItems, setSectionItems] = useState([
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
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
        <DropDownPicker
          open={yearOpen}
          value={year}
          items={yearItems}
          setOpen={setYearOpen}
          setValue={setYear}
          setItems={setYearItems}
          placeholder="Year"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={3000}
        />
        <DropDownPicker
          open={sectionOpen}
          value={section}
          items={sectionItems}
          setOpen={setSectionOpen}
          setValue={setSection}
          setItems={setSectionItems}
          placeholder="Section"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          zIndex={2000}
        />
       <View style={styles.searchContainer}>
 <Image
    source={require('../assets/search.png')}
    style={styles.searchIconImage}
    resizeMode="contain"
  />
  <TextInput
    placeholder="Search by roll number"
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
              <Text style={[styles.cell, { color: student.attendance < '75%' ? 'red' : 'green' }]}>{student.attendance}</Text>
              <Text style={[styles.cell, { color: student.status === 'Paid' ? 'green' : 'red' }]}>{student.status}</Text>
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

export default StudentManagement;
