

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const initialStudents = [
  { name: 'Allary Hitesh', roll: '214420862852', totalFee: 1000, Paidamount: 702 },
  { name: 'Allu Lokesh', roll: '214420862658', totalFee: 1000, Paidamount: 968 },
  { name: 'Chadla Rajesh', roll: '214420862150', totalFee: 1000, Paidamount: 937 },
  { name: 'Dhis Suresh', roll: '214420862066', totalFee: 1000, Paidamount: 577 },
  { name: 'Eddy Tanesh', roll: '214420862058', totalFee: 1000, Paidamount: 633 },
  { name: 'Joss Umesh', roll: '214420862068', totalFee: 1000, Paidamount: 377 },
  { name: 'Karnal Yogesh', roll: '214420862000', totalFee: 1000, Paidamount: 312 },
  { name: 'Main Ganesh', roll: '214420862456', totalFee: 1000, Paidamount: 956 },
  { name: 'Soul Jesh', roll: '214420862321', totalFee: 1000, Paidamount: 4 },
  { name: 'Neel Sai', roll: '214420862377', totalFee: 1000, Paidamount: 111 },
  { name: 'Tanish Ravi', roll: '214420862178', totalFee: 1000, Paidamount: 867 },
  { name: 'Pavithra Devi', roll: '214420862491', totalFee: 1000, Paidamount: 505 },
  { name: 'Ravindra Kishore', roll: '214420862222', totalFee: 1000, Paidamount: 348 },
  { name: 'Shruthi Menon', roll: '214420862389', totalFee: 1000, Paidamount: 418 },
  { name: 'Vinod Krishna', roll: '214420862777', totalFee: 1000, Paidamount: 357 },
  { name: 'Gautham Roy', roll: '214420862990', totalFee: 1000, Paidamount: 36 },
];

const FeePayment = () => {
  const [students, setStudents] = useState(initialStudents.map(s => ({
    ...s,
    Pendingamount: s.totalFee - s.Paidamount,
    isEditing: false,
    nameInput: s.name,
    rollInput: s.roll,
    totalFeeInput: s.totalFee.toString(),
    paidInput: s.Paidamount.toString(),
  })));

  const toggleEdit = (index) => {
    setStudents(prev =>
      prev.map((s, i) =>
        i === index
          ? {
              ...s,
              isEditing: !s.isEditing,
              nameInput: s.name,
              rollInput: s.roll,
              totalFeeInput: s.totalFee.toString(),
              paidInput: s.Paidamount.toString(),
            }
          : s
      )
    );
  };

  const saveEdit = (index) => {
    setStudents(prev =>
      prev.map((s, i) => {
        if (i === index) {
          const newPaid = parseInt(s.paidInput) || 0;
          const newTotal = parseInt(s.totalFeeInput) || 0;
          return {
            ...s,
            name: s.nameInput,
            roll: s.rollInput,
            totalFee: newTotal,
            Paidamount: newPaid,
            Pendingamount: newTotal - newPaid,
            isEditing: false,
          };
        }
        return s;
      })
    );
  };

  const updateFieldInput = (index, field, value) => {
    setStudents(prev =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  };

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
        <DropDownPicker open={courseOpen} value={course} items={courseItems} setOpen={setCourseOpen} setValue={setCourse} setItems={setCourseItems} placeholder="Course" style={styles.dropdown} containerStyle={styles.dropdownContainer} zIndex={5000} />
        <DropDownPicker open={deptOpen} value={department} items={deptItems} setOpen={setDeptOpen} setValue={setDepartment} setItems={setDeptItems} placeholder="Department" style={styles.dropdown} containerStyle={styles.dropdownContainer} zIndex={4000} />
        <DropDownPicker open={yearOpen} value={year} items={yearItems} setOpen={setYearOpen} setValue={setYear} setItems={setYearItems} placeholder="Year" style={styles.dropdown} containerStyle={styles.dropdownContainer} zIndex={3000} />
        <DropDownPicker open={sectionOpen} value={section} items={sectionItems} setOpen={setSectionOpen} setValue={setSection} setItems={setSectionItems} placeholder="Section" style={styles.dropdown} containerStyle={styles.dropdownContainer} zIndex={2000} />

        <View style={styles.searchContainer}>
          <Image source={require('../assets/search.png')} style={styles.searchIconImage} resizeMode="contain" />
          <TextInput placeholder="Search by roll number" placeholderTextColor="gray" style={styles.searchInput} keyboardType="numeric" />
        </View>
      </View>

      <ScrollView vertical>
        <View>
          <View style={styles.rowHeader}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>ID</Text>
            <Text style={styles.cell}>Total Fee</Text>
            <Text style={styles.cell}>Paid Amount</Text>
            <Text style={styles.cell}>Pending Amount</Text>
            <Text style={styles.cell}>Action</Text>
          </View>

          {students.map((student, idx) => (
            <View style={styles.row} key={idx}>
              {student.isEditing ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={student.nameInput}
                    onChangeText={(val) => updateFieldInput(idx, 'nameInput', val)}
                  />
                  <TextInput
                    style={styles.input}
                    value={student.rollInput}
                    onChangeText={(val) => updateFieldInput(idx, 'rollInput', val)}
                  />
                  <TextInput
                    style={styles.input}
                    value={student.totalFeeInput}
                    onChangeText={(val) => updateFieldInput(idx, 'totalFeeInput', val)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    value={student.paidInput}
                    onChangeText={(val) => updateFieldInput(idx, 'paidInput', val)}
                    keyboardType="numeric"
                  />
                  <Text style={styles.cell}>
                    {parseInt(student.totalFeeInput || '0') - parseInt(student.paidInput || '0')}
                  </Text>
                  <Text style={[styles.cell, { color: 'blue' }]} onPress={() => saveEdit(idx)}>Save</Text>
                </>
              ) : (
                <>
                  <Text style={styles.cell}>{student.name}</Text>
                  <Text style={styles.cell}>{student.roll}</Text>
                  <Text style={styles.cell}>{student.totalFee}</Text>
                  <Text style={styles.cell}>{student.Paidamount}</Text>
                  <Text style={styles.cell}>{student.Pendingamount}</Text>
                  <Text style={[styles.cell, { color: 'blue' }]} onPress={() => toggleEdit(idx)}>Edit</Text>
                </>
              )}
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
  rowHeader: {
    flexDirection: 'row',
    backgroundColor: '#d8bfd8',
    padding: 10,
    width: wp('90%'),
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  cell: {
    width: 160,
    color: '#000',
  },
  input: {
    width: 160,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    paddingHorizontal: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    height: 50,
    width: 500,
    marginBottom: 10,
  },
  searchIconImage: {
    height: 20,
    width: 25,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    backgroundColor: '#f5f5f5',
    color: 'black',
  },
});

export default FeePayment;
