
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AttendancebyClass from './AttendancebyClass';
import FacultyAttendance from './FacultyAttendance';

const AttendanceManagement = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Computer Science', value: 'CSE' },
    { label: 'Electrical Engineering', value: 'EEE' },
    { label: 'Mechanical Engineering', value: 'MEC' },
  ]);

  const [subView, setSubView] = useState('main'); 

  if (subView === 'class') return <AttendancebyClass />;
  if (subView === 'faculty') return <FacultyAttendance />;

  return (
    <View style={styles.container}>
      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select Course"
          style={styles.picker}
          dropDownContainerStyle={styles.dropdownContainer}
          listItemContainerStyle={styles.listItem}
          placeholderStyle={styles.placeholder}
        />
      </View>

      <TouchableOpacity style={[styles.card, { backgroundColor: '#d6c3ff' }]}>
        <Text style={styles.label}>Total Present Today</Text>
        <Text style={styles.bigText}>955</Text>
      </TouchableOpacity>

      <View style={styles.yearRow}>
        {[
          { year: 'First Year', percent: '85%', bg: '#b6b5f9' },
          { year: 'Second Year', percent: '92%', bg: '#add8f7' },
          { year: 'Third Year', percent: '89%', bg: '#a4f4f9' },
          { year: 'Fourth Year', percent: '94%', bg: '#c7faee' },
        ].map(({ year, percent, bg }) => (
          <View key={year} style={[styles.cardSmall, { backgroundColor: bg }]}>
            <Text style={styles.label}>{year}</Text>
            <Text style={styles.percent}>{percent}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: '#f5d5bc' }]}
        onPress={() => setSubView('class')}
      >
        <Text style={styles.btnText}>View attendance by Class / Section</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: '#e9f6bb' }]}
        onPress={() => setSubView('faculty')}
      >
        <Text style={styles.btnText}>Faculty attendance & Leave Management</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  dropdownWrapper: { marginBottom: 15, zIndex: 1 },
  picker: { borderColor: '#ccc', borderRadius: 8, height: 50 },
  dropdownContainer: { borderColor: '#ccc', borderRadius: 8, marginTop: 2 },
  placeholder: { color: '#666', fontSize: 16 },
  listItem: { height: 40, justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: '500', color: '#000', textAlign: 'center' },
  bigText: { fontSize: 36, fontWeight: 'bold', color: '#000', textAlign: 'center', marginTop: 20 },
  percent: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  yearRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: 30,
    height: 90,
  },
  card: {
    padding: 20,
    width: 200,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  cardSmall: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  actionBtn: {
    marginTop: 20,
    padding: 18,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
  },
  btnText: { fontSize: 16, fontWeight: '600', color: '#000' },
  arrow: { fontSize: 20, color: '#000', marginLeft: 10 },
});

export default AttendanceManagement;
